import { getBlogFull } from '../../../sanity/sanity.utils';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import Link from 'next/link';
export default async function Blog() {
  const posts = await getBlogFull();

  const blog: any = [];

  posts.forEach(post => {
    blog.push(
      <div key={`blogPage+${post._createdAt}`} className='flex flex-row'>
        <Image
          src={post.image}
          alt={post.title}
          width={110}
          height={110}
          className='rounded-full aspect-square object-cover'></Image>

        <div key={post.slug} className='pl-2'>
          <Link
            href={`/blog/${post.slug}`}
            className=' underline hover:text-purple-400'>
            {post.title}
          </Link>
          <p>Category: {post.category}</p>
          <p className='italic'>{post.description}</p>
          <Link href={`/blog/${post.slug}`} className=' hover:text-purple-400'>
            Read the full post <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </div>
      </div>,
    );
  });
  return (
    <main>
      <h1 className='text-lg text-purple-400 pb-1'>Blogs:</h1>
      <section className='flex flex-col gap-8 pt-5 pb-20'>{blog}</section>
      <Link href='/#blogs' className=' hover:text-purple-400'>
        <ArrowBackIcon sx={{ fontSize: 16 }} /> Back to home
      </Link>
    </main>
  );
}
