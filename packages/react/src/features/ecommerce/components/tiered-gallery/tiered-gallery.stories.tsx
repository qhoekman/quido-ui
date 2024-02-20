import {
  TieredGallery,
  TieredGalleryImage,
} from "@/features/ecommerce/components/tiered-gallery/tiered-gallery";
import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Ecommerce/Components/Tiered Gallery",
  component: TieredGallery,
} satisfies Meta<typeof TieredGallery>;

export const Default: StoryFn<typeof TieredGallery> = (args) => (
  <div className="max-w-md w-full">
    <TieredGallery {...args}>
      <TieredGalleryImage
        src="https://via.placeholder.com/151"
        alt="placeholder"
      />
      <TieredGalleryImage
        src="https://via.placeholder.com/152"
        alt="placeholder"
      />
      <TieredGalleryImage
        src="https://via.placeholder.com/153"
        alt="placeholder"
      />
      <TieredGalleryImage
        src="https://via.placeholder.com/154"
        alt="placeholder"
      />
      <TieredGalleryImage
        src="https://via.placeholder.com/155"
        alt="placeholder"
      />
    </TieredGallery>
  </div>
);

Default.args = {
  defaultValue: "1",
};
