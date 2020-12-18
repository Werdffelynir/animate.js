import str2node from "../static/str2node";
import isNode from "../static/isNode";
import merge from "../static/merge";
import search from "../static/search";
import clone from "../static/clone";
import isHTMLString from "../static/isHTMLString";
import query from "../static/query";


export const ComponentClassProperties = {
    id: null,
    props: {},
    template: false,
    element: false,
    override: false,
    before: () => {},
    init: () => {},
    data: () => {},
    complete: () => {},
    methods: {},
    node: {},
    on: {},
    initialized: false,
    completed: false,
    components: {},
    children: [],
    parent: {},
};

/**
 * @property id
 * @property props
 * @property template
 * @property element
 * @property override
 * @property before [Function]
 * @property init [Function]
 * @property data [Function]
 * @property complete [Function]
 * @property methods
 * @property node
 * @property on
 * @property initialized
 * @property completed
 * @property components
 * @property children
 * @property parent
 */
export class ComponentClass
{
    /**
     *
     * @param properties
     */
    constructor(properties = {})
    {
        this.setProperties(properties);

        if (typeof this.before === 'function' && !this.initialized) {
            this.before();
        }
        if (typeof this.element === 'string') {
            if(isHTMLString(this.element)) {
                this.element = str2node(this.element);
            } else {
                this.element = query(this.element);
            }
        }

        if (this.methods && Object.values(this.methods).length) {
            Object.keys(this.methods).forEach((key) => {
                if (typeof this.methods[key] === 'function') {
                    this.methods[key] = this.methods[key].bind(this);
                    if (!this.hasOwnProperty(key)) {
                        this[key] = this.methods[key];
                    }
                }
            });
        }

        if (typeof this.init === 'function' && !this.initialized){
            this.initialized = true;
            this.init();
        }

        if (this.data && Object.keys(this.data).length) {
            Object.keys(this.data).forEach((key) => {
                if (typeof this.data[key] === 'function') {
                    this.data[key] = this.data[key].bind(this);
                }
                if (!this.hasOwnProperty(key)) {
                    this[key] = this.data[key];
                }
            });
        }

        if (this.components && Object.keys(this.components).length) {
            Object.keys(this.components).forEach((key) => {
                if ( this.components[key] && this.components[key].hasOwnProperty('key')) {
                    this.components[key].parent = this;
                }
                this.children.push(this.components[key]);
            });
        }

        if (false && isNode(this.element)) {
            this.node = search('[data-node]', 'data-node', this.element);
            this.on = search('[data-on]', 'data-on', this.element);
        }

        if (typeof this.complete === 'function' && !this.completed) {
            if (document) {
                document.addEventListener('DOMContentLoaded', () => {
                    this.completed = true;
                    this.complete.call(this.complete, this);
                });
            } else {
                this.completed = true;
                this.complete.call(this.complete, this);
            }
        }

        Component.list[this.id] = this;
    }
    set template (template) {
        if (typeof template === 'string') {
            this.element = str2node(template);
        }
        if (isNode(template)) {
            this.element = template;
        }
    }
    get template () {
        return this.element;
    }
    component(name) {
        return ComponentClass.list[name];
    }
    componentChildren(name) {
        return ComponentClass.list[name];
    }
    clone(id) {
        const cloned = clone(this);
        cloned.template = cloned.template.cloneNode(true);
        return cloned;
    }
    setProperties(properties) {
        properties = merge(ComponentClassProperties, properties);
        Object.keys(properties).map(function (key) {
            if (typeof this[key] === "undefined") {
                this[key] = properties[key]
            }
        });
        return properties;
    }
}
ComponentClass.list = {};
