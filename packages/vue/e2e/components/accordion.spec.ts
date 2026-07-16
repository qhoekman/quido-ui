import { test, expect } from '@playwright/test'

test.describe('Accordion', () => {
  test('Default story renders two closed items, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.locator('.q-accordion-trigger')

    await expect(triggers).toHaveCount(2)
    await expect(triggers.nth(0)).toHaveAttribute('data-state', 'closed')
    await expect(triggers.nth(1)).toHaveAttribute('data-state', 'closed')

    expect(errors).toEqual([])
  })

  test('regression: single type is exclusive (modelValue wiring)', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.locator('.q-accordion-trigger')

    await triggers.nth(0).click()
    await expect(triggers.nth(0)).toHaveAttribute('data-state', 'open')

    await triggers.nth(1).click()
    await expect(triggers.nth(1)).toHaveAttribute('data-state', 'open')
    // opening a new item in single mode must close the previous one, which
    // only happens if the controlled value round-trip actually works
    await expect(triggers.nth(0)).toHaveAttribute('data-state', 'closed')
  })

  test('content is visible only when its item is open', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByText('Aliquam erat volutpat')).toBeHidden()
    await frame.locator('.q-accordion-trigger').nth(0).click()
    await expect(frame.getByText('Aliquam erat volutpat')).toBeVisible()
  })

  test('disabled prop prevents interaction', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-disclosure-accordion--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.locator('.q-accordion-trigger')

    await expect(triggers.nth(0)).toBeDisabled()
    await expect(triggers.nth(1)).toBeDisabled()
  })
})
