<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface TimelineProps {
  asChild?: boolean;
  as?: "ul" | "ol";
}

const props = withDefaults(defineProps<TimelineProps>(), {
  asChild: false,
  as: "ul",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-timeline']"
    data-testid="qui-timeline"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
ul,
ol {
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
