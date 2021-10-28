import Header from '../src/components/Header/Header';
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image'
import Portrait from '../public/portrait.jpeg'

function about () {
    return (
        <>
      <Header/>
     <Box sx={styles.container} style={{background: 'black'}}>
      <Text as='h1' sx={styles.intro}>Jack Rigan is a Full-Stack Web Developer</Text>
      <Image src={Portrait} alt='Picture Of Jack Rigan' style={{height: '100%'}}/>
     </Box>
        </>
    )
}


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  intro: {
    color: 'white',

  }
}

export default about