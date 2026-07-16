<script setup lang="ts">
import { inject, computed, useAttrs } from 'vue'
import { Primitive } from 'reka-ui'

export interface ColorSelectItemProps {
  color: string
  asChild?: boolean
  as?: string
}

const props = withDefaults(defineProps<ColorSelectItemProps>(), {
  color: 'black',
  asChild: false,
  as: 'button'
})

const attrs = useAttrs()

const colorSelectContext = inject<{
  selectedColor: ReturnType<typeof computed<string | undefined>>
  selectColor: (color: string) => void
  disabled: ReturnType<typeof computed<boolean>>
}>('colorSelectContext')

if (!colorSelectContext) {
  throw new Error('ColorSelectItem must be used within ColorSelect')
}

const checked = computed(() => {
  return colorSelectContext.selectedColor.value === props.color
})

const isDisabled = computed(() => colorSelectContext.disabled.value)

const handleClick = () => {
  if (!isDisabled.value) {
    colorSelectContext.selectColor(props.color)
  }
}
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    type="button"
    role="radio"
    :aria-checked="checked"
    :data-state="checked ? 'checked' : 'unchecked'"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    :class="['q-color-select-item']"
    data-testid="qui-color-select-item"
    @click="handleClick"
    v-bind="$attrs"
  >
    <div
      data-testid="qui-color-select-item-color-indicator"
      class="color-indicator"
      :style="{ backgroundColor: color }"
      :class="{ checked }"
    ></div>
    <input
      data-testid="qui-color-select-item-input"
      type="hidden"
      :id="attrs.id as string"
      :name="attrs.name as string"
      :value="color"
    />
  </Primitive>
</template>

<style scoped>
button,
[role="button"] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s;
  border: none;
  outline: none;
  padding: 0;
}

button:focus-visible,
[role="button"]:focus-visible {
  box-shadow: 0 0 0 1px var(--color-ring);
}

button[data-state='checked'],
[role="button"][data-state='checked'] {
  border: 1px solid var(--color-background-fg);
  box-shadow: var(--box-shadow-default);
}

button:disabled,
[role="button"][aria-disabled="true"] {
  cursor: not-allowed;
  opacity: 0.5;
}

.color-indicator {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transition: transform 0.2s;
}
</style>
