/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AnimationFrame.js":
/*!******************************************!*\
  !*** ./src/components/AnimationFrame.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/*
const animation = AnimationFrame();
animation.pause();
animation.start(function(progress){
    if (Math.round(progress) % 1000 === 0) {
        // do something
    }
});
animation.cancel();
*/
/**
 *
 * @returns {{duration: number, startpaly: number, paused: boolean, delay: number, requestId: number, callback: number, progress: number}}
 * @constructor
 */
var AnimationFrame = function AnimationFrame() {
    var root = {
        requestId: 0,
        startpaly: 0,
        paused: false,
        callback: 0,
        delay: 0,
        duration: 0,
        progress: 0
    };

    root.step = function (timestamp) {
        if (!root.startpaly) root.startpaly = timestamp;
        root.progress = timestamp - root.startpaly;

        if (root.callback) {
            root.callback.call(root, root.progress);
        }

        if (root.duration && root.duration > root.progress) {
            root.cancel();
        }

        window.requestAnimationFrame(root.step);
        if (root.paused) {
            window.requestAnimationFrame(root.step);
        }
    };

    root.pause = function () {
        root.paused = !root.paused;
    };

    root.start = function (callback) {
        if (callback) {
            root.callback = callback;
        }
        return root.requestId = window.requestAnimationFrame(root.step);
    };

    root.cancel = function () {
        window.cancelAnimationFrame(root.requestId);
    };

    return root;
};

exports.default = AnimationFrame;

/***/ }),

/***/ "./src/components/Clip.js":
/*!********************************!*\
  !*** ./src/components/Clip.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _clone = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _isString = __webpack_require__(/*! ../static/isString */ "./src/static/isString.js");

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property bottom
 * @property element
 * @property height
 * @property left
 * @property right
 * @property top
 * @property width
 * @property x
 * @property y
 * @method moveTo()
 * @method copyTo
 * @method on
 * @method clone
 * @method style
 * @method inject
 * @method append
 * @method remove
 * @method clear
 * @method on
 * @method clone
 *
 * @param element
 * @param onInitCallback
 * @returns {{ bottom: number, element: Object, height: number, left: number, right: number, top: number, width: number, x: number, y: number, moveTo: function, copyTo: function, on: function, clone: function, style: function, inject: function, append: function, remove: function, clear: function, on: function, clone: function, calculate: function }}
 * @constructor Clip()
 */
var Clip = function Clip(element, onInitCallback) {
    /**
     *
     * @type {{x: number, width: number, y: number, height: number, top: number, left: number, right: number, bottom: number, element: Object}}
     */
    var root = (0, _position2.default)(element);

    if (root.element instanceof Node) {
        var parent = (0, _position2.default)(element.parentNode);
        root.x = root.x - parent.x;
        root.y = root.y - parent.y;
        root.parent = parent;
        root.parent.element = element.parentNode;
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

    root.calculate = function (element) {
        element = (0, _isNode2.default)(element) || (0, _isString2.default)(element) ? element : this.element;
        var re_root = (0, _position2.default)(element);
        var re_parent = (0, _position2.default)(re_root.element.parentNode);

        if ((0, _isNode2.default)(re_parent.element)) {
            re_root.parent = root.calculate(re_parent.element);
        } else {
            re_root.parent = { x: 0, y: 0, width: 0, height: 0 };
        }
        re_root.x = re_root.x - re_parent.x;
        re_root.y = re_root.y - re_parent.y;

        var props = ['x', 'y', 'width', 'height', 'top', 'left', 'right', 'bottom', 'parent'];
        Object.keys(re_root).forEach(function (key) {
            if (props.includes(key)) {
                root[key] = re_root[key];
            }
        });
    };

    root.copyTo = function (parentElement) {
        root.element = (0, _copy2.default)(root.element);
        root.moveTo(parentElement);
    };

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback);
    };

    root.clone = function () {
        return (0, _clone2.default)(this);
    };

    root.style = function (object) {
        (0, _stylizer2.default)(root.element, object);
    };

    root.inject = function (elem) {
        var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        if (typeof elem === 'string') {
            if ((0, _isHTMLString2.default)(elem)) {
                elem = (0, _str2node2.default)(elem);
            } else {
                elem = (0, _query2.default)(elem);
            }
        }
        if (!append) {
            root.element.textContent = '';
        }

        if (Array.isArray(elem)) {
            elem.forEach(function (e) {
                root.inject(e, true);
            });
        }
        if ((0, _isNode2.default)(elem)) {
            root.element.appendChild(elem);
        }
    };

    root.append = function (elem) {
        root.inject(elem, true);
    };

    root.remove = function (elem) {
        if ((0, _isNode2.default)(elem)) {
            return root.element.removeChild(elem);
        } else {
            throw new TypeError('Failed argument type. Need NodeElement');
        }
    };

    root.clear = function () {
        root.element.textContent = '';
    };

    if (typeof onInitCallback === "function") {
        onInitCallback.call(root);
    }

    return root;
};

exports.default = Clip;

/***/ }),

/***/ "./src/components/Component.js":
/*!*************************************!*\
  !*** ./src/components/Component.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.COMPONENT_DATA_ATTRIBUTES = undefined;

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _clone = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _random = __webpack_require__(/*! ../static/random */ "./src/static/random.js");

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

config:
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
var Component = function Component(config) {
    if (typeof config === 'string') {
        // get property by id keyword
        return Component.list[config];
    } else {
        if (!config.id) {
            var randomName = (0, _random.randomHumanizeString)(6).toLowerCase();
            randomName = randomName.substring(0, 1).toUpperCase() + randomName.substring(1);
            config.id = 'Component' + randomName;
        }

        if (Component.list[config.id]) {
            return Component.list[config.id];
        }

        var comp = Component.create(config);

        comp.component = function (id) {
            return comp.components[id] ? comp.components[id] : null;
        };

        comp.componentChildren = function (id) {
            return comp.children.find(function (component) {
                return component.id === id;
            });
        };

        comp.clone = function () {
            var cloned = (0, _clone2.default)(this);
            cloned.template = cloned.template.cloneNode(true);
            return cloned;
        };

        comp.on = function (event, callback) {
            comp.template.addEventListener(event, callback);
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

        comp.inject = function (elem) {
            var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (Array.isArray(elem)) {
                elem.forEach(function (e) {
                    comp.inject(e, true);
                });
            }
            if (!append) {
                comp.template.textContent = '';
            }
            if ((0, _isNode2.default)(elem)) {
                comp.template.appendChild(elem);
            }
            if (typeof elem === 'number') {
                elem = elem.toString();
            }
            if (typeof elem === 'string') {
                if ((0, _isHTMLString2.default)(elem)) {
                    elem = (0, _str2node2.default)(elem);
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
            if ((0, _isHTMLString2.default)(comp.template)) {
                comp.template = (0, _str2node2.default)(comp.template);
            } else {
                comp.template = (0, _query2.default)(comp.template);
            }
        }

        if (comp.methods && Object.values(comp.methods).length) {
            Object.keys(comp.methods).forEach(function (key) {
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

            if (typeof comp.init === 'function') comp.init();
        }

        if (comp.data && Object.keys(comp.data).length) {
            Object.keys(comp.data).forEach(function (key) {
                if (typeof comp.data[key] === 'function') {
                    comp.data[key] = comp.data[key].bind(comp);
                }
                if (!comp.hasOwnProperty(key)) {
                    comp[key] = comp.data[key];
                }
            });
        }

        if (comp.components && Object.keys(comp.components).length) {
            Object.keys(comp.components).forEach(function (key) {
                if (comp.components[key]) {
                    comp.components[key].parentComponent = comp;
                }
                comp.children.push(comp.components[key]);
            });
        }

        comp.elements = function (attr, name) {
            return typeof comp.templateDataElements[attr][name] !== "undefined" ? comp.templateDataElements[attr][name] : null;
        };

        comp.updateTemplateDataElements = function () {
            if ((0, _isNode2.default)(comp.template) && comp.templateDataElementsEnabled === true) {
                comp.templateDataElementsAttributes.forEach(function (attr) {
                    var name = attr.substring(5);
                    comp.templateDataElements[name] = (0, _search2.default)('[' + attr + ']', attr, comp.template);
                });
            }
        };

        if (!comp.completed) {
            comp.updateTemplateDataElements();
            if (document) {
                document.addEventListener('DOMContentLoaded', function () {
                    comp.completed = true;
                    if (typeof comp.complete === 'function') comp.complete.call(comp, comp);
                });
            } else {
                comp.completed = true;
                if (typeof comp.complete === 'function') comp.complete.call(comp, comp);
            }
        }

        Component.list[comp.id] = comp;
        return comp;
    }
};

Component.list = {};
Component.create = function (config) {
    return (0, _merge2.default)({
        id: null,
        props: {},
        template: false,
        override: false,
        init: function init() {},
        complete: function complete() {},
        methods: {},
        node: {},
        initialized: false,
        completed: false,
        templateDataElements: {},
        templateDataElementsEnabled: true,
        templateDataElementsAttributes: COMPONENT_DATA_ATTRIBUTES,
        components: {},
        children: [],
        parentComponent: {}
    }, config);
};

var COMPONENT_DATA_ATTRIBUTES = exports.COMPONENT_DATA_ATTRIBUTES = ['data-func', 'data-action', 'data-node', 'data-on'];

exports.default = Component;

/***/ }),

/***/ "./src/components/EventManager.js":
/*!****************************************!*\
  !*** ./src/components/EventManager.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @deprecated
 * @type {{super: DocumentFragment, addEvent: (function(*=, *=): CustomEvent), removeEventListener: (function(*=, *=, *=): this), dispatchEvent: (function(*): this), eventsType: {}, removeEvent: (function(*): this), version: string, addEventListener: (function(*=, *=, *=): {type: *, listener: *, useCapture: (*|boolean)})}}
 */
var EventManager = {
    super: document.createDocumentFragment(),
    version: '0.0.2',
    eventsType: {},

    /**
     * Create new Event
     * @param name
     * @param details
     * @returns {CustomEvent}
     */
    addEvent: function addEvent(name, details) {
        var event = new CustomEvent(name, { detail: details });
        if ((typeof details === 'undefined' ? 'undefined' : _typeof(details)) === 'object') for (var key in details) {
            if (!event.hasOwnProperty(key)) event[key] = details[key];
        }EventManager.super[name] = event;
        return this;
    },

    /**
     * Remove Event
     * @param name
     */
    removeEvent: function removeEvent(name) {
        if (EventManager.super[name]) delete EventManager.super[name];
        return this;
    },

    /**
     * Register an event handler of a specific event type on the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     * @returns {{type: *, listener: *, useCapture: (*|boolean)}}
     */
    addEventListener: function addEventListener(type, listener, useCapture) {
        useCapture = useCapture || false;
        EventManager.super.addEventListener(type, listener, useCapture);
        return this;
    },

    /**
     * Removes an event listener from the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     */
    removeEventListener: function removeEventListener(type, listener, useCapture) {
        EventManager.super.removeEventListener(type, listener, useCapture || false);
        return this;
    },

    /**
     * Dispatch an event to this EventTarget.
     * @param type
     */
    dispatchEvent: function dispatchEvent(type) {
        if (EventManager.super[type] instanceof CustomEvent) EventManager.super.dispatchEvent(EventManager.super[type]);
        return this;
    }
};

exports.default = EventManager;

/***/ }),

/***/ "./src/components/Frames.js":
/*!**********************************!*\
  !*** ./src/components/Frames.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
const animation = Frames({
    fps: 24,
    paused: false,
});
animation.pause();
animation.start(function(progress){
    if (Math.round(progress) % 1000 === 0) {
        // do something
    }
});
animation.cancel();
*/
/**
 *
 * @returns {{duration: number, startpaly: number, paused: boolean, delay: number, requestId: number, callback: number, progress: number, start(callback): function, pause: function, cancel: function}}
 * @constructor
 */
var Frames = function Frames() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var internal = {
        fps: false,
        paused: false,
        now: 0,
        elapsed: 0,
        then: 0,
        fpsInterval: 0,
        frameCount: 0,
        startpaly: 0,
        progress: 0
    };

    var external = {};

    Object.keys(internal).forEach(function (key) {
        internal[key] = _typeof(parameters[key]) !== undefined ? parameters[key] : internal[key];
    });

    var animation = function animation(timestamp) {
        if (!internal.startpaly) internal.startpaly = timestamp;
        if (!internal.frameCount) internal.frameCount = 0;
        internal.progress = timestamp - internal.startpaly;

        if (internal.fps && internal.fps > 0) {
            internal.now = Date.now();
            internal.elapsed = internal.now - internal.then;
            if (internal.elapsed > internal.fpsInterval) {
                internal.then = internal.now - internal.elapsed % internal.fpsInterval;

                if (external.callback && !internal.paused) {
                    internal.frameCount++;
                    external.callback.call(external, internal.progress, internal.frameCount);
                }
            }
        } else {
            if (external.callback && !internal.paused) {
                internal.frameCount++;
                external.callback.call(external, internal.progress, internal.frameCount);
            }
        }

        requestAnimationFrame(animation);
    };

    external.pause = function () {
        internal.paused = !internal.paused;
    };

    external.start = function (callback) {
        if (callback) {
            external.callback = callback;
        }

        if (internal.fps > 0) {
            internal.fpsInterval = 1000 / internal.fps;
            internal.then = Date.now();
            internal.startTime = internal.then;
        }
        internal.requestId = window.requestAnimationFrame(animation);
    };

    external.cancel = function () {
        window.cancelAnimationFrame(internal.requestId);
    };

    return external;
};

exports.default = Frames;

/***/ }),

/***/ "./src/components/KeyboardEventManager.js":
/*!************************************************!*\
  !*** ./src/components/KeyboardEventManager.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var EventCodes = exports.EventCodes = {
    'Backspace': 8,
    'Tab': 9,
    'Enter': 13,
    'ShiftLeft': 16,
    'ShiftRight': 16,
    'ControlLeft': 17,
    'ControlRight': 17,
    'AltLeft': 18,
    'AltRight': 18,
    'Pause': 19,
    'Break': 19,
    'CapsLock': 20,
    'Escape': 27,
    'Space': 32,
    'PageUp': 33,
    'PageDown': 34,
    'End': 35,
    'Home': 36,
    'ArrowLeft': 37,
    'ArrowUp': 38,
    'ArrowRight': 39,
    'ArrowDown': 40,
    'PrintScreen': 44,
    'Insert': 45,
    'Delete': 46,
    'Digit0': 48,
    'Digit1': 49,
    'Digit2': 50,
    'Digit3': 51,
    'Digit4': 52,
    'Digit5': 53,
    'Digit6': 54,
    'Digit7': 55,
    'Digit8': 56,
    'Digit9': 57,
    'KeyA': 65,
    'KeyB': 66,
    'KeyC': 67,
    'KeyD': 68,
    'KeyE': 69,
    'KeyF': 70,
    'KeyG': 71,
    'KeyH': 72,
    'KeyI': 73,
    'KeyJ': 74,
    'KeyK': 75,
    'KeyL': 76,
    'KeyM': 77,
    'KeyN': 78,
    'KeyO': 79,
    'KeyP': 80,
    'KeyQ': 81,
    'KeyR': 82,
    'KeyS': 83,
    'KeyT': 84,
    'KeyU': 85,
    'KeyV': 86,
    'KeyW': 87,
    'KeyX': 88,
    'KeyY': 89,
    'KeyZ': 90,
    'MetaLeft': 91,
    'MetaRight': 92,
    'ContextMenu': 93,
    'Numpad0': 96,
    'Numpad1': 97,
    'Numpad2': 98,
    'Numpad3': 99,
    'Numpad4': 100,
    'Numpad5': 101,
    'Numpad6': 102,
    'Numpad7': 103,
    'Numpad8': 104,
    'Numpad9': 105,
    'NumpadMultiply': 106,
    'NumpadAdd': 107,
    'NumpadSubtract': 109,
    'NumpadDecimal': 110,
    'NumpadDivide': 111,
    'F1': 112,
    'F2': 113,
    'F3': 114,
    'F4': 115,
    'F5': 116,
    'F6': 117,
    'F7': 118,
    'F8': 119,
    'F9': 120,
    'F10': 121,
    'F11': 122,
    'F12': 123,
    'NumLock': 144,
    'ScrollLock': 145,
    'Semicolon': 186,
    'Equal': 187,
    'Comma': 188,
    'Minus': 189,
    'Period': 190,
    'Slash': 191,
    'Backquote': 192,
    'BracketLeft': 219,
    'Backslash': 220,
    'BracketRight': 221,
    'Quote': 222
};

var EventCodesNames = exports.EventCodesNames = {
    'Backspace': 'Backspace',
    'Tab': 'Tab',
    'Enter': 'Enter',
    'ShiftLeft': 'ShiftLeft',
    'ShiftRight': 'ShiftRight',
    'ControlLeft': 'ControlLeft',
    'ControlRight': 'ControlRight',
    'AltLeft': 'AltLeft',
    'AltRight': 'AltRight',
    'Pause': 'Pause',
    'Break': 'Break',
    'CapsLock': 'CapsLock',
    'Escape': 'Escape',
    'Space': 'Space',
    'PageUp': 'PageUp',
    'PageDown': 'PageDown',
    'End': 'End',
    'Home': 'Home',
    'ArrowLeft': 'ArrowLeft',
    'ArrowUp': 'ArrowUp',
    'ArrowRight': 'ArrowRight',
    'ArrowDown': 'ArrowDown',
    'PrintScreen': 'PrintScreen',
    'Insert': 'Insert',
    'Delete': 'Delete',
    'Digit0': 'Digit0',
    'Digit1': 'Digit1',
    'Digit2': 'Digit2',
    'Digit3': 'Digit3',
    'Digit4': 'Digit4',
    'Digit5': 'Digit5',
    'Digit6': 'Digit6',
    'Digit7': 'Digit7',
    'Digit8': 'Digit8',
    'Digit9': 'Digit9',
    'KeyA': 'KeyA',
    'KeyB': 'KeyB',
    'KeyC': 'KeyC',
    'KeyD': 'KeyD',
    'KeyE': 'KeyE',
    'KeyF': 'KeyF',
    'KeyG': 'KeyG',
    'KeyH': 'KeyH',
    'KeyI': 'KeyI',
    'KeyJ': 'KeyJ',
    'KeyK': 'KeyK',
    'KeyL': 'KeyL',
    'KeyM': 'KeyM',
    'KeyN': 'KeyN',
    'KeyO': 'KeyO',
    'KeyP': 'KeyP',
    'KeyQ': 'KeyQ',
    'KeyR': 'KeyR',
    'KeyS': 'KeyS',
    'KeyT': 'KeyT',
    'KeyU': 'KeyU',
    'KeyV': 'KeyV',
    'KeyW': 'KeyW',
    'KeyX': 'KeyX',
    'KeyY': 'KeyY',
    'KeyZ': 'KeyZ',
    'MetaLeft': 'MetaLeft',
    'MetaRight': 'MetaRight',
    'ContextMenu': 'ContextMenu',
    'Numpad0': 'Numpad0',
    'Numpad1': 'Numpad1',
    'Numpad2': 'Numpad2',
    'Numpad3': 'Numpad3',
    'Numpad4': 'Numpad4',
    'Numpad5': 'Numpad5',
    'Numpad6': 'Numpad6',
    'Numpad7': 'Numpad7',
    'Numpad8': 'Numpad8',
    'Numpad9': 'Numpad9',
    'NumpadMultiply': 'NumpadMultiply',
    'NumpadAdd': 'NumpadAdd',
    'NumpadSubtract': 'NumpadSubtract',
    'NumpadDecimal': 'NumpadDecimal',
    'NumpadDivide': 'NumpadDivide',
    'F1': 'F1',
    'F2': 'F2',
    'F3': 'F3',
    'F4': 'F4',
    'F5': 'F5',
    'F6': 'F6',
    'F7': 'F7',
    'F8': 'F8',
    'F9': 'F9',
    'F10': 'F10',
    'F11': 'F11',
    'F12': 'F12',
    'NumLock': 'NumLock',
    'ScrollLock': 'ScrollLock',
    'Semicolon': 'Semicolon',
    'Equal': 'Equal',
    'Comma': 'Comma',
    'Minus': 'Minus',
    'Period': 'Period',
    'Slash': 'Slash',
    'Backquote': 'Backquote',
    'BracketLeft': 'BracketLeft',
    'Backslash': 'Backslash',
    'BracketRight': 'BracketRight',
    'Quote': 'Quote'
};

var EventKeys = exports.EventKeys = {
    'backspace': 8,
    'tab': 9,
    'enter': 13,
    'shift(left)': 16,
    'shift(right)': 16,
    'ctrl(left)': 17,
    'ctrl(right)': 17,
    'alt(left)': 18,
    'alt(right)': 18,
    'pause/break': 19,
    'caps lock': 20,
    'escape': 27,
    'space': 32,
    'page up': 33,
    'page down': 34,
    'end': 35,
    'home': 36,
    'left arrow': 37,
    'up arrow': 38,
    'right arrow': 39,
    'down arrow': 40,
    'print screen': 44,
    'insert': 45,
    'delete': 46,
    '0': 48,
    '1': 49,
    '2': 50,
    '3': 51,
    '4': 52,
    '5': 53,
    '6': 54,
    '7': 55,
    '8': 56,
    '9': 57,
    'a': 65,
    'b': 66,
    'c': 67,
    'd': 68,
    'e': 69,
    'f': 70,
    'g': 71,
    'h': 72,
    'i': 73,
    'j': 74,
    'k': 75,
    'l': 76,
    'm': 77,
    'n': 78,
    'o': 79,
    'p': 80,
    'q': 81,
    'r': 82,
    's': 83,
    't': 84,
    'u': 85,
    'v': 86,
    'w': 87,
    'x': 88,
    'y': 89,
    'z': 90,
    'numpad 0': 96,
    'numpad 1': 97,
    'numpad 2': 98,
    'numpad 3': 99,
    'numpad 4': 100,
    'numpad 5': 101,
    'numpad 6': 102,
    'numpad 7': 103,
    'numpad 8': 104,
    'numpad 9': 105,
    'multiply': 106,
    'add': 107,
    'subtract': 109,
    'divide': 111,
    'decimal point': 110,
    'f1': 112,
    'f2': 113,
    'f3': 114,
    'f4': 115,
    'f5': 116,
    'f6': 117,
    'f7': 118,
    'f8': 119,
    'f9': 120,
    'f10': 121,
    'f11': 122,
    'f12': 123,
    'num lock': 144,
    'scroll lock': 145
};

var EventKeysNames = exports.EventKeysNames = {

    'backspace': 'backspace',
    'tab': 'tab',
    'enter': 'enter',
    'shift(left)': 'shift(left)',
    'shift(right)': 'shift(right)',
    'ctrl(left)': 'ctrl(left)',
    'ctrl(right)': 'ctrl(right)',
    'alt(left)': 'alt(left)',
    'alt(right)': 'alt(right)',
    'pause/break': 'pause/break',
    'caps lock': 'caps lock',
    'escape': 'escape',
    'space': 'space',
    'page up': 'page up',
    'page down': 'page down',
    'end': 'end',
    'home': 'home',
    'left arrow': 'left arrow',
    'up arrow': 'up arrow',
    'right arrow': 'right arrow',
    'down arrow': 'down arrow',
    'print screen': 'print screen',
    'insert': 'insert',
    'delete': 'delete',
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z',
    'numpad 0': 'numpad 0',
    'numpad 1': 'numpad 1',
    'numpad 2': 'numpad 2',
    'numpad 3': 'numpad 3',
    'numpad 4': 'numpad 4',
    'numpad 5': 'numpad 5',
    'numpad 6': 'numpad 6',
    'numpad 7': 'numpad 7',
    'numpad 8': 'numpad 8',
    'numpad 9': 'numpad 9',
    'multiply': 'multiply',
    'add': 'add',
    'subtract': 'subtract',
    'divide': 'divide',
    'decimal point': 'decimal point',
    'f1': 'f1',
    'f2': 'f2',
    'f3': 'f3',
    'f4': 'f4',
    'f5': 'f5',
    'f6': 'f6',
    'f7': 'f7',
    'f8': 'f8',
    'f9': 'f9',
    'f10': 'f10',
    'f11': 'f11',
    'f12': 'f12',
    'num lock': 'num lock',
    'scroll lock': 'scroll lock'

    /*
    const keyboard = KeyboardEventManager();
    keyboard.each(EVENT_NAME, function (event) {})
    keyboard.withConditionKey
    keyboard.press()
    keyboard.up()
    keyboard.down()
    */
    /**
     *
     * @returns {{withConditionKey(*=, *=, *=): void, up(*=, *=): void, press(*=, *=): void, down(*=, *=): void, each(*=, *=): void}}
     * @constructor
     */
};var KeyboardEventManager = function KeyboardEventManager() {
    var storage = {};
    var baseCallbacksList = {};
    var addStorage = function addStorage(event, key, callback) {
        if (!storage[event]) storage[event] = {};
        if (!storage[event][key]) storage[event][key] = [];
        storage[event][key].push(callback);

        if (typeof baseCallbacksList[event] !== 'function') {
            baseCallbacksList[event] = baseCallback;
        }
    };

    var baseCallback = function baseCallback(event) {
        Object.keys(storage).map(function (type) {
            Object.keys(storage[type]).map(function (keyCode) {
                if (Array.isArray(storage[type][keyCode])) {
                    storage[type][keyCode].map(function (callback) {

                        if (event.type === type && parseInt(keyCode) === event.keyCode) {
                            callback.call(event, event);
                        }
                    });
                }
            });
        });
    };

    var eachCallbacksList = {};
    var eachCallback = function eachCallback(event, callback) {
        eachCallbacksList[event] = callback;
    };

    function setupListeners() {
        var removeEventListeners = function removeEventListeners() {
            Object.keys(baseCallbacksList).map(function (event) {
                document.removeEventListener(event, baseCallbacksList[event]);
            });
            Object.keys(eachCallbacksList).map(function (event) {
                document.removeEventListener(event, eachCallbacksList[event]);
            });
        };
        var addEventListeners = function addEventListeners() {
            Object.keys(baseCallbacksList).map(function (event) {
                document.addEventListener(event, baseCallbacksList[event]);
            });
            Object.keys(eachCallbacksList).map(function (event) {
                document.addEventListener(event, eachCallbacksList[event]);
            });
        };
        removeEventListeners();
        addEventListeners();
    }

    var codeToKeyCode = function codeToKeyCode(key) {
        if (typeof key === 'string' && EventCodes[key] && typeof EventCodes[key] == "number") {
            return EventCodes[key];
        }

        if (typeof key === 'string' && EventKeys[key] && typeof EventKeys[key] == "number") {
            return EventKeys[key];
        }

        throw new Error('Key string not fond');
    };

    var root = {
        each: function each(event, callback) {
            eachCallback(event, callback);
            setupListeners();
        },
        withConditionKey: function withConditionKey(event, key, callback) {
            if (typeof key === 'string') {
                key = codeToKeyCode(key);
            }
            addStorage(event, key, callback);
            setupListeners();
        },
        press: function press(key, callback) {
            root.withConditionKey('keypress', key, callback);
        },
        up: function up(key, callback) {
            root.withConditionKey('keyup', key, callback);
        },
        down: function down(key, callback) {
            root.withConditionKey('keydown', key, callback);
        }
    };

    return root;
};

KeyboardEventManager.EventCodes = EventCodes;
KeyboardEventManager.EventKeys = EventKeys;

KeyboardEventManager.getEventKeyByEventCode = function (eventCode) {
    var currentEventKey = false;
    var which = EventCodes[eventCode];
    Object.keys(EventKeys).filter(function (key, index) {
        if (EventKeys[key] === which) {
            return currentEventKey = key;
        }
    });

    return currentEventKey;
};

KeyboardEventManager.getEventCodeByEventKey = function (eventKey) {
    var currentEventCode = false;
    var which = EventKeys[eventKey];
    Object.keys(EventCodes).filter(function (key, index) {
        if (EventCodes[key] === which) {
            return currentEventCode = key;
        }
    });

    return currentEventCode;
};

KeyboardEventManager.getWhichByEventCode = function (eventCode) {
    return EventCodes[eventCode];
};

KeyboardEventManager.getEventCodeByWhich = function (which) {
    var currentEventCode = false;
    Object.keys(EventCodes).filter(function (key, index) {
        if (EventCodes[key] === which) {
            return currentEventCode = key;
        }
    });

    return currentEventCode;
};

exports.default = KeyboardEventManager;

/***/ }),

/***/ "./src/components/Loader.js":
/*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Loader.audios: ƒ (srcs, callback)
 * Loader.images: ƒ (imgs, callback)
 * Loader.javascript: ƒ (src, callback, onerror)
 * Loader.json: ƒ (src, callback, onerror)
 * @property
 * @method json
 * @method jsons
 * @method javascript
 * @method images
 * @method audios
 * @returns {{}}
 * @constructor
 */
var Loader = function Loader() {
    return {
        json: Loader.json,
        jsons: Loader.jsons,
        javascript: Loader.javascript,
        images: Loader.images,
        audios: Loader.audios,
        videos: Loader.video
    };
};

/**
 * .json('/url/datafile.json', (json) => {}, (error) => {})
 *
 * @param src
 * @param callback
 * @param onerror
 */
Loader.json = function (src, callback, onerror) {
    fetch(src).then(function (response) {
        return response.json();
    }).then(function (json) {
        return callback(json);
    }).catch(function (error) {
        return typeof onerror === 'function' ? onerror(error) : null;
    });
};

/**
 *
 * @param srcs
 * @param callback
 * @param onerror
 */
