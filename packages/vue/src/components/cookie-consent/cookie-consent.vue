<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ButtonComponent from '../button/button.vue'
import { X } from 'lucide-vue-next'

const CONSENT_KEY = 'cookieConsent'

const showBanner = ref(false)

const getConsent = (): string | null => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(CONSENT_KEY)
}

const setConsent = (consent: string): void => {
  if (typeof window === 'undefined') return
  localStorage.setItem(CONSENT_KEY, consent)
}

const clearConsent = (): void => {
  if (typeof window === 'undefined') return
  localStorage.removeItem(CONSENT_KEY)
}

onMounted(() => {
  const consent = getConsent()
  if (consent === null) {
    showBanner.value = true
  }
})

const handleAccept = () => {
  setConsent('accepted')
  showBanner.value = false
}

const handleReject = () => {
  setConsent('rejected')
  showBanner.value = false
}
</script>

<template>
  <div
    v-if="showBanner"
    class="q-cookie-consent"
    data-testid="qui-cookie-consent"
  >
    <div
      class="q-cookie-consent-header"
      data-testid="qui-cookie-consent-header"
    >
      <div class="q-cookie-consent-text">
        <h3 class="q-cookie-consent-heading">Cookie Consent</h3>
      </div>
      <ButtonComponent
        variant="ghost"
        size="icon"
        @click="handleReject"
        class="q-cookie-consent-close"
        data-testid="qui-cookie-consent-close"
      >
        <span aria-hidden="true">
          <X :size="16" />
        </span>
        <span class="q-sr-only">Close</span>
      </ButtonComponent>
    </div>
    <div class="q-cookie-consent-content">
      <p class="q-cookie-consent-text-body">
        We use cookies to enhance your browsing experience and analyze our
        traffic. By clicking "Accept", you consent to our use of cookies.
      </p>
    </div>
    <div class="q-cookie-consent-actions">
      <ButtonComponent
        variant="outline"
        @click="handleReject"
        class="q-cookie-consent-button-reject"
        data-testid="qui-cookie-consent-reject"
      >
        Reject
      </ButtonComponent>
      <ButtonComponent
        variant="primary"
        @click="handleAccept"
        class="q-cookie-consent-button-accept"
        data-testid="qui-cookie-consent-accept"
      >
        Accept
      </ButtonComponent>
    </div>
  </div>
</template>

<style scoped>
.q-cookie-consent {
  position: fixed;
  bottom: var(--spacing-4);
  left: var(--spacing-4);
  right: var(--spacing-4);
  max-width: var(--columns-xl);
  margin: 0 auto;
  z-index: var(--z-index-50);
  background-color: var(--color-card);
  box-shadow: var(--box-shadow-lg);
  border-radius: var(--border-radius-lg);
}

.q-cookie-consent-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
}

.q-cookie-consent-content {
  padding: 0 var(--spacing-4);
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.q-cookie-consent-heading {
  margin: 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-background-fg);
}

.q-cookie-consent-text-body {
  margin: 0;
  font-size: var(--font-size-base);
  line-height: var(--line-height-relaxed);
  color: var(--color-background-fg);
}

.q-cookie-consent-close {
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-lg);
  color: var(--color-muted-fg);
}

.q-cookie-consent-actions {
  display: flex;
  justify-content: flex-end;
  padding: var(--spacing-4);
  gap: var(--spacing-4);
}

.q-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
