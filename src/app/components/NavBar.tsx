'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
import ThemeButton from './ThemeButton';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav id='nav' className='w-full fixed top-0 left-0 right-0 z-10'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Link href='#home'>
              <h2 className='text-2xl text-purple-400 '>AN</h2>
            </Link>

            <div className='md:hidden'>
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <Close /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'p-12 md:p-0 block' : 'hidden'
            }`}>
            <ul className='h-screen md:h-auto items-center justify-center md:flex gap-4'>
              <li className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                <Link href='#home' onClick={() => setNavbar(!navbar)}>
                  Home
                </Link>
              </li>
              <li className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                <Link href='#about' onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                <Link href='#experience' onClick={() => setNavbar(!navbar)}>
                  Experience
                </Link>
              </li>
              <li className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                <Link href='#projects' onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>
              <li className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                <Link href='#blog' onClick={() => setNavbar(!navbar)}>
                  Blog
                </Link>
              </li>
              <li className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                <Link href='#connect' onClick={() => setNavbar(!navbar)}>
                  Connect
                </Link>
              </li>
              <li>
                <ThemeButton />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
