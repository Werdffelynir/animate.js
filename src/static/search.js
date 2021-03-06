import isNode from './isNode';
import queryAll from './queryAll';
import query from './query';

/**
 * search( 'ul > li',  'data-link', NodeElement);
 *
 * @param selector
 * @param attr
 * @param from
 * @returns {{}}
 */
const search = function (selector, attr, from) {
    from = isNode(from) ? from : query(from);
    let i = 0,
        key,
        elements = {},
        queryElements = queryAll(selector, from || document.body);

    if (from.hasAttribute(attr)) {
        queryElements.push(from)
    }

    if (queryElements) {
        while (i < queryElements.length) {
            if (!attr)
                elements[i] = queryElements[i];
            else {
                if (queryElements[i].hasAttribute(attr)) {
                    key = queryElements[i].getAttribute(attr);
                    elements[key] = queryElements[i];
                }
            }
            i++;
        }
    }
    return elements;
};

export default search;
