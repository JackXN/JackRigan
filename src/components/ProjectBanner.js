import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Link from 'next/link';
import { UnorderedList, ListItem } from "@chakra-ui/react";


const ProjectBanner = ({project}) => {
  return (
    <>
   <Box sx={styles.container}>
<Image src={project.imgOne} alt={project.title}/>
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
  flexDirection: ['column'],
  mt: ['150px'],
},
links: {
display: 'flex',
flexDirection:'column',
margin: ['20px'],
mt: ['55px'],

},
linkItem: {
  color: 'white',
  margin: '10px',
  listStyle: 'none',
  fontSize: '23px',
  fontFamily: 'Arapey,sans-serif',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  background: '#F06D69',
  borderRadius:'10px',
  padding: '10px',
}
};

export default ProjectBanner;
