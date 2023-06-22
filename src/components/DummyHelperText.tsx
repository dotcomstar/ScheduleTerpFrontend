import { FormHelperText, useFormControl } from "@mui/material";
import { useMemo } from "react";

export function DummyHelperText() {
  const { focused, filled } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (focused || filled) {
      return "Don't put real info here! This is a dummy form";
    }

    return "";
  }, [focused, filled]);

  return <FormHelperText>{helperText}</FormHelperText>;
}
