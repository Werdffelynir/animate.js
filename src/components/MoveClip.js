import Clip from "./Clip";
import toObject from "../static/toObject";
import str2node from "../static/str2node";
import isHTMLString from "../static/isHTMLString";
import query from "../static/query";
import stylizer from "../static/stylizer";
import isNode from "../static/isNode";
import {randomHumanizeString} from "../static/random";
import extend, {extendRecursive} from "../static/extend";

/*
mc = MoveClip({
    element: `<div class="sprite rect"></div>`,
    parent: Clip(),
    x: 100,
    y: 100,
    init(){
        this.parent.append(this.element);
    },
})

mc.x
mc.y
mc.width
mc.height
mc.element === mc.template
mc.style( { color: 'white' } )
mc.clone()
mc.inject(Element)
mc.append(Element)
mc.remove(Element) // uses removeChild
mc.on(event, callback)
*/
/**
 * @method style
 * @param config
 * @returns {{readonly x: *, readonly width: *, initialized: boolean, readonly y: *, style(*=): void, completed: boolean, element: *, readonly height: *}|*}
 * @constructor
 */
const MoveClip = function (config)
{
    const { element } = config;
    const clip = Clip(element);

    if(!clip.element) {
        throw new Error('Property [element] not fond!');
    }

    let name = randomHumanizeString(6);
    name = name.substring(0, 1).toUpperCase() + name.substring(1);
    clip.element.setAttribute('data-miveclip', config.id || 'miveclip' + name);

    const root = {
        element: clip.element,
        initialized: false,
        completed: false,
        set x(value) {
            root.element.style.marginLeft = value + 'px';
            clip.x = value;
        },
        set y(value) {
            root.element.style.marginTop = value + 'px';
            clip.y = value;
        },
        set width(value) {
            root.element.style.width = value + 'px';
            clip.width = value;
        },
        set height(value) {
            root.element.style.height = value + 'px';
            clip.height = value;
        },
        get x() {
            return clip.x
        },
        get y() {
            return clip.y
        },
        get width() {
            return clip.width
        },
        get height() {
            return clip.height
        },
        style(object) {
            stylizer(root.element, object);
        },
    };

    delete config.element;
    delete config.initialized;

    Object.keys(config).map(function (key) {
        root[key] = config[key]
    });

    if (typeof root.init === 'function' && !root.initialized){
        root.initialized = true;
        root.init.call(root);
    }

    root.clone = function (append = false) {
        const node = isNode(root.element)
            ? root.element.cloneNode(true)
            : '<div />';

        let conf = {
            element: node,
            parent: root.parent,
            initialized: false,
            completed: false,
            cloned: true,
        };

        conf = Object.assign(Object.assign({}, this ), conf);

        const mc = MoveClip(conf);

        if (append) {
            if (isNode(root.parent)) {
                root.parent.appendChild(mc.element);
            }
            else if (typeof root.parent.append === 'function') {
                root.parent.append(mc.element);
            }
        }

        return mc;
    };

    root.inject = function (elem, append = false) {
        if (Array.isArray(elem)) {
            elem.forEach((e) => { root.inject(e, true) });
        }

        if (!append) {
            root.element.textContent = '';
        }

        if (isNode(elem)) {
            root.element.appendChild(elem);
        }

        if (typeof elem === 'number') {
            elem = elem.toString();
        }

        if (typeof elem === 'string') {
            if (isHTMLString(elem)) {
                elem = str2node(elem);
            } else {
                root.element.textContent += elem;
            }
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

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback)
    };

    if (typeof root.complete === 'function' && !root.completed){
        root.completed = true;
        root.complete.call(root);
    }

    return root;
};

export default MoveClip;
