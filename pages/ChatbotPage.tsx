import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

// Define message structure
interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const ChatbotPage: React.FC = () => {
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const chatRef = useRef<Chat | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize the chat session
  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      chatRef.current = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: 'You are IAMAI, a friendly and helpful AI assistant for the awanbyru blog. You are knowledgeable about AI, prompt engineering, and creative technology. Keep your answers concise and helpful.',
        },
      });
      // Initial greeting from the AI
      setHistory([{ role: 'model', text: 'Halo! Saya IAMAI, asisten AI Anda. Apa yang ingin Anda diskusikan tentang AI atau rekayasa prompt hari ini?' }]);
    } catch (e) {
        console.error("Failed to initialize Gemini chat:", e);
        setError("Gagal menginisialisasi sesi chat. Pastikan API Key Anda sudah benar.");
    }
  }, []);

  // Auto-scroll to the bottom of the chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: ChatMessage = { role: 'user', text: input.trim() };
    setHistory(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);
    
    // Add a placeholder for the model's response
    setHistory(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const chat = chatRef.current;
      const response = await chat.sendMessageStream({ message: userMessage.text });

      for await (const chunk of response) {
        const chunkText = chunk.text;
        setHistory(prev => {
          const newHistory = [...prev];
          const lastMessage = newHistory[newHistory.length - 1];
          if (lastMessage.role === 'model') {
            lastMessage.text += chunkText;
          }
          return newHistory;
        });
      }
    } catch (e) {
      console.error("Error sending message:", e);
      const errorMessage = 'Maaf, terjadi kesalahan. Silakan coba lagi nanti.';
      setError(errorMessage);
       setHistory(prev => {
          const newHistory = [...prev];
          const lastMessage = newHistory[newHistory.length - 1];
          if (lastMessage.role === 'model' && lastMessage.text === '') {
            lastMessage.text = errorMessage;
          }
          return newHistory;
        });
    } finally {
      setIsLoading(false);
    }
  };

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Chatbot AI' },
  ];

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );

  const BotIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
      <MetaTags
        title="Chatbot AI"
        description="Berinteraksi dengan asisten AI kami, IAMAI. Ajukan pertanyaan tentang rekayasa prompt, AI, atau topik lain yang dibahas di blog."
        canonicalUrl={`${window.location.origin}/chatbot`}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex flex-col h-[70vh] max-w-3xl mx-auto bg-surface dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700">
        {/* Chat history */}
        <div ref={chatContainerRef} className="flex-1 p-6 space-y-4 overflow-y-auto">
          {history.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <BotIcon/>
                </div>
              )}
              <div className={`max-w-md p-3 rounded-lg ${msg.role === 'user' ? 'bg-secondary text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 text-text-main dark:text-gray-200 rounded-bl-none'}`}>
                {msg.text ? <p className="whitespace-pre-wrap">{msg.text}</p> : <div className="typing-indicator"><span></span><span></span><span></span></div> }
              </div>
              {msg.role === 'user' && (
                 <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                  <UserIcon />
                </div>
              )}
            </div>
          ))}
           {error && <p className="text-center text-red-500 text-sm">{error}</p>}
        </div>

        {/* Input area */}
        <div className="p-4 border-t dark:border-gray-700">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey ? (e.preventDefault(), handleSendMessage()) : null}
              placeholder="Ketik pesan Anda di sini..."
              disabled={isLoading}
              className="w-full py-3 pl-4 pr-16 bg-gray-100 dark:bg-gray-700 border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
              aria-label="Pesan obrolan"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="absolute inset-y-1 right-1 flex items-center justify-center w-10 h-10 text-white bg-secondary rounded-full transform transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
              aria-label="Kirim pesan"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotPage;
