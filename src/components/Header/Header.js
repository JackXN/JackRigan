import React from 'react'
import {Box,Container, Flex,Text, Image, StylesProvider} from '@chakra-ui/react';
import Navbar from './Navbar';




function Header() {
    return (
       <>
       <Box sx={styles.container}>
            <Image src={'/LogoOne.png'} alt='Header Logo' sx={styles.headerImg}/>
            <Text as='h1' sx={styles.headerText}>Jack Rigan Is A Web Developer & Designer In Salt Lake City</Text>
            </Box>
           <Navbar/>
     </>
    )
}


const styles = {
    container: {
        display: 'flex',
        flexDirection: ['column'],
        alignItems:'center',
        padding: '20px',
        justifyContent: 'center',
        textAlign:'center'

    },
    headerImg: {
        height: '50px',
        width: '90px',
    },
    headerText: {
        fontSize: '15px',
        mt: '20px',
        fontFamily: 'Quicksand, san-serif',
        fontWeight: '500'

    }
}


export default Header
