import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
//import "../src/assests/Login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/reducers/userReducer";

export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Username: "",
    Password: "",
    cust_Id: "",
  });

  const dispatch = useDispatch();
  const Uobj = useSelector((state) => {
    return state.user;
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const LoginClick = async () => {
    console.log(user);

    try {
      const response = await fetch(
        "http://localhost:8080/api/getbyusername/" + user.Username
      );

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData.customer.cust_Id);
        console.log(responseData.uname);
        console.log(responseData);

        if (
          responseData.uname === user.Username &&
          responseData.pass === user.Password
        ) {
          // alert("Welcome " + user.Username);
          console.log(user.cust_Id);

          dispatch(
            login({
              userName: user.Username,
              cust_Id: responseData.customer.cust_Id,
            })
          );
          navigate("/Profile");
        } else {
          alert("Enter Valid Credentials");
        }
      } else {
        alert("Error fetching data");
        navigate("/Profile");
      }
    } catch (error) {
      alert("Enter Valid Credential");
      console.error("An error occurred:", error);
    }
  };

  const LogOutClick = () => {
    dispatch(logout());
  };

  return (
    <div className='login-container'>
      <MDBContainer
        fluid
        className='d-flex align-items-center justify-content-center bg-image'
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
        }}
      >
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{ maxWidth: "600px" }}>
          <MDBCardBody className='px-5'>
            <h2 className='text-uppercase text-center mb-5'>
              Create an account
            </h2>
            <MDBInput
              wrapperClass='mb-4'
              label='User Name'
              size='lg'
              id='form1'
              type='text'
              name='Username'
              onChange={handleChange}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='PassWord'
              size='lg'
              id='form1'
              type='password'
              name='Password'
              onChange={handleChange}
            />
            <div className='d-flex flex-row justify-content-center mb-4'>
              <MDBCheckbox
                name='flexCheck'
                id='flexCheckDefault'
                label='I agree all statements in Terms of service'
                required
              />
            </div>

            {Uobj.isLoggedIn ? (
              <MDBBtn
                className='mb-4 w-100 gradient-custom-4'
                size='lg'
                onClick={LogOutClick}
              >
                LogOut
              </MDBBtn>
            ) : (
              <MDBBtn
                className='mb-4 w-100 gradient-custom-4'
                size='lg'
                onClick={LoginClick}
              >
                Login
              </MDBBtn>
            )}

            <Link to='/RegisterPage'>new to EMart?</Link>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Login;
