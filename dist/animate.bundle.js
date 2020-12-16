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
pause();
start(function(progress){
    if (Math.round(progress) % 1000 === 0) {
        // do something
    }
});
cancel();
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
exports.ClipClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _clone2 = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClipClass = exports.ClipClass = function () {
    function ClipClass(element) {
        _classCallCheck(this, ClipClass);

        this.position = (0, _position2.default)(element);
        this.element = _position2.default.element;
        this.setProperties();
    }

    _createClass(ClipClass, [{
        key: "moveTo",
        value: function moveTo(parent) {
            if (parent instanceof Clip) {
                return parent.element.appendChild(this.element);
            }
            if (parent instanceof Node) {
                return parent.appendChild(this.element);
            }
        }
    }, {
        key: "copyTo",
        value: function copyTo(parent) {
            this.element = (0, _copy2.default)(this.element);
            this.moveTo(parent);
        }
    }, {
        key: "on",
        value: function on(event, callback) {
            this.element.addEventListener(event, callback);
        }
    }, {
        key: "clone",
        value: function clone() {
            return (0, _clone3.default)(this);
        }
    }, {
        key: "setProperties",
        value: function setProperties() {
            Object.keys(this.position).map(function (key) {
                if (typeof this[key] === "undefined") {
                    this[key] = this.position[key];
                }
            });

            if (this.element instanceof Node) {
                var parent = (0, _position2.default)(this.element.parentNode);
                this.x = this.x - parent.x;
                this.y = this.y - parent.y;
                this.element.setAttribute('data-clip', this.element.id || 'clip');
            }
        }
    }]);

    return ClipClass;
}();
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
        return (0, _clone3.default)(this);
    };

    root.style = function (object) {
        Object.keys(object).forEach(function (key) {
            if (root.element.style[key] !== undefined) {
                root.element.style[key] = object[key];
            }
        });
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
exports.ComponentClass = exports.ComponentClassProperties = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _clone2 = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

var _random = __webpack_require__(/*! ../static/random */ "./src/static/random.js");

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentClassProperties = exports.ComponentClassProperties = {
    id: null,
    props: {},
    template: false,
    element: false,
    override: false,
    before: function before() {},
    init: function init() {},
    data: function data() {},
    complete: function complete() {},
    methods: {},
    node: {},
    on: {},
    initialized: false,
    completed: false,
    components: {},
    children: [],
    parent: {}
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

var ComponentClass = exports.ComponentClass = function () {
    /**
     *
     * @param properties
     */
    function ComponentClass() {
        var _this = this;

        var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ComponentClass);

        this.setProperties(properties);

        if (typeof this.before === 'function' && !this.initialized) {
            this.before();
        }
        if (typeof this.element === 'string') {
            if ((0, _isHTMLString2.default)(this.element)) {
                this.element = (0, _str2node2.default)(this.element);
            } else {
                this.element = (0, _query2.default)(this.element);
            }
        }

        if (this.methods && Object.values(this.methods).length) {
            Object.keys(this.methods).forEach(function (key) {
                if (typeof _this.methods[key] === 'function') {
                    _this.methods[key] = _this.methods[key].bind(_this);
                    if (!_this.hasOwnProperty(key)) {
                        _this[key] = _this.methods[key];
                    }
                }
            });
        }

        if (typeof this.init === 'function' && !this.initialized) {
            this.initialized = true;
            this.init();
        }

        if (this.data && Object.keys(this.data).length) {
            Object.keys(this.data).forEach(function (key) {
                if (typeof _this.data[key] === 'function') {
                    _this.data[key] = _this.data[key].bind(_this);
                }
                if (!_this.hasOwnProperty(key)) {
                    _this[key] = _this.data[key];
                }
            });
        }

        if (this.components && Object.keys(this.components).length) {
            Object.keys(this.components).forEach(function (key) {
                if (_this.components[key] && _this.components[key].hasOwnProperty('key')) {
                    _this.components[key].parent = _this;
                }
                _this.children.push(_this.components[key]);
            });
        }

        if (false) {}

        if (typeof this.complete === 'function' && !this.completed) {
            if (document) {
                document.addEventListener('DOMContentLoaded', function () {
                    _this.completed = true;
                    _this.complete.call(_this.complete, _this);
                });
            } else {
                this.completed = true;
                this.complete.call(this.complete, this);
            }
        }

        Component.list[this.id] = this;
    }

    _createClass(ComponentClass, [{
        key: "component",
        value: function component(name) {
            return ComponentClass.list[name];
        }
    }, {
        key: "componentChildren",
        value: function componentChildren(name) {
            return ComponentClass.list[name];
        }
    }, {
        key: "clone",
        value: function clone(id) {
            var cloned = (0, _clone3.default)(this);
            cloned.template = cloned.template.cloneNode(true);
            return cloned;
        }
    }, {
        key: "setProperties",
        value: function setProperties(properties) {
            properties = (0, _merge2.default)(ComponentClassProperties, properties);
            Object.keys(properties).map(function (key) {
                if (typeof this[key] === "undefined") {
                    this[key] = properties[key];
                }
            });
            return properties;
        }
    }, {
        key: "template",
        set: function set(template) {
            if (typeof template === 'string') {
                this.element = (0, _str2node2.default)(template);
            }
            if ((0, _isNode2.default)(template)) {
                this.element = template;
            }
        },
        get: function get() {
            return this.element;
        }
    }]);

    return ComponentClass;
}();

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
            var cloned = (0, _clone3.default)(this);
            cloned.template = cloned.template.cloneNode(true);
            return cloned;
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
    var root = {};

    /**
     * .json('/url/datafile.json', (json) => {}, (error) => {})
     *
     * @param src
     * @param callback
     * @param onerror
     */
    root.json = function (src, callback, onerror) {
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
    root.jsons = function (srcs, callback, onerror) {
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
                root.json(src, function (json) {
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
    root.javascript = function (srcs, callback, onerror) {
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
    root.images = function (imgs, callback) {
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
    root.audios = function (srcs, callback) {
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
    var videos = function videos(srcs, callback) {
        if (srcs && (typeof srcs === 'undefined' ? 'undefined' : _typeof(srcs)) === 'object') {
            var length = Object.keys(srcs).length;
            var _videos = {};
            var iterator = 0;
            for (var name in srcs) {
                var video = document.createElement('video');
                video.src = srcs[name];
                video.name = name;
                video.preload = 'auto';
                _videos[name] = video;
                iterator++;
                if (iterator === length) {
                    callback.call({}, _videos);
                }
            }
        }
    };

    return root;
};

exports.default = Loader;

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
exports.MoveClipClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Clip = __webpack_require__(/*! ./Clip */ "./src/components/Clip.js");

var _Clip2 = _interopRequireDefault(_Clip);

var _toObject = __webpack_require__(/*! ../static/toObject */ "./src/static/toObject.js");

var _toObject2 = _interopRequireDefault(_toObject);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MoveClipClass = exports.MoveClipClass = function () {
    function MoveClipClass(properties) {
        _classCallCheck(this, MoveClipClass);

        var element = properties.element;

        // if (properties.template) {
        //     this.template = properties.template;
        // }
        // if (properties.element) {
        //     this.element = properties.element;
        // }

        var clip = (0, _Clip2.default)(this.element);

        this.properties = properties;
        this.element = clip.element;
        this.clip = clip;
        this.init = false;
        this.initialized = false;
        this.setProperties();

        if (typeof this.init === 'function' && !this.initialized) {
            this.initialized = true;
            this.init();
        }
    }

    _createClass(MoveClipClass, [{
        key: "clone",


        // set template (template) {
        //     if (typeof template === 'string') {
        //         this.element = str2node(template);
        //     }
        //     if (isNode(template)) {
        //         this.element = template;
        //     }
        // }
        // get template () {
        //     return this.element;
        // }

        value: function clone() {
            var append = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var props = (0, _toObject2.default)(this);
            props.element = this.element.cloneNode(true);
            if (append && this.element) this.element.parentNode.appendChild(props.element);

            return new MoveClipClass(props);
        }
    }, {
        key: "setProperties",
        value: function setProperties() {
            Object.keys(this.properties).map(function (key) {
                if (typeof this[key] === "undefined") {
                    this[key] = this.properties[key];
                }
            });
            this.element.setAttribute('data-miveclip', this.properties.id || 'miveclip');
        }
    }, {
        key: "style",
        value: function style(object) {
            var _this = this;

            Object.keys(object).forEach(function (key) {
                if (_this.element.style[key] !== undefined) {
                    _this.element.style[key] = object[key];
                }
            });
        }
    }, {
        key: "x",
        get: function get() {
            return this.clip.x;
        },
        set: function set(value) {
            this.element.style.marginLeft = value + 'px';
            this.clip.x = value;
        }
    }, {
        key: "y",
        get: function get() {
            return this.clip.y;
        },
        set: function set(value) {
            this.element.style.marginTop = value + 'px';
            this.clip.y = value;
        }
    }, {
        key: "width",
        get: function get() {
            return this.clip.width;
        },
        set: function set(value) {
            this.element.style.width = value + 'px';
            this.clip.width = value;
        }
    }, {
        key: "height",
        get: function get() {
            return this.clip.height;
        },
        set: function set(value) {
            this.element.style.height = value + 'px';
            this.clip.height = value;
        }
    }]);

    return MoveClipClass;
}();

var MoveClip = function MoveClip(config) {
    var element = config.element;

    // if (config.template) {
    //     if (typeof config.template === 'string') {
    //         if (isHTMLString(config.template)) {
    //             element = str2node(config.template);
    //         } else {
    //             element = query(config.template);
    //         }
    //     }
    //
    //     if (isNode(config.template)) {
    //         element = config.template;
    //     }
    //
    //     delete config.template;
    // }

    var clip = (0, _Clip2.default)(element);

    if (!clip.element) {
        throw new Error('Property [element] not fond!');
    }

    clip.element.setAttribute('data-miveclip', config.id || 'miveclip');

    var root = {
        element: clip.element,
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
            Object.keys(object).forEach(function (key) {
                if (root.element.style[key] !== undefined) {
                    root.element.style[key] = object[key];
                }
            });
        }
    };

    Object.keys(config).map(function (key) {
        root[key] = config[key];
    });

    if (typeof root.init === 'function' && !root.initialized) {
        root.initialized = true;
        root.init();
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
exports.SceneClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone2 = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

var _isString = __webpack_require__(/*! ../static/isString */ "./src/static/isString.js");

var _isString2 = _interopRequireDefault(_isString);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SceneClass = exports.SceneClass = function () {
    function SceneClass() {
        var _this = this;

        var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, SceneClass);

        this.current = 'default';
        this.layers = {
            default: function _default() {
                console.log('[Default Scene]');
            }
        };

        Object.keys(layers).forEach(function (key) {
            _this.add(key, layers[key]);
        });
    }

    _createClass(SceneClass, [{
        key: "add",
        value: function add(name, callback) {
            this.layers[name] = callback;
        }
    }, {
        key: "get",
        value: function get(name) {
            return this.layers[name];
        }
    }, {
        key: "next",
        value: function next() {
            var lest = false;
            var keys = Object.keys(this.layers);
            for (var i = 0; i < keys.length; i++) {
                if (keys[i] === this.current) {
                    if (typeof keys[i + 1] !== "undefined") lest = keys[i + 1];
                    if (i === keys.length - 1) {
                        lest = keys[0];
                    }
                    break;
                }
            }
            this.render(lest);
        }
    }, {
        key: "render",
        value: function render() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

            this.current = key;
            var cb = this.layers[this.current];

            if (typeof cb === "function") {
                cb.call(cb);
            }
        }
    }, {
        key: "clone",
        value: function clone(name) {
            return (0, _clone3.default)(this);
        }
    }]);

    return SceneClass;
}();

/*
const scene = Scene();
scene.add('editor', function (a, b, c, d) {
    console.log(a, b, c, d);
})
scene.add('output', function (a, b, c, d) {
    console.log(a, b, c, d);
})
scene.run('output', ['hello', 200, {}]);
*/
/**
 *
 * @param properties
 * @returns {{current: string, scenes: {default: {callback(): void, attrs: []}}, element: null}}
 * @constructor
 */


var Scene = function Scene(properties) {
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

            callback.apply(callback, attrs ? attrs : scene.attrs);
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
        return (0, _clone3.default)(this);
    };

    if (properties && properties.scenes && properties.scenes.constructor === Object) {
        Object.keys(properties.scenes).forEach(function (key) {
            root.add(key, properties.scenes[key]);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Animate = {
    Clip: _Clip2.default,
    Component: _Component2.default,
    ComponentClass: _Component.ComponentClass,
    KeyboardEventManager: _KeyboardEventManager2.default,
    MoveClip: _MoveClip2.default,
    MoveClipClass: _MoveClip.MoveClipClass,
    Scene: _Scene2.default,
    SceneClass: _Scene.SceneClass,
    StepsScene: _StepsScene2.default,
    Timer: _Timer2.default,
    RoxyListener: _RoxyListener2.default,
    Roxy: _Roxy2.default,
    AnimationFrame: _AnimationFrame2.default,
    Loader: _Loader2.default
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

if ((0, _getWindow2.default)()) {
    (0, _getWindow2.default)().Animate = Animate;
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
    loadTextfile: _loadTextfile2.default
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
    // const parser = new DOMParser();
    // const xmlDoc = parser.parseFromString(value, "text/xml");
    // return xmlDoc;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vdmVDbGlwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eUxpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0ZXBzU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQmxvYmZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTT04uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZFRleHRmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uRnJhbWUiLCJyb290IiwicmVxdWVzdElkIiwic3RhcnRwYWx5IiwicGF1c2VkIiwiY2FsbGJhY2siLCJkZWxheSIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJzdGVwIiwidGltZXN0YW1wIiwiY2FsbCIsImNhbmNlbCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhdXNlIiwic3RhcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIkNsaXBDbGFzcyIsImVsZW1lbnQiLCJwb3NpdGlvbiIsInNldFByb3BlcnRpZXMiLCJwYXJlbnQiLCJDbGlwIiwiYXBwZW5kQ2hpbGQiLCJOb2RlIiwibW92ZVRvIiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInBhcmVudE5vZGUiLCJ4IiwieSIsInNldEF0dHJpYnV0ZSIsImlkIiwicGFyZW50RWxlbWVudCIsImNvcHlUbyIsIm9uIiwiY2xvbmUiLCJzdHlsZSIsIm9iamVjdCIsImZvckVhY2giLCJ1bmRlZmluZWQiLCJDb21wb25lbnRDbGFzc1Byb3BlcnRpZXMiLCJwcm9wcyIsInRlbXBsYXRlIiwib3ZlcnJpZGUiLCJiZWZvcmUiLCJpbml0IiwiZGF0YSIsImNvbXBsZXRlIiwibWV0aG9kcyIsIm5vZGUiLCJpbml0aWFsaXplZCIsImNvbXBsZXRlZCIsImNvbXBvbmVudHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudENsYXNzIiwicHJvcGVydGllcyIsInZhbHVlcyIsImxlbmd0aCIsImJpbmQiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJkb2N1bWVudCIsIkNvbXBvbmVudCIsImxpc3QiLCJuYW1lIiwiY2xvbmVkIiwiY2xvbmVOb2RlIiwiY29uZmlnIiwicmFuZG9tTmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJjb21wIiwiY3JlYXRlIiwiY29tcG9uZW50IiwiY29tcG9uZW50Q2hpbGRyZW4iLCJmaW5kIiwiS2V5Ym9hcmRFdmVudE1hbmFnZXIiLCJzdG9yYWdlIiwiYmFzZUNhbGxiYWNrc0xpc3QiLCJhZGRTdG9yYWdlIiwiYmFzZUNhbGxiYWNrIiwidHlwZSIsImtleUNvZGUiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUludCIsImVhY2hDYWxsYmFja3NMaXN0IiwiZWFjaENhbGxiYWNrIiwic2V0dXBMaXN0ZW5lcnMiLCJhZGQiLCJybSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlYWNoIiwid2l0aENvbmRpdGlvbktleSIsInByZXNzIiwidXAiLCJkb3duIiwiTG9hZGVyIiwianNvbiIsInNyYyIsIm9uZXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJqc29ucyIsInNyY3MiLCJvYmoiLCJpdGVtIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJzY3JpcHRzIiwiaXRlcmF0b3IiLCJqYXZhc2NyaXB0Iiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInN1YnN0ciIsIm9ubG9hZCIsImUiLCJoZWFkIiwiaW1hZ2VzIiwiaW1ncyIsImltZyIsImF1ZGlvcyIsImF1ZGlvIiwicHJlbG9hZCIsInZpZGVvcyIsInZpZGVvIiwiTW92ZUNsaXBDbGFzcyIsImNsaXAiLCJhcHBlbmQiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsIk1vdmVDbGlwIiwiRXJyb3IiLCJjbG9uZVByb3BlcnR5IiwiUm94eSIsInBheWxvYWQiLCJwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MiLCJkZWZhdWx0IiwicHJveHkiLCJQcm94eSIsImdldCIsInByb3AiLCJzZXQiLCJkaXNwYXRjaCIsInJlc3VsdCIsImZpbGwiLCJvYnNlcnZlIiwidG8iLCJnZXRQcm94eSIsIlJveHlMaXN0ZW5lciIsImFjdGlvbnMiLCJfX2FjdGlvbl9fIiwiYWN0aW9uc05hbWVzIiwiZXZlbnROYW1lIiwiaW5kZXgiLCJyeCIsImV2ZW50Q3Vyc29yIiwiU2NlbmVDbGFzcyIsImxheWVycyIsImN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwibGVzdCIsImkiLCJyZW5kZXIiLCJjYiIsIlNjZW5lIiwic2NlbmVzIiwiYXR0cnMiLCJnZXRDdXJyZW50U2NlbmUiLCJuZXh0IiwicnVuIiwic2NlbmUiLCJhcHBseSIsInNob3ciLCJjb25zdHJ1Y3RvciIsIlN0ZXBzU2NlbmUiLCJzdGVwcyIsIml0ZXJhdGlvbiIsImxvb3AiLCJzdGVwX2l0ZXJhdGlvbiIsInN0ZXBfc3RvcCIsInN0ZXBfY2FsbGJhY2tfZWFjaCIsInN0ZXBfY2FsbGJhY2tzIiwicGxheSIsInN0b3AiLCJlbmQiLCJtcyIsInNldFRpbWVvdXQiLCJnb3RvIiwiZWFjaFN0ZXBzIiwiY3VycmVudENhbGxiYWNrT2JqZWN0IiwiVGltZXIiLCJyZXBlYXQiLCJ0aGlzSW5zdGFuY2UiLCJ0aGlzSW5zdCIsImlzTmFOIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiQW5pbWF0ZSIsIlJBRElBTiIsIkRFR1JFRV9BU19SQURJQU4iLCJERUdSRUVfMzYwX0FTX1JBRElBTiIsIlBJIiwiUkFEX1RPX0RFR1JFRVMiLCJTdGF0aWMiLCJVdGlsIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJhdHRyIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIkRhdGUiLCJSZWdFeHAiLCJGdW5jdGlvbiIsIlN0cmluZyIsIk51bWJlciIsIkJvb2xlYW4iLCJjb3B5IiwiaW5zdGFuY2UiLCJjcmVhdGVBcnJheSIsIm51bSIsImFyciIsInIiLCJ0YWciLCJpbm5lciIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImluc2VydCIsImsiLCJjcmVhdGVGcmFnbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNzcyIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJzcGxpdCIsInAyIiwicG4iLCJpeCIsIm8iLCJ0cmltIiwiaW5kZXhPZiIsImRlY29kZUdldFF1ZXJ5IiwicXVlcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb21Mb2FkZWQiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidiIsImEiLCJOb2RlTGlzdCIsImZpbHRlciIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZWxlbSIsImVuY29kZUdldFF1ZXJ5IiwicGFyYW1zIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXhpc3RzIiwiZXh0ZW5kIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJwYXJhbSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsInJlZyIsInJlcGxhY2UiLCJtYXRjaCIsIm51bWJlciIsImdldERvY3VtZW50IiwiZ2V0TG9jYXRpb24iLCJsb2NhdGlvbiIsImdldFdpbmRvdyIsImh0dHBSZXF1ZXN0Iiwic2VuZERhdGEiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wdGlvbnMiLCJhY3Rpb24iLCJ1cmwiLCJocmVmIiwibWV0aG9kIiwiaGVhZGVycyIsInVzZUVuY29kZSIsInVzZUZvcm1EYXRhIiwiYXN5bmMiLCJ1c2VyIiwicGFzc3dvcmQiLCJjb25jYXRlU3RyaW5nIiwiRm9ybURhdGEiLCJIVE1MRm9ybUVsZW1lbnQiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsIm9ubG9hZGVuZCIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmRPcHRpb25zIiwic2VuZCIsImluamVjdCIsInN0cjJub2RlIiwic3RyMmZyYWdtZW50Iiwibm9kZTJzdHIiLCJxdWVyeUFsbCIsInNlYXJjaCIsImlzRW1wdHkiLCJpc05vZGUiLCJsb2FkQ1NTIiwibG9hZEpTIiwibG9hZEpTU3luYyIsIm1lcmdlIiwibnVtYmVyMnN0cmluZyIsInBvc2l0aW9uTW91c2UiLCJyYW5kb21Db2xvciIsInJhbmRvbUl0ZW0iLCJyYW5kb21OdW1iZXIiLCJyYW5kb21TdHJpbmciLCJyYW5kb21IdW1hbml6ZVN0cmluZyIsInJlZGlyZWN0IiwidHlwZU9mIiwidHlwZU9mU3RyaWN0IiwidXJpIiwidG9PYmplY3QiLCJpc0hUTUxTdHJpbmciLCJpc1N0cmluZyIsImlzRGVmaW5lZCIsImxvYWRCbG9iZmlsZSIsImxvYWRKU09OIiwibG9hZFRleHRmaWxlIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJkaXYiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJibG9iIiwibGluayIsInJlbCIsImRvY3VtZW50RWxlbWVudCIsInRleHQiLCJvYmplY3QxIiwib2JqZWN0MiIsImNvbnRhaW5lciIsImFicyIsInBvdyIsImpvaW4iLCJidWJibGUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInJvdW5kIiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiTW91c2VFdmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwicXVlcnlTZWxlY3RvckFsbCIsIm1pbiIsIm1heCIsImZsb29yIiwibGV0dGVycyIsImNvbG9yIiwic2l6ZSIsImNlaWwiLCJyZXMiLCJ3aXRoTnVtYmVycyIsImNvbnNvbmFudCIsInZvd2VsIiwidm93ZWxGaXJzdCIsInMxIiwiczIiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiaGFzQXR0cmlidXRlIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2ltcGxlVHlwZXMiLCJ0IiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7QUFLQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQ3ZCO0FBQ0ksUUFBTUMsT0FBTztBQUNUQyxtQkFBVyxDQURGO0FBRVRDLG1CQUFXLENBRkY7QUFHVEMsZ0JBQVEsS0FIQztBQUlUQyxrQkFBVSxDQUpEO0FBS1RDLGVBQU8sQ0FMRTtBQU1UQyxrQkFBVSxDQU5EO0FBT1RDLGtCQUFVO0FBUEQsS0FBYjs7QUFVQVAsU0FBS1EsSUFBTCxHQUFZLFVB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Q0FBaEQsQ0FBVjtBQUNBLFdBQU8sT0FBT2hDLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLFNBQVNrVyxDQUFwQyxHQUF3Q0EsQ0FBL0M7QUFDSCxDQUhEOztrQkFLZS9FLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mOzs7Ozs7QUFHQSxJQUFNQyxNQUFNLGFBQVVBLElBQVYsRUFBZTtBQUN2QixRQUFNb0UsTUFBTSw0QkFBWjtBQUNBcEUsV0FBTUEsUUFBT29FLElBQUlXLFFBQWpCO0FBQ0EvRSxXQUFNQSxLQUFJdEQsT0FBSixDQUFZLE9BQVosRUFBcUIsR0FBckIsQ0FBTjtBQUNBLFdBQU9zRCxLQUFJN1MsTUFBSixHQUFhLENBQWIsSUFBa0I2UyxLQUFJcFAsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLE1BQW9CLEdBQXRDLEdBQTRDLE1BQU1vUCxJQUFsRCxHQUF3REEsSUFBL0Q7QUFDSCxDQUxEOztrQkFPZUEsRyIsImZpbGUiOiJhbmltYXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG4vKlxuY29uc3QgYW5pbWF0aW9uID0gQW5pbWF0aW9uRnJhbWUoKTtcbnBhdXNlKCk7XG5zdGFydChmdW5jdGlvbihwcm9ncmVzcyl7XG4gICAgaWYgKE1hdGgucm91bmQocHJvZ3Jlc3MpICUgMTAwMCA9PT0gMCkge1xuICAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICB9XG59KTtcbmNhbmNlbCgpO1xuKi9cbi8qKlxuICpcbiAqIEByZXR1cm5zIHt7ZHVyYXRpb246IG51bWJlciwgc3RhcnRwYWx5OiBudW1iZXIsIHBhdXNlZDogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgcmVxdWVzdElkOiBudW1iZXIsIGNhbGxiYWNrOiBudW1iZXIsIHByb2dyZXNzOiBudW1iZXJ9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICByZXF1ZXN0SWQ6IDAsXG4gICAgICAgIHN0YXJ0cGFseTogMCxcbiAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgY2FsbGJhY2s6IDAsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgfTtcblxuICAgIHJvb3Quc3RlcCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFyb290LnN0YXJ0cGFseSkgcm9vdC5zdGFydHBhbHkgPSB0aW1lc3RhbXA7XG4gICAgICAgIHJvb3QucHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSByb290LnN0YXJ0cGFseTtcblxuICAgICAgICBpZiAocm9vdC5jYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjay5jYWxsKHJvb3QsIHJvb3QucHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3QuZHVyYXRpb24gJiYgcm9vdC5kdXJhdGlvbiA+IHJvb3QucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJvb3QuY2FuY2VsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIGlmIChyb290LnBhdXNlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm9vdC5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5wYXVzZWQgPSAhcm9vdC5wYXVzZWQ7XG4gICAgfTtcblxuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3QucmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgIH07XG5cbiAgICByb290LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJvb3QucmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25GcmFtZTtcbiIsImltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGlwQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBwb3NpdGlvbi5lbGVtZW50O1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG8ocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29weVRvKHBhcmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjb3B5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMubW92ZVRvKHBhcmVudCk7XG4gICAgfVxuXG4gICAgb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfVxuXG4gICAgY2xvbmUgKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvcGVydGllcygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wb3NpdGlvbikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5wb3NpdGlvbltrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBwb3NpdGlvbih0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggLSBwYXJlbnQueDtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAtIHBhcmVudC55O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgKHRoaXMuZWxlbWVudC5pZCB8fCAnY2xpcCcpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJucyB7IGJvdHRvbSwgZWxlbWVudCwgaGVpZ2h0LCBsZWZ0LCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeSB9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ2xpcCA9IGZ1bmN0aW9uIChlbGVtZW50KVxue1xuICAgIGNvbnN0IHJvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcblxuICAgIGlmIChyb290LmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJvb3QueCA9IHJvb3QueCAtIHBhcmVudC54O1xuICAgICAgICByb290LnkgPSByb290LnkgLSBwYXJlbnQueTtcbiAgICAgICAgcm9vdC5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgcm9vdC5lbGVtZW50LmlkIHx8ICdjbGlwJyk7XG4gICAgfVxuXG4gICAgcm9vdC5tb3ZlVG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jb3B5VG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICByb290LmVsZW1lbnQgPSBjb3B5KHJvb3QuZWxlbWVudCk7XG4gICAgICAgIHJvb3QubW92ZVRvKHBhcmVudEVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcm9vdC5zdHlsZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChyb290LmVsZW1lbnQuc3R5bGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlW2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpcDtcbiIsImltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vUm94eVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB7cmFuZG9tSHVtYW5pemVTdHJpbmcsIHJhbmRvbVN0cmluZ30gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5cblxuZXhwb3J0IGNvbnN0IENvbXBvbmVudENsYXNzUHJvcGVydGllcyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgIGVsZW1lbnQ6IGZhbHNlLFxuICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICBiZWZvcmU6ICgpID0+IHt9LFxuICAgIGluaXQ6ICgpID0+IHt9LFxuICAgIGRhdGE6ICgpID0+IHt9LFxuICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBub2RlOiB7fSxcbiAgICBvbjoge30sXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgY29tcG9uZW50czoge30sXG4gICAgY2hpbGRyZW46IFtdLFxuICAgIHBhcmVudDoge30sXG59O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSBpZFxuICogQHByb3BlcnR5IHByb3BzXG4gKiBAcHJvcGVydHkgdGVtcGxhdGVcbiAqIEBwcm9wZXJ0eSBlbGVtZW50XG4gKiBAcHJvcGVydHkgb3ZlcnJpZGVcbiAqIEBwcm9wZXJ0eSBiZWZvcmUgW0Z1bmN0aW9uXVxuICogQHByb3BlcnR5IGluaXQgW0Z1bmN0aW9uXVxuICogQHByb3BlcnR5IGRhdGEgW0Z1bmN0aW9uXVxuICogQHByb3BlcnR5IGNvbXBsZXRlIFtGdW5jdGlvbl1cbiAqIEBwcm9wZXJ0eSBtZXRob2RzXG4gKiBAcHJvcGVydHkgbm9kZVxuICogQHByb3BlcnR5IG9uXG4gKiBAcHJvcGVydHkgaW5pdGlhbGl6ZWRcbiAqIEBwcm9wZXJ0eSBjb21wbGV0ZWRcbiAqIEBwcm9wZXJ0eSBjb21wb25lbnRzXG4gKiBAcHJvcGVydHkgY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSBwYXJlbnRcbiAqL1xuZXhwb3J0IGNsYXNzIENvbXBvbmVudENsYXNzXG57XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMgPSB7fSlcbiAgICB7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICF0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICB0aGlzLmJlZm9yZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYoaXNIVE1MU3RyaW5nKHRoaXMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBzdHIybm9kZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBxdWVyeSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWV0aG9kcyAmJiBPYmplY3QudmFsdWVzKHRoaXMubWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1ldGhvZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5tZXRob2RzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzW2tleV0gPSB0aGlzLm1ldGhvZHNba2V5XS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5tZXRob2RzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbml0ID09PSAnZnVuY3Rpb24nICYmICF0aGlzLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMgJiYgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmNvbXBvbmVudHNba2V5XSAmJiB0aGlzLmNvbXBvbmVudHNba2V5XS5oYXNPd25Qcm9wZXJ0eSgna2V5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2tleV0ucGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29tcG9uZW50c1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZhbHNlICYmIGlzTm9kZSh0aGlzLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLm9uID0gc2VhcmNoKCdbZGF0YS1vbl0nLCAnZGF0YS1vbicsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUuY2FsbCh0aGlzLmNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUuY2FsbCh0aGlzLmNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudC5saXN0W3RoaXMuaWRdID0gdGhpcztcbiAgICB9XG4gICAgc2V0IHRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gc3RyMm5vZGUodGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05vZGUodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdGVtcGxhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBjb21wb25lbnQobmFtZSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50Q2xhc3MubGlzdFtuYW1lXTtcbiAgICB9XG4gICAgY29tcG9uZW50Q2hpbGRyZW4obmFtZSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50Q2xhc3MubGlzdFtuYW1lXTtcbiAgICB9XG4gICAgY2xvbmUoaWQpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgIGNsb25lZC50ZW1wbGF0ZSA9IGNsb25lZC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgICAgICBwcm9wZXJ0aWVzID0gbWVyZ2UoQ29tcG9uZW50Q2xhc3NQcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcGVydGllc1trZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9XG59XG5Db21wb25lbnRDbGFzcy5saXN0ID0ge307XG5cbi8qKlxuICpcbmNvbmZpZzpcbiAgICBpZDogJ2lkJyxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge30sXG4gICAgY29tcGxldGUgKCkge30sXG4gICAgbWV0aG9kczoge30sXG4gICAgbm9kZToge30sXG4gICAgY29tcG9uZW50czoge30sXG4gICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuXG5Db21wb25lbnQoe1xuICAgIGlkOiAnRXh0ZXJuYWxUZW1wbGF0ZUNvbXBvbmVudCcsXG4gICAgcHJvcHM6IFsndGl0bGUnXSxcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlJyxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXRlcmF0b3I6IDAsXG4gICAgfSxcbiAgICBjb21wbGV0ZSAoYXBwKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVbJ3RpdGxlJ10pXG4gICAgICAgIHRoaXMubm9kZVsndGl0bGUnXS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZCAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gKysgdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICAgICAgbWluIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSAtLSB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBnZXQgcHJvcGVydHkgYnkgaWQga2V5d29yZFxuICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbmZpZy5pZCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbU5hbWUgPSAgcmFuZG9tSHVtYW5pemVTdHJpbmcoNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJhbmRvbU5hbWUgPSByYW5kb21OYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcmFuZG9tTmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb25maWcuaWQgPSAnQ29tcG9uZW50JyArIHJhbmRvbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wID0gQ29tcG9uZW50LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jb21wb25lbnRzW2lkXSA/IGNvbXAuY29tcG9uZW50c1tpZF0gOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNoaWxkcmVuLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmlkID09PSBpZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jbG9uZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgICAgICBjbG9uZWQudGVtcGxhdGUgPSBjbG9uZWQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuYmVmb3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZihpc0hUTUxTdHJpbmcoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBxdWVyeShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLm1ldGhvZHMgJiYgT2JqZWN0LnZhbHVlcyhjb21wLm1ldGhvZHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5tZXRob2RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAubWV0aG9kc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1trZXldID0gY29tcC5tZXRob2RzW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAubWV0aG9kc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuZGF0YSAmJiBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZGF0YVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuZGF0YVtrZXldID0gY29tcC5kYXRhW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzICYmIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICggY29tcC5jb21wb25lbnRzW2tleV0gJiYgY29tcC5jb21wb25lbnRzW2tleV0uaGFzT3duUHJvcGVydHkoJ2tleScpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcG9uZW50c1trZXldLnBhcmVudCA9IGNvbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXAuY2hpbGRyZW4ucHVzaChjb21wLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc05vZGUoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIGNvbXAubm9kZSA9IHNlYXJjaCgnW2RhdGEtbm9kZV0nLCAnZGF0YS1ub2RlJywgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICBjb21wLm9uID0gc2VhcmNoKCdbZGF0YS1vbl0nLCAnZGF0YS1vbicsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnQubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgICAgIHJldHVybiBjb21wO1xuICAgIH1cbn07XG5Db21wb25lbnQubGlzdCA9IHt9O1xuQ29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG1ldGhvZHM6IHt9LFxuICAgICAgICBub2RlOiB7fSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnQ6IHt9LFxuICAgIH0sIGNvbmZpZylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsIi8qXG5jb25zdCBrZXlib2FyZCA9IEtleWJvYXJkRXZlbnRNYW5hZ2VyKCk7XG5rZXlib2FyZC5lYWNoKEVWRU5UX05BTUUsIGZ1bmN0aW9uIChldmVudCkge30pXG5rZXlib2FyZC53aXRoQ29uZGl0aW9uS2V5XG5rZXlib2FyZC5wcmVzc1xua2V5Ym9hcmQudXBcbmtleWJvYXJkLmRvd25cbiovXG5jb25zdCBLZXlib2FyZEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc3Qgc3RvcmFnZSA9IHt9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgYWRkU3RvcmFnZSA9IGZ1bmN0aW9uIChldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdKSBzdG9yYWdlW2V2ZW50XSA9IHt9O1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdW2tleV0pIHN0b3JhZ2VbZXZlbnRdW2tleV0gPSBbXTtcbiAgICAgICAgc3RvcmFnZVtldmVudF1ba2V5XS5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAodHlwZW9mIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdID0gYmFzZUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZSkubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlW3R5cGVdKS5tYXAoKGtleUNvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggc3RvcmFnZVt0eXBlXVtrZXlDb2RlXSApKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0ubWFwKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IHR5cGUgJiYgcGFyc2VJbnQoa2V5Q29kZSkgPT09IGV2ZW50LmtleUNvZGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChldmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVhY2hDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgZWFjaENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMgKCkge1xuICAgICAgICBjb25zdCBhZGQgPSAoKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhiYXNlQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZWFjaENhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhiYXNlQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZWFjaENhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgcm0oKTtcbiAgICAgICAgYWRkKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWFjaChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGVhY2hDYWxsYmFjayhldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aENvbmRpdGlvbktleShldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgYWRkU3RvcmFnZShldmVudCwga2V5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICBwcmVzcyhrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXByZXNzJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5dXAnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG93bihrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleWRvd24nLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZEV2ZW50TWFuYWdlcjtcbiIsIlxuXG4vKipcbiAqIExvYWRlci5hdWRpb3M6IMaSIChzcmNzLCBjYWxsYmFjaylcbiAqIExvYWRlci5pbWFnZXM6IMaSIChpbWdzLCBjYWxsYmFjaylcbiAqIExvYWRlci5qYXZhc2NyaXB0OiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIExvYWRlci5qc29uOiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIEBwcm9wZXJ0eVxuICogQG1ldGhvZCBqc29uXG4gKiBAbWV0aG9kIGpzb25zXG4gKiBAbWV0aG9kIGphdmFzY3JpcHRcbiAqIEBtZXRob2QgaW1hZ2VzXG4gKiBAbWV0aG9kIGF1ZGlvc1xuICogQHJldHVybnMge3t9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IExvYWRlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc3Qgcm9vdCA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogLmpzb24oJy91cmwvZGF0YWZpbGUuanNvbicsIChqc29uKSA9PiB7fSwgKGVycm9yKSA9PiB7fSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzcmNcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gb25lcnJvclxuICAgICAqL1xuICAgIHJvb3QuanNvbiA9IGZ1bmN0aW9uIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgICAgIGZldGNoKHNyYylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4gY2FsbGJhY2soanNvbikpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHNyY3NcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gb25lcnJvclxuICAgICAqL1xuICAgIHJvb3QuanNvbnMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gICAge1xuICAgICAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgICAgICByb290Lmpzb24oc3JjLCAoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRzW2tleV0gPSBqc29uO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgb25lcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICAgICAqXG4gICAgICogLmphdmFzY3JpcHQgKCB7XG4gICAgICogICAgICBteV9zY3JpcHQxOiAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gICAgICogICAgICBteV9zY3JpcHQyOiAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gICAgICogICAgfSxcbiAgICAgKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gICAgICpcbiAgICAgKiAuamF2YXNjcmlwdCAoIFtcbiAgICAgKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAgICAgKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAgICAgKiAgICBdLFxuICAgICAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAgICAgKlxuICAgICAqIEBuYW1lc3BhY2UgTG9hZGVyLmphdmFzY3JpcHRcbiAgICAgKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICAgICAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByb290LmphdmFzY3JpcHQgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gICAge1xuICAgICAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgICAgIGxldCBzY3JpcHQ7XG4gICAgICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQuc3JjID0gKHNyY3Nba2V5XS5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmNzW2tleV0gOiBzcmNzW2tleV0gKyAnLmpzJztcbiAgICAgICAgICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgICAgICBzY3JpcHQuaWQgPSBrZXk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGFuIGltYWdlc1xuICAgICAqXG4gICAgICogLmltYWdlcyAoIHtcbiAgICAgKiAgICAgIGltZzE6ICcvcGF0aC90by9pbWcxJyxcbiAgICAgKiAgICAgIGltZzI6ICcvcGF0aC90by9pbWcyJyxcbiAgICAgKiAgICB9LFxuICAgICAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAgICAgKlxuICAgICAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuaW1hZ2VzXG4gICAgICogQHBhcmFtIGltZ3NcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICByb290LmltYWdlcyA9IGZ1bmN0aW9uIChpbWdzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoaW1ncyAmJiB0eXBlb2YgaW1ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGltZ3MpLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgICAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gaW1ncykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpbWdzW25hbWVdO1xuICAgICAgICAgICAgICAgIGltZy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzW3RoaXMubmFtZV0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb2FkIGFuIGF1ZGlvIGZpbGVzXG4gICAgICpcbiAgICAgKiAuYXVkaW9zICgge1xuICAgICAqICAgICAgYXVkaW8xOiAnL3BhdGgvdG8vYXVkaW8xJyxcbiAgICAgKiAgICAgIGF1ZGlvMjogJy9wYXRoL3RvL2F1ZGlvMicsXG4gICAgICogICAgfSxcbiAgICAgKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gICAgICpcbiAgICAgKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmF1ZGlvc1xuICAgICAqIEBwYXJhbSBzcmNzXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgcm9vdC5hdWRpb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBhdWRpb3MgPSB7fTtcbiAgICAgICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICAgICAgICAgICAgYXVkaW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgICAgICBhdWRpby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICBhdWRpby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgICAgIGF1ZGlvc1tuYW1lXSA9IGF1ZGlvO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgYXVkaW9zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogTG9hZCBhbiB2aWRlbyBmaWxlc1xuICAgICAqXG4gICAgICogLnZpZGVvcyAoIHtcbiAgICAgKiAgICAgIHZpZGVvMTogJy9wYXRoL3RvL3ZpZGVvMScsXG4gICAgICogICAgICB2aWRlbzI6ICcvcGF0aC90by92aWRlbzInLFxuICAgICAqICAgIH0sXG4gICAgICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICAgICAqXG4gICAgICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci52aWRlb3NcbiAgICAgKiBAcGFyYW0gc3Jjc1xuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGNvbnN0IHZpZGVvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvcyA9IHt9O1xuICAgICAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgICAgICB2aWRlby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgICAgIHZpZGVvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgICAgIHZpZGVvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgdmlkZW9zW25hbWVdID0gdmlkZW87XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCB2aWRlb3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiaW1wb3J0IENsaXAgZnJvbSBcIi4vQ2xpcFwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuXG5leHBvcnQgY2xhc3MgTW92ZUNsaXBDbGFzc1xue1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpXG4gICAge1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHByb3BlcnRpZXM7XG5cbiAgICAgICAgLy8gaWYgKHByb3BlcnRpZXMudGVtcGxhdGUpIHtcbiAgICAgICAgLy8gICAgIHRoaXMudGVtcGxhdGUgPSBwcm9wZXJ0aWVzLnRlbXBsYXRlO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChwcm9wZXJ0aWVzLmVsZW1lbnQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZWxlbWVudCA9IHByb3BlcnRpZXMuZWxlbWVudDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IGNsaXAgPSBDbGlwKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY2xpcC5lbGVtZW50O1xuICAgICAgICB0aGlzLmNsaXAgPSBjbGlwO1xuICAgICAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB4KCkgeyByZXR1cm4gdGhpcy5jbGlwLng7IH1cbiAgICBnZXQgeSgpIHsgcmV0dXJuIHRoaXMuY2xpcC55OyB9XG4gICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5jbGlwLndpZHRoOyB9XG4gICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuY2xpcC5oZWlnaHQ7IH1cbiAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLnggPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLnkgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLndpZHRoID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIHNldCB0ZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICAvLyAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZWxlbWVudCA9IHN0cjJub2RlKHRlbXBsYXRlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoaXNOb2RlKHRlbXBsYXRlKSkge1xuICAgIC8vICAgICAgICAgdGhpcy5lbGVtZW50ID0gdGVtcGxhdGU7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gZ2V0IHRlbXBsYXRlICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAvLyB9XG5cbiAgICBjbG9uZSAoYXBwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0b09iamVjdCh0aGlzKTtcbiAgICAgICAgcHJvcHMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGlmIChhcHBlbmQgJiYgdGhpcy5lbGVtZW50KVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocHJvcHMuZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBNb3ZlQ2xpcENsYXNzKHByb3BzKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllcygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLnByb3BlcnRpZXNba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1taXZlY2xpcCcsICh0aGlzLnByb3BlcnRpZXMuaWQgfHwgJ21pdmVjbGlwJykpO1xuICAgIH1cblxuICAgIHN0eWxlKG9iamVjdCkge1xuICAgICAgICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcblxuICAgIC8vIGlmIChjb25maWcudGVtcGxhdGUpIHtcbiAgICAvLyAgICAgaWYgKHR5cGVvZiBjb25maWcudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGNvbmZpZy50ZW1wbGF0ZSkpIHtcbiAgICAvLyAgICAgICAgICAgICBlbGVtZW50ID0gc3RyMm5vZGUoY29uZmlnLnRlbXBsYXRlKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGNvbmZpZy50ZW1wbGF0ZSk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBpZiAoaXNOb2RlKGNvbmZpZy50ZW1wbGF0ZSkpIHtcbiAgICAvLyAgICAgICAgIGVsZW1lbnQgPSBjb25maWcudGVtcGxhdGU7XG4gICAgLy8gICAgIH1cbiAgICAvL1xuICAgIC8vICAgICBkZWxldGUgY29uZmlnLnRlbXBsYXRlO1xuICAgIC8vIH1cblxuICAgIGNvbnN0IGNsaXAgPSBDbGlwKGVsZW1lbnQpO1xuXG4gICAgaWYoIWNsaXAuZWxlbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3BlcnR5IFtlbGVtZW50XSBub3QgZm9uZCEnKTtcbiAgICB9XG5cbiAgICBjbGlwLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW1pdmVjbGlwJywgY29uZmlnLmlkIHx8ICdtaXZlY2xpcCcpO1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogY2xpcC5lbGVtZW50LFxuICAgICAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUud2lkdGggPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLndpZHRoID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgeCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC55XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLndpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC5oZWlnaHRcbiAgICAgICAgfSxcblxuICAgICAgICBzdHlsZShvYmplY3QpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9iamVjdCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvb3QuZWxlbWVudC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlW2tleV0gPSBvYmplY3Rba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByb290W2tleV0gPSBjb25maWdba2V5XVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiByb290LmluaXQgPT09ICdmdW5jdGlvbicgJiYgIXJvb3QuaW5pdGlhbGl6ZWQpe1xuICAgICAgICByb290LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgcm9vdC5pbml0KCk7XG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uIChhcHBlbmQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjbG9uZVByb3BlcnR5ID0gdG9PYmplY3Qocm9vdCk7XG4gICAgICAgIGNsb25lUHJvcGVydHkuZWxlbWVudCA9IHJvb3QuZWxlbWVudC5jbG9uZU5vZGUocm9vdCk7XG4gICAgICAgIGlmIChhcHBlbmQpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNsb25lUHJvcGVydHkuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1vdmVDbGlwKGNsb25lUHJvcGVydHkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVDbGlwO1xuIiwiLypcbmNvbnN0IFJ4U3RhdGUgPSBSb3h5KHtcbiAgICB0aXRsZTogJycsXG4gICAgYm9keTogJycsXG59KTtcblxuUnhTdGF0ZS5ldmVudCgoa2V5LCB2YWx1ZXMpPT57XG4gICAgaWYgKGtleSA9PT0gJycpIHt9XG4gICAgaW5qZWN0KCcjJyArIGtleSwgdmFsdWVzKTtcbn0pO1xuXG5SeFN0YXRlLnByb3h5LnRpdGxlID0gJ0ZpcnN0IHZhbHVlJztcblJ4U3RhdGUucHJveHkuYm9keSA9ICdUZXN0IGJvZHkgdGV4dCc7XG5cblRpbWVyLnRpbWVvdXQoKCkgPT4ge1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ3RpdGxlJywgJ0hlbGxvIGZyaWVuZCcpO1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ2JvZHknLCAnRG8geW91IGhhcHB5IG5vdz8nKTtcbn0sIDIwMDApO1xuXG4qL1xuXG4vKipcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBzZXQoKj0sICo9KTogKiwgZ2V0KCopOiAqLCBhY3Rpb24oKj0sICo9KTogKiwgZmlsbCgqPSwgKj0pOiAqfXxSb3h5fHt9fG51bGx8Ym9vbGVhbn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyA9IHtcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSAmJiB0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdLmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdC5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb2xkZXIgbmFtZTogc2VlfHNldD9cbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZFxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF5bG9hZC5jYWxsKHt9LCBwcm94eVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcmVzdWx0O1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdGlvbigpXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnQoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgY2hhbmdlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmUoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9IGtleTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1trZXldID0gdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbChwYXlsb2FkLCB0bykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlbdG9dKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm94eTtcbiIsImltcG9ydCBSb3h5IGZyb20gXCIuL1JveHlcIjtcblxuLyoqXG4gKiBjb25zdCByeCA9IFJveHlMaXN0ZW5lciAoe1xuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqIH0pXG4gKiByeC5zZXQoKTtcbiAqIHJ4LmRpc3BhdGNoKCk7XG4gKlxuICogcnguYWN0aW9uKCk7XG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIGRpc3BhdGNoKCo9LCAqPSk6IFJveHksIGdldCgqKTogKiwgZXZlbnQoKj0sICo9KTogdGhpcywgZmlsbCgqPSwgKj0pOiB0aGlzfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBSb3h5TGlzdGVuZXIgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICAgICAgX19hY3Rpb25fXygpIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3Rpb25zTmFtZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0gPSBwYXlsb2FkW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicgJiYgZXZlbnROYW1lICE9PSBhY3Rpb25zLl9fYWN0aW9uX18ubmFtZSkge1xuICAgICAgICAgICAgYWN0aW9uc05hbWVzW2V2ZW50TmFtZV0gPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnggPSBSb3h5KGFjdGlvbnNOYW1lcyk7XG4gICAgLy9cbiAgICByeC5hY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uc05hbWVzXG4gICAgfTtcblxuICAgIHJ4LmV2ZW50KChldmVudEN1cnNvciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuX19hY3Rpb25fXy5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRDdXJzb3IgPT09IGV2ZW50TmFtZSAmJiB0eXBlb2YgYWN0aW9uc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcng7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3h5TGlzdGVuZXI7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuXG5leHBvcnQgY2xhc3MgU2NlbmVDbGFzcyB7XG4gICAgY29uc3RydWN0b3IobGF5ZXJzID0ge30pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gJ2RlZmF1bHQnO1xuICAgICAgICB0aGlzLmxheWVycyA9IHtcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1tEZWZhdWx0IFNjZW5lXScpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGxheWVycykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZChrZXksIGxheWVyc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzW25hbWVdID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW25hbWVdO1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmxheWVycyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHRoaXMuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbmRlcihsZXN0KTtcbiAgICB9XG5cbiAgICByZW5kZXIoa2V5ID0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9IGtleTtcbiAgICAgICAgY29uc3QgY2IgPSB0aGlzLmxheWVyc1t0aGlzLmN1cnJlbnRdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY2IuY2FsbChjYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9uZShuYW1lKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9XG59XG5cbi8qXG5jb25zdCBzY2VuZSA9IFNjZW5lKCk7XG5zY2VuZS5hZGQoJ2VkaXRvcicsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUuYWRkKCdvdXRwdXQnLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLnJ1bignb3V0cHV0JywgWydoZWxsbycsIDIwMCwge31dKTtcbiovXG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllc1xuICogQHJldHVybnMge3tjdXJyZW50OiBzdHJpbmcsIHNjZW5lczoge2RlZmF1bHQ6IHtjYWxsYmFjaygpOiB2b2lkLCBhdHRyczogW119fSwgZWxlbWVudDogbnVsbH19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGN1cnJlbnQ6ICdkZWZhdWx0JyxcbiAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgc2NlbmVzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKSB7Y29uc29sZS5sb2coJ1tEZWZhdWx0IFNjZW5lXScpfSxcbiAgICAgICAgICAgICAgICBhdHRyczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBhdHRycyA9IFtdKSB7XG4gICAgICAgIHJvb3Quc2NlbmVzW25hbWVdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICBhdHRyc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJvb3QuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW25hbWVdO1xuICAgIH1cblxuICAgIHJvb3QuZ2V0Q3VycmVudFNjZW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zY2VuZXNbcm9vdC5jdXJyZW50XTtcbiAgICB9XG5cbiAgICByb290Lm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb290LnNjZW5lcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHJvb3QuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LnJ1bihsZXN0KTtcbiAgICB9O1xuXG4gICAgcm9vdC5ydW4gPSBmdW5jdGlvbiAoa2V5LCBhdHRycykge1xuICAgICAgICByb290LmN1cnJlbnQgPSBrZXkgfHwgJ2RlZmF1bHQnO1xuICAgICAgICBjb25zdCBzY2VuZSA9IHJvb3QuZ2V0Q3VycmVudFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc2NlbmUuY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBhdHRycyA9IEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXR0cnMgPyBhdHRycyA6IHNjZW5lLmF0dHJzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnNob3cgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290LnJ1bihrZXksIGF0dHJzKSB9O1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290LnJ1bihrZXksIGF0dHJzKSB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLnNjZW5lcyAmJiBwcm9wZXJ0aWVzLnNjZW5lcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMuc2NlbmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QuYWRkKGtleSwgcHJvcGVydGllcy5zY2VuZXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge2FueX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGVwc1NjZW5lID0gZnVuY3Rpb24gKGNvbmZpZyA9IHtzdGVwczogW119KSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgICBsb29wOiBjb25maWcubG9vcCB8fCBmYWxzZSxcbiAgICAgICAgc3RlcF9pdGVyYXRpb246IDAsXG4gICAgICAgIHN0ZXBfc3RvcDogZmFsc2UsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tfZWFjaDogbnVsbCxcbiAgICAgICAgc3RlcF9jYWxsYmFja3M6IGNvbmZpZy5zdGVwcyB8fCB7fSxcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICByb290LnBsYXkoKTtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBkZWxheShtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjay5jYWxsKHJvb3QpOyB9LCBtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdG8obmFtZSkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrcy5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlYWNoU3RlcHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfc3RvcCkgcmV0dXJuIHJvb3Q7XG5cbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfaXRlcmF0aW9uID4gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290Lmxvb3ApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tPYmplY3QgPSByb290LnN0ZXBfY2FsbGJhY2tzW3Jvb3Quc3RlcF9pdGVyYXRpb25dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFja09iamVjdC5jYWxsYmFjay5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICByb290Lml0ZXJhdGlvbisrXG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uKytcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzU2NlbmU7XG4iLCJcbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbn07XG5cblxuVGltZXIuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL3N0YXRpYy9nZXRXaW5kb3dcIjtcblxuaW1wb3J0IENsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9DbGlwLmpzXCI7XG5pbXBvcnQgQ29tcG9uZW50LCB7Q29tcG9uZW50Q2xhc3N9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IE1vdmVDbGlwLCB7TW92ZUNsaXBDbGFzc30gZnJvbSBcIi4vY29tcG9uZW50cy9Nb3ZlQ2xpcC5qc1wiO1xuaW1wb3J0IFNjZW5lLCB7U2NlbmVDbGFzc30gZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5cbmNvbnN0IEFuaW1hdGUgPSB7XG4gICAgQ2xpcCxcbiAgICBDb21wb25lbnQsXG4gICAgQ29tcG9uZW50Q2xhc3MsXG4gICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgTW92ZUNsaXAsXG4gICAgTW92ZUNsaXBDbGFzcyxcbiAgICBTY2VuZSxcbiAgICBTY2VuZUNsYXNzLFxuICAgIFN0ZXBzU2NlbmUsXG4gICAgVGltZXIsXG4gICAgUm94eUxpc3RlbmVyLFxuICAgIFJveHksXG4gICAgQW5pbWF0aW9uRnJhbWUsXG4gICAgTG9hZGVyLFxufTtcblxuY29uc3QgUkFESUFOID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7XG5jb25zdCBERUdSRUVfQVNfUkFESUFOID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7XG5jb25zdCBERUdSRUVfMzYwX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU4gKiAzNjA7XG5jb25zdCBQSSA9IDMuMTQxNTkyNjUzNTk7XG5jb25zdCBSQURfVE9fREVHUkVFUyA9IDMuMTQxNTkyNjUzNTk7XG5cbkFuaW1hdGUuUkFESUFOID0gUkFESUFOO1xuQW5pbWF0ZS5ERUdSRUVfQVNfUkFESUFOID0gREVHUkVFX0FTX1JBRElBTjtcbkFuaW1hdGUuREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfMzYwX0FTX1JBRElBTjtcbkFuaW1hdGUuUEkgPSBQSTtcbkFuaW1hdGUuUkFEX1RPX0RFR1JFRVMgPSBSQURfVE9fREVHUkVFUztcblxuQW5pbWF0ZS5TdGF0aWMgPVxuICAgIEFuaW1hdGUuVXRpbCA9XG4gICAgICAgIFN0YXRpYztcblxuaWYgKGdldFdpbmRvdygpKSB7XG4gICAgZ2V0V2luZG93KCkuQW5pbWF0ZSA9IEFuaW1hdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIHRvXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gY2xvbmUoZnJvbSwgdG8pXG57XG4gICAgaWYgKGZyb20gPT09IG51bGwgfHwgdHlwZW9mIGZyb20gIT09IFwib2JqZWN0XCIpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yICE9PSBPYmplY3QgJiYgZnJvbS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yID09PSBEYXRlIHx8IGZyb20uY29uc3RydWN0b3IgPT09IFJlZ0V4cCB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBGdW5jdGlvbiB8fFxuICAgICAgICBmcm9tLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBmcm9tLmNvbnN0cnVjdG9yKGZyb20pO1xuICAgIH1cblxuICAgIHRvID0gdG8gfHwgbmV3IGZyb20uY29uc3RydWN0b3IoKTtcblxuICAgIGZvciAobmFtZSBpbiBmcm9tKVxuICAgIHtcbiAgICAgICAgdG9bbmFtZV0gPSB0eXBlb2YgdG9bbmFtZV0gPT0gXCJ1bmRlZmluZWRcIiA/IGNsb25lKGZyb21bbmFtZV0sIG51bGwpIDogdG9bbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgaW5zdGFuY2UpXG57XG4gICAgaWYgKGlzTm9kZShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuc2xpY2UoKTtcblxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gc3JjLmJpbmQoaW5zdGFuY2UgfHwge30pO1xuXG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSkge1xuICAgICAgICAvLyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3JjKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gc3JjW2tleV07XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGNvcHkodmFsdWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gc3JjIDoge30pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weTtcbiIsIi8qXG5cbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1KTtcbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1LCB0cnVlKTtcbmNvbnN0IGFycjEgPSBjcmVhdGVBcnJheSg1LCAxKTtcbmNvbnN0IGFycjIgPSBjcmVhdGVBcnJheSg1LCAnaGVsbG8gd29ybGQnKTtcbmNvbnN0IGFycjMgPSBjcmVhdGVBcnJheSg1LCBbMTAwLDIwMCwzMDBdKTtcbmNvbnN0IGFycjQgPSBjcmVhdGVBcnJheSg1LCB7YTonQScsYjonQicsYzonQyd9KTtcblxuKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIG51bVxuICogQHBhcmFtIGZpbGxcbiAqIEByZXR1cm5zIHthbnlbXX1cbiAqL1xuY29uc3QgY3JlYXRlQXJyYXkgPSBmdW5jdGlvbiAobnVtLCBmaWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZmlsbCA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShudW0pLmZpbGwoZmlsbCk7XG4gICAgfVxuXG4gICAgYXJyID0gbmV3IEFycmF5KG51bSkuZmlsbCgwKTtcbiAgICBhcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCByID0gZmlsbC5jYWxsKGZpbGwsIGksIGkpO1xuICAgICAgICAgICAgYXJyW2ldID0gdHlwZW9mIHIgPT09ICdib29sZWFuJyB8fCByID8gciA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGwpKSBhcnJbaV0gPSBmaWxsW2ldID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBmaWxsW2ldIDtcbiAgICAgICAgZWxzZSBhcnJbaV0gPSBmaWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXJyYXk7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBhdHRycywgaW5uZXIpIHtcbiAgICBjb25zdFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICBpc19hdHRyID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihzcmMsICdvYmplY3QnKSAmJiAhaXNOb2RlKHNyYylcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2h0bWwgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2NoaWxkID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2h0bWwoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKVxuICAgICAgICAgICAgICAgIGluc2VydF9jaGlsZChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgaW5zZXJ0KHNyY1tpXSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNfYXR0cihhdHRycykpIHtcbiAgICAgICAgaW5uZXIgPSBhdHRycztcbiAgICAgICAgYXR0cnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpXG4gICAgICAgIGZvciAobGV0IGsgaW4gYXR0cnMpXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7XG5cbiAgICBpZiAoaW5uZXIpXG4gICAgICAgIGluc2VydChpbm5lcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5cbmNvbnN0IGNyZWF0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKGFwcGVuZCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgaWYgKGlzTm9kZShhcHBlbmQpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChhcHBlbmQpO1xuXG4gICAgaWYgKHR5cGVPZihhcHBlbmQsICdzdHJpbmcnKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3RyMm5vZGUoYXBwZW5kKSk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuXG5jb25zdCBjc3MgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFwcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHt9O1xuICAgICAgICBwcm9wW3Byb3BlcnRpZXNdID0gYXJndW1lbnRzWzJdO1xuICAgICAgICByZXR1cm4gY3NzKHNlbGVjdG9yLCBwcm9wKTtcbiAgICB9XG5cbiAgICBsZXQgaSwgaywgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICB0eXBlU2VsZWN0b3IgPSB0eXBlT2Yoc2VsZWN0b3IpLFxuICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGVPZihwcm9wZXJ0aWVzKSxcbiAgICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaSwgcDEgPSBzdHIuc3BsaXQoJzsnKSwgcDIsIHBuLCBpeCwgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcDIgPSBwMVtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHBuID0gcDJbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGl4ID0gcG4uaW5kZXhPZignLScpO1xuICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBuID0gcG4uc3Vic3RyaW5nKDAsIGl4KSArIHBuW2l4ICsgMV0udG9VcHBlckNhc2UoKSArIHBuLnN1YnN0cmluZyhpeCArIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwMi5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIG9bcG5dID0gcDJbMV0udHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuXG4gICAgc3dpdGNoICh0eXBlU2VsZWN0b3IpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcblxuICAgICAgICBpZiAodHlwZVByb3BlcnRpZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHBhcnNlKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGZvciAoaSBpbiBlbGVtZW50cylcbiAgICAgICAgICAgIGZvciAoayBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlW2tdID0gcHJvcGVydGllc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIlxuY29uc3QgZGVjb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBwYWlycyA9IChxdWVyeVswXSA9PT0gJz8nID8gcXVlcnkuc3Vic3RyKDEpIDogcXVlcnkpLnNwbGl0KCcmJyk7XG4gICAgcGFpcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0gfHwgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZDtcbiIsIlxuY29uc3QgZGVmaW5lZEluID0gZnVuY3Rpb24gKHN0YWNrLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdGFjayAmJiBzdGFja1t2YWx1ZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWRJbjtcbiIsImltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICBlbHNlXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpXG4gICAgICAgIH0sIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUxvYWRlZDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG4vKmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRtcCkge1xuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwobGlzdC5jaGlsZE5vZGVzKSwgY2FsbGJhY2ssIHRtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsqL1xuXG5jb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCBpbnN0YW5jZSA9IHt9KSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlT2YobGlzdCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoaSwgdiwgYSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgaSwgdiwgYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goW2xpc3RdLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChrZXkpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGtleSwgbGlzdFtrZXldLCBsaXN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGxpc3Quc3BsaXQoXCJcIiksIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IChuZXcgQXJyYXkobGlzdCkpLmZpbGwoMCk7XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChhcnIsIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiXG5jb25zdCBlbmNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0ICs9ICgocmVzdWx0Lmxlbmd0aCkgPyAnJicgOiAnPycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZXhpc3RzID0gZnVuY3Rpb24gKHNyYykge1xuICAgIHJldHVybiBzcmMgIT09IHVuZGVmaW5lZCAmJiBzcmMgIT09IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGlzdHM7XG4iLCJcblxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgZm9yIChsZXQgcGFyYW0gaW4gc291cmNlKVxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHBhcmFtKSlcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3BhcmFtXSA9IHNvdXJjZVtwYXJhbV07XG5cbiAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGRlc3RpbmF0aW9uO1xuICAgIH1cblxuICAgIF9fLnByb3RvdHlwZSA9IHNvdXJjZS5wcm90b3R5cGU7XG4gICAgZGVzdGluYXRpb24ucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0ZW5kUmVjdXJzaXZlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBsZXQgcHJvcGVydHk7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgICAgICAgIGV4dGVuZFJlY3Vyc2l2ZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZDtcbiIsImltcG9ydCBmaW5kT2JqZWN0cyBmcm9tICcuL2ZpbmRPYmplY3RzJztcblxuXG5jb25zdCBmaW5kT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgY29uc3QgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0O1xuIiwiXG5cbmNvbnN0IGZpbmRPYmplY3RzID0gZnVuY3Rpb24gKGxpc3QsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXTtcbiAgICBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgbGlzdCA9IE9iamVjdC52YWx1ZXMobGlzdCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAobGlzdFtpXSAmJiBsaXN0W2ldW2F0dHJdICE9PSB1bmRlZmluZWQgJiYgbGlzdFtpXVthdHRyXSA9PT0gYXR0clZhbHVlKVxuICAgICAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuXG4gICAgcmV0dXJuIHRtcCA7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZHMgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wIDogZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3RzO1xuIiwiXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vZGVmaW5lZFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuL25vZGUyc3RyXCI7XG5cblxuLyoqXG4gKiBGb3JtYXR0aW5nIG9mIHN0cmluZywgb3IgbWF5YmUgdGVtcGxhdGUgYnVpbGRlclxuICpcbiAqIEV4YW1wbGVzOlxuICogLmZvcm1hdChcIkhlbGxvIHswfSwgeW91ciBjb2RlIGlzIHsxfSFcIiwgWydKYWRlJywgJ1ByZWZlY3QnXSk7XG4gKiAuZm9ybWF0KFwiSGVsbG8ge25hbWV9LCB5b3VyIGNvZGUgaXMge21lYW59IVwiLCB7bmFtZTonSmFkZScsIG1lYW46ICdQcmVmZWN0J30pO1xuICpcbiAqIEBwYXJhbSBzdHJpbmcgICAgU3RyaW5nXG4gKiBAcGFyYW0gbGlzdCAgQXJyYXl8T2JqZWN0XG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuY29uc3QgZm9ybWF0ID0gZnVuY3Rpb24gKHN0cmluZywgbGlzdCkge1xuICAgIGxldCByZWc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFxkKyl9L2cpO1xuICAgIGVsc2UgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09ICdvYmplY3QnKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcdyspfS9nKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyKSB7XG4gICAgICAgIGlmIChkZWZpbmVkKGxpc3RbbnVtYmVyXSkgJiYgaXNOb2RlKGxpc3RbbnVtYmVyXSkpXG4gICAgICAgICAgICBsaXN0W251bWJlcl0gPSBub2RlMnN0cihsaXN0W251bWJlcl0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgbGlzdFtudW1iZXJdICE9PSB1bmRlZmluZWQgPyBsaXN0W251bWJlcl0gOiBtYXRjaDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsIlxuY29uc3QgZ2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RvY3VtZW50IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiXG5jb25zdCBnZXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignd2luZG93IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2luZG93O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuLi9zdGF0aWMvZ2V0RG9jdW1lbnRcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL3N0YXRpYy9nZXRXaW5kb3dcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvc3RyMmZyYWdtZW50XCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgZW5jb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9lbmNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGRlY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZGVjb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vc3RhdGljL2h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRcIjtcbmltcG9ydCBkZWZpbmVkSW4gZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkSW5cIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuLi9zdGF0aWMvZWFjaFwiO1xuaW1wb3J0IGV4dGVuZCwge2V4dGVuZFJlY3Vyc2l2ZX0gIGZyb20gXCIuLi9zdGF0aWMvZXh0ZW5kXCI7XG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vc3RhdGljL2lzRW1wdHlcIjtcbmltcG9ydCBmaW5kT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdFwiO1xuaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdHNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcIi4uL3N0YXRpYy9mb3JtYXRcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IGxvYWRKUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1wiO1xuaW1wb3J0IGxvYWRKU1N5bmMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNTeW5jXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IG51bWJlcjJzdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9udW1iZXIyc3RyaW5nXCI7XG5pbXBvcnQgb24gZnJvbSBcIi4uL3N0YXRpYy9vblwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBwb3NpdGlvbk1vdXNlIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25Nb3VzZVwiO1xuaW1wb3J0IHJhbmRvbSwge3JhbmRvbUNvbG9yLCByYW5kb21JdGVtLCByYW5kb21OdW1iZXIsIHJhbmRvbVN0cmluZywgcmFuZG9tSHVtYW5pemVTdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBjcmVhdGVBcnJheSBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUFycmF5XCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuaW1wb3J0IGV4aXN0cyBmcm9tIFwiLi4vc3RhdGljL2V4aXN0c1wiO1xuaW1wb3J0IGlzRGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2lzRGVmaW5lZFwiO1xuaW1wb3J0IGxvYWRCbG9iZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRCbG9iZmlsZVwiO1xuaW1wb3J0IGxvYWRKU09OIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTT05cIjtcbmltcG9ydCBsb2FkVGV4dGZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkVGV4dGZpbGVcIjtcblxuY29uc3QgU3RhdGljID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGdldERvY3VtZW50LFxuICAgIGdldFdpbmRvdyxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBleGlzdHMsXG4gICAgaXNEZWZpbmVkLFxuICAgIGxvYWRCbG9iZmlsZSxcbiAgICBsb2FkSlNPTixcbiAgICBsb2FkVGV4dGZpbGUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWM7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGluamVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGF0YSwgYXBwZW5kLCB0bylcbntcbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnYXJyYXknKSkge1xuICAgICAgICBzZWxlY3Rvci5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpbmplY3QoZWxlbSwgZGF0YSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNEZWZpbmVkO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIi8vIGltcG9ydCBET01QYXJzZXIgZnJvbSAnRE9NUGFyc2VyJztcblxuY29uc3QgaXNIVE1MU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIC8vIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIFwidGV4dC94bWxcIik7XG4gICAgLy8gcmV0dXJuIHhtbERvYztcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICByZXR1cm4gISFkaXYuY2hpbGRFbGVtZW50Q291bnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0hUTUxTdHJpbmc7XG4iLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsIlxuY29uc3QgaXNTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3RyaW5nO1xuIiwiXG5jb25zdCBsb2FkQmxvYmZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgICAgLnRoZW4oYmxvYiA9PiBvbmxvYWQoYmxvYikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmxvYmZpbGU7IiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmNvbnN0IGxvYWRKU09OID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gb25sb2FkKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTT047IiwiXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5sb2FkSlNTeW5jICgge1xuICogICAgICBteXNjcmlwdDE6ICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICBteXNjcmlwdDI6ICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAubG9hZEpTU3luYyAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmxvYWRKU1N5bmNcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBsb2FkSlNTeW5jID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgaWYgKHR5cGVPZihzcmNzLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialsncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIHNyYzogKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNTeW5jO1xuIiwiXG5jb25zdCBsb2FkVGV4dGZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4odGV4dCA9PiBvbmxvYWQodGV4dCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVGV4dGZpbGU7IiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiXG5leHBvcnQgY29uc3QgbnVtYmVyMnN0cmluZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgbGV0IGU7XG4gICAgaWYgKE1hdGguYWJzKHgpIDwgMS4wKSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJ2UtJylbMV0pO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgeCAqPSBNYXRoLnBvdygxMCxlLTEpO1xuICAgICAgICAgICAgeCA9ICcwLicgKyAobmV3IEFycmF5KGUpKS5qb2luKCcwJykgKyB4LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnKycpWzFdKTtcbiAgICAgICAgaWYgKGUgPiAyMCkge1xuICAgICAgICAgICAgZSAtPSAyMDtcbiAgICAgICAgICAgIHggLz0gTWF0aC5wb3coMTAsZSk7XG4gICAgICAgICAgICB4ICs9IChuZXcgQXJyYXkoZSsxKSkuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyMnN0cmluZztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIi8vIGltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cblxuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgICAgICBkYXRhLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBkYXRhLmVsZW1lbnQgPSB3aW5kb3c7XG4gICAgfVxuICAgIGVsc2VcbiAgICBpZiAoZWxlbSAmJiBlbGVtLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIGNsaWVudFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRUb3AgfHwgMCxcbiAgICAgICAgICAgICAgICBjbGllbnRMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICAgICAgICAgIGRhdGEueSA9IE1hdGgucm91bmQocmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3ApO1xuICAgICAgICAgICAgZGF0YS54ID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCk7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGRhdGEudG9wID0gcmVjdC50b3AgKyBwYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGRhdGEubGVmdCA9IHJlY3QubGVmdCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5yaWdodCA9IHJlY3QucmlnaHQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEuYm90dG9tID0gcmVjdC5ib3R0b20gKyBwYWdlWE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzICYmIGVsZW1lbnRzWzBdID8gZWxlbWVudHNbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tICcuL2dldERvY3VtZW50JztcblxuY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcblxuY29uc3QgcXVlcnlBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmcm9tID0gZnJvbSB8fCBkb2M7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZU9mKGZyb20sICdzdHJpbmcnKSlcbiAgICAgICAgZnJvbSA9IGRvYy5xdWVyeVNlbGVjdG9yKGZyb20pO1xuICAgIGlmIChmcm9tKVxuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZnJvbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB7fSwgZWxlbWVudCl9KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmltcG9ydCB7QUJDLCBMRVRURVJfQ09OU09OQU5ULCBMRVRURVJfVk9XRUwsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYsIHdpdGhOdW1iZXJzID0gZmFsc2UpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gd2l0aE51bWJlcnNcbiAgICAgICAgPyBBQkMgKyBOVU1CRVJTLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKVxuICAgICAgICA6IEFCQy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz0gYWJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFicy5sZW5ndGgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21IdW1hbml6ZVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBjb25zb25hbnQgPSAgTEVUVEVSX0NPTlNPTkFOVC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWwgPSAgTEVUVEVSX1ZPV0VMLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbEZpcnN0ID0gKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA1O1xuICAgIGZvciAoaSA9IHNpemUgLyAyICsgMTsgaSA+IDA7IGkgLS0pIHtcbiAgICAgICAgbGV0IHMxID0gY29uc29uYW50W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbnNvbmFudC5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHMyID0gdm93ZWxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdm93ZWwubGVuZ3RoKV07XG4gICAgICAgIHN0cmluZyArPSB2b3dlbEZpcnN0ID8gczEgKyBzMiA6IHMyICsgczE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc2l6ZSk7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cbi8qKlxuICogc2VhcmNoKCAndWwgPiBsaScsICAnZGF0YS1saW5rJywgTm9kZUVsZW1lbnQpO1xuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGF0dHJcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcbmNvbnN0IHN0cjJmcmFnbWVudCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJmcmFnbWVudDtcbiIsImltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4vc3RyMmZyYWdtZW50XCI7XG5cbmNvbnN0IHN0cjJub2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGZyYWdtZW50ID0gc3RyMmZyYWdtZW50KHN0cmluZyk7XG5cbiAgICBzd2l0Y2ggKGZyYWdtZW50LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZyYWdtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJcbmNvbnN0IHRvT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuICAgICAgICA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b09iamVjdDtcbiIsImltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iXSwic291cmNlUm9vdCI6IiJ9