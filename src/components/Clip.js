import position from "../static/position";
import copy from "../static/copy";
import clone from "../static/clone";

export class ClipClass {
    constructor(element) {
        this.position = position(element);
        this.element = position.element;
        this.setProperties();
    }

    moveTo(parent) {
        if (parent instanceof Clip) {
            return parent.element.appendChild(this.element);
        }
        if (parent instanceof Node) {
            return parent.appendChild(this.element);
        }
    }

    copyTo(parent) {
        this.element = copy(this.element);
        this.moveTo(parent);
    }

    on (event, callback) {
        this.element.addEventListener(event, callback)
    }

    clone () {
        return clone(this);
    }

    setProperties() {
        Object.keys(this.position).map(function (key) {
            if (typeof this[key] === "undefined") {
                this[key] = this.position[key]
            }
        });

        if (this.element instanceof Node) {
            const parent = position(this.element.parentNode);
            this.x = this.x - parent.x;
            this.y = this.y - parent.y;
            this.element.setAttribute('data-clip', (this.element.id || 'clip'));
        }
    }
}
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
        Object.keys(object).forEach((key) => {
            if (root.element.style[key] !== undefined) {
                root.element.style[key] = object[key];
            }
        });
    };

    return root;
};

export default Clip;
