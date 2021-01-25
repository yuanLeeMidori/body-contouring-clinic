import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';

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
                        <button type="button">SAVE</button>
                        <button type="button">BACK TO LIST</button>
                        <button type="button">CANCEL</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AnswerRequest;
