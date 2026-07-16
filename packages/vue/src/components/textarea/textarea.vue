<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const textareaVariants = cva('q-textarea', {
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

export type TextareaVariants = VariantProps<typeof textareaVariants>

export interface TextareaProps {
  size?: TextareaVariants['size']
  asChild?: boolean
  placeholder?: string
  modelValue?: string
  disabled?: boolean
  required?: boolean
  readOnly?: boolean
  rows?: number
  cols?: number
  maxLength?: number
  minLength?: number
  [key: string]: any // Allow other HTML textarea attributes
}

const props = withDefaults(defineProps<TextareaProps>(), {
  size: 'md',
  asChild: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const classes = computed(() => {
  return textareaVariants({
    size: props.size
  })
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <Primitive
    as="textarea"
    :as-child="asChild"
    :class="classes"
    :placeholder="placeholder"
    :value="props.modelValue"
    :disabled="disabled"
    :required="required"
    :readonly="readOnly"
    :rows="rows"
    :cols="cols"
    :maxlength="maxLength"
    :minlength="minLength"
    @input="handleInput"
    v-bind="$attrs"
  />
</template>

<style scoped>
textarea {
  display: flex;
  min-height: 80px;
  width: 100%;
  border-radius: var(--border-radius-md);
  border: var(--border-width-default) solid var(--color-border);
  background-color: var(--color-input);
  color: var(--color-input-fg);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-sm);
  box-shadow: 0 0 0 0 var(--color-background);
  resize: vertical;
}

textarea::placeholder {
  color: var(--color-muted-fg);
}

textarea:focus-visible {
  outline: none;
  border-color: var(--color-ring);
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

textarea:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Size modifiers */
.size--sm {
  font-size: var(--font-size-xs);
  padding: var(--spacing-2) var(--spacing-3);
}

.size--md {
  font-size: var(--font-size-sm);
  padding: var(--spacing-3) var(--spacing-2);
}

.size--lg {
  font-size: var(--font-size-md);
  padding: var(--spacing-4) var(--spacing-3);
}
</style>
