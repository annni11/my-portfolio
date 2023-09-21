import BlogList from '../components/BlogList';

export default function Blog() {
  return (
    <main className='w-full pt-20'>
      {/* @ts-expect-error Async Server Component */}
      <BlogList />
    </main>
  );
}
