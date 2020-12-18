import Clip from "./Clip";
import toObject from "../static/toObject";
import str2node from "../static/str2node";
import isNode from "../static/isNode";
import isHTMLString from "../static/isHTMLString";
import query from "../static/query";
import node2str from "../static/node2str";
import stylizer from "../static/stylizer";
import isNumber from "../functions/isNumber";

export class MoveClipClass
{
    constructor(properties)
    {
        const { element } = properties;

        // if (properties.template) {
        //     this.template = properties.template;
        // }
        // if (properties.element) {
        //     this.element = properties.element;
        // }

        const clip = Clip(this.element);

        this.properties = properties;
        this.element = clip.element;
        this.clip = clip;
        this.init = false;
        this.initialized = false;
        this.setProperties();

        if (typeof this.init === 'function' && !this.initialized){
            this.initialized = true;
            this.init();
        }
    }
    get x() { return this.clip.x; }
    get y() { return this.clip.y; }
    get width() { return this.clip.width; }
    get height() { return this.clip.height; }
    set x(value) {
        this.element.style.marginLeft = value + 'px';
        this.clip.x = value;
    }
    set y(value) {
        this.element.style.marginTop = value + 'px';
        this.clip.y = value;
    }
    set width(value) {
        this.element.style.width = value + 'px';
        this.clip.width = value;
    }
    set height(value) {
        this.element.style.height = value + 'px';
        this.clip.height = value;
    }

    // set template (template) {
    //     if (typeof template === 'string') {
    //         this.element = str2node(template);
    //     }
    //     if (isNode(template)) {
    //         this.element = template;
    //     }
    // }
    // get template () {
    //     return this.element;
    // }

    clone (append = false) {
        const props = toObject(this);
        props.element = this.element.cloneNode(true);
        if (append && this.element)
            this.element.parentNode.appendChild(props.element);

        return new MoveClipClass(props);
    }
    setProperties() {
        Object.keys(this.properties).map(function (key) {
            if (typeof this[key] === "undefined") {
                this[key] = this.properties[key]
            }
        });
        this.element.setAttribute('data-miveclip', (this.properties.id || 'miveclip'));
    }

    style(object) {
        Object.keys(object).forEach((key) => {
            if (this.element.style[key] !== undefined) {
                this.element.style[key] = object[key];
            }
        });
    }
}

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

    // if (typeof root.complete === 'function'){
    //     root.complete.call(root);
    // }

    return root;
};

export default MoveClip;
