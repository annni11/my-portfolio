import Experience from './experience/page';
import NavBar from './components/NavBar';
import About from './about/page';
import Projects from './projects/page';
import Connect from './components/Connect';
import Pic from './components/Pic';
import Info from './components/Info';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Link from 'next/link';
import BlogList from './components/BlogList';

export default function Home() {
  return (
    <div className='font-mono text-sm'>
      <NavBar />
      <div className='flex flex-row flex-wrap py-20 px-2'>
        <aside id='left-side' className='w-full sm:w-1/3  px-2'>
          <div className='sticky top-16 p-4'>
            <Pic />
          </div>
        </aside>
        <div id='right-side' className=' w-full sm:w-2/3  pt-1 px-2'>
          <About />
          <Experience />
          <Projects />

          <section id='blog' className='pt-20 pr-3'>
            <h1 className='text-lg text-purple-400 pb-1'>Blog</h1>

            <BlogList />
          </section>

          <Link href='/blog' className=' hover:text-purple-400'>
            <AutoAwesomeIcon sx={{ fontSize: 18 }} />
            Check out all blogs here
          </Link>
          <Connect />
          <Info />
        </div>
      </div>
    </div>
  );
}
