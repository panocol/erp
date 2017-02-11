import React, {Component} from 'react';
import {Jumbotron, Grid, Navbar, Nav, NavItem, PageHeader, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';


class Header extends Component {

  handleTab(activeKey) {
    this.props.router.replace(activeKey);
  }

  render() {
    return (
      <div>

        <h2 className="App-header">
          <Grid>
            <Row>
              <Col xs={2}>E<small>nergy</small>R<small>ebate</small>P<small>roducts</small></Col> <Col xs={2} xsOffset={8}>
              <small><Link to="/login"> Sign in</Link></small>
            </Col>
            </Row>
          </Grid>
        </h2>

        <Navbar staticTop>
          <Navbar.Toggle/>
          <Navbar.Collapse>
            <Nav bsStyle="tabs" activeKey={this.props.router.location.pathname} onSelect={(key) => this.handleTab(key)} justified>
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
