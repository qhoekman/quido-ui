<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TreeItemIconProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TreeItemIconProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    data-testid="qui-tree-item-icon"
    :class="['q-tree-item-icon']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-tree-item-icon {
  margin-right: 0.5rem;
}
</style>
