import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="px-6 md:px-12 py-8 bg-[#2A254B] mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-[80px] lg:gap-[150px]">
          {/* Menu Section */}
          <div className="text-gray-500">
            <h1 className="text-lg md:text-xl font-bold">Menu</h1>
            <div className="space-y-2">
              <h1><Link href={'/'}>New Arrivals</Link></h1>
              <h1><Link href={'/'}>Best sellers</Link></h1>
              <h1><Link href={'/'}>Recently viewed</Link></h1>
              <h1><Link href={'/'}>Popular this week</Link></h1>
              <h1><Link href={'/'}>All Products</Link></h1>
            </div>
          </div>

          {/* Categories Section */}
          <div className="text-gray-500">
            <h1 className="text-lg md:text-xl font-bold">Categories</h1>
            <div className="space-y-2">
              <h1><Link href={'/'}>Crockery</Link></h1>
              <h1><Link href={'/'}>Furniture</Link></h1>
              <h1><Link href={'/'}>Homeware</Link></h1>
              <h1><Link href={'/'}>Plant pots</Link></h1>
              <h1><Link href={'/'}>Chairs</Link></h1>
            </div>
          </div>

          {/* Company Section */}
          <div className="text-gray-500">
            <h1 className="text-lg md:text-xl font-bold">Our Company</h1>
            <div className="space-y-2">
              <h1><Link href='/about'>About us</Link></h1>
              <h1><Link href={'/'}>Vacancies</Link></h1>
              <h1><Link href={'/'}>Contact us</Link></h1>
              <h1><Link href={'/'}>Privacy</Link></h1>
              <h1><Link href={'/'}>Return policy</Link></h1>
            </div>
          </div>

          {/* Mailing List Section */}
          <div className="text-white">
            <h1 className="text-lg md:text-xl font-bold">Join our mailing list</h1>
            <div className="mt-4 flex items-center justify-center w-[300px] h-[300px] border border-white rounded-md p-4 bg-[#2A254B]">
              <div className="flex flex-col items-center space-y-4">
                <input
                  type="text"
                  placeholder="your@email.com"
                  className="w-[80%] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md"
                />
                <button className="w-[80%] h-[48px] bg-white text-[#2A254B] rounded-md">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="bg-[#4E4D93] my-8" />

        {/* Footer Bottom Section */}
        <div className="flex flex-wrap justify-between items-center text-white gap-4">
          <div>
            <h1>Copyright 2022 Avion LTD</h1>
          </div>
          <div className="flex gap-4">
            <Link href={'/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
