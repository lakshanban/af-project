import React,{Component} from "react";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {MdGpsFixed, MdLocalPhone, MdEmail, GiWorld} from "react-icons/all";
import GoogleMapReact from 'google-map-react';
import {Main_Nav} from "../Common-Comp/Main_Nav";
import {SecondryNav} from "../Common-Comp/Secondry-Nav";

const AnyReactComponent = ({ text }) => <div>{text}</div>;


export class ContactsPage extends Component {

    constructor(props) {
        super(props);
    }
    static defaultProps = {
        center: {
            lat: 6.912339,
            lng: 79.850238
        },
        zoom: 11
    };

    render() {
        return (
            <React.Fragment>
                <Main_Nav/>
                <Container style={{marginTop:'10px', marginBottom:'10px'}}>

                    <Row>
                        <Col>
                            <Card bg={"light"} style={{ width: '25rem' }}>
                                <Card.Body>
                                    <Card.Title><h3>Let's get in touch</h3></Card.Title>
                                    <br/>
                                    <Card.Subtitle>We're open for any suggestion or just to have a chat</Card.Subtitle>
                                    <br/><br/>
                                    <Container>
                                        <Card.Text><MdGpsFixed size={25}/><b> Address: </b>No 123, Kollupitiya, Sri Lanka.</Card.Text>
                                        <br/>
                                        <Card.Text><MdLocalPhone size={25}/><b> Phone: </b>0112223344</Card.Text>
                                        <br/>
                                        <Card.Text><MdEmail size={25}/><b> Email: </b>bandbfashions@bandb.lk</Card.Text>
                                        <br/>
                                        <Card.Text><GiWorld size={25}/><b> Web Site: </b>bandbfashions.lk</Card.Text>
                                        <br/>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '42rem' }}>
                                <Card.Body>
                                    <Card.Title><h3>Get in touch</h3></Card.Title>

                                    <Form>
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" placeholder="Your Name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Email" />
                                            </Form.Group>
                                        </Form.Row>

                                        <Form.Group controlId="formGridSubject">
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control placeholder="Subject" />
                                        </Form.Group>

                                        <Form.Group controlId="formGridMessage">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows="4" placeholder="Your Message" />
                                        </Form.Group>

                                        <Button variant="success" type="submit">Send Message</Button>
                                    </Form>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <div style={{ height: '50vh', width: '100%' }}>
                                <GoogleMapReact
                                    // bootstrapURLKeys={{ key:'' }}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}
                                >
                                </GoogleMapReact>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <SecondryNav/>
            </React.Fragment>

        );
    }
}