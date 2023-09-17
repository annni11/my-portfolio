import Link from 'next/link';

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

      <ul className='list-disc'>
        <li>
          Centralized front-end state management (20% conversion) with React
          hooks to create global state for single source of truth to maintain
          ease of state accessibility throughout the tremendous growth of the
          app from past contributions
        </li>
        <li>
          Restructured prior monolithic back-end architecture to follow modern
          design patterns - separating business logic and decoupling long winded
          code which led to improved work-flow, better unit testing, and
          extendability for future contributors
        </li>
        <li>
          Integrated functionality of import and export of databases and queries
          using SQL command-line utility to allow for backup, restore and
          recovery incase of database failure or corruption
        </li>
        <li>
          Configured server login and authorization of multiple users and roles
          to ensure proper access and permissions are enforced
        </li>
        <li>
          Consolidated deprecated code to reduce technical debt and updated
          outdated dependencies by 99%, increased unit testing coverage by 10%
          with Jest
        </li>
        <li>
          Product developed under tech accelerator OS Labs&nbsp;
          <Link
            href='http://opensourcelabs.io/'
            rel='noopener noreferrer'
            target='_blank'
            className='hover:text-purple-400'>
            (opensourcelabs.io)
          </Link>
        </li>
      </ul>
    </div>
  );
}
