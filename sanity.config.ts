import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/schemas';
const config = defineConfig({
  projectId: 'q2ly7mdt',
  dataset: 'production',
  title: 'Annabelle-portfolio',
  apiVersion: '2023-07-17',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
