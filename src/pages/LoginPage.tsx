import { Box, Button, Stack } from "@mui/material";
import CenteredComponents from "../components/CenteredComponents";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <CenteredComponents>
        <LoginForm />
      </CenteredComponents>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={-2.8}
        marginLeft={-2.5}
      >
        <Box
          sx={{
            width: { xs: "60%", sm: "30%" },
          }}
        >
          <Button>
            <Link to={"/register"}>New?</Link>
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default LoginPage;
