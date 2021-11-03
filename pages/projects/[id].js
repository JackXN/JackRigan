import {Box, Text, Flex, List, ListItem, UnorderedList} from '@chakra-ui/react';
import Header from '../../src/components/Header/Header';
import TechStack from '../../src/components/TechStack';
import ProjectBanner from '../../src/components/ProjectBanner';

import Head from 'next/head';
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/JackXN/API-Rigan/projects"
  );
  const data = await res.json();
  // console.log(data)
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://my-json-server.typicode.com/JackXN/API-Rigan/projects/${id}`
  );
  const data = await res.json();



  return {
    props: { project: data },
  };
};

const ProjectDetail = ({ project }) => {
  return(
      <>
          <Head>
         <title>Jack Rigan - {project.title}</title>
    </Head>
      <Header/>

   <Box style={{backgroundColor: '#1B1F23', marginTop: '50px', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems:'center', justifyContent: 'center'}}>
<Flex sx={styles.topBox}>
    <Text as='h1' sx={styles.title}>{project.title}</Text>
    <Text as='h3' sx={styles.description}>{project.description}</Text>
    <Text as='p'  sx={styles.built}>This Project Was Built With</Text>    
</Flex>
<Box>
<TechStack project={project}/>
</Box>
  <ProjectBanner/>
   </Box>

   </>
  )
};


const styles = {
    topBox: {
      pt:'50px',
      pl: ['20px' , null, '120px', '250px'],
      pr: ['20px' , null, '100px', '250px'],
        background: '#1B1F23',
        color: 'white',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        textAlign:'center',
        pb: '50px',
        height: '100%'
    },
    title: {
    fontFamily: "Bebas Neue, cursive",
    fontSize: '50px', 
    fontWeight: '400',
    lineHeight: '60px',
    margin: '40px',
    backgroundColor: '#F06D6A',
    padding: '20px'

    },
    description: {
 fontFamily: 'Arapey, serif',
 fontSize: '27px'
    },

    subDescription: {
 color: 'black',
 mt: '20px',
    },
    imgOne: {
        mt:'50px',
        maxHeight: '500px',
        width: '100%'
    },
    imgOneContainer: {
        width: '100%',
        height:'100%',
    },
    banner: {
      width: '100%',
      mt:'150px'
    },
    built: {
      fontFamily: 'Arapey, serif', 
      marginTop:'50px', 
      color: 'darkgray', 
      fontStyle: 'italic', 
      fontWeight: 'lighter',
      fontSize: ['23px']
    },
    technologies: {
      
      
    },
    icons: {
      color: 'white', 
      listStyle: 'none', 
      display: 'flex', 
      fontSize: '90px',
      mt: '30px',
 

    },
    iconItem: {
      ml: '-4px',
    },
    iconImage: {
     boxShadow: '0 0 0 4px #fff',
     alignItems:'center',
     display: 'flex',
     justifyContent: 'center',
     borderRadius: '999px'
    },

}

export default ProjectDetail;
