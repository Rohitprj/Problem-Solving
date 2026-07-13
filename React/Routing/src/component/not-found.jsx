// import React from 'react'

// export default function NotFound() {
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//       <p>The page you are looking for does not exist.</p>
//     </div>
//   )
// }

import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-yellow-300 to-yellow-400 px-4">
      <div className="flex flex-col items-center text-center text-black">
        <img
          src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
          alt="404"
          className="mb-6 w-72 max-w-full md:w-96"
        />

        <h1 className="mb-6 text-5xl font-extrabold md:text-7xl">
          404 PAGE
        </h1>

        <p className="mb-3 text-lg md:text-xl">
          The page you were looking for could not be found.
        </p>

        <p className="mb-8 text-sm text-gray-700">
          ... Back to previous page
        </p>

        <button
          onClick={() => navigate(-1)}
          className="rounded-full bg-white px-10 py-4 text-xl font-black text-black shadow-[0_20px_70px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,0.3)] hover:ring-4 hover:ring-black"
        >
          ← Back to previous page
        </button>
      </div>
    </div>
  );
};

export default NotFound;