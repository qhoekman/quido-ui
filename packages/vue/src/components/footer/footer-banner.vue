<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterBannerProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterBannerProps>(), {
  asChild: false,
});

const footerBannerClasses = computed(() => ["q-footer-banner"]);
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="footerBannerClasses"
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
  color: var(--color-background-fg);
  fill: currentColor;
  gap: var(--spacing-1);
  border-top: 1px solid var(--color-neutral-900-10);
  padding-top: var(--spacing-4);
}

@media (width >= 768px) {
  div {
    flex-direction: row;
    align-items: flex-end;
  }
}
</style>
