<script setup lang="ts">
import { computed, ref, watch } from 'vue'

export interface ColorPaletteProps {
  color?: string | null
}

const props = withDefaults(defineProps<ColorPaletteProps>(), {
  color: null
})

const emit = defineEmits<{
  valueChange: [value: string]
}>()

const colorFamilies = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
]

const shades = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950'
]

const singleColors = [
  { color: 'primary', value: 'var(--color-primary)' },
  { color: 'secondary', value: 'var(--color-secondary)' },
  { color: 'white', value: 'var(--color-white)' },
  { color: 'black', value: 'var(--color-black)' }
]

const colorHexagons = colorFamilies.flatMap((color) =>
  shades.map((shade) => ({
    color,
    shade,
    value: `var(--color-${color}-${shade})`
  }))
)

const sortedColorHexagons = computed(() => {
  const sorted = [...colorHexagons].sort((a, b) => {
    if (a.color === b.color) {
      return parseInt(a.shade, 10) - parseInt(b.shade, 10)
    }
    return (
      colorFamilies.indexOf(a.color) - colorFamilies.indexOf(b.color)
    )
  })
  return [...sorted, ...singleColors]
})

const selectedColor = ref<{ color: string; shade?: string; value: string } | null>(null)

const findColorByValue = (value: string | null) => {
  if (!value) return null
  return (
    colorHexagons.find((hex) => hex.value === value) ||
    singleColors.find((c) => c.value === value) ||
    null
  )
}

watch(
  () => props.color,
  (newColor) => {
    selectedColor.value = findColorByValue(newColor)
  },
  { immediate: true }
)

const selectColor = (hex: { color: string; shade?: string; value: string }) => {
  selectedColor.value = hex
  emit('valueChange', hex.value)
}
</script>

<template>
  <div
    data-testid="qui-color-palette"
    class="q-color-palette"
  >
    <button
      v-for="hex in sortedColorHexagons"
      :key="hex.value"
      data-testid="color-square"
      class="color-square"
      :class="{ selected: hex.value === selectedColor?.value }"
      :style="{ background: hex.value }"
      @click="selectColor(hex)"
    >
      <input
        data-testid="color-square-input"
        type="hidden"
        :value="selectedColor?.value"
        name="selectedColor"
      />
    </button>
  </div>
</template>

<style scoped>
.q-color-palette {
  display: grid;
  grid-template-columns: repeat(11, var(--spacing-4));
  gap: var(--spacing-1);
}

.color-square {
  width: var(--spacing-4);
  height: var(--spacing-4);
  border: none;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px var(--color-border);
  padding: 0;
  background: transparent;
}

.color-square:focus-visible {
  outline: none;
  box-shadow:
    inset 0 0 0 1px var(--color-border),
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}

.color-square.selected {
  box-shadow: inset 0 0 0 1px white, 0 0 0 1px black;
}

.color-square.selected:focus-visible {
  box-shadow:
    inset 0 0 0 1px white,
    0 0 0 1px black,
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
