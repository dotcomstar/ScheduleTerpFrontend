import { useRef } from "react";
import { Input, Box } from "@chakra-ui/react";

interface Props {
  onSearch: (searchText: string) => void;
}

const CourseGeneratorForm = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box>
      <form
        onSubmit={(event) => {
          event?.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <Input
          borderRadius={20}
          placeholder="Course..."
          variant="outline"
          ref={ref}
        />
      </form>
    </Box>
  );
};

export default CourseGeneratorForm;
