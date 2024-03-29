import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true)
  const {id} = useParams()

  useEffect(()=>{
    const db = getFirestore();
    const document= doc(db, "productos", id);
    getDoc(document).then(element=>{
        setItem({id:element.id, ...element.data()});
      });
      setLoading(false)
    },[id]);
    

  return (
    loading ? <Loading/> : <ItemDetail item={item} />
    
  )
  }
export default ItemDetailContainer;
