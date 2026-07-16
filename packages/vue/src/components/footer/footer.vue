<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterProps {
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterProps>(), {
  asChild: false,
});

const footerClasses = computed(() => ["q-footer"]);
</script>

<template>
  <Primitive
    as="footer"
    :as-child="asChild"
    :class="footerClasses"
    aria-labelledby="footer-heading"
    v-bind="$attrs"
  >
    <h2 id="footer-heading" class="q-footer-sr-only">Footer</h2>
    <slot />
  </Primitive>
</template>

<style scoped>
footer {
  display: block;
  margin: 0 auto;
  padding: var(--spacing-16) var(--spacing-6) var(--spacing-8) var(--spacing-6);
}

@media (width >= 768px) {
  footer {
    padding-bottom: var(--spacing-10);
    padding-top: var(--spacing-18);
  }
}

.q-footer-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
