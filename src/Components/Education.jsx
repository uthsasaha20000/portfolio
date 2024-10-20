// Education.jsx
import React from 'react';

const Education = () => {
  return (
    <section id = 'education' className="bg-white text-gray-800 p-6">
      <h2 className="text-4xl text-center font-bold mb-6 text-blue-600">Education</h2>
      <div className="flex flex-col items-center space-y-6">
        {/* Bachelor's Degree */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-2/3">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Bangladesh Army International University of Science & Technology</h3>
          <p className="text-lg font-semibold">Bachelor of Science in Computer Science</p>
          <p className="text-sm text-gray-600">April 2020 - May 2024</p>
          <p className="mt-3 text-gray-700">
            CGPA: <span className="font-semibold text-blue-600">3.55 / 4.00</span>
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Organized intra-university programming competitions and events.</li>
            <li>Represented the institution in various national-level programming competitions.</li>
          </ul>
        </div>

        {/* HSC */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-2/3">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Comilla Victoria Govt. College</h3>
          <p className="text-lg font-semibold">Higher Secondary Certificate(HSC)</p>
          <p className="text-sm text-gray-600">2017 -  2019</p>
          <p className="mt-3 text-gray-700">
            GPA: <span className="font-semibold text-blue-600">5.00</span>
          </p>
          <ul className="mt-4 list-disc list-inside">
            <li>Obtained <strong>189<sup>th</sup></strong> position in comilla board and got board scholarship (general category)</li>
          </ul>
        </div>


        {/* SSC */}
        <div className="bg-gray-100 border border-gray-300 rounded-lg shadow-lg p-6 w-full md:w-3/4 lg:w-2/3">
          <h3 className="text-xl font-bold text-blue-600 mb-2">Comilla Zilla School</h3>
          <p className="text-lg font-semibold">Secondary School Certificate (SSC)</p>
          <p className="text-sm text-gray-600">2012 -  2017</p>
          <p className="text-sm text-gray-600 mt-3">GPA: <span className="font-semibold text-blue-600">5.00</span></p>
        </div>
      </div>
    </section>
  );
};

export default Education;
