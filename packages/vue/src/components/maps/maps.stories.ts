import MapsComponent from '@/components/maps/maps.vue'
import type { Meta, StoryObj } from '@storybook/vue3-vite'

const meta = {
  title: 'Components/Data Display/Maps',
  component: MapsComponent,
  argTypes: {
    center: {
      control: 'object',
      description: 'The center of the map as a latitude and longitude array.'
    },
    zoom: {
      control: 'number',
      description: 'The zoom level of the map.'
    },
    options: {
      control: 'object',
      description: 'Additional Leaflet map options.'
    },
    layers: {
      control: 'object',
      description: 'Array of Leaflet layers to add to the map.'
    },
    markers: {
      control: 'object',
      description: 'Array of Leaflet markers to add to the map.'
    }
  },
  args: {
    center: [52.370216, 4.895168], // Default to Amsterdam
    zoom: 13,
    options: {},
    layers: [],
    markers: []
  },
  render: (args) => ({
    components: { MapsComponent },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 300px; width: 300px;">
        <MapsComponent v-bind="args" />
      </div>
    `
  })
} satisfies Meta<typeof MapsComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
