import React,{Component} from "react";
import {Nav} from "react-bootstrap";



export class SecondryNav extends Component{

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <React.Fragment>



                <Nav fill variant="tabs" defaultActiveKey="/home">
                    <Nav.Item className="sec_nav_item">
                        <Nav.Link href="/shippingfree">Shipping free</Nav.Link>
                    </Nav.Item >
                    <Nav.Item className="sec_nav_item">
                        <Nav.Link href="/recent">Recent</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="sec_nav_item">
                        <Nav.Link href="/toppicks">Top picks</Nav.Link>
                    </Nav.Item>

                </Nav>
            </React.Fragment>);
    }


}

