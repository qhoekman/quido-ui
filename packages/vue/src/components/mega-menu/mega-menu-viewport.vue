<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface MegaMenuViewportProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MegaMenuViewportProps>(), {
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-mega-menu-viewport"]);

const handlePointerEnter = (event: PointerEvent) => {
  event.preventDefault();
};

const handlePointerLeave = (event: PointerEvent) => {
  event.preventDefault();
};
</script>

<template>
  <div class="viewport-wrapper">
    <Primitive
      :as="as"
      :as-child="asChild"
      :class="classes"
      @pointerenter="handlePointerEnter"
      @pointerleave="handlePointerLeave"
      v-bind="$attrs"
    >
      <slot />
    </Primitive>
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

div {
  transform-origin: top center;
  position: relative;
  margin-top: var(--spacing-1-5);
  height: var(--radix-navigation-menu-viewport-height);
  width: 100%;
  overflow: hidden;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-popover);
  color: var(--color-popover-fg);
  box-shadow: var(--box-shadow-default);
}

@media (min-width: 768px) {
  div {
    width: var(--radix-navigation-menu-viewport-width);
  }
}

div[data-state="open"] {
  animation: zoomIn 0.2s ease-out;
}

div[data-state="closed"] {
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
