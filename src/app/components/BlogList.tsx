import { getBlog } from '../../../sanity/sanity.utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default async function BlogList() {
  const posts = await getBlog();
  console.log('this is posts', posts);
  const blogPosts = [];
  posts.forEach(post => {
    blogPosts.push(
      <div key={post._id} className='flex flex-row flex-wrap max-w-full pb-2'>
        <div id='left-side' className='w-full sm:w-1/6'>
          <Image
            src={post.image}
            alt={post.title}
            width={110}
            height={110}
            className='rounded-full aspect-square object-cover'></Image>
        </div>
        <div id='right-side' className='w-full sm:w-5/6'>
          <h1>{post.title}</h1>
          <h2>Category: {post.category}</h2>
          <div className='truncate'>
            <PortableText value={post.content} />
            <p>...</p>
          </div>
          <Link href={`/blog/${post.slug}`} className=' hover:text-purple-400'>
            Read the full post <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </div>
      </div>,
    );
  });

  return <div className='pb-2 w-full'>{blogPosts}</div>;
}
