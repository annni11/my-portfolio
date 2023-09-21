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
