import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import './Cart.css'

export default function Cart() {
    // const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [hasData, setHasData] = useState(false);
    const [deliveryCharge, setDeliveryCharge] = useState(0);
    const [customer, setCustomer] = useState([]);
    const [redeemPoints, setRedeemPoints] = useState();

    const cust_Id = useSelector((state) => {
        return state.user.cust_Id;
    });

    // fetching cart
    useEffect(() => {
        fetch("http://localhost:8080/api/getCartByCustomer/" + cust_Id)
            .then((res) => res.json())
            .then((result) => {
                if (result.length > 0)
                    setHasData(true);
                else
                    setHasData(false);
                setProducts(result);
                let totalPrice = 0;
                result.forEach((item) => {
                    totalPrice += item.product.mrpPrice * item.quantity;
                });
                setTotal(totalPrice);
                if (totalPrice < 1000)
                    setDeliveryCharge(100);
                console.log(products);
            });

        fetch("http://localhost:8080/api/getCustomer/" + cust_Id)
            .then((res) => res.json())
            .then((result) => {
                setCustomer(result);
                setRedeemPoints(result.redeemPoints)
            });

    }, []);

    console.log(redeemPoints);
    // let delivercharge = total < 1000 && total > 0 ? 100 : 0;

    const navigate = useNavigate();
    const OpenInvoice = () => {

        let c = {
            "cust_Id": cust_Id,
            "custName": customer.custName,
            "phoneNo": customer.phoneNo,
            "email": customer.email,
            "gender": customer.gender,
            "redeemPoints": redeemPoints,
            "addLine1": customer.addLine1,
            "addLine2": customer.addLine2,
            "city": customer.city,
            "pincode": customer.pincode
        }

        let cust = JSON.stringify(c);
        //update customer
        fetch("http://localhost:8080/api/updateCustomer/" + cust_Id, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: cust,
        });

        let x = {
            invDate: new Date(),
            totalAmt: total - total * 10 / 100,
            tax: total * 10 / 100,
            payableAmt: total + deliveryCharge,
            cust_Id: cust_Id,
            deliveryCharge: deliveryCharge
        };
        console.log(new Date());
        let demo = JSON.stringify(x);

        //adding invoice
        fetch("http://localhost:8080/api/addInvoice", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: demo,
        });

        setTimeout(() => {
            navigate("/Invoice");
        }, 1000);
    };

    // ...
    const handleRemove = (itemId) => {
        fetch("http://localhost:8080/api/deleteCart/" + itemId.cart_Id, {
            method: "DELETE",
        })
            .then((res) => {
                if (res.ok) {
                    setProducts((prevProducts) =>
                        prevProducts.filter((item) => item.cart_Id !== itemId.cart_Id)
                    );
                } else {
                    console.error("Failed to delete item from the database.");
                }
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
        let totalPrice = total;
        if (total > 0) {
            setTotal(totalPrice - itemId.product.mrpPrice * itemId.quantity);
        }
        if (total >= 1000) {
            setDeliveryCharge(deliveryCharge - 0);
        }
        if (total <= 0) {
            setDeliveryCharge(deliveryCharge - 0);
        }
        if (total < 1000) {
            setDeliveryCharge(deliveryCharge - 100);
        }
        navigate('/Cart')
    };

    const pointsToManage = (event, item) => {
        let flag = 0;
        console.log(redeemPoints);
        if (event.target.checked) {
            if (redeemPoints >= item.product.pointsToBeRedeem) {
                flag = 1;
                setTotal(total - item.product.pointsToBeRedeem);
                setRedeemPoints(redeemPoints - item.product.pointsToBeRedeem)
            }
            else {
                setTotal(total);
                setRedeemPoints(redeemPoints)
                alert("Insufficient Points");
                event.target.checked = false;
            }
        }
        else {
            if (flag = 1) {
                setTotal(total + item.product.pointsToBeRedeem);
                setRedeemPoints(redeemPoints + item.product.pointsToBeRedeem)
                flag = 0;
            }
        }
    };


    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);

    const increment = (event, item) => {
        console.log(item.product.mrpPrice);
        console.log(item.product.prod_Id);
        console.log(cust_Id);

        fetch(
            `http://localhost:8080/api/updateQuantity/${+1}/${item.product.prod_Id
            }/${cust_Id}`,
            {
                method: "PUT",
            }
        ).then();
        setTotal(total + item.product.mrpPrice);
        event.target.value = 5;

    };

    const decrement = (event, item) => {
        console.log(item.product.mrpPrice);
        console.log(total);
        if (item.quantity > 1) {
            setCount1(count1 - 1);
            setCount2(count2 - 1);
            fetch(
                `http://localhost:8080/api/updateQuantity/${-1}/${item.product.prod_Id
                }/${cust_Id}`,
                {
                    method: "PUT",
                }
            ).then();
            console.log(total - item.product.mrpPrice);
            setTotal(total - item.product.mrpPrice);
        }
        else {
            alert("quantity cannot be 0")
        }

    };

    return (
        <>
            {hasData ?
                <Container className="cart">
                    <h1>Your Cart</h1>
                    {products.map((item) => (
                        <Card key={item.cart_Id} className='mb-3'>
                            <Card.Body>
                                <Row>
                                    <Col md={4}>
                                        <img
                                            src={item.product.prodImage}
                                            alt={item.product.prodName}
                                            className='img-fluid'
                                            style={{ maxWidth: "100px" }}
                                        />
                                    </Col>
                                    <Col md={8}>
                                        <h5>{item.product.prodName}</h5>
                                        <p>Price: ₹{item.product.mrpPrice}</p>
                                        <div>
                                            <Button
                                                variant='secondary'
                                                size='sm'
                                                onClick={(event) => increment(event, item)}
                                            >
                                                +
                                            </Button>
                                            <input
                                                type=''
                                                value={item.quantity}
                                                onChange={(event) => { }}
                                                style={{ width: "40px", textAlign: "center" }}
                                                disabled
                                            />
                                            <Button
                                                variant='secondary'
                                                size='sm'
                                                onClick={(event) => decrement(event, item)}
                                            >
                                                -
                                            </Button>
                                        </div>
                                        <input
                                            type='checkbox'
                                            id='scales'
                                            name='scales'
                                            onChange={(event) => pointsToManage(event, item)}
                                        />
                                        <label for='scales'>
                                            cardholdersPrice: {item.product.cardholdersPrice} -{" "}
                                            {item.product.pointsToBeRedeem}<br />
                                        </label>
                                        <br></br>
                                        <Button
                                            variant='danger'
                                            size='sm'
                                            onClick={() => handleRemove(item)}
                                        >
                                            Remove
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    ))}
                    <div className='text-right'>
                        <h4>DeliveryCarges:₹ {deliveryCharge} </h4>
                        <h4>Total:₹ {total} </h4>

                        <Button variant='outline-info' onClick={OpenInvoice}>
                            Checkout
                        </Button>

                    </div>
                </Container> : <div className="empty"><h1>*Cart is Empty*</h1></div>}
        </>
    );
}
