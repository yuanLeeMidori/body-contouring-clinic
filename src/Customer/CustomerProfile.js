import React from "react";
import "../App.css";
import SideBar from "../SideBar/SideBar";
import { Container, Form, Row, Col } from "react-bootstrap";

class CustomerProfile extends React.Component {
  state = {
    items: [
      { url: "/Customer/", title: "Home" },
      { url: "/Customer/Profile", title: "Profile" },
      { url: "/Customer/Edit", title: "Edit Profile" },
      {url:'/Customer/Balance', title: 'Balance'},
    ],
  };
  constructor(prop) {
    super(prop);
  }

  render() {
    return (
        <div className="row">
        <div className="col-md-1"></div>
        <SideBar items={this.state.items}/>
        <div class="col-md-6" style={{'margin-left':'80px'}}>
            <h2 className="PageTitle">Profile</h2><hr/><br/>
            <Container class="col-md-6">
            <Form style={{'fontSize': '20px', 'marginLeft':'80px', 'textAlign' : 'left'}}>
              <Form.Group as={Row}>
                <Form.Label column md={3}>
                  Name: 
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0} >
                      User.FullName
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Email:
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0}>
                      User.Email
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Address:
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0}>
                      User.Address
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Current Balance:
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0}>
                      User.Balance
                  </Form.Label>
                </Col>
              </Form.Group>
              <Form.Group as={Row}>
                <Form.Label column sm={3}>
                  Your level:
                </Form.Label>
                <Col sm={1}>
                  <Form.Label column md={0}>
                      User.level
                  </Form.Label>
                </Col>
              </Form.Group>
            </Form>
          </Container>
            <br/>
        </div>
    </div>
    );
  }
}

export default CustomerProfile;