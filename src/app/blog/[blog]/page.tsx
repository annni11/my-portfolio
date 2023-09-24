import Link from 'next/link';
import { getBlogPage } from '../../../../sanity/sanity.utils';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
type Props = {
  params: { blog: string };
};

export default async function BlogPage({ params }: Props) {
  const slug = params.blog;

  const post = await getBlogPage(slug);

  const date = post._createdAt.slice(0, 10);
  return (
    <div className='w-full pt-20 px-2'>
      <Image
        src={post.image}
        alt={post.title}
        width={300}
        height={300}
        className='border-solid border-4 border-purple-300 rounded-full aspect-square object-cover block mx-auto'></Image>

      <article className='pt-5 pb-12'>
        <h1 className='text-2xl text-purple-400'>{post.title}</h1>
        <h1 className='italic'>{post.description}</h1>
        <br />
        <h2>Category: {post.category}</h2>
        <h2>Published on: {date}</h2>
        <div className='py-5'>
          <PortableText value={post.content} />
        </div>
      </article>

      <Link href='/blog' className=' hover:text-purple-400'>
        <ArrowBackIcon sx={{ fontSize: 16 }} /> Back to blogs
      </Link>
    </div>
  );
}
