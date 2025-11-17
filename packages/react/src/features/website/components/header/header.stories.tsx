import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import {
  Header,
  HeaderActions,
  HeaderBackdrop,
  HeaderBackdropImage,
  HeaderBody,
  HeaderContent,
  HeaderTagline,
  HeaderTitle,
} from "@/features/website/components/header/header";
import type { Meta, StoryFn } from "@storybook/react-vite";

export default {
  title: "Features/Website/Components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export const WithCenteredContent: StoryFn = (args) => (
  <Header {...args}>
    <HeaderContent className="text-center">
      <HeaderTagline>Tagline</HeaderTagline>
      <HeaderTitle>Short heading goes here</HeaderTitle>
      <HeaderBody>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
        tempora delectus et. Iusto tempora accusantium suscipit labore, iure
        exercitationem autem quasi odit aut temporibus rem expedita maxime at.
        Laudantium?
      </HeaderBody>
      <HeaderActions className="mx-auto">
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
      </HeaderActions>
    </HeaderContent>
  </Header>
);

export const WithLeftContent: StoryFn = (args) => (
  <Header {...args}>
    <HeaderContent>
      <HeaderTagline>Tagline</HeaderTagline>
      <HeaderTitle>Short heading goes here</HeaderTitle>
      <HeaderBody>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
        tempora delectus et. Iusto tempora accusantium suscipit labore, iure
        exercitationem autem quasi odit aut temporibus rem expedita maxime at.
        Laudantium?
      </HeaderBody>
      <HeaderActions>
        <Button>Button</Button>
        <Button variant="outline">Button</Button>
      </HeaderActions>
    </HeaderContent>
  </Header>
);

export const WithForm: StoryFn = (args) => (
  <Header {...args}>
    <HeaderContent>
      <HeaderTagline>Tagline</HeaderTagline>
      <HeaderTitle>Short heading goes here</HeaderTitle>
      <HeaderBody>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
        tempora delectus et. Iusto tempora accusantium suscipit labore, iure
        exercitationem autem quasi odit aut temporibus rem expedita maxime at.
        Laudantium?
      </HeaderBody>
      <HeaderActions className="flex-col space-x-0">
        <div className="flex items-start gap-x-4">
          <Label htmlFor="email-address" className="sr-only">
            Email address
          </Label>

          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="Enter your email"
          />

          <Button type="submit">Subscribe</Button>
        </div>

        <p className="mt-4 text-sm text-neutral-800 md:mt-3">
          By clicking Subscribe you&apos;re confirming that you agree with our{" "}
          <a href="#" className="underline">
            Terms and Conditions
          </a>
        </p>
      </HeaderActions>
    </HeaderContent>
  </Header>
);

export const WithBackdrop: StoryFn = (args) => (
  <HeaderBackdrop>
    <HeaderBackdropImage />
    <Header className="py-6" {...args}>
      <HeaderContent className="text-center">
        <HeaderTagline className="text-neutral-200">Tagline</HeaderTagline>
        <HeaderTitle className="text-white">
          Short heading goes here
        </HeaderTitle>
        <HeaderBody className="text-neutral-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeaderBody>
        <HeaderActions className="mx-auto">
          <Button>Button</Button>
          <Button variant="outline" className="text-neutral-100">
            Button
          </Button>
        </HeaderActions>
      </HeaderContent>
    </Header>
  </HeaderBackdrop>
);

export const WithHorizontalContent: StoryFn = (args) => (
  <HeaderBackdrop>
    <HeaderBackdropImage />
    <Header {...args}>
      <HeaderContent className="max-w-6xl flex flex-col justify-between py-24 xl:flex-row xl:items-center gap-x-6">
        <HeaderTitle className="flex-1 text-white">
          Short heading goes here
        </HeaderTitle>
        <HeaderBody className="flex-1 text-neutral-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeaderBody>
      </HeaderContent>
    </Header>
  </HeaderBackdrop>
);
