import { getItemIndex } from './common';

export const removeFromShopList = (shopList, item) => {
    const idx = getItemIndex(shopList, item);
    const cloneItem = Object.assign({}, item);
    const tempList = [...shopList];
    cloneItem.count = cloneItem.count - 1;
    tempList[idx] = cloneItem;
    return tempList;
}

export const addToShopList = (shopList, item) => {
    const idx = getItemIndex(shopList, item);
    const tempList = [...shopList];
    const cloneItem = Object.assign({}, item);
    tempList[idx].count = tempList[idx].count + 1;
    return tempList;
}