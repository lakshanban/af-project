import React,{Component} from "react";
import {HomePage} from "../Pages-Comp/HomePage";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {ContactsPage} from "../Pages-Comp/ContactsPage";
import {SettingsPage} from "../Pages-Comp/SettingsPage";
import {PaymentPage} from "../Pages-Comp/PaymentPage";
import {NotFoundPage} from "../Pages-Comp/NotFoundPage";


export class PageRouter extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>

                <Switch>

                    <Route exact path="/" component={HomePage}/>

                    <Route path="/contact" component={ContactsPage} />
                    <Route exact path="/settings" component={SettingsPage}/>
                    <Route path="/payment" component={PaymentPage} />


                    <Route component={NotFoundPage} />

                </Switch>









            </Router>

        );
    }
}
