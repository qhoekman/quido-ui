<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'

export interface AspectRatioProps {
  ratio?: `${number} / ${number}`
  asChild?: boolean
}

const props = withDefaults(defineProps<AspectRatioProps>(), {
  ratio: '1 / 1',
  asChild: false
})

const aspectRatioStyle = computed(() => ({
  aspectRatio: props.ratio
}))
</script>

<template>
  <Primitive
    :as-child="asChild"
    :class="['q-aspect-ratio']"
    :style="aspectRatioStyle"
    data-testid="qui-aspect-ratio"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
.q-aspect-ratio {
  overflow: hidden;
}
</style>
