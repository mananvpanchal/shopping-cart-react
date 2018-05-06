import React from 'react';

export default ({ countTxt }) => {
    return (<div className="item">
        <span className="item-cell">ID</span>
        <span className="item-cell">Company</span>
        <span className="item-cell">Product</span>
        <span className="item-cell">Model</span>
        <span className="item-cell">Price</span>
        <span className="item-cell">{countTxt}</span>
    </div>);
}