import React,{Component} from "react";
import Image from '../Resources/images/404error.jpg'

export class NotFoundPage extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>

             <img src={Image}  className="notfoundimg"/>

            </React.Fragment>

        );
    }
}