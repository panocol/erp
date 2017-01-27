import React, { Component } from 'react';
import {Grid, Navbar, Nav, NavItem, Row, Col, Jumbotron, Button} from 'react-bootstrap';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Navbar inverse staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        ERP
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem>Sign In</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Navbar staticTop>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav bsStyle="tabs" justified>
                        <NavItem>Home</NavItem>
                        <NavItem>Setup</NavItem>
                        <NavItem>Upload Documents</NavItem>
                        <NavItem>Rebate Estimate</NavItem>
                        <NavItem>Rebate Confirmation</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
  }
}

export default App;
