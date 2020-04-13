import React, {Component, useState} from "react";
import {Button, ButtonGroup, Card, Carousel, Col, Container, FormControl, Image, InputGroup, Row} from "react-bootstrap";
import {MdShoppingCart, MdFavorite, FiDollarSign} from "react-icons/all";
import {Main_Nav} from "../Common-Comp/Main_Nav";
import {SecondryNav} from "../Common-Comp/Secondry-Nav";


export class ProductDetailsPage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <Main_Nav/>
                <Container style={{marginTop:5, marginBottom:5}}>
                    <Row>
                        <Col>
                            <Card >
                                <ControlledCarousel/>
                                <Container className="text-center" style={{marginBottom:5}}>
                                <Row>
                                    <Col>
                                        <Image width="100" height="110" src="https://mirrormirror.lk/image/cache/catalog/Mens%20Clothing/MC123/3963000551_990353597-560x636.jpg" thumbnail />
                                    </Col>
                                    <Col>
                                        <Image width="100" height="110" src="https://mirrormirror.lk/image/cache/catalog/Mens%20Clothing/MC123/3963000551_990353597-560x636.jpg" thumbnail/>
                                    </Col>
                                    <Col>
                                        <Image width="100" height="110" src="https://mirrormirror.lk/image/cache/catalog/Mens%20Clothing/MC123/3963000551_990353597-560x636.jpg" thumbnail/>
                                    </Col>
                                </Row>
                                </Container>
                            </Card>
                        </Col>
                        <Col>
                            <Card border={"light"}>
                                <Card.Body>
                                    <Card.Header>
                                    <Card.Title>Cool Clothes and Others</Card.Title>
                                    <Card.Title>LKR: 150.50</Card.Title>
                                    </Card.Header>
                                    <Card.Text className="mb-2 text-muted">
                                        <br/>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <br/>

                                    <Card.Subtitle>Availability: <a className="mb-2 text-muted">in stock</a> </Card.Subtitle>
                                    <br/>

                                    <Card.Subtitle>Sizes:</Card.Subtitle>
                                    <ButtonGroup style={{marginTop:2}} aria-label="Basic example">
                                        <Button variant="outline-dark">S</Button>
                                        <Button variant="outline-dark">M</Button>
                                        <Button variant="outline-dark">L</Button>
                                    </ButtonGroup>
                                    <br/><br/>

                                    <Card.Subtitle style={{marginBottom:2}}>Quantity:</Card.Subtitle>
                                    <Row>
                                        <Col lg={3}>
                                            <InputGroup style={{width:120}}>
                                                <InputGroup.Prepend>
                                                    <Button variant="dark">-</Button>
                                                </InputGroup.Prepend>
                                                <FormControl aria-describedby="basic-addon1" placeholder="1" className="text-center" />
                                                <InputGroup.Append>
                                                    <Button variant="dark">+</Button>
                                                </InputGroup.Append>
                                            </InputGroup>
                                        </Col>
                                        <Col>
                                            <Button style={{marginLeft: '5px'}} variant="primary"><MdShoppingCart/> Add to cart</Button>
                                            <Button style={{marginLeft: '5px'}} variant="danger"><MdFavorite/> Add to wishlist</Button>
                                            <Button style={{marginLeft: '5px'}} variant="success"><FiDollarSign />Buy</Button>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col>
                                            <Card.Subtitle>Categories:
                                                <a href="#" className="mb-2 text-muted"> Men,</a>
                                                <a href="#" className="mb-2 text-muted"> Art,</a>
                                                <a href="#" className="mb-2 text-muted"> Superman</a>
                                            </Card.Subtitle>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <SecondryNav/>
            </React.Fragment>

        );
    }
}

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mirrormirror.lk/image/cache/catalog/Mens%20Clothing/MC123/3963000551_990353597-560x636.jpg"
                    height="450"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mirrormirror.lk/image/cache/catalog/Mens%20Clothing/MC123/3963000551_990353597-560x636.jpg"
                    height="450"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://mirrormirror.lk/image/cache/catalog/Mens%20Clothing/MC123/3963000551_990353597-560x636.jpg"
                    height="450"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
