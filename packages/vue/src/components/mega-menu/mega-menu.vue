<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";
import MegaMenuViewport from "./mega-menu-viewport.vue";

export interface MegaMenuProps {
  dir?: "ltr" | "rtl";
  delayDuration?: number;
  skipDelayDuration?: number;
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MegaMenuProps>(), {
  dir: "ltr",
  delayDuration: 200,
  skipDelayDuration: 300,
  asChild: false,
  as: "nav",
});

const classes = computed(() => ["q-mega-menu"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    :dir="dir"
    :data-delay-duration="delayDuration"
    :data-skip-delay-duration="skipDelayDuration"
    v-bind="$attrs"
  >
    <slot />
    <MegaMenuViewport />
  </Primitive>
</template>

<style scoped>
nav,
[role="navigation"] {
  position: relative;
  z-index: var(--z-index-10);
  display: flex;
  max-width: max-content;
  flex: 1;
  align-items: center;
  justify-content: center;
}
</style>
