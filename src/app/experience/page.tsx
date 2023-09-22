import Link from 'next/link';
import StarIcon from '@mui/icons-material/Star';

export default function Experience() {
  return (
    <div id='experience' className='pt-20'>
      <h1 className='text-lg text-purple-400 pb-1'>Experience</h1>
      <p>Software Engineer</p>
      <Link
        href='http://www.seeqrapp.com/'
        rel='noopener noreferrer'
        target='_blank'
        className='underline hover:text-purple-400'>
        SeeQR
      </Link>
      <p className='text-zinc-500 italic'>
        Open Source Electron based desktop application for SQL database query
        performance testing and entity relationship diagram 2D and 3D
        visualizer. A powerful all-in-one SQL database management tool
      </p>

      <p>
        The latest SeeQR v12 has launched: The Maintainability Update.&nbsp;
        <Link
          href='https://medium.com/@theseeqr/seeqr-v-12-the-maintainability-update-caa14fe3933f'
          rel='noopener noreferrer'
          target='_blank'
          className='italic hover:text-purple-400'>
          Read the Medium article here!
        </Link>
        &nbsp;The back-end got a complete upgrade with updated dependencies,
        refactor of deprecated code, and restructure of prior monolithic
        long-winded files. Heavy emphasizes was put on modularity, test-ability,
        and scalability. Front-end is also getting a makeover, bringing it up to
        date from its legacy code base and implementing modern React state
        management techniques and hooks. SeeQR is developed under tech
        accelerator OS Labs&nbsp;
        <Link
          href='http://opensourcelabs.io/'
          rel='noopener noreferrer'
          target='_blank'
          className='hover:text-purple-400'>
          (opensourcelabs.io).
        </Link>
      </p>
    </div>
  );
}
