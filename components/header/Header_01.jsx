'use client';
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import LogoLight from '../logo/LogoLight';

const Header_01 = () => {
  const { isSignedIn } = useUser();

  return (
    <header className='site-header site-header--absolute is--white py-3' id='sticky-menu'>
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          {/* Header Logo */}
          <LogoLight />
          
          {/* Authentication Section */}
          <div className='flex items-center gap-6'>
            {isSignedIn ? (
              // Show user button with logout option
              <div className="flex items-center gap-2">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8",
                      userButtonPopoverActionButtonText: "text-red-500"
                    }
                  }}
                />
              </div>
            ) : (
              // Show login/signup buttons
              <>
                <Link
                  href='/login'
                  className='button hidden rounded-[50px] border-black bg-black text-white after:bg-[#4868a2] hover:border-[#4868a2] hover:text-white lg:inline-block'
                >
                  Login
                </Link>
                {/* <Link
                  href='/signup'
                  className='button hidden rounded-[50px] border-black bg-black text-white after:bg-[#4868a2] hover:border-[#4868a2] hover:text-white lg:inline-block'
                >
                  Sign up free
                </Link> */}
              </>
            )}
            
            {/* Mobile menu button (if needed) */}
            <div className='block lg:hidden'>
              <button className='mobile-menu-trigger is-black'>
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header_01;