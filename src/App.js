import React, { Component } from 'react';

import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {
  
  state = {
    text: 'Steve'
  }

  changeHandler = (event) => {
    this.setState({text: event.target.value});
  }

  removeCharHandler = (event, charIndex) => {
    const arr = this.state.text.split('');
    arr.splice(charIndex, 1);
    this.setState({text: arr.join('')})
  }

  render() {
    const arr = this.state.text.split('');
    const chars = arr.map((char, index) => {
      return (<Char key={index} removeHandler={(event) => this.removeCharHandler(event,index)} char={char} />);
    })

    return (
      <div>
        <input onChange={this.changeHandler} type="text" value={this.state.text}/>
        <p>{this.state.text.length}</p>
        <Validation textLength={this.state.text.length} />
        {chars}
      </div>
    );
  }
}

export default App;
