import React, {Fragment,useState,useEffect} from 'react';
import {Dropdown} from "semantic-ui-react";
import './App.css';


function App() {
  const masterData={
    active:[{
      name:"test name 1",
      id:0,
    },{
      name:"test name 2",
      id:1,
    },{
      name:"test name 3",
      id:2,
    }],
    other:[{
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

function DevidedDropDown(props) {
  const masterData = props.masterData || [];
  const options = getDropdownOptions(masterData);

  function getDropdownOptions(masterData) {
    const result = [];
    let keyCount = 0;
    const keys = Object.keys(masterData);
    if(keys.length > 0){
      keys.forEach((property,index)=>{
        if(masterData[property] && masterData[property].length > 0){
          result.push(
            { text:property,
              key : keyCount++,
              value : -1,
              disabled : true,
            }
          );
          masterData[property].forEach((item,index)=>{
            let temp = {};
            temp.text = item.name;
            temp.value = item.id;
            temp.key = keyCount ++;
            result.push(temp);
          }); 
        }
      });
    }
    
    return result;
  }

  return (
    <Dropdown
    {...props}
    placeholder={props.placeholder}
    fluid
    selection
    options={options}
    onChange = {props.onChange}
    />
  );
  
}

export default App;
