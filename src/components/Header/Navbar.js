import Link from "next/link";
import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
// The regular link tag cant distinguish between active and non-active links so we need to use the router component built into next
import { useRouter } from "next/router";
;
function Navbar() {
  const router = useRouter();


  return (
    <Box sx={styles.navbar}>
      <UnorderedList style={{ listStyle: "none" }} sx={styles.list}>
        <ListItem sx={styles.linkItem}>
        <Link href='/'>
            <a className={router.pathname == '/' ? 'active' : ''}>
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

    fontFamily: "Bebas Neue, cursive",
    fontWeight: "bold",
    fontSize: "21px",
  },
  list: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};

export default Navbar;
