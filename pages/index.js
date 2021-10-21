/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import Header from "../src/components/Header/Header";
import { Box, Container } from "@chakra-ui/layout";
import ProjectCard from "../src/components/ProjectCard";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Box sx={styles.wrapper}>
        <Head>
          <title>Jack Rigan</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico"/>
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
        </Head>
        <Header/>
        <ProjectCard />
      </Box>
    </>
  );
}





const styles = {
  wrapper: {
    backgroundColor: "#E8ECEF",
    height: "100%",
  },
};
