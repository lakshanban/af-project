import React,{Component} from "react";
import {Main_Nav} from "../Common-Comp/Main_Nav";
import {SecondryNav} from "../Common-Comp/Secondry-Nav";

export class TestPage extends Component{

    constructor(props) {
        super(props);
    }


    render() {

        return (

            <div>

                <Main_Nav />
                <SecondryNav />


            </div>

        );
    }


}