Loader.jsons = function (srcs, callback, onerror) {
    if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {

        if (Array.isArray(srcs)) {
            var obj = {};
            srcs.map(function (item) {
                obj[Math.random().toString(32).slice(2)] = item;
            });
            srcs = obj;
        }

        var scripts = {};
        var length = Object.keys(srcs).length;
        var iterator = 0;

        Object.keys(srcs).forEach(function (key) {
            var src = srcs[key];
            Loader.json(src, function (json) {
                scripts[key] = json;
                iterator++;
                if (iterator === length) {
                    callback.call({}, scripts);
                }
            }, onerror);
        });
    }
};

/**
 * Loads a script element with javascript source
 *
 * .javascript ( {
 *      my_script1: '/path/to/my_script1',
 *      my_script2: '/path/to/my_script2',
 *    },
 *    function (list) {})
 *
 * .javascript ( [
 *      '/path/to/my_script1',
 *      '/path/to/my_script2',
 *    ],
 *    function (list) {})
 *
 * @namespace Loader.javascript
 * @param srcs       Object, Array. items: key is ID, value is src
 * @param callback  Function called when all srcs is loaded
 * @param onerror   Function called when load is failed
 * @returns {*}
 */
Loader.javascript = function (srcs, callback, onerror) {
    if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {

        if (Array.isArray(srcs)) {
            var obj = {};
            srcs.map(function (item) {
                obj[Math.random().toString(32).slice(2)] = item;
            });
            srcs = obj;
        }

        var length = Object.keys(srcs).length;
        var scripts = {};
        var script = void 0;
        var iterator = 0;

        Object.keys(srcs).forEach(function (key) {
            script = document.createElement('script');
            script.src = srcs[key].substr(-3) === '.js' ? srcs[key] : srcs[key] + '.js';
            script.type = 'application/javascript';
            script.id = key;
            script.onerror = onerror;
            script.onload = function (e) {
                scripts[this.id] = this;
                iterator++;
                if (iterator === length) {
                    callback.call({}, scripts);
                }
            };
            document.head.appendChild(script);
        });
    }
};

/**
 * Load an images
 *
 * .images ( {
 *      img1: '/path/to/img1',
 *      img2: '/path/to/img2',
 *    },
 *    function (list) {})
 *
 * @namespace Animate.Loader.images
 * @param imgs
 * @param callback
 */
Loader.images = function (imgs, callback) {
    if (imgs && (typeof imgs === 'undefined' ? 'undefined' : _typeof(imgs)) === 'object') {
        (function () {
            var length = Object.keys(imgs).length;
            var images = {};
            var iterator = 0;
            for (var name in imgs) {
                var img = document.createElement('img');
                img.src = imgs[name];
                img.name = name;
                img.onload = function (e) {
                    images[this.name] = this;
                    iterator++;
                    if (iterator === length) {
                        callback.call({}, images);
                    }
                };
            }
        })();
    }
};

/**
 * Load an audio files
 *
 * .audios ( {
 *      audio1: '/path/to/audio1',
 *      audio2: '/path/to/audio2',
 *    },
 *    function (list) {})
 *
 * @namespace Animate.Loader.audios
 * @param srcs
 * @param callback
 */
Loader.audios = function (srcs, callback) {
    if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {
        var length = Object.keys(srcs).length;
        var audios = {};
        var iterator = 0;
        for (var name in srcs) {
            var audio = document.createElement('audio');
            audio.src = srcs[name];
            audio.name = name;
            audio.preload = 'auto';
            audios[name] = audio;
            iterator++;
            if (iterator === length) {
                callback.call({}, audios);
            }
        }
    }
};

/**
 * Load an video files
 *
 * .videos ( {
 *      video1: '/path/to/video1',
 *      video2: '/path/to/video2',
 *    },
 *    function (list) {})
 *
 * @namespace Animate.Loader.videos
 * @param srcs
 * @param callback
 */
Loader.videos = function (srcs, callback) {
    if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {
        var length = Object.keys(srcs).length;
        var videos = {};
        var iterator = 0;
        for (var name in srcs) {
            var video = document.createElement('video');
            video.src = srcs[name];
            video.name = name;
            video.preload = 'auto';
            videos[name] = video;
            iterator++;
            if (iterator === length) {
                callback.call({}, videos);
            }
        }
    }
};

exports.default = Loader;

/***/ }),

/***/ "./src/components/Matrix.js":
/*!**********************************!*\
  !*** ./src/components/Matrix.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**

a (m11) Horizontal scaling.
b (m12) Horizontal skewing.
c (m21) Vertical skewing.
d (m22) Vertical scaling.
e (dx) Horizontal moving.
f (dy) Vertical moving.
*/
var Matrix = function Matrix(m11, m12, m21, m22, gx, gy) {
    return { m11: m11, m12: m12, m21: m21, m22: m22, gx: gx, gy: gy };
};

exports.default = Matrix;

/***/ }),

/***/ "./src/components/MoveClip.js":
/*!************************************!*\
  !*** ./src/components/MoveClip.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Clip = __webpack_require__(/*! ./Clip */ "./src/components/Clip.js");

var _Clip2 = _interopRequireDefault(_Clip);

var _toObject = __webpack_require__(/*! ../static/toObject */ "./src/static/toObject.js");

var _toObject2 = _interopRequireDefault(_toObject);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _random = __webpack_require__(/*! ../static/random */ "./src/static/random.js");

var _extend = __webpack_require__(/*! ../static/extend */ "./src/static/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _isString = __webpack_require__(/*! ../static/isString */ "./src/static/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var MoveClip = function MoveClip(config) {
    var element = config.element;

    var clip = (0, _Clip2.default)(element);

    if (!clip.element) {
        throw new Error('Property [element] not fond!');
    }

    var name = (0, _random.randomHumanizeString)(6);
    name = name.substring(0, 1).toUpperCase() + name.substring(1);
    clip.element.setAttribute('data-miveclip', config.id || 'miveclip' + name);

    var root = {
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
            return clip.x;
        },
        get y() {
            return clip.y;
        },
        get width() {
            return clip.width;
        },
        get height() {
            return clip.height;
        },
        // style({ transform: 'rotate(10deg) scale(0.6, 0.6) matrix(1, 0, 0, 1, 0, 0)', });
        style: function style(object) {
            (0, _stylizer2.default)(root.element, object);
        }
    };

    delete config.element;
    delete config.initialized;

    Object.keys(config).map(function (key) {
        root[key] = config[key];
    });

    // if (typeof root.init === 'function' && !root.initialized){
    //     root.initialized = true;
    //     root.init.call(root);
    // }

    root.clone = function () {
        var append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var node = (0, _isNode2.default)(root.element) ? root.element.cloneNode(true) : '<div />';

        var conf = {
            element: node,
            parent: root.parent,
            initialized: false,
            completed: false,
            cloned: true
        };

        conf = Object.assign(Object.assign({}, this), conf);

        var mc = MoveClip(conf);

        if (append) {
            if ((0, _isNode2.default)(root.parent)) {
                root.parent.appendChild(mc.element);
            } else if (typeof root.parent.append === 'function') {
                root.parent.append(mc.element);
            }
        }

        return mc;
    };

    root.inject = function (elem) {
        var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (Array.isArray(elem)) {
            elem.forEach(function (e) {
                root.inject(e, true);
            });
        }

        if (!append) {
            root.element.textContent = '';
        }

        if ((0, _isNode2.default)(elem)) {
            root.element.appendChild(elem);
        }

        if (typeof elem === 'number') {
            elem = elem.toString();
        }

        if (typeof elem === 'string') {
            if ((0, _isHTMLString2.default)(elem)) {
                elem = (0, _str2node2.default)(elem);
                root.element.appendChild(elem);
            } else {
                root.element.textContent += elem;
            }
        }
    };

    root.append = function (elem) {
        root.inject(elem, true);
    };

    root.remove = function (elem) {
        if ((0, _isNode2.default)(elem)) {
            return root.element.removeChild(elem);
        } else {
            throw new TypeError('Failed argument type. Need NodeElement');
        }
    };

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback);
    };

    root.calculate = function (element) {
        element = (0, _isNode2.default)(element) || (0, _isString2.default)(element) ? element : this.element;
        var re_root = (0, _position2.default)(element);
        var re_parent = (0, _position2.default)(re_root.element.parentNode);

        if ((0, _isNode2.default)(re_parent.element)) {
            re_root.parent = root.calculate(re_parent.element);
        } else {
            re_root.parent = { x: 0, y: 0, width: 0, height: 0 };
        }
        re_root.x = re_root.x - re_parent.x;
        re_root.y = re_root.y - re_parent.y;

        var props = ['x', 'y', 'width', 'height', 'top', 'left', 'right', 'bottom', 'parent'];
        Object.keys(re_root).forEach(function (key) {
            if (props.includes(key)) {
                root[key] = re_root[key];
            }
        });
    };

    if (typeof root.init === 'function' && !root.initialized) {
        root.initialized = true;
        root.init.call(root);
    }

    if (typeof root.complete === 'function' && !root.completed) {
        root.completed = true;
        root.complete.call(root);
    }

    return root;
};

exports.default = MoveClip;

/***/ }),

/***/ "./src/components/Point.js":
/*!*********************************!*\
  !*** ./src/components/Point.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Point = function Point(x, y) {
    return { x: x, y: y };
};

exports.default = Point;

/***/ }),

/***/ "./src/components/Rectangle.js":
/*!*************************************!*\
  !*** ./src/components/Rectangle.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var Rectangle = function Rectangle(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
};

exports.default = Rectangle;

/***/ }),

/***/ "./src/components/Router.js":
/*!**********************************!*\
  !*** ./src/components/Router.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _trimSymbols = __webpack_require__(/*! ../static/trimSymbols */ "./src/static/trimSymbols.js");

var _trimSymbols2 = _interopRequireDefault(_trimSymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Router = function Router(config) {
    var root = {};
    root.hash = location.hash;
    root.root = '/' + (0, _trimSymbols2.default)(config.root, '/');
    root.pathname = '/' + (0, _trimSymbols2.default)(location.pathname, '/') + '/';
    root.routes = config.routes ? config.routes : {};
    root.context = config.context ? config.context : {};

    root.to = function (key) {
        console.log(key);
        if (typeof root.routes[key] === "function") {
            root.routes[key].call({}, root.context);
        }
    };

    Object.keys(root.routes).forEach(function (key) {
        var is = key.includes('#') ? key === root.hash : root.root + key === root.pathname;

        if (is && typeof root.routes[key] === "function") {
            root.routes[key].call(root.context, root.context);
        }
    });

    return root;
};

exports.default = Router;

/***/ }),

/***/ "./src/components/Roxy.js":
/*!********************************!*\
  !*** ./src/components/Roxy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Roxy = function Roxy(payload) {
    var propertiesChangeEventCallbacks = {
        default: null
    };

    var proxy = new Proxy(payload, {
        get: function get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set: function set(obj, prop, value) {

            obj[prop] = value;

            if (propertiesChangeEventCallbacks[prop] && typeof propertiesChangeEventCallbacks[prop] === "function") propertiesChangeEventCallbacks[prop].call({}, prop, value, (0, _copy2.default)(proxy));

            if (typeof propertiesChangeEventCallbacks.default === "function") propertiesChangeEventCallbacks.default.call({}, prop, value, (0, _copy2.default)(proxy));

            return true;
        }
    });

    return {

        /**
         * older name: see|set?
         * @param key
         * @param payload
         * @returns {*}
         */
        dispatch: function dispatch(key, payload) {
            var result = void 0;

            if (typeof key === "function" && !payload) {
                result = key.call({}, proxy);
                if (result) this.fill(result);
            } else if (typeof payload === "function") {
                result = payload.call({}, proxy[key]);
                if (result) proxy[key] = result;
            } else proxy[key] = payload;

            return this;
        },


        /**
         * action()
         * @deprecated
         * @param key
         * @param callback
         * @returns {*}
         */
        event: function event(key, callback) {
            return this.observe(key, callback);
        },


        /**
         * Event change properties of source object
         * @param key
         * @param callback
         * @returns {*}
         */
        observe: function observe(key, callback) {
            if (typeof key === "function" && !callback) {
                propertiesChangeEventCallbacks.default = key;
            } else propertiesChangeEventCallbacks[key] = typeof callback === "function" ? callback : null;

            return this;
        },
        get: function get(key) {
            return key ? proxy[key] : (0, _copy2.default)(proxy);
        },
        fill: function fill(payload, to) {
            Object.keys(payload).forEach(function (key) {
                if (to) {
                    if (!proxy[to]) proxy[to] = {};
                    proxy[to][key] = payload[key];
                } else {
                    proxy[key] = payload[key];
                }
            });

            return this;
        },


        get proxy() {
            return proxy;
        },

        getProxy: function getProxy() {
            return proxy;
        }
    };
}; /*
   const RxState = Roxy({
       title: '',
       body: '',
   });
   
   RxState.event((key, values)=>{
       if (key === '') {}
       inject('#' + key, values);
   });
   
   RxState.proxy.title = 'First value';
   RxState.proxy.body = 'Test body text';
   
   Timer.timeout(() => {
       RxState.dispatch('title', 'Hello friend');
       RxState.dispatch('body', 'Do you happy now?');
   }, 2000);
   
   */

/**
 * @param payload
 * @returns {{proxy: *, set(*=, *=): *, get(*): *, action(*=, *=): *, fill(*=, *=): *}|Roxy|{}|null|boolean}
 * @constructor
 */
exports.default = Roxy;

/***/ }),

/***/ "./src/components/RoxyListener.js":
/*!****************************************!*\
  !*** ./src/components/RoxyListener.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Roxy = __webpack_require__(/*! ./Roxy */ "./src/components/Roxy.js");

var _Roxy2 = _interopRequireDefault(_Roxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * const rx = RoxyListener ({
 *     eventName () { // handler ... },
 *     eventName () { // handler ... },
 * })
 * rx.set();
 * rx.dispatch();
 *
 * rx.action();
 *
 * @param payload
 * @returns {{proxy: *, dispatch(*=, *=): Roxy, get(*): *, event(*=, *=): this, fill(*=, *=): this}}
 * @constructor
 */
var RoxyListener = function RoxyListener(payload) {

    var actions = {
        __action__: function __action__() {}
    };

    var actionsNames = {};

    Object.keys(payload).map(function (eventName, index) {
        actions[eventName] = payload[eventName];

        if (typeof payload[eventName] === 'function' && eventName !== actions.__action__.name) {
            actionsNames[eventName] = '';
        }
    });

    var rx = (0, _Roxy2.default)(actionsNames);
    //
    rx.actions = function () {
        return actionsNames;
    };

    rx.event(function (eventCursor, values) {
        actions.__action__.call(actions, eventCursor, values);

        Object.keys(actions).map(function (eventName, index) {

            if (eventCursor === eventName && typeof actions[eventName] === 'function') {
                actions[eventName].call(actions, eventCursor, values);
            }
        });
    });

    return rx;
};

exports.default = RoxyListener;

/***/ }),

/***/ "./src/components/Scene.js":
/*!*********************************!*\
  !*** ./src/components/Scene.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _clone = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
add(name, callback, attrs)  // add new scene
get(name)                   // returned scene by name
getCurrentScene()           // returned current scene
next()                      // to next scene
run(name, attrs)            // run scenes by name, set this key name to default
clone()                     // cloned current scenes

const scene = Scene();
scene.add('editor', function (a, b, c, d) {
    console.log(a, b, c, d);
})
scene.add('output', function (a, b, c, d) {
    console.log(a, b, c, d);
})
scene.run('output', ['hello', 200, [1,2,3], {id: 123}]);

// init v 2
const sceneContext = {};
const scene = Scene({
    editor () {},
    output () {},
});
*/

/**
 *
 * @param properties
 * @param community_arguments
 * @returns {{current: string, scenes: {default: {callback(): void, attrs: []}}, element: null}}
 * @constructor
 */

var Scene = function Scene(properties) {
    var community_arguments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var root = {
        current: 'default',
        element: null,
        scenes: {
            default: {
                callback: function callback() {
                    console.log('[Default Scene]');
                },

                attrs: []
            }
        }
    };

    root.add = function (name, callback) {
        var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        root.scenes[name] = {
            callback: callback,
            attrs: attrs
        };
    };

    root.get = function (name) {
        return root.scenes[name];
    };

    root.getCurrentScene = function () {
        return root.scenes[root.current];
    };

    root.next = function () {
        var lest = false;
        var keys = Object.keys(root.scenes);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] === root.current) {
                if (typeof keys[i + 1] !== "undefined") lest = keys[i + 1];
                if (i === keys.length - 1) {
                    lest = keys[0];
                }
                break;
            }
        }
        root.open(lest);
    };

    root.open = function (key, attrs) {
        root.current = key || 'default';
        var scene = root.getCurrentScene();
        var callback = scene.callback;

        if (typeof callback === "function") {
            if (attrs) {
                attrs = Array.isArray(attrs) ? attrs : [attrs];
            }
            // todo: changed apply to call
            callback.apply(root, attrs ? attrs : scene.attrs);
        }
    };

    /** @deprecated */
    root.show = function (key, attrs) {
        root.open(key, attrs);
    };
    /** @deprecated */
    root.start = function (key, attrs) {
        root.open(key, attrs);
    };
    /** @deprecated */
    root.run = function (key, attrs) {
        root.open(key, attrs);
    };

    root.clone = function () {
        return (0, _clone2.default)(this);
    };

    if (properties && properties.constructor === Object) {
        Object.keys(properties).forEach(function (key) {
            root.add(key, properties[key], Array.isArray(community_arguments) ? community_arguments : [community_arguments]);
        });
    }

    return root;
};

exports.default = Scene;

/***/ }),

/***/ "./src/components/StepsScene.js":
/*!**************************************!*\
  !*** ./src/components/StepsScene.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _clone = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
    const stepsAttackHero = StepsScene({
        loop: false,
        steps: [
            {name: 'start_attack', callback: func},
            {name: 'hero_attack', callback: func},
            {name: 'hero_attack_animation', callback: func},
            {name: 'end_attack', callback: func},
        ]
    });

    stepsAttackHero.eachSteps(function (cbObject, index) {});
    stepsAttackHero.next();

    stepsAttackHero.goto('hero_attack_animation').next();
    stepsAttackHero.stop();
 *
 * @param config
 * @returns {any}
 * @constructor
 */
var StepsScene = function StepsScene() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { steps: [] };

    var root = {
        iteration: 0,
        loop: config.loop || false,
        step_iteration: 0,
        step_stop: false,
        step_callback_each: null,
        step_callbacks: config.steps || {},
        start: function start() {
            root.play();
            root.step_iteration = 0;
            return root;
        },
        stop: function stop() {
            root.step_stop = true;
            return root;
        },
        play: function play() {
            root.step_stop = false;
            return root;
        },
        end: function end() {
            root.step_iteration = root.step_callbacks.length - 1;
            return root;
        },
        delay: function delay(ms, callback) {
            setTimeout(function () {
                callback.call(root);
            }, ms);
        },
        goto: function goto(name) {
            root.step_callbacks.forEach(function (object, index) {
                if (object.name === name) {
                    root.step_iteration = index;
                }
            });
            return root;
        },
        eachSteps: function eachSteps(callback) {
            root.step_callback_each = callback;
            return root;
        },
        next: function next() {
            if (root.step_stop) return root;

            if (root.step_iteration > root.step_callbacks.length - 1) {
                root.step_iteration = 0;
                if (!root.loop) return root;
            }

            var currentCallbackObject = root.step_callbacks[root.step_iteration];

            if (typeof root.step_callback_each === 'function') root.step_callback_each.call(root, currentCallbackObject, root.step_iteration, root.iteration);

            currentCallbackObject.callback.call(root, currentCallbackObject, root.step_iteration, root.iteration);

            root.iteration++;
            root.step_iteration++;

            return root;
        }
    };

    root.clone = function () {
        return (0, _clone2.default)(this);
    };

    return root;
};

exports.default = StepsScene;

/***/ }),

/***/ "./src/components/Timer.js":
/*!*********************************!*\
  !*** ./src/components/Timer.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Timer = function Timer(callback, delay, repeat, thisInstance) {
    this.repeat = repeat;
    this.iterator = 0;
};

Timer.setTimeout = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = (typeof thisInst === 'undefined' ? 'undefined' : _typeof(thisInst)) === 'object' ? thisInst : {};
        return setTimeout(function () {
            callback.call(thisInst);
        }, ms);
    }
};
Timer.setInterval = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = (typeof thisInst === 'undefined' ? 'undefined' : _typeof(thisInst)) === 'object' ? thisInst : {};
        return setInterval(function () {
            callback.call(thisInst);
        }, ms);
    }
};
Timer.clearTimeout = function (id) {
    clearTimeout(id);
};
Timer.clearInterval = function (id) {
    clearInterval(id);
};

exports.default = Timer;

/***/ }),

/***/ "./src/components/Transform.js":
/*!*************************************!*\
  !*** ./src/components/Transform.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _isNumber = __webpack_require__(/*! ../static/isNumber */ "./src/static/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*

this.transform = Transform(this.element);
this.transform.method('rotate', ['45deg']);
this.transform.update();
this.transform.research();
this.transform.functionParameters('matrix')         // [1, 0, 0, 1, 0, 0]: array
this.transform.functionParameters('rotate')         // ["45deg"]: string
this.transform.functionParameters('rotate', true)   // 45: int

// ...
Transform.element(this.element, [
    'rotate(' + 10 +'deg)',
    'scale(0.6, 0.6)',
    'matrix(1, 0, 0, 1, 0, 0)',
]);
Transform.element(this.element, ['rotate(' + 10 +'deg)'])
const trs = Transform(this.element);

// without of the Transform
this.style({
    transform: 'rotate(' + 10 +'deg) scale(0.6, 0.6) matrix(1, 0, 0, 1, 0, 0)'
});

*/
var Transform = function Transform(element, params) {
    var root = {
        element: element,
        transform_obj: {},
        transform_arr: element.style.transform.split(')').filter(function (value) {
            return value.length;
        }),
        transform_string: '',

        update: function update() {
            root.transform_string = '';

            Object.keys(root.transform_obj).forEach(function (key) {
                root.transform_string += key + '(' + root.transform_obj[key].join(', ') + ') ';
            });

            root.element.style.transform = root.transform_string;
            root.research();
        },
        method: function method(_method, properties) {
            var multiply = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (typeof _method === 'string') {
                properties = Array.isArray(properties) ? properties : [properties];

                if (multiply) {
                    if (root.transform_obj[_method]) {
                        properties.forEach(function (value, i) {
                            if (typeof value === 'string') {
                                var ext = value.match(/[a-z]+/g);
                                var num = parseInt(value) + parseInt(root.transform_obj[_method][i]);
                                properties[i] = num + ext;
                            } else {
                                properties[i] = value + root.transform_obj[_method][i];
                            }
                            root.transform_obj[_method] = properties;
                        });
                    } else {
                        root.transform_obj[_method] = properties;
                    }
                } else {
                    root.transform_obj[_method] = properties;
                }
            } else {
                throw new Error('Sets parameters is not available');
            }
        },
        research: function research() {
            root.transform_arr = element.style.transform.split(')').filter(function (value) {
                return value.length;
            });

            root.transform_arr.forEach(function (value, i) {
                var param = root.transform_arr[i] = root.transform_arr[i].trim() + ')';
                var matched = param.match(/[\w\.\-]+/ig);
                root.transform_obj[matched[0]] = matched.slice(1);
            });
        },
        functionParameters: function functionParameters(name) {
            var FIRST_ITEM_TO_INTEGER = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (FIRST_ITEM_TO_INTEGER && Array.isArray(root.transform_obj[name]) && root.transform_obj[name].length === 1) {
                var item = root.transform_obj[name][0];
                return (0, _isNumber2.default)(item) ? parseInt(item) : root.transform_obj[name];
            }
            return root.transform_obj[name];
        }
    };

    root.research();

    if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === 'object') {
        Object.keys(params).forEach(function (key) {
            root.method(key, params[key]);
        });
        root.update();
    }

    return root;
};

Transform.element = function (element, values) {
    if (Array.isArray(values)) {
        var props = [];
        values.forEach(function (prop) {
            props.push(prop);
        });
        (0, _stylizer2.default)(element, { transform: props.join(' ') });
    }
};

exports.default = Transform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getWindow = __webpack_require__(/*! ./static/getWindow */ "./src/static/getWindow.js");

var _getWindow2 = _interopRequireDefault(_getWindow);

var _Clip = __webpack_require__(/*! ./components/Clip.js */ "./src/components/Clip.js");

var _Clip2 = _interopRequireDefault(_Clip);

var _Component = __webpack_require__(/*! ./components/Component.js */ "./src/components/Component.js");

var _Component2 = _interopRequireDefault(_Component);

var _KeyboardEventManager = __webpack_require__(/*! ./components/KeyboardEventManager.js */ "./src/components/KeyboardEventManager.js");

var _KeyboardEventManager2 = _interopRequireDefault(_KeyboardEventManager);

var _MoveClip = __webpack_require__(/*! ./components/MoveClip.js */ "./src/components/MoveClip.js");

var _MoveClip2 = _interopRequireDefault(_MoveClip);

var _Scene = __webpack_require__(/*! ./components/Scene.js */ "./src/components/Scene.js");

var _Scene2 = _interopRequireDefault(_Scene);

var _StepsScene = __webpack_require__(/*! ./components/StepsScene.js */ "./src/components/StepsScene.js");

var _StepsScene2 = _interopRequireDefault(_StepsScene);

var _Timer = __webpack_require__(/*! ./components/Timer.js */ "./src/components/Timer.js");

var _Timer2 = _interopRequireDefault(_Timer);

var _RoxyListener = __webpack_require__(/*! ./components/RoxyListener.js */ "./src/components/RoxyListener.js");

var _RoxyListener2 = _interopRequireDefault(_RoxyListener);

var _Roxy = __webpack_require__(/*! ./components/Roxy.js */ "./src/components/Roxy.js");

var _Roxy2 = _interopRequireDefault(_Roxy);

var _static = __webpack_require__(/*! ./static */ "./src/static/index.js");

var _static2 = _interopRequireDefault(_static);

var _AnimationFrame = __webpack_require__(/*! ./components/AnimationFrame */ "./src/components/AnimationFrame.js");

var _AnimationFrame2 = _interopRequireDefault(_AnimationFrame);

var _Loader = __webpack_require__(/*! ./components/Loader */ "./src/components/Loader.js");

var _Loader2 = _interopRequireDefault(_Loader);

var _Matrix = __webpack_require__(/*! ./components/Matrix */ "./src/components/Matrix.js");

var _Matrix2 = _interopRequireDefault(_Matrix);

var _Point = __webpack_require__(/*! ./components/Point */ "./src/components/Point.js");

var _Point2 = _interopRequireDefault(_Point);

var _Rectangle = __webpack_require__(/*! ./components/Rectangle */ "./src/components/Rectangle.js");

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _Transform = __webpack_require__(/*! ./components/Transform */ "./src/components/Transform.js");

var _Transform2 = _interopRequireDefault(_Transform);

var _EventManager = __webpack_require__(/*! ./components/EventManager */ "./src/components/EventManager.js");

var _EventManager2 = _interopRequireDefault(_EventManager);

var _Frames = __webpack_require__(/*! ./components/Frames */ "./src/components/Frames.js");

var _Frames2 = _interopRequireDefault(_Frames);

var _Router = __webpack_require__(/*! ./components/Router */ "./src/components/Router.js");

var _Router2 = _interopRequireDefault(_Router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = {
    Clip: _Clip2.default,
    Component: _Component2.default,
    KeyboardEventManager: _KeyboardEventManager2.default,
    EventCodes: _KeyboardEventManager.EventCodes,
    EventKeys: _KeyboardEventManager.EventKeys,
    EventCodesNames: _KeyboardEventManager.EventCodesNames,
    EventKeysNames: _KeyboardEventManager.EventKeysNames,
    MoveClip: _MoveClip2.default,
    Scene: _Scene2.default,
    StepsScene: _StepsScene2.default,
    Timer: _Timer2.default,
    RoxyListener: _RoxyListener2.default,
    Roxy: _Roxy2.default,
    AnimationFrame: _AnimationFrame2.default,
    Loader: _Loader2.default,
    Matrix: _Matrix2.default,
    Point: _Point2.default,
    Rectangle: _Rectangle2.default,
    Transform: _Transform2.default,
    EventManager: _EventManager2.default,
    Frames: _Frames2.default,
    Router: _Router2.default
};

var RADIAN = 0.017453292519943295;
var DEGREE_AS_RADIAN = 0.017453292519943295;
var DEGREE_360_AS_RADIAN = DEGREE_AS_RADIAN * 360;
var PI = 3.14159265359;
var RAD_TO_DEGREES = 3.14159265359;

Animate.RADIAN = RADIAN;
Animate.DEGREE_AS_RADIAN = DEGREE_AS_RADIAN;
Animate.DEGREE_360_AS_RADIAN = DEGREE_360_AS_RADIAN;
Animate.PI = PI;
Animate.RAD_TO_DEGREES = RAD_TO_DEGREES;

Animate.Static = Animate.Util = _static2.default;

// if (getWindow()) getWindow().Animate = Animate;

exports.default = Animate;

/***/ }),

/***/ "./src/static/abc.js":
/*!***************************!*\
  !*** ./src/static/abc.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LETTER_CONSONANT = exports.LETTER_CONSONANT = 'B,C,D,F,G,H,J,K,L,M,N,P,Q,R,S,T,V,W,X,Y,Z';
var LETTER_VOWEL = exports.LETTER_VOWEL = 'A,E,I,O,U,Y';
var ABC = exports.ABC = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
var NUMBERS = exports.NUMBERS = '0,1,2,3,4,5,6,7,8,9';
var AMPERSAND = exports.AMPERSAND = '&';

var abc = {
    LETTER_CONSONANT: LETTER_CONSONANT,
    LETTER_VOWEL: LETTER_VOWEL,
    ABC: ABC,
    NUMBERS: NUMBERS,
    AMPERSAND: AMPERSAND
};

exports.default = abc;

/***/ }),

/***/ "./src/static/addCss.js":
/*!******************************!*\
  !*** ./src/static/addCss.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createElement = __webpack_require__(/*! ./createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _hasLowerCase = __webpack_require__(/*! ./hasLowerCase */ "./src/static/hasLowerCase.js");

var _hasLowerCase2 = _interopRequireDefault(_hasLowerCase);

var _toMinusCase = __webpack_require__(/*! ./toMinusCase */ "./src/static/toMinusCase.js");

var _toMinusCase2 = _interopRequireDefault(_toMinusCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * addCss({ '#canvas': { backgroundColor: '#171717',border: '3px solid #DDDDDD' } });
 *
 * @param object
 * @returns {*}
 */
var addCss = function addCss(object) {
    var cssString = '';
    Object.keys(object).forEach(function (selector) {
        cssString += selector + " {\n";
        Object.keys(object[selector]).forEach(function (prop) {
            var name = (0, _hasLowerCase2.default)(prop) ? (0, _toMinusCase2.default)(prop) : prop;
            var value = object[selector][prop];
            cssString += "\t" + name + ": " + value + ";\n";
        });
        cssString += "}\n";
    });
    var css = (0, _createElement2.default)('style', {}, cssString);
    if (document && document.head) {
        document.head.appendChild(css);
    }
    return css;
};

exports.default = addCss;

/***/ }),

/***/ "./src/static/attr.js":
/*!****************************!*\
  !*** ./src/static/attr.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var attr = function attr(element, name, value) {
    var type_element = (0, _typeOf2.default)(element);
    if (type_element === 'string') {
        element = (0, _query2.default)(element);
    }

    if ((0, _isNode2.default)(element) && arguments.length === 2) {
        if ((0, _typeOf2.default)(name, 'object')) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
        } else return element.getAttribute(name);
    } else if ((0, _isNode2.default)(element) && arguments.length === 3) {
        if (value === false) element.removeAttribute(name);else element.setAttribute(name, value);
    }
};

exports.default = attr;

/***/ }),

/***/ "./src/static/clone.js":
/*!*****************************!*\
  !*** ./src/static/clone.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 *
 * @param from
 * @param to
 * @returns {*}
 */
function clone(from, to) {
    if (from === null || (typeof from === "undefined" ? "undefined" : _typeof(from)) !== "object") return from;
    if (from.constructor !== Object && from.constructor !== Array) return from;
    if (from.constructor === Date || from.constructor === RegExp || from.constructor === Function || from.constructor === String || from.constructor === Number || from.constructor === Boolean) {
        return new from.constructor(from);
    }

    to = to || new from.constructor();

    for (name in from) {
        to[name] = typeof to[name] == "undefined" ? clone(from[name], null) : to[name];
    }

    return to;
}

exports.default = clone;

/***/ }),

/***/ "./src/static/copy.js":
/*!****************************!*\
  !*** ./src/static/copy.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copy = function copy(src, instance) {
    if ((0, _isNode2.default)(src)) return src.cloneNode(true);

    if (Array.isArray(src)) return src.slice();

    if (typeof src === 'function') return src.bind(instance || {});

    if ((0, _typeOf2.default)(src, 'object')) {
        // return Object.assign({}, src);
        var result = {};
        Object.keys(src).forEach(function (key) {
            var value = src[key];
            result[key] = copy(value, typeof value === "function" ? src : {});
        });
        return result;
    }

    return src;
};

exports.default = copy;

/***/ }),

/***/ "./src/static/createArray.js":
/*!***********************************!*\
  !*** ./src/static/createArray.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/*

const arr0 = createArray(5);
const arr0 = createArray(5, true);
const arr1 = createArray(5, 1);
const arr2 = createArray(5, 'hello world');
const arr3 = createArray(5, [100,200,300]);
const arr4 = createArray(5, {a:'A',b:'B',c:'C'});

*/

/**
 *
 * @param num
 * @param fill
 * @returns {any[]}
 */
var createArray = function createArray(num, fill) {
    var arr = [];

    if (typeof fill === 'number' || typeof fill === 'string') {
        return new Array(num).fill(fill);
    }

    arr = new Array(num).fill(0);
    arr.forEach(function (value, i) {
        if (typeof fill === 'function') {
            var r = fill.call(fill, i, i);
            arr[i] = typeof r === 'boolean' || r ? r : value;
        }
        if (Array.isArray(fill)) arr[i] = fill[i] === undefined ? undefined : fill[i];else arr[i] = fill;
    });
    return arr;
};

exports.default = createArray;

/***/ }),

/***/ "./src/static/createElement.js":
/*!*************************************!*\
  !*** ./src/static/createElement.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createElement = function createElement(tag, attrs, inner) {
    var element = document.createElement(tag),
        is_attr = function is_attr(src) {
        return (0, _typeOf2.default)(src, 'object') && !(0, _isNode2.default)(src);
    },
        insert_html = function insert_html(src) {
        element.insertAdjacentHTML('beforeend', src);
    },
        insert_child = function insert_child(src) {
        element.appendChild(src);
    },
        insert = function insert(src) {
        var type = (0, _typeOf2.default)(src);
        if (type === 'string') insert_html(src);else if (type === 'object' && (0, _isNode2.default)(src)) insert_child(src);else if (type === 'array') for (var i = 0; i < src.length; i++) {
            insert(src[i]);
        }
    };

    if (arguments.length === 2 && !is_attr(attrs)) {
        inner = attrs;
        attrs = false;
    }

    if (attrs) for (var k in attrs) {
        element.setAttribute(k, attrs[k]);
    }if (inner) insert(inner);

    return element;
};

exports.default = createElement;

/***/ }),

/***/ "./src/static/createFragment.js":
/*!**************************************!*\
  !*** ./src/static/createFragment.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _str2node = __webpack_require__(/*! ./str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFragment = function createFragment(append) {
    var fragment = document.createDocumentFragment();

    if ((0, _isNode2.default)(append)) fragment.appendChild(append);

    if ((0, _typeOf2.default)(append, 'string')) fragment.appendChild((0, _str2node2.default)(append));

    return fragment;
};

exports.default = createFragment;

/***/ }),

/***/ "./src/static/css.js":
/*!***************************!*\
  !*** ./src/static/css.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param selector
 * @param properties
 * @returns {null|undefined}
 */
var css = function css(selector, properties) {
    if (!selector || !properties) return;
    if (arguments.length === 3) {
        var prop = {};
        prop[properties] = arguments[2];
        return css(selector, prop);
    }

    var i = void 0,
        k = void 0,
        elements = null,
        typeSelector = (0, _typeOf2.default)(selector),
        typeProperties = (0, _typeOf2.default)(properties),
        parse = function parse(str) {
        var i = void 0,
            p1 = str.split(';'),
            p2 = void 0,
            pn = void 0,
            ix = void 0,
            o = {};
        for (i = 0; i < p1.length; i++) {
            p2 = p1[i].split(':');
            pn = p2[0].trim();
            ix = pn.indexOf('-');
            if (ix !== -1) pn = pn.substring(0, ix) + pn[ix + 1].toUpperCase() + pn.substring(ix + 2);
            if (p2.length === 2) o[pn] = p2[1].trim();
        }
        return o;
    };

    switch (typeSelector) {
        case 'string':
            elements = (0, _queryAll2.default)(selector);
            break;

        case 'object':
            if ((0, _isNode2.default)(selector)) elements = [selector];
            break;

        case 'array':
            elements = selector;
            break;
    }

    if (elements) {

        if (typeProperties === 'string') properties = parse(properties);

        for (i in elements) {
            for (k in properties) {
                elements[i].style[k] = properties[k];
            }
        }
    }

    return elements;
};

exports.default = css;

/***/ }),

/***/ "./src/static/decodeGetQuery.js":
/*!**************************************!*\
  !*** ./src/static/decodeGetQuery.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var decodeGetQuery = function decodeGetQuery(query) {
    var result = {};
    var pairs = (query[0] === '?' ? query.substr(1) : query).split('&');
    pairs.forEach(function (item, i) {
        var pair = pairs[i].split('=');
        result[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    });
    return result;
};

exports.default = decodeGetQuery;

/***/ }),

/***/ "./src/static/defined.js":
/*!*******************************!*\
  !*** ./src/static/defined.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var defined = function defined(value) {
    return value !== undefined;
};

exports.default = defined;

/***/ }),

/***/ "./src/static/definedIn.js":
/*!*********************************!*\
  !*** ./src/static/definedIn.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var definedIn = function definedIn(stack, value) {
    return stack && stack[value] !== undefined;
};

exports.default = definedIn;

/***/ }),

/***/ "./src/static/domLoaded.js":
/*!*********************************!*\
  !*** ./src/static/domLoaded.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var domLoaded = function domLoaded(callback) {
    var doc = (0, _getDocument2.default)();
    if (doc.querySelector('body')) callback.call();else doc.addEventListener('DOMContentLoaded', function () {
        callback.call();
    }, false);
};

exports.default = domLoaded;

/***/ }),

/***/ "./src/static/each.js":
/*!****************************!*\
  !*** ./src/static/each.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const each = function (list, callback, tmp) {
    if (list instanceof Array) {
        list.forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    } else if (isNode(list)) {
        each([].slice.call(list.childNodes), callback, tmp);
    } else {
        Object.keys(list).forEach((item, i) => {
            callback.call({}, item, i, tmp);
        });
    }
};*/

var each = function each(list, callback) {
    var instance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var type = (0, _typeOf2.default)(list);

    switch (type) {
        case 'array':
            if (typeof callback === 'function') {
                list.forEach(function (i, v, a) {
                    return callback.call(instance, i, v, a);
                });
            }
            break;
        case 'object':
            if ((0, _isNode2.default)(list)) {
                if (list instanceof NodeList) list = each(Array.from(list), callback, instance);else list = each([list], callback, instance);
            } else Object.keys(list).forEach(function (key) {
                return callback.call(instance, key, list[key], list);
            });
            break;
        case 'string':
            list = each(list.split(""), callback, instance);
            break;
        case 'number':
            var arr = new Array(list).fill(0);
            list = each(arr, callback, instance);
            break;
    }

    return list;
};

each.parent = function (selector, filter) {
    var loops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

    var getParent = function getParent(elem) {
        return elem && elem.parentNode ? elem.parentNode : false;
    };
    var element = (0, _isNode2.default)(selector) ? selector : (0, _query2.default)(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            return element;
        }
        element = getParent(element);
    }
};

each.filter = function (selector, filter, callback) {
    var loops = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    var getParent = function getParent(elem) {
        return elem && elem.parentNode ? elem.parentNode : false;
    };
    var element = (0, _isNode2.default)(selector) ? selector : (0, _query2.default)(selector);
    while (loops > 0 && element) {
        loops--;
        if (element.parentNode && element.parentNode.querySelector(filter)) {
            callback(element);
            return element;
        }
        element = getParent(element);
    }
    return element;
};

exports.default = each;

/***/ }),

/***/ "./src/static/encodeGetQuery.js":
/*!**************************************!*\
  !*** ./src/static/encodeGetQuery.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var encodeGetQuery = function encodeGetQuery(params) {
    var result = '';
    Object.keys(params).forEach(function (key) {
        result += (result.length ? '&' : '?') + key + '=' + encodeURIComponent(params[key]);
    });

    return result;
};

exports.default = encodeGetQuery;

/***/ }),

/***/ "./src/static/exists.js":
/*!******************************!*\
  !*** ./src/static/exists.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var exists = function exists(src) {
    return src !== undefined && src !== null;
};

exports.default = exists;

/***/ }),

/***/ "./src/static/extend.js":
/*!******************************!*\
  !*** ./src/static/extend.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var extend = exports.extend = function extend(destination, source) {
    for (var param in source) {
        if (source.hasOwnProperty(param)) destination[param] = source[param];
    }function __() {
        this.constructor = destination;
    }

    __.prototype = source.prototype;
    destination.prototype = new __();
};

var extendRecursive = exports.extendRecursive = function extendRecursive(destination, source) {
    var property = void 0;
    for (property in source) {
        if (source[property] && source[property].constructor && source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            extendRecursive(destination[property], source[property]);
        } else destination[property] = source[property];
    }
    return destination;
};

exports.default = extend;

/***/ }),

/***/ "./src/static/findObject.js":
/*!**********************************!*\
  !*** ./src/static/findObject.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _findObjects = __webpack_require__(/*! ./findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findObject = function findObject(values, attr, attrValue) {
    var tmp = (0, _findObjects2.default)(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
};

exports.default = findObject;

/***/ }),

/***/ "./src/static/findObjects.js":
/*!***********************************!*\
  !*** ./src/static/findObjects.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var findObjects = function findObjects(list, attr, attrValue) {
    var i = void 0,
        tmp = [];
    if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === "object") list = Object.values(list);

    if (Array.isArray(list)) for (i = 0; i < list.length; i++) {
        if (list[i] && list[i][attr] !== undefined && list[i][attr] === attrValue) tmp.push(list[i]);
    }return tmp;
};

var finds = exports.finds = function finds(values, attr, attrValue) {
    var tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp : false;
};

var find = exports.find = function find(values, attr, attrValue) {
    var tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
};

exports.default = findObjects;

/***/ }),

/***/ "./src/static/format.js":
/*!******************************!*\
  !*** ./src/static/format.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _defined = __webpack_require__(/*! ./defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _node2str = __webpack_require__(/*! ./node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Formatting of string, or maybe template builder
 *
 * Examples:
 * .format("Hello {0}, your code is {1}!", ['Jade', 'Prefect']);
 * .format("Hello {name}, your code is {mean}!", {name:'Jade', mean: 'Prefect'});
 *
 * @param string    String
 * @param list  Array|Object
 * @returns string
 */
var format = function format(string, list) {
    var reg = void 0;
    if (Array.isArray(list)) reg = new RegExp(/{(\d+)}/g);else if (list && (typeof list === "undefined" ? "undefined" : _typeof(list)) === 'object') reg = new RegExp(/{(\w+)}/g);

    return string.replace(reg, function (match, number) {
        if ((0, _defined2.default)(list[number]) && (0, _isNode2.default)(list[number])) list[number] = (0, _node2str2.default)(list[number]);

        return _typeof(list[number]) !== undefined ? list[number] : match;
    });
};

exports.default = format;

/***/ }),

/***/ "./src/static/getDocument.js":
/*!***********************************!*\
  !*** ./src/static/getDocument.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getDocument = function getDocument() {

    if (typeof document !== 'undefined') {
        return document;
    } else {
        // return global ? global : {};
        throw new Error('document object not exist!');
    }
};

exports.default = getDocument;

/***/ }),

/***/ "./src/static/getLocation.js":
/*!***********************************!*\
  !*** ./src/static/getLocation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getLocation = function getLocation() {

    if (typeof location !== 'undefined') {
        return location;
    } else {
        throw new Error('location object not exist!');
    }
};

exports.default = getLocation;

/***/ }),

/***/ "./src/static/getWindow.js":
/*!*********************************!*\
  !*** ./src/static/getWindow.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var getWindow = function getWindow() {

    if (typeof window !== 'undefined') {
        return window;
    } else {
        // return global ? global : {};
        throw new Error('window object not exist!');
    }
};

exports.default = getWindow;

/***/ }),

/***/ "./src/static/hasLowerCase.js":
/*!************************************!*\
  !*** ./src/static/hasLowerCase.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var hasLowerCase = function hasLowerCase(character) {
    var lowers = character.split('').filter(function (char) {
        var code = char.charCodeAt(0);
        return code >= 65 && code <= 90;
    });

    return lowers.length > 0;
};

exports.default = hasLowerCase;

/***/ }),

/***/ "./src/static/httpRequest.js":
/*!***********************************!*\
  !*** ./src/static/httpRequest.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Base HTTP Request
 *
 * .httpRequest( {method: 'GET', data: {}, headers: {}, action: '/index'}, function(status, data){}, thisInstance );
 *
 * @param config
 *      data:           data to send. Object, FormData (POST only), HTMLFormElement (POST only)
 *      action, url:    url address to
 *      method:         request method GET POST or custom methods, default 'GET'
 *      headers:        headers Object, key = value
 *      useEncode:      used url encoding, default TRUE. Boolean
 *      useFormData:    used FormData, default FALSE. Boolean
 *      async:          default TRUE. Boolean
 *      user:
 *      password:
 *
 * @param callback
 *      executing event - onloadend. function (status, responseText)
 *
 * @param thisInstance
 *      object 'this' for callback
 *
 * @returns {XMLHttpRequest}
 */
var httpRequest = function httpRequest(config, callback, thisInstance) {
    var key = void 0;
    var sendData = {};
    var xhr = new XMLHttpRequest();
    var options = {
        data: config.data || {},
        action: config.action || config.url || document.location.href,
        method: config.method ? config.method.toUpperCase() : 'GET',
        headers: config.headers || {},
        useEncode: config.useEncode === undefined ? true : !!config.useEncode,
        useFormData: config.useFormData === undefined ? false : !!config.useFormData,
        async: config.async === undefined ? true : !!config.async,
        user: config.user || null,
        password: config.user || null
    };

    var concateString = function concateString(params) {
        var result = '';
        for (key in params) {
            result += '&' + key + '=' + (options.useEncode ? encodeURIComponent(params[key]) : params[key]);
        }
        return result;
    };

    thisInstance = (0, _typeOf2.default)(thisInstance, 'object') ? thisInstance : {};

    // data prepare
    if (options.method === 'GET') {

        // form to FormData
        options.action += options.action.indexOf('?') === -1 ? '?' : '';
        options.action += concateString(options.data);
        sendData = {};
    } else {

        // reset to useFormData in true
        if (options.data instanceof FormData) {
            options.data = {};
            options.useFormData = true;
            sendData = options.data;
        }

        // form to FormData
        if (options.data instanceof HTMLFormElement) {
            sendData = new FormData(options.data);
            options.useFormData = true;
            options.data = {};
        }

        if (options.useFormData) {
            if (!(sendData instanceof FormData)) sendData = new FormData();

            Object.keys(options.data).forEach(function (key) {
                sendData.append(key, options.useEncode ? encodeURIComponent(options.data[key]) : options.data[key]);
            });
        } else {
            sendData = concateString(options.data);
        }
    }

    // build request
    xhr.open(options.method, options.action, options.async, options.user, options.password);

    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    if (options.method !== 'GET' && !options.useFormData) {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }

    for (key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
    }

    xhr.onloadend = function () {
        thisInstance.XMLHttpRequest = xhr;
        if (typeof callback === 'function') {
            callback.call(thisInstance, xhr.status, xhr.responseText, xhr);
        }
    };

    xhr.sendOptions = options;
    xhr.send(sendData);
    return xhr;
};

exports.default = httpRequest;

/***/ }),

/***/ "./src/static/index.js":
/*!*****************************!*\
  !*** ./src/static/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _abc = __webpack_require__(/*! ../static/abc */ "./src/static/abc.js");

var _abc2 = _interopRequireDefault(_abc);

var _attr = __webpack_require__(/*! ../static/attr */ "./src/static/attr.js");

var _attr2 = _interopRequireDefault(_attr);

var _createElement = __webpack_require__(/*! ../static/createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _createFragment = __webpack_require__(/*! ../static/createFragment */ "./src/static/createFragment.js");

var _createFragment2 = _interopRequireDefault(_createFragment);

var _css = __webpack_require__(/*! ../static/css */ "./src/static/css.js");

var _css2 = _interopRequireDefault(_css);

var _domLoaded = __webpack_require__(/*! ../static/domLoaded */ "./src/static/domLoaded.js");

var _domLoaded2 = _interopRequireDefault(_domLoaded);

var _getDocument = __webpack_require__(/*! ../static/getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

var _getWindow = __webpack_require__(/*! ../static/getWindow */ "./src/static/getWindow.js");

var _getWindow2 = _interopRequireDefault(_getWindow);

var _inject = __webpack_require__(/*! ../static/inject */ "./src/static/inject.js");

var _inject2 = _interopRequireDefault(_inject);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _str2fragment = __webpack_require__(/*! ../static/str2fragment */ "./src/static/str2fragment.js");

var _str2fragment2 = _interopRequireDefault(_str2fragment);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _queryAll = __webpack_require__(/*! ../static/queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _search = __webpack_require__(/*! ../static/search */ "./src/static/search.js");

var _search2 = _interopRequireDefault(_search);

var _encodeGetQuery = __webpack_require__(/*! ../static/encodeGetQuery */ "./src/static/encodeGetQuery.js");

var _encodeGetQuery2 = _interopRequireDefault(_encodeGetQuery);

var _decodeGetQuery = __webpack_require__(/*! ../static/decodeGetQuery */ "./src/static/decodeGetQuery.js");

var _decodeGetQuery2 = _interopRequireDefault(_decodeGetQuery);

var _httpRequest = __webpack_require__(/*! ../static/httpRequest */ "./src/static/httpRequest.js");

var _httpRequest2 = _interopRequireDefault(_httpRequest);

var _defined = __webpack_require__(/*! ../static/defined */ "./src/static/defined.js");

var _defined2 = _interopRequireDefault(_defined);

var _definedIn = __webpack_require__(/*! ../static/definedIn */ "./src/static/definedIn.js");

var _definedIn2 = _interopRequireDefault(_definedIn);

var _each = __webpack_require__(/*! ../static/each */ "./src/static/each.js");

var _each2 = _interopRequireDefault(_each);

var _extend = __webpack_require__(/*! ../static/extend */ "./src/static/extend.js");

var _extend2 = _interopRequireDefault(_extend);

var _isEmpty = __webpack_require__(/*! ../static/isEmpty */ "./src/static/isEmpty.js");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _findObject = __webpack_require__(/*! ../static/findObject */ "./src/static/findObject.js");

var _findObject2 = _interopRequireDefault(_findObject);

var _findObjects = __webpack_require__(/*! ../static/findObjects */ "./src/static/findObjects.js");

var _findObjects2 = _interopRequireDefault(_findObjects);

var _format = __webpack_require__(/*! ../static/format */ "./src/static/format.js");

var _format2 = _interopRequireDefault(_format);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _loadCSS = __webpack_require__(/*! ../static/loadCSS */ "./src/static/loadCSS.js");

var _loadCSS2 = _interopRequireDefault(_loadCSS);

var _loadJS = __webpack_require__(/*! ../static/loadJS */ "./src/static/loadJS.js");

var _loadJS2 = _interopRequireDefault(_loadJS);

var _loadJSSync = __webpack_require__(/*! ../static/loadJSSync */ "./src/static/loadJSSync.js");

var _loadJSSync2 = _interopRequireDefault(_loadJSSync);

var _merge = __webpack_require__(/*! ../static/merge */ "./src/static/merge.js");

var _merge2 = _interopRequireDefault(_merge);

var _number2string = __webpack_require__(/*! ../static/number2string */ "./src/static/number2string.js");

var _number2string2 = _interopRequireDefault(_number2string);

var _on = __webpack_require__(/*! ../static/on */ "./src/static/on.js");

var _on2 = _interopRequireDefault(_on);

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _positionMouse = __webpack_require__(/*! ../static/positionMouse */ "./src/static/positionMouse.js");

var _positionMouse2 = _interopRequireDefault(_positionMouse);

var _random = __webpack_require__(/*! ../static/random */ "./src/static/random.js");

var _random2 = _interopRequireDefault(_random);

var _redirect = __webpack_require__(/*! ../static/redirect */ "./src/static/redirect.js");

var _redirect2 = _interopRequireDefault(_redirect);

var _typeOf = __webpack_require__(/*! ../static/typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _typeOfStrict = __webpack_require__(/*! ../static/typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _uri = __webpack_require__(/*! ../static/uri */ "./src/static/uri.js");

var _uri2 = _interopRequireDefault(_uri);

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _clone = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _toObject = __webpack_require__(/*! ../static/toObject */ "./src/static/toObject.js");

var _toObject2 = _interopRequireDefault(_toObject);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _createArray = __webpack_require__(/*! ../static/createArray */ "./src/static/createArray.js");

var _createArray2 = _interopRequireDefault(_createArray);

var _isString = __webpack_require__(/*! ../static/isString */ "./src/static/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _exists = __webpack_require__(/*! ../static/exists */ "./src/static/exists.js");

var _exists2 = _interopRequireDefault(_exists);

var _isDefined = __webpack_require__(/*! ../static/isDefined */ "./src/static/isDefined.js");

var _isDefined2 = _interopRequireDefault(_isDefined);

var _loadBlobfile = __webpack_require__(/*! ../static/loadBlobfile */ "./src/static/loadBlobfile.js");

var _loadBlobfile2 = _interopRequireDefault(_loadBlobfile);

var _loadJSON = __webpack_require__(/*! ../static/loadJSON */ "./src/static/loadJSON.js");

var _loadJSON2 = _interopRequireDefault(_loadJSON);

var _loadTextfile = __webpack_require__(/*! ../static/loadTextfile */ "./src/static/loadTextfile.js");

var _loadTextfile2 = _interopRequireDefault(_loadTextfile);

var _toHTML = __webpack_require__(/*! ../static/toHTML */ "./src/static/toHTML.js");

var _toHTML2 = _interopRequireDefault(_toHTML);

var _toXML = __webpack_require__(/*! ../static/toXML */ "./src/static/toXML.js");

var _toXML2 = _interopRequireDefault(_toXML);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _uniqArray = __webpack_require__(/*! ../static/uniqArray */ "./src/static/uniqArray.js");

var _uniqArray2 = _interopRequireDefault(_uniqArray);

var _isNumber = __webpack_require__(/*! ../static/isNumber */ "./src/static/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _trimSymbols = __webpack_require__(/*! ../static/trimSymbols */ "./src/static/trimSymbols.js");

var _trimSymbols2 = _interopRequireDefault(_trimSymbols);

var _isLowerCase = __webpack_require__(/*! ../static/isLowerCase */ "./src/static/isLowerCase.js");

var _isLowerCase2 = _interopRequireDefault(_isLowerCase);

var _isUpperCase = __webpack_require__(/*! ../static/isUpperCase */ "./src/static/isUpperCase.js");

var _isUpperCase2 = _interopRequireDefault(_isUpperCase);

var _toSnakeCase = __webpack_require__(/*! ../static/toSnakeCase */ "./src/static/toSnakeCase.js");

var _toSnakeCase2 = _interopRequireDefault(_toSnakeCase);

var _toCamelCase = __webpack_require__(/*! ../static/toCamelCase */ "./src/static/toCamelCase.js");

var _toCamelCase2 = _interopRequireDefault(_toCamelCase);

var _hasLowerCase = __webpack_require__(/*! ../static/hasLowerCase */ "./src/static/hasLowerCase.js");

var _hasLowerCase2 = _interopRequireDefault(_hasLowerCase);

var _toMinusCase = __webpack_require__(/*! ../static/toMinusCase */ "./src/static/toMinusCase.js");

var _toMinusCase2 = _interopRequireDefault(_toMinusCase);

var _addCss = __webpack_require__(/*! ../static/addCss */ "./src/static/addCss.js");

var _addCss2 = _interopRequireDefault(_addCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Static = {
    abc: _abc2.default,
    attr: _attr2.default,
    createElement: _createElement2.default,
    createFragment: _createFragment2.default,
    css: _css2.default,
    domLoaded: _domLoaded2.default,
    getDocument: _getDocument2.default,
    getWindow: _getWindow2.default,
    inject: _inject2.default,
    str2node: _str2node2.default,
    str2fragment: _str2fragment2.default,
    node2str: _node2str2.default,
    query: _query2.default,
    queryAll: _queryAll2.default,
    search: _search2.default,
    encodeGetQuery: _encodeGetQuery2.default,
    decodeGetQuery: _decodeGetQuery2.default,
    httpRequest: _httpRequest2.default,
    defined: _defined2.default,
    definedIn: _definedIn2.default,
    extend: _extend2.default,
    extendRecursive: _extend.extendRecursive,
    each: _each2.default,
    findObject: _findObject2.default,
    findObjects: _findObjects2.default,
    format: _format2.default,
    isEmpty: _isEmpty2.default,
    isNode: _isNode2.default,
    loadCSS: _loadCSS2.default,
    loadJS: _loadJS2.default,
    loadJSSync: _loadJSSync2.default,
    merge: _merge2.default,
    number2string: _number2string2.default,
    on: _on2.default,
    position: _position2.default,
    positionMouse: _positionMouse2.default,
    random: _random2.default,
    randomColor: _random.randomColor,
    randomItem: _random.randomItem,
    randomNumber: _random.randomNumber,
    randomString: _random.randomString,
    randomHumanizeString: _random.randomHumanizeString,
    redirect: _redirect2.default,
    typeOf: _typeOf2.default,
    typeOfStrict: _typeOfStrict2.default,
    uri: _uri2.default,
    copy: _copy2.default,
    clone: _clone2.default,
    toObject: _toObject2.default,
    isHTMLString: _isHTMLString2.default,
    createArray: _createArray2.default,
    isString: _isString2.default,
    exists: _exists2.default,
    isDefined: _isDefined2.default,
    loadBlobfile: _loadBlobfile2.default,
    loadJSON: _loadJSON2.default,
    loadTextfile: _loadTextfile2.default,
    toHTML: _toHTML2.default,
    toXML: _toXML2.default,
    stylizer: _stylizer2.default,
    uniqArray: _uniqArray2.default,
    isNumber: _isNumber2.default,
    trimSymbols: _trimSymbols2.default,
    isLowerCase: _isLowerCase2.default,
    isUpperCase: _isUpperCase2.default,
    toCamelCase: _toCamelCase2.default,
    toSnakeCase: _toSnakeCase2.default,
    hasLowerCase: _hasLowerCase2.default,
    toMinusCase: _toMinusCase2.default,
    addCss: _addCss2.default
};

exports.default = Static;

/***/ }),

/***/ "./src/static/inject.js":
/*!******************************!*\
  !*** ./src/static/inject.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inject = function inject(selector, data, append, to) {
    if ((0, _typeOf2.default)(selector, 'array')) {
        selector.forEach(function (elem) {
            inject(elem, data, true, to);
        });
        return;
    }

    if ((0, _typeOf2.default)(selector, 'string')) selector = (0, _query2.default)(selector, to);

    if (!append) selector.textContent = '';

    if ((0, _isNode2.default)(selector)) {
        if ((0, _isNode2.default)(data)) {
            selector.appendChild(data);
        } else if ((0, _typeOf2.default)(data, 'array')) {
            var i = void 0;
            for (i = 0; i < data.length; i++) {
                inject(selector, data[i], true, to);
            }
        } else {
            selector.innerHTML = !append ? data : selector.innerHTML + data;
        }
        return selector;
    }
    return null;
};

exports.default = inject;

/***/ }),

