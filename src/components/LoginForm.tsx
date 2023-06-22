import { Button, FormHelperText, Stack, useFormControl } from "@mui/material";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuthStore from "../auth/store";
import PasswordField from "./PasswordField";
import UsernameField from "./UsernameField";

export interface LoginFormValues {
  username: string;
  password: string;
}

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

const LoginForm = () => {
  const { handleSubmit, control } = useForm<LoginFormValues>({
    defaultValues: { username: "", password: "" },
  });
  const login = useAuthStore((s) => s.login);

  const onSubmit: SubmitHandler<LoginFormValues> = (data: LoginFormValues) => {
    console.log("Submitting login info");
    login(data.username);
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
          <UsernameField control={control} />
          <PasswordField control={control} />
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
        </Stack>
      </form>
    </>
  );
};

export default LoginForm;
