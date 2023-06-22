import { Button } from "@mui/material";
import useAuthStore from "../auth/store";
import CenteredComponents from "../components/CenteredComponents";

const UserProfilePage = () => {
  const user = useAuthStore((s) => s.user);
  const logout = useAuthStore((s) => s.logout);
  return (
    <CenteredComponents>
      <p>Username: {user}</p>
      <Button variant="contained" color="secondary" onClick={() => logout()}>
        Logout
      </Button>
    </CenteredComponents>
  );
};

export default UserProfilePage;
