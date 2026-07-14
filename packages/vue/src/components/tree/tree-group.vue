<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TreeGroupProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TreeGroupProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    role="group"
    data-testid="qui-tree-group"
    :class="['q-tree-group']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-tree-group {
  display: block;
  padding-left: var(--spacing-6);
}
</style>
