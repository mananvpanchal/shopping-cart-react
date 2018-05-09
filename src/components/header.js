import React from 'react';
import { getTotalCount } from '../utils/common';

export default ({ shopListBtn, cartListBtn, cartList }) => {
  return (<header className="App-header">
    <h1 className="App-title" style={{ display: "table-cell" }}>Shopping Cart Experience</h1>
    <div className="right-comp">
      {shopListBtn}
      {cartListBtn}
      <span className="cart-lable">{getTotalCount(cartList)}</span>
    </div>
  </header>);
}