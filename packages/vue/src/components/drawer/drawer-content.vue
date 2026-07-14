<script setup lang="ts">
import { Primitive } from "reka-ui";
</script>

<template>
  <Primitive
    :as="'div'"
    class="q-drawer-content"
    v-bind="$attrs"
    data-testid="drawer__content"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-drawer-content {
  width: 100%;
  transition: margin 0.3s ease, width 0.3s ease;
}
</style>
