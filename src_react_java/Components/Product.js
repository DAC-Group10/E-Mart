import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Product.css'
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";


export function Product(props) {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const [Product, setProduct] = useState([]);
    const { catmasterid } = useParams();
    useEffect(() => {
        fetch("http://localhost:8080/api/productsByCat/" + catmasterid)
            .then(res => res.json())
            .then((result) => { setProduct(result); }
            );
    }, []);

    const Uobj = useSelector((state) => {
        return state.user;
      });
      console.log(Uobj);
    const addtocart = (event, pro) => {
        console.log(pro);
        console.log(Uobj.cust_Id);
        const cart = { "product": {
            "prod_Id": pro.id,
            "prodName": pro.prodName,
            "prodDescription": pro.prodDescription,
            "mrpPrice": pro.mrpPrice,
            "prodImage": pro.prodImage,
            "cardholdersPrice": pro.cardholdersPrice,
            "pointsToBeRedeem": pro.pointsToBeRedeem
        }, "cust_Id": Uobj.cust_Id, "quantity":1 };

        let demo = JSON.stringify(cart);
        fetch("http://localhost:8080/api/addCart", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: demo
        })
        event.preventDefault();
        alert("Product added to cart");
    }


    return (
        <div>
            <div className='catcontainer'>

                {Product.map(pro => (

                    <Card className="procard">
                        <Card.Body>
                        <Card.Img className="img" src={pro.prodImage}></Card.Img>
                        <Card.Title className="title">{pro.prodName}</Card.Title>
                        <Card.Text>{pro.prodDescription}</Card.Text>
                        <Card.Text>
                            <b>MRP:₹{pro.mrpPrice}</b><br/>
                            CardHolders Price:₹{pro.cardholdersPrice}<br/>
                            Points To Be Redeem:{pro.pointsToBeRedeem}
                        </Card.Text>
                        {isLoggedIn ? <Button onClick={(event)=>addtocart(event, pro)}>Add to cart</Button> : <Button href="/Login">Add to cart</Button>}
                        </Card.Body>
                    </Card>

                ))}

            </div>
        </div>
    );
}