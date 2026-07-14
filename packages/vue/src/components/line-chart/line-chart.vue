<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'

export interface LineChartProps {
  chartOptions?: ApexOptions
}

const props = withDefaults(defineProps<LineChartProps>(), {
  chartOptions: () => ({
    series: [
      {
        name: 'Desktop',
        data: [186, 305, 237, 73, 209, 214]
      }
    ],
    chart: {
      type: 'line',
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
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June']
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: 'Monthly Data',
      align: 'left'
    },
    fill: {
      opacity: 1
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
  <div class="q-line-chart">
    <VueApexCharts
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<style scoped>
.q-line-chart {
  width: 100%;
}
</style>
