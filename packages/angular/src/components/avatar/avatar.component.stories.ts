import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { AvatarFallbackComponent } from './avatar-fallback.component';
import { AvatarImageComponent } from './avatar-image.component';
import { AvatarComponent } from './avatar.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedAvatarComponent = AvatarComponent & {
  src: string;
  fallback: string;
};

const meta: Meta<EnhancedAvatarComponent> = {
  title: 'Components/Data Display/Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AvatarComponent,
        AvatarImageComponent,
        AvatarFallbackComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<EnhancedAvatarComponent>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2',
    fallback: 'JD',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-avatar #avatar>
          <img qui-avatar-image [src]="src" alt="Avatar Image" (fallback)="avatar.onFallback($event)" />
          <div qui-avatar-fallback>{{ fallback }}</div>
        </div>
      </qui-story>
    `,
  }),
};

export const Fallback: Story = {
  args: {
    src: '/icon.png',
    fallback: 'JD',
  },
  render: (args) => ({
    props: args,
    template: `
      <qui-story>
        <div qui-avatar #avatar>
          <img qui-avatar-image [src]="src" alt="Avatar Image" (fallback)="avatar.onFallback($event)" />
          <div qui-avatar-fallback>{{ fallback }}</div>
        </div>
      </qui-story>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; align-items: center; gap: var(--spacing-4);">
          <div qui-avatar #a1 size="sm">
            <img qui-avatar-image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar Image" (fallback)="a1.onFallback($event)" />
            <div qui-avatar-fallback>JD</div>
          </div>
          <div qui-avatar #a2 size="md">
            <img qui-avatar-image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar Image" (fallback)="a2.onFallback($event)" />
            <div qui-avatar-fallback>JD</div>
          </div>
          <div qui-avatar #a3 size="lg">
            <img qui-avatar-image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar Image" (fallback)="a3.onFallback($event)" />
            <div qui-avatar-fallback>JD</div>
          </div>
        </div>
      </qui-story>
    `,
  }),
};

export const Composition: Story = {
  render: () => ({
    template: `
      <qui-story>
        <div style="display: flex; align-items: center; gap: var(--spacing-3);">
          <div qui-avatar #avatar>
            <img qui-avatar-image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=128&h=128&facepad=2" alt="Avatar Image" (fallback)="avatar.onFallback($event)" />
            <div qui-avatar-fallback>JD</div>
          </div>
          <div>
            <div style="font-weight: var(--font-weight-semibold);">Jane Doe</div>
            <div style="color: var(--color-muted-fg); font-size: var(--font-size-sm);">Product Designer</div>
          </div>
        </div>
      </qui-story>
    `,
  }),
};
