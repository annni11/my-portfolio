import { Inter } from 'next/font/google';
import NavBarBlog from '../components/NavBarBlog';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const inter = Inter({ subsets: ['latin'] });
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id='blog-page' className={`${inter.className} container p-2 mx-auto`}>
      <div className='font-mono text-sm min-h-full sm:px-40 md:px-60'>
        <NavBarBlog />
        <div className='flex flex-row flex-wrap pt-20 pb-10'>{children}</div>
        <Link href='/#blogs' className=' hover:text-purple-400'>
          <ArrowBackIcon sx={{ fontSize: 16 }} /> Back to home
        </Link>
      </div>
    </div>
  );
}
