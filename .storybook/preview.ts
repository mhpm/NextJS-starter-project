import type { Preview } from '@storybook/react';

import { withPerformance } from 'storybook-addon-performance';

export const decorators = [withPerformance];

import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
