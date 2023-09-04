import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import front from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 flex items-center justify-between ml-4 mr-4 sm:ml-14 sm:mr-14">
      {/* Logo on the left */}
      <Link to='/'>
        <img src={front} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16" />
      </Link>
      {/* Centered navigation items for medium and larger screens */}
      <ul className="hidden sm:flex space-x-6">
        <li>
          <Link to='/' className="hover:text-blue-500">Home</Link>
        </li>
        <li>
          <Link to='/rooms' className="hover:text-blue-500">Rooms</Link>
        </li>
        <li>
          <Link to='/facilities' className="hover:text-blue-500">Facilities</Link>
        </li>

        <li>
          <Link to='/contacts' className="hover:text-blue-500">Contact Us</Link>
        </li>
      </ul>

      {/* Menu icon for small screens */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-gray-500 hover:text-blue-500">
          <FaBars />
        </button>
      </div>

      {/* "BOOK NOW" button on the right for large screens */}
      <Link to='/'>
      <button className="hidden sm:block bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-full">
        BOOK NOW
      </button>
      </Link>

      {/* Mobile menu for small screens */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 right-4 bg-white p-4 space-y-2">
          <li>
            <Link to='/' className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to='/rooms' className="hover:text-blue-500">Rooms</Link>
          </li>
          <li>
            <Link to='/facilities' className="hover:text-blue-500">Facilities</Link>
          </li>
          <li>
            <Link to='/contacts' className="hover:text-blue-500">Contact Us</Link>
          </li>
          {/* "BOOK NOW" button for small screens */}
          <Link to='/'>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full">
            BOOK NOW
          </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
