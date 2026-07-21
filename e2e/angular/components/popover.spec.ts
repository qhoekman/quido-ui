import { test, expect } from '@playwright/test'

test.describe('Popover', () => {
  test('Default story renders trigger with content closed, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-popover--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('popover__trigger')).toBeVisible()
    await expect(frame.getByTestId('popover__content')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens the popover with content and indicator', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-popover--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('popover__trigger').click()

    await expect(frame.getByTestId('popover__content')).toBeVisible()
    await expect(frame.getByTestId('popover__indicator')).toHaveCount(1)
  })

  test('regression: clicking outside closes the popover', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-popover--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('popover__trigger').click()
    await expect(frame.getByTestId('popover__content')).toBeVisible()

    await page.mouse.click(400, 400)
    await expect(frame.getByTestId('popover__content')).toHaveCount(0)
  })

  test('regression: pressing Escape closes the popover', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-popover--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('popover__trigger').click()
    await expect(frame.getByTestId('popover__content')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('popover__content')).toHaveCount(0)
  })
})
