import Image from 'next/image';

export default function Pic() {
  return (
    <>
      <h1>Annabelle Ni</h1>
      <h2>Yoga Who Codes</h2>
      <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
        <Image
          src='/pp1.png'
          width={500}
          height={500}
          alt='profile pic'
          priority={true}
        />
      </div>
    </>
  );
}
