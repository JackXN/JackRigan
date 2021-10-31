/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Header from "../src/components/Header/Header";
import { Box, Container, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import data from "../public/db";
import Footer from "../src/components/Footer";
export default function Home({ projects }) {
  return (
    <>
      <Box sx={styles.wrapper}>
        <Head>
          <title>Jack Rigan</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@200;300;400;500&family=Poppins:wght@100;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,200;0,500;0,700;1,500&display=swap" rel="stylesheet"/>
        </Head>
        <Header />
        <Box sx={styles.container}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.imageContainer} key={item.id}>
                <Image
                  src={item.imgSrc}
                  alt="hello"
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
                  <Link key={item.id} href={"/projects/" + item.id}>
                    Read More
                  </Link>
                </Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const project = await fetch(
    "https://my-json-server.typicode.com/JackXN/API-Rigan/projects"
  ).then((res) => res.json());
  console.log(project);

  return {
    props: {
      project,
    },
  };
}

const styles = {
  wrapper: {
    backgroundColor: "#E8ECEF",
    height: "100%",
  },
  card: {
    background: "#ffff",
    // display: "flex",
    // flexDirection: ["column"],
    // justifyContent: "center",
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
    // fontFamily: "Poppins, sans-serif",
    fontFamily: "Quicksand,san-serif",
  },
  title: {
    textTransform: "uppercase",
    margin: "20px",
    fontSize: ["20px", "30px"],
    fontFamily: "Bebas Neue, cursive",
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
