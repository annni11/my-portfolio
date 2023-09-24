import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
export default function Info() {
  return (
    <section id='info' className='pt-20'>
      <p className='text-zinc-400 italic'>
        This website was designed in{' '}
        <Link
          href='https://www.figma.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='underline hover:text-purple-400'>
          Figma
        </Link>
        . Coded in Typescript with{' '}
        <Link
          href='https://code.visualstudio.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='underline hover:text-purple-400'>
          Visual Studio Code
        </Link>
        . Built with{' '}
        <Link
          href='https://nextjs.org/'
          rel='noopener noreferrer'
          target='_blank'
          className='underline hover:text-purple-400'>
          Next.js
        </Link>{' '}
        and{' '}
        <Link
          href='https://tailwindcss.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='underline hover:text-purple-400'>
          Tailwind CSS
        </Link>
        . Blog contents managed with{' '}
        <Link
          href='https://www.sanity.io/'
          rel='noopener noreferrer'
          target='_blank'
          className='underline hover:text-purple-400'>
          Sanity.io
        </Link>
        . Deployed with{' '}
        <Link
          href='https://vercel.com/'
          rel='noopener noreferrer'
          target='_blank'
          className='underline hover:text-purple-400'>
          Vercel
        </Link>
        . Created and maintained by me, Annabelle. Check out the repo on{' '}
        <Link
          href='https://github.com/annni11/my-portfolio'
          rel='noopener noreferrer'
          target='_blank'
          className='underline  hover:text-purple-400'>
          GitHub
        </Link>
        . Thanks for visiting!
        <FavoriteIcon sx={{ fontSize: 15 }} />
      </p>
    </section>
  );
}
