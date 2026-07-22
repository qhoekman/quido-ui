import type { Preview } from '@storybook/vue3-vite'
import '../src/assets/base.css'
import './preview.css'

import { setup } from '@storybook/vue3-vite'

setup(() => {})

const preview: Preview = {
  parameters: {
    options: {
      // Storybook evals storySort without a TS transform — keep params untyped.
      // @ts-expect-error storySort typing varies across Storybook versions
      storySort: (a, b) => {
        if (a.title === 'Readme') return -1
        if (b.title === 'Readme') return 1
        return a.title === b.title
          ? 0
          : a.title.localeCompare(b.title, undefined, { numeric: true })
      },
    },
  },
}

export default preview
