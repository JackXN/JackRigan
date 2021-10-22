import {Box, Text, Flex} from '@chakra-ui/react';
import Header from '../../src/components/Header/Header';
import Logo from '../../public/projectbanner.jpg';
import Image from 'next/image'

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
      <Header/>
   <Box>
<Flex sx={styles.topBox}>
    <Text as='h1' sx={styles.title}>{project.title}</Text>
    <Text as='h3' sx={styles.description}>{project.description}</Text>
    <Box>
        <Image src={Logo} alt=''/>
    </Box>
</Flex>
   </Box>

   </>
  )
};


const styles = {
    topBox: {
        padding: '20px',
        background: '#1B1F23',
        color: 'white',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent: 'center',
        textAlign:'center',
        pt:'50px',
        pb: '50px',
        height: '100%'
    },
    title: {
    fontFamily: "Bebas Neue, cursive",
    fontSize: '50px', 
    fontWeight: '400',
    lineHeight: '60px',
    margin: '40px'

    },
    description: {

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
    }
}

export default ProjectDetail;
