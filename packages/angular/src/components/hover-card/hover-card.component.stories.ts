import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { HoverCardComponent } from './hover-card.component';
import { HoverCardTriggerDirective } from './hover-card-trigger.directive';
import { HoverCardContentComponent } from './hover-card-content.component';
import { ButtonComponent } from '../button/button.component';
import { AvatarComponent } from '../avatar/avatar.component';
import { AvatarFallbackComponent } from '../avatar/avatar-fallback.component';
import { AvatarImageComponent } from '../avatar/avatar-image.component';
import { TextComponent } from '../text/text.component';
import { HeadingComponent } from '../heading/heading.component';
import { StackComponent } from '../stack/stack.component';
import { StoryComponent } from '../../system/components/story/story.component';

type EnhancedHoverCardComponent = HoverCardComponent & {
  triggerText: string;
  contentText: string;
};

const meta: Meta<EnhancedHoverCardComponent> = {
  title: 'Components/Overlay/Hover Card',
  component: HoverCardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        HoverCardComponent,
        HoverCardTriggerDirective,
        HoverCardContentComponent,
        ButtonComponent,
        AvatarComponent,
        AvatarFallbackComponent,
        AvatarImageComponent,
        HeadingComponent,
        TextComponent,
        StackComponent,
        StoryComponent,
      ],
    }),
  ],
  argTypes: {
    triggerText: {
      control: 'text',
    },
    contentText: {
      control: 'text',
    },
  } as never,
};
export default meta;

type Story = StoryObj<EnhancedHoverCardComponent>;

export const Default: Story = {
  render: () => ({
    template: `
    <qui-story>
      <qui-hover-card>
        <button puiHoverCardTrigger qui-button size="lg">
          Hover over me
        </button>
        <ng-template #hoverCardContent>
          <div qui-hover-card-content style="width: 300px;">
            <div qui-stack items="between" gap="md">
              <img src="https://pulse.quido.online/logo.png" alt="Avatar Image"  style="object-fit: cover; width: 32px; height: 32px; object-position: left;" />
              <div qui-stack direction="column" gap="sm">
                <h4 qui-heading size="sm" weight="semibold">pulse</h4>
                <p qui-text size="sm">
                  A composition library for building accessible web applications with Angular.
                </p>
              </div>
            </div>
          </div>
        </ng-template>
      </qui-hover-card>
    </qui-story>
    `,
  }),
};
