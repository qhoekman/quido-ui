<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface MenubarProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<MenubarProps>(), {
  asChild: false,
  as: "div",
});

const classes = computed(() => ["q-menubar"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="classes"
    role="menubar"
    data-testid="qui-menubar"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div,
[role="menubar"] {
  display: flex;
  gap: var(--spacing-2);
}
</style>
