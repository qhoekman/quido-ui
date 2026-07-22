import {
  Reel,
  ReelButtonNext,
  ReelButtonPrevious,
  ReelItem,
  ReelItems,
} from "@/features/ecommerce/components/reel/reel";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Ecommerce/Components/Reel",
  component: Reel,
  argTypes: {},
  args: {},
} satisfies Meta<typeof Reel>;

const unsplashImages = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1560343090-f0409e92787a?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1503602642458-232111445657?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=160&h=160&fit=crop",
  "https://images.unsplash.com/photo-1515955656352-a1da3d7d4b90?w=160&h=160&fit=crop",
];

export const Default: StoryObj<typeof Reel> = {
  render: (args) => (
    <div style={{ maxWidth: "var(--spacing-5xl)", width: "100%" }}>
      <Reel {...args}>
        <ReelButtonPrevious />
        <ReelItems>
          {Array.from({ length: 30 }).map((_, index) => (
            <ReelItem key={index}>
              <img
                src={unsplashImages[index % unsplashImages.length]}
                alt={`Product ${index + 1}`}
              />
            </ReelItem>
          ))}
        </ReelItems>
        <ReelButtonNext />
      </Reel>
    </div>
  ),
};

const products = [
  { name: "Canvas Tote", price: "$24.00" },
  { name: "Wool Scarf", price: "$38.00" },
  { name: "Leather Wallet", price: "$52.00" },
  { name: "Ceramic Mug", price: "$16.00" },
  { name: "Wireless Earbuds", price: "$89.00" },
];

export const Composition: StoryObj<typeof Reel> = {
  render: () => (
    <div style={{ maxWidth: "var(--spacing-5xl)", width: "100%" }}>
      <h4 style={{ margin: "0 0 var(--spacing-2)" }}>Recently viewed</h4>
      <Reel>
        <ReelButtonPrevious />
        <ReelItems>
          {products.map((product, index) => (
            <ReelItem key={product.name}>
              <img
                src={unsplashImages[index % unsplashImages.length]}
                alt={product.name}
              />
              <p style={{ margin: "var(--spacing-1) 0 0", fontSize: "var(--font-size-sm)" }}>
                {product.name}
              </p>
              <p
                style={{
                  margin: 0,
                  color: "var(--color-muted-fg)",
                  fontSize: "var(--font-size-sm)",
                }}
              >
                {product.price}
              </p>
            </ReelItem>
          ))}
        </ReelItems>
        <ReelButtonNext />
      </Reel>
    </div>
  ),
};
