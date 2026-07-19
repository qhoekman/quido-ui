import { test, expect } from '@playwright/test'

test.describe('Loader', () => {
  test('Default story renders active with the spinner icon visible, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-loader--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const loader = frame.getByTestId('qui-loader')

    await expect(loader).toBeVisible()
    await expect(loader).toHaveClass(/variant--spinner/)
    await expect(loader).toHaveCSS('opacity', '1')
    await expect(loader.locator('svg')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('active=false hides the loader (opacity 0) and removes the spinner icon', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-feedback-loader--default&args=active:false'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const loader = frame.getByTestId('qui-loader')

    await expect(loader).toHaveCSS('opacity', '0')
    await expect(loader.locator('svg')).toHaveCount(0)
  })

  test('regression: toggling active live correctly transitions opacity', async ({ page }) => {
    await page.goto('?path=/story/components-feedback-loader--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const loader = frame.getByTestId('qui-loader')

    await expect(loader).toHaveCSS('opacity', '1')

    const activeControl = page.locator('tr', { hasText: 'active' }).locator('input[type="checkbox"]')
    await activeControl.uncheck()

    await expect(loader).toHaveCSS('opacity', '0')
  })
})
