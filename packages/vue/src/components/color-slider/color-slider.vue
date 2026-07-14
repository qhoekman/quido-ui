<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'

export interface ColorSliderProps {
  min?: number
  max?: number
  step?: number
  value?: number
  mode?: 'hue' | 'saturation' | 'lightness' | 'alpha'
  hue?: number
  saturation?: number
  lightness?: number
}

const props = withDefaults(defineProps<ColorSliderProps>(), {
  min: 0,
  max: 100,
  step: 1,
  value: 50,
  mode: 'hue',
  hue: 0,
  saturation: 100,
  lightness: 50
})

const emit = defineEmits<{
  valueChange: [value: number]
}>()

const rootRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
const rangeRef = ref<HTMLElement | null>(null)
const thumbRef = ref<HTMLElement | null>(null)
const isDragging = ref(false)

const rootId = computed(() => rootRef.value?.id || undefined)
const rootName = computed(() => rootRef.value?.getAttribute('name') || undefined)

const effectiveMax = computed(() => {
  if (props.mode === 'hue') {
    return 360
  }
  return 100
})

const backgroundStyle = computed(() => {
  let background = ''
  switch (props.mode) {
    case 'hue':
      background =
        'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
      break
    case 'saturation':
      background = `linear-gradient(to right, hsl(${props.hue}, 0%, 50%), hsl(${props.hue}, 100%, 50%))`
      break
    case 'lightness':
      background = `linear-gradient(to right, hsl(${props.hue}, ${props.saturation}%, 0%), hsl(${props.hue}, ${props.saturation}%, 50%), hsl(${props.hue}, ${props.saturation}%, 100%))`
      break
    case 'alpha':
      background = `linear-gradient(to right, hsla(${props.hue}, ${props.saturation}%, ${props.lightness}%, 0), hsla(${props.hue}, ${props.saturation}%, ${props.lightness}%, 1)),
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath fill='%23ccc' d='M0 0h4v4H0zM4 4h4v4H4z'/%3E%3C/svg%3E")`
      break
  }
  return background
})

const updateSlider = () => {
  if (!trackRef.value || !rangeRef.value || !thumbRef.value) return

  const trackWidth = trackRef.value.offsetWidth
  const max = effectiveMax.value
  const thumbPosition = ((props.value - props.min) / (max - props.min)) * trackWidth

  rangeRef.value.style.width = `${thumbPosition}px`
  thumbRef.value.style.left = `${thumbPosition}px`
}

const updateValueFromEvent = (event: MouseEvent) => {
  if (!trackRef.value) return

  const trackRect = trackRef.value.getBoundingClientRect()
  const max = effectiveMax.value
  let newValue =
    ((event.clientX - trackRect.left) / trackRect.width) * (max - props.min) + props.min

  // Round to nearest step
  const steps = Math.round((newValue - props.min) / props.step)
  newValue = props.min + steps * props.step

  const clampedValue = Math.min(max, Math.max(props.min, newValue))
  emit('valueChange', clampedValue)
}

const handleMouseDown = (event: MouseEvent) => {
  isDragging.value = true
  updateValueFromEvent(event)
}

const handleMouseMove = (event: MouseEvent) => {
  if (isDragging.value && event.buttons === 1) {
    updateValueFromEvent(event)
  }
}

const handleMouseUp = () => {
  isDragging.value = false
}

const handleResize = () => {
  updateSlider()
}

onMounted(() => {
  nextTick(() => {
    updateSlider()
  })
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
  window.removeEventListener('resize', handleResize)
})

watch(
  () => [props.value, props.mode, props.hue, props.saturation, props.lightness],
  () => {
    nextTick(() => {
      updateSlider()
    })
  }
)
</script>

<template>
  <div ref="rootRef" v-bind="$attrs" data-testid="qui-color-slider">
    <div
      ref="trackRef"
      class="q-color-slider-track"
      data-testid="qui-color-slider-track"
      :style="{ background: backgroundStyle }"
      @mousedown="handleMouseDown"
    >
      <div
        ref="rangeRef"
        class="q-color-slider-range"
        data-testid="qui-color-slider-range"
      ></div>
      <div
        ref="thumbRef"
        class="q-color-slider-thumb"
        tabindex="0"
        data-testid="qui-color-slider-thumb"
      ></div>
    </div>
    <input
      data-testid="qui-color-slider-input"
      type="hidden"
      :id="rootId"
      :name="rootName"
      :value="value"
    />
  </div>
</template>

<style scoped>
.q-color-slider-track {
  position: relative;
  height: var(--spacing-4);
  width: 100%;
  background-color: rgb(0 0 0 / 20%);
  border-radius: var(--border-radius-xl);
}

.q-color-slider-range {
  position: absolute;
  height: 100%;
  background-color: transparent;
}

.q-color-slider-thumb {
  position: absolute;
  top: 0;
  height: var(--spacing-6);
  width: var(--spacing-6);
  background-color: var(--color-white);
  border: var(--border-width-default) solid rgb(0 0 0 / 50%);
  border-radius: var(--border-radius-full);
  cursor: pointer;
  transform: translateY(-20%) translateX(-16%);
  transition: transform 0.2s;
}

.q-color-slider-thumb:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px var(--color-ring), 0 0 0 4px var(--color-background);
}
</style>
