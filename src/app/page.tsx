import Experience from './experience/page';
import NavBar from './components/NavBar';
import About from './about/page';
import Projects from './projects/page';
import Connect from './components/Connect';
import Pic from './components/Pic';
import Blog from './blog/page';
import Info from './components/Info';
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <div className='font-mono text-sm'>
      <NavBar />
      <div className='flex flex-row flex-wrap py-20'>
        <aside id='left-side' className='w-full sm:w-1/3 md:1/4 px-2'>
          <div className='sticky top-16 p-4'>
            <Pic />
          </div>
        </aside>
        <div id='right-side' className=' w-full sm:w-2/3 md:w3/4 pt-1 px-2'>
          <About />
          <Experience />
          <Projects />
          {/* @ts-expect-error Server Component */}
          <Blog />
          <Connect />
          <Info />
        </div>
      </div>
    </div>
  );
}
