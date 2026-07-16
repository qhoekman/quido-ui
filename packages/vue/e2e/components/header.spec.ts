import { test, expect } from '@playwright/test'

test.describe('Header', () => {
  test('Default story renders the full compound structure, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/features-website-components-header--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const header = frame.getByTestId('qui-header')
    await expect(header).toBeVisible()
    await expect(header).toHaveJSProperty('tagName', 'DIV')

    const tagline = frame.getByTestId('qui-header-tagline')
    await expect(tagline).toHaveJSProperty('tagName', 'H3')
    await expect(tagline).toHaveText('Tagline')

    const title = frame.getByTestId('qui-header-title')
    await expect(title).toHaveJSProperty('tagName', 'H2')
    await expect(title).toHaveText('Short heading goes here')

    const body = frame.getByTestId('qui-header-body')
    await expect(body).toHaveJSProperty('tagName', 'P')

    await expect(frame.getByTestId('qui-header-actions').getByRole('button')).toHaveCount(2)

    expect(errors).toEqual([])
  })
})
