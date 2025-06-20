import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import Button from './Button';

const UploadBox = ({ type, onChange }) => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);
  useEffect(() => {
    // Notify parent whenever files change
    if (onChange) {
      const key = isImageUpload
        ? 'images'
        : isVideoUpload
        ? 'video'
        : isPdfUpload
        ? 'pdf'
        : '';

      if (key) {
        onChange(key, isVideoUpload ? files[0] || null : files);
      }
    }
  }, [files]);

  // Size limits
  const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
  const MAX_VIDEO_SIZE = 20 * 1024 * 1024; // 20MB
  const MAX_PDF_SIZE = 10 * 1024 * 1024; // 10MB

  // File count limits
  const MAX_IMAGES = 8;
  const MAX_VIDEOS = 1;
  const MAX_PDFS = 3;

  const isImageUpload = type === 'imageDropBox';
  const isVideoUpload = type === 'videoDropBox';
  const isPdfUpload = type === 'pdfDropBox';

  const handleFileChange = (e) => {
    setError('');
    const selectedFiles = Array.from(e.target.files);
    let newErrors = [];
    let validFiles = [];

    if (isImageUpload) {
      selectedFiles.forEach((file) => {
        if (!file.type.startsWith('image/')) {
          newErrors.push('Only image files are allowed.');
        } else if (file.size > MAX_IMAGE_SIZE) {
          newErrors.push('Image size should be less than 5MB.');
        } else {
          validFiles.push(file);
        }
      });

      if (files.length + validFiles.length > MAX_IMAGES) {
        newErrors.push('You can upload a maximum of 8 images.');
        validFiles = validFiles.slice(0, MAX_IMAGES - files.length);
      }
    }

    if (isVideoUpload) {
      const file = selectedFiles[0];
      if (!file?.type.startsWith('video/')) {
        newErrors.push('Only video files are allowed.');
      } else if (file.size > MAX_VIDEO_SIZE) {
        newErrors.push('Video size should be less than or equal to 20MB.');
      } else if (files.length >= MAX_VIDEOS) {
        newErrors.push('You can only upload 1 video.');
      } else {
        validFiles = [file];
      }
    }

    if (isPdfUpload) {
      selectedFiles.forEach((file) => {
        if (file.type !== 'application/pdf') {
          newErrors.push('Only PDF files are allowed.');
        } else if (file.size > MAX_PDF_SIZE) {
          newErrors.push('PDF size should be less than 10MB.');
        } else {
          validFiles.push(file);
        }
      });

      if (files.length + validFiles.length > MAX_PDFS) {
        newErrors.push('You can upload a maximum of 3 PDFs.');
        validFiles = validFiles.slice(0, MAX_PDFS - files.length);
      }
    }

    if (newErrors.length > 0) {
      const uniqueMessages = [...new Set(newErrors)];
      setError(uniqueMessages.join(' And '));
    }

    if (validFiles.length > 0) {
      setFiles((prev) => [...prev, ...validFiles]);
    }

    e.target.value = ''; // reset input
  };

  const handleRemove = (index) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== index));
    setError('');
  };

  const isDisabled =
    (isImageUpload && files.length >= MAX_IMAGES) ||
    (isVideoUpload && files.length >= MAX_VIDEOS) ||
    (isPdfUpload && files.length >= MAX_PDFS);

  return (
    <div className='w-full mt-1 bg-[#f5f3f1] p-4 rounded-xl border border-lightBorder'>
      <label className='block w-full cursor-pointer'>
        <div>
          <Button
            type='button'
            disabled={isDisabled}
            variant={files.length === 0 ? 'primary' : `secondary`}
            classname='!rounded-full !px-4 !py-2'
            text={
              files.length === 0
                ? 'No file chosen'
                : `${files.length} file${files.length > 1 ? 's' : ''} selected`
            }
            onClick={() => fileInputRef.current?.click()}
          />
        </div>

        <input
          ref={fileInputRef}
          type='file'
          accept={
            isImageUpload
              ? 'image/*'
              : isVideoUpload
              ? 'video/*'
              : isPdfUpload
              ? 'application/pdf'
              : ''
          }
          multiple={isImageUpload || isPdfUpload}
          disabled={isDisabled}
          onChange={handleFileChange}
          className='hidden'
        />
      </label>

      {files.length > 0 && (
        <ul className='mt-3 space-y-2 text-sm text-gray-800'>
          {files.map((file, idx) => (
            <li
              key={idx}
              className='flex items-center justify-between bg-purple-200 px-3 py-2 rounded-lg'
            >
              <span className='truncate w-[90%]'>{file.name}</span>
              <Button
                type='button'
                variant='primary'
                onClick={() => handleRemove(idx)}
                classname='!p-1 !rounded-full'
                icon={<X size={14} />}
              />
            </li>
          ))}
        </ul>
      )}

      {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
    </div>
  );
};

export default UploadBox;
