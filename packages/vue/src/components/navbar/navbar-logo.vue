<script setup lang="ts">
import { Primitive } from "reka-ui";

export interface NavbarLogoProps {
  href?: string;
  as?: "a";
  asChild?: boolean;
  "aria-label"?: string;
}

const props = withDefaults(defineProps<NavbarLogoProps>(), {
  as: "a",
  asChild: false,
  href: "#",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :href="href"
    :class="['q-navbar-logo']"
    data-testid="qui-navbar-logo"
    v-bind="$attrs"
  >
    <span
      v-if="ariaLabel"
      class="q-navbar-logo-sr-only"
    >
      {{ ariaLabel }}
    </span>
    <slot />
  </Primitive>
</template>

<style scoped>
a {
  margin: calc(var(--spacing-1-5) * -1);
  padding: var(--spacing-1-5);
}

.q-navbar-logo-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}
</style>
