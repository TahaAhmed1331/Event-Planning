import { useEffect, useState } from 'react';
import Typography from '../components/Typography';
import Button from '../components/Button';
import Inputfield from './Inputfield';
import UploadBox from './MediaUpload';
import { uploadToCloudinary } from '../utils/uploadToCloudinary';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const SentProposalForm = () => {
  const { id: projectId } = useParams();
  const [formData, setFormData] = useState({
    proposal: '',
    images: [],
    video: null,
    pdf: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(false);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser?.proposals?.includes(projectId)) {
      setIsDisable(true);
    }
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, proposal: e.target.value });
  };

  const handleMediaChange = (type, files) => {
    setFormData((prev) => ({ ...prev, [type]: files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.proposal.trim()) {
      setIsDisable(true);
      toast.error('Proposal is required', {
        onClose: () => setIsDisable(false),
      });
      return;
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const allUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (!currentUser) {
      toast.error('You must be logged in to submit a proposal');
      return;
    }

    // Check if already submitted proposal for this project
    if (currentUser.proposals?.includes(projectId)) {
      toast.error('You have already submitted a proposal for this project.');
      return;
    }
    setIsLoading(true);

    try {
      const uploadedImageUrls = [];
      const uploadedPdfUrls = [];
      let uploadedVideoUrl = '';

      if (formData.images.length > 0) {
        for (const image of formData.images) {
          const url = await uploadToCloudinary(image, 'image');
          uploadedImageUrls.push(url);
        }
      }

      if (formData.video) {
        uploadedVideoUrl = await uploadToCloudinary(formData.video, 'video');
      }

      if (formData.pdf.length > 0) {
        for (const doc of formData.pdf) {
          const url = await uploadToCloudinary(doc, 'auto');
          uploadedPdfUrls.push(url);
        }
      }

      const payload = {
        proposal: formData.proposal,
        images: uploadedImageUrls,
        video: uploadedVideoUrl,
        pdfs: uploadedPdfUrls,
      };

      console.log('Ready to submit to backend:', payload);

      // Simulate sending to backend
      // await fetch('/api/submit-proposal', { method: 'POST', body: JSON.stringify(payload) })

      toast.success('Proposal submitted successfully!');
      // Add projectId to user's proposals
      const updatedUser = {
        ...currentUser,
        proposals: [...(currentUser.proposals || []), projectId],
      };

      // Save updated current user
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));

      // Update user in main users list
      const updatedUsers = allUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Reset the form
      setFormData({
        proposal: '',
        images: [],
        video: null,
        pdf: [],
      });
    } catch (error) {
      console.error('Upload failed:', error);
      toast.error('Upload failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`w-full border bg-white/20 min-h-[70vh] 
    relative overflow-hidden border-lightBorder rounded-3xl px-6 py-8
     shadow-lg ${
       isDisable
         ? 'opacity-70 pointer-events-none'
         : 'opacity-100 pointer-events-auto'
     }`}
    >
      <Typography
        variant='heading'
        className='mb-6 text-center text-BlackText'
      >
        Send Your Proposal
      </Typography>

      {isLoading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit}
          className='space-y-6 '
        >
          <Inputfield
            type='textarea'
            placeholder='Write your detailed proposal here...'
            name='description'
            value={formData.proposal}
            onChange={handleChange}
          />

          <div className='flex flex-col gap-10'>
            <div className='my-2'>
              <Typography
                variant='normal'
                className='font-semibold'
              >
                Past Project Images
              </Typography>
              <UploadBox
                type='imageDropBox'
                onChange={handleMediaChange}
              />
            </div>

            <div className='my-2'>
              <Typography className='font-semibold'>
                Past Project Video
              </Typography>
              <UploadBox
                type='videoDropBox'
                onChange={handleMediaChange}
              />
            </div>

            <div className='my-2'>
              <Typography className='font-semibold'>
                Past Project PDFs
              </Typography>
              <UploadBox
                type='pdfDropBox'
                onChange={handleMediaChange}
              />
            </div>
          </div>

          <div className='flex justify-end pt-4'>
            <Button
              disabled={isDisable}
              type='submit'
              variant='primary'
              text={isDisable ? 'Proposal Sent' : 'Submit Proposal'}
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default SentProposalForm;
