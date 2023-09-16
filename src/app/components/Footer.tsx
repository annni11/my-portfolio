import Link from 'next/link';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className='flex flex-row justify-evenly'>
      <Link href='https://github.com/annni11'>
        <GitHub sx={{ fontSize: 25, color: '#909090' }} />
      </Link>
      <Link href='https://www.linkedin.com/in/annabelleni/'>
        <LinkedIn sx={{ fontSize: 29, color: '#909090' }} />
      </Link>
    </div>
  );
}
