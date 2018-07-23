import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A from "./A";
import B from "./B";
import {createStore} from "redux";

const reducers = (state = [], action) => {
    if(action.type === 'LISTA'){
        return {lista: action.lista};
    }

    return state;
}


const store = createStore(reducers);


class App extends Component {



  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">

            <A store={store}/>

        </div>
        <div className="App-intro">
            <B store={store} />

        </div>
      </div>
    );
  }
}


export default App;
