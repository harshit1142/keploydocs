import type { MDXComponents } from "mdx/types";
import { Callout, CodeBlock } from "./components/MDXComponents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    CodeBlock,
    ...components,
  };
}
