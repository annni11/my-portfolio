import { getBlog } from '../../../sanity/sanity.utils';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default async function BlogList() {
  const posts = await getBlog();

  const blogImg: any = [];
  const blogTxt: any = [];
  posts.forEach(post => {
    blogImg.push(
      <div className='pb-2' key={post._createdAt}>
        <Image
          src={post.image}
          alt={post.title}
          width={110}
          height={110}
          className='rounded-full aspect-square object-cover'></Image>
      </div>,
    );
    blogTxt.push(
      <div key={post.slug}>
        <Link
          href={`/blog/${post.slug}`}
          className=' underline hover:text-purple-400'>
          {post.title}
        </Link>
        <p>Category: {post.category}</p>
        <div className='truncate'>
          <PortableText value={post.content} />
        </div>
        <p>...</p>
        <Link href={`/blog/${post.slug}`} className=' hover:text-purple-400'>
          Read the full post <ArrowForwardIcon sx={{ fontSize: 16 }} />
        </Link>
      </div>,
    );
  });

  return (
    <div className='flex flex-row'>
      <div className='flex flex-col w-30 gap-2'>{blogImg}</div>

      <div className='flex flex-col w-full gap-2 overflow-hidden'>
        {blogTxt}
      </div>
    </div>
  );
}
