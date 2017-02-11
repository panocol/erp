import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Panel, Grid, Row, Col, Button} from 'react-bootstrap';

import Header from './app/Header'
import Footer from './app/Footer'
import {fetchUsers} from './actions/userActions'

import './App.css';

const mapStateToProps = function (store) {
  return {
    users: store.user.users,
    fetched: store.user.fetched
  }
};
class App extends Component {

  // componentWillMount() {
  //   this.props.dispatch(fetchUsers())
  // }

  fetchUsers() {
    this.props.dispatch(fetchUsers())
  }

  render() {

    return (
      <div className="App">
        <Header router={this.props.router}/>
          <Grid><Row><Col>
            <Panel >
              {!this.props.fetched &&
                <Button onClick={() => this.fetchUsers()}>Fetch Users</Button>}
              <ul>
              {
                this.props.users.slice(0, 2).map((user) => <li key={user.id}>{user.name}</li>)
              }
              {this.props.children}
              </ul>
            </Panel>
          </Col></Row></Grid>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
