import { test, expect } from '@playwright/test'

test.describe('Accordion', () => {
  test('Default story renders both items closed, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('accordion')).toBeVisible()
    await expect(frame.getByTestId('accordion__item-item-1')).toHaveAttribute(
      'data-state',
      'closed'
    )
    await expect(frame.getByTestId('accordion__item-item-2')).toHaveAttribute(
      'data-state',
      'closed'
    )

    expect(errors).toEqual([])
  })

  test('single-select: opening one item closes the previously open item', async ({
    page
  }) => {
    await page.goto('?path=/story/components-disclosure-accordion--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const item1 = frame.getByTestId('accordion__item-item-1')
    const item2 = frame.getByTestId('accordion__item-item-2')

    await item1.getByTestId('accordion__trigger').click()
    await expect(item1).toHaveAttribute('data-state', 'open')

    await item2.getByTestId('accordion__trigger').click()
    await expect(item2).toHaveAttribute('data-state', 'open')
    await expect(item1).toHaveAttribute('data-state', 'closed')
  })
})
