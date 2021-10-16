import Link from 'next/link';
import {Box, ListItem, UnorderedList} from '@chakra-ui/react';

function Navbar() {
    return (
        <Box sx={styles.navbar}>
       <UnorderedList style={{listStyle:'none'}} sx={styles.list}>
           <ListItem sx={styles.linkItem}><Link href='/'>Portfolio</Link></ListItem>
           <ListItem sx={styles.linkItem}><Link href='/about'>About</Link></ListItem>
           <ListItem sx={styles.linkItem}><Link href='/blog'>Blog</Link></ListItem>
       </UnorderedList>
        </Box>
    )
}


const styles = {
    navbar: {
    color:'red',
    },
linkItem : {
    color:'black',
    fontFamily: 'Bebas Neue, cursive',
    fontWeight: 'bold',
    fontSize: '21px'
},
list: {
    display: 'flex',
    justifyContent: 'space-evenly'
}
}


export default Navbar
