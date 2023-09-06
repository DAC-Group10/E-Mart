import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import './RegisterPage.css';

export function RegisterPage() {
  const [customer, setCustomer] = useState({});
  const [authentication, setAuthentication] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    setCustomer((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    const registrationData = {
      uname: customer.uname,
      pass: customer.pass,
      customer: {
        custName: customer.cust_Name,
        phoneNo: +customer.phone_No,
        email: customer.email,
        gender: customer.gender,
        redeemPoints: 10000,
        addLine1: customer.addLine1,
        addLine2: customer.addLine2,
        city: customer.city,
        pincode: parseInt(customer.pincode),
      },
    };

    let demo = JSON.stringify(registrationData);
    console.log(demo);

    fetch("http://localhost:8080/api/addAuthentication", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((res) => {
      console.log("ok");
    });

    //console.log(registrationData);
    //console.log(JSON.stringify(registrationData));
    event.preventDefault();
    alert("Registration Successful!");
  };

  return (
    <div className="form">
      <div><h2>*Registration Form*</h2></div>
      <Form onSubmit={handleSubmit}>
        <Row className='mb-3'>
          <Form.Group as={Col} md={7} controlId='formGridusername'>
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Name'
              name='cust_Name'
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md={7} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='eg. example@gmail.com'
              name='email'
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md={3} controlId='formGridusername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='User Name'
              name='uname'
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md={9} controlId='formGridPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              name='pass'
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md={9} controlId='formGridphone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='number'
              placeholder='eg. 9977336622'
              name='phone_No'
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md={9} controlId='formGridGender'>
            <Form.Label>Gender</Form.Label>
            <Form.Select
              defaultValue='Choose...'
              name='gender'
              onChange={handleChange}
            >
              <option>Choose...</option>
              <option value={"M"}>Male</option>
              <option value={"F"}>Female</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className='mb-3' controlId='formGridAddress1'>
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control
              placeholder='1234 Main St'
              name='addLine1'
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className='mb-3' controlId='formGridAddress2'>
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control
              placeholder='Apartment, studio, or floor'
              name='addLine2'
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className='mb-3'>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control placeholder='' name='city' onChange={handleChange} />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId='formGridZip'>
            <Form.Label>Pincode</Form.Label>
            <Form.Control name='pincode' onChange={handleChange} />
          </Form.Group>
        </Row>
        <br/>

        <Button variant='primary' type='submit'>Submit</Button>

      </Form>
    </div>
  );
}
