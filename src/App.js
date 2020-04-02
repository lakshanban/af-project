import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestPage} from "./Pages-Comp/TestPage";
import {NotFoundPage} from "./Pages-Comp/NotFoundPage";
import {PageRouter} from "./Router/PageRouter";
import {CustomerLoginPage} from "./Pages-Comp/CustomerLoginPage";
import {MainProfile_component} from "./Pages-Comp/profilepage/MainProfile_component";

function App() {
  return (
    <div className="App">

      <MainProfile_component />



    </div>
  );
}

export default App;
