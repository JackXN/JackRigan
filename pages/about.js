import Header from "../src/components/Header/Header";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Portrait from "../public/simonpan.jpeg";

function about() {
  return (
    <>
      <Header />
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Box sx={styles.title}>
            <Text as="h1"> Jack Rigan is a full stack web developer</Text>
          </Box>
          <Box sx={styles.img}>
            <Image src={Portrait} alt="jack rigan" />
          </Box>
        </Box>

        {/* TEXT CONTAINER */}
        <Box sx={styles.textContainer}>
          <Box sx={styles.aboutText}>
            <Text
              as="h1"
              style={{ fontFamily: "Bebas Neue, cursive", fontSize: "32px" }}
            >
              {" "}
              Hi, I'm Jack{" "}
            </Text>
            <Text
              as="p"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "500",
              }}
            >
              I am a front-end web developer & Designer born in Tønsberg Norway,
              currently residing in salt lake city Utah. My interest in web
              development sparked a few years ago shortly after my 18th
              birthday. I began self teaching HTML CSS and Javascript and after about 6 months of going through courses on Udemy and several other learning platforms i knew i wanted to take it a step further.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

const styles = {
  container: {
    height: "100%",
    color: "white",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#1B1F24",
  },
  wrapper: {
    padding: ["20px"],
    // backgroundColor: "#E8EDEE",
  },
  img: {},
  title: {
    display: ["none", "none", "flex"],
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Bebas Neue, cursive",
    fontSize: "50px",
    ml: "150px",
  },
  aboutText: {
    pt: "125px",
    fontFamily: "Barlow Condensed, sans-serif",
    backgroundColor: "#E8EDEE",

  },
};

export default about;
