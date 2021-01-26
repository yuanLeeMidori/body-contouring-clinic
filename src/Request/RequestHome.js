import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../resources/searchIcon.png';
import ListAllRequest from './ListAllRequest';
import SideBar from '../SideBar/SideBar';
import { Button, Container, Row, Col } from 'react-bootstrap';
import PopUp from '../PopUp';


class RequestHome extends React.Component {

    constructor() {
        super();
        this.state = {
          show: false,
          items : [
                {url:'/Request/', title: 'View All Request'},
                {url:'/Request/Create', title: 'Create Request'},
                {url:'/Request/', title: 'FAQ'},
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
        const button = {
            'font-size': 'large',
            'font-weight': 'bold',
            color: 'gray',
            margin: '30px',
        };

        return (
            <div className="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div class="col-md-8">
                    <h2 className="PageTitle">View All Request</h2><br/>
                    <div className="contents">
                        <form action="/Request/"  method ="get" className="searchBar">
                            <select name="" id="">
                                <option value="30">Last 30 Days</option>
                                <option value="60">Last 60 Days</option>
                                <option value="90">Last 90 Days</option>
                                <option value="120">Last 120 Days</option>
                            </select>   
                            <input type="date" />
                            <select name="" id="">
                                <option value="title">Title</option>
                                <option value="content">Category</option>
                                <option value="author">Service</option>
                            </select>  
                            <input type="text" placeholder="Search.." />
                            <button type="submit"><img src={searchIcon} alt="Search"/></button>
                        </form><br/>
                        <ListAllRequest />
                        <Container style={button}>
                            <Row>
                                <Col><a style={button} href='/Request/Create'>CREATE</a></Col>
                                <Col><a style={button} href='/Request/Edit'>EDIT</a></Col>
                                <Col><a style={button} href='/Request/' onClick={this.showModal}>DELETE</a></Col>
                            </Row>
                        </Container> 
                    </div>
                </div>
                <PopUp show={this.state.show}  handleClose={this.hideModal} handleDelete={this.deleteReq} text={this.state.children} btn1='CANCEL' btn2='DELETE'/>
            </div>
        );
    }
}

export default RequestHome;