/***/ "./src/static/isDefined.js":
/*!*********************************!*\
  !*** ./src/static/isDefined.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isDefined = function isDefined(src) {
    return src !== undefined;
};

exports.default = isDefined;

/***/ }),

/***/ "./src/static/isEmpty.js":
/*!*******************************!*\
  !*** ./src/static/isEmpty.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(src) {
    if ((0, _typeOf2.default)(src, 'object') || (0, _typeOf2.default)(src, 'array')) {
        for (var key in src) {
            if (src.hasOwnProperty(key)) return false;
        }return true;
    } else if ((0, _typeOf2.default)(src, 'string')) {
        src = src.replace(/\s/g, '');
        return src === "" || src === "0";
    } else {
        return src === 0 || src === null || src === undefined || src === false || isNaN(src);
    }
};

exports.default = isEmpty;

/***/ }),

/***/ "./src/static/isHTMLString.js":
/*!************************************!*\
  !*** ./src/static/isHTMLString.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// import DOMParser from 'DOMParser';

var isHTMLString = function isHTMLString(value) {
    var truest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


    if (truest) {
        var div = document.createElement('div');
        div.innerHTML = value;
        return !!div.childElementCount;
    }

    return value.trim().substring(0, 1) === '<';
};

exports.default = isHTMLString;

/***/ }),

/***/ "./src/static/isLowerCase.js":
/*!***********************************!*\
  !*** ./src/static/isLowerCase.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isLowerCase = function isLowerCase(character) {
    return character === character.toLowerCase() /*&& character !== character.toUpperCase()*/;
};

var isLowerCase2 = function isLowerCase2(character) {
    var code = character.charCodeAt(0);
    return code >= 97 && code <= 122;
};

exports.default = isLowerCase;

/***/ }),

/***/ "./src/static/isNode.js":
/*!******************************!*\
  !*** ./src/static/isNode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var isNode = function isNode(value) {
    return value && (value.nodeType === Node.TEXT_NODE || value.nodeType === Node.ELEMENT_NODE || value.nodeType === Node.DOCUMENT_FRAGMENT_NODE || value.nodeType === Node.DOCUMENT_NODE);
};

exports.default = isNode;

/***/ }),

/***/ "./src/static/isNumber.js":
/*!********************************!*\
  !*** ./src/static/isNumber.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isNumber = function isNumber(value) {
    try {
        value = parseInt(value);
        return (typeof value === 'number' || value instanceof Number) && !isNaN(value);
    } catch (err) {
        return false;
    }
};
exports.default = isNumber;

/***/ }),

/***/ "./src/static/isString.js":
/*!********************************!*\
  !*** ./src/static/isString.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isString = function isString(value) {
    return typeof value === 'string' || value instanceof String;
};

exports.default = isString;

/***/ }),

/***/ "./src/static/isUpperCase.js":
/*!***********************************!*\
  !*** ./src/static/isUpperCase.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isUpperCase = function isUpperCase(character) {
    return character === character.toUpperCase() /*&& character !== character.toLowerCase()*/;
};

var isUpperCase2 = function isUpperCase2(character) {
    var code = character.charCodeAt(0);
    return code >= 65 && code <= 90;
};

exports.default = isUpperCase;

/***/ }),

/***/ "./src/static/loadBlobfile.js":
/*!************************************!*\
  !*** ./src/static/loadBlobfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var loadBlobfile = function loadBlobfile(src, onload, onerror) {
    fetch(src).then(function (response) {
        return response.blob();
    }).then(function (blob) {
        return onload(blob);
    }).catch(function (error) {
        return typeof onerror === 'function' ? onerror(error) : null;
    });
};

exports.default = loadBlobfile;

/***/ }),

/***/ "./src/static/loadCSS.js":
/*!*******************************!*\
  !*** ./src/static/loadCSS.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadCSS = function loadCSS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadCSS(src[i], onload, onerror);
        }
    } else {
        var doc = (0, _getDocument2.default)();
        var link = doc.createElement('link');
        var id = "src-" + Math.random().toString(32).slice(2);

        link.href = src.substr(-4) === '.css' ? src : src + '.css';
        link.rel = 'stylesheet';
        link.id = id;
        link.onload = onload;
        link.onerror = onerror;

        doc.head.appendChild(link);
        return link;
    }
};

exports.default = loadCSS;

/***/ }),

/***/ "./src/static/loadJS.js":
/*!******************************!*\
  !*** ./src/static/loadJS.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var documentElement = (0, _getDocument2.default)();
var loadJS = function loadJS(src, onload, onerror) {
    if (!src) return null;
    if ((0, _typeOf2.default)(src, 'array')) {
        for (var i = 0; i < src.length; i++) {
            loadJS(src[i], onload, onerror);
        }
    } else {
        var script = documentElement.createElement('script');
        var id = 'resource-' + Math.random().toString(32).slice(2);

        script.src = src.substr(-3) === '.js' ? src : src + '.js';
        script.type = 'application/javascript';
        script.id = id;
        script.onload = onload;
        script.onerror = onerror;

        documentElement.head.appendChild(script);
        return script;
    }
};

exports.default = loadJS;

/***/ }),

/***/ "./src/static/loadJSON.js":
/*!********************************!*\
  !*** ./src/static/loadJSON.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var loadJSON = function loadJSON(src, onload, onerror) {
    fetch(src).then(function (response) {
        return response.json();
    }).then(function (json) {
        return onload(json);
    }).catch(function (error) {
        return typeof onerror === 'function' ? onerror(error) : null;
    });
};

exports.default = loadJSON;

/***/ }),

/***/ "./src/static/loadJSSync.js":
/*!**********************************!*\
  !*** ./src/static/loadJSSync.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _createElement = __webpack_require__(/*! ./createElement */ "./src/static/createElement.js");

var _createElement2 = _interopRequireDefault(_createElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Loads a script element with javascript source
 *
 * .loadJSSync ( {
 *      myscript1: '/path/to/myscript1',
 *      myscript2: '/path/to/myscript2',
 *    },
 *    function (list) {})
 *
 * .loadJSSync ( [
 *      '/path/to/myscript1',
 *      '/path/to/myscript2',
 *    ],
 *    function (list) {})
 *
 * @namespace NamespaceApplication.loadJSSync
 * @param srcs       Object, Array. items: key is ID, value is src
 * @param callback  Function called when all srcs is loaded
 * @param onerror   Function called when load is failed
 * @returns {*}
 */
var loadJSSync = function loadJSSync(srcs, callback, onerror) {
    if ((0, _typeOf2.default)(srcs, 'object') || (0, _typeOf2.default)(srcs, 'array')) {
        if ((0, _typeOf2.default)(srcs, 'array')) {
            var obj = {};
            srcs.forEach(function (item, i) {
                obj['resource-' + Math.random().toString(32).slice(2)] = item;
            });
            srcs = obj;
        }
        var iterator = 0;
        var scripts = {};
        Object.keys(srcs).forEach(function (key) {
            var src = srcs[key];
            var script = (0, _createElement2.default)('script', {
                src: src.substr(-3) === '.js' ? src : src + '.js',
                type: 'application/javascript',
                id: key
            });
            script.onerror = onerror;
            script.onload = function (e) {
                scripts[this.id] = this;
                iterator++;
                if (iterator === length) {
                    callback.call({}, scripts);
                }
            };
            document.head.appendChild(script);
        });
    }
};

exports.default = loadJSSync;

/***/ }),

/***/ "./src/static/loadTextfile.js":
/*!************************************!*\
  !*** ./src/static/loadTextfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var loadTextfile = function loadTextfile(src, onload, onerror) {
    fetch(src).then(function (response) {
        return response.text();
    }).then(function (text) {
        return onload(text);
    }).catch(function (error) {
        return typeof onerror === 'function' ? onerror(error) : null;
    });
};

exports.default = loadTextfile;

/***/ }),

/***/ "./src/static/merge.js":
/*!*****************************!*\
  !*** ./src/static/merge.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var merge = function merge(object1, object2) {
    for (var key in object2) {
        try {
            if (object2[key].constructor === Object) {
                object1[key] = merge(object1[key], object2[key]);
            } else {
                object1[key] = object2[key];
            }
        } catch (e) {
            object1[key] = object2[key];
        }
    }
    return object1;
};

exports.default = merge;

/***/ }),

/***/ "./src/static/node2str.js":
/*!********************************!*\
  !*** ./src/static/node2str.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var node2str = function node2str(element) {
    var container = document.createElement("div");
    container.appendChild(element.cloneNode(true));
    return container.innerHTML;
};

exports.default = node2str;

/***/ }),

/***/ "./src/static/number2string.js":
/*!*************************************!*\
  !*** ./src/static/number2string.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var number2string = exports.number2string = function number2string(x) {
    var e = void 0;
    if (Math.abs(x) < 1.0) {
        e = parseInt(x.toString().split('e-')[1]);
        if (e) {
            x *= Math.pow(10, e - 1);
            x = '0.' + new Array(e).join('0') + x.toString().substring(2);
        }
    } else {
        e = parseInt(x.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            x /= Math.pow(10, e);
            x += new Array(e + 1).join('0');
        }
    }
    return x;
};

exports.default = number2string;

/***/ }),

/***/ "./src/static/on.js":
/*!**************************!*\
  !*** ./src/static/on.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var on = function on(selector, eventName, callback, bubble) {
    var i = void 0,
        elements = [];

    switch ((0, _typeOf2.default)(selector)) {
        case 'string':
            elements = (0, _queryAll2.default)(selector);
            break;
        case 'object':
            if ((0, _isNode2.default)(selector)) elements = [selector];
            break;
        case 'array':
            elements = selector;
            break;
    }

    for (i = 0; i < elements.length; i++) {
        if (elements[i] && elements[i].addEventListener) elements[i].addEventListener(eventName, callback, !!bubble);
    }
};

exports.default = on;

/***/ }),

/***/ "./src/static/position.js":
/*!********************************!*\
  !*** ./src/static/position.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isHTMLString = __webpack_require__(/*! ./isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _str2node = __webpack_require__(/*! ./str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property number x
 * @property number y
 * @property number width
 * @property number height
 * @param elem
 * @returns {{x: number, width: number, y: number, height: number, top: number, left: number, right: number, bottom: number, element: object}}
 */
var position = function position(elem) {
    var data = { x: 0, y: 0, width: 0, height: 0 };

    if (typeof elem === 'string') {
        if ((0, _isHTMLString2.default)(elem)) {
            elem = (0, _str2node2.default)(elem);
        } else {
            elem = document.querySelector(elem);
        }
    }

    if (elem === window || elem === document) {
        data.width = window.innerWidth;
        data.height = window.innerHeight;
        data.element = window;
    } else if ((0, _isNode2.default)(elem)) {
        if (elem.getBoundingClientRect) {
            var rect = elem.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;
            var clientTop = document.documentElement.clientTop || document.body.clientTop || 0;
            var clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

            data.y = Math.round(rect.top + scrollTop - clientTop);
            data.x = Math.round(rect.left + scrollLeft - clientLeft);
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;

            data.top = rect.top + pageYOffset;
            data.left = rect.left + pageXOffset;
            data.right = rect.right + pageXOffset;
            data.bottom = rect.bottom + pageXOffset;
        } else {
            var top = 0,
                left = 0;
            while (elem) {
                top += parseInt(elem.offsetTop, 10);
                left += parseInt(elem.offsetLeft, 10);
                elem = elem.offsetParent;
            }
            data.y = top;
            data.x = left;
            data.width = elem.offsetWidth;
            data.height = elem.offsetHeight;
        }
        data.element = elem;
    }
    return data;
}; // import isNode from "./isNode";


exports.default = position;

/***/ }),

/***/ "./src/static/positionMouse.js":
/*!*************************************!*\
  !*** ./src/static/positionMouse.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var positionMouse = function positionMouse(event) {
    if (!(event instanceof MouseEvent)) {
        console.error('Error: argument is not type the MouseEvent!');
        return;
    }
    var rect = document.body.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

exports.default = positionMouse;

/***/ }),

/***/ "./src/static/query.js":
/*!*****************************!*\
  !*** ./src/static/query.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param selector
 * @param from
 * @param callback
 * @param thisInstance
 * @returns {Node|boolean}
 */
var query = function query(selector, from, callback, thisInstance) {
  var elements = (0, _queryAll2.default)(selector, from, callback, thisInstance);
  return elements && elements[0] ? elements[0] : false;
};

exports.default = query;

/***/ }),

/***/ "./src/static/queryAll.js":
/*!********************************!*\
  !*** ./src/static/queryAll.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _typeOf = __webpack_require__(/*! ./typeOf */ "./src/static/typeOf.js");

var _typeOf2 = _interopRequireDefault(_typeOf);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doc = (0, _getDocument2.default)();

var queryAll = function queryAll(selector, from, callback, thisInstance) {
    var elements = [];
    from = from || doc;

    if ((0, _isNode2.default)(selector)) return [selector];

    if ((0, _typeOf2.default)(from, 'string')) from = doc.querySelector(from);
    if (from) elements = [].slice.call(from.querySelectorAll(selector));

    if (callback) elements.forEach(function (element) {
        callback.call(thisInstance || {}, element);
    });

    return elements;
};

exports.default = queryAll;

/***/ }),

/***/ "./src/static/random.js":
/*!******************************!*\
  !*** ./src/static/random.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.randomItem = exports.randomHumanizeString = exports.randomString = exports.randomNumber = exports.randomColor = exports.random = undefined;

var _abc = __webpack_require__(/*! ./abc */ "./src/static/abc.js");

var random = exports.random = function random(min, max) {
    min = min || 0;
    max = max || 100;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Generate a random hex color
 * @returns {string}
 */
/**
 * Generate a random number
 * @param min
 * @param max
 * @returns {number}
 */
var randomColor = exports.randomColor = function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var i = void 0,
        color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }return color;
};

var randomNumber = exports.randomNumber = function randomNumber() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

    if (size > 16) {
        var i = Math.ceil(size / 16);
        var res = '';
        for (i; i > 0; i--) {
            res += Array(16).fill(0).map(function (i) {
                return Math.floor(Math.random() * 10);
            }).join('');
        }return res.slice(0, size);
    }
    return parseInt(Array(size).fill(0).map(function (i) {
        return Math.floor(Math.random() * 10);
    }).join(''));
};

var randomString = exports.randomString = function randomString() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
    var withNumbers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var i = void 0,
        string = '';
    var abs = withNumbers ? _abc.ABC + _abc.NUMBERS.toLowerCase().split(',') : _abc.ABC.toLowerCase().split(',');
    for (i = size; i > 0; i--) {
        string += abs[Math.floor(Math.random() * abs.length)];
    }
    return string;
};

var randomHumanizeString = exports.randomHumanizeString = function randomHumanizeString() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

    var i = void 0,
        string = '';
    var consonant = _abc.LETTER_CONSONANT.toLowerCase().split(',');
    var vowel = _abc.LETTER_VOWEL.toLowerCase().split(',');
    var vowelFirst = Math.random() * 10 > 5;
    for (i = size / 2 + 1; i > 0; i--) {
        var s1 = consonant[Math.floor(Math.random() * consonant.length)];
        var s2 = vowel[Math.floor(Math.random() * vowel.length)];
        string += vowelFirst ? s1 + s2 : s2 + s1;
    }

    return string.substring(0, size);
};

/**
 * Return random item from array
 * @param arr
 * @returns {*}
 */
var randomItem = exports.randomItem = function randomItem(arr) {
    return Array.isArray(arr) ? arr[random(0, arr.length - 1)] : false;
};

exports.default = random;

/***/ }),

/***/ "./src/static/redirect.js":
/*!********************************!*\
  !*** ./src/static/redirect.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

var _getDocument = __webpack_require__(/*! ./getDocument */ "./src/static/getDocument.js");

var _getDocument2 = _interopRequireDefault(_getDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redirect = function redirect(to) {
    var loc = (0, _getLocation2.default)();
    var doc = (0, _getDocument2.default)();
    loc.href = to || doc.href;
};

exports.default = redirect;

/***/ }),

/***/ "./src/static/search.js":
/*!******************************!*\
  !*** ./src/static/search.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _queryAll = __webpack_require__(/*! ./queryAll */ "./src/static/queryAll.js");

var _queryAll2 = _interopRequireDefault(_queryAll);

var _query = __webpack_require__(/*! ./query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * search( 'ul > li',  'data-link', NodeElement);
 *
 * @param selector
 * @param attr
 * @param from
 * @returns {{}}
 */
var search = function search(selector, attr, from) {
    from = (0, _isNode2.default)(from) ? from : (0, _query2.default)(from);
    var i = 0,
        key = void 0,
        elements = {},
        queryElements = (0, _queryAll2.default)(selector, from || document.body);

    if (from.hasAttribute(attr)) {
        queryElements.push(from);
    }

    if (queryElements) {
        while (i < queryElements.length) {
            if (!attr) elements[i] = queryElements[i];else {
                if (queryElements[i].hasAttribute(attr)) {
                    key = queryElements[i].getAttribute(attr);
                    elements[key] = queryElements[i];
                }
            }
            i++;
        }
    }
    return elements;
};

exports.default = search;

/***/ }),

/***/ "./src/static/str2fragment.js":
/*!************************************!*\
  !*** ./src/static/str2fragment.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var str2fragment = function str2fragment(string) {
    if (document.createRange) return document.createRange().createContextualFragment(string);else {
        var i = void 0,
            fragment = document.createDocumentFragment(),
            container = document.createElement("div");

        container.innerHTML = string;
        while (i = container.firstChild) {
            fragment.appendChild(i);
        }return fragment;
    }
};

exports.default = str2fragment;

/***/ }),

/***/ "./src/static/str2node.js":
/*!********************************!*\
  !*** ./src/static/str2node.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _str2fragment = __webpack_require__(/*! ./str2fragment */ "./src/static/str2fragment.js");

var _str2fragment2 = _interopRequireDefault(_str2fragment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str2node = function str2node(string) {
    var result = void 0;
    var fragment = (0, _str2fragment2.default)(string);

    switch (fragment.childElementCount) {
        case 0:
            break;
        case 1:
            result = fragment.firstElementChild;
            break;
        default:
            var container = document.createElement("span");
            container.appendChild(fragment);
            result = container;
    }
    return result;
};

exports.default = str2node;

/***/ }),

/***/ "./src/static/stylizer.js":
/*!********************************!*\
  !*** ./src/static/stylizer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var stylizer = function stylizer(element, styles) {
    Object.keys(styles).forEach(function (key) {
        if (element.style[key] !== undefined) {
            element.style[key] = styles[key];
        }
    });
};

exports.default = stylizer;

/***/ }),

/***/ "./src/static/toCamelCase.js":
/*!***********************************!*\
  !*** ./src/static/toCamelCase.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var toCamelCase = function toCamelCase(characters) {
    var indexes = [];
    var string = characters.replace(/[_]/g, function (letter, index) {
        indexes.push(index - indexes.length);
        return '';
    });
    indexes.forEach(function (index) {
        var start = string.substring(0, index);
        var replace = string.substr(index, 1).toUpperCase();
        var end = string.substring(index + 1);
        string = start + replace + end;
    });
    return string;
};

exports.default = toCamelCase;

/***/ }),

/***/ "./src/static/toHTML.js":
/*!******************************!*\
  !*** ./src/static/toHTML.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * @deprecated
 * @param value
 * @returns {boolean|Element}
 */
var toHTML = function toHTML(value) {
    if (value) {
        var type = 'text/html';
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(value, type);

        if (xmlDoc.documentElement && xmlDoc.body.firstElementChild) {
            return xmlDoc.body.firstElementChild;
        }
        return false;
    }
    return false;
};

exports.default = toHTML;

/***/ }),

/***/ "./src/static/toMinusCase.js":
/*!***********************************!*\
  !*** ./src/static/toMinusCase.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var toMinusCase = function toMinusCase(characters) {
    return characters.replace(/[A-Z]/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : '-' + letter.toLowerCase();
    });
};

exports.default = toMinusCase;

/***/ }),

/***/ "./src/static/toObject.js":
/*!********************************!*\
  !*** ./src/static/toObject.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var toObject = function toObject(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? JSON.parse(JSON.stringify(value)) : {};
};

exports.default = toObject;

/***/ }),

/***/ "./src/static/toSnakeCase.js":
/*!***********************************!*\
  !*** ./src/static/toSnakeCase.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var toSnakeCase = function toSnakeCase(characters) {
    return characters.replace(/[A-Z]/g, function (letter, index) {
        return index === 0 ? letter.toLowerCase() : '_' + letter.toLowerCase();
    });
    /*        return characters.split('').map((character, index) => {
                if (character === character.toUpperCase()) {
                    return (index > 0 ? '_':'') + character.toLowerCase();
                } else {
                    return character;
                }
            }).join('');*/
};

exports.default = toSnakeCase;

/***/ }),

/***/ "./src/static/toXML.js":
/*!*****************************!*\
  !*** ./src/static/toXML.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 * @deprecated
 * @param value
 * @returns {boolean|Element}
 */
var toXML = function toXML(value) {
    if (value) {
        var type = 'text/xml';
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(value, type);

        if (xmlDoc.documentElement && xmlDoc.documentElement.tagName !== 'html') {
            return xmlDoc.documentElement;
        }
        return false;
    }
    return false;
};

exports.default = toXML;

/***/ }),

/***/ "./src/static/trimSymbols.js":
/*!***********************************!*\
  !*** ./src/static/trimSymbols.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var trimSymbols = function trimSymbols(str, charlist) {
    var whitespace = [' ', '\n', '\r', '\t', '\f', '\x0b', '\xa0', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004', '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u200B', '\u2028', '\u2029', '\u3000'].join('');
    var l = 0;
    var i = 0;
    str += '';
    if (charlist) {
        whitespace = (charlist + '').replace(/([[\]().?/*{}+$^:])/g, '$1');
    }
    l = str.length;
    for (i = 0; i < l; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(i);
            break;
        }
    }
    l = str.length;
    for (i = l - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
            str = str.substring(0, i + 1);
            break;
        }
    }
    return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
};

exports.default = trimSymbols;

/***/ }),

/***/ "./src/static/typeOf.js":
/*!******************************!*\
  !*** ./src/static/typeOf.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeOfStrict = __webpack_require__(/*! ./typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

var _isNode = __webpack_require__(/*! ./isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeOf = function typeOf(value, type) {
    var simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
    var t = (0, _typeOfStrict2.default)(value).toLowerCase();
    if (simpleTypes.indexOf(t) === -1 && (typeof value === "undefined" ? "undefined" : _typeof(value)) === 'object') t = 'object';

    return typeof type === 'string' ? type.toLowerCase() === t : t;
};

exports.default = typeOf;

/***/ }),

/***/ "./src/static/typeOfStrict.js":
/*!************************************!*\
  !*** ./src/static/typeOfStrict.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var typeOfStrict = function typeOfStrict(value, type) {
    var t = Object.prototype.toString.call(value).slice(8, -1);
    return typeof type === 'string' ? type === t : t;
};

exports.default = typeOfStrict;

/***/ }),

/***/ "./src/static/uniqArray.js":
/*!*********************************!*\
  !*** ./src/static/uniqArray.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var uniqArray = function uniqArray(value, index, self) {
    return self.indexOf(value) === index;
};

exports.default = uniqArray;

/***/ }),

/***/ "./src/static/uri.js":
/*!***************************!*\
  !*** ./src/static/uri.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getLocation = __webpack_require__(/*! ./getLocation */ "./src/static/getLocation.js");

