import { Button, 
  Card, 
  CardBody, 
  CardFooter, 
  Center, 
  Divider, 
  Heading, 
  Image, 
  Stack, 
  Text } from '@chakra-ui/react'
import React from 'react'
import { Link} from 'react-router-dom'

const Item = ({id, name, price, category, img}) => {
  return (
    <div>
     <div key={id}>
      <Center p="1rem">
        <Card className="card-main">
          <CardBody>
           <Image borderRadius="lg" src={img}/>
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>
              <Text>Categoria: {category}</Text>
              <Text>Precio: {price}</Text>
            </Stack>         
          </CardBody> 
          <Divider/>
          <CardFooter className="card-footer">
            <Center className="btn-center">
              <Link to={`/item/${id}`}>
              <Button variant="solid" colorScheme="grey"> Detalles </Button>
              </Link>
            </Center>
          </CardFooter>   
        </Card>
      </Center>
     </div>
    </div>
  )
}

export default Item