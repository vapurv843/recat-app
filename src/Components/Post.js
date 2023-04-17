import React, { Component } from "react";
import { useState } from "react";
import axios from "axios";

import { Form, Button, Row, Container } from "react-bootstrap";
//const [isSubmitted, setIsSubmitted] = useState(false);
class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelInfo: "",
      panelName: "",
      userName: "",
      contactNo: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    //setIsSubmitted(true);
    console.log(this.state);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)

      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { panelInfo, panelName, userName, contactNo } = this.state;

    return (
      <Container className="text-left">
        <Form className="border p-5" onSubmit={this.submitHandler}>
          <h2 className="text-center mb-4">JCI Dynamic Form POC</h2>

          <h2 className="text-left mb-4">Simple Dynamic Form</h2>

          <Row>
            <div class="col-md-12">
              <Form.Group>
                <Form.Label className="text-left">First Panel Info</Form.Label>

                <Form.Control
                  type="text"
                  name="panelInfo"
                  value={panelInfo}
                  onChange={this.changeHandler}
                  placeholder="First Panel Info"
                />

                {/* <div>Your must be 8-20 characters long</div> */}
              </Form.Group>
            </div>
          </Row>

          <Row>
            <div class="col-md-9">
              <Form.Group>
                <Form.Label>Panel Name</Form.Label>

                <Form.Control
                  type="text"
                  name="panelName"
                  value={panelName}
                  onChange={this.changeHandler}
                  placeholder="Enter Panel Name"
                />
              </Form.Group>
            </div>

            <div class="col-md-3">
              <Form.Group>
                <Form.Label>User Name</Form.Label>

                <Form.Control
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={this.changeHandler}
                  placeholder="Enter User Name"
                />
              </Form.Group>
            </div>

            <div class="col-md-3">
              <Form.Group>
                <label>Panel_Type</label>

                <select required>
                  <option selected disabled value="">
                    Automatic
                  </option>

                  <option>Manual</option>
                </select>
              </Form.Group>
            </div>
          </Row>

          <Row>
            <div class="col-md-6">
              <Form.Group>
                <Form.Label>Contact No</Form.Label>

                <Form.Control
                  name="contactNo"
                  value={contactNo}
                  onChange={this.changeHandler}
                  placeholder="Enter your ContactNo"
                />
              </Form.Group>
            </div>
          </Row>

          {/* <div className="d-flex justify-content-end"> */}

          <Row>
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" required />

                <label>Agree to terms and conditions</label>

                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
          </Row>

          <Button
            className="d-flex justify-content-end"
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Post;
