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
      imports: [AvatarComponent, AvatarImageComponent, AvatarFallbackComponent, StoryComponent],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<EnhancedAvatarComponent>;

export const Default: Story = {
  args: {
    src: 'https://preview.redd.it/windows-xp-user-icons-part-1-v0-bckcj5nw74qb1.jpg?width=640&crop=smart&auto=webp&s=b2111ffb39a35affa0f5cc718d034b331e4d7e8a',
    fallback: 'PH',
  },
  render: (args) => ({
    props: args,
    template: `
      <pui-story>
        <div pui-avatar #avatar>
          <img pui-avatar-image [src]="src" alt="Avatar Image" (fallback)="avatar.onFallback($event)" />
          <div pui-avatar-fallback>{{ fallback }}</div>
        </div>
      </pui-story>
    `,
  }),
};
