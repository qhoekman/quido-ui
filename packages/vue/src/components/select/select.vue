<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { SelectRoot } from 'reka-ui'

export interface SelectProps {
  value?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  name?: string
  open?: boolean
  defaultOpen?: boolean
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<SelectProps>(), {
  disabled: false,
  required: false,
  defaultOpen: false,
  asChild: false,
  as: 'div'
})

const emit = defineEmits<{
  'update:value': [value: string | undefined]
  'update:open': [value: boolean]
  'valueChange': [value: string | undefined]
}>()

// Internal state management
const internalValue = ref(props.defaultValue)
const internalOpen = ref(props.defaultOpen)
const isControlled = props.value !== undefined
const isOpenControlled = props.open !== undefined

const selectedValue = computed(() => (isControlled ? props.value : internalValue.value))
const isOpen = computed(() => (isOpenControlled ? props.open : internalOpen.value))

const handleValueChange = (value: string | undefined) => {
  if (!isControlled) {
    internalValue.value = value
  }
  emit('update:value', value)
  emit('valueChange', value)
}

const handleOpenChange = (open: boolean) => {
  if (!isOpenControlled) {
    internalOpen.value = open
  }
  emit('update:open', open)
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

watch(
  () => props.open,
  (newValue) => {
    if (isOpenControlled && newValue !== undefined) {
      internalOpen.value = newValue
    }
  }
)
</script>

<template>
  <SelectRoot
    :value="selectedValue || undefined"
    :default-value="defaultValue"
    :disabled="disabled"
    :required="required"
    :name="name"
    :open="isOpen"
    :default-open="defaultOpen"
    :as-child="asChild"
    :as="as"
    :class="['q-select']"
    data-testid="qui-select"
    @update:value="handleValueChange"
    @update:open="handleOpenChange"
    v-bind="$attrs"
  >
    <slot />
  </SelectRoot>
</template>

<style scoped>
.q-select {
  position: relative;
  display: inline-block;
}
</style>
