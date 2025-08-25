// @ts-check
import { createInlineSvgUrl, defineEcConfig } from 'astro-expressive-code';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const iconCopy = readFileSync(
  fileURLToPath(new URL('./src/assets/icon-copy.svg', import.meta.url)),
  'utf-8'
);

// https://expressive-code.com/reference/configuration/
export default defineEcConfig({
  customizeTheme: (theme) => {
    theme.name = theme.type;
  },
  styleOverrides: {
    borderColor: 'var(--muted-border-color)',
    borderRadius: 'var(--border-radius)',
    borderWidth: 'var(--border-width)',
    codeFontFamily: 'var(--font-family-monospace)',
    codeBackground: 'var(--code-background-color)',
    codeForeground: 'var(--code-color)',
    uiFontFamily: 'var(--font-family-sans-serif)',
    frames: {
      copyIcon: createInlineSvgUrl(iconCopy),
      editorActiveTabBackground: 'var(--code-background-color)',
      editorActiveTabForeground: 'var(--color)',
      editorActiveTabIndicatorBottomColor: 'var(--code-background-color)',
      editorActiveTabIndicatorTopColor: 'var(--contrast-border)',
      editorBackground: 'var(--code-background-color)',
      editorTabBarBorderColor: 'var(--muted-border-color)',
      frameBoxShadowCssValue: 'var(--card-box-shadow)',
      terminalBackground: 'var(--code-background-color)',
      terminalTitlebarBorderBottomColor: 'var(--muted-border-color)',
      terminalTitlebarForeground: 'var(--color)',
      tooltipSuccessBackground: 'var(--tooltip-background-color)',
      tooltipSuccessForeground: 'var(--tooltip-color)'
    }
  },
  plugins: [pluginLineNumbers(), pluginCollapsibleSections()],
  defaultProps: {
    collapseStyle: 'collapsible-auto'
  }
});
