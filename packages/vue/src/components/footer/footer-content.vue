<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterContentProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterContentProps>(), {
  asChild: false,
});

const footerContentClasses = computed(() => ["q-footer-content"]);
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="footerContentClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--spacing-10);
}

@media (width >= 768px) {
  div {
    gap: var(--spacing-14);
  }
}

@media (width >= 1280px) {
  div {
    flex-direction: row;
  }
}
</style>
