import { Box, Text, Link } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import {
  AiFillLinkedin as LinkedIn,
  AiFillTwitterSquare as Twitter,
  AiFillGithub as Github,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <UnorderedList sx={styles.listContainer}>
        <ListItem sx={styles.listItem}>
          <Link href="https://www.linkedin.com/in/jack-rigan/">
            <LinkedIn />
          </Link>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Link href="https://github.com/JackXN">
            <Github />
          </Link>
        </ListItem>
        <ListItem sx={styles.listItem}>
          <Link>
            <Twitter />
          </Link>
        </ListItem>
      </UnorderedList>
      <Text as="h3">Copyright @2021 Jack Rigan. All Rights Reserved.</Text>
    </Box>
  );
};

const styles = {
  listContainer: {
    listStyle: "none",
    display: "flex",
    padding: "100px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    mr: ["20px"],
    fontSize: "40px",
    "&:hover": {
      transform: "translateY(-5px)",
      transition: "transform 250ms",
      color: "#F06D6A",
    },
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
};

export default Footer;
