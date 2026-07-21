import { test, expect } from '@playwright/test'

test.describe('Header', () => {
  test('Default story renders the full compound structure, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-header--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const header = frame.getByTestId('header')
    await expect(header).toBeVisible()
    await expect(header).toHaveJSProperty('tagName', 'DIV')

    const tagline = frame.getByTestId('header__tagline')
    await expect(tagline).toHaveJSProperty('tagName', 'H3')
    await expect(tagline).toHaveText('Tagline')

    const title = frame.getByTestId('header__title')
    await expect(title).toHaveJSProperty('tagName', 'H2')
    await expect(title).toHaveText('Short heading goes here')

    const body = frame.getByTestId('header__body')
    await expect(body).toHaveJSProperty('tagName', 'P')

    await expect(frame.getByTestId('header__actions').getByRole('button')).toHaveCount(2)

    expect(errors).toEqual([])
  })
})
