import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Link from 'next/link';
import { UnorderedList, ListItem,Button } from "@chakra-ui/react";


const ProjectBanner = ({project}) => {
  return (
    <>
   <Box sx={styles.container}>
<Image src={project.imgOne} alt={project.title} sx={styles.img}/>
<Box sx={styles.links}>
<UnorderedList>
  <ListItem>
  <Button
            sx={styles.buttons.primary}
            as="button"
            _hover={{
              boxShadow: "inset -3.5em 0 0 0 var(--hover)",
              boxShadow: "inset 3.5em 0 0 0 var(--hover)",
            }}
            focus={{
              boxShadow: "inset -3.5em 0 0 0 var(--hover)",
              boxShadow: "inset 3.5em 0 0 0 var(--hover)",
            }}
            color="orange"
            transition="0.25s"
          >
            Learn More
          </Button>
          </ListItem>
          <ListItem>
  <Button
            sx={styles.buttons.primary}
            as="button"
            _hover={{
              boxShadow: "inset -3.5em 0 0 0 var(--hover)",
              boxShadow: "inset 3.5em 0 0 0 var(--hover)",
            }}
            focus={{
              boxShadow: "inset -3.5em 0 0 0 var(--hover)",
              boxShadow: "inset 3.5em 0 0 0 var(--hover)",
            }}
            color="orange"
            transition="0.25s"
          >
            Learn More
          </Button>
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
  // width: '150px',
  fontSize: ['25px', '25px', '25px', '35px'],
  fontFamily: "Bebas Neue, cursive",
  textTransform: 'uppercase',
  fontWeight: 'bold',
  background: '#F06D69',
  borderRadius:['20px', null, null,null, '30px'],
  padding: ['10px', null , null, '30px'],
  boxShadow: '5px 5px 5px  black',
  border: 'none',

  '&:hover': {
    transition: '1s',
    boxShadow:'0px 0px 0px 0px ',
    cursor: 'pointer'
  }
},
img: {
height: ['400px', null, null, '500px'],
width: ['400px', null, null, '500px'],
mb: ['100px'],
},
  buttons: {
    container: {
      align: "center",
      justify: "space-between",
      padding: "20px",
      mt: [null, null, null, "20px"],
    },
    primary: {
      padding: "25px",
      margin: "10px",
      ml: "-20px",
      background: "linear-gradient(to right, #040405 50%, #AD0541 50%)",
      color: "white",
      transition: "all .5s ease-out",
      borderRadius: "none",
      fontSize: ["15px", null, "20px", "25px"],
      backgroundPosition: " right bottom",
      backgroundSize: "200% 100%",
      transition: "0.25s",
      "&:focus": {
        inset: "-3.5rem 0 0 0 var(--hover)",
        inset: "3.5rem 0 0 0 var(--hover)",
      },
      "&:hover": {
        backgroundPosition: "left bottom",
        color: "white",
      },
    },
    secondary: {
      padding: "25px",
      margin: "10px",
      ml: "20px",
      background: "linear-gradient(to right, #040405 50%, #191A1A 50%)",
      color: "white",
      transition: "all .5s ease-out",
      borderRadius: "none",
      fontSize: ["15px", null, "20px", "25px"],
      backgroundPosition: " right bottom",
      backgroundSize: "200% 100%",
      transition: "0.25s",
      "&:focus": {
        inset: "-3.5rem 0 0 0 var(--hover)",
        inset: "3.5rem 0 0 0 var(--hover)",
      },
      "&:hover": {
        backgroundPosition: "left bottom",
        color: "white",
      },
    },
  },
};

export default ProjectBanner;
