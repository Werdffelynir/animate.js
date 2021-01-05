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
 *
 * @param element
 * @returns { bottom, element, height, left, right, top, width, x, y }
 * @constructor
 */
var Clip = function Clip(element) {
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

        comp.inject = function (elem) {
            var append = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (typeof elem === 'string') {
                if ((0, _isHTMLString2.default)(elem)) {
                    elem = (0, _str2node2.default)(elem);
                } else {
                    elem = (0, _query2.default)(elem);
                }
            }
            if (!append) {
                comp.template.textContent = '';
            }
            if ((0, _isNode2.default)(elem)) {
                comp.template.appendChild(elem);
            }
            if (Array.isArray(elem)) {
                elem.forEach(function (e) {
                    comp.inject(e, true);
                });
            }
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
const animation = FrameAnimation();
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
        internal.progress = timestamp - internal.startpaly;

        requestAnimationFrame(animation);

        if (internal.fps && internal.fps > 0) {
            internal.now = Date.now();
            internal.elapsed = internal.now - internal.then;
            if (internal.elapsed > internal.fpsInterval) {
                internal.then = internal.now - internal.elapsed % internal.fpsInterval;

                if (external.callback && !internal.paused) {
                    external.callback.call(external, internal.progress);
                }
            }
        } else {
            if (external.callback && !internal.paused) {
                external.callback.call(external, internal.progress);
            }
        }
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
/*
const keyboard = KeyboardEventManager();
keyboard.each(EVENT_NAME, function (event) {})
keyboard.withConditionKey
keyboard.press
keyboard.up
keyboard.down
*/
var KeyboardEventManager = function KeyboardEventManager() {
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
        var add = function add() {
            Object.keys(baseCallbacksList).map(function (event) {
                document.addEventListener(event, baseCallbacksList[event]);
            });
            Object.keys(eachCallbacksList).map(function (event) {
                document.addEventListener(event, eachCallbacksList[event]);
            });
        };
        var rm = function rm() {
            Object.keys(baseCallbacksList).map(function (event) {
                document.removeEventListener(event, baseCallbacksList[event]);
            });
            Object.keys(eachCallbacksList).map(function (event) {
                document.removeEventListener(event, eachCallbacksList[event]);
            });
        };
        rm();
        add();
    }

    var root = {
        each: function each(event, callback) {
            eachCallback(event, callback);
            setupListeners();
        },
        withConditionKey: function withConditionKey(event, key, callback) {
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
        root.run(lest);
    };

    root.run = function (key, attrs) {
        root.current = key || 'default';
        var scene = root.getCurrentScene();
        var callback = scene.callback;

        if (typeof callback === "function") {
            if (attrs) {
                attrs = Array.isArray(attrs) ? attrs : [attrs];
            }
            callback.apply(root, attrs ? attrs : scene.attrs);
        }
    };

    /** @deprecated */
    root.show = function (key, attrs) {
        root.run(key, attrs);
    };
    /** @deprecated */
    root.start = function (key, attrs) {
        root.run(key, attrs);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = {
    Clip: _Clip2.default,
    Component: _Component2.default,
    KeyboardEventManager: _KeyboardEventManager2.default,
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
    Frames: _Frames2.default
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
    isNumber: _isNumber2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZyYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWF0cml4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vdmVDbGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hYmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZW5jb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0hUTUxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEJsb2JmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZENTUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU09OLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTU3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRUZXh0ZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL21lcmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbm9kZTJzdHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9udW1iZXIyc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5QWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIyZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIybm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0eWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9IVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b1hNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZlN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VuaXFBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VyaS5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25GcmFtZSIsInJvb3QiLCJyZXF1ZXN0SWQiLCJzdGFydHBhbHkiLCJwYXVzZWQiLCJjYWxsYmFjayIsImRlbGF5IiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJjYWxsIiwiY2FuY2VsIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGF1c2UiLCJzdGFydCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiQ2xpcCIsImVsZW1lbnQiLCJOb2RlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIngiLCJ5Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJtb3ZlVG8iLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb3B5VG8iLCJvbiIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb25lIiwic3R5bGUiLCJvYmplY3QiLCJpbmplY3QiLCJlbGVtIiwiYXBwZW5kIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiZSIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiVHlwZUVycm9yIiwiY2xlYXIiLCJDb21wb25lbnQiLCJjb25maWciLCJsaXN0IiwicmFuZG9tTmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJjb21wIiwiY3JlYXRlIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbXBvbmVudENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2xvbmVkIiwidGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJiZWZvcmUiLCJpbml0aWFsaXplZCIsIm1ldGhvZHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJrZXlzIiwia2V5IiwiYmluZCIsImhhc093blByb3BlcnR5IiwiaW5pdCIsImRhdGEiLCJwYXJlbnRDb21wb25lbnQiLCJwdXNoIiwiZWxlbWVudHMiLCJhdHRyIiwibmFtZSIsInRlbXBsYXRlRGF0YUVsZW1lbnRzIiwidXBkYXRlVGVtcGxhdGVEYXRhRWxlbWVudHMiLCJ0ZW1wbGF0ZURhdGFFbGVtZW50c0VuYWJsZWQiLCJ0ZW1wbGF0ZURhdGFFbGVtZW50c0F0dHJpYnV0ZXMiLCJjb21wbGV0ZWQiLCJkb2N1bWVudCIsImNvbXBsZXRlIiwicHJvcHMiLCJvdmVycmlkZSIsIm5vZGUiLCJDT01QT05FTlRfREFUQV9BVFRSSUJVVEVTIiwiRXZlbnRNYW5hZ2VyIiwic3VwZXIiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwidmVyc2lvbiIsImV2ZW50c1R5cGUiLCJhZGRFdmVudCIsImRldGFpbHMiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInJlbW92ZUV2ZW50IiwidHlwZSIsImxpc3RlbmVyIiwidXNlQ2FwdHVyZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaEV2ZW50IiwiRnJhbWVzIiwicGFyYW1ldGVycyIsImludGVybmFsIiwiZnBzIiwibm93IiwiZWxhcHNlZCIsInRoZW4iLCJmcHNJbnRlcnZhbCIsImZyYW1lQ291bnQiLCJleHRlcm5hbCIsInVuZGVmaW5lZCIsImFuaW1hdGlvbiIsIkRhdGUiLCJzdGFydFRpbWUiLCJLZXlib2FyZEV2ZW50TWFuYWdlciIsInN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2tzTGlzdCIsImFkZFN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2siLCJtYXAiLCJrZXlDb2RlIiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsInNldHVwTGlzdGVuZXJzIiwiYWRkIiwicm0iLCJlYWNoIiwid2l0aENvbmRpdGlvbktleSIsInByZXNzIiwidXAiLCJkb3duIiwiTG9hZGVyIiwianNvbiIsImpzb25zIiwiamF2YXNjcmlwdCIsImltYWdlcyIsImF1ZGlvcyIsInZpZGVvcyIsInZpZGVvIiwic3JjIiwib25lcnJvciIsImZldGNoIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwic3JjcyIsIm9iaiIsIml0ZW0iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsInNjcmlwdHMiLCJpdGVyYXRvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzdWJzdHIiLCJvbmxvYWQiLCJoZWFkIiwiaW1ncyIsImltZyIsImF1ZGlvIiwicHJlbG9hZCIsIk1hdHJpeCIsIm0xMSIsIm0xMiIsIm0yMSIsIm0yMiIsImd4IiwiZ3kiLCJNb3ZlQ2xpcCIsImNsaXAiLCJFcnJvciIsInZhbHVlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiY29uZiIsImFzc2lnbiIsIm1jIiwiUG9pbnQiLCJSZWN0YW5nbGUiLCJSb3h5IiwicGF5bG9hZCIsInByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyIsImRlZmF1bHQiLCJwcm94eSIsIlByb3h5IiwiZ2V0IiwicHJvcCIsInNldCIsImRpc3BhdGNoIiwicmVzdWx0IiwiZmlsbCIsIm9ic2VydmUiLCJ0byIsImdldFByb3h5IiwiUm94eUxpc3RlbmVyIiwiYWN0aW9ucyIsIl9fYWN0aW9uX18iLCJhY3Rpb25zTmFtZXMiLCJldmVudE5hbWUiLCJpbmRleCIsInJ4IiwiZXZlbnRDdXJzb3IiLCJTY2VuZSIsInByb3BlcnRpZXMiLCJjb21tdW5pdHlfYXJndW1lbnRzIiwiY3VycmVudCIsInNjZW5lcyIsImNvbnNvbGUiLCJsb2ciLCJhdHRycyIsImdldEN1cnJlbnRTY2VuZSIsIm5leHQiLCJsZXN0IiwiaSIsInJ1biIsInNjZW5lIiwiYXBwbHkiLCJzaG93IiwiY29uc3RydWN0b3IiLCJTdGVwc1NjZW5lIiwic3RlcHMiLCJpdGVyYXRpb24iLCJsb29wIiwic3RlcF9pdGVyYXRpb24iLCJzdGVwX3N0b3AiLCJzdGVwX2NhbGxiYWNrX2VhY2giLCJzdGVwX2NhbGxiYWNrcyIsInBsYXkiLCJzdG9wIiwiZW5kIiwibXMiLCJzZXRUaW1lb3V0IiwiZ290byIsImVhY2hTdGVwcyIsImN1cnJlbnRDYWxsYmFja09iamVjdCIsIlRpbWVyIiwicmVwZWF0IiwidGhpc0luc3RhbmNlIiwidGhpc0luc3QiLCJpc05hTiIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsIlRyYW5zZm9ybSIsInBhcmFtcyIsInRyYW5zZm9ybV9vYmoiLCJ0cmFuc2Zvcm1fYXJyIiwidHJhbnNmb3JtIiwic3BsaXQiLCJmaWx0ZXIiLCJ0cmFuc2Zvcm1fc3RyaW5nIiwidXBkYXRlIiwiam9pbiIsInJlc2VhcmNoIiwibWV0aG9kIiwibXVsdGlwbHkiLCJleHQiLCJtYXRjaCIsIm51bSIsInBhcmFtIiwidHJpbSIsIm1hdGNoZWQiLCJmdW5jdGlvblBhcmFtZXRlcnMiLCJGSVJTVF9JVEVNX1RPX0lOVEVHRVIiLCJBbmltYXRlIiwiUkFESUFOIiwiREVHUkVFX0FTX1JBRElBTiIsIkRFR1JFRV8zNjBfQVNfUkFESUFOIiwiUEkiLCJSQURfVE9fREVHUkVFUyIsIlN0YXRpYyIsIlV0aWwiLCJMRVRURVJfQ09OU09OQU5UIiwiTEVUVEVSX1ZPV0VMIiwiQUJDIiwiTlVNQkVSUyIsIkFNUEVSU0FORCIsInR5cGVfZWxlbWVudCIsImFyZ3VtZW50cyIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImZyb20iLCJSZWdFeHAiLCJGdW5jdGlvbiIsIlN0cmluZyIsIk51bWJlciIsIkJvb2xlYW4iLCJjb3B5IiwiaW5zdGFuY2UiLCJjcmVhdGVBcnJheSIsImFyciIsInIiLCJ0YWciLCJpbm5lciIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImluc2VydCIsImsiLCJjcmVhdGVGcmFnbWVudCIsImZyYWdtZW50IiwiY3NzIiwic2VsZWN0b3IiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwiaW5kZXhPZiIsImRlY29kZUdldFF1ZXJ5IiwicXVlcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb21Mb2FkZWQiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidiIsImEiLCJOb2RlTGlzdCIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZW5jb2RlR2V0UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleGlzdHMiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsInJlZyIsInJlcGxhY2UiLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwibG9jYXRpb24iLCJnZXRXaW5kb3ciLCJodHRwUmVxdWVzdCIsInNlbmREYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcHRpb25zIiwiYWN0aW9uIiwidXJsIiwiaHJlZiIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJzdHIybm9kZSIsInN0cjJmcmFnbWVudCIsIm5vZGUyc3RyIiwicXVlcnlBbGwiLCJzZWFyY2giLCJpc0VtcHR5IiwiaXNOb2RlIiwibG9hZENTUyIsImxvYWRKUyIsImxvYWRKU1N5bmMiLCJtZXJnZSIsIm51bWJlcjJzdHJpbmciLCJwb3NpdGlvbiIsInBvc2l0aW9uTW91c2UiLCJyYW5kb21Db2xvciIsInJhbmRvbUl0ZW0iLCJyYW5kb21OdW1iZXIiLCJyYW5kb21TdHJpbmciLCJyYW5kb21IdW1hbml6ZVN0cmluZyIsInJlZGlyZWN0IiwidHlwZU9mIiwidHlwZU9mU3RyaWN0IiwidXJpIiwidG9PYmplY3QiLCJpc0hUTUxTdHJpbmciLCJpc1N0cmluZyIsImlzRGVmaW5lZCIsImxvYWRCbG9iZmlsZSIsImxvYWRKU09OIiwibG9hZFRleHRmaWxlIiwidG9IVE1MIiwidG9YTUwiLCJzdHlsaXplciIsInVuaXFBcnJheSIsImlzTnVtYmVyIiwiaW5uZXJIVE1MIiwidHJ1ZXN0IiwiZGl2IiwiY2hpbGRFbGVtZW50Q291bnQiLCJub2RlVHlwZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwiZXJyIiwiYmxvYiIsImxpbmsiLCJyZWwiLCJkb2N1bWVudEVsZW1lbnQiLCJ0ZXh0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb250YWluZXIiLCJhYnMiLCJwb3ciLCJidWJibGUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInJvdW5kIiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiTW91c2VFdmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwicXVlcnlTZWxlY3RvckFsbCIsIm1pbiIsIm1heCIsImZsb29yIiwibGV0dGVycyIsImNvbG9yIiwic2l6ZSIsImNlaWwiLCJyZXMiLCJ3aXRoTnVtYmVycyIsImNvbnNvbmFudCIsInZvd2VsIiwidm93ZWxGaXJzdCIsInMxIiwiczIiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiaGFzQXR0cmlidXRlIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzdHlsZXMiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJ4bWxEb2MiLCJwYXJzZUZyb21TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwidGFnTmFtZSIsInNpbXBsZVR5cGVzIiwidCIsInNlbGYiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNE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aUIvRSxJQUFqQixFQUF1QjtBQUN4QyxRQUFNK1ksSUFBSWxiLE9BQU8wUixTQUFQLENBQWlCL0wsUUFBakIsQ0FBMEJySixJQUExQixDQUErQjRLLEtBQS9CLEVBQXNDdEIsS0FBdEMsQ0FBNEMsQ0FBNUMsRUFBK0MsQ0FBQyxDQUFoRCxDQUFWO0FBQ0EsV0FBTyxPQUFPekQsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsU0FBUytZLENBQXBDLEdBQXdDQSxDQUEvQztBQUNILENBSEQ7O2tCQUtlMUYsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGYsSUFBTVksWUFBWSxTQUFaQSxTQUFZLENBQVVsUCxLQUFWLEVBQWlCOEIsS0FBakIsRUFBd0JtUyxJQUF4QixFQUE4QjtBQUM1QyxXQUFPQSxLQUFLakwsT0FBTCxDQUFhaEosS0FBYixNQUF3QjhCLEtBQS9CO0FBQ0gsQ0FGRDs7a0JBSWVvTixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7Ozs7O0FBR0EsSUFBTVgsTUFBTSxhQUFVQSxJQUFWLEVBQWU7QUFDdkIsUUFBTXlFLE1BQU0sNEJBQVo7QUFDQXpFLFdBQU1BLFFBQU95RSxJQUFJa0IsUUFBakI7QUFDQTNGLFdBQU1BLEtBQUlwRCxPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBT29ELEtBQUl2VixNQUFKLEdBQWEsQ0FBYixJQUFrQnVWLEtBQUk3UCxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsR0FBdEMsR0FBNEMsTUFBTTZQLElBQWxELEdBQXdEQSxJQUEvRDtBQUNILENBTEQ7O2tCQU9lQSxHIiwiZmlsZSI6ImFuaW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbi8qXG5jb25zdCBhbmltYXRpb24gPSBBbmltYXRpb25GcmFtZSgpO1xuYW5pbWF0aW9uLnBhdXNlKCk7XG5hbmltYXRpb24uc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5hbmltYXRpb24uY2FuY2VsKCk7XG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3tkdXJhdGlvbjogbnVtYmVyLCBzdGFydHBhbHk6IG51bWJlciwgcGF1c2VkOiBib29sZWFuLCBkZWxheTogbnVtYmVyLCByZXF1ZXN0SWQ6IG51bWJlciwgY2FsbGJhY2s6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlcn19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIHJlcXVlc3RJZDogMCxcbiAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICBjYWxsYmFjazogMCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICB9O1xuXG4gICAgcm9vdC5zdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoIXJvb3Quc3RhcnRwYWx5KSByb290LnN0YXJ0cGFseSA9IHRpbWVzdGFtcDtcbiAgICAgICAgcm9vdC5wcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHJvb3Quc3RhcnRwYWx5O1xuXG4gICAgICAgIGlmIChyb290LmNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5wcm9ncmVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdC5kdXJhdGlvbiAmJiByb290LmR1cmF0aW9uID4gcm9vdC5wcm9ncmVzcykge1xuICAgICAgICAgICAgcm9vdC5jYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgaWYgKHJvb3QucGF1c2VkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LnBhdXNlZCA9ICFyb290LnBhdXNlZDtcbiAgICB9O1xuXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgfTtcblxuICAgIHJvb3QuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocm9vdC5yZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkZyYW1lO1xuIiwiaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHsgYm90dG9tLCBlbGVtZW50LCBoZWlnaHQsIGxlZnQsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5IH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDbGlwID0gZnVuY3Rpb24gKGVsZW1lbnQpXG57XG4gICAgY29uc3Qgcm9vdCA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgaWYgKHJvb3QuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcG9zaXRpb24oZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgcm9vdC54ID0gcm9vdC54IC0gcGFyZW50Lng7XG4gICAgICAgIHJvb3QueSA9IHJvb3QueSAtIHBhcmVudC55O1xuICAgICAgICByb290LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCByb290LmVsZW1lbnQuaWQgfHwgJ2NsaXAnKTtcbiAgICB9XG5cbiAgICByb290Lm1vdmVUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByb290LnN0eWxlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYXBwZW5kKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHtyb290LmluamVjdChlLCB0cnVlKX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmFwcGVuZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJvb3QuaW5qZWN0KGVsZW0sIHRydWUpO1xuICAgIH07XG5cbiAgICByb290LnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGlmKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QuZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCBhcmd1bWVudCB0eXBlLiBOZWVkIE5vZGVFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpcDtcbiIsImltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB7cmFuZG9tSHVtYW5pemVTdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuXG5cbi8qXG5cbmNvbmZpZzpcbiAgICBpZDogJ2lkJyxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGBgLFxuXG4gICAgYmVmb3JlICgpIHt9LFxuICAgIGluaXQgKCkge30sXG4gICAgY29tcGxldGUgKCkge30sXG5cbiAgICBkYXRhOiB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBjb21wb25lbnRzOiB7fSxcblxuICAgIHRlbXBsYXRlRWxlbWVudHNFbmFibGVkOiB0cnVlLFxuICAgIHRlbXBsYXRlRWxlbWVudHNBdHRyaWJ1dGVzOiBDT01QT05FTlRfREFUQV9BVFRSSUJVVEVTLFxuICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcblxuQ29tcG9uZW50KHtcbiAgICBpZDogJ0V4dGVybmFsVGVtcGxhdGVDb21wb25lbnQnLFxuICAgIHByb3BzOiBbJ3RpdGxlJ10sXG4gICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZScsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGl0ZXJhdG9yOiAwLFxuICAgIH0sXG4gICAgY29tcGxldGUgKGFwcCkge1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZUVsZW1lbnRzLm5vZGUudGl0bGUpIHRoaXMudGVtcGxhdGVFbGVtZW50cy5ub2RlLnRpdGxlLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSArKyB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG5cbmNvbXAgPSBDb21wb25lbnQoey4uLn0pO1xuICAgIHRlbXBsYXRlRWxlbWVudHM6IHsgZnVuYzp7fSwgYWN0aW9uOnt9LCBub2RlOnt9LCBvbjp7fSB9LFxuICAgICAgICBJZiB0ZW1wbGF0ZUVsZW1lbnRzRW5hYmxlZCBpcyBlbmFibGVkIGR1cmluZyBjb21wb25lbnQgaW5pdGlhbGl6YXRpb24sIGF0dHJpYnV0ZXMgd2l0aCBuYW1lcyBhcmUgcmVxdWVzdGVkXG4gICAgICAgIGZyb20gdGhlIHRlbXBsYXRlOlxuICAgICAgICBDT01QT05FTlRfREFUQV9BVFRSSUJVVEVTID09PSBbZGF0YS1mdW5jXSwgW2RhdGEtYWN0aW9uXSwgW2RhdGEtbm9kZV0sIFtkYXRhLW9uXVxuXG5jb21wLmNvbXBvbmVudChpZClcbmNvbXAuY29tcG9uZW50Q2hpbGRyZW4oaWQpXG5jb21wLmNsb25lKClcbmNvbXAub24oZXZlbnQsIGNhbGxiYWNrKVxuY29tcC5pbmplY3QoZWxlbSwgYXBwZW5kID0gdHJ1ZSlcbmNvbXAuaW5qZWN0KClcbmNvbXAuZWxlbWVudHMoYXR0ciwgbmFtZSlcblxuKi9cbi8qKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZ2V0IHByb3BlcnR5IGJ5IGlkIGtleXdvcmRcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjb25maWcuaWQpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21OYW1lID0gIHJhbmRvbUh1bWFuaXplU3RyaW5nKDYpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByYW5kb21OYW1lID0gcmFuZG9tTmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHJhbmRvbU5hbWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29uZmlnLmlkID0gJ0NvbXBvbmVudCcgKyByYW5kb21OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWcuaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcCA9IENvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY29tcG9uZW50c1tpZF0gPyBjb21wLmNvbXBvbmVudHNbaWRdIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudENoaWxkcmVuID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jaGlsZHJlbi5maW5kKChjb21wb25lbnQpID0+IGNvbXBvbmVudC5pZCA9PT0gaWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZSh0aGlzKTtcbiAgICAgICAgICAgIGNsb25lZC50ZW1wbGF0ZSA9IGNsb25lZC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb21wLnRlbXBsYXRlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gcXVlcnkoZWxlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhcHBlbmQpIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgZWxlbS5mb3JFYWNoKChlKSA9PiB7Y29tcC5pbmplY3QoZSwgdHJ1ZSl9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5iZWZvcmUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5iZWZvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmKGlzSFRNTFN0cmluZyhjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHF1ZXJ5KGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAubWV0aG9kcyAmJiBPYmplY3QudmFsdWVzKGNvbXAubWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLm1ldGhvZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5tZXRob2RzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5tZXRob2RzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5kYXRhICYmIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5kYXRhW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5kYXRhW2tleV0gPSBjb21wLmRhdGFba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmNvbXBvbmVudHMgJiYgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXAuY29tcG9uZW50c1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcG9uZW50c1trZXldLnBhcmVudENvbXBvbmVudCA9IGNvbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXAuY2hpbGRyZW4ucHVzaChjb21wLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXAuZWxlbWVudHMgPSBmdW5jdGlvbiAoYXR0ciwgbmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzW2F0dHJdW25hbWVdICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgPyBjb21wLnRlbXBsYXRlRGF0YUVsZW1lbnRzW2F0dHJdW25hbWVdXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAudXBkYXRlVGVtcGxhdGVEYXRhRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpICYmIGNvbXAudGVtcGxhdGVEYXRhRWxlbWVudHNFbmFibGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZURhdGFFbGVtZW50c0F0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gYXR0ci5zdWJzdHJpbmcoNSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGVEYXRhRWxlbWVudHNbbmFtZV0gPSBzZWFyY2goJ1snK2F0dHIrJ10nLCBhdHRyLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBjb21wLnVwZGF0ZVRlbXBsYXRlRGF0YUVsZW1lbnRzKCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnQubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgICAgIHJldHVybiBjb21wO1xuICAgIH1cbn07XG5cbkNvbXBvbmVudC5saXN0ID0ge307XG5Db21wb25lbnQuY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgICAgIG5vZGU6IHt9LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHRlbXBsYXRlRGF0YUVsZW1lbnRzOiB7fSxcbiAgICAgICAgdGVtcGxhdGVEYXRhRWxlbWVudHNFbmFibGVkOiB0cnVlLFxuICAgICAgICB0ZW1wbGF0ZURhdGFFbGVtZW50c0F0dHJpYnV0ZXM6IENPTVBPTkVOVF9EQVRBX0FUVFJJQlVURVMsXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudENvbXBvbmVudDoge30sXG4gICAgfSwgY29uZmlnKVxufTtcblxuZXhwb3J0IGNvbnN0IENPTVBPTkVOVF9EQVRBX0FUVFJJQlVURVMgPSBbJ2RhdGEtZnVuYycsICdkYXRhLWFjdGlvbicsICdkYXRhLW5vZGUnLCAnZGF0YS1vbiddO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCIvKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAdHlwZSB7e3N1cGVyOiBEb2N1bWVudEZyYWdtZW50LCBhZGRFdmVudDogKGZ1bmN0aW9uKCo9LCAqPSk6IEN1c3RvbUV2ZW50KSwgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogKGZ1bmN0aW9uKCo9LCAqPSwgKj0pOiB0aGlzKSwgZGlzcGF0Y2hFdmVudDogKGZ1bmN0aW9uKCopOiB0aGlzKSwgZXZlbnRzVHlwZToge30sIHJlbW92ZUV2ZW50OiAoZnVuY3Rpb24oKik6IHRoaXMpLCB2ZXJzaW9uOiBzdHJpbmcsIGFkZEV2ZW50TGlzdGVuZXI6IChmdW5jdGlvbigqPSwgKj0sICo9KToge3R5cGU6ICosIGxpc3RlbmVyOiAqLCB1c2VDYXB0dXJlOiAoKnxib29sZWFuKX0pfX1cbiAqL1xuY29uc3QgRXZlbnRNYW5hZ2VyID0ge1xuICAgIHN1cGVyOiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgdmVyc2lvbjogJzAuMC4yJyxcbiAgICBldmVudHNUeXBlOiB7fSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBuZXcgRXZlbnRcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBkZXRhaWxzXG4gICAgICogQHJldHVybnMge0N1c3RvbUV2ZW50fVxuICAgICAqL1xuICAgIGFkZEV2ZW50OiBmdW5jdGlvbihuYW1lLCBkZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtkZXRhaWw6IGRldGFpbHN9KTtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXRhaWxzID09PSAnb2JqZWN0JylcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBkZXRhaWxzKVxuICAgICAgICAgICAgICAgIGlmICghZXZlbnQuaGFzT3duUHJvcGVydHkoa2V5KSkgZXZlbnRba2V5XSA9IGRldGFpbHNba2V5XTtcblxuICAgICAgICBFdmVudE1hbmFnZXIuc3VwZXJbbmFtZV0gPSBldmVudDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLnN1cGVyW25hbWVdKVxuICAgICAgICAgICAgZGVsZXRlIEV2ZW50TWFuYWdlci5zdXBlcltuYW1lXVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnQgaGFuZGxlciBvZiBhIHNwZWNpZmljIGV2ZW50IHR5cGUgb24gdGhlIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHVzZUNhcHR1cmVcbiAgICAgKiBAcmV0dXJucyB7e3R5cGU6ICosIGxpc3RlbmVyOiAqLCB1c2VDYXB0dXJlOiAoKnxib29sZWFuKX19XG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKXtcbiAgICAgICAgdXNlQ2FwdHVyZSA9IHVzZUNhcHR1cmUgfHwgZmFsc2U7XG4gICAgICAgIEV2ZW50TWFuYWdlci5zdXBlci5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXIgZnJvbSB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqL1xuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZSkge1xuICAgICAgICBFdmVudE1hbmFnZXIuc3VwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciwgdXNlQ2FwdHVyZXx8ZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2ggYW4gZXZlbnQgdG8gdGhpcyBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqL1xuICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uICh0eXBlKXtcbiAgICAgICAgaWYgKEV2ZW50TWFuYWdlci5zdXBlclt0eXBlXSBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KVxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLnN1cGVyLmRpc3BhdGNoRXZlbnQoRXZlbnRNYW5hZ2VyLnN1cGVyW3R5cGVdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRNYW5hZ2VyO1xuIiwiLypcbmNvbnN0IGFuaW1hdGlvbiA9IEZyYW1lQW5pbWF0aW9uKCk7XG5hbmltYXRpb24ucGF1c2UoKTtcbmFuaW1hdGlvbi5zdGFydChmdW5jdGlvbihwcm9ncmVzcyl7XG4gICAgaWYgKE1hdGgucm91bmQocHJvZ3Jlc3MpICUgMTAwMCA9PT0gMCkge1xuICAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICB9XG59KTtcbmFuaW1hdGlvbi5jYW5jZWwoKTtcbiovXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7e2R1cmF0aW9uOiBudW1iZXIsIHN0YXJ0cGFseTogbnVtYmVyLCBwYXVzZWQ6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIHJlcXVlc3RJZDogbnVtYmVyLCBjYWxsYmFjazogbnVtYmVyLCBwcm9ncmVzczogbnVtYmVyfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBGcmFtZXMgPSBmdW5jdGlvbiAocGFyYW1ldGVycyA9IHt9KSB7XG4gICAgY29uc3QgaW50ZXJuYWwgPSB7XG4gICAgICAgIGZwczogZmFsc2UsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIG5vdzogMCxcbiAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgdGhlbjogMCxcbiAgICAgICAgZnBzSW50ZXJ2YWw6IDAsXG4gICAgICAgIGZyYW1lQ291bnQ6IDAsXG4gICAgICAgIHN0YXJ0cGFseTogMCxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgfTtcblxuICAgIGNvbnN0IGV4dGVybmFsID0ge1xuXG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKGludGVybmFsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaW50ZXJuYWxba2V5XSA9IHR5cGVvZiBwYXJhbWV0ZXJzW2tleV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwYXJhbWV0ZXJzW2tleV1cbiAgICAgICAgICAgIDogaW50ZXJuYWxba2V5XTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFuaW1hdGlvbiA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFpbnRlcm5hbC5zdGFydHBhbHkpIGludGVybmFsLnN0YXJ0cGFseSA9IHRpbWVzdGFtcDtcbiAgICAgICAgaW50ZXJuYWwucHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSBpbnRlcm5hbC5zdGFydHBhbHk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgICAgICAgaWYgKGludGVybmFsLmZwcyAmJiBpbnRlcm5hbC5mcHMgPiAwKSB7XG4gICAgICAgICAgICBpbnRlcm5hbC5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaW50ZXJuYWwuZWxhcHNlZCA9IGludGVybmFsLm5vdyAtIGludGVybmFsLnRoZW47XG4gICAgICAgICAgICBpZiAoaW50ZXJuYWwuZWxhcHNlZCA+IGludGVybmFsLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJuYWwudGhlbiA9IGludGVybmFsLm5vdyAtIChpbnRlcm5hbC5lbGFwc2VkICUgaW50ZXJuYWwuZnBzSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsLmNhbGxiYWNrICYmICFpbnRlcm5hbC5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWwuY2FsbGJhY2suY2FsbChleHRlcm5hbCwgaW50ZXJuYWwucHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV4dGVybmFsLmNhbGxiYWNrICYmICFpbnRlcm5hbC5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICBleHRlcm5hbC5jYWxsYmFjay5jYWxsKGV4dGVybmFsLCBpbnRlcm5hbC5wcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHRlcm5hbC5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaW50ZXJuYWwucGF1c2VkID0gIWludGVybmFsLnBhdXNlZDtcbiAgICB9O1xuXG4gICAgZXh0ZXJuYWwuc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBleHRlcm5hbC5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGludGVybmFsLmZwcyA+IDApIHtcbiAgICAgICAgICAgIGludGVybmFsLmZwc0ludGVydmFsID0gMTAwMCAvIGludGVybmFsLmZwcztcbiAgICAgICAgICAgIGludGVybmFsLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaW50ZXJuYWwuc3RhcnRUaW1lID0gaW50ZXJuYWwudGhlbjtcbiAgICAgICAgfVxuICAgICAgICBpbnRlcm5hbC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfTtcblxuICAgIGV4dGVybmFsLmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGludGVybmFsLnJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIHJldHVybiBleHRlcm5hbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lcztcblxuIiwiLypcbmNvbnN0IGtleWJvYXJkID0gS2V5Ym9hcmRFdmVudE1hbmFnZXIoKTtcbmtleWJvYXJkLmVhY2goRVZFTlRfTkFNRSwgZnVuY3Rpb24gKGV2ZW50KSB7fSlcbmtleWJvYXJkLndpdGhDb25kaXRpb25LZXlcbmtleWJvYXJkLnByZXNzXG5rZXlib2FyZC51cFxua2V5Ym9hcmQuZG93blxuKi9cbmNvbnN0IEtleWJvYXJkRXZlbnRNYW5hZ2VyID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zdCBzdG9yYWdlID0ge307XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBhZGRTdG9yYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF0pIHN0b3JhZ2VbZXZlbnRdID0ge307XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF1ba2V5XSkgc3RvcmFnZVtldmVudF1ba2V5XSA9IFtdO1xuICAgICAgICBzdG9yYWdlW2V2ZW50XVtrZXldLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBiYXNlQ2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlKS5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2VbdHlwZV0pLm1hcCgoa2V5Q29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCBzdG9yYWdlW3R5cGVdW2tleUNvZGVdICkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVt0eXBlXVtrZXlDb2RlXS5tYXAoKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gdHlwZSAmJiBwYXJzZUludChrZXlDb2RlKSA9PT0gZXZlbnQua2V5Q29kZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGV2ZW50LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWFjaENhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBlYWNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGNhbGxiYWNrO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXR1cExpc3RlbmVycyAoKSB7XG4gICAgICAgIGNvbnN0IGFkZCA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBybSA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBybSgpO1xuICAgICAgICBhZGQoKTtcbiAgICB9XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlYWNoKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgZWFjaENhbGxiYWNrKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICB3aXRoQ29uZGl0aW9uS2V5KGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBhZGRTdG9yYWdlKGV2ZW50LCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXNzKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5cHJlc3MnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXAoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXl1cCcsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBkb3duKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5ZG93bicsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkRXZlbnRNYW5hZ2VyO1xuIiwiXG5cbi8qKlxuICogTG9hZGVyLmF1ZGlvczogxpIgKHNyY3MsIGNhbGxiYWNrKVxuICogTG9hZGVyLmltYWdlczogxpIgKGltZ3MsIGNhbGxiYWNrKVxuICogTG9hZGVyLmphdmFzY3JpcHQ6IMaSIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKVxuICogTG9hZGVyLmpzb246IMaSIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKVxuICogQHByb3BlcnR5XG4gKiBAbWV0aG9kIGpzb25cbiAqIEBtZXRob2QganNvbnNcbiAqIEBtZXRob2QgamF2YXNjcmlwdFxuICogQG1ldGhvZCBpbWFnZXNcbiAqIEBtZXRob2QgYXVkaW9zXG4gKiBAcmV0dXJucyB7e319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGpzb246IExvYWRlci5qc29uLFxuICAgICAgICBqc29uczogTG9hZGVyLmpzb25zLFxuICAgICAgICBqYXZhc2NyaXB0OiBMb2FkZXIuamF2YXNjcmlwdCxcbiAgICAgICAgaW1hZ2VzOiBMb2FkZXIuaW1hZ2VzLFxuICAgICAgICBhdWRpb3M6IExvYWRlci5hdWRpb3MsXG4gICAgICAgIHZpZGVvczogTG9hZGVyLnZpZGVvLFxuICAgIH07XG59O1xuXG4vKipcbiAqIC5qc29uKCcvdXJsL2RhdGFmaWxlLmpzb24nLCAoanNvbikgPT4ge30sIChlcnJvcikgPT4ge30pXG4gKlxuICogQHBhcmFtIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gb25lcnJvclxuICovXG5Mb2FkZXIuanNvbiA9IGZ1bmN0aW9uIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gY2FsbGJhY2soanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBvbmVycm9yXG4gKi9cbkxvYWRlci5qc29ucyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcilcbntcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIG9ialtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgIExvYWRlci5qc29uKHNyYywgKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW2tleV0gPSBqc29uO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yICsrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG9uZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmphdmFzY3JpcHQgKCB7XG4gKiAgICAgIG15X3NjcmlwdDE6ICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAqICAgICAgbXlfc2NyaXB0MjogJy9wYXRoL3RvL215X3NjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAuamF2YXNjcmlwdCAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215X3NjcmlwdDEnLFxuICogICAgICAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTG9hZGVyLmphdmFzY3JpcHRcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Mb2FkZXIuamF2YXNjcmlwdCA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcilcbntcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIG9ialtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgbGV0IHNjcmlwdDtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IChzcmNzW2tleV0uc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3Jjc1trZXldIDogc3Jjc1trZXldICsgJy5qcyc7XG4gICAgICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IGtleTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNbdGhpcy5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBMb2FkIGFuIGltYWdlc1xuICpcbiAqIC5pbWFnZXMgKCB7XG4gKiAgICAgIGltZzE6ICcvcGF0aC90by9pbWcxJyxcbiAqICAgICAgaW1nMjogJy9wYXRoL3RvL2ltZzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmltYWdlc1xuICogQHBhcmFtIGltZ3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIuaW1hZ2VzID0gZnVuY3Rpb24gKGltZ3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGltZ3MgJiYgdHlwZW9mIGltZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGltZ3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gaW1ncykge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1nc1tuYW1lXTtcbiAgICAgICAgICAgIGltZy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGltYWdlc1t0aGlzLm5hbWVdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBMb2FkIGFuIGF1ZGlvIGZpbGVzXG4gKlxuICogLmF1ZGlvcyAoIHtcbiAqICAgICAgYXVkaW8xOiAnL3BhdGgvdG8vYXVkaW8xJyxcbiAqICAgICAgYXVkaW8yOiAnL3BhdGgvdG8vYXVkaW8yJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci5hdWRpb3NcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLmF1ZGlvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGF1ZGlvcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IHNyY3NbbmFtZV07XG4gICAgICAgICAgICBhdWRpby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGF1ZGlvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICBhdWRpb3NbbmFtZV0gPSBhdWRpbztcbiAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGF1ZGlvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIExvYWQgYW4gdmlkZW8gZmlsZXNcbiAqXG4gKiAudmlkZW9zICgge1xuICogICAgICB2aWRlbzE6ICcvcGF0aC90by92aWRlbzEnLFxuICogICAgICB2aWRlbzI6ICcvcGF0aC90by92aWRlbzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLnZpZGVvc1xuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIudmlkZW9zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdmlkZW9zID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgdmlkZW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgIHZpZGVvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdmlkZW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgIHZpZGVvc1tuYW1lXSA9IHZpZGVvO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgdmlkZW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiLyoqXG5cbmEgKG0xMSkgSG9yaXpvbnRhbCBzY2FsaW5nLlxuYiAobTEyKSBIb3Jpem9udGFsIHNrZXdpbmcuXG5jIChtMjEpIFZlcnRpY2FsIHNrZXdpbmcuXG5kIChtMjIpIFZlcnRpY2FsIHNjYWxpbmcuXG5lIChkeCkgSG9yaXpvbnRhbCBtb3ZpbmcuXG5mIChkeSkgVmVydGljYWwgbW92aW5nLlxuKi9cbmNvbnN0IE1hdHJpeCA9IGZ1bmN0aW9uIChtMTEsIG0xMiwgbTIxLCBtMjIsIGd4LCBneSkge1xuICAgIHJldHVybiB7bTExLCBtMTIsIG0yMSwgbTIyLCBneCwgZ3l9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4O1xuIiwiaW1wb3J0IENsaXAgZnJvbSBcIi4vQ2xpcFwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCB7cmFuZG9tSHVtYW5pemVTdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgZXh0ZW5kLCB7ZXh0ZW5kUmVjdXJzaXZlfSBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuXG4vKlxubWMgPSBNb3ZlQ2xpcCh7XG4gICAgZWxlbWVudDogYDxkaXYgY2xhc3M9XCJzcHJpdGUgcmVjdFwiPjwvZGl2PmAsXG4gICAgcGFyZW50OiBDbGlwKCksXG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0sXG59KVxuXG5tYy54XG5tYy55XG5tYy53aWR0aFxubWMuaGVpZ2h0XG5tYy5lbGVtZW50ID09PSBtYy50ZW1wbGF0ZVxubWMuc3R5bGUoIHsgY29sb3I6ICd3aGl0ZScgfSApXG5tYy5jbG9uZSgpXG5tYy5pbmplY3QoRWxlbWVudClcbm1jLmFwcGVuZChFbGVtZW50KVxubWMucmVtb3ZlKEVsZW1lbnQpIC8vIHVzZXMgcmVtb3ZlQ2hpbGRcbm1jLm9uKGV2ZW50LCBjYWxsYmFjaylcbiovXG4vKipcbiAqIEBtZXRob2Qgc3R5bGVcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHt7cmVhZG9ubHkgeDogKiwgcmVhZG9ubHkgd2lkdGg6ICosIGluaXRpYWxpemVkOiBib29sZWFuLCByZWFkb25seSB5OiAqLCBzdHlsZSgqPSk6IHZvaWQsIGNvbXBsZXRlZDogYm9vbGVhbiwgZWxlbWVudDogKiwgcmVhZG9ubHkgaGVpZ2h0OiAqfXwqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcbiAgICBjb25zdCBjbGlwID0gQ2xpcChlbGVtZW50KTtcblxuICAgIGlmKCFjbGlwLmVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBbZWxlbWVudF0gbm90IGZvbmQhJyk7XG4gICAgfVxuXG4gICAgbGV0IG5hbWUgPSByYW5kb21IdW1hbml6ZVN0cmluZyg2KTtcbiAgICBuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xuICAgIGNsaXAuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyArIG5hbWUpO1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogY2xpcC5lbGVtZW50LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHNldCB4KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueFxuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAud2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLmhlaWdodFxuICAgICAgICB9LFxuICAgICAgICBzdHlsZShvYmplY3QpIHtcbiAgICAgICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVsZXRlIGNvbmZpZy5lbGVtZW50O1xuICAgIGRlbGV0ZSBjb25maWcuaW5pdGlhbGl6ZWQ7XG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJvb3Rba2V5XSA9IGNvbmZpZ1trZXldXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICByb290LmluaXQuY2FsbChyb290KTtcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBpc05vZGUocm9vdC5lbGVtZW50KVxuICAgICAgICAgICAgPyByb290LmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICA6ICc8ZGl2IC8+JztcblxuICAgICAgICBsZXQgY29uZiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IG5vZGUsXG4gICAgICAgICAgICBwYXJlbnQ6IHJvb3QucGFyZW50LFxuICAgICAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGNsb25lZDogdHJ1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25mID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzICksIGNvbmYpO1xuXG4gICAgICAgIGNvbnN0IG1jID0gTW92ZUNsaXAoY29uZik7XG5cbiAgICAgICAgaWYgKGFwcGVuZCkge1xuICAgICAgICAgICAgaWYgKGlzTm9kZShyb290LnBhcmVudCkpIHtcbiAgICAgICAgICAgICAgICByb290LnBhcmVudC5hcHBlbmRDaGlsZChtYy5lbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiByb290LnBhcmVudC5hcHBlbmQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByb290LnBhcmVudC5hcHBlbmQobWMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWM7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHsgcm9vdC5pbmplY3QoZSwgdHJ1ZSkgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBlbGVtID0gZWxlbS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ICs9IGVsZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByb290LmluamVjdChlbGVtLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgcm9vdC5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBpZihpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgYXJndW1lbnQgdHlwZS4gTmVlZCBOb2RlRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiByb290LmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFyb290LmNvbXBsZXRlZCl7XG4gICAgICAgIHJvb3QuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgcm9vdC5jb21wbGV0ZS5jYWxsKHJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92ZUNsaXA7XG4iLCJcbmNvbnN0IFBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4ge3gsIHl9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJcbmNvbnN0IFJlY3RhbmdsZSA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHt4LCB5LCB3aWR0aCwgaGVpZ2h0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIi8qXG5jb25zdCBSeFN0YXRlID0gUm94eSh7XG4gICAgdGl0bGU6ICcnLFxuICAgIGJvZHk6ICcnLFxufSk7XG5cblJ4U3RhdGUuZXZlbnQoKGtleSwgdmFsdWVzKT0+e1xuICAgIGlmIChrZXkgPT09ICcnKSB7fVxuICAgIGluamVjdCgnIycgKyBrZXksIHZhbHVlcyk7XG59KTtcblxuUnhTdGF0ZS5wcm94eS50aXRsZSA9ICdGaXJzdCB2YWx1ZSc7XG5SeFN0YXRlLnByb3h5LmJvZHkgPSAnVGVzdCBib2R5IHRleHQnO1xuXG5UaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICBSeFN0YXRlLmRpc3BhdGNoKCd0aXRsZScsICdIZWxsbyBmcmllbmQnKTtcbiAgICBSeFN0YXRlLmRpc3BhdGNoKCdib2R5JywgJ0RvIHlvdSBoYXBweSBub3c/Jyk7XG59LCAyMDAwKTtcblxuKi9cblxuLyoqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgc2V0KCo9LCAqPSk6ICosIGdldCgqKTogKiwgYWN0aW9uKCo9LCAqPSk6ICosIGZpbGwoKj0sICo9KTogKn18Um94eXx7fXxudWxsfGJvb2xlYW59XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFJveHkgPSBmdW5jdGlvbiAocGF5bG9hZClcbntcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MgPSB7XG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHBheWxvYWQsIHtcbiAgICAgICAgZ2V0KG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG9iaiwgcHJvcCwgdmFsdWUpIHtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gJiYgdHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXS5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9sZGVyIG5hbWU6IHNlZXxzZXQ/XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIHBheWxvYWRcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaChrZXksIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBrZXkuY2FsbCh7fSwgcHJveHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbChyZXN1bHQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3Rpb24oKVxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50KGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmUoa2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGNoYW5nZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZlKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPSBrZXk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3Nba2V5XSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID8gcHJveHlba2V5XSA6IGNvcHkocHJveHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGwocGF5bG9hZCwgdG8pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5W3RvXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm94eVt0b11ba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJveHk7XG4iLCJpbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5cbi8qKlxuICogY29uc3QgcnggPSBSb3h5TGlzdGVuZXIgKHtcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiB9KVxuICogcnguc2V0KCk7XG4gKiByeC5kaXNwYXRjaCgpO1xuICpcbiAqIHJ4LmFjdGlvbigpO1xuICpcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBkaXNwYXRjaCgqPSwgKj0pOiBSb3h5LCBnZXQoKik6ICosIGV2ZW50KCo9LCAqPSk6IHRoaXMsIGZpbGwoKj0sICo9KTogdGhpc319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUm94eUxpc3RlbmVyID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgICAgIF9fYWN0aW9uX18oKSB7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aW9uc05hbWVzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdID0gcGF5bG9hZFtldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nICYmIGV2ZW50TmFtZSAhPT0gYWN0aW9ucy5fX2FjdGlvbl9fLm5hbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbnNOYW1lc1tldmVudE5hbWVdID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ4ID0gUm94eShhY3Rpb25zTmFtZXMpO1xuICAgIC8vXG4gICAgcnguYWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnNOYW1lc1xuICAgIH07XG5cbiAgICByeC5ldmVudCgoZXZlbnRDdXJzb3IsIHZhbHVlcykgPT4ge1xuICAgICAgICBhY3Rpb25zLl9fYWN0aW9uX18uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50Q3Vyc29yID09PSBldmVudE5hbWUgJiYgdHlwZW9mIGFjdGlvbnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXS5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJ4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm94eUxpc3RlbmVyO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuXG4vKlxuYWRkKG5hbWUsIGNhbGxiYWNrLCBhdHRycykgIC8vIGFkZCBuZXcgc2NlbmVcbmdldChuYW1lKSAgICAgICAgICAgICAgICAgICAvLyByZXR1cm5lZCBzY2VuZSBieSBuYW1lXG5nZXRDdXJyZW50U2NlbmUoKSAgICAgICAgICAgLy8gcmV0dXJuZWQgY3VycmVudCBzY2VuZVxubmV4dCgpICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIG5leHQgc2NlbmVcbnJ1bihuYW1lLCBhdHRycykgICAgICAgICAgICAvLyBydW4gc2NlbmVzIGJ5IG5hbWUsIHNldCB0aGlzIGtleSBuYW1lIHRvIGRlZmF1bHRcbmNsb25lKCkgICAgICAgICAgICAgICAgICAgICAvLyBjbG9uZWQgY3VycmVudCBzY2VuZXNcblxuY29uc3Qgc2NlbmUgPSBTY2VuZSgpO1xuc2NlbmUuYWRkKCdlZGl0b3InLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLmFkZCgnb3V0cHV0JywgZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBjb25zb2xlLmxvZyhhLCBiLCBjLCBkKTtcbn0pXG5zY2VuZS5ydW4oJ291dHB1dCcsIFsnaGVsbG8nLCAyMDAsIFsxLDIsM10sIHtpZDogMTIzfV0pO1xuKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXNcbiAqIEBwYXJhbSBjb21tdW5pdHlfYXJndW1lbnRzXG4gKiBAcmV0dXJucyB7e2N1cnJlbnQ6IHN0cmluZywgc2NlbmVzOiB7ZGVmYXVsdDoge2NhbGxiYWNrKCk6IHZvaWQsIGF0dHJzOiBbXX19LCBlbGVtZW50OiBudWxsfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzLCBjb21tdW5pdHlfYXJndW1lbnRzID0gW10pIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBjdXJyZW50OiAnZGVmYXVsdCcsXG4gICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHNjZW5lczoge1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkge2NvbnNvbGUubG9nKCdbRGVmYXVsdCBTY2VuZV0nKX0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgYXR0cnMgPSBbXSkge1xuICAgICAgICByb290LnNjZW5lc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByb290LmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiByb290LnNjZW5lc1tuYW1lXTtcbiAgICB9XG5cbiAgICByb290LmdldEN1cnJlbnRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW3Jvb3QuY3VycmVudF07XG4gICAgfVxuXG4gICAgcm9vdC5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm9vdC5zY2VuZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSByb290LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5ydW4obGVzdCk7XG4gICAgfTtcblxuICAgIHJvb3QucnVuID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHtcbiAgICAgICAgcm9vdC5jdXJyZW50ID0ga2V5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByb290LmdldEN1cnJlbnRTY2VuZSgpO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHNjZW5lLmNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMgPSBBcnJheS5pc0FycmF5KGF0dHJzKSA/IGF0dHJzIDogW2F0dHJzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHJvb3QsIGF0dHJzID8gYXR0cnMgOiBzY2VuZS5hdHRycyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgcm9vdC5zaG93ID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHsgcm9vdC5ydW4oa2V5LCBhdHRycykgfTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHsgcm9vdC5ydW4oa2V5LCBhdHRycykgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5hZGQoa2V5LCBwcm9wZXJ0aWVzW2tleV0sIEFycmF5LmlzQXJyYXkoY29tbXVuaXR5X2FyZ3VtZW50cykgPyBjb21tdW5pdHlfYXJndW1lbnRzIDogW2NvbW11bml0eV9hcmd1bWVudHNdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cbi8qKlxuICpcbiAgICBjb25zdCBzdGVwc0F0dGFja0hlcm8gPSBTdGVwc1NjZW5lKHtcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIHN0ZXBzOiBbXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXJ0X2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGVyb19hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrX2FuaW1hdGlvbicsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW5kX2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgc3RlcHNBdHRhY2tIZXJvLmVhY2hTdGVwcyhmdW5jdGlvbiAoY2JPYmplY3QsIGluZGV4KSB7fSk7XG4gICAgc3RlcHNBdHRhY2tIZXJvLm5leHQoKTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5nb3RvKCdoZXJvX2F0dGFja19hbmltYXRpb24nKS5uZXh0KCk7XG4gICAgc3RlcHNBdHRhY2tIZXJvLnN0b3AoKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7YW55fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0ZXBzU2NlbmUgPSBmdW5jdGlvbiAoY29uZmlnID0ge3N0ZXBzOiBbXX0pIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBpdGVyYXRpb246IDAsXG4gICAgICAgIGxvb3A6IGNvbmZpZy5sb29wIHx8IGZhbHNlLFxuICAgICAgICBzdGVwX2l0ZXJhdGlvbjogMCxcbiAgICAgICAgc3RlcF9zdG9wOiBmYWxzZSxcbiAgICAgICAgc3RlcF9jYWxsYmFja19lYWNoOiBudWxsLFxuICAgICAgICBzdGVwX2NhbGxiYWNrczogY29uZmlnLnN0ZXBzIHx8IHt9LFxuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIHJvb3QucGxheSgpO1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBwbGF5KCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5KG1zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrLmNhbGwocm9vdCk7IH0sIG1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ290byhuYW1lKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tzLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVhY2hTdGVwcyhjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2ggPSBjYWxsYmFjaztcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKHJvb3Quc3RlcF9zdG9wKSByZXR1cm4gcm9vdDtcblxuICAgICAgICAgICAgaWYgKHJvb3Quc3RlcF9pdGVyYXRpb24gPiByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoIXJvb3QubG9vcClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja09iamVjdCA9IHJvb3Quc3RlcF9jYWxsYmFja3Nbcm9vdC5zdGVwX2l0ZXJhdGlvbl07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2ggPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2guY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgY3VycmVudENhbGxiYWNrT2JqZWN0LmNhbGxiYWNrLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIHJvb3QuaXRlcmF0aW9uKytcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24rK1xuXG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcHNTY2VuZTtcbiIsIlxuY29uc3QgVGltZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSkge1xuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMuaXRlcmF0b3IgPSAwO1xufTtcblxuXG5UaW1lci5zZXRUaW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFyVGltZW91dChpZClcbn07XG5UaW1lci5jbGVhckludGVydmFsID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpZClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSBcIi4uL3N0YXRpYy9pc051bWJlclwiO1xuLypcblxudGhpcy50cmFuc2Zvcm0gPSBUcmFuc2Zvcm0odGhpcy5lbGVtZW50KTtcbnRoaXMudHJhbnNmb3JtLm1ldGhvZCgncm90YXRlJywgWyc0NWRlZyddKTtcbnRoaXMudHJhbnNmb3JtLnVwZGF0ZSgpO1xudGhpcy50cmFuc2Zvcm0ucmVzZWFyY2goKTtcbnRoaXMudHJhbnNmb3JtLmZ1bmN0aW9uUGFyYW1ldGVycygnbWF0cml4JykgICAgICAgICAvLyBbMSwgMCwgMCwgMSwgMCwgMF06IGFycmF5XG50aGlzLnRyYW5zZm9ybS5mdW5jdGlvblBhcmFtZXRlcnMoJ3JvdGF0ZScpICAgICAgICAgLy8gW1wiNDVkZWdcIl06IHN0cmluZ1xudGhpcy50cmFuc2Zvcm0uZnVuY3Rpb25QYXJhbWV0ZXJzKCdyb3RhdGUnLCB0cnVlKSAgIC8vIDQ1OiBpbnRcblxuLy8gLi4uXG5UcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFtcbiAgICAncm90YXRlKCcgKyAxMCArJ2RlZyknLFxuICAgICdzY2FsZSgwLjYsIDAuNiknLFxuICAgICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknLFxuXSk7XG5UcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFsncm90YXRlKCcgKyAxMCArJ2RlZyknXSlcbmNvbnN0IHRycyA9IFRyYW5zZm9ybSh0aGlzLmVsZW1lbnQpO1xuXG4vLyB3aXRob3V0IG9mIHRoZSBUcmFuc2Zvcm1cbnRoaXMuc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgMTAgKydkZWcpIHNjYWxlKDAuNiwgMC42KSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG59KTtcblxuKi9cbmNvbnN0IFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChlbGVtZW50LCBwYXJhbXMpXG57XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhbnNmb3JtX29iajoge30sXG4gICAgICAgIHRyYW5zZm9ybV9hcnI6IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcpJykuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoICksXG4gICAgICAgIHRyYW5zZm9ybV9zdHJpbmc6ICcnLFxuXG4gICAgICAgIHVwZGF0ZSgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nID0gJyc7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvb3QudHJhbnNmb3JtX29iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nICs9IGtleSArICcoJyArIHJvb3QudHJhbnNmb3JtX29ialtrZXldLmpvaW4oJywgJykgKyAnKSAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nO1xuICAgICAgICAgICAgcm9vdC5yZXNlYXJjaCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZChtZXRob2QsIHByb3BlcnRpZXMsIG11bHRpcGx5ID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXTtcblxuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBseSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dCA9IHZhbHVlLm1hdGNoKC9bYS16XSsvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlKSArIHBhcnNlSW50KHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IG51bSArIGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gdmFsdWUgKyByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2V0cyBwYXJhbWV0ZXJzIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2VhcmNoKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIgPSBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApO1xuXG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbSA9IHJvb3QudHJhbnNmb3JtX2FycltpXSA9IHJvb3QudHJhbnNmb3JtX2FycltpXS50cmltKCkgICsgJyknO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWQgPSBwYXJhbS5tYXRjaCgvW1xcd1xcLlxcLV0rL2lnKTtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWF0Y2hlZFswXV0gPSBtYXRjaGVkLnNsaWNlKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZnVuY3Rpb25QYXJhbWV0ZXJzKG5hbWUsIEZJUlNUX0lURU1fVE9fSU5URUdFUiA9IGZhbHNlKXtcbiAgICAgICAgICAgIGlmIChGSVJTVF9JVEVNX1RPX0lOVEVHRVJcbiAgICAgICAgICAgICAgICAmJiBBcnJheS5pc0FycmF5KHJvb3QudHJhbnNmb3JtX29ialtuYW1lXSlcbiAgICAgICAgICAgICAgICAmJiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV0ubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByb290LnRyYW5zZm9ybV9vYmpbbmFtZV1bMF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTnVtYmVyKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgOiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LnJlc2VhcmNoKCk7XG5cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByb290Lm1ldGhvZChrZXksIHBhcmFtc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvb3QudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cblRyYW5zZm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlcyl7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgocHJvcCkgPT4geyBwcm9wcy5wdXNoKHByb3ApIH0pO1xuICAgICAgICBzdHlsaXplcihlbGVtZW50LCB7dHJhbnNmb3JtOiBwcm9wcy5qb2luKCcgJyl9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL3N0YXRpYy9nZXRXaW5kb3dcIjtcblxuaW1wb3J0IENsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9DbGlwLmpzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IE1vdmVDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvTW92ZUNsaXAuanNcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1NjZW5lLmpzXCI7XG5pbXBvcnQgU3RlcHNTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1N0ZXBzU2NlbmUuanNcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi9jb21wb25lbnRzL1RpbWVyLmpzXCI7XG5pbXBvcnQgUm94eUxpc3RlbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvUm94eUxpc3RlbmVyLmpzXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9jb21wb25lbnRzL1JveHkuanNcIjtcbmltcG9ydCBTdGF0aWMgZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IEFuaW1hdGlvbkZyYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBNYXRyaXggZnJvbSBcIi4vY29tcG9uZW50cy9NYXRyaXhcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9jb21wb25lbnRzL1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvRXZlbnRNYW5hZ2VyXCI7XG5pbXBvcnQgRnJhbWVzIGZyb20gXCIuL2NvbXBvbmVudHMvRnJhbWVzXCI7XG5cbmNvbnN0IEFuaW1hdGUgPSB7XG4gICAgQ2xpcCxcbiAgICBDb21wb25lbnQsXG4gICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgTW92ZUNsaXAsXG4gICAgU2NlbmUsXG4gICAgU3RlcHNTY2VuZSxcbiAgICBUaW1lcixcbiAgICBSb3h5TGlzdGVuZXIsXG4gICAgUm94eSxcbiAgICBBbmltYXRpb25GcmFtZSxcbiAgICBMb2FkZXIsXG4gICAgTWF0cml4LFxuICAgIFBvaW50LFxuICAgIFJlY3RhbmdsZSxcbiAgICBUcmFuc2Zvcm0sXG4gICAgRXZlbnRNYW5hZ2VyLFxuICAgIEZyYW1lcyxcbn07XG5cbmNvbnN0IFJBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFX0FTX1JBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOICogMzYwO1xuY29uc3QgUEkgPSAzLjE0MTU5MjY1MzU5O1xuY29uc3QgUkFEX1RPX0RFR1JFRVMgPSAzLjE0MTU5MjY1MzU5O1xuXG5BbmltYXRlLlJBRElBTiA9IFJBRElBTjtcbkFuaW1hdGUuREVHUkVFX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU47XG5BbmltYXRlLkRFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFXzM2MF9BU19SQURJQU47XG5BbmltYXRlLlBJID0gUEk7XG5BbmltYXRlLlJBRF9UT19ERUdSRUVTID0gUkFEX1RPX0RFR1JFRVM7XG5cbkFuaW1hdGUuU3RhdGljID1cbiAgICBBbmltYXRlLlV0aWwgPVxuICAgICAgICBTdGF0aWM7XG5cbi8vIGlmIChnZXRXaW5kb3coKSkgZ2V0V2luZG93KCkuQW5pbWF0ZSA9IEFuaW1hdGU7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIHRvXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gY2xvbmUoZnJvbSwgdG8pXG57XG4gICAgaWYgKGZyb20gPT09IG51bGwgfHwgdHlwZW9mIGZyb20gIT09IFwib2JqZWN0XCIpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yICE9PSBPYmplY3QgJiYgZnJvbS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yID09PSBEYXRlIHx8IGZyb20uY29uc3RydWN0b3IgPT09IFJlZ0V4cCB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBGdW5jdGlvbiB8fFxuICAgICAgICBmcm9tLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBmcm9tLmNvbnN0cnVjdG9yKGZyb20pO1xuICAgIH1cblxuICAgIHRvID0gdG8gfHwgbmV3IGZyb20uY29uc3RydWN0b3IoKTtcblxuICAgIGZvciAobmFtZSBpbiBmcm9tKVxuICAgIHtcbiAgICAgICAgdG9bbmFtZV0gPSB0eXBlb2YgdG9bbmFtZV0gPT0gXCJ1bmRlZmluZWRcIiA/IGNsb25lKGZyb21bbmFtZV0sIG51bGwpIDogdG9bbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgaW5zdGFuY2UpXG57XG4gICAgaWYgKGlzTm9kZShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuc2xpY2UoKTtcblxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gc3JjLmJpbmQoaW5zdGFuY2UgfHwge30pO1xuXG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSkge1xuICAgICAgICAvLyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3JjKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gc3JjW2tleV07XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGNvcHkodmFsdWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gc3JjIDoge30pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weTtcbiIsIi8qXG5cbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1KTtcbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1LCB0cnVlKTtcbmNvbnN0IGFycjEgPSBjcmVhdGVBcnJheSg1LCAxKTtcbmNvbnN0IGFycjIgPSBjcmVhdGVBcnJheSg1LCAnaGVsbG8gd29ybGQnKTtcbmNvbnN0IGFycjMgPSBjcmVhdGVBcnJheSg1LCBbMTAwLDIwMCwzMDBdKTtcbmNvbnN0IGFycjQgPSBjcmVhdGVBcnJheSg1LCB7YTonQScsYjonQicsYzonQyd9KTtcblxuKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIG51bVxuICogQHBhcmFtIGZpbGxcbiAqIEByZXR1cm5zIHthbnlbXX1cbiAqL1xuY29uc3QgY3JlYXRlQXJyYXkgPSBmdW5jdGlvbiAobnVtLCBmaWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZmlsbCA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShudW0pLmZpbGwoZmlsbCk7XG4gICAgfVxuXG4gICAgYXJyID0gbmV3IEFycmF5KG51bSkuZmlsbCgwKTtcbiAgICBhcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCByID0gZmlsbC5jYWxsKGZpbGwsIGksIGkpO1xuICAgICAgICAgICAgYXJyW2ldID0gdHlwZW9mIHIgPT09ICdib29sZWFuJyB8fCByID8gciA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGwpKSBhcnJbaV0gPSBmaWxsW2ldID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBmaWxsW2ldIDtcbiAgICAgICAgZWxzZSBhcnJbaV0gPSBmaWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXJyYXk7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBhdHRycywgaW5uZXIpIHtcbiAgICBjb25zdFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICBpc19hdHRyID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihzcmMsICdvYmplY3QnKSAmJiAhaXNOb2RlKHNyYylcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2h0bWwgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2NoaWxkID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2h0bWwoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKVxuICAgICAgICAgICAgICAgIGluc2VydF9jaGlsZChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgaW5zZXJ0KHNyY1tpXSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNfYXR0cihhdHRycykpIHtcbiAgICAgICAgaW5uZXIgPSBhdHRycztcbiAgICAgICAgYXR0cnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpXG4gICAgICAgIGZvciAobGV0IGsgaW4gYXR0cnMpXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7XG5cbiAgICBpZiAoaW5uZXIpXG4gICAgICAgIGluc2VydChpbm5lcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5cbmNvbnN0IGNyZWF0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKGFwcGVuZCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgaWYgKGlzTm9kZShhcHBlbmQpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChhcHBlbmQpO1xuXG4gICAgaWYgKHR5cGVPZihhcHBlbmQsICdzdHJpbmcnKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3RyMm5vZGUoYXBwZW5kKSk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuXG5jb25zdCBjc3MgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFwcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHt9O1xuICAgICAgICBwcm9wW3Byb3BlcnRpZXNdID0gYXJndW1lbnRzWzJdO1xuICAgICAgICByZXR1cm4gY3NzKHNlbGVjdG9yLCBwcm9wKTtcbiAgICB9XG5cbiAgICBsZXQgaSwgaywgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICB0eXBlU2VsZWN0b3IgPSB0eXBlT2Yoc2VsZWN0b3IpLFxuICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGVPZihwcm9wZXJ0aWVzKSxcbiAgICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaSwgcDEgPSBzdHIuc3BsaXQoJzsnKSwgcDIsIHBuLCBpeCwgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcDIgPSBwMVtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHBuID0gcDJbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGl4ID0gcG4uaW5kZXhPZignLScpO1xuICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBuID0gcG4uc3Vic3RyaW5nKDAsIGl4KSArIHBuW2l4ICsgMV0udG9VcHBlckNhc2UoKSArIHBuLnN1YnN0cmluZyhpeCArIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwMi5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIG9bcG5dID0gcDJbMV0udHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuXG4gICAgc3dpdGNoICh0eXBlU2VsZWN0b3IpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcblxuICAgICAgICBpZiAodHlwZVByb3BlcnRpZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHBhcnNlKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGZvciAoaSBpbiBlbGVtZW50cylcbiAgICAgICAgICAgIGZvciAoayBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlW2tdID0gcHJvcGVydGllc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIlxuY29uc3QgZGVjb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBwYWlycyA9IChxdWVyeVswXSA9PT0gJz8nID8gcXVlcnkuc3Vic3RyKDEpIDogcXVlcnkpLnNwbGl0KCcmJyk7XG4gICAgcGFpcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0gfHwgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZDtcbiIsIlxuY29uc3QgZGVmaW5lZEluID0gZnVuY3Rpb24gKHN0YWNrLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdGFjayAmJiBzdGFja1t2YWx1ZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWRJbjtcbiIsImltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICBlbHNlXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpXG4gICAgICAgIH0sIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUxvYWRlZDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG4vKmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRtcCkge1xuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwobGlzdC5jaGlsZE5vZGVzKSwgY2FsbGJhY2ssIHRtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsqL1xuXG5jb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCBpbnN0YW5jZSA9IHt9KSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlT2YobGlzdCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoaSwgdiwgYSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgaSwgdiwgYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goW2xpc3RdLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChrZXkpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGtleSwgbGlzdFtrZXldLCBsaXN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGxpc3Quc3BsaXQoXCJcIiksIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IChuZXcgQXJyYXkobGlzdCkpLmZpbGwoMCk7XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChhcnIsIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiXG5jb25zdCBlbmNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0ICs9ICgocmVzdWx0Lmxlbmd0aCkgPyAnJicgOiAnPycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZXhpc3RzID0gZnVuY3Rpb24gKHNyYykge1xuICAgIHJldHVybiBzcmMgIT09IHVuZGVmaW5lZCAmJiBzcmMgIT09IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGlzdHM7XG4iLCJcblxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgZm9yIChsZXQgcGFyYW0gaW4gc291cmNlKVxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHBhcmFtKSlcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3BhcmFtXSA9IHNvdXJjZVtwYXJhbV07XG5cbiAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGRlc3RpbmF0aW9uO1xuICAgIH1cblxuICAgIF9fLnByb3RvdHlwZSA9IHNvdXJjZS5wcm90b3R5cGU7XG4gICAgZGVzdGluYXRpb24ucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0ZW5kUmVjdXJzaXZlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBsZXQgcHJvcGVydHk7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgICAgICAgIGV4dGVuZFJlY3Vyc2l2ZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZDtcbiIsImltcG9ydCBmaW5kT2JqZWN0cyBmcm9tICcuL2ZpbmRPYmplY3RzJztcblxuXG5jb25zdCBmaW5kT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgY29uc3QgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0O1xuIiwiXG5cbmNvbnN0IGZpbmRPYmplY3RzID0gZnVuY3Rpb24gKGxpc3QsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXTtcbiAgICBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgbGlzdCA9IE9iamVjdC52YWx1ZXMobGlzdCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAobGlzdFtpXSAmJiBsaXN0W2ldW2F0dHJdICE9PSB1bmRlZmluZWQgJiYgbGlzdFtpXVthdHRyXSA9PT0gYXR0clZhbHVlKVxuICAgICAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuXG4gICAgcmV0dXJuIHRtcCA7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZHMgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wIDogZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3RzO1xuIiwiXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vZGVmaW5lZFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuL25vZGUyc3RyXCI7XG5cblxuLyoqXG4gKiBGb3JtYXR0aW5nIG9mIHN0cmluZywgb3IgbWF5YmUgdGVtcGxhdGUgYnVpbGRlclxuICpcbiAqIEV4YW1wbGVzOlxuICogLmZvcm1hdChcIkhlbGxvIHswfSwgeW91ciBjb2RlIGlzIHsxfSFcIiwgWydKYWRlJywgJ1ByZWZlY3QnXSk7XG4gKiAuZm9ybWF0KFwiSGVsbG8ge25hbWV9LCB5b3VyIGNvZGUgaXMge21lYW59IVwiLCB7bmFtZTonSmFkZScsIG1lYW46ICdQcmVmZWN0J30pO1xuICpcbiAqIEBwYXJhbSBzdHJpbmcgICAgU3RyaW5nXG4gKiBAcGFyYW0gbGlzdCAgQXJyYXl8T2JqZWN0XG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuY29uc3QgZm9ybWF0ID0gZnVuY3Rpb24gKHN0cmluZywgbGlzdCkge1xuICAgIGxldCByZWc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFxkKyl9L2cpO1xuICAgIGVsc2UgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09ICdvYmplY3QnKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcdyspfS9nKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyKSB7XG4gICAgICAgIGlmIChkZWZpbmVkKGxpc3RbbnVtYmVyXSkgJiYgaXNOb2RlKGxpc3RbbnVtYmVyXSkpXG4gICAgICAgICAgICBsaXN0W251bWJlcl0gPSBub2RlMnN0cihsaXN0W251bWJlcl0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgbGlzdFtudW1iZXJdICE9PSB1bmRlZmluZWQgPyBsaXN0W251bWJlcl0gOiBtYXRjaDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsIlxuY29uc3QgZ2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RvY3VtZW50IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiXG5jb25zdCBnZXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignd2luZG93IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2luZG93O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuLi9zdGF0aWMvZ2V0RG9jdW1lbnRcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL3N0YXRpYy9nZXRXaW5kb3dcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvc3RyMmZyYWdtZW50XCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgZW5jb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9lbmNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGRlY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZGVjb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vc3RhdGljL2h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRcIjtcbmltcG9ydCBkZWZpbmVkSW4gZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkSW5cIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuLi9zdGF0aWMvZWFjaFwiO1xuaW1wb3J0IGV4dGVuZCwge1xuICAgIGV4dGVuZFJlY3Vyc2l2ZVxufSAgZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi9zdGF0aWMvaXNFbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0XCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbG9hZEpTU3luYyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1N5bmNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgbnVtYmVyMnN0cmluZyBmcm9tIFwiLi4vc3RhdGljL251bWJlcjJzdHJpbmdcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmFuZG9tLCB7XG4gICAgcmFuZG9tQ29sb3IsXG4gICAgcmFuZG9tSXRlbSxcbiAgICByYW5kb21OdW1iZXIsXG4gICAgcmFuZG9tU3RyaW5nLFxuICAgIHJhbmRvbUh1bWFuaXplU3RyaW5nXG59IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBjcmVhdGVBcnJheSBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUFycmF5XCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuaW1wb3J0IGV4aXN0cyBmcm9tIFwiLi4vc3RhdGljL2V4aXN0c1wiO1xuaW1wb3J0IGlzRGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2lzRGVmaW5lZFwiO1xuaW1wb3J0IGxvYWRCbG9iZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRCbG9iZmlsZVwiO1xuaW1wb3J0IGxvYWRKU09OIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTT05cIjtcbmltcG9ydCBsb2FkVGV4dGZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkVGV4dGZpbGVcIjtcbmltcG9ydCB0b0hUTUwgZnJvbSBcIi4uL3N0YXRpYy90b0hUTUxcIjtcbmltcG9ydCB0b1hNTCBmcm9tIFwiLi4vc3RhdGljL3RvWE1MXCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHVuaXFBcnJheSBmcm9tIFwiLi4vc3RhdGljL3VuaXFBcnJheVwiO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gXCIuLi9zdGF0aWMvaXNOdW1iZXJcIjtcblxuY29uc3QgU3RhdGljID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGdldERvY3VtZW50LFxuICAgIGdldFdpbmRvdyxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBleGlzdHMsXG4gICAgaXNEZWZpbmVkLFxuICAgIGxvYWRCbG9iZmlsZSxcbiAgICBsb2FkSlNPTixcbiAgICBsb2FkVGV4dGZpbGUsXG4gICAgdG9IVE1MLFxuICAgIHRvWE1MLFxuICAgIHN0eWxpemVyLFxuICAgIHVuaXFBcnJheSxcbiAgICBpc051bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCB0cnVlLCB0byk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ3N0cmluZycpKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0RlZmluZWQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3JjKVxuICAgICAgICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzcmMgPT09IFwiXCIgfHwgc3JjID09PSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHNyYyA9PT0gMCB8fCBzcmMgPT09IG51bGwgfHwgc3JjID09PSB1bmRlZmluZWQgfHwgc3JjID09PSBmYWxzZSB8fCBpc05hTihzcmMpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIiwiLy8gaW1wb3J0IERPTVBhcnNlciBmcm9tICdET01QYXJzZXInO1xuXG5jb25zdCBpc0hUTUxTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHRydWVzdCA9IGZhbHNlKSB7XG5cbiAgICBpZiAodHJ1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudHJpbSgpLnN1YnN0cmluZygwLCAxKSA9PT0gJzwnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNIVE1MU3RyaW5nO1xuIiwiXG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XG4iLCJcbmNvbnN0IGlzTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIE51bWJlcikgJiYgIWlzTmFOKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGlzTnVtYmVyO1xuIiwiXG5jb25zdCBpc1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XG4iLCJcbmNvbnN0IGxvYWRCbG9iZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxuICAgICAgICAudGhlbihibG9iID0+IG9ubG9hZChibG9iKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCbG9iZmlsZTsiLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRDU1MgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkQ1NTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgbGluay5ocmVmID0gKHNyYy5zdWJzdHIoLTQpID09PSAnLmNzcycpID8gc3JjIDogc3JjICsgJy5jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgbGluay5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgcmV0dXJuIGxpbmtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ1NTO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudCgpO1xuY29uc3QgbG9hZEpTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZEpTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50RWxlbWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgaWQgPSAncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIHNjcmlwdC5zcmMgPSAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2N1bWVudEVsZW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICByZXR1cm4gc2NyaXB0XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTOyIsIlxuY29uc3QgbG9hZEpTT04gPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBvbmxvYWQoanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNPTjsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IGxvYWRUZXh0ZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbih0ZXh0ID0+IG9ubG9hZCh0ZXh0KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUZXh0ZmlsZTsiLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBjb25zdCBkYXRhID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIExFVFRFUl9DT05TT05BTlQsIExFVFRFUl9WT1dFTCwgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNiwgd2l0aE51bWJlcnMgPSBmYWxzZSkge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSB3aXRoTnVtYmVyc1xuICAgICAgICA/IEFCQyArIE5VTUJFUlMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpXG4gICAgICAgIDogQUJDLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBmb3IgKGkgPSBzaXplOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHN0cmluZyArPSBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUh1bWFuaXplU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGNvbnNvbmFudCA9ICBMRVRURVJfQ09OU09OQU5ULnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbCA9ICBMRVRURVJfVk9XRUwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsRmlyc3QgPSAoTWF0aC5yYW5kb20oKSAqIDEwKSA+IDU7XG4gICAgZm9yIChpID0gc2l6ZSAvIDIgKyAxOyBpID4gMDsgaSAtLSkge1xuICAgICAgICBsZXQgczEgPSBjb25zb25hbnRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uc29uYW50Lmxlbmd0aCldO1xuICAgICAgICBsZXQgczIgPSB2b3dlbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2b3dlbC5sZW5ndGgpXTtcbiAgICAgICAgc3RyaW5nICs9IHZvd2VsRmlyc3QgPyBzMSArIHMyIDogczIgKyBzMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzaXplKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHJhbmRvbSBpdGVtIGZyb20gYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tSXRlbSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyW3JhbmRvbSgwLCBhcnIubGVuZ3RoLTEpXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tO1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uICh0bykge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBsb2MuaHJlZiA9IHRvIHx8IGRvYy5ocmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkaXJlY3Q7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuLyoqXG4gKiBzZWFyY2goICd1bCA+IGxpJywgICdkYXRhLWxpbmsnLCBOb2RlRWxlbWVudCk7XG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gYXR0clxuICogQHBhcmFtIGZyb21cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKGZyb20uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgIHF1ZXJ5RWxlbWVudHMucHVzaChmcm9tKVxuICAgIH1cblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcbmNvbnN0IHN0cjJmcmFnbWVudCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJmcmFnbWVudDtcbiIsImltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4vc3RyMmZyYWdtZW50XCI7XG5cbmNvbnN0IHN0cjJub2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGZyYWdtZW50ID0gc3RyMmZyYWdtZW50KHN0cmluZyk7XG5cbiAgICBzd2l0Y2ggKGZyYWdtZW50LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZyYWdtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJcbmNvbnN0IHN0eWxpemVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpemVyO1xuIiwiLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5jb25zdCB0b0hUTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvSFRNTDtcbiIsIlxuY29uc3QgdG9PYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIDoge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvT2JqZWN0O1xuIiwiXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmNvbnN0IHRvWE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC94bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5kb2N1bWVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9YTUw7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsIlxuY29uc3QgdW5pcUFycmF5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgc2VsZikge1xuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXFBcnJheTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==