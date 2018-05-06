import React from 'react';
import Button from './button';
import { getTotalCount } from '../utils/header';

export default  ({ showShopList, showCartList, cartList }) => {
    return (<header className="App-header">
    <h1 className="App-title" style={{ display: "table-cell"}}>Shopping Cart Experience</h1>
    <div className="right-comp">
      <Button show={showShopList}>Shopping List</Button>
      <Button show={showCartList}>Shopping Cart</Button>
      <span className="cart-lable">{getTotalCount(cartList)}</span>
    </div>
    </header>);
}