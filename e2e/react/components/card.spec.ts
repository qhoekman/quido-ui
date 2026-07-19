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
    await expect(frame.getByTestId('card__title')).toHaveText(
      'Create project'
    )
    await expect(frame.getByTestId('card__description')).toHaveText(
      'Deploy your new project in one-click.'
    )
    await expect(frame.getByTestId('card__content')).toBeVisible()
    await expect(frame.getByTestId('card__footer')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('form inputs and footer buttons are interactive', async ({ page }) => {
    await page.goto('?path=/story/components-data-display-card--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const nameInput = frame.getByPlaceholder('Name of your project')
    await nameInput.fill('My Project')
    await expect(nameInput).toHaveValue('My Project')

    await expect(
      frame.getByRole('button', { name: 'Deploy' })
    ).toBeVisible()
    await expect(
      frame.getByRole('button', { name: 'Cancel' })
    ).toBeVisible()
  })
})
