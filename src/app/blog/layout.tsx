import { Inter } from 'next/font/google';
import NavBarBlog from '../components/NavBarBlog';

const inter = Inter({ subsets: ['latin'] });
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id='blog-page' className={inter.className}>
      <div className='text-sm min-h-screen sm:min-h-screen md:min-h-screen sm:px-20 md:px-40 lg:px-60'>
        <NavBarBlog />
        <div className='flex flex-row flex-wrap pt-20 pb-10'>{children}</div>
      </div>
    </div>
  );
}
