import React from "react";

const ChatInput = ({ onSendMessage, userInput, setUserInput }) => {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        className="flex-grow p-3 text-black rounded-lg"
        placeholder="Type your message..."
      />
      <button
        onClick={onSendMessage}
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
