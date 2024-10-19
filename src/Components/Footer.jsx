import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-16 md:py-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold">Contact Me</h4>
          <p>Email: <a href="mailto:khalidcomilla58@gmail.com" className="underline">khalidcomilla58@gmail.com</a></p>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold">My profiles</h4>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/khalid-abdullah-47b655190/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              {/* LinkedIn Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M19.428 2H4.572C2.052 2 0 4.052 0 6.572v10.856C0 19.948 2.052 22 4.572 22h14.856C21.948 22 24 19.948 24 17.428V6.572C24 4.052 21.948 2 19.428 2zM8.367 18.048H5.758V10.576h2.609v7.472zm-1.304-8.558c-.84 0-1.526-.688-1.526-1.54 0-.851.686-1.538 1.526-1.538s1.527.687 1.527 1.538c0 .852-.687 1.54-1.527 1.54zm13.601 8.558h-2.609v-3.96c0-2.211-.445-3.827-2.363-3.827-1.853 0-2.619 1.172-2.619 3.44v4.348h-2.609V10.576h2.609v1.014c.346-.536.95-1.304 2.347-1.304 1.716 0 3.038 1.086 3.038 3.454v5.308z" />
              </svg>
            </a>
            <a href="https://github.com/khalid586" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.388.6.111.82-.26.82-.578 0-.285-.01-1.239-.015-2.243-3.338.724-4.043-1.606-4.043-1.606-.548-1.387-1.338-1.758-1.338-1.758-1.093-.746.083-.73.083-.73 1.21.085 1.843 1.239 1.843 1.239 1.073 1.839 2.809 1.306 3.493.999.108-.776.42-1.306.764-1.605-2.665-.303-5.466-1.332-5.466-5.925 0-1.313.469-2.392 1.236-3.24-.124-.303-.537-1.523.116-3.173 0 0 1.008-.322 3.303 1.23.96-.267 1.99-.4 3.006-.404 1.016.004 2.046.137 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.65.241 2.87.118 3.173.769.848 1.236 1.927 1.236 3.24 0 4.605-2.805 5.619-5.465 5.922.43.373.816 1.104.816 2.223 0 1.605-.015 2.906-.015 3.304 0 .32.219.693.825.578A12.022 12.022 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
