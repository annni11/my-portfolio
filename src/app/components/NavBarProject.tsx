'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
import ThemeButton from './ThemeButton';

function NavBarProject() {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav id='nav' className='w-full fixed top-0 left-0 right-0 z-10'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <Link href='/'>
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
          <Link
            href='#pollse'
            onClick={() => setNavbar(!navbar)}
            className='hover:text-purple-400'>
            Pollse /
          </Link>
          <Link
            href='#sheetsql'
            onClick={() => setNavbar(!navbar)}
            className='hover:text-purple-400'>
            / SheetsQL-ifier
          </Link>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'p-12 md:p-0 block' : 'hidden'
            }`}>
            <ul className='h-screen md:h-auto items-center justify-center md:flex gap-4'>
              <li className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                <Link href='/' onClick={() => setNavbar(!navbar)}>
                  Home
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

export default NavBarProject;