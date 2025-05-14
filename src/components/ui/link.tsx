import { type ComponentProps, type ReactNode } from "react";
import { Button } from "./button";

export interface LinkProps extends ComponentProps<typeof Button> {
  href: string;
  children: ReactNode;
}

function Link({ href, children, ...props }: LinkProps) {
  return (
    <Button {...props} asChild>
      <a href={href}>{children}</a>
    </Button>
  );
}

export { Link };
