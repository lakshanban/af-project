import React,{Component} from "react";
import {Button, Container} from "@material-ui/core";


export function LowerProfile(props){



    return <div>

        <Container className='LowerContainer'>

            <div className='details-div'>
            <h6 className='ProfileLabel'>Username:  Lakshan.9320</h6> <br/>
            </div>

                <div className='details-div'>
                <h6 className='ProfileLabel'>Email Address:  Lakshan.9320</h6>

            </div>

            <div className='details-div'>
                <h6 className='ProfileLabel'>Address: Temple Road RB01 Hingurakgoda</h6>

            </div>

            <div className='details-div'>

                <Button variant='contained' color='primary' >Edit Profile</Button>

            </div>


        </Container>





    </div>
}