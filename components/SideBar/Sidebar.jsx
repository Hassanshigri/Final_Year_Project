import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiMessageSquare } from "react-icons/fi";

export default function Sidebar({ chats = [], isOpen, toggleSidebar }) {
  const questionChats = chats.filter((chat) => chat.sender === "user");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -320 }}
          animate={{ x: 0 }}
          exit={{ x: -320 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 left-0 w-72 bg-gray-900 text-white p-5 shadow-xl z-20 border-r border-gray-800"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold flex items-center gap-12">
              <FiMessageSquare className="text-purple-500" />
              Chat History
            </h2>
            {/* <button
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400 hover:text-white"
            >
              <FiChevronLeft size={20} />
            </button> */}
          </div>

          {/* Chat List */}
          <ul className="space-y-3 overflow-y-auto max-h-[calc(100vh-150px)] pr-2">
            {questionChats.length > 0 ? (
              questionChats.map((chat, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors cursor-pointer border border-gray-700 hover:border-purple-500/30 shadow-sm"
                >
                  <p className="text-gray-300 line-clamp-2">{chat.text}</p>
                  <div className="mt-2 text-xs text-gray-500 flex justify-end">
                    {new Date(chat.timestamp || Date.now()).toLocaleTimeString()}
                  </div>
                </motion.li>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-40 text-gray-500"
              >
                <FiMessageSquare size={40} className="mb-2 opacity-30" />
                <p>No chat history yet</p>
              </motion.div>
            )}
          </ul>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-800 text-center text-sm text-gray-500">
            {questionChats.length} saved {questionChats.length === 1 ? "chat" : "chats"}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}