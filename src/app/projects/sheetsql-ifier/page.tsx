import { PortableText } from '@portabletext/react';
import { getProjectPage } from '../../../../sanity/sanity.utils';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Link from 'next/link';

export default async function SheetsProject() {
  const project = await getProjectPage('sheetsql-ifier');

  const projectImages: any = [];

  project.images.forEach((image: string | StaticImport) => {
    projectImages.push(
      <div key={`sheetsQLImage+${project._createdAt}`}>
        <Image
          src={image}
          alt={project.title}
          width={300}
          height={300}
          className='border-solid border-2 border-zinc-500 rounded-xl '></Image>
      </div>,
    );
  });

  return (
    <section id='sheetsql' className='pt-20'>
      <div>
        <h1 className='text-lg text-purple-400 pb-1'>Project:</h1>
        <h1 className='text-lg '>SheetsQL-ifier</h1>
        <p className='text-zinc-500 italic'>{project.description}</p>
        <br />
        <Link
          href='https://github.com/Heat-Seeking-Devil-Chicken17/SheetsQL-ifier'
          rel='noopener noreferrer'
          target='_blank'
          className='underline hover:text-purple-400'>
          GitHub
        </Link>
        <PortableText value={project.content} />
      </div>
      <hr className='w-full h-1 mx-auto my-4' />
      <div className='flex flex-wrap gap-3'>{projectImages}</div>
    </section>
  );
}
