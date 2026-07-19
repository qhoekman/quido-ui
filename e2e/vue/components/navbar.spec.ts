import { test, expect } from '@playwright/test'

test.describe('Navbar', () => {
  test('Default story renders brand, links, and a closed dropdown, no console errors', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-website-components-navbar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const navbar = frame.getByTestId('qui-navbar')
    await expect(navbar).toBeVisible()
    await expect(navbar).toHaveJSProperty('tagName', 'NAV')

    await expect(frame.getByTestId('qui-navbar-brand')).toBeVisible()
    await expect(frame.getByTestId('qui-navbar-logo')).toBeVisible()

    const link = frame.getByTestId('qui-navbar-link').first()
    await expect(link).toHaveText('Link One')

    const dropdownTrigger = frame.getByRole('button', { name: /Dropdown Three/ })
    await expect(dropdownTrigger).toHaveAttribute('aria-expanded', 'false')

    expect(errors).toEqual([])
  })

  test('regression: clicking the dropdown trigger actually opens the menu with its items', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('?path=/story/features-website-components-navbar--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    const dropdownTrigger = frame.getByRole('button', { name: /Dropdown Three/ })
    await dropdownTrigger.click()

    // regression: `open`/`modal` on navbar-dropdown.vue and dropdown-menu.vue
    // previously auto-defaulted to `false` (Vue's Boolean-prop coercion for
    // absent props) instead of `undefined`, which silently pinned the
    // underlying DropdownMenuRoot in controlled mode -- the trigger never
    // toggled `aria-expanded`, and clicking did nothing, with no error.
    const content = frame.getByTestId('qui-navbar-dropdown-content')
    await expect(content).toBeVisible()

    const links = frame.getByTestId('qui-navbar-dropdown-link')
    await expect(links).toHaveCount(3)
    await expect(links.first()).toHaveText('Item #1')

    expect(errors).toEqual([])
  })
})
