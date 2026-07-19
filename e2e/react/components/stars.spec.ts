import { test, expect } from '@playwright/test'

test.describe('Stars', () => {
  test('Default story renders 4 filled and 1 unfilled star', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-ecommerce-components-stars--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('stars')).toBeVisible()

    for (let i = 0; i < 4; i++) {
      await expect(frame.getByTestId(`stars__star-${i}`)).toHaveAttribute(
        'data-filled',
        'true'
      )
    }
    await expect(frame.getByTestId('stars__star-4')).toHaveAttribute(
      'data-filled',
      'false'
    )

    expect(errors).toEqual([])
  })
})
