import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MapsComponent } from './maps.component';
import { StoryComponent } from '../../system/components/story/story.component';

const meta: Meta<MapsComponent> = {
  title: 'Components/Data Display/Maps',
  component: MapsComponent,
  decorators: [
    moduleMetadata({
      imports: [StoryComponent],
    }),
  ],
  argTypes: {
    center: {
      control: 'object',
      description: 'The center of the map as a latitude and longitude array.',
    },
    zoom: {
      control: 'number',
      description: 'The zoom level of the map.',
    },
  },
};
export default meta;

type Story = StoryObj<MapsComponent>;

export const Default: Story = {
  args: {
    center: [52.370216, 4.895168], // Default to Amsterdam
    zoom: 13,
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <div style="height: 300px; width: 300px;">
          <pui-maps [center]="center" [zoom]="zoom"></pui-maps>
        </div>
      </pui-story>
    `,
  }),
};
