import {
    LOAD_SHOP_LIST,
    REMOVE_FROM_SHOT_LIST,
    ADD_TO_SHOP_LIST,
    ADD_TO_CART_LIST,
    REMOVE_FROM_CART_LIST
} from './constants';
import { getEndItemIndex } from './selectors';
import { get } from './api/api';

export const removeFromCartList = (payload) => ({ type: REMOVE_FROM_CART_LIST, payload });

export const addToShopList = (payload) => ({ type: ADD_TO_SHOP_LIST, payload });

export const addToCartList = (payload) => ({ type: ADD_TO_CART_LIST, payload });

export const removeFromShopList = (payload) => ({ type: REMOVE_FROM_SHOT_LIST, payload });

export const appendShopList = (payload) => ({ type: LOAD_SHOP_LIST, payload });

export const removeFromCart = (payload) => (dispatch, getState) => {
    dispatch(removeFromCartList(payload));
    dispatch(addToShopList(payload));
}

export const addToCart = (payload) => (dispatch, getState) => {
    if(payload.count === 0) return;
    dispatch(removeFromShopList(payload));
    dispatch(addToCartList(payload));
}

export const loadShopList = (itemCount) => (dispatch, getState) => {
    const end = getEndItemIndex(getState());
    //console.log('/list?start=' + end + '&end=' + (end + itemCount));
    get('/list?start=' + end + '&end=' + (end + itemCount), (res) => {
        dispatch(appendShopList(res));
    });
};