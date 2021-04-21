import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Button = styled.button`
  --button-background: var(--toc-button-background, transparent);
  --button-background--hover: var(--toc-button-background--hover, #ffffff);
  --button-background--active: var(--toc-button-background--active, #efefef);

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: calc(50% + 50rem + 2rem);
  bottom: 4rem;
  padding: 0.5rem 1rem;
  background: var(--button-background);
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--button-background--hover);
  }

  &:active {
    background: var(--button-background--active);
  }

  span {
    padding: 0.5rem;
  }
`;

const BackToTop: FunctionComponent = () => {
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
    >
      <span aria-hidden={true}>↑</span>
      Back to top
    </Button>
  );
};

export default BackToTop;
