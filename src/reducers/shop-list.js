import {
    LOAD_SHOP_LIST,
    REMOVE_FROM_SHOT_LIST,
    ADD_TO_SHOP_LIST
} from '../constants';
import { getItemIndex } from '../utils/common';

export default (state = [], action) => {
    switch (action.type) {
        case LOAD_SHOP_LIST:
            return [...state, ...action.payload];
        case REMOVE_FROM_SHOT_LIST: {
            const idx = getItemIndex(state, action.payload);
            if (state[idx].count === 0) return state;
            const cloneList = [...state];
            const cloneItem = Object.assign({}, cloneList[idx]);
            cloneItem.count = cloneItem.count - 1;
            cloneList[idx] = cloneItem;
            return cloneList;
        }
        case ADD_TO_SHOP_LIST: {
            const idx = getItemIndex(state, action.payload);
            const cloneList = [...state];
            cloneList[idx].count = cloneList[idx].count + 1;
            return cloneList;
        }
        default:
            return state;
    }
};