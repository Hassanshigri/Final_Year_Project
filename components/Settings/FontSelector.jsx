"use client";
import { useState } from "react";

const FontSelector = ({ onFontChange }) => {
  const [activeFontFamily, setActiveFontFamily] = useState("Open Sans");
  const [isPickerVisible, setIsPickerVisible] = useState(false);

 const fontFamilies = [
  "Open Sans",
  "Roboto",
  "Lato",
  "Oswald",
  "Montserrat",
  "Poppins",
  "Inter",               // New
  "Rubik",               // New
  "DM Sans",             // New
  "Playfair Display",    // New
  "Ubuntu",              // New
  "Space Grotesk",       // New
  "Fira Sans",           // New
  "Nunito",              // New
  "Cabin",               // New
  "Work Sans",           // New
  "Manrope",             // New
  "Source Sans Pro",     // New
  "Merriweather",        // New
];


  const handleFontChange = (font) => {
    setActiveFontFamily(font);
    if (onFontChange) onFontChange(font);
    setIsPickerVisible(false);
  };

  return (
    <div className="relative">
      <h2 className="text-sm mb-2 text-gray-300 font-medium tracking-wider">FONT</h2>
      
      {/* Font Selection Button */}
      <div
        className="cursor-pointer w-40 h-10 rounded-lg flex items-center justify-between px-3 transition-all hover:scale-105 shadow-md bg-gray-700 border border-gray-600"
        onClick={() => setIsPickerVisible(!isPickerVisible)}
      >
        <span className="text-white text-sm truncate" style={{ fontFamily: activeFontFamily }}>
          {activeFontFamily}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Font Picker Dropdown */}
      {isPickerVisible && (
        <div className="absolute bottom-full left-0 z-50 mb-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 max-h-60 overflow-y-auto">
          <ul className="py-1">
            {fontFamilies.map((font) => (
              <li
                key={font}
                className={`px-3 py-2 cursor-pointer text-sm transition-colors ${
                  activeFontFamily === font 
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
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