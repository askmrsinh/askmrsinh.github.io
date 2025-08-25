// @ts-check
import { defineConfig } from 'astro/config';
import { default as mdx } from '@astrojs/mdx';
import { default as astroExpressiveCode } from 'astro-expressive-code';
import { default as rehypeAutolinkHeadings } from 'rehype-autolink-headings';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';

// https://astro.build/config
export default defineConfig({
  integrations: [astroExpressiveCode(), mdx()],
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['anchor', 'secondary'], tabIndex: -1 },
          content: { type: 'text', value: '#' }
        }
      ]
    ]
  }
});
