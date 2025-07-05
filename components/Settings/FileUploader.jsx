"use client";
import { useState, useRef } from "react";
import { FiUpload, FiX, FiZoomIn } from "react-icons/fi";

export default function FileUploader({ onFileUpload }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        onFileUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setImageSrc(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="relative">
      <h2 className="text-sm mb-2 text-gray-300 font-medium tracking-wider">SKETCH</h2>
      
      {/* Compact Upload Area */}
      <div 
        className="flex flex-col items-center justify-center w-28 h-10 border-2 border-dashed border-gray-600 rounded-lg bg-gray-800 hover:border-purple-500 transition-colors cursor-pointer relative overflow-hidden"
        onClick={() => fileInputRef.current.click()}
      >
        {imageSrc ? (
          <>
            <img
              src={imageSrc}
              alt="Uploaded Preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <button 
              className="absolute top-1 right-1 p-1 bg-black/70 rounded-full hover:bg-black text-white"
              onClick={handleRemoveImage}
            >
              <FiX size={12} />
            </button>
            <div 
              className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
              onClick={() => setIsPreviewOpen(true)}
            >
              <FiZoomIn className="text-white" size={18} />
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center text-gray-400 p-2">
            <FiUpload size={18} className="mb-1" />
            <span className="text-xs text-center">Upload Sketch</span>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
      </div>

      {/* Fullscreen Preview */}
      {isPreviewOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div className="relative max-w-full max-h-full">
            <img 
              src={imageSrc} 
              alt="Preview" 
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
            <button
              className="absolute top-4 right-4 p-2 bg-black/70 rounded-full hover:bg-black text-white"
              onClick={() => setIsPreviewOpen(false)}
            >
              <FiX size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}