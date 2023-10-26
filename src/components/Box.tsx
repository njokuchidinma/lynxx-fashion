"use client";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

interface BoxProps
  extends LayoutProps,
    ColorProps,
    PositionProps,
    SpaceProps,
    FlexProps,
    BorderProps,
    FlexboxProps,
    TypographyProps {
  shadow?: number | null;
  cursor?: string;
  transition?: string;
}

const Box = styled.div<BoxProps>(
  ({ shadow = 0, cursor = "unset", transition, theme }) => ({
    cursor,
    transition,
    boxShadow: theme.shadows[shadow as number],
  }),
  compose(layout, space, color, position, flexbox, flex, border, typography)
);
export default Box;
