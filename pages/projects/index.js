
import { Box, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Link from "next/link";


export const getStaticProps = async () => {
    const res = await fetch ('https://my-json-server.typicode.com/JackXN/API-Rigan/projects')
const data = await res.json();
  console.log(data)

    return {
        props: { projects: data }
    }
    

}

function ProjectCard({projects}) {
  return (
    <div>
        {projects.map(project => (
           // eslint-disable-next-line @next/next/link-passhref
           <Link href={'/projects/' + project.id} key={project.id}>
               <h3>{project.title}</h3>
            </Link>
        ))}
    </div>
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
