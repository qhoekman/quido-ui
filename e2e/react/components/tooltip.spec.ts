import { test, expect } from '@playwright/test'

test.describe('Tooltip', () => {
  test('Default story renders trigger, tooltip closed initially', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-overlay-tooltip--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('button')).toBeVisible()
    await expect(frame.getByTestId('tooltip__content')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('shows tooltip content on hover', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-tooltip--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('button').hover()
    await expect(frame.getByTestId('tooltip__content')).toBeVisible({
      timeout: 2000
    })
    await expect(frame.getByTestId('tooltip__content')).toContainText(
      'Add to library'
    )
  })
})
