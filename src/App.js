import React, { Component } from 'react';
import "./App.css";
import Circle from './Circle';
import {circles} from "./circles"

class App extends Component {
  state ={};

  render() {
    return (
      <div>
        <h1>Speedgame</h1>
        <p> Your score:</p>
        <div className="circles">
        {circles.map((c) => (
        <Circle key={c.id} color={c.color}  id={c.id} />
        ))}
        </div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default App;
