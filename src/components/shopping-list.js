import React from 'react';

import ListHeader from './list-header';
import ListItem from './list-item';

export default ({ data }) => {
    console.log(data);
    const comps = data ? data.map((d, idx) => <ListItem key={idx} data={d}/>) : 'Loading...';
    return (
        <section>
            <ListHeader/>
            {comps}
        </section>
    );
}