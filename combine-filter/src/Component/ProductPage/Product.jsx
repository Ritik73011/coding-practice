import React from "react";
import { useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import ProductContext from "../../Context/Product";
import Filter from "../Filter/Filter";
import "./Product.css";
const Product = () => {
  const { tempProd } = useContext(ProductContext);

  return (
    <div className="productPage">
      <Filter />
      <div style={{width:"100%"}}>
        {tempProd.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "16px",
            }}
          >
            {tempProd.map((ele) => {
              return <ProductCard key={ele.id} ele={ele} />;
            })}
          </div>
        ) : (
          <h3>No Product Found</h3>
        )}
      </div>
    </div>
  );
};

export default Product;
