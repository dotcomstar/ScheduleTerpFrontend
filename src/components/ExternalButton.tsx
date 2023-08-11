import { Button } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface Props {
  link: string;
  text: string;
}

const ExternalButton = ({ link, text }: Props) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      endIcon={<OpenInNewIcon />}
      target="_blank"
      rel="noopener noreferrer"
      href={link}
    >
      {text}
    </Button>
  );
};

export default ExternalButton;
