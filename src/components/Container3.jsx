import React from 'react';
import data from '../data/data.json';

function Container3() {
  return (
    <div className="container mt-3">
      {/* Header */}
      <div className="bg-opacity-0 p-4">
        <h2 className="text-3xl font-bodoni text-white">{data.container3.headerText}</h2>
      </div>

      {/* Image Gallery */}
      <div className="image-scroll flex overflow-x-auto overflow-y-hidden justify-start mt-12 mb-4 pb-30 whitespace-nowrap" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollbarColor: 'transparent transparent' }}>
        {data.container3.imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`C3img ${index + 1}`}
            className="w-128 h-96 mr-10 rounded-lg transition-transform flex-shrink-0 hover:scale-125"
          />
        ))}
      </div>
    </div>
  );
}

export default Container3;
