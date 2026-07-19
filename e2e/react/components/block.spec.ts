import { test, expect } from '@playwright/test'

test.describe('Block', () => {
  test('Default story renders title and block content', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-mobile-components-block--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('block__title')).toHaveText('Block Title')
    await expect(frame.getByTestId('block')).toBeVisible()
    await expect(frame.getByTestId('block')).not.toHaveClass(/inset|outline/)

    expect(errors).toEqual([])
  })

  test('WithInset story applies the inset class', async ({ page }) => {
    await page.goto('?path=/story/features-mobile-components-block--with-inset')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('block')).toHaveClass(/inset/)
  })

  test('WithOutline story applies the outline class', async ({ page }) => {
    await page.goto(
      '?path=/story/features-mobile-components-block--with-outline'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('block')).toHaveClass(/outline/)
  })
})
