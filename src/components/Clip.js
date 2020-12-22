import position from "../static/position";
import copy from "../static/copy";
import clone from "../static/clone";
import isHTMLString from "../static/isHTMLString";
import query from "../static/query";
import stylizer from "../static/stylizer";
import str2node from "../static/str2node";
import isNode from "../static/isNode";

/**
 *
 * @param element
 * @returns { bottom, element, height, left, right, top, width, x, y }
 * @constructor
 */
const Clip = function (element)
{
    const root = position(element);

    if (root.element instanceof Node) {
        const parent = position(element.parentNode);
        root.x = root.x - parent.x;
        root.y = root.y - parent.y;
        root.element.setAttribute('data-clip', root.element.id || 'clip');
    }

    root.moveTo = function (parentElement) {
        if (parentElement instanceof Clip) {
            return parentElement.element.appendChild(root.element);
        }
        if (parentElement instanceof Node) {
            return parentElement.appendChild(root.element);
        }
    };

    root.copyTo = function (parentElement) {
        root.element = copy(root.element);
        root.moveTo(parentElement);
    };

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback)
    };

    root.clone = function () {
        return clone(this);
    };

    root.style = function (object) {
        stylizer(root.element, object);
    };

    root.inject = function (elem, append = true) {
        if (typeof elem === 'string') {
            if (isHTMLString(elem)) {
                elem = str2node(elem);
            } else {
                elem = query(elem);
            }
        }
        if (!append) {
            root.element.textContent = '';
        }

        if (Array.isArray(elem)) {
            elem.forEach((e) => {root.inject(e, true)});
        }
        if (isNode(elem)) {
            root.element.appendChild(elem);
        }
    };

    root.append = function (elem) {
        root.inject(elem, true);
    };

    root.remove = function (elem) {
        if(isNode(elem)) {
            return root.element.removeChild(elem);
        } else {
            throw new TypeError('Failed argument type. Need NodeElement');
        }
    };

    root.clear = function () {
        root.element.textContent = '';
    };

    return root;
};

export default Clip;
