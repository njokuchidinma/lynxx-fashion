"use client";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  FlexProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  GridGapProps,
} from "styled-system";
import Box from "./Box";
import styled from "styled-components";

type FlexBoxProps = FlexboxProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps &
  GridGapProps &
  FlexProps;

const FlexBox = styled(Box)<FlexBoxProps>`
  display: flex;
  flex-direction: row;
  ${layout}
  ${color}
  ${flexbox}
  ${space}
  ${border}
`;

export default FlexBox;
