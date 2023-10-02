import Link from 'next/link';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Socials() {
  return (
    <footer className='flex flex-row bottom-0 w-full px-2 gap-5 '>
      <Link href='mailto:ann.j.ni@gmail.com'>
        <Email
          sx={{
            fontSize: 30,
            color: '#a1a1aa',
            ':hover': { color: '#71717a' },
          }}
        />
      </Link>
      <Link
        href='https://github.com/annni11'
        rel='noopener noreferrer'
        target='_blank'>
        <GitHub
          sx={{
            fontSize: 28,
            color: '#a1a1aa',
            ':hover': { color: '#71717a' },
          }}
        />
      </Link>
      <Link
        href='https://www.linkedin.com/in/annabelleni/'
        rel='noopener noreferrer'
        target='_blank'>
        <LinkedIn
          sx={{
            fontSize: 30,
            color: '#a1a1aa',
            ':hover': { color: '#71717a' },
          }}
        />
      </Link>
    </footer>
  );
}
