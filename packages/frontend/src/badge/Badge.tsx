import clsx from "clsx";
import React, { forwardRef, PropsWithChildren } from "react";
import { Row } from "../row/Row.tsx";
import { Text } from "../text/Text.tsx";
import { container, text } from "./style.css.ts";

export interface BadgeProps {
  text: string;
  variant: "gray";
  size?: "xs" | "sm" | "md";
  icon?: React.FunctionComponent<React.ComponentProps<"svg">>;
  iconProps?: React.ComponentProps<"svg">;
  iconPosition?: "leading" | "tailing";
  className?: string;
  onClick?: () => void;
  before?: React.ReactNode;
}

export const Badge = forwardRef(
  (
    props: PropsWithChildren<BadgeProps>,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const size = props.size ?? "md";

    const iconPosition = props.iconPosition ?? "leading";
    const iconElement = props.icon && (
      <props.icon
        stroke="currentColor"
        width={14}
        height={14}
        {...props.iconProps}
      />
    );

    return (
      <Row
        ref={ref}
        className={clsx(
          container({
            color: props.variant ?? "secondary",
            size,
          }),
          props.className,
        )}
        onClick={props.onClick}
      >
        {props.before && props.before}
        {iconElement && iconPosition == "leading" && iconElement}
        <Text
          size={size === "md" ? "sm" : size === "sm" ? "xs" : "ms"}
          weight={"medium"}
          className={text}
        >
          {props.text}
        </Text>
        {props.children}
        {iconElement && iconPosition == "tailing" && iconElement}
      </Row>
    );
  },
);
