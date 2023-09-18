import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
const config = defineConfig({
  projectId: 'q2ly7mdt',
  dataset: 'production',
  title: 'Annabelle-portfolio',
  apiVersion: '2023-07-17',
  basePath: '/admin',
  plugins: [deskTool()],
});

export default config;
