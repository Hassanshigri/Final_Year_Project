"use client";

import { useState } from "react";
import { ChromePicker } from "react-color";

const ColorPaletteSelector = ({ onColorChange }) => {
  const [primaryColor, setPrimaryColor] = useState("#000");
  const [secondaryColor, setSecondaryColor] = useState("#333");
  const [selectedColor, setSelectedColor] = useState("#000");
  const [isPrimaryPickerVisible, setIsPrimaryPickerVisible] = useState(false);
  const [isSecondaryPickerVisible, setIsSecondaryPickerVisible] = useState(false);

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const handleConfirmPrimaryColor = () => {
    setPrimaryColor(selectedColor);
    if (onColorChange) {
      onColorChange(selectedColor, "primary");
    }
    setIsPrimaryPickerVisible(false);
  };

  const handleConfirmSecondaryColor = () => {
    setSecondaryColor(selectedColor);
    if (onColorChange) {
      onColorChange(selectedColor, "secondary");
    }
    setIsSecondaryPickerVisible(false);
  };

  return (
    <div className="relative flex space-x-4">
      {/* Primary Color */}
      <div>
        <h2 className="text-sm mb-1 text-white tracking-wide">Primary Color:</h2>
        <div
          className="cursor-pointer mb-2 px-3 py-1 rounded text-white"
          style={{
            backgroundColor: primaryColor,
            border: `2px solid ${primaryColor}`, // Dynamic border color
          }}
          onClick={() => setIsPrimaryPickerVisible(true)}
        >
          <span className="text-white text-xs">{primaryColor}</span>
        </div>

        {isPrimaryPickerVisible && (
          <div
            className="absolute bottom-full left-0 z-50 p-2 bg-white shadow-lg rounded"
            style={{
              position: "absolute",
              bottom: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
          >
            <ChromePicker color={selectedColor} onChange={handleColorChange} />
            <div className="mt-2">
              <button
                className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-800 transition text-xs"
                onClick={handleConfirmPrimaryColor}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Secondary Color */}
      <div>
        <h2 className="text-sm mb-1 text-white tracking-wide">Secondary Color:</h2>
        <div
          className="cursor-pointer mb-2 px-3 py-1 rounded text-white"
          style={{
            backgroundColor: secondaryColor,
            border: `2px solid ${secondaryColor}`, // Dynamic border color
          }}
          onClick={() => setIsSecondaryPickerVisible(true)}
        >
          <span className="text-white text-xs">{secondaryColor}</span>
        </div>

        {isSecondaryPickerVisible && (
          <div
            className="absolute bottom-full left-0 z-50 p-2 bg-white shadow-lg rounded"
            style={{
              position: "absolute",
              bottom: "70px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1000,
            }}
          >
            <ChromePicker color={selectedColor} onChange={handleColorChange} />
            <div className="mt-2">
              <button
                className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-800 transition text-xs"
                onClick={handleConfirmSecondaryColor}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPaletteSelector;
