
import { useDispatch,useSelector } from "react-redux";
import { addItem } from "../redux/addYouCart/marketStore";
const useCrud=()=>{
 const shop=useSelector((state)=>state.shopping);
  const dispatch =useDispatch()
  
 const handleAddItem=(item)=>{
    dispatch(addItem(item));
 }
 const handleRemoveItem=(item)=>{

 }
 return{shop,handleAddItem,handleRemoveItem};
}

export default useCrud;

