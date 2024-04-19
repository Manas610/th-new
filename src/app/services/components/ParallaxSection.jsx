import React from 'react';

const ParallaxSection = ({ image, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        flexDirection: 'column',
        fontSize: '2rem'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
