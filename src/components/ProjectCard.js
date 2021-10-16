import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";



function ProjectCard() {
  return (
    <>
      <Box sx={styles.container}>
        <Box sx={styles.card}>
          <Box>
            <Image
              src={"/LogoOne.png"}
              width="100px"
              height="100px"
              alt="Logo"
              sx={styles.projectImg}
            />
          </Box>

          <Text as="h1" sx={styles.title}>
            Giga Chad
          </Text>
          <Text as="p" sx={styles.description}>
            Front End Portal For GigaChad Trading Network
          </Text>
          <a hred="#">Read More</a>
        </Box>
      </Box>
    </>
  );
}

const styles = {
  card: {
    background: "white",
    display: "flex",
    flexDirection: ["column"],
    justifyContent: "center",
    alignItems: "center",
    border: 'solid lightgray 1px',
    padding: '20px'
  },
  container: {
    mt: "10px",
    padding: "20px",
  },
  projectImg: {},
  description: {

  },
  title: {
      margin: ['20px'],
      fontWeight: 'bold',
      fontSize: '41px',
      
  }
};

export default ProjectCard;
