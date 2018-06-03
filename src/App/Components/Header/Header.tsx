import * as React from "react";

interface IProps {
  backgroundColor?: string;
  color?: string;
  children?: React.ReactNode;
  style?: {};
}

export function Header({ backgroundColor, children, color, style = {} }: IProps) {
  return (
    <div style={{ color: color, backgroundColor: backgroundColor, ...style }}>
      {children}
    </div>
  );
}
