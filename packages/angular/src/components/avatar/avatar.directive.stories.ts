import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import {
  ButtonDirective,
  ButtonProps,
} from '@/components/button/button.directive';
import { CommonModule } from '@angular/common';
import { AvatarModule } from '@/components/avatar/avatar.module';

type Story = StoryObj<any>;

const meta: Meta<any> = {
  title: 'Components/Data Display/Avatar',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, AvatarModule],
    }),
  ],
  args: {
    variant: 'default',
    size: 'default',
    src: 'https://avatars.githubusercontent.com/u/12592949?s=460&u=jd&v=4',
    fallback: 'JD',
  },
  render: (args) => ({
    props: args,
    template: `
<div quiAvatar [variant]="variant" [size]="size">
  <img quiAvatarImage [src]="src" />
  <div quiAvatarFallback>
    {{ fallback }}
  </div>
</div>`,
  }),
};

export const Default: Story = {};

export default meta;
