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

var _Roxy = __webpack_require__(/*! ./Roxy */ "./src/components/Roxy.js");

var _Roxy2 = _interopRequireDefault(_Roxy);

var _clone = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

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
            /*
            const property = toObject(root);
            property.template = root.template.cloneNode(root);
            property.id = id || property.id + '_' + (new Date()).getTime();
            root.template.parentNode.appendChild(property.template);
            return Component(property);
            */
        };

        if (typeof comp.before === 'function' && !comp.initialized) {
            comp.before();
        }

        if (typeof comp.template === 'string') {
            comp.template = (0, _str2node2.default)(comp.template);
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

        if (typeof comp.init === 'function' && !comp.initialized) {
            comp.initialized = true;
            comp.init();
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
                if (comp.components[key] && comp.components[key].hasOwnProperty('key')) {
                    comp.components[key].parent = comp;
                }
                comp.children.push(comp.components[key]);
            });
        }

        if ((0, _isNode2.default)(comp.template)) {
            comp.node = (0, _search2.default)('[data-node]', 'data-node', comp.template);
            comp.on = (0, _search2.default)('[data-on]', 'data-on', comp.template);
        }

        if (typeof comp.complete === 'function' && !comp.completed) {
            if (document) {
                document.addEventListener('DOMContentLoaded', function () {
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
        components: {},
        children: [],
        parent: {}
    }, config);
};

exports.default = Component;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoveClip = function MoveClip(config) {
    var element = config.element;

    var clip = (0, _Clip2.default)(element);

    element.setAttribute('data-miveclip', config.id || 'miveclip');

    var root = {
        element: element,
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
        }
    };

    Object.keys(config).map(function (key) {
        root[key] = config[key];
    });

    root.clone = function () {
        var append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var cloneProperty = (0, _toObject2.default)(root);
        cloneProperty.element = root.element.cloneNode(root);
        root.element.parentNode.appendChild(cloneProperty.element);
        return MoveClip(cloneProperty);
    };

    return root;
};

exports.default = MoveClip;

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
}; /**
    *
   
   
    const rxData = Roxy({
           title: '',
           body: '',
       });
   
    function setTo(id, context) {
           const elem = query('#' + id);
           inject(elem, context);
       }
   
    rxData.event((key, values)=>{
           setTo(key, values);
       });
   
    Timer.timeout(() => {
           rxData.dispatch('title', 'Hello friend');
           rxData.dispatch('body', 'Do you happy now?');
       }, 2000);
   
    Timer.timeout(() => {
           rxData.dispatch('body', 'No yes ofcourse');
       }, 4000);
    *
    *
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

var Scene = function Scene(layers) {
    var root = {
        current: 'default',
        layers: {
            default: function _default() {
                console.log('[Default Scene]');
            }
        }
    };

    root.add = function (name, callback) {
        root.layers[name] = callback;
    };

    root.get = function (name) {
        return root.layers[name];
    };

    root.next = function () {
        var lest = false;
        var keys = Object.keys(root.layers);
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] === root.current) {
                if (typeof keys[i + 1] !== "undefined") lest = keys[i + 1];
                if (i === keys.length - 1) {
                    lest = keys[0];
                }
                break;
            }
        }
        root.show(lest);
    };

    root.show = function (key) {
        root.current = key || 'default';
        var cb = root.layers[root.current];

        if (typeof cb === "function") {
            cb.call(cb);
        }
    };

    root.clone = function () {
        return (0, _clone2.default)(this);
    };

    if (layers && layers.constructor === Object) {
        Object.keys(layers).forEach(function (key) {
            root.add(key, layers[key]);
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
    Roxy: _Roxy2.default
};

Animate.Static = Animate.Util = _static2.default;

if (window) {
    window.Animate = Animate;
}

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

var _typeOfStrict = __webpack_require__(/*! ./typeOfStrict */ "./src/static/typeOfStrict.js");

