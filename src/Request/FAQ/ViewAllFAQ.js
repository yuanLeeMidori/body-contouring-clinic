import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../../resources/searchIcon.png';
import SideBar from '../../SideBar/SideBar';
import ViewFAQ from './ViewFAQ';
import { Button, Container, Row, Col, Card, Nav,Tabs, Tab, TabContent } from 'react-bootstrap';

class ViewAllFAQ extends React.Component {

    constructor() {
        super();
        this.state = {
          show : false,
          items : [
                {url:'/Request/', title: 'View All Request'},
                {url:'/Request/Create', title: 'Create Request'},
                {url:'/Request/FAQ', title: 'FAQ'},
            ],
        };
        this.showFAQ = this.showFAQ.bind(this);
        this.hideFAQ = this.hideFAQ.bind(this);
      }
        
    showFAQ = () => {
        this.setState({ show: true });
      };
    
    hideFAQ = () => {
        this.setState({ show: false });
      };

    render() {

        return (
            <div class="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div class="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">FAQ</h2><br/>
                    <div className="contents" style={{'text-align':'left','margin-right':'280px'}}>
                        <Container>
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={this.state.key}
                                onSelect={key => this.setState({ key })}
                            >
                                <Tab eventKey="shipping" title="Shipping" style={{color:'#393F44', 'margin-top':'10px'}}>
                                    <Card.Text onClick={this.showFAQ}>What are the shipping fee and delivery timeline?</Card.Text>
                                    <Card.Text onClick={this.showFAQ}>What does in-stock, backordered and made-to-order mean?</Card.Text>
                                    <Card.Text onClick={this.showFAQ}>What is the last date to place an order to receive by Dec 24th?</Card.Text>
                                </Tab>
                                <Tab eventKey="myOrder" title="My Order" style={{color:'#393F44', 'margin-top':'10px'}}>
                                    <Card.Text onClick={this.showFAQ}>What are the shipping fee and delivery timeline?</Card.Text>
                                    <Card.Text onClick={this.showFAQ}>What does in-stock, backordered and made-to-order mean?</Card.Text>
                                    <Card.Text onClick={this.showFAQ}>What is the last date to place an order to receive by Dec 24th?</Card.Text>
                                </Tab>
                                <Tab eventKey="payment" title="Payment"  style={{color:'#393F44', 'margin-top':'10px'}}>
                                    <Card.Text onClick={this.showFAQ}>How do I find my order number?</Card.Text>
                                    <Card.Text>Can I cancel my order?</Card.Text>
                                    <Card.Text>Can I update my order?</Card.Text>
                                    <Card.Text>Can I change my address?</Card.Text>
                                </Tab>
                                <Tab eventKey="returns" title="Returns"  style={{color:'#393F44', 'margin-top':'10px'}}>
                                    <Card.Text onClick={this.showFAQ}>How do I find my order number?</Card.Text>
                                    <Card.Text>Can I cancel my order?</Card.Text>
                                    <Card.Text>Can I update my order?</Card.Text>
                                    <Card.Text>Can I change my address?</Card.Text>
                                </Tab>
                            </Tabs>
                        </Container>
                        <ViewFAQ show={this.state.show} handleClose={this.hideFAQ} />
                        <br/><br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAllFAQ