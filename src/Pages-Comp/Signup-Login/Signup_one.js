import React,{Component} from "react";
import {AvRecentActors} from "material-ui/svg-icons/index.es";
import {AppBar, MuiThemeProvider} from "material-ui";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


export class Signup_one extends Component{



    render(){

        const {handleChange, values, nextPage ,backPage} =this.props;

        return (

            <div className="themeprovider">
            <MuiThemeProvider>
            <React.Fragment>

                <AppBar title="Customer Sign-up"/>
                <div className="containerLogin">
                <TextField
                    hintText="Enter your firstname"
                    floatingLabelText="First name"
                    onChange={handleChange('fname')}
                    defaultValue={values.fname}/>

                <br />

                <TextField
                    hintText="Enter Lastname"
                    floatingLabelText="Last name"
                    onChange={handleChange('lname')}
                    defaultValue={values.lname}/>

                <br />

                <TextField
                    hintText="Enter email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}/>

                <br />

                <TextField
                    hintText="Enter Contact number"
                    floatingLabelText="Contact number"
                    onChange={handleChange('contact')}
                    defaultValue={values.contact}/>

                <br />

                    <RaisedButton
                        label="next"
                        primary={true}
                        style={styles}
                        onClick={this.props.nextPage}

                    />

                <RaisedButton
                    label="Back to Login"
                    primary={false}
                    style={styles}
                    onClick={backPage}
                />


                </div>

            </React.Fragment>

            </MuiThemeProvider>

            </div>
        );
    }



}

const styles={
    margin:15
}