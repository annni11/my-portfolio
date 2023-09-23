import { PortableTextBlock } from 'sanity';

export type Blog = {
  id: string;
  _createdAt: any;
  title: string;
  category: string;
  slug: string;
  image: string;
  content: PortableTextBlock[];
};

export type Project = {
  images: any;
  id: string;
  _createdAt: any;
  title: string;
  description: string;
  slug: string;
  image: string[];
  content: PortableTextBlock[];
};
