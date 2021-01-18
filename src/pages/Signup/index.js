import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event)=>{
    if(event.target.name==="username"){
      setName(event.target.value);
    }if (event.target.name==="password"){
      setPassword(event.target.value);
    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, password);
    // setName(document.getElementsByName("username")[0].value);
    // setPassword(document.getElementsByName("password")[0].value);
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange = {handleChange}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange = {handleChange}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {name}</h3>
          <p>
            I probably shouldn't tell you this, but your password is
            {password}!
          </p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
