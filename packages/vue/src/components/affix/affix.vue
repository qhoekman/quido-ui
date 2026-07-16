<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface AffixProps {
  offsetTop?: number | null
  offsetBottom?: number | null
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<AffixProps>(), {
  offsetTop: null,
  offsetBottom: null,
  asChild: false,
  as: 'div'
})

const direction = computed(() => {
  if (props.offsetTop !== null && props.offsetTop !== undefined) {
    return 'top'
  } else if (props.offsetBottom !== null && props.offsetBottom !== undefined) {
    return 'bottom'
  }
  return 'top'
})

const componentClasses = computed(() => {
  return [
    'q-affix',
    {
      'position-top': direction.value === 'top',
      'position-bottom': direction.value === 'bottom'
    }
  ]
})

const stickyStyle = computed(() => {
  const style: Record<string, string> = {
    position: 'sticky'
  }
  if (props.offsetTop !== null && props.offsetTop !== undefined) {
    style.top = `${props.offsetTop}px`
  }
  if (props.offsetBottom !== null && props.offsetBottom !== undefined) {
    style.bottom = `${props.offsetBottom}px`
  }
  if (!style.top && !style.bottom) {
    style.top = '0'
  }
  return style
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="componentClasses"
    :style="stickyStyle"
    data-testid="qui-affix"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-affix {
  z-index: var(--z-index-10);
}
</style>
