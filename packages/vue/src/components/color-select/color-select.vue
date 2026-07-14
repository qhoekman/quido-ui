<script setup lang="ts">
import { provide, ref, computed, watch } from 'vue'
import { Primitive } from 'reka-ui'

export interface ColorSelectProps {
  defaultValue?: string
  value?: string
  disabled?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ColorSelectProps>(), {
  disabled: false,
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:value': [value: string | undefined]
  'valueChange': [value: string | undefined]
}>()

// Internal state management
const internalValue = ref(props.defaultValue)
const isControlled = props.value !== undefined
const selectedColor = computed(() => (isControlled ? props.value : internalValue.value))

const selectColor = (color: string) => {
  if (!isControlled) {
    internalValue.value = color
  }
  emit('update:value', color)
  emit('valueChange', color)
}

// Watch for external changes
watch(
  () => props.value,
  (newValue) => {
    if (isControlled && newValue !== undefined) {
      internalValue.value = newValue
    }
  }
)

// Provide context to child components
provide('colorSelectContext', {
  selectedColor,
  selectColor,
  disabled: computed(() => props.disabled)
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="['q-color-select']"
    data-testid="qui-color-select"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>

<style scoped>
div {
  display: grid;
  gap: var(--spacing-2);
}
</style>
