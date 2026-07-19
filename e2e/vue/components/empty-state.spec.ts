import { test, expect } from '@playwright/test'

test.describe('EmptyState', () => {
  test('Default story renders icon, title, description, and action without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-data-display-empty-state--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('qui-empty-state')).toBeVisible()
    await expect(frame.getByTestId('qui-empty-state-icon')).toBeVisible()
    await expect(frame.getByRole('heading', { name: 'Empty State Title' })).toBeVisible()
    await expect(frame.getByText('This is a description of the empty state.')).toBeVisible()
    await expect(frame.getByRole('button', { name: 'Action' })).toBeVisible()

    expect(errors).toEqual([])
  })

  test('size prop propagates consistently to child components via provide/inject', async ({
    page
  }) => {
    await page.goto('?path=/story/components-data-display-empty-state--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const titleClass = await frame.getByTestId('qui-empty-state-title').getAttribute('class')
    const sizeMatch = titleClass?.match(/size--(sm|md|lg)/)?.[0]
    expect(sizeMatch).toBeTruthy()

    await expect(frame.getByTestId('qui-empty-state-description')).toHaveClass(
      new RegExp(sizeMatch!)
    )
    await expect(frame.getByTestId('qui-empty-state-icon')).toHaveClass(new RegExp(sizeMatch!))
  })
})
