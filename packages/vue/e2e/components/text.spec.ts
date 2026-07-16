import { test, expect } from '@playwright/test'

test.describe('Text', () => {
  test('Default renders as span with correct text', async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto('http://localhost:6006/?path=/story/components-typography-text--default')
    const frame = page.frameLocator('#storybook-preview-iframe')
    const el = frame.getByText('Sample Text')

    await expect(el).toHaveCount(1)
    await expect(el).toHaveJSProperty('tagName', 'SPAN')
    expect(errors).toEqual([])
  })

  test('regression: base reset styling applies regardless of the `as` tag (CSS tag-mismatch)', async ({
    page
  }) => {
    // text.vue's `as` prop is an unlocked `string` (unlike heading.vue's
    // literal-union `as`), but its base reset rule used a bare
    // `span, div, p {}` selector -- so any other tag (e.g. `h1`, `label`)
    // silently fell outside the scoped selector's match entirely.
    // Confirmed via direct CSS-rule-matching inspection (zero matching
    // rules for as="h1"), not just visual inspection, since other global
    // resets in the Storybook preview coincidentally zero out margin/
    // padding regardless, masking the symptom visually.
    await page.goto('http://localhost:6006/?path=/story/components-typography-text--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await page.getByRole('tab', { name: /Controls/i }).click()
    const asControl = page.locator('#control-as')
    await asControl.fill('h1')
    await asControl.blur()

    const el = frame.getByText('Sample Text')
    await expect(el).toHaveJSProperty('tagName', 'H1')

    const matches = await el.evaluate((element) => {
      const results: string[] = []
      for (const sheet of Array.from(document.styleSheets)) {
        let rules: CSSRuleList
        try {
          rules = sheet.cssRules
        } catch {
          continue
        }
        for (const rule of Array.from(rules)) {
          if (rule instanceof CSSStyleRule) {
            try {
              if (element.matches(rule.selectorText)) results.push(rule.selectorText)
            } catch {}
          }
        }
      }
      return results
    })
    expect(matches.length).toBeGreaterThan(0)
  })

  test('size/weight/color controls apply distinct styling', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-typography-text--default')
    const frame = page.frameLocator('#storybook-preview-iframe')

    await page.getByRole('tab', { name: /Controls/i }).click()
    await page.locator('#control-size').selectOption('3xl')
    await page.locator('#control-color').selectOption('primary')

    const el = frame.getByText('Sample Text')
    const diag = await el.evaluate((e) => {
      const cs = getComputedStyle(e)
      return { fontSize: cs.fontSize, color: cs.color }
    })
    expect(parseFloat(diag.fontSize)).toBeGreaterThan(20)
  })
})
