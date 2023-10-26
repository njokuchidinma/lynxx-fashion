"use client";
import styled from "styled-components";
import { shadowOptions } from "@/interfaces";
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  compose,
  border,
  color,
  space,
  layout,
} from "styled-system";
import Box from "./Box";

export interface CardProps {
  elevation?: number;
  hoverEffect?: boolean;
  boxShadow?: shadowOptions;
}

type Props = ColorProps & SpaceProps & LayoutProps & BorderProps & CardProps;


const Card = styled(Box)<Props>(
  ({ theme, hoverEffect = false, boxShadow = "small" }) => ({
    backgroundColor: theme.colors.body.paper,
    boxShadow: theme.shadows[boxShadow ? boxShadow : ""],
    ...(hoverEffect && { ":hover": { boxShadow: theme.shadows.large } }),
  }),
  compose(border, color, space, layout)
);

export default Card;
