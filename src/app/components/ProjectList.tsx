import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function ProjectList() {
  return (
    <section id='projects' className='pt-20'>
      <h1 className='text-lg text-purple-400 pb-3'>Projects</h1>
      <div>
        <p>Pollse</p>
        <p className='text-zinc-500 italic'>
          Application for gathering consensus with real-time response view
        </p>
        <Link href={`/projects/#pollse`} className='hover:text-purple-400'>
          View project <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Link>
      </div>
      <div className='pt-3'>
        <p>SheetsQL-ifier</p>
        <p className='text-zinc-500 italic'>
          Application for import and export between Google Sheets and PostgresQL
          databases
        </p>
        <Link href={'/projects/#sheetsql'} className='hover:text-purple-400'>
          View project <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Link>
      </div>
    </section>
  );
}
