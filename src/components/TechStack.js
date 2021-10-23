
import {Box, Text, Flex, List, ListItem, UnorderedList} from '@chakra-ui/react';
import { Icon } from '@iconify/react';


const TechStack = () => {

return (
    <Box sx={styles.wizard}> 
<Box sx={styles.wizardStep}>
<Box sx={styles.wizardDot}>
  <Box sx={styles.wizardNumber}>
  <Icon style={{color:'white', fontSize: '35px'}} icon="akar-icons:react-fill"vFlip={true} />
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px'}}/></Box>
  <Box sx={styles.wizardNumber}>
  <Icon style={{color:'white', fontSize: '35px'}} icon="akar-icons:react-fill" vFlip={true} />
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px'}}/></Box>
  
</Box>
</Box>
</Box>
)


}

const styles = {
    wizard: {
        display: 'flex',
  
            },
            wizardStep: {
  
  "&:first-child": {
   backgroundColor: 'transparent',
  },
  
  "&:last-child": {
    backgroundColor: 'transparent',
  }
  
  
            },
      wizardConnector: {
  flex: '1',
  height: '1px',
  // backgroundColor: [null, null, null, '#F06D6A']
      },
  
      wizardNumber: {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.3)',
  borderRadius: '9999px',
  height:'110px',
  width: '110px',
  ml: '4px',
  mr: '4px',
      },
      wizardDot: {
        alignItems:'center',
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
        justifyContent: 'center',
        flexWrap: 'wrap'
      },
}

export default TechStack