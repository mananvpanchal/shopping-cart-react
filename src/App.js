import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import ShoppingList from './components/shopping-list';
import { get } from './api/api';

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
    /*const response = fetch('/list')
    .then(res => res.json())
    .then(res => {
      this.setState({ data: res });
      return res;
    }).catch(console.log);
    console.log('app ',response);*/
    get('/list', (res) => {
      this.setState({ data: res });
    });
  }
}

export default App;
