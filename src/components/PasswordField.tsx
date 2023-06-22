import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";
import { DummyHelperText, LoginFormValues } from "./LoginForm";
import { useState } from "react";

interface Props {
  control: Control<LoginFormValues>;
}

const PasswordField = ({ control }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl
      sx={{ m: 1, width: { xs: "60%", sm: "30%" } }}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <OutlinedInput
              {...field}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <DummyHelperText />
          </>
        )}
      />
    </FormControl>
  );
};

export default PasswordField;
