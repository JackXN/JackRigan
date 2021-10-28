import { Box, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";


const Footer = () => {
    return (
<Box sx={styles.footer}>
<ul style={{display: 'flex'}}>
    <li>riganjack40@gmail.com</li>
    <Box sx={styles.wizardConnector}><Icon icon="ci:dot-01-xs"  style={{fontSize: '20px', }}/></Box>
    <li>Dribble</li>
    <Box sx={styles.wizardConnector}><Icon icon="ci:dot-01-xs"  style={{fontSize: '20px', }}/></Box>
    <li>Twitter</li>
    <Box sx={styles.wizardConnector}><Icon icon="ci:dot-01-xs"  style={{fontSize: '20px', }}/></Box>
    <li>LinkedIn</li>
</ul>
</Box>
    )
}


const styles = {
 
}

export default Footer;