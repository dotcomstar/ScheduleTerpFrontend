import { SubmitHandler, useForm } from "react-hook-form";
import CenteredComponents from "./CenteredComponents";
import UserInputField from "./UserInputField";
import PasswordField from "./PasswordField";
import useAuthStore from "../auth/store";
import { Button } from "@mui/material";

export interface RegisterFormValues {
  username: string;
  password: string;
  earlyClasses: boolean;
  major?: string;
  credits?: number;
  classesTaken: string[];
}

const RegisterForm = () => {
  const { handleSubmit, control } = useForm<RegisterFormValues>({
    defaultValues: { username: "", password: "", earlyClasses: true },
  });
  const login = useAuthStore((s) => s.login);

  const onSubmit: SubmitHandler<RegisterFormValues> = (
    data: RegisterFormValues
  ) => {
    console.log("Submitting login info");
    login(data.username);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <CenteredComponents>
        <UserInputField<RegisterFormValues>
          name="username"
          label="Username"
          control={control}
        />
        <PasswordField<RegisterFormValues> name="password" control={control} />
        <UserInputField<RegisterFormValues>
          name="major"
          label="Major (optional)"
          control={control}
        />
        <UserInputField<RegisterFormValues>
          name="credits"
          label="# credits (optional)"
          control={control}
        />
        <UserInputField<RegisterFormValues>
          name="classesTaken"
          label="Classes taken so far"
          control={control}
        />
        <UserInputField<RegisterFormValues>
          name="earlyClasses"
          label="8 AM Classes?"
          control={control}
        />
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          sx={{
            m: 1,
            width: { xs: "60%", sm: "30%" },
          }}
        >
          Register
        </Button>
      </CenteredComponents>
    </form>
  );
};

export default RegisterForm;
