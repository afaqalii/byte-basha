'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '@/utils/constants';
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image src="/assets/logo.jpg" alt="Logo" width={40} height={40} />
            <h1 className='font-bold ml-2'>Byte Basha</h1>
          </Link>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`${pathname === item.href ? 'text-yellowLight scale-105' : ''} px-3 py-2 rounded-md text-[15.5px] font-semibold ${index === navItems.length - 1 ? 'btn-yellow' : 'text-gray-700 hover:text-yellowLight duration-150 hover:scale-105'}`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden transform transition-transform ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
      >
        <div className="px-2 pt-2 pb-5 space-y-1 sm:px-3">
          {navItems.slice(0, navItems.length - 1).map((item, index) => (
            <Link
              key={index}
              href={`/${item.text.toLowerCase().replace(/ /g, '-')}`}
              className={`${pathname === item.href ? 'text-yellowLight' : ''} text-gray-700 hover:text-yellowLight duration-150 block px-3 py-2 rounded-md text-base font-medium`}
            >
              {item.text}
            </Link>
          ))}
          <button className='btn-yellow'>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
