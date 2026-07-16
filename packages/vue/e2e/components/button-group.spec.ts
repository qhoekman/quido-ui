import { test, expect } from '@playwright/test'

test.describe('ButtonGroup', () => {
  test('Default story renders three joined buttons without console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-actions-button-group--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const group = frame.getByTestId('qui-button-group')

    await expect(group).toBeVisible()
    await expect(group.getByRole('button')).toHaveCount(3)
    await expect(frame.getByRole('button', { name: 'Button 1' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('only the first and last buttons have outer rounded corners', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-actions-button-group--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const buttons = frame.getByTestId('qui-button-group').getByRole('button')

    const [firstRadius, middleRadius, lastRadius] = await Promise.all([
      buttons.nth(0).evaluate((el) => getComputedStyle(el).borderTopLeftRadius),
      buttons.nth(1).evaluate((el) => getComputedStyle(el).borderTopLeftRadius),
      buttons.nth(2).evaluate((el) => getComputedStyle(el).borderTopRightRadius)
    ])

    expect(firstRadius).not.toBe('0px')
    expect(middleRadius).toBe('0px')
    expect(lastRadius).not.toBe('0px')
  })
})
