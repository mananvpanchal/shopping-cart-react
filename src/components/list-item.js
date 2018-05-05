import React from 'react';

export default ({ data }) => {
    const { company, product, modal, price } = data;
    return (<div className="item">
        <span className="item-cell">{company}</span>
        <span className="item-cell">{product}</span>
        <span className="item-cell">{modal}</span>
        <span className="item-cell">{price}</span>
        <button className="add-to-cart">Add To Cart</button>
    </div>);
}