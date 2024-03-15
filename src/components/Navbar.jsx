import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="text-amber-300 flex flex-col">
      <div className="mt-10 sm:ml-4 flex flex-col text-sm">
        <div>
          <div className="block w-20 transition-all duration-300 ease-in-out hover:translate-x-2 hover:underline">
            <Link to="/about" className="block p-4">About</Link>
          </div>
          <div className="block w-20 transition-all duration-300 ease-in-out hover:translate-x-2 hover:underline">
            <Link to="/projects" className="block p-4">Projects</Link>
          </div>
          <div className="block w-20 transition-all duration-300 ease-in-out hover:translate-x-2 hover:underline">
            <Link to="/contact" className="block p-4">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
