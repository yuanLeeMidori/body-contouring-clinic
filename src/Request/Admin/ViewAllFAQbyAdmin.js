import React from 'react';
import '../../App.css';
import SideBar from '../../SideBar/SideBar';
import ViewAllFAQ from '../FAQ/ViewAllFAQ';
import PopUp from '../../PopUp';
import { Container, Button, Row, Col } from 'react-bootstrap';

class ViewAllFAQbyAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      items: [
        { url: '/Request/Admin', title: 'View All Request' },
        { url: '/Request/Admin/FAQ', title: 'FAQ' },
      ],
      children: 'FAQ',
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
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <SideBar items={this.state.items} />
        <div className="col-md-8" style={{ 'margin-left': '80px' }}>
          <h2 className="PageTitle">FAQ</h2>
          <br />
          <ViewAllFAQ />
          <Container>
            <Row>
              <Col xs={8}></Col>
              <Col xs={1}>
                <Button variant="outline-info" href="/Request/Admin/FAQ/Create">
                  Create
                </Button>
              </Col>
              <Col xs={1}>
                <Button variant="outline-secondary" onClick={this.showFAQ}>
                  Delete
                </Button>
              </Col>
              <PopUp
                show={this.state.show}
                handleClose={this.hideFAQ}
                handleDelete={this.deleteFAQ}
                text={this.state.children}
                btn1="Cancel"
                btn2="Delete"
              />
            </Row>
            <br />
            <br />
          </Container>
          <br />
          <br />
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default ViewAllFAQbyAdmin;
