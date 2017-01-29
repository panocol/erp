import React, {Component} from 'react';
import {Grid, Navbar, Nav, NavItem, PageHeader, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';

class Header extends Component {

  constructor() {
    super();

    this.state = {
      activeKey: '/'
    }
  }


  handleKey(activeKey) {
    this.setState({activeKey});
    this.props.router.replace(activeKey);
  }


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
            <Nav bsStyle="tabs" activeKey={this.state.activeKey} onSelect={(key) => this.handleKey(key)} justified>
              <NavItem eventKey="/">Home</NavItem>
              <NavItem eventKey="/setup">Setup</NavItem>
              <NavItem eventKey="/upload">Upload Documents</NavItem>
              <NavItem eventKey="/estimate">Rebate Estimate</NavItem>
              <NavItem eventKey="/confirmation">Rebate Confirmation</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

    );
  }

}

export default Header;
