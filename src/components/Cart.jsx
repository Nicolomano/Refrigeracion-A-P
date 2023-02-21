import { Box, Button, FormControl, FormLabel, Input} from '@chakra-ui/react'
import React from 'react'




const Cart = () => {
  return (
    <Box>
    <FormControl isRequired>
  <FormLabel>Ingrese su nombre</FormLabel>
  <Input placeholder='nombre' />
</FormControl>
<FormControl>
  <FormLabel>Introduzca su mail</FormLabel>
  <Input type='email' placeholder='email'/>
</FormControl>
    <Button>
        click para terminar su compra
    </Button>
    </Box>
  )
}

export default Cart