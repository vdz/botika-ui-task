import React, { HTMLAttributes, PropsWithChildren } from "react";
import { row } from "./row.css.ts";
import clsx from "clsx";

export const Row = React.forwardRef(
  (
    props: PropsWithChildren<HTMLAttributes<any>>,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { className, ...rest } = props;

    return <div className={clsx(row, className)} {...rest} ref={ref} />;
  }
);
