import { test, expect } from '@playwright/test'

test.describe('DefinitionList', () => {
  test('Default story renders terms and descriptions in a dl/dt/dd structure without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      '?path=/story/components-data-display-definition-list--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('definition-list')).toBeVisible()
    await expect(frame.getByTestId('definition-list__term')).toHaveCount(3)
    await expect(
      frame.getByTestId('definition-list__description')
    ).toHaveCount(3)
    await expect(frame.getByText('Full name')).toBeVisible()
    await expect(frame.getByText('John Doe')).toBeVisible()
    await expect(
      frame.getByRole('link', { name: 'johndoe@example.com' })
    ).toHaveAttribute('href', 'mailto:johndoe@example.com')

    expect(errors).toEqual([])
  })
})
