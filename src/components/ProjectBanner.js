import { Box, Text } from "@chakra-ui/layout";
import Bg from "../../public/bannerbg.png";

const ProjectBanner = () => {
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.content}>
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

const styles = {
  container: {
    background: `${Bg}`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
};

export default ProjectBanner;
