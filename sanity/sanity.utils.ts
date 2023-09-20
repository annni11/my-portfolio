import { createClient, groq } from 'next-sanity';

export async function getBlog() {
  const client = createClient({
    projectId: 'tyxwi1vi',
    dataset: 'production',
    apiVersion: '2023-09-19',
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "blogs"]{
    _id,
    _createdAt,
    title,
    category,
    "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
  );
}

export async function getBlogPage(slug: string) {
  const client = createClient({
    projectId: 'tyxwi1vi',
    dataset: 'production',
    apiVersion: '2023-09-19',
    useCdn: true,
  });

  console.log(slug);
  return client.fetch(
    groq`*[_type == "blogs" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    category,
    "slug": slug.current,
      "image": image.asset->url,
      content
    }`,
    { slug },
  );
}
