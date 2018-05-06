import React from 'react';

export default ({ data, addToCart, btnName, btnFunc }) => {
    const { id, company, product, model, price, count } = data;
    return (<div className="item">
        <span className="item-cell">{id}</span>
        <span className="item-cell">{company}</span>
        <span className="item-cell">{product}</span>
        <span className="item-cell">{model}</span>
        <span className="item-cell">{price}</span>
        <span className="item-cell">{count}</span>
        <button className="add-to-cart" onClick={() => btnFunc(data)}>{btnName}</button>
    </div>);
}