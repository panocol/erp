import React, {Component} from 'react';

class Title extends Component{
  render() {
    return (
      <div>
      <h1> hi there {this.props.something}</h1>
      <input value={this.props.something} onChange={(e) => this.props.changeTitle(e.target.value)}/>

      </div>


    );
  }

}

export default Title;
