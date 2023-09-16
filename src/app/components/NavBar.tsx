import Link from 'next/link';

export default function NavBar() {
  return (
    <div className='fixed w-full z-20 top-0 left-0'>
      <div
        id='nav'
        className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='flex md:order-1'>
          <Link href='#home'>
            <button
              type='button'
              className='relative text-purple-400 text-xl w-fit block'>
              AN
            </button>
          </Link>
        </div>
        <div
          className='items-center justify-between w-min md:flex md:w-auto md:order-2'
          id='navbar-sticky'>
          <ul className='flex flex-row flex-wrap gap-0 p-4 md:p-0 font-medium md:flex-row md:gap-5 md:mt-0 '>
            <li>
              <Link
                href='#home'
                className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'
                aria-current='page'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='#about'
                className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                About
              </Link>
            </li>
            <li>
              <Link
                href='#experience'
                className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                Experience
              </Link>
            </li>
            <li>
              <Link
                href='#projects'
                className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='#yoga'
                className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                Yoga
              </Link>
            </li>
            <li>
              <Link
                href='#books'
                className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center'>
                Book Recs
              </Link>
            </li>
            <li>
              <Link
                href='#connect'
                className='relative text-l w-fit block after:block after:content-after:absolute after:h-[3px] after:bg-purple-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center '>
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
