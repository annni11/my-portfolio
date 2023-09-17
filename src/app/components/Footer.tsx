import Link from 'next/link';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Footer() {
  return (
    <footer className='flex flex-row fixed bottom-0 w-full py-2 px-2 gap-5 '>
      <Link href='mailto:ann.j.ni@gmail.com'>
        <Email sx={{ fontSize: 24, color: '#909090' }} />
      </Link>
      <Link
        href='https://github.com/annni11'
        rel='noopener noreferrer'
        target='_blank'>
        <GitHub sx={{ fontSize: 20, color: '#909090' }} />
      </Link>
      <Link
        href='https://www.linkedin.com/in/annabelleni/'
        rel='noopener noreferrer'
        target='_blank'>
        <LinkedIn sx={{ fontSize: 24, color: '#909090' }} />
      </Link>
    </footer>
  );
}
