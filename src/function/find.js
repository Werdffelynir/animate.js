
const find = function (list, predicate) {
    if (exists(list && list.length) && !isFunction(list)) {
        let index = findIndex(list, predicate);
        return ~index ? list[index] : null;
    }
    else if (isFunction(list)) {
        predicate = list;
        return function (list) {
            if (!exists(list && list.length)) {
                throw new TypeError('list must have length property');
            }
            let index = findIndex(list, predicate);
            return ~index ? list[index] : null;
        };
    }
    else {
        throw new TypeError('first argument must be a list (have length) or function');
    }
}

export default find;
