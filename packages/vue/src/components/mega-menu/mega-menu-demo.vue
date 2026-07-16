<script setup lang="ts">
import MegaMenuComponent from "./mega-menu.vue";
import MegaMenuListComponent from "./mega-menu-list.vue";
import MegaMenuItemComponent from "./mega-menu-item.vue";
import MegaMenuTriggerComponent from "./mega-menu-trigger.vue";
import MegaMenuContentComponent from "./mega-menu-content.vue";
import MegaMenuLinkComponent from "./mega-menu-link.vue";
import MegaMenuListItemComponent from "./mega-menu-list-item.vue";

defineProps<{
  dir?: "ltr" | "rtl";
  delayDuration?: number;
  skipDelayDuration?: number;
}>();

const components = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
</script>

<template>
  <MegaMenuComponent
    :dir="dir"
    :delay-duration="delayDuration"
    :skip-delay-duration="skipDelayDuration"
    class="q-mega-menu-demo"
  >
    <MegaMenuListComponent>
      <MegaMenuItemComponent>
        <MegaMenuTriggerComponent>Getting started</MegaMenuTriggerComponent>
        <MegaMenuContentComponent>
          <ul class="content-grid">
            <li class="content-grid-hero">
              <MegaMenuLinkComponent variant="plain" as-child>
                <a href="/" class="hero-card">
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Logo"
                    class="hero-logo"
                  />
                  <div class="hero-title">shadcn/ui</div>
                  <p class="hero-description">
                    Beautifully designed components built with Radix UI.
                  </p>
                </a>
              </MegaMenuLinkComponent>
            </li>
            <MegaMenuListItemComponent href="/docs" title="Introduction">
              Re-usable components built using Radix UI.
            </MegaMenuListItemComponent>
            <MegaMenuListItemComponent href="/docs/installation" title="Installation">
              How to install dependencies and structure your app.
            </MegaMenuListItemComponent>
            <MegaMenuListItemComponent
              href="/docs/primitives/typography"
              title="Typography"
            >
              Styles for headings, paragraphs, lists...etc
            </MegaMenuListItemComponent>
          </ul>
        </MegaMenuContentComponent>
      </MegaMenuItemComponent>
      <MegaMenuItemComponent>
        <MegaMenuTriggerComponent>Components</MegaMenuTriggerComponent>
        <MegaMenuContentComponent>
          <ul class="components-grid">
            <MegaMenuListItemComponent
              v-for="component in components"
              :key="component.title"
              :title="component.title"
              :href="component.href"
            >
              {{ component.description }}
            </MegaMenuListItemComponent>
          </ul>
        </MegaMenuContentComponent>
      </MegaMenuItemComponent>
      <MegaMenuItemComponent>
        <MegaMenuLinkComponent href="/docs"> Documentation </MegaMenuLinkComponent>
      </MegaMenuItemComponent>
    </MegaMenuListComponent>
  </MegaMenuComponent>
</template>

<style scoped>
.q-mega-menu-demo {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.content-grid {
  display: grid;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  width: 100%;
  max-width: 400px;
  margin: 0;
  list-style: none;
}

.content-grid-hero {
  grid-row: span 3 / span 3;
}

.hero-card {
  display: flex;
  height: 100%;
  width: 100%;
  user-select: none;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  border-radius: var(--border-radius-md);
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.1));
  padding: var(--spacing-6);
  text-decoration: none;
  outline: none;
  color: inherit;
  text-align: left;
}

.hero-logo {
  width: var(--spacing-8);
  height: var(--spacing-8);
}

.hero-title {
  margin-bottom: var(--spacing-2);
  margin-top: var(--spacing-4);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
}

.hero-description {
  font-size: var(--font-size-sm);
  line-height: var(--line-height-tight);
  color: var(--color-muted-fg);
  margin: 0;
}

.components-grid {
  display: grid;
  width: 100%;
  max-width: 400px;
  gap: var(--spacing-3);
  padding: var(--spacing-4);
  margin: 0;
  list-style: none;
}

@media (min-width: 768px) {
  .content-grid {
    width: 400px;
  }

  .components-grid {
    width: 500px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .content-grid {
    width: 500px;
    grid-template-columns: 0.75fr 1fr;
  }

  .components-grid {
    width: 600px;
  }
}
</style>
