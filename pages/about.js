import Header from '../src/components/Header/Header';
import {Box, StylesProvider, Text} from '@chakra-ui/react';
import Image from 'next/image'
import Portrait from '../public/portrait.jpeg'

function about () {
    return (
        <>
      <Header/>
<Box sx={styles.container}>
<Box sx={styles.left}>
<Text as='h1'>Jack Rigan Is A Web Developer And Designer</Text>
</Box>
<Box sx={styles.right}>
  
</Box>


</Box>
        </>
    )
}


const styles = {
container: {
height: '100%',
display: 'flex',
flexDirection: 'row'
},
right:{
  height: '100px',
}
}

export default about