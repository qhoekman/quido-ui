<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export interface MapsProps {
  center?: L.LatLngExpression
  zoom?: number
  options?: L.MapOptions
  layers?: L.Layer[]
  markers?: L.Marker[]
}

const props = withDefaults(defineProps<MapsProps>(), {
  center: () => [52.370216, 4.895168] as L.LatLngExpression, // Default to Amsterdam
  zoom: 13,
  options: () => ({} as L.MapOptions),
  layers: () => [] as L.Layer[],
  markers: () => [] as L.Marker[]
})

const mapId = ref(`qui-maps-${Math.random().toString(36).substring(2, 15)}`)
const mapInstance = ref<L.Map | null>(null)

onMounted(() => {
  if (!mapInstance.value) {
    mapInstance.value = L.map(mapId.value, props.options).setView(props.center, props.zoom)

    L.tileLayer(
      'https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/grijs/EPSG:3857/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.pdok.nl">PDOK</a>'
      }
    ).addTo(mapInstance.value)

    props.layers.forEach((layer) => mapInstance.value?.addLayer(layer))
    props.markers.forEach((marker) => mapInstance.value?.addLayer(marker))
  }
})

onBeforeUnmount(() => {
  if (mapInstance.value) {
    mapInstance.value.remove()
    mapInstance.value = null
  }
})

watch(
  () => props.center,
  (newCenter) => {
    if (mapInstance.value) {
      mapInstance.value.setView(newCenter, props.zoom)
    }
  }
)

watch(
  () => props.zoom,
  (newZoom) => {
    if (mapInstance.value) {
      mapInstance.value.setZoom(newZoom)
    }
  }
)

watch(
  () => props.layers,
  (newLayers, oldLayers) => {
    if (mapInstance.value) {
      oldLayers?.forEach((layer) => mapInstance.value?.removeLayer(layer))
      newLayers.forEach((layer) => mapInstance.value?.addLayer(layer))
    }
  },
  { deep: true }
)

watch(
  () => props.markers,
  (newMarkers, oldMarkers) => {
    if (mapInstance.value) {
      oldMarkers?.forEach((marker) => mapInstance.value?.removeLayer(marker))
      newMarkers.forEach((marker) => mapInstance.value?.addLayer(marker))
    }
  },
  { deep: true }
)
</script>

<template>
  <div :id="mapId" class="q-maps" data-testid="qui-maps">
    <slot />
  </div>
</template>

<style scoped>
.q-maps {
  display: block;
  height: 100%;
  width: 100%;
}
</style>
