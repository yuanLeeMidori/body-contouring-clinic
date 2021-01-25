import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import searchIcon from '../resources/searchIcon.png';
import ListAllRequest from './ListAllRequest';
import SideBar from '../SideBar/SideBar';

class RequestHome extends React.Component {

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
                        <button type="button">DELETE</button>
                        <button type="button"><a href="/Request/Edit">EDIT</a></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RequestHome;