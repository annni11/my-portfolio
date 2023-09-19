import { getBlog } from '../../../sanity/sanity.utils';

export default async function Blog() {
  const posts = await getBlog();

  const blogPosts = [];
  posts.forEach(post => {
    blogPosts.push(
      <div key={post._id}>
        <h1>Title: {post.title}</h1>
        <h2>Category: {post.categories.title}</h2>
        <p>{post.body.text}</p>
      </div>,
    );
  });

  console.log(posts[0].title);
  console.log('this is body', posts[0].body[0].children[0].text);
  console.log(posts[0].categories);

  return (
    <section id='blog' className='pt-20'>
      <h1 className='text-lg text-purple-400 pb-1'>Blog</h1>
      <p>hello, my posts?</p>
      {blogPosts}
    </section>
  );
}
