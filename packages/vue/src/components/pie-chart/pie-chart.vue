<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'

export interface PieChartProps {
  chartOptions?: ApexOptions
}

const props = withDefaults(defineProps<PieChartProps>(), {
  chartOptions: () => ({
    series: [275, 200, 187, 173, 90],
    chart: {
      type: 'pie',
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
    labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
    colors: [
      'var(--color-purple-500)',
      'var(--color-red-500)',
      'var(--color-green-500)',
      'var(--color-blue-500)',
      'var(--color-yellow-500)'
    ],
    title: {
      text: 'Browser Market Share',
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
  <div class="q-pie-chart">
    <VueApexCharts
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<style scoped>
.q-pie-chart {
  width: 100%;
}
</style>
