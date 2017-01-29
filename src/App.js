import React, {Component} from 'react';

import Header from './app/Header'
import Footer from './app/Footer'

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
        <Header className="App-header" changeTitle={(something) => this.changeTitle(something)} something={this.state.something}/>

        {this.props.children}

        <Footer/>
      </div>
    );
  }
}

export default App;
