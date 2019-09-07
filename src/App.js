import React, {Fragment,useState,useEffect,useRef} from 'react';
import {Dropdown, Grid,Table, Checkbox, Button, Icon, Segment, Header} from "semantic-ui-react";
import './App.css';


function App() {
  

  return (
    <Fragment>
      <div className = "app-container" >
        
        <div className="centered">
          <div>
        <Header as="h2" inverted>Winterroll, you are the one who must be the one.</Header>
        <Segment inverted className="table-segment">
        <Table compact celled definition inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Registration Date</Table.HeaderCell>
            <Table.HeaderCell>E-mail address</Table.HeaderCell>
            <Table.HeaderCell>Premium Plan</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox />
            </Table.Cell>
            <Table.Cell>John Lilki</Table.Cell>
            <Table.Cell>September 14, 2013</Table.Cell>
            <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
            <Table.Cell>No</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox  />
            </Table.Cell>
            <Table.Cell>Jamie Harington</Table.Cell>
            <Table.Cell>January 11, 2014</Table.Cell>
            <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell collapsing>
              <Checkbox  />
            </Table.Cell>
            <Table.Cell>Jill Lewis</Table.Cell>
            <Table.Cell>May 11, 2014</Table.Cell>
            <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
              
              <Button size='small'>Approve</Button>
              <Button disabled size='small'>
                Approve All
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </Segment>
        </div>
        </div>
      </div>
    
    </Fragment>

  );
}


export default App;
