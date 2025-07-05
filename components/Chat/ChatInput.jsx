import React, { useState } from "react";
import { FiSend, FiImage } from "react-icons/fi";

const ChatInput = ({ onSendMessage, userInput, setUserInput }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="relative max-w-5xl flex items-center gap-1 p-1 bg-gray-800 rounded-xl shadow-lg border border-gray-700">

      <div className="flex-grow relative">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`w-full p-3 pr-12 bg-gray-700 text-white rounded-lg focus:outline-none transition-all ${
            isFocused ? 'ring-2 ring-purple-500' : ''
          }`}
          placeholder="Explain your prompt..."
        />
      </div>

      <button
        onClick={onSendMessage}
        disabled={!userInput.trim()}
        className={`flex items-center justify-center p-3 rounded-lg transition-all ${
          userInput.trim()
            ? 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
        }`}
      >
        <FiSend size={20} />
      </button>
    </div>
  );
};

export default ChatInput;