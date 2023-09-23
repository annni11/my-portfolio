import { PortableText } from '@portabletext/react';
import { getProjectPage } from '../../../../sanity/sanity.utils';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';

export default async function PollseProject() {
  const project = await getProjectPage('pollse');

  const projectImages: any = [];

  project.images.forEach((image: string | StaticImport) => {
    projectImages.push(
      <div key={`pollseImage+${project._createdAt}`} className='rounded-sm'>
        <Image
          src={image}
          alt={project.title}
          width={250}
          height={250}
          className='rounded-xl'></Image>
      </div>,
    );
  });

  return (
    <section id='pollse' className='pt-20'>
      <div>
        <h1 className='text-lg pb-3'>Pollse</h1>
        <p className='text-zinc-500 italic'>{project.description}</p>
        <Link
          href='https://github.com/CTRI17-Pikachu/Pollse'
          rel='noopener noreferrer'
          target='_blank'
          className='underline hover:text-purple-400'>
          Github
        </Link>
        <PortableText value={project.content} />
      </div>

      <div className='flex flex-wrap gap-3'>{projectImages}</div>
    </section>
  );
}
