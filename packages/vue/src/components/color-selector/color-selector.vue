<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RadioGroupRoot } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const colorSelectorVariants = cva('q-color-selector', {
  variants: {},
  defaultVariants: {}
})

export type ColorSelectorVariants = VariantProps<typeof colorSelectorVariants>

export interface ColorSelectorProps {
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  name?: string
  orientation?: 'horizontal' | 'vertical'
  asChild?: boolean
}

const props = withDefaults(defineProps<ColorSelectorProps>(), {
  disabled: false,
  required: false,
  orientation: 'horizontal',
  asChild: false
})

const emit = defineEmits<{
  'update:value': [value: string]
  'valueChange': [value: string]
}>()

// Internal state management
const internalValue = ref(props.defaultValue ?? '')
const isControlled = props.value !== undefined
const selectedValue = computed(() => (isControlled ? props.value : internalValue.value))

const handleValueChange = (value: string) => {
  if (!isControlled) {
    internalValue.value = value
  }
  if (value) {
    emit('update:value', value)
    emit('valueChange', value)
  }
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

const classes = computed(() => {
  return colorSelectorVariants({})
})
</script>

<template>
  <RadioGroupRoot
    :value="selectedValue || undefined"
    :default-value="defaultValue"
    :disabled="disabled"
    :required="required"
    :name="name"
    :orientation="orientation"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-color-selector"
    @update:value="handleValueChange"
    v-bind="$attrs"
  >
    <slot />
  </RadioGroupRoot>
</template>

<style scoped>
.q-color-selector {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}
</style>
