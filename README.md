# UI Components Library

Welcome to our UI Components Library - a comprehensive collection of UI components crafted for React, Angular, and Vue. This library is designed to accelerate your application development by providing easy-to-use, customizable, and well-documented components. Each component is showcased through Storybook, allowing you to visualize and interact with the components before integrating them into your projects.

> This project is still in development to include more UI components for the framework. React is the most complete when it comes to components.

## Features

- **Comprehensive Collection**: Includes a wide range of UI components for React, Angular, and Vue.
- **Easy Integration**: Components are designed for easy copy and paste, speeding up your development process.
- **Storybook Integration**: Visualize and interact with components through Storybook, making it easier to choose the right components for your application.
- **Monorepo Setup**: Utilizes a monorepo structure for easy management and isolation of framework-specific components.
- **PNPM for Package Management**: Leverages PNPM for efficient and reliable package management across the monorepo.

## Philosophy

The design system is built with the following principles in mind:

- **Opt-out**: The design system should be easy to use and opt-out. Components are designed to be used out of the box, but also easy to customize. This means that the code for the component can be easily copied and pasted into the consuming application and modified as needed.

- **Consistency**: The design system should provide a consistent look and feel across all applications. This is done using the design tokens declared as CSS variables.

- **Accessibility**: The design system should be accessible by default. This means that all components should be designed with accessibility in mind. This includes things like keyboard navigation, screen reader support, and color contrast.

## Getting Started

Follow these steps to get started with our UI Components Library:

### Prerequisites

Ensure you have PNPM installed on your system. If not, you can install it by running:

```bash
npm install -g pnpm
```

## Running

You can open Storybook for each framework by doing:

### React

```sh
pnpm react dev
```

### Angular

```
pnpm angular dev
```

### Vue

```
pnpm vue dev
```

> The host package is only used for deployment which consists of documentation and connect the individual Storybooks together.

## Getting Started

To get started with the design system there are a few things you need to do:

1. **Configure Design Tokens**: The design tokens are configured in the `tailwind.config.js` file. For the components to work we recommend the following configuration:

```ts
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.blue[500],
          fg: colors.white,
        },
        secondary: {
          DEFAULT: colors.indigo[500],
          fg: colors.white,
        },
        danger: {
          DEFAULT: colors.red[500],
          fg: colors.white,
        },
        muted: {
          DEFAULT: colors.neutral[200],
          fg: colors.neutral[900],
        },
        input: colors.neutral[400],
        foreground: colors.neutral[900],
        background: colors.neutral[50],
        ring: colors.blue[400],
        card: {
          DEFAULT: colors.neutral[50],
          fg: colors.neutral[900],
        },
        popover: {
          DEFAULT: colors.neutral[50],
          fg: colors.neutral[900],
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

1. **Install packages**: The design system is built using a number of different packages. You can install them using the following command:

```sh
npm install tailwindcss-animate
npm install -D class-variance-authority tailwind-merge clsx
```

1. **Class Merger**: To reduce the number of duplicate classes in the final CSS output, we use the `tailwind-merge` package. So, you need to create a utility function that merges classes:

```ts
// Save in ./src/lib/utils.ts

import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

That's it! You should now be able to use the design system in your application.

## Figma

Work in progress. We are currently working on a Figma file that will include all the components and design tokens.

## Inspiration

The design system is inspired by a number of other design systems, including:

- [Shadcn UI](https://ui.shadcn.com)
