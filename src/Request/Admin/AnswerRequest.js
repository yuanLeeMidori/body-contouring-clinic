import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../../SideBar/SideBar';
import Button from 'react-bootstrap/Button';

class AnswerRequest extends React.Component {

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
                    <h1 className="PageTitle">Request Answer for 01</h1>
                    <div className="contents">
                        <p>
                            <label>Q: How can I join VIP member ship program?   2021/01/11</label> <br/>
                            <div>
                                Hello!<br/>
                                How .... <br/>
                            </div>
                        </p>
                        <br />
                        <p>
                            <label>A: RE: How can I join VIP member ship program?   2021/01/12</label><br/>
                            <textarea placeholder="Answer here">
                            </textarea>
                        </p>
                        <Button type="cancel" variant="light" href="/Request/" size="lg">CANCEL</Button>
                        <Button type="cancel" variant="light" href="/Request/" size="lg">BACK TO LIST</Button>
                        <Button type="submit" variant="light" href="/Request/" size="lg">SAVE</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnswerRequest;
