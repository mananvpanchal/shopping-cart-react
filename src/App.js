import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

import Header from './components/header';
import ShoppingList from './components/shopping-list';
import CartList from './components/cart-list';

import { getShopList, getCartList } from './selectors';
import { loadShopList, addToCart, removeFromCart } from './actions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header
              shopListBtn={<Link className={"shopping-cart"} to={"/shop-list"}>Shopping List</Link>}
              cartListBtn={<Link className={"shopping-cart"} to={"/cart-list"}>Shopping Cart</Link>}
              cartList={this.props.cartList} />
            <Route exact path="/" render={() => (
              <Redirect to="/shop-list" />
            )} />
            <Route
              path="/shop-list"
              render={() => <ShoppingList
                data={this.props.shopList}
                addToCart={this.props.addToCart} />
              } />
            <Route
              path="/cart-list"
              render={() => <CartList
                data={this.props.cartList}
                removeFromCart={this.props.removeFromCart} />
              } />
          </div>
        </BrowserRouter>
      </div>
    );
  }

  calculateItemToBeFetched() {
    //header height 60 with top and bottom padding of 10
    //Need to put 15 as constant value
    const compsHeight = window.innerHeight - 80 - 15;
    //item height 44 with margin 2 and border 1 (top and bottom)
    //total comp can be occupied * 2
    return Math.round(compsHeight / 50) * 2;
  }

  handleScroll(event) {
    var docEle = document.documentElement;
    if (Math.ceil(docEle.scrollTop) + window.innerHeight >= docEle.offsetHeight) {
      this.getShoppingList(this.calculateItemToBeFetched());
    }
  }

  getScrollHandler() {
    let toBeCalled = true;
    let scrollY = 0;
    return (event) => {
      if (toBeCalled) {
        setTimeout(() => {
          toBeCalled = true;
          if (window.scrollY > scrollY) {
            this.handleScroll(event);
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

  getShoppingList(itemCount) {
    this.props.loadShopList(itemCount)
  }
}

export default connect(
  (state) => ({
    cartList: getCartList(state),
    shopList: getShopList(state)
  }),
  (dispatch) => ({
    loadShopList: (itemCount) => dispatch(loadShopList(itemCount)),
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (item) => dispatch(removeFromCart(item))
  })
)(App);
