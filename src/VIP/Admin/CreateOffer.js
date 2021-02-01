import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../../SideBar/SideBar';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

class CreateOffer extends React.Component {

    constructor() {
        super();
        this.state = {
          show: false,
          items : [
                {url:'/VIP/Admin', title: 'Special Offer'},
                {url:'/VIP/Admin/Manage', title: 'Offer Manage'},
            ],
        };
      }

    render() {

        return (
            <div className="row">
                <div className="col-md-1"></div>
                <SideBar items={this.state.items}/>
                <div className="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">Create New Offer</h2><br/>
                    <Container>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Title:</Form.Label>
                                <Col sm={6}>
                                    <Form.Control type="text" placeholder="Offer Title"></Form.Control>
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
                                <Row >
                                    <Col><Button variant="outline-secondary" href='/VIP/Admin/Manage'>CANCEL</Button></Col>
                                    <Col md="auto"><Button variant="outline-info" href="/VIP/Admin/Manage/Create">SAVE</Button></Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </Container>
                    <br/>
                </div>
            </div>
        );
    }
}

export default CreateOffer;