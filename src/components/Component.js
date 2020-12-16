import str2node from "../static/str2node";
import isNode from "../static/isNode";
import merge from "../static/merge";
import search from "../static/search";
import Roxy from "./Roxy";
import clone from "../static/clone";
import {randomHumanizeString, randomString} from "../static/random";
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

/**
 *
config:
    id: 'id',
    props: {},
    template: ``,
    init () {},
    data: {},
    complete () {},
    methods: {},
    node: {},
    components: {},
    override: false,
    initialized: false,
    completed: false,

Component({
    id: 'ExternalTemplateComponent',
    props: ['title'],
    template: 'template',
    init () {},
    data: {
        iterator: 0,
    },
    complete (app) {
        if (this.node['title'])
        this.node['title'].textContent = this.title;
    },
    methods: {
        add (e) {
            this.node.iterator.textContent = ++ this.data.iterator ;
        },
        min (e) {
            this.node.iterator.textContent = -- this.data.iterator ;
        },
    }
});

 * @param config
 * @returns {*}
 * @constructor
 */
const Component = function (config)
{
    if (typeof config === 'string') {
        // get property by id keyword
        return Component.list[config];
    } else {
        if (!config.id) {
            let randomName =  randomHumanizeString(6).toLowerCase();
            randomName = randomName.substring(0, 1).toUpperCase() + randomName.substring(1);
            config.id = 'Component' + randomName;
        }

        if (Component.list[config.id]) {
            return Component.list[config.id];
        }

        const comp = Component.create(config);

        comp.component = function (id) {
            return comp.components[id] ? comp.components[id] : null;
        };

        comp.componentChildren = function (id) {
            return comp.children.find((component) => component.id === id);
        };

        comp.clone = function (id) {
            const cloned = clone(this);
            cloned.template = cloned.template.cloneNode(true);
            return cloned;
        };

        if (typeof comp.before === 'function' && !comp.initialized){
            comp.before();
        }

        if (typeof comp.template === 'string') {
            if(isHTMLString(comp.template)) {
                comp.template = str2node(comp.template);
            } else {
                comp.template = query(comp.template);
            }
        }

        if (comp.methods && Object.values(comp.methods).length) {
            Object.keys(comp.methods).forEach((key) => {
                if (typeof comp.methods[key] === 'function') {
                    comp.methods[key] = comp.methods[key].bind(comp);
                    if (!comp.hasOwnProperty(key)) {
                        comp[key] = comp.methods[key];
                    }
                }
            });
        }

        if (typeof comp.init === 'function' && !comp.initialized){
            comp.initialized = true;
            comp.init();
        }

        if (comp.data && Object.keys(comp.data).length) {
            Object.keys(comp.data).forEach((key) => {
                if (typeof comp.data[key] === 'function') {
                    comp.data[key] = comp.data[key].bind(comp);
                }
                if (!comp.hasOwnProperty(key)) {
                    comp[key] = comp.data[key];
                }
            });
        }

        if (comp.components && Object.keys(comp.components).length) {
            Object.keys(comp.components).forEach((key) => {
                if ( comp.components[key] && comp.components[key].hasOwnProperty('key')) {
                    comp.components[key].parent = comp;
                }
                comp.children.push(comp.components[key]);
            });
        }

        if (isNode(comp.template)) {
            comp.node = search('[data-node]', 'data-node', comp.template);
            comp.on = search('[data-on]', 'data-on', comp.template);
        }

        if (typeof comp.complete === 'function' && !comp.completed) {
            if (document) {
                document.addEventListener('DOMContentLoaded', () => {
                    comp.completed = true;
                    comp.complete.call(comp, comp);
                });
            } else {
                comp.completed = true;
                comp.complete.call(comp, comp);
            }
        }

        Component.list[comp.id] = comp;
        return comp;
    }
};
Component.list = {};
Component.create = function (config) {
    return merge( {
        id: null,
        props: {},
        template: false,
        override: false,
        init: () => {},
        complete: () => {},
        methods: {},
        node: {},
        initialized: false,
        completed: false,
        components: {},
        children: [],
        parent: {},
    }, config)
};

export default Component;
