

import React, { useEffect, useState } from "react";
import { resetCount } from "../store/reducers/cartReducer";
import { useSelector } from "react-redux";

export default function Invoice() {
  const [invoices, setInvoices] = useState([]);
  const [carts, setCarts] = useState([]);
  const [customers, setCustomers] = useState([]);


  const cust_Id = useSelector((state) => {
    return state.user.cust_Id;
  });
  useEffect(() => {
    console.log(cust_Id);

    // Fetch data from both endpoints simultaneously
    Promise.all([
      fetch("http://localhost:8080/api/getInvoiceByMaxId").then(
        (r) => r.json()
      ).then(result => setInvoices(result)),
      fetch("http://localhost:8080/api/getCartByCustomer/" + cust_Id).then(
        (res) => res.json()
      ).then(result => setCarts(result)),
      fetch("http://localhost:8080/api/getCustomer/" + cust_Id).then((res) =>
        res.json()
      ).then(result => setCustomers(result)),
    ]).catch((error) => {
      console.error("Error fetching data:", error);
    });

    console.log(invoices);
    console.log(carts.product);
    console.log(carts);
    console.log(customers);

    // //deleting cart
    // fetch("http://localhost:8080/api/deleteCartByCustomer/" + cust_Id, {
    //   method: "DELETE"
    // });
  }, []);

  // let delivercharge = invoices.payableAmt < 1000 ? 100 : 0;
  let count = 0;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              <div className='invoice-title'>
                <h4 className='float-end font-size-15'>
                  Invoice #EM0{invoices.invoice_Id}
                  <span className='badge bg-success font-size-12 ms-2'>
                    Paid
                  </span>
                </h4>
                <div className='mb-4'>
                  <h2 className='mb-1 text-muted'>E_Mart.com</h2>
                </div>
                <h1>Hello {customers.custName}</h1>
                <div className='text-muted'>
                  <p className='mb-1'>{customers.addLine1}, </p>
                  <p className='mb-1'>
                    {customers.addLine2}, {customers.pincode}
                  </p>
                  <p className='mb-1'>
                    <i className='uil uil-envelope-alt me-1'></i>{" "}
                    {customers.email}
                  </p>
                  <p>
                    <i className='uil uil-phone me-1'></i> {customers.phoneNo}
                  </p>
                </div>
              </div>
              <hr className='my-4' />
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='text-muted'>
                    <h5 className='font-size-16 mb-3'>Billed To:</h5>
                    <h5 className='font-size-15 mb-2'>{customers.custName}</h5>
                    <p className='mb-1'>{customers.addLine1}, {customers.addLine2}, {customers.pincode}</p>
                    <p className='mb-1'>{customers.email}</p>
                    <p>{customers.phoneNo}</p>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='text-muted text-sm-end'>
                    <div>
                      <h5 className='font-size-15 mb-1'>Invoice No:</h5>
                      <p>##EM0{invoices.invoice_Id}</p>
                    </div>
                    <div className='mt-4'>
                      <h5 className='font-size-15 mb-1'>Invoice Date:</h5>
                      <p>{invoices.invDate}</p>
                    </div>
                    {/* <div className='mt-4'>
                      <h5 className='font-size-15 mb-1'>Order No:</h5>
                      <p>#1123456</p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className='py-2'>
                <h5 className='font-size-15'>Order Summary</h5>
                <div className='table-responsive'>
                  <table className='table align-middle table-nowrap table-centered mb-0'>
                    <thead>
                      <tr>
                        <th style={{ width: "70px" }}>No.</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Tax</th>
                        <th>Quantity</th>
                        <th className='text-end' style={{ width: "120px" }}>
                          Total
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {carts.map((pro) => (
                        <tr>
                          <th scope='row'>{++count}</th>
                          <td>
                            <div>
                              <h5 className='text-truncate font-size-14 mb-1'>
                                {pro.product.prodName}
                              </h5>
                              <p className='text-muted mb-0'>{pro.product.prodName}</p>
                            </div>
                          </td>
                          <td>₹ {pro.product.mrpPrice - pro.product.mrpPrice * 0.10}</td>
                          <td>₹ {pro.product.mrpPrice * 0.10}</td>
                          <td>{pro.quantity}</td>
                          <td className='text-end'>₹ {pro.product.mrpPrice * pro.quantity}</td>
                        </tr>
                      ))}

                      <tr>
                        <th scope='row' colSpan='4' className='text-end'>
                          Sub Total
                        </th>
                        <td className='text-end'>₹ {invoices.totalAmt + invoices.tax}</td>
                      </tr>
                      <tr>
                        <th
                          scope='row'
                          colSpan='4'
                          className='border-0 text-end'
                        >
                          Discount :
                        </th>
                        <td className='border-0 text-end'>
                          + ₹ 0
                        </td>
                      </tr>
                      <tr>
                        <th
                          scope='row'
                          colSpan='4'
                          className='border-0 text-end'
                        >
                          Delivery Charge :
                        </th>
                        <td className='border-0 text-end'>
                          + ₹ {invoices.deliveryCharge}
                        </td>
                      </tr>
                      {/* <tr>
                        <th
                          scope='row'
                          colSpan='4'
                          className='border-0 text-end'
                        >
                          Tax
                        </th>
                        <td className='border-0 text-end'>$ 12.00</td>
                      </tr> */}
                      <tr>
                        <th
                          scope='row'
                          colSpan='4'
                          className='border-0 text-end'
                        >
                          Total
                        </th>
                        <td className='border-0 text-end'>
                          <h4 className='m-0 fw-semibold'>₹ {invoices.payableAmt}</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='d-print-none mt-4'>
                  <div className='float-end'>
                    <a
                      href='javascript:window.print()'
                      className='btn btn-success me-1'
                    >
                      <i className='fa fa-print'>Print</i>
                    </a>
                    <a href='#' className='btn btn-primary w-md'>
                      Send
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
