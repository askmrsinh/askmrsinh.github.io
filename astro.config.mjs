// @ts-check
import { defineConfig } from 'astro/config';
import { default as mdx } from '@astrojs/mdx';
import { default as astroExpressiveCode } from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  integrations: [astroExpressiveCode(), mdx()]
});
