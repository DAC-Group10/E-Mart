import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [customers, setCustomers] = useState([]);
  const cust_Id = useSelector((state) => {
    return state.user.cust_Id;
  });
  useEffect(() => {
    fetch("http://localhost:8080/api/getCustomer/" + cust_Id)
      .then((r) => r.json())
      .then((res) => setCustomers(res));
    // Fetch customer data
  }, []); // Add cust_Id as a dependency to rerun the effect when it changes

  const containerStyle = {
    backgroundColor: "#eee",
  };

  const cardStyle = {
    width: "150px",
  };

  const followButtonStyle = {
    marginRight: "1rem",
  };

  const progressStyle = {
    height: "5px",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const LogOutClick = () => {
    dispatch(logout());
    navigate("/Login");
  };

  return (
    <section style={containerStyle}>
      <div className='container py-5'>
        <div className='row'>
          <div className='col'>
            <nav
              aria-label='breadcrumb'
              className='bg-light rounded-3 p-3 mb-4'
            >
              <ol className='breadcrumb mb-0'>
                <li className='breadcrumb-item'>
                  <Link style={{textDecoration:"none"}} to='/Home'>Home</Link>
                </li>
                {/* <li className='breadcrumb-item'>
                  <a href='#'>User</a>
                </li> */}
                <li className='breadcrumb-item active' aria-current='page'>
                  Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-4'>
            <div className='card mb-4'>
              <div className='card-body text-center'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                  alt='avatar'
                  className='rounded-circle img-fluid'
                  style={cardStyle}
                />
                <h5 className='my-3'>{}</h5>
                <p className='text-muted mb-1'>{customers.custName}</p>
                <p className='text-muted mb-4'>{customers.addLine1}, {customers.city}, {customers.pincode}</p>
                <div className='d-flex justify-content-center mb-2'>
                  <button
                    type='button'
                    className='btn btn-primary'
                    
                  >
                    <Link style={{color:"white", textDecoration:"none"}} to='/ShowInvoice'>My Invoices</Link>
                  </button>
                  <button
                    type='button'
                    className='btn btn-outline-primary ms-1'
                    onClick={LogOutClick}
                  >
                    LogOut
                  </button>
                </div>
              </div>
            </div>
            {/* <div className='card mb-4 mb-lg-0'>
              <div className='card-body p-0'>
                <ul className='list-group list-group-flush rounded-3'>
                  <li className='list-group-item d-flex justify-content-between align-items-center p-3'>
                    <i className='fas fa-globe fa-lg text-warning'></i>
                    <p className='mb-0'>https://mdbootstrap.com</p>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center p-3'>
                    <i
                      className='fab fa-github fa-lg'
                      style={{ color: "#333333" }}
                    ></i>
                    <p className='mb-0'>mdbootstrap</p>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center p-3'>
                    <i
                      className='fab fa-twitter fa-lg'
                      style={{ color: "#55acee" }}
                    ></i>
                    <p className='mb-0'>@mdbootstrap</p>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center p-3'>
                    <i
                      className='fab fa-instagram fa-lg'
                      style={{ color: "#ac2bac" }}
                    ></i>
                    <p className='mb-0'>mdbootstrap</p>
                  </li>
                  <li className='list-group-item d-flex justify-content-between align-items-center p-3'>
                    <i
                      className='fab fa-facebook-f fa-lg'
                      style={{ color: "#3b5998" }}
                    ></i>
                    <p className='mb-0'>mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          {/* Add more profile details here */}
          <div className='col-lg-8'>
            <div className='card mb-4'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Full Name</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{customers.custName}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Email</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{customers.email}</p>
                  </div>
                </div>
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Phone</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>{customers.phoneNo}</p>
                  </div>
                </div>
                {/* <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Mobile</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>(098) 765-4321</p>
                  </div>
                </div> */}
                <hr />
                <div className='row'>
                  <div className='col-sm-3'>
                    <p className='mb-0'>Address</p>
                  </div>
                  <div className='col-sm-9'>
                    <p className='text-muted mb-0'>
                    {customers.addLine1}, {customers.addLine2}, {customers.city}, {customers.pincode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;