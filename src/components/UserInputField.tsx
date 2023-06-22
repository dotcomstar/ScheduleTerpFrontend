import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { DummyHelperText } from "./DummyHelperText";

interface Props<T extends FieldValues> {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
}

const UserInputField = <T extends FieldValues>({
  label,
  control,
  name,
}: Props<T>) => {
  return (
    <FormControl
      sx={{ m: 1, width: { xs: "60%", sm: "30%" } }}
      variant="outlined"
    >
      <InputLabel htmlFor={"outlined-" + label}>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            <OutlinedInput
              {...field}
              id={"outlined-" + label}
              type="text"
              label={label}
            />
            <DummyHelperText />
          </>
        )}
      />
    </FormControl>
  );
};

export default UserInputField;
