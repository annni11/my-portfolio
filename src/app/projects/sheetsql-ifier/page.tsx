import { PortableText } from '@portabletext/react';
import { getProjectPage } from '../../../../sanity/sanity.utils';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default async function Projects() {
  const project = await getProjectPage('sheetsql-ifier');

  console.log('this is sheets:', project);

  const projectImages: any = [];

  project.images.forEach((image: string | StaticImport) => {
    projectImages.push(
      <div className='rounded-sm'>
        <Image src={image} alt={project.title} width={500} height={500}></Image>
      </div>,
    );
  });

  return (
    <section id='projects' className='pt-20'>
      <h1 className='text-lg text-purple-400 pb-1'>Projects</h1>

      <div>
        <p>{project.title}</p>
        <p className='text-zinc-500 italic'>{project.description}</p>

        <PortableText value={project.content} />
      </div>

      <div className='flex flex-col gap-2'>{projectImages}</div>
    </section>
  );
}
