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
  flexDirection: ['column']
},
links: {
  background: 'red'
},
linkItem: {
  color: 'orange'
}
};

export default ProjectBanner;
