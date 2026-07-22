import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ButtonComponent } from '../button/button.component';
import { BackToTopComponent } from './back-to-top.component';

const meta: Meta<BackToTopComponent> = {
  title: 'Components/Actions/Back to Top',
  component: BackToTopComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
};
export default meta;

type Story = StoryObj<BackToTopComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div style="height: 200vh; position: relative;">
        <div qui-back-to-top>
          <button qui-button variant="primary" size="md">Back to Top</button>
        </div>
      </div>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <article style="position: relative; padding: var(--spacing-6); max-width: 640px;">
        <h1>Release Notes — v2.4</h1>
        <p>A "Back to top" button appears once you've scrolled past the fold, so readers can return to the summary without hunting for it.</p>
        <section style="margin-top: var(--spacing-8);">
          <h2>New Components</h2>
          <p>Added the Combobox and Tag Input components, plus improved keyboard navigation across all form controls.</p>
        </section>
        <section style="margin-top: var(--spacing-8);">
          <h2>Bug Fixes</h2>
          <p>Fixed a focus-trap issue in Dialog and resolved incorrect color contrast in the dark theme for Badge.</p>
        </section>
        <section style="margin-top: var(--spacing-8);">
          <h2>Performance</h2>
          <p>Reduced bundle size by 18% by splitting chart components into separate entry points.</p>
        </section>
        <section style="margin-top: 100vh;">
          <h2>Deprecations</h2>
          <p>The legacy Modal component is deprecated in favor of Dialog and will be removed in the next major version.</p>
        </section>
        <div qui-back-to-top>
          <button qui-button variant="primary" size="md">Back to Top</button>
        </div>
      </article>
    `,
  }),
};
