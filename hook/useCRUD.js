// import { useState } from 'react';
// const List =[{
//     id:1,
//     name:samsung,
//     img:"",
//     price:222.00
// }]
// function useCrud(initialData = List) {
//   const [data, setData] = useState(initialData);

//   const createItem = (item) => {
//     setData([...data, item]);
//   };

//   const readItem = (id) => {
//     return data.find((item) => item.id === id);
//   };

//   const updateItem = (id, updatedItem) => {
//     setData((prevData) =>
//       prevData.map((item) => (item.id === id ? updatedItem : item))
//     );
//   };

//   const deleteItem = (id) => {
//     setData((prevData) => prevData.filter((item) => item.id !== id));
//   };

//   return {
//     data,
//     createItem,
//     readItem,
//     updateItem,
//     deleteItem,
//   };
// }

// export default useCrud;

const useCrud=()=>{
 const useCrud=useSelectior((state)=>state.data);

 const handleAddItem=(item)=>{
  
 }
 const handleRemoveItem=(item)=>{

 }
 return{useCrud};
}

export default useCrud;

