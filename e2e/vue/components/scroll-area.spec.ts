import { test, expect } from '@playwright/test'

test.describe('Scroll Area', () => {
  test('Default story renders a clamped, scrollable viewport with a vertical scrollbar, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-scroll-area--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const root = frame.locator('.q-scroll-area')
    await expect(root).toBeVisible()
    await expect(root).toHaveCSS('height', '200px')

    const viewport = frame.locator('.q-scroll-area-viewport')
    // regression: the viewport must be clamped to the root's height (not
    // grow to fit its content) for overflow/scrolling to work at all
    await expect(viewport).not.toHaveCSS('height', '240px')

    const scrollHeight = await viewport.evaluate((el) => el.scrollHeight)
    const clientHeight = await viewport.evaluate((el) => el.clientHeight)
    expect(scrollHeight).toBeGreaterThan(clientHeight)

    await expect(frame.locator('.q-scroll-area-scrollbar--vertical')).toBeVisible()
    await expect(frame.locator('.q-scroll-area-scrollbar--vertical .q-scroll-area-thumb')).toBeVisible()

    expect(errors).toEqual([])
  })

  test('regression: scrolling the viewport actually moves scrollTop (not clipped/inert)', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-scroll-area--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const viewport = frame.locator('.q-scroll-area-viewport')

    await viewport.evaluate((el) => {
      el.scrollTop = 40
    })

    const scrollTop = await viewport.evaluate((el) => el.scrollTop)
    expect(scrollTop).toBe(40)
  })

  test('no horizontal scrollbar renders when content does not overflow horizontally', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-scroll-area--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('.q-scroll-area-scrollbar--horizontal')).toHaveCount(0)
  })
})
