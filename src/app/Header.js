import React, {Component} from 'react';
import {Grid, Navbar, Nav, NavItem, PageHeader, Row, Col} from 'react-bootstrap';

class Header extends Component{
  render() {
    return (
      <div>
        <PageHeader bsClass="App-header">
          <Grid>
            <Row>
              <Col xs={2}>ERP</Col> <Col xs={2} xsOffset={8}>
              <small>Sign in</small>
            </Col>
            </Row>
          </Grid>
        </PageHeader>
        <Navbar staticTop>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav bsStyle="tabs" justified>
              <NavItem active="true">Home</NavItem>
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

export default Header;
