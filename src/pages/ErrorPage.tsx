import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import ThemedLayout from "../components/ThemedLayout";
import { Grid } from "@mui/material";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <ThemedLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} marginLeft={2}>
          <h1>Oops...</h1>
          <p>
            {isRouteErrorResponse(error) ? "Invalid page" : "Unexpected error"}
          </p>
        </Grid>
      </Grid>
    </ThemedLayout>
  );
};

export default ErrorPage;
