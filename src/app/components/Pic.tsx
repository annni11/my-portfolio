import Image from 'next/image';

export default function Pic() {
  return (
    <aside className='pt-20'>
      <div style={{ borderRadius: '250px', overflow: 'hidden' }}>
        <Image
          src='/pp1.png'
          width={500}
          height={500}
          alt='profile pic'
          priority={true}
        />
      </div>
      <h1 className='text-lg text-center'>Annabelle Ni</h1>
      <h2 className='text-base italic text-center'>Yogi who Codes</h2>
    </aside>
  );
}
