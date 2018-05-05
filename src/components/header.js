import React from 'react';

export default  () => {
    return (<header className="App-header">
    <h1 className="App-title" style={{ display: "table-cell"}}>Shopping Cart Experience</h1>
    <div className="right-comp">
      <button className="shopping-cart">Shopping Cart</button>
      <span className="cart-lable">100</span>
    </div>
    </header>);
}