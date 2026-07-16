<script setup lang="ts">
import { computed } from "vue";
import { NavigationMenuViewport } from "reka-ui";

export interface MegaMenuViewportProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MegaMenuViewportProps>(), {
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-mega-menu-viewport"]);
</script>

<template>
  <div class="viewport-wrapper">
    <NavigationMenuViewport
      :as="as"
      :as-child="asChild"
      :class="classes"
      v-bind="$attrs"
    >
      <slot />
    </NavigationMenuViewport>
  </div>
</template>

<style scoped>
.viewport-wrapper {
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  justify-content: center;
}

:deep(.q-mega-menu-viewport) {
  transform-origin: top center;
  position: relative;
  margin-top: var(--spacing-1-5);
  height: var(--reka-navigation-menu-viewport-height);
  width: 100%;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  box-shadow: var(--box-shadow-default);
}

@media (min-width: 768px) {
  :deep(.q-mega-menu-viewport) {
    width: var(--reka-navigation-menu-viewport-width);
  }
}

:deep(.q-mega-menu-viewport[data-state="open"]) {
  animation: zoomIn 0.2s ease-out;
}

:deep(.q-mega-menu-viewport[data-state="closed"]) {
  animation: zoomOut 0.2s ease-out;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}
</style>
