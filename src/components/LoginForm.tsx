import { Button, Stack } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuthStore from "../auth/store";
import PasswordField from "./PasswordField";
import UserInputField from "./UserInputField";

export interface LoginFormValues {
  username: string;
  password: string;
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
          <UserInputField<LoginFormValues>
            name="username"
            label="Username"
            control={control}
          />
          <PasswordField<LoginFormValues> name="password" control={control} />
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
