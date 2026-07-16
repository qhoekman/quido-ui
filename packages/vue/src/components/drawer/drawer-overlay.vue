<script setup lang="ts">
import { computed } from "vue";
import { cva, type VariantProps } from "class-variance-authority";
import { Primitive } from "reka-ui";
import type { DrawerVariants } from "./drawer.vue";

const drawerOverlayVariants = cva("q-drawer-overlay", {
  variants: {
    variant: {
      side: "variant--side",
      over: "variant--over",
      push: "variant--push",
    },
    position: {
      left: "position--left",
      right: "position--right",
    },
  },
  defaultVariants: {
    variant: "over",
    position: "left",
  },
});

export type DrawerOverlayVariants = VariantProps<typeof drawerOverlayVariants>;

export interface DrawerOverlayProps {
  variant?: DrawerVariants["variant"];
  position?: DrawerVariants["position"];
  hasBackdrop?: DrawerVariants["hasBackdrop"];
  opened?: boolean;
}

const props = withDefaults(defineProps<DrawerOverlayProps>(), {
  variant: "side",
  position: "left",
  hasBackdrop: "auto",
  opened: false,
});

const classes = computed(() => {
  return drawerOverlayVariants({
    variant: props.variant,
    position: props.position,
  });
});

const overlayClasses = computed(() => {
  return [
    classes.value,
    {
      open: props.opened,
      "has-backdrop": props.hasBackdrop,
    },
  ];
});
</script>

<template>
  <Primitive
    :as="'div'"
    :class="overlayClasses"
    v-bind="$attrs"
    data-testid="qui-drawer-overlay"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  --drawer-width: 172px;

  transition: width 0.3s ease-in-out, transform 0.3s ease-in-out;
  background: var(--color-popover);
  color: var(--color-popover-fg);
  width: var(--drawer-width);
  flex-shrink: 0;
  overflow: hidden;
  height: 100%;
  z-index: 100;
}

.variant--side.position--left {
  width: 0;
  order: -1;
}

.variant--side.position--right {
  order: 1;
  width: 0;
}

.variant--over.position--left {
  position: absolute;
  transform: translateX(-100svw);
}

.variant--over.position--right {
  position: absolute;
  transform: translateX(100svw);
}

.variant--push.position--left {
  transform: translateX(-100svw);
  order: -1;
}

.variant--push.position--right {
  order: 1;
  transform: translateX(100svw);
}

.variant--side.open.position--left {
  width: var(--drawer-width);
}

.variant--side.open.position--right {
  width: var(--drawer-width);
}

.variant--over.open.position--left {
  transform: translateX(0);
}

.variant--over.open.position--right {
  transform: translateX(calc(100svw - var(--drawer-width)));
}

.variant--push.open.position--right {
  transform: translateX(0);
}

.variant--push.open.position--left {
  transform: translateX(0);
}
</style>
