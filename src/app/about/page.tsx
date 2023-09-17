import {
  SelfImprovement,
  Code,
  Computer,
  PushPin,
  AutoFixHigh,
  Whatshot,
  Pets,
  Checkroom,
} from '@mui/icons-material';
import Link from 'next/link';

export default function About() {
  return (
    <section id='about' className='pt-20'>
      <h1 className='text-lg text-purple-400 pb-1'>About me</h1>
      <p>Hello!</p>
      <p>My name is Annabelle</p>
      <p>
        A.K.A Yogi <SelfImprovement /> who Codes <Code />
      </p>
      <p>
        I am a full-stack software engineer <Computer />
      </p>
      <p>
        My current location is <PushPin /> NYC
      </p>
      <br />
      <p>Why yoga and coding?</p>
      <p className='italic'>
        yoga and coding have more similarities than you think!
      </p>
      <ul className='list-disc'>
        <li>There's always more than one way to get to the desired result</li>
        <li>It's a challenge but sky is the limit and learning never ends</li>
        <li>Freedom to be creative and expressive</li>
        <li>The community and collaboration</li>
        <li>Takes focus, routine, and dicipline</li>
      </ul>
      <br />
      <p>Some more hobbies:</p>
      <ul>
        <li>
          <AutoFixHigh sx={{ fontSize: 15 }} /> Reading sci-fi and fantasy
          novels
        </li>
        <li>
          <Whatshot sx={{ fontSize: 15 }} /> Cooking and eating spicy foods
        </li>
        <li>
          <Pets sx={{ fontSize: 15 }} /> Playing with my dog Simba
        </li>
        <li>
          <Checkroom sx={{ fontSize: 15 }} /> Upcycling fashion&nbsp;
          <Link
            href='https://poshmark.com/closet/fifevintage'
            rel='noopener noreferrer'
            target='_blank'
            className='hover:text-purple-400'>
            (check out my poshmark)
          </Link>
        </li>
      </ul>

      <br />
      <p>My tech stack:</p>
      <ul className='flex flex-wrap gap-3'>
        <li className='bg-purple-300'>JavaScript</li>
        <li className='bg-purple-300'>TypeScript</li>
        <li className='bg-purple-300'>React</li>
        <li className='bg-purple-300'>Next.js</li>
        <li className='bg-purple-300'>Tailwind CSS</li>
        <li className='bg-purple-300'>Node.js</li>
        <li className='bg-purple-300'>Express</li>
        <li className='bg-purple-300'>SQL</li>
        <li className='bg-purple-300'>NoSQL</li>
        <li className='bg-purple-300'>Webpack</li>
        <li className='bg-purple-300'>Docker</li>
        <li className='bg-purple-300'>TDD (Jest, SuperTest)</li>
        <li className='bg-purple-300'>Authentication (BCrypt, OAuth)</li>

        <li className='bg-purple-300'>Git</li>
        <li className='bg-purple-300'>
          AWS (Elastic Beanstalk, EC2, S3, RDS, IAM)
        </li>
        <li className='bg-purple-300'>Google Cloud Console</li>
        <li className='bg-purple-300'>Figma</li>
        <li className='bg-purple-300'>Jira</li>
      </ul>
    </section>
  );
}
