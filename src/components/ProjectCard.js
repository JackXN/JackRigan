import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";

const data = [
  {
    id: 1,
    imgSrc: "/LogoYeah.png",
    title: "Communiti Live Chat",
    description: "An Awesome Live Chat Application",
    repoURL: '',
      liveUrl: '',
  },
  {
    id: 2,
    imgSrc: "/GigaChad.png",
    title: "Giga Chad V.1",
    description: "Portal Page For The GigaChad Network",
    repoURL: '',
      liveUrl: '',
  },
  {
    id: 3,
    imgSrc: "/TimerLogo.png",
    title: "Pomodoro Timer",
    description: "Pomodoro Timer For Efficiency",
    repoURL: '',
      liveUrl: '',
  },
  {
      id: 4,
      imgSrc: '/ApexLogo.png',
      title: 'Apex Security',
      description: 'Landing Page For A Security Website',
      repoURL: '',
      liveUrl: '',
  },

  {
      id:  5,
      imgSrc: 'RestaurantLogo.png',
      title: 'Restaurant Reservation App',
      description: 'Dashboard for managing Dinner reservations and table seating',
      repoURL: '',
      liveUrl: '',
    },
    {
        id:6,
        imgSrc: 'PAXLogo.png',
        title: 'PAX SMP',
        description: 'Landing Page For A Minecraft SMP Server',
        repoURL: '',
      liveUrl: '',
    },
    {
        id: '7',
        imgSrc: 'DecoderLogo.png',
        title: 'The Decoder Ring',
        description: 'An App Designed To Encrypt And Decrypt Secret Messages',
        repoURL: '',
      liveUrl: '',
    }
];

function ProjectCard() {
  return (
    <Box sx={styles.container}>
      {data.map((item) => (
        <Box sx={styles.card} key={item.id}>
          <Box sx={styles.imageContainer} key={item.id}>
            <Image
              src={item.imgSrc}
              alt="hello"
              key={item.id}
            height='200px'
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
              <Link href={`/projects/` + item.id}> Read More</Link>
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

const styles = {
  card: {
    background: "white",
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

export default ProjectCard;
