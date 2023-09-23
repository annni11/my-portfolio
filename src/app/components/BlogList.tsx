import { getBlog } from '../../../sanity/sanity.utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default async function BlogList() {
  const posts = await getBlog();
  console.log('this is posts:', posts);

  const blog: any = [];

  posts.forEach(post => {
    console.log('this is image!', post.image);
    blog.push(
      <div className='flex flex-row gap-2'>
        <Image
          src={post.image}
          alt={post.title}
          width={110}
          height={110}
          className='rounded-full aspect-square object-cover'></Image>

        <div key={post.slug}>
          <Link
            href={`/blog/${post.slug}`}
            className=' underline hover:text-purple-400'>
            {post.title}
          </Link>
          <p>Category: {post.category}</p>
          <div className='truncate h-5'>
            <PortableText value={post.content} />
          </div>

          <Link href={`/blog/${post.slug}`} className=' hover:text-purple-400'>
            Read the full post <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </div>
      </div>,
    );
  });

  return <div className='flex flex-col gap-2'>{blog}</div>;
}
