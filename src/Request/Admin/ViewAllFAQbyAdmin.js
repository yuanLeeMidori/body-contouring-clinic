import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../../SideBar/SideBar';
import ViewAllFAQ from '../FAQ/ViewAllFAQ';
import PopUp from '../../PopUp';
import { Button, Container, Row, Col, Card, Nav,Tabs, Tab, TabContent } from 'react-bootstrap';

class ViewAllFAQbyAdmin extends React.Component {

    constructor() {
        super();
        this.state = {
          show : false,
          items : [
            {url:'/Request/Admin', title: 'View All Request'},
            {url:'/Request/Admin/FAQ', title: 'FAQ'},
            ],
            children : 'FAQ'
        };
        this.showFAQ = this.showFAQ.bind(this);
        this.hideFAQ = this.hideFAQ.bind(this);
        this.deleteFAQ = this.deleteFAQ.bind(this);
      }
        
    showFAQ = () => {
        this.setState({ show: true });
      };
    
    hideFAQ = () => {
        this.setState({ show: false });
      };

    deleteFAQ = () => {
        this.setState({ show: false });
    }

    render() {
      const button = {
        'font-size': 'large',
        'font-weight': 'bold',
        color: 'black',
        'margin-right': '40px',
        'text-align': 'right',
    };

        return (
            <div class="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div class="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">FAQ</h2><br/>
                    <ViewAllFAQ />
                    <Container style={button}>
                          	<a href="/Request/Admin/FAQ/Create" style={button}>CREATE</a>  
                            <a style={button} onClick={this.showModal}>DELETE</a>  
                            <PopUp show={this.state.show} handleClose={this.hideModal} handleDelete={this.deleteReq} text={this.state.children} btn1='CANCEL' btn2='DELETE'/>
                    </Container>
                </div>
                <br/><br/>
            </div>
        );
    }
}

export default ViewAllFAQbyAdmin;