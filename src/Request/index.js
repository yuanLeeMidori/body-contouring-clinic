import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import RequestHome from './RequestHome';

class index extends React.Component {
    render() {
        return (
            <div class="row">
                <SideBar />
                <RequestHome />
            </div>
        );
    }
}

export default index;