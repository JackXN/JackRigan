
import {Box, Text, Flex, List, ListItem, UnorderedList, Image} from '@chakra-ui/react';
import { Icon } from '@iconify/react';


const TechStack = ({project}) => {


return (
    <Box sx={styles.wizard}> 
<Box sx={styles.wizardStep}>
<Box sx={styles.wizardDot}>
  <Box sx={styles.wizardNumber}>
 <Image src={project.iconOne} alt={project.title}/>
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px', transform: 'rotate(90deg)'}}/></Box>
  <Box sx={styles.wizardNumber}>
<Image src={project.iconTwo} alt={project.title}/>
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px', transform: 'rotate(90deg)'}}/></Box>
  <Box sx={styles.wizardNumber}>
  <Image src={project.iconThree} alt={project.title}/>
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px', transform: 'rotate(90deg)'}}/></Box>
  <Box sx={styles.wizardNumber}>
  <Image src={project.iconFour} alt={project.title}/>
  </Box>
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
  color: 'white',
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