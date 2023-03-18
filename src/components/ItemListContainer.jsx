import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Center, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";



const ItemListContainer = () => {
  const[prods, setProd] = useState([])
  const[loading, setLoading] = useState(true)
  const { category, id } = useParams();
  
 useEffect(()=>{
  const db = getFirestore();
  const prodsCollection = collection(db, "productos");
  const filter = category ? query(prodsCollection, where("category", "==", category)) : prodsCollection
  getDocs(filter).then((elements)=>{
    setProd(elements.docs.map((element)=>({id: element.id, ...element.data()
    })));  
    setLoading(false)
  })
 },[category])

  return (
    <div>
      <Center>
        <Heading>
          Catalogo de productos
        </Heading>
      </Center>
      {loading ? <Loading/> : <ItemList prods={prods}/>}
      
    </div>

  );
};

export default ItemListContainer;
