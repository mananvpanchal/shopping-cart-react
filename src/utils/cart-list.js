import { getItemIndex } from './common';

export const addToCartList = (cartList, item) => {
  const idx = getItemIndex(cartList, item);
  const tempList = [...cartList];
  if (idx !== -1) {
    tempList[idx].count = tempList[idx].count + 1;
    return tempList;
  } else {
    const cloneItem = Object.assign({}, item);
    cloneItem.count = 1;
    return [...tempList, cloneItem];
  }
}

export const removeFromCartList = (cartList, item) => {
  const idx = getItemIndex(cartList, item);
  const tempList = [...cartList];
  const cloneItem = Object.assign({}, item);
  if(cloneItem.count === 1) {
    tempList.splice(cartList.indexOf(item), 1);
  } else {
    tempList[idx].count = tempList[idx].count - 1;
  }
  return tempList;
}