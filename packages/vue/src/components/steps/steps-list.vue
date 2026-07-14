<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface StepsListProps {
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<StepsListProps>(), {
  asChild: false,
  as: "div",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-steps-list']"
    data-testid="qui-steps-list"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-steps-list {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
