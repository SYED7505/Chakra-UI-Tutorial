import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {
  const boxStyles = {
    bg:'purple.200',
    color:'white',
    my:'30px',
    p:'10px',
    textAlign:'center',
    borderRadius:'10px',
    filter:'blur(2px)',
    ':hover':{
      bg:'orange',
      color:'black',
      filter:'blur(.1px)'
    }
  }
  return (
    <Container my='30px' p='10px' maxWidth='4xl'>
      <Heading my='30px'>Chakra UI Component</Heading>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, quibusdam?</Text>
      <Text color='blue' fontWeight='bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, architecto.</Text>
      
      <Box my='30px' bg='yellow' p='10px'>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nisi.</Text>
      </Box>

      <Box sx={boxStyles}>
        <Text>Hi there !</Text>
      </Box>
    </Container>
  )
}
