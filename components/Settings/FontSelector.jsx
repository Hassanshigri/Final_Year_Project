"use client";

import { useState } from "react";

const FontSelector = ({ onFontChange }) => {
  const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  // List of available fonts
  const fontFamilies = [
    "Open Sans",
    "Roboto",
    "Lato",
    "Oswald",
    "Montserrat",
    "Poppins",
    "Arial",
    "Times New Roman",
    "Georgia",
    "Courier New",
    "Verdana",
    "Tahoma",
    "Impact",
    "Lucida Console",
  ];

  const handleFontChange = (font) => {
    setActiveFontFamily(font);
    if (onFontChange) {
      onFontChange(font);
    }
    setIsPickerVisible(false); // Hide the font picker after selection
  };

  return (
    <div className="relative">
      <h2 className="text-sm mb-1 text-white tracking-wide">Select Font Family:</h2>

      {/* Display selected font family */}
      <div
        className="cursor-pointer mb-2 px-2 py-2 bg-[#4868a2] border-2 border-[#4868a2] text-white rounded hover:bg-transparent hover:border-white transition focus:outline-none text-sm"
        onClick={() => setIsPickerVisible(!isPickerVisible)} 
      >
        {activeFontFamily}
      </div>

      {isPickerVisible && (
        <div
          className="absolute bottom-full left-0 mb-1 z-50 p-1 bg-white shadow-lg rounded w-48 max-h-40 overflow-y-auto"
        >
          <ul className="space-y-1">
            {fontFamilies.reverse().map((font) => (
              <li
                key={font}
                className="cursor-pointer text-black hover:bg-gray-200 p-1 rounded text-sm"
                onClick={() => handleFontChange(font)} 
                style={{ fontFamily: font }}
              >
                {font}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FontSelector;
