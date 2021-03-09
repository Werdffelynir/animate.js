import position from "../static/position";
import copy from "../static/copy";
import clone from "../static/clone";
import isHTMLString from "../static/isHTMLString";
import query from "../static/query";
import stylizer from "../static/stylizer";
import str2node from "../static/str2node";
import isNode from "../static/isNode";
import isString from "../static/isString";

/**
 * @property bottom
 * @property element
 * @property height
 * @property left
 * @property right
 * @property top
 * @property width
 * @property x
 * @property y
 * @method moveTo()
 * @method copyTo
 * @method on
 * @method clone
 * @method style
 * @method inject
 * @method append
 * @method remove
 * @method clear
 * @method on
 * @method clone
 *
 * @param element
 * @param onInitCallback
 * @returns {{ bottom: number, element: Object, height: number, left: number, right: number, top: number, width: number, x: number, y: number, moveTo: function, copyTo: function, on: function, clone: function, style: function, inject: function, append: function, remove: function, clear: function, on: function, clone: function, calculate: function }}
 * @constructor Clip()
 */
const Clip = function (element, onInitCallback) {
    /**
     *
     * @type {{x: number, width: number, y: number, height: number, top: number, left: number, right: number, bottom: number, element: Object}}
     */
    const root = position(element);

    if (root.element instanceof Node) {
        const parent = position(element.parentNode);
        root.x = root.x - parent.x;
        root.y = root.y - parent.y;
        root.parent = parent;
        root.parent.element = element.parentNode;
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

    root.calculate = function (element) {
        element = isNode(element) || isString(element) ? element : this.element;
        const re_root = position(element);
        const re_parent = position(re_root.element.parentNode);

        if (isNode(re_parent.element)) {
            re_root.parent = root.calculate(re_parent.element);
        } else {
            re_root.parent = {x: 0, y: 0, width: 0, height: 0};
        }
        re_root.x = re_root.x - re_parent.x;
        re_root.y = re_root.y - re_parent.y;

        const props = ['x', 'y', 'width', 'height', 'top', 'left', 'right', 'bottom', 'parent'];
        Object.keys(re_root).forEach((key) => {
            if (props.includes(key)) {
                root[key] = re_root[key];
            }
        });
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
            elem.forEach((e) => {
                root.inject(e, true)
            });
        }
        if (isNode(elem)) {
            root.element.appendChild(elem);
        }
    };

    root.append = function (elem) {
        root.inject(elem, true);
    };

    root.remove = function (elem) {
        if (isNode(elem)) {
            return root.element.removeChild(elem);
        } else {
            throw new TypeError('Failed argument type. Need NodeElement');
        }
    };

    root.clear = function () {
        root.element.textContent = '';
    };

    if (typeof onInitCallback === "function") {
        onInitCallback.call(root);
    }

    return root;
};

export default Clip;
