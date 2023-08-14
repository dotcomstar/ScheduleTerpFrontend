import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import ThemedLayout from "../components/ThemedLayout";
import { Grid } from "@mui/material";

const ErrorPage = () => {
  const error = useRouteError();
  let errorMessage: string;
  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <ThemedLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} marginLeft={2}>
          <h1>Oops!</h1>
          <p>{errorMessage}</p>
        </Grid>
      </Grid>
    </ThemedLayout>
  );
};

export default ErrorPage;
