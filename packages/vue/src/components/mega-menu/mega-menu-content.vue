<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

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

const handlePointerLeave = (event: PointerEvent) => {
  event.preventDefault();
};

const handlePointerEnter = (event: PointerEvent) => {
  event.preventDefault();
};
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :data-force-mount="forceMount"
    @pointerleave="handlePointerLeave"
    @pointerenter="handlePointerEnter"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  left: 0;
  top: 0;
  width: 100%;
}

@media (min-width: 768px) {
  div {
    position: absolute;
    width: auto;
  }
}

div[data-motion="from-end"] {
  animation: slideInFromRight 0.2s ease-out;
}

div[data-motion="from-start"] {
  animation: slideInFromLeft 0.2s ease-out;
}

div[data-motion="to-end"] {
  animation: slideOutToRight 0.2s ease-out;
}

div[data-motion="to-start"] {
  animation: slideOutToLeft 0.2s ease-out;
}

div[data-motion^="from-"]:not([data-motion="from-end"]):not([data-motion="from-start"]) {
  animation: fadeIn 0.2s ease-out;
}

div[data-motion^="to-"]:not([data-motion="to-end"]):not([data-motion="to-start"]) {
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
