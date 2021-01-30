import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';
import ListAllOffer from './ListAllOffer';

class VIPHome extends React.Component {

    constructor() {
        super();
        this.state = {
          show: false,
          items : [
                {url:'/VIP/', title: 'Special Offer'},
            ],
        };
      }
    
    render() {
        const button = {
            'font-size': 'large',
            'font-weight': 'bold',
            color: 'black',
            'margin-right': '0px',
            'margin-left' :'30px',
            'text-align': 'right',
        };

        return (
            <div className="row">
                <div className="col-md-1"></div> 
                <SideBar items={this.state.items}/>
                <div className="col-md-8" style={{'margin-left':'80px'}}>
                    <h2 className="PageTitle">Monthly Special Offers</h2><br/>
                    <div className="contents">
                        <br/>
                        <ListAllOffer />
                        <br/><br/><br/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default VIPHome;