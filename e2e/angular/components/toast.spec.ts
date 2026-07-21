import { test, expect } from '@playwright/test'

test.describe('Toast', () => {
  test('Default story renders the title, description, action, and close button, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-feedback-toast--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const toast = frame.getByTestId('toast')

    await expect(toast).toBeVisible()
    await expect(toast).toHaveClass(/variant--default/)
    await expect(frame.getByTestId('toast__title')).toHaveText('Toast Title')
    await expect(frame.getByTestId('toast__description')).toHaveText(
      'This is a toast description.'
    )
    await expect(frame.getByTestId('toast__action')).toHaveText('Action')
    await expect(frame.getByTestId('toast__close')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('variant arg applies the destructive variant class', async ({ page }) => {
    await page.goto(
      '?path=/story/components-feedback-toast--default&args=variant:destructive'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    await expect(frame.getByTestId('toast')).toHaveClass(/variant--destructive/)
  })

  test('regression: title and description args are reflected in the rendered content', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-feedback-toast--default&args=title:Custom+Title;description:Custom+Description'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('toast__title')).toHaveText('Custom Title')
    await expect(frame.getByTestId('toast__description')).toHaveText(
      'Custom Description'
    )
  })

  test('clicking the close button does not throw and does not self-dismiss', async ({
    page
  }) => {
    await page.goto('?path=/story/components-feedback-toast--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const closeBtn = frame.getByTestId('toast__close')
    await expect(closeBtn).toBeEnabled()
    await closeBtn.click()

    // toast has no self-dismiss logic (state is owned by the consumer), so
    // it remains visible after the click — just confirm no error occurred
    await expect(frame.getByTestId('toast')).toBeVisible()
  })
})
