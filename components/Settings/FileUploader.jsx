import { useState } from "react";

export default function FileUploader({ onFileUpload }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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

  return (
    <div className="flex items-center gap-1">
      <div>
        <h2 className="text-sm text-white mb-0 tracking-wide">Upload Sketch:</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="bg-transparent text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>

      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt="Uploaded Preview"
            className="w-16 h-16 object-cover rounded-lg shadow-md cursor-pointer"
            onClick={() => setIsPreviewOpen(true)}
          />

          {isPreviewOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setIsPreviewOpen(false)}
            >
              <img src={imageSrc} alt="Preview" className="max-w-full max-h-full rounded-lg shadow-lg" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
