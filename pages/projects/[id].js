import {Box, Text, Flex, List, ListItem, UnorderedList} from '@chakra-ui/react';
import Header from '../../src/components/Header/Header';
import Logo from '../../public/uberHero.jpeg';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import TechStack from '../../src/components/TechStack';

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
   <Box style={{backgroundColor: '#1B1F23', marginTop: '50px', display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems:'center', justifyContent: 'center'}}>
<Flex sx={styles.topBox}>
    <Text as='h1' sx={styles.title}>{project.title}</Text>
    <Text as='h3' sx={styles.description}>{project.description}</Text>
    <Text as='p'  sx={styles.built}>This Project Was Built With</Text>    
</Flex>

<Box sx={styles.wizard}> 
<Box sx={styles.wizardStep}>
<Box sx={styles.wizardDot}>
  <Box sx={styles.wizardNumber}>
  <Icon style={{color:'white', fontSize: '35px'}} icon="akar-icons:react-fill"vFlip={true} />
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px'}}/></Box>
  <Box sx={styles.wizardNumber}>
  <Icon style={{color:'white', fontSize: '35px'}} icon="akar-icons:react-fill" vFlip={true} />
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px'}}/></Box>
  
</Box>
</Box>
</Box>
{/* <Box sx={styles.banner}>
        <Image src={Logo} alt=''/>
    </Box> */}
   </Box>

   </>
  )
};


const styles = {
    topBox: {
      pt:'50px',
      pl: ['40px' , null, '120px', '250px'],
      pr: ['40px' , null, '100px', '250px'],
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
    wizard: {
      display: 'flex',

          },
          wizardStep: {

"&:first-child": {
 backgroundColor: 'transparent',
},

"&:last-child": {
  backgroundColor: 'transparent',
}


          },
    wizardConnector: {
flex: '1',
height: '1px',
// backgroundColor: [null, null, null, '#F06D6A']
    },

    wizardNumber: {
alignItems: 'center',
display: 'flex',
justifyContent: 'center',
backgroundColor: 'rgba(0,0,0,0.3)',
borderRadius: '9999px',
height:'110px',
width: '110px',
ml: '4px',
mr: '4px',
    },
    wizardDot: {
      alignItems:'center',
      display: 'flex',
      flexDirection: ['column', null, null, 'row'],
      justifyContent: 'center',
      flexWrap: 'wrap'
    },

}

export default ProjectDetail;
