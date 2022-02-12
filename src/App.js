import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';  
import RenderProductData  from "./renderProductData";



function App() {
  const [productData,setProductData] =  useState(null)  ;        
useState(()=>
{


});





  useEffect (()=>
  {     axios.get("https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0")
 .then((data) =>
{
console.log(data.data);
setProductData(data.data)              
});
                      //fetch("https://api.dotshowroom.in/api/dotk/catalog/getItemsBasicDetailsByStoreId/2490120?category_type=0")
//                       .then ((data)=>
// {

//  return data.json();
// }).then((data)=>      
// {
//   console.log(data)
// }              );
  





},[]);
  return (
    <div className="App">
     
       <h1>Hello</h1>

       {productData && <      RenderProductData data={productData.store_items}/>  }
     
     
    </div>                                  
  );
}

export default App;
