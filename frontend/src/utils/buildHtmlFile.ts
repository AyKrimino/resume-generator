export const buildFullHtml = async (
  innerHtml: string,
  cssUrls: string[] = []
) => {
  const cssContents: string[] = [];

  for (const url of cssUrls) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.warn("Failed to fetch CSS:", url, res.status);
        continue;
      }
      const text = await res.text();
      cssContents.push(text);
    } catch (err) {
      console.warn("Error fetching CSS:", url, err);
    }
  }

  const combinedCss = cssContents.join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Resume</title>
    <style>
     ${combinedCss}
    </style>
  </head>
  <body>
    ${innerHtml}
  </body>
</html>
  `;
};

export const getStylesheetUrls = (): string[] => {
  const links = Array.from(
    document.querySelectorAll("link[rel='stylesheet']")
  ) as HTMLLinkElement[];
  return links.map((l) => l.href).filter(Boolean);
};
