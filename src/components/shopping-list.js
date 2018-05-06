import React from 'react';

import ListHeader from './list-header';
import ListItem from './list-item';

export default ({ data, addToCart }) => {
    const comps = data.length > 0 
        ? data.map((d, idx) => <ListItem key={idx} 
            data={d} 
            btnName={'Add to Cart'} 
            btnFunc={addToCart}/>) 
        : 'Loading Shopping List...';
    return (
        <section>
            <ListHeader countTxt={'Stock'}/>
            {comps}
        </section>
    );
}