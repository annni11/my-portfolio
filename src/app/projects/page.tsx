import NavBarProject from '../components/NavBarProject';
import PollseProject from './pollse/page';
import SheetsProject from './sheetsql-ifier/page';

export default function ProjectsPage() {
  return (
    <div className='font-mono text-sm'>
      <NavBarProject />
      <main className='pt-20'>
        <h1 className='text-lg text-purple-400 pb-1'>Projects:</h1>

        <PollseProject />

        <SheetsProject />
      </main>
    </div>
  );
}
