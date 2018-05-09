import endItemIndex from './end-item-index';
import { 
    appendShopList
} from '../actions';

import chai from 'chai';

describe('Reducer: End Item Index', () => {
    it('should be match when initial state is 0', () => {
        const state = 0;
        const endIndex = endItemIndex(state, appendShopList([{ id: 1 }]));
        chai.expect(endIndex).to.be.equal(1);
    });

    it('should be match when initial state greater than 0', () => {
        const state = 1;
        const endIndex = endItemIndex(state, appendShopList([{ id: 1 }]));
        chai.expect(endIndex).to.be.equal(2);
    });
});