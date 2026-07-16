<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import Color from '@thednp/color'
import ColorWheel from '../color-wheel/color-wheel.vue'
import ColorPalette from '../color-palette/color-palette.vue'

export interface ColorPickerProps {
  color?: string
}

const props = withDefaults(defineProps<ColorPickerProps>(), {
  color: '#000000'
})

const emit = defineEmits<{
  valueChange: [value: string]
}>()

const activeTab = ref<'hue' | 'palette'>('hue')
const selectedColor = ref<Color>(new Color('#000000', 'hex'))
const selectedVariable = ref<string | null>(null)
const displayValues = ref<{
  hex: string
  rgb: string
  hsl: string
}>({
  hex: '#000000',
  rgb: 'rgb(0, 0, 0)',
  hsl: 'hsl(0, 0%, 0%)'
})

const getComputedColor = (value: string): string => {
  if (!value.startsWith('var(--')) {
    return value
  }

  const computedStyle = getComputedStyle(document.documentElement)
  const cssVarName = value.slice(4, -1) // Remove var( and )
  return computedStyle.getPropertyValue(cssVarName).trim()
}

const handleColorChange = (color: string) => {
  selectedVariable.value = null
  if (color.startsWith('var(--')) {
    selectedVariable.value = color
    color = getComputedColor(color)
  }
  const newColor = new Color(color, 'hsl')
  selectedColor.value = newColor
  updateDisplayValues(newColor)
  emit('valueChange', newColor.toString())
}

const updateDisplayValues = (color: Color) => {
  displayValues.value = {
    hex: displayColor('hex', color.toString()),
    rgb: displayColor('rgb', color.toString()),
    hsl: displayColor('hsl', color.toString())
  }
}

const displayColor = (format: 'hex' | 'rgb' | 'hsl', color: string) => {
  return new Color(color, format).toString()
}

const hslValues = computed(() => {
  const hsl = selectedColor.value.toHsl()
  return {
    h: hsl.h * 100,
    s: hsl.s * 100,
    l: hsl.l * 100
  }
})

onMounted(() => {
  handleColorChange(props.color)
})

watch(
  () => props.color,
  (newColor) => {
    handleColorChange(newColor)
  }
)
</script>

<template>
  <div data-testid="qui-color-picker" class="q-color-picker">
    <div data-testid="qui-color-picker-tabs" class="tabs">
      <div data-testid="qui-color-picker-tabs-list" class="tabs-list">
        <button
          data-testid="qui-color-picker-tabs-trigger"
          :class="['tabs-trigger', { 'variant--active': activeTab === 'hue' }]"
          @click="activeTab = 'hue'"
        >
          Hue
        </button>
        <button
          data-testid="qui-color-picker-tabs-trigger"
          :class="['tabs-trigger', { 'variant--active': activeTab === 'palette' }]"
          @click="activeTab = 'palette'"
        >
          Palette
        </button>
      </div>
      <div
        v-if="activeTab === 'hue'"
        data-testid="qui-color-picker-tabs-content"
        class="tabs-content"
      >
        <ColorWheel
          :hue="hslValues.h"
          :saturation="hslValues.s"
          :lightness="hslValues.l"
          @value-change="handleColorChange"
        />
      </div>
      <div
        v-if="activeTab === 'palette'"
        data-testid="qui-color-picker-tabs-content"
        class="tabs-content"
      >
        <ColorPalette
          :color="selectedVariable"
          @value-change="handleColorChange"
        />
      </div>
    </div>
    <div data-testid="qui-color-picker-info" class="info">
      <div data-testid="qui-color-picker-info-color-item" class="color-item">
        <span class="label">HEX:</span>
        <pre><code>{{ displayValues.hex }}</code></pre>
      </div>
      <div data-testid="qui-color-picker-info-color-item" class="color-item">
        <span class="label">HSL:</span>
        <pre><code>{{ displayValues.hsl }}</code></pre>
      </div>
      <div data-testid="qui-color-picker-info-color-item" class="color-item">
        <span class="label">RGB:</span>
        <pre><code>{{ displayValues.rgb }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
.q-color-picker {
  display: block;
  width: fit-content;
  border: var(--border-width-default) solid var(--color-border);
  border-radius: var(--border-radius-sm);
}

.tabs {
  background: transparent;
}

.tabs-list {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  width: fit-content;
  border-radius: var(--border-radius-md);
  color: var(--color-muted-fg);
  box-shadow: var(--box-shadow-default);
  background-color: var(--color-muted);
  padding: var(--spacing-1);
}

.tabs-trigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 0 none;
  border-radius: var(--border-radius-md);
  padding: var(--spacing-1-5) var(--spacing-3);
  background-color: hsl(from var(--color-background) h s l / 66%);
  color: hsl(from var(--color-background-fg) h s l / 80%);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;
}

.tabs-trigger:first-child {
  border-top-left-radius: var(--border-radius-md);
  border-bottom-left-radius: var(--border-radius-md);
}

.tabs-trigger:last-child {
  border-top-right-radius: var(--border-radius-md);
  border-bottom-right-radius: var(--border-radius-md);
}

.tabs-trigger:disabled {
  pointer-events: none;
  opacity: 0.5;
  color: var(--color-muted-fg);
}

.tabs-trigger.variant--active {
  background-color: var(--color-background);
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
  box-shadow: var(--box-shadow-sm);
}

.tabs-trigger:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}

.tabs-content {
  padding: var(--spacing-3) var(--spacing-4);
  margin-top: var(--spacing-2);
  outline: none;
}

.info {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-3) var(--spacing-4);
  gap: var(--spacing-1);
}

.color-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
}

.color-item .label {
  width: var(--spacing-8);
  font-weight: var(--font-weight-semibold);
  margin: 0;
}

pre {
  margin: 0;
}

code {
  font-family: var(--font-family-mono);
  font-size: var(--font-size-xs);
}
</style>
