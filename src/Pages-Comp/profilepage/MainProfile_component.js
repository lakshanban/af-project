import React,{Component} from 'react';
import {Main_Nav} from "../../Common-Comp/Main_Nav";
import {UpperProfile} from "./UpperProfile";
import './style.css'
import {LowerProfile} from "../../Common-Comp/LowerProfile";
import {RecentItems} from "./RecentItems";
export class MainProfile_component extends Component{

    constructor(props) {
        super(props);
    }




    render() {

        return <div className='mainContainer'>

        <Main_Nav />

        <UpperProfile/>

        <LowerProfile/>

        <RecentItems/>

        </div>


    }


}


