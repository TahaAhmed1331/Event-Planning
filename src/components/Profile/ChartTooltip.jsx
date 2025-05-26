const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '8px',
          fontSize: '14px',
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <p style={{ margin: 0 }}>{label}</p>
        <p
          style={{ margin: 0 }}
          className='font-bold'
        >
          {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
