<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface HeaderBackdropProps {
  as?: "div";
  asChild?: boolean;
}

const props = withDefaults(defineProps<HeaderBackdropProps>(), {
  as: "div",
  asChild: false,
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-header-backdrop']"
    data-testid="qui-header-backdrop"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
