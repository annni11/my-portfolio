import Experience from './components/Experience';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Yoga from './components/Yoga';
import Books from './components/Books';
import Connect from './components/Connect';
import Footer from './components/Footer';
import Pic from './components/Pic';

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='flex flex-row flex-wrap py-20'>
        <aside
          id='left-side'
          className='bg-blue-500 w-full sm:w-1/3 md:1/4 px-2'>
          <div className='sticky top-16 p-4'>
            <Pic />
          </div>
        </aside>
        <div
          id='right-side'
          className='bg-red-500 w-full sm:w-2/3 md:w3/4 pt-1 px-2'>
          <About />
          <Experience />
          <Projects />
          <Yoga />
          <Books />
          <Connect />
        </div>
      </div>
    </div>
  );
}
