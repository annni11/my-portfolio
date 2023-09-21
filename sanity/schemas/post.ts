const post = {
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Book Recs', value: 'Book Recs' },
          { title: 'Movie Reviews', value: 'Movie Reviews' },
          { title: 'Yoga', value: 'Yoga' },
          { title: 'Food', value: 'Food' },
          { title: 'Simba', value: 'Simba' },
          { title: 'Travel', value: 'Travel' },
          { title: 'Code & Tech', value: 'Code & Tech' },
          { title: 'Other', value: 'Other' },
        ],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

export default post;
