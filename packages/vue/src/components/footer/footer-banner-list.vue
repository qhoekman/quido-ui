<script setup lang="ts">
import { computed } from "vue";
import { Primitive } from "reka-ui";

export interface FooterBannerListProps {
  as?: "nav" | "ul";
  asChild?: boolean;
}

const props = withDefaults(defineProps<FooterBannerListProps>(), {
  as: "nav",
  asChild: false,
});

const footerBannerListClasses = computed(() => ["q-footer-banner-list"]);
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="footerBannerListClasses"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
nav,
ul {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin: 0;
  padding: 0;
}

@media (width >= 768px) {
  nav,
  ul {
    flex-direction: row;
  }
}
</style>
