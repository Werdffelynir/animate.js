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
 * @returns {{ bottom: number, element: object, height: number, left: number, right: number, top: number, width: number, x: number, y: number, moveTo: function, copyTo: function, on: function, clone: function, style: function, inject: function, append: function, remove: function, clear: function, on: function, clone: function }}
 * @constructor
 */
var Clip = function Clip(element) {
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
     * @type moveTo()
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
     // * @type {{x: number, width: number, y: number, height: number}}
     */
    /**
     *
     * @type {{x: number, width: number, y: number, height: number, moveTo: function}}
     */
    var root = (0, _position2.default)(element);

    if (root.element instanceof Node) {
        var parent = (0, _position2.default)(element.parentNode);
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
        style: function style(object) {
            (0, _stylizer2.default)(root.element, object);
        }
    };

    delete config.element;
    delete config.initialized;

    Object.keys(config).map(function (key) {
        root[key] = config[key];
    });

    if (typeof root.init === 'function' && !root.initialized) {
        root.initialized = true;
        root.init.call(root);
    }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Static = {
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
    trimSymbols: _trimSymbols2.default
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @property number x
 * @property number y
 * @property number width
 * @property number height
 * @param elem
 * @returns {{x: number, width: number, y: number, height: number}}
 */
// import isNode from "./isNode";


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
    } else if (elem && elem.nodeType === Node.ELEMENT_NODE) {
        if (elem.getBoundingClientRect) {
            var rect = elem.getBoundingClientRect();
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
                clientTop = document.documentElement.clientTop || document.body.clientTop || 0,
                clientLeft = document.documentElement.clientLeft || document.body.clientLeft || 0;

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
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZyYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWF0cml4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vdmVDbGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRCbG9iZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNPTi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkVGV4dGZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbnVtYmVyMnN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMmZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHlsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvSFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9YTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90cmltU3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZlN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VuaXFBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VyaS5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25GcmFtZSIsInJvb3QiLCJyZXF1ZXN0SWQiLCJzdGFydHBhbHkiLCJwYXVzZWQiLCJjYWxsYmFjayIsImRlbGF5IiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJjYWxsIiwiY2FuY2VsIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGF1c2UiLCJzdGFydCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiQ2xpcCIsImVsZW1lbnQiLCJOb2RlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIngiLCJ5Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJtb3ZlVG8iLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb3B5VG8iLCJvbiIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb25lIiwic3R5bGUiLCJvYmplY3QiLCJpbmplY3QiLCJlbGVtIiwiYXBwZW5kIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiZSIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiVHlwZUVycm9yIiwiY2xlYXIiLCJDb21wb25lbnQiLCJjb25maWciLCJsaXN0IiwicmFuZG9tTmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJjb21wIiwiY3JlYXRlIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbXBvbmVudENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2xvbmVkIiwidGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJ0b1N0cmluZyIsImJlZm9yZSIsImluaXRpYWxpemVkIiwibWV0aG9kcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsImtleXMiLCJrZXkiLCJiaW5kIiwiaGFzT3duUHJvcGVydHkiLCJpbml0IiwiZGF0YSIsInBhcmVudENvbXBvbmVudCIsInB1c2giLCJlbGVtZW50cyIsImF0dHIiLCJuYW1lIiwidGVtcGxhdGVEYXRhRWxlbWVudHMiLCJ1cGRhdGVUZW1wbGF0ZURhdGFFbGVtZW50cyIsInRlbXBsYXRlRGF0YUVsZW1lbnRzRW5hYmxlZCIsInRlbXBsYXRlRGF0YUVsZW1lbnRzQXR0cmlidXRlcyIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwiY29tcGxldGUiLCJwcm9wcyIsIm92ZXJyaWRlIiwibm9kZSIsIkNPTVBPTkVOVF9EQVRBX0FUVFJJQlVURVMiLCJFdmVudE1hbmFnZXIiLCJzdXBlciIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJ2ZXJzaW9uIiwiZXZlbnRzVHlwZSIsImFkZEV2ZW50IiwiZGV0YWlscyIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwicmVtb3ZlRXZlbnQiLCJ0eXBlIiwibGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJGcmFtZXMiLCJwYXJhbWV0ZXJzIiwiaW50ZXJuYWwiLCJmcHMiLCJub3ciLCJlbGFwc2VkIiwidGhlbiIsImZwc0ludGVydmFsIiwiZnJhbWVDb3VudCIsImV4dGVybmFsIiwidW5kZWZpbmVkIiwiYW5pbWF0aW9uIiwiRGF0ZSIsInN0YXJ0VGltZSIsIkV2ZW50Q29kZXMiLCJFdmVudENvZGVzTmFtZXMiLCJFdmVudEtleXMiLCJFdmVudEtleXNOYW1lcyIsIktleWJvYXJkRXZlbnRNYW5hZ2VyIiwic3RvcmFnZSIsImJhc2VDYWxsYmFja3NMaXN0IiwiYWRkU3RvcmFnZSIsImJhc2VDYWxsYmFjayIsIm1hcCIsImtleUNvZGUiLCJwYXJzZUludCIsImVhY2hDYWxsYmFja3NMaXN0IiwiZWFjaENhbGxiYWNrIiwic2V0dXBMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiY29kZVRvS2V5Q29kZSIsIkVycm9yIiwiZWFjaCIsIndpdGhDb25kaXRpb25LZXkiLCJwcmVzcyIsInVwIiwiZG93biIsImdldEV2ZW50S2V5QnlFdmVudENvZGUiLCJldmVudENvZGUiLCJjdXJyZW50RXZlbnRLZXkiLCJ3aGljaCIsImZpbHRlciIsImluZGV4IiwiZ2V0RXZlbnRDb2RlQnlFdmVudEtleSIsImV2ZW50S2V5IiwiY3VycmVudEV2ZW50Q29kZSIsImdldFdoaWNoQnlFdmVudENvZGUiLCJnZXRFdmVudENvZGVCeVdoaWNoIiwiTG9hZGVyIiwianNvbiIsImpzb25zIiwiamF2YXNjcmlwdCIsImltYWdlcyIsImF1ZGlvcyIsInZpZGVvcyIsInZpZGVvIiwic3JjIiwib25lcnJvciIsImZldGNoIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwic3JjcyIsIm9iaiIsIml0ZW0iLCJNYXRoIiwicmFuZG9tIiwic2xpY2UiLCJzY3JpcHRzIiwiaXRlcmF0b3IiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3Vic3RyIiwib25sb2FkIiwiaGVhZCIsImltZ3MiLCJpbWciLCJhdWRpbyIsInByZWxvYWQiLCJNYXRyaXgiLCJtMTEiLCJtMTIiLCJtMjEiLCJtMjIiLCJneCIsImd5IiwiTW92ZUNsaXAiLCJjbGlwIiwidmFsdWUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJjb25mIiwiYXNzaWduIiwibWMiLCJQb2ludCIsIlJlY3RhbmdsZSIsIlJvdXRlciIsImhhc2giLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicm91dGVzIiwiY29udGV4dCIsInRvIiwiY29uc29sZSIsImxvZyIsImlzIiwiaW5jbHVkZXMiLCJSb3h5IiwicGF5bG9hZCIsInByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyIsImRlZmF1bHQiLCJwcm94eSIsIlByb3h5IiwiZ2V0IiwicHJvcCIsInNldCIsImRpc3BhdGNoIiwicmVzdWx0IiwiZmlsbCIsIm9ic2VydmUiLCJnZXRQcm94eSIsIlJveHlMaXN0ZW5lciIsImFjdGlvbnMiLCJfX2FjdGlvbl9fIiwiYWN0aW9uc05hbWVzIiwiZXZlbnROYW1lIiwicngiLCJldmVudEN1cnNvciIsIlNjZW5lIiwicHJvcGVydGllcyIsImNvbW11bml0eV9hcmd1bWVudHMiLCJjdXJyZW50Iiwic2NlbmVzIiwiYXR0cnMiLCJhZGQiLCJnZXRDdXJyZW50U2NlbmUiLCJuZXh0IiwibGVzdCIsImkiLCJvcGVuIiwic2NlbmUiLCJhcHBseSIsInNob3ciLCJydW4iLCJjb25zdHJ1Y3RvciIsIlN0ZXBzU2NlbmUiLCJzdGVwcyIsIml0ZXJhdGlvbiIsImxvb3AiLCJzdGVwX2l0ZXJhdGlvbiIsInN0ZXBfc3RvcCIsInN0ZXBfY2FsbGJhY2tfZWFjaCIsInN0ZXBfY2FsbGJhY2tzIiwicGxheSIsInN0b3AiLCJlbmQiLCJtcyIsInNldFRpbWVvdXQiLCJnb3RvIiwiZWFjaFN0ZXBzIiwiY3VycmVudENhbGxiYWNrT2JqZWN0IiwiVGltZXIiLCJyZXBlYXQiLCJ0aGlzSW5zdGFuY2UiLCJ0aGlzSW5zdCIsImlzTmFOIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiVHJhbnNmb3JtIiwicGFyYW1zIiwidHJhbnNmb3JtX29iaiIsInRyYW5zZm9ybV9hcnIiLCJ0cmFuc2Zvcm0iLCJzcGxpdCIsInRyYW5zZm9ybV9zdHJpbmciLCJ1cGRhdGUiLCJqb2luIiwicmVzZWFyY2giLCJtZXRob2QiLCJtdWx0aXBseSIsImV4dCIsIm1hdGNoIiwibnVtIiwicGFyYW0iLCJ0cmltIiwibWF0Y2hlZCIsImZ1bmN0aW9uUGFyYW1ldGVycyIsIkZJUlNUX0lURU1fVE9fSU5URUdFUiIsIkFuaW1hdGUiLCJSQURJQU4iLCJERUdSRUVfQVNfUkFESUFOIiwiREVHUkVFXzM2MF9BU19SQURJQU4iLCJQSSIsIlJBRF9UT19ERUdSRUVTIiwiU3RhdGljIiwiVXRpbCIsIkxFVFRFUl9DT05TT05BTlQiLCJMRVRURVJfVk9XRUwiLCJBQkMiLCJOVU1CRVJTIiwiQU1QRVJTQU5EIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIlJlZ0V4cCIsIkZ1bmN0aW9uIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImNvcHkiLCJpbnN0YW5jZSIsImNyZWF0ZUFycmF5IiwiYXJyIiwiciIsInRhZyIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsImNyZWF0ZUZyYWdtZW50IiwiZnJhZ21lbnQiLCJjc3MiLCJzZWxlY3RvciIsInR5cGVTZWxlY3RvciIsInR5cGVQcm9wZXJ0aWVzIiwicGFyc2UiLCJzdHIiLCJwMSIsInAyIiwicG4iLCJpeCIsIm8iLCJpbmRleE9mIiwiZGVjb2RlR2V0UXVlcnkiLCJxdWVyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvbUxvYWRlZCIsImRvYyIsInF1ZXJ5U2VsZWN0b3IiLCJ2IiwiYSIsIk5vZGVMaXN0IiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbmNvZGVHZXRRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsImV4aXN0cyIsImV4dGVuZCIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiX18iLCJwcm90b3R5cGUiLCJleHRlbmRSZWN1cnNpdmUiLCJwcm9wZXJ0eSIsImZpbmRPYmplY3QiLCJhdHRyVmFsdWUiLCJ0bXAiLCJmaW5kT2JqZWN0cyIsImZpbmRzIiwiZm9ybWF0Iiwic3RyaW5nIiwicmVnIiwicmVwbGFjZSIsIm51bWJlciIsImdldERvY3VtZW50IiwiZ2V0TG9jYXRpb24iLCJnZXRXaW5kb3ciLCJodHRwUmVxdWVzdCIsInNlbmREYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcHRpb25zIiwiYWN0aW9uIiwidXJsIiwiaHJlZiIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZGVuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmRPcHRpb25zIiwic2VuZCIsInN0cjJub2RlIiwic3RyMmZyYWdtZW50Iiwibm9kZTJzdHIiLCJxdWVyeUFsbCIsInNlYXJjaCIsImlzRW1wdHkiLCJpc05vZGUiLCJsb2FkQ1NTIiwibG9hZEpTIiwibG9hZEpTU3luYyIsIm1lcmdlIiwibnVtYmVyMnN0cmluZyIsInBvc2l0aW9uIiwicG9zaXRpb25Nb3VzZSIsInJhbmRvbUNvbG9yIiwicmFuZG9tSXRlbSIsInJhbmRvbU51bWJlciIsInJhbmRvbVN0cmluZyIsInJhbmRvbUh1bWFuaXplU3RyaW5nIiwicmVkaXJlY3QiLCJ0eXBlT2YiLCJ0eXBlT2ZTdHJpY3QiLCJ1cmkiLCJ0b09iamVjdCIsImlzSFRNTFN0cmluZyIsImlzU3RyaW5nIiwiaXNEZWZpbmVkIiwibG9hZEJsb2JmaWxlIiwibG9hZEpTT04iLCJsb2FkVGV4dGZpbGUiLCJ0b0hUTUwiLCJ0b1hNTCIsInN0eWxpemVyIiwidW5pcUFycmF5IiwiaXNOdW1iZXIiLCJ0cmltU3ltYm9scyIsImlubmVySFRNTCIsInRydWVzdCIsImRpdiIsImNoaWxkRWxlbWVudENvdW50Iiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsImVyciIsImJsb2IiLCJsaW5rIiwicmVsIiwiZG9jdW1lbnRFbGVtZW50IiwidGV4dCIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29udGFpbmVyIiwiYWJzIiwicG93IiwiYnViYmxlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJyb3VuZCIsInRvcCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIk1vdXNlRXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtaW4iLCJtYXgiLCJmbG9vciIsImxldHRlcnMiLCJjb2xvciIsInNpemUiLCJjZWlsIiwicmVzIiwid2l0aE51bWJlcnMiLCJjb25zb25hbnQiLCJ2b3dlbCIsInZvd2VsRmlyc3QiLCJzMSIsInMyIiwibG9jIiwicXVlcnlFbGVtZW50cyIsImhhc0F0dHJpYnV0ZSIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGVzIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwieG1sRG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRhZ05hbWUiLCJjaGFybGlzdCIsIndoaXRlc3BhY2UiLCJsIiwiY2hhckF0Iiwic2ltcGxlVHlwZXMiLCJ0Iiwic2VsZiJd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Q0FGRDs7a0JBSWVzUyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7Ozs7O0FBR0EsSUFBTVgsTUFBTSxhQUFVQSxJQUFWLEVBQWU7QUFDdkIsUUFBTTBFLE1BQU0sNEJBQVo7QUFDQTFFLFdBQU1BLFFBQU8wRSxJQUFJMVMsUUFBakI7QUFDQWdPLFdBQU1BLEtBQUlsRCxPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBT2tELEtBQUk1VyxNQUFKLEdBQWEsQ0FBYixJQUFrQjRXLEtBQUlsUSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsR0FBdEMsR0FBNEMsTUFBTWtRLElBQWxELEdBQXdEQSxJQUEvRDtBQUNILENBTEQ7O2tCQU9lQSxHIiwiZmlsZSI6ImFuaW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbi8qXG5jb25zdCBhbmltYXRpb24gPSBBbmltYXRpb25GcmFtZSgpO1xuYW5pbWF0aW9uLnBhdXNlKCk7XG5hbmltYXRpb24uc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5hbmltYXRpb24uY2FuY2VsKCk7XG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3tkdXJhdGlvbjogbnVtYmVyLCBzdGFydHBhbHk6IG51bWJlciwgcGF1c2VkOiBib29sZWFuLCBkZWxheTogbnVtYmVyLCByZXF1ZXN0SWQ6IG51bWJlciwgY2FsbGJhY2s6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlcn19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIHJlcXVlc3RJZDogMCxcbiAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICBjYWxsYmFjazogMCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICB9O1xuXG4gICAgcm9vdC5zdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoIXJvb3Quc3RhcnRwYWx5KSByb290LnN0YXJ0cGFseSA9IHRpbWVzdGFtcDtcbiAgICAgICAgcm9vdC5wcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHJvb3Quc3RhcnRwYWx5O1xuXG4gICAgICAgIGlmIChyb290LmNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5wcm9ncmVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdC5kdXJhdGlvbiAmJiByb290LmR1cmF0aW9uID4gcm9vdC5wcm9ncmVzcykge1xuICAgICAgICAgICAgcm9vdC5jYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgaWYgKHJvb3QucGF1c2VkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LnBhdXNlZCA9ICFyb290LnBhdXNlZDtcbiAgICB9O1xuXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgfTtcblxuICAgIHJvb3QuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocm9vdC5yZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkZyYW1lO1xuIiwiaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuLyoqXG4gKiBAcHJvcGVydHkgYm90dG9tXG4gKiBAcHJvcGVydHkgZWxlbWVudFxuICogQHByb3BlcnR5IGhlaWdodFxuICogQHByb3BlcnR5IGxlZnRcbiAqIEBwcm9wZXJ0eSByaWdodFxuICogQHByb3BlcnR5IHRvcFxuICogQHByb3BlcnR5IHdpZHRoXG4gKiBAcHJvcGVydHkgeFxuICogQHByb3BlcnR5IHlcbiAqIEBtZXRob2QgbW92ZVRvKClcbiAqIEBtZXRob2QgY29weVRvXG4gKiBAbWV0aG9kIG9uXG4gKiBAbWV0aG9kIGNsb25lXG4gKiBAbWV0aG9kIHN0eWxlXG4gKiBAbWV0aG9kIGluamVjdFxuICogQG1ldGhvZCBhcHBlbmRcbiAqIEBtZXRob2QgcmVtb3ZlXG4gKiBAbWV0aG9kIGNsZWFyXG4gKiBAbWV0aG9kIG9uXG4gKiBAbWV0aG9kIGNsb25lXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHt7IGJvdHRvbTogbnVtYmVyLCBlbGVtZW50OiBvYmplY3QsIGhlaWdodDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIHRvcDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgbW92ZVRvOiBmdW5jdGlvbiwgY29weVRvOiBmdW5jdGlvbiwgb246IGZ1bmN0aW9uLCBjbG9uZTogZnVuY3Rpb24sIHN0eWxlOiBmdW5jdGlvbiwgaW5qZWN0OiBmdW5jdGlvbiwgYXBwZW5kOiBmdW5jdGlvbiwgcmVtb3ZlOiBmdW5jdGlvbiwgY2xlYXI6IGZ1bmN0aW9uLCBvbjogZnVuY3Rpb24sIGNsb25lOiBmdW5jdGlvbiB9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENsaXAgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8qKlxuICAgICAqIEBwcm9wZXJ0eSBib3R0b21cbiAgICAgKiBAcHJvcGVydHkgZWxlbWVudFxuICAgICAqIEBwcm9wZXJ0eSBoZWlnaHRcbiAgICAgKiBAcHJvcGVydHkgbGVmdFxuICAgICAqIEBwcm9wZXJ0eSByaWdodFxuICAgICAqIEBwcm9wZXJ0eSB0b3BcbiAgICAgKiBAcHJvcGVydHkgd2lkdGhcbiAgICAgKiBAcHJvcGVydHkgeFxuICAgICAqIEBwcm9wZXJ0eSB5XG4gICAgICogQHR5cGUgbW92ZVRvKClcbiAgICAgKiBAbWV0aG9kIGNvcHlUb1xuICAgICAqIEBtZXRob2Qgb25cbiAgICAgKiBAbWV0aG9kIGNsb25lXG4gICAgICogQG1ldGhvZCBzdHlsZVxuICAgICAqIEBtZXRob2QgaW5qZWN0XG4gICAgICogQG1ldGhvZCBhcHBlbmRcbiAgICAgKiBAbWV0aG9kIHJlbW92ZVxuICAgICAqIEBtZXRob2QgY2xlYXJcbiAgICAgKiBAbWV0aG9kIG9uXG4gICAgICogQG1ldGhvZCBjbG9uZVxuICAgICAvLyAqIEB0eXBlIHt7eDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCB5OiBudW1iZXIsIGhlaWdodDogbnVtYmVyfX1cbiAgICAgKi9cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEB0eXBlIHt7eDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCB5OiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBtb3ZlVG86IGZ1bmN0aW9ufX1cbiAgICAgKi9cbiAgICBjb25zdCByb290ID0gcG9zaXRpb24oZWxlbWVudCk7XG5cbiAgICBpZiAocm9vdC5lbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwb3NpdGlvbihlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICByb290LnggPSByb290LnggLSBwYXJlbnQueDtcbiAgICAgICAgcm9vdC55ID0gcm9vdC55IC0gcGFyZW50Lnk7XG4gICAgICAgIHJvb3QuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpcCcsIHJvb3QuZWxlbWVudC5pZCB8fCAnY2xpcCcpO1xuICAgIH1cblxuICAgIHJvb3QubW92ZVRvID0gZnVuY3Rpb24gKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5lbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuY29weVRvID0gZnVuY3Rpb24gKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcm9vdC5lbGVtZW50ID0gY29weShyb290LmVsZW1lbnQpO1xuICAgICAgICByb290Lm1vdmVUbyhwYXJlbnRFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgcm9vdC5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKVxuICAgIH07XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIHJvb3Quc3R5bGUgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICB9O1xuXG4gICAgcm9vdC5pbmplY3QgPSBmdW5jdGlvbiAoZWxlbSwgYXBwZW5kID0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gcXVlcnkoZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcHBlbmQpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbSkpIHtcbiAgICAgICAgICAgIGVsZW0uZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb3QuaW5qZWN0KGUsIHRydWUpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByb290LmluamVjdChlbGVtLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgcm9vdC5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5lbGVtZW50LnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIGFyZ3VtZW50IHR5cGUuIE5lZWQgTm9kZUVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmNsZWFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGlwO1xuIiwiaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHtyYW5kb21IdW1hbml6ZVN0cmluZ30gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5cblxuLypcblxuY29uZmlnOlxuICAgIGlkOiAnaWQnLFxuICAgIHByb3BzOiB7fSxcbiAgICB0ZW1wbGF0ZTogYGAsXG5cbiAgICBiZWZvcmUgKCkge30sXG4gICAgaW5pdCAoKSB7fSxcbiAgICBjb21wbGV0ZSAoKSB7fSxcblxuICAgIGRhdGE6IHt9LFxuICAgIG1ldGhvZHM6IHt9LFxuICAgIGNvbXBvbmVudHM6IHt9LFxuXG4gICAgdGVtcGxhdGVFbGVtZW50c0VuYWJsZWQ6IHRydWUsXG4gICAgdGVtcGxhdGVFbGVtZW50c0F0dHJpYnV0ZXM6IENPTVBPTkVOVF9EQVRBX0FUVFJJQlVURVMsXG4gICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuXG5Db21wb25lbnQoe1xuICAgIGlkOiAnRXh0ZXJuYWxUZW1wbGF0ZUNvbXBvbmVudCcsXG4gICAgcHJvcHM6IFsndGl0bGUnXSxcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlJyxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXRlcmF0b3I6IDAsXG4gICAgfSxcbiAgICBjb21wbGV0ZSAoYXBwKSB7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlRWxlbWVudHMubm9kZS50aXRsZSkgdGhpcy50ZW1wbGF0ZUVsZW1lbnRzLm5vZGUudGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhZGQgKGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pdGVyYXRvci50ZXh0Q29udGVudCA9ICsrIHRoaXMuZGF0YS5pdGVyYXRvciA7XG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cblxuY29tcCA9IENvbXBvbmVudCh7Li4ufSk7XG4gICAgdGVtcGxhdGVFbGVtZW50czogeyBmdW5jOnt9LCBhY3Rpb246e30sIG5vZGU6e30sIG9uOnt9IH0sXG4gICAgICAgIElmIHRlbXBsYXRlRWxlbWVudHNFbmFibGVkIGlzIGVuYWJsZWQgZHVyaW5nIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbiwgYXR0cmlidXRlcyB3aXRoIG5hbWVzIGFyZSByZXF1ZXN0ZWRcbiAgICAgICAgZnJvbSB0aGUgdGVtcGxhdGU6XG4gICAgICAgIENPTVBPTkVOVF9EQVRBX0FUVFJJQlVURVMgPT09IFtkYXRhLWZ1bmNdLCBbZGF0YS1hY3Rpb25dLCBbZGF0YS1ub2RlXSwgW2RhdGEtb25dXG5cbmNvbXAuY29tcG9uZW50KGlkKVxuY29tcC5jb21wb25lbnRDaGlsZHJlbihpZClcbmNvbXAuY2xvbmUoKVxuY29tcC5vbihldmVudCwgY2FsbGJhY2spXG5jb21wLmluamVjdChlbGVtLCBhcHBlbmQgPSB0cnVlKVxuY29tcC5pbmplY3QoKVxuY29tcC5lbGVtZW50cyhhdHRyLCBuYW1lKVxuXG4qL1xuLyoqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBnZXQgcHJvcGVydHkgYnkgaWQga2V5d29yZFxuICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbmZpZy5pZCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbU5hbWUgPSAgcmFuZG9tSHVtYW5pemVTdHJpbmcoNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJhbmRvbU5hbWUgPSByYW5kb21OYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcmFuZG9tTmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb25maWcuaWQgPSAnQ29tcG9uZW50JyArIHJhbmRvbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wID0gQ29tcG9uZW50LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jb21wb25lbnRzW2lkXSA/IGNvbXAuY29tcG9uZW50c1tpZF0gOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNoaWxkcmVuLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmlkID09PSBpZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZCA9IGNsb25lKHRoaXMpO1xuICAgICAgICAgICAgY2xvbmVkLnRlbXBsYXRlID0gY2xvbmVkLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbXAudGVtcGxhdGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29tcC5pbmplY3QgPSBmdW5jdGlvbiAoZWxlbSwgYXBwZW5kID0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyAgICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGVsZW0gPSBxdWVyeShlbGVtKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAvLyAgICAgICAgIGNvbXAudGVtcGxhdGUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgLy8gICAgICAgICBjb21wLnRlbXBsYXRlLmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbSkpIHtcbiAgICAgICAgLy8gICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHtjb21wLmluamVjdChlLCB0cnVlKX0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9O1xuXG4gICAgICAgIGNvbXAuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0uZm9yRWFjaCgoZSkgPT4geyBjb21wLmluamVjdChlLCB0cnVlKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYXBwZW5kKSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0udG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlLnRleHRDb250ZW50ICs9IGVsZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIGNvbXAuaW5qZWN0KGVsZW0sIHRydWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5iZWZvcmUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5iZWZvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmKGlzSFRNTFN0cmluZyhjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHF1ZXJ5KGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAubWV0aG9kcyAmJiBPYmplY3QudmFsdWVzKGNvbXAubWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLm1ldGhvZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5tZXRob2RzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5tZXRob2RzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5kYXRhICYmIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5kYXRhW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5kYXRhW2tleV0gPSBjb21wLmRhdGFba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmNvbXBvbmVudHMgJiYgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXAuY29tcG9uZW50c1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcG9uZW50c1trZXldLnBhcmVudENvbXBvbmVudCA9IGNvbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXAuY2hpbGRyZW4ucHVzaChjb21wLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXAuZWxlbWVudHMgPSBmdW5jdGlvbiAoYXR0ciwgbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzW2F0dHJdW25hbWVdICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgPyBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzW2F0dHJdW25hbWVdXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAudXBkYXRlVGVtcGxhdGVEYXRhRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpICYmIGNvbXAudGVtcGxhdGVEYXRhRWxlbWVudHNFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZURhdGFFbGVtZW50c0F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYXR0ci5zdWJzdHJpbmcoNSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGVEYXRhRWxlbWVudHNbbmFtZV0gPSBzZWFyY2goJ1snK2F0dHIrJ10nLCBhdHRyLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBjb21wLnVwZGF0ZVRlbXBsYXRlRGF0YUVsZW1lbnRzKCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnQubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgICAgIHJldHVybiBjb21wO1xuICAgIH1cbn07XG5cbkNvbXBvbmVudC5saXN0ID0ge307XG5Db21wb25lbnQuY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgICAgIG5vZGU6IHt9LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHRlbXBsYXRlRGF0YUVsZW1lbnRzOiB7fSxcbiAgICAgICAgdGVtcGxhdGVEYXRhRWxlbWVudHNFbmFibGVkOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZURhdGFFbGVtZW50c0F0dHJpYnV0ZXM6IENPTVBPTkVOVF9EQVRBX0FUVFJJQlVURVMsXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudENvbXBvbmVudDoge30sXG4gICAgfSwgY29uZmlnKVxufTtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9EQVRBX0FUVFJJQlVURVMgPSBbJ2RhdGEtZnVuYycsICdkYXRhLWFjdGlvbicsICdkYXRhLW5vZGUnLCAnZGF0YS1vbiddO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAdHlwZSB7e3N1cGVyOiBEb2N1bWVudEZyYWdtZW50LCBhZGRFdmVudDogKGZ1bmN0aW9uKCo9LCAqPSk6IEN1c3RvbUV2ZW50KSwgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogKGZ1bmN0aW9uKCo9LCAqPSwgKj0pOiB0aGlzKSwgZGlzcGF0Y2hFdmVudDogKGZ1bmN0aW9uKCopOiB0aGlzKSwgZXZlbnRzVHlwZToge30sIHJlbW92ZUV2ZW50OiAoZnVuY3Rpb24oKik6IHRoaXMpLCB2ZXJzaW9uOiBzdHJpbmcsIGFkZEV2ZW50TGlzdGVuZXI6IChmdW5jdGlvbigqPSwgKj0sICo9KToge3R5cGU6ICosIGxpc3RlbmVyOiAqLCB1c2VDYXB0dXJlOiAoKnxib29sZWFuKX0pfX1cbiAqL1xuY29uc3QgRXZlbnRNYW5hZ2VyID0ge1xuICAgIHN1cGVyOiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgdmVyc2lvbjogJzAuMC4yJyxcbiAgICBldmVudHNUeXBlOiB7fSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgRXZlbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZXRhaWxzXG4gICAgICogQHJldHVybnMge0N1c3RvbUV2ZW50fVxuICAgICAqL1xuICAgIGFkZEV2ZW50OiBmdW5jdGlvbihuYW1lLCBkZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtkZXRhaWw6IGRldGFpbHN9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkZXRhaWxzKVxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkgZXZlbnRba2V5XSA9IGRldGFpbHNba2V5XTtcblxuICAgICAgICBFdmVudE1hbmFnZXIuc3VwZXJbbmFtZV0gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLnN1cGVyW25hbWVdKVxuICAgICAgICAgICAgZGVsZXRlIEV2ZW50TWFuYWdlci5zdXBlcltuYW1lXVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBvZiBhIHNwZWNpZmljIGV2ZW50IHR5cGUgb24gdGhlIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHVzZUNhcHR1cmVcbiAgICAgKiBAcmV0dXJucyB7e3R5cGU6ICosIGxpc3RlbmVyOiAqLCB1c2VDYXB0dXJlOiAoKnxib29sZWFuKX19XG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKXtcbiAgICAgICAgdXNlQ2FwdHVyZSA9IHVzZUNhcHR1cmUgfHwgZmFsc2U7XG4gICAgICAgIEV2ZW50TWFuYWdlci5zdXBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICAgICAgICBFdmVudE1hbmFnZXIuc3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZXx8ZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYW4gZXZlbnQgdG8gdGhpcyBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uICh0eXBlKXtcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5zdXBlclt0eXBlXSBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KVxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLnN1cGVyLmRpc3BhdGNoRXZlbnQoRXZlbnRNYW5hZ2VyLnN1cGVyW3R5cGVdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRNYW5hZ2VyO1xuIiwiLypcbmNvbnN0IGFuaW1hdGlvbiA9IEZyYW1lcyh7XG4gICAgZnBzOiAyNCxcbiAgICBwYXVzZWQ6IGZhbHNlLFxufSk7XG5hbmltYXRpb24ucGF1c2UoKTtcbmFuaW1hdGlvbi5zdGFydChmdW5jdGlvbihwcm9ncmVzcyl7XG4gICAgaWYgKE1hdGgucm91bmQocHJvZ3Jlc3MpICUgMTAwMCA9PT0gMCkge1xuICAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICB9XG59KTtcbmFuaW1hdGlvbi5jYW5jZWwoKTtcbiovXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7e2R1cmF0aW9uOiBudW1iZXIsIHN0YXJ0cGFseTogbnVtYmVyLCBwYXVzZWQ6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIHJlcXVlc3RJZDogbnVtYmVyLCBjYWxsYmFjazogbnVtYmVyLCBwcm9ncmVzczogbnVtYmVyLCBzdGFydChjYWxsYmFjayk6IGZ1bmN0aW9uLCBwYXVzZTogZnVuY3Rpb24sIGNhbmNlbDogZnVuY3Rpb259fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEZyYW1lcyA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzID0ge30pIHtcbiAgICBjb25zdCBpbnRlcm5hbCA9IHtcbiAgICAgICAgZnBzOiBmYWxzZSxcbiAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgbm93OiAwLFxuICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICB0aGVuOiAwLFxuICAgICAgICBmcHNJbnRlcnZhbDogMCxcbiAgICAgICAgZnJhbWVDb3VudDogMCxcbiAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgZXh0ZXJuYWwgPSB7XG5cbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoaW50ZXJuYWwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpbnRlcm5hbFtrZXldID0gdHlwZW9mIHBhcmFtZXRlcnNba2V5XSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHBhcmFtZXRlcnNba2V5XVxuICAgICAgICAgICAgOiBpbnRlcm5hbFtrZXldO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYW5pbWF0aW9uID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoIWludGVybmFsLnN0YXJ0cGFseSkgaW50ZXJuYWwuc3RhcnRwYWx5ID0gdGltZXN0YW1wO1xuICAgICAgICBpZiAoIWludGVybmFsLmZyYW1lQ291bnQpIGludGVybmFsLmZyYW1lQ291bnQgPSAwO1xuICAgICAgICBpbnRlcm5hbC5wcm9ncmVzcyA9IHRpbWVzdGFtcCAtIGludGVybmFsLnN0YXJ0cGFseTtcblxuICAgICAgICBpZiAoaW50ZXJuYWwuZnBzICYmIGludGVybmFsLmZwcyA+IDApIHtcbiAgICAgICAgICAgIGludGVybmFsLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgICAgICBpbnRlcm5hbC5lbGFwc2VkID0gaW50ZXJuYWwubm93IC0gaW50ZXJuYWwudGhlbjtcbiAgICAgICAgICAgIGlmIChpbnRlcm5hbC5lbGFwc2VkID4gaW50ZXJuYWwuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICBpbnRlcm5hbC50aGVuID0gaW50ZXJuYWwubm93IC0gKGludGVybmFsLmVsYXBzZWQgJSBpbnRlcm5hbC5mcHNJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWwuY2FsbGJhY2sgJiYgIWludGVybmFsLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICBpbnRlcm5hbC5mcmFtZUNvdW50ICsrO1xuICAgICAgICAgICAgICAgICAgICBleHRlcm5hbC5jYWxsYmFjay5jYWxsKGV4dGVybmFsLCBpbnRlcm5hbC5wcm9ncmVzcywgaW50ZXJuYWwuZnJhbWVDb3VudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXh0ZXJuYWwuY2FsbGJhY2sgJiYgIWludGVybmFsLnBhdXNlZCkge1xuICAgICAgICAgICAgICAgIGludGVybmFsLmZyYW1lQ291bnQgKys7XG4gICAgICAgICAgICAgICAgZXh0ZXJuYWwuY2FsbGJhY2suY2FsbChleHRlcm5hbCwgaW50ZXJuYWwucHJvZ3Jlc3MsIGludGVybmFsLmZyYW1lQ291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfVxuXG4gICAgZXh0ZXJuYWwucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGludGVybmFsLnBhdXNlZCA9ICFpbnRlcm5hbC5wYXVzZWQ7XG4gICAgfTtcblxuICAgIGV4dGVybmFsLnN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgZXh0ZXJuYWwuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnRlcm5hbC5mcHMgPiAwKSB7XG4gICAgICAgICAgICBpbnRlcm5hbC5mcHNJbnRlcnZhbCA9IDEwMDAgLyBpbnRlcm5hbC5mcHM7XG4gICAgICAgICAgICBpbnRlcm5hbC50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIGludGVybmFsLnN0YXJ0VGltZSA9IGludGVybmFsLnRoZW47XG4gICAgICAgIH1cbiAgICAgICAgaW50ZXJuYWwucmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb24pO1xuICAgIH07XG5cbiAgICBleHRlcm5hbC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShpbnRlcm5hbC5yZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZXh0ZXJuYWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGcmFtZXM7XG5cbiIsIlxuZXhwb3J0IGNvbnN0IEV2ZW50Q29kZXMgPSB7XG4gICAgJ0JhY2tzcGFjZSc6IDgsXG4gICAgJ1RhYic6IDksXG4gICAgJ0VudGVyJzogMTMsXG4gICAgJ1NoaWZ0TGVmdCc6IDE2LFxuICAgICdTaGlmdFJpZ2h0JzogMTYsXG4gICAgJ0NvbnRyb2xMZWZ0JzogMTcsXG4gICAgJ0NvbnRyb2xSaWdodCc6IDE3LFxuICAgICdBbHRMZWZ0JzogMTgsXG4gICAgJ0FsdFJpZ2h0JzogMTgsXG4gICAgJ1BhdXNlJzogMTksXG4gICAgJ0JyZWFrJzogMTksXG4gICAgJ0NhcHNMb2NrJzogMjAsXG4gICAgJ0VzY2FwZSc6IDI3LFxuICAgICdTcGFjZSc6IDMyLFxuICAgICdQYWdlVXAnOiAzMyxcbiAgICAnUGFnZURvd24nOiAzNCxcbiAgICAnRW5kJzogMzUsXG4gICAgJ0hvbWUnOiAzNixcbiAgICAnQXJyb3dMZWZ0JzogMzcsXG4gICAgJ0Fycm93VXAnOiAzOCxcbiAgICAnQXJyb3dSaWdodCc6IDM5LFxuICAgICdBcnJvd0Rvd24nOiA0MCxcbiAgICAnUHJpbnRTY3JlZW4nOiA0NCxcbiAgICAnSW5zZXJ0JzogNDUsXG4gICAgJ0RlbGV0ZSc6IDQ2LFxuICAgICdEaWdpdDAnOiA0OCxcbiAgICAnRGlnaXQxJzogNDksXG4gICAgJ0RpZ2l0Mic6IDUwLFxuICAgICdEaWdpdDMnOiA1MSxcbiAgICAnRGlnaXQ0JzogNTIsXG4gICAgJ0RpZ2l0NSc6IDUzLFxuICAgICdEaWdpdDYnOiA1NCxcbiAgICAnRGlnaXQ3JzogNTUsXG4gICAgJ0RpZ2l0OCc6IDU2LFxuICAgICdEaWdpdDknOiA1NyxcbiAgICAnS2V5QSc6IDY1LFxuICAgICdLZXlCJzogNjYsXG4gICAgJ0tleUMnOiA2NyxcbiAgICAnS2V5RCc6IDY4LFxuICAgICdLZXlFJzogNjksXG4gICAgJ0tleUYnOiA3MCxcbiAgICAnS2V5Ryc6IDcxLFxuICAgICdLZXlIJzogNzIsXG4gICAgJ0tleUknOiA3MyxcbiAgICAnS2V5Sic6IDc0LFxuICAgICdLZXlLJzogNzUsXG4gICAgJ0tleUwnOiA3NixcbiAgICAnS2V5TSc6IDc3LFxuICAgICdLZXlOJzogNzgsXG4gICAgJ0tleU8nOiA3OSxcbiAgICAnS2V5UCc6IDgwLFxuICAgICdLZXlRJzogODEsXG4gICAgJ0tleVInOiA4MixcbiAgICAnS2V5Uyc6IDgzLFxuICAgICdLZXlUJzogODQsXG4gICAgJ0tleVUnOiA4NSxcbiAgICAnS2V5Vic6IDg2LFxuICAgICdLZXlXJzogODcsXG4gICAgJ0tleVgnOiA4OCxcbiAgICAnS2V5WSc6IDg5LFxuICAgICdLZXlaJzogOTAsXG4gICAgJ01ldGFMZWZ0JzogOTEsXG4gICAgJ01ldGFSaWdodCc6IDkyLFxuICAgICdDb250ZXh0TWVudSc6IDkzLFxuICAgICdOdW1wYWQwJzogOTYsXG4gICAgJ051bXBhZDEnOiA5NyxcbiAgICAnTnVtcGFkMic6IDk4LFxuICAgICdOdW1wYWQzJzogOTksXG4gICAgJ051bXBhZDQnOiAxMDAsXG4gICAgJ051bXBhZDUnOiAxMDEsXG4gICAgJ051bXBhZDYnOiAxMDIsXG4gICAgJ051bXBhZDcnOiAxMDMsXG4gICAgJ051bXBhZDgnOiAxMDQsXG4gICAgJ051bXBhZDknOiAxMDUsXG4gICAgJ051bXBhZE11bHRpcGx5JzogMTA2LFxuICAgICdOdW1wYWRBZGQnOiAxMDcsXG4gICAgJ051bXBhZFN1YnRyYWN0JzogMTA5LFxuICAgICdOdW1wYWREZWNpbWFsJzogMTEwLFxuICAgICdOdW1wYWREaXZpZGUnOiAxMTEsXG4gICAgJ0YxJzogMTEyLFxuICAgICdGMic6IDExMyxcbiAgICAnRjMnOiAxMTQsXG4gICAgJ0Y0JzogMTE1LFxuICAgICdGNSc6IDExNixcbiAgICAnRjYnOiAxMTcsXG4gICAgJ0Y3JzogMTE4LFxuICAgICdGOCc6IDExOSxcbiAgICAnRjknOiAxMjAsXG4gICAgJ0YxMCc6IDEyMSxcbiAgICAnRjExJzogMTIyLFxuICAgICdGMTInOiAxMjMsXG4gICAgJ051bUxvY2snOiAxNDQsXG4gICAgJ1Njcm9sbExvY2snOiAxNDUsXG4gICAgJ1NlbWljb2xvbic6IDE4NixcbiAgICAnRXF1YWwnOiAxODcsXG4gICAgJ0NvbW1hJzogMTg4LFxuICAgICdNaW51cyc6IDE4OSxcbiAgICAnUGVyaW9kJzogMTkwLFxuICAgICdTbGFzaCc6IDE5MSxcbiAgICAnQmFja3F1b3RlJzogMTkyLFxuICAgICdCcmFja2V0TGVmdCc6IDIxOSxcbiAgICAnQmFja3NsYXNoJzogMjIwLFxuICAgICdCcmFja2V0UmlnaHQnOiAyMjEsXG4gICAgJ1F1b3RlJzogMjIyLFxufTtcblxuZXhwb3J0IGNvbnN0IEV2ZW50Q29kZXNOYW1lcyA9IHtcbiAgICAnQmFja3NwYWNlJzogJ0JhY2tzcGFjZScsXG4gICAgJ1RhYic6ICdUYWInLFxuICAgICdFbnRlcic6ICdFbnRlcicsXG4gICAgJ1NoaWZ0TGVmdCc6ICdTaGlmdExlZnQnLFxuICAgICdTaGlmdFJpZ2h0JzogJ1NoaWZ0UmlnaHQnLFxuICAgICdDb250cm9sTGVmdCc6ICdDb250cm9sTGVmdCcsXG4gICAgJ0NvbnRyb2xSaWdodCc6ICdDb250cm9sUmlnaHQnLFxuICAgICdBbHRMZWZ0JzogJ0FsdExlZnQnLFxuICAgICdBbHRSaWdodCc6ICdBbHRSaWdodCcsXG4gICAgJ1BhdXNlJzogJ1BhdXNlJyxcbiAgICAnQnJlYWsnOiAnQnJlYWsnLFxuICAgICdDYXBzTG9jayc6ICdDYXBzTG9jaycsXG4gICAgJ0VzY2FwZSc6ICdFc2NhcGUnLFxuICAgICdTcGFjZSc6ICdTcGFjZScsXG4gICAgJ1BhZ2VVcCc6ICdQYWdlVXAnLFxuICAgICdQYWdlRG93bic6ICdQYWdlRG93bicsXG4gICAgJ0VuZCc6ICdFbmQnLFxuICAgICdIb21lJzogJ0hvbWUnLFxuICAgICdBcnJvd0xlZnQnOiAnQXJyb3dMZWZ0JyxcbiAgICAnQXJyb3dVcCc6ICdBcnJvd1VwJyxcbiAgICAnQXJyb3dSaWdodCc6ICdBcnJvd1JpZ2h0JyxcbiAgICAnQXJyb3dEb3duJzogJ0Fycm93RG93bicsXG4gICAgJ1ByaW50U2NyZWVuJzogJ1ByaW50U2NyZWVuJyxcbiAgICAnSW5zZXJ0JzogJ0luc2VydCcsXG4gICAgJ0RlbGV0ZSc6ICdEZWxldGUnLFxuICAgICdEaWdpdDAnOiAnRGlnaXQwJyxcbiAgICAnRGlnaXQxJzogJ0RpZ2l0MScsXG4gICAgJ0RpZ2l0Mic6ICdEaWdpdDInLFxuICAgICdEaWdpdDMnOiAnRGlnaXQzJyxcbiAgICAnRGlnaXQ0JzogJ0RpZ2l0NCcsXG4gICAgJ0RpZ2l0NSc6ICdEaWdpdDUnLFxuICAgICdEaWdpdDYnOiAnRGlnaXQ2JyxcbiAgICAnRGlnaXQ3JzogJ0RpZ2l0NycsXG4gICAgJ0RpZ2l0OCc6ICdEaWdpdDgnLFxuICAgICdEaWdpdDknOiAnRGlnaXQ5JyxcbiAgICAnS2V5QSc6ICdLZXlBJyxcbiAgICAnS2V5Qic6ICdLZXlCJyxcbiAgICAnS2V5Qyc6ICdLZXlDJyxcbiAgICAnS2V5RCc6ICdLZXlEJyxcbiAgICAnS2V5RSc6ICdLZXlFJyxcbiAgICAnS2V5Ric6ICdLZXlGJyxcbiAgICAnS2V5Ryc6ICdLZXlHJyxcbiAgICAnS2V5SCc6ICdLZXlIJyxcbiAgICAnS2V5SSc6ICdLZXlJJyxcbiAgICAnS2V5Sic6ICdLZXlKJyxcbiAgICAnS2V5Syc6ICdLZXlLJyxcbiAgICAnS2V5TCc6ICdLZXlMJyxcbiAgICAnS2V5TSc6ICdLZXlNJyxcbiAgICAnS2V5Tic6ICdLZXlOJyxcbiAgICAnS2V5Tyc6ICdLZXlPJyxcbiAgICAnS2V5UCc6ICdLZXlQJyxcbiAgICAnS2V5USc6ICdLZXlRJyxcbiAgICAnS2V5Uic6ICdLZXlSJyxcbiAgICAnS2V5Uyc6ICdLZXlTJyxcbiAgICAnS2V5VCc6ICdLZXlUJyxcbiAgICAnS2V5VSc6ICdLZXlVJyxcbiAgICAnS2V5Vic6ICdLZXlWJyxcbiAgICAnS2V5Vyc6ICdLZXlXJyxcbiAgICAnS2V5WCc6ICdLZXlYJyxcbiAgICAnS2V5WSc6ICdLZXlZJyxcbiAgICAnS2V5Wic6ICdLZXlaJyxcbiAgICAnTWV0YUxlZnQnOiAnTWV0YUxlZnQnLFxuICAgICdNZXRhUmlnaHQnOiAnTWV0YVJpZ2h0JyxcbiAgICAnQ29udGV4dE1lbnUnOiAnQ29udGV4dE1lbnUnLFxuICAgICdOdW1wYWQwJzogJ051bXBhZDAnLFxuICAgICdOdW1wYWQxJzogJ051bXBhZDEnLFxuICAgICdOdW1wYWQyJzogJ051bXBhZDInLFxuICAgICdOdW1wYWQzJzogJ051bXBhZDMnLFxuICAgICdOdW1wYWQ0JzogJ051bXBhZDQnLFxuICAgICdOdW1wYWQ1JzogJ051bXBhZDUnLFxuICAgICdOdW1wYWQ2JzogJ051bXBhZDYnLFxuICAgICdOdW1wYWQ3JzogJ051bXBhZDcnLFxuICAgICdOdW1wYWQ4JzogJ051bXBhZDgnLFxuICAgICdOdW1wYWQ5JzogJ051bXBhZDknLFxuICAgICdOdW1wYWRNdWx0aXBseSc6ICdOdW1wYWRNdWx0aXBseScsXG4gICAgJ051bXBhZEFkZCc6ICdOdW1wYWRBZGQnLFxuICAgICdOdW1wYWRTdWJ0cmFjdCc6ICdOdW1wYWRTdWJ0cmFjdCcsXG4gICAgJ051bXBhZERlY2ltYWwnOiAnTnVtcGFkRGVjaW1hbCcsXG4gICAgJ051bXBhZERpdmlkZSc6ICdOdW1wYWREaXZpZGUnLFxuICAgICdGMSc6ICdGMScsXG4gICAgJ0YyJzogJ0YyJyxcbiAgICAnRjMnOiAnRjMnLFxuICAgICdGNCc6ICdGNCcsXG4gICAgJ0Y1JzogJ0Y1JyxcbiAgICAnRjYnOiAnRjYnLFxuICAgICdGNyc6ICdGNycsXG4gICAgJ0Y4JzogJ0Y4JyxcbiAgICAnRjknOiAnRjknLFxuICAgICdGMTAnOiAnRjEwJyxcbiAgICAnRjExJzogJ0YxMScsXG4gICAgJ0YxMic6ICdGMTInLFxuICAgICdOdW1Mb2NrJzogJ051bUxvY2snLFxuICAgICdTY3JvbGxMb2NrJzogJ1Njcm9sbExvY2snLFxuICAgICdTZW1pY29sb24nOiAnU2VtaWNvbG9uJyxcbiAgICAnRXF1YWwnOiAnRXF1YWwnLFxuICAgICdDb21tYSc6ICdDb21tYScsXG4gICAgJ01pbnVzJzogJ01pbnVzJyxcbiAgICAnUGVyaW9kJzogJ1BlcmlvZCcsXG4gICAgJ1NsYXNoJzogJ1NsYXNoJyxcbiAgICAnQmFja3F1b3RlJzogJ0JhY2txdW90ZScsXG4gICAgJ0JyYWNrZXRMZWZ0JzogJ0JyYWNrZXRMZWZ0JyxcbiAgICAnQmFja3NsYXNoJzogJ0JhY2tzbGFzaCcsXG4gICAgJ0JyYWNrZXRSaWdodCc6ICdCcmFja2V0UmlnaHQnLFxuICAgICdRdW90ZSc6ICdRdW90ZScsXG59O1xuXG5leHBvcnQgY29uc3QgRXZlbnRLZXlzID0ge1xuICAgICdiYWNrc3BhY2UnOiA4LFxuICAgICd0YWInOiA5LFxuICAgICdlbnRlcic6IDEzLFxuICAgICdzaGlmdChsZWZ0KSc6IDE2LFxuICAgICdzaGlmdChyaWdodCknOiAxNixcbiAgICAnY3RybChsZWZ0KSc6IDE3LFxuICAgICdjdHJsKHJpZ2h0KSc6IDE3LFxuICAgICdhbHQobGVmdCknOiAxOCxcbiAgICAnYWx0KHJpZ2h0KSc6IDE4LFxuICAgICdwYXVzZS9icmVhayc6IDE5LFxuICAgICdjYXBzIGxvY2snOiAyMCxcbiAgICAnZXNjYXBlJzogMjcsXG4gICAgJ3NwYWNlJzogMzIsXG4gICAgJ3BhZ2UgdXAnOiAzMyxcbiAgICAncGFnZSBkb3duJzogMzQsXG4gICAgJ2VuZCc6IDM1LFxuICAgICdob21lJzogMzYsXG4gICAgJ2xlZnQgYXJyb3cnOiAzNyxcbiAgICAndXAgYXJyb3cnOiAzOCxcbiAgICAncmlnaHQgYXJyb3cnOiAzOSxcbiAgICAnZG93biBhcnJvdyc6IDQwLFxuICAgICdwcmludCBzY3JlZW4nOiA0NCxcbiAgICAnaW5zZXJ0JzogNDUsXG4gICAgJ2RlbGV0ZSc6IDQ2LFxuICAgICcwJzogNDgsXG4gICAgJzEnOiA0OSxcbiAgICAnMic6IDUwLFxuICAgICczJzogNTEsXG4gICAgJzQnOiA1MixcbiAgICAnNSc6IDUzLFxuICAgICc2JzogNTQsXG4gICAgJzcnOiA1NSxcbiAgICAnOCc6IDU2LFxuICAgICc5JzogNTcsXG4gICAgJ2EnOiA2NSxcbiAgICAnYic6IDY2LFxuICAgICdjJzogNjcsXG4gICAgJ2QnOiA2OCxcbiAgICAnZSc6IDY5LFxuICAgICdmJzogNzAsXG4gICAgJ2cnOiA3MSxcbiAgICAnaCc6IDcyLFxuICAgICdpJzogNzMsXG4gICAgJ2onOiA3NCxcbiAgICAnayc6IDc1LFxuICAgICdsJzogNzYsXG4gICAgJ20nOiA3NyxcbiAgICAnbic6IDc4LFxuICAgICdvJzogNzksXG4gICAgJ3AnOiA4MCxcbiAgICAncSc6IDgxLFxuICAgICdyJzogODIsXG4gICAgJ3MnOiA4MyxcbiAgICAndCc6IDg0LFxuICAgICd1JzogODUsXG4gICAgJ3YnOiA4NixcbiAgICAndyc6IDg3LFxuICAgICd4JzogODgsXG4gICAgJ3knOiA4OSxcbiAgICAneic6IDkwLFxuICAgICdudW1wYWQgMCc6IDk2LFxuICAgICdudW1wYWQgMSc6IDk3LFxuICAgICdudW1wYWQgMic6IDk4LFxuICAgICdudW1wYWQgMyc6IDk5LFxuICAgICdudW1wYWQgNCc6IDEwMCxcbiAgICAnbnVtcGFkIDUnOiAxMDEsXG4gICAgJ251bXBhZCA2JzogMTAyLFxuICAgICdudW1wYWQgNyc6IDEwMyxcbiAgICAnbnVtcGFkIDgnOiAxMDQsXG4gICAgJ251bXBhZCA5JzogMTA1LFxuICAgICdtdWx0aXBseSc6IDEwNixcbiAgICAnYWRkJzogMTA3LFxuICAgICdzdWJ0cmFjdCc6IDEwOSxcbiAgICAnZGl2aWRlJzogMTExLFxuICAgICdkZWNpbWFsIHBvaW50JzogMTEwLFxuICAgICdmMSc6IDExMixcbiAgICAnZjInOiAxMTMsXG4gICAgJ2YzJzogMTE0LFxuICAgICdmNCc6IDExNSxcbiAgICAnZjUnOiAxMTYsXG4gICAgJ2Y2JzogMTE3LFxuICAgICdmNyc6IDExOCxcbiAgICAnZjgnOiAxMTksXG4gICAgJ2Y5JzogMTIwLFxuICAgICdmMTAnOiAxMjEsXG4gICAgJ2YxMSc6IDEyMixcbiAgICAnZjEyJzogMTIzLFxuICAgICdudW0gbG9jayc6IDE0NCxcbiAgICAnc2Nyb2xsIGxvY2snOiAxNDUsXG59O1xuXG5leHBvcnQgY29uc3QgRXZlbnRLZXlzTmFtZXMgPSB7XG5cbiAgICAnYmFja3NwYWNlJzogJ2JhY2tzcGFjZScsXG4gICAgJ3RhYic6ICd0YWInLFxuICAgICdlbnRlcic6ICdlbnRlcicsXG4gICAgJ3NoaWZ0KGxlZnQpJzogJ3NoaWZ0KGxlZnQpJyxcbiAgICAnc2hpZnQocmlnaHQpJzogJ3NoaWZ0KHJpZ2h0KScsXG4gICAgJ2N0cmwobGVmdCknOiAnY3RybChsZWZ0KScsXG4gICAgJ2N0cmwocmlnaHQpJzogJ2N0cmwocmlnaHQpJyxcbiAgICAnYWx0KGxlZnQpJzogJ2FsdChsZWZ0KScsXG4gICAgJ2FsdChyaWdodCknOiAnYWx0KHJpZ2h0KScsXG4gICAgJ3BhdXNlL2JyZWFrJzogJ3BhdXNlL2JyZWFrJyxcbiAgICAnY2FwcyBsb2NrJzogJ2NhcHMgbG9jaycsXG4gICAgJ2VzY2FwZSc6ICdlc2NhcGUnLFxuICAgICdzcGFjZSc6ICdzcGFjZScsXG4gICAgJ3BhZ2UgdXAnOiAncGFnZSB1cCcsXG4gICAgJ3BhZ2UgZG93bic6ICdwYWdlIGRvd24nLFxuICAgICdlbmQnOiAnZW5kJyxcbiAgICAnaG9tZSc6ICdob21lJyxcbiAgICAnbGVmdCBhcnJvdyc6ICdsZWZ0IGFycm93JyxcbiAgICAndXAgYXJyb3cnOiAndXAgYXJyb3cnLFxuICAgICdyaWdodCBhcnJvdyc6ICdyaWdodCBhcnJvdycsXG4gICAgJ2Rvd24gYXJyb3cnOiAnZG93biBhcnJvdycsXG4gICAgJ3ByaW50IHNjcmVlbic6ICdwcmludCBzY3JlZW4nLFxuICAgICdpbnNlcnQnOiAnaW5zZXJ0JyxcbiAgICAnZGVsZXRlJzogJ2RlbGV0ZScsXG4gICAgJzAnOiAnMCcsXG4gICAgJzEnOiAnMScsXG4gICAgJzInOiAnMicsXG4gICAgJzMnOiAnMycsXG4gICAgJzQnOiAnNCcsXG4gICAgJzUnOiAnNScsXG4gICAgJzYnOiAnNicsXG4gICAgJzcnOiAnNycsXG4gICAgJzgnOiAnOCcsXG4gICAgJzknOiAnOScsXG4gICAgJ2EnOiAnYScsXG4gICAgJ2InOiAnYicsXG4gICAgJ2MnOiAnYycsXG4gICAgJ2QnOiAnZCcsXG4gICAgJ2UnOiAnZScsXG4gICAgJ2YnOiAnZicsXG4gICAgJ2cnOiAnZycsXG4gICAgJ2gnOiAnaCcsXG4gICAgJ2knOiAnaScsXG4gICAgJ2onOiAnaicsXG4gICAgJ2snOiAnaycsXG4gICAgJ2wnOiAnbCcsXG4gICAgJ20nOiAnbScsXG4gICAgJ24nOiAnbicsXG4gICAgJ28nOiAnbycsXG4gICAgJ3AnOiAncCcsXG4gICAgJ3EnOiAncScsXG4gICAgJ3InOiAncicsXG4gICAgJ3MnOiAncycsXG4gICAgJ3QnOiAndCcsXG4gICAgJ3UnOiAndScsXG4gICAgJ3YnOiAndicsXG4gICAgJ3cnOiAndycsXG4gICAgJ3gnOiAneCcsXG4gICAgJ3knOiAneScsXG4gICAgJ3onOiAneicsXG4gICAgJ251bXBhZCAwJzogJ251bXBhZCAwJyxcbiAgICAnbnVtcGFkIDEnOiAnbnVtcGFkIDEnLFxuICAgICdudW1wYWQgMic6ICdudW1wYWQgMicsXG4gICAgJ251bXBhZCAzJzogJ251bXBhZCAzJyxcbiAgICAnbnVtcGFkIDQnOiAnbnVtcGFkIDQnLFxuICAgICdudW1wYWQgNSc6ICdudW1wYWQgNScsXG4gICAgJ251bXBhZCA2JzogJ251bXBhZCA2JyxcbiAgICAnbnVtcGFkIDcnOiAnbnVtcGFkIDcnLFxuICAgICdudW1wYWQgOCc6ICdudW1wYWQgOCcsXG4gICAgJ251bXBhZCA5JzogJ251bXBhZCA5JyxcbiAgICAnbXVsdGlwbHknOiAnbXVsdGlwbHknLFxuICAgICdhZGQnOiAnYWRkJyxcbiAgICAnc3VidHJhY3QnOiAnc3VidHJhY3QnLFxuICAgICdkaXZpZGUnOiAnZGl2aWRlJyxcbiAgICAnZGVjaW1hbCBwb2ludCc6ICdkZWNpbWFsIHBvaW50JyxcbiAgICAnZjEnOiAnZjEnLFxuICAgICdmMic6ICdmMicsXG4gICAgJ2YzJzogJ2YzJyxcbiAgICAnZjQnOiAnZjQnLFxuICAgICdmNSc6ICdmNScsXG4gICAgJ2Y2JzogJ2Y2JyxcbiAgICAnZjcnOiAnZjcnLFxuICAgICdmOCc6ICdmOCcsXG4gICAgJ2Y5JzogJ2Y5JyxcbiAgICAnZjEwJzogJ2YxMCcsXG4gICAgJ2YxMSc6ICdmMTEnLFxuICAgICdmMTInOiAnZjEyJyxcbiAgICAnbnVtIGxvY2snOiAnbnVtIGxvY2snLFxuICAgICdzY3JvbGwgbG9jayc6ICdzY3JvbGwgbG9jaycsXG59XG5cbi8qXG5jb25zdCBrZXlib2FyZCA9IEtleWJvYXJkRXZlbnRNYW5hZ2VyKCk7XG5rZXlib2FyZC5lYWNoKEVWRU5UX05BTUUsIGZ1bmN0aW9uIChldmVudCkge30pXG5rZXlib2FyZC53aXRoQ29uZGl0aW9uS2V5XG5rZXlib2FyZC5wcmVzcygpXG5rZXlib2FyZC51cCgpXG5rZXlib2FyZC5kb3duKClcbiovXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7e3dpdGhDb25kaXRpb25LZXkoKj0sICo9LCAqPSk6IHZvaWQsIHVwKCo9LCAqPSk6IHZvaWQsIHByZXNzKCo9LCAqPSk6IHZvaWQsIGRvd24oKj0sICo9KTogdm9pZCwgZWFjaCgqPSwgKj0pOiB2b2lkfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBLZXlib2FyZEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBzdG9yYWdlID0ge307XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBhZGRTdG9yYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF0pIHN0b3JhZ2VbZXZlbnRdID0ge307XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF1ba2V5XSkgc3RvcmFnZVtldmVudF1ba2V5XSA9IFtdO1xuICAgICAgICBzdG9yYWdlW2V2ZW50XVtrZXldLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBiYXNlQ2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYmFzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2UpLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZVt0eXBlXSkubWFwKChrZXlDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3RvcmFnZVt0eXBlXVtrZXlDb2RlXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVt0eXBlXVtrZXlDb2RlXS5tYXAoKGNhbGxiYWNrKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSB0eXBlICYmIHBhcnNlSW50KGtleUNvZGUpID09PSBldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChldmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVhY2hDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgZWFjaENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGFkZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY29kZVRvS2V5Q29kZSA9IChrZXkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIEV2ZW50Q29kZXNba2V5XVxuICAgICAgICAgICAgJiYgdHlwZW9mIEV2ZW50Q29kZXNba2V5XSA9PSBcIm51bWJlclwiXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIEV2ZW50Q29kZXNba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBFdmVudEtleXNba2V5XVxuICAgICAgICAgICAgJiYgdHlwZW9mIEV2ZW50S2V5c1trZXldID09IFwibnVtYmVyXCJcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gRXZlbnRLZXlzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0tleSBzdHJpbmcgbm90IGZvbmQnKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWFjaChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGVhY2hDYWxsYmFjayhldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aENvbmRpdGlvbktleShldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gY29kZVRvS2V5Q29kZShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkU3RvcmFnZShldmVudCwga2V5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICBwcmVzcyhrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXByZXNzJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5dXAnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG93bihrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleWRvd24nLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5LZXlib2FyZEV2ZW50TWFuYWdlci5FdmVudENvZGVzID0gRXZlbnRDb2RlcztcbktleWJvYXJkRXZlbnRNYW5hZ2VyLkV2ZW50S2V5cyA9IEV2ZW50S2V5cztcblxuS2V5Ym9hcmRFdmVudE1hbmFnZXIuZ2V0RXZlbnRLZXlCeUV2ZW50Q29kZSA9IGZ1bmN0aW9uIChldmVudENvZGUpIHtcbiAgICBsZXQgY3VycmVudEV2ZW50S2V5ID0gZmFsc2U7XG4gICAgY29uc3Qgd2hpY2ggPSBFdmVudENvZGVzW2V2ZW50Q29kZV07XG4gICAgT2JqZWN0LmtleXMoRXZlbnRLZXlzKS5maWx0ZXIoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKEV2ZW50S2V5c1trZXldID09PSB3aGljaCkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRFdmVudEtleSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRFdmVudEtleTtcbn07XG5cbktleWJvYXJkRXZlbnRNYW5hZ2VyLmdldEV2ZW50Q29kZUJ5RXZlbnRLZXkgPSBmdW5jdGlvbiAoZXZlbnRLZXkpIHtcbiAgICBsZXQgY3VycmVudEV2ZW50Q29kZSA9IGZhbHNlO1xuICAgIGNvbnN0IHdoaWNoID0gRXZlbnRLZXlzW2V2ZW50S2V5XTtcbiAgICBPYmplY3Qua2V5cyhFdmVudENvZGVzKS5maWx0ZXIoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKEV2ZW50Q29kZXNba2V5XSA9PT0gd2hpY2gpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RXZlbnRDb2RlID0ga2V5O1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3VycmVudEV2ZW50Q29kZTtcbn07XG5cbktleWJvYXJkRXZlbnRNYW5hZ2VyLmdldFdoaWNoQnlFdmVudENvZGUgPSBmdW5jdGlvbiAoZXZlbnRDb2RlKSB7XG4gICAgcmV0dXJuIEV2ZW50Q29kZXNbZXZlbnRDb2RlXTtcbn1cblxuS2V5Ym9hcmRFdmVudE1hbmFnZXIuZ2V0RXZlbnRDb2RlQnlXaGljaCA9IGZ1bmN0aW9uICh3aGljaCkge1xuICAgIGxldCBjdXJyZW50RXZlbnRDb2RlID0gZmFsc2U7XG4gICAgT2JqZWN0LmtleXMoRXZlbnRDb2RlcykuZmlsdGVyKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChFdmVudENvZGVzW2tleV0gPT09IHdoaWNoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudEV2ZW50Q29kZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRFdmVudENvZGU7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkRXZlbnRNYW5hZ2VyO1xuIiwiXG5cbi8qKlxuICogTG9hZGVyLmF1ZGlvczogxpIgKHNyY3MsIGNhbGxiYWNrKVxuICogTG9hZGVyLmltYWdlczogxpIgKGltZ3MsIGNhbGxiYWNrKVxuICogTG9hZGVyLmphdmFzY3JpcHQ6IMaSIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKVxuICogTG9hZGVyLmpzb246IMaSIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKVxuICogQHByb3BlcnR5XG4gKiBAbWV0aG9kIGpzb25cbiAqIEBtZXRob2QganNvbnNcbiAqIEBtZXRob2QgamF2YXNjcmlwdFxuICogQG1ldGhvZCBpbWFnZXNcbiAqIEBtZXRob2QgYXVkaW9zXG4gKiBAcmV0dXJucyB7e319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGpzb246IExvYWRlci5qc29uLFxuICAgICAgICBqc29uczogTG9hZGVyLmpzb25zLFxuICAgICAgICBqYXZhc2NyaXB0OiBMb2FkZXIuamF2YXNjcmlwdCxcbiAgICAgICAgaW1hZ2VzOiBMb2FkZXIuaW1hZ2VzLFxuICAgICAgICBhdWRpb3M6IExvYWRlci5hdWRpb3MsXG4gICAgICAgIHZpZGVvczogTG9hZGVyLnZpZGVvLFxuICAgIH07XG59O1xuXG4vKipcbiAqIC5qc29uKCcvdXJsL2RhdGFmaWxlLmpzb24nLCAoanNvbikgPT4ge30sIChlcnJvcikgPT4ge30pXG4gKlxuICogQHBhcmFtIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gb25lcnJvclxuICovXG5Mb2FkZXIuanNvbiA9IGZ1bmN0aW9uIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gY2FsbGJhY2soanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBvbmVycm9yXG4gKi9cbkxvYWRlci5qc29ucyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcilcbntcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIG9ialtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgIExvYWRlci5qc29uKHNyYywgKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW2tleV0gPSBqc29uO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yICsrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG9uZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmphdmFzY3JpcHQgKCB7XG4gKiAgICAgIG15X3NjcmlwdDE6ICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAqICAgICAgbXlfc2NyaXB0MjogJy9wYXRoL3RvL215X3NjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAuamF2YXNjcmlwdCAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215X3NjcmlwdDEnLFxuICogICAgICAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTG9hZGVyLmphdmFzY3JpcHRcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Mb2FkZXIuamF2YXNjcmlwdCA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcilcbntcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIG9ialtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgbGV0IHNjcmlwdDtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IChzcmNzW2tleV0uc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3Jjc1trZXldIDogc3Jjc1trZXldICsgJy5qcyc7XG4gICAgICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IGtleTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNbdGhpcy5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBMb2FkIGFuIGltYWdlc1xuICpcbiAqIC5pbWFnZXMgKCB7XG4gKiAgICAgIGltZzE6ICcvcGF0aC90by9pbWcxJyxcbiAqICAgICAgaW1nMjogJy9wYXRoL3RvL2ltZzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmltYWdlc1xuICogQHBhcmFtIGltZ3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIuaW1hZ2VzID0gZnVuY3Rpb24gKGltZ3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGltZ3MgJiYgdHlwZW9mIGltZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGltZ3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gaW1ncykge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1nc1tuYW1lXTtcbiAgICAgICAgICAgIGltZy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGltYWdlc1t0aGlzLm5hbWVdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBMb2FkIGFuIGF1ZGlvIGZpbGVzXG4gKlxuICogLmF1ZGlvcyAoIHtcbiAqICAgICAgYXVkaW8xOiAnL3BhdGgvdG8vYXVkaW8xJyxcbiAqICAgICAgYXVkaW8yOiAnL3BhdGgvdG8vYXVkaW8yJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci5hdWRpb3NcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLmF1ZGlvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGF1ZGlvcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IHNyY3NbbmFtZV07XG4gICAgICAgICAgICBhdWRpby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGF1ZGlvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICBhdWRpb3NbbmFtZV0gPSBhdWRpbztcbiAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGF1ZGlvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIExvYWQgYW4gdmlkZW8gZmlsZXNcbiAqXG4gKiAudmlkZW9zICgge1xuICogICAgICB2aWRlbzE6ICcvcGF0aC90by92aWRlbzEnLFxuICogICAgICB2aWRlbzI6ICcvcGF0aC90by92aWRlbzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLnZpZGVvc1xuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIudmlkZW9zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdmlkZW9zID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgdmlkZW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgIHZpZGVvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdmlkZW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgIHZpZGVvc1tuYW1lXSA9IHZpZGVvO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgdmlkZW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiLyoqXG5cbmEgKG0xMSkgSG9yaXpvbnRhbCBzY2FsaW5nLlxuYiAobTEyKSBIb3Jpem9udGFsIHNrZXdpbmcuXG5jIChtMjEpIFZlcnRpY2FsIHNrZXdpbmcuXG5kIChtMjIpIFZlcnRpY2FsIHNjYWxpbmcuXG5lIChkeCkgSG9yaXpvbnRhbCBtb3ZpbmcuXG5mIChkeSkgVmVydGljYWwgbW92aW5nLlxuKi9cbmNvbnN0IE1hdHJpeCA9IGZ1bmN0aW9uIChtMTEsIG0xMiwgbTIxLCBtMjIsIGd4LCBneSkge1xuICAgIHJldHVybiB7bTExLCBtMTIsIG0yMSwgbTIyLCBneCwgZ3l9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4O1xuIiwiaW1wb3J0IENsaXAgZnJvbSBcIi4vQ2xpcFwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCB7cmFuZG9tSHVtYW5pemVTdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgZXh0ZW5kLCB7ZXh0ZW5kUmVjdXJzaXZlfSBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuXG4vKlxubWMgPSBNb3ZlQ2xpcCh7XG4gICAgZWxlbWVudDogYDxkaXYgY2xhc3M9XCJzcHJpdGUgcmVjdFwiPjwvZGl2PmAsXG4gICAgcGFyZW50OiBDbGlwKCksXG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0sXG59KVxuXG5tYy54XG5tYy55XG5tYy53aWR0aFxubWMuaGVpZ2h0XG5tYy5lbGVtZW50ID09PSBtYy50ZW1wbGF0ZVxubWMuc3R5bGUoIHsgY29sb3I6ICd3aGl0ZScgfSApXG5tYy5jbG9uZSgpXG5tYy5pbmplY3QoRWxlbWVudClcbm1jLmFwcGVuZChFbGVtZW50KVxubWMucmVtb3ZlKEVsZW1lbnQpIC8vIHVzZXMgcmVtb3ZlQ2hpbGRcbm1jLm9uKGV2ZW50LCBjYWxsYmFjaylcbiovXG4vKipcbiAqIEBtZXRob2Qgc3R5bGVcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHt7cmVhZG9ubHkgeDogKiwgcmVhZG9ubHkgd2lkdGg6ICosIGluaXRpYWxpemVkOiBib29sZWFuLCByZWFkb25seSB5OiAqLCBzdHlsZSgqPSk6IHZvaWQsIGNvbXBsZXRlZDogYm9vbGVhbiwgZWxlbWVudDogKiwgcmVhZG9ubHkgaGVpZ2h0OiAqfXwqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcbiAgICBjb25zdCBjbGlwID0gQ2xpcChlbGVtZW50KTtcblxuICAgIGlmKCFjbGlwLmVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBbZWxlbWVudF0gbm90IGZvbmQhJyk7XG4gICAgfVxuXG4gICAgbGV0IG5hbWUgPSByYW5kb21IdW1hbml6ZVN0cmluZyg2KTtcbiAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xuICAgIGNsaXAuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyArIG5hbWUpO1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogY2xpcC5lbGVtZW50LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHNldCB4KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueFxuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAud2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLmhlaWdodFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZShvYmplY3QpIHtcbiAgICAgICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVsZXRlIGNvbmZpZy5lbGVtZW50O1xuICAgIGRlbGV0ZSBjb25maWcuaW5pdGlhbGl6ZWQ7XG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJvb3Rba2V5XSA9IGNvbmZpZ1trZXldXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICByb290LmluaXQuY2FsbChyb290KTtcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpc05vZGUocm9vdC5lbGVtZW50KVxuICAgICAgICAgICAgPyByb290LmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICA6ICc8ZGl2IC8+JztcblxuICAgICAgICBsZXQgY29uZiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IG5vZGUsXG4gICAgICAgICAgICBwYXJlbnQ6IHJvb3QucGFyZW50LFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb25lZDogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25mID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzICksIGNvbmYpO1xuXG4gICAgICAgIGNvbnN0IG1jID0gTW92ZUNsaXAoY29uZik7XG5cbiAgICAgICAgaWYgKGFwcGVuZCkge1xuICAgICAgICAgICAgaWYgKGlzTm9kZShyb290LnBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICByb290LnBhcmVudC5hcHBlbmRDaGlsZChtYy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByb290LnBhcmVudC5hcHBlbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByb290LnBhcmVudC5hcHBlbmQobWMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWM7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHsgcm9vdC5pbmplY3QoZSwgdHJ1ZSkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBlbGVtID0gZWxlbS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCArPSBlbGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3QucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5lbGVtZW50LnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIGFyZ3VtZW50IHR5cGUuIE5lZWQgTm9kZUVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygcm9vdC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5jb21wbGV0ZWQpe1xuICAgICAgICByb290LmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHJvb3QuY29tcGxldGUuY2FsbChyb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVDbGlwO1xuIiwiXG5jb25zdCBQb2ludCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiXG5jb25zdCBSZWN0YW5nbGUgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB7eCwgeSwgd2lkdGgsIGhlaWdodH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCJpbXBvcnQgdHJpbVN5bWJvbHMgZnJvbSBcIi4uL3N0YXRpYy90cmltU3ltYm9sc1wiO1xuXG5jb25zdCBSb3V0ZXIgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7fTtcbiAgICByb290Lmhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHJvb3Qucm9vdCA9ICcvJyArIHRyaW1TeW1ib2xzKGNvbmZpZy5yb290LCAnLycpO1xuICAgIHJvb3QucGF0aG5hbWUgPSAnLycgKyB0cmltU3ltYm9scyhsb2NhdGlvbi5wYXRobmFtZSwgJy8nKSArICcvJztcbiAgICByb290LnJvdXRlcyA9IGNvbmZpZy5yb3V0ZXMgPyBjb25maWcucm91dGVzIDoge307XG4gICAgcm9vdC5jb250ZXh0ID0gY29uZmlnLmNvbnRleHQgPyBjb25maWcuY29udGV4dCA6IHt9O1xuXG4gICAgcm9vdC50byA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgY29uc29sZS5sb2coa2V5KVxuICAgICAgICBpZiAodHlwZW9mIHJvb3Qucm91dGVzW2tleV0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgcm9vdC5yb3V0ZXNba2V5XS5jYWxsKHt9LCByb290LmNvbnRleHQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKHJvb3Qucm91dGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3QgaXMgPSBrZXkuaW5jbHVkZXMoJyMnKVxuICAgICAgICAgICAgPyBrZXkgPT09IHJvb3QuaGFzaFxuICAgICAgICAgICAgOiByb290LnJvb3QgKyBrZXkgPT09IHJvb3QucGF0aG5hbWU7XG5cbiAgICAgICAgaWYgKGlzICYmIHR5cGVvZiByb290LnJvdXRlc1trZXldID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJvb3Qucm91dGVzW2tleV0uY2FsbChyb290LmNvbnRleHQsIHJvb3QuY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xuIiwiLypcbmNvbnN0IFJ4U3RhdGUgPSBSb3h5KHtcbiAgICB0aXRsZTogJycsXG4gICAgYm9keTogJycsXG59KTtcblxuUnhTdGF0ZS5ldmVudCgoa2V5LCB2YWx1ZXMpPT57XG4gICAgaWYgKGtleSA9PT0gJycpIHt9XG4gICAgaW5qZWN0KCcjJyArIGtleSwgdmFsdWVzKTtcbn0pO1xuXG5SeFN0YXRlLnByb3h5LnRpdGxlID0gJ0ZpcnN0IHZhbHVlJztcblJ4U3RhdGUucHJveHkuYm9keSA9ICdUZXN0IGJvZHkgdGV4dCc7XG5cblRpbWVyLnRpbWVvdXQoKCkgPT4ge1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ3RpdGxlJywgJ0hlbGxvIGZyaWVuZCcpO1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ2JvZHknLCAnRG8geW91IGhhcHB5IG5vdz8nKTtcbn0sIDIwMDApO1xuXG4qL1xuXG4vKipcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBzZXQoKj0sICo9KTogKiwgZ2V0KCopOiAqLCBhY3Rpb24oKj0sICo9KTogKiwgZmlsbCgqPSwgKj0pOiAqfXxSb3h5fHt9fG51bGx8Ym9vbGVhbn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyA9IHtcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSAmJiB0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdLmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdC5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb2xkZXIgbmFtZTogc2VlfHNldD9cbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZFxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF5bG9hZC5jYWxsKHt9LCBwcm94eVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcmVzdWx0O1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdGlvbigpXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnQoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgY2hhbmdlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmUoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9IGtleTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1trZXldID0gdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbChwYXlsb2FkLCB0bykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlbdG9dKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm94eTtcbiIsImltcG9ydCBSb3h5IGZyb20gXCIuL1JveHlcIjtcblxuLyoqXG4gKiBjb25zdCByeCA9IFJveHlMaXN0ZW5lciAoe1xuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqIH0pXG4gKiByeC5zZXQoKTtcbiAqIHJ4LmRpc3BhdGNoKCk7XG4gKlxuICogcnguYWN0aW9uKCk7XG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIGRpc3BhdGNoKCo9LCAqPSk6IFJveHksIGdldCgqKTogKiwgZXZlbnQoKj0sICo9KTogdGhpcywgZmlsbCgqPSwgKj0pOiB0aGlzfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBSb3h5TGlzdGVuZXIgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICAgICAgX19hY3Rpb25fXygpIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3Rpb25zTmFtZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0gPSBwYXlsb2FkW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicgJiYgZXZlbnROYW1lICE9PSBhY3Rpb25zLl9fYWN0aW9uX18ubmFtZSkge1xuICAgICAgICAgICAgYWN0aW9uc05hbWVzW2V2ZW50TmFtZV0gPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnggPSBSb3h5KGFjdGlvbnNOYW1lcyk7XG4gICAgLy9cbiAgICByeC5hY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uc05hbWVzXG4gICAgfTtcblxuICAgIHJ4LmV2ZW50KChldmVudEN1cnNvciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuX19hY3Rpb25fXy5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRDdXJzb3IgPT09IGV2ZW50TmFtZSAmJiB0eXBlb2YgYWN0aW9uc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcng7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3h5TGlzdGVuZXI7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG5cbi8qXG5hZGQobmFtZSwgY2FsbGJhY2ssIGF0dHJzKSAgLy8gYWRkIG5ldyBzY2VuZVxuZ2V0KG5hbWUpICAgICAgICAgICAgICAgICAgIC8vIHJldHVybmVkIHNjZW5lIGJ5IG5hbWVcbmdldEN1cnJlbnRTY2VuZSgpICAgICAgICAgICAvLyByZXR1cm5lZCBjdXJyZW50IHNjZW5lXG5uZXh0KCkgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gbmV4dCBzY2VuZVxucnVuKG5hbWUsIGF0dHJzKSAgICAgICAgICAgIC8vIHJ1biBzY2VuZXMgYnkgbmFtZSwgc2V0IHRoaXMga2V5IG5hbWUgdG8gZGVmYXVsdFxuY2xvbmUoKSAgICAgICAgICAgICAgICAgICAgIC8vIGNsb25lZCBjdXJyZW50IHNjZW5lc1xuXG5jb25zdCBzY2VuZSA9IFNjZW5lKCk7XG5zY2VuZS5hZGQoJ2VkaXRvcicsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUuYWRkKCdvdXRwdXQnLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLnJ1bignb3V0cHV0JywgWydoZWxsbycsIDIwMCwgWzEsMiwzXSwge2lkOiAxMjN9XSk7XG5cbi8vIGluaXQgdiAyXG5jb25zdCBzY2VuZUNvbnRleHQgPSB7fTtcbmNvbnN0IHNjZW5lID0gU2NlbmUoe1xuICAgIGVkaXRvciAoKSB7fSxcbiAgICBvdXRwdXQgKCkge30sXG59KTtcbiovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gY29tbXVuaXR5X2FyZ3VtZW50c1xuICogQHJldHVybnMge3tjdXJyZW50OiBzdHJpbmcsIHNjZW5lczoge2RlZmF1bHQ6IHtjYWxsYmFjaygpOiB2b2lkLCBhdHRyczogW119fSwgZWxlbWVudDogbnVsbH19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG5jb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCBjb21tdW5pdHlfYXJndW1lbnRzID0gW10pIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBjdXJyZW50OiAnZGVmYXVsdCcsXG4gICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHNjZW5lczoge1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkge2NvbnNvbGUubG9nKCdbRGVmYXVsdCBTY2VuZV0nKX0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgYXR0cnMgPSBbXSkge1xuICAgICAgICByb290LnNjZW5lc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByb290LmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiByb290LnNjZW5lc1tuYW1lXTtcbiAgICB9XG5cbiAgICByb290LmdldEN1cnJlbnRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW3Jvb3QuY3VycmVudF07XG4gICAgfVxuXG4gICAgcm9vdC5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm9vdC5zY2VuZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSByb290LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5vcGVuKGxlc3QpO1xuICAgIH07XG5cbiAgICByb290Lm9wZW4gPSBmdW5jdGlvbiAoa2V5LCBhdHRycykge1xuICAgICAgICByb290LmN1cnJlbnQgPSBrZXkgfHwgJ2RlZmF1bHQnO1xuICAgICAgICBjb25zdCBzY2VuZSA9IHJvb3QuZ2V0Q3VycmVudFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc2NlbmUuY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBhdHRycyA9IEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG9kbzogY2hhbmdlZCBhcHBseSB0byBjYWxsXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShyb290LCBhdHRycyA/IGF0dHJzIDogc2NlbmUuYXR0cnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc2hvdyA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7IHJvb3Qub3BlbihrZXksIGF0dHJzKSB9O1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290Lm9wZW4oa2V5LCBhdHRycykgfTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnJ1biA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7IHJvb3Qub3BlbihrZXksIGF0dHJzKSB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByb290LmFkZChrZXksIHByb3BlcnRpZXNba2V5XSwgQXJyYXkuaXNBcnJheShjb21tdW5pdHlfYXJndW1lbnRzKSA/IGNvbW11bml0eV9hcmd1bWVudHMgOiBbY29tbXVuaXR5X2FyZ3VtZW50c10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuLyoqXG4gKlxuICAgIGNvbnN0IHN0ZXBzQXR0YWNrSGVybyA9IFN0ZXBzU2NlbmUoe1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnc3RhcnRfYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGVyb19hdHRhY2tfYW5pbWF0aW9uJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdlbmRfYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZWFjaFN0ZXBzKGZ1bmN0aW9uIChjYk9iamVjdCwgaW5kZXgpIHt9KTtcbiAgICBzdGVwc0F0dGFja0hlcm8ubmV4dCgpO1xuXG4gICAgc3RlcHNBdHRhY2tIZXJvLmdvdG8oJ2hlcm9fYXR0YWNrX2FuaW1hdGlvbicpLm5leHQoKTtcbiAgICBzdGVwc0F0dGFja0hlcm8uc3RvcCgpO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHthbnl9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU3RlcHNTY2VuZSA9IGZ1bmN0aW9uIChjb25maWcgPSB7c3RlcHM6IFtdfSkge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGl0ZXJhdGlvbjogMCxcbiAgICAgICAgbG9vcDogY29uZmlnLmxvb3AgfHwgZmFsc2UsXG4gICAgICAgIHN0ZXBfaXRlcmF0aW9uOiAwLFxuICAgICAgICBzdGVwX3N0b3A6IGZhbHNlLFxuICAgICAgICBzdGVwX2NhbGxiYWNrX2VhY2g6IG51bGwsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tzOiBjb25maWcuc3RlcHMgfHwge30sXG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgcm9vdC5wbGF5KCk7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBzdG9wKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYXkoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXkobXMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2suY2FsbChyb290KTsgfSwgbXMpO1xuICAgICAgICB9LFxuICAgICAgICBnb3RvKG5hbWUpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja3MuZm9yRWFjaCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZWFjaFN0ZXBzKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX3N0b3ApIHJldHVybiByb290O1xuXG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX2l0ZXJhdGlvbiA+IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGlmICghcm9vdC5sb29wKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudENhbGxiYWNrT2JqZWN0ID0gcm9vdC5zdGVwX2NhbGxiYWNrc1tyb290LnN0ZXBfaXRlcmF0aW9uXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaC5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2tPYmplY3QuY2FsbGJhY2suY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgcm9vdC5pdGVyYXRpb24rK1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbisrXG5cbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwc1NjZW5lO1xuIiwiXG5jb25zdCBUaW1lciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKSB7XG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgdGhpcy5pdGVyYXRvciA9IDA7XG59O1xuXG5cblRpbWVyLnNldFRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnNldEludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhckludGVydmFsKGlkKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7IiwiaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBpc051bWJlciBmcm9tIFwiLi4vc3RhdGljL2lzTnVtYmVyXCI7XG4vKlxuXG50aGlzLnRyYW5zZm9ybSA9IFRyYW5zZm9ybSh0aGlzLmVsZW1lbnQpO1xudGhpcy50cmFuc2Zvcm0ubWV0aG9kKCdyb3RhdGUnLCBbJzQ1ZGVnJ10pO1xudGhpcy50cmFuc2Zvcm0udXBkYXRlKCk7XG50aGlzLnRyYW5zZm9ybS5yZXNlYXJjaCgpO1xudGhpcy50cmFuc2Zvcm0uZnVuY3Rpb25QYXJhbWV0ZXJzKCdtYXRyaXgnKSAgICAgICAgIC8vIFsxLCAwLCAwLCAxLCAwLCAwXTogYXJyYXlcbnRoaXMudHJhbnNmb3JtLmZ1bmN0aW9uUGFyYW1ldGVycygncm90YXRlJykgICAgICAgICAvLyBbXCI0NWRlZ1wiXTogc3RyaW5nXG50aGlzLnRyYW5zZm9ybS5mdW5jdGlvblBhcmFtZXRlcnMoJ3JvdGF0ZScsIHRydWUpICAgLy8gNDU6IGludFxuXG4vLyAuLi5cblRyYW5zZm9ybS5lbGVtZW50KHRoaXMuZWxlbWVudCwgW1xuICAgICdyb3RhdGUoJyArIDEwICsnZGVnKScsXG4gICAgJ3NjYWxlKDAuNiwgMC42KScsXG4gICAgJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKScsXG5dKTtcblRyYW5zZm9ybS5lbGVtZW50KHRoaXMuZWxlbWVudCwgWydyb3RhdGUoJyArIDEwICsnZGVnKSddKVxuY29uc3QgdHJzID0gVHJhbnNmb3JtKHRoaXMuZWxlbWVudCk7XG5cbi8vIHdpdGhvdXQgb2YgdGhlIFRyYW5zZm9ybVxudGhpcy5zdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKCcgKyAxMCArJ2RlZykgc2NhbGUoMC42LCAwLjYpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSdcbn0pO1xuXG4qL1xuY29uc3QgVHJhbnNmb3JtID0gZnVuY3Rpb24gKGVsZW1lbnQsIHBhcmFtcylcbntcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICB0cmFuc2Zvcm1fb2JqOiB7fSxcbiAgICAgICAgdHJhbnNmb3JtX2FycjogZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKSxcbiAgICAgICAgdHJhbnNmb3JtX3N0cmluZzogJycsXG5cbiAgICAgICAgdXBkYXRlKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9zdHJpbmcgPSAnJztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocm9vdC50cmFuc2Zvcm1fb2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9zdHJpbmcgKz0ga2V5ICsgJygnICsgcm9vdC50cmFuc2Zvcm1fb2JqW2tleV0uam9pbignLCAnKSArICcpICc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICByb290LnRyYW5zZm9ybV9zdHJpbmc7XG4gICAgICAgICAgICByb290LnJlc2VhcmNoKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kKG1ldGhvZCwgcHJvcGVydGllcywgbXVsdGlwbHkgPSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllcykgPyBwcm9wZXJ0aWVzIDogW3Byb3BlcnRpZXNdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG11bHRpcGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ID0gdmFsdWUubWF0Y2goL1thLXpdKy9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodmFsdWUpICsgcGFyc2VJbnQocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF1baV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gbnVtICsgZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaV0gPSB2YWx1ZSArIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXRzIHBhcmFtZXRlcnMgaXMgbm90IGF2YWlsYWJsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZWFyY2goKXtcbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX2FyciA9IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcpJylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoICk7XG5cbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX2Fyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtID0gcm9vdC50cmFuc2Zvcm1fYXJyW2ldID0gcm9vdC50cmFuc2Zvcm1fYXJyW2ldLnRyaW0oKSAgKyAnKSc7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZCA9IHBhcmFtLm1hdGNoKC9bXFx3XFwuXFwtXSsvaWcpO1xuICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttYXRjaGVkWzBdXSA9IG1hdGNoZWQuc2xpY2UoMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmdW5jdGlvblBhcmFtZXRlcnMobmFtZSwgRklSU1RfSVRFTV9UT19JTlRFR0VSID0gZmFsc2Upe1xuICAgICAgICAgICAgaWYgKEZJUlNUX0lURU1fVE9fSU5URUdFUlxuICAgICAgICAgICAgICAgICYmIEFycmF5LmlzQXJyYXkocm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdKVxuICAgICAgICAgICAgICAgICYmIHJvb3QudHJhbnNmb3JtX29ialtuYW1lXS5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHJvb3QudHJhbnNmb3JtX29ialtuYW1lXVswXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOdW1iZXIoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUludChpdGVtKVxuICAgICAgICAgICAgICAgICAgICA6IHJvb3QudHJhbnNmb3JtX29ialtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV07XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QucmVzZWFyY2goKTtcblxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QubWV0aG9kKGtleSwgcGFyYW1zW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vdC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn1cblxuVHJhbnNmb3JtLmVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVzKXtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gW107XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChwcm9wKSA9PiB7IHByb3BzLnB1c2gocHJvcCkgfSk7XG4gICAgICAgIHN0eWxpemVyKGVsZW1lbnQsIHt0cmFuc2Zvcm06IHByb3BzLmpvaW4oJyAnKX0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vc3RhdGljL2dldFdpbmRvd1wiO1xuXG5pbXBvcnQgQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL0NsaXAuanNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db21wb25lbnQuanNcIjtcbmltcG9ydCBLZXlib2FyZEV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL0tleWJvYXJkRXZlbnRNYW5hZ2VyLmpzXCI7XG5pbXBvcnQge0V2ZW50Q29kZXMsIEV2ZW50S2V5cywgRXZlbnRDb2Rlc05hbWVzLCBFdmVudEtleXNOYW1lc30gZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IE1vdmVDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvTW92ZUNsaXAuanNcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1NjZW5lLmpzXCI7XG5pbXBvcnQgU3RlcHNTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1N0ZXBzU2NlbmUuanNcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi9jb21wb25lbnRzL1RpbWVyLmpzXCI7XG5pbXBvcnQgUm94eUxpc3RlbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvUm94eUxpc3RlbmVyLmpzXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9jb21wb25lbnRzL1JveHkuanNcIjtcbmltcG9ydCBTdGF0aWMgZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IEFuaW1hdGlvbkZyYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBNYXRyaXggZnJvbSBcIi4vY29tcG9uZW50cy9NYXRyaXhcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9jb21wb25lbnRzL1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgRnJhbWVzIGZyb20gXCIuL2NvbXBvbmVudHMvRnJhbWVzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL2NvbXBvbmVudHMvUm91dGVyXCI7XG5cbmNvbnN0IEFuaW1hdGUgPSB7XG4gICAgQ2xpcCxcbiAgICBDb21wb25lbnQsXG4gICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgRXZlbnRDb2RlcyxcbiAgICBFdmVudEtleXMsXG4gICAgRXZlbnRDb2Rlc05hbWVzLFxuICAgIEV2ZW50S2V5c05hbWVzLFxuICAgIE1vdmVDbGlwLFxuICAgIFNjZW5lLFxuICAgIFN0ZXBzU2NlbmUsXG4gICAgVGltZXIsXG4gICAgUm94eUxpc3RlbmVyLFxuICAgIFJveHksXG4gICAgQW5pbWF0aW9uRnJhbWUsXG4gICAgTG9hZGVyLFxuICAgIE1hdHJpeCxcbiAgICBQb2ludCxcbiAgICBSZWN0YW5nbGUsXG4gICAgVHJhbnNmb3JtLFxuICAgIEV2ZW50TWFuYWdlcixcbiAgICBGcmFtZXMsXG4gICAgUm91dGVyLFxufTtcblxuY29uc3QgUkFESUFOID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7XG5jb25zdCBERUdSRUVfQVNfUkFESUFOID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7XG5jb25zdCBERUdSRUVfMzYwX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU4gKiAzNjA7XG5jb25zdCBQSSA9IDMuMTQxNTkyNjUzNTk7XG5jb25zdCBSQURfVE9fREVHUkVFUyA9IDMuMTQxNTkyNjUzNTk7XG5cbkFuaW1hdGUuUkFESUFOID0gUkFESUFOO1xuQW5pbWF0ZS5ERUdSRUVfQVNfUkFESUFOID0gREVHUkVFX0FTX1JBRElBTjtcbkFuaW1hdGUuREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfMzYwX0FTX1JBRElBTjtcbkFuaW1hdGUuUEkgPSBQSTtcbkFuaW1hdGUuUkFEX1RPX0RFR1JFRVMgPSBSQURfVE9fREVHUkVFUztcblxuQW5pbWF0ZS5TdGF0aWMgPVxuICAgIEFuaW1hdGUuVXRpbCA9XG4gICAgICAgIFN0YXRpYztcblxuLy8gaWYgKGdldFdpbmRvdygpKSBnZXRXaW5kb3coKS5BbmltYXRlID0gQW5pbWF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTtcbiIsIlxuZXhwb3J0IGNvbnN0IExFVFRFUl9DT05TT05BTlQgPSAnQixDLEQsRixHLEgsSixLLEwsTSxOLFAsUSxSLFMsVCxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IExFVFRFUl9WT1dFTCA9ICdBLEUsSSxPLFUsWSc7XG5leHBvcnQgY29uc3QgQUJDID0gJ0EsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSLFMsVCxVLFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTlVNQkVSUyA9ICcwLDEsMiwzLDQsNSw2LDcsOCw5JztcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkQgPSAnJic7XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsIi8qKlxuICpcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBjbG9uZShmcm9tLCB0bylcbntcbiAgICBpZiAoZnJvbSA9PT0gbnVsbCB8fCB0eXBlb2YgZnJvbSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgIT09IE9iamVjdCAmJiBmcm9tLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgPT09IERhdGUgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEZ1bmN0aW9uIHx8XG4gICAgICAgIGZyb20uY29uc3RydWN0b3IgPT09IFN0cmluZyB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBOdW1iZXIgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gbmV3IGZyb20uY29uc3RydWN0b3IoZnJvbSk7XG4gICAgfVxuXG4gICAgdG8gPSB0byB8fCBuZXcgZnJvbS5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yIChuYW1lIGluIGZyb20pXG4gICAge1xuICAgICAgICB0b1tuYW1lXSA9IHR5cGVvZiB0b1tuYW1lXSA9PSBcInVuZGVmaW5lZFwiID8gY2xvbmUoZnJvbVtuYW1lXSwgbnVsbCkgOiB0b1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoc3JjLCBpbnN0YW5jZSlcbntcbiAgICBpZiAoaXNOb2RlKHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5zbGljZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiBzcmMuYmluZChpbnN0YW5jZSB8fCB7fSk7XG5cbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpKSB7XG4gICAgICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzcmMpO1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiLypcblxuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUpO1xuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUsIHRydWUpO1xuY29uc3QgYXJyMSA9IGNyZWF0ZUFycmF5KDUsIDEpO1xuY29uc3QgYXJyMiA9IGNyZWF0ZUFycmF5KDUsICdoZWxsbyB3b3JsZCcpO1xuY29uc3QgYXJyMyA9IGNyZWF0ZUFycmF5KDUsIFsxMDAsMjAwLDMwMF0pO1xuY29uc3QgYXJyNCA9IGNyZWF0ZUFycmF5KDUsIHthOidBJyxiOidCJyxjOidDJ30pO1xuXG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbnVtXG4gKiBAcGFyYW0gZmlsbFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5jb25zdCBjcmVhdGVBcnJheSA9IGZ1bmN0aW9uIChudW0sIGZpbGwpIHtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaWxsID09PSAnc3RyaW5nJyApe1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KG51bSkuZmlsbChmaWxsKTtcbiAgICB9XG5cbiAgICBhcnIgPSBuZXcgQXJyYXkobnVtKS5maWxsKDApO1xuICAgIGFyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBmaWxsLmNhbGwoZmlsbCwgaSwgaSk7XG4gICAgICAgICAgICBhcnJbaV0gPSB0eXBlb2YgciA9PT0gJ2Jvb2xlYW4nIHx8IHIgPyByIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbCkpIGFycltpXSA9IGZpbGxbaV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGZpbGxbaV0gO1xuICAgICAgICBlbHNlIGFycltpXSA9IGZpbGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcnJheTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHBhaXJzID0gKHF1ZXJ5WzBdID09PSAnPycgPyBxdWVyeS5zdWJzdHIoMSkgOiBxdWVyeSkuc3BsaXQoJyYnKTtcbiAgICBwYWlycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbi8qY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59OyovXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIGluc3RhbmNlID0ge30pIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpLCB2LCBhKSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBpLCB2LCBhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChBcnJheS5mcm9tKGxpc3QpLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwga2V5LCBsaXN0W2tleV0sIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgbGlzdCA9IGVhY2gobGlzdC5zcGxpdChcIlwiKSwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY29uc3QgYXJyID0gKG5ldyBBcnJheShsaXN0KSkuZmlsbCgwKTtcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGFyciwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBleGlzdHMgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkICYmIHNyYyAhPT0gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4aXN0cztcbiIsIlxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBzb3VyY2UpXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocGFyYW0pKVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcGFyYW1dID0gc291cmNlW3BhcmFtXTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZGVzdGluYXRpb247XG4gICAgfVxuXG4gICAgX18ucHJvdG90eXBlID0gc291cmNlLnByb3RvdHlwZTtcbiAgICBkZXN0aW5hdGlvbi5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGxldCBwcm9wZXJ0eTtcbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgICAgICAgZXh0ZW5kUmVjdXJzaXZlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAobGlzdCwgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IGksIHRtcCA9IFtdO1xuICAgIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSBcIm9iamVjdFwiKVxuICAgICAgICBsaXN0ID0gT2JqZWN0LnZhbHVlcyhsaXN0KTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICAgICAgdG1wLnB1c2gobGlzdFtpXSk7XG5cbiAgICByZXR1cm4gdG1wIDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kcyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXAgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb2N1bWVudDtcbiIsIlxuY29uc3QgZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvY2F0aW9uIG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJcbmNvbnN0IGdldFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aW5kb3cgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXaW5kb3c7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9nZXREb2N1bWVudFwiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vc3RhdGljL2dldFdpbmRvd1wiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9zdHIyZnJhZ21lbnRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBlbmNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2VuY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgZGVjb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9kZWNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9zdGF0aWMvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IGRlZmluZWRJbiBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRJblwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZXh0ZW5kLCB7XG4gICAgZXh0ZW5kUmVjdXJzaXZlXG59ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmdcbn0gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCByZWRpcmVjdCBmcm9tIFwiLi4vc3RhdGljL3JlZGlyZWN0XCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgdXJpIGZyb20gXCIuLi9zdGF0aWMvdXJpXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IGNyZWF0ZUFycmF5IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlQXJyYXlcIjtcbmltcG9ydCBpc1N0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzU3RyaW5nXCI7XG5pbXBvcnQgZXhpc3RzIGZyb20gXCIuLi9zdGF0aWMvZXhpc3RzXCI7XG5pbXBvcnQgaXNEZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvaXNEZWZpbmVkXCI7XG5pbXBvcnQgbG9hZEJsb2JmaWxlIGZyb20gXCIuLi9zdGF0aWMvbG9hZEJsb2JmaWxlXCI7XG5pbXBvcnQgbG9hZEpTT04gZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNPTlwiO1xuaW1wb3J0IGxvYWRUZXh0ZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRUZXh0ZmlsZVwiO1xuaW1wb3J0IHRvSFRNTCBmcm9tIFwiLi4vc3RhdGljL3RvSFRNTFwiO1xuaW1wb3J0IHRvWE1MIGZyb20gXCIuLi9zdGF0aWMvdG9YTUxcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgdW5pcUFycmF5IGZyb20gXCIuLi9zdGF0aWMvdW5pcUFycmF5XCI7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSBcIi4uL3N0YXRpYy9pc051bWJlclwiO1xuaW1wb3J0IHRyaW1TeW1ib2xzIGZyb20gXCIuLi9zdGF0aWMvdHJpbVN5bWJvbHNcIjtcblxuY29uc3QgU3RhdGljID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGdldERvY3VtZW50LFxuICAgIGdldFdpbmRvdyxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBleGlzdHMsXG4gICAgaXNEZWZpbmVkLFxuICAgIGxvYWRCbG9iZmlsZSxcbiAgICBsb2FkSlNPTixcbiAgICBsb2FkVGV4dGZpbGUsXG4gICAgdG9IVE1MLFxuICAgIHRvWE1MLFxuICAgIHN0eWxpemVyLFxuICAgIHVuaXFBcnJheSxcbiAgICBpc051bWJlcixcbiAgICB0cmltU3ltYm9scyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCB0cnVlLCB0byk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ3N0cmluZycpKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0RlZmluZWQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3JjKVxuICAgICAgICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzcmMgPT09IFwiXCIgfHwgc3JjID09PSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHNyYyA9PT0gMCB8fCBzcmMgPT09IG51bGwgfHwgc3JjID09PSB1bmRlZmluZWQgfHwgc3JjID09PSBmYWxzZSB8fCBpc05hTihzcmMpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIiwiLy8gaW1wb3J0IERPTVBhcnNlciBmcm9tICdET01QYXJzZXInO1xuXG5jb25zdCBpc0hUTUxTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHRydWVzdCA9IGZhbHNlKSB7XG5cbiAgICBpZiAodHJ1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudHJpbSgpLnN1YnN0cmluZygwLCAxKSA9PT0gJzwnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNIVE1MU3RyaW5nO1xuIiwiXG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XG4iLCJcbmNvbnN0IGlzTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIE51bWJlcikgJiYgIWlzTmFOKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGlzTnVtYmVyO1xuIiwiXG5jb25zdCBpc1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XG4iLCJcbmNvbnN0IGxvYWRCbG9iZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxuICAgICAgICAudGhlbihibG9iID0+IG9ubG9hZChibG9iKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCbG9iZmlsZTsiLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRDU1MgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkQ1NTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgbGluay5ocmVmID0gKHNyYy5zdWJzdHIoLTQpID09PSAnLmNzcycpID8gc3JjIDogc3JjICsgJy5jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgbGluay5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgcmV0dXJuIGxpbmtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ1NTO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudCgpO1xuY29uc3QgbG9hZEpTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZEpTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50RWxlbWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgaWQgPSAncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIHNjcmlwdC5zcmMgPSAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2N1bWVudEVsZW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICByZXR1cm4gc2NyaXB0XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTOyIsIlxuY29uc3QgbG9hZEpTT04gPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBvbmxvYWQoanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNPTjsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IGxvYWRUZXh0ZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbih0ZXh0ID0+IG9ubG9hZCh0ZXh0KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUZXh0ZmlsZTsiLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cbi8qKlxuICogQHByb3BlcnR5IG51bWJlciB4XG4gKiBAcHJvcGVydHkgbnVtYmVyIHlcbiAqIEBwcm9wZXJ0eSBudW1iZXIgd2lkdGhcbiAqIEBwcm9wZXJ0eSBudW1iZXIgaGVpZ2h0XG4gKiBAcGFyYW0gZWxlbVxuICogQHJldHVybnMge3t4OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIHk6IG51bWJlciwgaGVpZ2h0OiBudW1iZXJ9fVxuICovXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgICAgICBkYXRhLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBkYXRhLmVsZW1lbnQgPSB3aW5kb3c7XG4gICAgfVxuICAgIGVsc2VcbiAgICBpZiAoZWxlbSAmJiBlbGVtLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIGNsaWVudFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRUb3AgfHwgMCxcbiAgICAgICAgICAgICAgICBjbGllbnRMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICAgICAgICAgIGRhdGEueSA9IE1hdGgucm91bmQocmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3ApO1xuICAgICAgICAgICAgZGF0YS54ID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCk7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGRhdGEudG9wID0gcmVjdC50b3AgKyBwYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGRhdGEubGVmdCA9IHJlY3QubGVmdCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5yaWdodCA9IHJlY3QucmlnaHQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEuYm90dG9tID0gcmVjdC5ib3R0b20gKyBwYWdlWE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzICYmIGVsZW1lbnRzWzBdID8gZWxlbWVudHNbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tICcuL2dldERvY3VtZW50JztcblxuY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcblxuY29uc3QgcXVlcnlBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmcm9tID0gZnJvbSB8fCBkb2M7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZU9mKGZyb20sICdzdHJpbmcnKSlcbiAgICAgICAgZnJvbSA9IGRvYy5xdWVyeVNlbGVjdG9yKGZyb20pO1xuICAgIGlmIChmcm9tKVxuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZnJvbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB7fSwgZWxlbWVudCl9KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmltcG9ydCB7QUJDLCBMRVRURVJfQ09OU09OQU5ULCBMRVRURVJfVk9XRUwsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYsIHdpdGhOdW1iZXJzID0gZmFsc2UpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gd2l0aE51bWJlcnNcbiAgICAgICAgPyBBQkMgKyBOVU1CRVJTLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKVxuICAgICAgICA6IEFCQy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz0gYWJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFicy5sZW5ndGgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21IdW1hbml6ZVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBjb25zb25hbnQgPSAgTEVUVEVSX0NPTlNPTkFOVC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWwgPSAgTEVUVEVSX1ZPV0VMLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbEZpcnN0ID0gKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA1O1xuICAgIGZvciAoaSA9IHNpemUgLyAyICsgMTsgaSA+IDA7IGkgLS0pIHtcbiAgICAgICAgbGV0IHMxID0gY29uc29uYW50W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbnNvbmFudC5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHMyID0gdm93ZWxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdm93ZWwubGVuZ3RoKV07XG4gICAgICAgIHN0cmluZyArPSB2b3dlbEZpcnN0ID8gczEgKyBzMiA6IHMyICsgczE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc2l6ZSk7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cbi8qKlxuICogc2VhcmNoKCAndWwgPiBsaScsICAnZGF0YS1saW5rJywgTm9kZUVsZW1lbnQpO1xuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGF0dHJcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChmcm9tLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICBxdWVyeUVsZW1lbnRzLnB1c2goZnJvbSlcbiAgICB9XG5cbiAgICBpZiAocXVlcnlFbGVtZW50cykge1xuICAgICAgICB3aGlsZSAoaSA8IHF1ZXJ5RWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWF0dHIpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RWxlbWVudHNbaV0uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHF1ZXJ5RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1trZXldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiXG5jb25zdCBzdHIyZnJhZ21lbnQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKTtcbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGksXG4gICAgICAgICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcbiAgICAgICAgd2hpbGUgKGkgPSBjb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIyZnJhZ21lbnQ7XG4iLCJpbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuL3N0cjJmcmFnbWVudFwiO1xuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBmcmFnbWVudCA9IHN0cjJmcmFnbWVudChzdHJpbmcpO1xuXG4gICAgc3dpdGNoIChmcmFnbWVudC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICBjYXNlIDA6IGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXN1bHQgPSBmcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiXG5jb25zdCBzdHlsaXplciA9IGZ1bmN0aW9uIChlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXplcjtcbiIsIi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuY29uc3QgdG9IVE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC9odG1sJztcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCB0eXBlKTtcblxuICAgICAgICBpZiAoeG1sRG9jLmRvY3VtZW50RWxlbWVudCAmJiB4bWxEb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0hUTUw7XG4iLCJcbmNvbnN0IHRvT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuICAgICAgICA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b09iamVjdDtcbiIsIlxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5jb25zdCB0b1hNTCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0eXBlID0gJ3RleHQveG1sJztcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCB0eXBlKTtcblxuICAgICAgICBpZiAoeG1sRG9jLmRvY3VtZW50RWxlbWVudCAmJiB4bWxEb2MuZG9jdW1lbnRFbGVtZW50LnRhZ05hbWUgIT09ICdodG1sJykge1xuICAgICAgICAgICAgcmV0dXJuIHhtbERvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvWE1MO1xuIiwiXG5jb25zdCB0cmltU3ltYm9scyA9IGZ1bmN0aW9uIChzdHIsIGNoYXJsaXN0KSB7XG4gICAgbGV0IHdoaXRlc3BhY2UgPSBbXG4gICAgICAgICcgJyxcbiAgICAgICAgJ1xcbicsXG4gICAgICAgICdcXHInLFxuICAgICAgICAnXFx0JyxcbiAgICAgICAgJ1xcZicsXG4gICAgICAgICdcXHgwYicsXG4gICAgICAgICdcXHhhMCcsXG4gICAgICAgICdcXHUyMDAwJyxcbiAgICAgICAgJ1xcdTIwMDEnLFxuICAgICAgICAnXFx1MjAwMicsXG4gICAgICAgICdcXHUyMDAzJyxcbiAgICAgICAgJ1xcdTIwMDQnLFxuICAgICAgICAnXFx1MjAwNScsXG4gICAgICAgICdcXHUyMDA2JyxcbiAgICAgICAgJ1xcdTIwMDcnLFxuICAgICAgICAnXFx1MjAwOCcsXG4gICAgICAgICdcXHUyMDA5JyxcbiAgICAgICAgJ1xcdTIwMGEnLFxuICAgICAgICAnXFx1MjAwYicsXG4gICAgICAgICdcXHUyMDI4JyxcbiAgICAgICAgJ1xcdTIwMjknLFxuICAgICAgICAnXFx1MzAwMCdcbiAgICBdLmpvaW4oJycpXG4gICAgbGV0IGwgPSAwXG4gICAgbGV0IGkgPSAwXG4gICAgc3RyICs9ICcnXG4gICAgaWYgKGNoYXJsaXN0KSB7XG4gICAgICAgIHdoaXRlc3BhY2UgPSAoY2hhcmxpc3QgKyAnJykucmVwbGFjZSgvKFtbXFxdKCkuPy8qe30rJF46XSkvZywgJyQxJylcbiAgICB9XG4gICAgbCA9IHN0ci5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmICh3aGl0ZXNwYWNlLmluZGV4T2Yoc3RyLmNoYXJBdChpKSkgPT09IC0xKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKGkpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgfVxuICAgIGwgPSBzdHIubGVuZ3RoXG4gICAgZm9yIChpID0gbCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGlmICh3aGl0ZXNwYWNlLmluZGV4T2Yoc3RyLmNoYXJBdChpKSkgPT09IC0xKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGkgKyAxKVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gd2hpdGVzcGFjZS5pbmRleE9mKHN0ci5jaGFyQXQoMCkpID09PSAtMSA/IHN0ciA6ICcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1TeW1ib2xzO1xuIiwiaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbmNvbnN0IHR5cGVPZiA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHNpbXBsZVR5cGVzID0gWydudWxsJywgJ2Jvb2xlYW4nLCAndW5kZWZpbmVkJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdudW1iZXInLCAnZGF0ZScsICdhcnJheScsICdvYmplY3QnXTtcbiAgICBsZXQgdCA9IHR5cGVPZlN0cmljdCh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2ltcGxlVHlwZXMuaW5kZXhPZih0KSA9PT0gLTEgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgdCA9ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2Y7XG4iLCJcbmNvbnN0IHR5cGVPZlN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2ZTdHJpY3Q7XG4iLCJcbmNvbnN0IHVuaXFBcnJheSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bmlxQXJyYXk7XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcblxuXG5jb25zdCB1cmkgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICB1cmkgPSB1cmkgfHwgbG9jLnBhdGhuYW1lO1xuICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXC8rL2lnLCAnLycpO1xuICAgIHJldHVybiB1cmkubGVuZ3RoID4gMSAmJiB1cmkuc2xpY2UoMCwgMSkgIT09ICcvJyA/ICcvJyArIHVyaSA6IHVyaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVyaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=