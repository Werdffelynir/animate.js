
const findIndex = function (list, predicate) {
    if (!exists(list && list.length)) {
        throw new TypeError('list must have length property');
    }
    if (!isFunction(predicate)) {
        throw new TypeError('predicate must be a function');
    }

    let index = -1;
    list = Array.prototype.slice.call(list); // cast as array to use some.
    list.some(function (val, i) {
        if (predicate(val, i, list)) {
            index = i;
            return true;
        }
    });

    return index;
};

export default findIndex;
