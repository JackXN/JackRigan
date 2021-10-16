import Link from 'next/link';
import {Box, ListItem, UnorderedList} from '@chakra-ui/react';

function Navbar() {
    return (
        <Box sx={styles.navbar}>
       <UnorderedList style={{listStyle:'none'}}>
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
    display: 'flex',
    flexDirection:'row',
    border: 'solid red 1px'
    },
linkItem : {
    color:'blue',
    border: 'solid purple 2px'
}
}


export default Navbar
