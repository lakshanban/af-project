import React,{Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";


export class Signup_two extends Component{

    render(){

        const {handleChange,backPage, values} =this.props;

        return (
            <div className="themeprovider">
            <MuiThemeProvider>
                <React.Fragment className="fragment">

                    <AppBar title="Cutomer Login"  />
                    <br />

                    <div className='containerLogin'>

                    <TextField
                        hintText="Enter Password"
                        floatingLabelText="Password"
                        onChange={handleChange('password')}
                        defaultValue={values.email}
                    type="password"/>

                    <br />

                    <TextField
                        hintText="Re enter  Password"
                        floatingLabelText="confirm Password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    type="password"/>

                    <br />

                        <RaisedButton
                            label="signup"
                            primary={true}
                            style={styles}
                        />


                        <RaisedButton
                        label="back"
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