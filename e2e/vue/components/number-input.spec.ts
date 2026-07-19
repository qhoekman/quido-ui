import { test, expect } from '@playwright/test'

test.describe('Number Input', () => {
  test('Default story renders with the initial value, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-ecommerce-components-number-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('input[type="number"]')

    await expect(input).toBeVisible()
    await expect(input).toHaveValue('1')

    expect(errors).toEqual([])
  })

  test('regression: clicking increment/decrement updates the displayed value (v-model round-trip)', async ({
    page
  }) => {
    await page.goto('?path=/story/features-ecommerce-components-number-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('input[type="number"]')

    await frame.getByRole('button', { name: 'Increment' }).click()
    await frame.getByRole('button', { name: 'Increment' }).click()
    await expect(input).toHaveValue('3')

    await frame.getByRole('button', { name: 'Decrement' }).click()
    await expect(input).toHaveValue('2')
  })

  test('regression: typing a value persists and is not reset by stale $attrs', async ({ page }) => {
    await page.goto('?path=/story/features-ecommerce-components-number-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('input[type="number"]')

    await input.fill('42')
    await expect(input).toHaveValue('42')
    // trigger a re-render (blur causes no change here, but increment does) to
    // ensure the typed value survives a subsequent patch cycle
    await frame.getByRole('button', { name: 'Increment' }).click()
    await expect(input).toHaveValue('43')
  })

  test("typing 'e' is blocked to prevent scientific notation", async ({ page }) => {
    await page.goto('?path=/story/features-ecommerce-components-number-input--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('input[type="number"]')

    await input.fill('1')
    await input.press('e')
    await expect(input).toHaveValue('1')
  })

  test('disabled prop prevents increment/decrement', async ({ page }) => {
    await page.goto(
      '?path=/story/features-ecommerce-components-number-input--default&args=disabled:true'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const input = frame.locator('input[type="number"]')

    await expect(input).toBeDisabled()
    await expect(frame.getByRole('button', { name: 'Increment' })).toBeDisabled()
    await expect(frame.getByRole('button', { name: 'Decrement' })).toBeDisabled()
  })
})
