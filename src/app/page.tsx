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
    <main className='flex min-h-screen flex-col items-center justify-between -24 container mx-auto'>
      <div className='grid grid-cols-1 gap-10 items-center font-mono text-sm'>
        <header className='fixed w-full z-20 top-0 inline-block m-auto'>
          <NavBar></NavBar>
        </header>

        <section className='grid grid-cols-1 gap-10 items-center'>
          <Pic></Pic>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>

          <Yoga></Yoga>

          <Books></Books>
          <Connect></Connect>
          <footer className='fixed w-full z-20 bottom-0 inline-block m-auto'>
            <Footer></Footer>
          </footer>
        </section>
      </div>
    </main>
  );
}
