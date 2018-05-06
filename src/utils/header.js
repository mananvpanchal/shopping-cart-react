export const getTotalCount = (cartList) => {
    return cartList.map(c => c.count).reduce((cnt1, cnt2) => cnt1 + cnt2, 0);
}