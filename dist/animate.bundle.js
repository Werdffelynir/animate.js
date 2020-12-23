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

        comp.clone = function (id) {
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

        comp.updateTemplateElements = function () {
            if ((0, _isNode2.default)(comp.template) && comp.templateElementsEnabled === true) {
                comp.elements = {
                    func: (0, _search2.default)('[data-func]', 'data-func', comp.template),
                    action: (0, _search2.default)('[data-action]', 'data-action', comp.template),
                    node: (0, _search2.default)('[data-node]', 'data-node', comp.template),
                    on: (0, _search2.default)('[data-on]', 'data-on', comp.template)
                };
            }
        };

        if (!comp.completed) {
            comp.updateTemplateElements();
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
        templateElementsEnabled: true,
        components: {},
        children: [],
        parentComponent: {},
        elements: {}
    }, config);
};

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

    var default_parameters = {
        fps: false,
        paused: false
    };

    var root = {
        now: 0,
        elapsed: 0,
        then: 0,
        fpsInterval: 0,
        frameCount: 0,
        fps: 30,
        startpaly: 0,
        progress: 0,
        paused: false
    };

    Object.keys(default_parameters).forEach(function (key) {
        root[key] = _typeof(parameters[key]) !== undefined ? parameters[key] : default_parameters[key];
    });

    var animation = function animation(timestamp) {
        if (!root.startpaly) root.startpaly = timestamp;
        root.progress = timestamp - root.startpaly;

        requestAnimationFrame(animation);

        if (!root.fps && root.fps > 0) {
            root.now = Date.now();
            root.elapsed = root.now - root.then;
            if (root.elapsed > root.fpsInterval) {
                root.then = root.now - root.elapsed % root.fpsInterval;

                if (root.callback && !root.paused) {
                    root.callback.call(root, root.progress);
                }
            }
        } else {
            if (root.callback && !root.paused) {
                root.callback.call(root, root.progress);
            }
        }
    };

    root.pause = function () {
        root.paused = !root.paused;
    };

    root.start = function (callback) {
        if (callback) {
            root.callback = callback;
        }

        if (root.fps > 0) {
            root.fpsInterval = 1000 / root.fps;
            root.then = Date.now();
            root.startTime = root.then;
        }
        root.requestId = window.requestAnimationFrame(animation);
    };

    root.cancel = function () {
        window.cancelAnimationFrame(root.requestId);
    };

    return root;
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

    clip.element.setAttribute('data-miveclip', config.id || 'miveclip');

    var root = {
        // clip: clip,
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

        var cloneProperty = (0, _toObject2.default)(root);
        cloneProperty.element = root.element.cloneNode(root);
        if (append) {
            root.element.parentNode.appendChild(cloneProperty.element);
        }
        return MoveClip(cloneProperty);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZyYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTWF0cml4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vdmVDbGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hYmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZW5jb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0hUTUxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEJsb2JmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZENTUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKUy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU09OLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTU3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRUZXh0ZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL21lcmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbm9kZTJzdHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9udW1iZXIyc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5QWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIyZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIybm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0eWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9IVE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b1hNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3R5cGVPZlN0cmljdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VuaXFBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3VyaS5qcyJdLCJuYW1lcyI6WyJBbmltYXRpb25GcmFtZSIsInJvb3QiLCJyZXF1ZXN0SWQiLCJzdGFydHBhbHkiLCJwYXVzZWQiLCJjYWxsYmFjayIsImRlbGF5IiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsInN0ZXAiLCJ0aW1lc3RhbXAiLCJjYWxsIiwiY2FuY2VsIiwid2luZG93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGF1c2UiLCJzdGFydCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiQ2xpcCIsImVsZW1lbnQiLCJOb2RlIiwicGFyZW50IiwicGFyZW50Tm9kZSIsIngiLCJ5Iiwic2V0QXR0cmlidXRlIiwiaWQiLCJtb3ZlVG8iLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb3B5VG8iLCJvbiIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb25lIiwic3R5bGUiLCJvYmplY3QiLCJpbmplY3QiLCJlbGVtIiwiYXBwZW5kIiwidGV4dENvbnRlbnQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiZSIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiVHlwZUVycm9yIiwiY2xlYXIiLCJDb21wb25lbnQiLCJjb25maWciLCJsaXN0IiwicmFuZG9tTmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJjb21wIiwiY3JlYXRlIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbXBvbmVudENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2xvbmVkIiwidGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJiZWZvcmUiLCJpbml0aWFsaXplZCIsIm1ldGhvZHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJrZXlzIiwia2V5IiwiYmluZCIsImhhc093blByb3BlcnR5IiwiaW5pdCIsImRhdGEiLCJwYXJlbnRDb21wb25lbnQiLCJwdXNoIiwidXBkYXRlVGVtcGxhdGVFbGVtZW50cyIsInRlbXBsYXRlRWxlbWVudHNFbmFibGVkIiwiZWxlbWVudHMiLCJmdW5jIiwiYWN0aW9uIiwibm9kZSIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwiY29tcGxldGUiLCJwcm9wcyIsIm92ZXJyaWRlIiwiRXZlbnRNYW5hZ2VyIiwic3VwZXIiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwidmVyc2lvbiIsImV2ZW50c1R5cGUiLCJhZGRFdmVudCIsIm5hbWUiLCJkZXRhaWxzIiwiQ3VzdG9tRXZlbnQiLCJkZXRhaWwiLCJyZW1vdmVFdmVudCIsInR5cGUiLCJsaXN0ZW5lciIsInVzZUNhcHR1cmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hFdmVudCIsIkZyYW1lcyIsInBhcmFtZXRlcnMiLCJkZWZhdWx0X3BhcmFtZXRlcnMiLCJmcHMiLCJub3ciLCJlbGFwc2VkIiwidGhlbiIsImZwc0ludGVydmFsIiwiZnJhbWVDb3VudCIsInVuZGVmaW5lZCIsImFuaW1hdGlvbiIsIkRhdGUiLCJzdGFydFRpbWUiLCJLZXlib2FyZEV2ZW50TWFuYWdlciIsInN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2tzTGlzdCIsImFkZFN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2siLCJtYXAiLCJrZXlDb2RlIiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsInNldHVwTGlzdGVuZXJzIiwiYWRkIiwicm0iLCJlYWNoIiwid2l0aENvbmRpdGlvbktleSIsInByZXNzIiwidXAiLCJkb3duIiwiTG9hZGVyIiwianNvbiIsImpzb25zIiwiamF2YXNjcmlwdCIsImltYWdlcyIsImF1ZGlvcyIsInZpZGVvcyIsInZpZGVvIiwic3JjIiwib25lcnJvciIsImZldGNoIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwic3JjcyIsIm9iaiIsIml0ZW0iLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsInNjcmlwdHMiLCJpdGVyYXRvciIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJzdWJzdHIiLCJvbmxvYWQiLCJoZWFkIiwiaW1ncyIsImltZyIsImF1ZGlvIiwicHJlbG9hZCIsIk1hdHJpeCIsIm0xMSIsIm0xMiIsIm0yMSIsIm0yMiIsImd4IiwiZ3kiLCJNb3ZlQ2xpcCIsImNsaXAiLCJFcnJvciIsInZhbHVlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xvbmVQcm9wZXJ0eSIsIlBvaW50IiwiUmVjdGFuZ2xlIiwiUm94eSIsInBheWxvYWQiLCJwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MiLCJkZWZhdWx0IiwicHJveHkiLCJQcm94eSIsImdldCIsInByb3AiLCJzZXQiLCJkaXNwYXRjaCIsInJlc3VsdCIsImZpbGwiLCJvYnNlcnZlIiwidG8iLCJnZXRQcm94eSIsIlJveHlMaXN0ZW5lciIsImFjdGlvbnMiLCJfX2FjdGlvbl9fIiwiYWN0aW9uc05hbWVzIiwiZXZlbnROYW1lIiwiaW5kZXgiLCJyeCIsImV2ZW50Q3Vyc29yIiwiU2NlbmUiLCJwcm9wZXJ0aWVzIiwiY29tbXVuaXR5X2FyZ3VtZW50cyIsImN1cnJlbnQiLCJzY2VuZXMiLCJjb25zb2xlIiwibG9nIiwiYXR0cnMiLCJnZXRDdXJyZW50U2NlbmUiLCJuZXh0IiwibGVzdCIsImkiLCJydW4iLCJzY2VuZSIsImFwcGx5Iiwic2hvdyIsImNvbnN0cnVjdG9yIiwiU3RlcHNTY2VuZSIsInN0ZXBzIiwiaXRlcmF0aW9uIiwibG9vcCIsInN0ZXBfaXRlcmF0aW9uIiwic3RlcF9zdG9wIiwic3RlcF9jYWxsYmFja19lYWNoIiwic3RlcF9jYWxsYmFja3MiLCJwbGF5Iiwic3RvcCIsImVuZCIsIm1zIiwic2V0VGltZW91dCIsImdvdG8iLCJlYWNoU3RlcHMiLCJjdXJyZW50Q2FsbGJhY2tPYmplY3QiLCJUaW1lciIsInJlcGVhdCIsInRoaXNJbnN0YW5jZSIsInRoaXNJbnN0IiwiaXNOYU4iLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJUcmFuc2Zvcm0iLCJwYXJhbXMiLCJ0cmFuc2Zvcm1fb2JqIiwidHJhbnNmb3JtX2FyciIsInRyYW5zZm9ybSIsInNwbGl0IiwiZmlsdGVyIiwidHJhbnNmb3JtX3N0cmluZyIsInVwZGF0ZSIsImpvaW4iLCJyZXNlYXJjaCIsIm1ldGhvZCIsIm11bHRpcGx5IiwiZXh0IiwibWF0Y2giLCJudW0iLCJwYXJhbSIsInRyaW0iLCJtYXRjaGVkIiwiZnVuY3Rpb25QYXJhbWV0ZXJzIiwiRklSU1RfSVRFTV9UT19JTlRFR0VSIiwiQW5pbWF0ZSIsIlJBRElBTiIsIkRFR1JFRV9BU19SQURJQU4iLCJERUdSRUVfMzYwX0FTX1JBRElBTiIsIlBJIiwiUkFEX1RPX0RFR1JFRVMiLCJTdGF0aWMiLCJVdGlsIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJhdHRyIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIlJlZ0V4cCIsIkZ1bmN0aW9uIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImNvcHkiLCJpbnN0YW5jZSIsImNyZWF0ZUFycmF5IiwiYXJyIiwiciIsInRhZyIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsImNyZWF0ZUZyYWdtZW50IiwiZnJhZ21lbnQiLCJjc3MiLCJzZWxlY3RvciIsInR5cGVTZWxlY3RvciIsInR5cGVQcm9wZXJ0aWVzIiwicGFyc2UiLCJzdHIiLCJwMSIsInAyIiwicG4iLCJpeCIsIm8iLCJpbmRleE9mIiwiZGVjb2RlR2V0UXVlcnkiLCJxdWVyeSIsInBhaXJzIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvbUxvYWRlZCIsImRvYyIsInF1ZXJ5U2VsZWN0b3IiLCJ2IiwiYSIsIk5vZGVMaXN0IiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbmNvZGVHZXRRdWVyeSIsImVuY29kZVVSSUNvbXBvbmVudCIsImV4aXN0cyIsImV4dGVuZCIsImRlc3RpbmF0aW9uIiwic291cmNlIiwiX18iLCJwcm90b3R5cGUiLCJleHRlbmRSZWN1cnNpdmUiLCJwcm9wZXJ0eSIsImZpbmRPYmplY3QiLCJhdHRyVmFsdWUiLCJ0bXAiLCJmaW5kT2JqZWN0cyIsImZpbmRzIiwiZm9ybWF0Iiwic3RyaW5nIiwicmVnIiwicmVwbGFjZSIsIm51bWJlciIsImdldERvY3VtZW50IiwiZ2V0TG9jYXRpb24iLCJsb2NhdGlvbiIsImdldFdpbmRvdyIsImh0dHBSZXF1ZXN0Iiwic2VuZERhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wdGlvbnMiLCJ1cmwiLCJocmVmIiwiaGVhZGVycyIsInVzZUVuY29kZSIsInVzZUZvcm1EYXRhIiwiYXN5bmMiLCJ1c2VyIiwicGFzc3dvcmQiLCJjb25jYXRlU3RyaW5nIiwiRm9ybURhdGEiLCJIVE1MRm9ybUVsZW1lbnQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZGVuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmRPcHRpb25zIiwic2VuZCIsInN0cjJub2RlIiwic3RyMmZyYWdtZW50Iiwibm9kZTJzdHIiLCJxdWVyeUFsbCIsInNlYXJjaCIsImlzRW1wdHkiLCJpc05vZGUiLCJsb2FkQ1NTIiwibG9hZEpTIiwibG9hZEpTU3luYyIsIm1lcmdlIiwibnVtYmVyMnN0cmluZyIsInBvc2l0aW9uIiwicG9zaXRpb25Nb3VzZSIsInJhbmRvbUNvbG9yIiwicmFuZG9tSXRlbSIsInJhbmRvbU51bWJlciIsInJhbmRvbVN0cmluZyIsInJhbmRvbUh1bWFuaXplU3RyaW5nIiwicmVkaXJlY3QiLCJ0eXBlT2YiLCJ0eXBlT2ZTdHJpY3QiLCJ1cmkiLCJ0b09iamVjdCIsImlzSFRNTFN0cmluZyIsImlzU3RyaW5nIiwiaXNEZWZpbmVkIiwibG9hZEJsb2JmaWxlIiwibG9hZEpTT04iLCJsb2FkVGV4dGZpbGUiLCJ0b0hUTUwiLCJ0b1hNTCIsInN0eWxpemVyIiwidW5pcUFycmF5IiwiaXNOdW1iZXIiLCJpbm5lckhUTUwiLCJ0cnVlc3QiLCJkaXYiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJlcnIiLCJibG9iIiwibGluayIsInJlbCIsImRvY3VtZW50RWxlbWVudCIsInRleHQiLCJvYmplY3QxIiwib2JqZWN0MiIsImNvbnRhaW5lciIsImFicyIsInBvdyIsImJ1YmJsZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImJvZHkiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwicm91bmQiLCJ0b3AiLCJsZWZ0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJNb3VzZUV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWluIiwibWF4IiwiZmxvb3IiLCJsZXR0ZXJzIiwiY29sb3IiLCJzaXplIiwiY2VpbCIsInJlcyIsIndpdGhOdW1iZXJzIiwiY29uc29uYW50Iiwidm93ZWwiLCJ2b3dlbEZpcnN0IiwiczEiLCJzMiIsImxvYyIsInF1ZXJ5RWxlbWVudHMiLCJoYXNBdHRyaWJ1dGUiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImZpcnN0Q2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0eWxlcyIsInBhcnNlciIsIkRPTVBhcnNlciIsInhtbERvYyIsInBhcnNlRnJvbVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YWdOYW1lIiwic2ltcGxlVHlwZXMiLCJ0Iiwic2VsZiIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOzs7Ozs7Ozs7O0FBVUE7Ozs7O0FBS0EsSUFBTUEsaUJBQWlC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Q0EsV0FBTyxPQUFPeEQsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsU0FBUzRZLENBQXBDLEdBQXdDQSxDQUEvQztBQUNILENBSEQ7O2tCQUtlMUYsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGYsSUFBTVksWUFBWSxTQUFaQSxTQUFZLENBQVVoUCxLQUFWLEVBQWlCNEIsS0FBakIsRUFBd0JtUyxJQUF4QixFQUE4QjtBQUM1QyxXQUFPQSxLQUFLaEwsT0FBTCxDQUFhL0ksS0FBYixNQUF3QjRCLEtBQS9CO0FBQ0gsQ0FGRDs7a0JBSWVvTixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7Ozs7O0FBR0EsSUFBTVgsTUFBTSxhQUFVQSxJQUFWLEVBQWU7QUFDdkIsUUFBTXlFLE1BQU0sNEJBQVo7QUFDQXpFLFdBQU1BLFFBQU95RSxJQUFJa0IsUUFBakI7QUFDQTNGLFdBQU1BLEtBQUluRCxPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBT21ELEtBQUlsVixNQUFKLEdBQWEsQ0FBYixJQUFrQmtWLEtBQUkzUCxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsR0FBdEMsR0FBNEMsTUFBTTJQLElBQWxELEdBQXdEQSxJQUEvRDtBQUNILENBTEQ7O2tCQU9lQSxHIiwiZmlsZSI6ImFuaW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbi8qXG5jb25zdCBhbmltYXRpb24gPSBBbmltYXRpb25GcmFtZSgpO1xuYW5pbWF0aW9uLnBhdXNlKCk7XG5hbmltYXRpb24uc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5hbmltYXRpb24uY2FuY2VsKCk7XG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3tkdXJhdGlvbjogbnVtYmVyLCBzdGFydHBhbHk6IG51bWJlciwgcGF1c2VkOiBib29sZWFuLCBkZWxheTogbnVtYmVyLCByZXF1ZXN0SWQ6IG51bWJlciwgY2FsbGJhY2s6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlcn19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIHJlcXVlc3RJZDogMCxcbiAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICBjYWxsYmFjazogMCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICB9O1xuXG4gICAgcm9vdC5zdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoIXJvb3Quc3RhcnRwYWx5KSByb290LnN0YXJ0cGFseSA9IHRpbWVzdGFtcDtcbiAgICAgICAgcm9vdC5wcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHJvb3Quc3RhcnRwYWx5O1xuXG4gICAgICAgIGlmIChyb290LmNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5wcm9ncmVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdC5kdXJhdGlvbiAmJiByb290LmR1cmF0aW9uID4gcm9vdC5wcm9ncmVzcykge1xuICAgICAgICAgICAgcm9vdC5jYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgaWYgKHJvb3QucGF1c2VkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LnBhdXNlZCA9ICFyb290LnBhdXNlZDtcbiAgICB9O1xuXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgfTtcblxuICAgIHJvb3QuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocm9vdC5yZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkZyYW1lO1xuIiwiaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHsgYm90dG9tLCBlbGVtZW50LCBoZWlnaHQsIGxlZnQsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5IH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDbGlwID0gZnVuY3Rpb24gKGVsZW1lbnQpXG57XG4gICAgY29uc3Qgcm9vdCA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgaWYgKHJvb3QuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcG9zaXRpb24oZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgcm9vdC54ID0gcm9vdC54IC0gcGFyZW50Lng7XG4gICAgICAgIHJvb3QueSA9IHJvb3QueSAtIHBhcmVudC55O1xuICAgICAgICByb290LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCByb290LmVsZW1lbnQuaWQgfHwgJ2NsaXAnKTtcbiAgICB9XG5cbiAgICByb290Lm1vdmVUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByb290LnN0eWxlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghYXBwZW5kKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtLmZvckVhY2goKGUpID0+IHtyb290LmluamVjdChlLCB0cnVlKX0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmFwcGVuZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJvb3QuaW5qZWN0KGVsZW0sIHRydWUpO1xuICAgIH07XG5cbiAgICByb290LnJlbW92ZSA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGlmKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3QuZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZhaWxlZCBhcmd1bWVudCB0eXBlLiBOZWVkIE5vZGVFbGVtZW50Jyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpcDtcbiIsImltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB7cmFuZG9tSHVtYW5pemVTdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuXG5cbi8qKlxuICpcbmNvbmZpZzpcbiAgICBpZDogJ2lkJyxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge30sXG4gICAgY29tcGxldGUgKCkge30sXG4gICAgbWV0aG9kczoge30sXG4gICAgbm9kZToge30sXG4gICAgY29tcG9uZW50czoge30sXG4gICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuXG5Db21wb25lbnQoe1xuICAgIGlkOiAnRXh0ZXJuYWxUZW1wbGF0ZUNvbXBvbmVudCcsXG4gICAgcHJvcHM6IFsndGl0bGUnXSxcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlJyxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXRlcmF0b3I6IDAsXG4gICAgfSxcbiAgICBjb21wbGV0ZSAoYXBwKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVbJ3RpdGxlJ10pXG4gICAgICAgIHRoaXMubm9kZVsndGl0bGUnXS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZCAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gKysgdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICAgICAgbWluIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSAtLSB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBnZXQgcHJvcGVydHkgYnkgaWQga2V5d29yZFxuICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbmZpZy5pZCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbU5hbWUgPSAgcmFuZG9tSHVtYW5pemVTdHJpbmcoNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJhbmRvbU5hbWUgPSByYW5kb21OYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcmFuZG9tTmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb25maWcuaWQgPSAnQ29tcG9uZW50JyArIHJhbmRvbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wID0gQ29tcG9uZW50LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jb21wb25lbnRzW2lkXSA/IGNvbXAuY29tcG9uZW50c1tpZF0gOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNoaWxkcmVuLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmlkID09PSBpZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jbG9uZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgICAgICBjbG9uZWQudGVtcGxhdGUgPSBjbG9uZWQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmluamVjdCA9IGZ1bmN0aW9uIChlbGVtLCBhcHBlbmQgPSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYXBwZW5kKSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0uZm9yRWFjaCgoZSkgPT4ge2NvbXAuaW5qZWN0KGUsIHRydWUpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuYmVmb3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZihpc0hUTUxTdHJpbmcoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBxdWVyeShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLm1ldGhvZHMgJiYgT2JqZWN0LnZhbHVlcyhjb21wLm1ldGhvZHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5tZXRob2RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAubWV0aG9kc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1trZXldID0gY29tcC5tZXRob2RzW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAubWV0aG9kc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuZGF0YSAmJiBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZGF0YVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuZGF0YVtrZXldID0gY29tcC5kYXRhW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzICYmIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wLmNvbXBvbmVudHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBvbmVudHNba2V5XS5wYXJlbnRDb21wb25lbnQgPSBjb21wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wLmNoaWxkcmVuLnB1c2goY29tcC5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb21wLnVwZGF0ZVRlbXBsYXRlRWxlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpICYmIGNvbXAudGVtcGxhdGVFbGVtZW50c0VuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wLmVsZW1lbnRzID0ge1xuICAgICAgICAgICAgICAgICAgICBmdW5jOiBzZWFyY2goJ1tkYXRhLWZ1bmNdJywgJ2RhdGEtZnVuYycsIGNvbXAudGVtcGxhdGUpLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IHNlYXJjaCgnW2RhdGEtYWN0aW9uXScsICdkYXRhLWFjdGlvbicsIGNvbXAudGVtcGxhdGUpLFxuICAgICAgICAgICAgICAgICAgICBub2RlOiBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIGNvbXAudGVtcGxhdGUpLFxuICAgICAgICAgICAgICAgICAgICBvbjogc2VhcmNoKCdbZGF0YS1vbl0nLCAnZGF0YS1vbicsIGNvbXAudGVtcGxhdGUpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgY29tcC51cGRhdGVUZW1wbGF0ZUVsZW1lbnRzKCk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnQubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgICAgIHJldHVybiBjb21wO1xuICAgIH1cbn07XG5Db21wb25lbnQubGlzdCA9IHt9O1xuQ29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG1ldGhvZHM6IHt9LFxuICAgICAgICBub2RlOiB7fSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB0ZW1wbGF0ZUVsZW1lbnRzRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50Q29tcG9uZW50OiB7fSxcbiAgICAgICAgZWxlbWVudHM6IHt9LFxuICAgIH0sIGNvbmZpZylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsIi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEB0eXBlIHt7c3VwZXI6IERvY3VtZW50RnJhZ21lbnQsIGFkZEV2ZW50OiAoZnVuY3Rpb24oKj0sICo9KTogQ3VzdG9tRXZlbnQpLCByZW1vdmVFdmVudExpc3RlbmVyOiAoZnVuY3Rpb24oKj0sICo9LCAqPSk6IHRoaXMpLCBkaXNwYXRjaEV2ZW50OiAoZnVuY3Rpb24oKik6IHRoaXMpLCBldmVudHNUeXBlOiB7fSwgcmVtb3ZlRXZlbnQ6IChmdW5jdGlvbigqKTogdGhpcyksIHZlcnNpb246IHN0cmluZywgYWRkRXZlbnRMaXN0ZW5lcjogKGZ1bmN0aW9uKCo9LCAqPSwgKj0pOiB7dHlwZTogKiwgbGlzdGVuZXI6ICosIHVzZUNhcHR1cmU6ICgqfGJvb2xlYW4pfSl9fVxuICovXG5jb25zdCBFdmVudE1hbmFnZXIgPSB7XG4gICAgc3VwZXI6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICB2ZXJzaW9uOiAnMC4wLjInLFxuICAgIGV2ZW50c1R5cGU6IHt9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRldGFpbHNcbiAgICAgKiBAcmV0dXJucyB7Q3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgYWRkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIGRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge2RldGFpbDogZGV0YWlsc30pO1xuICAgICAgICBpZiAodHlwZW9mIGRldGFpbHMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRldGFpbHMpXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBldmVudFtrZXldID0gZGV0YWlsc1trZXldO1xuXG4gICAgICAgIEV2ZW50TWFuYWdlci5zdXBlcltuYW1lXSA9IGV2ZW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudDogZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIGlmIChFdmVudE1hbmFnZXIuc3VwZXJbbmFtZV0pXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRNYW5hZ2VyLnN1cGVyW25hbWVdXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgdHlwZSBvbiB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqIEByZXR1cm5zIHt7dHlwZTogKiwgbGlzdGVuZXI6ICosIHVzZUNhcHR1cmU6ICgqfGJvb2xlYW4pfX1cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpe1xuICAgICAgICB1c2VDYXB0dXJlID0gdXNlQ2FwdHVyZSB8fCBmYWxzZTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLnN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gICAgICAgIEV2ZW50TWFuYWdlci5zdXBlci5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlfHxmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byB0aGlzIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLnN1cGVyW3R5cGVdIGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpXG4gICAgICAgICAgICBFdmVudE1hbmFnZXIuc3VwZXIuZGlzcGF0Y2hFdmVudChFdmVudE1hbmFnZXIuc3VwZXJbdHlwZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudE1hbmFnZXI7XG4iLCIvKlxuY29uc3QgYW5pbWF0aW9uID0gRnJhbWVBbmltYXRpb24oKTtcbmFuaW1hdGlvbi5wYXVzZSgpO1xuYW5pbWF0aW9uLnN0YXJ0KGZ1bmN0aW9uKHByb2dyZXNzKXtcbiAgICBpZiAoTWF0aC5yb3VuZChwcm9ncmVzcykgJSAxMDAwID09PSAwKSB7XG4gICAgICAgIC8vIGRvIHNvbWV0aGluZ1xuICAgIH1cbn0pO1xuYW5pbWF0aW9uLmNhbmNlbCgpO1xuKi9cbi8qKlxuICpcbiAqIEByZXR1cm5zIHt7ZHVyYXRpb246IG51bWJlciwgc3RhcnRwYWx5OiBudW1iZXIsIHBhdXNlZDogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgcmVxdWVzdElkOiBudW1iZXIsIGNhbGxiYWNrOiBudW1iZXIsIHByb2dyZXNzOiBudW1iZXJ9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEZyYW1lcyA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzID0ge30pIHtcbiAgICBjb25zdCBkZWZhdWx0X3BhcmFtZXRlcnMgPSB7XG4gICAgICAgIGZwczogZmFsc2UsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIG5vdzogMCxcbiAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgdGhlbjogMCxcbiAgICAgICAgZnBzSW50ZXJ2YWw6IDAsXG4gICAgICAgIGZyYW1lQ291bnQ6IDAsXG4gICAgICAgIGZwczogMzAsXG4gICAgICAgIHN0YXJ0cGFseTogMCxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRfcGFyYW1ldGVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJvb3Rba2V5XSA9IHR5cGVvZiBwYXJhbWV0ZXJzW2tleV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBwYXJhbWV0ZXJzW2tleV1cbiAgICAgICAgICAgIDogZGVmYXVsdF9wYXJhbWV0ZXJzW2tleV07XG4gICAgfSk7XG5cbiAgICBjb25zdCBhbmltYXRpb24gPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmICghcm9vdC5zdGFydHBhbHkpIHJvb3Quc3RhcnRwYWx5ID0gdGltZXN0YW1wO1xuICAgICAgICByb290LnByb2dyZXNzID0gdGltZXN0YW1wIC0gcm9vdC5zdGFydHBhbHk7XG5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG5cbiAgICAgICAgaWYgKCFyb290LmZwcyAmJiByb290LmZwcyA+IDApIHtcbiAgICAgICAgICAgIHJvb3Qubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHJvb3QuZWxhcHNlZCA9IHJvb3Qubm93IC0gcm9vdC50aGVuO1xuICAgICAgICAgICAgaWYgKHJvb3QuZWxhcHNlZCA+IHJvb3QuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICByb290LnRoZW4gPSByb290Lm5vdyAtIChyb290LmVsYXBzZWQgJSByb290LmZwc0ludGVydmFsKTtcblxuICAgICAgICAgICAgICAgIGlmIChyb290LmNhbGxiYWNrICYmICFyb290LnBhdXNlZCkge1xuICAgICAgICAgICAgICAgICAgICByb290LmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5wcm9ncmVzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAocm9vdC5jYWxsYmFjayAmJiAhcm9vdC5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICByb290LmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5wcm9ncmVzcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LnBhdXNlZCA9ICFyb290LnBhdXNlZDtcbiAgICB9O1xuXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290LmZwcyA+IDApIHtcbiAgICAgICAgICAgIHJvb3QuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gcm9vdC5mcHM7XG4gICAgICAgICAgICByb290LnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgcm9vdC5zdGFydFRpbWUgPSByb290LnRoZW47XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbik7XG4gICAgfTtcblxuICAgIHJvb3QuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocm9vdC5yZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZyYW1lcztcbiIsIi8qXG5jb25zdCBrZXlib2FyZCA9IEtleWJvYXJkRXZlbnRNYW5hZ2VyKCk7XG5rZXlib2FyZC5lYWNoKEVWRU5UX05BTUUsIGZ1bmN0aW9uIChldmVudCkge30pXG5rZXlib2FyZC53aXRoQ29uZGl0aW9uS2V5XG5rZXlib2FyZC5wcmVzc1xua2V5Ym9hcmQudXBcbmtleWJvYXJkLmRvd25cbiovXG5jb25zdCBLZXlib2FyZEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc3Qgc3RvcmFnZSA9IHt9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgYWRkU3RvcmFnZSA9IGZ1bmN0aW9uIChldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdKSBzdG9yYWdlW2V2ZW50XSA9IHt9O1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdW2tleV0pIHN0b3JhZ2VbZXZlbnRdW2tleV0gPSBbXTtcbiAgICAgICAgc3RvcmFnZVtldmVudF1ba2V5XS5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAodHlwZW9mIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdID0gYmFzZUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZSkubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlW3R5cGVdKS5tYXAoKGtleUNvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggc3RvcmFnZVt0eXBlXVtrZXlDb2RlXSApKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0ubWFwKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IHR5cGUgJiYgcGFyc2VJbnQoa2V5Q29kZSkgPT09IGV2ZW50LmtleUNvZGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChldmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVhY2hDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgZWFjaENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMgKCkge1xuICAgICAgICBjb25zdCBhZGQgPSAoKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhiYXNlQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZWFjaENhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhiYXNlQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZWFjaENhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgcm0oKTtcbiAgICAgICAgYWRkKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWFjaChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGVhY2hDYWxsYmFjayhldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aENvbmRpdGlvbktleShldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgYWRkU3RvcmFnZShldmVudCwga2V5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICBwcmVzcyhrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXByZXNzJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5dXAnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG93bihrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleWRvd24nLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZEV2ZW50TWFuYWdlcjtcbiIsIlxuXG4vKipcbiAqIExvYWRlci5hdWRpb3M6IMaSIChzcmNzLCBjYWxsYmFjaylcbiAqIExvYWRlci5pbWFnZXM6IMaSIChpbWdzLCBjYWxsYmFjaylcbiAqIExvYWRlci5qYXZhc2NyaXB0OiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIExvYWRlci5qc29uOiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIEBwcm9wZXJ0eVxuICogQG1ldGhvZCBqc29uXG4gKiBAbWV0aG9kIGpzb25zXG4gKiBAbWV0aG9kIGphdmFzY3JpcHRcbiAqIEBtZXRob2QgaW1hZ2VzXG4gKiBAbWV0aG9kIGF1ZGlvc1xuICogQHJldHVybnMge3t9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBqc29uOiBMb2FkZXIuanNvbixcbiAgICAgICAganNvbnM6IExvYWRlci5qc29ucyxcbiAgICAgICAgamF2YXNjcmlwdDogTG9hZGVyLmphdmFzY3JpcHQsXG4gICAgICAgIGltYWdlczogTG9hZGVyLmltYWdlcyxcbiAgICAgICAgYXVkaW9zOiBMb2FkZXIuYXVkaW9zLFxuICAgICAgICB2aWRlb3M6IExvYWRlci52aWRlbyxcbiAgICB9O1xufTtcblxuLyoqXG4gKiAuanNvbignL3VybC9kYXRhZmlsZS5qc29uJywgKGpzb24pID0+IHt9LCAoZXJyb3IpID0+IHt9KVxuICpcbiAqIEBwYXJhbSBzcmNcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIG9uZXJyb3JcbiAqL1xuTG9hZGVyLmpzb24gPSBmdW5jdGlvbiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IGNhbGxiYWNrKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gb25lcnJvclxuICovXG5Mb2FkZXIuanNvbnMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG57XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBMb2FkZXIuanNvbihzcmMsIChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1trZXldID0ganNvbjtcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvbmVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5qYXZhc2NyaXB0ICgge1xuICogICAgICBteV9zY3JpcHQxOiAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gKiAgICAgIG15X3NjcmlwdDI6ICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogLmphdmFzY3JpcHQgKCBbXG4gKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215X3NjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIExvYWRlci5qYXZhc2NyaXB0XG4gKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAqIEBwYXJhbSBjYWxsYmFjayAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gYWxsIHNyY3MgaXMgbG9hZGVkXG4gKiBAcGFyYW0gb25lcnJvciAgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWQgaXMgZmFpbGVkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTG9hZGVyLmphdmFzY3JpcHQgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG57XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIGxldCBzY3JpcHQ7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSAoc3Jjc1trZXldLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyY3Nba2V5XSA6IHNyY3Nba2V5XSArICcuanMnO1xuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgICAgICBzY3JpcHQuaWQgPSBrZXk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogTG9hZCBhbiBpbWFnZXNcbiAqXG4gKiAuaW1hZ2VzICgge1xuICogICAgICBpbWcxOiAnL3BhdGgvdG8vaW1nMScsXG4gKiAgICAgIGltZzI6ICcvcGF0aC90by9pbWcyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci5pbWFnZXNcbiAqIEBwYXJhbSBpbWdzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLmltYWdlcyA9IGZ1bmN0aW9uIChpbWdzLCBjYWxsYmFjaykge1xuICAgIGlmIChpbWdzICYmIHR5cGVvZiBpbWdzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhpbWdzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGltZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltZ3NbbmFtZV07XG4gICAgICAgICAgICBpbWcubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpbWFnZXNbdGhpcy5uYW1lXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogTG9hZCBhbiBhdWRpbyBmaWxlc1xuICpcbiAqIC5hdWRpb3MgKCB7XG4gKiAgICAgIGF1ZGlvMTogJy9wYXRoL3RvL2F1ZGlvMScsXG4gKiAgICAgIGF1ZGlvMjogJy9wYXRoL3RvL2F1ZGlvMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuYXVkaW9zXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci5hdWRpb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCBhdWRpb3MgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzcmNzKSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgYXVkaW8ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBhdWRpby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgYXVkaW9zW25hbWVdID0gYXVkaW87XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBhdWRpb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBMb2FkIGFuIHZpZGVvIGZpbGVzXG4gKlxuICogLnZpZGVvcyAoIHtcbiAqICAgICAgdmlkZW8xOiAnL3BhdGgvdG8vdmlkZW8xJyxcbiAqICAgICAgdmlkZW8yOiAnL3BhdGgvdG8vdmlkZW8yJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci52aWRlb3NcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLnZpZGVvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgIHZpZGVvLnNyYyA9IHNyY3NbbmFtZV07XG4gICAgICAgICAgICB2aWRlby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHZpZGVvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICB2aWRlb3NbbmFtZV0gPSB2aWRlbztcbiAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHZpZGVvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsIi8qKlxuXG5hIChtMTEpIEhvcml6b250YWwgc2NhbGluZy5cbmIgKG0xMikgSG9yaXpvbnRhbCBza2V3aW5nLlxuYyAobTIxKSBWZXJ0aWNhbCBza2V3aW5nLlxuZCAobTIyKSBWZXJ0aWNhbCBzY2FsaW5nLlxuZSAoZHgpIEhvcml6b250YWwgbW92aW5nLlxuZiAoZHkpIFZlcnRpY2FsIG1vdmluZy5cbiovXG5jb25zdCBNYXRyaXggPSBmdW5jdGlvbiAobTExLCBtMTIsIG0yMSwgbTIyLCBneCwgZ3kpIHtcbiAgICByZXR1cm4ge20xMSwgbTEyLCBtMjEsIG0yMiwgZ3gsIGd5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDtcbiIsImltcG9ydCBDbGlwIGZyb20gXCIuL0NsaXBcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5cbi8qXG5yZXR1cm4gTW92ZUNsaXAoe1xuICAgIGVsZW1lbnQ6IGA8ZGl2IGNsYXNzPVwic3ByaXRlIHJlY3RcIj48L2Rpdj5gLFxuICAgIHBhcmVudDogQXBwQ2xpcCxcbiAgICB4OiAxMDAsXG4gICAgeTogMTAwLFxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBbXG4gICAgICAgICAgICAncm90YXRlKCcgKyA0NSArJ2RlZyknLFxuICAgICAgICAgICAgJ3NjYWxlKDAuNSwgMC41KScsXG4gICAgICAgIF07XG4gICAgfSxcbn0pXG4qL1xuLyoqXG4gKiBAbWV0aG9kIHN0eWxlXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7e3JlYWRvbmx5IHg6ICosIHJlYWRvbmx5IHdpZHRoOiAqLCBpbml0aWFsaXplZDogYm9vbGVhbiwgcmVhZG9ubHkgeTogKiwgc3R5bGUoKj0pOiB2b2lkLCBjb21wbGV0ZWQ6IGJvb2xlYW4sIGVsZW1lbnQ6ICosIHJlYWRvbmx5IGhlaWdodDogKn18Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBNb3ZlQ2xpcCA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBjb25maWc7XG4gICAgY29uc3QgY2xpcCA9IENsaXAoZWxlbWVudCk7XG5cbiAgICBpZighY2xpcC5lbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvcGVydHkgW2VsZW1lbnRdIG5vdCBmb25kIScpO1xuICAgIH1cblxuICAgIGNsaXAuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyk7XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICAvLyBjbGlwOiBjbGlwLFxuICAgICAgICBlbGVtZW50OiBjbGlwLmVsZW1lbnQsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgc2V0IHgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC54ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB5KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC55ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB3aWR0aCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLndpZHRoID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC53aWR0aCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC5oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHgoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC54XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB5KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueVxuICAgICAgICB9LFxuICAgICAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC53aWR0aFxuICAgICAgICB9LFxuICAgICAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAuaGVpZ2h0XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3R5bGUob2JqZWN0KSB7XG4gICAgICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGRlbGV0ZSBjb25maWcuZWxlbWVudDtcbiAgICBkZWxldGUgY29uZmlnLmluaXRpYWxpemVkO1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcm9vdFtrZXldID0gY29uZmlnW2tleV1cbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2Ygcm9vdC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFyb290LmluaXRpYWxpemVkKXtcbiAgICAgICAgcm9vdC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHJvb3QuaW5pdC5jYWxsKHJvb3QpO1xuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoYXBwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2xvbmVQcm9wZXJ0eSA9IHRvT2JqZWN0KHJvb3QpO1xuICAgICAgICBjbG9uZVByb3BlcnR5LmVsZW1lbnQgPSByb290LmVsZW1lbnQuY2xvbmVOb2RlKHJvb3QpO1xuICAgICAgICBpZiAoYXBwZW5kKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjbG9uZVByb3BlcnR5LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNb3ZlQ2xpcChjbG9uZVByb3BlcnR5KTtcbiAgICB9O1xuXG4gICAgcm9vdC5pbmplY3QgPSBmdW5jdGlvbiAoZWxlbSwgYXBwZW5kID0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gcXVlcnkoZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFhcHBlbmQpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZWxlbSkpIHtcbiAgICAgICAgICAgIGVsZW0uZm9yRWFjaCgoZSkgPT4ge3Jvb3QuaW5qZWN0KGUsIHRydWUpfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9kZShlbGVtKSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3QucmVtb3ZlID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgaWYoaXNOb2RlKGVsZW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcm9vdC5lbGVtZW50LnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmFpbGVkIGFyZ3VtZW50IHR5cGUuIE5lZWQgTm9kZUVsZW1lbnQnKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIGlmICh0eXBlb2Ygcm9vdC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5jb21wbGV0ZWQpe1xuICAgICAgICByb290LmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHJvb3QuY29tcGxldGUuY2FsbChyb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVDbGlwO1xuIiwiXG5jb25zdCBQb2ludCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiXG5jb25zdCBSZWN0YW5nbGUgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB7eCwgeSwgd2lkdGgsIGhlaWdodH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCIvKlxuY29uc3QgUnhTdGF0ZSA9IFJveHkoe1xuICAgIHRpdGxlOiAnJyxcbiAgICBib2R5OiAnJyxcbn0pO1xuXG5SeFN0YXRlLmV2ZW50KChrZXksIHZhbHVlcyk9PntcbiAgICBpZiAoa2V5ID09PSAnJykge31cbiAgICBpbmplY3QoJyMnICsga2V5LCB2YWx1ZXMpO1xufSk7XG5cblJ4U3RhdGUucHJveHkudGl0bGUgPSAnRmlyc3QgdmFsdWUnO1xuUnhTdGF0ZS5wcm94eS5ib2R5ID0gJ1Rlc3QgYm9keSB0ZXh0JztcblxuVGltZXIudGltZW91dCgoKSA9PiB7XG4gICAgUnhTdGF0ZS5kaXNwYXRjaCgndGl0bGUnLCAnSGVsbG8gZnJpZW5kJyk7XG4gICAgUnhTdGF0ZS5kaXNwYXRjaCgnYm9keScsICdEbyB5b3UgaGFwcHkgbm93PycpO1xufSwgMjAwMCk7XG5cbiovXG5cbi8qKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIHNldCgqPSwgKj0pOiAqLCBnZXQoKik6ICosIGFjdGlvbigqPSwgKj0pOiAqLCBmaWxsKCo9LCAqPSk6ICp9fFJveHl8e318bnVsbHxib29sZWFufVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuXG5jb25zdCBSb3h5ID0gZnVuY3Rpb24gKHBheWxvYWQpXG57XG4gICAgY29uc3QgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzID0ge1xuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldChvYmosIHByb3AsIHZhbHVlKSB7XG5cbiAgICAgICAgICAgIG9ialtwcm9wXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdICYmIHR5cGVvZiBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0uY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0LmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvbGRlciBuYW1lOiBzZWV8c2V0P1xuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBwYXlsb2FkXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGF0Y2goa2V5LCBwYXlsb2FkKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0ga2V5LmNhbGwoe30sIHByb3h5KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGwocmVzdWx0KVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXlsb2FkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXlsb2FkLmNhbGwoe30sIHByb3h5W2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWN0aW9uKClcbiAgICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBldmVudChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBjaGFuZ2UgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2ZShrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID0ga2V5O1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW2tleV0gPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA/IHByb3h5W2tleV0gOiBjb3B5KHByb3h5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaWxsKHBheWxvYWQsIHRvKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm94eVt0b10pXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eVt0b10gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dW2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBwcm94eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQcm94eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBSb3h5O1xuIiwiaW1wb3J0IFJveHkgZnJvbSBcIi4vUm94eVwiO1xuXG4vKipcbiAqIGNvbnN0IHJ4ID0gUm94eUxpc3RlbmVyICh7XG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogfSlcbiAqIHJ4LnNldCgpO1xuICogcnguZGlzcGF0Y2goKTtcbiAqXG4gKiByeC5hY3Rpb24oKTtcbiAqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgZGlzcGF0Y2goKj0sICo9KTogUm94eSwgZ2V0KCopOiAqLCBldmVudCgqPSwgKj0pOiB0aGlzLCBmaWxsKCo9LCAqPSk6IHRoaXN9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFJveHlMaXN0ZW5lciA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG5cbiAgICBjb25zdCBhY3Rpb25zID0ge1xuICAgICAgICBfX2FjdGlvbl9fKCkge1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbnNOYW1lcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMocGF5bG9hZCkubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG4gICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXSA9IHBheWxvYWRbZXZlbnROYW1lXTtcblxuICAgICAgICBpZiAodHlwZW9mIHBheWxvYWRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBldmVudE5hbWUgIT09IGFjdGlvbnMuX19hY3Rpb25fXy5uYW1lKSB7XG4gICAgICAgICAgICBhY3Rpb25zTmFtZXNbZXZlbnROYW1lXSA9ICcnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByeCA9IFJveHkoYWN0aW9uc05hbWVzKTtcbiAgICAvL1xuICAgIHJ4LmFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zTmFtZXNcbiAgICB9O1xuXG4gICAgcnguZXZlbnQoKGV2ZW50Q3Vyc29yLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgYWN0aW9ucy5fX2FjdGlvbl9fLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucykubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudEN1cnNvciA9PT0gZXZlbnROYW1lICYmIHR5cGVvZiBhY3Rpb25zW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiByeDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJveHlMaXN0ZW5lcjtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cblxuLypcbmFkZChuYW1lLCBjYWxsYmFjaywgYXR0cnMpICAvLyBhZGQgbmV3IHNjZW5lXG5nZXQobmFtZSkgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuZWQgc2NlbmUgYnkgbmFtZVxuZ2V0Q3VycmVudFNjZW5lKCkgICAgICAgICAgIC8vIHJldHVybmVkIGN1cnJlbnQgc2NlbmVcbm5leHQoKSAgICAgICAgICAgICAgICAgICAgICAvLyB0byBuZXh0IHNjZW5lXG5ydW4obmFtZSwgYXR0cnMpICAgICAgICAgICAgLy8gcnVuIHNjZW5lcyBieSBuYW1lLCBzZXQgdGhpcyBrZXkgbmFtZSB0byBkZWZhdWx0XG5jbG9uZSgpICAgICAgICAgICAgICAgICAgICAgLy8gY2xvbmVkIGN1cnJlbnQgc2NlbmVzXG5cbmNvbnN0IHNjZW5lID0gU2NlbmUoKTtcbnNjZW5lLmFkZCgnZWRpdG9yJywgZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBjb25zb2xlLmxvZyhhLCBiLCBjLCBkKTtcbn0pXG5zY2VuZS5hZGQoJ291dHB1dCcsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUucnVuKCdvdXRwdXQnLCBbJ2hlbGxvJywgMjAwLCBbMSwyLDNdLCB7aWQ6IDEyM31dKTtcbiovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gY29tbXVuaXR5X2FyZ3VtZW50c1xuICogQHJldHVybnMge3tjdXJyZW50OiBzdHJpbmcsIHNjZW5lczoge2RlZmF1bHQ6IHtjYWxsYmFjaygpOiB2b2lkLCBhdHRyczogW119fSwgZWxlbWVudDogbnVsbH19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocHJvcGVydGllcywgY29tbXVuaXR5X2FyZ3VtZW50cyA9IFtdKSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgY3VycmVudDogJ2RlZmF1bHQnLFxuICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICBzY2VuZXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpIHtjb25zb2xlLmxvZygnW0RlZmF1bHQgU2NlbmVdJyl9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5hZGQgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGF0dHJzID0gW10pIHtcbiAgICAgICAgcm9vdC5zY2VuZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIGF0dHJzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcm9vdC5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gcm9vdC5zY2VuZXNbbmFtZV07XG4gICAgfVxuXG4gICAgcm9vdC5nZXRDdXJyZW50U2NlbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByb290LnNjZW5lc1tyb290LmN1cnJlbnRdO1xuICAgIH1cblxuICAgIHJvb3QubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGxlc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJvb3Quc2NlbmVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoa2V5c1tpXSA9PT0gcm9vdC5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXlzW2kgKyAxXSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QucnVuKGxlc3QpO1xuICAgIH07XG5cbiAgICByb290LnJ1biA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7XG4gICAgICAgIHJvb3QuY3VycmVudCA9IGtleSB8fCAnZGVmYXVsdCc7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcm9vdC5nZXRDdXJyZW50U2NlbmUoKTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzY2VuZS5jYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChhdHRycykge1xuICAgICAgICAgICAgICAgIGF0dHJzID0gQXJyYXkuaXNBcnJheShhdHRycykgPyBhdHRycyA6IFthdHRyc107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShyb290LCBhdHRycyA/IGF0dHJzIDogc2NlbmUuYXR0cnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc2hvdyA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7IHJvb3QucnVuKGtleSwgYXR0cnMpIH07XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7IHJvb3QucnVuKGtleSwgYXR0cnMpIH07XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QuYWRkKGtleSwgcHJvcGVydGllc1trZXldLCBBcnJheS5pc0FycmF5KGNvbW11bml0eV9hcmd1bWVudHMpID8gY29tbXVuaXR5X2FyZ3VtZW50cyA6IFtjb21tdW5pdHlfYXJndW1lbnRzXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge2FueX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGVwc1NjZW5lID0gZnVuY3Rpb24gKGNvbmZpZyA9IHtzdGVwczogW119KSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgICBsb29wOiBjb25maWcubG9vcCB8fCBmYWxzZSxcbiAgICAgICAgc3RlcF9pdGVyYXRpb246IDAsXG4gICAgICAgIHN0ZXBfc3RvcDogZmFsc2UsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tfZWFjaDogbnVsbCxcbiAgICAgICAgc3RlcF9jYWxsYmFja3M6IGNvbmZpZy5zdGVwcyB8fCB7fSxcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICByb290LnBsYXkoKTtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBkZWxheShtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjay5jYWxsKHJvb3QpOyB9LCBtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdG8obmFtZSkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrcy5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlYWNoU3RlcHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfc3RvcCkgcmV0dXJuIHJvb3Q7XG5cbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfaXRlcmF0aW9uID4gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290Lmxvb3ApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tPYmplY3QgPSByb290LnN0ZXBfY2FsbGJhY2tzW3Jvb3Quc3RlcF9pdGVyYXRpb25dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFja09iamVjdC5jYWxsYmFjay5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICByb290Lml0ZXJhdGlvbisrXG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uKytcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzU2NlbmU7XG4iLCJcbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbn07XG5cblxuVGltZXIuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJpbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gXCIuLi9zdGF0aWMvaXNOdW1iZXJcIjtcbi8qXG5cbnRoaXMudHJhbnNmb3JtID0gVHJhbnNmb3JtKHRoaXMuZWxlbWVudCk7XG50aGlzLnRyYW5zZm9ybS5tZXRob2QoJ3JvdGF0ZScsIFsnNDVkZWcnXSk7XG50aGlzLnRyYW5zZm9ybS51cGRhdGUoKTtcbnRoaXMudHJhbnNmb3JtLnJlc2VhcmNoKCk7XG50aGlzLnRyYW5zZm9ybS5mdW5jdGlvblBhcmFtZXRlcnMoJ21hdHJpeCcpICAgICAgICAgLy8gWzEsIDAsIDAsIDEsIDAsIDBdOiBhcnJheVxudGhpcy50cmFuc2Zvcm0uZnVuY3Rpb25QYXJhbWV0ZXJzKCdyb3RhdGUnKSAgICAgICAgIC8vIFtcIjQ1ZGVnXCJdOiBzdHJpbmdcbnRoaXMudHJhbnNmb3JtLmZ1bmN0aW9uUGFyYW1ldGVycygncm90YXRlJywgdHJ1ZSkgICAvLyA0NTogaW50XG5cbi8vIC4uLlxuVHJhbnNmb3JtLmVsZW1lbnQodGhpcy5lbGVtZW50LCBbXG4gICAgJ3JvdGF0ZSgnICsgMTAgKydkZWcpJyxcbiAgICAnc2NhbGUoMC42LCAwLjYpJyxcbiAgICAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJyxcbl0pO1xuVHJhbnNmb3JtLmVsZW1lbnQodGhpcy5lbGVtZW50LCBbJ3JvdGF0ZSgnICsgMTAgKydkZWcpJ10pXG5jb25zdCB0cnMgPSBUcmFuc2Zvcm0odGhpcy5lbGVtZW50KTtcblxuLy8gd2l0aG91dCBvZiB0aGUgVHJhbnNmb3JtXG50aGlzLnN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIDEwICsnZGVnKSBzY2FsZSgwLjYsIDAuNikgbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xufSk7XG5cbiovXG5jb25zdCBUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoZWxlbWVudCwgcGFyYW1zKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHRyYW5zZm9ybV9vYmo6IHt9LFxuICAgICAgICB0cmFuc2Zvcm1fYXJyOiBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApLFxuICAgICAgICB0cmFuc2Zvcm1fc3RyaW5nOiAnJyxcblxuICAgICAgICB1cGRhdGUoKXtcbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX3N0cmluZyA9ICcnO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb290LnRyYW5zZm9ybV9vYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX3N0cmluZyArPSBrZXkgKyAnKCcgKyByb290LnRyYW5zZm9ybV9vYmpba2V5XS5qb2luKCcsICcpICsgJykgJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gIHJvb3QudHJhbnNmb3JtX3N0cmluZztcbiAgICAgICAgICAgIHJvb3QucmVzZWFyY2goKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2QobWV0aG9kLCBwcm9wZXJ0aWVzLCBtdWx0aXBseSA9IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiBbcHJvcGVydGllc107XG5cbiAgICAgICAgICAgICAgICBpZiAobXVsdGlwbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHQgPSB2YWx1ZS5tYXRjaCgvW2Etel0rL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludCh2YWx1ZSkgKyBwYXJzZUludChyb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaV0gPSBudW0gKyBleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IHZhbHVlICsgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF1baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHMgcGFyYW1ldGVycyBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXNlYXJjaCgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyID0gZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKTtcblxuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0udHJpbSgpICArICcpJztcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkID0gcGFyYW0ubWF0Y2goL1tcXHdcXC5cXC1dKy9pZyk7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21hdGNoZWRbMF1dID0gbWF0Y2hlZC5zbGljZSgxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZ1bmN0aW9uUGFyYW1ldGVycyhuYW1lLCBGSVJTVF9JVEVNX1RPX0lOVEVHRVIgPSBmYWxzZSl7XG4gICAgICAgICAgICBpZiAoRklSU1RfSVRFTV9UT19JTlRFR0VSXG4gICAgICAgICAgICAgICAgJiYgQXJyYXkuaXNBcnJheShyb290LnRyYW5zZm9ybV9vYmpbbmFtZV0pXG4gICAgICAgICAgICAgICAgJiYgcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdWzBdO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc051bWJlcihpdGVtKVxuICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIDogcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvb3QudHJhbnNmb3JtX29ialtuYW1lXTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5yZXNlYXJjaCgpO1xuXG4gICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5tZXRob2Qoa2V5LCBwYXJhbXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByb290LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufVxuXG5UcmFuc2Zvcm0uZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZXMpe1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBbXTtcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKHByb3ApID0+IHsgcHJvcHMucHVzaChwcm9wKSB9KTtcbiAgICAgICAgc3R5bGl6ZXIoZWxlbWVudCwge3RyYW5zZm9ybTogcHJvcHMuam9pbignICcpfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5cbmltcG9ydCBDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xpcC5qc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IEtleWJvYXJkRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanNcIjtcbmltcG9ydCBNb3ZlQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL01vdmVDbGlwLmpzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgTWF0cml4IGZyb20gXCIuL2NvbXBvbmVudHMvTWF0cml4XCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9jb21wb25lbnRzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL0V2ZW50TWFuYWdlclwiO1xuaW1wb3J0IEZyYW1lcyBmcm9tIFwiLi9jb21wb25lbnRzL0ZyYW1lc1wiO1xuXG5jb25zdCBBbmltYXRlID0ge1xuICAgIENsaXAsXG4gICAgQ29tcG9uZW50LFxuICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgIE1vdmVDbGlwLFxuICAgIFNjZW5lLFxuICAgIFN0ZXBzU2NlbmUsXG4gICAgVGltZXIsXG4gICAgUm94eUxpc3RlbmVyLFxuICAgIFJveHksXG4gICAgQW5pbWF0aW9uRnJhbWUsXG4gICAgTG9hZGVyLFxuICAgIE1hdHJpeCxcbiAgICBQb2ludCxcbiAgICBSZWN0YW5nbGUsXG4gICAgVHJhbnNmb3JtLFxuICAgIEV2ZW50TWFuYWdlcixcbiAgICBGcmFtZXMsXG59O1xuXG5jb25zdCBSQURJQU4gPSAwLjAxNzQ1MzI5MjUxOTk0MzI5NTtcbmNvbnN0IERFR1JFRV9BU19SQURJQU4gPSAwLjAxNzQ1MzI5MjUxOTk0MzI5NTtcbmNvbnN0IERFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFX0FTX1JBRElBTiAqIDM2MDtcbmNvbnN0IFBJID0gMy4xNDE1OTI2NTM1OTtcbmNvbnN0IFJBRF9UT19ERUdSRUVTID0gMy4xNDE1OTI2NTM1OTtcblxuQW5pbWF0ZS5SQURJQU4gPSBSQURJQU47XG5BbmltYXRlLkRFR1JFRV9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOO1xuQW5pbWF0ZS5ERUdSRUVfMzYwX0FTX1JBRElBTiA9IERFR1JFRV8zNjBfQVNfUkFESUFOO1xuQW5pbWF0ZS5QSSA9IFBJO1xuQW5pbWF0ZS5SQURfVE9fREVHUkVFUyA9IFJBRF9UT19ERUdSRUVTO1xuXG5BbmltYXRlLlN0YXRpYyA9XG4gICAgQW5pbWF0ZS5VdGlsID1cbiAgICAgICAgU3RhdGljO1xuXG4vLyBpZiAoZ2V0V2luZG93KCkpIGdldFdpbmRvdygpLkFuaW1hdGUgPSBBbmltYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlO1xuIiwiXG5leHBvcnQgY29uc3QgTEVUVEVSX0NPTlNPTkFOVCA9ICdCLEMsRCxGLEcsSCxKLEssTCxNLE4sUCxRLFIsUyxULFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTEVUVEVSX1ZPV0VMID0gJ0EsRSxJLE8sVSxZJztcbmV4cG9ydCBjb25zdCBBQkMgPSAnQSxCLEMsRCxFLEYsRyxILEksSixLLEwsTSxOLE8sUCxRLFIsUyxULFUsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBOVU1CRVJTID0gJzAsMSwyLDMsNCw1LDYsNyw4LDknO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORCA9ICcmJztcbiIsImltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgYXR0ciA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGVfZWxlbWVudCA9IHR5cGVPZihlbGVtZW50KTtcbiAgICBpZiAodHlwZV9lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50ID0gcXVlcnkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlT2YobmFtZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmFtZSlcbiAgICAgICAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyO1xuIiwiLyoqXG4gKlxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGZyb20sIHRvKVxue1xuICAgIGlmIChmcm9tID09PSBudWxsIHx8IHR5cGVvZiBmcm9tICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0ICYmIGZyb20uY29uc3RydWN0b3IgIT09IEFycmF5KSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciA9PT0gRGF0ZSB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBSZWdFeHAgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gRnVuY3Rpb24gfHxcbiAgICAgICAgZnJvbS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nIHx8IGZyb20uY29uc3RydWN0b3IgPT09IE51bWJlciB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiBuZXcgZnJvbS5jb25zdHJ1Y3Rvcihmcm9tKTtcbiAgICB9XG5cbiAgICB0byA9IHRvIHx8IG5ldyBmcm9tLmNvbnN0cnVjdG9yKCk7XG5cbiAgICBmb3IgKG5hbWUgaW4gZnJvbSlcbiAgICB7XG4gICAgICAgIHRvW25hbWVdID0gdHlwZW9mIHRvW25hbWVdID09IFwidW5kZWZpbmVkXCIgPyBjbG9uZShmcm9tW25hbWVdLCBudWxsKSA6IHRvW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmU7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChzcmMsIGluc3RhbmNlKVxue1xuICAgIGlmIChpc05vZGUoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLnNsaWNlKCk7XG5cbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHNyYy5iaW5kKGluc3RhbmNlIHx8IHt9KTtcblxuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNyYyk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNyY1trZXldO1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBjb3B5KHZhbHVlLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHNyYyA6IHt9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNyYztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHk7XG4iLCIvKlxuXG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSk7XG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSwgdHJ1ZSk7XG5jb25zdCBhcnIxID0gY3JlYXRlQXJyYXkoNSwgMSk7XG5jb25zdCBhcnIyID0gY3JlYXRlQXJyYXkoNSwgJ2hlbGxvIHdvcmxkJyk7XG5jb25zdCBhcnIzID0gY3JlYXRlQXJyYXkoNSwgWzEwMCwyMDAsMzAwXSk7XG5jb25zdCBhcnI0ID0gY3JlYXRlQXJyYXkoNSwge2E6J0EnLGI6J0InLGM6J0MnfSk7XG5cbiovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBudW1cbiAqIEBwYXJhbSBmaWxsXG4gKiBAcmV0dXJucyB7YW55W119XG4gKi9cbmNvbnN0IGNyZWF0ZUFycmF5ID0gZnVuY3Rpb24gKG51bSwgZmlsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGZpbGwgPT09ICdzdHJpbmcnICl7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkobnVtKS5maWxsKGZpbGwpO1xuICAgIH1cblxuICAgIGFyciA9IG5ldyBBcnJheShudW0pLmZpbGwoMCk7XG4gICAgYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgciA9IGZpbGwuY2FsbChmaWxsLCBpLCBpKTtcbiAgICAgICAgICAgIGFycltpXSA9IHR5cGVvZiByID09PSAnYm9vbGVhbicgfHwgciA/IHIgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsKSkgYXJyW2ldID0gZmlsbFtpXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZmlsbFtpXSA7XG4gICAgICAgIGVsc2UgYXJyW2ldID0gZmlsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFycmF5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cnMsIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgICAgaXNfYXR0ciA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlT2Yoc3JjLCAnb2JqZWN0JykgJiYgIWlzTm9kZShzcmMpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9odG1sID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9jaGlsZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGluc2VydF9odG1sKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSlcbiAgICAgICAgICAgICAgICBpbnNlcnRfY2hpbGQoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIGluc2VydChzcmNbaV0pO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzX2F0dHIoYXR0cnMpKSB7XG4gICAgICAgIGlubmVyID0gYXR0cnM7XG4gICAgICAgIGF0dHJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzKVxuICAgICAgICBmb3IgKGxldCBrIGluIGF0dHJzKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXG4gICAgaWYgKGlubmVyKVxuICAgICAgICBpbnNlcnQoaW5uZXIpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChhcHBlbmQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmIChpc05vZGUoYXBwZW5kKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXBwZW5kKTtcblxuICAgIGlmICh0eXBlT2YoYXBwZW5kLCAnc3RyaW5nJykpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0cjJub2RlKGFwcGVuZCkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJcbmNvbnN0IGRlY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgcGFpcnMgPSAocXVlcnlbMF0gPT09ICc/JyA/IHF1ZXJ5LnN1YnN0cigxKSA6IHF1ZXJ5KS5zcGxpdCgnJicpO1xuICAgIHBhaXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICByZXN1bHRbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdIHx8ICcnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmluZWRJbiA9IGZ1bmN0aW9uIChzdGFjaywgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RhY2sgJiYgc3RhY2tbdmFsdWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkSW47XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuLypjb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGxpc3QuY2hpbGROb2RlcyksIGNhbGxiYWNrLCB0bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07Ki9cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgaW5zdGFuY2UgPSB7fSkge1xuICAgIGxldCB0eXBlID0gdHlwZU9mKGxpc3QpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goKGksIHYsIGEpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGksIHYsIGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTm9kZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBlYWNoKEFycmF5LmZyb20obGlzdCksIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBlYWNoKFtsaXN0XSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoa2V5KSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBrZXksIGxpc3Rba2V5XSwgbGlzdCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChsaXN0LnNwbGl0KFwiXCIpLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICBjb25zdCBhcnIgPSAobmV3IEFycmF5KGxpc3QpKS5maWxsKDApO1xuICAgICAgICAgICAgbGlzdCA9IGVhY2goYXJyLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG59O1xuXG5lYWNoLnBhcmVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbn07XG5cbmVhY2guZmlsdGVyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGNhbGxiYWNrLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWFjaDtcbiIsIlxuY29uc3QgZW5jb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdCArPSAoKHJlc3VsdC5sZW5ndGgpID8gJyYnIDogJz8nKSArIGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5jb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGV4aXN0cyA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQgJiYgc3JjICE9PSBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhpc3RzO1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhdGlvbjtcbiIsIlxuY29uc3QgZ2V0V2luZG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpbmRvdyBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdpbmRvdztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cbi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5jb25zdCBodHRwUmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQga2V5O1xuICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGE6IGNvbmZpZy5kYXRhIHx8IHt9LFxuICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMgfHwge30sXG4gICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgdXNlRm9ybURhdGE6IGNvbmZpZy51c2VGb3JtRGF0YSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhIWNvbmZpZy51c2VGb3JtRGF0YSxcbiAgICAgICAgYXN5bmM6IGNvbmZpZy5hc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLmFzeW5jLFxuICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICBwYXNzd29yZDogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29uY2F0ZVN0cmluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJicgKyBrZXkgKyAnPScgKyAob3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pIDogcGFyYW1zW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRoaXNJbnN0YW5jZSA9ICh0eXBlT2YodGhpc0luc3RhbmNlLCAnb2JqZWN0JykpID8gdGhpc0luc3RhbmNlIDoge307XG5cbiAgICAvLyBkYXRhIHByZXBhcmVcbiAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBvcHRpb25zLmFjdGlvbi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyc7XG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gcmVzZXQgdG8gdXNlRm9ybURhdGEgaW4gdHJ1ZVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEoc2VuZERhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEuYXBwZW5kKGtleSwgb3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5kYXRhW2tleV0pIDogb3B0aW9ucy5kYXRhW2tleV0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBidWlsZCByZXF1ZXN0XG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMuYWN0aW9uLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcgJiYgIW9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpc0luc3RhbmNlLlhNTEh0dHBSZXF1ZXN0ID0geGhyO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSwgeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIuc2VuZE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHhoci5zZW5kKHNlbmREYXRhKTtcbiAgICByZXR1cm4geGhyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFJlcXVlc3Q7XG4iLCJpbXBvcnQgYXR0ciBmcm9tIFwiLi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4uL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi4vc3RhdGljL2dldERvY3VtZW50XCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL3N0cjJmcmFnbWVudFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGVuY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZW5jb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBkZWNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2RlY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtcbiAgICBleHRlbmRSZWN1cnNpdmVcbn0gIGZyb20gXCIuLi9zdGF0aWMvZXh0ZW5kXCI7XG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vc3RhdGljL2lzRW1wdHlcIjtcbmltcG9ydCBmaW5kT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdFwiO1xuaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdHNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcIi4uL3N0YXRpYy9mb3JtYXRcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IGxvYWRKUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1wiO1xuaW1wb3J0IGxvYWRKU1N5bmMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNTeW5jXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IG51bWJlcjJzdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9udW1iZXIyc3RyaW5nXCI7XG5pbXBvcnQgb24gZnJvbSBcIi4uL3N0YXRpYy9vblwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBwb3NpdGlvbk1vdXNlIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25Nb3VzZVwiO1xuaW1wb3J0IHJhbmRvbSwge1xuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZ1xufSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4uL3N0YXRpYy91cmlcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgY3JlYXRlQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVBcnJheVwiO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNTdHJpbmdcIjtcbmltcG9ydCBleGlzdHMgZnJvbSBcIi4uL3N0YXRpYy9leGlzdHNcIjtcbmltcG9ydCBpc0RlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9pc0RlZmluZWRcIjtcbmltcG9ydCBsb2FkQmxvYmZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQmxvYmZpbGVcIjtcbmltcG9ydCBsb2FkSlNPTiBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU09OXCI7XG5pbXBvcnQgbG9hZFRleHRmaWxlIGZyb20gXCIuLi9zdGF0aWMvbG9hZFRleHRmaWxlXCI7XG5pbXBvcnQgdG9IVE1MIGZyb20gXCIuLi9zdGF0aWMvdG9IVE1MXCI7XG5pbXBvcnQgdG9YTUwgZnJvbSBcIi4uL3N0YXRpYy90b1hNTFwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCB1bmlxQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy91bmlxQXJyYXlcIjtcbmltcG9ydCBpc051bWJlciBmcm9tIFwiLi4vc3RhdGljL2lzTnVtYmVyXCI7XG5cbmNvbnN0IFN0YXRpYyA9IHtcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBnZXREb2N1bWVudCxcbiAgICBnZXRXaW5kb3csXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIHN0cjJmcmFnbWVudCxcbiAgICBub2RlMnN0cixcbiAgICBxdWVyeSxcbiAgICBxdWVyeUFsbCxcbiAgICBzZWFyY2gsXG4gICAgZW5jb2RlR2V0UXVlcnksXG4gICAgZGVjb2RlR2V0UXVlcnksXG4gICAgaHR0cFJlcXVlc3QsXG4gICAgZGVmaW5lZCxcbiAgICBkZWZpbmVkSW4sXG4gICAgZXh0ZW5kLFxuICAgIGV4dGVuZFJlY3Vyc2l2ZSxcbiAgICBlYWNoLFxuICAgIGZpbmRPYmplY3QsXG4gICAgZmluZE9iamVjdHMsXG4gICAgZm9ybWF0LFxuICAgIGlzRW1wdHksXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIGxvYWRKU1N5bmMsXG4gICAgbWVyZ2UsXG4gICAgbnVtYmVyMnN0cmluZyxcbiAgICBvbixcbiAgICBwb3NpdGlvbixcbiAgICBwb3NpdGlvbk1vdXNlLFxuICAgIHJhbmRvbSxcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmcsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG4gICAgY29weSxcbiAgICBjbG9uZSxcbiAgICB0b09iamVjdCxcbiAgICBpc0hUTUxTdHJpbmcsXG4gICAgY3JlYXRlQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgZXhpc3RzLFxuICAgIGlzRGVmaW5lZCxcbiAgICBsb2FkQmxvYmZpbGUsXG4gICAgbG9hZEpTT04sXG4gICAgbG9hZFRleHRmaWxlLFxuICAgIHRvSFRNTCxcbiAgICB0b1hNTCxcbiAgICBzdHlsaXplcixcbiAgICB1bmlxQXJyYXksXG4gICAgaXNOdW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWM7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGluamVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGF0YSwgYXBwZW5kLCB0bylcbntcbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnYXJyYXknKSkge1xuICAgICAgICBzZWxlY3Rvci5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpbmplY3QoZWxlbSwgZGF0YSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNEZWZpbmVkO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIi8vIGltcG9ydCBET01QYXJzZXIgZnJvbSAnRE9NUGFyc2VyJztcblxuY29uc3QgaXNIVE1MU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCB0cnVlc3QgPSBmYWxzZSkge1xuXG4gICAgaWYgKHRydWVzdCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gISFkaXYuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnRyaW0oKS5zdWJzdHJpbmcoMCwgMSkgPT09ICc8Jztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzSFRNTFN0cmluZztcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiXG5jb25zdCBpc051bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIpICYmICFpc05hTih2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBpc051bWJlcjtcbiIsIlxuY29uc3QgaXNTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3RyaW5nO1xuIiwiXG5jb25zdCBsb2FkQmxvYmZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgICAgLnRoZW4oYmxvYiA9PiBvbmxvYWQoYmxvYikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmxvYmZpbGU7IiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmNvbnN0IGxvYWRKU09OID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gb25sb2FkKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTT047IiwiXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5sb2FkSlNTeW5jICgge1xuICogICAgICBteXNjcmlwdDE6ICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICBteXNjcmlwdDI6ICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAubG9hZEpTU3luYyAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmxvYWRKU1N5bmNcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBsb2FkSlNTeW5jID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgaWYgKHR5cGVPZihzcmNzLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialsncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIHNyYzogKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNTeW5jO1xuIiwiXG5jb25zdCBsb2FkVGV4dGZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4odGV4dCA9PiBvbmxvYWQodGV4dCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVGV4dGZpbGU7IiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiXG5leHBvcnQgY29uc3QgbnVtYmVyMnN0cmluZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgbGV0IGU7XG4gICAgaWYgKE1hdGguYWJzKHgpIDwgMS4wKSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJ2UtJylbMV0pO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgeCAqPSBNYXRoLnBvdygxMCxlLTEpO1xuICAgICAgICAgICAgeCA9ICcwLicgKyAobmV3IEFycmF5KGUpKS5qb2luKCcwJykgKyB4LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnKycpWzFdKTtcbiAgICAgICAgaWYgKGUgPiAyMCkge1xuICAgICAgICAgICAgZSAtPSAyMDtcbiAgICAgICAgICAgIHggLz0gTWF0aC5wb3coMTAsZSk7XG4gICAgICAgICAgICB4ICs9IChuZXcgQXJyYXkoZSsxKSkuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyMnN0cmluZztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIi8vIGltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cblxuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgICAgICBkYXRhLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBkYXRhLmVsZW1lbnQgPSB3aW5kb3c7XG4gICAgfVxuICAgIGVsc2VcbiAgICBpZiAoZWxlbSAmJiBlbGVtLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIGNsaWVudFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRUb3AgfHwgMCxcbiAgICAgICAgICAgICAgICBjbGllbnRMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICAgICAgICAgIGRhdGEueSA9IE1hdGgucm91bmQocmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3ApO1xuICAgICAgICAgICAgZGF0YS54ID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCk7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGRhdGEudG9wID0gcmVjdC50b3AgKyBwYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGRhdGEubGVmdCA9IHJlY3QubGVmdCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5yaWdodCA9IHJlY3QucmlnaHQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEuYm90dG9tID0gcmVjdC5ib3R0b20gKyBwYWdlWE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzICYmIGVsZW1lbnRzWzBdID8gZWxlbWVudHNbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tICcuL2dldERvY3VtZW50JztcblxuY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcblxuY29uc3QgcXVlcnlBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmcm9tID0gZnJvbSB8fCBkb2M7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZU9mKGZyb20sICdzdHJpbmcnKSlcbiAgICAgICAgZnJvbSA9IGRvYy5xdWVyeVNlbGVjdG9yKGZyb20pO1xuICAgIGlmIChmcm9tKVxuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZnJvbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB7fSwgZWxlbWVudCl9KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmltcG9ydCB7QUJDLCBMRVRURVJfQ09OU09OQU5ULCBMRVRURVJfVk9XRUwsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYsIHdpdGhOdW1iZXJzID0gZmFsc2UpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gd2l0aE51bWJlcnNcbiAgICAgICAgPyBBQkMgKyBOVU1CRVJTLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKVxuICAgICAgICA6IEFCQy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz0gYWJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFicy5sZW5ndGgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21IdW1hbml6ZVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBjb25zb25hbnQgPSAgTEVUVEVSX0NPTlNPTkFOVC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWwgPSAgTEVUVEVSX1ZPV0VMLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbEZpcnN0ID0gKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA1O1xuICAgIGZvciAoaSA9IHNpemUgLyAyICsgMTsgaSA+IDA7IGkgLS0pIHtcbiAgICAgICAgbGV0IHMxID0gY29uc29uYW50W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbnNvbmFudC5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHMyID0gdm93ZWxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdm93ZWwubGVuZ3RoKV07XG4gICAgICAgIHN0cmluZyArPSB2b3dlbEZpcnN0ID8gczEgKyBzMiA6IHMyICsgczE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc2l6ZSk7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cbi8qKlxuICogc2VhcmNoKCAndWwgPiBsaScsICAnZGF0YS1saW5rJywgTm9kZUVsZW1lbnQpO1xuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGF0dHJcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcbmNvbnN0IHN0cjJmcmFnbWVudCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJmcmFnbWVudDtcbiIsImltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4vc3RyMmZyYWdtZW50XCI7XG5cbmNvbnN0IHN0cjJub2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGZyYWdtZW50ID0gc3RyMmZyYWdtZW50KHN0cmluZyk7XG5cbiAgICBzd2l0Y2ggKGZyYWdtZW50LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZyYWdtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJcbmNvbnN0IHN0eWxpemVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpemVyO1xuIiwiLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5jb25zdCB0b0hUTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvSFRNTDtcbiIsIlxuY29uc3QgdG9PYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIDoge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvT2JqZWN0O1xuIiwiXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmNvbnN0IHRvWE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC94bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5kb2N1bWVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9YTUw7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsIlxuY29uc3QgdW5pcUFycmF5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgc2VsZikge1xuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXFBcnJheTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==