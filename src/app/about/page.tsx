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
      <p>Hello, World!</p>
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
      <p>Why I love yoga and coding:</p>
      <p className='italic'>
        yoga and coding have more similarities than you think!
      </p>
      <ul className='list-disc'>
        <li>
          There&apos;s always more than one way to get to the desired result
        </li>
        <li>
          It&apos;s a challenge but sky is the limit and learning never ends
        </li>
        <li>Freedom to be creative and expressive</li>
        <li>The community and collaboration</li>
        <li>Takes focus, practice, routine, and dicipline</li>
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
        <li id='purple'>JavaScript</li>
        <li id='purple'>TypeScript</li>
        <li id='purple'>React</li>
        <li id='purple'>Next.js</li>
        <li id='purple'>Tailwind CSS</li>
        <li id='purple'>Node.js</li>
        <li id='purple'>Express</li>
        <li id='purple'>SQL</li>
        <li id='purple'>NoSQL</li>
        <li id='purple'>Webpack</li>
        <li id='purple'>Docker</li>
        <li id='purple'>TDD (Jest, SuperTest)</li>
        <li id='purple'>Authentication (BCrypt, OAuth)</li>

        <li id='purple'>Git</li>
        <li id='purple'>AWS (Elastic Beanstalk, EC2, S3, RDS, IAM)</li>
        <li id='purple'>Google Cloud Console</li>
        <li id='purple'>Figma</li>
        <li id='purple'>Jira</li>
      </ul>
    </section>
  );
}
