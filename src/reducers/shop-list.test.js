import shopList from './shop-list';
import { 
    removeFromCartList, 
    addToShopList, 
    addToCartList, 
    removeFromShopList
} from '../actions';
import chai from 'chai';

describe('Reducer: Shop List', () => {

    it('should be modify (decrease count) by existing', () => {
        const state = [
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ];
        const resList = shopList(state, removeFromShopList({ id: 4 }));
        chai.expect(resList).to.deep.equal([
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 2}, 
            { id: 5, count: 5}
        ]);
    });

    it('should NOT be removed by last', () => {
        const state = [{ id: 1, count: 0 }];
        const resList = shopList(state, removeFromShopList({ id: 1 }));
        chai.expect(resList).to.deep.equal([{ id: 1, count: 0 }]);
    });

    it('should be modify (increase count) by existing', () => {
        const state = [
            { id: 1, count: 2}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ];
        const resList = shopList(state, addToShopList({ id: 1 }));
        chai.expect(resList).to.deep.equal([
            { id: 1, count: 3}, { id: 2, count: 7}, 
            { id: 3, count: 4}, { id: 4, count: 3}, 
            { id: 5, count: 5}
        ]);
    });
});