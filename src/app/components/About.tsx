import { SelfImprovement, Code, Computer, PushPin } from '@mui/icons-material';

export default function About() {
  return (
    <section id='about' className='pt-20'>
      <h1 className='text-lg text-purple-400'>About me</h1>
      <p>Hello!</p>
      <p>My name is Annabelle or Ann</p>
      <p>
        A.K.A Yogi <SelfImprovement /> who Codes <Code />
      </p>
      <p>
        I am a full-stack software engineer <Computer />
      </p>
      <p>
        My current location is <PushPin /> NYC
      </p>
      <p>My tech-stack:</p>
      <ul className='flex flex-wrap'>
        <li>Javascript</li>
        <li>Typescript</li>
      </ul>
    </section>
  );
}
