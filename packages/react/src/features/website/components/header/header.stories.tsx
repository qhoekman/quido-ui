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

        <p
          style={{
            marginTop: "var(--spacing-4)",
            fontSize: "var(--font-size-sm)",
            color: "var(--color-muted-fg)",
          }}
        >
          By clicking Subscribe you&apos;re confirming that you agree with our{" "}
          <a href="#" style={{ textDecoration: "underline" }}>
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
      <HeaderContent style={{ textAlign: "center" }}>
        <HeaderTagline style={{ color: "var(--color-muted-fg)" }}>
          Tagline
        </HeaderTagline>
        <HeaderTitle style={{ color: "var(--color-background-fg)" }}>
          Short heading goes here
        </HeaderTitle>
        <HeaderBody style={{ color: "var(--color-muted-fg)" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeaderBody>
        <HeaderActions style={{ marginLeft: "auto" }}>
          <Button>Button</Button>
          <Button
            variant="outline"
            style={{ color: "var(--color-background-fg)" }}
          >
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
      <HeaderContent
        style={{
          maxWidth: "var(--columns-6xl)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "between",
          paddingTop: "var(--spacing-24)",
          paddingBottom: "var(--spacing-24)",
          "@media (min-width: 1024px)": {
            flexDirection: "row",
            alignItems: "center",
            gap: "var(--spacing-6)",
          },
        }}
      >
        <HeaderTitle style={{ color: "var(--color-background-fg)" }}>
          Short heading goes here
        </HeaderTitle>
        <HeaderBody style={{ color: "var(--color-background-fg)" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eum
          tempora delectus et. Iusto tempora accusantium suscipit labore, iure
          exercitationem autem quasi odit aut temporibus rem expedita maxime at.
          Laudantium?
        </HeaderBody>
      </HeaderContent>
    </Header>
  </HeaderBackdrop>
);
