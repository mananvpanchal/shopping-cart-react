import { getItemIndex, getTotalCount } from './common';
import chai from 'chai';

describe('Common Util Test', () => {
    
    describe('Any List with id proerty', () => {
        it('should return matching object', () => {
            const list = [{ id: 1 }, { id: 2 }, { id: 3 }];
            const idx = getItemIndex(list, { id: 2 })
            chai.expect(idx).to.be.equal(1);
        });
    });

    describe('Total Item in Cart list', () => {
        it('should be match', () => {
            const count = getTotalCount([
                { count: 2}, { count: 7}, 
                { count: 4}, { count: 3}, { count: 5}
            ]);
            chai.expect(count).to.be.eql(21);
        });
    })
})
