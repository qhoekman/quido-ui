import { test, expect } from '@playwright/test'

test.describe('Scroll Area', () => {
  test('Default story shows a vertical scrollbar when content overflows, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-layout-scroll-area--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const container = frame.getByTestId('scroll-area__container')

    await expect(container).toBeVisible()
    const scrollHeight = await container.evaluate((el) => el.scrollHeight)
    const clientHeight = await container.evaluate((el) => el.clientHeight)
    expect(scrollHeight).toBeGreaterThan(clientHeight)

    const scrollbar = frame.getByTestId('scroll-area__bar')
    await expect(scrollbar).toBeVisible()
    await expect(frame.getByTestId('scroll-area__bar-thumb')).toBeVisible()

    const scrollbarBox = await scrollbar.boundingBox()
    expect(scrollbarBox?.width).toBeGreaterThan(0)
    expect(scrollbarBox?.height).toBeGreaterThan(0)

    expect(errors).toEqual([])
  })

  test('regression: scrolling the container actually moves scrollTop and no horizontal scrollbar renders', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-scroll-area--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const container = frame.getByTestId('scroll-area__container')

    await container.evaluate((el) => {
      el.scrollTop = 40
    })
    const scrollTop = await container.evaluate((el) => el.scrollTop)
    expect(scrollTop).toBe(40)

    const scrollbars = frame.getByTestId('scroll-area__bar')
    await expect(scrollbars).toHaveCount(1)
  })
})
