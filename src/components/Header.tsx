"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3 } from 'react-icons/hi'; 
import { HiX } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  const closeMenu = () => {
    setIsMenuOpen(false); 
  };

  return (
    <header className="bg-[#A77D54] text-white py-5 flex justify-between items-center px-10 relative z-10">
      <h1 className="text-4xl font-bold">COFFEE HUB</h1>

    
      <nav className="hidden md:flex gap-10 text-white font-bold text-xl">
        <Link className=' hover:underline' href="/" onClick={closeMenu}>Home</Link>
        <Link className=' hover:underline' href="/About" onClick={closeMenu}>About</Link>
        <Link className=' hover:underline' href="/Sshop" onClick={closeMenu}>Shop</Link>
        <Link  className =' hover:underline'href="/Contact" onClick={closeMenu}>Contact</Link>
     
      </nav>

  
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
          className="text-black text-3xl cursor-pointer"
          onClick={toggleMenu} 
        />
      </div>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full h-full bg-[#A77D54] p-5 md:hidden z-20`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <HiX
            className="text-black text-3xl cursor-pointer"
            onClick={toggleMenu} 
          />
        </div>

        <nav className="flex flex-row items-center gap-3 text-white font-bold text-xl">
          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/About" onClick={closeMenu}>About</Link>
          <Link href="/Flowers" onClick={closeMenu}>Shop</Link>
          <Link href="/Contact" onClick={closeMenu}>Contact</Link>
         
        </nav>
      </div>
    </header>
  );
};

export default Header;