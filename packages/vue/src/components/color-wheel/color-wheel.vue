<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'

// Type exports
export interface ColorWheelProps {
  hue?: number
  saturation?: number
  lightness?: number
}

// Props with defaults
const props = withDefaults(defineProps<ColorWheelProps>(), {
  hue: 0,
  saturation: 100,
  lightness: 50
})

// Emits
const emit = defineEmits<{
  valueChange: [value: string]
}>()

// Refs
const svgRef = ref<SVGSVGElement | null>(null)
const isDragging = ref(false)
const colorWheelSegments = ref<{ d: string; fill: string }[]>([])
const indicatorPosition = ref({ x: 0, y: 0 })

// Computed properties
const wheelSize = computed(() => 200)
const center = computed(() => wheelSize.value / 2)
const radius = computed(() => wheelSize.value / 2)

// Methods
const generateColorWheel = () => {
  colorWheelSegments.value = []
  for (let angle = 0; angle < 360; angle++) {
    const startAngle = angle * (Math.PI / 180)
    const endAngle = (angle + 1) * (Math.PI / 180)

    const x1 = center.value + radius.value * Math.cos(startAngle)
    const y1 = center.value + radius.value * Math.sin(startAngle)
    const x2 = center.value + radius.value * Math.cos(endAngle)
    const y2 = center.value + radius.value * Math.sin(endAngle)

    const saturation = 100
    const lightness = 50

    colorWheelSegments.value.push({
      d: `M${center.value},${center.value} L${x1},${y1} A${radius.value},${radius.value} 0 0,1 ${x2},${y2} Z`,
      fill: `hsl(${angle}, ${saturation}%, ${lightness}%)`
    })
  }
}

const updateIndicatorPosition = () => {
  const hueRadians = (props.hue * Math.PI) / 180
  const saturationRadius = (props.saturation / 100) * radius.value

  indicatorPosition.value = {
    x: center.value + saturationRadius * Math.cos(hueRadians),
    y: center.value + saturationRadius * Math.sin(hueRadians)
  }
}

const handleMouseDown = (event: MouseEvent) => {
  isDragging.value = true
  handleColorChange(event)
}

const handleMouseMove = (event: MouseEvent) => {
  if (isDragging.value) {
    handleColorChange(event)
  }
}

const handleMouseUp = () => {
  isDragging.value = false
}

const handleColorChange = (event: MouseEvent) => {
  if (!svgRef.value) return

  const svg = svgRef.value
  const rect = svg.getBoundingClientRect()
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const x = event.clientX - rect.left - centerX
  const y = event.clientY - rect.top - centerY

  let angle = Math.atan2(y, x)
  angle = angle < 0 ? angle + 2 * Math.PI : angle
  const newHue = (angle / (2 * Math.PI)) * 360

  const distance = Math.sqrt(x * x + y * y)
  const newSaturation = Math.min(100, (distance / centerX) * 100)

  // Update indicator position immediately with new values
  const hueRadians = (newHue * Math.PI) / 180
  const saturationRadius = (newSaturation / 100) * radius.value
  indicatorPosition.value = {
    x: center.value + saturationRadius * Math.cos(hueRadians),
    y: center.value + saturationRadius * Math.sin(hueRadians)
  }

  emit(
    'valueChange',
    `hsl(${Math.round(newHue)}, ${Math.round(newSaturation)}%, ${props.lightness}%)`
  )
}

// Lifecycle hooks
onMounted(() => {
  generateColorWheel()
  updateIndicatorPosition()

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseup', handleMouseUp)
})

// Watchers
watch(
  () => [props.hue, props.saturation, props.lightness],
  () => {
    updateIndicatorPosition()
  }
)
</script>

<template>
  <svg
    ref="svgRef"
    data-testid="qui-color-wheel"
    :width="wheelSize"
    :height="wheelSize"
    :viewBox="`0 0 ${wheelSize} ${wheelSize}`"
    class="q-color-wheel"
    @mousedown="handleMouseDown"
  >
    <path
      v-for="(segment, index) in colorWheelSegments"
      :key="index"
      :d="segment.d"
      :fill="segment.fill"
    />
    <circle
      :cx="indicatorPosition.x"
      :cy="indicatorPosition.y"
      r="5"
      fill="none"
      stroke="white"
      stroke-width="2"
      class="indicator"
    />
  </svg>
</template>

<style scoped>
.q-color-wheel {
  display: block;
  cursor: pointer;
  user-select: none;
  touch-action: none;
}

.q-color-wheel:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
  border-radius: var(--border-radius-full);
}

.indicator {
  pointer-events: none;
}
</style>
