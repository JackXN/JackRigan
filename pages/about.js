import Header from '../src/components/Header/Header';
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image'
import Portrait from '../public/simonpan.jpeg'

function about () {
    return (
        <>
      <Header/>
<Box sx={styles.container}>
  <Box sx={styles.text}>
<Text as = 'h1' > Jack Rigan is a full stack web developer</Text>
  </Box> 
  <Box sx={styles.img}>
    <Image src={Portrait} alt='simon pan'/>
  </Box>
</Box>
        </>
    )
}


const styles = {
container: {
height: '100$',
color: 'white',
justifyContent: 'space-between',
display: 'flex',
flexDirection: 'row',
backgroundColor: '#1B1E25',
},
img: {
  
},
text: {
display: ['none', 'none', 'flex'],
textAlign:'center',
justifyContent: 'center',
alignItems: 'center',
fontFamily: "Bebas Neue, cursive",
fontSize: '50px',
ml: '150px'




}
}

export default about