<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'

export interface DonutChartProps {
  chartOptions?: ApexOptions
}

const props = withDefaults(defineProps<DonutChartProps>(), {
  chartOptions: () => ({
    series: [186, 305, 237, 173, 209],
    chart: {
      type: 'donut',
      height: 350,
      background: 'var(--color-chart)',
      foreColor: 'var(--color-chart-fg)',
      toolbar: {
        show: true,
        autoSelected: 'pan',
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false
        }
      }
    },
    labels: ['January', 'February', 'March', 'April', 'May'],
    colors: [
      'var(--color-sky-500)',
      'var(--color-red-500)',
      'var(--color-green-500)',
      'var(--color-yellow-500)',
      'var(--color-purple-500)'
    ],
    title: {
      text: 'Monthly Visitors',
      align: 'left'
    },
    tooltip: {
      shared: true,
      intersect: false
    }
  })
})

const chartOptions = computed(() => props.chartOptions)
const chartSeries = computed(() => chartOptions.value?.series || [])
</script>

<template>
  <div class="q-donut-chart">
    <VueApexCharts
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<style scoped>
.q-donut-chart {
  width: 100%;
}
</style>
