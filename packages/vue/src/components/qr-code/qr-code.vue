<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { Primitive } from 'reka-ui'
import { QRCodeSVG } from '@akamfoad/qrcode'

export interface QrCodeProps {
  value: string
  asChild?: boolean
}

const props = withDefaults(defineProps<QrCodeProps>(), {
  asChild: false
})

const qrCodeSVG = ref<string | null>(null)

const generateQRCode = () => {
  if (props.value) {
    const qrCode = new QRCodeSVG(props.value)
    qrCodeSVG.value = qrCode.toDataUrl()
  } else {
    qrCodeSVG.value = null
  }
}

// Generate QR code on mount and when value changes
watch(() => props.value, generateQRCode, { immediate: true })

const src = computed(() => qrCodeSVG.value)
</script>

<template>
  <Primitive
    v-if="src"
    as="img"
    :as-child="asChild"
    :src="src"
    :class="['q-qr-code']"
    v-bind="$attrs"
  />
</template>

<style scoped>
img {
  display: inline-block;
  border-radius: var(--border-radius-md);
  background-color: hsl(from var(--color-background-fg) h s l / 10%);
}
</style>
