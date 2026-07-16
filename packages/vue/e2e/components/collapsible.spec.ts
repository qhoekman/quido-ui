import { test, expect } from '@playwright/test'

test.describe('Collapsible', () => {
  test('Default story renders closed, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-disclosure-collapsible--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-collapsible-trigger')

    await expect(trigger).toBeVisible()
    await expect(trigger).toHaveAttribute('data-state', 'closed')
    await expect(frame.getByText('Consectetur.')).toBeHidden()

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens and closes the content', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-disclosure-collapsible--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.locator('.q-collapsible-trigger')

    await trigger.click()
    await expect(trigger).toHaveAttribute('data-state', 'open')
    await expect(frame.getByText('Consectetur.')).toBeVisible()

    await trigger.click()
    await expect(trigger).toHaveAttribute('data-state', 'closed')
    await expect(frame.getByText('Consectetur.')).toBeHidden()
  })

  test('disabled prop prevents interaction', async ({ page }) => {
    await page.goto(
      'http://localhost:6006/?path=/story/components-disclosure-collapsible--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.locator('.q-collapsible-trigger')).toBeDisabled()
  })

  test('regression: fully uncontrolled usage (no v-model:open) still toggles', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    // The Default story always binds v-model:open, which masked a bug
    // where Vue's automatic "absent Boolean prop resolves to false"
    // coercion pinned collapsible.vue's `open` prop at `false` (instead
    // of `undefined`) whenever a consumer didn't explicitly pass it --
    // silently forcing reka-ui's CollapsibleRoot into controlled mode
    // and breaking all click/toggle interaction with no console error.
    await page.goto(
      'http://localhost:6006/?path=/story/components-disclosure-collapsible--uncontrolled'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByRole('button', { name: 'Toggle' })

    await expect(trigger).toHaveAttribute('data-state', 'closed')
    await trigger.click()
    await expect(trigger).toHaveAttribute('data-state', 'open')
    await expect(frame.getByText('Consectetur.')).toBeVisible()

    expect(errors).toEqual([])
  })
})
