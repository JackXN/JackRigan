import { Box, Text,Link } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { UnorderedList, ListItem } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <UnorderedList sx={styles.listContainer}>
        <ListItem sx={styles.listItem}><Link>LinkedIn</Link></ListItem>
        <ListItem sx={styles.listItem}><Link>Dribble</Link></ListItem>
        <ListItem sx={styles.listItem}><Link>Twitter</Link></ListItem>
      </UnorderedList>
    </Box>
  );
};

const styles = {
  listContainer: {
    listStyle: "none",
    display: "flex",
    padding: '100px',
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

listItem : {
mr: ['20px']
    
}
};

export default Footer;
