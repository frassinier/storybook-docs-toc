import React, { FunctionComponent } from "react";
import styled from "styled-components";
import tocbot from "tocbot";

const Nav = styled.nav`
  --color: var(--toc-color, black);
  --background: var(--toc-background, white);
  --link-indicator-color: var(--toc-link-indicator-color, #f5f5f5);
  --link-indicator-color--active: var(
    --toc-link-indicator-color--active,
    #0675c1
  );

  position: fixed;
  top: 4rem;
  left: calc(50% + 50rem + 2rem);
  padding: 1rem;
  width: 15rem;
  background: var(--background);
  border-radius: 0.5rem;
  box-shadow: 0 2px 6px rgb(0 0 0 / 25%);
  z-index: 9999;
  transition: all 0.3s ease-in;

  .toc-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .toc-link {
    color: var(--color);
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .toc-list-item {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    cursor: pointer;

    &:before {
      position: absolute;
      content: " ";
      display: inline-block;
      top: 0;
      left: 0;
      bottom: 0;
      width: 3px;
      background: var(--link-indicator-color);
    }

    &.is-active-li {
      color: var(--link-indicator-color--active);

      &:before {
        background: var(--link-indicator-color--active);
      }
    }

    .toc-list-item {
      opacity: 0.6;

      &:before {
        content: none;
      }
    }
  }
`;

const NavHeader = styled.header`
  font-weight: bold;
`;

const configuration = {
  tocSelector: ".js-toc",
  contentSelector: ".sbdocs-content",
  headingSelector: ".sbdocs-h2",
};

const TableOfContents: FunctionComponent = () => {
  const [headings, setHeadings] = React.useState([]);

  React.useEffect(() => {
    const h2 = [...document.getElementsByClassName("sbdocs-h2")];

    if (h2.length > 1) {
      // @ts-ignore
      setHeadings(h2);

      tocbot.init({
        ...configuration,
        onClick: (event) => {
          event.preventDefault();
          // @ts-ignore
          const hash = event?.currentTarget.hash;
          const id = hash?.substr(1);
          const element = document.getElementById(id);
          setTimeout(() => {
            element?.focus();
            element?.scrollIntoView();
          }, 500);
        },
      });

      return () => {
        tocbot.destroy();
      };
    }
  }, []);

  return (
    <Nav style={{ display: headings.length > 1 ? "block" : "none" }}>
      <NavHeader>Table of contents</NavHeader>
      <div className="js-toc"></div>
    </Nav>
  );
};

export default TableOfContents;
