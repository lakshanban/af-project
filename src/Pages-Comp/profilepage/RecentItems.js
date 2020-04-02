import React from "react";
import {Container, GridList, LinearProgress} from "@material-ui/core";
import {GridListTile,GridListTileBar} from "@material-ui/core";
import {Skeleton} from '@material-ui/lab'
import Tshirt1 from './src/tshirt1.jfif'
import './style.css'


export function RecentItems(props) {


    return  <div >

        <h4 className='gridTitle'> recently viewed Items</h4>

        <Container style={{background:'',marginTop:20}}>

            <GridList cols={4}>

                <GridListTile className='gridTile'>

                    <img src={Tshirt1}/>
                    <GridListTileBar title='Lakshan Bandara'>

                    </GridListTileBar>


                </GridListTile>


                <GridListTile className='gridTile'>

                    <img src={Tshirt1}/>
                    <GridListTileBar title='Lakshan Bandara'>

                    </GridListTileBar>


                </GridListTile>

                <GridListTile className='gridTile'>

                    <Skeleton variant="rect" width={400} height={300} />
                    <GridListTileBar title='Lakshan Bandara'>

                    </GridListTileBar>


                </GridListTile>



            </GridList>


        </Container>

      <div style={{marginTop:30}}>
        <LinearProgress variant="query" />
        <LinearProgress variant="query" color="secondary" />
      </div>

    </div>


}
