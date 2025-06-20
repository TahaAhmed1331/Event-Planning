const Chips = ({ label, value, color }) => {
  const colorStyles = {
    red: 'text-red-600 bg-red-100 border border-red-200',
    blue: 'text-blue-600 bg-blue-100 border border-blue-200',
    green: 'text-green-600 bg-green-100 border border-green-200',
    yellow: 'text-yellow-600 bg-yellow-100 border border-yellow-200',
    gray: 'text-gray-700 bg-gray-100 border border-gray-200', // fallback neutral
  };

  return (
    <div
      className={`
        inline-flex items-center gap-1
        px-3 py-1 rounded-full text-xs font-medium
        ${colorStyles[color] || colorStyles.gray}
      `}
    >
      {label && <span className='opacity-80'>{label}</span>}
      <span>{value}</span>
    </div>
  );
};

export default Chips;
