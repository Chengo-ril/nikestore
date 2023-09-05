import { useState } from 'react';
import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';

import { FaBars, FaTimes } from 'react-icons/fa';



import { navLinks } from '../constants';

const Nav = () => {
  
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className='bg-primary'>
      <div className='mx-auto px-4 sm:px-6 lg:px-10'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <a href="/">
            <img 
                  src={headerLogo}
                  alt='Logo'
                  width={130}
                  height={29}
            />
            </a>
          </div>
          <div className='hidden md:block'>
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((item) => (
                   <div key={item.label}>
                   <a
                     href={item.href}
                     className='text-slate-gray transition-all duration-500 hover:bg-coral-red hover:text-white px-3 py-2 rounded-md text-md font-medium'
                   >
                       {item.label}
                   </a>
                  </div>
                ))}
              </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
              <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center rounded-md text-gray-800 hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                <span className='sr-only'>Open Main Menu</span>
                { open === true ? <FaTimes /> : <FaBars />}
              </button>
          </div>
        </div>
      </div>
      {open ? (
        <div className='md:hidden'>
          <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navLinks.map((item) => (
               <div key={item.label}>
               <a
                 href={item.href}
                 className='text-slate-gray hover:bg-coral-red hover:text-white block px-3 py-2 rounded-md text-base font-medium'
               >
                   {item.label}
               </a>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Nav