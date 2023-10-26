"use client";
import { FC, useEffect, useState } from "react";
import { CSSProperties } from "styled-components";
import { colorOptions } from "@/interfaces";
import StyledRating from "./styles";
import Star from "./Star";

export interface RatingProps {
  value?: number;
  outof?: number;
  readonly?: boolean;
  className?: string;
  color?: colorOptions;
  style?: CSSProperties;
  onChange?: (value: number) => void;
  size?: "small" | "medium" | "large";
}

const Rating: FC<RatingProps> = ({
  value = 0,
  color = "secondary",
  outof = 5,
  readonly = true,
  onChange,
  ...props
}) => {
  const [state, setState] = useState<number>(value as number);

  let fullStar = parseInt(state.toString());
  let halfStar = Math.ceil(state - fullStar);
  let emptyStar = (outof as number) - Math.ceil(state);
  let starList = [];

  const handleStarClick = (inputValue: any) => {
    if (!readonly) {
      setState(inputValue);
      if (onChange) onChange(inputValue);
    }
  };

  useEffect(() => setState(value as number), [value]);

  for (let i = 0; i < fullStar; i++) {
    let inputValue = i + 1;

    starList.push(
      <Star
        key={i}
        value={5}
        color={color}
        onClick={() => handleStarClick(inputValue)}
      />
    );
  }

  for (let i = 0; i < halfStar; i++) {
    let inputValue = i + fullStar + 1;

    starList.push(
      <Star
        outof={10}
        color={color}
        key={inputValue}
        value={((state as number) - fullStar) * 10}
        onClick={() => handleStarClick(inputValue)}
      />
    );
  }

  for (let i = 0; i < emptyStar; i++) {
    let inputValue = i + halfStar + fullStar + 1;

    starList.push(
      <Star
        key={inputValue}
        value={0}
        color={color}
        onClick={() => handleStarClick(inputValue)}
      />
    );
  }

  return (
    <StyledRating color={color} value={state} readonly={readonly} {...props}>
      {starList}
    </StyledRating>
  );
};

export default Rating;
