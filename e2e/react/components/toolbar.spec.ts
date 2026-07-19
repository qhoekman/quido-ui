import { test, expect } from '@playwright/test'

test.describe('Toolbar', () => {
  test('WithText story renders 5 text links', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-mobile-components-toolbar--with-text')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('toolbar')).toBeVisible()
    await expect(frame.getByTestId('toolbar__content')).toBeVisible()
    await expect(frame.getByTestId('toolbar__link')).toHaveCount(5)
    await expect(frame.getByTestId('toolbar__link').first()).toHaveText('1')

    expect(errors).toEqual([])
  })

  test('WithIcons story renders 5 icon links', async ({ page }) => {
    await page.goto('?path=/story/features-mobile-components-toolbar--with-icons')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('toolbar__link')).toHaveCount(5)
    await expect(
      frame.getByTestId('toolbar__link').first().locator('svg')
    ).toBeVisible()
  })
})
