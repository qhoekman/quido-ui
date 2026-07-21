import { test, expect } from '@playwright/test'

test.describe('Collapsible', () => {
  test('Default story renders closed, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-disclosure-collapsible--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('collapsible__trigger')

    await expect(trigger).toBeVisible()
    await expect(frame.getByTestId('collapsible__content')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens and closes the content', async ({ page }) => {
    await page.goto('?path=/story/components-disclosure-collapsible--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const trigger = frame.getByTestId('collapsible__trigger')

    await trigger.click()
    await expect(frame.getByTestId('collapsible__content')).toBeVisible()
    await expect(frame.getByTestId('collapsible__content')).toContainText(
      'The recipe list is empty.'
    )

    await trigger.click()
    await expect(frame.getByTestId('collapsible__content')).toHaveCount(0)
  })
})
