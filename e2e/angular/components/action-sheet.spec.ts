import { test, expect } from '@playwright/test'

test.describe('Action Sheet', () => {
  test('Default story renders closed, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-overlay-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const sheet = frame.getByTestId('action-sheet')
    await expect(sheet).toBeVisible()
    await expect(sheet).not.toHaveClass(/open/)

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger opens the sheet with backdrop visible', async ({
    page
  }) => {
    await page.goto('?path=/story/components-overlay-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button').first().click()

    const sheet = frame.getByTestId('action-sheet')
    await expect(sheet).toHaveClass(/open/)
    await expect(frame.getByTestId('action-sheet__overlay')).toHaveClass(/open/)
  })

  test('regression: pressing Escape closes the sheet', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button').first().click()
    await expect(frame.getByTestId('action-sheet')).toHaveClass(/open/)

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('action-sheet')).not.toHaveClass(/open/)
  })

  test('regression: clicking the backdrop area closes the sheet', async ({ page }) => {
    await page.goto('?path=/story/components-overlay-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button').first().click()
    await expect(frame.getByTestId('action-sheet')).toHaveClass(/open/)

    await frame.getByTestId('action-sheet').click({ position: { x: 700, y: 100 } })
    await expect(frame.getByTestId('action-sheet')).not.toHaveClass(/open/)
  })
})
