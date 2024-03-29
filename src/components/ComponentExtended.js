import str2node from "../static/str2node";
import isNode from "../static/isNode";
import merge from "../static/merge";
import search from "../static/search";
import clone from "../static/clone";
import {randomHumanizeString} from "../static/random";
import isHTMLString from "../static/isHTMLString";
import query from "../static/query";


/*
# Config
id: 'id',
props: {},
template: ``,

before () {},
init () {},
complete () {},

data: {},
methods: {},
components: {},

templateElementsEnabled: true,
templateElementsAttributes: COMPONENT_DATA_ATTRIBUTES,
override: false,
initialized: false,
completed: false,

# Base example
Component({
    id: 'ExternalTemplateComponent',
    props: ['title'],
    template: 'template',
    init () {},
    data: {},
    complete (app) {},
    methods: {}
});

# Extend example
Component({
    id: 'ExternalTemplateComponent',
    props: ['title'],
    template: 'template',
    init () {},
    data: {
        iterator: 0,
    },
    complete (app) {
        if (this.templateElements.node.title) this.templateElements.node.title.textContent = this.title;
    },
    methods: {
        add (e) {
            this.node.iterator.textContent = ++ this.data.iterator ;
        },
    }
});

comp = Component({...});
    templateElements: { func:{}, action:{}, node:{}, on:{} },
        If templateElementsEnabled is enabled during component initialization, attributes with names are requested
        from the template:
        COMPONENT_DATA_ATTRIBUTES === [data-func], [data-action], [data-node], [data-on]

comp.component(id)
comp.componentChildren(id)
comp.clone()
comp.on(event, callback)
comp.inject(elem, append = true)
comp.inject()
comp.elements(attr, name)
*/

/**
 * @param config
 * @returns {*}
 * @constructor
 */
const ComponentExtended = function (config) {
    if (typeof config === 'string') {
        // get property by id keyword
        return ComponentExtended.list[config];
    } else {
        if (!config.id) {
            let randomName = randomHumanizeString(6).toLowerCase();
            randomName = randomName.substring(0, 1).toUpperCase() + randomName.substring(1);
            config.id = 'ComponentExtended' + randomName;
        }

        if (ComponentExtended.list[config.id]) {
            return ComponentExtended.list[config.id];
        }
        const comp = ComponentExtended.create(config);
        // const comp = ComponentExtended.create(merge(config, {
        //     get parent(){
        //         return this.parentDOMElement;
        //     },
        //     set parent(value){
        //         if (!(value instanceof Node)) throw new Error('Parent must extend of Node');
        //         this.parentDOMElement = value;
        //     },
        // }));

        comp.component = function (id) {
            return comp.components[id] ? comp.components[id] : null;
        };

        comp.componentChildren = function (id) {
            return comp.children.find((component) => component.id === id);
        };

        comp.clone = function () {
            const cloned = clone(this);
            cloned.template = cloned.template.cloneNode(true);
            return cloned;
        };

        comp.on = function (event, callback) {
            comp.template.addEventListener(event, callback)
        };

        // comp.inject = function (elem, append = true) {
        //     if (typeof elem === 'string') {
        //         if (isHTMLString(elem)) {
        //             elem = str2node(elem);
        //         } else {
        //             elem = query(elem);
        //         }
        //     }
        //     if (!append) {
        //         comp.template.textContent = '';
        //     }
        //     if (isNode(elem)) {
        //         comp.template.appendChild(elem);
        //     }
        //     if (Array.isArray(elem)) {
        //         elem.forEach((e) => {comp.inject(e, true)});
        //     }
        // };

        comp.inject = function (elem, append = false) {
            if (Array.isArray(elem)) {
                elem.forEach((e) => {
                    comp.inject(e, true)
                });
            }
            if (!append) {
                comp.template.textContent = '';
            }
            if (isNode(elem)) {
                comp.template.appendChild(elem);
            }
            if (typeof elem === 'number') {
                elem = elem.toString();
            }
            if (typeof elem === 'string') {
                if (isHTMLString(elem)) {
                    elem = str2node(elem);
                    comp.template.appendChild(elem);
                } else {
                    comp.template.textContent += elem;
                }
            }
        };

        comp.append = function (elem) {
            comp.inject(elem, true);
        };

        if (typeof comp.before === 'function' && !comp.initialized) {
            comp.before();
        }

        if (typeof comp.template === 'string') {
            if (comp.template === '' || isHTMLString(comp.template)) {
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

        if (!comp.initialized) {
            comp.initialized = true;

            if (typeof comp.init === 'function')
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
                if (comp.components[key]) {
                    comp.components[key].parentComponent = comp;
                }
                comp.children.push(comp.components[key]);
            });
        }

        comp.elements = function (attr, name) {
            attr = attr.replace('data-', '');
            if (name) {
                return typeof comp.templateDataElements[attr][name] !== "undefined"
                    ? comp.templateDataElements[attr][name]
                    : null;
            }

            return typeof comp.templateDataElements[attr] !== "undefined"
                ? comp.templateDataElements[attr]
                : null;
        };

        comp.updateTemplateDataElements = function () {
            if (isNode(comp.template) && comp.templateDataElementsEnabled === true) {
                comp.templateDataElementsAttributes.forEach((attr) => {
                    const name = attr.substring(5);
                    comp.templateDataElements[name] = search('[' + attr + ']', attr, comp.template);
                });
            }
        };

        /*        comp.parent = function (parent) {
                    if (parent && parent.nodeType === Node.ELEMENT_NODE) {
                        return this.parentDOMElement = parent;
                    }
                    return this.parentDOMElement;
                };*/

        if (!comp.completed) {
            comp.updateTemplateDataElements();
            if (document) {
                document.addEventListener('DOMContentLoaded', () => {
                    comp.completed = true;
                    if (typeof comp.complete === 'function') comp.complete.call(comp, comp);
                });
            } else {
                comp.completed = true;
                if (typeof comp.complete === 'function') comp.complete.call(comp, comp);
            }
        }

        ComponentExtended.list[comp.id] = comp;
        return comp;
    }
};

ComponentExtended.list = {};
ComponentExtended.create = function (config) {
    return merge({
        id: null,
        props: {},
        template: false,
        override: false,
        init: () => {
        },
        complete: () => {
        },
        methods: {},
        node: {},
        initialized: false,
        completed: false,
        templateDataElements: {},
        templateDataElementsEnabled: true,
        templateDataElementsAttributes: COMPONENT_DATA_ATTRIBUTES,
        components: {},
        children: [],
        parentComponent: {},
    }, config)
};

export const COMPONENT_DATA_ATTRIBUTES = [
    'data-func',
    'data-action',
    'data-node',
    'data-on',
    'data-to',
    'data-id',
];

export default ComponentExtended;
