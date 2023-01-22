import React from "react";
import { useState } from "react";
import { useContext } from "react";
import ProductContext from "../../Context/Product";
import './Filter.css'
const Filter = () => {
  const {product,setTempProd} = useContext(ProductContext);

  const[color,setColor] = useState([]);
  const filterColor = ()=>{
    let filter = [];
    color.forEach((el)=>{
      const arr = product.filter((ele)=>{
        return ele.color === el;
      })
      filter.push(...arr);
      setTempProd(filter);
    })
    if(filter.length===0){
      setTempProd(product);
    }
  }

  const handleColor = (e)=>{
     const {value,checked} = e.target;
     if(checked){
      setColor([...color,value])
     }else{
      setColor(color.filter((ele)=> ele!==value));
     }
     filterColor();
  }
  return (
    <div className="filterSection">
        <p>Color</p>
        <label htmlFor=""><input type="checkbox" onChange={handleColor} value='Red' />Red</label><br />
        <label htmlFor=""><input type="checkbox" onChange={handleColor} value='Blue' />Blue</label><br />
        <label htmlFor=""><input type="checkbox" onChange={handleColor} value='Green' />Green</label><br />
        <p>Gender</p>
        <label htmlFor=""><input type="checkbox" value='Men' />Men</label><br />
        <label htmlFor=""><input type="checkbox" value='Women' />Women</label><br />
        <p>Price</p>
        <label htmlFor=""><input type="checkbox" value='0' />0-Rs250</label><br />
        <label htmlFor=""><input type="checkbox" value='250' />Rs251-450</label><br />
        <label htmlFor=""><input type="checkbox" value='450' />Rs451</label><br />
        <p>Type</p>
        <label htmlFor=""><input type="checkbox" value='Polo' />Polo</label><br />
        <label htmlFor=""><input type="checkbox" value='Hoodie' />Hoodie</label><br />
        <label htmlFor=""><input type="checkbox" value='Basic' />Basic</label><br />
    </div>
  );
};

export default Filter;