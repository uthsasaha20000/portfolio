import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/T4GztCs/2024-06-0309-43-47-ezgif-com-video-to-gif-converter.gif"
              alt="Project Demo 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project Title 1</h3>
              <p className="text-gray-700">
                Brief description of the project goes here. Explain what it does and any technologies used.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/s3ZXxXX/2024-06-0309-54-30-ezgif-com-video-to-gif-converter.gif"
              alt="Project Demo 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Project Title 2</h3>
              <p className="text-gray-700">
                Brief description of the second project goes here. Describe its features and technologies used.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
