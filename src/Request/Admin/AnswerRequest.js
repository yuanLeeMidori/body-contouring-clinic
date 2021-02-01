import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../../SideBar/SideBar';
import { Button, Container, Row, Col,Form } from 'react-bootstrap';

class AnswerRequest extends React.Component {

    state = {
            items : [
                {url:'/Request/Admin', title: 'View All Request'},
                {url:'/Request/Admin/FAQ', title: 'FAQ'},
            ]
    }
    
    render() {
        const reqTitle = {
            'font-size': 'large',
            'font-size': 'large',
            'font-weight': 'bold',
            color: 'black',
        };

        return (
            <div className="row">
                <div className="col-md-1"></div>
                <SideBar items={this.state.items}/>
                <div className="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">Request Answer for 01</h2><br/>
                    <div className="contents" style={{'text-align':'left','margin-right':'250px'}}>
                        <Container>
                            <Form>
                                <Form.Group style={{'background-color':'#F5F9F9'}}>
                                    <Form.Label style={reqTitle}>Q: How can I join VIP member ship program?   2021/01/11</Form.Label>
                                    <Form.Control type="text" placeholder='Hello' readOnly></Form.Control>
                                </Form.Group>
                                <Form.Group style={{'background-color':'#F5F9F9'}}>
                                    <Form.Label style={reqTitle}>A: RE: How can I join VIP member ship program?   2021/01/12</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Container>
                                    <Row >
                                        <Col xs={10}></Col>
                                        <Col xs={1}><Button variant="outline-secondary" href="/Request/Admin/">CANCEL</Button></Col>
                                        <Col xs={1}><Button type="submit" variant="outline-info" >SAVE</Button></Col>
                                    </Row>
                                </Container>
                            </Form>
                        </Container>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnswerRequest;
