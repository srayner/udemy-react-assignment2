import React, { Component } from 'react';

import './App.css';
import Char from './Char/Char';
import Validation from './Validation/Validation';

class App extends Component {
  
  state = {
    textLength: 0,
    text: 'Steve'
  }

  changeHandler = (event) => {

    const text = event.target.value;
    const length = text.length;

    this.setState({
      textLength: length,
      text: text
    });

  }

  removeCharHandler = (event, charIndex) => {
    
    const arr = this.state.text.split('');
    arr.splice(charIndex, 1);
    const text = arr.join('');
    const length = text.length;
    this.setState({
      text: text,
      length: length 
    })
  }

  render() {

    const arr = this.state.text.split('');
    const chars = arr.map((char, index) => {
      return (<Char key={index} removeHandler={(event) => this.removeCharHandler(event,index)} char={char} />);
    })

    return (
      <div>
        <input onChange={this.changeHandler} type="text" value={this.state.text}/>
        <p>{this.state.textLength}</p>
        <Validation textLength={this.state.textLength} />
        {chars}
      </div>
    );

  }
}

export default App;
