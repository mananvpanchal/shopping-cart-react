import React from 'react';

import ListHeader from './list-header';
import ListItem from './list-item';

export default ({ data, removeFromCart }) => {
    console.log(data);
    const comps = data 
        ? data.map((d, idx) => <ListItem key={idx} 
            data={d} 
            btnName={'Remove From Cart'} 
            btnFunc={removeFromCart}/>) 
        : 'Loading Cart List...';
    return (
        <section>
            <ListHeader countTxt={'No. of Items'}/>
            {comps}
        </section>
    );
}