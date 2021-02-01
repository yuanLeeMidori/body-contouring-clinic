import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PopUp from '../PopUp';

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
            children: 'Request'
          };
          this.showModal = this.showModal.bind(this);
          this.hideModal = this.hideModal.bind(this);
          this.deleteReq = this.deleteReq.bind(this);
      }

    showModal = () => {
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
      };
    
    deleteReq = () => {
        this.setState({ show: false });
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
                                <Container>
                                    <Row >
                                        <Col xs={10}></Col>
                                        <Col xs={1}><Button variant="outline-secondary" href='/Request/Edit'>EDIT</Button></Col>
                                        <Col xs={1}><Button variant="outline-danger" onClick={this.showModal}>DELETE</Button></Col>
                                        <PopUp show={this.state.show} handleClose={this.hideModal} handleDelete={this.deleteReq} text={this.state.children} btn1='CANCEL' btn2='DELETE'/>
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

export default ViewRequest;