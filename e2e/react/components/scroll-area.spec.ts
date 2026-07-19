import { test, expect } from '@playwright/test'

test.describe('Scroll Area', () => {
  test('Default story renders scrollable content without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-layout-scroll-area--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('scroll-area')).toBeVisible()
    await expect(frame.getByTestId('scroll-area__viewport')).toBeVisible()
    await expect(
      frame.getByTestId('scroll-area__viewport')
    ).toContainText('Jokester began sneaking')

    expect(errors).toEqual([])
  })

  test('viewport content overflows the fixed-height container', async ({
    page
  }) => {
    await page.goto('?path=/story/components-layout-scroll-area--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const viewport = frame.getByTestId('scroll-area__viewport')
    const scrollHeight = await viewport.evaluate((el) => el.scrollHeight)
    const clientHeight = await viewport.evaluate((el) => el.clientHeight)

    expect(scrollHeight).toBeGreaterThan(clientHeight)
  })
})
