import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import ShoppingList from './components/shopping-list';
import CartList from './components/cart-list';
import { get } from './api/api';

class App extends Component {

  constructor() {
    super();
    this.state = { shopList: null, cartList: [], showShopList: true };

    this.showShopList = this.showShopList.bind(this);
    this.showCartList = this.showCartList.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  getShoppingList() {
    get('/list', (res) => {
      this.setState({ showShopList: true, shopList: res });
    });
  }

  getItemIndex(list, item) {
    for(let i = 0 ; i < list.length; i++) {
      console.log(list[i], item);
      if(list[i].id === item.id) {
        return i;
      }
    }
    return -1;
  }

  addToCart(item) {
    if(item.count === 0) return;
    const cloneItem = Object.assign({}, item);
    const idx = this.getItemIndex(this.state.cartList, cloneItem);
    item.count = item.count - 1;
    if(idx !== -1) {
      console.log('add existing to cart', cloneItem);
      const tempList = [...this.state.cartList];
      tempList[idx].count = tempList[idx].count + 1;
      this.setState({ 
        shopList: [...this.state.shopList], 
        cartList: [...tempList]
      });
    } else {
      console.log('add new to cart', cloneItem);
      cloneItem.count = 1;
      this.setState({ 
        shopList: [...this.state.shopList], 
        cartList: [...this.state.cartList, {...cloneItem}]
      });
    }
  }

  removeFromCart(item) {
    const cloneItem = Object.assign({}, item);
    const sIdx = this.getItemIndex(this.state.shopList, item);
    const idx = this.getItemIndex(this.state.cartList, item);
    this.state.shopList[sIdx].count = this.state.shopList[sIdx].count + 1;
    if(item.count === 1) {
      const tempList = [...this.state.cartList];
      tempList.splice(this.state.cartList.indexOf(item), 1);
      this.setState({ 
        shopList: [...this.state.shopList],
        cartList: [...tempList] 
      });
    } else {
      const tempList = [...this.state.cartList];
      tempList[idx].count = tempList[idx].count - 1;
      this.setState({ 
        shopList: [...this.state.shopList], 
        cartList: [...tempList]
      });
    }
  }

  showCartList() {
    this.setState({ showShopList: false });
  }

  showShopList() {
    this.setState({ showShopList: true });
  }

  render() {
    return (
      <div className="App">
        <Header showShopList={this.showShopList} 
          showCartList={this.showCartList} cartList={this.state.cartList} />
        {this.state.showShopList 
        ? <ShoppingList data={this.state.shopList} addToCart={this.addToCart}/>
        : <CartList data={this.state.cartList} removeFromCart={this.removeFromCart}/>}
      </div>
    );
  }

  componentDidMount() {
    this.getShoppingList();
  }
}

export default App;
