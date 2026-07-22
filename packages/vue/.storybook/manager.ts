import { addons } from 'storybook/manager-api'
import '@quido-ui/styles/storybook-manager.css'
import theme from './theme'

addons.setConfig({
  theme,
})
