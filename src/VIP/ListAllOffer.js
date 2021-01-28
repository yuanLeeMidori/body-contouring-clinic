import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import offer from '../resources/offer_1.png';
import { Button, Container, Row, Col, Card, Image, CardGroup, CardColumns } from 'react-bootstrap';


class ListAllOffer extends React.Component {

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
            <div>
                <CardColumns>
                    <Card>
                        <Card.Img variant="top" src={offer} />
                        <Card.Body>
                            <Card.Title>Offer1</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="outline-secondary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={offer} />
                        <Card.Body>
                            <Card.Title>Offer2</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="outline-secondary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={offer} />
                        <Card.Body>
                            <Card.Title>Offer3</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="outline-secondary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={offer} />
                        <Card.Body>
                            <Card.Title>Offer4</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="outline-secondary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={offer} />
                        <Card.Body>
                            <Card.Title>Offer5</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="outline-secondary">Book</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={offer} />
                        <Card.Body>
                            <Card.Title>Offer6</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="outline-secondary">Book</Button>
                        </Card.Body>
                    </Card>
                </CardColumns>
                </div>
        );
    }
}

export default ListAllOffer;