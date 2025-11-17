import {
  TieredGallery,
  TieredGalleryImage,
} from "@/features/ecommerce/components/tiered-gallery/tiered-gallery";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Tiered Gallery",
  component: TieredGallery,
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The value of the tab that should be active when initially rendered",
    },
    value: {
      control: "text",
      description: "The controlled value of the tab to activate",
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the component",
    },
    activationMode: {
      control: "select",
      options: ["automatic", "manual"],
      description: "When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.",
    },
  },
  args: {
    defaultValue: "0",
    orientation: "horizontal",
    activationMode: "automatic",
  },
} satisfies Meta<typeof TieredGallery>;

export const Default: StoryFn<typeof TieredGallery> = (args) => (
  <div className="max-w-md w-full">
    <TieredGallery {...args}>
      <TieredGalleryImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop"
        alt="Gallery image 1"
      />
      <TieredGalleryImage
        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop"
        alt="Gallery image 2"
      />
      <TieredGalleryImage
        src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=400&fit=crop"
        alt="Gallery image 3"
      />
      <TieredGalleryImage
        src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop"
        alt="Gallery image 4"
      />
      <TieredGalleryImage
        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop"
        alt="Gallery image 5"
      />
    </TieredGallery>
  </div>
);
