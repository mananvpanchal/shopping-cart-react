import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import ShoppingList from './components/shopping-list';
import CartList from './components/cart-list';
import { get } from './api/api';

import { addToCartList, removeFromCartList } from './utils/cart-list';
import { addToShopList, removeFromShopList } from './utils/shop-list';

class App extends Component {

  constructor() {
    super();
    this.state = {
      shopList: [],
      cartList: [],
      showShopList: true,
      end: 0,
      initScrollY: 0
    };

    this.showShopList = this.showShopList.bind(this);
    this.showCartList = this.showCartList.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  getShoppingList(itemCount, scrollY) {
    //console.log(itemCount, scrollY, this.state.initScrollY, '/list?start=' + this.state.end + '&end=' + (this.state.end + itemCount));
    get('/list?start=' + this.state.end + '&end=' + (this.state.end + itemCount), (res) => {
      this.setState({
        showShopList: true,
        shopList: [...this.state.shopList, ...res],
        end: this.state.end + itemCount,
        initScrollY: scrollY ? scrollY : this.state.initScrollY
      });
    });
  }

  addToCart(item) {
    if (item.count === 0) return;
    this.setState({
      shopList: removeFromShopList(this.state.shopList, item),
      cartList: addToCartList(this.state.cartList, item)
    });
  }

  removeFromCart(item) {
    this.setState({
      shopList: addToShopList(this.state.shopList, item),
      cartList: removeFromCartList(this.state.cartList, item)
    });
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
          ? <ShoppingList data={this.state.shopList} addToCart={this.addToCart} />
          : <CartList data={this.state.cartList} removeFromCart={this.removeFromCart} />}
      </div>
    );
  }

  calculateItemToBeFetched() {
    //header height 60 with top and bottom padding of 10
    //Need to put 15 as constant value
    const compsHeight = window.innerHeight - 80 - 15;
    //item height 44 with margin 2 and border 1 (top and bottom)
    //total comp can be occupied + 1 to show scroll
    return Math.round(compsHeight / 50) + 1;
  }

  getItemCountOnScrollY(scrollY) {
    //item height 50
    return 50 > scrollY 
      ? Math.round(50 / scrollY) 
      : Math.round(scrollY / 50);
  }

  handleScroll(event, scrollY) {
    let itemCount = this.state.initScrollY !== 0 
      ? this.getItemCountOnScrollY(this.state.initScrollY)
      : this.getItemCountOnScrollY(scrollY);
    this.getShoppingList(itemCount, this.state.initScrollY === 0 ? scrollY : null );
  }

  getScrollHandler() {
    let toBeCalled = true;
    let scrollY = 0;
    return (event) => {
      if (toBeCalled) {
        setTimeout(() => {
          toBeCalled = true;
          if (window.scrollY > scrollY) {
            this.handleScroll(event, window.scrollY);
            scrollY = window.scrollY;
          }
        }, 200);
        toBeCalled = false;
      }
    };
  }

  componentDidMount() {
    this.getShoppingList(this.calculateItemToBeFetched());
    window.addEventListener('scroll', this.getScrollHandler())
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getScrollHandler())
  }
}

export default App;
