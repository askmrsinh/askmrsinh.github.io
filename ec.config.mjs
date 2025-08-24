// @ts-check
import { defineEcConfig } from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

// https://expressive-code.com/reference/configuration/
export default defineEcConfig({
  plugins: [pluginLineNumbers()]
});
