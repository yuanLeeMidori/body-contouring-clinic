import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../../resources/searchIcon.png';
import ListAllRequestbyAdmin from './ListAllRequestbyAdmin';
import SideBar from '../../SideBar/SideBar';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
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
        const button = {
            'font-size': 'large',
            'font-weight': 'bold',
            color: 'black',
            'margin-right': '0px',
            'margin-left' :'30px',
            'text-align': 'right',
        };

        return (
            <div className="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div class="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">View All Request</h2><br/>
                    <div className="contents">
                        <Form inline>
                            <Form.Control as="select">
                                <option value="30">Last 30 Days</option>
                                <option value="60">Last 60 Days</option>
                                <option value="90">Last 90 Days</option>
                                <option value="120">Last 120 Days</option>
                            </Form.Control>
                            <Form.Control type='date' style={{'margin-left':'30px'}}/>
                            <Form.Control as="select" style={{'margin-left':'30px'}}>
                                <option value="title">Title</option>
                                <option value="content">Category</option>
                                <option value="author">Service</option>
                            </Form.Control>
                            <Form.Control type="text" placeholder="Search.." style={{'margin-left':'30px'}}></Form.Control>
                            <Button type="submit" variant="outline-*" style={{'background':'none','margin-left':'5px'}}><img src={searchIcon} alt="Search"/></Button>
                        </Form>
                        <br/>
                        <ListAllRequestbyAdmin />
                        <Container style={button}>
                        	<a href="/Request/Admin/Answer" style={button}>ANSWER</a>  
                            <a style={button} onClick={this.showModal}>DELETE</a>  
                            <PopUp show={this.state.show} handleClose={this.hideModal} handleDelete={this.deleteReq} text={this.state.children} btn1='CANCEL' btn2='DELETE'/>
                        </Container>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestHomebyAdmin;