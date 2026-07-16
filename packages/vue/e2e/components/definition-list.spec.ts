import { test, expect } from '@playwright/test'

test.describe('DefinitionList', () => {
  test('Default story renders terms and descriptions in a dl/dt/dd structure without console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(
      'http://localhost:6006/?path=/story/features-application-components-definition-list--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.locator('dl.q-definition-list')).toBeVisible()
    await expect(frame.locator('dt.q-definition-term')).toHaveCount(3)
    await expect(frame.locator('dd.q-definition-description')).toHaveCount(3)
    await expect(frame.getByText('Full name')).toBeVisible()
    await expect(frame.getByText('John Doe')).toBeVisible()
    await expect(frame.getByRole('link', { name: 'johndoe@example.com' })).toHaveAttribute(
      'href',
      'mailto:johndoe@example.com'
    )

    expect(errors).toEqual([])
  })
})
