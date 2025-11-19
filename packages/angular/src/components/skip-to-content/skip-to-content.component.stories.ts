import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { SkipToContentComponent } from './skip-to-content.component';

const meta: Meta<SkipToContentComponent> = {
  title: 'Components/Accessibility/Skip To Content',
  component: SkipToContentComponent,
  decorators: [
    moduleMetadata({
      imports: [SkipToContentComponent],
    }),
  ],
  argTypes: {
    targetId: { control: 'text' },
  },
};
export default meta;

type Story = StoryObj<SkipToContentComponent>;

export const Default: Story = {
  args: {
    targetId: 'main-content',
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 100vh; background-color: lightgray;">
        <button pui-skip-to-content [targetId]="targetId">
          Skip to main content
        </button>
      </div>
      <div id="main-content" style="height: 100vh; background-color: white;">
        <h1>Main Content</h1>
        <p>This is the main content area.</p>
      </div>
    `,
  }),
};
