// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import Navlink from './NavLink';

const NavLinks = [
  { title: 'Home', path: '#home' },
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact', path: '#contact' },
];

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/">
          <span className="text-5xl text-white font-semibold cursor-pointer">LOGO</span>
        </Link>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className='flex flex-col p-4 mt-4 bg-black rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black'>
            {NavLinks.map((link, index) => (
              <li key={index}>
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
