import { test, expect } from '@playwright/test'

test.describe('EmptyState', () => {
  test('Default story renders icon, title, description, and action without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      '?path=/story/components-data-display-empty-state--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('empty-state')).toBeVisible()
    await expect(frame.getByTestId('empty-state__icon')).toBeVisible()
    await expect(
      frame.getByRole('heading', { name: 'Empty State Title' })
    ).toBeVisible()
    await expect(
      frame.getByText('This is a description of the empty state.')
    ).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Action' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('size propagates to child typography via :host-context ancestor styling', async ({
    page
  }) => {
    await page.goto(
      '?path=/story/components-data-display-empty-state--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('empty-state')).toHaveClass(
      /variant--lg/
    )
    await expect(frame.getByTestId('empty-state__title')).toHaveCSS(
      'font-size',
      '24px'
    )
    await expect(frame.getByTestId('empty-state__description')).toHaveCSS(
      'font-size',
      '18px'
    )
  })
})
