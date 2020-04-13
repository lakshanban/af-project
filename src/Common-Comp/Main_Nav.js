import React, {Component} from "react";
import {Nav,Navbar, NavbarBrand,NavItem,NavLink,NavDropdown,Form} from "react-bootstrap";
import Styled from 'styled-components';
import {Button} from "react-bootstrap";
import {FormControl} from "react-bootstrap";


const Styles =  Styled.div`

.navbar{
   background-color: #FFF;
}
.navbar-brand{
color: #00ACEE;
&:hover{
color:#00ACEE;}
}
.navbar-nav {
color: ##00ACEE;
&:hover{
color:#00ACEE;}
}
`;

export class Main_Nav extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <Styles>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                    <Navbar.Brand href="#home">B&B</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Products" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">Mens</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Female</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact">Contact</Nav.Link>

                        </Nav>
                        <Nav>
                            <NavDropdown title="more" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">Settings</NavDropdown.Item>

                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">LogOut</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link >Lucky</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

            </Styles>


        );
    }


}