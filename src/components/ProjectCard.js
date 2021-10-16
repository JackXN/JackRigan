import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link';



const data = [ 
    {
        id: 1,
        imgSrc: '/UberProject.jpeg',
        title: 'Uber Project',
        description: 'This is a description of this project'
    },
{
    id: 2,
    imgSrc:'/AmazonLogo.jpeg',
    title: 'Another Project',
    description: 'This is a description of the project',
},
]


function ProjectCard() {
  return (

    <Box sx={styles.container}>
            {data.map((item) => (
                        <Box sx={styles.card} key={item.id}>
                <Box key={item.id}>
                <Image src={item.imgSrc} alt='hello' key={item.id} width='200px' height='200px'/>
                <Text as='h1' sx={styles.title}>{item.title}</Text>
                <Text as='p' sx={styles.description}>{item.description}</Text>
                <a style={{color:'#F0615C', fontSize: '13px'}}>Read More</a>
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
    border: 'solid lightgray 1px',
    padding: '20px',
    textAlign: 'center',
    margin: '20px',

  },
  container: {
      pt: '0px',
    mt: "10px",
    pl: [null, null, null,'200px'],
    pr: [null, null, null,'200px'],
  },
  projectImg: {},

  description: {
    mb: '30px',
    mt: '20px',
    fontSize: '13px',
  },
  title: {
      textTransform: 'uppercase',
      margin: '20px',
      fontWeight: 'bold',
      fontSize: ['20px'],
  },
  link: {
      color: 'orange'
  }
};

export default ProjectCard;
