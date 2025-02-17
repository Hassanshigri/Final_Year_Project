"use client";

import { useState } from "react";
import FontSelector from "@/components/Settings/FontSelector";
import ColorPaletteSelector from "@/components/Settings/ColorPaletteSelector";
import FileUploader from "@/components/Settings/FileUploader";
import ChatMessages from "@/components/Chat/ChatMessages";
import ChatInput from "@/components/Chat/ChatInput";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Home() {
  const [chats, setChats] = useState([]);
  const [primaryColor, setPrimaryColor] = useState("#511b1b"); // Default primary color
  const [secondaryColor, setSecondaryColor] = useState("#000"); // Default secondary color
  const [fontFamily, setFontFamily] = useState("Roboto"); // Default font family
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false); // Track loading state
  const [userInput, setUserInput] = useState(""); // Store user input

  const fetchAIResponse = async (message, imageBase64) => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/v1/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, imageBase64, primaryColor, secondaryColor, fontFamily }),
      });
      if (!response.ok) throw new Error("Failed to fetch AI response");
      const data = await response.json();
      return { text: data.message, sender: "bot" };
    } catch (error) {
      return { text: "Something went wrong. Please try again later.", sender: "bot" };
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (userInput.trim() || uploadedImage) {
      try {
        // Add the user message to the chats state first
        const userMessage = { id: Date.now(), text: userInput, sender: "user" };
        setChats((prev) => [...prev, userMessage]);

        // Send the request to the backend
        const aiResponse = await fetchAIResponse(userInput, uploadedImage);

        // Add the bot response to the chats state
        setChats((prev) => [
          ...prev,
          { id: Date.now() + 1, ...aiResponse },
        ]);
        setUserInput("");
      } catch (error) {
        console.error("Error while sending message:", error);
        setChats((prev) => [
          ...prev,
          { id: Date.now(), text: "Something went wrong. Please try again.", sender: "bot" },
        ]);
      }
    }
  };

  // Handle image upload
  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className="relative flex h-screen bg-gray-900 text-white"
      style={{ fontFamily }}
    >
      {/* Sidebar */}
      <Sidebar
        chats={chats}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-4 left-4 z-30 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
      >
        {isSidebarOpen ? "×" : "☰"}
      </button>

      {/* Main Chat Area */}
      <main
        className={`flex-grow p-6 flex flex-col gap-6 transition-all duration-500 ${isSidebarOpen ? "ml-[20%]" : "ml-0"}`}
      >
        {/* Header */}
        <h1
          className="text-5xl font-extrabold bg-gradient-to-r text-transparent bg-clip-text text-center mb-4"
          style={{
           color:"#fff",
          }}
        >
          Sketch to Code
        </h1>

        {/* Chat Messages */}
        <div
          className="bg-gray-800 rounded-lg p-1 overflow-y-auto shadow-inner flex-1"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <ChatMessages messages={chats} />
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="text-center py-4">
            <div className="animate-spin border-4 border-t-4 border-purple-600 w-10 h-10 rounded-full mx-auto"></div>
            <p className="text-lg text-white mt-2">Loading...</p>
          </div>
        )}

        {/* Chat Input */}
        <ChatInput onSendMessage={handleSendMessage} userInput={userInput} setUserInput={setUserInput} />

        {/* Settings Section */}
        <div className="flex gap-8 mt-3">
          <ColorPaletteSelector onColorChange={(color, type) => {
            if (type === "primary") {
              setPrimaryColor(color);
            } else if (type === "secondary") {
              setSecondaryColor(color);
            }
          }} />
          <FontSelector onFontChange={setFontFamily} />
          <FileUploader onFileUpload={handleImageUpload} />
        </div>

        
      </main>
    </div>
  );
}