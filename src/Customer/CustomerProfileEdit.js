import React from 'react';
import '../App.css';
import SideBar from '../SideBar/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

class CustomerProfileEdit extends React.Component {
    state = {
        items: [
            {url:'/Customer/', title: 'Home'},
            {url:'/Customer/Profile', title: 'Profile'},
            {url:'/Customer/Edit', title: 'Edit Profile'},
            {url:'/Customer/Balance', title: 'Balance'},
        ]
    }
    constructor(prop){
        super(prop)
    }

    render() {
        const button = {
            'font-size': 'large',
            'font-weight': 'bold',
            color: 'black',
            margin: '40px',
            'text-align':'center',
            background: 'none',
        };
        
        return (
            <div className="row">
                <div className="col-md-1"></div>
                <SideBar items={this.state.items}/>
                <div class="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">Edit Profile</h2><br/>
                    <Container>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>First Name:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="email" placeholder="John"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Last Name:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder="Smith"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Password:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="password"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Confirm Password:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="password"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Email Address:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="email" placeholder="example@example.com"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Address:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder="Finch Ave, North York, ON. 1A1 2A2"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Memo:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Col xs={1}></Col>
                                <Col>
                                    <Button variant="outline-info" href="/Customer/">Cancel</Button>&nbsp;
                                    <Button variant="outline-info" href="/Customer/">Back To Home</Button>&nbsp;
                                    <Button type="submit" variant="outline-info">Edit</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Container>
                    <br/><br/><br/>
                </div>
            </div>
        )
    }
}

export default CustomerProfileEdit