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
      <qui-story>
        <div style="height: 300px; width: 300px;">
          <qui-maps [center]="center" [zoom]="zoom"></qui-maps>
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  args: {
    center: [52.370216, 4.895168],
    zoom: 14,
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div style="max-width: 320px; border: var(--border-width-default) solid var(--color-border); border-radius: var(--border-radius-lg); overflow: hidden;">
          <div style="height: 220px;">
            <qui-maps [center]="center" [zoom]="zoom"></qui-maps>
          </div>
          <div style="padding: var(--spacing-4);">
            <h3 style="margin: 0;">Amsterdam Office</h3>
            <p style="margin: var(--spacing-1) 0 0; color: var(--color-muted-fg);">Herengracht 182, 1016 BR Amsterdam</p>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
