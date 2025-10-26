"use client"

import { useState } from "react"
import { X, Send } from "lucide-react"
import { RiRobot2Line } from 'react-icons/ri';

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative bg-gradient-to-r from-green-500 to-green-700 text-white p-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open chat"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <RiRobot2Line size={28} className="transition-transform group-hover:rotate-12" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-green-400 animate-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <RiRobot2Line size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Sweet Assistant</h3>
                <p className="text-xs text-white/90">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-white to-green-100">
            <div className="space-y-4">

              {/* Bot Message */}
              <div className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-500">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <RiRobot2Line size={16} className="text-green-800" />
                </div>
                <div className="flex-1">
                  <div className="bg-green-200 text-green-900 p-4 rounded-2xl rounded-tl-sm shadow-sm">
                    <p className="text-sm leading-relaxed">
                      👋 Welcome to our bakery! How can I help you today? Whether you're looking for custom cakes,
                      pastries, or have questions about our menu, I'm here to assist!
                    </p>
                  </div>
                  <p className="text-xs text-green-700 mt-2 ml-1">Just now</p>
                </div>
              </div>

              {/* User Message */}
              <div className="flex gap-3 justify-end animate-in fade-in slide-in-from-right-2 duration-500 delay-300">
                <div className="flex-1 flex flex-col items-end">
                  <div className="bg-green-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm max-w-[85%]">
                    <p className="text-sm leading-relaxed">I'd love to order a custom birthday cake!</p>
                  </div>
                  <p className="text-xs text-green-700 mt-2 mr-1">Just now</p>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex gap-3 animate-in fade-in slide-in-from-left-2 duration-500 delay-500">
                <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <RiRobot2Line size={16} className="text-green-800" />
                </div>
                <div className="flex-1">
                  <div className="bg-green-200 text-green-900 p-4 rounded-2xl rounded-tl-sm shadow-sm">
                    <p className="text-sm leading-relaxed">
                      🎂 Wonderful! I'd be happy to help you create the perfect birthday cake. What flavor and size are
                      you thinking of?
                    </p>
                  </div>
                  <p className="text-xs text-green-700 mt-2 ml-1">Just now</p>
                </div>
              </div>

            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-green-400 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-green-100 border-0 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow placeholder:text-green-700"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && message.trim()) {
                    setMessage("")
                  }
                }}
              />
              <button
                onClick={() => message.trim() && setMessage("")}
                disabled={!message.trim()}
                className="bg-gradient-to-r from-green-500 to-green-700 text-white px-5 py-3 rounded-xl hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md active:scale-95 flex items-center justify-center"
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-xs text-green-700 text-center mt-3">Powered by Sweet AI ✨</p>
          </div>

        </div>
      )}
    </div>
  )
}
