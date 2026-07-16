<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TreeItemLabelProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TreeItemLabelProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-testid="qui-tree-item-label"
    :class="['q-tree-item-label']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-tree-item-label {
  flex-grow: 1;
}
</style>
