<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'

export interface RadarChartProps {
  chartOptions?: ApexOptions
}

const props = withDefaults(defineProps<RadarChartProps>(), {
  chartOptions: () => ({
    series: [
      {
        name: 'Desktop',
        data: [186, 305, 237, 273, 209, 214]
      }
    ],
    chart: {
      type: 'radar',
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
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    colors: ['var(--color-sky-500)'],
    title: {
      text: 'Total Visitors for the Last 6 Months',
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
  <div class="q-radar-chart">
    <VueApexCharts
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<style scoped>
.q-radar-chart {
  width: 100%;
}
</style>
