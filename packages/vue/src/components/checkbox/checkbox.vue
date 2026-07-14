<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'
import { Check } from 'lucide-vue-next'

export interface CheckboxProps {
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
}

const props = withDefaults(defineProps<CheckboxProps>(), {
  checked: undefined,
  defaultChecked: false,
  disabled: false,
  required: false
})

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()

const handleCheckedChange = (checked: boolean) => {
  emit('update:checked', checked)
}
</script>

<template>
  <CheckboxRoot
    :checked="checked"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :required="required"
    :name="name"
    :value="value"
    :class="['q-checkbox']"
    @update:checked="handleCheckedChange"
    v-bind="$attrs"
  >
    <CheckboxIndicator :class="['q-checkbox-indicator']">
      <Check :size="16" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<style scoped>
.q-checkbox {
  height: var(--spacing-4);
  width: var(--spacing-4);
  flex-shrink: 0;
  border-radius: var(--border-radius-sm);
  border: var(--border-width-default) solid var(--color-primary);
  outline: none;
  box-shadow: 0 0 0 0 var(--color-background);
  transition: background-color 0.2s;
  cursor: pointer;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}

.q-checkbox:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.q-checkbox[data-state='checked'] {
  background-color: var(--color-primary);
  color: var(--color-primary-fg);
}

.q-checkbox:disabled,
.q-checkbox[data-disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

.q-checkbox-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}
</style>
