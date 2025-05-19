import { type ComponentProps, type ReactNode } from "react";
import { Button } from "./button";

export interface LinkProps extends ComponentProps<typeof Button> {
  href: string;
  target?: ComponentProps<"a">["target"];
  children: ReactNode;
}

function Link({ href, children, target, ...props }: LinkProps) {
  return (
    <Button {...props} asChild>
      <a target={target} href={href}>
        {children}
      </a>
    </Button>
  );
}

export { Link };
