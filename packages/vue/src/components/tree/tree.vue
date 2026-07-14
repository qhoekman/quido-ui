<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TreeProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<TreeProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    role="tree"
    data-testid="qui-tree"
    :class="['q-tree']"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-tree {
  display: flex;
  flex-direction: column;
}
</style>
