
/**
 * Return random item from array
 * @param arr
 * @returns {*}
 */
const randomItem = function (arr) {
    const i = random(0, arr.length-1);
    return arr[i];
};

export default randomItem;
