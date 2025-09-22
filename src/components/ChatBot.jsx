// src/components/ChatBot.jsx
import React, { useState } from 'react';
import { FaComments } from 'react-icons/fa';

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => setOpen(o => !o);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages(m => [...m, userMsg]);
    setInput('');

    try {
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      setMessages(m => [...m, { from: 'bot', text: 'This is a dummy reply.' }]);
    } catch {
      setMessages(m => [...m, { from: 'bot', text: 'Whoops! Something went wrong.' }]);
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <div
        className="fixed bottom-5 right-5 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        onClick={toggleChat}
      >
        <FaComments size={24} />
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-5 w-80 h-[400px] flex flex-col bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 font-semibold">
            <span>ChatBot</span>
            <button className="text-2xl leading-none" onClick={toggleChat}>
              &times;
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto bg-gray-100 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[75%] px-3 py-2 rounded-lg ${
                  m.from === 'user'
                    ? 'self-end bg-blue-600 text-white'
                    : 'self-start bg-gray-300 text-black'
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex border-t border-gray-300">
            <input
              className="flex-1 px-3 py-2 focus:outline-none"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message…"
            />
            <button
              className="px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
