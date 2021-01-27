import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

class ViewRequest extends React.Component {

    constructor() {
        super();
        this.state = {
          show: false,
          items : [
                {url:'/Request/', title: 'View All Request'},
                {url:'/Request/Create', title: 'Create Request'},
                {url:'/Request/FAQ', title: 'FAQ'},
            ],
        };
      }

    render() {
        const button = {
            'font-size': 'large',
            'font-weight': 'bold',
            color: 'black',
            margin: '40px',
            'text-align':'center'
        };

        const reqTitle = {
            'font-size': 'large',
            'font-size': 'large',
            'font-weight': 'bold',
            color: 'black',
        };

        return (
            <div class="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div class="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">Request Detail</h2><br/>
                    <div className="contents" style={{'text-align':'left','margin-right':'250px'}}>
                        <Container>
                            <Form>
                                <Form.Group style={{'background-color':'#F5F9F9'}}>
                                    <Form.Label style={reqTitle}>Q: How can I join VIP member ship program?   2021/01/11</Form.Label>
                                    <Form.Control type="text" placeholder='Hello' readOnly></Form.Control>
                                </Form.Group>
                                <Form.Group style={{'background-color':'#F5F9F9'}}>
                                    <Form.Label style={reqTitle}>A: RE: How can I join VIP member ship program?   2021/01/12</Form.Label>
                                    <Form.Control type="text" placeholder='Good Morning!' readOnly></Form.Control>
                                </Form.Group>
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
            </div>
        );
    }
}

export default ViewRequest;