import BlogList from '../components/BlogList';

export default async function Blog() {
  return (
    <main className='w-full pt-20'>
      {/* @ts-expect-error Server Component */}

      <BlogList />
    </main>
  );
}
