import { test, expect } from '@playwright/test'

test.describe('Breadcrumb', () => {
  test('Default story renders items and separator without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-display-breadcrumb--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('breadcrumb')).toBeVisible()
    const items = frame.getByTestId('breadcrumb__item')
    await expect(items).toHaveCount(2)
    await expect(items.nth(0)).toHaveText('Home')
    await expect(items.nth(1)).toHaveText('Library')
    await expect(frame.getByTestId('breadcrumb__separator')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('nav root has accessible label', async ({ page }) => {
    await page.goto('?path=/story/components-data-display-breadcrumb--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('breadcrumb')).toHaveAttribute(
      'aria-label',
      'Breadcrumb'
    )
  })

  test('WithCustomSeparator story renders the custom separator content', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-display-breadcrumb--with-custom-separator'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('breadcrumb__separator')).toHaveText('//')
  })
})
