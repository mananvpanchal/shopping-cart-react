import { getItemIndex } from './common';

export const removeFromShopList = (shopList, item) => {
    const idx = getItemIndex(shopList, item);
    if(shopList[idx].count === 0) return shopList;
    const tempList = [...shopList];
    const cloneItem = Object.assign({}, tempList[idx]);
    cloneItem.count = cloneItem.count - 1;
    tempList[idx] = cloneItem;
    return tempList;
}

export const addToShopList = (shopList, item) => {
    const idx = getItemIndex(shopList, item);
    const tempList = [...shopList];
    tempList[idx].count = tempList[idx].count + 1;
    return tempList;
}