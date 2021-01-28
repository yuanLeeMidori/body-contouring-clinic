import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../../SideBar/SideBar';
import ListAllOffer from '../ListAllOffer';
import { Link, Switch, Redirect, Route, BrowserRouter } from 'react-router-dom'
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import PopUp from '../../PopUp';

class ManageOffer extends React.Component {

    constructor() {
        super();
        this.state = {
          show: false,
          items : [
                {url:'/VIP/Admin', title: 'Special Offer'},
                {url:'/VIP/Admin/Manage', title: 'Offer Manage'},
            ],
            children:'Offer'
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
            color: 'black',
            'margin-right': '0px',
            'margin-left' :'30px',
            'text-align': 'right',
        };

        const pagination = {
            color: '#B58970',
        };

        return (
            <div className="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div class="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">Monthly Special Offers</h2><br/>
                    <div className="contents">
                        <br/>
                        <table>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Contents</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>01</td>
                                <td>Offer 1</td>
                                <td>Some quick example text to build on the ca...</td>
                                <td><Link to='/VIP/Admin/Manage/Edit' style={{color: 'black'}}>EDIT</Link></td>
                                <td><a style={button} onClick={this.showModal}>DELETE</a></td>
                                <PopUp show={this.state.show} handleClose={this.hideModal} handleDelete={this.deleteReq} text={this.state.children} btn1='CANCEL' btn2='DELETE'/>
                            </tr>
                            <tr>
                                <td><input type="checkbox"/></td>
                                <td>02</td>
                                <td>Offer 2</td>
                                <td>Some quick example text to build on the ca...</td>
                                <td><Link to='/VIP/Admin/Manage/Edit' style={{color: 'black'}}>EDIT</Link></td>
                                <td><a style={button} onClick={this.showModal}>DELETE</a></td>
                                <PopUp show={this.state.show} handleClose={this.hideModal} handleDelete={this.deleteReq} text={this.state.children} btn1='CANCEL' btn2='DELETE'/>
                            </tr>
                        </table>
                        <br/>
                        <span style={pagination}>
                            <a href="#"> &laquo; </a>
                            <a href="#"> 1 </a>
                            <a class="active" href="#"> 2 </a>
                            <a href="#"> 3 </a>
                            <a href="#"> 4 </a>
                            <a href="#"> 5 </a>
                            <a href="#"> 6 </a>
                            <a href="#"> &raquo; </a>   
                        </span>
                        <Container style={button}>
                        	<a href="/VIP/Admin/Manage/Create" style={button}>CREATE</a>  
                        </Container>
                        <br/><br/><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManageOffer;