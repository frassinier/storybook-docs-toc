import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Button = styled.button.attrs({
  className: "sbdocs sbdocs-top",
})`
  --color: var(--toc-button-color, inherit);
  --color--hover: var(--toc-button-color--hover, var(--color));
  --color--active: var(--toc-button-color--active, var(--color));
  --background: var(--toc-button-background, transparent);
  --background--hover: var(--toc-button-background--hover, #ffffff);
  --background--active: var(--toc-button-background--active, #efefef);

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: calc(50% + 500px + 20px);
  bottom: 40px;
  padding: 5px 10px;
  color: var(--color);
  background: var(--background);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: var(--color--hover);
    background: var(--background--hover);
  }

  &:active {
    color: var(--color--active);
    background: var(--background--active);
  }

  span {
    padding: 5px;
  }
`;

const BackToTop: FunctionComponent = ({ children, ...rest }) => {
  const [visible, isVisible] = React.useState(false);

  function onScroll() {
    isVisible(() => window.pageYOffset > 300);
  }

  React.useLayoutEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <Button
      onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      {...rest}
    >
      {children || (
        <>
          <span aria-hidden={true}>↑</span> <span>Back to top</span>
        </>
      )}
    </Button>
  );
};

export default BackToTop;
