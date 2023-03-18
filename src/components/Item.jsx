import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={item.img} width={"400px"} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>
                <Text>Categoria: {item.category}</Text>
                <Text>Precio: {item.price}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Link to={`/item/${item.id}`}>
                  <Button variant="solid" colorScheme="blue">
                  
                    Detalles
                  </Button>
                </Link>
              </Center>
            </CardFooter>
          </Card>
        </Center>
    </div>
  );
};

export default Item;
