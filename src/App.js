import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TestPage} from "./Pages-Comp/TestPage";
import {NotFoundPage} from "./Pages-Comp/NotFoundPage";
import {PageRouter} from "./Router/PageRouter";

function App() {
  return (
    <div className="App">

        <PageRouter />



    </div>
  );
}

export default App;
