import BlogList from '../components/blogList';

export default async function Blog() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <BlogList />
    </div>
  );
}
