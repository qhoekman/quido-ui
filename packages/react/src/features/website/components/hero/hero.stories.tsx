import { Button } from "@/components/button/button";
import { VStack } from "@/components/vstack/vstack";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/features/website/components/carousel/carousel";
import {
  Hero,
  HeroActions,
  HeroBackdrop,
  HeroBackdropImage,
  HeroBody,
  HeroCoverImage,
  HeroDiagonalShape,
  HeroSection,
  HeroTagline,
  HeroTitle,
} from "@/features/website/components/hero/hero";
import ReactPlayer from "react-player/lazy";

import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Website/Components/Hero",
  component: Hero,
} satisfies Meta<typeof Hero>;

export const WithContentLeft: StoryFn = (args) => (
  <Hero {...args}>
    <HeroSection style={{ maxWidth: "var(--spacing-3xl)" }}>
      <VStack>
        <HeroTagline>Tagline</HeroTagline>
        <HeroTitle> Medium length hero section title goes in here</HeroTitle>
        <HeroBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeroBody>
        <HeroActions>
          <Button>Button</Button>
          <Button variant="outline">Button</Button>
        </HeroActions>
      </VStack>
    </HeroSection>
    <HeroSection style={{ order: 9999 }}>
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&h=1000&q=80"
        alt="Image"
        width={1000}
        height={1000}
        style={{ borderRadius: "var(--border-radius-xl)" }}
      />
    </HeroSection>
  </Hero>
);

export const WithContentCenter: StoryFn = (args) => (
  <Hero
    {...args}
    style={{
      width: "100%",
      display: "flex",
      paddingTop: "var(--spacing-4)",
      paddingBottom: "var(--spacing-4)",
      "@media (min-width: 1024px)": {
        paddingTop: "var(--spacing-12)",
        paddingBottom: "var(--spacing-12)",
      },
    }}
  >
    <HeroSection
      style={{
        maxWidth: "var(--columns-3xl)",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <VStack
        style={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <HeroTagline>Tagline</HeroTagline>
        <HeroTitle> Medium length hero section title goes in here</HeroTitle>
        <HeroBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeroBody>
        <HeroActions>
          <Button>Button</Button>
          <Button variant="outline">Button</Button>
        </HeroActions>
      </VStack>
    </HeroSection>
  </Hero>
);

export const WithContentVertical: StoryFn = (args) => (
  <Hero style={{ display: "block" }} {...args}>
    <HeroSection style={{ maxWidth: "var(--columns-5xl)" }}>
      <VStack
        style={{
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <HeroTagline>Tagline</HeroTagline>
        <HeroTitle> Medium length hero section title goes in here</HeroTitle>
        <HeroBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeroBody>
        <HeroActions>
          <Button>Button</Button>
          <Button variant="outline">Button</Button>
        </HeroActions>
      </VStack>
    </HeroSection>
    <HeroSection
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "var(--spacing-14)",
        "@media (min-width: 1024px)": {
          marginTop: "var(--spacing-18)",
        },
        maxWidth: "var(--columns-7xl)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1200&q=80"
        alt="Image"
        width={1920}
        height={1200}
        style={{
          borderRadius: "var(--border-radius-xl)",
          objectFit: "cover",
        }}
      />
    </HeroSection>
  </Hero>
);

export const WithBackdrop: StoryFn = (args) => (
  <HeroBackdrop>
    <HeroBackdropImage
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
      alt="hero image"
    />
    <Hero
      {...args}
      style={{
        width: "100%",
        display: "flex",
        padding:
          "var(--spacing-4) var(--spacing-6) var(--spacing-12) var(--spacing-6)",
        "@media (min-width: 1024px)": {
          padding:
            "var(--spacing-4) var(--spacing-6) var(--spacing-12) var(--spacing-6)",
        },
      }}
    >
      <HeroSection
        style={{
          maxWidth: "var(--columns-3xl)",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <VStack
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <HeroTagline style={{ color: "var(--color-background-fg)" }}>
            Tagline
          </HeroTagline>
          <HeroTitle style={{ color: "var(--color-background-fg)" }}>
            Medium length hero section title goes in here
          </HeroTitle>
          <HeroBody style={{ color: "var(--color-muted-fg)" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
            tempora delectus et. Iusto tempora accusantium suscipit labore, iure
            exercitationem autem quasi odit aut temporibus rem expedita maxime
            at. Laudantium?
          </HeroBody>
          <HeroActions>
            <Button>Button</Button>
            <Button variant="outline" style={{ color: "var(--color-white)" }}>
              Button
            </Button>
          </HeroActions>
        </VStack>
      </HeroSection>
    </Hero>
  </HeroBackdrop>
);

export const WithBackdropIllustration: StoryFn = (args) => (
  <HeroBackdrop>
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "var(--columns-7xl)",
        paddingLeft: "var(--spacing-4)",
        paddingRight: "var(--spacing-4)",
        "@media (min-width: 640px)": {
          paddingLeft: "var(--spacing-6)",
          paddingRight: "var(--spacing-6)",
        },
        "@media (min-width: 1024px)": {
          paddingLeft: "var(--spacing-8)",
          paddingRight: "var(--spacing-8)",
        },
      }}
    >
      <Hero {...args}>
        <HeroSection
          style={{
            maxWidth: "var(--columns-3xl)",
            marginTop: "var(--spacing-20)",
          }}
        >
          <VStack>
            <HeroTagline>Tagline</HeroTagline>
            <HeroTitle>
              {" "}
              Medium length hero section title goes in here
            </HeroTitle>
            <HeroBody>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
              tempora delectus et. Iusto tempora accusantium suscipit labore,
              iure exercitationem autem quasi odit aut temporibus rem expedita
              maxime at. Laudantium?
            </HeroBody>
            <HeroActions>
              <Button>Button</Button>
              <Button variant="outline">Button</Button>
            </HeroActions>
          </VStack>
        </HeroSection>
        <HeroSection
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "1/3",
            backgroundColor: "var(--color-muted)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            style={{
              display: "none",
              height: "100%",
              width: "100%",
              stroke: "rgba(255, 255, 255, 0.1)",
              "@media (min-width: 1024px)": {
                position: "absolute",
                display: "block",
              },
            }}
          >
            <g fill="none" strokeLinecap="round" strokeWidth="5.5">
              <path
                d="M10 10c18.75 1.875 50.417 12.542 90 9S158.333-8.25 200-7s58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30S779.167 5.625 800 0M10 1576c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1522c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1468c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1414c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1360c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1306c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1252c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1198c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1144c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1090c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1036c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 982c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 928c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 874c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 820c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 766c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 712c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 658c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 604c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 550c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 496c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 442c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 388c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 334c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 280c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 226c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 172c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 118c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 64c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27"
                transform="translate(-5 -392.516)"
              ></path>
            </g>
          </svg>
          <div
            style={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{}}>
              <img
                loading="lazy"
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&h=1800&q=80"
                alt="Image"
                width={1200}
                height={1800}
                style={{
                  aspectRatio: "2/3",
                  height: "100%",
                  maxHeight: "600px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </HeroSection>
      </Hero>
    </div>
  </HeroBackdrop>
);

export const WithCarousel: StoryFn = (args) => (
  <Hero {...args}>
    <HeroSection style={{ maxWidth: "var(--columns-3xl)" }}>
      <VStack>
        <HeroTagline>Tagline</HeroTagline>
        <HeroTitle> Medium length hero section title goes in here</HeroTitle>
        <HeroBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeroBody>
        <HeroActions>
          <Button>Button</Button>
          <Button variant="outline">Button</Button>
        </HeroActions>
      </VStack>
    </HeroSection>
    <HeroSection style={{ order: 9999 }}>
      <Carousel style={{ width: "100%" }}>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1500&h=1000&q=80"
                alt="Image"
                width={1500}
                height={1000}
                style={{ borderRadius: "var(--border-radius-xl)" }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          style={{
            marginLeft: "var(--spacing-16)",
            border: "none",
            color: "var(--color-primary)",
          }}
        />
        <CarouselNext
          style={{
            marginRight: "var(--spacing-16)",
            border: "none",
            color: "var(--color-primary)",
          }}
        />
      </Carousel>
    </HeroSection>
  </Hero>
);

export const WithImages: StoryFn = (args) => (
  <Hero {...args}>
    <HeroSection style={{ maxWidth: "var(--spacing-3xl)" }}>
      <VStack>
        <HeroTagline>Tagline</HeroTagline>
        <HeroTitle> Medium length hero section title goes in here</HeroTitle>
        <HeroBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeroBody>
        <HeroActions>
          <Button>Button</Button>
          <Button variant="outline">Button</Button>
        </HeroActions>
      </VStack>
    </HeroSection>
    <HeroSection
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "1/2",
        backgroundColor: "var(--color-muted)",
        maxHeight: "800px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        }}
      >
        <div
          style={{
            marginLeft: "auto",
            marginRight: "var(--spacing-4)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-4)",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <img
              key={index}
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=250&h=300&q=80"
              alt="Image"
              width={250}
              height={300}
              style={{ objectFit: "cover" }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div
          style={{
            marginTop: "var(--spacing-6)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--spacing-4)",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <img
              key={index}
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=250&h=300&q=80"
              alt="Image"
              width={250}
              height={300}
              style={{ objectFit: "cover" }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </HeroSection>
  </Hero>
);

export const WithVideo: StoryFn = (args) => (
  <Hero {...args}>
    <HeroSection style={{ maxWidth: "var(--columns-3xl)" }}>
      <VStack>
        <HeroTagline>Tagline</HeroTagline>
        <HeroTitle> Medium length hero section title goes in here</HeroTitle>
        <HeroBody>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeroBody>
        <HeroActions>
          <Button>Button</Button>
          <Button variant="outline">Button</Button>
        </HeroActions>
      </VStack>
    </HeroSection>
    <HeroSection
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "var(--color-muted)",
        paddingTop: "56.25%",
      }}
    >
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        light="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1080&q=80"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
    </HeroSection>
  </Hero>
);

export const WithDiagonalShape: StoryFn = (args) => (
  <HeroBackdrop>
    <Hero
      {...args}
      style={{
        gap: "var(--spacing-14)",
      }}
    >
      <HeroSection
        style={{
          maxWidth: "var(--columns-3xl)",
          marginTop: "var(--spacing-20)",
          marginBottom: "var(--spacing-20)",
          "@media (min-width: 1024px)": {
            marginTop: "var(--spacing-40)",
            marginBottom: "var(--spacing-40)",
          },
        }}
      >
        <VStack>
          <HeroTagline>Tagline</HeroTagline>
          <HeroTitle> Medium length hero section title goes in here</HeroTitle>
          <HeroBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
            tempora delectus et. Iusto tempora accusantium suscipit labore, iure
            exercitationem autem quasi odit aut temporibus rem expedita maxime
            at. Laudantium?
          </HeroBody>
          <HeroActions>
            <Button>Button</Button>
            <Button variant="outline">Button</Button>
          </HeroActions>
        </VStack>
      </HeroSection>
      <HeroSection
        style={{
          position: "order-last",
          backgroundColor: "var(--color-muted)",
          lg: "absolute",
          insetY: 0,
          right: 0,
          width: "1/2",
        }}
      >
        <HeroDiagonalShape />
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&h=1000&q=80"
          alt="Image"
          width={1000}
          height={1000}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </HeroSection>
    </Hero>
  </HeroBackdrop>
);

export const WithCover: StoryFn = (args) => (
  <HeroBackdrop>
    <HeroCoverImage
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1200&q=80"
      alt="hero image"
      width={1920}
      height={1200}
    />
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "var(--spacing-14)",
        maxWidth: "var(--columns-7xl)",
        paddingLeft: "var(--spacing-4)",
        paddingRight: "var(--spacing-4)",
        paddingBottom: "var(--spacing-20)",
      }}
    >
      <Hero {...args}>
        <HeroSection style={{ maxWidth: "var(--columns-3xl)" }}>
          <VStack>
            <HeroTagline>Tagline</HeroTagline>
            <HeroTitle>Medium length hero section title goes in here</HeroTitle>
          </VStack>
        </HeroSection>
        <HeroSection>
          <VStack>
            <HeroBody>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
              tempora delectus et. Iusto tempora accusantium suscipit labore,
              iure exercitationem autem quasi odit aut temporibus rem expedita
              maxime at. Laudantium?
            </HeroBody>
            <HeroActions>
              <Button>Button</Button>
              <Button variant="outline">Button</Button>
            </HeroActions>
          </VStack>
        </HeroSection>
      </Hero>
    </div>
  </HeroBackdrop>
);

WithCover.parameters = {
  layout: "fullscreen",
};
