import React, {Fragment,useState,useEffect} from 'react';
import {Dropdown} from "semantic-ui-react";

export default function DevidedDropDown(props) {
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