<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

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
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    v-bind="$attrs"
  >
    <div class="indicator-inner" />
  </Primitive>
</template>

<style scoped>
div {
  top: 100%;
  z-index: 1;
  display: flex;
  height: var(--spacing-1-5);
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

div[data-state="visible"] {
  animation: fadeIn 0.2s ease-out;
}

div[data-state="hidden"] {
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
