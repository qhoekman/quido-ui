import { test, expect } from '@playwright/test'

test.describe('Sidebar', () => {
  test('Default story renders brand, sections, and items', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (e) => errors.push(e.message))

    await page.goto('?path=/story/features-application-components-sidebar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('sidebar')).toBeVisible()
    await expect(frame.getByTestId('sidebar__brand')).toBeVisible()
    await expect(frame.getByTestId('sidebar__footer')).toBeVisible()
    await expect(frame.getByTestId('sidebar__item').first()).toBeVisible()
    await expect(frame.getByTestId('sidebar__group-items')).not.toBeVisible()

    expect(errors).toEqual([])
  })

  test('group trigger expands and collapses group items', async ({
    page
  }) => {
    await page.goto('?path=/story/features-application-components-sidebar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByTestId('sidebar__group-trigger').click()
    await expect(frame.getByTestId('sidebar__group-items')).toBeVisible()
    await expect(frame.getByTestId('sidebar__group-items')).toContainText(
      'Recently played'
    )

    await frame.getByTestId('sidebar__group-trigger').click()
    await expect(frame.getByTestId('sidebar__group-items')).not.toBeVisible()
  })
})
