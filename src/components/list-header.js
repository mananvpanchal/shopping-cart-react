import React from 'react';

export default ({ countTxt }) => {
    return (<div className="item">
        <span className="header-cell">ID</span>
        <span className="header-cell">Company</span>
        <span className="header-cell">Product</span>
        <span className="header-cell">Model</span>
        <span className="header-cell">Price</span>
        <span className="header-cell">{countTxt}</span>
    </div>);
}