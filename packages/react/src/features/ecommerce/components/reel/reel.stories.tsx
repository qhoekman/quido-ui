import {
  Reel,
  ReelButtonNext,
  ReelButtonPrevious,
  ReelItem,
  ReelItems,
} from "@/features/ecommerce/components/reel/reel";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Ecommerce/Components/Reel",
  component: Reel,
} satisfies Meta<typeof Reel>;

export const Default: StoryFn<typeof Reel> = (args) => (
  <div className="max-w-5xl w-full">
    <Reel {...args}>
      <ReelButtonPrevious />
      <ReelItems>
        {Array.from({ length: 30 }).map(() => (
          <ReelItem>
            <img src="https://via.placeholder.com/150" alt="placeholder" />
          </ReelItem>
        ))}
      </ReelItems>
      <ReelButtonNext />
    </Reel>
  </div>
);
