const Loader = () => {
  return (
    <div className='flex justify-center rounded-3xl bg-white/80 w-full h-full z-[9999] absolute top-0 left-0 backdrop-blur-[11px] items-center'>
      <div className='w-8 h-8 border-4 border-t-transparent border-primary rounded-full animate-spin' />
    </div>
  );
};

export default Loader;
