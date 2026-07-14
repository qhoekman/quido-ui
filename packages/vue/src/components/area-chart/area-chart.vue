<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'

export interface AreaChartProps {
  chartOptions?: ApexOptions
}

const props = withDefaults(defineProps<AreaChartProps>(), {
  chartOptions: () => ({
    series: [
      {
        name: 'Desktop',
        data: [186, 305, 237, 73, 209, 214]
      },
      {
        name: 'Mobile',
        data: [80, 200, 120, 190, 130, 140]
      }
    ],
    chart: {
      type: 'area',
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
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: 'Monthly Data',
      align: 'left'
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9
      }
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    markers: {
      size: 0
    }
  })
})

const chartOptions = computed(() => props.chartOptions)
const chartSeries = computed(() => chartOptions.value?.series || [])
</script>

<template>
  <div class="q-area-chart">
    <VueApexCharts
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<style scoped>
.q-area-chart {
  width: 100%;
}
</style>
