<script setup lang="ts">
import { computed } from "vue";
import { NavigationMenuContent } from "reka-ui";

export interface MegaMenuContentProps {
  asChild?: boolean;
  as?: string;
  forceMount?: boolean;
}

const props = withDefaults(defineProps<MegaMenuContentProps>(), {
  asChild: false,
  as: "div",
  forceMount: false,
});

const classes = computed(() => ["q-mega-menu-content"]);
</script>

<template>
  <NavigationMenuContent
    :as="as"
    :as-child="asChild"
    :class="classes"
    :force-mount="forceMount"
    v-bind="$attrs"
  >
    <slot />
  </NavigationMenuContent>
</template>

<style>
/*
 * reka-ui's NavigationMenuContent is rendered via Teleport (into the
 * viewport element, or document.body as a fallback), which severs any
 * connection to this component's own scoped-CSS data-v-* attribute --
 * neither the content element nor any of its (post-teleport) ancestors
 * carry it, so scoped selectors (with or without :deep()) can never
 * match. These rules must be global, scoped only by the
 * q-mega-menu-content class.
 */
.q-mega-menu-content {
  left: 0;
  top: 0;
  width: 100%;
}

@media (min-width: 768px) {
  .q-mega-menu-content {
    position: absolute;
    width: auto;
  }
}

.q-mega-menu-content[data-motion="from-end"] {
  animation: slideInFromRight 0.2s ease-out;
}

.q-mega-menu-content[data-motion="from-start"] {
  animation: slideInFromLeft 0.2s ease-out;
}

.q-mega-menu-content[data-motion="to-end"] {
  animation: slideOutToRight 0.2s ease-out;
}

.q-mega-menu-content[data-motion="to-start"] {
  animation: slideOutToLeft 0.2s ease-out;
}

.q-mega-menu-content[data-motion^="from-"]:not([data-motion="from-end"]):not([data-motion="from-start"]) {
  animation: fadeIn 0.2s ease-out;
}

.q-mega-menu-content[data-motion^="to-"]:not([data-motion="to-end"]):not([data-motion="to-start"]) {
  animation: fadeOut 0.2s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(13rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-13rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(13rem);
  }
}

@keyframes slideOutToLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-13rem);
  }
}
</style>
