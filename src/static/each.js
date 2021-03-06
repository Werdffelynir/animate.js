import isNode from './isNode';
import query from './query';
import typeOf from "./typeOf";


/*const each = function (list, callback, tmp) {
    if (list instanceof Array) {
        list.forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    } else if (isNode(list)) {
        each([].slice.call(list.childNodes), callback, tmp);
    } else {
        Object.keys(list).forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    }
};*/

const each = function (list, callback, instance = {}) {
    let type = typeOf(list);

    switch (type) {
        case 'array':
            if (typeof callback === 'function') {
                list.forEach((i, v, a) => callback.call(instance, i, v, a));
            }
            break;
        case 'object':
            if (isNode(list)) {
                if (list instanceof NodeList)
                    list = each(Array.from(list), callback, instance)
                else
                    list = each([list], callback, instance)
            } else
                Object.keys(list).forEach((key) => callback.call(instance, key, list[key], list));
            break;
        case 'string':
            list = each(list.split(""), callback, instance);
            break;
        case 'number':
            const arr = (new Array(list)).fill(0);
            list = each(arr, callback, instance);
            break;
    }

    return list;
};

each.parent = function (selector, filter, loops = 10) {
    const getParent = (elem) => elem && elem.parentNode ? elem.parentNode : false;
    let element = isNode(selector) ? selector : query(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            return element
        }
        element = getParent(element);
    }
};

each.filter = function (selector, filter, callback, loops = 10) {
    const getParent = (elem) => elem && elem.parentNode ? elem.parentNode : false;
    let element = isNode(selector) ? selector : query(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            callback(element);
            return element
        }
        element = getParent(element);
    }
    return element;
};

export default each;
