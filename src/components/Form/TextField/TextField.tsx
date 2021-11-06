import React from "react";
import { TextField as MUITextField, TextFieldProps as MUITextFieldProps } from "@mui/material";

export type TextFieldProps = MUITextFieldProps;

export const TextField: React.FC<TextFieldProps> = ({
  fullWidth = true,
  variant = "standard",
  ...muiTextFieldProps
}) => <MUITextField fullWidth={fullWidth} variant={variant} {...muiTextFieldProps} />;
