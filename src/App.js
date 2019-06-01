import React, {Fragment,useState,useEffect} from 'react';
import {Dropdown} from "semantic-ui-react";
import './App.css';
import DevidedDropDown from "./components/devidedDropdown";


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
  
  
  return (
    <Fragment>
    <div>start of a test content</div>
    <DevidedDropDown
    placeholder='Select a introducor'
    fluid
    selection
    masterData = {masterData}
    onChange = {(e,{value})=>{console.log(value);}}
  />
    </Fragment>

  );
}


export default App;
