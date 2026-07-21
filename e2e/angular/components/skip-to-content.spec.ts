import { test, expect } from '@playwright/test'

test.describe('SkipToContent', () => {
  test('Default story renders without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-accessibility-skip-to-content--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('skip-to-content')).toBeAttached()

    expect(errors).toEqual([])
  })

  test('Tab reveals the skip link and Enter scrolls the target into view', async ({
    page
  }) => {
    await page.addInitScript(() => {
      ;(window as unknown as { __scrolledIntoView: boolean }).__scrolledIntoView =
        false
      HTMLElement.prototype.scrollIntoView = function () {
        ;(
          window as unknown as { __scrolledIntoView: boolean }
        ).__scrolledIntoView = true
      }
    })

    await page.goto('?path=/story/components-accessibility-skip-to-content--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const link = frame.getByTestId('skip-to-content')

    await frame.locator('body').click()
    await page.keyboard.press('Tab')
    await expect(link).toHaveClass(/variant--visible/)
    await expect(link).toBeFocused()

    await page.keyboard.press('Enter')
    await expect(async () => {
      const scrolled = await frame.locator('body').evaluate(
        () =>
          (window as unknown as { __scrolledIntoView: boolean })
            .__scrolledIntoView
      )
      expect(scrolled).toBe(true)
    }).toPass()
  })
})
