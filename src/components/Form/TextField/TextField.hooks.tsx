import React from "react";
import { TextField as TextFieldComponent, TextFieldProps } from ".";

export const useTextField = (defaultValue?: string) => {
  const [value, setValue] = React.useState<string>(defaultValue || "");

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  const TextField = React.useCallback(
    (textFieldProps: TextFieldProps) => <TextFieldComponent {...textFieldProps} onChange={onChange} />,
    [onChange]
  );

  return {
    value,
    TextField,
  };
};
