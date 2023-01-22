import React from "react";

const ProductCard = ({ ele }) => {
  return (
    <div>
      <div style={{ width: "200px", display: "block", margin: "auto" }}>
        <img width={"100%"} src={ele.imageURL} alt={ele.name} />
      </div>
      <h3>{ele.name}</h3>
      <p>{ele.price}</p>
      <p>{ele.gender}</p>
      <p>{ele.color}</p>
    </div>
  );
};

export default ProductCard;
