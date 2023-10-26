"use client";
import { FC } from "react";
import { BorderProps, ColorProps } from "styled-system";
import StyledAvatar from "./styles";

export interface AvatarProps extends BorderProps, ColorProps {
  src?: string;
  size?: number;
  children?: any;
  [key: string]: any;
}

const Avatar: FC<AvatarProps> = ({ src, size = 48, children, ...props }) => {
  return (
    <StyledAvatar size={size} {...props}>
      {src && <img src={src} alt="avatar" />}
      {!src && children && <span>{children}</span>}
    </StyledAvatar>
  );
};

export default Avatar;
