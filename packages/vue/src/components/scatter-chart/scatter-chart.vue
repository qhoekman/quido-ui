<script setup lang="ts">
import { computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import type { ApexOptions } from 'apexcharts'

export interface ScatterChartProps {
  chartOptions?: ApexOptions
}

const props = withDefaults(defineProps<ScatterChartProps>(), {
  chartOptions: () => ({
    series: [
      {
        name: 'Sample A',
        data: [
          [16.4, 5.4],
          [21.7, 2],
          [25.4, 3],
          [19, 2],
          [10.9, 1],
        ],
      },
      {
        name: 'Sample B',
        data: [
          [30.4, 13.4],
          [1.7, 11],
          [5.4, 8],
          [9, 17],
          [1.9, 4],
        ],
      },
    ],
    chart: {
      type: 'scatter',
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
          pan: true,
          reset: true,
        },
      },
    },
    xaxis: {
      tickAmount: 10,
      labels: {
        formatter: function (val: string) {
          return parseFloat(val).toFixed(1)
        },
      },
    },
    yaxis: {
      tickAmount: 7,
    },
    title: {
      text: 'Scatter Chart Example',
      align: 'left',
    },
    tooltip: {
      shared: false,
      intersect: true,
    },
  }),
})

const chartOptions = computed(() => props.chartOptions)
const chartSeries = computed(() => chartOptions.value?.series || [])
</script>

<template>
  <div class="q-scatter-chart">
    <VueApexCharts
      :options="chartOptions"
      :series="chartSeries"
    />
  </div>
</template>

<style scoped>
.q-scatter-chart {
  width: 100%;
}
</style>
