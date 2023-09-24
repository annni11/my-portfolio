import Link from 'next/link';
import NavBarProject from '../components/NavBarProject';
import PollseProject from './pollse/page';
import SheetsProject from './sheetsql-ifier/page';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function ProjectsPage() {
  return (
    <div className='font-mono text-sm px-2'>
      <NavBarProject />
      <main>
        <PollseProject />

        <SheetsProject />
      </main>
      <div className='pt-8'>
        <Link href='/#projects' className=' hover:text-purple-400'>
          <ArrowBackIcon sx={{ fontSize: 16 }} /> Back to home
        </Link>
      </div>
    </div>
  );
}
