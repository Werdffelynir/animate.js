import position from "../static/position";
import isNode from "../static/isNode";
import isString from "../static/isString";
/**
 *
 * @param element
 * @returns {{x: number, width: number, y: number, height: number, top: number, left: number, right: number, bottom: number, element: Object}}
 */
const calculatePosition = function (element) {
    element = isNode(element) || isString(element) ? element : throw new TypeError('element most extends od NodeElement');
    const re_root = position(element);
    const re_parent = position(re_root.element.parentNode);

    if (isNode(re_parent.element)) {
        re_root.parent = calculatePosition(re_parent.element);
    } else {
        re_root.parent = {x: 0, y: 0, width: 0, height: 0};
    }
    re_root.x = re_root.x - re_parent.x;
    re_root.y = re_root.y - re_parent.y;

    return re_root;
};

export default calculatePosition;
