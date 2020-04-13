import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestPage} from "./Pages-Comp/TestPage";
import {NotFoundPage} from "./Pages-Comp/NotFoundPage";
import {PageRouter} from "./Router/PageRouter";
import {CustomerLoginPage} from "./Pages-Comp/CustomerLoginPage";

import {Main_Nav} from "./Common-Comp/Main_Nav";
import {SecondryNav} from "./Common-Comp/Secondry-Nav";
import {HomePage} from "./Pages-Comp/HomePage";
import {ProductDetailsPage} from "./Pages-Comp/ProductDetailsPage";
import {Login} from "./Pages-Comp/Signup-Login/Login";
import {ContactsPage} from "./Pages-Comp/ContactsPage";

//import {MainProfile_component} from "./Pages-Comp/profilepage/MainProfile_component";

function App() {
  return (
    <div className="App">

      <HomePage/>






    </div>
  );
}

export default App;
