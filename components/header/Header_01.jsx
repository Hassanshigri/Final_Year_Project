'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import LogoLight from '../logo/LogoLight';

const Header_01 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header site-header--absolute is--white py-3'
      id='sticky-menu'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          {/* Header Logo */}
          <LogoLight />
          {/* Header Logo */}
          {/* Header Navigation */}
          {/* <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} /> */}
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className='flex items-center gap-6'>
            <Link
              href='/login'
              className='button hidden rounded-[50px] border-black bg-black text-white after:bg-[#4868a2] hover:border-[#4868a2] hover:text-white lg:inline-block'
            >
              Login
            </Link>
            <Link
              href='/signup'
              className='button hidden rounded-[50px] border-black bg-black text-white after:bg-[#4868a2] hover:border-[#4868a2] hover:text-white lg:inline-block'
            >
              Sign up free
            </Link>
            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className='mobile-menu-trigger is-black'
              >
                <span />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header_01;
