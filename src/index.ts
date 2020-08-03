import BackToTop from './components/BackToTop';
import DocsContainerHOC from './components/DocsContainerHOC';
import TableOfContents from './components/TableOfContents';

const withTableOfContents = () => ({
    docs: {
        container: DocsContainerHOC,
    },
});

export {
    BackToTop,
    DocsContainerHOC,
    TableOfContents,
    withTableOfContents,
};
