import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Link from 'next/link';
import { UnorderedList, ListItem } from "@chakra-ui/react";


const ProjectBanner = ({project}) => {
  return (
    <>
   <Box sx={styles.container}>
<Image src={project.imgOne} alt={project.title} sx={styles.img}/>
<Box sx={styles.links}>
<UnorderedList>
  <ListItem sx={styles.linkItem}>
    <Link href='#'>View Live Project</Link>
  </ListItem>
  <ListItem  sx={styles.linkItem}>
    <Link href='#'>
      Read The Documentation
    </Link>
  </ListItem>
</UnorderedList>

</Box>

   </Box>
    </>
  );
};

const styles = {
container: {
  display: 'flex',
  flexDirection: ['column', null, null, 'row'],
  mt: ['150px'],
},
links: {
display: 'flex',
flexDirection:'column',
margin: ['20px', '30px'],
mt: ['90px'],
},
linkItem: {
  color: 'white',
  margin: ['10px', null, null, '60px'],
  listStyle: 'none',
  // width: '500px',
  fontSize: ['25px', '25px', '25px', '35px'],
  fontFamily: "Bebas Neue, cursive",
  textTransform: 'uppercase',
  fontWeight: 'bold',
  background: '#F06D69',
  borderRadius:['20px', null, null,null, '30px'],
  padding: ['10px', null , null, '30px'],
},
img: {
height: ['400px', null, null, '500px'],
width: ['400px', null, null, '500px'],
mb: ['100px'],
}
};

export default ProjectBanner;
