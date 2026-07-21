import { test, expect, type Page } from '@playwright/test'

async function scrollIframeIncrementally(page: Page, to: number) {
  const frame = page.frameLocator('#storybook-preview-iframe')
  for (let y = 100; y <= to; y += 150) {
    await frame.locator('body').evaluate((_, y) => window.scrollTo(0, y), y)
    await page.waitForTimeout(40)
  }
  await page.waitForTimeout(300)
}

test.describe('Affix', () => {
  test('Default story renders both a top and a bottom affix with the correct directions, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-affix--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const affixes = frame.getByTestId('affix')

    await expect(affixes).toHaveCount(2)
    await expect(affixes.nth(0)).toHaveClass(/position-top/)
    await expect(affixes.nth(1)).toHaveClass(/position-bottom/)

    expect(errors).toEqual([])
  })

  test('regression: scrolling past the top affix element sticks it at the top', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-affix--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const topAffix = frame.getByTestId('affix').nth(0)

    await scrollIframeIncrementally(page, 1500)

    const position = await topAffix.evaluate((el) => getComputedStyle(el).position)
    expect(position).toBe('sticky')
    const rectTop = await topAffix.evaluate((el) => el.getBoundingClientRect().top)
    expect(rectTop).toBe(0)
  })
})
