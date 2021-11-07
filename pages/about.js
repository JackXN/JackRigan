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
          <Box sx={styles.aboutTextContainer}>
            <Text
              as="h1"
              style={{
                fontFamily: "Bebas Neue, cursive",
                fontSize: "40px",
                fontWeight: "400",
              }}
            >
              Hi, Im Jack{" "}
            </Text>
            <Box sx={styles.aboutDescription}>
            <Text as="p" sx={styles.aboutText}>
              I am a front-end web developer & Designer born in Tønsberg Norway,
              currently residing in salt lake city Utah. My interest in web
              development sparked a few years ago shortly after my 18th
              birthday. I began self teaching HTML CSS and Javascript and after
              about 6 months of going through courses on Udemy and several other
              learning platforms. I fell in love with the code quickly and took
              it upon myself to enroll in a full stack development bootcamp.
            </Text>
            <Text as="p" sx={styles.aboutText}>
              Shortly after graduating the bootcamp i joined a crypto startup as
              a full stack developer. I helped design and build discord bots,
              nft websites, and portal pages for the network. As well as working
              on the crypto project, decided to integrate what i was learning
              with this company and use it in my own projects
            </Text>
            </Box>
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
    fontSize: ["35px", null, "50px"],
    padding: ["30px"],
    ml: [null, null, null, null, "10px", "90px", "120px"],
  },
  aboutTextContainer: {
    fontFamily: "Barlow Condensed, sans-serif",
    backgroundColor: "#E8EDEE",
    padding: ["20px", '50px', '150px'],
  },
  aboutText: {
    fontSize: "26px",
    fontFamily: "barlow condensed, sans-serif",
    mt: "20px",
  },
  aboutDescription: {
    
  }
};

export default about;
