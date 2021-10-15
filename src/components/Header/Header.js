import React from 'react'
import {Box,Container, Flex,Text, Image} from '@chakra-ui/react';




function Header() {
    return (
       <Box>
            <Image src={'/LogoOne.png'} alt='Header Logo'/>
            <Text as='h1'>Jack Rigan Is A Web Developer & Designer From Norway</Text>
        <Box>
            <ul>
                <li>Portfolio</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
        </Box>
       </Box>
    )
}

export default Header
