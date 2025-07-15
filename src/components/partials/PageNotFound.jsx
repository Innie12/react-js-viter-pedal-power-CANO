import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
      <div className="text-center mt-64 ">
        <h1 className="text-9xl mb-3 font-bold text-gray-700">404</h1>
        <p className="mb-10 text-3xl">Oppss...This Page Not Found!</p>
        <Link
          to="/"
          className="inline-block underline text-black font-large transition transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default PageNotFound
