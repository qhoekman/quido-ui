<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterSectionProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterSectionProps>(), {
  asChild: false,
});

const footerSectionClasses = computed(() => ["q-footer-section"]);
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="footerSectionClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  max-width: var(--breakpoint-xs);
  flex-direction: column;
  gap: var(--spacing-4);
}

@media (width >= 640px) {
  div {
    max-width: var(--breakpoint-lg);
  }
}
</style>
