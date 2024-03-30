import React from 'react';

function Services() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard 
          title="Web Development" 
          description="We specialize in building high-quality, responsive web applications using the latest technologies and best practices." 
          icon="fas fa-laptop-code"
        />
        <ServiceCard 
          title="UI/UX Design" 
          description="Our talented designers create intuitive and visually appealing user interfaces to enhance user experience." 
          icon="fas fa-paint-brush"
        />
        <ServiceCard 
          title="Digital Marketing" 
          description="We offer comprehensive digital marketing solutions to help your business reach its target audience and achieve its goals." 
          icon="fas fa-chart-line"
        />
        {/* Add more ServiceCard components for additional services */}
      </div>
    </div>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <i className={`${icon} text-4xl text-blue-500 mb-4`}></i>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}

export default Services;
