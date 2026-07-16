<script setup lang="ts">
</script>

<template>
  <span :class="['q-dropdown-shortcut']" v-bind="$attrs">
    <slot />
  </span>
</template>

<style scoped>
.q-dropdown-shortcut {
  margin-left: auto;
  font-size: var(--font-size-xs);
  letter-spacing: var(--letter-spacing-widest);
  opacity: 0.6;
}
</style>
