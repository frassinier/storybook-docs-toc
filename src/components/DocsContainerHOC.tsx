import React, { ComponentProps, FunctionComponent } from "react";
import { DocsContainer, DocsContainerProps } from "@storybook/addon-docs";
import TableOfContents from "./TableOfContents";
import BackToTop from "./BackToTop";

type Props = DocsContainerProps &
  Pick<ComponentProps<typeof TableOfContents>, "title" | "config">;

const DocsContainerHOC: FunctionComponent<Props> = ({
  children,
  title,
  config,
  ...rest
}) => (
  <DocsContainer {...rest}>
    <TableOfContents title={title} config={config} />
    {children}
    <BackToTop />
  </DocsContainer>
);

export default DocsContainerHOC;
