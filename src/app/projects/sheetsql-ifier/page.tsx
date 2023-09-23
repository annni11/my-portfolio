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
          className='rounded-xl'></Image>
      </div>,
    );
  });

  return (
    <section id='sheetsql' className='pt-20'>
      <div>
        <h1 className='text-lg pb-3'>SheetsQL-ifier</h1>
        <p className='text-zinc-500 italic'>{project.description}</p>
        <Link
          href='https://github.com/Heat-Seeking-Devil-Chicken17/SheetsQL-ifier'
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
