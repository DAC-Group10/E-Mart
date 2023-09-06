import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export function Cart(props) {
    const [total, setTotal] = useState(0);
    const [totalredeem, setTotalredeem] = useState(0);
    const [quantity, setQuantity] = useState(1);
    let navigate = useNavigate();
    const [Cart, setCart] = useState([]);
    const Uobj = useSelector((state) => {
        return state.user;
    });
    useEffect((event) => {
        fetch("http://localhost:8080/api/getCartByCustomer/" + Uobj.cust_Id)
            .then(res => res.json())
            .then((result) => {
                setCart(result);
                let t = 0, r = 0;
                result.forEach(e => {
                    t += e.product.mrpPrice;
                    r += e.product.pointsToBeRedeem
                    setTotal(t);
                    setTotalredeem(r);
                });
            }
            );

    }, []);

    const handleDelete = (event, cartid) => {
        setCart(Cart.filter((item) => item.cartid !== cartid));
        fetch("http://localhost:8080/api/deleteCart/" + cartid, {
            method: 'Delete'
        })
        alert("Item removed!")
        navigate('/Cart');
    }

    const handleInvoice = (event, cart) =>{
        
    }

    const dototal = (e) => {
        if (e.target.checked)
            setTotal(total - totalredeem);
        else
            setTotal(total + totalredeem);
    }


    return (
        <div>
            <div className='cartcontainer'>
                <h2>*Cart*</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Redeem Points</th>
                            {/* <th>Quantity</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {Cart.map(cart => (
                            <tr key={cart.cart_Id}>
                                <td><img src={cart.product.prodImage}></img></td>
                                <td>{cart.product.prodName}</td>
                                <td>₹{cart.product.mrpPrice}</td>
                                <td>{cart.product.pointsToBeRedeem}</td>
                                {/* <td><button name="+" onClick={setquant}>+</button> {quantity} <button name="-" onClick={setquant}>-</button></td> */}
                                <td><Button variant="danger" onClick={(event) => handleDelete(event, cart.cart_Id)}>Remove</Button></td>
                            </tr>

                        ))}
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td>₹{total}</td>
                            <td><input name="rp" type="checkbox" onChange={dototal} />{totalredeem}</td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                {Cart.map(cart => (
                    <Button>Place Order</Button>
                ))}

            </div>
        </div>
    );
}