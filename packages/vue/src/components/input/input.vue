<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const inputVariants = cva('q-input', {
  variants: {
    size: {
      sm: 'size--sm',
      md: 'size--md',
      lg: 'size--lg'
    }
  },
  defaultVariants: {
    size: 'md'
  }
})

export type InputVariants = VariantProps<typeof inputVariants>

export interface InputProps {
  size?: InputVariants['size']
  asChild?: boolean
  type?: string
  placeholder?: string
  modelValue?: string | number
  disabled?: boolean
  required?: boolean
  readOnly?: boolean
  maxLength?: number
  minLength?: number
  [key: string]: any // Allow other HTML input attributes
}

const props = withDefaults(defineProps<InputProps>(), {
  size: 'md',
  asChild: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const classes = computed(() => {
  return inputVariants({
    size: props.size
  })
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <Primitive
    as="input"
    :as-child="asChild"
    :class="classes"
    :type="type"
    :placeholder="placeholder"
    :value="props.modelValue"
    :disabled="disabled"
    :required="required"
    :readonly="readOnly"
    :maxlength="maxLength"
    :minlength="minLength"
    @input="handleInput"
    v-bind="$attrs"
  />
</template>

<style scoped>
input {
  display: inline-flex;
  flex: 1 1 auto;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  color: var(--color-input-fg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  box-shadow: 0 0 0 0 var(--color-background);
}

input[type='file'] {
  border: 0;
  background-color: transparent;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}

input[type='file']::file-selector-button {
  background-color: hsl(from var(--color-background-fg) h s l / 5%);
  color: var(--color-background-fg);
  border: 0;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-2) var(--spacing-3);
  margin-right: var(--spacing-2);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  cursor: pointer;
}

input[type='file']::file-selector-button:hover {
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
}

input[type='number'] {
  appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}

input[type='date'],
input[type='datetime-local'],
input[type='month'],
input[type='time'] {
  appearance: textfield;
}

input[type='date']::-webkit-calendar-picker-indicator,
input[type='datetime-local']::-webkit-calendar-picker-indicator,
input[type='month']::-webkit-calendar-picker-indicator,
input[type='time']::-webkit-calendar-picker-indicator {
  display: none;
}

input::placeholder {
  color: var(--color-muted-fg);
}

input:focus-visible {
  outline: none;
  border-color: var(--color-ring);
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

input:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Size modifiers */
.size--sm {
  height: var(--spacing-6);
  padding: var(--spacing-2) var(--spacing-2);
}

.size--md {
  height: var(--spacing-8);
  padding: var(--spacing-3) var(--spacing-2);
}

.size--lg {
  height: var(--spacing-10);
  padding: var(--spacing-3) var(--spacing-3);
}
</style>
