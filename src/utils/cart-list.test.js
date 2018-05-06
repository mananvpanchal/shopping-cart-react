import { addToCartList, removeFromCartList } from './cart-list';
import chai from 'chai';

describe('Cart List', () => {
    it('should be added by one', () => {
        const emptyCartList = [];
        const resList = addToCartList(emptyCartList, { id: 1, count: null })
        chai.expect(resList).to.deep.equal([{ id: 1, count: 1}]);
    });

    it('should be modify (increase count) by existing', () => {
        const cartList = [
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ];
        const resList = addToCartList(cartList, { id: 1 });
        chai.expect(resList).to.deep.equal([
            { id: 1, count: 3}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ]);
    });

    it('should be modify (decrease count) by existing', () => {
        const cartList = [
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ];
        const resList = removeFromCartList(cartList, { id: 4 });
        chai.expect(resList).to.deep.equal([
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 2}, 
            { id: 5, count: 5}
        ]);
    });

    it('should be removed by last', () => {
        const cartList = [{ id: 1, count: 1 }];
        const resList = removeFromCartList(cartList, { id: 1 })
        chai.expect(resList).to.deep.equal([]);
    });
});