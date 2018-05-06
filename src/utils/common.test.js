import { getItemIndex } from './common';
import chai from 'chai';

describe('Any List with id proerty', () => {
    it('should return matching object', () => {
        const list = [{ id: 1}, { id: 2}, {id: 3}];
        const idx = getItemIndex(list, {id: 2})
        chai.expect(idx).to.be.equal(1);
    });
});