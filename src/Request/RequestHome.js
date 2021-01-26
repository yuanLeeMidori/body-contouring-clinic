import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../resources/searchIcon.png';
import ListAllRequest from './ListAllRequest';
import SideBar from '../SideBar/SideBar';
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
        return (
            <div class="row">
                <SideBar items={this.state.items}/>
                <div class="col-md-7">
                    <h1 className="PageTitle">View All Request</h1>
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
                        </form>
                        <ListAllRequest />
                        <button type="button"><a href="/Request/Create">CREATE</a></button>
                        <button type="button"><a href="/Request/Edit">EDIT</a></button>
                        <button type="button" onClick={this.showModal}>DELETE</button>
                        <PopUp show={this.state.show}  handleClose={this.hideModal} handleDelete={this.deleteReq} text={this.state.children} btn1='CANCEL' btn2='DELETE'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestHome;