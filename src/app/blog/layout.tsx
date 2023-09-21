import { Inter } from 'next/font/google';
import NavBarBlog from '../components/NavBarBlog';
const inter = Inter({ subsets: ['latin'] });
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id='blog-page' className={`${inter.className} container p-2 mx-auto`}>
      <div className='font-mono text-sm min-h-full'>
        <NavBarBlog />
        <div className='flex flex-row flex-wrap py-20'>{children}</div>
      </div>
    </div>
  );
}
