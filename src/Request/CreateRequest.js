import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

class CreateRequest extends React.Component {

    state = {
        items : [
            {url:'/Request/', title: 'View All Request'},
            {url:'/Request/Create', title: 'Create Request'},
            {url:'/Request/FAQ', title: 'FAQ'},
        ]
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
                    <h2 className="PageTitle">Create New Request</h2><br/>
                    <Container>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Email:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="email" placeholder="example@example.com"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Contact #:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder="437 988 1678"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Category:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="select">
                                        <option value="">MemberShip</option>
                                        <option value="">Shipment</option>
                                        <option value=""></option>  
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Service:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="select">
                                        <option value="">abc</option>
                                        <option value="">def</option>
                                        <option value="">ghi</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>pASSWORD:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="password" placeholder="At least 4 characters"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Title:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder="Request Title"></Form.Control>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Contents:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control as="textarea" rows={3} />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Attach File:</Form.Label>
                                <Form.File/>
                            </Form.Group>
                            <br/><br/>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <a href="/Request/" style={button}>CANCEL</a>
                                    <a href="/Request/" style={button}>BACK TO LIST</a>
                                    <Button type="submit" variant="outline-*" style={button}>SAVE</Button>
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

export default CreateRequest;