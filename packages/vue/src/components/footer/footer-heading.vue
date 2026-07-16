<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterHeadingProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterHeadingProps>(), {
  asChild: false,
});

const footerHeadingClasses = computed(() => ["q-footer-heading"]);
</script>

<template>
  <Primitive
    as="h3"
    :as-child="asChild"
    :class="footerHeadingClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
h3 {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
  margin: 0;
  padding: 0;
}
</style>
