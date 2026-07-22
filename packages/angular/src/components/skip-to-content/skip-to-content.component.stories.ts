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
        <button qui-skip-to-content [targetId]="targetId">
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

export const Composition: Story = {
  args: {
    targetId: 'main-content',
  },
  render: (args) => ({
    props: args,
    template: `
      <div>
        <button qui-skip-to-content [targetId]="targetId">
          Skip to main content
        </button>
        <header style="display: flex; justify-content: space-between; align-items: center; padding: var(--spacing-4) var(--spacing-6); background-color: var(--color-neutral-900); color: white;">
          <strong>Acme Dashboard</strong>
          <nav style="display: flex; gap: var(--spacing-4);">
            <a href="#" style="color: white;">Overview</a>
            <a href="#" style="color: white;">Projects</a>
            <a href="#" style="color: white;">Reports</a>
            <a href="#" style="color: white;">Settings</a>
          </nav>
        </header>
        <main id="main-content" style="padding: var(--spacing-6);">
          <h1>Project Overview</h1>
          <p>Press Tab from the top of the page to reveal the skip link and jump straight past the navigation.</p>
        </main>
      </div>
    `,
  }),
};
