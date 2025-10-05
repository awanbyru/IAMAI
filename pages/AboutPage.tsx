
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary dark:text-gray-100">About IAMAI</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
        <p className="text-center text-xl text-gray-600 dark:text-gray-300">
          Exploring the frontiers of Artificial Intelligence, one prompt at a time.
        </p>

        <section>
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p>
            IAMAI was born from a fascination with the creative potential of Artificial Intelligence. Our mission is to demystify the world of AI prompting and empower enthusiasts, artists, developers, and writers to unlock groundbreaking results. We believe that a well-crafted prompt is the key to transforming a powerful tool into a true creative partner.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Meet the Author - awanbyru</h2>
          <p>
            Hi, I'm awanbyru, the founder and primary author behind IAMAI. With a background in technology and a passion for digital art, I found myself captivated by the rise of generative AI. This blog is my platform to share experiments, tutorials, and insights gathered from countless hours spent collaborating with AI models. My goal is to create a community where we can all learn and grow together in this exciting new field.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p>
            We envision a future where human creativity and artificial intelligence work in seamless harmony. IAMAI aims to be at the forefront of this evolution, providing high-quality content, curated resources, and a space for discussion. Whether you're a seasoned prompt engineer or just starting your journey, we're here to guide and inspire you.
          </p>
        </section>

        <p className="text-center font-semibold pt-4 border-t dark:border-gray-600">
            Thank you for joining us on this adventure.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
