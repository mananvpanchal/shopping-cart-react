import React from 'react';

import ListHeader from './list-header';
import ListItem from './list-item';

export default ({ data, removeFromCart }) => {
    const comps = data.length > 0  
        ? data.map((d, idx) => <ListItem key={idx} 
            data={d} 
            btnName={'Remove From Cart'} 
            btnFunc={removeFromCart}/>) 
        : 'Empty Cart, Please add something...';
    return (
        <section>
            <ListHeader countTxt={'No. of Items'}/>
            {comps}
        </section>
    );
}