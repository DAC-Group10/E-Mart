import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";

function ShowInvoice() {
    const [invoices, setInvoices] = useState([]);

    const cust_Id = useSelector((state) => {
        return state.user.cust_Id;
    });

    useEffect(() => {
        fetch("http://localhost:8080/api/getInvoiceBycustId/"+cust_Id)
            .then(res => res.json())
            .then((result) => { setInvoices(result); }
          );
    }, []);

    return (
        
        <div className="container">
            <h1>My Invoices</h1>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="invoice-title">
                            </div>
                            <div className="table-responsive">
                                <table className="table align-middle table-nowrap table-centered mb-0">
                                    <thead>
                                        <tr>
                                            <th>Invoice ID</th>
                                            <th>Invoice Date</th>
                                            <th>Total Amount</th>
                                            <th>Tax</th>
                                            <th>DeliveryCarges</th>
                                            <th>Payable Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoices.map(invoice => (
                                            <tr key={invoice.invoice_Id}>
                                                <td>{invoice.invoice_Id}</td>
                                                <td>{invoice.invDate}</td>
                                                <td>₹{invoice.totalAmt}</td>
                                                <td>₹{invoice.tax}</td>
                                                <td>₹{invoice.deliveryCharge}</td>
                                                <td>₹{invoice.payableAmt}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowInvoice;