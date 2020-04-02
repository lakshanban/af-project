import React,{Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Login} from './Signup-Login/Login'
import {Signup_one} from "./Signup-Login/Signup_one";
import {Signup_two} from "./Signup-Login/Signup_two";






export class CustomerLoginPage extends Component{

    constructor(props) {
        super(props);

        this.state={
            fname:'',
            lname:'',
            email:'',
            password:'',
            contact:'',
            age:'',
            page:1,
            previouspage:''

        }
    }

    nextPage=()=>{

        this.setState({page:this.state.page+1})
    }

    backPage=()=>{


        this.setState({page:this.state.page-1})

    }

    handleChange=input=>e=>{
        this.setState({[input]:e.target.value})
    }





    render() {

        const {page} =this.state;
        const  {fname,lname,email,password,contact} =this.state;
        const values= {fname,lname,email,password,contact}

        switch (this.state.page) {

            case 1:
                return (<Login
                    nextPage={this.nextPage}
                    backPage={this.backPage}
                    handleChange={this.handleChange}
                    values={values}
                />)
            break;

            case 2:
                return (<Signup_one
                    nextPage={this.nextPage}
                    backPage={this.backPage}
                    handleChange={this.handleChange}
                    values={values}
                />)

            break;

            case 3:
                return (<Signup_two
                    nextPage={this.nextPage}
                    backPage={this.backPage}
                    handleChange={this.handleChange}
                    values={values}
                />)
            break;

            default:
                return (<Login
                    nextPage={this.nextPage}
                    backPage={this.backPage}
                    handleChange={this.handleChange}
                    values={values}
                />)
            break;

        }



    }


}