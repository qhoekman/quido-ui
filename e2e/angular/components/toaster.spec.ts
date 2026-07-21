import { test, expect } from '@playwright/test'

test.describe('Toaster', () => {
  test('Default story renders a trigger button and an empty toaster, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-toaster--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('toaster')).toBeAttached()
    await expect(frame.getByTestId('toast')).toHaveCount(0)
    await expect(frame.getByRole('button', { name: 'Show Toast' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: clicking the trigger shows a toast with title, description, and action', async ({
    page
  }) => {
    await page.goto('?path=/story/components-feedback-toaster--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Show Toast' }).click()

    await expect(frame.getByTestId('toast')).toBeVisible()
    await expect(frame.getByTestId('toast__title')).toHaveText('Sample Toast')
    await expect(frame.getByTestId('toast__description')).toHaveText(
      'This is a sample toast message.'
    )
    await expect(frame.getByTestId('toast__action')).toBeVisible()
  })

  test('regression: clicking the close button dismisses the toast via its own hasClosed output', async ({
    page
  }) => {
    await page.goto('?path=/story/components-feedback-toaster--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('button', { name: 'Show Toast' }).click()
    await expect(frame.getByTestId('toast')).toBeVisible()

    await frame.getByTestId('toast__close').click()
    await expect(frame.getByTestId('toast')).toHaveCount(0)
  })
})
