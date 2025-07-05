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
    <div className="relative flex space-x-6">
      {/* Primary Color */}
      <div className="relative">
        <h2 className="text-sm mb-2 text-gray-300 font-medium tracking-wider">PRIMARY</h2>
        <div
          className="cursor-pointer w-24 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105 shadow-md"
          style={{
            backgroundColor: primaryColor,
            border: `1px solid ${primaryColor === '#000000' ? '#333' : primaryColor}`,
          }}
          onClick={() => {
            setSelectedColor(primaryColor);
            setIsPrimaryPickerVisible(true);
            setIsSecondaryPickerVisible(false);
          }}
        >
          <span className="text-white text-xs font-mono bg-black/20 px-2 py-1 rounded">
            {primaryColor}
          </span>
        </div>

        {isPrimaryPickerVisible && (
          <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            <div className="bg-gray-800 p-3 rounded-lg shadow-xl border border-gray-700">
              <ChromePicker 
                color={selectedColor} 
                onChange={handleColorChange}
                styles={{
                  default: {
                    picker: {
                      boxShadow: 'none',
                      background: 'transparent',
                      width: '100%'
                    }
                  }
                }}
              />
              <div className="flex justify-end mt-3 space-x-2">
                <button
                  className="px-4 py-1.5 text-xs bg-gray-600 hover:bg-gray-500 text-gray-200 rounded transition-colors"
                  onClick={() => setIsPrimaryPickerVisible(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-1.5 text-xs bg-purple-600 hover:bg-purple-500 text-white rounded transition-colors"
                  onClick={handleConfirmPrimaryColor}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Secondary Color */}
      <div className="relative">
        <h2 className="text-sm mb-2 text-gray-300 font-medium tracking-wider">SECONDARY</h2>
        <div
          className="cursor-pointer w-24 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-105 shadow-md"
          style={{
            backgroundColor: secondaryColor,
            border: `1px solid ${secondaryColor === '#000000' ? '#333' : secondaryColor}`,
          }}
          onClick={() => {
            setSelectedColor(secondaryColor);
            setIsSecondaryPickerVisible(true);
            setIsPrimaryPickerVisible(false);
          }}
        >
          <span className="text-white text-xs font-mono bg-black/20 px-2 py-1 rounded">
            {secondaryColor}
          </span>
        </div>

        {isSecondaryPickerVisible && (
          <div className="absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
            <div className="bg-gray-800 p-3 rounded-lg shadow-xl border border-gray-700">
              <ChromePicker 
                color={selectedColor} 
                onChange={handleColorChange}
                styles={{
                  default: {
                    picker: {
                      boxShadow: 'none',
                      background: 'transparent',
                      width: '100%'
                    }
                  }
                }}
              />
              <div className="flex justify-end mt-3 space-x-2">
                <button
                  className="px-4 py-1.5 text-xs bg-gray-600 hover:bg-gray-500 text-gray-200 rounded transition-colors"
                  onClick={() => setIsSecondaryPickerVisible(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-1.5 text-xs bg-purple-600 hover:bg-purple-500 text-white rounded transition-colors"
                  onClick={handleConfirmSecondaryColor}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorPaletteSelector;