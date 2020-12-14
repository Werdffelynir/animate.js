import str2node from "../static/str2node";
import isNode from "../static/isNode";
import merge from "../static/merge";
import search from "../static/search";
import Roxy from "./Roxy";
import clone from "../static/clone";


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
            /*
            const property = toObject(root);
            property.template = root.template.cloneNode(root);
            property.id = id || property.id + '_' + (new Date()).getTime();
            root.template.parentNode.appendChild(property.template);
            return Component(property);
            */
        };


        if (typeof comp.before === 'function' && !comp.initialized){
            comp.before();
        }

        if (typeof comp.template === 'string') {
            comp.template = str2node(comp.template);
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