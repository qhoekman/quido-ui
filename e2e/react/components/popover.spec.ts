import { test, expect } from '@playwright/test'

test.describe('Popover', () => {
  test('Default story renders trigger, popover closed initially', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-overlay-popover--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByRole('button', { name: 'Open' })).toBeVisible()
    await expect(frame.getByTestId('popover__content')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('opens on trigger click and closes with Escape', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-popover--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open' }).click()
    await expect(frame.getByTestId('popover__content')).toBeVisible()
    await expect(frame.getByTestId('popover__content')).toHaveText(
      'Place content for the popover here.'
    )

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('popover__content')).not.toBeVisible()
  })
})
