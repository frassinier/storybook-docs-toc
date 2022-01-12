import React, { FunctionComponent } from "react";
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import TableOfContents from "./TableOfContents";
import BackToTop from "./BackToTop";

const DocsContainerHOC: FunctionComponent<DocsContainerProps> = ({
  children,
  ...rest
}) => {
  return (
    <React.Fragment>
      <DocsContainer {...rest}>
        <TableOfContents />
        {children}
        <BackToTop />
      </DocsContainer>
    </React.Fragment>
  );
};

export default DocsContainerHOC;
