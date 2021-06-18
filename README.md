# Storybook Docs Table of content addon

Table of contents addon for [Storybook Docs](https://www.npmjs.com/package/@storybook/addon-docs).

Get auto generated list of links next to your content.

It uses [tocbot](https://github.com/tscanlin/tocbot) under the hood.

## Install

```
npm i -D storybook-docs-toc
```

## Usage

Add this to your preview.js

```diff
- import { DocsContainer } from '@storybook/addon-docs/blocks';
+ import { withTableOfContents } from 'storybook-docs-toc';

- addParameters({
-    docs: {
-        container: DocsContainer,
-    },
-});

+ addParameters(withTableOfContents());
```

or if you need more flexibility

```diff
+ import React from 'react';
- import { DocsContainer } from '@storybook/addon-docs/blocks';
+ import { BackToTop, TableOfContents } from 'storybook-docs-toc';

export const parameters = {
    docs: {
-        container: DocsContainer,
+        container: ({ children, ...rest }) => (
+            <React.Fragment>
+                <DocsContainer {...rest}>
+                    <TableOfContents className="sbdocs sbdocs-toc--custom" />
+                    {children}
+                    <BackToTop className="sbdocs sbdocs-top--custom" />
+                </DocsContainer>
+            </React.Fragment>
+        ),          
    },
};
```

## Customization

Some CSS variables are available in order to customize the styles of the table of contents, and the back to top button.

```css
.sbdocs.sbdocs-toc--custom {
    --toc-color: #202020;
    --toc-background: #fff;
    --toc-indicator-color: #efefef;
    --toc-indicator-color--active: #fbd476;
}

.sbdocs.sbdocs-top--custom {
    --toc-button-color: #66bf3cff;
    --toc-button-color--hover: #66bf3ccc;
    --toc-button-color--active: #66bf3caa;
    --toc-button-background: #e7fdd8ff;
    --toc-button-background--hover: #e7fdd8cc;
    --toc-button-background--active: #e7fdd8aa;
}
```
