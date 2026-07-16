<script setup lang="ts">
import { computed } from "vue";
import { NavigationMenuIndicator } from "reka-ui";

export interface MegaMenuIndicatorProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MegaMenuIndicatorProps>(), {
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-mega-menu-indicator"]);
</script>

<template>
  <NavigationMenuIndicator
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <div class="indicator-inner" />
  </NavigationMenuIndicator>
</template>

<style scoped>
.indicator-inner {
  position: relative;
  top: 60%;
  height: var(--spacing-2);
  width: var(--spacing-2);
  transform: rotate(45deg);
  border-top-left-radius: var(--border-radius-sm);
  background-color: var(--color-border);
  box-shadow: var(--box-shadow-md);
}
</style>

<style>
/*
 * reka-ui's NavigationMenuIndicator is rendered via Teleport (into the
 * list's registered indicator track), same as NavigationMenuContent --
 * this severs any connection to this component's own scoped-CSS
 * data-v-* attribute, so scoped selectors (with or without :deep()) can
 * never match. These rules must be global, scoped only by the
 * q-mega-menu-indicator class.
 */
.q-mega-menu-indicator {
  top: 100%;
  z-index: 1;
  display: flex;
  height: var(--spacing-1-5);
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.q-mega-menu-indicator[data-state="visible"] {
  animation: fadeIn 0.2s ease-out;
}

.q-mega-menu-indicator[data-state="hidden"] {
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
</style>
