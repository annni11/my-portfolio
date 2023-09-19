import { createClient, groq } from 'next-sanity';

export async function getBlog() {
  const client = createClient({
    projectId: 'q2ly7mdt',
    dataset: 'production',
    apiVersion: '2023-07-17',
  });

  return client.fetch(
    groq`*[_type == "post"]{
    _id,
    _createdAt,
    title,
    body,
    categories,
    mainImage,
    }`,
  );
}
