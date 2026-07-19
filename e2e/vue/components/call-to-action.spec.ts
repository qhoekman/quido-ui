import { test, expect } from '@playwright/test'

test.describe('Call To Action', () => {
  test('Default story renders the full compound structure, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-website-components-cta--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-cta')).toBeVisible()
    await expect(frame.getByTestId('qui-cta-content')).toBeVisible()
    await expect(frame.getByTestId('qui-cta-section')).toBeVisible()

    const title = frame.getByTestId('qui-cta-title')
    await expect(title).toHaveJSProperty('tagName', 'H2')
    await expect(title).toHaveText('Ready to dive in?')

    const subtitle = frame.getByTestId('qui-cta-subtitle')
    await expect(subtitle).toHaveJSProperty('tagName', 'P')

    await expect(frame.getByTestId('qui-cta-actions')).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Get started' })).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Learn more' })).toBeVisible()

    expect(errors).toEqual([])
  })
})
