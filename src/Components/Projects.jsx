import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-bold mb-6 text-blue-600">Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://i.ibb.co.com/WyYpySP/Screenshot-2024-10-20-193721.png"
                alt=""
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-3xl font-bold">Parcel Delivery Application</h3>
                {/* <p className="text-gray-700">
                  Tourists can share their visited places and find other visited places uploaded by others
                </p> */}
                <h4 className="mt-4 text-lg font-semibold text-blue-600">Features:</h4>
                <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
                  <li>
                    <strong>Authentication & Authorization:</strong> Secure login and role-based access control to ensure users have the correct permissions for their roles.
                  </li>
                  <li>
                    <strong>Parcel Booking & Status Tracking:</strong> Users can easily book parcels, view current status, and track updates as the order progresses.
                  </li>
                  <li>
                    <strong>Role-Based Routing:</strong> Dedicated routes for Admin, User, and Rider, providing access to role-specific features and dashboards.
                  </li>
                  <li>
                    <strong>Rider Selection & Assignment:</strong> Admins can assign riders to specific orders, with automatic status updates upon rider assignment.
                  </li>
                  <li>
                    <strong>Order Management:</strong> Features for order cancellation depending on the order's status, with the ability for admins to modify order details.
                  </li>
                </ul>
                <div className='my-3 text-blue-600 font-semibold flex gap-3 underline'>
                  <a className='flex gap-0.5' href = "https://github.com/khalid586/Deliver-parcel" target='_blank'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 text-green-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.388.6.111.82-.26.82-.578 0-.285-.01-1.239-.015-2.243-3.338.724-4.043-1.606-4.043-1.606-.548-1.387-1.338-1.758-1.338-1.758-1.093-.746.083-.73.083-.73 1.21.085 1.843 1.239 1.843 1.239 1.073 1.839 2.809 1.306 3.493.999.108-.776.42-1.306.764-1.605-2.665-.303-5.466-1.332-5.466-5.925 0-1.313.469-2.392 1.236-3.24-.124-.303-.537-1.523.116-3.173 0 0 1.008-.322 3.303 1.23.96-.267 1.99-.4 3.006-.404 1.016.004 2.046.137 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.65.241 2.87.118 3.173.769.848 1.236 1.927 1.236 3.24 0 4.605-2.805 5.619-5.465 5.922.43.373.816 1.104.816 2.223 0 1.605-.015 2.906-.015 3.304 0 .32.219.693.825.578A12.022 12.022 0 0024 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Client side
                  </a>
                  <a className='flex gap-0.5' href = "https://github.com/khalid586/Deliver-parcel-backend" target='_blank'>
                  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 text-red-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.388.6.111.82-.26.82-.578 0-.285-.01-1.239-.015-2.243-3.338.724-4.043-1.606-4.043-1.606-.548-1.387-1.338-1.758-1.338-1.758-1.093-.746.083-.73.083-.73 1.21.085 1.843 1.239 1.843 1.239 1.073 1.839 2.809 1.306 3.493.999.108-.776.42-1.306.764-1.605-2.665-.303-5.466-1.332-5.466-5.925 0-1.313.469-2.392 1.236-3.24-.124-.303-.537-1.523.116-3.173 0 0 1.008-.322 3.303 1.23.96-.267 1.99-.4 3.006-.404 1.016.004 2.046.137 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.65.241 2.87.118 3.173.769.848 1.236 1.927 1.236 3.24 0 4.605-2.805 5.619-5.465 5.922.43.373.816 1.104.816 2.223 0 1.605-.015 2.906-.015 3.304 0 .32.219.693.825.578A12.022 12.022 0 0024 12c0-6.627-5.373-12-12-12z" />
                      </svg>                  
                    Server side
                  </a>
                  <a className='flex gap-0.5' href = "https://deliver-0.web.app/" target='_blank'>
                      Live website
                  </a>
                </div>
              </div>
            </div>
          
          
          {/* Project 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/T4GztCs/2024-06-0309-43-47-ezgif-com-video-to-gif-converter.gif"
              alt="Project Demo 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-3xl font-bold">Tourist</h3>
              {/* <p className="text-gray-700">
                Tourists can share their visited places and find other visited places uploaded by others
              </p> */}
              <h4 className="mt-4 text-lg font-semibold text-blue-600">Features:</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
                <li><strong>Fullstack Application:</strong> Built with a complete stack, including both frontend and backend development for a fully functional web experience.</li>
                <li><strong>User Authorization:</strong> Role-based access control to ensure that users have the appropriate permissions to access specific features.</li>
                <li><strong>Private Routes:</strong> Ensures certain routes are accessible only to authenticated users, protecting sensitive pages and information.</li>
                <li><strong>Google and GitHub Authentication:</strong> Allows users to sign in using their Google or GitHub accounts for a quicker and more convenient login experience.</li>
              </ul>
              <div className='my-3 text-blue-600 font-semibold flex gap-3 underline'>
                <a className='flex gap-0.5' href = "https://github.com/khalid586/Tourist" target='_blank'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 text-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.388.6.111.82-.26.82-.578 0-.285-.01-1.239-.015-2.243-3.338.724-4.043-1.606-4.043-1.606-.548-1.387-1.338-1.758-1.338-1.758-1.093-.746.083-.73.083-.73 1.21.085 1.843 1.239 1.843 1.239 1.073 1.839 2.809 1.306 3.493.999.108-.776.42-1.306.764-1.605-2.665-.303-5.466-1.332-5.466-5.925 0-1.313.469-2.392 1.236-3.24-.124-.303-.537-1.523.116-3.173 0 0 1.008-.322 3.303 1.23.96-.267 1.99-.4 3.006-.404 1.016.004 2.046.137 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.65.241 2.87.118 3.173.769.848 1.236 1.927 1.236 3.24 0 4.605-2.805 5.619-5.465 5.922.43.373.816 1.104.816 2.223 0 1.605-.015 2.906-.015 3.304 0 .32.219.693.825.578A12.022 12.022 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Client side
                </a>
                <a className='flex gap-0.5' href = "https://github.com/khalid586/Tourist-Backend" target='_blank'>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.388.6.111.82-.26.82-.578 0-.285-.01-1.239-.015-2.243-3.338.724-4.043-1.606-4.043-1.606-.548-1.387-1.338-1.758-1.338-1.758-1.093-.746.083-.73.083-.73 1.21.085 1.843 1.239 1.843 1.239 1.073 1.839 2.809 1.306 3.493.999.108-.776.42-1.306.764-1.605-2.665-.303-5.466-1.332-5.466-5.925 0-1.313.469-2.392 1.236-3.24-.124-.303-.537-1.523.116-3.173 0 0 1.008-.322 3.303 1.23.96-.267 1.99-.4 3.006-.404 1.016.004 2.046.137 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.65.241 2.87.118 3.173.769.848 1.236 1.927 1.236 3.24 0 4.605-2.805 5.619-5.465 5.922.43.373.816 1.104.816 2.223 0 1.605-.015 2.906-.015 3.304 0 .32.219.693.825.578A12.022 12.022 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>                  
                  Server side
                </a>
                <a className='flex gap-0.5' href = "https://tourist-fa667.web.app/" target='_blank'>
                    Live website
                </a>
              </div>
            </div>
          </div>


          {/* Project 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/s3ZXxXX/2024-06-0309-54-30-ezgif-com-video-to-gif-converter.gif"
              alt=""
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-3xl font-bold">Books Buy</h3>
              {/* <p className="text-gray-700">
                Tourists can share their visited places and find other visited places uploaded by others
              </p> */}
              <h4 className="mt-4 text-lg font-semibold text-blue-600">Features:</h4>
              <ul className="list-disc list-inside text-gray-700 mt-2 text-sm">
                <li><strong>Fullstack Application:</strong> Built with a complete stack, including both frontend and backend development for a fully functional web experience.</li>
                <li><strong>User Authorization:</strong> Role-based access control to ensure that users have the appropriate permissions to access specific features.</li>
                <li><strong>Private Routes:</strong> Ensures certain routes are accessible only to authenticated users, protecting sensitive pages and information.</li>
                <li><strong>Google and GitHub Authentication:</strong> Allows users to sign in using their Google or GitHub accounts for a quicker and more convenient login experience.</li>
              </ul>
              <div className='my-3 text-blue-600 font-semibold flex gap-3 underline'>
                <a className='flex gap-0.5' href = "https://github.com/khalid586/Books-buy" target='_blank'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 text-green-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.388.6.111.82-.26.82-.578 0-.285-.01-1.239-.015-2.243-3.338.724-4.043-1.606-4.043-1.606-.548-1.387-1.338-1.758-1.338-1.758-1.093-.746.083-.73.083-.73 1.21.085 1.843 1.239 1.843 1.239 1.073 1.839 2.809 1.306 3.493.999.108-.776.42-1.306.764-1.605-2.665-.303-5.466-1.332-5.466-5.925 0-1.313.469-2.392 1.236-3.24-.124-.303-.537-1.523.116-3.173 0 0 1.008-.322 3.303 1.23.96-.267 1.99-.4 3.006-.404 1.016.004 2.046.137 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.65.241 2.87.118 3.173.769.848 1.236 1.927 1.236 3.24 0 4.605-2.805 5.619-5.465 5.922.43.373.816 1.104.816 2.223 0 1.605-.015 2.906-.015 3.304 0 .32.219.693.825.578A12.022 12.022 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    Client side
                </a>
                <a className='flex gap-0.5' href = "https://github.com/khalid586/Books-buy-backend" target='_blank'>
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-4 text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.388.6.111.82-.26.82-.578 0-.285-.01-1.239-.015-2.243-3.338.724-4.043-1.606-4.043-1.606-.548-1.387-1.338-1.758-1.338-1.758-1.093-.746.083-.73.083-.73 1.21.085 1.843 1.239 1.843 1.239 1.073 1.839 2.809 1.306 3.493.999.108-.776.42-1.306.764-1.605-2.665-.303-5.466-1.332-5.466-5.925 0-1.313.469-2.392 1.236-3.24-.124-.303-.537-1.523.116-3.173 0 0 1.008-.322 3.303 1.23.96-.267 1.99-.4 3.006-.404 1.016.004 2.046.137 3.006.404 2.295-1.552 3.303-1.23 3.303-1.23.653 1.65.241 2.87.118 3.173.769.848 1.236 1.927 1.236 3.24 0 4.605-2.805 5.619-5.465 5.922.43.373.816 1.104.816 2.223 0 1.605-.015 2.906-.015 3.304 0 .32.219.693.825.578A12.022 12.022 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>                  
                  Server side
                </a>
                <a className='flex gap-0.5' href = "/" target='_blank'>
                    Live website
                </a>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
