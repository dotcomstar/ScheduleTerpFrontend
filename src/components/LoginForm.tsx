import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  useFormControl,
} from "@mui/material";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginFormValues {
  username: string;
  password: string;
}

function DummyHelperText() {
  const { focused, filled } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (focused || filled) {
      return "Don't put real info here! This is a dummy form";
    }

    return "";
  }, [focused, filled]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

const LoginForm = () => {
  const { handleSubmit, control, register } = useForm<LoginFormValues>();
  const [loggedIn, setLoggedIn] = useState(false);

  const onSubmit: SubmitHandler<LoginFormValues> = (d: LoginFormValues) => {
    console.log("Submitting login info");
    setLoggedIn(true);
  };

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <FormControl
            sx={{ m: 1, width: { xs: "60%", sm: "30%" } }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-username">Username</InputLabel>
            <OutlinedInput
              id="outlined-username"
              type="text"
              label="Username"
            />
            <DummyHelperText />
          </FormControl>
          <FormControl
            sx={{ m: 1, width: { xs: "60%", sm: "30%" } }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
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
          </FormControl>
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            sx={{
              m: 1,
              width: { xs: "60%", sm: "30%" },
            }}
          >
            Login
          </Button>
          {loggedIn && <p>It's as if you were logged in!</p>}
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
