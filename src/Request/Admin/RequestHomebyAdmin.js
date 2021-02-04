import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../../resources/searchIcon.png';
import ListAllRequestbyAdmin from './ListAllRequestbyAdmin';
import SideBar from '../../SideBar/SideBar';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import PopUp from '../../PopUp';


class RequestHomebyAdmin extends React.Component {

    constructor() {
        super();
        this.state = {
          show: false,
          items : [
                {url:'/Request/Admin', title: 'View All Request'},
                {url:'/Request/Admin/FAQ', title: 'FAQ'},
            ],
          children: 'Request',
          auth: 'Admin'
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

        return (
            <div className="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div className="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">View All Request</h2><br/>
                    <div className="contents">
                    <Form inline>
                            <Form.Control as="select">
                                <option value="30">Last 30 Days</option>
                                <option value="60">Last 60 Days</option>
                                <option value="90">Last 90 Days</option>
                                <option value="120">Last 120 Days</option>
                            </Form.Control>
                            <Form.Control type='date' style={{'margin-left':'30px','margin-right':'15px'}}/>~<Form.Control type='date' style={{'margin-left':'15px'}}/>
                            <Form.Control as="select" style={{'margin-left':'30px'}}>
                                <option value="title">Customer ID</option>
                                <option value="content">Customer Name</option>
                                <option value="author">Customer Tel</option>
                                <option value="titleContent">Customer Email</option>
                                <option value="req_Id">Request ID</option>
                            </Form.Control>
                            <Form.Control type="text" placeholder="Search.." style={{'margin-left':'30px'}}></Form.Control>
                            <Button type="submit" variant="outline-*" style={{'background':'none','margin-left':'5px'}}><img src={searchIcon} alt="Search"/></Button>
                            <Form.Control as="select" style={{'margin-left':'30px', width: '100px'}}>
                                <option value="title">Unsolved</option>
                                <option value="content">Unread</option>
                                <option value="author">New</option>
                                <option value="titleContent">New Since Last Login</option>
                            </Form.Control>
                    </Form>
                        <br/>
                        <ListAllRequestbyAdmin />
                        <Container>
                            <Row >
                                <Col xs={10}></Col>
                                <Col xs={1}><Button variant="outline-info" href="/Request/Admin/Answer">Answer</Button></Col>
                                <Col xs={1}><Button variant="outline-secondary" onClick={this.showModal}>Delete</Button></Col>
                                <PopUp show={this.state.show} handleClose={this.hideModal} handleDelete={this.deleteReq} text={this.state.children} btn1='Cancel' btn2='Delete'/>
                            </Row>
                        </Container>
                        <br/><br/>
                    </div>
                    <br/><br/>
                </div>
            </div>
        );
    }
}

export default RequestHomebyAdmin;