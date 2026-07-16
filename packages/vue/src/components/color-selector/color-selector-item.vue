<script setup lang="ts">
import { computed } from 'vue'
import { RadioGroupItem, RadioGroupIndicator } from 'reka-ui'
import { cva, type VariantProps } from 'class-variance-authority'

const colorSelectorItemVariants = cva('q-color-selector-item', {
  variants: {
    color: {
      blue: 'color--blue',
      gray: 'color--gray',
      green: 'color--green',
      indigo: 'color--indigo',
      pink: 'color--pink',
      purple: 'color--purple',
      red: 'color--red',
      yellow: 'color--yellow'
    }
  }
})

export type ColorSelectorItemVariants = VariantProps<typeof colorSelectorItemVariants>

export interface ColorSelectorItemProps {
  color: ColorSelectorItemVariants['color']
  value: string
  disabled?: boolean
  asChild?: boolean
}

const props = withDefaults(defineProps<ColorSelectorItemProps>(), {
  disabled: false,
  asChild: false
})

const classes = computed(() => {
  return colorSelectorItemVariants({
    color: props.color
  })
})
</script>

<template>
  <RadioGroupItem
    :value="value"
    :disabled="disabled"
    :as-child="asChild"
    :class="classes"
    data-testid="qui-color-selector-item"
    v-bind="$attrs"
  >
    <RadioGroupIndicator :class="['q-color-selector-item-indicator']">
      <slot>
        <div class="indicator" />
      </slot>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>

<style scoped>
.q-color-selector-item {
  position: relative;
  margin: calc(var(--spacing-0-5) * -1);
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: var(--spacing-6);
  height: var(--spacing-6);
  border-radius: var(--border-radius-full);
  padding: var(--spacing-0-5);
  border: var(--border-width-default) solid var(--color-gray-200);
  box-sizing: border-box;
}

.q-color-selector-item:focus {
  outline: none;
}

.q-color-selector-item.color--blue {
  background-color: var(--color-blue-500);
}

.q-color-selector-item.color--gray {
  background-color: var(--color-gray-500);
}

.q-color-selector-item.color--green {
  background-color: var(--color-green-500);
}

.q-color-selector-item.color--indigo {
  background-color: var(--color-indigo-500);
}

.q-color-selector-item.color--pink {
  background-color: var(--color-pink-500);
}

.q-color-selector-item.color--purple {
  background-color: var(--color-purple-500);
}

.q-color-selector-item.color--red {
  background-color: var(--color-red-500);
}

.q-color-selector-item.color--yellow {
  background-color: var(--color-yellow-500);
}

.q-color-selector-item:disabled,
.q-color-selector-item[data-disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}

.q-color-selector-item-indicator {
  width: var(--spacing-4);
  height: var(--spacing-4);
  border-radius: var(--border-radius-full);
  box-shadow: 0 0 0 2px transparent,
    0 0 0 var(--border-width-2) var(--color-background-fg);
}

.indicator {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-full);
}
</style>
