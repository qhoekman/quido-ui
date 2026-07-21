import { test, expect } from '@playwright/test'

test.describe('Card', () => {
  test('Default story renders all sections without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-data-display-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('card')).toBeVisible()
    await expect(frame.getByTestId('card__header')).toBeVisible()
    await expect(frame.getByTestId('card__title')).toHaveText('Add item')
    await expect(frame.getByTestId('card__description')).toHaveText(
      'You can add items to your recipe.'
    )
    await expect(frame.getByTestId('card__content')).toBeVisible()
    await expect(frame.getByTestId('card__footer')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('name input and Add button are interactive', async ({ page }) => {
    await page.goto('?path=/story/components-data-display-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const nameInput = frame.getByTestId('card__content').locator('input')
    await nameInput.fill('My Item')
    await expect(nameInput).toHaveValue('My Item')

    await expect(
      frame.getByTestId('card__footer').getByRole('button', { name: 'Add' })
    ).toBeVisible()
  })
})
