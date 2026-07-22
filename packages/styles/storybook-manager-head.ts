/** Shared <head> snippets for Storybook manager (favicon path + title vary per package). */
export const SQUID_MANAGER_FONT_LINKS = `
<link rel="preconnect" href="https://api.fontshare.com" crossorigin />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" />
`;

export function squidManagerHead(
  head: string,
  options: { faviconHref: string; title: string },
): string {
  return `
    ${head}
    ${SQUID_MANAGER_FONT_LINKS}
    <link rel="icon" type="image/svg+xml" href="${options.faviconHref}" />
    <title>${options.title}</title>
  `;
}
