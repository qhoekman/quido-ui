import type { Preview } from '@storybook/vue3-vite'
import '../src/assets/base.css'
import './preview.css'

import { setup } from '@storybook/vue3-vite'

setup(() => {})

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
}

export default preview
