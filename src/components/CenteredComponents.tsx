import { Stack } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CenteredComponents = ({ children }: Props) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ pb: 3 }}
    >
      {children}
    </Stack>
  );
};

export default CenteredComponents;
