// import isNode from "./isNode";


import isHTMLString from "./isHTMLString";
import str2node from "./str2node";
import isNode from "./isNode";

/**
 * @property number x
 * @property number y
 * @property number width
 * @property number height
 * @param elem
 * @returns {{x: number, width: number, y: number, height: number, top: number, left: number, right: number, bottom: number, element: object}}
 */
const position = function (elem)
{
    const data = {x: 0, y: 0, width: 0, height: 0};

    if (typeof elem === 'string') {
        if (isHTMLString(elem)) {
            elem = str2node(elem);
        } else {
            elem = document.querySelector(elem);
        }
    }

    if (elem === window || elem === document) {
        data.width = window.innerWidth;
        data.height = window.innerHeight;
        data.element = window;
    } else if (isNode(elem)) {
        if (elem.getBoundingClientRect) {
            const rect = elem.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
            const clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
            const clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

            data.y = Math.round(rect.top + scrollTop - clientTop);
            data.x = Math.round(rect.left + scrollLeft - clientLeft);
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;

            data.top = rect.top + pageYOffset;
            data.left = rect.left + pageXOffset;
            data.right = rect.right + pageXOffset;
            data.bottom = rect.bottom + pageXOffset;
        } else {
            let top = 0, left = 0;
            while (elem) {
                top += parseInt(elem.offsetTop, 10);
                left += parseInt(elem.offsetLeft, 10);
                elem = elem.offsetParent;
            }
            data.y = top;
            data.x = left;
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;
        }
        data.element = elem;
    }
    return data;
};

export default position;
