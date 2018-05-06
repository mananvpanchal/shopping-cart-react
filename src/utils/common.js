export const getItemIndex = (list, item) => {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i], item);
        if (list[i].id === item.id) {
            return i;
        }
    }
    return -1;
}