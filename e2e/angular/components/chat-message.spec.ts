import { test, expect } from '@playwright/test'

test.describe('ChatMessage', () => {
  test('Default story renders sender and receiver bubbles without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      '?path=/story/components-data-display-chat-message--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const messages = frame.getByTestId('chat-message')

    await expect(messages).toHaveCount(2)
    await expect(frame.getByText('User Name')).toBeVisible()
    await expect(frame.getByText('John Doe')).toBeVisible()
    await expect(frame.getByTestId('chat-message__bubble')).toHaveCount(2)
    await expect(frame.getByText('12:00 PM')).toBeVisible()
    await expect(frame.getByText('12:01 PM')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('sender variant is row-reverse, receiver variant is row', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-display-chat-message--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')
    const messages = frame.getByTestId('chat-message')

    await expect(messages.nth(0)).toHaveCSS('flex-direction', 'row-reverse')
    await expect(messages.nth(1)).toHaveCSS('flex-direction', 'row')
  })
})
