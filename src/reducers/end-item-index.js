import {
    LOAD_SHOP_LIST
} from '../constants';

export default (state = 0, action) => {
    switch (action.type) {
        case LOAD_SHOP_LIST:
            return (action.payload ? action.payload.length : 0) + state;
        default:
            return state;
    }
}