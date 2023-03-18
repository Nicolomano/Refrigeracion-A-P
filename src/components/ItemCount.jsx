import { useState } from "react";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  const [items, setItems] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdded, setItemAdded]= useState(false)


  const sumarCantidad = () => {
    if(items < itemStock) {
      setItems(items + 1);
    }
  };

  const restarCantidad = () => {
    if (items > 1){
      setItems(items - 1);
    }
  };

  const addToCart = () => {
    if(itemStock >= items) {
      setItemStock(itemStock - items);
      setItems(1);
      setItemAdded(true);
      onAdd(items)
    }
  };

  return (
    <>
    {itemAdded ? <Link to={"/cart"}> terminar mi compra </Link> :
      <ButtonGroup size="sm" isAttached variant="outline">
          <IconButton
            variant="solid"
            colorScheme="teal"
            icon={<MinusIcon />}
            onClick={restarCantidad}
          />
        <Center>
          <Button borderRadius="0px" onClick={() => addToCart()} variant="solid" colorScheme="blue"> Add to cart: {items} </Button> 
        </Center>
          <IconButton
          variant="solid"
          colorScheme="teal"
          icon={<AddIcon />}
          onClick={sumarCantidad}
          />
          
      </ButtonGroup>
        }

    </>
  );
};

export default ItemCount;
