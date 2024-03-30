import React from 'react';
import nyanImage from '../images/nyan.jpg'; 

function About() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg mb-8">I'm a passionate developer dedicated to creating high-quality web applications. With several years of experience in web development, I specialize in frontend technologies such as React.js, along with expertise in HTML, CSS, and JavaScript.</p>
      <p className="text-lg mb-8">My goal is to leverage my skills to build innovative and user-friendly solutions that meet the needs of clients and users alike.</p>
      <div className="flex justify-center items-center">
        <img src={nyanImage} alt="Profile" className="rounded-full w-24 h-24 mr-4 object-cover" />
        <div>
          <h2 className="text-2xl font-semibold mb-2">Thar Htut Nyan</h2>
          <p className="text-lg">Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default About;
