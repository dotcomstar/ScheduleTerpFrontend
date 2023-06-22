import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { DummyHelperText, LoginFormValues } from "./LoginForm";

interface Props {
  control: Control<LoginFormValues>;
}

const UsernameField = ({ control }: Props) => {
  return (
    <FormControl
      sx={{ m: 1, width: { xs: "60%", sm: "30%" } }}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-username">Username</InputLabel>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <>
            <OutlinedInput
              {...field}
              id="outlined-username"
              type="text"
              label="Username"
            />
            <DummyHelperText />
          </>
        )}
      />
    </FormControl>
  );
};

export default UsernameField;
