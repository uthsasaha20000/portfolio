// Experience.jsx
import React from 'react';

const Experience = () => {
  return (
    <section className="bg-gray-50 text-gray-800 p-6" id = "experience">
      <h2 className="text-4xl text-center font-bold mb-6 text-blue-600">Experience</h2>
      <div className="flex flex-col items-center">
        {/* AlizenShop Experience */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-2/3">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Full-stack Developer</h3>
          <p className="text-lg font-semibold text-gray-700">Alizen world</p>
          <ul className="mt-3 list-disc list-inside text-gray-700">
            <li>Built APIs and ensuring security for user data and transactions.</li>
            <li>Designed the user interface (UI) for an intuitive and responsive shopping experience.</li>
            <li>Integrated third-party services such as payment gateways and shipping providers.</li>
            <li>Wrote efficient and maintainable code for both frontend and backend components.</li>
          </ul>
          <div className="mt-4">
            <span className="text-sm text-gray-500">Technologies used: React, Node.js, Express, MongoDB, Tailwind CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
