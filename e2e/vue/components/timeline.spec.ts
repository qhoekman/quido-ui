import { test, expect } from '@playwright/test'

test.describe('Timeline', () => {
  test('Default story renders three items with bullets, connectors, and content without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-timeline--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('ul.q-timeline')).toBeVisible()
    await expect(frame.getByTestId('qui-timeline-item')).toHaveCount(3)
    await expect(frame.getByTestId('qui-timeline-bullet')).toHaveCount(3)
    // Only the first two items have a connector line (last item has none, per the story's v-if)
    await expect(frame.getByTestId('qui-timeline-separator')).toHaveCount(2)
    await expect(frame.getByRole('heading', { name: 'Product Shipped' })).toBeVisible()
    await expect(frame.getByText('13th May 2021')).toBeVisible()
    await expect(frame.getByRole('heading', { name: 'Order Delivered' })).toBeVisible()

    expect(errors).toEqual([])
  })
})
