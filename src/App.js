import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import ShoppingList from './components/shopping-list';

class App extends Component {

  constructor() {
    super();
    this.state = { data: null };
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <ShoppingList data={this.state.data}/>
      </div>
    );
  }

  componentDidMount() {
    fetch('/list')
    .then(res => res.json())
    .then(res => {
      this.setState({ data: res });
    }).catch(console.log)
  }
}

export default App;
