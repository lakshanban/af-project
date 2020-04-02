import React,{Component} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar  from 'material-ui/AppBar'
import TextField  from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import './signup.css'
import DownloadIcon from './icon/downlodicon.png'

import {BottomNavigation,BottomNavigationItem} from "material-ui/BottomNavigation";



export class Login extends Component {

    constructor(props) {
        super(props);

        this.state={loginval:true}
    }

loginValidation=()=>{

    if(this.props.email=='' || this.props.password==''){

        this.setState({loginval:'true'})
    }else{

       this.setState({loginval:'false'})
    }

}




    render() {

        const {values, handleChange}= this.props;

        return (
            <div className="themeprovider">

            <MuiThemeProvider  >
                <React.Fragment className="fragment">


                    <BottomNavigation
                        value={'value'}

                    >
                        <BottomNavigationItem label="Recents" icon={<DownloadIcon/>} />
                        <BottomNavigationItem label="Favorites" icon={<DownloadIcon/>} />
                        <BottomNavigationItem label="Nearby"   icon={<DownloadIcon/>} />
                    </BottomNavigation>




                    <AppBar title="Cutomer Login"  />
                    <br />

                    <div className="containerLogin">

                    <TextField
                    hintText="Enter Email or username"
                    floatingLabelText="Email-Username"
                    onChange={handleChange('email')}
                    defaultValue={values.email}/>

                    <br />

                    <TextField
                        hintText="Enter Password"
                        floatingLabelText="Password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}/>

                    <br />

                    <RaisedButton
                        label="Login"
                        primary={true}
                        style={styles}
                        onClick={this.loginValidation}

                    />

                    <RaisedButton
                        label="Signup"
                        primary={false}
                        style={styles}
                        onClick={this.props.nextPage}

                    />


                    </div>


                </React.Fragment>

            </MuiThemeProvider>
            </div>
        )


    }


}

const styles={
    margin:15
}



