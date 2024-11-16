import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 text-white p-4  sticky top-0 z-10 ">
      <div className="container mx-auto flex justify-center items-center">
        {/* <div className="text-xl font-bold">
          My Portfolio
        </div> */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`md:flex md:items-center w-full md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li>
              <a href="#about" className="block py-2 md:py-0">
                About uthsa
              </a>
            </li>
            <li>
              <a href="#experience" className="block py-2 md:py-0">
                Experience
              </a>
            </li>
            <li>
              <a href="#education" className="block py-2 md:py-0">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="block py-2 md:py-0">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block py-2 md:py-0">
                Projects
              </a>
            </li>
            <li>
              <a href="#achievements" className="block py-2 md:py-0">
                Achievements
              </a>
            </li>
            <li>
              <a href="#contact" className="block py-2 md:py-0">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
