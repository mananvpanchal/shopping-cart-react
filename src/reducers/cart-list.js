import { ADD_TO_CART_LIST, REMOVE_FROM_CART_LIST } from '../constants';
import { getItemIndex } from '../utils/common';

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TO_CART_LIST: {
            const idx = getItemIndex(state, action.payload);
            const cloneList = [...state];
            if (idx !== -1) {
                cloneList[idx].count = cloneList[idx].count + 1;
                return cloneList;
            } else {
                const cloneItem = Object.assign({}, action.payload);
                cloneItem.count = 1;
                return [...cloneList, cloneItem];
            }
        }
        case REMOVE_FROM_CART_LIST: {
            const idx = getItemIndex(state, action.payload);
            const cloneList = [...state];
            if(cloneList[idx].count === 1) {
                cloneList.splice(idx, 1);
            } else {
                cloneList[idx].count = cloneList[idx].count - 1;
            }
            return cloneList;
        }
        default:
            return state;
    }
};