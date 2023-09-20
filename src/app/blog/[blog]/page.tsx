import { getBlogPage } from '../../../../sanity/sanity.utils';

type Props = {
  params: { blog: string };
};

export default async function BlogPage({ params }: Props) {
  const slug = params.blog;
  console.log(slug);
  const blog = await getBlogPage(slug);
  console.log('this is blog', blog);
  return <div>{blog.title}</div>;
}
