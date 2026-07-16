<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Primitive } from 'reka-ui'

export interface CountdownProps {
  date?: number
  asChild?: boolean
  as?: 'div'
}

const props = withDefaults(defineProps<CountdownProps>(), {
  date: () => new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).getTime(),
  asChild: false,
  as: 'div'
})

const years = ref('00')
const months = ref('00')
const days = ref('00')
const hours = ref('00')
const minutes = ref('00')
const seconds = ref('00')

let intervalId: ReturnType<typeof setInterval> | null = null

const updateCountdown = () => {
  const dateNow = new Date().getTime()
  const dateDiff = props.date - dateNow

  if (dateDiff <= 0) {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
    return
  }

  const yearsValue = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365))
  const monthsValue = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  )
  const daysValue = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
  const hoursValue = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutesValue = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
  const secondsValue = Math.floor((dateDiff % (1000 * 60)) / 1000)

  years.value = yearsValue < 10 ? `0${yearsValue}` : `${yearsValue}`
  months.value = monthsValue < 10 ? `0${monthsValue}` : `${monthsValue}`
  days.value = daysValue < 10 ? `0${daysValue}` : `${daysValue}`
  hours.value = hoursValue < 10 ? `0${hoursValue}` : `${hoursValue}`
  minutes.value = minutesValue < 10 ? `0${minutesValue}` : `${minutesValue}`
  seconds.value = secondsValue < 10 ? `0${secondsValue}` : `${secondsValue}`
}

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(() => updateCountdown(), 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
})

// Expose values for use in template slots
defineExpose({
  years,
  months,
  days,
  hours,
  minutes,
  seconds
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    class="q-countdown"
    data-testid="qui-countdown"
    v-bind="$attrs"
  >
    <slot
      :years="years"
      :months="months"
      :days="days"
      :hours="hours"
      :minutes="minutes"
      :seconds="seconds"
    >
      <span class="q-countdown-element" data-testid="qui-countdown-days">
        {{ days }}
      </span>
      <span class="q-countdown-element" data-testid="qui-countdown-hours">
        {{ hours }}
      </span>
      <span class="q-countdown-element" data-testid="qui-countdown-minutes">
        {{ minutes }}
      </span>
      <span class="q-countdown-element" data-testid="qui-countdown-seconds">
        {{ seconds }}
      </span>
    </slot>
  </Primitive>
</template>

<style scoped>
div {
  display: flex;
  gap: var(--spacing-2);
}
</style>
