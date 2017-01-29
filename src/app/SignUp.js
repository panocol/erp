import React, {Component} from 'react';
import {Button, PageHeader, Grid, Row, Col, Form, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class SignUp extends Component {
  render() {
    return (
      <div>

        <PageHeader>
          Lets start by getting to know you.
          <p><small>
            If you're missing any information,<p> you can update this information later on.</p>
          </small></p>
        </PageHeader>

        <Form className="text-left">
          <Grid>
            <Row>
              <FormGroup className="col-xs-5">
                <ControlLabel>First Name</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-1">
                <ControlLabel>M.I.</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-5">
                <ControlLabel>Last Name</ControlLabel><FormControl type="text"/>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className="col-xs-5">
                <ControlLabel>Company</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-3">
                <ControlLabel>Title</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-3">
                <ControlLabel>Industry</ControlLabel><FormControl type="text"/>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className="col-xs-4">
                <ControlLabel>Address</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-1">
                <ControlLabel>Suite</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-2">
                <ControlLabel>City</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-2">
                <ControlLabel>State</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-2">
                <ControlLabel>ZIP</ControlLabel><FormControl type="text"/>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className="col-xs-5">
                <ControlLabel>Email</ControlLabel><FormControl type="text"/>
              </FormGroup>
              <FormGroup className="col-xs-3">
                <ControlLabel>Phone</ControlLabel><FormControl type="text"/>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className="col-xs-5">
                <ControlLabel>Role on Project</ControlLabel><FormControl type="text"/>
              </FormGroup>
            </Row>
          </Grid>

          <br/>
          <Button className="col-xs-2 col-xs-offset-5" bsStyle="success" type="button">Continue</Button>
        </Form>


      </div>

    );
  }

}

export default SignUp;
