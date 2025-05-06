import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState, useEffect } from "react";

const Loader = () => (
  <div className="flex justify-center items-center space-x-2">
    <div className="w-8 h-8 border-4 border-t-transparent border-purple-500 rounded-full animate-spin"></div>
    <span className="text-white">Loading...</span>
  </div>
);

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.opacity = 0;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="px-2 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition text-xs z-10"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};

const DownloadButton = ({ content, language }) => {
  const handleDownload = () => {
    const extension = language === 'html' ? 'html' : 'css';
    const blob = new Blob([content], { type: `text/${extension}` });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-code.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="px-2 py-1 top-8 bg-green-600 text-white rounded hover:bg-green-700 transition text-xs z-10"
    >
      Download {language.toUpperCase()}
    </button>
  );
};
const PreviewButton = ({ html, css }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [iframeContent, setIframeContent] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (html || css) {
      const fullHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 20px;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              background-color: #f5f5f5;
            }
            .preview-container {
              width: 100%;
              max-width: 1200px;
              margin: 0 auto;
              padding: 20px;
              background: white;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              border-radius: 8px;
            }
            ${css || ""}
          </style>
        </head>
        <body>
          <div class="preview-container">
            ${html || ""}
          </div>
        </body>
        </html>
      `;
      setIframeContent(fullHtml);
    }
  }, [html, css]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <button
        onClick={() => setShowPreview(!showPreview)}
        className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs z-10"
      >
        {showPreview ? "Hide Preview" : "Show Preview"}
      </button>
      
      {showPreview && (
        <div className={`fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col ${isFullscreen ? '' : 'items-center justify-center p-4'}`}>
          <div className={`bg-gray-900 flex flex-col ${isFullscreen ? 'h-full w-full' : 'max-w-4xl w-full rounded-lg shadow-xl max-h-[90vh]'}`}>
            <div className="p-3 bg-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Live Preview</h3>
              <div className="flex space-x-2">
                <button
                  onClick={toggleFullscreen}
                  className="px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-sm"
                >
                  {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                </button>
                <button
                  onClick={() => setShowPreview(false)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                >
                  Close
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden relative">
              <iframe
                srcDoc={iframeContent}
                className="w-full h-full border-0"
                sandbox="allow-same-origin allow-scripts"
                title="Code Preview"
              />
              <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                Preview Mode
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const extractCodeBlocks = (text) => {
  const htmlMatch = text.match(/```html\n([\s\S]*?)\n```/);
  const cssMatch = text.match(/```css\n([\s\S]*?)\n```/);

  return {
    html: htmlMatch ? htmlMatch[1] : null,
    css: cssMatch ? cssMatch[1] : null,
  };
};

export default function ChatMessages({ messages, loading,recommendations  }) {
  return (
    <motion.div
      className="space-y-4 overflow-y-auto flex-1 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <div className="flex justify-center items-center py-6">
          <Loader />
        </div>
      ) : (
        messages.map((message) => {
          const codeBlocks = extractCodeBlocks(message.text);

          return (
            <motion.div
              key={message.id}
              initial={{
                x: message.sender === "user" ? 300 : -300,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`flex items-start w-full ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "bot" && (
                <div className="w-10 h-10 bg-gray-600 rounded-full flex-shrink-0"></div>
              )}

              <div
                className={`p-4 rounded-lg w-full max-w-full relative ${
                  message.sender === "bot"
                    ? "bg-gray-800 text-white"
                    : "bg-[#456ba8] text-white"
                }`}
              >
                {message.sender === "user" && (
                  <div className="text-gray-200">{message.question}</div>
                )}

                {message.sender === "bot" &&
                  (codeBlocks.html || codeBlocks.css) && (
                    <div className="absolute top-2 right-2 flex flex-col space-y-2">
                      <div className="flex space-x-2">
                        {codeBlocks.html && (
                          <DownloadButton 
                            content={codeBlocks.html} 
                            language="html" 
                          />
                        )}
                        {codeBlocks.css && (
                          <DownloadButton 
                            content={codeBlocks.css} 
                            language="css" 
                          />
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <PreviewButton
                          html={codeBlocks.html}
                          css={codeBlocks.css}
                        />
                        <CopyButton text={
                          codeBlocks.html && codeBlocks.css 
                            ? `<!-- HTML -->\n${codeBlocks.html}\n\n/* CSS */\n${codeBlocks.css}`
                            : codeBlocks.html || codeBlocks.css || ""
                        } />
                      </div>
                    </div>
                  )}

                <ReactMarkdown
                  children={message.text}
                  components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      const codeString = String(children).replace(/\n$/, "");

                      return !inline && match ? (
                        <div className="relative my-2 group">
                          <SyntaxHighlighter
                            language={match[1]}
                            style={materialDark}
                            PreTag="div"
                            customStyle={{
                              background: "transparent",
                              padding: "1.5rem 1rem 1rem",
                              margin: 0,
                              borderRadius: "0.5rem",
                              fontSize: "0.9rem",
                            }}
                            {...props}
                          >
                            {codeString}
                          </SyntaxHighlighter>
                        </div>
                      ) : (
                        <code
                          className={`${className} bg-gray-700 px-1.5 py-0.5 rounded text-white`}
                          {...props}
                        >
                          {children}
                        </code>
                      );
                    },
                    p({ node, children }) {
                      return (
                        <p className="mb-4 whitespace-pre-wrap">{children}</p>
                      );
                    },
                    h1({ node, children }) {
                      return (
                        <h1 className="text-2xl font-bold mb-4 mt-6">
                          {children}
                        </h1>
                      );
                    },
                    h2({ node, children }) {
                      return (
                        <h2 className="text-xl font-bold mb-3 mt-5">
                          {children}
                        </h2>
                      );
                    },
                    ul({ node, children }) {
                      return (
                        <ul className="list-disc pl-5 mb-4">{children}</ul>
                      );
                    },
                    ol({ node, children }) {
                      return (
                        <ol className="list-decimal pl-5 mb-4">{children}</ol>
                      );
                    },
                  }}
                />
              </div>

              {message.sender === "user" && (
                <div className="w-10 h-10 bg-[#456ba8] rounded-full flex-shrink-0 ml-2"></div>
              )}
            </motion.div>
            
          );
        })
      )}
      {recommendations.length > 0 && (
  <div className="mt-6 bg-gray-900 p-4 rounded-xl border border-gray-700">
    <h3 className="text-xl font-semibold mb-4 text-purple-400">Suggestions</h3>
    {recommendations.map((rec, idx) => (
      <div key={idx} className="mb-6 bg-gray-800 p-4 rounded-xl">
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-300">Recommendation {idx + 1}</span>
          <div className="flex gap-2">
            <CopyButton text={rec} />
            <DownloadButton content={rec} language="html" />
          </div>
        </div>
        <SyntaxHighlighter language="html" style={materialDark} className="rounded-md text-sm">
          {rec}
        </SyntaxHighlighter>
      </div>
    ))}
  </div>
)}
    </motion.div>
  );
}