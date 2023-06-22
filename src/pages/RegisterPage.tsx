import { Box, Button, Stack } from "@mui/material";
import CenteredComponents from "../components/CenteredComponents";
import RegisterForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <CenteredComponents>
        <RegisterForm />
      </CenteredComponents>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={-6.8}
        marginLeft={-1.5}
      >
        <Box
          sx={{
            width: { xs: "60%", sm: "30%" },
          }}
        >
          <Button>
            <Link to={"/login"}>Already a user?</Link>
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default RegisterPage;
