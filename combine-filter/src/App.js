import ProductContext from './Context/Product.jsx'
import Product from './Component/ProductPage/Product'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [tempProd,setTempProd] = useState([]);
  const [product,setProduct] = useState([]);
 
  const fetchProduct = async()=>{
    let responce = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
    let data = await responce.json();
    setTempProd(data);
    setProduct(data);
  }
  useEffect(()=>{
    fetchProduct();
  },[])
  return (
    
    <div className="App">
     <ProductContext.Provider value={{tempProd,product,setTempProd,setProduct}}>
        <Product/>
     </ProductContext.Provider>
    </div>
  );
}

export default App;
