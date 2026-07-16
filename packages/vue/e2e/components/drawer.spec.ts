import { test, expect } from '@playwright/test'

test.describe('Drawer', () => {
  test('side variant: opens to full panel width, has no backdrop, and click-through does not close it', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-overlay-drawer--default', {
      waitUntil: 'networkidle'
    })
    const frame = page.frameLocator('#storybook-preview-iframe')
    const drawer = frame.getByTestId('qui-drawer')
    const overlayPanel = frame.getByTestId('qui-drawer-overlay')
    const content = frame.getByTestId('drawer__content')

    await content.getByRole('button').click()
    await expect(drawer).toHaveClass(/open/)

    // Regression: the sliding panel is a normal in-flow flex item for
    // variant="side" (not position:absolute like over/push), so it
    // competes for space with drawer-content's width:100% and gets
    // squeezed by default flex-shrink unless the panel opts out with
    // flex-shrink: 0. Poll since the width animates over a 0.3s transition.
    await expect
      .poll(async () => (await overlayPanel.boundingBox())?.width, { timeout: 2000 })
      .toBeCloseTo(172, 0)

    const classes = await drawer.getAttribute('class')
    expect(classes).not.toContain('has-backdrop')

    // side variant intentionally no-ops on outside clicks (handleClick
    // returns early for variant === 'side')
    await drawer.click({ position: { x: 900, y: 200 } })
    await expect(drawer).toHaveClass(/open/)
    expect(errors).toEqual([])
  })

  test('over variant: wrapper spans full width, panel keeps its own width and solid background, backdrop click closes it', async ({
    page
  }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-overlay-drawer--over', {
      waitUntil: 'networkidle'
    })
    const frame = page.frameLocator('#storybook-preview-iframe')
    const drawer = frame.getByTestId('qui-drawer')
    const overlayPanel = frame.getByTestId('qui-drawer-overlay')
    const content = frame.getByTestId('drawer__content')

    await content.getByRole('button').click()
    await expect(drawer).toHaveClass(/open/)
    await expect(drawer).toHaveClass(/has-backdrop/)

    // Regression: drawer.vue's outer wrapper previously used a bare
    // `div {}` scoped-CSS selector. Vue attaches a parent SFC's scope-id
    // to a directly-used child component's root element in addition to
    // the child's own scope-id, so the bare selector leaked onto
    // DrawerOverlay's root (a direct child in the template) and
    // overrode its intended width and background. Using the `.q-drawer`
    // class selector instead keeps the rules scoped to the wrapper only.
    const drawerBox = await drawer.boundingBox()
    expect(drawerBox?.width).toBeGreaterThan(900)

    const panelBox = await overlayPanel.boundingBox()
    expect(panelBox?.width).toBeCloseTo(172, 0)

    const panelBg = await overlayPanel.evaluate((el) => getComputedStyle(el).backgroundColor)
    expect(panelBg).not.toBe('rgba(0, 0, 0, 0)')

    await drawer.click({ position: { x: 900, y: 200 } })
    await expect(drawer).not.toHaveClass(/open/)
    expect(errors).toEqual([])
  })

  test('over variant: clicking inside the panel does not close it', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-overlay-drawer--over', {
      waitUntil: 'networkidle'
    })
    const frame = page.frameLocator('#storybook-preview-iframe')
    const drawer = frame.getByTestId('qui-drawer')
    const overlayPanel = frame.getByTestId('qui-drawer-overlay')
    const content = frame.getByTestId('drawer__content')

    await content.getByRole('button').click()
    await expect(drawer).toHaveClass(/open/)

    await overlayPanel.click({ position: { x: 50, y: 50 } })
    await expect(drawer).toHaveClass(/open/)
  })

  test('push variant: opens and backdrop click closes it', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-overlay-drawer--over', {
      waitUntil: 'networkidle'
    })
    const frame = page.frameLocator('#storybook-preview-iframe')

    await page.getByRole('tab', { name: /Controls/i }).click()
    await page.locator('#control-variant').selectOption('push')

    const drawer = frame.getByTestId('qui-drawer')
    const content = frame.getByTestId('drawer__content')

    await content.getByRole('button').click()
    await expect(drawer).toHaveClass(/open/)
    await expect(drawer).toHaveClass(/has-backdrop/)

    await drawer.click({ position: { x: 900, y: 200 } })
    await expect(drawer).not.toHaveClass(/open/)
  })
})