var _getLocation2 = _interopRequireDefault(_getLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uri = function uri(_uri) {
    var loc = (0, _getLocation2.default)();
    _uri = _uri || loc.pathname;
    _uri = _uri.replace(/\/+/ig, '/');
    return _uri.length > 1 && _uri.slice(0, 1) !== '/' ? '/' + _uri : _uri;
};

exports.default = uri;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZyYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWF0cml4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vdmVDbGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWRkQ3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2hhc0xvd2VyQ2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNMb3dlckNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNVcHBlckNhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQmxvYmZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTT04uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZFRleHRmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3R5bGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b0NhbWVsQ2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvSFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvTWludXNDYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b1NuYWtlQ2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvWE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHJpbVN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91bmlxQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uRnJhbWUiLCJyb290IiwicmVxdWVzdElkIiwic3RhcnRwYWx5IiwicGF1c2VkIiwiY2FsbGJhY2siLCJkZWxheSIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJzdGVwIiwidGltZXN0YW1wIiwiY2FsbCIsImNhbmNlbCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhdXNlIiwic3RhcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIkNsaXAiLCJlbGVtZW50Iiwib25Jbml0Q2FsbGJhY2siLCJOb2RlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIngiLCJ5Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJtb3ZlVG8iLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjYWxjdWxhdGUiLCJyZV9yb290IiwicmVfcGFyZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJwcm9wcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiaW5jbHVkZXMiLCJjb3B5VG8iLCJvbiIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb25lIiwic3R5bGUiLCJvYmplY3QiLCJpbmplY3QiLCJlbGVtIiwiYXBwZW5kIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJlIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJUeXBlRXJyb3IiLCJjbGVhciIsIkNvbXBvbmVudCIsImNvbmZpZyIsImxpc3QiLCJyYW5kb21OYW1lIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImNvbXAiLCJjcmVhdGUiLCJjb21wb25lbnQiLCJjb21wb25lbnRzIiwiY29tcG9uZW50Q2hpbGRyZW4iLCJjaGlsZHJlbiIsImZpbmQiLCJjbG9uZWQiLCJ0ZW1wbGF0ZSIsImNsb25lTm9kZSIsInRvU3RyaW5nIiwiYmVmb3JlIiwiaW5pdGlhbGl6ZWQiLCJtZXRob2RzIiwidmFsdWVzIiwibGVuZ3RoIiwiYmluZCIsImhhc093blByb3BlcnR5IiwiaW5pdCIsImRhdGEiLCJwYXJlbnRDb21wb25lbnQiLCJwdXNoIiwiZWxlbWVudHMiLCJhdHRyIiwibmFtZSIsInRlbXBsYXRlRGF0YUVsZW1lbnRzIiwidXBkYXRlVGVtcGxhdGVEYXRhRWxlbWVudHMiLCJ0ZW1wbGF0ZURhdGFFbGVtZW50c0VuYWJsZWQiLCJ0ZW1wbGF0ZURhdGFFbGVtZW50c0F0dHJpYnV0ZXMiLCJjb21wbGV0ZWQiLCJkb2N1bWVudCIsImNvbXBsZXRlIiwib3ZlcnJpZGUiLCJub2RlIiwiQ09NUE9ORU5UX0RBVEFfQVRUUklCVVRFUyIsIkV2ZW50TWFuYWdlciIsInN1cGVyIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInZlcnNpb24iLCJldmVudHNUeXBlIiwiYWRkRXZlbnQiLCJkZXRhaWxzIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJyZW1vdmVFdmVudCIsInR5cGUiLCJsaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsIkZyYW1lcyIsInBhcmFtZXRlcnMiLCJpbnRlcm5hbCIsImZwcyIsIm5vdyIsImVsYXBzZWQiLCJ0aGVuIiwiZnBzSW50ZXJ2YWwiLCJmcmFtZUNvdW50IiwiZXh0ZXJuYWwiLCJ1bmRlZmluZWQiLCJhbmltYXRpb24iLCJEYXRlIiwic3RhcnRUaW1lIiwiRXZlbnRDb2RlcyIsIkV2ZW50Q29kZXNOYW1lcyIsIkV2ZW50S2V5cyIsIkV2ZW50S2V5c05hbWVzIiwiS2V5Ym9hcmRFdmVudE1hbmFnZXIiLCJzdG9yYWdlIiwiYmFzZUNhbGxiYWNrc0xpc3QiLCJhZGRTdG9yYWdlIiwiYmFzZUNhbGxiYWNrIiwibWFwIiwia2V5Q29kZSIsInBhcnNlSW50IiwiZWFjaENhbGxiYWNrc0xpc3QiLCJlYWNoQ2FsbGJhY2siLCJzZXR1cExpc3RlbmVycyIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJjb2RlVG9LZXlDb2RlIiwiRXJyb3IiLCJlYWNoIiwid2l0aENvbmRpdGlvbktleSIsInByZXNzIiwidXAiLCJkb3duIiwiZ2V0RXZlbnRLZXlCeUV2ZW50Q29kZSIsImV2ZW50Q29kZSIsImN1cnJlbnRFdmVudEtleSIsIndoaWNoIiwiZmlsdGVyIiwiaW5kZXgiLCJnZXRFdmVudENvZGVCeUV2ZW50S2V5IiwiZXZlbnRLZXkiLCJjdXJyZW50RXZlbnRDb2RlIiwiZ2V0V2hpY2hCeUV2ZW50Q29kZSIsImdldEV2ZW50Q29kZUJ5V2hpY2giLCJMb2FkZXIiLCJqc29uIiwianNvbnMiLCJqYXZhc2NyaXB0IiwiaW1hZ2VzIiwiYXVkaW9zIiwidmlkZW9zIiwidmlkZW8iLCJzcmMiLCJvbmVycm9yIiwiZmV0Y2giLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJzcmNzIiwib2JqIiwiaXRlbSIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsInNjcmlwdHMiLCJpdGVyYXRvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzdWJzdHIiLCJvbmxvYWQiLCJoZWFkIiwiaW1ncyIsImltZyIsImF1ZGlvIiwicHJlbG9hZCIsIk1hdHJpeCIsIm0xMSIsIm0xMiIsIm0yMSIsIm0yMiIsImd4IiwiZ3kiLCJNb3ZlQ2xpcCIsImNsaXAiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJjb25mIiwiYXNzaWduIiwibWMiLCJQb2ludCIsIlJlY3RhbmdsZSIsIlJvdXRlciIsImhhc2giLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicm91dGVzIiwiY29udGV4dCIsInRvIiwiY29uc29sZSIsImxvZyIsImlzIiwiUm94eSIsInBheWxvYWQiLCJwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MiLCJkZWZhdWx0IiwicHJveHkiLCJQcm94eSIsImdldCIsInByb3AiLCJzZXQiLCJkaXNwYXRjaCIsInJlc3VsdCIsImZpbGwiLCJvYnNlcnZlIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsInJ4IiwiZXZlbnRDdXJzb3IiLCJTY2VuZSIsInByb3BlcnRpZXMiLCJjb21tdW5pdHlfYXJndW1lbnRzIiwiY3VycmVudCIsInNjZW5lcyIsImF0dHJzIiwiYWRkIiwiZ2V0Q3VycmVudFNjZW5lIiwibmV4dCIsImxlc3QiLCJpIiwib3BlbiIsInNjZW5lIiwiYXBwbHkiLCJzaG93IiwicnVuIiwiY29uc3RydWN0b3IiLCJTdGVwc1NjZW5lIiwic3RlcHMiLCJpdGVyYXRpb24iLCJsb29wIiwic3RlcF9pdGVyYXRpb24iLCJzdGVwX3N0b3AiLCJzdGVwX2NhbGxiYWNrX2VhY2giLCJzdGVwX2NhbGxiYWNrcyIsInBsYXkiLCJzdG9wIiwiZW5kIiwibXMiLCJzZXRUaW1lb3V0IiwiZ290byIsImVhY2hTdGVwcyIsImN1cnJlbnRDYWxsYmFja09iamVjdCIsIlRpbWVyIiwicmVwZWF0IiwidGhpc0luc3RhbmNlIiwidGhpc0luc3QiLCJpc05hTiIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsIlRyYW5zZm9ybSIsInBhcmFtcyIsInRyYW5zZm9ybV9vYmoiLCJ0cmFuc2Zvcm1fYXJyIiwidHJhbnNmb3JtIiwic3BsaXQiLCJ0cmFuc2Zvcm1fc3RyaW5nIiwidXBkYXRlIiwiam9pbiIsInJlc2VhcmNoIiwibWV0aG9kIiwibXVsdGlwbHkiLCJleHQiLCJtYXRjaCIsIm51bSIsInBhcmFtIiwidHJpbSIsIm1hdGNoZWQiLCJmdW5jdGlvblBhcmFtZXRlcnMiLCJGSVJTVF9JVEVNX1RPX0lOVEVHRVIiLCJBbmltYXRlIiwiUkFESUFOIiwiREVHUkVFX0FTX1JBRElBTiIsIkRFR1JFRV8zNjBfQVNfUkFESUFOIiwiUEkiLCJSQURfVE9fREVHUkVFUyIsIlN0YXRpYyIsIlV0aWwiLCJMRVRURVJfQ09OU09OQU5UIiwiTEVUVEVSX1ZPV0VMIiwiQUJDIiwiTlVNQkVSUyIsIkFNUEVSU0FORCIsImFiYyIsImFkZENzcyIsImNzc1N0cmluZyIsInNlbGVjdG9yIiwiY3NzIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIlJlZ0V4cCIsIkZ1bmN0aW9uIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImNvcHkiLCJpbnN0YW5jZSIsImNyZWF0ZUFycmF5IiwiYXJyIiwiciIsInRhZyIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsImNyZWF0ZUZyYWdtZW50IiwiZnJhZ21lbnQiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwiaW5kZXhPZiIsImRlY29kZUdldFF1ZXJ5IiwicXVlcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb21Mb2FkZWQiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidiIsImEiLCJOb2RlTGlzdCIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZW5jb2RlR2V0UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleGlzdHMiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsInJlZyIsInJlcGxhY2UiLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwiZ2V0V2luZG93IiwiaGFzTG93ZXJDYXNlIiwiY2hhcmFjdGVyIiwibG93ZXJzIiwiY2hhciIsImNvZGUiLCJjaGFyQ29kZUF0IiwiaHR0cFJlcXVlc3QiLCJzZW5kRGF0YSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3B0aW9ucyIsImFjdGlvbiIsInVybCIsImhyZWYiLCJoZWFkZXJzIiwidXNlRW5jb2RlIiwidXNlRm9ybURhdGEiLCJhc3luYyIsInVzZXIiLCJwYXNzd29yZCIsImNvbmNhdGVTdHJpbmciLCJGb3JtRGF0YSIsIkhUTUxGb3JtRWxlbWVudCIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJzdHIybm9kZSIsInN0cjJmcmFnbWVudCIsIm5vZGUyc3RyIiwicXVlcnlBbGwiLCJzZWFyY2giLCJpc0VtcHR5IiwiaXNOb2RlIiwibG9hZENTUyIsImxvYWRKUyIsImxvYWRKU1N5bmMiLCJtZXJnZSIsIm51bWJlcjJzdHJpbmciLCJwb3NpdGlvbiIsInBvc2l0aW9uTW91c2UiLCJyYW5kb21Db2xvciIsInJhbmRvbUl0ZW0iLCJyYW5kb21OdW1iZXIiLCJyYW5kb21TdHJpbmciLCJyYW5kb21IdW1hbml6ZVN0cmluZyIsInJlZGlyZWN0IiwidHlwZU9mIiwidHlwZU9mU3RyaWN0IiwidXJpIiwidG9PYmplY3QiLCJpc0hUTUxTdHJpbmciLCJpc1N0cmluZyIsImlzRGVmaW5lZCIsImxvYWRCbG9iZmlsZSIsImxvYWRKU09OIiwibG9hZFRleHRmaWxlIiwidG9IVE1MIiwidG9YTUwiLCJzdHlsaXplciIsInVuaXFBcnJheSIsImlzTnVtYmVyIiwidHJpbVN5bWJvbHMiLCJpc0xvd2VyQ2FzZSIsImlzVXBwZXJDYXNlIiwidG9DYW1lbENhc2UiLCJ0b1NuYWtlQ2FzZSIsInRvTWludXNDYXNlIiwiaW5uZXJIVE1MIiwidHJ1ZXN0IiwiZGl2IiwiY2hpbGRFbGVtZW50Q291bnQiLCJpc0xvd2VyQ2FzZTIiLCJub2RlVHlwZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwiZXJyIiwiaXNVcHBlckNhc2UyIiwiYmxvYiIsImxpbmsiLCJyZWwiLCJkb2N1bWVudEVsZW1lbnQiLCJ0ZXh0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb250YWluZXIiLCJhYnMiLCJwb3ciLCJidWJibGUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInJvdW5kIiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiTW91c2VFdmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwicXVlcnlTZWxlY3RvckFsbCIsIm1pbiIsIm1heCIsImZsb29yIiwibGV0dGVycyIsImNvbG9yIiwic2l6ZSIsImNlaWwiLCJyZXMiLCJ3aXRoTnVtYmVycyIsImNvbnNvbmFudCIsInZvd2VsIiwidm93ZWxGaXJzdCIsInMxIiwiczIiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiaGFzQXR0cmlidXRlIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzdHlsZXMiLCJjaGFyYWN0ZXJzIiwiaW5kZXhlcyIsImxldHRlciIsInBhcnNlciIsIkRPTVBhcnNlciIsInhtbERvYyIsInBhcnNlRnJvbVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YWdOYW1lIiwiY2hhcmxpc3QiLCJ3aGl0ZXNwYWNlIiwibCIsImNoYXJBdCIsInNpbXBsZVR5cGVzIiwidCIsInNlbGYiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdI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QUFNQSxRQUFPaUYsSUFBSXpULFFBQWpCO0FBQ0F3TyxXQUFNQSxLQUFJeEQsT0FBSixDQUFZLE9BQVosRUFBcUIsR0FBckIsQ0FBTjtBQUNBLFdBQU93RCxLQUFJL1csTUFBSixHQUFhLENBQWIsSUFBa0IrVyxLQUFJeFEsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLE1BQW9CLEdBQXRDLEdBQTRDLE1BQU13USxJQUFsRCxHQUF3REEsSUFBL0Q7QUFDSCxDQUxEOztrQkFPZUEsRyIsImZpbGUiOiJhbmltYXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG4vKlxuY29uc3QgYW5pbWF0aW9uID0gQW5pbWF0aW9uRnJhbWUoKTtcbmFuaW1hdGlvbi5wYXVzZSgpO1xuYW5pbWF0aW9uLnN0YXJ0KGZ1bmN0aW9uKHByb2dyZXNzKXtcbiAgICBpZiAoTWF0aC5yb3VuZChwcm9ncmVzcykgJSAxMDAwID09PSAwKSB7XG4gICAgICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgIH1cbn0pO1xuYW5pbWF0aW9uLmNhbmNlbCgpO1xuKi9cbi8qKlxuICpcbiAqIEByZXR1cm5zIHt7ZHVyYXRpb246IG51bWJlciwgc3RhcnRwYWx5OiBudW1iZXIsIHBhdXNlZDogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgcmVxdWVzdElkOiBudW1iZXIsIGNhbGxiYWNrOiBudW1iZXIsIHByb2dyZXNzOiBudW1iZXJ9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICByZXF1ZXN0SWQ6IDAsXG4gICAgICAgIHN0YXJ0cGFseTogMCxcbiAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgY2FsbGJhY2s6IDAsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgfTtcblxuICAgIHJvb3Quc3RlcCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFyb290LnN0YXJ0cGFseSkgcm9vdC5zdGFydHBhbHkgPSB0aW1lc3RhbXA7XG4gICAgICAgIHJvb3QucHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSByb290LnN0YXJ0cGFseTtcblxuICAgICAgICBpZiAocm9vdC5jYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjay5jYWxsKHJvb3QsIHJvb3QucHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3QuZHVyYXRpb24gJiYgcm9vdC5kdXJhdGlvbiA+IHJvb3QucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJvb3QuY2FuY2VsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIGlmIChyb290LnBhdXNlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm9vdC5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5wYXVzZWQgPSAhcm9vdC5wYXVzZWQ7XG4gICAgfTtcblxuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3QucmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgIH07XG5cbiAgICByb290LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJvb3QucmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25GcmFtZTtcbiIsImltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBib3R0b21cbiAqIEBwcm9wZXJ0eSBlbGVtZW50XG4gKiBAcHJvcGVydHkgaGVpZ2h0XG4gKiBAcHJvcGVydHkgbGVmdFxuICogQHByb3BlcnR5IHJpZ2h0XG4gKiBAcHJvcGVydHkgdG9wXG4gKiBAcHJvcGVydHkgd2lkdGhcbiAqIEBwcm9wZXJ0eSB4XG4gKiBAcHJvcGVydHkgeVxuICogQG1ldGhvZCBtb3ZlVG8oKVxuICogQG1ldGhvZCBjb3B5VG9cbiAqIEBtZXRob2Qgb25cbiAqIEBtZXRob2QgY2xvbmVcbiAqIEBtZXRob2Qgc3R5bGVcbiAqIEBtZXRob2QgaW5qZWN0XG4gKiBAbWV0aG9kIGFwcGVuZFxuICogQG1ldGhvZCByZW1vdmVcbiAqIEBtZXRob2QgY2xlYXJcbiAqIEBtZXRob2Qgb25cbiAqIEBtZXRob2QgY2xvbmVcbiAqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHBhcmFtIG9uSW5pdENhbGxiYWNrXG4gKiBAcmV0dXJucyB7eyBib3R0b206IG51bWJlciwgZWxlbWVudDogT2JqZWN0LCBoZWlnaHQ6IG51bWJlciwgbGVmdDogbnVtYmVyLCByaWdodDogbnVtYmVyLCB0b3A6IG51bWJlciwgd2lkdGg6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG1vdmVUbzogZnVuY3Rpb24sIGNvcHlUbzogZnVuY3Rpb24sIG9uOiBmdW5jdGlvbiwgY2xvbmU6IGZ1bmN0aW9uLCBzdHlsZTogZnVuY3Rpb24sIGluamVjdDogZnVuY3Rpb24sIGFwcGVuZDogZnVuY3Rpb24sIHJlbW92ZTogZnVuY3Rpb24sIGNsZWFyOiBmdW5jdGlvbiwgb246IGZ1bmN0aW9uLCBjbG9uZTogZnVuY3Rpb24sIGNhbGN1bGF0ZTogZnVuY3Rpb24gfX1cbiAqIEBjb25zdHJ1Y3RvciBDbGlwKClcbiAqL1xuY29uc3QgQ2xpcCA9IGZ1bmN0aW9uIChlbGVtZW50LCBvbkluaXRDYWxsYmFjaykge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHR5cGUge3t4OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHk6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBlbGVtZW50OiBPYmplY3R9fVxuICAgICAqL1xuICAgIGNvbnN0IHJvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcblxuICAgIGlmIChyb290LmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJvb3QueCA9IHJvb3QueCAtIHBhcmVudC54O1xuICAgICAgICByb290LnkgPSByb290LnkgLSBwYXJlbnQueTtcbiAgICAgICAgcm9vdC5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHJvb3QucGFyZW50LmVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgICAgIHJvb3QuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpcCcsIHJvb3QuZWxlbWVudC5pZCB8fCAnY2xpcCcpO1xuICAgIH1cblxuICAgIHJvb3QubW92ZVRvID0gZnVuY3Rpb24gKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5lbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuY2FsY3VsYXRlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudCA9IGlzTm9kZShlbGVtZW50KSB8fCBpc1N0cmluZyhlbGVtZW50KSA/IGVsZW1lbnQgOiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlX3Jvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcbiAgICAgICAgY29uc3QgcmVfcGFyZW50ID0gcG9zaXRpb24ocmVfcm9vdC5lbGVtZW50LnBhcmVudE5vZGUpO1xuXG4gICAgICAgIGlmIChpc05vZGUocmVfcGFyZW50LmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZV9yb290LnBhcmVudCA9IHJvb3QuY2FsY3VsYXRlKHJlX3BhcmVudC5lbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlX3Jvb3QucGFyZW50ID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgICAgICB9XG4gICAgICAgIHJlX3Jvb3QueCA9IHJlX3Jvb3QueCAtIHJlX3BhcmVudC54O1xuICAgICAgICByZV9yb290LnkgPSByZV9yb290LnkgLSByZV9wYXJlbnQueTtcblxuICAgICAgICBjb25zdCBwcm9wcyA9IFsneCcsICd5JywgJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nLCAncGFyZW50J107XG4gICAgICAgIE9iamVjdC5rZXlzKHJlX3Jvb3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByb290W2tleV0gPSByZV9yb290W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByb290LnN0eWxlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYXBwZW5kKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICByb290LmluamVjdChlLCB0cnVlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3QucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QuZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCBhcmd1bWVudCB0eXBlLiBOZWVkIE5vZGVFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygb25Jbml0Q2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBvbkluaXRDYWxsYmFjay5jYWxsKHJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpcDtcbiIsImltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB7cmFuZG9tSHVtYW5pemVTdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuXG5cbi8qXG5cbmNvbmZpZzpcbiAgICBpZDogJ2lkJyxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGBgLFxuXG4gICAgYmVmb3JlICgpIHt9LFxuICAgIGluaXQgKCkge30sXG4gICAgY29tcGxldGUgKCkge30sXG5cbiAgICBkYXRhOiB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBjb21wb25lbnRzOiB7fSxcblxuICAgIHRlbXBsYXRlRWxlbWVudHNFbmFibGVkOiB0cnVlLFxuICAgIHRlbXBsYXRlRWxlbWVudHNBdHRyaWJ1dGVzOiBDT01QT05FTlRfREFUQV9BVFRSSUJVVEVTLFxuICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcblxuQ29tcG9uZW50KHtcbiAgICBpZDogJ0V4dGVybmFsVGVtcGxhdGVDb21wb25lbnQnLFxuICAgIHByb3BzOiBbJ3RpdGxlJ10sXG4gICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZScsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGl0ZXJhdG9yOiAwLFxuICAgIH0sXG4gICAgY29tcGxldGUgKGFwcCkge1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZUVsZW1lbnRzLm5vZGUudGl0bGUpIHRoaXMudGVtcGxhdGVFbGVtZW50cy5ub2RlLnRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSArKyB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG5cbmNvbXAgPSBDb21wb25lbnQoey4uLn0pO1xuICAgIHRlbXBsYXRlRWxlbWVudHM6IHsgZnVuYzp7fSwgYWN0aW9uOnt9LCBub2RlOnt9LCBvbjp7fSB9LFxuICAgICAgICBJZiB0ZW1wbGF0ZUVsZW1lbnRzRW5hYmxlZCBpcyBlbmFibGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24sIGF0dHJpYnV0ZXMgd2l0aCBuYW1lcyBhcmUgcmVxdWVzdGVkXG4gICAgICAgIGZyb20gdGhlIHRlbXBsYXRlOlxuICAgICAgICBDT01QT05FTlRfREFUQV9BVFRSSUJVVEVTID09PSBbZGF0YS1mdW5jXSwgW2RhdGEtYWN0aW9uXSwgW2RhdGEtbm9kZV0sIFtkYXRhLW9uXVxuXG5jb21wLmNvbXBvbmVudChpZClcbmNvbXAuY29tcG9uZW50Q2hpbGRyZW4oaWQpXG5jb21wLmNsb25lKClcbmNvbXAub24oZXZlbnQsIGNhbGxiYWNrKVxuY29tcC5pbmplY3QoZWxlbSwgYXBwZW5kID0gdHJ1ZSlcbmNvbXAuaW5qZWN0KClcbmNvbXAuZWxlbWVudHMoYXR0ciwgbmFtZSlcblxuKi9cbi8qKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZ2V0IHByb3BlcnR5IGJ5IGlkIGtleXdvcmRcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjb25maWcuaWQpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21OYW1lID0gIHJhbmRvbUh1bWFuaXplU3RyaW5nKDYpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByYW5kb21OYW1lID0gcmFuZG9tTmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHJhbmRvbU5hbWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29uZmlnLmlkID0gJ0NvbXBvbmVudCcgKyByYW5kb21OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWcuaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcCA9IENvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY29tcG9uZW50c1tpZF0gPyBjb21wLmNvbXBvbmVudHNbaWRdIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudENoaWxkcmVuID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jaGlsZHJlbi5maW5kKChjb21wb25lbnQpID0+IGNvbXBvbmVudC5pZCA9PT0gaWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZSh0aGlzKTtcbiAgICAgICAgICAgIGNsb25lZC50ZW1wbGF0ZSA9IGNsb25lZC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb21wLnRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGNvbXAuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgLy8gICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICBlbGVtID0gcXVlcnkoZWxlbSk7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYgKCFhcHBlbmQpIHtcbiAgICAgICAgLy8gICAgICAgICBjb21wLnRlbXBsYXRlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgIC8vICAgICAgICAgY29tcC50ZW1wbGF0ZS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgIC8vICAgICAgICAgZWxlbS5mb3JFYWNoKChlKSA9PiB7Y29tcC5pbmplY3QoZSwgdHJ1ZSl9KTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfTtcblxuICAgICAgICBjb21wLmluamVjdCA9IGZ1bmN0aW9uIChlbGVtLCBhcHBlbmQgPSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHsgY29tcC5pbmplY3QoZSwgdHJ1ZSkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS50ZXh0Q29udGVudCArPSBlbGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmFwcGVuZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICBjb21wLmluamVjdChlbGVtLCB0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuYmVmb3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZihpc0hUTUxTdHJpbmcoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBxdWVyeShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLm1ldGhvZHMgJiYgT2JqZWN0LnZhbHVlcyhjb21wLm1ldGhvZHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5tZXRob2RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAubWV0aG9kc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1trZXldID0gY29tcC5tZXRob2RzW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAubWV0aG9kc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuZGF0YSAmJiBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZGF0YVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuZGF0YVtrZXldID0gY29tcC5kYXRhW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzICYmIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wLmNvbXBvbmVudHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBvbmVudHNba2V5XS5wYXJlbnRDb21wb25lbnQgPSBjb21wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wLmNoaWxkcmVuLnB1c2goY29tcC5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wLmVsZW1lbnRzID0gZnVuY3Rpb24gKGF0dHIsIG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgY29tcC50ZW1wbGF0ZURhdGFFbGVtZW50c1thdHRyXVtuYW1lXSAhPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgICAgICAgICAgID8gY29tcC50ZW1wbGF0ZURhdGFFbGVtZW50c1thdHRyXVtuYW1lXVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLnVwZGF0ZVRlbXBsYXRlRGF0YUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGlzTm9kZShjb21wLnRlbXBsYXRlKSAmJiBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzRW5hYmxlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGVEYXRhRWxlbWVudHNBdHRyaWJ1dGVzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IGF0dHIuc3Vic3RyaW5nKDUpO1xuICAgICAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzW25hbWVdID0gc2VhcmNoKCdbJythdHRyKyddJywgYXR0ciwgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29tcC51cGRhdGVUZW1wbGF0ZURhdGFFbGVtZW50cygpO1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicpIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBjb21wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgICAgICByZXR1cm4gY29tcDtcbiAgICB9XG59O1xuXG5Db21wb25lbnQubGlzdCA9IHt9O1xuQ29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG1ldGhvZHM6IHt9LFxuICAgICAgICBub2RlOiB7fSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB0ZW1wbGF0ZURhdGFFbGVtZW50czoge30sXG4gICAgICAgIHRlbXBsYXRlRGF0YUVsZW1lbnRzRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgdGVtcGxhdGVEYXRhRWxlbWVudHNBdHRyaWJ1dGVzOiBDT01QT05FTlRfREFUQV9BVFRSSUJVVEVTLFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQ6IHt9LFxuICAgIH0sIGNvbmZpZylcbn07XG5cbmV4cG9ydCBjb25zdCBDT01QT05FTlRfREFUQV9BVFRSSUJVVEVTID0gWydkYXRhLWZ1bmMnLCAnZGF0YS1hY3Rpb24nLCAnZGF0YS1ub2RlJywgJ2RhdGEtb24nXTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHR5cGUge3tzdXBlcjogRG9jdW1lbnRGcmFnbWVudCwgYWRkRXZlbnQ6IChmdW5jdGlvbigqPSwgKj0pOiBDdXN0b21FdmVudCksIHJlbW92ZUV2ZW50TGlzdGVuZXI6IChmdW5jdGlvbigqPSwgKj0sICo9KTogdGhpcyksIGRpc3BhdGNoRXZlbnQ6IChmdW5jdGlvbigqKTogdGhpcyksIGV2ZW50c1R5cGU6IHt9LCByZW1vdmVFdmVudDogKGZ1bmN0aW9uKCopOiB0aGlzKSwgdmVyc2lvbjogc3RyaW5nLCBhZGRFdmVudExpc3RlbmVyOiAoZnVuY3Rpb24oKj0sICo9LCAqPSk6IHt0eXBlOiAqLCBsaXN0ZW5lcjogKiwgdXNlQ2FwdHVyZTogKCp8Ym9vbGVhbil9KX19XG4gKi9cbmNvbnN0IEV2ZW50TWFuYWdlciA9IHtcbiAgICBzdXBlcjogZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgIHZlcnNpb246ICcwLjAuMicsXG4gICAgZXZlbnRzVHlwZToge30sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgbmV3IEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZGV0YWlsc1xuICAgICAqIEByZXR1cm5zIHtDdXN0b21FdmVudH1cbiAgICAgKi9cbiAgICBhZGRFdmVudDogZnVuY3Rpb24obmFtZSwgZGV0YWlscykge1xuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7ZGV0YWlsOiBkZXRhaWxzfSk7XG4gICAgICAgIGlmICh0eXBlb2YgZGV0YWlscyA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGV0YWlscylcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Lmhhc093blByb3BlcnR5KGtleSkpIGV2ZW50W2tleV0gPSBkZXRhaWxzW2tleV07XG5cbiAgICAgICAgRXZlbnRNYW5hZ2VyLnN1cGVyW25hbWVdID0gZXZlbnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgRXZlbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50OiBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5zdXBlcltuYW1lXSlcbiAgICAgICAgICAgIGRlbGV0ZSBFdmVudE1hbmFnZXIuc3VwZXJbbmFtZV1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFuIGV2ZW50IGhhbmRsZXIgb2YgYSBzcGVjaWZpYyBldmVudCB0eXBlIG9uIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICogQHJldHVybnMge3t0eXBlOiAqLCBsaXN0ZW5lcjogKiwgdXNlQ2FwdHVyZTogKCp8Ym9vbGVhbil9fVxuICAgICAqL1xuICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSl7XG4gICAgICAgIHVzZUNhcHR1cmUgPSB1c2VDYXB0dXJlIHx8IGZhbHNlO1xuICAgICAgICBFdmVudE1hbmFnZXIuc3VwZXIuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIGZyb20gdGhlIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHVzZUNhcHR1cmVcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpIHtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLnN1cGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmV8fGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERpc3BhdGNoIGFuIGV2ZW50IHRvIHRoaXMgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiAodHlwZSl7XG4gICAgICAgIGlmIChFdmVudE1hbmFnZXIuc3VwZXJbdHlwZV0gaW5zdGFuY2VvZiBDdXN0b21FdmVudClcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zdXBlci5kaXNwYXRjaEV2ZW50KEV2ZW50TWFuYWdlci5zdXBlclt0eXBlXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50TWFuYWdlcjtcbiIsIi8qXG5jb25zdCBhbmltYXRpb24gPSBGcmFtZXMoe1xuICAgIGZwczogMjQsXG4gICAgcGF1c2VkOiBmYWxzZSxcbn0pO1xuYW5pbWF0aW9uLnBhdXNlKCk7XG5hbmltYXRpb24uc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5hbmltYXRpb24uY2FuY2VsKCk7XG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3tkdXJhdGlvbjogbnVtYmVyLCBzdGFydHBhbHk6IG51bWJlciwgcGF1c2VkOiBib29sZWFuLCBkZWxheTogbnVtYmVyLCByZXF1ZXN0SWQ6IG51bWJlciwgY2FsbGJhY2s6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlciwgc3RhcnQoY2FsbGJhY2spOiBmdW5jdGlvbiwgcGF1c2U6IGZ1bmN0aW9uLCBjYW5jZWw6IGZ1bmN0aW9ufX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBGcmFtZXMgPSBmdW5jdGlvbiAocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgY29uc3QgaW50ZXJuYWwgPSB7XG4gICAgICAgIGZwczogZmFsc2UsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIG5vdzogMCxcbiAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgdGhlbjogMCxcbiAgICAgICAgZnBzSW50ZXJ2YWw6IDAsXG4gICAgICAgIGZyYW1lQ291bnQ6IDAsXG4gICAgICAgIHN0YXJ0cGFseTogMCxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgfTtcblxuICAgIGNvbnN0IGV4dGVybmFsID0ge1xuXG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKGludGVybmFsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaW50ZXJuYWxba2V5XSA9IHR5cGVvZiBwYXJhbWV0ZXJzW2tleV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwYXJhbWV0ZXJzW2tleV1cbiAgICAgICAgICAgIDogaW50ZXJuYWxba2V5XTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFpbnRlcm5hbC5zdGFydHBhbHkpIGludGVybmFsLnN0YXJ0cGFseSA9IHRpbWVzdGFtcDtcbiAgICAgICAgaWYgKCFpbnRlcm5hbC5mcmFtZUNvdW50KSBpbnRlcm5hbC5mcmFtZUNvdW50ID0gMDtcbiAgICAgICAgaW50ZXJuYWwucHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBpbnRlcm5hbC5zdGFydHBhbHk7XG5cbiAgICAgICAgaWYgKGludGVybmFsLmZwcyAmJiBpbnRlcm5hbC5mcHMgPiAwKSB7XG4gICAgICAgICAgICBpbnRlcm5hbC5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaW50ZXJuYWwuZWxhcHNlZCA9IGludGVybmFsLm5vdyAtIGludGVybmFsLnRoZW47XG4gICAgICAgICAgICBpZiAoaW50ZXJuYWwuZWxhcHNlZCA+IGludGVybmFsLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJuYWwudGhlbiA9IGludGVybmFsLm5vdyAtIChpbnRlcm5hbC5lbGFwc2VkICUgaW50ZXJuYWwuZnBzSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsLmNhbGxiYWNrICYmICFpbnRlcm5hbC5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJuYWwuZnJhbWVDb3VudCArKztcbiAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWwuY2FsbGJhY2suY2FsbChleHRlcm5hbCwgaW50ZXJuYWwucHJvZ3Jlc3MsIGludGVybmFsLmZyYW1lQ291bnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV4dGVybmFsLmNhbGxiYWNrICYmICFpbnRlcm5hbC5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbC5mcmFtZUNvdW50ICsrO1xuICAgICAgICAgICAgICAgIGV4dGVybmFsLmNhbGxiYWNrLmNhbGwoZXh0ZXJuYWwsIGludGVybmFsLnByb2dyZXNzLCBpbnRlcm5hbC5mcmFtZUNvdW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH1cblxuICAgIGV4dGVybmFsLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnRlcm5hbC5wYXVzZWQgPSAhaW50ZXJuYWwucGF1c2VkO1xuICAgIH07XG5cbiAgICBleHRlcm5hbC5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGV4dGVybmFsLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW50ZXJuYWwuZnBzID4gMCkge1xuICAgICAgICAgICAgaW50ZXJuYWwuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gaW50ZXJuYWwuZnBzO1xuICAgICAgICAgICAgaW50ZXJuYWwudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpbnRlcm5hbC5zdGFydFRpbWUgPSBpbnRlcm5hbC50aGVuO1xuICAgICAgICB9XG4gICAgICAgIGludGVybmFsLnJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICB9O1xuXG4gICAgZXh0ZXJuYWwuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaW50ZXJuYWwucmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGV4dGVybmFsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJhbWVzO1xuXG4iLCJcbmV4cG9ydCBjb25zdCBFdmVudENvZGVzID0ge1xuICAgICdCYWNrc3BhY2UnOiA4LFxuICAgICdUYWInOiA5LFxuICAgICdFbnRlcic6IDEzLFxuICAgICdTaGlmdExlZnQnOiAxNixcbiAgICAnU2hpZnRSaWdodCc6IDE2LFxuICAgICdDb250cm9sTGVmdCc6IDE3LFxuICAgICdDb250cm9sUmlnaHQnOiAxNyxcbiAgICAnQWx0TGVmdCc6IDE4LFxuICAgICdBbHRSaWdodCc6IDE4LFxuICAgICdQYXVzZSc6IDE5LFxuICAgICdCcmVhayc6IDE5LFxuICAgICdDYXBzTG9jayc6IDIwLFxuICAgICdFc2NhcGUnOiAyNyxcbiAgICAnU3BhY2UnOiAzMixcbiAgICAnUGFnZVVwJzogMzMsXG4gICAgJ1BhZ2VEb3duJzogMzQsXG4gICAgJ0VuZCc6IDM1LFxuICAgICdIb21lJzogMzYsXG4gICAgJ0Fycm93TGVmdCc6IDM3LFxuICAgICdBcnJvd1VwJzogMzgsXG4gICAgJ0Fycm93UmlnaHQnOiAzOSxcbiAgICAnQXJyb3dEb3duJzogNDAsXG4gICAgJ1ByaW50U2NyZWVuJzogNDQsXG4gICAgJ0luc2VydCc6IDQ1LFxuICAgICdEZWxldGUnOiA0NixcbiAgICAnRGlnaXQwJzogNDgsXG4gICAgJ0RpZ2l0MSc6IDQ5LFxuICAgICdEaWdpdDInOiA1MCxcbiAgICAnRGlnaXQzJzogNTEsXG4gICAgJ0RpZ2l0NCc6IDUyLFxuICAgICdEaWdpdDUnOiA1MyxcbiAgICAnRGlnaXQ2JzogNTQsXG4gICAgJ0RpZ2l0Nyc6IDU1LFxuICAgICdEaWdpdDgnOiA1NixcbiAgICAnRGlnaXQ5JzogNTcsXG4gICAgJ0tleUEnOiA2NSxcbiAgICAnS2V5Qic6IDY2LFxuICAgICdLZXlDJzogNjcsXG4gICAgJ0tleUQnOiA2OCxcbiAgICAnS2V5RSc6IDY5LFxuICAgICdLZXlGJzogNzAsXG4gICAgJ0tleUcnOiA3MSxcbiAgICAnS2V5SCc6IDcyLFxuICAgICdLZXlJJzogNzMsXG4gICAgJ0tleUonOiA3NCxcbiAgICAnS2V5Syc6IDc1LFxuICAgICdLZXlMJzogNzYsXG4gICAgJ0tleU0nOiA3NyxcbiAgICAnS2V5Tic6IDc4LFxuICAgICdLZXlPJzogNzksXG4gICAgJ0tleVAnOiA4MCxcbiAgICAnS2V5USc6IDgxLFxuICAgICdLZXlSJzogODIsXG4gICAgJ0tleVMnOiA4MyxcbiAgICAnS2V5VCc6IDg0LFxuICAgICdLZXlVJzogODUsXG4gICAgJ0tleVYnOiA4NixcbiAgICAnS2V5Vyc6IDg3LFxuICAgICdLZXlYJzogODgsXG4gICAgJ0tleVknOiA4OSxcbiAgICAnS2V5Wic6IDkwLFxuICAgICdNZXRhTGVmdCc6IDkxLFxuICAgICdNZXRhUmlnaHQnOiA5MixcbiAgICAnQ29udGV4dE1lbnUnOiA5MyxcbiAgICAnTnVtcGFkMCc6IDk2LFxuICAgICdOdW1wYWQxJzogOTcsXG4gICAgJ051bXBhZDInOiA5OCxcbiAgICAnTnVtcGFkMyc6IDk5LFxuICAgICdOdW1wYWQ0JzogMTAwLFxuICAgICdOdW1wYWQ1JzogMTAxLFxuICAgICdOdW1wYWQ2JzogMTAyLFxuICAgICdOdW1wYWQ3JzogMTAzLFxuICAgICdOdW1wYWQ4JzogMTA0LFxuICAgICdOdW1wYWQ5JzogMTA1LFxuICAgICdOdW1wYWRNdWx0aXBseSc6IDEwNixcbiAgICAnTnVtcGFkQWRkJzogMTA3LFxuICAgICdOdW1wYWRTdWJ0cmFjdCc6IDEwOSxcbiAgICAnTnVtcGFkRGVjaW1hbCc6IDExMCxcbiAgICAnTnVtcGFkRGl2aWRlJzogMTExLFxuICAgICdGMSc6IDExMixcbiAgICAnRjInOiAxMTMsXG4gICAgJ0YzJzogMTE0LFxuICAgICdGNCc6IDExNSxcbiAgICAnRjUnOiAxMTYsXG4gICAgJ0Y2JzogMTE3LFxuICAgICdGNyc6IDExOCxcbiAgICAnRjgnOiAxMTksXG4gICAgJ0Y5JzogMTIwLFxuICAgICdGMTAnOiAxMjEsXG4gICAgJ0YxMSc6IDEyMixcbiAgICAnRjEyJzogMTIzLFxuICAgICdOdW1Mb2NrJzogMTQ0LFxuICAgICdTY3JvbGxMb2NrJzogMTQ1LFxuICAgICdTZW1pY29sb24nOiAxODYsXG4gICAgJ0VxdWFsJzogMTg3LFxuICAgICdDb21tYSc6IDE4OCxcbiAgICAnTWludXMnOiAxODksXG4gICAgJ1BlcmlvZCc6IDE5MCxcbiAgICAnU2xhc2gnOiAxOTEsXG4gICAgJ0JhY2txdW90ZSc6IDE5MixcbiAgICAnQnJhY2tldExlZnQnOiAyMTksXG4gICAgJ0JhY2tzbGFzaCc6IDIyMCxcbiAgICAnQnJhY2tldFJpZ2h0JzogMjIxLFxuICAgICdRdW90ZSc6IDIyMixcbn07XG5cbmV4cG9ydCBjb25zdCBFdmVudENvZGVzTmFtZXMgPSB7XG4gICAgJ0JhY2tzcGFjZSc6ICdCYWNrc3BhY2UnLFxuICAgICdUYWInOiAnVGFiJyxcbiAgICAnRW50ZXInOiAnRW50ZXInLFxuICAgICdTaGlmdExlZnQnOiAnU2hpZnRMZWZ0JyxcbiAgICAnU2hpZnRSaWdodCc6ICdTaGlmdFJpZ2h0JyxcbiAgICAnQ29udHJvbExlZnQnOiAnQ29udHJvbExlZnQnLFxuICAgICdDb250cm9sUmlnaHQnOiAnQ29udHJvbFJpZ2h0JyxcbiAgICAnQWx0TGVmdCc6ICdBbHRMZWZ0JyxcbiAgICAnQWx0UmlnaHQnOiAnQWx0UmlnaHQnLFxuICAgICdQYXVzZSc6ICdQYXVzZScsXG4gICAgJ0JyZWFrJzogJ0JyZWFrJyxcbiAgICAnQ2Fwc0xvY2snOiAnQ2Fwc0xvY2snLFxuICAgICdFc2NhcGUnOiAnRXNjYXBlJyxcbiAgICAnU3BhY2UnOiAnU3BhY2UnLFxuICAgICdQYWdlVXAnOiAnUGFnZVVwJyxcbiAgICAnUGFnZURvd24nOiAnUGFnZURvd24nLFxuICAgICdFbmQnOiAnRW5kJyxcbiAgICAnSG9tZSc6ICdIb21lJyxcbiAgICAnQXJyb3dMZWZ0JzogJ0Fycm93TGVmdCcsXG4gICAgJ0Fycm93VXAnOiAnQXJyb3dVcCcsXG4gICAgJ0Fycm93UmlnaHQnOiAnQXJyb3dSaWdodCcsXG4gICAgJ0Fycm93RG93bic6ICdBcnJvd0Rvd24nLFxuICAgICdQcmludFNjcmVlbic6ICdQcmludFNjcmVlbicsXG4gICAgJ0luc2VydCc6ICdJbnNlcnQnLFxuICAgICdEZWxldGUnOiAnRGVsZXRlJyxcbiAgICAnRGlnaXQwJzogJ0RpZ2l0MCcsXG4gICAgJ0RpZ2l0MSc6ICdEaWdpdDEnLFxuICAgICdEaWdpdDInOiAnRGlnaXQyJyxcbiAgICAnRGlnaXQzJzogJ0RpZ2l0MycsXG4gICAgJ0RpZ2l0NCc6ICdEaWdpdDQnLFxuICAgICdEaWdpdDUnOiAnRGlnaXQ1JyxcbiAgICAnRGlnaXQ2JzogJ0RpZ2l0NicsXG4gICAgJ0RpZ2l0Nyc6ICdEaWdpdDcnLFxuICAgICdEaWdpdDgnOiAnRGlnaXQ4JyxcbiAgICAnRGlnaXQ5JzogJ0RpZ2l0OScsXG4gICAgJ0tleUEnOiAnS2V5QScsXG4gICAgJ0tleUInOiAnS2V5QicsXG4gICAgJ0tleUMnOiAnS2V5QycsXG4gICAgJ0tleUQnOiAnS2V5RCcsXG4gICAgJ0tleUUnOiAnS2V5RScsXG4gICAgJ0tleUYnOiAnS2V5RicsXG4gICAgJ0tleUcnOiAnS2V5RycsXG4gICAgJ0tleUgnOiAnS2V5SCcsXG4gICAgJ0tleUknOiAnS2V5SScsXG4gICAgJ0tleUonOiAnS2V5SicsXG4gICAgJ0tleUsnOiAnS2V5SycsXG4gICAgJ0tleUwnOiAnS2V5TCcsXG4gICAgJ0tleU0nOiAnS2V5TScsXG4gICAgJ0tleU4nOiAnS2V5TicsXG4gICAgJ0tleU8nOiAnS2V5TycsXG4gICAgJ0tleVAnOiAnS2V5UCcsXG4gICAgJ0tleVEnOiAnS2V5UScsXG4gICAgJ0tleVInOiAnS2V5UicsXG4gICAgJ0tleVMnOiAnS2V5UycsXG4gICAgJ0tleVQnOiAnS2V5VCcsXG4gICAgJ0tleVUnOiAnS2V5VScsXG4gICAgJ0tleVYnOiAnS2V5VicsXG4gICAgJ0tleVcnOiAnS2V5VycsXG4gICAgJ0tleVgnOiAnS2V5WCcsXG4gICAgJ0tleVknOiAnS2V5WScsXG4gICAgJ0tleVonOiAnS2V5WicsXG4gICAgJ01ldGFMZWZ0JzogJ01ldGFMZWZ0JyxcbiAgICAnTWV0YVJpZ2h0JzogJ01ldGFSaWdodCcsXG4gICAgJ0NvbnRleHRNZW51JzogJ0NvbnRleHRNZW51JyxcbiAgICAnTnVtcGFkMCc6ICdOdW1wYWQwJyxcbiAgICAnTnVtcGFkMSc6ICdOdW1wYWQxJyxcbiAgICAnTnVtcGFkMic6ICdOdW1wYWQyJyxcbiAgICAnTnVtcGFkMyc6ICdOdW1wYWQzJyxcbiAgICAnTnVtcGFkNCc6ICdOdW1wYWQ0JyxcbiAgICAnTnVtcGFkNSc6ICdOdW1wYWQ1JyxcbiAgICAnTnVtcGFkNic6ICdOdW1wYWQ2JyxcbiAgICAnTnVtcGFkNyc6ICdOdW1wYWQ3JyxcbiAgICAnTnVtcGFkOCc6ICdOdW1wYWQ4JyxcbiAgICAnTnVtcGFkOSc6ICdOdW1wYWQ5JyxcbiAgICAnTnVtcGFkTXVsdGlwbHknOiAnTnVtcGFkTXVsdGlwbHknLFxuICAgICdOdW1wYWRBZGQnOiAnTnVtcGFkQWRkJyxcbiAgICAnTnVtcGFkU3VidHJhY3QnOiAnTnVtcGFkU3VidHJhY3QnLFxuICAgICdOdW1wYWREZWNpbWFsJzogJ051bXBhZERlY2ltYWwnLFxuICAgICdOdW1wYWREaXZpZGUnOiAnTnVtcGFkRGl2aWRlJyxcbiAgICAnRjEnOiAnRjEnLFxuICAgICdGMic6ICdGMicsXG4gICAgJ0YzJzogJ0YzJyxcbiAgICAnRjQnOiAnRjQnLFxuICAgICdGNSc6ICdGNScsXG4gICAgJ0Y2JzogJ0Y2JyxcbiAgICAnRjcnOiAnRjcnLFxuICAgICdGOCc6ICdGOCcsXG4gICAgJ0Y5JzogJ0Y5JyxcbiAgICAnRjEwJzogJ0YxMCcsXG4gICAgJ0YxMSc6ICdGMTEnLFxuICAgICdGMTInOiAnRjEyJyxcbiAgICAnTnVtTG9jayc6ICdOdW1Mb2NrJyxcbiAgICAnU2Nyb2xsTG9jayc6ICdTY3JvbGxMb2NrJyxcbiAgICAnU2VtaWNvbG9uJzogJ1NlbWljb2xvbicsXG4gICAgJ0VxdWFsJzogJ0VxdWFsJyxcbiAgICAnQ29tbWEnOiAnQ29tbWEnLFxuICAgICdNaW51cyc6ICdNaW51cycsXG4gICAgJ1BlcmlvZCc6ICdQZXJpb2QnLFxuICAgICdTbGFzaCc6ICdTbGFzaCcsXG4gICAgJ0JhY2txdW90ZSc6ICdCYWNrcXVvdGUnLFxuICAgICdCcmFja2V0TGVmdCc6ICdCcmFja2V0TGVmdCcsXG4gICAgJ0JhY2tzbGFzaCc6ICdCYWNrc2xhc2gnLFxuICAgICdCcmFja2V0UmlnaHQnOiAnQnJhY2tldFJpZ2h0JyxcbiAgICAnUXVvdGUnOiAnUXVvdGUnLFxufTtcblxuZXhwb3J0IGNvbnN0IEV2ZW50S2V5cyA9IHtcbiAgICAnYmFja3NwYWNlJzogOCxcbiAgICAndGFiJzogOSxcbiAgICAnZW50ZXInOiAxMyxcbiAgICAnc2hpZnQobGVmdCknOiAxNixcbiAgICAnc2hpZnQocmlnaHQpJzogMTYsXG4gICAgJ2N0cmwobGVmdCknOiAxNyxcbiAgICAnY3RybChyaWdodCknOiAxNyxcbiAgICAnYWx0KGxlZnQpJzogMTgsXG4gICAgJ2FsdChyaWdodCknOiAxOCxcbiAgICAncGF1c2UvYnJlYWsnOiAxOSxcbiAgICAnY2FwcyBsb2NrJzogMjAsXG4gICAgJ2VzY2FwZSc6IDI3LFxuICAgICdzcGFjZSc6IDMyLFxuICAgICdwYWdlIHVwJzogMzMsXG4gICAgJ3BhZ2UgZG93bic6IDM0LFxuICAgICdlbmQnOiAzNSxcbiAgICAnaG9tZSc6IDM2LFxuICAgICdsZWZ0IGFycm93JzogMzcsXG4gICAgJ3VwIGFycm93JzogMzgsXG4gICAgJ3JpZ2h0IGFycm93JzogMzksXG4gICAgJ2Rvd24gYXJyb3cnOiA0MCxcbiAgICAncHJpbnQgc2NyZWVuJzogNDQsXG4gICAgJ2luc2VydCc6IDQ1LFxuICAgICdkZWxldGUnOiA0NixcbiAgICAnMCc6IDQ4LFxuICAgICcxJzogNDksXG4gICAgJzInOiA1MCxcbiAgICAnMyc6IDUxLFxuICAgICc0JzogNTIsXG4gICAgJzUnOiA1MyxcbiAgICAnNic6IDU0LFxuICAgICc3JzogNTUsXG4gICAgJzgnOiA1NixcbiAgICAnOSc6IDU3LFxuICAgICdhJzogNjUsXG4gICAgJ2InOiA2NixcbiAgICAnYyc6IDY3LFxuICAgICdkJzogNjgsXG4gICAgJ2UnOiA2OSxcbiAgICAnZic6IDcwLFxuICAgICdnJzogNzEsXG4gICAgJ2gnOiA3MixcbiAgICAnaSc6IDczLFxuICAgICdqJzogNzQsXG4gICAgJ2snOiA3NSxcbiAgICAnbCc6IDc2LFxuICAgICdtJzogNzcsXG4gICAgJ24nOiA3OCxcbiAgICAnbyc6IDc5LFxuICAgICdwJzogODAsXG4gICAgJ3EnOiA4MSxcbiAgICAncic6IDgyLFxuICAgICdzJzogODMsXG4gICAgJ3QnOiA4NCxcbiAgICAndSc6IDg1LFxuICAgICd2JzogODYsXG4gICAgJ3cnOiA4NyxcbiAgICAneCc6IDg4LFxuICAgICd5JzogODksXG4gICAgJ3onOiA5MCxcbiAgICAnbnVtcGFkIDAnOiA5NixcbiAgICAnbnVtcGFkIDEnOiA5NyxcbiAgICAnbnVtcGFkIDInOiA5OCxcbiAgICAnbnVtcGFkIDMnOiA5OSxcbiAgICAnbnVtcGFkIDQnOiAxMDAsXG4gICAgJ251bXBhZCA1JzogMTAxLFxuICAgICdudW1wYWQgNic6IDEwMixcbiAgICAnbnVtcGFkIDcnOiAxMDMsXG4gICAgJ251bXBhZCA4JzogMTA0LFxuICAgICdudW1wYWQgOSc6IDEwNSxcbiAgICAnbXVsdGlwbHknOiAxMDYsXG4gICAgJ2FkZCc6IDEwNyxcbiAgICAnc3VidHJhY3QnOiAxMDksXG4gICAgJ2RpdmlkZSc6IDExMSxcbiAgICAnZGVjaW1hbCBwb2ludCc6IDExMCxcbiAgICAnZjEnOiAxMTIsXG4gICAgJ2YyJzogMTEzLFxuICAgICdmMyc6IDExNCxcbiAgICAnZjQnOiAxMTUsXG4gICAgJ2Y1JzogMTE2LFxuICAgICdmNic6IDExNyxcbiAgICAnZjcnOiAxMTgsXG4gICAgJ2Y4JzogMTE5LFxuICAgICdmOSc6IDEyMCxcbiAgICAnZjEwJzogMTIxLFxuICAgICdmMTEnOiAxMjIsXG4gICAgJ2YxMic6IDEyMyxcbiAgICAnbnVtIGxvY2snOiAxNDQsXG4gICAgJ3Njcm9sbCBsb2NrJzogMTQ1LFxufTtcblxuZXhwb3J0IGNvbnN0IEV2ZW50S2V5c05hbWVzID0ge1xuXG4gICAgJ2JhY2tzcGFjZSc6ICdiYWNrc3BhY2UnLFxuICAgICd0YWInOiAndGFiJyxcbiAgICAnZW50ZXInOiAnZW50ZXInLFxuICAgICdzaGlmdChsZWZ0KSc6ICdzaGlmdChsZWZ0KScsXG4gICAgJ3NoaWZ0KHJpZ2h0KSc6ICdzaGlmdChyaWdodCknLFxuICAgICdjdHJsKGxlZnQpJzogJ2N0cmwobGVmdCknLFxuICAgICdjdHJsKHJpZ2h0KSc6ICdjdHJsKHJpZ2h0KScsXG4gICAgJ2FsdChsZWZ0KSc6ICdhbHQobGVmdCknLFxuICAgICdhbHQocmlnaHQpJzogJ2FsdChyaWdodCknLFxuICAgICdwYXVzZS9icmVhayc6ICdwYXVzZS9icmVhaycsXG4gICAgJ2NhcHMgbG9jayc6ICdjYXBzIGxvY2snLFxuICAgICdlc2NhcGUnOiAnZXNjYXBlJyxcbiAgICAnc3BhY2UnOiAnc3BhY2UnLFxuICAgICdwYWdlIHVwJzogJ3BhZ2UgdXAnLFxuICAgICdwYWdlIGRvd24nOiAncGFnZSBkb3duJyxcbiAgICAnZW5kJzogJ2VuZCcsXG4gICAgJ2hvbWUnOiAnaG9tZScsXG4gICAgJ2xlZnQgYXJyb3cnOiAnbGVmdCBhcnJvdycsXG4gICAgJ3VwIGFycm93JzogJ3VwIGFycm93JyxcbiAgICAncmlnaHQgYXJyb3cnOiAncmlnaHQgYXJyb3cnLFxuICAgICdkb3duIGFycm93JzogJ2Rvd24gYXJyb3cnLFxuICAgICdwcmludCBzY3JlZW4nOiAncHJpbnQgc2NyZWVuJyxcbiAgICAnaW5zZXJ0JzogJ2luc2VydCcsXG4gICAgJ2RlbGV0ZSc6ICdkZWxldGUnLFxuICAgICcwJzogJzAnLFxuICAgICcxJzogJzEnLFxuICAgICcyJzogJzInLFxuICAgICczJzogJzMnLFxuICAgICc0JzogJzQnLFxuICAgICc1JzogJzUnLFxuICAgICc2JzogJzYnLFxuICAgICc3JzogJzcnLFxuICAgICc4JzogJzgnLFxuICAgICc5JzogJzknLFxuICAgICdhJzogJ2EnLFxuICAgICdiJzogJ2InLFxuICAgICdjJzogJ2MnLFxuICAgICdkJzogJ2QnLFxuICAgICdlJzogJ2UnLFxuICAgICdmJzogJ2YnLFxuICAgICdnJzogJ2cnLFxuICAgICdoJzogJ2gnLFxuICAgICdpJzogJ2knLFxuICAgICdqJzogJ2onLFxuICAgICdrJzogJ2snLFxuICAgICdsJzogJ2wnLFxuICAgICdtJzogJ20nLFxuICAgICduJzogJ24nLFxuICAgICdvJzogJ28nLFxuICAgICdwJzogJ3AnLFxuICAgICdxJzogJ3EnLFxuICAgICdyJzogJ3InLFxuICAgICdzJzogJ3MnLFxuICAgICd0JzogJ3QnLFxuICAgICd1JzogJ3UnLFxuICAgICd2JzogJ3YnLFxuICAgICd3JzogJ3cnLFxuICAgICd4JzogJ3gnLFxuICAgICd5JzogJ3knLFxuICAgICd6JzogJ3onLFxuICAgICdudW1wYWQgMCc6ICdudW1wYWQgMCcsXG4gICAgJ251bXBhZCAxJzogJ251bXBhZCAxJyxcbiAgICAnbnVtcGFkIDInOiAnbnVtcGFkIDInLFxuICAgICdudW1wYWQgMyc6ICdudW1wYWQgMycsXG4gICAgJ251bXBhZCA0JzogJ251bXBhZCA0JyxcbiAgICAnbnVtcGFkIDUnOiAnbnVtcGFkIDUnLFxuICAgICdudW1wYWQgNic6ICdudW1wYWQgNicsXG4gICAgJ251bXBhZCA3JzogJ251bXBhZCA3JyxcbiAgICAnbnVtcGFkIDgnOiAnbnVtcGFkIDgnLFxuICAgICdudW1wYWQgOSc6ICdudW1wYWQgOScsXG4gICAgJ211bHRpcGx5JzogJ211bHRpcGx5JyxcbiAgICAnYWRkJzogJ2FkZCcsXG4gICAgJ3N1YnRyYWN0JzogJ3N1YnRyYWN0JyxcbiAgICAnZGl2aWRlJzogJ2RpdmlkZScsXG4gICAgJ2RlY2ltYWwgcG9pbnQnOiAnZGVjaW1hbCBwb2ludCcsXG4gICAgJ2YxJzogJ2YxJyxcbiAgICAnZjInOiAnZjInLFxuICAgICdmMyc6ICdmMycsXG4gICAgJ2Y0JzogJ2Y0JyxcbiAgICAnZjUnOiAnZjUnLFxuICAgICdmNic6ICdmNicsXG4gICAgJ2Y3JzogJ2Y3JyxcbiAgICAnZjgnOiAnZjgnLFxuICAgICdmOSc6ICdmOScsXG4gICAgJ2YxMCc6ICdmMTAnLFxuICAgICdmMTEnOiAnZjExJyxcbiAgICAnZjEyJzogJ2YxMicsXG4gICAgJ251bSBsb2NrJzogJ251bSBsb2NrJyxcbiAgICAnc2Nyb2xsIGxvY2snOiAnc2Nyb2xsIGxvY2snLFxufVxuXG4vKlxuY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZEV2ZW50TWFuYWdlcigpO1xua2V5Ym9hcmQuZWFjaChFVkVOVF9OQU1FLCBmdW5jdGlvbiAoZXZlbnQpIHt9KVxua2V5Ym9hcmQud2l0aENvbmRpdGlvbktleVxua2V5Ym9hcmQucHJlc3MoKVxua2V5Ym9hcmQudXAoKVxua2V5Ym9hcmQuZG93bigpXG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3t3aXRoQ29uZGl0aW9uS2V5KCo9LCAqPSwgKj0pOiB2b2lkLCB1cCgqPSwgKj0pOiB2b2lkLCBwcmVzcygqPSwgKj0pOiB2b2lkLCBkb3duKCo9LCAqPSk6IHZvaWQsIGVhY2goKj0sICo9KTogdm9pZH19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgS2V5Ym9hcmRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgc3RvcmFnZSA9IHt9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgYWRkU3RvcmFnZSA9IGZ1bmN0aW9uIChldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdKSBzdG9yYWdlW2V2ZW50XSA9IHt9O1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdW2tleV0pIHN0b3JhZ2VbZXZlbnRdW2tleV0gPSBbXTtcbiAgICAgICAgc3RvcmFnZVtldmVudF1ba2V5XS5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAodHlwZW9mIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdID0gYmFzZUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGJhc2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlKS5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2VbdHlwZV0pLm1hcCgoa2V5Q29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0ubWFwKChjYWxsYmFjaykgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gdHlwZSAmJiBwYXJzZUludChrZXlDb2RlKSA9PT0gZXZlbnQua2V5Q29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZXZlbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlYWNoQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGVhY2hDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCByZW1vdmVFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVycygpO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvZGVUb0tleUNvZGUgPSAoa2V5KSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBFdmVudENvZGVzW2tleV1cbiAgICAgICAgICAgICYmIHR5cGVvZiBFdmVudENvZGVzW2tleV0gPT0gXCJudW1iZXJcIlxuICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBFdmVudENvZGVzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYgRXZlbnRLZXlzW2tleV1cbiAgICAgICAgICAgICYmIHR5cGVvZiBFdmVudEtleXNba2V5XSA9PSBcIm51bWJlclwiXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIEV2ZW50S2V5c1trZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdLZXkgc3RyaW5nIG5vdCBmb25kJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVhY2goZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlYWNoQ2FsbGJhY2soZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb25kaXRpb25LZXkoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGtleSA9IGNvZGVUb0tleUNvZGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFN0b3JhZ2UoZXZlbnQsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc3Moa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlwcmVzcycsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICB1cChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXVwJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlkb3duJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuS2V5Ym9hcmRFdmVudE1hbmFnZXIuRXZlbnRDb2RlcyA9IEV2ZW50Q29kZXM7XG5LZXlib2FyZEV2ZW50TWFuYWdlci5FdmVudEtleXMgPSBFdmVudEtleXM7XG5cbktleWJvYXJkRXZlbnRNYW5hZ2VyLmdldEV2ZW50S2V5QnlFdmVudENvZGUgPSBmdW5jdGlvbiAoZXZlbnRDb2RlKSB7XG4gICAgbGV0IGN1cnJlbnRFdmVudEtleSA9IGZhbHNlO1xuICAgIGNvbnN0IHdoaWNoID0gRXZlbnRDb2Rlc1tldmVudENvZGVdO1xuICAgIE9iamVjdC5rZXlzKEV2ZW50S2V5cykuZmlsdGVyKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChFdmVudEtleXNba2V5XSA9PT0gd2hpY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RXZlbnRLZXkgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyZW50RXZlbnRLZXk7XG59O1xuXG5LZXlib2FyZEV2ZW50TWFuYWdlci5nZXRFdmVudENvZGVCeUV2ZW50S2V5ID0gZnVuY3Rpb24gKGV2ZW50S2V5KSB7XG4gICAgbGV0IGN1cnJlbnRFdmVudENvZGUgPSBmYWxzZTtcbiAgICBjb25zdCB3aGljaCA9IEV2ZW50S2V5c1tldmVudEtleV07XG4gICAgT2JqZWN0LmtleXMoRXZlbnRDb2RlcykuZmlsdGVyKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChFdmVudENvZGVzW2tleV0gPT09IHdoaWNoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEV2ZW50Q29kZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRFdmVudENvZGU7XG59O1xuXG5LZXlib2FyZEV2ZW50TWFuYWdlci5nZXRXaGljaEJ5RXZlbnRDb2RlID0gZnVuY3Rpb24gKGV2ZW50Q29kZSkge1xuICAgIHJldHVybiBFdmVudENvZGVzW2V2ZW50Q29kZV07XG59XG5cbktleWJvYXJkRXZlbnRNYW5hZ2VyLmdldEV2ZW50Q29kZUJ5V2hpY2ggPSBmdW5jdGlvbiAod2hpY2gpIHtcbiAgICBsZXQgY3VycmVudEV2ZW50Q29kZSA9IGZhbHNlO1xuICAgIE9iamVjdC5rZXlzKEV2ZW50Q29kZXMpLmZpbHRlcigoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoRXZlbnRDb2Rlc1trZXldID09PSB3aGljaCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRFdmVudENvZGUgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyZW50RXZlbnRDb2RlO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZEV2ZW50TWFuYWdlcjtcbiIsIlxuXG4vKipcbiAqIExvYWRlci5hdWRpb3M6IMaSIChzcmNzLCBjYWxsYmFjaylcbiAqIExvYWRlci5pbWFnZXM6IMaSIChpbWdzLCBjYWxsYmFjaylcbiAqIExvYWRlci5qYXZhc2NyaXB0OiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIExvYWRlci5qc29uOiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIEBwcm9wZXJ0eVxuICogQG1ldGhvZCBqc29uXG4gKiBAbWV0aG9kIGpzb25zXG4gKiBAbWV0aG9kIGphdmFzY3JpcHRcbiAqIEBtZXRob2QgaW1hZ2VzXG4gKiBAbWV0aG9kIGF1ZGlvc1xuICogQHJldHVybnMge3t9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBqc29uOiBMb2FkZXIuanNvbixcbiAgICAgICAganNvbnM6IExvYWRlci5qc29ucyxcbiAgICAgICAgamF2YXNjcmlwdDogTG9hZGVyLmphdmFzY3JpcHQsXG4gICAgICAgIGltYWdlczogTG9hZGVyLmltYWdlcyxcbiAgICAgICAgYXVkaW9zOiBMb2FkZXIuYXVkaW9zLFxuICAgICAgICB2aWRlb3M6IExvYWRlci52aWRlbyxcbiAgICB9O1xufTtcblxuLyoqXG4gKiAuanNvbignL3VybC9kYXRhZmlsZS5qc29uJywgKGpzb24pID0+IHt9LCAoZXJyb3IpID0+IHt9KVxuICpcbiAqIEBwYXJhbSBzcmNcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIG9uZXJyb3JcbiAqL1xuTG9hZGVyLmpzb24gPSBmdW5jdGlvbiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IGNhbGxiYWNrKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gb25lcnJvclxuICovXG5Mb2FkZXIuanNvbnMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG57XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBMb2FkZXIuanNvbihzcmMsIChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1trZXldID0ganNvbjtcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvbmVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5qYXZhc2NyaXB0ICgge1xuICogICAgICBteV9zY3JpcHQxOiAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gKiAgICAgIG15X3NjcmlwdDI6ICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogLmphdmFzY3JpcHQgKCBbXG4gKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215X3NjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIExvYWRlci5qYXZhc2NyaXB0XG4gKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAqIEBwYXJhbSBjYWxsYmFjayAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gYWxsIHNyY3MgaXMgbG9hZGVkXG4gKiBAcGFyYW0gb25lcnJvciAgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWQgaXMgZmFpbGVkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTG9hZGVyLmphdmFzY3JpcHQgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG57XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIGxldCBzY3JpcHQ7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSAoc3Jjc1trZXldLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyY3Nba2V5XSA6IHNyY3Nba2V5XSArICcuanMnO1xuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgICAgICBzY3JpcHQuaWQgPSBrZXk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogTG9hZCBhbiBpbWFnZXNcbiAqXG4gKiAuaW1hZ2VzICgge1xuICogICAgICBpbWcxOiAnL3BhdGgvdG8vaW1nMScsXG4gKiAgICAgIGltZzI6ICcvcGF0aC90by9pbWcyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci5pbWFnZXNcbiAqIEBwYXJhbSBpbWdzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLmltYWdlcyA9IGZ1bmN0aW9uIChpbWdzLCBjYWxsYmFjaykge1xuICAgIGlmIChpbWdzICYmIHR5cGVvZiBpbWdzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhpbWdzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGltZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltZ3NbbmFtZV07XG4gICAgICAgICAgICBpbWcubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpbWFnZXNbdGhpcy5uYW1lXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogTG9hZCBhbiBhdWRpbyBmaWxlc1xuICpcbiAqIC5hdWRpb3MgKCB7XG4gKiAgICAgIGF1ZGlvMTogJy9wYXRoL3RvL2F1ZGlvMScsXG4gKiAgICAgIGF1ZGlvMjogJy9wYXRoL3RvL2F1ZGlvMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuYXVkaW9zXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci5hdWRpb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCBhdWRpb3MgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzcmNzKSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgYXVkaW8ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBhdWRpby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgYXVkaW9zW25hbWVdID0gYXVkaW87XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBhdWRpb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBMb2FkIGFuIHZpZGVvIGZpbGVzXG4gKlxuICogLnZpZGVvcyAoIHtcbiAqICAgICAgdmlkZW8xOiAnL3BhdGgvdG8vdmlkZW8xJyxcbiAqICAgICAgdmlkZW8yOiAnL3BhdGgvdG8vdmlkZW8yJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci52aWRlb3NcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLnZpZGVvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgIHZpZGVvLnNyYyA9IHNyY3NbbmFtZV07XG4gICAgICAgICAgICB2aWRlby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHZpZGVvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICB2aWRlb3NbbmFtZV0gPSB2aWRlbztcbiAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHZpZGVvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsIi8qKlxuXG5hIChtMTEpIEhvcml6b250YWwgc2NhbGluZy5cbmIgKG0xMikgSG9yaXpvbnRhbCBza2V3aW5nLlxuYyAobTIxKSBWZXJ0aWNhbCBza2V3aW5nLlxuZCAobTIyKSBWZXJ0aWNhbCBzY2FsaW5nLlxuZSAoZHgpIEhvcml6b250YWwgbW92aW5nLlxuZiAoZHkpIFZlcnRpY2FsIG1vdmluZy5cbiovXG5jb25zdCBNYXRyaXggPSBmdW5jdGlvbiAobTExLCBtMTIsIG0yMSwgbTIyLCBneCwgZ3kpIHtcbiAgICByZXR1cm4ge20xMSwgbTEyLCBtMjEsIG0yMiwgZ3gsIGd5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDtcbiIsImltcG9ydCBDbGlwIGZyb20gXCIuL0NsaXBcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQge3JhbmRvbUh1bWFuaXplU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IGV4dGVuZCwge2V4dGVuZFJlY3Vyc2l2ZX0gZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc1N0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzU3RyaW5nXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuXG4vKlxubWMgPSBNb3ZlQ2xpcCh7XG4gICAgZWxlbWVudDogYDxkaXYgY2xhc3M9XCJzcHJpdGUgcmVjdFwiPjwvZGl2PmAsXG4gICAgcGFyZW50OiBDbGlwKCksXG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0sXG59KVxuXG5tYy54XG5tYy55XG5tYy53aWR0aFxubWMuaGVpZ2h0XG5tYy5lbGVtZW50ID09PSBtYy50ZW1wbGF0ZVxubWMuc3R5bGUoIHsgY29sb3I6ICd3aGl0ZScgfSApXG5tYy5jbG9uZSgpXG5tYy5pbmplY3QoRWxlbWVudClcbm1jLmFwcGVuZChFbGVtZW50KVxubWMucmVtb3ZlKEVsZW1lbnQpIC8vIHVzZXMgcmVtb3ZlQ2hpbGRcbm1jLm9uKGV2ZW50LCBjYWxsYmFjaylcbiovXG4vKipcbiAqIEBtZXRob2Qgc3R5bGVcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHt7cmVhZG9ubHkgeDogKiwgcmVhZG9ubHkgd2lkdGg6ICosIGluaXRpYWxpemVkOiBib29sZWFuLCByZWFkb25seSB5OiAqLCBzdHlsZSgqPSk6IHZvaWQsIGNvbXBsZXRlZDogYm9vbGVhbiwgZWxlbWVudDogKiwgcmVhZG9ubHkgaGVpZ2h0OiAqfXwqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcbiAgICBjb25zdCBjbGlwID0gQ2xpcChlbGVtZW50KTtcblxuICAgIGlmKCFjbGlwLmVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBbZWxlbWVudF0gbm90IGZvbmQhJyk7XG4gICAgfVxuXG4gICAgbGV0IG5hbWUgPSByYW5kb21IdW1hbml6ZVN0cmluZyg2KTtcbiAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xuICAgIGNsaXAuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyArIG5hbWUpO1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogY2xpcC5lbGVtZW50LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHNldCB4KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueFxuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAud2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLmhlaWdodFxuICAgICAgICB9LFxuICAgICAgICAvLyBzdHlsZSh7IHRyYW5zZm9ybTogJ3JvdGF0ZSgxMGRlZykgc2NhbGUoMC42LCAwLjYpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKScsIH0pO1xuICAgICAgICBzdHlsZShvYmplY3QpIHtcbiAgICAgICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVsZXRlIGNvbmZpZy5lbGVtZW50O1xuICAgIGRlbGV0ZSBjb25maWcuaW5pdGlhbGl6ZWQ7XG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJvb3Rba2V5XSA9IGNvbmZpZ1trZXldXG4gICAgfSk7XG5cbiAgICAvLyBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgLy8gICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIC8vICAgICByb290LmluaXQuY2FsbChyb290KTtcbiAgICAvLyB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpc05vZGUocm9vdC5lbGVtZW50KVxuICAgICAgICAgICAgPyByb290LmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICA6ICc8ZGl2IC8+JztcblxuICAgICAgICBsZXQgY29uZiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IG5vZGUsXG4gICAgICAgICAgICBwYXJlbnQ6IHJvb3QucGFyZW50LFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb25lZDogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25mID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzICksIGNvbmYpO1xuXG4gICAgICAgIGNvbnN0IG1jID0gTW92ZUNsaXAoY29uZik7XG5cbiAgICAgICAgaWYgKGFwcGVuZCkge1xuICAgICAgICAgICAgaWYgKGlzTm9kZShyb290LnBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICByb290LnBhcmVudC5hcHBlbmRDaGlsZChtYy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByb290LnBhcmVudC5hcHBlbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByb290LnBhcmVudC5hcHBlbmQobWMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWM7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHsgcm9vdC5pbmplY3QoZSwgdHJ1ZSkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBlbGVtID0gZWxlbS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCArPSBlbGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3QucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5lbGVtZW50LnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIGFyZ3VtZW50IHR5cGUuIE5lZWQgTm9kZUVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIHJvb3QuY2FsY3VsYXRlID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudCA9IGlzTm9kZShlbGVtZW50KSB8fCBpc1N0cmluZyhlbGVtZW50KSA/IGVsZW1lbnQgOiB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHJlX3Jvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcbiAgICAgICAgY29uc3QgcmVfcGFyZW50ID0gcG9zaXRpb24ocmVfcm9vdC5lbGVtZW50LnBhcmVudE5vZGUpO1xuXG4gICAgICAgIGlmIChpc05vZGUocmVfcGFyZW50LmVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZV9yb290LnBhcmVudCA9IHJvb3QuY2FsY3VsYXRlKHJlX3BhcmVudC5lbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlX3Jvb3QucGFyZW50ID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgICAgICB9XG4gICAgICAgIHJlX3Jvb3QueCA9IHJlX3Jvb3QueCAtIHJlX3BhcmVudC54O1xuICAgICAgICByZV9yb290LnkgPSByZV9yb290LnkgLSByZV9wYXJlbnQueTtcblxuICAgICAgICBjb25zdCBwcm9wcyA9IFsneCcsICd5JywgJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAnbGVmdCcsICdyaWdodCcsICdib3R0b20nLCAncGFyZW50J107XG4gICAgICAgIE9iamVjdC5rZXlzKHJlX3Jvb3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICByb290W2tleV0gPSByZV9yb290W2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICByb290LmluaXQuY2FsbChyb290KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIXJvb3QuY29tcGxldGVkKXtcbiAgICAgICAgcm9vdC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICByb290LmNvbXBsZXRlLmNhbGwocm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ2xpcDtcbiIsIlxuY29uc3QgUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiB7eCwgeX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsIlxuY29uc3QgUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4ge3gsIHksIHdpZHRoLCBoZWlnaHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuIiwiaW1wb3J0IHRyaW1TeW1ib2xzIGZyb20gXCIuLi9zdGF0aWMvdHJpbVN5bWJvbHNcIjtcblxuY29uc3QgUm91dGVyID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCByb290ID0ge307XG4gICAgcm9vdC5oYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICByb290LnJvb3QgPSAnLycgKyB0cmltU3ltYm9scyhjb25maWcucm9vdCwgJy8nKTtcbiAgICByb290LnBhdGhuYW1lID0gJy8nICsgdHJpbVN5bWJvbHMobG9jYXRpb24ucGF0aG5hbWUsICcvJykgKyAnLyc7XG4gICAgcm9vdC5yb3V0ZXMgPSBjb25maWcucm91dGVzID8gY29uZmlnLnJvdXRlcyA6IHt9O1xuICAgIHJvb3QuY29udGV4dCA9IGNvbmZpZy5jb250ZXh0ID8gY29uZmlnLmNvbnRleHQgOiB7fTtcblxuICAgIHJvb3QudG8gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleSlcbiAgICAgICAgaWYgKHR5cGVvZiByb290LnJvdXRlc1trZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJvb3Qucm91dGVzW2tleV0uY2FsbCh7fSwgcm9vdC5jb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhyb290LnJvdXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzID0ga2V5LmluY2x1ZGVzKCcjJylcbiAgICAgICAgICAgID8ga2V5ID09PSByb290Lmhhc2hcbiAgICAgICAgICAgIDogcm9vdC5yb290ICsga2V5ID09PSByb290LnBhdGhuYW1lO1xuXG4gICAgICAgIGlmIChpcyAmJiB0eXBlb2Ygcm9vdC5yb3V0ZXNba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByb290LnJvdXRlc1trZXldLmNhbGwocm9vdC5jb250ZXh0LCByb290LmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsIi8qXG5jb25zdCBSeFN0YXRlID0gUm94eSh7XG4gICAgdGl0bGU6ICcnLFxuICAgIGJvZHk6ICcnLFxufSk7XG5cblJ4U3RhdGUuZXZlbnQoKGtleSwgdmFsdWVzKT0+e1xuICAgIGlmIChrZXkgPT09ICcnKSB7fVxuICAgIGluamVjdCgnIycgKyBrZXksIHZhbHVlcyk7XG59KTtcblxuUnhTdGF0ZS5wcm94eS50aXRsZSA9ICdGaXJzdCB2YWx1ZSc7XG5SeFN0YXRlLnByb3h5LmJvZHkgPSAnVGVzdCBib2R5IHRleHQnO1xuXG5UaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICBSeFN0YXRlLmRpc3BhdGNoKCd0aXRsZScsICdIZWxsbyBmcmllbmQnKTtcbiAgICBSeFN0YXRlLmRpc3BhdGNoKCdib2R5JywgJ0RvIHlvdSBoYXBweSBub3c/Jyk7XG59LCAyMDAwKTtcblxuKi9cblxuLyoqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgc2V0KCo9LCAqPSk6ICosIGdldCgqKTogKiwgYWN0aW9uKCo9LCAqPSk6ICosIGZpbGwoKj0sICo9KTogKn18Um94eXx7fXxudWxsfGJvb2xlYW59XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFJveHkgPSBmdW5jdGlvbiAocGF5bG9hZClcbntcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MgPSB7XG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHBheWxvYWQsIHtcbiAgICAgICAgZ2V0KG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG9iaiwgcHJvcCwgdmFsdWUpIHtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gJiYgdHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXS5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9sZGVyIG5hbWU6IHNlZXxzZXQ/XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIHBheWxvYWRcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaChrZXksIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBrZXkuY2FsbCh7fSwgcHJveHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbChyZXN1bHQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3Rpb24oKVxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50KGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmUoa2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGNoYW5nZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZlKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPSBrZXk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3Nba2V5XSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID8gcHJveHlba2V5XSA6IGNvcHkocHJveHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGwocGF5bG9hZCwgdG8pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5W3RvXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm94eVt0b11ba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJveHk7XG4iLCJpbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5cbi8qKlxuICogY29uc3QgcnggPSBSb3h5TGlzdGVuZXIgKHtcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiB9KVxuICogcnguc2V0KCk7XG4gKiByeC5kaXNwYXRjaCgpO1xuICpcbiAqIHJ4LmFjdGlvbigpO1xuICpcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBkaXNwYXRjaCgqPSwgKj0pOiBSb3h5LCBnZXQoKik6ICosIGV2ZW50KCo9LCAqPSk6IHRoaXMsIGZpbGwoKj0sICo9KTogdGhpc319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUm94eUxpc3RlbmVyID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgICAgIF9fYWN0aW9uX18oKSB7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aW9uc05hbWVzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdID0gcGF5bG9hZFtldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nICYmIGV2ZW50TmFtZSAhPT0gYWN0aW9ucy5fX2FjdGlvbl9fLm5hbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbnNOYW1lc1tldmVudE5hbWVdID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ4ID0gUm94eShhY3Rpb25zTmFtZXMpO1xuICAgIC8vXG4gICAgcnguYWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnNOYW1lc1xuICAgIH07XG5cbiAgICByeC5ldmVudCgoZXZlbnRDdXJzb3IsIHZhbHVlcykgPT4ge1xuICAgICAgICBhY3Rpb25zLl9fYWN0aW9uX18uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50Q3Vyc29yID09PSBldmVudE5hbWUgJiYgdHlwZW9mIGFjdGlvbnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXS5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJ4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm94eUxpc3RlbmVyO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuXG4vKlxuYWRkKG5hbWUsIGNhbGxiYWNrLCBhdHRycykgIC8vIGFkZCBuZXcgc2NlbmVcbmdldChuYW1lKSAgICAgICAgICAgICAgICAgICAvLyByZXR1cm5lZCBzY2VuZSBieSBuYW1lXG5nZXRDdXJyZW50U2NlbmUoKSAgICAgICAgICAgLy8gcmV0dXJuZWQgY3VycmVudCBzY2VuZVxubmV4dCgpICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIG5leHQgc2NlbmVcbnJ1bihuYW1lLCBhdHRycykgICAgICAgICAgICAvLyBydW4gc2NlbmVzIGJ5IG5hbWUsIHNldCB0aGlzIGtleSBuYW1lIHRvIGRlZmF1bHRcbmNsb25lKCkgICAgICAgICAgICAgICAgICAgICAvLyBjbG9uZWQgY3VycmVudCBzY2VuZXNcblxuY29uc3Qgc2NlbmUgPSBTY2VuZSgpO1xuc2NlbmUuYWRkKCdlZGl0b3InLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLmFkZCgnb3V0cHV0JywgZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBjb25zb2xlLmxvZyhhLCBiLCBjLCBkKTtcbn0pXG5zY2VuZS5ydW4oJ291dHB1dCcsIFsnaGVsbG8nLCAyMDAsIFsxLDIsM10sIHtpZDogMTIzfV0pO1xuXG4vLyBpbml0IHYgMlxuY29uc3Qgc2NlbmVDb250ZXh0ID0ge307XG5jb25zdCBzY2VuZSA9IFNjZW5lKHtcbiAgICBlZGl0b3IgKCkge30sXG4gICAgb3V0cHV0ICgpIHt9LFxufSk7XG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllc1xuICogQHBhcmFtIGNvbW11bml0eV9hcmd1bWVudHNcbiAqIEByZXR1cm5zIHt7Y3VycmVudDogc3RyaW5nLCBzY2VuZXM6IHtkZWZhdWx0OiB7Y2FsbGJhY2soKTogdm9pZCwgYXR0cnM6IFtdfX0sIGVsZW1lbnQ6IG51bGx9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxuY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocHJvcGVydGllcywgY29tbXVuaXR5X2FyZ3VtZW50cyA9IFtdKSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgY3VycmVudDogJ2RlZmF1bHQnLFxuICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICBzY2VuZXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpIHtjb25zb2xlLmxvZygnW0RlZmF1bHQgU2NlbmVdJyl9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5hZGQgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGF0dHJzID0gW10pIHtcbiAgICAgICAgcm9vdC5zY2VuZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIGF0dHJzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcm9vdC5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gcm9vdC5zY2VuZXNbbmFtZV07XG4gICAgfVxuXG4gICAgcm9vdC5nZXRDdXJyZW50U2NlbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByb290LnNjZW5lc1tyb290LmN1cnJlbnRdO1xuICAgIH1cblxuICAgIHJvb3QubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGxlc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJvb3Quc2NlbmVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoa2V5c1tpXSA9PT0gcm9vdC5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXlzW2kgKyAxXSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3Qub3BlbihsZXN0KTtcbiAgICB9O1xuXG4gICAgcm9vdC5vcGVuID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHtcbiAgICAgICAgcm9vdC5jdXJyZW50ID0ga2V5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByb290LmdldEN1cnJlbnRTY2VuZSgpO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHNjZW5lLmNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMgPSBBcnJheS5pc0FycmF5KGF0dHJzKSA/IGF0dHJzIDogW2F0dHJzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvZG86IGNoYW5nZWQgYXBwbHkgdG8gY2FsbFxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkocm9vdCwgYXR0cnMgPyBhdHRycyA6IHNjZW5lLmF0dHJzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnNob3cgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290Lm9wZW4oa2V5LCBhdHRycykgfTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHsgcm9vdC5vcGVuKGtleSwgYXR0cnMpIH07XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgcm9vdC5ydW4gPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290Lm9wZW4oa2V5LCBhdHRycykgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5hZGQoa2V5LCBwcm9wZXJ0aWVzW2tleV0sIEFycmF5LmlzQXJyYXkoY29tbXVuaXR5X2FyZ3VtZW50cykgPyBjb21tdW5pdHlfYXJndW1lbnRzIDogW2NvbW11bml0eV9hcmd1bWVudHNdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cbi8qKlxuICpcbiAgICBjb25zdCBzdGVwc0F0dGFja0hlcm8gPSBTdGVwc1NjZW5lKHtcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIHN0ZXBzOiBbXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXJ0X2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGVyb19hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrX2FuaW1hdGlvbicsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW5kX2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgc3RlcHNBdHRhY2tIZXJvLmVhY2hTdGVwcyhmdW5jdGlvbiAoY2JPYmplY3QsIGluZGV4KSB7fSk7XG4gICAgc3RlcHNBdHRhY2tIZXJvLm5leHQoKTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5nb3RvKCdoZXJvX2F0dGFja19hbmltYXRpb24nKS5uZXh0KCk7XG4gICAgc3RlcHNBdHRhY2tIZXJvLnN0b3AoKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7YW55fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0ZXBzU2NlbmUgPSBmdW5jdGlvbiAoY29uZmlnID0ge3N0ZXBzOiBbXX0pIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBpdGVyYXRpb246IDAsXG4gICAgICAgIGxvb3A6IGNvbmZpZy5sb29wIHx8IGZhbHNlLFxuICAgICAgICBzdGVwX2l0ZXJhdGlvbjogMCxcbiAgICAgICAgc3RlcF9zdG9wOiBmYWxzZSxcbiAgICAgICAgc3RlcF9jYWxsYmFja19lYWNoOiBudWxsLFxuICAgICAgICBzdGVwX2NhbGxiYWNrczogY29uZmlnLnN0ZXBzIHx8IHt9LFxuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIHJvb3QucGxheSgpO1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBwbGF5KCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5KG1zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrLmNhbGwocm9vdCk7IH0sIG1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ290byhuYW1lKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tzLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVhY2hTdGVwcyhjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2ggPSBjYWxsYmFjaztcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKHJvb3Quc3RlcF9zdG9wKSByZXR1cm4gcm9vdDtcblxuICAgICAgICAgICAgaWYgKHJvb3Quc3RlcF9pdGVyYXRpb24gPiByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoIXJvb3QubG9vcClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja09iamVjdCA9IHJvb3Quc3RlcF9jYWxsYmFja3Nbcm9vdC5zdGVwX2l0ZXJhdGlvbl07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2ggPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2guY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgY3VycmVudENhbGxiYWNrT2JqZWN0LmNhbGxiYWNrLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIHJvb3QuaXRlcmF0aW9uKytcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24rK1xuXG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcHNTY2VuZTtcbiIsIlxuY29uc3QgVGltZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSkge1xuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMuaXRlcmF0b3IgPSAwO1xufTtcblxuXG5UaW1lci5zZXRUaW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFyVGltZW91dChpZClcbn07XG5UaW1lci5jbGVhckludGVydmFsID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpZClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSBcIi4uL3N0YXRpYy9pc051bWJlclwiO1xuLypcblxudGhpcy50cmFuc2Zvcm0gPSBUcmFuc2Zvcm0odGhpcy5lbGVtZW50KTtcbnRoaXMudHJhbnNmb3JtLm1ldGhvZCgncm90YXRlJywgWyc0NWRlZyddKTtcbnRoaXMudHJhbnNmb3JtLnVwZGF0ZSgpO1xudGhpcy50cmFuc2Zvcm0ucmVzZWFyY2goKTtcbnRoaXMudHJhbnNmb3JtLmZ1bmN0aW9uUGFyYW1ldGVycygnbWF0cml4JykgICAgICAgICAvLyBbMSwgMCwgMCwgMSwgMCwgMF06IGFycmF5XG50aGlzLnRyYW5zZm9ybS5mdW5jdGlvblBhcmFtZXRlcnMoJ3JvdGF0ZScpICAgICAgICAgLy8gW1wiNDVkZWdcIl06IHN0cmluZ1xudGhpcy50cmFuc2Zvcm0uZnVuY3Rpb25QYXJhbWV0ZXJzKCdyb3RhdGUnLCB0cnVlKSAgIC8vIDQ1OiBpbnRcblxuLy8gLi4uXG5UcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFtcbiAgICAncm90YXRlKCcgKyAxMCArJ2RlZyknLFxuICAgICdzY2FsZSgwLjYsIDAuNiknLFxuICAgICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknLFxuXSk7XG5UcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFsncm90YXRlKCcgKyAxMCArJ2RlZyknXSlcbmNvbnN0IHRycyA9IFRyYW5zZm9ybSh0aGlzLmVsZW1lbnQpO1xuXG4vLyB3aXRob3V0IG9mIHRoZSBUcmFuc2Zvcm1cbnRoaXMuc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgMTAgKydkZWcpIHNjYWxlKDAuNiwgMC42KSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG59KTtcblxuKi9cbmNvbnN0IFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChlbGVtZW50LCBwYXJhbXMpXG57XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhbnNmb3JtX29iajoge30sXG4gICAgICAgIHRyYW5zZm9ybV9hcnI6IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcpJykuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoICksXG4gICAgICAgIHRyYW5zZm9ybV9zdHJpbmc6ICcnLFxuXG4gICAgICAgIHVwZGF0ZSgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nID0gJyc7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvb3QudHJhbnNmb3JtX29iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nICs9IGtleSArICcoJyArIHJvb3QudHJhbnNmb3JtX29ialtrZXldLmpvaW4oJywgJykgKyAnKSAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nO1xuICAgICAgICAgICAgcm9vdC5yZXNlYXJjaCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZChtZXRob2QsIHByb3BlcnRpZXMsIG11bHRpcGx5ID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXTtcblxuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBseSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dCA9IHZhbHVlLm1hdGNoKC9bYS16XSsvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlKSArIHBhcnNlSW50KHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IG51bSArIGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gdmFsdWUgKyByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2V0cyBwYXJhbWV0ZXJzIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2VhcmNoKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIgPSBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApO1xuXG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbSA9IHJvb3QudHJhbnNmb3JtX2FycltpXSA9IHJvb3QudHJhbnNmb3JtX2FycltpXS50cmltKCkgICsgJyknO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWQgPSBwYXJhbS5tYXRjaCgvW1xcd1xcLlxcLV0rL2lnKTtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWF0Y2hlZFswXV0gPSBtYXRjaGVkLnNsaWNlKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZnVuY3Rpb25QYXJhbWV0ZXJzKG5hbWUsIEZJUlNUX0lURU1fVE9fSU5URUdFUiA9IGZhbHNlKXtcbiAgICAgICAgICAgIGlmIChGSVJTVF9JVEVNX1RPX0lOVEVHRVJcbiAgICAgICAgICAgICAgICAmJiBBcnJheS5pc0FycmF5KHJvb3QudHJhbnNmb3JtX29ialtuYW1lXSlcbiAgICAgICAgICAgICAgICAmJiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV0ubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByb290LnRyYW5zZm9ybV9vYmpbbmFtZV1bMF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTnVtYmVyKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgOiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LnJlc2VhcmNoKCk7XG5cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByb290Lm1ldGhvZChrZXksIHBhcmFtc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvb3QudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cblRyYW5zZm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlcyl7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgocHJvcCkgPT4geyBwcm9wcy5wdXNoKHByb3ApIH0pO1xuICAgICAgICBzdHlsaXplcihlbGVtZW50LCB7dHJhbnNmb3JtOiBwcm9wcy5qb2luKCcgJyl9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL3N0YXRpYy9nZXRXaW5kb3dcIjtcblxuaW1wb3J0IENsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9DbGlwLmpzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IHtFdmVudENvZGVzLCBFdmVudEtleXMsIEV2ZW50Q29kZXNOYW1lcywgRXZlbnRLZXlzTmFtZXN9IGZyb20gXCIuL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanNcIjtcbmltcG9ydCBNb3ZlQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL01vdmVDbGlwLmpzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgTWF0cml4IGZyb20gXCIuL2NvbXBvbmVudHMvTWF0cml4XCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9jb21wb25lbnRzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL0V2ZW50TWFuYWdlclwiO1xuaW1wb3J0IEZyYW1lcyBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9jb21wb25lbnRzL1JvdXRlclwiO1xuXG5jb25zdCBBbmltYXRlID0ge1xuICAgIENsaXAsXG4gICAgQ29tcG9uZW50LFxuICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgIEV2ZW50Q29kZXMsXG4gICAgRXZlbnRLZXlzLFxuICAgIEV2ZW50Q29kZXNOYW1lcyxcbiAgICBFdmVudEtleXNOYW1lcyxcbiAgICBNb3ZlQ2xpcCxcbiAgICBTY2VuZSxcbiAgICBTdGVwc1NjZW5lLFxuICAgIFRpbWVyLFxuICAgIFJveHlMaXN0ZW5lcixcbiAgICBSb3h5LFxuICAgIEFuaW1hdGlvbkZyYW1lLFxuICAgIExvYWRlcixcbiAgICBNYXRyaXgsXG4gICAgUG9pbnQsXG4gICAgUmVjdGFuZ2xlLFxuICAgIFRyYW5zZm9ybSxcbiAgICBFdmVudE1hbmFnZXIsXG4gICAgRnJhbWVzLFxuICAgIFJvdXRlcixcbn07XG5cbmNvbnN0IFJBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFX0FTX1JBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOICogMzYwO1xuY29uc3QgUEkgPSAzLjE0MTU5MjY1MzU5O1xuY29uc3QgUkFEX1RPX0RFR1JFRVMgPSAzLjE0MTU5MjY1MzU5O1xuXG5BbmltYXRlLlJBRElBTiA9IFJBRElBTjtcbkFuaW1hdGUuREVHUkVFX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU47XG5BbmltYXRlLkRFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFXzM2MF9BU19SQURJQU47XG5BbmltYXRlLlBJID0gUEk7XG5BbmltYXRlLlJBRF9UT19ERUdSRUVTID0gUkFEX1RPX0RFR1JFRVM7XG5cbkFuaW1hdGUuU3RhdGljID1cbiAgICBBbmltYXRlLlV0aWwgPVxuICAgICAgICBTdGF0aWM7XG5cbi8vIGlmIChnZXRXaW5kb3coKSkgZ2V0V2luZG93KCkuQW5pbWF0ZSA9IEFuaW1hdGU7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuXG5jb25zdCBhYmMgPSB7XG4gICAgTEVUVEVSX0NPTlNPTkFOVCxcbiAgICBMRVRURVJfVk9XRUwsXG4gICAgQUJDLFxuICAgIE5VTUJFUlMsXG4gICAgQU1QRVJTQU5EXG59O1xuXG5leHBvcnQgZGVmYXVsdCBhYmM7IiwiXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgaGFzTG93ZXJDYXNlIGZyb20gXCIuL2hhc0xvd2VyQ2FzZVwiO1xuaW1wb3J0IHRvTWludXNDYXNlIGZyb20gXCIuL3RvTWludXNDYXNlXCI7XG5cbi8qKlxuICogYWRkQ3NzKHsgJyNjYW52YXMnOiB7IGJhY2tncm91bmRDb2xvcjogJyMxNzE3MTcnLGJvcmRlcjogJzNweCBzb2xpZCAjREREREREJyB9IH0pO1xuICpcbiAqIEBwYXJhbSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBhZGRDc3MgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgbGV0IGNzc1N0cmluZyA9ICcnO1xuICAgIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaCgoc2VsZWN0b3IpPT57XG4gICAgICAgIGNzc1N0cmluZyArPSBgJHtzZWxlY3Rvcn0ge1xcbmA7XG4gICAgICAgIE9iamVjdC5rZXlzKG9iamVjdFtzZWxlY3Rvcl0pLmZvckVhY2goKHByb3ApPT57XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gaGFzTG93ZXJDYXNlKHByb3ApID8gdG9NaW51c0Nhc2UocHJvcCkgOiBwcm9wO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmplY3Rbc2VsZWN0b3JdW3Byb3BdO1xuICAgICAgICAgICAgY3NzU3RyaW5nICs9IGBcXHQke25hbWV9OiAke3ZhbHVlfTtcXG5gO1xuICAgICAgICB9KTtcbiAgICAgICAgY3NzU3RyaW5nICs9IGB9XFxuYDtcblxuICAgIH0pO1xuICAgIGNvbnN0IGNzcyA9IGNyZWF0ZUVsZW1lbnQoJ3N0eWxlJywge30sIGNzc1N0cmluZyk7XG4gICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmhlYWQpIHtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3MpO1xuICAgIH1cbiAgICByZXR1cm4gY3NzO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBhZGRDc3M7XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsIi8qKlxuICpcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBjbG9uZShmcm9tLCB0bylcbntcbiAgICBpZiAoZnJvbSA9PT0gbnVsbCB8fCB0eXBlb2YgZnJvbSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgIT09IE9iamVjdCAmJiBmcm9tLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgPT09IERhdGUgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEZ1bmN0aW9uIHx8XG4gICAgICAgIGZyb20uY29uc3RydWN0b3IgPT09IFN0cmluZyB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBOdW1iZXIgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gbmV3IGZyb20uY29uc3RydWN0b3IoZnJvbSk7XG4gICAgfVxuXG4gICAgdG8gPSB0byB8fCBuZXcgZnJvbS5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yIChuYW1lIGluIGZyb20pXG4gICAge1xuICAgICAgICB0b1tuYW1lXSA9IHR5cGVvZiB0b1tuYW1lXSA9PSBcInVuZGVmaW5lZFwiID8gY2xvbmUoZnJvbVtuYW1lXSwgbnVsbCkgOiB0b1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoc3JjLCBpbnN0YW5jZSlcbntcbiAgICBpZiAoaXNOb2RlKHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5zbGljZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiBzcmMuYmluZChpbnN0YW5jZSB8fCB7fSk7XG5cbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpKSB7XG4gICAgICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzcmMpO1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiLypcblxuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUpO1xuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUsIHRydWUpO1xuY29uc3QgYXJyMSA9IGNyZWF0ZUFycmF5KDUsIDEpO1xuY29uc3QgYXJyMiA9IGNyZWF0ZUFycmF5KDUsICdoZWxsbyB3b3JsZCcpO1xuY29uc3QgYXJyMyA9IGNyZWF0ZUFycmF5KDUsIFsxMDAsMjAwLDMwMF0pO1xuY29uc3QgYXJyNCA9IGNyZWF0ZUFycmF5KDUsIHthOidBJyxiOidCJyxjOidDJ30pO1xuXG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbnVtXG4gKiBAcGFyYW0gZmlsbFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5jb25zdCBjcmVhdGVBcnJheSA9IGZ1bmN0aW9uIChudW0sIGZpbGwpIHtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaWxsID09PSAnc3RyaW5nJyApe1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KG51bSkuZmlsbChmaWxsKTtcbiAgICB9XG5cbiAgICBhcnIgPSBuZXcgQXJyYXkobnVtKS5maWxsKDApO1xuICAgIGFyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBmaWxsLmNhbGwoZmlsbCwgaSwgaSk7XG4gICAgICAgICAgICBhcnJbaV0gPSB0eXBlb2YgciA9PT0gJ2Jvb2xlYW4nIHx8IHIgPyByIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbCkpIGFycltpXSA9IGZpbGxbaV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGZpbGxbaV0gO1xuICAgICAgICBlbHNlIGFycltpXSA9IGZpbGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcnJheTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7bnVsbHx1bmRlZmluZWR9XG4gKi9cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHBhaXJzID0gKHF1ZXJ5WzBdID09PSAnPycgPyBxdWVyeS5zdWJzdHIoMSkgOiBxdWVyeSkuc3BsaXQoJyYnKTtcbiAgICBwYWlycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbi8qY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59OyovXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIGluc3RhbmNlID0ge30pIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpLCB2LCBhKSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBpLCB2LCBhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChBcnJheS5mcm9tKGxpc3QpLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwga2V5LCBsaXN0W2tleV0sIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgbGlzdCA9IGVhY2gobGlzdC5zcGxpdChcIlwiKSwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY29uc3QgYXJyID0gKG5ldyBBcnJheShsaXN0KSkuZmlsbCgwKTtcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGFyciwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBleGlzdHMgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkICYmIHNyYyAhPT0gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4aXN0cztcbiIsIlxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBzb3VyY2UpXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocGFyYW0pKVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcGFyYW1dID0gc291cmNlW3BhcmFtXTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZGVzdGluYXRpb247XG4gICAgfVxuXG4gICAgX18ucHJvdG90eXBlID0gc291cmNlLnByb3RvdHlwZTtcbiAgICBkZXN0aW5hdGlvbi5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGxldCBwcm9wZXJ0eTtcbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgICAgICAgZXh0ZW5kUmVjdXJzaXZlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAobGlzdCwgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IGksIHRtcCA9IFtdO1xuICAgIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSBcIm9iamVjdFwiKVxuICAgICAgICBsaXN0ID0gT2JqZWN0LnZhbHVlcyhsaXN0KTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICAgICAgdG1wLnB1c2gobGlzdFtpXSk7XG5cbiAgICByZXR1cm4gdG1wIDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kcyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXAgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb2N1bWVudDtcbiIsIlxuY29uc3QgZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvY2F0aW9uIG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJcbmNvbnN0IGdldFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aW5kb3cgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXaW5kb3c7XG4iLCJcbmNvbnN0IGhhc0xvd2VyQ2FzZSA9IGZ1bmN0aW9uIChjaGFyYWN0ZXIpIHtcbiAgICBjb25zdCBsb3dlcnMgPSBjaGFyYWN0ZXIuc3BsaXQoJycpLmZpbHRlcigoY2hhcik9PntcbiAgICAgICAgbGV0IGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHJldHVybiBjb2RlID49IDY1ICYmIGNvZGUgPD0gOTA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbG93ZXJzLmxlbmd0aCA+IDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNMb3dlckNhc2U7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IGFiYyBmcm9tIFwiLi4vc3RhdGljL2FiY1wiO1xuaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9nZXREb2N1bWVudFwiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vc3RhdGljL2dldFdpbmRvd1wiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9zdHIyZnJhZ21lbnRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBlbmNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2VuY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgZGVjb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9kZWNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9zdGF0aWMvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IGRlZmluZWRJbiBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRJblwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZXh0ZW5kLCB7XG4gICAgZXh0ZW5kUmVjdXJzaXZlXG59ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmdcbn0gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCByZWRpcmVjdCBmcm9tIFwiLi4vc3RhdGljL3JlZGlyZWN0XCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgdXJpIGZyb20gXCIuLi9zdGF0aWMvdXJpXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IGNyZWF0ZUFycmF5IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlQXJyYXlcIjtcbmltcG9ydCBpc1N0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzU3RyaW5nXCI7XG5pbXBvcnQgZXhpc3RzIGZyb20gXCIuLi9zdGF0aWMvZXhpc3RzXCI7XG5pbXBvcnQgaXNEZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvaXNEZWZpbmVkXCI7XG5pbXBvcnQgbG9hZEJsb2JmaWxlIGZyb20gXCIuLi9zdGF0aWMvbG9hZEJsb2JmaWxlXCI7XG5pbXBvcnQgbG9hZEpTT04gZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNPTlwiO1xuaW1wb3J0IGxvYWRUZXh0ZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRUZXh0ZmlsZVwiO1xuaW1wb3J0IHRvSFRNTCBmcm9tIFwiLi4vc3RhdGljL3RvSFRNTFwiO1xuaW1wb3J0IHRvWE1MIGZyb20gXCIuLi9zdGF0aWMvdG9YTUxcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgdW5pcUFycmF5IGZyb20gXCIuLi9zdGF0aWMvdW5pcUFycmF5XCI7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSBcIi4uL3N0YXRpYy9pc051bWJlclwiO1xuaW1wb3J0IHRyaW1TeW1ib2xzIGZyb20gXCIuLi9zdGF0aWMvdHJpbVN5bWJvbHNcIjtcbmltcG9ydCBpc0xvd2VyQ2FzZSBmcm9tIFwiLi4vc3RhdGljL2lzTG93ZXJDYXNlXCI7XG5pbXBvcnQgaXNVcHBlckNhc2UgZnJvbSBcIi4uL3N0YXRpYy9pc1VwcGVyQ2FzZVwiO1xuaW1wb3J0IHRvU25ha2VDYXNlIGZyb20gXCIuLi9zdGF0aWMvdG9TbmFrZUNhc2VcIjtcbmltcG9ydCB0b0NhbWVsQ2FzZSBmcm9tIFwiLi4vc3RhdGljL3RvQ2FtZWxDYXNlXCI7XG5pbXBvcnQgaGFzTG93ZXJDYXNlIGZyb20gXCIuLi9zdGF0aWMvaGFzTG93ZXJDYXNlXCI7XG5pbXBvcnQgdG9NaW51c0Nhc2UgZnJvbSBcIi4uL3N0YXRpYy90b01pbnVzQ2FzZVwiO1xuaW1wb3J0IGFkZENzcyBmcm9tIFwiLi4vc3RhdGljL2FkZENzc1wiO1xuXG5jb25zdCBTdGF0aWMgPSB7XG4gICAgYWJjLFxuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGdldERvY3VtZW50LFxuICAgIGdldFdpbmRvdyxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBleGlzdHMsXG4gICAgaXNEZWZpbmVkLFxuICAgIGxvYWRCbG9iZmlsZSxcbiAgICBsb2FkSlNPTixcbiAgICBsb2FkVGV4dGZpbGUsXG4gICAgdG9IVE1MLFxuICAgIHRvWE1MLFxuICAgIHN0eWxpemVyLFxuICAgIHVuaXFBcnJheSxcbiAgICBpc051bWJlcixcbiAgICB0cmltU3ltYm9scyxcbiAgICBpc0xvd2VyQ2FzZSxcbiAgICBpc1VwcGVyQ2FzZSxcbiAgICB0b0NhbWVsQ2FzZSxcbiAgICB0b1NuYWtlQ2FzZSxcbiAgICBoYXNMb3dlckNhc2UsXG4gICAgdG9NaW51c0Nhc2UsXG4gICAgYWRkQ3NzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBpbmplY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGRhdGEsIGFwcGVuZCwgdG8pXG57XG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ2FycmF5JykpIHtcbiAgICAgICAgc2VsZWN0b3IuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0KGVsZW0sIGRhdGEsIHRydWUsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykpXG4gICAgICAgIHNlbGVjdG9yID0gcXVlcnkoc2VsZWN0b3IsIHRvKTtcblxuICAgIGlmICghYXBwZW5kKVxuICAgICAgICBzZWxlY3Rvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKGlzTm9kZShkYXRhKSkge1xuICAgICAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mKGRhdGEsICdhcnJheScpKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGluamVjdChzZWxlY3RvciwgZGF0YVtpXSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gKCFhcHBlbmQpID8gZGF0YSA6IHNlbGVjdG9yLmlubmVySFRNTCArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdDtcbiIsIlxuY29uc3QgaXNEZWZpbmVkID0gZnVuY3Rpb24gKHNyYykge1xuICAgIHJldHVybiBzcmMgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRGVmaW5lZDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCIvLyBpbXBvcnQgRE9NUGFyc2VyIGZyb20gJ0RPTVBhcnNlcic7XG5cbmNvbnN0IGlzSFRNTFN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgdHJ1ZXN0ID0gZmFsc2UpIHtcblxuICAgIGlmICh0cnVlc3QpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuICEhZGl2LmNoaWxkRWxlbWVudENvdW50O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS50cmltKCkuc3Vic3RyaW5nKDAsIDEpID09PSAnPCc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0hUTUxTdHJpbmc7XG4iLCJcbmNvbnN0IGlzTG93ZXJDYXNlID0gZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIgPT09IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpIC8qJiYgY2hhcmFjdGVyICE9PSBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKSovO1xufTtcblxuY29uc3QgaXNMb3dlckNhc2UyID0gZnVuY3Rpb24gKGNoYXJhY3Rlcikge1xuICAgIGxldCBjb2RlID0gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCk7XG4gICAgcmV0dXJuIGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0xvd2VyQ2FzZTsiLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsIlxuY29uc3QgaXNOdW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IHZhbHVlIGluc3RhbmNlb2YgTnVtYmVyKSAmJiAhaXNOYU4odmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgaXNOdW1iZXI7XG4iLCJcbmNvbnN0IGlzU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc1N0cmluZztcbiIsIlxuY29uc3QgaXNVcHBlckNhc2UgPSBmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgcmV0dXJuIGNoYXJhY3RlciA9PT0gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCkgLyomJiBjaGFyYWN0ZXIgIT09IGNoYXJhY3Rlci50b0xvd2VyQ2FzZSgpKi87XG59O1xuXG5jb25zdCBpc1VwcGVyQ2FzZTIgPSBmdW5jdGlvbiAoY2hhcmFjdGVyKSB7XG4gICAgbGV0IGNvZGUgPSBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKTtcbiAgICByZXR1cm4gY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNVcHBlckNhc2U7IiwiXG5jb25zdCBsb2FkQmxvYmZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgICAgLnRoZW4oYmxvYiA9PiBvbmxvYWQoYmxvYikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmxvYmZpbGU7IiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmNvbnN0IGxvYWRKU09OID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gb25sb2FkKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTT047IiwiXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5sb2FkSlNTeW5jICgge1xuICogICAgICBteXNjcmlwdDE6ICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICBteXNjcmlwdDI6ICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAubG9hZEpTU3luYyAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmxvYWRKU1N5bmNcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBsb2FkSlNTeW5jID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgaWYgKHR5cGVPZihzcmNzLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialsncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIHNyYzogKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNTeW5jO1xuIiwiXG5jb25zdCBsb2FkVGV4dGZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4odGV4dCA9PiBvbmxvYWQodGV4dCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVGV4dGZpbGU7IiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiXG5leHBvcnQgY29uc3QgbnVtYmVyMnN0cmluZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgbGV0IGU7XG4gICAgaWYgKE1hdGguYWJzKHgpIDwgMS4wKSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJ2UtJylbMV0pO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgeCAqPSBNYXRoLnBvdygxMCxlLTEpO1xuICAgICAgICAgICAgeCA9ICcwLicgKyAobmV3IEFycmF5KGUpKS5qb2luKCcwJykgKyB4LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnKycpWzFdKTtcbiAgICAgICAgaWYgKGUgPiAyMCkge1xuICAgICAgICAgICAgZSAtPSAyMDtcbiAgICAgICAgICAgIHggLz0gTWF0aC5wb3coMTAsZSk7XG4gICAgICAgICAgICB4ICs9IChuZXcgQXJyYXkoZSsxKSkuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyMnN0cmluZztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIi8vIGltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cblxuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuLyoqXG4gKiBAcHJvcGVydHkgbnVtYmVyIHhcbiAqIEBwcm9wZXJ0eSBudW1iZXIgeVxuICogQHByb3BlcnR5IG51bWJlciB3aWR0aFxuICogQHByb3BlcnR5IG51bWJlciBoZWlnaHRcbiAqIEBwYXJhbSBlbGVtXG4gKiBAcmV0dXJucyB7e3g6IG51bWJlciwgd2lkdGg6IG51bWJlciwgeTogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIsIGVsZW1lbnQ6IG9iamVjdH19XG4gKi9cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pXG57XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcblxuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9IGVsc2UgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICBpZiAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRUb3AgfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIExFVFRFUl9DT05TT05BTlQsIExFVFRFUl9WT1dFTCwgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNiwgd2l0aE51bWJlcnMgPSBmYWxzZSkge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSB3aXRoTnVtYmVyc1xuICAgICAgICA/IEFCQyArIE5VTUJFUlMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpXG4gICAgICAgIDogQUJDLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBmb3IgKGkgPSBzaXplOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHN0cmluZyArPSBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUh1bWFuaXplU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGNvbnNvbmFudCA9ICBMRVRURVJfQ09OU09OQU5ULnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbCA9ICBMRVRURVJfVk9XRUwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsRmlyc3QgPSAoTWF0aC5yYW5kb20oKSAqIDEwKSA+IDU7XG4gICAgZm9yIChpID0gc2l6ZSAvIDIgKyAxOyBpID4gMDsgaSAtLSkge1xuICAgICAgICBsZXQgczEgPSBjb25zb25hbnRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uc29uYW50Lmxlbmd0aCldO1xuICAgICAgICBsZXQgczIgPSB2b3dlbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2b3dlbC5sZW5ndGgpXTtcbiAgICAgICAgc3RyaW5nICs9IHZvd2VsRmlyc3QgPyBzMSArIHMyIDogczIgKyBzMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzaXplKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHJhbmRvbSBpdGVtIGZyb20gYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tSXRlbSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyW3JhbmRvbSgwLCBhcnIubGVuZ3RoLTEpXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tO1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uICh0bykge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBsb2MuaHJlZiA9IHRvIHx8IGRvYy5ocmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkaXJlY3Q7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuLyoqXG4gKiBzZWFyY2goICd1bCA+IGxpJywgICdkYXRhLWxpbmsnLCBOb2RlRWxlbWVudCk7XG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gYXR0clxuICogQHBhcmFtIGZyb21cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKGZyb20uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgIHF1ZXJ5RWxlbWVudHMucHVzaChmcm9tKVxuICAgIH1cblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcbmNvbnN0IHN0cjJmcmFnbWVudCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJmcmFnbWVudDtcbiIsImltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4vc3RyMmZyYWdtZW50XCI7XG5cbmNvbnN0IHN0cjJub2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGZyYWdtZW50ID0gc3RyMmZyYWdtZW50KHN0cmluZyk7XG5cbiAgICBzd2l0Y2ggKGZyYWdtZW50LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZyYWdtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJcbmNvbnN0IHN0eWxpemVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpemVyO1xuIiwiXG5jb25zdCB0b0NhbWVsQ2FzZSA9IGZ1bmN0aW9uIChjaGFyYWN0ZXJzKSB7XG4gICAgY29uc3QgaW5kZXhlcyA9IFtdO1xuICAgIGxldCBzdHJpbmcgPSBjaGFyYWN0ZXJzLnJlcGxhY2UoL1tfXS9nLCBmdW5jdGlvbiAobGV0dGVyLCBpbmRleCkge1xuICAgICAgICBpbmRleGVzLnB1c2goaW5kZXggLSBpbmRleGVzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9KTtcbiAgICBpbmRleGVzLmZvckVhY2goKGluZGV4KT0+e1xuICAgICAgICBjb25zdCBzdGFydCA9IHN0cmluZy5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICBjb25zdCByZXBsYWNlID0gc3RyaW5nLnN1YnN0cihpbmRleCwxKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBjb25zdCBlbmQgPSBzdHJpbmcuc3Vic3RyaW5nKGluZGV4ICsgMSk7XG4gICAgICAgIHN0cmluZyA9IHN0YXJ0ICsgcmVwbGFjZSArIGVuZDtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9DYW1lbENhc2U7IiwiLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5jb25zdCB0b0hUTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvSFRNTDtcbiIsIlxuY29uc3QgdG9NaW51c0Nhc2UgPSBmdW5jdGlvbiAoY2hhcmFjdGVycykge1xuICAgIHJldHVybiBjaGFyYWN0ZXJzLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChsZXR0ZXIsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gMCA/IGxldHRlci50b0xvd2VyQ2FzZSgpIDogJy0nICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b01pbnVzQ2FzZTsiLCJcbmNvbnN0IHRvT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuICAgICAgICA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b09iamVjdDtcbiIsIlxuY29uc3QgdG9TbmFrZUNhc2UgPSBmdW5jdGlvbiAoY2hhcmFjdGVycykge1xuICAgIHJldHVybiBjaGFyYWN0ZXJzLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChsZXR0ZXIsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBpbmRleCA9PT0gMCA/IGxldHRlci50b0xvd2VyQ2FzZSgpIDogJ18nICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XG4gICAgfSk7XG4gICAgLyogICAgICAgIHJldHVybiBjaGFyYWN0ZXJzLnNwbGl0KCcnKS5tYXAoKGNoYXJhY3RlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGluZGV4ID4gMCA/ICdfJzonJykgKyBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hhcmFjdGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmpvaW4oJycpOyovXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b1NuYWtlQ2FzZTsiLCJcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuY29uc3QgdG9YTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L3htbCc7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgdHlwZSk7XG5cbiAgICAgICAgaWYgKHhtbERvYy5kb2N1bWVudEVsZW1lbnQgJiYgeG1sRG9jLmRvY3VtZW50RWxlbWVudC50YWdOYW1lICE9PSAnaHRtbCcpIHtcbiAgICAgICAgICAgIHJldHVybiB4bWxEb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1hNTDtcbiIsIlxuY29uc3QgdHJpbVN5bWJvbHMgPSBmdW5jdGlvbiAoc3RyLCBjaGFybGlzdCkge1xuICAgIGxldCB3aGl0ZXNwYWNlID0gW1xuICAgICAgICAnICcsXG4gICAgICAgICdcXG4nLFxuICAgICAgICAnXFxyJyxcbiAgICAgICAgJ1xcdCcsXG4gICAgICAgICdcXGYnLFxuICAgICAgICAnXFx4MGInLFxuICAgICAgICAnXFx4YTAnLFxuICAgICAgICAnXFx1MjAwMCcsXG4gICAgICAgICdcXHUyMDAxJyxcbiAgICAgICAgJ1xcdTIwMDInLFxuICAgICAgICAnXFx1MjAwMycsXG4gICAgICAgICdcXHUyMDA0JyxcbiAgICAgICAgJ1xcdTIwMDUnLFxuICAgICAgICAnXFx1MjAwNicsXG4gICAgICAgICdcXHUyMDA3JyxcbiAgICAgICAgJ1xcdTIwMDgnLFxuICAgICAgICAnXFx1MjAwOScsXG4gICAgICAgICdcXHUyMDBhJyxcbiAgICAgICAgJ1xcdTIwMGInLFxuICAgICAgICAnXFx1MjAyOCcsXG4gICAgICAgICdcXHUyMDI5JyxcbiAgICAgICAgJ1xcdTMwMDAnXG4gICAgXS5qb2luKCcnKVxuICAgIGxldCBsID0gMFxuICAgIGxldCBpID0gMFxuICAgIHN0ciArPSAnJ1xuICAgIGlmIChjaGFybGlzdCkge1xuICAgICAgICB3aGl0ZXNwYWNlID0gKGNoYXJsaXN0ICsgJycpLnJlcGxhY2UoLyhbW1xcXSgpLj8vKnt9KyReOl0pL2csICckMScpXG4gICAgfVxuICAgIGwgPSBzdHIubGVuZ3RoXG4gICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAod2hpdGVzcGFjZS5pbmRleE9mKHN0ci5jaGFyQXQoaSkpID09PSAtMSkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZyhpKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsID0gc3RyLmxlbmd0aFxuICAgIGZvciAoaSA9IGwgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBpZiAod2hpdGVzcGFjZS5pbmRleE9mKHN0ci5jaGFyQXQoaSkpID09PSAtMSkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBpICsgMSlcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHdoaXRlc3BhY2UuaW5kZXhPZihzdHIuY2hhckF0KDApKSA9PT0gLTEgPyBzdHIgOiAnJ1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmltU3ltYm9scztcbiIsImltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiXG5jb25zdCB1bmlxQXJyYXkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pcUFycmF5O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iXSwic291cmNlUm9vdCI6IiJ9