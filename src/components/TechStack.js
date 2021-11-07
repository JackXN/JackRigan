
import {Box, Text, Flex, List, ListItem, UnorderedList, Image} from '@chakra-ui/react';
import { Icon } from '@iconify/react';


const TechStack = ({project}) => {


  const data = [
    {
      id: 1,
      name: 'React Icon',

      
    }
  ]

return (
    <Box sx={styles.wizard}> 
<Box sx={styles.wizardStep}>
<Box sx={styles.wizardDot}>
  <Box sx={styles.wizardNumber}>
 <Image src={project.iconOne} alt='yo'/>
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px', transform: 'rotate(90deg)'}}/></Box>
  <Box sx={styles.wizardNumber}>
{project.iconTwo}
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px', transform: 'rotate(90deg)'}}/></Box>
  <Box sx={styles.wizardNumber}>
  {project.iconThree}
  </Box>
  <Box sx={styles.wizardConnector}><Icon icon="ci:line-l" vFlip={true} style={{color:'#F06D6A', fontSize: '20px', transform: 'rotate(90deg)'}}/></Box>
  <Box sx={styles.wizardNumber}>
  {project.iconFour}
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