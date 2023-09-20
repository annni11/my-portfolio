import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';
const config = defineConfig({
  projectId: 'tyxwi1vi',
  dataset: 'production',
  title: 'annabelle-blogs',
  apiVersion: '2023-09-19',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