var _typeOfStrict2 = _interopRequireDefault(_typeOfStrict);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copy = function copy(src, instance) {
    if ((0, _isNode2.default)(src)) return src.cloneNode(true);

    if (Array.isArray(src)) return src.slice();

    if (typeof src === 'function') return src.bind(instance || {});

    if ((0, _typeOf2.default)(src, 'object')) {
        // return Object.assign({}, src);
        console.log(src, instance);
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
    if (document) return document;else throw new Error('document object not exist!');
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
    if (location) return location;else throw new Error('location object not exist!');
};

exports.default = getLocation;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Static = {
    attr: _attr2.default,
    createElement: _createElement2.default,
    createFragment: _createFragment2.default,
    css: _css2.default,
    domLoaded: _domLoaded2.default,
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
    redirect: _redirect2.default,
    typeOf: _typeOf2.default,
    typeOfStrict: _typeOfStrict2.default,
    uri: _uri2.default,
    copy: _copy2.default,
    clone: _clone2.default,
    toObject: _toObject2.default,
    isHTMLString: _isHTMLString2.default,
    createArray: _createArray2.default
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
            inject(elem, data, append, to);
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

var isHTMLString = function isHTMLString(value) {

    var div = document.createElement('div');
    div.innerHTML = value;
    return !!div.childElementCount;
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
exports.randomItem = exports.randomString = exports.randomNumber = exports.randomColor = exports.random = undefined;

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

    var i = void 0,
        string = '';
    var abs = (_abc.ABC + _abc.NUMBERS).toLowerCase().split('');
    for (i = size; i > 0; i--) {
        string += abs[Math.floor(Math.random() * abs.length)];
    }
    return string;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW92ZUNsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hYmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZW5jb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0hUTUxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTU3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL21lcmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbm9kZTJzdHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9udW1iZXIyc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5QWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIyZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIybm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIl0sIm5hbWVzIjpbIkNsaXAiLCJlbGVtZW50Iiwicm9vdCIsIk5vZGUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwieCIsInkiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsIm1vdmVUbyIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNvcHlUbyIsIm9uIiwiZXZlbnQiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9uZSIsIkNvbXBvbmVudCIsImNvbmZpZyIsImxpc3QiLCJjb21wIiwiY3JlYXRlIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbXBvbmVudENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2xvbmVkIiwidGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJiZWZvcmUiLCJpbml0aWFsaXplZCIsIm1ldGhvZHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJkYXRhIiwicHVzaCIsIm5vZGUiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwiY2FsbCIsInByb3BzIiwib3ZlcnJpZGUiLCJLZXlib2FyZEV2ZW50TWFuYWdlciIsInN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2tzTGlzdCIsImFkZFN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2siLCJtYXAiLCJ0eXBlIiwia2V5Q29kZSIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwiZWFjaENhbGxiYWNrc0xpc3QiLCJlYWNoQ2FsbGJhY2siLCJzZXR1cExpc3RlbmVycyIsImFkZCIsInJtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVhY2giLCJ3aXRoQ29uZGl0aW9uS2V5IiwicHJlc3MiLCJ1cCIsImRvd24iLCJNb3ZlQ2xpcCIsImNsaXAiLCJ2YWx1ZSIsInN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kIiwiY2xvbmVQcm9wZXJ0eSIsIlJveHkiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwiZGVmYXVsdCIsInByb3h5IiwiUHJveHkiLCJnZXQiLCJvYmoiLCJwcm9wIiwic2V0IiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJmaWxsIiwib2JzZXJ2ZSIsInRvIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsImluZGV4IiwibmFtZSIsInJ4IiwiZXZlbnRDdXJzb3IiLCJTY2VuZSIsImxheWVycyIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwibmV4dCIsImxlc3QiLCJpIiwic2hvdyIsImNiIiwiY29uc3RydWN0b3IiLCJTdGVwc1NjZW5lIiwic3RlcHMiLCJpdGVyYXRpb24iLCJsb29wIiwic3RlcF9pdGVyYXRpb24iLCJzdGVwX3N0b3AiLCJzdGVwX2NhbGxiYWNrX2VhY2giLCJzdGVwX2NhbGxiYWNrcyIsInN0YXJ0IiwicGxheSIsInN0b3AiLCJlbmQiLCJkZWxheSIsIm1zIiwic2V0VGltZW91dCIsImdvdG8iLCJvYmplY3QiLCJlYWNoU3RlcHMiLCJjdXJyZW50Q2FsbGJhY2tPYmplY3QiLCJUaW1lciIsInJlcGVhdCIsInRoaXNJbnN0YW5jZSIsIml0ZXJhdG9yIiwidGhpc0luc3QiLCJpc05hTiIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsIkFuaW1hdGUiLCJTdGF0aWMiLCJVdGlsIiwid2luZG93IiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJhdHRyIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIkRhdGUiLCJSZWdFeHAiLCJGdW5jdGlvbiIsIlN0cmluZyIsIk51bWJlciIsIkJvb2xlYW4iLCJjb3B5Iiwic3JjIiwiaW5zdGFuY2UiLCJzbGljZSIsImNyZWF0ZUFycmF5IiwibnVtIiwiYXJyIiwiciIsInVuZGVmaW5lZCIsImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJhdHRycyIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsImNyZWF0ZUZyYWdtZW50IiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY3NzIiwic2VsZWN0b3IiLCJwcm9wZXJ0aWVzIiwiZWxlbWVudHMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJzcGxpdCIsInAyIiwicG4iLCJpeCIsIm8iLCJ0cmltIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiZGVjb2RlR2V0UXVlcnkiLCJxdWVyeSIsInBhaXJzIiwic3Vic3RyIiwiaXRlbSIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb21Mb2FkZWQiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidiIsImEiLCJOb2RlTGlzdCIsImZpbHRlciIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZWxlbSIsImVuY29kZUdldFF1ZXJ5IiwicGFyYW1zIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXh0ZW5kIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJwYXJhbSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsInJlZyIsInJlcGxhY2UiLCJtYXRjaCIsIm51bWJlciIsImdldERvY3VtZW50IiwiRXJyb3IiLCJnZXRMb2NhdGlvbiIsImxvY2F0aW9uIiwiaHR0cFJlcXVlc3QiLCJzZW5kRGF0YSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3B0aW9ucyIsImFjdGlvbiIsInVybCIsImhyZWYiLCJtZXRob2QiLCJoZWFkZXJzIiwidXNlRW5jb2RlIiwidXNlRm9ybURhdGEiLCJhc3luYyIsInVzZXIiLCJwYXNzd29yZCIsImNvbmNhdGVTdHJpbmciLCJGb3JtRGF0YSIsIkhUTUxGb3JtRWxlbWVudCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZE9wdGlvbnMiLCJzZW5kIiwiaW5qZWN0Iiwic3RyMm5vZGUiLCJzdHIyZnJhZ21lbnQiLCJub2RlMnN0ciIsInF1ZXJ5QWxsIiwic2VhcmNoIiwiaXNFbXB0eSIsImlzTm9kZSIsImxvYWRDU1MiLCJsb2FkSlMiLCJsb2FkSlNTeW5jIiwibWVyZ2UiLCJudW1iZXIyc3RyaW5nIiwicG9zaXRpb24iLCJwb3NpdGlvbk1vdXNlIiwicmFuZG9tIiwicmFuZG9tQ29sb3IiLCJyYW5kb21JdGVtIiwicmFuZG9tTnVtYmVyIiwicmFuZG9tU3RyaW5nIiwicmVkaXJlY3QiLCJ0eXBlT2YiLCJ0eXBlT2ZTdHJpY3QiLCJ1cmkiLCJ0b09iamVjdCIsImlzSFRNTFN0cmluZyIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiZGl2IiwiY2hpbGRFbGVtZW50Q291bnQiLCJub2RlVHlwZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwib25sb2FkIiwib25lcnJvciIsImxpbmsiLCJNYXRoIiwidG9TdHJpbmciLCJyZWwiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0Iiwic3JjcyIsInNjcmlwdHMiLCJlIiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb250YWluZXIiLCJhYnMiLCJwb3ciLCJqb2luIiwiYnViYmxlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJyb3VuZCIsInRvcCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIk1vdXNlRXZlbnQiLCJlcnJvciIsImNsaWVudFgiLCJjbGllbnRZIiwicXVlcnlTZWxlY3RvckFsbCIsIm1pbiIsIm1heCIsImZsb29yIiwibGV0dGVycyIsImNvbG9yIiwic2l6ZSIsImNlaWwiLCJyZXMiLCJ0b0xvd2VyQ2FzZSIsImxvYyIsInF1ZXJ5RWxlbWVudHMiLCJoYXNBdHRyaWJ1dGUiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImZpcnN0Q2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaW1wbGVUeXBlcyIsInQiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6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N0UsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTmY7Ozs7OztBQUdBLElBQU1DLE1BQU0sYUFBVUEsSUFBVixFQUFlO0FBQ3ZCLFFBQU1rRSxNQUFNLDRCQUFaO0FBQ0FsRSxXQUFNQSxRQUFPa0UsSUFBSVcsUUFBakI7QUFDQTdFLFdBQU1BLEtBQUl2RCxPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBT3VELEtBQUkzUSxNQUFKLEdBQWEsQ0FBYixJQUFrQjJRLEtBQUluSSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsR0FBdEMsR0FBNEMsTUFBTW1JLElBQWxELEdBQXdEQSxJQUEvRDtBQUNILENBTEQ7O2tCQU9lQSxHIiwiZmlsZSI6ImFuaW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHJldHVybnMgeyBib3R0b20sIGVsZW1lbnQsIGhlaWdodCwgbGVmdCwgcmlnaHQsIHRvcCwgd2lkdGgsIHgsIHkgfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENsaXAgPSBmdW5jdGlvbiAoZWxlbWVudClcbntcbiAgICBjb25zdCByb290ID0gcG9zaXRpb24oZWxlbWVudCk7XG5cbiAgICBpZiAocm9vdC5lbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwb3NpdGlvbihlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICByb290LnggPSByb290LnggLSBwYXJlbnQueDtcbiAgICAgICAgcm9vdC55ID0gcm9vdC55IC0gcGFyZW50Lnk7XG4gICAgICAgIHJvb3QuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpcCcsIHJvb3QuZWxlbWVudC5pZCB8fCAnY2xpcCcpO1xuICAgIH1cblxuICAgIHJvb3QubW92ZVRvID0gZnVuY3Rpb24gKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5lbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuY29weVRvID0gZnVuY3Rpb24gKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcm9vdC5lbGVtZW50ID0gY29weShyb290LmVsZW1lbnQpO1xuICAgICAgICByb290Lm1vdmVUbyhwYXJlbnRFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgcm9vdC5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKVxuICAgIH07XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpcDtcbiIsImltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vUm94eVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuXG4vKipcbiAqXG5jb25maWc6XG4gICAgaWQ6ICdpZCcsXG4gICAgcHJvcHM6IHt9LFxuICAgIHRlbXBsYXRlOiBgYCxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHt9LFxuICAgIGNvbXBsZXRlICgpIHt9LFxuICAgIG1ldGhvZHM6IHt9LFxuICAgIG5vZGU6IHt9LFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcblxuQ29tcG9uZW50KHtcbiAgICBpZDogJ0V4dGVybmFsVGVtcGxhdGVDb21wb25lbnQnLFxuICAgIHByb3BzOiBbJ3RpdGxlJ10sXG4gICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZScsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGl0ZXJhdG9yOiAwLFxuICAgIH0sXG4gICAgY29tcGxldGUgKGFwcCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlWyd0aXRsZSddKVxuICAgICAgICB0aGlzLm5vZGVbJ3RpdGxlJ10udGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhZGQgKGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pdGVyYXRvci50ZXh0Q29udGVudCA9ICsrIHRoaXMuZGF0YS5pdGVyYXRvciA7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gLS0gdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICB9XG59KTtcblxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZ2V0IHByb3BlcnR5IGJ5IGlkIGtleXdvcmRcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWcuaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcCA9IENvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY29tcG9uZW50c1tpZF0gPyBjb21wLmNvbXBvbmVudHNbaWRdIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudENoaWxkcmVuID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jaGlsZHJlbi5maW5kKChjb21wb25lbnQpID0+IGNvbXBvbmVudC5pZCA9PT0gaWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY2xvbmUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZCA9IGNsb25lKHRoaXMpO1xuICAgICAgICAgICAgY2xvbmVkLnRlbXBsYXRlID0gY2xvbmVkLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSB0b09iamVjdChyb290KTtcbiAgICAgICAgICAgIHByb3BlcnR5LnRlbXBsYXRlID0gcm9vdC50ZW1wbGF0ZS5jbG9uZU5vZGUocm9vdCk7XG4gICAgICAgICAgICBwcm9wZXJ0eS5pZCA9IGlkIHx8IHByb3BlcnR5LmlkICsgJ18nICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHJvb3QudGVtcGxhdGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChwcm9wZXJ0eS50ZW1wbGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gQ29tcG9uZW50KHByb3BlcnR5KTtcbiAgICAgICAgICAgICovXG4gICAgICAgIH07XG5cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuYmVmb3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5tZXRob2RzICYmIE9iamVjdC52YWx1ZXMoY29tcC5tZXRob2RzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAubWV0aG9kcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLm1ldGhvZHNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wLm1ldGhvZHNba2V5XSA9IGNvbXAubWV0aG9kc1trZXldLmJpbmQoY29tcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmRhdGEgJiYgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmRhdGFba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmRhdGFba2V5XSA9IGNvbXAuZGF0YVtrZXldLmJpbmQoY29tcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY29tcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAuZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuY29tcG9uZW50cyAmJiBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGNvbXAuY29tcG9uZW50c1trZXldICYmIGNvbXAuY29tcG9uZW50c1trZXldLmhhc093blByb3BlcnR5KCdrZXknKSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBvbmVudHNba2V5XS5wYXJlbnQgPSBjb21wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wLmNoaWxkcmVuLnB1c2goY29tcC5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBjb21wLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgY29tcC5vbiA9IHNlYXJjaCgnW2RhdGEtb25dJywgJ2RhdGEtb24nLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgICAgICByZXR1cm4gY29tcDtcbiAgICB9XG59O1xuQ29tcG9uZW50Lmxpc3QgPSB7fTtcbkNvbXBvbmVudC5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIHRlbXBsYXRlOiBmYWxzZSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiB7fSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJcbmNvbnN0IEtleWJvYXJkRXZlbnRNYW5hZ2VyID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zdCBzdG9yYWdlID0ge307XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBhZGRTdG9yYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF0pIHN0b3JhZ2VbZXZlbnRdID0ge307XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF1ba2V5XSkgc3RvcmFnZVtldmVudF1ba2V5XSA9IFtdO1xuICAgICAgICBzdG9yYWdlW2V2ZW50XVtrZXldLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBiYXNlQ2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlKS5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2VbdHlwZV0pLm1hcCgoa2V5Q29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCBzdG9yYWdlW3R5cGVdW2tleUNvZGVdICkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVt0eXBlXVtrZXlDb2RlXS5tYXAoKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gdHlwZSAmJiBwYXJzZUludChrZXlDb2RlKSA9PT0gZXZlbnQua2V5Q29kZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGV2ZW50LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWFjaENhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBlYWNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGNhbGxiYWNrO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXR1cExpc3RlbmVycyAoKSB7XG4gICAgICAgIGNvbnN0IGFkZCA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBybSA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBybSgpO1xuICAgICAgICBhZGQoKTtcbiAgICB9XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlYWNoKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgZWFjaENhbGxiYWNrKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICB3aXRoQ29uZGl0aW9uS2V5KGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBhZGRTdG9yYWdlKGV2ZW50LCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXNzKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5cHJlc3MnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXAoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXl1cCcsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBkb3duKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5ZG93bicsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkRXZlbnRNYW5hZ2VyO1xuIiwiaW1wb3J0IENsaXAgZnJvbSBcIi4vQ2xpcFwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcblxuY29uc3QgTW92ZUNsaXAgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgY29uc3Qge2VsZW1lbnR9ID0gY29uZmlnO1xuICAgIGNvbnN0IGNsaXAgPSBDbGlwKGVsZW1lbnQpO1xuXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyk7XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUud2lkdGggPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLndpZHRoID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgeCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC55XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLndpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC5oZWlnaHRcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByb290W2tleV0gPSBjb25maWdba2V5XVxuICAgIH0pO1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uIChhcHBlbmQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjbG9uZVByb3BlcnR5ID0gdG9PYmplY3Qocm9vdCk7XG4gICAgICAgIGNsb25lUHJvcGVydHkuZWxlbWVudCA9IHJvb3QuZWxlbWVudC5jbG9uZU5vZGUocm9vdCk7XG4gICAgICAgIHJvb3QuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNsb25lUHJvcGVydHkuZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBNb3ZlQ2xpcChjbG9uZVByb3BlcnR5KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ2xpcDtcbiIsIi8qKlxuICpcblxuXG4gY29uc3QgcnhEYXRhID0gUm94eSh7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgYm9keTogJycsXG4gICAgfSk7XG5cbiBmdW5jdGlvbiBzZXRUbyhpZCwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBlbGVtID0gcXVlcnkoJyMnICsgaWQpO1xuICAgICAgICBpbmplY3QoZWxlbSwgY29udGV4dCk7XG4gICAgfVxuXG4gcnhEYXRhLmV2ZW50KChrZXksIHZhbHVlcyk9PntcbiAgICAgICAgc2V0VG8oa2V5LCB2YWx1ZXMpO1xuICAgIH0pO1xuXG4gVGltZXIudGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJ4RGF0YS5kaXNwYXRjaCgndGl0bGUnLCAnSGVsbG8gZnJpZW5kJyk7XG4gICAgICAgIHJ4RGF0YS5kaXNwYXRjaCgnYm9keScsICdEbyB5b3UgaGFwcHkgbm93PycpO1xuICAgIH0sIDIwMDApO1xuXG4gVGltZXIudGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJ4RGF0YS5kaXNwYXRjaCgnYm9keScsICdObyB5ZXMgb2Zjb3Vyc2UnKTtcbiAgICB9LCA0MDAwKTtcbiAqXG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIHNldCgqPSwgKj0pOiAqLCBnZXQoKik6ICosIGFjdGlvbigqPSwgKj0pOiAqLCBmaWxsKCo9LCAqPSk6ICp9fFJveHl8e318bnVsbHxib29sZWFufVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuXG5jb25zdCBSb3h5ID0gZnVuY3Rpb24gKHBheWxvYWQpXG57XG4gICAgY29uc3QgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzID0ge1xuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldChvYmosIHByb3AsIHZhbHVlKSB7XG5cbiAgICAgICAgICAgIG9ialtwcm9wXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdICYmIHR5cGVvZiBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0uY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0LmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvbGRlciBuYW1lOiBzZWV8c2V0P1xuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBwYXlsb2FkXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGF0Y2goa2V5LCBwYXlsb2FkKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0ga2V5LmNhbGwoe30sIHByb3h5KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGwocmVzdWx0KVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXlsb2FkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXlsb2FkLmNhbGwoe30sIHByb3h5W2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWN0aW9uKClcbiAgICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBldmVudChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBjaGFuZ2UgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2ZShrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID0ga2V5O1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW2tleV0gPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA/IHByb3h5W2tleV0gOiBjb3B5KHByb3h5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaWxsKHBheWxvYWQsIHRvKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm94eVt0b10pXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eVt0b10gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dW2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBwcm94eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQcm94eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBSb3h5O1xuIiwiaW1wb3J0IFJveHkgZnJvbSBcIi4vUm94eVwiO1xuXG4vKipcbiAqIGNvbnN0IHJ4ID0gUm94eUxpc3RlbmVyICh7XG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogfSlcbiAqIHJ4LnNldCgpO1xuICogcnguZGlzcGF0Y2goKTtcbiAqXG4gKiByeC5hY3Rpb24oKTtcbiAqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgZGlzcGF0Y2goKj0sICo9KTogUm94eSwgZ2V0KCopOiAqLCBldmVudCgqPSwgKj0pOiB0aGlzLCBmaWxsKCo9LCAqPSk6IHRoaXN9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFJveHlMaXN0ZW5lciA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG5cbiAgICBjb25zdCBhY3Rpb25zID0ge1xuICAgICAgICBfX2FjdGlvbl9fKCkge1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbnNOYW1lcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMocGF5bG9hZCkubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG4gICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXSA9IHBheWxvYWRbZXZlbnROYW1lXTtcblxuICAgICAgICBpZiAodHlwZW9mIHBheWxvYWRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBldmVudE5hbWUgIT09IGFjdGlvbnMuX19hY3Rpb25fXy5uYW1lKSB7XG4gICAgICAgICAgICBhY3Rpb25zTmFtZXNbZXZlbnROYW1lXSA9ICcnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByeCA9IFJveHkoYWN0aW9uc05hbWVzKTtcbiAgICAvL1xuICAgIHJ4LmFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zTmFtZXNcbiAgICB9O1xuXG4gICAgcnguZXZlbnQoKGV2ZW50Q3Vyc29yLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgYWN0aW9ucy5fX2FjdGlvbl9fLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucykubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudEN1cnNvciA9PT0gZXZlbnROYW1lICYmIHR5cGVvZiBhY3Rpb25zW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiByeDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJveHlMaXN0ZW5lcjtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cbmNvbnN0IFNjZW5lID0gZnVuY3Rpb24gKGxheWVycykge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGN1cnJlbnQ6ICdkZWZhdWx0JyxcbiAgICAgICAgbGF5ZXJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0ICgpIHsgY29uc29sZS5sb2coJ1tEZWZhdWx0IFNjZW5lXScpIH0sXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QubGF5ZXJzW25hbWVdID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgcm9vdC5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gcm9vdC5sYXllcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcm9vdC5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm9vdC5sYXllcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSByb290LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5zaG93KGxlc3QpO1xuICAgIH1cblxuICAgIHJvb3Quc2hvdyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcm9vdC5jdXJyZW50ID0ga2V5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgY29uc3QgY2IgPSByb290LmxheWVyc1tyb290LmN1cnJlbnRdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY2IuY2FsbChjYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIGlmIChsYXllcnMgJiYgbGF5ZXJzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGF5ZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QuYWRkKGtleSwgbGF5ZXJzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuLyoqXG4gKlxuICAgIGNvbnN0IHN0ZXBzQXR0YWNrSGVybyA9IFN0ZXBzU2NlbmUoe1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnc3RhcnRfYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGVyb19hdHRhY2tfYW5pbWF0aW9uJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdlbmRfYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZWFjaFN0ZXBzKGZ1bmN0aW9uIChjYk9iamVjdCwgaW5kZXgpIHt9KTtcbiAgICBzdGVwc0F0dGFja0hlcm8ubmV4dCgpO1xuXG4gICAgc3RlcHNBdHRhY2tIZXJvLmdvdG8oJ2hlcm9fYXR0YWNrX2FuaW1hdGlvbicpLm5leHQoKTtcbiAgICBzdGVwc0F0dGFja0hlcm8uc3RvcCgpO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHthbnl9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU3RlcHNTY2VuZSA9IGZ1bmN0aW9uIChjb25maWcgPSB7c3RlcHM6IFtdfSkge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGl0ZXJhdGlvbjogMCxcbiAgICAgICAgbG9vcDogY29uZmlnLmxvb3AgfHwgZmFsc2UsXG4gICAgICAgIHN0ZXBfaXRlcmF0aW9uOiAwLFxuICAgICAgICBzdGVwX3N0b3A6IGZhbHNlLFxuICAgICAgICBzdGVwX2NhbGxiYWNrX2VhY2g6IG51bGwsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tzOiBjb25maWcuc3RlcHMgfHwge30sXG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgcm9vdC5wbGF5KCk7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBzdG9wKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYXkoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXkobXMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2suY2FsbChyb290KTsgfSwgbXMpO1xuICAgICAgICB9LFxuICAgICAgICBnb3RvKG5hbWUpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja3MuZm9yRWFjaCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZWFjaFN0ZXBzKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX3N0b3ApIHJldHVybiByb290O1xuXG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX2l0ZXJhdGlvbiA+IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGlmICghcm9vdC5sb29wKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudENhbGxiYWNrT2JqZWN0ID0gcm9vdC5zdGVwX2NhbGxiYWNrc1tyb290LnN0ZXBfaXRlcmF0aW9uXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaC5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2tPYmplY3QuY2FsbGJhY2suY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgcm9vdC5pdGVyYXRpb24rK1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbisrXG5cbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwc1NjZW5lO1xuIiwiXG5jb25zdCBUaW1lciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKSB7XG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgdGhpcy5pdGVyYXRvciA9IDA7XG59O1xuXG5cblRpbWVyLnNldFRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnNldEludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhckludGVydmFsKGlkKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7IiwiXG5pbXBvcnQgQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL0NsaXAuanNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db21wb25lbnQuanNcIjtcbmltcG9ydCBLZXlib2FyZEV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL0tleWJvYXJkRXZlbnRNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgTW92ZUNsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9Nb3ZlQ2xpcC5qc1wiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL2NvbXBvbmVudHMvU2NlbmUuanNcIjtcbmltcG9ydCBTdGVwc1NjZW5lIGZyb20gXCIuL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qc1wiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL2NvbXBvbmVudHMvVGltZXIuanNcIjtcbmltcG9ydCBSb3h5TGlzdGVuZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanNcIjtcbmltcG9ydCBSb3h5IGZyb20gXCIuL2NvbXBvbmVudHMvUm94eS5qc1wiO1xuaW1wb3J0IFN0YXRpYyBmcm9tICcuL3N0YXRpYyc7XG5cbmNvbnN0IEFuaW1hdGUgPSB7XG4gICAgQ2xpcCxcbiAgICBDb21wb25lbnQsXG4gICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgTW92ZUNsaXAsXG4gICAgU2NlbmUsXG4gICAgU3RlcHNTY2VuZSxcbiAgICBUaW1lcixcbiAgICBSb3h5TGlzdGVuZXIsXG4gICAgUm94eSxcbn07XG5cblxuQW5pbWF0ZS5TdGF0aWMgPVxuICAgIEFuaW1hdGUuVXRpbCA9XG4gICAgICAgIFN0YXRpYztcblxuaWYgKHdpbmRvdykge1xuICAgIHdpbmRvdy5BbmltYXRlID0gQW5pbWF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTtcbiIsIlxuZXhwb3J0IGNvbnN0IExFVFRFUl9DT05TT05BTlQgPSAnQixDLEQsRixHLEgsSixLLEwsTSxOLFAsUSxSLFMsVCxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IExFVFRFUl9WT1dFTCA9ICdBLEUsSSxPLFUsWSc7XG5leHBvcnQgY29uc3QgQUJDID0gJ0EsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSLFMsVCxVLFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTlVNQkVSUyA9ICcwLDEsMiwzLDQsNSw2LDcsOCw5JztcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkQgPSAnJic7XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsIi8qKlxuICpcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBjbG9uZShmcm9tLCB0bylcbntcbiAgICBpZiAoZnJvbSA9PT0gbnVsbCB8fCB0eXBlb2YgZnJvbSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgIT09IE9iamVjdCAmJiBmcm9tLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgPT09IERhdGUgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEZ1bmN0aW9uIHx8XG4gICAgICAgIGZyb20uY29uc3RydWN0b3IgPT09IFN0cmluZyB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBOdW1iZXIgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gbmV3IGZyb20uY29uc3RydWN0b3IoZnJvbSk7XG4gICAgfVxuXG4gICAgdG8gPSB0byB8fCBuZXcgZnJvbS5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yIChuYW1lIGluIGZyb20pXG4gICAge1xuICAgICAgICB0b1tuYW1lXSA9IHR5cGVvZiB0b1tuYW1lXSA9PSBcInVuZGVmaW5lZFwiID8gY2xvbmUoZnJvbVtuYW1lXSwgbnVsbCkgOiB0b1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuXG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoc3JjLCBpbnN0YW5jZSlcbntcbiAgICBpZiAoaXNOb2RlKHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5zbGljZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiBzcmMuYmluZChpbnN0YW5jZSB8fCB7fSk7XG5cbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpKSB7XG4gICAgICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzcmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhzcmMsIGluc3RhbmNlKVxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiLypcblxuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUpO1xuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUsIHRydWUpO1xuY29uc3QgYXJyMSA9IGNyZWF0ZUFycmF5KDUsIDEpO1xuY29uc3QgYXJyMiA9IGNyZWF0ZUFycmF5KDUsICdoZWxsbyB3b3JsZCcpO1xuY29uc3QgYXJyMyA9IGNyZWF0ZUFycmF5KDUsIFsxMDAsMjAwLDMwMF0pO1xuY29uc3QgYXJyNCA9IGNyZWF0ZUFycmF5KDUsIHthOidBJyxiOidCJyxjOidDJ30pO1xuXG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbnVtXG4gKiBAcGFyYW0gZmlsbFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5jb25zdCBjcmVhdGVBcnJheSA9IGZ1bmN0aW9uIChudW0sIGZpbGwpIHtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaWxsID09PSAnc3RyaW5nJyApe1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KG51bSkuZmlsbChmaWxsKTtcbiAgICB9XG5cbiAgICBhcnIgPSBuZXcgQXJyYXkobnVtKS5maWxsKDApO1xuICAgIGFyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBmaWxsLmNhbGwoZmlsbCwgaSwgaSk7XG4gICAgICAgICAgICBhcnJbaV0gPSB0eXBlb2YgciA9PT0gJ2Jvb2xlYW4nIHx8IHIgPyByIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbCkpIGFycltpXSA9IGZpbGxbaV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGZpbGxbaV0gO1xuICAgICAgICBlbHNlIGFycltpXSA9IGZpbGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcnJheTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHBhaXJzID0gKHF1ZXJ5WzBdID09PSAnPycgPyBxdWVyeS5zdWJzdHIoMSkgOiBxdWVyeSkuc3BsaXQoJyYnKTtcbiAgICBwYWlycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbi8qY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59OyovXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIGluc3RhbmNlID0ge30pIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpLCB2LCBhKSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBpLCB2LCBhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChBcnJheS5mcm9tKGxpc3QpLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwga2V5LCBsaXN0W2tleV0sIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgbGlzdCA9IGVhY2gobGlzdC5zcGxpdChcIlwiKSwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY29uc3QgYXJyID0gKG5ldyBBcnJheShsaXN0KSkuZmlsbCgwKTtcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGFyciwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL3N0cjJmcmFnbWVudFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGVuY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZW5jb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBkZWNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2RlY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtleHRlbmRSZWN1cnNpdmV9ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtyYW5kb21Db2xvciwgcmFuZG9tSXRlbSwgcmFuZG9tTnVtYmVyLCByYW5kb21TdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBjcmVhdGVBcnJheSBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUFycmF5XCI7XG5cbmNvbnN0IFN0YXRpYyA9IHtcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykpXG4gICAgICAgIHNlbGVjdG9yID0gcXVlcnkoc2VsZWN0b3IsIHRvKTtcblxuICAgIGlmICghYXBwZW5kKVxuICAgICAgICBzZWxlY3Rvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKGlzTm9kZShkYXRhKSkge1xuICAgICAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mKGRhdGEsICdhcnJheScpKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGluamVjdChzZWxlY3RvciwgZGF0YVtpXSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gKCFhcHBlbmQpID8gZGF0YSA6IHNlbGVjdG9yLmlubmVySFRNTCArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCJcbmNvbnN0IGlzSFRNTFN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzSFRNTFN0cmluZztcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBjb25zdCBkYXRhID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gKEFCQyArIE5VTUJFUlMpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJycpO1xuICAgIGZvciAoaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgc3RyaW5nICs9XG4gICAgICAgICAgICBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gcmFuZG9tIGl0ZW0gZnJvbSBhcnJheVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21JdGVtID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnJbcmFuZG9tKDAsIGFyci5sZW5ndGgtMSldIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGxvYy5ocmVmID0gdG8gfHwgZG9jLmhyZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG4vKipcbiAqIHNlYXJjaCggJ3VsID4gbGknLCAgJ2RhdGEtbGluaycsIE5vZGVFbGVtZW50KTtcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBhdHRyXG4gKiBAcGFyYW0gZnJvbVxuICogQHJldHVybnMge3t9fVxuICovXG5jb25zdCBzZWFyY2ggPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGF0dHIsIGZyb20pIHtcbiAgICBmcm9tID0gaXNOb2RlKGZyb20pID8gZnJvbSA6IHF1ZXJ5KGZyb20pO1xuICAgIGxldCBpID0gMCxcbiAgICAgICAga2V5LFxuICAgICAgICBlbGVtZW50cyA9IHt9LFxuICAgICAgICBxdWVyeUVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20gfHwgZG9jdW1lbnQuYm9keSk7XG5cbiAgICBpZiAocXVlcnlFbGVtZW50cykge1xuICAgICAgICB3aGlsZSAoaSA8IHF1ZXJ5RWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWF0dHIpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RWxlbWVudHNbaV0uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHF1ZXJ5RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1trZXldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiXG5jb25zdCBzdHIyZnJhZ21lbnQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKTtcbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGksXG4gICAgICAgICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcbiAgICAgICAgd2hpbGUgKGkgPSBjb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIyZnJhZ21lbnQ7XG4iLCJpbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuL3N0cjJmcmFnbWVudFwiO1xuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBmcmFnbWVudCA9IHN0cjJmcmFnbWVudChzdHJpbmcpO1xuXG4gICAgc3dpdGNoIChmcmFnbWVudC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICBjYXNlIDA6IGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXN1bHQgPSBmcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiXG5jb25zdCB0b09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9PYmplY3Q7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==