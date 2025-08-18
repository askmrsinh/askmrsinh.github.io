// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import * as child from 'child_process';

const commitHash = child.execSync('git rev-parse --short HEAD').toString();

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      __COMMIT_HASH__: JSON.stringify(commitHash)
    }
  },
  integrations: [mdx()]
});
