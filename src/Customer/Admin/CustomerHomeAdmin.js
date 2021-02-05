import React from 'react';
import SideBar from '../../SideBar/SideBar';
import '../../App.css';
import searchIcon from '../../resources/searchIcon.png';
import { Form, Button, Table } from 'react-bootstrap';

class CustomerHomeAdmin extends React.Component {

    state = {
        items: [
            {url:'/Customer/Admin', title: 'Home'},
        ]
    }
    constructor(prop){
        super(prop)
    }

    render() {
        
        return (
            <div className="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div className="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">Hi, Staff.fullName</h2><hr/>
                    <div className="contents">
                        <Form inline>
                            <Form.Control type="text" placeholder="Search customer" style={{'margin-left':'800px'}}></Form.Control>
                            <Button type="submit" variant="outline-*" style={{'background':'none','margin-left':'5px'}}><img src={searchIcon} alt="Search"/></Button>
                        </Form>
                    </div>
                    <h4 className="PageTitle">Customer List</h4><br/>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Customer Balance</th>
                            <th>Customer Level</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mintae Kim</td>
                            <td>$199</td>
                            <td>Normal</td>
                            <td><a href="/Customer/Admin/Profile">Detail</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Harry Potter</td>
                            <td>$90</td>
                            <td>VIP</td>
                            <td><a href="/Customer/Admin/Profile">Detail</a></td>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}

export default CustomerHomeAdmin