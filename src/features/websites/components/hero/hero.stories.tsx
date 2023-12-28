import { Button } from "@/components/button/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel/carousel";
import { VStack } from "@/components/vstack/vstack";
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
} from "@/features/websites/components/hero/hero";
import ReactPlayer from "react-player/lazy";

import type { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Features/Website/Components/Hero",
  component: Hero,
} as Meta<typeof Hero>;

export const WithContentLeft: StoryFn = (args) => (
  <Hero {...args}>
    <HeroSection className="max-w-3xl">
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
    <HeroSection className="order-last">
      <img
        src="https://dummyimage.com/1000x1000/d4d4d4/171717"
        alt="Image"
        width={1000}
        height={1000}
        className="rounded-xl"
      />
    </HeroSection>
  </Hero>
);

export const WithContentCenter: StoryFn = (args) => (
  <Hero {...args} className="w-full flex py-4 lg:py-12">
    <HeroSection className="max-w-3xl mx-auto ">
      <VStack className="items-center text-center">
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
  <Hero className="block" {...args}>
    <HeroSection className="max-w-5xl">
      <VStack className="items-center text-center">
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
    <HeroSection className="mx-auto mt-14 lg:mt-18 max-w-7xl">
      <img
        src="https://dummyimage.com/1920x1200/d4d4d4/171717"
        alt="Image"
        width={1920}
        height={1200}
        className="rounded-xl object-cover"
      />
    </HeroSection>
  </Hero>
);

export const WithBackdrop: StoryFn = (args) => (
  <HeroBackdrop>
    <HeroBackdropImage
      src="https://dummyimage.com/1920x1200/d4d4d4/171717"
      alt="hero image"
    />
    <Hero {...args} className="w-full flex py-4 lg:py-12">
      <HeroSection className="max-w-3xl mx-auto ">
        <VStack className="items-center text-center">
          <HeroTagline className="text-neutral-100">Tagline</HeroTagline>
          <HeroTitle className="text-white">
            Medium length hero section title goes in here
          </HeroTitle>
          <HeroBody className="text-neutral-200">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
            tempora delectus et. Iusto tempora accusantium suscipit labore, iure
            exercitationem autem quasi odit aut temporibus rem expedita maxime
            at. Laudantium?
          </HeroBody>
          <HeroActions>
            <Button>Button</Button>
            <Button variant="outline" className="text-white">
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
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero {...args}>
        <HeroSection className="max-w-3xl mt-20 sm:mt-32 lg:my-40">
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
        <HeroSection className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/3 lg:bg-neutral-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            className="hidden h-full w-full stroke-white/10 lg:absolute lg:block"
          >
            <g fill="none" strokeLinecap="round" strokeWidth="5.5">
              <path
                d="M10 10c18.75 1.875 50.417 12.542 90 9S158.333-8.25 200-7s58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30S779.167 5.625 800 0M10 1576c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1522c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1468c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1414c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1360c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1306c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1252c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1198c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1144c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1090c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 1036c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 982c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 928c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 874c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 820c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 766c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 712c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 658c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 604c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 550c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 496c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 442c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 388c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 334c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 280c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 226c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 172c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 118c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27M10 64c18.75 1.875 50.417 12.542 90 9s58.333-27.25 100-26 58.333 32.625 100 32 58.333-35.833 100-35c41.667.833 58.333 37.542 100 39 41.667 1.458 58.333-31.583 100-32 41.667-.417 58.333 29.375 100 30s79.167-21.375 100-27"
                transform="translate(-5 -392.516)"
              ></path>
            </g>
          </svg>
          <div className="flex h-full items-center justify-center lg:justify-start">
            <div className="lg:-translate-x-1/4">
              <img
                loading="lazy"
                src="https://dummyimage.com/1200x1800/d4d4d4/171717"
                alt="Image"
                width={1200}
                height={1800}
                className="aspect-[2/3] h-full max-h-[600px] w-full object-cover"
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
    <HeroSection className="max-w-3xl">
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
    <HeroSection className="order-last">
      <Carousel className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <img
                src="https://dummyimage.com/1500x1000/d4d4d4/171717"
                alt="Image"
                width={1500}
                height={1000}
                className="rounded-xl"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-16 border-none text-primary" />
        <CarouselNext className="mr-16 border-none text-primary" />
      </Carousel>
    </HeroSection>
  </Hero>
);

export const WithImages: StoryFn = (args) => (
  <Hero {...args}>
    <HeroSection className="max-w-3xl">
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
    <HeroSection className="order-last max-h-[800px] overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="ml-auto mr-4 flex flex-col space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <img
              key={index}
              src="https://dummyimage.com/250x300/d4d4d4/171717"
              alt="Image"
              width={250}
              height={300}
              className="object-cover"
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="mt-6 flex flex-col space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <img
              key={index}
              src="https://dummyimage.com/250x300/d4d4d4/171717"
              alt="Image"
              width={250}
              height={300}
              className="object-cover"
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
    <HeroSection className="max-w-3xl">
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
    <HeroSection className="order-last relative w-full bg-neutral-300 pt-[56.25%]">
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        light="https://dummyimage.com/"
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
    </HeroSection>
  </Hero>
);

export const WithDiagonalShape: StoryFn = (args) => (
  <HeroBackdrop>
    <Hero {...args} className="gap-14">
      <HeroSection className="max-w-3xl my-20 lg:my-40 ">
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
      <HeroSection className="order-last bg-neutral-100 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <HeroDiagonalShape />
        <img
          src="https://dummyimage.com/1000x1000/d4d4d4/171717"
          alt="Image"
          width={1000}
          height={1000}
          className="h-full w-full object-cover"
        />
      </HeroSection>
    </Hero>
  </HeroBackdrop>
);

export const WithCover: StoryFn = (args) => (
  <HeroBackdrop>
    <HeroCoverImage
      src="https://dummyimage.com/1920x1200/d4d4d4/171717"
      alt="hero image"
      width={1920}
      height={1200}
    />
    <div className="mx-auto mt-14 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <Hero {...args}>
        <HeroSection className="max-w-3xl">
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
