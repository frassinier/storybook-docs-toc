# storybook-docs-toc

Table of contents addon for Storybook Docs.
Get auto generated list of links next to your content.

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

or 

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
