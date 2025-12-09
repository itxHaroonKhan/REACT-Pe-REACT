import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded-lg"
        >
          <Link to={`/products/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-contain mb-3"
            />
          </Link>

          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-sm">
            <span className="font-semibold">Price:</span> ${item.price}
          </p>
          <p className="text-sm">
            <span className="font-semibold">Category:</span> {item.category}
          </p>
          <p className="text-sm text-gray-600 line-clamp-3">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
