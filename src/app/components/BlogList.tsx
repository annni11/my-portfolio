import { getBlogSlice } from '../../../sanity/sanity.utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default async function BlogList() {
  const posts = await getBlogSlice();

  const blog: any = [];

  posts.forEach(post => {
    blog.push(
      <div key={`blogList+${post._createdAt}`} className='flex flex-row gap-2'>
        <Image
          src={post.image}
          alt={post.title}
          width={110}
          height={110}
          className='rounded-full aspect-square object-cover'></Image>

        <div key={post.slug} className='w-full'>
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

  return <div className='flex flex-col gap-2 w-full'>{blog}</div>;
}
