import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null);

 useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      
  }, [id]);


  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <img
        src={product.image}
        alt={product.title}
        className="w-60 h-60 object-contain mb-4"
      />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="mt-2 font-semibold">Price: ${product.price}</p>
      <p className="text-sm text-gray-600">Category: {product.category}</p>
    </div>
  );
};

export default SingleProduct;
