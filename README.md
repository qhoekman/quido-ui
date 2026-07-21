# UI Components Library

Welcome to our UI Components Library - a comprehensive collection of UI components crafted for React, Angular, and Vue. This library is designed to accelerate your application development by providing easy-to-use, customizable, and well-documented components. Each component is showcased through Storybook, allowing you to visualize and interact with the components before integrating them into your projects.

> This project is still in development to include more UI components for the framework. React is the most complete when it comes to components.

## Features

- **Comprehensive Collection**: Includes a wide range of UI components for React, Angular, and Vue.
- **Easy Integration**: Components are designed for easy copy and paste, speeding up your development process.
- **Storybook Integration**: Visualize and interact with components through Storybook, making it easier to choose the right components for your application.
- **Monorepo Setup**: Utilizes a monorepo structure for easy management and isolation of framework-specific components.
- **PNPM for Package Management**: Leverages PNPM for efficient and reliable package management across the monorepo.
- **Turborepo for Task Orchestration**: Uses Turborepo to run builds in parallel with caching and correct build ordering.

## Philosophy

The design system is built with the following principles in mind:

- **Opt-out**: The design system should be easy to use and opt-out. Components are designed to be used out of the box, but also easy to customize. This means that the code for the component can be easily copied and pasted into the consuming application and modified as needed.

- **Consistency**: The design system should provide a consistent look and feel across all applications. This is done using the design tokens declared as CSS variables.

- **Accessibility**: The design system should be accessible by default. This means that all components should be designed with accessibility in mind. This includes things like keyboard navigation, screen reader support, and color contrast.

## Getting Started

Follow these steps to get started with our UI Components Library:

### Prerequisites

- **Node.js 20.19+** (required by Storybook 10). If you use nvm, run `nvm use` from the repo root (see `.nvmrc`).
- **PNPM** for package management. If not installed:

```bash
npm install -g pnpm
```

Install dependencies from the repository root:

```bash
pnpm install
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

## Building

Build all Storybook sites for deployment (framework packages build in parallel, then the host shell):

```sh
pnpm build
```

Turborepo caches build outputs, so subsequent runs are faster when nothing has changed.

## Getting Started

To get started with the design system there are a few things you need to do:

1. **Configure Design Tokens**: Import the shared tokens from `@quido-ui/styles` (canonical source: `packages/styles/tokens.css`):

```css
@import "@quido-ui/styles/tokens.css";
```

If you prefer to copy the tokens into your app, paste the contents of [`packages/styles/tokens.css`](packages/styles/tokens.css).

That's it! You should now be able to use the design system in your application.

## Figma

Work in progress. We are currently working on a Figma file that will include all the components and design tokens.

## Inspiration

The design system is inspired by a number of other design systems, including:

- [Shadcn UI](https://ui.shadcn.com)
