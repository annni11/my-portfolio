import { createClient, groq } from 'next-sanity';
import { Blog, Project } from '../types/Blog';

const config = {
  projectId: 'tyxwi1vi',
  dataset: 'production',
  apiVersion: '2023-09-19',
  useCdn: false,
};

export async function getBlogSlice(): Promise<Blog[]> {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == 'blogs' || "blogs"] | order(_createdAt) {
    _id,
    _createdAt,
    title,
    description,
    category,
    'slug': slug.current,
    'image': image.asset->url,
    content
    }[0...3]`,
  );
}

export async function getBlogFull(): Promise<Blog[]> {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == 'blogs' || "blogs"]{
    _id,
    _createdAt,
    title,
    description,
    category,
    'slug': slug.current,
    'image': image.asset->url,
    content
    }`,
  );
}

export async function getBlogPage(slug: string): Promise<Blog> {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == 'blogs' && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    description,
    category,
    'slug': slug.current,
      'image': image.asset->url,
      content
    }`,
    { slug },
  );
}

export async function getProjectPage(slug: string): Promise<Project> {
  const client = createClient(config);

  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      description,
      "slug": slug.current,
      "images": images[].asset->url ,
      content
      }`,
    { slug },
  );
}
