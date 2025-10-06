import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

// Define message type
interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const ChatbotPage: React.FC = () => {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [chat, setChat] = useState<Chat | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini AI Chat
  useEffect(() => {
    try {
      if (!process.env.API_KEY) {
        throw new Error("API_KEY is not set.");
      }
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: 'You are a friendly and helpful AI assistant for the IAMAI blog. Your name is Awan. You should answer in Indonesian. Be concise and helpful. You know about the blog posts and can summarize them if asked.',
        },
      });
      setChat(chatSession);
      setChatHistory([{ role: 'model', text: 'Halo! Saya Awan, asisten AI Anda. Ada yang bisa saya bantu terkait AI atau artikel di blog ini?' }]);
    } catch (e: any) {
      console.error(e);
      setError(`Gagal menginisialisasi Asisten AI: ${e.message || 'Error tidak diketahui.'}`);
    }
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || isLoading || !chat) return;

    const userMessage: ChatMessage = { role: 'user', text: userInput };
    setChatHistory(prev => [...prev, userMessage]);
    const currentInput = userInput;
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await chat.sendMessage({ message: currentInput });
      const modelMessage: ChatMessage = { role: 'model', text: response.text };
      setChatHistory(prev => [...prev, modelMessage]);
    } catch (e) {
      console.error(e);
      const errorMessage = 'Maaf, terjadi kesalahan saat berkomunikasi dengan AI. Silakan coba lagi.';
      setError(errorMessage);
      setChatHistory(prev => [...prev, { role: 'model', text: errorMessage }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Asisten AI' },
  ];

  return (
    <>
      <MetaTags
        title="Asisten AI"
        description="Berinteraksi dengan Asisten AI kami untuk mendapatkan jawaban, ringkasan artikel, atau bantuan terkait AI dan rekayasa prompt."
        canonicalUrl={`${window.location.origin}/chatbot`}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <div className="flex flex-col h-[calc(100vh-12rem)] max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <header className="p-4 border-b dark:border-gray-700">
          <h1 className="text-xl font-bold text-center text-primary dark:text-gray-100">Asisten AI - Awan</h1>
        </header>

        <main ref={chatContainerRef} className="flex-1 p-6 space-y-4 overflow-y-auto">
          {chatHistory.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md p-3 rounded-lg ${message.role === 'user' ? 'bg-secondary text-white' : 'bg-gray-100 dark:bg-gray-700 text-text-main dark:text-gray-200'}`}>
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-md p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
                <div className="flex items-center space-x-1">
                  <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          )}
          {error && !isLoading && (
            <div className="flex justify-start">
                <div className="max-w-md p-3 rounded-lg bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300">
                    <p className="text-sm">{error}</p>
                </div>
            </div>
          )}
        </main>
        
        <footer className="p-4 border-t dark:border-gray-700">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={isLoading ? "Awan sedang berpikir..." : "Ketik pesan Anda..."}
              className="flex-1 w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent sm:text-sm dark:text-white dark:placeholder-gray-400"
              disabled={isLoading || !chat}
              aria-label="Pesan obrolan"
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim() || !chat}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-white hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed"
              aria-label="Kirim pesan"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </form>
        </footer>
      </div>
    </>
  );
};

export default ChatbotPage;
