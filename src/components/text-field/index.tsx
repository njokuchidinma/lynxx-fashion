"use client";
import {
  FC,
  useState,
  useEffect,
  cloneElement,
  InputHTMLAttributes,
} from "react";
import Box from "../Box";
import { SpaceProps } from "styled-system";
import { colorOptions } from "../../interfaces";
import { SyledTextField, TextFieldWrapper } from "./styles";

export interface TextFieldProps {
  labelColor?: colorOptions;
  label?: string;
  errorText?: any;
  id?: any;
  fullwidth?: boolean;
  endAdornment?: any;
}

const TextField: FC<
  (InputHTMLAttributes<HTMLInputElement> & TextFieldProps & SpaceProps) | any
> = ({
  id,
  label,
  errorText,
  labelColor,
  endAdornment,
  color = "default",
  ...props
}) => {
  const [textId, setTextId] = useState(id);
  ("use client");
  // extract spacing props
  let spacingProps: { [key: string]: any } = {};
  for (const key in props) {
    if (key.startsWith("m") || key.startsWith("p"))
      spacingProps[key] = props[key];
  }

  useEffect(() => {
    if (!id) setTextId(Math.random());
  }, []);

  return (
    <TextFieldWrapper
      color={color || (labelColor && `${labelColor}.main`)}
      fullwidth={props.fullwidth}
      {...spacingProps}
    >
      {label && <label htmlFor={textId}>{label}</label>}
      <Box position="relative">
        <SyledTextField id={textId} {...props} />
        {endAdornment &&
          cloneElement(endAdornment, {
            className: `end-adornment ${endAdornment.className}`,
          })}
      </Box>
      {errorText && <small>{errorText}</small>}
    </TextFieldWrapper>
  );
};

export default TextField;
