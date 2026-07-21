import { test, expect } from '@playwright/test'

test.describe('Call To Action', () => {
  test('Default story renders the full compound structure, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-call-to-action--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('cta')).toBeVisible()
    await expect(frame.getByTestId('cta__content')).toBeVisible()
    await expect(frame.getByTestId('cta__section')).toBeVisible()

    const title = frame.getByTestId('cta__title')
    await expect(title).toHaveJSProperty('tagName', 'H2')
    await expect(title).toHaveText('Ready to dive in?')

    const subtitle = frame.getByTestId('cta__subtitle')
    await expect(subtitle).toHaveJSProperty('tagName', 'P')

    await expect(frame.getByTestId('cta__actions')).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Get started' })).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Learn more' })).toBeVisible()

    expect(errors).toEqual([])
  })
})
