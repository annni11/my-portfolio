import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Info() {
  return (
    <section id='info' className='pt-20'>
      <p className='text-zinc-400 italic'>
        This website was designed in Figma. Coded in Typescript with Visual
        Studio Code. Built with Next.js and Tailwind CSS. Blog contents managed
        with Sanity.io. Deployed with Vercel. Created and maintained by me,
        Annabelle. Thanks for visiting!
        <FavoriteIcon sx={{ fontSize: 15 }} />
      </p>
    </section>
  );
}
