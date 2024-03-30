import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg mb-8">We'd love to hear from you!</p>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <FiMail className="text-3xl mb-2" />
          <p>Email: example@example.com</p>
        </div>
        <div className="flex flex-col items-center">
          <FiPhone className="text-3xl mb-2" />
          <p>Phone: +1234567890</p>
        </div>
        <div className="flex flex-col items-center">
          <FiMapPin className="text-3xl mb-2" />
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>
      {/* Contact Form */}
      <form className="mt-8 w-full max-w-lg">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400" />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-2">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
