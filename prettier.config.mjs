/** @type {import('prettier').Options} */
export default {
  useTabs: false,
  quoteProps: 'consistent',
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' }
    }
  ]
};
