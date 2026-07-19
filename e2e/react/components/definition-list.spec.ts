import { test, expect } from '@playwright/test'

test.describe('DefinitionList', () => {
  test('Default story renders list with terms and descriptions', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto(
      '?path=/story/features-application-components-definition-list--default'
    )
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('definition-list')).toBeVisible()
    await expect(frame.getByTestId('definition-list__item')).toHaveCount(3)
    await expect(frame.getByTestId('definition-list__term').first()).toHaveText(
      'Full name'
    )
    await expect(
      frame.getByTestId('definition-list__description').first()
    ).toHaveText('John Doe')

    expect(errors).toEqual([])
  })
})
