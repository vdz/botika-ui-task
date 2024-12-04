import clsx from "clsx";
import { PropsWithChildren } from "react";
import {typography} from "../theme.css.ts";

export interface TextProps {
  size: "xl" | "lg" | "md" | "sm" | "xs" | "ms";
  weight: "regular" | "medium" | "semibold" | "bold";
  color?: string;
  className?: string;
  onClick?: () => void;
}

export const Text = (props: PropsWithChildren<TextProps>) => {
  return (
    <div
      className={clsx(
        typography.text({ size: props.size, weight: props.weight }),
        props.className
      )}
      style={props.color ? { color: props.color } : undefined}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};
