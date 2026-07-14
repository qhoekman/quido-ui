<script setup lang="ts">
import Button from "../button/button.vue";

export interface NavbarLinkProps {
  href?: string;
  as?: "a";
  asChild?: boolean;
}

const props = withDefaults(defineProps<NavbarLinkProps>(), {
  as: "a",
  asChild: false,
  href: "#",
});
</script>

<template>
  <Button variant="ghost" as-child>
    <a
      :href="href"
      :class="['q-navbar-link']"
      data-testid="qui-navbar-link"
      v-bind="$attrs"
    >
      <slot />
    </a>
  </Button>
</template>

<style scoped>
a {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-6);
  color: var(--color-background-fg);
}
</style>
