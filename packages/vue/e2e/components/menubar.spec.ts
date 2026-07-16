import { test, expect } from '@playwright/test'

test.describe('Menubar', () => {
  test('Default story renders two closed triggers, no console errors', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-navigation-menubar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const root = frame.getByTestId('qui-menubar')
    await expect(root).toBeVisible()
    await expect(root).toHaveAttribute('role', 'menubar')
    await expect(root).toHaveCSS('display', 'flex')

    const triggers = frame.getByTestId('qui-menubar-trigger')
    await expect(triggers).toHaveCount(2)
    await expect(triggers.nth(0)).toHaveText('File')
    await expect(triggers.nth(1)).toHaveText('Edit')
    await expect(triggers.nth(0)).toHaveAttribute('aria-expanded', 'false')

    // regression: this story previously crashed entirely (menubar.vue used
    // the generic Primitive instead of MenubarRoot, so the required
    // MenubarRootContext injection failed and nothing rendered)
    expect(errors).toEqual([])
  })

  test('regression: clicking a trigger opens its menu with correctly styled, visible content', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-navigation-menubar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const fileTrigger = frame.getByTestId('qui-menubar-trigger').first()
    await fileTrigger.click()

    await expect(fileTrigger).toHaveAttribute('aria-expanded', 'true')

    const content = frame.getByTestId('qui-menubar-menu').first()
    await expect(content).toBeVisible()
    // regression: content is rendered via a Teleport, which severed the
    // scoped-CSS attribute entirely -- background stayed transparent
    // instead of using the popover background color
    await expect(content).not.toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')

    const items = frame.getByTestId('qui-menubar-item')
    await expect(items).toHaveCount(7)
    await expect(items.first()).toHaveText('New')

    await expect(frame.getByTestId('qui-menubar-separator').first()).toBeVisible()
  })

  test('regression: hovering a sibling trigger while a menu is open switches to it', async ({
    page
  }) => {
    await page.goto('http://localhost:6006/?path=/story/components-navigation-menubar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const fileTrigger = frame.getByTestId('qui-menubar-trigger').nth(0)
    const editTrigger = frame.getByTestId('qui-menubar-trigger').nth(1)

    await fileTrigger.click()
    await expect(fileTrigger).toHaveAttribute('data-state', 'open')

    await editTrigger.hover()
    await expect(editTrigger).toHaveAttribute('data-state', 'open')
    await expect(fileTrigger).toHaveAttribute('data-state', 'closed')

    const items = frame.getByTestId('qui-menubar-item')
    await expect(items).toHaveCount(5)
    await expect(items.first()).toHaveText('Undo')
  })
})
