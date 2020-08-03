import DocsContainerHOC from './components/DocsContainerHOC';

const withTableOfContents = () => ({
    docs: {
        container: DocsContainerHOC,
    },
});

export {
    withTableOfContents,
    DocsContainerHOC,
};
