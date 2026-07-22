import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/card/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/features/website/components/carousel/carousel";
import type { StoryObj, Meta } from "@storybook/react-vite";

export default {
  title: "Features/Website/Components/Carousel",
  component: Carousel,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
  args: {
    orientation: "horizontal",
  },
} satisfies Meta<typeof Carousel>;

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80", // nature
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=800&q=80", // city
  "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80", // architecture
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80", // landscape
  "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=800&q=80", // water
];

export const Default: StoryObj<typeof Carousel> = {
  render: (args) => (
    <Carousel {...args}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} style={{ flexBasis: "33.333333%" }}>
            <img
              src={images[index]}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                aspectRatio: "16/9",
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export const Vertical: StoryObj<typeof Carousel> = {
  render: () => (
    <Carousel orientation="vertical" style={{ height: "24rem" }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} style={{ flexBasis: "33.333333%" }}>
            <img
              src={images[index]}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                aspectRatio: "16/9",
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

const destinations = [
  { src: images[0], label: "Banff, Canada" },
  { src: images[1], label: "Tokyo, Japan" },
  { src: images[2], label: "Barcelona, Spain" },
  { src: images[3], label: "Reykjavik, Iceland" },
  { src: images[4], label: "Lake Como, Italy" },
];

export const Composition: StoryObj<typeof Carousel> = {
  render: () => (
    <Carousel style={{ maxWidth: "40rem" }}>
      <CarouselContent>
        {destinations.map((destination) => (
          <CarouselItem key={destination.label}>
            <div style={{ position: "relative" }}>
              <img
                src={destination.src}
                alt={destination.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  aspectRatio: "16/9",
                  borderRadius: "var(--border-radius-lg)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  bottom: "var(--spacing-3)",
                  left: "var(--spacing-3)",
                  padding: "var(--spacing-1) var(--spacing-3)",
                  borderRadius: "var(--border-radius-md)",
                  backgroundColor: "hsl(from var(--color-black) h s l / 60%)",
                  color: "var(--color-white)",
                  fontSize: "var(--font-size-sm)",
                }}
              >
                {destination.label}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};
