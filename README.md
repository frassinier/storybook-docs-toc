# storybook-docs-toc

Table of contents addon for Storybook Docs.
Get auto generated list of links next to your content.

## Install

```
npm i -D storybook-docs-toc
```

## Usage

Add this to your preview.js

```js
import { addParameters } from '@storybook/react';
import { withTableOfContents } from 'storybook-docs-toc';

addParameters(withTableOfContents());
```

or 

```js
import { addParameters } from '@storybook/react';
import { DocsContainerHOC } from 'storybook-docs-toc';

addParameters({
    docs: {
        container: DocsContainerHOC,
    },
});
```