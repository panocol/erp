import React, {Component} from 'react';

import Header from './app/Header'
import Footer from './app/Footer'

import {Panel, Grid, Row, Col} from 'react-bootstrap';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      something: "Pre"
    }
  }

  changeTitle(something) {
    this.setState({something});
  }

  render() {
    return (
      <div className="App">
        <Header router={this.props.router} className="App-header" changeTitle={(something) => this.changeTitle(something)} something={this.state.something}/>

          <Grid><Row><Col>
            <Panel >
              {this.props.children}
            </Panel>
          </Col></Row></Grid>


        <Footer/>
      </div>
    );
  }
}

export default App;
