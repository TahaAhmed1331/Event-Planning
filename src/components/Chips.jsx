const Chips = ({ label, value, color }) => {
  const colorClasses = {
    red: 'border-red-600 text-red-600 bg-red-200',
    blue: 'border-blue-600 text-blue-600 bg-blue-200',
    green: 'border-green-600 text-green-600 bg-green-200',
    yellow: 'border-yellow-600 text-yellow-600 bg-yellow-200',
    // add more colors here
  };
  return (
    <div
      className={`
    flex justify-center items-center ${colorClasses[color] || ''}
      border-1 px-4 py-1 rounded-full text-sm`}
    >
      {label ? label + value : value}
    </div>
  );
};

export default Chips;
