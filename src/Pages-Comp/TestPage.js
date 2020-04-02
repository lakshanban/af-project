import React,{Component} from "react";
import {Main_Nav} from "../Common-Comp/Main_Nav";
import {SecondryNav} from "../Common-Comp/Secondry-Nav";
import {CustomerLoginPage} from "./CustomerLoginPage";

export class TestPage extends Component{

    constructor(props) {
        super(props);
        this.state={email:'', password:''};
    }




    render() {

        return (

            <div  style={styles}>

            <CustomerLoginPage />

            </div>

        );
    }


}

const styles={
    display:'flex',
    justifyContent:'center',
    padding : '50px',
    background:'red'

}