import Link from "next/link";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();


  return (
    <Box sx={styles.navbar}>
      <UnorderedList style={{ listStyle: "none" }} sx={styles.list}>
        <ListItem sx={styles.linkItem}>
        <Link href='/'>
            <a className={router.pathname === '/' ? 'active' : ''}>
           Portfolio
            </a>
            </Link>
        </ListItem>
        <ListItem sx={styles.linkItem}>
          <Link href="/about">About</Link>
        </ListItem>
        <ListItem sx={styles.linkItem}>
          <Link href="/blog">Blog</Link>
        </ListItem>
      </UnorderedList>
    </Box>
  );
}

const styles = {
  navbar: {
  },
  linkItem: {

fontFamily: 'Quicksand, san-serif',
    fontSize: "21px",
    fontWeight: '600',


    '&:hover': {
      textDecoration: 'underline'
    },
  },
  list: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};

export default Navbar;
