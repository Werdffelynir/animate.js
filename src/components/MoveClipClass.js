import Clip from "./Clip";
import toObject from "../static/toObject";

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
