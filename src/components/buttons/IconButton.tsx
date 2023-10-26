"use client";
import {
  color,
  space,
  border,
  layout,
  shadow,
  compose,
  variant,
  ColorProps,
  SpaceProps,
  BorderProps,
  BackgroundProps,
} from "styled-system";
import styled from "styled-components";
import systemCss from "@styled-system/css";
import { forwardRef } from "react";

interface IconButtonProps {
  size?: "small" | "medium" | "large" | "none";
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "error" | "default" | string;
}

type Props = ColorProps &
  BackgroundProps &
  BorderProps &
  SpaceProps &
  IconButtonProps;

const StyledIconButton = styled.button<Props>(
  systemCss({
    outline: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    borderRadius: 500,
    padding: "1rem",
    fontWeight: 600,
    color: "inherit",
    bg: "body.paper",
    "&:hover": { bg: "gray.200" },
    transition: "all 150ms ease-in-out",
    "&:disabled": { bg: "text.disabled", color: "text.muted" },
  }),
  (props) =>
    variant({
      prop: "variant",
      variants: {
        text: { border: "none", color: `${props.color}.main` },
        outlined: {
          color: `${props.color}.main`,
          border: "2px solid",
          borderColor: `${props.color}.main`,
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${
              props.theme.colors[props.color as any]?.main
            }`,
          },
        },
        contained: {
          border: "none",
          color: `${props.color}.text`,
          bg: `${props.color}.main`,
          "&:hover": { bg: `${props.color}.main` },
          "&:focus": {
            boxShadow: `0px 1px 4px 0px ${
              props.theme.colors[props.color as any]?.main
            }`,
          },
        },
      },
    }),
  variant({
    prop: "size",
    variants: {
      large: { padding: "1.25rem" },
      medium: { padding: "1rem" },
      small: { padding: "0.75rem", fontSize: 14 },
    },
  }),
  compose(color, layout, space, border, shadow)
);

interface BtnProps extends Props {
  children: React.ReactNode;
  as?: string | React.ComponentType<any>;
}

const IconButton = forwardRef<
  HTMLButtonElement,
  BtnProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, size = "small", ...props }, ref) => {
  return (
    <StyledIconButton ref={ref} size={size} {...props}>
      {children}
    </StyledIconButton>
  );
});

export default IconButton;
