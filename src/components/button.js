import React from 'react';

export default ({ show, children }) => {
    return <button className="shopping-cart" onClick={show}>{children}</button>;
}