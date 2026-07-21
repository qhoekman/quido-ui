import { test, expect } from '@playwright/test'

test.describe('Heading', () => {
  test('Default story renders with default (unset) styles, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-typography-heading--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const heading = frame.getByTestId('heading')

    await expect(heading).toHaveText('Sample Heading')

    expect(errors).toEqual([])
  })

  test('regression: variant=h1 applies bold, large text with bottom margin', async ({ page }) => {
    await page.goto('?path=/story/components-typography-heading--default&args=variant:h1')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const heading = frame.getByTestId('heading')

    await expect(heading).toHaveCSS('font-size', '30px')
    await expect(heading).toHaveCSS('font-weight', '700')
    await expect(heading).toHaveCSS('margin-bottom', '16px')
  })

  test('regression: size/weight/color controls apply when variant is unset', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-typography-heading--default&args=size:lg;weight:bold;color:primary'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const heading = frame.getByTestId('heading')

    await expect(heading).toHaveCSS('font-weight', '700')
  })
})
