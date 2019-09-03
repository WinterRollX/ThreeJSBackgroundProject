import React, {Fragment,useState,useEffect} from 'react';
import {Dropdown, Grid, Button} from "semantic-ui-react";
import './App.css';
import DevidedDropDown from "./components/devidedDropdown";
import { promises } from 'fs';


function App() {
  const masterData={
    Active:[{
      name:"test name 1",
      id:0,
    },{
      name:"test name 2",
      id:1,
    },{
      name:"test name 3",
      id:2,
    }],
    Other:[{
      name:"test name 4",
      id:3,
    },{
      name:"test name 5",
      id:4,
    },{
      name:"test name 6",
      id:5,
    }]
  };

  async function getDataFromServer() {
    console.log("start query server");
    let resultData = await new Promise((resovle,rejcet)=>{
      setTimeout(()=>{
        resovle({dummyData:"test data"});
      },2000);
    }).then((res)=>{
      console.log("res = ",res);
    }).catch(errorHandler);

  }

  function errorHandler(error) {
    alert("Some thing goes wrong!");
  }
  
  
  return (
    <Fragment>
      <div className = "app-container">
        <div>start of a test content</div>
        <Grid>
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Button color="olive" inverted onClick = {getDataFromServer}>Click me to show the data</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    
    </Fragment>

  );
}


export default App;
