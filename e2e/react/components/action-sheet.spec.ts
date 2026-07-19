import { test, expect } from '@playwright/test'

test.describe('ActionSheet', () => {
  test('Default story renders trigger, closed initially', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-mobile-components-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(
      frame.getByRole('button', { name: 'Open ActionSheet' })
    ).toBeVisible()
    await expect(frame.getByTestId('action-sheet__content')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('opens on trigger click and closes with Escape', async ({ page }) => {
    await page.goto('?path=/story/features-mobile-components-action-sheet--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Open ActionSheet' }).click()
    await expect(frame.getByTestId('action-sheet__content')).toBeVisible()
    await expect(frame.getByTestId('action-sheet__title')).toHaveText(
      'Choose action'
    )
    await expect(frame.getByTestId('action-sheet__handle')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('action-sheet__content')).not.toBeVisible()
  })
})
