import Experience from './experience/page';
import NavBar from './components/NavBar';
import About from './about/page';
import Projects from './projects/pollse/page';
import Connect from './components/Connect';
import Pic from './components/Pic';
import Info from './components/Info';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import BlogList from './components/BlogList';
import ProjectList from './components/ProjectList';

export default function Home() {
  return (
    <div className='font-mooli text-sm'>
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
          <ProjectList />

          <section id='blog' className='pt-20 pr-3 pb-3'>
            <h1 className='text-lg text-purple-400 pb-3'>Blog</h1>

            <BlogList />
          </section>

          <Link href='/blog' className=' hover:text-purple-400'>
            Read all blogs <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
          <Connect />
          <Info />
        </div>
      </div>
    </div>
  );
}
