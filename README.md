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
import { addParameters } from '@storybook/react';
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
import { addParameters } from '@storybook/react';
- import { DocsContainer } from '@storybook/addon-docs/blocks';
+ import React from 'react';
+ import { BackToTop, TableOfContents } from 'storybook-docs-toc';

addParameters({
    docs: {
-        container: DocsContainer,
+        container: props => (
+			    <React.Fragment>
+			  	  <TableOfContents />
+			  	  <DocsContainer {...props} />
+			  	  <BackToTop />
+			    </React.Fragment>
+		    ),          
    },
});
```

## Customization

Some CSS variables are avaible in order to customize the styles of the table of contents, and the back to top button.

```css
:root {
    --toc-color: black;
    --toc-background: white;

    --toc-link-indicator-color: #f5f5f5;
    --toc-link-indicator-color--active: #0675c1;

    --toc-button-background: transparent;
    --toc-button-background--hover: #ffffff;
    --toc-button-background--active: #efefef;
}
```
