<script setup lang="ts">
import { computed } from "vue";
import { NavigationMenuRoot } from "reka-ui";
import MegaMenuViewport from "./mega-menu-viewport.vue";

export interface MegaMenuProps {
  modelValue?: string;
  defaultValue?: string;
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

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const classes = computed(() => ["q-mega-menu"]);
</script>

<template>
  <NavigationMenuRoot
    :model-value="modelValue"
    :default-value="defaultValue"
    :as="as"
    :as-child="asChild"
    :class="classes"
    :dir="dir"
    :delay-duration="delayDuration"
    :skip-delay-duration="skipDelayDuration"
    v-bind="$attrs"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <slot />
    <MegaMenuViewport />
  </NavigationMenuRoot>
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
