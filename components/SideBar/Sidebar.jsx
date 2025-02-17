import { motion } from "framer-motion";

export default function Sidebar({ chats = [], isOpen, toggleSidebar }) {
  // Filter chats to show only user (question) messages
  const questionChats = chats.filter((chat) => chat.sender === "user");

  return (
    <motion.aside
      initial={{ x: 0 }}
      animate={{ x: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.5 }}
      className="fixed inset-y-0 left-0 w-[20%] bg-[#2b2b30] text-white p-4 space-y-4 shadow-lg z-20"
    >
      <h2 className="text-xl font-bold mt-12">Saved Chats</h2>
      <ul className="space-y-2 overflow-y-auto max-h-[calc(100vh-150px)]">
        {questionChats.length > 0 ? (
          questionChats.map((chat, index) => (
            <li
              key={index}
              className="p-3 bg-gray-800 rounded-lg hover:bg-[#d2a0df] transition cursor-pointer"
            >
              {chat.text} {/* Display the user prompt */}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No questions available</li>
        )}
      </ul>
    </motion.aside>
  );
}
