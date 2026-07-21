import { test, expect } from '@playwright/test'

test.describe('Hero', () => {
  test('Default story renders the full compound structure, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-hero--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const hero = frame.getByTestId('hero')
    await expect(hero).toBeVisible()
    await expect(hero).toHaveCSS('display', 'grid')
    await expect(frame.getByTestId('hero__section')).toHaveCount(2)

    const tagline = frame.getByTestId('hero__tagline')
    await expect(tagline).toHaveJSProperty('tagName', 'SPAN')
    await expect(tagline).toHaveText('Tagline')

    const title = frame.getByTestId('hero__title')
    await expect(title).toHaveJSProperty('tagName', 'H1')
    await expect(title).toHaveText('Medium length hero section title goes in here')

    const body = frame.getByTestId('hero__body')
    await expect(body).toHaveJSProperty('tagName', 'P')

    await expect(frame.getByTestId('hero__actions').getByRole('button')).toHaveCount(2)

    expect(errors).toEqual([])
  })
})
