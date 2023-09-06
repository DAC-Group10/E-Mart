import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function AddCart() {

    const [Product, setProduct] = useState({});
    const { proid } = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/api/getProductById/" + proid)
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, {});

    console.log(Product);
    const cart = { "product": Product, "deliveryCharges": 50, "discount": 50, "price": Product.mrpPrice, "quantity": 1, "total": Product.mrpPrice };

    const addtocart = (event) => {
        let demo = JSON.stringify(cart);
        fetch("http://localhost:8080/api/addCart", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        event.preventDefault();
    }

    return (
        alert("Add")
    )

}