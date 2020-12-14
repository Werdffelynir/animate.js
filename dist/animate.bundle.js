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

var AnimationFrame = function AnimationFrame() {
    // this.constructor = function Animation() {};
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

var _AnimationFrame = __webpack_require__(/*! ./components/AnimationFrame */ "./src/components/AnimationFrame.js");

var _AnimationFrame2 = _interopRequireDefault(_AnimationFrame);

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
    AnimationFrame: _AnimationFrame2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW92ZUNsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hYmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZW5jb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0hUTUxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTU3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL21lcmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbm9kZTJzdHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9udW1iZXIyc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5QWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIyZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIybm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbkZyYW1lIiwicm9vdCIsInJlcXVlc3RJZCIsInN0YXJ0cGFseSIsInBhdXNlZCIsImNhbGxiYWNrIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwic3RlcCIsInRpbWVzdGFtcCIsImNhbGwiLCJjYW5jZWwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsInN0YXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJDbGlwIiwiZWxlbWVudCIsIk5vZGUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwieCIsInkiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsIm1vdmVUbyIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNvcHlUbyIsIm9uIiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvbmUiLCJDb21wb25lbnQiLCJjb25maWciLCJsaXN0IiwiY29tcCIsImNyZWF0ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJjb21wb25lbnRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZmluZCIsImNsb25lZCIsInRlbXBsYXRlIiwiY2xvbmVOb2RlIiwiYmVmb3JlIiwiaW5pdGlhbGl6ZWQiLCJtZXRob2RzIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJiaW5kIiwiaGFzT3duUHJvcGVydHkiLCJpbml0IiwiZGF0YSIsInB1c2giLCJub2RlIiwiY29tcGxldGUiLCJjb21wbGV0ZWQiLCJkb2N1bWVudCIsInByb3BzIiwib3ZlcnJpZGUiLCJLZXlib2FyZEV2ZW50TWFuYWdlciIsInN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2tzTGlzdCIsImFkZFN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2siLCJtYXAiLCJ0eXBlIiwia2V5Q29kZSIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwiZWFjaENhbGxiYWNrc0xpc3QiLCJlYWNoQ2FsbGJhY2siLCJzZXR1cExpc3RlbmVycyIsImFkZCIsInJtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVhY2giLCJ3aXRoQ29uZGl0aW9uS2V5IiwicHJlc3MiLCJ1cCIsImRvd24iLCJNb3ZlQ2xpcCIsImNsaXAiLCJ2YWx1ZSIsInN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiYXBwZW5kIiwiY2xvbmVQcm9wZXJ0eSIsIlJveHkiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwiZGVmYXVsdCIsInByb3h5IiwiUHJveHkiLCJnZXQiLCJvYmoiLCJwcm9wIiwic2V0IiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJmaWxsIiwib2JzZXJ2ZSIsInRvIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsImluZGV4IiwibmFtZSIsInJ4IiwiZXZlbnRDdXJzb3IiLCJTY2VuZSIsImxheWVycyIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwibmV4dCIsImxlc3QiLCJpIiwic2hvdyIsImNiIiwiY29uc3RydWN0b3IiLCJTdGVwc1NjZW5lIiwic3RlcHMiLCJpdGVyYXRpb24iLCJsb29wIiwic3RlcF9pdGVyYXRpb24iLCJzdGVwX3N0b3AiLCJzdGVwX2NhbGxiYWNrX2VhY2giLCJzdGVwX2NhbGxiYWNrcyIsInBsYXkiLCJzdG9wIiwiZW5kIiwibXMiLCJzZXRUaW1lb3V0IiwiZ290byIsIm9iamVjdCIsImVhY2hTdGVwcyIsImN1cnJlbnRDYWxsYmFja09iamVjdCIsIlRpbWVyIiwicmVwZWF0IiwidGhpc0luc3RhbmNlIiwiaXRlcmF0b3IiLCJ0aGlzSW5zdCIsImlzTmFOIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiQW5pbWF0ZSIsIlN0YXRpYyIsIlV0aWwiLCJMRVRURVJfQ09OU09OQU5UIiwiTEVUVEVSX1ZPV0VMIiwiQUJDIiwiTlVNQkVSUyIsIkFNUEVSU0FORCIsImF0dHIiLCJ0eXBlX2VsZW1lbnQiLCJhcmd1bWVudHMiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmcm9tIiwiRGF0ZSIsIlJlZ0V4cCIsIkZ1bmN0aW9uIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImNvcHkiLCJzcmMiLCJpbnN0YW5jZSIsInNsaWNlIiwiY3JlYXRlQXJyYXkiLCJudW0iLCJhcnIiLCJyIiwidW5kZWZpbmVkIiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHJzIiwiaW5uZXIiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRfY2hpbGQiLCJpbnNlcnQiLCJrIiwiY3JlYXRlRnJhZ21lbnQiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjc3MiLCJzZWxlY3RvciIsInByb3BlcnRpZXMiLCJlbGVtZW50cyIsInR5cGVTZWxlY3RvciIsInR5cGVQcm9wZXJ0aWVzIiwicGFyc2UiLCJzdHIiLCJwMSIsInNwbGl0IiwicDIiLCJwbiIsIml4IiwibyIsInRyaW0iLCJpbmRleE9mIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJkZWNvZGVHZXRRdWVyeSIsInF1ZXJ5IiwicGFpcnMiLCJzdWJzdHIiLCJpdGVtIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvbUxvYWRlZCIsImRvYyIsInF1ZXJ5U2VsZWN0b3IiLCJ2IiwiYSIsIk5vZGVMaXN0IiwiZmlsdGVyIiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbGVtIiwiZW5jb2RlR2V0UXVlcnkiLCJwYXJhbXMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsInBhcmFtIiwiX18iLCJwcm90b3R5cGUiLCJleHRlbmRSZWN1cnNpdmUiLCJwcm9wZXJ0eSIsImZpbmRPYmplY3QiLCJhdHRyVmFsdWUiLCJ0bXAiLCJmaW5kT2JqZWN0cyIsImZpbmRzIiwiZm9ybWF0Iiwic3RyaW5nIiwicmVnIiwicmVwbGFjZSIsIm1hdGNoIiwibnVtYmVyIiwiZ2V0RG9jdW1lbnQiLCJFcnJvciIsImdldExvY2F0aW9uIiwibG9jYXRpb24iLCJodHRwUmVxdWVzdCIsInNlbmREYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcHRpb25zIiwiYWN0aW9uIiwidXJsIiwiaHJlZiIsIm1ldGhvZCIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJpbmplY3QiLCJzdHIybm9kZSIsInN0cjJmcmFnbWVudCIsIm5vZGUyc3RyIiwicXVlcnlBbGwiLCJzZWFyY2giLCJpc0VtcHR5IiwiaXNOb2RlIiwibG9hZENTUyIsImxvYWRKUyIsImxvYWRKU1N5bmMiLCJtZXJnZSIsIm51bWJlcjJzdHJpbmciLCJwb3NpdGlvbiIsInBvc2l0aW9uTW91c2UiLCJyYW5kb20iLCJyYW5kb21Db2xvciIsInJhbmRvbUl0ZW0iLCJyYW5kb21OdW1iZXIiLCJyYW5kb21TdHJpbmciLCJyZWRpcmVjdCIsInR5cGVPZiIsInR5cGVPZlN0cmljdCIsInVyaSIsInRvT2JqZWN0IiwiaXNIVE1MU3RyaW5nIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJkaXYiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJvbmxvYWQiLCJvbmVycm9yIiwibGluayIsIk1hdGgiLCJ0b1N0cmluZyIsInJlbCIsImhlYWQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJzcmNzIiwic2NyaXB0cyIsImUiLCJvYmplY3QxIiwib2JqZWN0MiIsImNvbnRhaW5lciIsImFicyIsInBvdyIsImpvaW4iLCJidWJibGUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInJvdW5kIiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiTW91c2VFdmVudCIsImVycm9yIiwiY2xpZW50WCIsImNsaWVudFkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWluIiwibWF4IiwiZmxvb3IiLCJsZXR0ZXJzIiwiY29sb3IiLCJzaXplIiwiY2VpbCIsInJlcyIsInRvTG93ZXJDYXNlIiwibG9jIiwicXVlcnlFbGVtZW50cyIsImhhc0F0dHJpYnV0ZSIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwiSlNPTiIsInN0cmluZ2lmeSIsInNpbXBsZVR5cGVzIiwidCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBWTtBQUMvQjtBQUNBLFFBQU1DLE9BQU87QUFDVEMsbUJBQVcsQ0FERjtBQUVUQyxtQkFBVyxDQUZGO0FBR1RDLGdCQUFRLEtBSEM7QUFJVEMsa0JBQVUsQ0FKRDtBQUtUQyxlQUFPLENBTEU7QUFNVEMsa0JBQVUsQ0FORDtBQU9UQyxrQkFBVTtBQVBELEtBQWI7O0FBVUFQLFNBQUtRLElBQUws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RUosV0FBTyxPQUFPOVQsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsS0FBS21ULFdBQUwsT0FBdUJXLENBQWxELEdBQXNEQSxDQUE3RDtBQUNILENBUEQ7O2tCQVNlOUUsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGYsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQVUvTixLQUFWLEVBQWlCbEIsSUFBakIsRUFBdUI7QUFDeEMsUUFBTThULElBQUlyVixPQUFPdU0sU0FBUCxDQUFpQmtGLFFBQWpCLENBQTBCalUsSUFBMUIsQ0FBK0JpRixLQUEvQixFQUFzQzZGLEtBQXRDLENBQTRDLENBQTVDLEVBQStDLENBQUMsQ0FBaEQsQ0FBVjtBQUNBLFdBQU8sT0FBTy9HLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLFNBQVM4VCxDQUFwQyxHQUF3Q0EsQ0FBL0M7QUFDSCxDQUhEOztrQkFLZTdFLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mOzs7Ozs7QUFHQSxJQUFNQyxNQUFNLGFBQVVBLElBQVYsRUFBZTtBQUN2QixRQUFNa0UsTUFBTSw0QkFBWjtBQUNBbEUsV0FBTUEsUUFBT2tFLElBQUlXLFFBQWpCO0FBQ0E3RSxXQUFNQSxLQUFJdkQsT0FBSixDQUFZLE9BQVosRUFBcUIsR0FBckIsQ0FBTjtBQUNBLFdBQU91RCxLQUFJdlEsTUFBSixHQUFhLENBQWIsSUFBa0J1USxLQUFJbkksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLE1BQW9CLEdBQXRDLEdBQTRDLE1BQU1tSSxJQUFsRCxHQUF3REEsSUFBL0Q7QUFDSCxDQUxEOztrQkFPZUEsRyIsImZpbGUiOiJhbmltYXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5jb25zdCBBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0aGlzLmNvbnN0cnVjdG9yID0gZnVuY3Rpb24gQW5pbWF0aW9uKCkge307XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgcmVxdWVzdElkOiAwLFxuICAgICAgICBzdGFydHBhbHk6IDAsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIGNhbGxiYWNrOiAwLFxuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIHByb2dyZXNzOiAwLFxuICAgIH07XG5cbiAgICByb290LnN0ZXAgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmICghcm9vdC5zdGFydHBhbHkpIHJvb3Quc3RhcnRwYWx5ID0gdGltZXN0YW1wO1xuICAgICAgICByb290LnByb2dyZXNzID0gdGltZXN0YW1wIC0gcm9vdC5zdGFydHBhbHk7XG5cbiAgICAgICAgaWYgKHJvb3QuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2suY2FsbChyb290LCByb290LnByb2dyZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290LmR1cmF0aW9uICYmIHJvb3QuZHVyYXRpb24gPiByb290LnByb2dyZXNzKSB7XG4gICAgICAgICAgICByb290LmNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICBpZiAocm9vdC5wYXVzZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QucGF1c2VkID0gIXJvb3QucGF1c2VkO1xuICAgIH07XG5cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290LnJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICB9O1xuXG4gICAgcm9vdC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyb290LnJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25GcmFtZTtcbiIsImltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJucyB7IGJvdHRvbSwgZWxlbWVudCwgaGVpZ2h0LCBsZWZ0LCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeSB9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ2xpcCA9IGZ1bmN0aW9uIChlbGVtZW50KVxue1xuICAgIGNvbnN0IHJvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcblxuICAgIGlmIChyb290LmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJvb3QueCA9IHJvb3QueCAtIHBhcmVudC54O1xuICAgICAgICByb290LnkgPSByb290LnkgLSBwYXJlbnQueTtcbiAgICAgICAgcm9vdC5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgcm9vdC5lbGVtZW50LmlkIHx8ICdjbGlwJyk7XG4gICAgfVxuXG4gICAgcm9vdC5tb3ZlVG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jb3B5VG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICByb290LmVsZW1lbnQgPSBjb3B5KHJvb3QuZWxlbWVudCk7XG4gICAgICAgIHJvb3QubW92ZVRvKHBhcmVudEVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGlwO1xuIiwiaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG5cbi8qKlxuICpcbmNvbmZpZzpcbiAgICBpZDogJ2lkJyxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge30sXG4gICAgY29tcGxldGUgKCkge30sXG4gICAgbWV0aG9kczoge30sXG4gICAgbm9kZToge30sXG4gICAgY29tcG9uZW50czoge30sXG4gICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuXG5Db21wb25lbnQoe1xuICAgIGlkOiAnRXh0ZXJuYWxUZW1wbGF0ZUNvbXBvbmVudCcsXG4gICAgcHJvcHM6IFsndGl0bGUnXSxcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlJyxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXRlcmF0b3I6IDAsXG4gICAgfSxcbiAgICBjb21wbGV0ZSAoYXBwKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVbJ3RpdGxlJ10pXG4gICAgICAgIHRoaXMubm9kZVsndGl0bGUnXS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZCAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gKysgdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICAgICAgbWluIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSAtLSB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBnZXQgcHJvcGVydHkgYnkgaWQga2V5d29yZFxuICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wID0gQ29tcG9uZW50LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jb21wb25lbnRzW2lkXSA/IGNvbXAuY29tcG9uZW50c1tpZF0gOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNoaWxkcmVuLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmlkID09PSBpZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jbG9uZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgICAgICBjbG9uZWQudGVtcGxhdGUgPSBjbG9uZWQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHRvT2JqZWN0KHJvb3QpO1xuICAgICAgICAgICAgcHJvcGVydHkudGVtcGxhdGUgPSByb290LnRlbXBsYXRlLmNsb25lTm9kZShyb290KTtcbiAgICAgICAgICAgIHByb3BlcnR5LmlkID0gaWQgfHwgcHJvcGVydHkuaWQgKyAnXycgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgcm9vdC50ZW1wbGF0ZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHByb3BlcnR5LnRlbXBsYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBDb21wb25lbnQocHJvcGVydHkpO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgfTtcblxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5iZWZvcmUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5iZWZvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLm1ldGhvZHMgJiYgT2JqZWN0LnZhbHVlcyhjb21wLm1ldGhvZHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5tZXRob2RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAubWV0aG9kc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1trZXldID0gY29tcC5tZXRob2RzW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAubWV0aG9kc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuZGF0YSAmJiBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZGF0YVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuZGF0YVtrZXldID0gY29tcC5kYXRhW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzICYmIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggY29tcC5jb21wb25lbnRzW2tleV0gJiYgY29tcC5jb21wb25lbnRzW2tleV0uaGFzT3duUHJvcGVydHkoJ2tleScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcG9uZW50c1trZXldLnBhcmVudCA9IGNvbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXAuY2hpbGRyZW4ucHVzaChjb21wLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc05vZGUoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIGNvbXAubm9kZSA9IHNlYXJjaCgnW2RhdGEtbm9kZV0nLCAnZGF0YS1ub2RlJywgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICBjb21wLm9uID0gc2VhcmNoKCdbZGF0YS1vbl0nLCAnZGF0YS1vbicsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnQubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgICAgIHJldHVybiBjb21wO1xuICAgIH1cbn07XG5Db21wb25lbnQubGlzdCA9IHt9O1xuQ29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG1ldGhvZHM6IHt9LFxuICAgICAgICBub2RlOiB7fSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IHt9LFxuICAgIH0sIGNvbmZpZylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsIlxuY29uc3QgS2V5Ym9hcmRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB7fTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGFkZFN0b3JhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XSkgc3RvcmFnZVtldmVudF0gPSB7fTtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XVtrZXldKSBzdG9yYWdlW2V2ZW50XVtrZXldID0gW107XG4gICAgICAgIHN0b3JhZ2VbZXZlbnRdW2tleV0ucHVzaChjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGJhc2VDYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2UpLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZVt0eXBlXSkubWFwKChrZXlDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0gKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlW3R5cGVdW2tleUNvZGVdLm1hcCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSB0eXBlICYmIHBhcnNlSW50KGtleUNvZGUpID09PSBldmVudC5rZXlDb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZXZlbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlYWNoQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGVhY2hDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzICgpIHtcbiAgICAgICAgY29uc3QgYWRkID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJtID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJtKCk7XG4gICAgICAgIGFkZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVhY2goZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlYWNoQ2FsbGJhY2soZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb25kaXRpb25LZXkoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGFkZFN0b3JhZ2UoZXZlbnQsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc3Moa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlwcmVzcycsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICB1cChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXVwJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlkb3duJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRFdmVudE1hbmFnZXI7XG4iLCJpbXBvcnQgQ2xpcCBmcm9tIFwiLi9DbGlwXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuXG5jb25zdCBNb3ZlQ2xpcCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICBjb25zdCB7ZWxlbWVudH0gPSBjb25maWc7XG4gICAgY29uc3QgY2xpcCA9IENsaXAoZWxlbWVudCk7XG5cbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1taXZlY2xpcCcsIGNvbmZpZy5pZCB8fCAnbWl2ZWNsaXAnKTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHNldCB4KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueFxuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAud2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLmhlaWdodFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJvb3Rba2V5XSA9IGNvbmZpZ1trZXldXG4gICAgfSk7XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNsb25lUHJvcGVydHkgPSB0b09iamVjdChyb290KTtcbiAgICAgICAgY2xvbmVQcm9wZXJ0eS5lbGVtZW50ID0gcm9vdC5lbGVtZW50LmNsb25lTm9kZShyb290KTtcbiAgICAgICAgcm9vdC5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2xvbmVQcm9wZXJ0eS5lbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIE1vdmVDbGlwKGNsb25lUHJvcGVydHkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVDbGlwO1xuIiwiLyoqXG4gKlxuXG5cbiBjb25zdCByeERhdGEgPSBSb3h5KHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBib2R5OiAnJyxcbiAgICB9KTtcblxuIGZ1bmN0aW9uIHNldFRvKGlkLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBxdWVyeSgnIycgKyBpZCk7XG4gICAgICAgIGluamVjdChlbGVtLCBjb250ZXh0KTtcbiAgICB9XG5cbiByeERhdGEuZXZlbnQoKGtleSwgdmFsdWVzKT0+e1xuICAgICAgICBzZXRUbyhrZXksIHZhbHVlcyk7XG4gICAgfSk7XG5cbiBUaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICAgICAgcnhEYXRhLmRpc3BhdGNoKCd0aXRsZScsICdIZWxsbyBmcmllbmQnKTtcbiAgICAgICAgcnhEYXRhLmRpc3BhdGNoKCdib2R5JywgJ0RvIHlvdSBoYXBweSBub3c/Jyk7XG4gICAgfSwgMjAwMCk7XG5cbiBUaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICAgICAgcnhEYXRhLmRpc3BhdGNoKCdib2R5JywgJ05vIHllcyBvZmNvdXJzZScpO1xuICAgIH0sIDQwMDApO1xuICpcbiAqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgc2V0KCo9LCAqPSk6ICosIGdldCgqKTogKiwgYWN0aW9uKCo9LCAqPSk6ICosIGZpbGwoKj0sICo9KTogKn18Um94eXx7fXxudWxsfGJvb2xlYW59XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFJveHkgPSBmdW5jdGlvbiAocGF5bG9hZClcbntcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MgPSB7XG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHBheWxvYWQsIHtcbiAgICAgICAgZ2V0KG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG9iaiwgcHJvcCwgdmFsdWUpIHtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gJiYgdHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXS5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9sZGVyIG5hbWU6IHNlZXxzZXQ/XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIHBheWxvYWRcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaChrZXksIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBrZXkuY2FsbCh7fSwgcHJveHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbChyZXN1bHQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3Rpb24oKVxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50KGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmUoa2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGNoYW5nZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZlKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPSBrZXk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3Nba2V5XSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID8gcHJveHlba2V5XSA6IGNvcHkocHJveHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGwocGF5bG9hZCwgdG8pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5W3RvXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm94eVt0b11ba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJveHk7XG4iLCJpbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5cbi8qKlxuICogY29uc3QgcnggPSBSb3h5TGlzdGVuZXIgKHtcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiB9KVxuICogcnguc2V0KCk7XG4gKiByeC5kaXNwYXRjaCgpO1xuICpcbiAqIHJ4LmFjdGlvbigpO1xuICpcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBkaXNwYXRjaCgqPSwgKj0pOiBSb3h5LCBnZXQoKik6ICosIGV2ZW50KCo9LCAqPSk6IHRoaXMsIGZpbGwoKj0sICo9KTogdGhpc319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUm94eUxpc3RlbmVyID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgICAgIF9fYWN0aW9uX18oKSB7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aW9uc05hbWVzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdID0gcGF5bG9hZFtldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nICYmIGV2ZW50TmFtZSAhPT0gYWN0aW9ucy5fX2FjdGlvbl9fLm5hbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbnNOYW1lc1tldmVudE5hbWVdID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ4ID0gUm94eShhY3Rpb25zTmFtZXMpO1xuICAgIC8vXG4gICAgcnguYWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnNOYW1lc1xuICAgIH07XG5cbiAgICByeC5ldmVudCgoZXZlbnRDdXJzb3IsIHZhbHVlcykgPT4ge1xuICAgICAgICBhY3Rpb25zLl9fYWN0aW9uX18uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50Q3Vyc29yID09PSBldmVudE5hbWUgJiYgdHlwZW9mIGFjdGlvbnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXS5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJ4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm94eUxpc3RlbmVyO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAobGF5ZXJzKSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgY3VycmVudDogJ2RlZmF1bHQnLFxuICAgICAgICBsYXllcnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQgKCkgeyBjb25zb2xlLmxvZygnW0RlZmF1bHQgU2NlbmVdJykgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5hZGQgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgcm9vdC5sYXllcnNbbmFtZV0gPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICByb290LmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiByb290LmxheWVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICByb290Lm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb290LmxheWVycyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHJvb3QuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LnNob3cobGVzdCk7XG4gICAgfVxuXG4gICAgcm9vdC5zaG93ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByb290LmN1cnJlbnQgPSBrZXkgfHwgJ2RlZmF1bHQnO1xuICAgICAgICBjb25zdCBjYiA9IHJvb3QubGF5ZXJzW3Jvb3QuY3VycmVudF07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjYi5jYWxsKGNiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgaWYgKGxheWVycyAmJiBsYXllcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBPYmplY3Qua2V5cyhsYXllcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5hZGQoa2V5LCBsYXllcnNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge2FueX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGVwc1NjZW5lID0gZnVuY3Rpb24gKGNvbmZpZyA9IHtzdGVwczogW119KSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgICBsb29wOiBjb25maWcubG9vcCB8fCBmYWxzZSxcbiAgICAgICAgc3RlcF9pdGVyYXRpb246IDAsXG4gICAgICAgIHN0ZXBfc3RvcDogZmFsc2UsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tfZWFjaDogbnVsbCxcbiAgICAgICAgc3RlcF9jYWxsYmFja3M6IGNvbmZpZy5zdGVwcyB8fCB7fSxcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICByb290LnBsYXkoKTtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBkZWxheShtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjay5jYWxsKHJvb3QpOyB9LCBtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdG8obmFtZSkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrcy5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlYWNoU3RlcHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfc3RvcCkgcmV0dXJuIHJvb3Q7XG5cbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfaXRlcmF0aW9uID4gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290Lmxvb3ApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tPYmplY3QgPSByb290LnN0ZXBfY2FsbGJhY2tzW3Jvb3Quc3RlcF9pdGVyYXRpb25dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFja09iamVjdC5jYWxsYmFjay5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICByb290Lml0ZXJhdGlvbisrXG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uKytcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzU2NlbmU7XG4iLCJcbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbn07XG5cblxuVGltZXIuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJcbmltcG9ydCBDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xpcC5qc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IEtleWJvYXJkRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanNcIjtcbmltcG9ydCBNb3ZlQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL01vdmVDbGlwLmpzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5cbmNvbnN0IEFuaW1hdGUgPSB7XG4gICAgQ2xpcCxcbiAgICBDb21wb25lbnQsXG4gICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgTW92ZUNsaXAsXG4gICAgU2NlbmUsXG4gICAgU3RlcHNTY2VuZSxcbiAgICBUaW1lcixcbiAgICBSb3h5TGlzdGVuZXIsXG4gICAgUm94eSxcbiAgICBBbmltYXRpb25GcmFtZSxcbn07XG5cblxuQW5pbWF0ZS5TdGF0aWMgPVxuICAgIEFuaW1hdGUuVXRpbCA9XG4gICAgICAgIFN0YXRpYztcblxuaWYgKHdpbmRvdykge1xuICAgIHdpbmRvdy5BbmltYXRlID0gQW5pbWF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTtcbiIsIlxuZXhwb3J0IGNvbnN0IExFVFRFUl9DT05TT05BTlQgPSAnQixDLEQsRixHLEgsSixLLEwsTSxOLFAsUSxSLFMsVCxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IExFVFRFUl9WT1dFTCA9ICdBLEUsSSxPLFUsWSc7XG5leHBvcnQgY29uc3QgQUJDID0gJ0EsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSLFMsVCxVLFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTlVNQkVSUyA9ICcwLDEsMiwzLDQsNSw2LDcsOCw5JztcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkQgPSAnJic7XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsIi8qKlxuICpcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBjbG9uZShmcm9tLCB0bylcbntcbiAgICBpZiAoZnJvbSA9PT0gbnVsbCB8fCB0eXBlb2YgZnJvbSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgIT09IE9iamVjdCAmJiBmcm9tLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgPT09IERhdGUgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEZ1bmN0aW9uIHx8XG4gICAgICAgIGZyb20uY29uc3RydWN0b3IgPT09IFN0cmluZyB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBOdW1iZXIgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gbmV3IGZyb20uY29uc3RydWN0b3IoZnJvbSk7XG4gICAgfVxuXG4gICAgdG8gPSB0byB8fCBuZXcgZnJvbS5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yIChuYW1lIGluIGZyb20pXG4gICAge1xuICAgICAgICB0b1tuYW1lXSA9IHR5cGVvZiB0b1tuYW1lXSA9PSBcInVuZGVmaW5lZFwiID8gY2xvbmUoZnJvbVtuYW1lXSwgbnVsbCkgOiB0b1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuXG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoc3JjLCBpbnN0YW5jZSlcbntcbiAgICBpZiAoaXNOb2RlKHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5zbGljZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiBzcmMuYmluZChpbnN0YW5jZSB8fCB7fSk7XG5cbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpKSB7XG4gICAgICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzcmMpO1xuICAgICAgICBjb25zb2xlLmxvZyhzcmMsIGluc3RhbmNlKVxuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiLypcblxuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUpO1xuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUsIHRydWUpO1xuY29uc3QgYXJyMSA9IGNyZWF0ZUFycmF5KDUsIDEpO1xuY29uc3QgYXJyMiA9IGNyZWF0ZUFycmF5KDUsICdoZWxsbyB3b3JsZCcpO1xuY29uc3QgYXJyMyA9IGNyZWF0ZUFycmF5KDUsIFsxMDAsMjAwLDMwMF0pO1xuY29uc3QgYXJyNCA9IGNyZWF0ZUFycmF5KDUsIHthOidBJyxiOidCJyxjOidDJ30pO1xuXG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbnVtXG4gKiBAcGFyYW0gZmlsbFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5jb25zdCBjcmVhdGVBcnJheSA9IGZ1bmN0aW9uIChudW0sIGZpbGwpIHtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaWxsID09PSAnc3RyaW5nJyApe1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KG51bSkuZmlsbChmaWxsKTtcbiAgICB9XG5cbiAgICBhcnIgPSBuZXcgQXJyYXkobnVtKS5maWxsKDApO1xuICAgIGFyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBmaWxsLmNhbGwoZmlsbCwgaSwgaSk7XG4gICAgICAgICAgICBhcnJbaV0gPSB0eXBlb2YgciA9PT0gJ2Jvb2xlYW4nIHx8IHIgPyByIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbCkpIGFycltpXSA9IGZpbGxbaV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGZpbGxbaV0gO1xuICAgICAgICBlbHNlIGFycltpXSA9IGZpbGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcnJheTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHBhaXJzID0gKHF1ZXJ5WzBdID09PSAnPycgPyBxdWVyeS5zdWJzdHIoMSkgOiBxdWVyeSkuc3BsaXQoJyYnKTtcbiAgICBwYWlycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbi8qY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59OyovXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIGluc3RhbmNlID0ge30pIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpLCB2LCBhKSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBpLCB2LCBhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChBcnJheS5mcm9tKGxpc3QpLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwga2V5LCBsaXN0W2tleV0sIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgbGlzdCA9IGVhY2gobGlzdC5zcGxpdChcIlwiKSwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY29uc3QgYXJyID0gKG5ldyBBcnJheShsaXN0KSkuZmlsbCgwKTtcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGFyciwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChkb2N1bWVudClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsb2NhdGlvbilcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIGVsc2VcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL3N0cjJmcmFnbWVudFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGVuY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZW5jb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBkZWNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2RlY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtleHRlbmRSZWN1cnNpdmV9ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtyYW5kb21Db2xvciwgcmFuZG9tSXRlbSwgcmFuZG9tTnVtYmVyLCByYW5kb21TdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBjcmVhdGVBcnJheSBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUFycmF5XCI7XG5cbmNvbnN0IFN0YXRpYyA9IHtcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCBhcHBlbmQsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykpXG4gICAgICAgIHNlbGVjdG9yID0gcXVlcnkoc2VsZWN0b3IsIHRvKTtcblxuICAgIGlmICghYXBwZW5kKVxuICAgICAgICBzZWxlY3Rvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKGlzTm9kZShkYXRhKSkge1xuICAgICAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mKGRhdGEsICdhcnJheScpKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGluamVjdChzZWxlY3RvciwgZGF0YVtpXSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gKCFhcHBlbmQpID8gZGF0YSA6IHNlbGVjdG9yLmlubmVySFRNTCArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCJcbmNvbnN0IGlzSFRNTFN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzSFRNTFN0cmluZztcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBjb25zdCBkYXRhID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gKEFCQyArIE5VTUJFUlMpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJycpO1xuICAgIGZvciAoaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgc3RyaW5nICs9XG4gICAgICAgICAgICBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gcmFuZG9tIGl0ZW0gZnJvbSBhcnJheVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21JdGVtID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnJbcmFuZG9tKDAsIGFyci5sZW5ndGgtMSldIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGxvYy5ocmVmID0gdG8gfHwgZG9jLmhyZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG4vKipcbiAqIHNlYXJjaCggJ3VsID4gbGknLCAgJ2RhdGEtbGluaycsIE5vZGVFbGVtZW50KTtcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBhdHRyXG4gKiBAcGFyYW0gZnJvbVxuICogQHJldHVybnMge3t9fVxuICovXG5jb25zdCBzZWFyY2ggPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGF0dHIsIGZyb20pIHtcbiAgICBmcm9tID0gaXNOb2RlKGZyb20pID8gZnJvbSA6IHF1ZXJ5KGZyb20pO1xuICAgIGxldCBpID0gMCxcbiAgICAgICAga2V5LFxuICAgICAgICBlbGVtZW50cyA9IHt9LFxuICAgICAgICBxdWVyeUVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20gfHwgZG9jdW1lbnQuYm9keSk7XG5cbiAgICBpZiAocXVlcnlFbGVtZW50cykge1xuICAgICAgICB3aGlsZSAoaSA8IHF1ZXJ5RWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWF0dHIpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RWxlbWVudHNbaV0uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHF1ZXJ5RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1trZXldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiXG5jb25zdCBzdHIyZnJhZ21lbnQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKTtcbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGksXG4gICAgICAgICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcbiAgICAgICAgd2hpbGUgKGkgPSBjb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIyZnJhZ21lbnQ7XG4iLCJpbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuL3N0cjJmcmFnbWVudFwiO1xuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBmcmFnbWVudCA9IHN0cjJmcmFnbWVudChzdHJpbmcpO1xuXG4gICAgc3dpdGNoIChmcmFnbWVudC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICBjYXNlIDA6IGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXN1bHQgPSBmcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiXG5jb25zdCB0b09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9PYmplY3Q7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==