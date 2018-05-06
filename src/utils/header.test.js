import { getTotalCount } from './header';
import chai from 'chai';

const cartList = [
    { count: 2}, { count: 7}, { count: 4}, { count: 3}, { count: 5}
];

describe('Cart Count', () => {
    it('should be total of all items in cart list', () => {
        const count = getTotalCount(cartList);
        chai.expect(count).to.be.eql(21);
    });
});