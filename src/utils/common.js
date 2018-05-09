export const getItemIndex = (list, item) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === item.id) {
            return i;
        }
    }
    return -1;
}

export const getTotalCount = (cartList) => {
    return cartList.map(c => c.count).reduce((cnt1, cnt2) => cnt1 + cnt2, 0);
}