"use client";
import { Children, cloneElement, FC, ReactElement } from "react";
import { FlexboxProps } from "styled-system";
import StyledGrid from "./styles";

export interface GridProps {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
  xs?: number;
  item?: boolean;
  spacing?: number;
  className?: string;
  container?: boolean;
  containerHeight?: string;
  vertical_spacing?: number;
  horizontal_spacing?: number;
  children: ReactElement<GridProps>[] | any;
  [key: string]: unknown;
}

const Grid: FC<GridProps & FlexboxProps> = ({
  children,
  spacing = 0,
  vertical_spacing,
  horizontal_spacing,
  containerHeight = "unset",
  ...props
}) => {
  let childList = children;

  if (props.container) {
    childList = Children.map(children, (child) => {
      return cloneElement(child, {
        spacing: spacing,
        vertical_spacing: vertical_spacing,
        horizontal_spacing: horizontal_spacing,
      });
    });
  }

  return (
    <StyledGrid
      spacing={spacing}
      containerHeight={containerHeight}
      vertical_spacing={vertical_spacing}
      horizontal_spacing={horizontal_spacing}
      {...props}
    >
      {childList}
    </StyledGrid>
  );
};

export default Grid;
