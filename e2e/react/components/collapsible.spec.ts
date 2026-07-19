import { test, expect } from '@playwright/test'

test.describe('Collapsible', () => {
  test('Default story renders closed, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-disclosure-collapsible--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('collapsible')).toBeVisible()
    await expect(frame.getByTestId('collapsible')).toHaveAttribute(
      'data-state',
      'closed'
    )

    expect(errors).toEqual([])
  })

  test('toggles open and closed on trigger click', async ({ page }) => {
    await page.goto('?path=/story/components-disclosure-collapsible--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('collapsible__trigger').click()
    await expect(frame.getByTestId('collapsible')).toHaveAttribute(
      'data-state',
      'open'
    )
    await expect(frame.getByTestId('collapsible__content')).toBeVisible()

    await frame.getByTestId('collapsible__trigger').click()
    await expect(frame.getByTestId('collapsible')).toHaveAttribute(
      'data-state',
      'closed'
    )
  })
})
