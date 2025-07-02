import React, { useRef } from "react";
import { ImagePlus } from "lucide-react";

const ImageUploader = ({
  currentImage,
  onImageChange,
  size = 80,
  isRound = false,
}) => {
  const inputRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      onImageChange(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      className={`relative w-full h-full ${
        isRound ? "rounded-full" : "rounded-3xl"
      } overflow-hidden`}
    >
      {currentImage && (
        <img
          src={currentImage}
          alt="uploaded"
          className={`w-full h-full object-cover ${
            isRound ? "rounded-full" : ""
          }`}
        />
      )}
      <div
        className="absolute inset-0 z-40 bg-[#0000009a] flex justify-center items-center cursor-pointer"
        onClick={() => inputRef.current.click()}
      >
        <ImagePlus color="#ffffff" size={size} strokeWidth={1.2} />
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploader;
