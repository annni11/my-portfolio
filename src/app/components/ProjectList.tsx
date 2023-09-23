import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function ProjectList() {
  return (
    <section id='projects' className='pt-20'>
      <h1 className='text-lg text-purple-400 pb-1'>Projects</h1>
      <p>Pollse</p>
      <p className='text-zinc-500 italic'>
        Application for gathering consensus with real-time response view
      </p>
      <Link href={`/projects/pollse`}>
        View project <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </Link>
      <br />
      <p>SheetsQL-ifier</p>
      <p className='text-zinc-500 italic'>
        Application for import and export between Google Sheets and PostgresQL
        databases
      </p>
      <Link href={'/projects/sheetsql-ifier'}>
        View project <ArrowForwardIcon sx={{ fontSize: 16 }} />
      </Link>
    </section>
  );
}
