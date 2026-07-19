import { test, expect } from '@playwright/test'

test.describe('Toggle Group', () => {
  test('Default story renders all items without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto(
      '?path=/story/components-data-manipulation-toggle-group--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('toggle-group')).toBeVisible()
    await expect(frame.getByTestId('toggle-group__item-a')).toHaveText('A')
    await expect(frame.getByTestId('toggle-group__item-b')).toHaveText('B')
    await expect(frame.getByTestId('toggle-group__item-c')).toHaveText('C')

    expect(errors).toEqual([])
  })

  test('single-select: choosing one item deselects the others', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-manipulation-toggle-group--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('toggle-group__item-b').click()
    await expect(frame.getByTestId('toggle-group__item-b')).toHaveAttribute(
      'data-state',
      'on'
    )
    await expect(frame.getByTestId('toggle-group__item-a')).toHaveAttribute(
      'data-state',
      'off'
    )

    await frame.getByTestId('toggle-group__item-c').click()
    await expect(frame.getByTestId('toggle-group__item-c')).toHaveAttribute(
      'data-state',
      'on'
    )
    await expect(frame.getByTestId('toggle-group__item-b')).toHaveAttribute(
      'data-state',
      'off'
    )
  })
})
