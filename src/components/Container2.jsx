import React from 'react';
import data from '../data/data.json';

function Container2() {
  // Updated inline style object for clipping
  const clipStyle = {
    clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
    outline: '2px solid black',
    margin: '2px'
  };

  return (
    <div className="container mt-3">
      {/* Header */}
      <div className="bg-opacity-0 p-4 mb-7">
        <h2 className="text-3xl text-white font-bodoni">{data.container2.servicesHeaderText}</h2>
      </div>
      
      {/* Body */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4 relative">
          {/* Mapping over services from data.json */}
          {data.container2.services.map((service, index) => (
            <div className="relative" key={index}>
              <div style={{ padding: '5px', backgroundColor: 'rgba(243, 244, 246, 0.05)', clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                <div className="p-6 rounded-tr-lg rounded-bl-lg text-white text-center" style={{ ...clipStyle, height: '250px', position: 'relative', backgroundColor: '#262A32' }}>
                  <div className="flex flex-col justify-between h-full relative">
                    {/* Icon */}
                    <img src={service.icon} alt={`Service ${index + 1}`} className="w-16 h-16 absolute -top-6 left-1/2 transform -translate-x-1/2" />
                    <div>
                      <h3 className="text-lg font-bold mt-10">{service.title}</h3>
                      <p className="mt-4">{service.description}</p>
                    </div>
                    <div>
                      <button className="relative overflow-hidden text-black py-2 px-4 rounded-tr-lg rounded-bl-lg text-sm inline-block mt-4"
                        style={{
                          background: 'linear-gradient(to right, #9291B5, #E7B7B3, #CE8DC2)',
                          textShadow: '0 0 2px #000, 0 0 2px #000',
                          border: '3px double #000'
                        }}
                      >
                        {service.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Container2;
