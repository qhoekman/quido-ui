import { test, expect } from '@playwright/test'

test.describe('Menubar', () => {
  test('Default story renders closed triggers, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/components-navigation-menubar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await expect(frame.getByTestId('menubar')).toBeVisible()
    await expect(frame.getByRole('menuitem', { name: 'File' })).toBeVisible()
    await expect(frame.getByRole('menuitem', { name: 'Edit' })).toBeVisible()
    await expect(frame.getByTestId('menubar__menu')).toHaveCount(0)

    expect(errors).toEqual([])
  })

  test('regression: clicking a trigger opens its menu with correct role and content', async ({
    page
  }) => {
    await page.goto('?path=/story/components-navigation-menubar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('menuitem', { name: 'File' }).click()

    const menu = frame.getByTestId('menubar__menu')
    await expect(menu).toBeVisible()
    await expect(menu).toHaveAttribute('role', 'menu')
    await expect(frame.getByTestId('menubar__group')).toHaveCount(2)
    await expect(frame.getByTestId('menubar__separator')).toHaveCount(1)
    await expect(frame.getByTestId('menubar__item')).toHaveCount(7)
    await expect(frame.getByTestId('menubar__trigger').filter({ hasText: 'File' })).toHaveAttribute(
      'aria-expanded',
      'true'
    )
  })

  test('pressing Escape closes the open menu', async ({ page }) => {
    await page.goto('?path=/story/components-navigation-menubar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await frame.getByRole('menuitem', { name: 'File' }).click()
    await expect(frame.getByTestId('menubar__menu')).toBeVisible()

    await page.keyboard.press('Escape')
    await expect(frame.getByTestId('menubar__menu')).toHaveCount(0)
  })
})
