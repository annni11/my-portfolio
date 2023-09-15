import Image from 'next/image';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between -24 container mx-auto px-20 py-10'>
      <div className='items-center font-mono text-sm lg:flex'>
        <NavBar></NavBar>
      </div>
    </main>
  );
}
