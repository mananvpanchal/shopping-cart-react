import { addToShopList, removeFromShopList } from './shop-list';
import chai from 'chai';

describe('Shop List', () => {

    it('should be modify (decrease count) by existing', () => {
        const shopList = [
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ];
        const resList = removeFromShopList(shopList, { id: 4 });
        chai.expect(resList).to.deep.equal([
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 2}, 
            { id: 5, count: 5}
        ]);
    });

    it('should NOT be removed by last', () => {
        const shopList = [{ id: 1, count: 0 }];
        const resList = removeFromShopList(shopList, { id: 1 })
        chai.expect(resList).to.deep.equal([{ id: 1, count: 0 }]);
    });

    it('should be modify (increase count) by existing', () => {
        const cartList = [
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ];
        const resList = addToShopList(cartList, { id: 1 });
        chai.expect(resList).to.deep.equal([
            { id: 1, count: 3}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ]);
    });
});