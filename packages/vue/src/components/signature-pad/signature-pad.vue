<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Primitive } from 'reka-ui'

export interface SignaturePadProps {
  asChild?: boolean
  as?: 'div'
}

const props = withDefaults(defineProps<SignaturePadProps>(), {
  asChild: false,
  as: 'div'
})

// Refs
const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)
const drawing = ref(false)

// Methods
const resizeCanvas = () => {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight
}

const getEventCoordinates = (event: MouseEvent | TouchEvent): { x: number; y: number } => {
  if (!canvasRef.value) return { x: 0, y: 0 }
  const rect = canvasRef.value.getBoundingClientRect()
  if (event instanceof MouseEvent) {
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
  } else {
    const touch = event.touches[0] || event.changedTouches[0]
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    }
  }
}

const startDrawing = (event: MouseEvent | TouchEvent) => {
  if (!ctx.value || !canvasRef.value) return
  event.preventDefault()
  drawing.value = true
  ctx.value.beginPath()
  const coords = getEventCoordinates(event)
  ctx.value.moveTo(coords.x, coords.y)
}

const draw = (event: MouseEvent | TouchEvent) => {
  if (!drawing.value || !ctx.value || !canvasRef.value) return
  event.preventDefault()
  const coords = getEventCoordinates(event)
  ctx.value.lineTo(coords.x, coords.y)
  ctx.value.stroke()
}

const stopDrawing = () => {
  if (!ctx.value) return
  drawing.value = false
  ctx.value.closePath()
}

const clear = () => {
  if (!ctx.value || !canvasRef.value) return
  ctx.value.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
}

const getDataURL = (): string => {
  if (!canvasRef.value) return ''
  return canvasRef.value.toDataURL('image/png')
}

const download = () => {
  const dataURL = getDataURL()
  if (!dataURL) return
  const link = document.createElement('a')
  link.href = dataURL
  link.download = 'signature.png'
  link.click()
}

// Lifecycle hooks
onMounted(() => {
  if (!canvasRef.value) return
  ctx.value = canvasRef.value.getContext('2d')!
  if (ctx.value) {
    // Get CSS variable value from computed styles
    const root = document.documentElement
    const strokeColor = getComputedStyle(root).getPropertyValue('--color-background-fg').trim() || '#000000'
    ctx.value.strokeStyle = strokeColor
    ctx.value.lineWidth = 2
    ctx.value.lineCap = 'round'
    ctx.value.lineJoin = 'round'
  }
  resizeCanvas()
  
  const canvas = canvasRef.value
  // Mouse events
  canvas.addEventListener('mousedown', startDrawing)
  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mouseup', stopDrawing)
  canvas.addEventListener('mouseleave', stopDrawing)
  
  // Touch events
  canvas.addEventListener('touchstart', startDrawing, { passive: false })
  canvas.addEventListener('touchmove', draw, { passive: false })
  canvas.addEventListener('touchend', stopDrawing)
  canvas.addEventListener('touchcancel', stopDrawing)
  
  // Handle window resize
  window.addEventListener('resize', resizeCanvas)
})

onUnmounted(() => {
  if (!canvasRef.value) return
  const canvas = canvasRef.value
  // Mouse events
  canvas.removeEventListener('mousedown', startDrawing)
  canvas.removeEventListener('mousemove', draw)
  canvas.removeEventListener('mouseup', stopDrawing)
  canvas.removeEventListener('mouseleave', stopDrawing)
  
  // Touch events
  canvas.removeEventListener('touchstart', startDrawing)
  canvas.removeEventListener('touchmove', draw)
  canvas.removeEventListener('touchend', stopDrawing)
  canvas.removeEventListener('touchcancel', stopDrawing)
  
  window.removeEventListener('resize', resizeCanvas)
})

// Expose methods for template ref access
defineExpose({
  clear,
  getDataURL,
  download
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-signature-pad"
    data-testid="qui-signature-pad"
    v-bind="$attrs"
  >
    <canvas ref="canvasRef" />
  </Primitive>
</template>

<style scoped>
div {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}

canvas {
  border: var(--border-width-default) solid var(--color-border);
  width: 100%;
  height: 100%;
  cursor: crosshair;
  touch-action: none;
}

canvas:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px var(--color-ring),
    0 0 0 4px var(--color-background);
}
</style>
