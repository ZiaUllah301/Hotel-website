import React, { useState } from 'react';

const Feedback = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

  };


  const handleButtonClick = () => {

    alert('Button clicked!');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
        We'll love to hear your feedback. Kindly send us a message:
      </h2>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:outline-blue-400"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:outline-blue-400"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:outline-blue-500"
            placeholder="Type Your Message"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 text-white w-full py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleButtonClick}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Feedback;
