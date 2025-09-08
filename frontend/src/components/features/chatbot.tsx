import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

import { RiRobot2Line } from 'react-icons/ri';

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <RiRobot2Line size={30} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-green-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-semibold">AI Chatbot</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-3 overflow-y-auto text-sm text-gray-700">
            <div className="mb-2">
              <p className="bg-gray-100 p-2 rounded-lg inline-block">👋 Hi! How can I help you today?</p>
            </div>
            {/* You can map messages here later */}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none"
            />
            <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
