import { SubmitHandler, useForm } from "react-hook-form";
import CenteredComponents from "./CenteredComponents";
import UsernameField from "./UsernameField";
import PasswordField from "./PasswordField";
import useAuthStore from "../auth/store";

export interface RegisterFormValues {
  username: string;
  password: string;
  earlyClasses: boolean;
  major?: string;
  credits?: number;
  classes_taken: string[];
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
        <UsernameField control={control} />
        <PasswordField control={control} />
      </CenteredComponents>
    </form>
  );
};

export default RegisterForm;
