import isObject from "animate.js/src/function/isObject";

/*






*/

/**
 * rec = Rectangle(0, 0, 100, 100); // {x: 0, y: 0, width: 100, height: 100}
 * rec.toArray(); // [0, 0, 100, 100]
 * rec.toString(); // 0 0 100 100
 *
 * Rectangle.from([0, 0, 100, 100]); // Rectangle
 * Rectangle.from({x: 0, y: 0, width: 100, height: 100}); // Rectangle
 *
 * @param x
 * @param y
 * @param width
 * @param height
 * @return {{x: *, width: *, toArray: (function(): [*, *, *, *]), y: *, toString: (function(): string), height: *}|undefined}
 * @constructor
 */
const Rectangle = function (x, y, width, height)
{
    return {
        x,
        y,
        width,
        height,
        toArray: function () { return [x, y, width, height]; },
        toString: function () { return `${x}, ${y}, ${width}, ${height}`},
    };
};

Rectangle.from = function (params) {
    if (Array.isArray(params)) {
        return Rectangle.apply(Rectangle, params);
    }
    if (isObject(params)) {
        return Rectangle.apply(Rectangle, Object.values(params));
    }
};

export default Rectangle;
