export const getItemIndex = (list, item) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === item.id) {
            return i;
        }
    }
    return -1;
}