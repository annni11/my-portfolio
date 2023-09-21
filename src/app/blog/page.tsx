import BlogList from '../components/BlogList';

export default function Blog() {
  return (
    <main className='w-full pt-20 h-screen'>
      <h1 className='text-lg text-purple-400 pb-1'>Blogs:</h1>
      <BlogList />
    </main>
  );
}
