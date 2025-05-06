import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeVariationCard = ({ variation, isActive, onClick }) => {
  return (
    <motion.div
      className={`cursor-pointer rounded-lg overflow-hidden border-2 ${isActive ? "border-purple-500" : "border-gray-700"}`}
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <div className="bg-gray-800 p-3">
        <h3 className="font-bold text-lg">{variation.name}</h3>
        <p className="text-gray-400 text-sm">{variation.description}</p>
      </div>
      <div className="bg-gray-900 p-2 max-h-40 overflow-y-auto">
        <SyntaxHighlighter
          language="html"
          style={materialDark}
          customStyle={{ margin: 0, background: "transparent" }}
        >
          {variation.html}
        </SyntaxHighlighter>
      </div>
    </motion.div>
  );
};

const CodeActionButtons = ({ html, css }) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleCopy = async () => {
    try {
      const code = `<!-- HTML -->\n${html}\n\n/* CSS */\n${css}`;
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([html + "\n\n<style>\n" + css + "\n</style>"], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code-variation.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={handleCopy}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Copy Code
      </button>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download
      </button>
      <button
        onClick={() => setShowPreview(!showPreview)}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        {showPreview ? "Hide Preview" : "Live Preview"}
      </button>

      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          <div className="p-4 bg-gray-900 flex justify-between items-center">
            <h3 className="text-xl font-bold">Code Preview</h3>
            <button
              onClick={() => setShowPreview(false)}
              className="px-4 py-2 bg-red-600 text-white rounded"
            >
              Close
            </button>
          </div>
          <iframe
            srcDoc={`<!DOCTYPE html><html><head><style>${css}</style></head><body>${html}</body></html>`}
            className="flex-1 border-0"
            sandbox="allow-same-origin allow-scripts"
            title="Code Preview"
          />
        </div>
      )}
    </div>
  );
};

export default function CodeVariations({ variations, onClose }) {
  const [selectedVariation, setSelectedVariation] = useState(0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="bg-gray-800 rounded-lg p-6 mt-4"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Design Variations</h2>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {variations.map((variation, index) => (
            <CodeVariationCard
              key={index}
              variation={variation}
              isActive={selectedVariation === index}
              onClick={() => setSelectedVariation(index)}
            />
          ))}
        </div>

        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <h3 className="font-bold mb-2">HTML</h3>
              <SyntaxHighlighter
                language="html"
                style={materialDark}
                customStyle={{ maxHeight: "300px", overflow: "auto" }}
              >
                {variations[selectedVariation].html}
              </SyntaxHighlighter>
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-2">CSS</h3>
              <SyntaxHighlighter
                language="css"
                style={materialDark}
                customStyle={{ maxHeight: "300px", overflow: "auto" }}
              >
                {variations[selectedVariation].css}
              </SyntaxHighlighter>
            </div>
          </div>

          <CodeActionButtons 
            html={variations[selectedVariation].html}
            css={variations[selectedVariation].css}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}