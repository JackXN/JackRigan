import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
// import data from '../../public/db';

 

function ProjectCard() {
  return (
    <Box sx={styles.container}>
      {data.map((item) => (
        <Box sx={styles.card} key={item.id}>
          <Box sx={styles.imageContainer} key={item.id}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              key={item.id} 
              height="200px"
              sx={styles.projectImg}
            />
            <Text as="h1" sx={styles.title}>
              {item.title}
            </Text>
            <Text as="p" sx={styles.description}>
              {item.description}
            </Text>
            <Text
              as="p"
              style={{ color: "#F06D6B", fontFamily: "Poppins,sans-serif" }}
            >
              <Link key={item.id} href={"/projects/" + item.id} > Read More</Link>
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

const styles = {
  card: {
    background: "#ffff",
    display: "flex",
    flexDirection: ["column"],
    justifyContent: "center",
    alignItems: "center",
    border: "solid lightgray 1px",
    padding: "20px",
    textAlign: "center",
    margin: "20px",
  },
  container: {
    pt: "0px",
    mt: "10px",
    pl: [null, null, null, "200px"],
    pr: [null, null, null, "200px"],
    display: "flex",
    flexDirection: "column",
  },
  projectImg: {
    alignSelf: "center",
  },

  description: {
    mb: "30px",
    mt: "20px",
    fontSize: ["15px", "18px"],
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    textTransform: "uppercase",
    margin: "20px",
    fontWeight: "bold",
    fontSize: ["20px", "30px"],
    color: 'orange',
    fontFamily: 'Quicksand, san-serif',
    letterSpacing: "2px",
    mb: "0",
  },
  link: {
    color: "orange",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  readMore: {
    color: "orange",
  },
};

export default ProjectCard;
