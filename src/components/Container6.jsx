import React from 'react';
import data from '../data/data.json';

function Container6() {
  return (
    <div className="container mt-3 flex flex-col justify-center items-center" style={{ height: '100vh', backgroundColor: 'transparent' }}>
      {/* Text Header */}
      <div className="w-full text-center mb-4">
        <h2 className="text-3xl font-bodoni mt-20 text-white">{data.container6.headerText}</h2>
      </div>
      
      {/* Image Container */}
      <div className="flex justify-center items-center w-full" style={{ backgroundColor: 'transparent', height: 'calc(100vh - 4rem)' }}>
        <img
          src={data.container6.imageUrl}
          alt="Logo"
          style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
        />
      </div>
    </div>
  );
}

export default Container6;
