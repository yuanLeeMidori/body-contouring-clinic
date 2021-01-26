import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';
import Button from 'react-bootstrap/Button';

class ViewRequest extends React.Component {

    state = {
            items : [
                {url:'/Request/', title: 'View All Request'},
                {url:'/Request/Create', title: 'Create Request'},
                {url:'/Request/', title: 'FAQ'},
            ]
    }
    
    render() {
        return (
            <div class="row">
                <SideBar items={this.state.items}/>
                <div class="col-md-7">
                    <h1 className="PageTitle">Request Detail</h1>
                    <div className="contents">
                        <p>
                            <label>Q: How can I join VIP member ship program?   2021/01/11</label><br/>
                            <div>
                                Hello!<br/>
                                How .... <br/>
                            </div>
                        </p>
                        <br/>
                        <p>
                            <label>A: RE: How can I join VIP member ship program?   2021/01/12</label><br/>
                            <div>
                                Good Morning!<br/>
                                How .... <br/>
                            </div>
                        </p>
                        <Button variant="light" href="/Request/Edit" size="lg">EDIT</Button>
                        <Button variant="light" href="/Request/" size="lg">BACK TO LIST</Button>
                        <Button variant="light" href="/Request/" size="lg">DELETE</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewRequest;