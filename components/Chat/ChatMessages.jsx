"use client";

import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState, useEffect, useCallback } from "react";

// Enhanced Button Component with better styling
const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "default",
  size = "default",
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 active:scale-95";

  const variants = {
    default:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl focus-visible:ring-blue-500",
    outline:
      "border-2 border-gray-200 bg-white/80 backdrop-blur-sm hover:bg-gray-50 text-gray-700 hover:border-gray-300 shadow-sm hover:shadow-md",
    ghost:
      "hover:bg-gray-100/80 text-gray-600 hover:text-gray-800 backdrop-blur-sm",
    success:
      "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl",
  };

  const sizes = {
    default: "h-11 py-2.5 px-5 text-sm",
    sm: "h-9 px-4 text-sm",
    lg: "h-13 px-8 text-base",
    xs: "h-7 px-3 text-xs",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

// Enhanced Card Components with glassmorphism
const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-white/20 bg-white/90 backdrop-blur-xl text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col space-y-2 p-6 pb-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3
    className={`text-xl font-bold leading-none tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent ${className}`}
  >
    {children}
  </h3>
);

// Enhanced Badge Component
const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg",
    secondary:
      "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 shadow-md",
    outline:
      "border-2 border-gray-200 text-gray-700 bg-white/80 backdrop-blur-sm",
    success:
      "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg",
    info: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:scale-105 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
};

// Enhanced Input Component
const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-12 w-full rounded-xl border-2 border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-3 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:border-blue-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 ${className}`}
    {...props}
  />
);

// Modern Icons with better styling
const CopyIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const DownloadIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7,10 12,15 17,10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const EyeIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const MaximizeIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
  </svg>
);

const MinimizeIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
  </svg>
);

const XIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const CheckIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

const CodeIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <polyline points="16,18 22,12 16,6"></polyline>
    <polyline points="8,6 2,12 8,18"></polyline>
  </svg>
);

const FileTextIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"></path>
  </svg>
);

const SparklesIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
  </svg>
);

const TypeIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <polyline points="4,7 4,4 20,4 20,7"></polyline>
    <line x1="9" y1="20" x2="15" y2="20"></line>
    <line x1="12" y1="4" x2="12" y2="20"></line>
  </svg>
);

const PlusIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MinusIcon = ({ className = "" }) => (
  <svg
    className={`w-4 h-4 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

// Enhanced Font Size Controls with better design
const FontSizeControls = ({
  codeFontSize,
  setCodeFontSize,
  headingFontSize,
  setHeadingFontSize,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const adjustCodeFontSize = (delta) => {
    const newSize = Math.max(8, Math.min(24, codeFontSize + delta));
    setCodeFontSize(newSize);
  };

  const adjustHeadingFontSize = (delta) => {
    const newSize = Math.max(12, Math.min(32, headingFontSize + delta));
    setHeadingFontSize(newSize);
  };

  return (
    <div className="fixed top-5 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 space-y-6 min-w-[280px]"
          >
            {/* Code Font Size */}
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-3">
                Code Font Size: {codeFontSize}px
              </label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => adjustCodeFontSize(-1)}
                  className="w-10 h-10 p-0"
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <div className="flex-1 text-center">
                  <span className="text-lg font-bold text-gray-800">
                    {codeFontSize}px
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => adjustCodeFontSize(1)}
                  className="w-10 h-10 p-0"
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Heading Font Size */}
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-3">
                Heading Font Size: {headingFontSize}px
              </label>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => adjustHeadingFontSize(-2)}
                  className="w-10 h-10 p-0"
                >
                  <MinusIcon className="w-4 h-4" />
                </Button>
                <div className="flex-1 text-center">
                  <span className="text-lg font-bold text-gray-800">
                    {headingFontSize}px
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => adjustHeadingFontSize(2)}
                  className="w-10 h-10 p-0"
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Reset Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setCodeFontSize(14);
                setHeadingFontSize(18);
              }}
              className="w-full"
            >
              Reset to Default
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Enhanced Loader with modern design
const Loader = () => (
  <div className="flex justify-center items-center space-x-4 py-12">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-purple-200 rounded-full animate-spin border-t-purple-600 shadow-lg"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-transparent rounded-full animate-ping border-t-purple-400"></div>
    </div>
    <div className="text-center">
      <div className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Generating response...
      </div>
      <div className="text-sm text-gray-500 mt-1">Please wait a moment</div>
    </div>
  </div>
);

// Enhanced Copy Button with better animations
const CopyButton = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(
    async (e) => {
      e.stopPropagation();
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    },
    [text]
  );

  return (
    <Button
      variant={copied ? "success" : "outline"}
      size="xs"
      onClick={handleCopy}
      className={`transition-all duration-300 ${className}`}
    >
      <motion.div
        initial={false}
        animate={{ scale: copied ? 1.1 : 1 }}
        className="flex items-center"
      >
        {copied ? (
          <>
            <CheckIcon className="w-3 h-3 mr-1.5" />
            Copied!
          </>
        ) : (
          <>
            <CopyIcon className="w-3 h-3 mr-1.5" />
            Copy
          </>
        )}
      </motion.div>
    </Button>
  );
};

// Enhanced Download Button
const DownloadButton = ({ content, language, filename }) => {
  const getExtension = (lang) => {
    const extensions = {
      javascript: "js",
      typescript: "ts",
      jsx: "jsx",
      tsx: "tsx",
      html: "html",
      css: "css",
      python: "py",
      java: "java",
      cpp: "cpp",
      c: "c",
      php: "php",
      ruby: "rb",
      go: "go",
      rust: "rs",
      sql: "sql",
      json: "json",
      xml: "xml",
      yaml: "yml",
      markdown: "md",
    };
    return extensions[lang.toLowerCase()] || "txt";
  };

  const handleDownload = useCallback(() => {
    const extension = getExtension(language);
    const fileName = filename || `code-snippet.${extension}`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [content, language, filename]);

  return (
    <Button
      variant="outline"
      size="xs"
      onClick={handleDownload}
      className="transition-all duration-300"
    >
      <DownloadIcon className="w-3 h-3 mr-1.5" />
      Download
    </Button>
  );
};

// Enhanced Preview Modal with modern design
const PreviewModal = ({ isOpen, onClose, html, css, js }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeContent, setIframeContent] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    try {
      const fullHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Code Preview</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            body {
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
              line-height: 1;
            }
            ${css || ""}
          </style>
        </head>
        <body>
          ${html || ""}
          <script>
            try {
              ${js || ""}
            } catch (error) {
              console.error('Preview JavaScript Error:', error);
              document.body.innerHTML += '<div style="position: fixed; top: 20px; right: 20px; background: #ef4444; color: white; padding: 12px 16px; border-radius: 12px; font-size: 14px; z-index: 9999; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">JS Error: ' + error.message + '</div>';
            }
          </script>
        </body>
        </html>
      `;
      setIframeContent(fullHtml);
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to generate preview"
      );
    }
  }, [isOpen, html, css, js]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-0"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className={`bg-white/95 backdrop-blur-xl rounded-none shadow-2xl flex flex-col border-0 ${
            isFullscreen ? "w-full h-full" : "w-[1400px] h-[90vh]"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <EyeIcon className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  Live Preview
                </h3>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFullscreen(!isFullscreen)}
              >
                {isFullscreen ? (
                  <MinimizeIcon className="w-3 h-3" />
                ) : (
                  <MaximizeIcon className="w-3 h-3" />
                )}
              </Button>
              <Button variant="outline" size="sm" onClick={onClose}>
                <XIcon className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 relative overflow-hidden">
            {error ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XIcon className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="text-xl font-semibold text-red-600 mb-2">
                    Preview Error
                  </div>
                  <div className="text-gray-600 max-w-md">{error}</div>
                </div>
              </div>
            ) : (
              <iframe
                srcDoc={iframeContent}
                className="w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                title="Code Preview"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Enhanced code block extraction
const extractCodeBlocks = (text) => {
  const codeBlockRegex = /```(\w+)?\s*(?:file="([^"]*)")?\s*\n([\s\S]*?)\n```/g;
  const blocks = [];
  let match;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    const language = match[1]?.toLowerCase() || "text";
    const filename = match[2];
    const code = match[3];

    if (code.trim()) {
      blocks.push({
        language,
        code: code.trim(),
        filename,
      });
    }
  }

  return blocks;
};

// Enhanced Code Actions Component
const CodeActions = ({ codeBlocks, onPreview }) => {
  const hasWebContent = codeBlocks.some((block) =>
    ["html", "css", "javascript", "js"].includes(block.language)
  );

  const allCode = codeBlocks
    .map(
      (block) =>
        `// ${block.filename || `${block.language.toUpperCase()} Code`}\n${
          block.code
        }`
    )
    .join("\n\n");

  return (
    <div className="flex flex-wrap gap-2 mt-1 mb-8">
      {hasWebContent && onPreview && (
        <Button variant="outline" size="xs" onClick={onPreview}>
          <EyeIcon className="w-3 h-3 mr-1.5" />
          Preview
        </Button>
      )}
      <CopyButton text={allCode} />
    </div>
  );
};

// Main ChatMessages Component with enhanced design
export default function ChatMessages({
  messages,
  loading = false,
  recommendations = [],
}) {
  const [previewData, setPreviewData] = useState({ isOpen: false });

  // Font size state management
  const [codeFontSize, setCodeFontSize] = useState(14);
  const [headingFontSize, setHeadingFontSize] = useState(18);

  // Load font sizes from localStorage on mount
  useEffect(() => {
    const savedCodeFontSize = localStorage.getItem("chatCodeFontSize");
    const savedHeadingFontSize = localStorage.getItem("chatHeadingFontSize");

    if (savedCodeFontSize) {
      setCodeFontSize(Number.parseInt(savedCodeFontSize));
    }
    if (savedHeadingFontSize) {
      setHeadingFontSize(Number.parseInt(savedHeadingFontSize));
    }
  }, []);

  // Save font sizes to localStorage when they change
  useEffect(() => {
    localStorage.setItem("chatCodeFontSize", codeFontSize.toString());
  }, [codeFontSize]);

  useEffect(() => {
    localStorage.setItem("chatHeadingFontSize", headingFontSize.toString());
  }, [headingFontSize]);

  const handlePreview = useCallback((codeBlocks) => {
    const html = codeBlocks.find((block) => block.language === "html")?.code;
    const css = codeBlocks.find((block) => block.language === "css")?.code;
    const js = codeBlocks.find((block) =>
      ["javascript", "js"].includes(block.language)
    )?.code;

    setPreviewData({
      isOpen: true,
      html,
      css,
      js,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Font Size Controls */}
      <FontSizeControls
        codeFontSize={codeFontSize}
        setCodeFontSize={setCodeFontSize}
        headingFontSize={headingFontSize}
        setHeadingFontSize={setHeadingFontSize}
      />

      <div className="space-y-8 overflow-y-auto flex-1 p-8 max-w-5xl mx-auto w-full">
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Loader />
            </motion.div>
          )}

          {messages.map((message, index) => {
            const codeBlocks = extractCodeBlocks(message.text);
            const hasCodeBlocks = codeBlocks.length > 0;

            return (
              <motion.div
                key={message.id}
                initial={{
                  x: message.sender === "user" ? 50 : -50,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.1,
                }}
                className={`flex w-full ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex max-w-[90%] space-x-4 ${
                    message.sender === "user"
                      ? "flex-row-reverse space-x-reverse"
                      : ""
                  }`}
                >
                  {/* Enhanced Avatar */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={`w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-lg ${
                      message.sender === "bot"
                        ? "bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500"
                        : "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500"
                    }`}
                  >
                    {message.sender === "bot" ? (
                      <SparklesIcon className="w-6 h-6 text-white" />
                    ) : (
                      <div className="w-7 h-7 bg-white rounded-full shadow-inner" />
                    )}
                  </motion.div>

                  {/* Enhanced Message Content */}
                  <Card
                    className={`relative max-w-full ${
                      message.sender === "bot"
                        ? "bg-white/90 border-white/30 shadow-xl"
                        : "bg-gradient-to-r from-blue-500 to-purple-500 border-blue-400 text-white shadow-xl"
                    }`}
                  >
                    <CardContent className="p-6 overflow-x-hidden">
                      {/* User Question */}
                      {message.sender === "user" && message.question && (
                        <div className="text-blue-100 mb-3 text-sm font-medium">
                          {message.question}
                        </div>
                      )}

                      {/* Code Actions */}
                      {message.sender === "bot" && hasCodeBlocks && (
                        <div className="absolute top-4 right-4">
                          <CodeActions
                            codeBlocks={codeBlocks}
                            onPreview={() => handlePreview(codeBlocks)}
                          />
                        </div>
                      )}

                      {/* Enhanced Message Text */}
                      <div
                        className={`prose prose-sm max-w-none ${
                          message.sender === "bot"
                            ? "prose-gray"
                            : "prose-blue prose-invert"
                        }`}
                        style={{
                          "--heading-font-size": `${headingFontSize}px`,
                        }}
                      >
                        <ReactMarkdown
                          components={{
                            // Enhanced heading components
                            h1: ({ children }) => (
                              <h1
                                style={{
                                  fontSize: `${headingFontSize + 10}px`,
                                }}
                                className="font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                              >
                                {children}
                              </h1>
                            ),
                            h2: ({ children }) => (
                              <h2
                                style={{ fontSize: `${headingFontSize + 6}px` }}
                                className="font-bold mb-3 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent"
                              >
                                {children}
                              </h2>
                            ),
                            h3: ({ children }) => (
                              <h3
                                style={{ fontSize: `${headingFontSize + 2}px` }}
                                className="font-bold mb-2 text-gray-800"
                              >
                                {children}
                              </h3>
                            ),
                            // Enhanced code component
                            code({
                              node,
                              inline,
                              className,
                              children,
                              ...props
                            }) {
                              const match = /language-(\w+)/.exec(
                                className || ""
                              );
                              const language = match?.[1] || "";
                              const codeString = String(children).replace(
                                /\n$/,
                                ""
                              );

                              return !inline ? (
                                <div className="relative my-6 group">
                                  <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-700 px-5 py-3 rounded-t-xl">
                                    <Badge
                                      variant="secondary"
                                      className="text-xs bg-white/20 text-white"
                                    >
                                      <CodeIcon className="w-3 h-3 mr-1.5" />
                                      {language || "code"}
                                    </Badge>
                                    <div className="flex space-x-2">
                                      <CopyButton
                                        text={codeString}
                                        className="h-7 px-3 text-xs"
                                      />
                                      <DownloadButton
                                        content={codeString}
                                        language={language}
                                      />
                                    </div>
                                  </div>
                                  <SyntaxHighlighter
                                    style={oneDark}
                                    language={language}
                                    PreTag="div"
                                    customStyle={{
                                      margin: 0,
                                      borderTopLeftRadius: 0,
                                      borderTopRightRadius: 0,
                                      borderBottomLeftRadius: "12px",
                                      borderBottomRightRadius: "12px",
                                      fontSize: `${codeFontSize}px`,
                                      padding: "20px",
                                      maxWidth: "100%", // Add this
                                      overflowX: "auto", // Add this
                                      wordBreak: "break-word", // Add this
                                      whiteSpace: "pre-wrap", // Add this
                                    }}
                                    {...props}
                                  >
                                    {codeString}
                                  </SyntaxHighlighter>
                                </div>
                              ) : (
                                <code
                                  className="bg-gray-100 px-2 py-1 rounded-lg font-mono text-gray-800"
                                  style={{ fontSize: `${codeFontSize}px` }}
                                >
                                  {children}
                                </code>
                              );
                            },
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Enhanced Recommendations */}
        {recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-purple-50/80 to-blue-50/80 border-purple-200/50 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <SparklesIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3
                      className="font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                      style={{ fontSize: `${headingFontSize + 2}px` }}
                    >
                      AI Suggestions
                    </h3>
                    <p className="text-sm text-gray-600">
                      Recommended improvements and additions
                    </p>
                  </div>
                </div>
                <div className="space-y-6">
                  {recommendations.map((rec, idx) => {
                    const codeBlocks = extractCodeBlocks(rec);
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <Card className="bg-white/70 backdrop-blur-sm border-white/30 shadow-lg">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-center mb-4">
                              <Badge variant="info">
                                <FileTextIcon className="w-3 h-3 mr-1.5" />
                                Suggestion {idx + 1}
                              </Badge>
                              <CodeActions
                                codeBlocks={codeBlocks}
                                onPreview={() => handlePreview(codeBlocks)}
                              />
                            </div>
                            <div className="prose prose-sm max-w-none">
                              <ReactMarkdown
                                components={{
                                  h1: ({ children }) => (
                                    <h1
                                      style={{
                                        fontSize: `${headingFontSize + 6}px`,
                                      }}
                                      className="font-bold mb-3 text-gray-800"
                                    >
                                      {children}
                                    </h1>
                                  ),
                                  h2: ({ children }) => (
                                    <h2
                                      style={{
                                        fontSize: `${headingFontSize + 2}px`,
                                      }}
                                      className="font-bold mb-2 text-gray-800"
                                    >
                                      {children}
                                    </h2>
                                  ),
                                  h3: ({ children }) => (
                                    <h3
                                      style={{
                                        fontSize: `${headingFontSize}px`,
                                      }}
                                      className="font-bold mb-2 text-gray-800"
                                    >
                                      {children}
                                    </h3>
                                  ),
                                  code({
                                    node,
                                    inline,
                                    className,
                                    children,
                                    ...props
                                  }) {
                                    const match = /language-(\w+)/.exec(
                                      className || ""
                                    );
                                    const codeString = String(children).replace(
                                      /\n$/,
                                      ""
                                    );

                                    return !inline && match ? (
                                      <div className="relative my-4">
                                        <SyntaxHighlighter
                                          language={match[1]}
                                          style={oneDark}
                                          PreTag="div"
                                          customStyle={{
                                            borderRadius: "12px",
                                            fontSize: `${codeFontSize}px`,
                                            padding: "16px",
                                          }}
                                          {...props}
                                        >
                                          {codeString}
                                        </SyntaxHighlighter>
                                      </div>
                                    ) : (
                                      <code
                                        className="bg-gray-100 px-2 py-1 rounded-lg font-mono text-gray-800"
                                        style={{
                                          fontSize: `${codeFontSize}px`,
                                        }}
                                      >
                                        {children}
                                      </code>
                                    );
                                  },
                                }}
                              >
                                {rec}
                              </ReactMarkdown>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Preview Modal */}
      <PreviewModal
        isOpen={previewData.isOpen}
        onClose={() => setPreviewData({ isOpen: false })}
        html={previewData.html}
        css={previewData.css}
        js={previewData.js}
      />
    </div>
  );
}

export { Button, Card, CardContent, CardHeader, CardTitle, Badge, Input };
