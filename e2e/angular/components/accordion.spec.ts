import { test, expect } from '@playwright/test'

test.describe('Accordion', () => {
  test('Default story renders two closed items, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.getByTestId('accordion__trigger')
    const contents = frame.getByTestId('accordion__content')

    await expect(triggers).toHaveCount(2)
    await expect(contents.nth(0)).toHaveClass(/variant--closed/)
    await expect(contents.nth(1)).toHaveClass(/variant--closed/)

    expect(errors).toEqual([])
  })

  test('clicking a trigger opens its own content', async ({ page }) => {
    await page.goto('?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.getByTestId('accordion__trigger')
    const contents = frame.getByTestId('accordion__content')

    await triggers.nth(0).click()

    await expect(contents.nth(0)).toHaveClass(/variant--open/)
    await expect(contents.nth(0)).toBeVisible()
    await expect(contents.nth(0)).toContainText('Content 1')
  })

  test('regression: each item toggles independently (no single/exclusive mode)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.getByTestId('accordion__trigger')
    const contents = frame.getByTestId('accordion__content')

    await triggers.nth(0).click()
    await expect(contents.nth(0)).toHaveClass(/variant--open/)

    await triggers.nth(1).click()
    await expect(contents.nth(1)).toHaveClass(/variant--open/)
    // this Angular implementation has no shared/exclusive accordion state,
    // so opening item 2 does not close item 1
    await expect(contents.nth(0)).toHaveClass(/variant--open/)
  })

  test('clicking an open trigger closes its content', async ({ page }) => {
    await page.goto('?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const triggers = frame.getByTestId('accordion__trigger')
    const contents = frame.getByTestId('accordion__content')

    await triggers.nth(0).click()
    await expect(contents.nth(0)).toHaveClass(/variant--open/)

    await triggers.nth(0).click()
    await expect(contents.nth(0)).toHaveClass(/variant--closed/)
  })
})
