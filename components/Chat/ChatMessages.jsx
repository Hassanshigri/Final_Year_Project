import { motion } from "framer-motion";

const Loader = () => (
  <div className="flex justify-center items-center space-x-2">
    <div className="w-8 h-8 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
    <span className="text-white">Loading...</span>
  </div>
);

export default function ChatMessages({ messages, loading }) {
  return (
    <motion.div
      className="space-y-4 overflow-y-auto flex-1 p-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <div className="flex justify-center items-center py-6">
          <Loader />
        </div>
      ) : (
        messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ x: message.sender === "user" ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex items-start space-x-2 ${
              message.sender === "user"
                ? "justify-end ml-auto"
                : "justify-start"
            }`}
          >
            {message.sender === "bot" && (
              <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
            )}

            <div
              className={`p-4 rounded-lg max-w-md w-auto flex-shrink-0 ${
                message.sender === "bot"
                  ? "bg-gray-800 text-[#456ba8]"
                  : "bg-[#456ba8] text-white"
              }`}
            >
              {message.sender === "user" && (
                <div className="text-gray-400">{message.question}</div>
              )}
              {message.text}
            </div>
          </motion.div>
        ))
      )}
    </motion.div>
  );
}
