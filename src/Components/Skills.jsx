// Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C/C++', icon: '🔥' },
    { name: 'JavaScript', icon: '💻' },
    { name: 'Python', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'Node', icon: '🌐' },
    { name: 'Express', icon: '🚀' },
    { name: 'MongoDB', icon: '📦' },
  ];

  return (
    <section className="bg-gray-100 text-gray-800 p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 border border-gray-300 rounded-lg shadow-md bg-white hover:bg-blue-50 transition duration-300"
          >
            <span className="text-2xl mr-3">{skill.icon}</span>
            <span className="text-lg font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
