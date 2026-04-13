import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Productdetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://amaxvision-production.up.railway.app/product/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);
    if (!product) return <h1>Loading...</h1>;

    return (
      <div>
      <img src={product.image} width="300" />
      <h1>{product.name}</h1>
      <h2>₹{product.price}</h2>
      <p>Brand: {product.brand}</p>
      <p>Material: {product.material}</p>
      <p>Size: {product.size}</p>
    </div>
    )
}

export default Productdetail