import React from 'react';

const getTotalCount = (cartList) => {
  return cartList.map(c => c.count).reduce((cnt1, cnt2) => cnt1 + cnt2, 0);
}

export default  ({ showShopList, showCartList, cartList }) => {
    return (<header className="App-header">
    <h1 className="App-title" style={{ display: "table-cell"}}>Shopping Cart Experience</h1>
    <div className="right-comp">
      <button className="shopping-cart" onClick={showShopList}>Shopping List</button>
      <button className="shopping-cart" onClick={showCartList}>Shopping Cart</button>
      <span className="cart-lable">{getTotalCount(cartList)}</span>
    </div>
    </header>);
}