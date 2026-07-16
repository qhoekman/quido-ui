<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface ButtonGroupProps {
  asChild?: boolean
}

const props = withDefaults(defineProps<ButtonGroupProps>(), {
  asChild: false
})

const componentClasses = computed(() => 'q-button-group')
</script>

<template>
  <Primitive
    as="div"
    :as-child="asChild"
    :class="componentClasses"
    data-testid="qui-button-group"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  border-radius: var(--border-radius-md);
  box-shadow: var(--box-shadow-default);
}

div :deep(a),
div :deep(button) {
  position: relative;
  border-radius: 0;
  margin: 0;
}

div :deep(a:first-child),
div :deep(button:first-child) {
  border-top-left-radius: var(--border-radius-md);
  border-bottom-left-radius: var(--border-radius-md);
}

div :deep(a:last-child),
div :deep(button:last-child) {
  border-top-right-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
}
</style>
