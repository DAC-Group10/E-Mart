import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Invoice() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/invoices")
            .then(res => res.json())
            .then((result) => { setInvoices(result); }
          );
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="invoice-title">
                                <h4 className="float-end font-size-15">Invoice List</h4>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-middle table-nowrap table-centered mb-0">
                                    <thead>
                                        <tr>
                                            <th>Invoice ID</th>
                                            <th>Invoice Date</th>
                                            <th>Payable Amount</th>
                                            <th>Tax</th>
                                            <th>Total Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {invoices.map(invoice => (
                                            <tr key={invoice.invoice_Id}>
                                                <td>{invoice.invoice_Id}</td>
                                                <td>{invoice.invDate}</td>
                                                <td>${invoice.payableAmt}</td>
                                                <td>${invoice.tax}</td>
                                                <td>${invoice.totalAmt}</td>
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

export default Invoice;