import Clip from "./Clip";
import toObject from "../static/toObject";
import str2node from "../static/str2node";
import isHTMLString from "../static/isHTMLString";
import query from "../static/query";
import stylizer from "../static/stylizer";

/*
return MoveClip({
    element: `<div class="sprite rect"></div>`,
    parent: AppClip,
    x: 100,
    y: 100,
    init(){
        this.parent.append(this.element);

        this.transform = [
            'rotate(' + 45 +'deg)',
            'scale(0.5, 0.5)',
        ];
    },
})
*/
const MoveClip = function (config)
{
    const { element } = config;
    const clip = Clip(element);

    if(!clip.element) {
        throw new Error('Property [element] not fond!');
    }

    clip.element.setAttribute('data-miveclip', config.id || 'miveclip');

    const root = {
        // clip: clip,
        element: clip.element,
        initialized: false,
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
        const cloneProperty = toObject(root);
        cloneProperty.element = root.element.cloneNode(root);
        if (append) {
            root.element.parentNode.appendChild(cloneProperty.element);
        }
        return MoveClip(cloneProperty);
    };

    root.inject = function (elem, append = true) {
        if (typeof elem === 'string') {
            if (isHTMLString(elem)) {
                elem = str2node(elem);
            } else {
                elem = query(elem);
            }
        }
        root.element.appendChild(elem);
    };

    root.append = function (elem) {
        root.inject(elem, true);
    };

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback)
    };

    return root;
};

export default MoveClip;
