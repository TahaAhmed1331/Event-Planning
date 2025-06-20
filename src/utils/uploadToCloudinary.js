export const uploadToCloudinary = async (file, resourceType = 'auto') => {
  const cloudName = 'dmiozhmko'; // replace with your cloud name
  const uploadPreset = 'usmanFYP'; // replace with your preset

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error('Upload failed');
  }

  const data = await response.json();
  console.log(data.secure_url);
  return data.secure_url;
};
