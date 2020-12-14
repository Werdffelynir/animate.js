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
            this.element = (0, _str2node2.default)(this.element);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MoveClipClass = exports.MoveClipClass = function () {
    function MoveClipClass(properties) {
        _classCallCheck(this, MoveClipClass);

        var element = properties.element;

        var clip = (0, _Clip2.default)(element);

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
exports.SceneClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _clone2 = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone3 = _interopRequireDefault(_clone2);

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
        key: 'add',
        value: function add(name, callback) {
            this.layers[name] = callback;
        }
    }, {
        key: 'get',
        value: function get(name) {
            return this.layers[name];
        }
    }, {
        key: 'next',
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
        key: 'render',
        value: function render() {
            var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

            this.current = key;
            var cb = this.layers[this.current];

            if (typeof cb === "function") {
                cb.call(cb);
            }
        }
    }, {
        key: 'clone',
        value: function clone(name) {
            return (0, _clone3.default)(this);
        }
    }]);

    return SceneClass;
}();

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
        return (0, _clone3.default)(this);
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
    AnimationFrame: _AnimationFrame2.default
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW92ZUNsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hYmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZW5jb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0hUTUxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTU3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL21lcmdlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbm9kZTJzdHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9udW1iZXIyc3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5QWxsLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmFuZG9tLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcmVkaXJlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIyZnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHIybm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbkZyYW1lIiwicm9vdCIsInJlcXVlc3RJZCIsInN0YXJ0cGFseSIsInBhdXNlZCIsImNhbGxiYWNrIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwic3RlcCIsInRpbWVzdGFtcCIsImNhbGwiLCJjYW5jZWwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsInN0YXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJDbGlwQ2xhc3MiLCJlbGVtZW50IiwicG9zaXRpb24iLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50IiwiQ2xpcCIsImFwcGVuZENoaWxkIiwiTm9kZSIsIm1vdmVUbyIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJwYXJlbnROb2RlIiwieCIsInkiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsInBhcmVudEVsZW1lbnQiLCJjb3B5VG8iLCJvbiIsImNsb25lIiwiQ29tcG9uZW50Q2xhc3NQcm9wZXJ0aWVzIiwicHJvcHMiLCJ0ZW1wbGF0ZSIsIm92ZXJyaWRlIiwiYmVmb3JlIiwiaW5pdCIsImRhdGEiLCJjb21wbGV0ZSIsIm1ldGhvZHMiLCJub2RlIiwiaW5pdGlhbGl6ZWQiLCJjb21wbGV0ZWQiLCJjb21wb25lbnRzIiwiY2hpbGRyZW4iLCJDb21wb25lbnRDbGFzcyIsInByb3BlcnRpZXMiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYmluZCIsImhhc093blByb3BlcnR5IiwicHVzaCIsImRvY3VtZW50IiwiQ29tcG9uZW50IiwibGlzdCIsIm5hbWUiLCJjbG9uZWQiLCJjbG9uZU5vZGUiLCJjb25maWciLCJyYW5kb21OYW1lIiwidG9Mb3dlckNhc2UiLCJzdWJzdHJpbmciLCJ0b1VwcGVyQ2FzZSIsImNvbXAiLCJjcmVhdGUiLCJjb21wb25lbnQiLCJjb21wb25lbnRDaGlsZHJlbiIsImZpbmQiLCJLZXlib2FyZEV2ZW50TWFuYWdlciIsInN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2tzTGlzdCIsImFkZFN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2siLCJ0eXBlIiwia2V5Q29kZSIsIkFycmF5IiwiaXNBcnJheSIsInBhcnNlSW50IiwiZWFjaENhbGxiYWNrc0xpc3QiLCJlYWNoQ2FsbGJhY2siLCJzZXR1cExpc3RlbmVycyIsImFkZCIsInJtIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVhY2giLCJ3aXRoQ29uZGl0aW9uS2V5IiwicHJlc3MiLCJ1cCIsImRvd24iLCJNb3ZlQ2xpcENsYXNzIiwiY2xpcCIsImFwcGVuZCIsInZhbHVlIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJNb3ZlQ2xpcCIsIkVycm9yIiwiY2xvbmVQcm9wZXJ0eSIsIlJveHkiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwiZGVmYXVsdCIsInByb3h5IiwiUHJveHkiLCJnZXQiLCJvYmoiLCJwcm9wIiwic2V0IiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJmaWxsIiwib2JzZXJ2ZSIsInRvIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsImluZGV4IiwicngiLCJldmVudEN1cnNvciIsIlNjZW5lQ2xhc3MiLCJsYXllcnMiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImxlc3QiLCJpIiwicmVuZGVyIiwiY2IiLCJTY2VuZSIsIm5leHQiLCJzaG93IiwiY29uc3RydWN0b3IiLCJTdGVwc1NjZW5lIiwic3RlcHMiLCJpdGVyYXRpb24iLCJsb29wIiwic3RlcF9pdGVyYXRpb24iLCJzdGVwX3N0b3AiLCJzdGVwX2NhbGxiYWNrX2VhY2giLCJzdGVwX2NhbGxiYWNrcyIsInBsYXkiLCJzdG9wIiwiZW5kIiwibXMiLCJzZXRUaW1lb3V0IiwiZ290byIsIm9iamVjdCIsImVhY2hTdGVwcyIsImN1cnJlbnRDYWxsYmFja09iamVjdCIsIlRpbWVyIiwicmVwZWF0IiwidGhpc0luc3RhbmNlIiwiaXRlcmF0b3IiLCJ0aGlzSW5zdCIsImlzTmFOIiwic2V0SW50ZXJ2YWwiLCJjbGVhclRpbWVvdXQiLCJjbGVhckludGVydmFsIiwiQW5pbWF0ZSIsIlN0YXRpYyIsIlV0aWwiLCJMRVRURVJfQ09OU09OQU5UIiwiTEVUVEVSX1ZPV0VMIiwiQUJDIiwiTlVNQkVSUyIsIkFNUEVSU0FORCIsImF0dHIiLCJ0eXBlX2VsZW1lbnQiLCJhcmd1bWVudHMiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmcm9tIiwiRGF0ZSIsIlJlZ0V4cCIsIkZ1bmN0aW9uIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImNvcHkiLCJzcmMiLCJpbnN0YW5jZSIsInNsaWNlIiwiY3JlYXRlQXJyYXkiLCJudW0iLCJhcnIiLCJyIiwidW5kZWZpbmVkIiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHJzIiwiaW5uZXIiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRfY2hpbGQiLCJpbnNlcnQiLCJrIiwiY3JlYXRlRnJhZ21lbnQiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjc3MiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwidHlwZVNlbGVjdG9yIiwidHlwZVByb3BlcnRpZXMiLCJwYXJzZSIsInN0ciIsInAxIiwic3BsaXQiLCJwMiIsInBuIiwiaXgiLCJvIiwidHJpbSIsImluZGV4T2YiLCJkZWNvZGVHZXRRdWVyeSIsInF1ZXJ5IiwicGFpcnMiLCJzdWJzdHIiLCJpdGVtIiwicGFpciIsImRlY29kZVVSSUNvbXBvbmVudCIsImRlZmluZWQiLCJkZWZpbmVkSW4iLCJzdGFjayIsImRvbUxvYWRlZCIsImRvYyIsInF1ZXJ5U2VsZWN0b3IiLCJ2IiwiYSIsIk5vZGVMaXN0IiwiZmlsdGVyIiwibG9vcHMiLCJnZXRQYXJlbnQiLCJlbGVtIiwiZW5jb2RlR2V0UXVlcnkiLCJwYXJhbXMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsInBhcmFtIiwiX18iLCJwcm90b3R5cGUiLCJleHRlbmRSZWN1cnNpdmUiLCJwcm9wZXJ0eSIsImZpbmRPYmplY3QiLCJhdHRyVmFsdWUiLCJ0bXAiLCJmaW5kT2JqZWN0cyIsImZpbmRzIiwiZm9ybWF0Iiwic3RyaW5nIiwicmVnIiwicmVwbGFjZSIsIm1hdGNoIiwibnVtYmVyIiwiZ2V0RG9jdW1lbnQiLCJnZXRMb2NhdGlvbiIsImxvY2F0aW9uIiwiZ2V0V2luZG93IiwiaHR0cFJlcXVlc3QiLCJzZW5kRGF0YSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3B0aW9ucyIsImFjdGlvbiIsInVybCIsImhyZWYiLCJtZXRob2QiLCJoZWFkZXJzIiwidXNlRW5jb2RlIiwidXNlRm9ybURhdGEiLCJhc3luYyIsInVzZXIiLCJwYXNzd29yZCIsImNvbmNhdGVTdHJpbmciLCJGb3JtRGF0YSIsIkhUTUxGb3JtRWxlbWVudCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZE9wdGlvbnMiLCJzZW5kIiwiaW5qZWN0Iiwic3RyMm5vZGUiLCJzdHIyZnJhZ21lbnQiLCJub2RlMnN0ciIsInF1ZXJ5QWxsIiwic2VhcmNoIiwiaXNFbXB0eSIsImlzTm9kZSIsImxvYWRDU1MiLCJsb2FkSlMiLCJsb2FkSlNTeW5jIiwibWVyZ2UiLCJudW1iZXIyc3RyaW5nIiwicG9zaXRpb25Nb3VzZSIsInJhbmRvbSIsInJhbmRvbUNvbG9yIiwicmFuZG9tSXRlbSIsInJhbmRvbU51bWJlciIsInJhbmRvbVN0cmluZyIsInJhbmRvbUh1bWFuaXplU3RyaW5nIiwicmVkaXJlY3QiLCJ0eXBlT2YiLCJ0eXBlT2ZTdHJpY3QiLCJ1cmkiLCJ0b09iamVjdCIsImlzSFRNTFN0cmluZyIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiZGl2IiwiY2hpbGRFbGVtZW50Q291bnQiLCJub2RlVHlwZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwib25sb2FkIiwib25lcnJvciIsImxpbmsiLCJNYXRoIiwidG9TdHJpbmciLCJyZWwiLCJoZWFkIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0Iiwic3JjcyIsInNjcmlwdHMiLCJlIiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb250YWluZXIiLCJhYnMiLCJwb3ciLCJqb2luIiwiYnViYmxlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJyb3VuZCIsInRvcCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIk1vdXNlRXZlbnQiLCJlcnJvciIsImNsaWVudFgiLCJjbGllbnRZIiwicXVlcnlTZWxlY3RvckFsbCIsIm1pbiIsIm1heCIsImZsb29yIiwibGV0dGVycyIsImNvbG9yIiwic2l6ZSIsImNlaWwiLCJyZXMiLCJ3aXRoTnVtYmVycyIsImNvbnNvbmFudCIsInZvd2VsIiwidm93ZWxGaXJzdCIsInMxIiwiczIiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiaGFzQXR0cmlidXRlIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2ltcGxlVHlwZXMiLCJ0IiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkEsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUFZO0FBQy9CO0FBQ0EsUUFBTUMsT0FBTztBQUNUQyxtQkFBVyxDQURGO0FBRVRDLG1CQUFXLENBRkY7QUFHVEMsZ0JBQVEsS0FIQztBQUlUQyxrQkFBVSxDQUpEO0FBS1RDLGVBQU8sQ0FMRTtBQU1UQyxrQkFBVSxDQU5EO0FBT1RDLGtCQUFVO0FBUEQsS0FBYjs7QUFVQVAsU0FBS1EsSUFBTCxHQUFZLFVBQVVDLFNBQVYsRUFBcUI7QUFDN0IsWUFBSSxDQUFDVCxLQUFLRSxTQUFWLEVBQXFCRixLQUFLRSxTQUFMLEdBQWlCTyxTQUFqQjtBQUNyQlQsYUFBS08sUUFBTCxHQUFnQkUsWUFBWVQsS0FBS0UsU0FBakM7O0FBRUEsWUFBSUYsS0FBS0ksUUFBVCxFQUFtQjtBQUNmSixpQkFBS0ksUUFBTCxDQUFjTSxJQUFkLENBQW1CVixJQUFuQixFQUF5QkEsS0FBS08sUUFBOUI7QUFDSDs7QUFFRCxZQUFJUCxLQUFLTSxRQUFMLElBQWlCTixLQUFLTSxRQUFMLEdBQWdCTixLQUFLTyxRQUExQyxFQUFvRDtBQUNoRFAsaUJBQUtXLE1BQUw7QUFDSDs7QUFFREMsZUFBT0MscUJBQVAsQ0FBNkJiLEtBQUtRLElBQWxDO0FBQ0EsWUFBSVIsS0FBS0csTUFBVCxFQUFpQjtBQUNiUyxtQkFBT0MscUJBQVAsQ0FBNkJiLEtBQUtRLElBQWxDO0FBQ0g7QUFDSixLQWhCRDs7QUFrQkFSLFNBQUtjLEtBQUwsR0FBYSxZQUFZO0FBQ3JCZCxhQUFLRyxNQUFMLEdBQWMsQ0FBQ0gsS0FBS0csTUFBcEI7QUFDSCxLQUZEOztBQUlBSCxTQUFLZSxLQUFMLEdBQWEsVUFBVVgsUUFBVixFQUFvQjtBQUM3QixZQUFJQSxRQUFKLEVBQWM7QUFDVkosaUJBQUtJLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0g7QUFDRCxlQUFPSixLQUFLQyxTQUFMLEdBQWlCVyxPQUFPQyxxQkFBUCxDQUE2QmIsS0FBS1EsSUFBbEMsQ0FBeEI7QUFDSCxLQUxEOztBQU9BUixTQUFLVyxNQUFMLEdBQWMsWUFBWTtBQUN0QkMsZUFBT0ksb0JBQVAsQ0FBNEJoQixLQUFLQyxTQUFqQztBQUNILEtBRkQ7O0FBSUEsV0FBT0QsSUFBUDtBQUNILENBOUNEOztrQkFpRGVELGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEZjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRWFrQixTLFdBQUFBLFM7QUFDVCx1QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixhQUFLQyxRQUFMLEdBQWdCLHdCQUFTRCxPQUFULENBQWhCO0FBQ0EsYUFBS0EsT0FBTCxHQUFlQyxtQkFBU0QsT0FBeEI7QUFDQSxhQUFLRSxhQUFMO0FBQ0g7Ozs7K0JBRU1DLE0sRUFBUTtBQUNYLGdCQUFJQSxrQkFBa0JDLElBQXRCLEVBQTRCO0FBQ3hCLHVCQUFPRCxPQUFPSCxPQUFQLENBQWVLLFdBQWYsQ0FBMkIsS0FBS0wsT0FBaEMsQ0FBUDtBQUNIO0FBQ0QsZ0JBQUlHLGtCQUFrQkcsSUFBdEIsRUFBNEI7QUFDeEIsdUJBQU9ILE9BQU9FLFdBQVAsQ0FBbUIsS0FBS0wsT0FBeEIsQ0FBUDtBQUNIO0FBQ0o7OzsrQkFFTUcsTSxFQUFRO0FBQ1gsaUJBQUtILE9BQUwsR0FBZSxvQkFBSyxLQUFLQSxPQUFWLENBQWY7QUFDQSxpQkFBS08sTUFBTCxDQUFZSixNQUFaO0FBQ0g7OzsyQkFFR0ssSyxFQUFPdEIsUSxFQUFVO0FBQ2pCLGlCQUFLYyxPQUFMLENBQWFTLGdCQUFiLENBQThCRCxLQUE5QixFQUFxQ3RCLFFBQXJDO0FBQ0g7OztnQ0FFUTtBQUNMLG1CQUFPLHFCQUFNLElBQU4sQ0FBUDtBQUNIOzs7d0NBRWU7QUFDWndCLG1CQUFPQyxJQUFQLENBQVksS0FBS1YsUUFBakIsRUFBMkJXLEdBQTNCLENBQStCLFVBQVVDLEdBQVYsRUFBZTtBQUMxQyxvQkFBSSxPQUFPLEtBQUtBLEdBQUwsQ0FBUCxLQUFxQixXQUF6QixFQUFzQztBQUNsQyx5QkFBS0EsR0FBTCxJQUFZLEtBQUtaLFFBQUwsQ0FBY1ksR0FBZCxDQUFaO0FBQ0g7QUFDSixhQUpEOztBQU1BLGdCQUFJLEtBQUtiLE9BQUwsWUFBd0JNLElBQTVCLEVBQWtDO0FBQzlCLG9CQUFNSCxTQUFTLHdCQUFTLEtBQUtILE9BQUwsQ0FBYWMsVUFBdEIsQ0FBZjtBQUNBLHFCQUFLQyxDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTWixPQUFPWSxDQUF6QjtBQUNBLHFCQUFLQyxDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTYixPQUFPYSxDQUF6QjtBQUNBLHFCQUFLaEIsT0FBTCxDQUFhaUIsWUFBYixDQUEwQixXQUExQixFQUF3QyxLQUFLakIsT0FBTCxDQUFha0IsRUFBYixJQUFtQixNQUEzRDtBQUNIO0FBQ0o7Ozs7O0FBRUw7Ozs7Ozs7O0FBTUEsSUFBTWQsT0FBTyxTQUFQQSxJQUFPLENBQVVKLE9BQVYsRUFDYjtBQUNJLFFBQU1sQixPQUFPLHdCQUFTa0IsT0FBVCxDQUFiOztBQUVBLFFBQUlsQixLQUFLa0IsT0FBTCxZQUF3Qk0sSUFBNUIsRUFBa0M7QUFDOUIsWUFBTUgsU0FBUyx3QkFBU0gsUUFBUWMsVUFBakIsQ0FBZjtBQUNBaEMsYUFBS2lDLENBQUwsR0FBU2pDLEtBQUtpQyxDQUFMLEdBQVNaLE9BQU9ZLENBQXpCO0FBQ0FqQyxhQUFLa0MsQ0FBTCxHQUFTbEMsS0FBS2tDLENBQUwsR0FBU2IsT0FBT2EsQ0FBekI7QUFDQWxDLGFBQUtrQixPQUFMLENBQWFpQixZQUFiLENBQTBCLFdBQTFCLEVBQXVDbkMsS0FBS2tCLE9BQUwsQ0FBYWtCLEVBQWIsSUFBbUIsTUFBMUQ7QUFDSDs7QUFFRHBDLFNBQUt5QixNQUFMLEdBQWMsVUFBVVksYUFBVixFQUF5QjtBQUNuQyxZQUFJQSx5QkFBeUJmLElBQTdCLEVBQW1DO0FBQy9CLG1CQUFPZSxjQUFjbkIsT0FBZCxDQUFzQkssV0FBdEIsQ0FBa0N2QixLQUFLa0IsT0FBdkMsQ0FBUDtBQUNIO0FBQ0QsWUFBSW1CLHlCQUF5QmIsSUFBN0IsRUFBbUM7QUFDL0IsbUJBQU9hLGNBQWNkLFdBQWQsQ0FBMEJ2QixLQUFLa0IsT0FBL0IsQ0FBUDtBQUNIO0FBQ0osS0FQRDs7QUFTQWxCLFNBQUtzQyxNQUFMLEdBQWMsVUFBVUQsYUFBVixFQUF5QjtBQUNuQ3JDLGFBQUtrQixPQUFMLEdBQWUsb0JBQUtsQixLQUFLa0IsT0FBVixDQUFmO0FBQ0FsQixhQUFLeUIsTUFBTCxDQUFZWSxhQUFaO0FBQ0gsS0FIRDs7QUFLQXJDLFNBQUt1QyxFQUFMLEdBQVUsVUFBVWIsS0FBVixFQUFpQnRCLFFBQWpCLEVBQTJCO0FBQ2pDSixhQUFLa0IsT0FBTCxDQUFhUyxnQkFBYixDQUE4QkQsS0FBOUIsRUFBcUN0QixRQUFyQztBQUNILEtBRkQ7O0FBSUFKLFNBQUt3QyxLQUFMLEdBQWEsWUFBWTtBQUNyQixlQUFPLHFCQUFNLElBQU4sQ0FBUDtBQUNILEtBRkQ7O0FBSUEsV0FBT3hDLElBQVA7QUFDSCxDQWxDRDs7a0JBb0Nlc0IsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHTyxJQUFNbUIsOERBQTJCO0FBQ3BDTCxRQUFJLElBRGdDO0FBRXBDTSxXQUFPLEVBRjZCO0FBR3BDQyxjQUFVLEtBSDBCO0FBSXBDekIsYUFBUyxLQUoyQjtBQUtwQzBCLGNBQVUsS0FMMEI7QUFNcENDLFlBQVEsa0JBQU0sQ0FBRSxDQU5vQjtBQU9wQ0MsVUFBTSxnQkFBTSxDQUFFLENBUHNCO0FBUXBDQyxVQUFNLGdCQUFNLENBQUUsQ0FSc0I7QUFTcENDLGNBQVUsb0JBQU0sQ0FBRSxDQVRrQjtBQVVwQ0MsYUFBUyxFQVYyQjtBQVdwQ0MsVUFBTSxFQVg4QjtBQVlwQ1gsUUFBSSxFQVpnQztBQWFwQ1ksaUJBQWEsS0FidUI7QUFjcENDLGVBQVcsS0FkeUI7QUFlcENDLGdCQUFZLEVBZndCO0FBZ0JwQ0MsY0FBVSxFQWhCMEI7QUFpQnBDakMsWUFBUTtBQWpCNEIsQ0FBakM7O0FBb0JQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW1CYWtDLGMsV0FBQUEsYztBQUVUOzs7O0FBSUEsOEJBQ0E7QUFBQTs7QUFBQSxZQURZQyxVQUNaLHVFQUR5QixFQUN6Qjs7QUFBQTs7QUFDSSxhQUFLcEMsYUFBTCxDQUFtQm9DLFVBQW5COztBQUVBLFlBQUksT0FBTyxLQUFLWCxNQUFaLEtBQXVCLFVBQXZCLElBQXFDLENBQUMsS0FBS00sV0FBL0MsRUFBNEQ7QUFDeEQsaUJBQUtOLE1BQUw7QUFDSDtBQUNELFlBQUksT0FBTyxLQUFLM0IsT0FBWixLQUF3QixRQUE1QixFQUFzQztBQUNsQyxpQkFBS0EsT0FBTCxHQUFlLHdCQUFTLEtBQUtBLE9BQWQsQ0FBZjtBQUNIO0FBQ0QsWUFBSSxLQUFLK0IsT0FBTCxJQUFnQnJCLE9BQU82QixNQUFQLENBQWMsS0FBS1IsT0FBbkIsRUFBNEJTLE1BQWhELEVBQXdEO0FBQ3BEOUIsbUJBQU9DLElBQVAsQ0FBWSxLQUFLb0IsT0FBakIsRUFBMEJVLE9BQTFCLENBQWtDLFVBQUM1QixHQUFELEVBQVM7QUFDdkMsb0JBQUksT0FBTyxNQUFLa0IsT0FBTCxDQUFhbEIsR0FBYixDQUFQLEtBQTZCLFVBQWpDLEVBQTZDO0FBQ3pDLDBCQUFLa0IsT0FBTCxDQUFhbEIsR0FBYixJQUFvQixNQUFLa0IsT0FBTCxDQUFhbEIsR0FBYixFQUFrQjZCLElBQWxCLENBQXVCLEtBQXZCLENBQXBCO0FBQ0Esd0JBQUksQ0FBQyxNQUFLQyxjQUFMLENBQW9COUIsR0FBcEIsQ0FBTCxFQUErQjtBQUMzQiw4QkFBS0EsR0FBTCxJQUFZLE1BQUtrQixPQUFMLENBQWFsQixHQUFiLENBQVo7QUFDSDtBQUNKO0FBQ0osYUFQRDtBQVFIOztBQUVELFlBQUksT0FBTyxLQUFLZSxJQUFaLEtBQXFCLFVBQXJCLElBQW1DLENBQUMsS0FBS0ssV0FBN0MsRUFBeUQ7QUFDckQsaUJBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxpQkFBS0wsSUFBTDtBQUNIOztBQUVELFlBQUksS0FBS0MsSUFBTCxJQUFhbkIsT0FBT0MsSUFBUCxDQUFZLEtBQUtrQixJQUFqQixFQUF1QlcsTUFBeEMsRUFBZ0Q7QUFDNUM5QixtQkFBT0MsSUFBUCxDQUFZLEtBQUtrQixJQUFqQixFQUF1QlksT0FBdkIsQ0FBK0IsVUFBQzVCLEdBQUQsRUFBUztBQUNwQyxvQkFBSSxPQUFPLE1BQUtnQixJQUFMLENBQVVoQixHQUFWLENBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDdEMsMEJBQUtnQixJQUFMLENBQVVoQixHQUFWLElBQWlCLE1BQUtnQixJQUFMLENBQVVoQixHQUFWLEVBQWU2QixJQUFmLENBQW9CLEtBQXBCLENBQWpCO0FBQ0g7QUFDRCxvQkFBSSxDQUFDLE1BQUtDLGNBQUwsQ0FBb0I5QixHQUFwQixDQUFMLEVBQStCO0FBQzNCLDBCQUFLQSxHQUFMLElBQVksTUFBS2dCLElBQUwsQ0FBVWhCLEdBQVYsQ0FBWjtBQUNIO0FBQ0osYUFQRDtBQVFIOztBQUVELFlBQUksS0FBS3NCLFVBQUwsSUFBbUJ6QixPQUFPQyxJQUFQLENBQVksS0FBS3dCLFVBQWpCLEVBQTZCSyxNQUFwRCxFQUE0RDtBQUN4RDlCLG1CQUFPQyxJQUFQLENBQVksS0FBS3dCLFVBQWpCLEVBQTZCTSxPQUE3QixDQUFxQyxVQUFDNUIsR0FBRCxFQUFTO0FBQzFDLG9CQUFLLE1BQUtzQixVQUFMLENBQWdCdEIsR0FBaEIsS0FBd0IsTUFBS3NCLFVBQUwsQ0FBZ0J0QixHQUFoQixFQUFxQjhCLGNBQXJCLENBQW9DLEtBQXBDLENBQTdCLEVBQXlFO0FBQ3JFLDBCQUFLUixVQUFMLENBQWdCdEIsR0FBaEIsRUFBcUJWLE1BQXJCLEdBQThCLEtBQTlCO0FBQ0g7QUFDRCxzQkFBS2lDLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQixNQUFLVCxVQUFMLENBQWdCdEIsR0FBaEIsQ0FBbkI7QUFDSCxhQUxEO0FBTUg7O0FBRUQsWUFBSSxLQUFKLEVBQW1DLEVBR2xDOztBQUVELFlBQUksT0FBTyxLQUFLaUIsUUFBWixLQUF5QixVQUF6QixJQUF1QyxDQUFDLEtBQUtJLFNBQWpELEVBQTREO0FBQ3hELGdCQUFJVyxRQUFKLEVBQWM7QUFDVkEseUJBQVNwQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCwwQkFBS3lCLFNBQUwsR0FBaUIsSUFBakI7QUFDQSwwQkFBS0osUUFBTCxDQUFjdEMsSUFBZCxDQUFtQixNQUFLc0MsUUFBeEIsRUFBa0MsS0FBbEM7QUFDSCxpQkFIRDtBQUlILGFBTEQsTUFLTztBQUNILHFCQUFLSSxTQUFMLEdBQWlCLElBQWpCO0FBQ0EscUJBQUtKLFFBQUwsQ0FBY3RDLElBQWQsQ0FBbUIsS0FBS3NDLFFBQXhCLEVBQWtDLElBQWxDO0FBQ0g7QUFDSjs7QUFFRGdCLGtCQUFVQyxJQUFWLENBQWUsS0FBSzdCLEVBQXBCLElBQTBCLElBQTFCO0FBQ0g7Ozs7a0NBWVM4QixJLEVBQU07QUFDWixtQkFBT1gsZUFBZVUsSUFBZixDQUFvQkMsSUFBcEIsQ0FBUDtBQUNIOzs7MENBQ2lCQSxJLEVBQU07QUFDcEIsbUJBQU9YLGVBQWVVLElBQWYsQ0FBb0JDLElBQXBCLENBQVA7QUFDSDs7OzhCQUNLOUIsRSxFQUFJO0FBQ04sZ0JBQU0rQixTQUFTLHFCQUFNLElBQU4sQ0FBZjtBQUNBQSxtQkFBT3hCLFFBQVAsR0FBa0J3QixPQUFPeEIsUUFBUCxDQUFnQnlCLFNBQWhCLENBQTBCLElBQTFCLENBQWxCO0FBQ0EsbUJBQU9ELE1BQVA7QUFDSDs7O3NDQUNhWCxVLEVBQVk7QUFDdEJBLHlCQUFhLHFCQUFNZix3QkFBTixFQUFnQ2UsVUFBaEMsQ0FBYjtBQUNBNUIsbUJBQU9DLElBQVAsQ0FBWTJCLFVBQVosRUFBd0IxQixHQUF4QixDQUE0QixVQUFVQyxHQUFWLEVBQWU7QUFDdkMsb0JBQUksT0FBTyxLQUFLQSxHQUFMLENBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFDbEMseUJBQUtBLEdBQUwsSUFBWXlCLFdBQVd6QixHQUFYLENBQVo7QUFDSDtBQUNKLGFBSkQ7QUFLQSxtQkFBT3lCLFVBQVA7QUFDSDs7OzBCQTlCYWIsUSxFQUFVO0FBQ3BCLGdCQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUIscUJBQUt6QixPQUFMLEdBQWUsd0JBQVN5QixRQUFULENBQWY7QUFDSDtBQUNELGdCQUFJLHNCQUFPQSxRQUFQLENBQUosRUFBc0I7QUFDbEIscUJBQUt6QixPQUFMLEdBQWV5QixRQUFmO0FBQ0g7QUFDSixTOzRCQUNlO0FBQ1osbUJBQU8sS0FBS3pCLE9BQVo7QUFDSDs7Ozs7O0FBc0JMcUMsZUFBZVUsSUFBZixHQUFzQixFQUF0Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBLElBQU1ELFlBQVksU0FBWkEsU0FBWSxDQUFVSyxNQUFWLEVBQ2xCO0FBQ0ksUUFBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCO0FBQ0EsZUFBT0wsVUFBVUMsSUFBVixDQUFlSSxNQUFmLENBQVA7QUFDSCxLQUhELE1BR087QUFDSCxZQUFJLENBQUNBLE9BQU9qQyxFQUFaLEVBQWdCO0FBQ1osZ0JBQUlrQyxhQUFjLGtDQUFxQixDQUFyQixFQUF3QkMsV0FBeEIsRUFBbEI7QUFDQUQseUJBQWFBLFdBQVdFLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkJDLFdBQTNCLEtBQTJDSCxXQUFXRSxTQUFYLENBQXFCLENBQXJCLENBQXhEO0FBQ0FILG1CQUFPakMsRUFBUCxHQUFZLGNBQWNrQyxVQUExQjtBQUNIOztBQUVELFlBQUlOLFVBQVVDLElBQVYsQ0FBZUksT0FBT2pDLEVBQXRCLENBQUosRUFBK0I7QUFDM0IsbUJBQU80QixVQUFVQyxJQUFWLENBQWVJLE9BQU9qQyxFQUF0QixDQUFQO0FBQ0g7O0FBRUQsWUFBTXNDLE9BQU9WLFVBQVVXLE1BQVYsQ0FBaUJOLE1BQWpCLENBQWI7O0FBRUFLLGFBQUtFLFNBQUwsR0FBaUIsVUFBVXhDLEVBQVYsRUFBYztBQUMzQixtQkFBT3NDLEtBQUtyQixVQUFMLENBQWdCakIsRUFBaEIsSUFBc0JzQyxLQUFLckIsVUFBTCxDQUFnQmpCLEVBQWhCLENBQXRCLEdBQTRDLElBQW5EO0FBQ0gsU0FGRDs7QUFJQXNDLGFBQUtHLGlCQUFMLEdBQXlCLFVBQVV6QyxFQUFWLEVBQWM7QUFDbkMsbUJBQU9zQyxLQUFLcEIsUUFBTCxDQUFjd0IsSUFBZCxDQUFtQixVQUFDRixTQUFEO0FBQUEsdUJBQWVBLFVBQVV4QyxFQUFWLEtBQWlCQSxFQUFoQztBQUFBLGFBQW5CLENBQVA7QUFDSCxTQUZEOztBQUlBc0MsYUFBS2xDLEtBQUwsR0FBYSxVQUFVSixFQUFWLEVBQWM7QUFDdkIsZ0JBQU0rQixTQUFTLHFCQUFNLElBQU4sQ0FBZjtBQUNBQSxtQkFBT3hCLFFBQVAsR0FBa0J3QixPQUFPeEIsUUFBUCxDQUFnQnlCLFNBQWhCLENBQTBCLElBQTFCLENBQWxCO0FBQ0EsbUJBQU9ELE1BQVA7QUFDSCxTQUpEOztBQU1BLFlBQUksT0FBT08sS0FBSzdCLE1BQVosS0FBdUIsVUFBdkIsSUFBcUMsQ0FBQzZCLEtBQUt2QixXQUEvQyxFQUEyRDtBQUN2RHVCLGlCQUFLN0IsTUFBTDtBQUNIOztBQUVELFlBQUksT0FBTzZCLEtBQUsvQixRQUFaLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ25DK0IsaUJBQUsvQixRQUFMLEdBQWdCLHdCQUFTK0IsS0FBSy9CLFFBQWQsQ0FBaEI7QUFDSDs7QUFFRCxZQUFJK0IsS0FBS3pCLE9BQUwsSUFBZ0JyQixPQUFPNkIsTUFBUCxDQUFjaUIsS0FBS3pCLE9BQW5CLEVBQTRCUyxNQUFoRCxFQUF3RDtBQUNwRDlCLG1CQUFPQyxJQUFQLENBQVk2QyxLQUFLekIsT0FBakIsRUFBMEJVLE9BQTFCLENBQWtDLFVBQUM1QixHQUFELEVBQVM7QUFDdkMsb0JBQUksT0FBTzJDLEtBQUt6QixPQUFMLENBQWFsQixHQUFiLENBQVAsS0FBNkIsVUFBakMsRUFBNkM7QUFDekMyQyx5QkFBS3pCLE9BQUwsQ0FBYWxCLEdBQWIsSUFBb0IyQyxLQUFLekIsT0FBTCxDQUFhbEIsR0FBYixFQUFrQjZCLElBQWxCLENBQXVCYyxJQUF2QixDQUFwQjtBQUNBLHdCQUFJLENBQUNBLEtBQUtiLGNBQUwsQ0FBb0I5QixHQUFwQixDQUFMLEVBQStCO0FBQzNCMkMsNkJBQUszQyxHQUFMLElBQVkyQyxLQUFLekIsT0FBTCxDQUFhbEIsR0FBYixDQUFaO0FBQ0g7QUFDSjtBQUNKLGFBUEQ7QUFRSDs7QUFFRCxZQUFJLE9BQU8yQyxLQUFLNUIsSUFBWixLQUFxQixVQUFyQixJQUFtQyxDQUFDNEIsS0FBS3ZCLFdBQTdDLEVBQXlEO0FBQ3JEdUIsaUJBQUt2QixXQUFMLEdBQW1CLElBQW5CO0FBQ0F1QixpQkFBSzVCLElBQUw7QUFDSDs7QUFFRCxZQUFJNEIsS0FBSzNCLElBQUwsSUFBYW5CLE9BQU9DLElBQVAsQ0FBWTZDLEtBQUszQixJQUFqQixFQUF1QlcsTUFBeEMsRUFBZ0Q7QUFDNUM5QixtQkFBT0MsSUFBUCxDQUFZNkMsS0FBSzNCLElBQWpCLEVBQXVCWSxPQUF2QixDQUErQixVQUFDNUIsR0FBRCxFQUFTO0FBQ3BDLG9CQUFJLE9BQU8yQyxLQUFLM0IsSUFBTCxDQUFVaEIsR0FBVixDQUFQLEtBQTBCLFVBQTlCLEVBQTBDO0FBQ3RDMkMseUJBQUszQixJQUFMLENBQVVoQixHQUFWLElBQWlCMkMsS0FBSzNCLElBQUwsQ0FBVWhCLEdBQVYsRUFBZTZCLElBQWYsQ0FBb0JjLElBQXBCLENBQWpCO0FBQ0g7QUFDRCxvQkFBSSxDQUFDQSxLQUFLYixjQUFMLENBQW9COUIsR0FBcEIsQ0FBTCxFQUErQjtBQUMzQjJDLHlCQUFLM0MsR0FBTCxJQUFZMkMsS0FBSzNCLElBQUwsQ0FBVWhCLEdBQVYsQ0FBWjtBQUNIO0FBQ0osYUFQRDtBQVFIOztBQUVELFlBQUkyQyxLQUFLckIsVUFBTCxJQUFtQnpCLE9BQU9DLElBQVAsQ0FBWTZDLEtBQUtyQixVQUFqQixFQUE2QkssTUFBcEQsRUFBNEQ7QUFDeEQ5QixtQkFBT0MsSUFBUCxDQUFZNkMsS0FBS3JCLFVBQWpCLEVBQTZCTSxPQUE3QixDQUFxQyxVQUFDNUIsR0FBRCxFQUFTO0FBQzFDLG9CQUFLMkMsS0FBS3JCLFVBQUwsQ0FBZ0J0QixHQUFoQixLQUF3QjJDLEtBQUtyQixVQUFMLENBQWdCdEIsR0FBaEIsRUFBcUI4QixjQUFyQixDQUFvQyxLQUFwQyxDQUE3QixFQUF5RTtBQUNyRWEseUJBQUtyQixVQUFMLENBQWdCdEIsR0FBaEIsRUFBcUJWLE1BQXJCLEdBQThCcUQsSUFBOUI7QUFDSDtBQUNEQSxxQkFBS3BCLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQlksS0FBS3JCLFVBQUwsQ0FBZ0J0QixHQUFoQixDQUFuQjtBQUNILGFBTEQ7QUFNSDs7QUFFRCxZQUFJLHNCQUFPMkMsS0FBSy9CLFFBQVosQ0FBSixFQUEyQjtBQUN2QitCLGlCQUFLeEIsSUFBTCxHQUFZLHNCQUFPLGFBQVAsRUFBc0IsV0FBdEIsRUFBbUN3QixLQUFLL0IsUUFBeEMsQ0FBWjtBQUNBK0IsaUJBQUtuQyxFQUFMLEdBQVUsc0JBQU8sV0FBUCxFQUFvQixTQUFwQixFQUErQm1DLEtBQUsvQixRQUFwQyxDQUFWO0FBQ0g7O0FBRUQsWUFBSSxPQUFPK0IsS0FBSzFCLFFBQVosS0FBeUIsVUFBekIsSUFBdUMsQ0FBQzBCLEtBQUt0QixTQUFqRCxFQUE0RDtBQUN4RCxnQkFBSVcsUUFBSixFQUFjO0FBQ1ZBLHlCQUFTcEMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQrQyx5QkFBS3RCLFNBQUwsR0FBaUIsSUFBakI7QUFDQXNCLHlCQUFLMUIsUUFBTCxDQUFjdEMsSUFBZCxDQUFtQmdFLElBQW5CLEVBQXlCQSxJQUF6QjtBQUNILGlCQUhEO0FBSUgsYUFMRCxNQUtPO0FBQ0hBLHFCQUFLdEIsU0FBTCxHQUFpQixJQUFqQjtBQUNBc0IscUJBQUsxQixRQUFMLENBQWN0QyxJQUFkLENBQW1CZ0UsSUFBbkIsRUFBeUJBLElBQXpCO0FBQ0g7QUFDSjs7QUFFRFYsa0JBQVVDLElBQVYsQ0FBZVMsS0FBS3RDLEVBQXBCLElBQTBCc0MsSUFBMUI7QUFDQSxlQUFPQSxJQUFQO0FBQ0g7QUFDSixDQWhHRDtBQWlHQVYsVUFBVUMsSUFBVixHQUFpQixFQUFqQjtBQUNBRCxVQUFVVyxNQUFWLEdBQW1CLFVBQVVOLE1BQVYsRUFBa0I7QUFDakMsV0FBTyxxQkFBTztBQUNWakMsWUFBSSxJQURNO0FBRVZNLGVBQU8sRUFGRztBQUdWQyxrQkFBVSxLQUhBO0FBSVZDLGtCQUFVLEtBSkE7QUFLVkUsY0FBTSxnQkFBTSxDQUFFLENBTEo7QUFNVkUsa0JBQVUsb0JBQU0sQ0FBRSxDQU5SO0FBT1ZDLGlCQUFTLEVBUEM7QUFRVkMsY0FBTSxFQVJJO0FBU1ZDLHFCQUFhLEtBVEg7QUFVVkMsbUJBQVcsS0FWRDtBQVdWQyxvQkFBWSxFQVhGO0FBWVZDLGtCQUFVLEVBWkE7QUFhVmpDLGdCQUFRO0FBYkUsS0FBUCxFQWNKZ0QsTUFkSSxDQUFQO0FBZUgsQ0FoQkQ7O2tCQWtCZUwsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2VGY7Ozs7Ozs7O0FBUUEsSUFBTWUsdUJBQXVCLFNBQXZCQSxvQkFBdUIsR0FDN0I7QUFDSSxRQUFNQyxVQUFVLEVBQWhCO0FBQ0EsUUFBTUMsb0JBQW9CLEVBQTFCO0FBQ0EsUUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQVV4RCxLQUFWLEVBQWlCSyxHQUFqQixFQUFzQjNCLFFBQXRCLEVBQWdDO0FBQy9DLFlBQUksQ0FBQzRFLFFBQVF0RCxLQUFSLENBQUwsRUFBcUJzRCxRQUFRdEQsS0FBUixJQUFpQixFQUFqQjtBQUNyQixZQUFJLENBQUNzRCxRQUFRdEQsS0FBUixFQUFlSyxHQUFmLENBQUwsRUFBMEJpRCxRQUFRdEQsS0FBUixFQUFlSyxHQUFmLElBQXNCLEVBQXRCO0FBQzFCaUQsZ0JBQVF0RCxLQUFSLEVBQWVLLEdBQWYsRUFBb0IrQixJQUFwQixDQUF5QjFELFFBQXpCOztBQUVBLFlBQUksT0FBTzZFLGtCQUFrQnZELEtBQWxCLENBQVAsS0FBb0MsVUFBeEMsRUFBb0Q7QUFDaER1RCw4QkFBa0J2RCxLQUFsQixJQUEyQnlELFlBQTNCO0FBQ0g7QUFDSixLQVJEO0FBU0EsUUFBTUEsZUFBZSxTQUFmQSxZQUFlLENBQVV6RCxLQUFWLEVBQWlCO0FBQ2xDRSxlQUFPQyxJQUFQLENBQVltRCxPQUFaLEVBQXFCbEQsR0FBckIsQ0FBeUIsVUFBQ3NELElBQUQsRUFBVTtBQUMvQnhELG1CQUFPQyxJQUFQLENBQVltRCxRQUFRSSxJQUFSLENBQVosRUFBMkJ0RCxHQUEzQixDQUErQixVQUFDdUQsT0FBRCxFQUFhO0FBQ3hDLG9CQUFJQyxNQUFNQyxPQUFOLENBQWVQLFFBQVFJLElBQVIsRUFBY0MsT0FBZCxDQUFmLENBQUosRUFBNkM7QUFDekNMLDRCQUFRSSxJQUFSLEVBQWNDLE9BQWQsRUFBdUJ2RCxHQUF2QixDQUEyQixVQUFDMUIsUUFBRCxFQUFjO0FBQ3JDLDRCQUFJc0IsTUFBTTBELElBQU4sS0FBZUEsSUFBZixJQUF1QkksU0FBU0gsT0FBVCxNQUFzQjNELE1BQU0yRCxPQUF2RCxFQUFpRTtBQUM3RGpGLHFDQUFTTSxJQUFULENBQWNnQixLQUFkLEVBQXFCQSxLQUFyQjtBQUNIO0FBQ0oscUJBSkQ7QUFLSDtBQUNKLGFBUkQ7QUFTSCxTQVZEO0FBV0gsS0FaRDs7QUFjQSxRQUFNK0Qsb0JBQW9CLEVBQTFCO0FBQ0EsUUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQVVoRSxLQUFWLEVBQWlCdEIsUUFBakIsRUFBMkI7QUFDNUNxRiwwQkFBa0IvRCxLQUFsQixJQUEyQnRCLFFBQTNCO0FBQ0gsS0FGRDs7QUFJQSxhQUFTdUYsY0FBVCxHQUEyQjtBQUN2QixZQUFNQyxNQUFNLFNBQU5BLEdBQU0sR0FBTTtBQUNkaEUsbUJBQU9DLElBQVAsQ0FBWW9ELGlCQUFaLEVBQStCbkQsR0FBL0IsQ0FBbUMsVUFBVUosS0FBVixFQUFpQjtBQUNoRHFDLHlCQUFTcEMsZ0JBQVQsQ0FBMEJELEtBQTFCLEVBQWlDdUQsa0JBQWtCdkQsS0FBbEIsQ0FBakM7QUFDSCxhQUZEO0FBR0FFLG1CQUFPQyxJQUFQLENBQVk0RCxpQkFBWixFQUErQjNELEdBQS9CLENBQW1DLFVBQVVKLEtBQVYsRUFBaUI7QUFDaERxQyx5QkFBU3BDLGdCQUFULENBQTBCRCxLQUExQixFQUFpQytELGtCQUFrQi9ELEtBQWxCLENBQWpDO0FBQ0gsYUFGRDtBQUdILFNBUEQ7QUFRQSxZQUFNbUUsS0FBSyxTQUFMQSxFQUFLLEdBQU07QUFDYmpFLG1CQUFPQyxJQUFQLENBQVlvRCxpQkFBWixFQUErQm5ELEdBQS9CLENBQW1DLFVBQVVKLEtBQVYsRUFBaUI7QUFDaERxQyx5QkFBUytCLG1CQUFULENBQTZCcEUsS0FBN0IsRUFBb0N1RCxrQkFBa0J2RCxLQUFsQixDQUFwQztBQUNILGFBRkQ7QUFHQUUsbUJBQU9DLElBQVAsQ0FBWTRELGlCQUFaLEVBQStCM0QsR0FBL0IsQ0FBbUMsVUFBVUosS0FBVixFQUFpQjtBQUNoRHFDLHlCQUFTK0IsbUJBQVQsQ0FBNkJwRSxLQUE3QixFQUFvQytELGtCQUFrQi9ELEtBQWxCLENBQXBDO0FBQ0gsYUFGRDtBQUdILFNBUEQ7QUFRQW1FO0FBQ0FEO0FBQ0g7O0FBRUQsUUFBTTVGLE9BQU87QUFDVCtGLFlBRFMsZ0JBQ0pyRSxLQURJLEVBQ0d0QixRQURILEVBQ2E7QUFDbEJzRix5QkFBYWhFLEtBQWIsRUFBb0J0QixRQUFwQjtBQUNBdUY7QUFDSCxTQUpRO0FBS1RLLHdCQUxTLDRCQUtRdEUsS0FMUixFQUtlSyxHQUxmLEVBS29CM0IsUUFMcEIsRUFLOEI7QUFDbkM4RSx1QkFBV3hELEtBQVgsRUFBa0JLLEdBQWxCLEVBQXVCM0IsUUFBdkI7QUFDQXVGO0FBQ0gsU0FSUTtBQVNUTSxhQVRTLGlCQVNIbEUsR0FURyxFQVNFM0IsUUFURixFQVNZO0FBQ2pCSixpQkFBS2dHLGdCQUFMLENBQXNCLFVBQXRCLEVBQWtDakUsR0FBbEMsRUFBdUMzQixRQUF2QztBQUNILFNBWFE7QUFZVDhGLFVBWlMsY0FZTm5FLEdBWk0sRUFZRDNCLFFBWkMsRUFZUztBQUNkSixpQkFBS2dHLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCakUsR0FBL0IsRUFBb0MzQixRQUFwQztBQUNILFNBZFE7QUFlVCtGLFlBZlMsZ0JBZUpwRSxHQWZJLEVBZUMzQixRQWZELEVBZVc7QUFDaEJKLGlCQUFLZ0csZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUNqRSxHQUFqQyxFQUFzQzNCLFFBQXRDO0FBQ0g7QUFqQlEsS0FBYjs7QUFvQkEsV0FBT0osSUFBUDtBQUNILENBMUVEOztrQkE0RWUrRSxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZmOzs7O0FBQ0E7Ozs7Ozs7O0lBRWFxQixhLFdBQUFBLGE7QUFDVCwyQkFBWTVDLFVBQVosRUFBd0I7QUFBQTs7QUFBQSxZQUNadEMsT0FEWSxHQUNBc0MsVUFEQSxDQUNadEMsT0FEWTs7QUFFcEIsWUFBTW1GLE9BQU8sb0JBQUtuRixPQUFMLENBQWI7O0FBRUEsYUFBS3NDLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsYUFBS3RDLE9BQUwsR0FBZW1GLEtBQUtuRixPQUFwQjtBQUNBLGFBQUttRixJQUFMLEdBQVlBLElBQVo7QUFDQSxhQUFLdkQsSUFBTCxHQUFZLEtBQVo7QUFDQSxhQUFLSyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsYUFBSy9CLGFBQUw7O0FBRUEsWUFBSSxPQUFPLEtBQUswQixJQUFaLEtBQXFCLFVBQXJCLElBQW1DLENBQUMsS0FBS0ssV0FBN0MsRUFBeUQ7QUFDckQsaUJBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxpQkFBS0wsSUFBTDtBQUNIO0FBQ0o7Ozs7Z0NBcUJzQjtBQUFBLGdCQUFoQndELE1BQWdCLHVFQUFQLEtBQU87O0FBQ25CLGdCQUFNNUQsUUFBUSx3QkFBUyxJQUFULENBQWQ7QUFDQUEsa0JBQU14QixPQUFOLEdBQWdCLEtBQUtBLE9BQUwsQ0FBYWtELFNBQWIsQ0FBdUIsSUFBdkIsQ0FBaEI7QUFDQSxnQkFBSWtDLFVBQVUsS0FBS3BGLE9BQW5CLEVBQ0ksS0FBS0EsT0FBTCxDQUFhYyxVQUFiLENBQXdCVCxXQUF4QixDQUFvQ21CLE1BQU14QixPQUExQzs7QUFFSixtQkFBTyxJQUFJa0YsYUFBSixDQUFrQjFELEtBQWxCLENBQVA7QUFDSDs7O3dDQUNlO0FBQ1pkLG1CQUFPQyxJQUFQLENBQVksS0FBSzJCLFVBQWpCLEVBQTZCMUIsR0FBN0IsQ0FBaUMsVUFBVUMsR0FBVixFQUFlO0FBQzVDLG9CQUFJLE9BQU8sS0FBS0EsR0FBTCxDQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ2xDLHlCQUFLQSxHQUFMLElBQVksS0FBS3lCLFVBQUwsQ0FBZ0J6QixHQUFoQixDQUFaO0FBQ0g7QUFDSixhQUpEO0FBS0EsaUJBQUtiLE9BQUwsQ0FBYWlCLFlBQWIsQ0FBMEIsZUFBMUIsRUFBNEMsS0FBS3FCLFVBQUwsQ0FBZ0JwQixFQUFoQixJQUFzQixVQUFsRTtBQUNIOzs7NEJBbkNPO0FBQUUsbUJBQU8sS0FBS2lFLElBQUwsQ0FBVXBFLENBQWpCO0FBQXFCLFM7MEJBSXpCc0UsSyxFQUFPO0FBQ1QsaUJBQUtyRixPQUFMLENBQWFzRixLQUFiLENBQW1CQyxVQUFuQixHQUFnQ0YsUUFBUSxJQUF4QztBQUNBLGlCQUFLRixJQUFMLENBQVVwRSxDQUFWLEdBQWNzRSxLQUFkO0FBQ0g7Ozs0QkFOTztBQUFFLG1CQUFPLEtBQUtGLElBQUwsQ0FBVW5FLENBQWpCO0FBQXFCLFM7MEJBT3pCcUUsSyxFQUFPO0FBQ1QsaUJBQUtyRixPQUFMLENBQWFzRixLQUFiLENBQW1CRSxTQUFuQixHQUErQkgsUUFBUSxJQUF2QztBQUNBLGlCQUFLRixJQUFMLENBQVVuRSxDQUFWLEdBQWNxRSxLQUFkO0FBQ0g7Ozs0QkFUVztBQUFFLG1CQUFPLEtBQUtGLElBQUwsQ0FBVU0sS0FBakI7QUFBeUIsUzswQkFVN0JKLEssRUFBTztBQUNiLGlCQUFLckYsT0FBTCxDQUFhc0YsS0FBYixDQUFtQkcsS0FBbkIsR0FBMkJKLFFBQVEsSUFBbkM7QUFDQSxpQkFBS0YsSUFBTCxDQUFVTSxLQUFWLEdBQWtCSixLQUFsQjtBQUNIOzs7NEJBWlk7QUFBRSxtQkFBTyxLQUFLRixJQUFMLENBQVVPLE1BQWpCO0FBQTBCLFM7MEJBYTlCTCxLLEVBQU87QUFDZCxpQkFBS3JGLE9BQUwsQ0FBYXNGLEtBQWIsQ0FBbUJJLE1BQW5CLEdBQTRCTCxRQUFRLElBQXBDO0FBQ0EsaUJBQUtGLElBQUwsQ0FBVU8sTUFBVixHQUFtQkwsS0FBbkI7QUFDSDs7Ozs7O0FBbUJMLElBQU1NLFdBQVcsU0FBWEEsUUFBVyxDQUFVeEMsTUFBVixFQUFrQjtBQUFBLFFBQ3ZCbkQsT0FEdUIsR0FDWG1ELE1BRFcsQ0FDdkJuRCxPQUR1Qjs7QUFFL0IsUUFBTW1GLE9BQU8sb0JBQU1uRixPQUFOLENBQWI7O0FBRUEsUUFBRyxDQUFDbUYsS0FBS25GLE9BQVQsRUFBa0I7QUFDZCxjQUFNLElBQUk0RixLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNIO0FBQ0RULFNBQUtuRixPQUFMLENBQWFpQixZQUFiLENBQTBCLGVBQTFCLEVBQTJDa0MsT0FBT2pDLEVBQVAsSUFBYSxVQUF4RDs7QUFFQSxRQUFNcEMsT0FBTztBQUNUa0IsaUJBQVNtRixLQUFLbkYsT0FETDtBQUVULFlBQUllLENBQUosQ0FBTXNFLEtBQU4sRUFBYTtBQUNUdkcsaUJBQUtrQixPQUFMLENBQWFzRixLQUFiLENBQW1CQyxVQUFuQixHQUFnQ0YsUUFBUSxJQUF4QztBQUNBRixpQkFBS3BFLENBQUwsR0FBU3NFLEtBQVQ7QUFDSCxTQUxRO0FBTVQsWUFBSXJFLENBQUosQ0FBTXFFLEtBQU4sRUFBYTtBQUNUdkcsaUJBQUtrQixPQUFMLENBQWFzRixLQUFiLENBQW1CRSxTQUFuQixHQUErQkgsUUFBUSxJQUF2QztBQUNBRixpQkFBS25FLENBQUwsR0FBU3FFLEtBQVQ7QUFDSCxTQVRRO0FBVVQsWUFBSUksS0FBSixDQUFVSixLQUFWLEVBQWlCO0FBQ2J2RyxpQkFBS2tCLE9BQUwsQ0FBYXNGLEtBQWIsQ0FBbUJHLEtBQW5CLEdBQTJCSixRQUFRLElBQW5DO0FBQ0FGLGlCQUFLTSxLQUFMLEdBQWFKLEtBQWI7QUFDSCxTQWJRO0FBY1QsWUFBSUssTUFBSixDQUFXTCxLQUFYLEVBQWtCO0FBQ2R2RyxpQkFBS2tCLE9BQUwsQ0FBYXNGLEtBQWIsQ0FBbUJJLE1BQW5CLEdBQTRCTCxRQUFRLElBQXBDO0FBQ0FGLGlCQUFLTyxNQUFMLEdBQWNMLEtBQWQ7QUFDSCxTQWpCUTtBQWtCVCxZQUFJdEUsQ0FBSixHQUFRO0FBQ0osbUJBQU9vRSxLQUFLcEUsQ0FBWjtBQUNILFNBcEJRO0FBcUJULFlBQUlDLENBQUosR0FBUTtBQUNKLG1CQUFPbUUsS0FBS25FLENBQVo7QUFDSCxTQXZCUTtBQXdCVCxZQUFJeUUsS0FBSixHQUFZO0FBQ1IsbUJBQU9OLEtBQUtNLEtBQVo7QUFDSCxTQTFCUTtBQTJCVCxZQUFJQyxNQUFKLEdBQWE7QUFDVCxtQkFBT1AsS0FBS08sTUFBWjtBQUNIO0FBN0JRLEtBQWI7O0FBZ0NBaEYsV0FBT0MsSUFBUCxDQUFZd0MsTUFBWixFQUFvQnZDLEdBQXBCLENBQXdCLFVBQVVDLEdBQVYsRUFBZTtBQUNuQy9CLGFBQUsrQixHQUFMLElBQVlzQyxPQUFPdEMsR0FBUCxDQUFaO0FBQ0gsS0FGRDs7QUFJQSxRQUFJLE9BQU8vQixLQUFLOEMsSUFBWixLQUFxQixVQUFyQixJQUFtQyxDQUFDOUMsS0FBS21ELFdBQTdDLEVBQXlEO0FBQ3JEbkQsYUFBS21ELFdBQUwsR0FBbUIsSUFBbkI7QUFDQW5ELGFBQUs4QyxJQUFMO0FBQ0g7O0FBRUQ5QyxTQUFLd0MsS0FBTCxHQUFhLFlBQTBCO0FBQUEsWUFBaEI4RCxNQUFnQix1RUFBUCxLQUFPOztBQUNuQyxZQUFNUyxnQkFBZ0Isd0JBQVMvRyxJQUFULENBQXRCO0FBQ0ErRyxzQkFBYzdGLE9BQWQsR0FBd0JsQixLQUFLa0IsT0FBTCxDQUFha0QsU0FBYixDQUF1QnBFLElBQXZCLENBQXhCO0FBQ0EsWUFBSXNHLE1BQUosRUFBWTtBQUNSdEcsaUJBQUtrQixPQUFMLENBQWFjLFVBQWIsQ0FBd0JULFdBQXhCLENBQW9Dd0YsY0FBYzdGLE9BQWxEO0FBQ0g7QUFDRCxlQUFPMkYsU0FBU0UsYUFBVCxDQUFQO0FBQ0gsS0FQRDs7QUFTQSxXQUFPL0csSUFBUDtBQUNILENBNUREOztrQkE4RGU2RyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RmY7Ozs7OztBQUVBLElBQU1HLE9BQU8sU0FBUEEsSUFBTyxDQUFVQyxPQUFWLEVBQ2I7QUFDSSxRQUFNQyxpQ0FBaUM7QUFDbkNDLGlCQUFTO0FBRDBCLEtBQXZDOztBQUlBLFFBQU1DLFFBQVEsSUFBSUMsS0FBSixDQUFVSixPQUFWLEVBQW1CO0FBQzdCSyxXQUQ2QixlQUN6QkMsR0FEeUIsRUFDcEJDLElBRG9CLEVBQ2Q7QUFDWCxtQkFBT0EsUUFBUUQsR0FBUixHQUFjQSxJQUFJQyxJQUFKLENBQWQsR0FBMEIsSUFBakM7QUFDSCxTQUg0QjtBQUk3QkMsV0FKNkIsZUFJekJGLEdBSnlCLEVBSXBCQyxJQUpvQixFQUlkakIsS0FKYyxFQUlQOztBQUVsQmdCLGdCQUFJQyxJQUFKLElBQVlqQixLQUFaOztBQUVBLGdCQUFJVywrQkFBK0JNLElBQS9CLEtBQXdDLE9BQU9OLCtCQUErQk0sSUFBL0IsQ0FBUCxLQUFnRCxVQUE1RixFQUNJTiwrQkFBK0JNLElBQS9CLEVBQXFDOUcsSUFBckMsQ0FBMEMsRUFBMUMsRUFBOEM4RyxJQUE5QyxFQUFvRGpCLEtBQXBELEVBQTJELG9CQUFLYSxLQUFMLENBQTNEOztBQUVKLGdCQUFJLE9BQU9GLCtCQUErQkMsT0FBdEMsS0FBa0QsVUFBdEQsRUFDSUQsK0JBQStCQyxPQUEvQixDQUF1Q3pHLElBQXZDLENBQTRDLEVBQTVDLEVBQWdEOEcsSUFBaEQsRUFBc0RqQixLQUF0RCxFQUE2RCxvQkFBS2EsS0FBTCxDQUE3RDs7QUFFSixtQkFBTyxJQUFQO0FBQ0g7QUFmNEIsS0FBbkIsQ0FBZDs7QUFrQkEsV0FBTzs7QUFFSDs7Ozs7O0FBTUFNLGdCQVJHLG9CQVFNM0YsR0FSTixFQVFXa0YsT0FSWCxFQVFvQjtBQUNuQixnQkFBSVUsZUFBSjs7QUFFQSxnQkFBSSxPQUFPNUYsR0FBUCxLQUFlLFVBQWYsSUFBNkIsQ0FBQ2tGLE9BQWxDLEVBQTJDO0FBQ3ZDVSx5QkFBUzVGLElBQUlyQixJQUFKLENBQVMsRUFBVCxFQUFhMEcsS0FBYixDQUFUO0FBQ0Esb0JBQUlPLE1BQUosRUFDSSxLQUFLQyxJQUFMLENBQVVELE1BQVY7QUFFUCxhQUxELE1BS08sSUFBSSxPQUFPVixPQUFQLEtBQW1CLFVBQXZCLEVBQW1DO0FBQ3RDVSx5QkFBU1YsUUFBUXZHLElBQVIsQ0FBYSxFQUFiLEVBQWlCMEcsTUFBTXJGLEdBQU4sQ0FBakIsQ0FBVDtBQUNBLG9CQUFJNEYsTUFBSixFQUNJUCxNQUFNckYsR0FBTixJQUFhNEYsTUFBYjtBQUVQLGFBTE0sTUFNSFAsTUFBTXJGLEdBQU4sSUFBYWtGLE9BQWI7O0FBRUosbUJBQU8sSUFBUDtBQUNILFNBekJFOzs7QUEyQkg7Ozs7Ozs7QUFPQXZGLGFBbENHLGlCQWtDR0ssR0FsQ0gsRUFrQ1EzQixRQWxDUixFQWtDa0I7QUFDakIsbUJBQU8sS0FBS3lILE9BQUwsQ0FBYTlGLEdBQWIsRUFBa0IzQixRQUFsQixDQUFQO0FBQ0gsU0FwQ0U7OztBQXNDSDs7Ozs7O0FBTUF5SCxlQTVDRyxtQkE0Q0s5RixHQTVDTCxFQTRDVTNCLFFBNUNWLEVBNENvQjtBQUNuQixnQkFBSSxPQUFPMkIsR0FBUCxLQUFlLFVBQWYsSUFBNkIsQ0FBQzNCLFFBQWxDLEVBQTRDO0FBQ3hDOEcsK0NBQStCQyxPQUEvQixHQUF5Q3BGLEdBQXpDO0FBQ0gsYUFGRCxNQUdJbUYsK0JBQStCbkYsR0FBL0IsSUFBc0MsT0FBTzNCLFFBQVAsS0FBb0IsVUFBcEIsR0FDaENBLFFBRGdDLEdBRWhDLElBRk47O0FBSUosbUJBQU8sSUFBUDtBQUNILFNBckRFO0FBdURIa0gsV0F2REcsZUF1REN2RixHQXZERCxFQXVETTtBQUNMLG1CQUFPQSxNQUFNcUYsTUFBTXJGLEdBQU4sQ0FBTixHQUFtQixvQkFBS3FGLEtBQUwsQ0FBMUI7QUFDSCxTQXpERTtBQTJESFEsWUEzREcsZ0JBMkRFWCxPQTNERixFQTJEV2EsRUEzRFgsRUEyRGU7QUFDZGxHLG1CQUFPQyxJQUFQLENBQVlvRixPQUFaLEVBQXFCdEQsT0FBckIsQ0FBNkIsVUFBQzVCLEdBQUQsRUFBUztBQUNsQyxvQkFBSStGLEVBQUosRUFBUTtBQUNKLHdCQUFJLENBQUNWLE1BQU1VLEVBQU4sQ0FBTCxFQUNJVixNQUFNVSxFQUFOLElBQVksRUFBWjtBQUNKViwwQkFBTVUsRUFBTixFQUFVL0YsR0FBVixJQUFpQmtGLFFBQVFsRixHQUFSLENBQWpCO0FBQ0gsaUJBSkQsTUFJTztBQUNIcUYsMEJBQU1yRixHQUFOLElBQWFrRixRQUFRbEYsR0FBUixDQUFiO0FBQ0g7QUFDSixhQVJEOztBQVVBLG1CQUFPLElBQVA7QUFDSCxTQXZFRTs7O0FBeUVILFlBQUlxRixLQUFKLEdBQVk7QUFDUixtQkFBT0EsS0FBUDtBQUNILFNBM0VFOztBQTZFSFcsZ0JBN0VHLHNCQTZFUTtBQUNQLG1CQUFPWCxLQUFQO0FBQ0g7QUEvRUUsS0FBUDtBQWlGSCxDQXpHRCxDLENBbENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkE4SWVKLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlJZjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTWdCLGVBQWUsU0FBZkEsWUFBZSxDQUFVZixPQUFWLEVBQW1COztBQUVwQyxRQUFNZ0IsVUFBVTtBQUNaQyxrQkFEWSx3QkFDQyxDQUNaO0FBRlcsS0FBaEI7O0FBS0EsUUFBTUMsZUFBZSxFQUFyQjs7QUFFQXZHLFdBQU9DLElBQVAsQ0FBWW9GLE9BQVosRUFBcUJuRixHQUFyQixDQUF5QixVQUFVc0csU0FBVixFQUFxQkMsS0FBckIsRUFBNEI7QUFDakRKLGdCQUFRRyxTQUFSLElBQXFCbkIsUUFBUW1CLFNBQVIsQ0FBckI7O0FBRUEsWUFBSSxPQUFPbkIsUUFBUW1CLFNBQVIsQ0FBUCxLQUE4QixVQUE5QixJQUE0Q0EsY0FBY0gsUUFBUUMsVUFBUixDQUFtQmhFLElBQWpGLEVBQXVGO0FBQ25GaUUseUJBQWFDLFNBQWIsSUFBMEIsRUFBMUI7QUFDSDtBQUNKLEtBTkQ7O0FBUUEsUUFBTUUsS0FBSyxvQkFBS0gsWUFBTCxDQUFYO0FBQ0E7QUFDQUcsT0FBR0wsT0FBSCxHQUFhLFlBQVk7QUFDckIsZUFBT0UsWUFBUDtBQUNILEtBRkQ7O0FBSUFHLE9BQUc1RyxLQUFILENBQVMsVUFBQzZHLFdBQUQsRUFBYzlFLE1BQWQsRUFBeUI7QUFDOUJ3RSxnQkFBUUMsVUFBUixDQUFtQnhILElBQW5CLENBQXdCdUgsT0FBeEIsRUFBaUNNLFdBQWpDLEVBQThDOUUsTUFBOUM7O0FBRUE3QixlQUFPQyxJQUFQLENBQVlvRyxPQUFaLEVBQXFCbkcsR0FBckIsQ0FBeUIsVUFBVXNHLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCOztBQUVqRCxnQkFBSUUsZ0JBQWdCSCxTQUFoQixJQUE2QixPQUFPSCxRQUFRRyxTQUFSLENBQVAsS0FBOEIsVUFBL0QsRUFBMkU7QUFDdkVILHdCQUFRRyxTQUFSLEVBQW1CMUgsSUFBbkIsQ0FBd0J1SCxPQUF4QixFQUFpQ00sV0FBakMsRUFBOEM5RSxNQUE5QztBQUNIO0FBQ0osU0FMRDtBQU1ILEtBVEQ7O0FBV0EsV0FBTzZFLEVBQVA7QUFDSCxDQW5DRDs7a0JBcUNlTixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRGY7Ozs7Ozs7O0lBRWFRLFUsV0FBQUEsVTtBQUNULDBCQUF5QjtBQUFBOztBQUFBLFlBQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDckIsYUFBS0MsT0FBTCxHQUFlLFNBQWY7QUFDQSxhQUFLRCxNQUFMLEdBQWM7QUFDVnRCLG1CQURVLHNCQUNBO0FBQ053Qix3QkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0g7QUFIUyxTQUFkOztBQU1BaEgsZUFBT0MsSUFBUCxDQUFZNEcsTUFBWixFQUFvQjlFLE9BQXBCLENBQTRCLFVBQUM1QixHQUFELEVBQVM7QUFDakMsa0JBQUs2RCxHQUFMLENBQVM3RCxHQUFULEVBQWMwRyxPQUFPMUcsR0FBUCxDQUFkO0FBQ0gsU0FGRDtBQUdIOzs7OzRCQUVHbUMsSSxFQUFNOUQsUSxFQUFVO0FBQ2hCLGlCQUFLcUksTUFBTCxDQUFZdkUsSUFBWixJQUFvQjlELFFBQXBCO0FBQ0g7Ozs0QkFFRzhELEksRUFBTTtBQUNOLG1CQUFPLEtBQUt1RSxNQUFMLENBQVl2RSxJQUFaLENBQVA7QUFDSDs7OytCQUVNO0FBQ0gsZ0JBQUkyRSxPQUFPLEtBQVg7QUFDQSxnQkFBTWhILE9BQU9ELE9BQU9DLElBQVAsQ0FBWSxLQUFLNEcsTUFBakIsQ0FBYjtBQUNBLGlCQUFLLElBQUlLLElBQUksQ0FBYixFQUFnQkEsSUFBSWpILEtBQUs2QixNQUF6QixFQUFpQ29GLEdBQWpDLEVBQXNDO0FBQ2xDLG9CQUFJakgsS0FBS2lILENBQUwsTUFBWSxLQUFLSixPQUFyQixFQUE4QjtBQUMxQix3QkFBSSxPQUFPN0csS0FBS2lILElBQUksQ0FBVCxDQUFQLEtBQXVCLFdBQTNCLEVBQ0lELE9BQU9oSCxLQUFLaUgsSUFBSSxDQUFULENBQVA7QUFDSix3QkFBSUEsTUFBTWpILEtBQUs2QixNQUFMLEdBQWMsQ0FBeEIsRUFBMkI7QUFDdkJtRiwrQkFBT2hILEtBQUssQ0FBTCxDQUFQO0FBQ0g7QUFDRDtBQUNIO0FBQ0o7QUFDRCxpQkFBS2tILE1BQUwsQ0FBWUYsSUFBWjtBQUNIOzs7aUNBRXVCO0FBQUEsZ0JBQWpCOUcsR0FBaUIsdUVBQVgsU0FBVzs7QUFDcEIsaUJBQUsyRyxPQUFMLEdBQWUzRyxHQUFmO0FBQ0EsZ0JBQU1pSCxLQUFLLEtBQUtQLE1BQUwsQ0FBWSxLQUFLQyxPQUFqQixDQUFYOztBQUVBLGdCQUFJLE9BQU9NLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUMxQkEsbUJBQUd0SSxJQUFILENBQVFzSSxFQUFSO0FBQ0g7QUFDSjs7OzhCQUVLOUUsSSxFQUFNO0FBQ1IsbUJBQU8scUJBQU0sSUFBTixDQUFQO0FBQ0g7Ozs7OztBQUdMLElBQU0rRSxRQUFRLFNBQVJBLEtBQVEsQ0FBVVIsTUFBVixFQUFrQjtBQUM1QixRQUFNekksT0FBTztBQUNUMEksaUJBQVMsU0FEQTtBQUVURCxnQkFBUTtBQUNKdEIsbUJBREksc0JBQ007QUFDTndCLHdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDSDtBQUhHO0FBRkMsS0FBYjs7QUFTQTVJLFNBQUs0RixHQUFMLEdBQVcsVUFBVTFCLElBQVYsRUFBZ0I5RCxRQUFoQixFQUEwQjtBQUNqQ0osYUFBS3lJLE1BQUwsQ0FBWXZFLElBQVosSUFBb0I5RCxRQUFwQjtBQUNILEtBRkQ7O0FBSUFKLFNBQUtzSCxHQUFMLEdBQVcsVUFBVXBELElBQVYsRUFBZ0I7QUFDdkIsZUFBT2xFLEtBQUt5SSxNQUFMLENBQVl2RSxJQUFaLENBQVA7QUFDSCxLQUZEOztBQUlBbEUsU0FBS2tKLElBQUwsR0FBWSxZQUFZO0FBQ3BCLFlBQUlMLE9BQU8sS0FBWDtBQUNBLFlBQU1oSCxPQUFPRCxPQUFPQyxJQUFQLENBQVk3QixLQUFLeUksTUFBakIsQ0FBYjtBQUNBLGFBQUssSUFBSUssSUFBSSxDQUFiLEVBQWdCQSxJQUFJakgsS0FBSzZCLE1BQXpCLEVBQWlDb0YsR0FBakMsRUFBc0M7QUFDbEMsZ0JBQUlqSCxLQUFLaUgsQ0FBTCxNQUFZOUksS0FBSzBJLE9BQXJCLEVBQThCO0FBQzFCLG9CQUFJLE9BQU83RyxLQUFLaUgsSUFBSSxDQUFULENBQVAsS0FBdUIsV0FBM0IsRUFDSUQsT0FBT2hILEtBQUtpSCxJQUFJLENBQVQsQ0FBUDtBQUNKLG9CQUFJQSxNQUFNakgsS0FBSzZCLE1BQUwsR0FBYyxDQUF4QixFQUEyQjtBQUN2Qm1GLDJCQUFPaEgsS0FBSyxDQUFMLENBQVA7QUFDSDtBQUNEO0FBQ0g7QUFDSjtBQUNEN0IsYUFBS21KLElBQUwsQ0FBVU4sSUFBVjtBQUNILEtBZEQ7O0FBZ0JBN0ksU0FBS21KLElBQUwsR0FBWSxVQUFVcEgsR0FBVixFQUFlO0FBQ3ZCL0IsYUFBSzBJLE9BQUwsR0FBZTNHLE9BQU8sU0FBdEI7QUFDQSxZQUFNaUgsS0FBS2hKLEtBQUt5SSxNQUFMLENBQVl6SSxLQUFLMEksT0FBakIsQ0FBWDs7QUFFQSxZQUFJLE9BQU9NLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUMxQkEsZUFBR3RJLElBQUgsQ0FBUXNJLEVBQVI7QUFDSDtBQUNKLEtBUEQ7O0FBU0FoSixTQUFLd0MsS0FBTCxHQUFhLFlBQVk7QUFDckIsZUFBTyxxQkFBTSxJQUFOLENBQVA7QUFDSCxLQUZEOztBQUlBLFFBQUlpRyxVQUFVQSxPQUFPVyxXQUFQLEtBQXVCeEgsTUFBckMsRUFBNkM7QUFDekNBLGVBQU9DLElBQVAsQ0FBWTRHLE1BQVosRUFBb0I5RSxPQUFwQixDQUE0QixVQUFDNUIsR0FBRCxFQUFTO0FBQ2pDL0IsaUJBQUs0RixHQUFMLENBQVM3RCxHQUFULEVBQWMwRyxPQUFPMUcsR0FBUCxDQUFkO0FBQ0gsU0FGRDtBQUdIOztBQUVELFdBQU8vQixJQUFQO0FBQ0gsQ0F0REQ7O2tCQXdEZWlKLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHZjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsSUFBTUksYUFBYSxTQUFiQSxVQUFhLEdBQWdDO0FBQUEsUUFBdEJoRixNQUFzQix1RUFBYixFQUFDaUYsT0FBTyxFQUFSLEVBQWE7O0FBQy9DLFFBQU10SixPQUFPO0FBQ1R1SixtQkFBVyxDQURGO0FBRVRDLGNBQU1uRixPQUFPbUYsSUFBUCxJQUFlLEtBRlo7QUFHVEMsd0JBQWdCLENBSFA7QUFJVEMsbUJBQVcsS0FKRjtBQUtUQyw0QkFBb0IsSUFMWDtBQU1UQyx3QkFBZ0J2RixPQUFPaUYsS0FBUCxJQUFnQixFQU52QjtBQU9UdkksYUFQUyxtQkFPRDtBQUNKZixpQkFBSzZKLElBQUw7QUFDQTdKLGlCQUFLeUosY0FBTCxHQUFzQixDQUF0QjtBQUNBLG1CQUFPekosSUFBUDtBQUNILFNBWFE7QUFZVDhKLFlBWlMsa0JBWUY7QUFDSDlKLGlCQUFLMEosU0FBTCxHQUFpQixJQUFqQjtBQUNBLG1CQUFPMUosSUFBUDtBQUNILFNBZlE7QUFnQlQ2SixZQWhCUyxrQkFnQkY7QUFDSDdKLGlCQUFLMEosU0FBTCxHQUFpQixLQUFqQjtBQUNBLG1CQUFPMUosSUFBUDtBQUNILFNBbkJRO0FBb0JUK0osV0FwQlMsaUJBb0JIO0FBQ0YvSixpQkFBS3lKLGNBQUwsR0FBc0J6SixLQUFLNEosY0FBTCxDQUFvQmxHLE1BQXBCLEdBQTZCLENBQW5EO0FBQ0EsbUJBQU8xRCxJQUFQO0FBQ0gsU0F2QlE7QUF3QlRLLGFBeEJTLGlCQXdCSDJKLEVBeEJHLEVBd0JDNUosUUF4QkQsRUF3Qlc7QUFDaEI2Six1QkFBVyxZQUFNO0FBQUU3Six5QkFBU00sSUFBVCxDQUFjVixJQUFkO0FBQXNCLGFBQXpDLEVBQTJDZ0ssRUFBM0M7QUFDSCxTQTFCUTtBQTJCVEUsWUEzQlMsZ0JBMkJKaEcsSUEzQkksRUEyQkU7QUFDUGxFLGlCQUFLNEosY0FBTCxDQUFvQmpHLE9BQXBCLENBQTRCLFVBQUN3RyxNQUFELEVBQVM5QixLQUFULEVBQW1CO0FBQzNDLG9CQUFJOEIsT0FBT2pHLElBQVAsS0FBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCbEUseUJBQUt5SixjQUFMLEdBQXNCcEIsS0FBdEI7QUFDSDtBQUNKLGFBSkQ7QUFLQSxtQkFBT3JJLElBQVA7QUFDSCxTQWxDUTtBQW1DVG9LLGlCQW5DUyxxQkFtQ0NoSyxRQW5DRCxFQW1DVztBQUNoQkosaUJBQUsySixrQkFBTCxHQUEwQnZKLFFBQTFCO0FBQ0EsbUJBQU9KLElBQVA7QUFDSCxTQXRDUTtBQXVDVGtKLFlBdkNTLGtCQXVDRjtBQUNILGdCQUFJbEosS0FBSzBKLFNBQVQsRUFBb0IsT0FBTzFKLElBQVA7O0FBRXBCLGdCQUFJQSxLQUFLeUosY0FBTCxHQUFzQnpKLEtBQUs0SixjQUFMLENBQW9CbEcsTUFBcEIsR0FBNkIsQ0FBdkQsRUFBMEQ7QUFDdEQxRCxxQkFBS3lKLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxvQkFBSSxDQUFDekosS0FBS3dKLElBQVYsRUFDSSxPQUFPeEosSUFBUDtBQUNQOztBQUVELGdCQUFNcUssd0JBQXdCckssS0FBSzRKLGNBQUwsQ0FBb0I1SixLQUFLeUosY0FBekIsQ0FBOUI7O0FBRUEsZ0JBQUksT0FBT3pKLEtBQUsySixrQkFBWixLQUFtQyxVQUF2QyxFQUNJM0osS0FBSzJKLGtCQUFMLENBQXdCakosSUFBeEIsQ0FBNkJWLElBQTdCLEVBQW1DcUsscUJBQW5DLEVBQTBEckssS0FBS3lKLGNBQS9ELEVBQStFekosS0FBS3VKLFNBQXBGOztBQUVKYyxrQ0FBc0JqSyxRQUF0QixDQUErQk0sSUFBL0IsQ0FBb0NWLElBQXBDLEVBQTBDcUsscUJBQTFDLEVBQWlFckssS0FBS3lKLGNBQXRFLEVBQXNGekosS0FBS3VKLFNBQTNGOztBQUVBdkosaUJBQUt1SixTQUFMO0FBQ0F2SixpQkFBS3lKLGNBQUw7O0FBRUEsbUJBQU96SixJQUFQO0FBQ0g7QUEzRFEsS0FBYjs7QUE4REFBLFNBQUt3QyxLQUFMLEdBQWEsWUFBWTtBQUNyQixlQUFPLHFCQUFNLElBQU4sQ0FBUDtBQUNILEtBRkQ7O0FBSUEsV0FBT3hDLElBQVA7QUFDSCxDQXBFRDs7a0JBc0VlcUosVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RmYsSUFBTWlCLFFBQVEsU0FBUkEsS0FBUSxDQUFVbEssUUFBVixFQUFvQkMsS0FBcEIsRUFBMkJrSyxNQUEzQixFQUFtQ0MsWUFBbkMsRUFBaUQ7QUFDM0QsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixDQUFoQjtBQUNILENBSEQ7O0FBTUFILE1BQU1MLFVBQU4sR0FBbUIsVUFBVTdKLFFBQVYsRUFBb0I0SixFQUFwQixFQUF3QlUsUUFBeEIsRUFBa0M7QUFDakQsUUFBSSxPQUFPdEssUUFBUCxLQUFvQixVQUFwQixJQUFrQyxDQUFDdUssTUFBTVgsRUFBTixDQUFuQyxJQUFnREEsS0FBSyxDQUF6RCxFQUE0RDtBQUN4RFUsbUJBQVcsUUFBT0EsUUFBUCx5Q0FBT0EsUUFBUCxPQUFvQixRQUFwQixHQUErQkEsUUFBL0IsR0FBMEMsRUFBckQ7QUFDQSxlQUFPVCxXQUFXLFlBQVk7QUFDMUI3SixxQkFBU00sSUFBVCxDQUFjZ0ssUUFBZDtBQUNILFNBRk0sRUFFSlYsRUFGSSxDQUFQO0FBR0g7QUFDSixDQVBEO0FBUUFNLE1BQU1NLFdBQU4sR0FBb0IsVUFBVXhLLFFBQVYsRUFBb0I0SixFQUFwQixFQUF3QlUsUUFBeEIsRUFBa0M7QUFDbEQsUUFBSSxPQUFPdEssUUFBUCxLQUFvQixVQUFwQixJQUFrQyxDQUFDdUssTUFBTVgsRUFBTixDQUFuQyxJQUFnREEsS0FBSyxDQUF6RCxFQUE0RDtBQUN4RFUsbUJBQVcsUUFBT0EsUUFBUCx5Q0FBT0EsUUFBUCxPQUFvQixRQUFwQixHQUErQkEsUUFBL0IsR0FBMEMsRUFBckQ7QUFDQSxlQUFPRSxZQUFZLFlBQVk7QUFDM0J4SyxxQkFBU00sSUFBVCxDQUFjZ0ssUUFBZDtBQUNILFNBRk0sRUFFSlYsRUFGSSxDQUFQO0FBR0g7QUFDSixDQVBEO0FBUUFNLE1BQU1PLFlBQU4sR0FBcUIsVUFBVXpJLEVBQVYsRUFBYztBQUMvQnlJLGlCQUFhekksRUFBYjtBQUNILENBRkQ7QUFHQWtJLE1BQU1RLGFBQU4sR0FBc0IsVUFBVTFJLEVBQVYsRUFBYztBQUNoQzBJLGtCQUFjMUksRUFBZDtBQUNILENBRkQ7O2tCQUlla0ksSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJmOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTVMsVUFBVTtBQUNaekosd0JBRFk7QUFFWjBDLGtDQUZZO0FBR1pULDZDQUhZO0FBSVp3Qix3REFKWTtBQUtaOEIsZ0NBTFk7QUFNWlQsMENBTlk7QUFPWjZDLDBCQVBZO0FBUVpULGlDQVJZO0FBU1phLG9DQVRZO0FBVVppQiwwQkFWWTtBQVdadEMsd0NBWFk7QUFZWmhCLHdCQVpZO0FBYVpqSDtBQWJZLENBQWhCOztBQWdCQWdMLFFBQVFDLE1BQVIsR0FDSUQsUUFBUUUsSUFBUixHQUNJRCxnQkFGUjs7QUFJQSxJQUFJLDBCQUFKLEVBQWlCO0FBQ2IsK0JBQVlELE9BQVosR0FBc0JBLE9BQXRCO0FBQ0g7O2tCQUVjQSxPOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDUixJQUFNRyw4Q0FBbUIsMkNBQXpCO0FBQ0EsSUFBTUMsc0NBQWUsYUFBckI7QUFDQSxJQUFNQyxvQkFBTSxxREFBWjtBQUNBLElBQU1DLDRCQUFVLHFCQUFoQjtBQUNBLElBQU1DLGdDQUFZLEdBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xQOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQVVySyxPQUFWLEVBQW1CZ0QsSUFBbkIsRUFBeUJxQyxLQUF6QixFQUFnQztBQUN6QyxRQUFNaUYsZUFBZSxzQkFBT3RLLE9BQVAsQ0FBckI7QUFDQSxRQUFJc0ssaUJBQWlCLFFBQXJCLEVBQStCO0FBQzNCdEssa0JBQVUscUJBQU1BLE9BQU4sQ0FBVjtBQUNIOztBQUVELFFBQUksc0JBQU9BLE9BQVAsS0FBbUJ1SyxVQUFVL0gsTUFBVixLQUFxQixDQUE1QyxFQUErQztBQUMzQyxZQUFJLHNCQUFPUSxJQUFQLEVBQWEsUUFBYixDQUFKLEVBQTRCO0FBQ3hCLGlCQUFLLElBQUluQyxHQUFULElBQWdCbUMsSUFBaEI7QUFDSXFILHFCQUFLckssT0FBTCxFQUFjYSxHQUFkLEVBQW1CbUMsS0FBS25DLEdBQUwsQ0FBbkI7QUFESjtBQUVILFNBSEQsTUFJSSxPQUFPYixRQUFRd0ssWUFBUixDQUFxQnhILElBQXJCLENBQVA7QUFDUCxLQU5ELE1BT0ssSUFBSSxzQkFBT2hELE9BQVAsS0FBbUJ1SyxVQUFVL0gsTUFBVixLQUFxQixDQUE1QyxFQUErQztBQUNoRCxZQUFJNkMsVUFBVSxLQUFkLEVBQXFCckYsUUFBUXlLLGVBQVIsQ0FBd0J6SCxJQUF4QixFQUFyQixLQUNLaEQsUUFBUWlCLFlBQVIsQ0FBcUIrQixJQUFyQixFQUEyQnFDLEtBQTNCO0FBQ1I7QUFDSixDQWpCRDs7a0JBbUJlZ0YsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmY7Ozs7OztBQU1BLFNBQVMvSSxLQUFULENBQWVvSixJQUFmLEVBQXFCOUQsRUFBckIsRUFDQTtBQUNJLFFBQUk4RCxTQUFTLElBQVQsSUFBaUIsUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFyQyxFQUErQyxPQUFPQSxJQUFQO0FBQy9DLFFBQUlBLEtBQUt4QyxXQUFMLEtBQXFCeEgsTUFBckIsSUFBK0JnSyxLQUFLeEMsV0FBTCxLQUFxQjlELEtBQXhELEVBQStELE9BQU9zRyxJQUFQO0FBQy9ELFFBQUlBLEtBQUt4QyxXQUFMLEtBQXFCeUMsSUFBckIsSUFBNkJELEtBQUt4QyxXQUFMLEtBQXFCMEMsTUFBbEQsSUFBNERGLEtBQUt4QyxXQUFMLEtBQXFCMkMsUUFBakYsSUFDQUgsS0FBS3hDLFdBQUwsS0FBcUI0QyxNQURyQixJQUMrQkosS0FBS3hDLFdBQUwsS0FBcUI2QyxNQURwRCxJQUM4REwsS0FBS3hDLFdBQUwsS0FBcUI4QyxPQUR2RixFQUNnRztBQUM1RixlQUFPLElBQUlOLEtBQUt4QyxXQUFULENBQXFCd0MsSUFBckIsQ0FBUDtBQUNIOztBQUVEOUQsU0FBS0EsTUFBTSxJQUFJOEQsS0FBS3hDLFdBQVQsRUFBWDs7QUFFQSxTQUFLbEYsSUFBTCxJQUFhMEgsSUFBYixFQUNBO0FBQ0k5RCxXQUFHNUQsSUFBSCxJQUFXLE9BQU80RCxHQUFHNUQsSUFBSCxDQUFQLElBQW1CLFdBQW5CLEdBQWlDMUIsTUFBTW9KLEtBQUsxSCxJQUFMLENBQU4sRUFBa0IsSUFBbEIsQ0FBakMsR0FBMkQ0RCxHQUFHNUQsSUFBSCxDQUF0RTtBQUNIOztBQUVELFdBQU80RCxFQUFQO0FBQ0g7O2tCQUVjdEYsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTTJKLE9BQU8sU0FBUEEsSUFBTyxDQUFVQyxHQUFWLEVBQWVDLFFBQWYsRUFDYjtBQUNJLFFBQUksc0JBQU9ELEdBQVAsQ0FBSixFQUNJLE9BQU9BLElBQUloSSxTQUFKLENBQWMsSUFBZCxDQUFQOztBQUVKLFFBQUlrQixNQUFNQyxPQUFOLENBQWM2RyxHQUFkLENBQUosRUFDSSxPQUFPQSxJQUFJRSxLQUFKLEVBQVA7O0FBRUosUUFBSSxPQUFPRixHQUFQLEtBQWUsVUFBbkIsRUFDSSxPQUFPQSxJQUFJeEksSUFBSixDQUFTeUksWUFBWSxFQUFyQixDQUFQOztBQUVKLFFBQUksc0JBQU9ELEdBQVAsRUFBWSxRQUFaLENBQUosRUFBMkI7QUFDdkI7QUFDQXpELGdCQUFRQyxHQUFSLENBQVl3RCxHQUFaLEVBQWlCQyxRQUFqQjtBQUNBLFlBQUkxRSxTQUFTLEVBQWI7QUFDQS9GLGVBQU9DLElBQVAsQ0FBWXVLLEdBQVosRUFBaUJ6SSxPQUFqQixDQUF5QixVQUFDNUIsR0FBRCxFQUFTO0FBQzlCLGdCQUFJd0UsUUFBUTZGLElBQUlySyxHQUFKLENBQVo7QUFDQTRGLG1CQUFPNUYsR0FBUCxJQUFjb0ssS0FBSzVGLEtBQUwsRUFBWSxPQUFPQSxLQUFQLEtBQWlCLFVBQWpCLEdBQThCNkYsR0FBOUIsR0FBb0MsRUFBaEQsQ0FBZDtBQUNILFNBSEQ7QUFJQSxlQUFPekUsTUFBUDtBQUNIOztBQUVELFdBQU95RSxHQUFQO0FBQ0gsQ0F2QkQ7O2tCQXlCZUQsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmY7Ozs7Ozs7Ozs7O0FBV0E7Ozs7OztBQU1BLElBQU1JLGNBQWMsU0FBZEEsV0FBYyxDQUFVQyxHQUFWLEVBQWU1RSxJQUFmLEVBQXFCO0FBQ3JDLFFBQUk2RSxNQUFNLEVBQVY7O0FBRUEsUUFBSSxPQUFPN0UsSUFBUCxLQUFnQixRQUFoQixJQUE0QixPQUFPQSxJQUFQLEtBQWdCLFFBQWhELEVBQTBEO0FBQ3RELGVBQU8sSUFBSXRDLEtBQUosQ0FBVWtILEdBQVYsRUFBZTVFLElBQWYsQ0FBb0JBLElBQXBCLENBQVA7QUFDSDs7QUFFRDZFLFVBQU0sSUFBSW5ILEtBQUosQ0FBVWtILEdBQVYsRUFBZTVFLElBQWYsQ0FBb0IsQ0FBcEIsQ0FBTjtBQUNBNkUsUUFBSTlJLE9BQUosQ0FBWSxVQUFDNEMsS0FBRCxFQUFRdUMsQ0FBUixFQUFjO0FBQ3RCLFlBQUksT0FBT2xCLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDNUIsZ0JBQU04RSxJQUFJOUUsS0FBS2xILElBQUwsQ0FBVWtILElBQVYsRUFBZ0JrQixDQUFoQixFQUFtQkEsQ0FBbkIsQ0FBVjtBQUNBMkQsZ0JBQUkzRCxDQUFKLElBQVMsT0FBTzRELENBQVAsS0FBYSxTQUFiLElBQTBCQSxDQUExQixHQUE4QkEsQ0FBOUIsR0FBa0NuRyxLQUEzQztBQUNIO0FBQ0QsWUFBSWpCLE1BQU1DLE9BQU4sQ0FBY3FDLElBQWQsQ0FBSixFQUF5QjZFLElBQUkzRCxDQUFKLElBQVNsQixLQUFLa0IsQ0FBTCxNQUFZNkQsU0FBWixHQUF3QkEsU0FBeEIsR0FBb0MvRSxLQUFLa0IsQ0FBTCxDQUE3QyxDQUF6QixLQUNLMkQsSUFBSTNELENBQUosSUFBU2xCLElBQVQ7QUFDUixLQVBEO0FBUUEsV0FBTzZFLEdBQVA7QUFDSCxDQWpCRDs7a0JBb0JlRixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2Y7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTUssZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxHQUFWLEVBQWVDLEtBQWYsRUFBc0JDLEtBQXRCLEVBQTZCO0FBQy9DLFFBQ0k3TCxVQUFVNkMsU0FBUzZJLGFBQVQsQ0FBdUJDLEdBQXZCLENBRGQ7QUFBQSxRQUVJRyxVQUFVLFNBQVZBLE9BQVUsQ0FBVVosR0FBVixFQUFlO0FBQ3JCLGVBQU8sc0JBQU9BLEdBQVAsRUFBWSxRQUFaLEtBQXlCLENBQUMsc0JBQU9BLEdBQVAsQ0FBakM7QUFDSCxLQUpMO0FBQUEsUUFLSWEsY0FBYyxTQUFkQSxXQUFjLENBQVViLEdBQVYsRUFBZTtBQUN6QmxMLGdCQUFRZ00sa0JBQVIsQ0FBMkIsV0FBM0IsRUFBd0NkLEdBQXhDO0FBQ0gsS0FQTDtBQUFBLFFBUUllLGVBQWUsU0FBZkEsWUFBZSxDQUFVZixHQUFWLEVBQWU7QUFDMUJsTCxnQkFBUUssV0FBUixDQUFvQjZLLEdBQXBCO0FBQ0gsS0FWTDtBQUFBLFFBV0lnQixTQUFTLFNBQVRBLE1BQVMsQ0FBVWhCLEdBQVYsRUFBZTtBQUNwQixZQUFNaEgsT0FBTyxzQkFBT2dILEdBQVAsQ0FBYjtBQUNBLFlBQUloSCxTQUFTLFFBQWIsRUFDSTZILFlBQVliLEdBQVosRUFESixLQUVLLElBQUloSCxTQUFTLFFBQVQsSUFBcUIsc0JBQU9nSCxHQUFQLENBQXpCLEVBQ0RlLGFBQWFmLEdBQWIsRUFEQyxLQUVBLElBQUloSCxTQUFTLE9BQWIsRUFDRCxLQUFLLElBQUkwRCxJQUFJLENBQWIsRUFBZ0JBLElBQUlzRCxJQUFJMUksTUFBeEIsRUFBZ0NvRixHQUFoQztBQUFxQ3NFLG1CQUFPaEIsSUFBSXRELENBQUosQ0FBUDtBQUFyQztBQUNQLEtBbkJMOztBQXFCQSxRQUFJMkMsVUFBVS9ILE1BQVYsS0FBcUIsQ0FBckIsSUFBMEIsQ0FBQ3NKLFFBQVFGLEtBQVIsQ0FBL0IsRUFBK0M7QUFDM0NDLGdCQUFRRCxLQUFSO0FBQ0FBLGdCQUFRLEtBQVI7QUFDSDs7QUFFRCxRQUFJQSxLQUFKLEVBQ0ksS0FBSyxJQUFJTyxDQUFULElBQWNQLEtBQWQ7QUFDSTVMLGdCQUFRaUIsWUFBUixDQUFxQmtMLENBQXJCLEVBQXdCUCxNQUFNTyxDQUFOLENBQXhCO0FBREosS0FHSixJQUFJTixLQUFKLEVBQ0lLLE9BQU9MLEtBQVA7O0FBRUosV0FBTzdMLE9BQVA7QUFDSCxDQW5DRDs7a0JBcUNlMEwsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTVUsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFVaEgsTUFBVixFQUFrQjtBQUNyQyxRQUFNaUgsV0FBV3hKLFNBQVN5SixzQkFBVCxFQUFqQjs7QUFFQSxRQUFJLHNCQUFPbEgsTUFBUCxDQUFKLEVBQ0lpSCxTQUFTaE0sV0FBVCxDQUFxQitFLE1BQXJCOztBQUVKLFFBQUksc0JBQU9BLE1BQVAsRUFBZSxRQUFmLENBQUosRUFDSWlILFNBQVNoTSxXQUFULENBQXFCLHdCQUFTK0UsTUFBVCxDQUFyQjs7QUFFSixXQUFPaUgsUUFBUDtBQUNILENBVkQ7O2tCQVllRCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNRyxNQUFNLFNBQU5BLEdBQU0sQ0FBVUMsUUFBVixFQUFvQmxLLFVBQXBCLEVBQWdDO0FBQ3hDLFFBQUksQ0FBQ2tLLFFBQUQsSUFBYSxDQUFDbEssVUFBbEIsRUFBOEI7QUFDOUIsUUFBSWlJLFVBQVUvSCxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLFlBQU04RCxPQUFPLEVBQWI7QUFDQUEsYUFBS2hFLFVBQUwsSUFBbUJpSSxVQUFVLENBQVYsQ0FBbkI7QUFDQSxlQUFPZ0MsSUFBSUMsUUFBSixFQUFjbEcsSUFBZCxDQUFQO0FBQ0g7O0FBRUQsUUFBSXNCLFVBQUo7QUFBQSxRQUFPdUUsVUFBUDtBQUFBLFFBQVVNLFdBQVcsSUFBckI7QUFBQSxRQUNJQyxlQUFlLHNCQUFPRixRQUFQLENBRG5CO0FBQUEsUUFFSUcsaUJBQWlCLHNCQUFPckssVUFBUCxDQUZyQjtBQUFBLFFBR0lzSyxRQUFRLFNBQVJBLEtBQVEsQ0FBVUMsR0FBVixFQUFlO0FBQ25CLFlBQUlqRixVQUFKO0FBQUEsWUFBT2tGLEtBQUtELElBQUlFLEtBQUosQ0FBVSxHQUFWLENBQVo7QUFBQSxZQUE0QkMsV0FBNUI7QUFBQSxZQUFnQ0MsV0FBaEM7QUFBQSxZQUFvQ0MsV0FBcEM7QUFBQSxZQUF3Q0MsSUFBSSxFQUE1QztBQUNBLGFBQUt2RixJQUFJLENBQVQsRUFBWUEsSUFBSWtGLEdBQUd0SyxNQUFuQixFQUEyQm9GLEdBQTNCLEVBQWdDO0FBQzVCb0YsaUJBQUtGLEdBQUdsRixDQUFILEVBQU1tRixLQUFOLENBQVksR0FBWixDQUFMO0FBQ0FFLGlCQUFLRCxHQUFHLENBQUgsRUFBTUksSUFBTixFQUFMO0FBQ0FGLGlCQUFLRCxHQUFHSSxPQUFILENBQVcsR0FBWCxDQUFMO0FBQ0EsZ0JBQUlILE9BQU8sQ0FBQyxDQUFaLEVBQ0lELEtBQUtBLEdBQUczSixTQUFILENBQWEsQ0FBYixFQUFnQjRKLEVBQWhCLElBQXNCRCxHQUFHQyxLQUFLLENBQVIsRUFBVzNKLFdBQVgsRUFBdEIsR0FBaUQwSixHQUFHM0osU0FBSCxDQUFhNEosS0FBSyxDQUFsQixDQUF0RDtBQUNKLGdCQUFJRixHQUFHeEssTUFBSCxLQUFjLENBQWxCLEVBQ0kySyxFQUFFRixFQUFGLElBQVFELEdBQUcsQ0FBSCxFQUFNSSxJQUFOLEVBQVI7QUFDUDtBQUNELGVBQU9ELENBQVA7QUFDSCxLQWZMOztBQWtCQSxZQUFRVCxZQUFSO0FBQ0ksYUFBSyxRQUFMO0FBQ0lELHVCQUFXLHdCQUFTRCxRQUFULENBQVg7QUFDQTs7QUFFSixhQUFLLFFBQUw7QUFDSSxnQkFBSSxzQkFBT0EsUUFBUCxDQUFKLEVBQ0lDLFdBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0o7O0FBRUosYUFBSyxPQUFMO0FBQ0lDLHVCQUFXRCxRQUFYO0FBQ0E7QUFaUjs7QUFlQSxRQUFJQyxRQUFKLEVBQWM7O0FBRVYsWUFBSUUsbUJBQW1CLFFBQXZCLEVBQ0lySyxhQUFhc0ssTUFBTXRLLFVBQU4sQ0FBYjs7QUFFSixhQUFLc0YsQ0FBTCxJQUFVNkUsUUFBVjtBQUNJLGlCQUFLTixDQUFMLElBQVU3SixVQUFWO0FBQ0ltSyx5QkFBUzdFLENBQVQsRUFBWXRDLEtBQVosQ0FBa0I2RyxDQUFsQixJQUF1QjdKLFdBQVc2SixDQUFYLENBQXZCO0FBREo7QUFESjtBQUdIOztBQUVELFdBQU9NLFFBQVA7QUFDSCxDQXBERDs7a0JBc0RlRixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRGYsSUFBTWUsaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFVQyxLQUFWLEVBQWlCO0FBQ3BDLFFBQU05RyxTQUFTLEVBQWY7QUFDQSxRQUFNK0csUUFBUSxDQUFDRCxNQUFNLENBQU4sTUFBYSxHQUFiLEdBQW1CQSxNQUFNRSxNQUFOLENBQWEsQ0FBYixDQUFuQixHQUFxQ0YsS0FBdEMsRUFBNkNSLEtBQTdDLENBQW1ELEdBQW5ELENBQWQ7QUFDQVMsVUFBTS9LLE9BQU4sQ0FBYyxVQUFDaUwsSUFBRCxFQUFPOUYsQ0FBUCxFQUFhO0FBQ3ZCLFlBQUkrRixPQUFPSCxNQUFNNUYsQ0FBTixFQUFTbUYsS0FBVCxDQUFlLEdBQWYsQ0FBWDtBQUNBdEcsZUFBT21ILG1CQUFtQkQsS0FBSyxDQUFMLENBQW5CLENBQVAsSUFBc0NDLG1CQUFtQkQsS0FBSyxDQUFMLEtBQVcsRUFBOUIsQ0FBdEM7QUFDSCxLQUhEO0FBSUEsV0FBT2xILE1BQVA7QUFDSCxDQVJEOztrQkFVZTZHLGM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmLElBQU1PLFVBQVUsU0FBVkEsT0FBVSxDQUFVeEksS0FBVixFQUFpQjtBQUM3QixXQUFPQSxVQUFVb0csU0FBakI7QUFDSCxDQUZEOztrQkFJZW9DLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFVQyxLQUFWLEVBQWlCMUksS0FBakIsRUFBd0I7QUFDdEMsV0FBTzBJLFNBQVNBLE1BQU0xSSxLQUFOLE1BQWlCb0csU0FBakM7QUFDSCxDQUZEOztrQkFJZXFDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7QUFHQSxJQUFNRSxZQUFZLFNBQVpBLFNBQVksQ0FBVTlPLFFBQVYsRUFBb0I7QUFDbEMsUUFBTStPLE1BQU0sNEJBQVo7QUFDQSxRQUFJQSxJQUFJQyxhQUFKLENBQWtCLE1BQWxCLENBQUosRUFDSWhQLFNBQVNNLElBQVQsR0FESixLQUdJeU8sSUFBSXhOLGdCQUFKLENBQXFCLGtCQUFyQixFQUF5QyxZQUFZO0FBQ2pEdkIsaUJBQVNNLElBQVQ7QUFDSCxLQUZELEVBRUcsS0FGSDtBQUdQLENBUkQ7O2tCQVVld08sUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQUFNbkosT0FBTyxTQUFQQSxJQUFPLENBQVU5QixJQUFWLEVBQWdCN0QsUUFBaEIsRUFBeUM7QUFBQSxRQUFmaU0sUUFBZSx1RUFBSixFQUFJOztBQUNsRCxRQUFJakgsT0FBTyxzQkFBT25CLElBQVAsQ0FBWDs7QUFFQSxZQUFRbUIsSUFBUjtBQUNJLGFBQUssT0FBTDtBQUNJLGdCQUFJLE9BQU9oRixRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2hDNkQscUJBQUtOLE9BQUwsQ0FBYSxVQUFDbUYsQ0FBRCxFQUFJdUcsQ0FBSixFQUFPQyxDQUFQO0FBQUEsMkJBQWFsUCxTQUFTTSxJQUFULENBQWMyTCxRQUFkLEVBQXdCdkQsQ0FBeEIsRUFBMkJ1RyxDQUEzQixFQUE4QkMsQ0FBOUIsQ0FBYjtBQUFBLGlCQUFiO0FBQ0g7QUFDRDtBQUNKLGFBQUssUUFBTDtBQUNJLGdCQUFJLHNCQUFPckwsSUFBUCxDQUFKLEVBQWtCO0FBQ2Qsb0JBQUlBLGdCQUFnQnNMLFFBQXBCLEVBQ0l0TCxPQUFPOEIsS0FBS1QsTUFBTXNHLElBQU4sQ0FBVzNILElBQVgsQ0FBTCxFQUF1QjdELFFBQXZCLEVBQWlDaU0sUUFBakMsQ0FBUCxDQURKLEtBR0lwSSxPQUFPOEIsS0FBSyxDQUFDOUIsSUFBRCxDQUFMLEVBQWE3RCxRQUFiLEVBQXVCaU0sUUFBdkIsQ0FBUDtBQUNQLGFBTEQsTUFNSXpLLE9BQU9DLElBQVAsQ0FBWW9DLElBQVosRUFBa0JOLE9BQWxCLENBQTBCLFVBQUM1QixHQUFEO0FBQUEsdUJBQVMzQixTQUFTTSxJQUFULENBQWMyTCxRQUFkLEVBQXdCdEssR0FBeEIsRUFBNkJrQyxLQUFLbEMsR0FBTCxDQUE3QixFQUF3Q2tDLElBQXhDLENBQVQ7QUFBQSxhQUExQjtBQUNKO0FBQ0osYUFBSyxRQUFMO0FBQ0lBLG1CQUFPOEIsS0FBSzlCLEtBQUtnSyxLQUFMLENBQVcsRUFBWCxDQUFMLEVBQXFCN04sUUFBckIsRUFBK0JpTSxRQUEvQixDQUFQO0FBQ0E7QUFDSixhQUFLLFFBQUw7QUFDSSxnQkFBTUksTUFBTyxJQUFJbkgsS0FBSixDQUFVckIsSUFBVixDQUFELENBQWtCMkQsSUFBbEIsQ0FBdUIsQ0FBdkIsQ0FBWjtBQUNBM0QsbUJBQU84QixLQUFLMEcsR0FBTCxFQUFVck0sUUFBVixFQUFvQmlNLFFBQXBCLENBQVA7QUFDQTtBQXJCUjs7QUF3QkEsV0FBT3BJLElBQVA7QUFDSCxDQTVCRDs7QUE4QkE4QixLQUFLMUUsTUFBTCxHQUFjLFVBQVVxTSxRQUFWLEVBQW9COEIsTUFBcEIsRUFBd0M7QUFBQSxRQUFaQyxLQUFZLHVFQUFKLEVBQUk7O0FBQ2xELFFBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxJQUFEO0FBQUEsZUFBVUEsUUFBUUEsS0FBSzNOLFVBQWIsR0FBMEIyTixLQUFLM04sVUFBL0IsR0FBNEMsS0FBdEQ7QUFBQSxLQUFsQjtBQUNBLFFBQUlkLFVBQVUsc0JBQU93TSxRQUFQLElBQW1CQSxRQUFuQixHQUE4QixxQkFBTUEsUUFBTixDQUE1QztBQUNBLFdBQU8rQixRQUFRLENBQVIsSUFBYXZPLE9BQXBCLEVBQTZCO0FBQ3pCdU87QUFDQSxZQUFJdk8sUUFBUWMsVUFBUixJQUFzQmQsUUFBUWMsVUFBUixDQUFtQm9OLGFBQW5CLENBQWlDSSxNQUFqQyxDQUExQixFQUFvRTtBQUNoRSxtQkFBT3RPLE9BQVA7QUFDSDtBQUNEQSxrQkFBVXdPLFVBQVV4TyxPQUFWLENBQVY7QUFDSDtBQUNKLENBVkQ7O0FBWUE2RSxLQUFLeUosTUFBTCxHQUFjLFVBQVU5QixRQUFWLEVBQW9COEIsTUFBcEIsRUFBNEJwUCxRQUE1QixFQUFrRDtBQUFBLFFBQVpxUCxLQUFZLHVFQUFKLEVBQUk7O0FBQzVELFFBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxJQUFEO0FBQUEsZUFBVUEsUUFBUUEsS0FBSzNOLFVBQWIsR0FBMEIyTixLQUFLM04sVUFBL0IsR0FBNEMsS0FBdEQ7QUFBQSxLQUFsQjtBQUNBLFFBQUlkLFVBQVUsc0JBQU93TSxRQUFQLElBQW1CQSxRQUFuQixHQUE4QixxQkFBTUEsUUFBTixDQUE1QztBQUNBLFdBQU8rQixRQUFRLENBQVIsSUFBYXZPLE9BQXBCLEVBQTZCO0FBQ3pCdU87QUFDQSxZQUFJdk8sUUFBUWMsVUFBUixJQUFzQmQsUUFBUWMsVUFBUixDQUFtQm9OLGFBQW5CLENBQWlDSSxNQUFqQyxDQUExQixFQUFvRTtBQUNoRXBQLHFCQUFTYyxPQUFUO0FBQ0EsbUJBQU9BLE9BQVA7QUFDSDtBQUNEQSxrQkFBVXdPLFVBQVV4TyxPQUFWLENBQVY7QUFDSDtBQUNELFdBQU9BLE9BQVA7QUFDSCxDQVpEOztrQkFjZTZFLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFZixJQUFNNkosaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFVQyxNQUFWLEVBQWtCO0FBQ3JDLFFBQUlsSSxTQUFTLEVBQWI7QUFDQS9GLFdBQU9DLElBQVAsQ0FBWWdPLE1BQVosRUFBb0JsTSxPQUFwQixDQUE0QixVQUFDNUIsR0FBRCxFQUFTO0FBQ2pDNEYsa0JBQVUsQ0FBRUEsT0FBT2pFLE1BQVIsR0FBa0IsR0FBbEIsR0FBd0IsR0FBekIsSUFBZ0MzQixHQUFoQyxHQUFzQyxHQUF0QyxHQUE0QytOLG1CQUFtQkQsT0FBTzlOLEdBQVAsQ0FBbkIsQ0FBdEQ7QUFDSCxLQUZEOztBQUlBLFdBQU80RixNQUFQO0FBQ0gsQ0FQRDs7a0JBU2VpSSxjOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JSLElBQU1HLDBCQUFTLFNBQVRBLE1BQVMsQ0FBVUMsV0FBVixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDakQsU0FBSyxJQUFJQyxLQUFULElBQWtCRCxNQUFsQjtBQUNJLFlBQUlBLE9BQU9wTSxjQUFQLENBQXNCcU0sS0FBdEIsQ0FBSixFQUNJRixZQUFZRSxLQUFaLElBQXFCRCxPQUFPQyxLQUFQLENBQXJCO0FBRlIsS0FJQSxTQUFTQyxFQUFULEdBQWM7QUFDVixhQUFLL0csV0FBTCxHQUFtQjRHLFdBQW5CO0FBQ0g7O0FBRURHLE9BQUdDLFNBQUgsR0FBZUgsT0FBT0csU0FBdEI7QUFDQUosZ0JBQVlJLFNBQVosR0FBd0IsSUFBSUQsRUFBSixFQUF4QjtBQUNILENBWE07O0FBYUEsSUFBTUUsNENBQWtCLFNBQWxCQSxlQUFrQixDQUFVTCxXQUFWLEVBQXVCQyxNQUF2QixFQUErQjtBQUMxRCxRQUFJSyxpQkFBSjtBQUNBLFNBQUtBLFFBQUwsSUFBaUJMLE1BQWpCLEVBQXlCO0FBQ3JCLFlBQUlBLE9BQU9LLFFBQVAsS0FBb0JMLE9BQU9LLFFBQVAsRUFBaUJsSCxXQUFyQyxJQUFvRDZHLE9BQU9LLFFBQVAsRUFBaUJsSCxXQUFqQixLQUFpQ3hILE1BQXpGLEVBQWlHO0FBQzdGb08sd0JBQVlNLFFBQVosSUFBd0JOLFlBQVlNLFFBQVosS0FBeUIsRUFBakQ7QUFDQUQsNEJBQWdCTCxZQUFZTSxRQUFaLENBQWhCLEVBQXVDTCxPQUFPSyxRQUFQLENBQXZDO0FBQ0gsU0FIRCxNQUlJTixZQUFZTSxRQUFaLElBQXdCTCxPQUFPSyxRQUFQLENBQXhCO0FBQ1A7QUFDRCxXQUFPTixXQUFQO0FBQ0gsQ0FWTTs7a0JBWVFELE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCZjs7Ozs7O0FBR0EsSUFBTVEsYUFBYSxTQUFiQSxVQUFhLENBQVU5TSxNQUFWLEVBQWtCOEgsSUFBbEIsRUFBd0JpRixTQUF4QixFQUFtQztBQUNsRCxRQUFNQyxNQUFNLDJCQUFZaE4sTUFBWixFQUFvQjhILElBQXBCLEVBQTBCaUYsU0FBMUIsQ0FBWjtBQUNBLFdBQU9DLElBQUkvTSxNQUFKLEdBQWErTSxJQUFJLENBQUosQ0FBYixHQUFzQixLQUE3QjtBQUNILENBSEQ7O2tCQUtlRixVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mLElBQU1HLGNBQWMsU0FBZEEsV0FBYyxDQUFVek0sSUFBVixFQUFnQnNILElBQWhCLEVBQXNCaUYsU0FBdEIsRUFBaUM7QUFDakQsUUFBSTFILFVBQUo7QUFBQSxRQUFPMkgsTUFBTSxFQUFiO0FBQ0EsUUFBSXhNLFFBQVEsUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUE1QixFQUNJQSxPQUFPckMsT0FBTzZCLE1BQVAsQ0FBY1EsSUFBZCxDQUFQOztBQUVKLFFBQUlxQixNQUFNQyxPQUFOLENBQWN0QixJQUFkLENBQUosRUFDSSxLQUFLNkUsSUFBSSxDQUFULEVBQVlBLElBQUk3RSxLQUFLUCxNQUFyQixFQUE2Qm9GLEdBQTdCO0FBQ0ksWUFBSTdFLEtBQUs2RSxDQUFMLEtBQVc3RSxLQUFLNkUsQ0FBTCxFQUFReUMsSUFBUixNQUFrQm9CLFNBQTdCLElBQTBDMUksS0FBSzZFLENBQUwsRUFBUXlDLElBQVIsTUFBa0JpRixTQUFoRSxFQUNJQyxJQUFJM00sSUFBSixDQUFTRyxLQUFLNkUsQ0FBTCxDQUFUO0FBRlIsS0FJSixPQUFPMkgsR0FBUDtBQUNILENBWEQ7O0FBYU8sSUFBTUUsd0JBQVEsU0FBUkEsS0FBUSxDQUFVbE4sTUFBVixFQUFrQjhILElBQWxCLEVBQXdCaUYsU0FBeEIsRUFBbUM7QUFDcEQsUUFBSUMsTUFBTUMsWUFBWWpOLE1BQVosRUFBb0I4SCxJQUFwQixFQUEwQmlGLFNBQTFCLENBQVY7QUFDQSxXQUFPQyxJQUFJL00sTUFBSixHQUFhK00sR0FBYixHQUFtQixLQUExQjtBQUNILENBSE07O0FBS0EsSUFBTTNMLHNCQUFPLFNBQVBBLElBQU8sQ0FBVXJCLE1BQVYsRUFBa0I4SCxJQUFsQixFQUF3QmlGLFNBQXhCLEVBQW1DO0FBQ25ELFFBQUlDLE1BQU1DLFlBQVlqTixNQUFaLEVBQW9COEgsSUFBcEIsRUFBMEJpRixTQUExQixDQUFWO0FBQ0EsV0FBT0MsSUFBSS9NLE1BQUosR0FBYStNLElBQUksQ0FBSixDQUFiLEdBQXNCLEtBQTdCO0FBQ0gsQ0FITTs7a0JBS1FDLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7O0FBV0EsSUFBTUUsU0FBUyxTQUFUQSxNQUFTLENBQVVDLE1BQVYsRUFBa0I1TSxJQUFsQixFQUF3QjtBQUNuQyxRQUFJNk0sWUFBSjtBQUNBLFFBQUl4TCxNQUFNQyxPQUFOLENBQWN0QixJQUFkLENBQUosRUFDSTZNLE1BQU0sSUFBSWhGLE1BQUosQ0FBVyxVQUFYLENBQU4sQ0FESixLQUVLLElBQUk3SCxRQUFRLFFBQU9BLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBNUIsRUFDRDZNLE1BQU0sSUFBSWhGLE1BQUosQ0FBVyxVQUFYLENBQU47O0FBRUosV0FBTytFLE9BQU9FLE9BQVAsQ0FBZUQsR0FBZixFQUFvQixVQUFVRSxLQUFWLEVBQWlCQyxNQUFqQixFQUF5QjtBQUNoRCxZQUFJLHVCQUFRaE4sS0FBS2dOLE1BQUwsQ0FBUixLQUF5QixzQkFBT2hOLEtBQUtnTixNQUFMLENBQVAsQ0FBN0IsRUFDSWhOLEtBQUtnTixNQUFMLElBQWUsd0JBQVNoTixLQUFLZ04sTUFBTCxDQUFULENBQWY7O0FBRUosZUFBTyxRQUFPaE4sS0FBS2dOLE1BQUwsQ0FBUCxNQUF3QnRFLFNBQXhCLEdBQW9DMUksS0FBS2dOLE1BQUwsQ0FBcEMsR0FBbURELEtBQTFEO0FBQ0gsS0FMTSxDQUFQO0FBTUgsQ0FiRDs7a0JBZWVKLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CZixJQUFNTSxjQUFjLFNBQWRBLFdBQWMsR0FBWTs7QUFFNUIsUUFBSSxPQUFPbk4sUUFBUCxLQUFvQixXQUF4QixFQUFxQztBQUNqQyxlQUFPQSxRQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0g7QUFDQSxjQUFNLElBQUkrQyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNIO0FBQ0osQ0FSRDs7a0JBVWVvSyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZixJQUFNQyxjQUFjLFNBQWRBLFdBQWMsR0FBWTs7QUFFNUIsUUFBSSxPQUFPQyxRQUFQLEtBQW9CLFdBQXhCLEVBQW9DO0FBQ2hDLGVBQU9BLFFBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxjQUFNLElBQUl0SyxLQUFKLENBQVUsNEJBQVYsQ0FBTjtBQUNIO0FBQ0osQ0FQRDs7a0JBU2VxSyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUZixJQUFNRSxZQUFZLFNBQVpBLFNBQVksR0FBWTs7QUFFMUIsUUFBSSxPQUFPelEsTUFBUCxLQUFrQixXQUF0QixFQUFtQztBQUMvQixlQUFPQSxNQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0g7QUFDQSxjQUFNLElBQUlrRyxLQUFKLENBQVUsMEJBQVYsQ0FBTjtBQUNIO0FBQ0osQ0FSRDs7a0JBVWV1SyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYZjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBVWpOLE1BQVYsRUFBa0JqRSxRQUFsQixFQUE0Qm9LLFlBQTVCLEVBQTBDO0FBQzFELFFBQUl6SSxZQUFKO0FBQ0EsUUFBSXdQLFdBQVcsRUFBZjtBQUNBLFFBQU1DLE1BQU0sSUFBSUMsY0FBSixFQUFaO0FBQ0EsUUFBTUMsVUFBVTtBQUNaM08sY0FBTXNCLE9BQU90QixJQUFQLElBQWUsRUFEVDtBQUVaNE8sZ0JBQVF0TixPQUFPc04sTUFBUCxJQUFpQnROLE9BQU91TixHQUF4QixJQUErQjdOLFNBQVNxTixRQUFULENBQWtCUyxJQUY3QztBQUdaQyxnQkFBUXpOLE9BQU95TixNQUFQLEdBQWdCek4sT0FBT3lOLE1BQVAsQ0FBY3JOLFdBQWQsRUFBaEIsR0FBOEMsS0FIMUM7QUFJWnNOLGlCQUFTMU4sT0FBTzBOLE9BQVAsSUFBa0IsRUFKZjtBQUtaQyxtQkFBVzNOLE9BQU8yTixTQUFQLEtBQXFCckYsU0FBckIsR0FBaUMsSUFBakMsR0FBd0MsQ0FBQyxDQUFDdEksT0FBTzJOLFNBTGhEO0FBTVpDLHFCQUFhNU4sT0FBTzROLFdBQVAsS0FBdUJ0RixTQUF2QixHQUFtQyxLQUFuQyxHQUEyQyxDQUFDLENBQUN0SSxPQUFPNE4sV0FOckQ7QUFPWkMsZUFBTzdOLE9BQU82TixLQUFQLEtBQWlCdkYsU0FBakIsR0FBNkIsSUFBN0IsR0FBb0MsQ0FBQyxDQUFDdEksT0FBTzZOLEtBUHhDO0FBUVpDLGNBQU05TixPQUFPOE4sSUFBUCxJQUFlLElBUlQ7QUFTWkMsa0JBQVUvTixPQUFPOE4sSUFBUCxJQUFlO0FBVGIsS0FBaEI7O0FBWUEsUUFBTUUsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVeEMsTUFBVixFQUFrQjtBQUNwQyxZQUFJbEksU0FBUyxFQUFiO0FBQ0EsYUFBSzVGLEdBQUwsSUFBWThOLE1BQVosRUFBb0I7QUFDaEJsSSxzQkFBVSxNQUFNNUYsR0FBTixHQUFZLEdBQVosSUFBbUIyUCxRQUFRTSxTQUFSLEdBQW9CbEMsbUJBQW1CRCxPQUFPOU4sR0FBUCxDQUFuQixDQUFwQixHQUFzRDhOLE9BQU85TixHQUFQLENBQXpFLENBQVY7QUFDSDtBQUNELGVBQU80RixNQUFQO0FBQ0gsS0FORDs7QUFRQTZDLG1CQUFnQixzQkFBT0EsWUFBUCxFQUFxQixRQUFyQixDQUFELEdBQW1DQSxZQUFuQyxHQUFrRCxFQUFqRTs7QUFFQTtBQUNBLFFBQUlrSCxRQUFRSSxNQUFSLEtBQW1CLEtBQXZCLEVBQThCOztBQUUxQjtBQUNBSixnQkFBUUMsTUFBUixJQUFrQkQsUUFBUUMsTUFBUixDQUFlcEQsT0FBZixDQUF1QixHQUF2QixNQUFnQyxDQUFDLENBQWpDLEdBQXFDLEdBQXJDLEdBQTJDLEVBQTdEO0FBQ0FtRCxnQkFBUUMsTUFBUixJQUFrQlUsY0FBY1gsUUFBUTNPLElBQXRCLENBQWxCO0FBQ0F3TyxtQkFBVyxFQUFYO0FBRUgsS0FQRCxNQU9POztBQUVIO0FBQ0EsWUFBSUcsUUFBUTNPLElBQVIsWUFBd0J1UCxRQUE1QixFQUFzQztBQUNsQ1osb0JBQVEzTyxJQUFSLEdBQWUsRUFBZjtBQUNBMk8sb0JBQVFPLFdBQVIsR0FBc0IsSUFBdEI7QUFDQVYsdUJBQVdHLFFBQVEzTyxJQUFuQjtBQUNIOztBQUVEO0FBQ0EsWUFBSTJPLFFBQVEzTyxJQUFSLFlBQXdCd1AsZUFBNUIsRUFBNkM7QUFDekNoQix1QkFBVyxJQUFJZSxRQUFKLENBQWFaLFFBQVEzTyxJQUFyQixDQUFYO0FBQ0EyTyxvQkFBUU8sV0FBUixHQUFzQixJQUF0QjtBQUNBUCxvQkFBUTNPLElBQVIsR0FBZSxFQUFmO0FBQ0g7O0FBRUQsWUFBSTJPLFFBQVFPLFdBQVosRUFBeUI7QUFDckIsZ0JBQUksRUFBRVYsb0JBQW9CZSxRQUF0QixDQUFKLEVBQXFDZixXQUFXLElBQUllLFFBQUosRUFBWDs7QUFFckMxUSxtQkFBT0MsSUFBUCxDQUFZNlAsUUFBUTNPLElBQXBCLEVBQTBCWSxPQUExQixDQUFrQyxVQUFDNUIsR0FBRCxFQUFTO0FBQ3ZDd1AseUJBQVNqTCxNQUFULENBQWdCdkUsR0FBaEIsRUFBcUIyUCxRQUFRTSxTQUFSLEdBQW9CbEMsbUJBQW1CNEIsUUFBUTNPLElBQVIsQ0FBYWhCLEdBQWIsQ0FBbkIsQ0FBcEIsR0FBNEQyUCxRQUFRM08sSUFBUixDQUFhaEIsR0FBYixDQUFqRjtBQUNILGFBRkQ7QUFJSCxTQVBELE1BT087QUFDSHdQLHVCQUFXYyxjQUFjWCxRQUFRM08sSUFBdEIsQ0FBWDtBQUNIO0FBRUo7O0FBRUQ7QUFDQXlPLFFBQUlnQixJQUFKLENBQVNkLFFBQVFJLE1BQWpCLEVBQXlCSixRQUFRQyxNQUFqQyxFQUF5Q0QsUUFBUVEsS0FBakQsRUFBd0RSLFFBQVFTLElBQWhFLEVBQXNFVCxRQUFRVSxRQUE5RTs7QUFFQVosUUFBSWlCLGdCQUFKLENBQXFCLGtCQUFyQixFQUF5QyxnQkFBekM7O0FBRUEsUUFBSWYsUUFBUUksTUFBUixLQUFtQixLQUFuQixJQUE0QixDQUFDSixRQUFRTyxXQUF6QyxFQUFzRDtBQUNsRFQsWUFBSWlCLGdCQUFKLENBQXFCLGNBQXJCLEVBQXFDLG1DQUFyQztBQUNIOztBQUVELFNBQUsxUSxHQUFMLElBQVkyUCxRQUFRSyxPQUFwQixFQUE2QjtBQUN6QlAsWUFBSWlCLGdCQUFKLENBQXFCMVEsR0FBckIsRUFBMEIyUCxRQUFRSyxPQUFSLENBQWdCaFEsR0FBaEIsQ0FBMUI7QUFDSDs7QUFFRHlQLFFBQUlrQixTQUFKLEdBQWdCLFlBQVk7QUFDeEJsSSxxQkFBYWlILGNBQWIsR0FBOEJELEdBQTlCO0FBQ0EsWUFBSSxPQUFPcFIsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNoQ0EscUJBQVNNLElBQVQsQ0FBYzhKLFlBQWQsRUFBNEJnSCxJQUFJbUIsTUFBaEMsRUFBd0NuQixJQUFJb0IsWUFBNUMsRUFBMERwQixHQUExRDtBQUNIO0FBQ0osS0FMRDs7QUFPQUEsUUFBSXFCLFdBQUosR0FBa0JuQixPQUFsQjtBQUNBRixRQUFJc0IsSUFBSixDQUFTdkIsUUFBVDtBQUNBLFdBQU9DLEdBQVA7QUFDSCxDQXRGRDs7a0JBd0ZlRixXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTXRHLFNBQVM7QUFDWE8sd0JBRFc7QUFFWHFCLDBDQUZXO0FBR1hVLDRDQUhXO0FBSVhHLHNCQUpXO0FBS1h5QixrQ0FMVztBQU1YZ0Msc0NBTlc7QUFPWEcsa0NBUFc7QUFRWDBCLDRCQVJXO0FBU1hDLGdDQVRXO0FBVVhDLHdDQVZXO0FBV1hDLGdDQVhXO0FBWVh6RSwwQkFaVztBQWFYMEUsZ0NBYlc7QUFjWEMsNEJBZFc7QUFlWHhELDRDQWZXO0FBZ0JYcEIsNENBaEJXO0FBaUJYOEMsc0NBakJXO0FBa0JYdkMsOEJBbEJXO0FBbUJYQyxrQ0FuQlc7QUFvQlhlLDRCQXBCVztBQXFCWE0sNENBckJXO0FBc0JYdEssd0JBdEJXO0FBdUJYd0ssb0NBdkJXO0FBd0JYRyxzQ0F4Qlc7QUF5QlhFLDRCQXpCVztBQTBCWHlDLDhCQTFCVztBQTJCWEMsNEJBM0JXO0FBNEJYQyw4QkE1Qlc7QUE2QlhDLDRCQTdCVztBQThCWEMsb0NBOUJXO0FBK0JYQywwQkEvQlc7QUFnQ1hDLDBDQWhDVztBQWlDWHBSLG9CQWpDVztBQWtDWHBCLGdDQWxDVztBQW1DWHlTLDBDQW5DVztBQW9DWEMsNEJBcENXO0FBcUNYQyxvQ0FyQ1c7QUFzQ1hDLGtDQXRDVztBQXVDWEMsc0NBdkNXO0FBd0NYQyxzQ0F4Q1c7QUF5Q1hDLHNEQXpDVztBQTBDWEMsZ0NBMUNXO0FBMkNYQyw0QkEzQ1c7QUE0Q1hDLHdDQTVDVztBQTZDWEMsc0JBN0NXO0FBOENYbkksd0JBOUNXO0FBK0NYM0osMEJBL0NXO0FBZ0RYK1IsZ0NBaERXO0FBaURYQyx3Q0FqRFc7QUFrRFhqSTtBQWxEVyxDQUFmOztrQkFxRGV2QixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU0rSCxTQUFTLFNBQVRBLE1BQVMsQ0FBVXJGLFFBQVYsRUFBb0IzSyxJQUFwQixFQUEwQnVELE1BQTFCLEVBQWtDd0IsRUFBbEMsRUFDZjtBQUNJLFFBQUksc0JBQU80RixRQUFQLEVBQWlCLE9BQWpCLENBQUosRUFBK0I7QUFDM0JBLGlCQUFTL0osT0FBVCxDQUFpQixVQUFDZ00sSUFBRCxFQUFVO0FBQ3ZCb0QsbUJBQU9wRCxJQUFQLEVBQWE1TSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCK0UsRUFBekI7QUFDSCxTQUZEO0FBR0E7QUFDSDs7QUFFRCxRQUFJLHNCQUFPNEYsUUFBUCxFQUFpQixRQUFqQixDQUFKLEVBQ0lBLFdBQVcscUJBQU1BLFFBQU4sRUFBZ0I1RixFQUFoQixDQUFYOztBQUVKLFFBQUksQ0FBQ3hCLE1BQUwsRUFDSW9ILFNBQVMrRyxXQUFULEdBQXVCLEVBQXZCOztBQUVKLFFBQUksc0JBQU8vRyxRQUFQLENBQUosRUFBc0I7QUFDbEIsWUFBSSxzQkFBTzNLLElBQVAsQ0FBSixFQUFrQjtBQUNkMksscUJBQVNuTSxXQUFULENBQXFCd0IsSUFBckI7QUFDSCxTQUZELE1BRU8sSUFBSSxzQkFBT0EsSUFBUCxFQUFhLE9BQWIsQ0FBSixFQUEyQjtBQUM5QixnQkFBSStGLFVBQUo7QUFDQSxpQkFBS0EsSUFBSSxDQUFULEVBQVlBLElBQUkvRixLQUFLVyxNQUFyQixFQUE2Qm9GLEdBQTdCO0FBQ0lpSyx1QkFBT3JGLFFBQVAsRUFBaUIzSyxLQUFLK0YsQ0FBTCxDQUFqQixFQUEwQixJQUExQixFQUFnQ2hCLEVBQWhDO0FBREo7QUFFSCxTQUpNLE1BSUE7QUFDSDRGLHFCQUFTZ0gsU0FBVCxHQUFzQixDQUFDcE8sTUFBRixHQUFZdkQsSUFBWixHQUFtQjJLLFNBQVNnSCxTQUFULEdBQXFCM1IsSUFBN0Q7QUFDSDtBQUNELGVBQU8ySyxRQUFQO0FBQ0g7QUFDRCxXQUFPLElBQVA7QUFDSCxDQTVCRDs7a0JBOEJlcUYsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENmOzs7Ozs7QUFHQSxJQUFNTSxVQUFVLFNBQVZBLE9BQVUsQ0FBVWpILEdBQVYsRUFBZTtBQUMzQixRQUFJLHNCQUFPQSxHQUFQLEVBQVksUUFBWixLQUF5QixzQkFBT0EsR0FBUCxFQUFZLE9BQVosQ0FBN0IsRUFBbUQ7QUFDL0MsYUFBSyxJQUFJckssR0FBVCxJQUFnQnFLLEdBQWhCO0FBQ0ksZ0JBQUlBLElBQUl2SSxjQUFKLENBQW1COUIsR0FBbkIsQ0FBSixFQUNJLE9BQU8sS0FBUDtBQUZSLFNBR0EsT0FBTyxJQUFQO0FBQ0gsS0FMRCxNQUtPLElBQUksc0JBQU9xSyxHQUFQLEVBQVksUUFBWixDQUFKLEVBQTJCO0FBQzlCQSxjQUFNQSxJQUFJMkUsT0FBSixDQUFZLEtBQVosRUFBbUIsRUFBbkIsQ0FBTjtBQUNBLGVBQU8zRSxRQUFRLEVBQVIsSUFBY0EsUUFBUSxHQUE3QjtBQUNILEtBSE0sTUFHQTtBQUNILGVBQVFBLFFBQVEsQ0FBUixJQUFhQSxRQUFRLElBQXJCLElBQTZCQSxRQUFRTyxTQUFyQyxJQUFrRFAsUUFBUSxLQUExRCxJQUFtRXpCLE1BQU15QixHQUFOLENBQTNFO0FBQ0g7QUFDSixDQVpEOztrQkFjZWlILE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJmOztBQUVBLElBQU1tQixlQUFlLFNBQWZBLFlBQWUsQ0FBVWpPLEtBQVYsRUFBaUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBLFFBQU1vTyxNQUFNNVEsU0FBUzZJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBK0gsUUFBSUQsU0FBSixHQUFnQm5PLEtBQWhCO0FBQ0EsV0FBTyxDQUFDLENBQUNvTyxJQUFJQyxpQkFBYjtBQUlILENBWEQ7O2tCQWFlSixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmYsSUFBTWxCLFNBQVMsU0FBVEEsTUFBUyxDQUFVL00sS0FBVixFQUFpQjtBQUM1QixXQUFPQSxVQUFVQSxNQUFNc08sUUFBTixLQUFtQnJULEtBQUtzVCxTQUF4QixJQUNidk8sTUFBTXNPLFFBQU4sS0FBbUJyVCxLQUFLdVQsWUFEWCxJQUVieE8sTUFBTXNPLFFBQU4sS0FBbUJyVCxLQUFLd1Qsc0JBRlgsSUFHYnpPLE1BQU1zTyxRQUFOLEtBQW1CclQsS0FBS3lULGFBSHJCLENBQVA7QUFJSCxDQUxEOztrQkFPZTNCLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFVbkgsR0FBVixFQUFlOEksTUFBZixFQUF1QkMsT0FBdkIsRUFBZ0M7QUFDNUMsUUFBSSxDQUFDL0ksR0FBTCxFQUFVLE9BQU8sSUFBUDtBQUNWLFFBQUksc0JBQU9BLEdBQVAsRUFBWSxPQUFaLENBQUosRUFBMEI7QUFDdEIsYUFBSyxJQUFJdEQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJc0QsSUFBSTFJLE1BQXhCLEVBQWdDb0YsR0FBaEMsRUFBcUM7QUFDakN5SyxvQkFBUW5ILElBQUl0RCxDQUFKLENBQVIsRUFBZ0JvTSxNQUFoQixFQUF3QkMsT0FBeEI7QUFDSDtBQUNKLEtBSkQsTUFJTztBQUNILFlBQU1oRyxNQUFNLDRCQUFaO0FBQ0EsWUFBTWlHLE9BQU9qRyxJQUFJdkMsYUFBSixDQUFrQixNQUFsQixDQUFiO0FBQ0EsWUFBTXhLLEtBQUssU0FBU2lULEtBQUt4QixNQUFMLEdBQWN5QixRQUFkLENBQXVCLEVBQXZCLEVBQTJCaEosS0FBM0IsQ0FBaUMsQ0FBakMsQ0FBcEI7O0FBRUE4SSxhQUFLdkQsSUFBTCxHQUFhekYsSUFBSXVDLE1BQUosQ0FBVyxDQUFDLENBQVosTUFBbUIsTUFBcEIsR0FBOEJ2QyxHQUE5QixHQUFvQ0EsTUFBTSxNQUF0RDtBQUNBZ0osYUFBS0csR0FBTCxHQUFXLFlBQVg7QUFDQUgsYUFBS2hULEVBQUwsR0FBVUEsRUFBVjtBQUNBZ1QsYUFBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0FFLGFBQUtELE9BQUwsR0FBZUEsT0FBZjs7QUFFQWhHLFlBQUlxRyxJQUFKLENBQVNqVSxXQUFULENBQXFCNlQsSUFBckI7QUFDQSxlQUFPQSxJQUFQO0FBQ0g7QUFDSixDQXBCRDs7a0JBc0JlN0IsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1rQyxrQkFBa0IsNEJBQXhCO0FBQ0EsSUFBTWpDLFNBQVMsU0FBVEEsTUFBUyxDQUFVcEgsR0FBVixFQUFlOEksTUFBZixFQUF1QkMsT0FBdkIsRUFBZ0M7QUFDM0MsUUFBSSxDQUFDL0ksR0FBTCxFQUFVLE9BQU8sSUFBUDtBQUNWLFFBQUksc0JBQU9BLEdBQVAsRUFBWSxPQUFaLENBQUosRUFBMEI7QUFDdEIsYUFBSyxJQUFJdEQsSUFBSSxDQUFiLEVBQWdCQSxJQUFJc0QsSUFBSTFJLE1BQXhCLEVBQWdDb0YsR0FBaEMsRUFBcUM7QUFDakMwSyxtQkFBT3BILElBQUl0RCxDQUFKLENBQVAsRUFBZW9NLE1BQWYsRUFBdUJDLE9BQXZCO0FBQ0g7QUFDSixLQUpELE1BSU87QUFDSCxZQUFNTyxTQUFTRCxnQkFBZ0I3SSxhQUFoQixDQUE4QixRQUE5QixDQUFmO0FBQ0EsWUFBTXhLLEtBQUssY0FBY2lULEtBQUt4QixNQUFMLEdBQWN5QixRQUFkLENBQXVCLEVBQXZCLEVBQTJCaEosS0FBM0IsQ0FBaUMsQ0FBakMsQ0FBekI7O0FBRUFvSixlQUFPdEosR0FBUCxHQUFjQSxJQUFJdUMsTUFBSixDQUFXLENBQUMsQ0FBWixNQUFtQixLQUFwQixHQUE2QnZDLEdBQTdCLEdBQW1DQSxNQUFNLEtBQXREO0FBQ0FzSixlQUFPdFEsSUFBUCxHQUFjLHdCQUFkO0FBQ0FzUSxlQUFPdFQsRUFBUCxHQUFZQSxFQUFaO0FBQ0FzVCxlQUFPUixNQUFQLEdBQWdCQSxNQUFoQjtBQUNBUSxlQUFPUCxPQUFQLEdBQWlCQSxPQUFqQjs7QUFFQU0sd0JBQWdCRCxJQUFoQixDQUFxQmpVLFdBQXJCLENBQWlDbVUsTUFBakM7QUFDQSxlQUFPQSxNQUFQO0FBQ0g7QUFDSixDQW5CRDs7a0JBcUJlbEMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJmOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsSUFBTUMsYUFBYSxTQUFiQSxVQUFhLENBQVVrQyxJQUFWLEVBQWdCdlYsUUFBaEIsRUFBMEIrVSxPQUExQixFQUFtQztBQUNsRCxRQUFJLHNCQUFPUSxJQUFQLEVBQWEsUUFBYixLQUEwQixzQkFBT0EsSUFBUCxFQUFhLE9BQWIsQ0FBOUIsRUFBcUQ7QUFDakQsWUFBSSxzQkFBT0EsSUFBUCxFQUFhLE9BQWIsQ0FBSixFQUEyQjtBQUN2QixnQkFBTXBPLE1BQU0sRUFBWjtBQUNBb08saUJBQUtoUyxPQUFMLENBQWMsVUFBQ2lMLElBQUQsRUFBTzlGLENBQVAsRUFBYTtBQUN2QnZCLG9CQUFJLGNBQWM4TixLQUFLeEIsTUFBTCxHQUFjeUIsUUFBZCxDQUF1QixFQUF2QixFQUEyQmhKLEtBQTNCLENBQWlDLENBQWpDLENBQWxCLElBQXlEc0MsSUFBekQ7QUFDSCxhQUZEO0FBR0ErRyxtQkFBT3BPLEdBQVA7QUFDSDtBQUNELFlBQUlrRCxXQUFXLENBQWY7QUFDQSxZQUFNbUwsVUFBVSxFQUFoQjtBQUNBaFUsZUFBT0MsSUFBUCxDQUFZOFQsSUFBWixFQUFrQmhTLE9BQWxCLENBQTBCLFVBQUM1QixHQUFELEVBQVM7QUFDL0IsZ0JBQU1xSyxNQUFNdUosS0FBSzVULEdBQUwsQ0FBWjtBQUNBLGdCQUFNMlQsU0FBUyw2QkFBYyxRQUFkLEVBQXdCO0FBQ25DdEoscUJBQU1BLElBQUl1QyxNQUFKLENBQVcsQ0FBQyxDQUFaLE1BQW1CLEtBQXBCLEdBQTZCdkMsR0FBN0IsR0FBbUNBLE1BQU0sS0FEWDtBQUVuQ2hILHNCQUFNLHdCQUY2QjtBQUduQ2hELG9CQUFJTDtBQUgrQixhQUF4QixDQUFmO0FBS0EyVCxtQkFBT1AsT0FBUCxHQUFpQkEsT0FBakI7QUFDQU8sbUJBQU9SLE1BQVAsR0FBZ0IsVUFBVVcsQ0FBVixFQUFhO0FBQ3pCRCx3QkFBUSxLQUFLeFQsRUFBYixJQUFtQixJQUFuQjtBQUNBcUk7QUFDQSxvQkFBSUEsYUFBYS9HLE1BQWpCLEVBQXlCO0FBQ3JCdEQsNkJBQVNNLElBQVQsQ0FBYyxFQUFkLEVBQWtCa1YsT0FBbEI7QUFDSDtBQUNKLGFBTkQ7QUFPQTdSLHFCQUFTeVIsSUFBVCxDQUFjalUsV0FBZCxDQUEwQm1VLE1BQTFCO0FBQ0gsU0FoQkQ7QUFpQkg7QUFDSixDQTdCRDs7a0JBK0JlakMsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRmLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxDQUFDb0MsT0FBRCxFQUFVQyxPQUFWLEVBQXNCO0FBQ2hDLFNBQUssSUFBSWhVLEdBQVQsSUFBZ0JnVSxPQUFoQixFQUF5QjtBQUNyQixZQUFJO0FBQ0EsZ0JBQUtBLFFBQVFoVSxHQUFSLEVBQWFxSCxXQUFiLEtBQTZCeEgsTUFBbEMsRUFBMkM7QUFDdkNrVSx3QkFBUS9ULEdBQVIsSUFBZTJSLE1BQU1vQyxRQUFRL1QsR0FBUixDQUFOLEVBQW9CZ1UsUUFBUWhVLEdBQVIsQ0FBcEIsQ0FBZjtBQUNILGFBRkQsTUFFTztBQUNIK1Qsd0JBQVEvVCxHQUFSLElBQWVnVSxRQUFRaFUsR0FBUixDQUFmO0FBQ0g7QUFDSixTQU5ELENBTUUsT0FBTThULENBQU4sRUFBUztBQUNQQyxvQkFBUS9ULEdBQVIsSUFBZWdVLFFBQVFoVSxHQUFSLENBQWY7QUFFSDtBQUNKO0FBQ0QsV0FBTytULE9BQVA7QUFDSCxDQWREOztrQkFnQmVwQyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmYsSUFBTVIsV0FBWSxTQUFaQSxRQUFZLENBQVVoUyxPQUFWLEVBQW1CO0FBQ2pDLFFBQU04VSxZQUFZalMsU0FBUzZJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQW9KLGNBQVV6VSxXQUFWLENBQXNCTCxRQUFRa0QsU0FBUixDQUFrQixJQUFsQixDQUF0QjtBQUNBLFdBQU80UixVQUFVdEIsU0FBakI7QUFDSCxDQUpEOztrQkFNZXhCLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUFIsSUFBTVMsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFVMVIsQ0FBVixFQUFhO0FBQ3RDLFFBQUk0VCxVQUFKO0FBQ0EsUUFBSVIsS0FBS1ksR0FBTCxDQUFTaFUsQ0FBVCxJQUFjLEdBQWxCLEVBQXVCO0FBQ25CNFQsWUFBSXJRLFNBQVN2RCxFQUFFcVQsUUFBRixHQUFhckgsS0FBYixDQUFtQixJQUFuQixFQUF5QixDQUF6QixDQUFULENBQUo7QUFDQSxZQUFJNEgsQ0FBSixFQUFPO0FBQ0g1VCxpQkFBS29ULEtBQUthLEdBQUwsQ0FBUyxFQUFULEVBQVlMLElBQUUsQ0FBZCxDQUFMO0FBQ0E1VCxnQkFBSSxPQUFRLElBQUlxRCxLQUFKLENBQVV1USxDQUFWLENBQUQsQ0FBZU0sSUFBZixDQUFvQixHQUFwQixDQUFQLEdBQWtDbFUsRUFBRXFULFFBQUYsR0FBYTlRLFNBQWIsQ0FBdUIsQ0FBdkIsQ0FBdEM7QUFDSDtBQUNKLEtBTkQsTUFNTztBQUNIcVIsWUFBSXJRLFNBQVN2RCxFQUFFcVQsUUFBRixHQUFhckgsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixDQUFULENBQUo7QUFDQSxZQUFJNEgsSUFBSSxFQUFSLEVBQVk7QUFDUkEsaUJBQUssRUFBTDtBQUNBNVQsaUJBQUtvVCxLQUFLYSxHQUFMLENBQVMsRUFBVCxFQUFZTCxDQUFaLENBQUw7QUFDQTVULGlCQUFNLElBQUlxRCxLQUFKLENBQVV1USxJQUFFLENBQVosQ0FBRCxDQUFpQk0sSUFBakIsQ0FBc0IsR0FBdEIsQ0FBTDtBQUNIO0FBQ0o7QUFDRCxXQUFPbFUsQ0FBUDtBQUNILENBakJNOztrQkFtQlEwUixhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNcFIsS0FBSyxTQUFMQSxFQUFLLENBQVVtTCxRQUFWLEVBQW9CdEYsU0FBcEIsRUFBK0JoSSxRQUEvQixFQUF5Q2dXLE1BQXpDLEVBQWlEO0FBQ3hELFFBQUl0TixVQUFKO0FBQUEsUUFBTzZFLFdBQVcsRUFBbEI7O0FBRUEsWUFBUSxzQkFBT0QsUUFBUCxDQUFSO0FBQ0ksYUFBSyxRQUFMO0FBQ0lDLHVCQUFXLHdCQUFTRCxRQUFULENBQVg7QUFDQTtBQUNKLGFBQUssUUFBTDtBQUNJLGdCQUFJLHNCQUFPQSxRQUFQLENBQUosRUFDSUMsV0FBVyxDQUFDRCxRQUFELENBQVg7QUFDSjtBQUNKLGFBQUssT0FBTDtBQUNJQyx1QkFBV0QsUUFBWDtBQUNBO0FBVlI7O0FBYUEsU0FBSzVFLElBQUksQ0FBVCxFQUFZQSxJQUFJNkUsU0FBU2pLLE1BQXpCLEVBQWlDb0YsR0FBakMsRUFBc0M7QUFDbEMsWUFBSTZFLFNBQVM3RSxDQUFULEtBQWU2RSxTQUFTN0UsQ0FBVCxFQUFZbkgsZ0JBQS9CLEVBQ0lnTSxTQUFTN0UsQ0FBVCxFQUFZbkgsZ0JBQVosQ0FBNkJ5RyxTQUE3QixFQUF3Q2hJLFFBQXhDLEVBQWtELENBQUMsQ0FBQ2dXLE1BQXBEO0FBQ1A7QUFDSixDQXBCRDs7a0JBc0JlN1QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJmOzs7O0FBQ0E7Ozs7OztBQUpBOzs7QUFNQSxJQUFNcEIsV0FBVyxTQUFYQSxRQUFXLENBQVV3TyxJQUFWLEVBQWdCO0FBQzdCLFFBQU01TSxPQUFPLEVBQUNkLEdBQUcsQ0FBSixFQUFPQyxHQUFHLENBQVYsRUFBYXlFLE9BQU8sQ0FBcEIsRUFBdUJDLFFBQVEsQ0FBL0IsRUFBYjtBQUNBLFFBQUksT0FBTytJLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsWUFBSSw0QkFBYUEsSUFBYixDQUFKLEVBQXdCO0FBQ3BCQSxtQkFBTyx3QkFBU0EsSUFBVCxDQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0hBLG1CQUFPNUwsU0FBU3FMLGFBQVQsQ0FBdUJPLElBQXZCLENBQVA7QUFDSDtBQUNKOztBQUVELFFBQUlBLFNBQVMvTyxNQUFULElBQW1CK08sU0FBUzVMLFFBQWhDLEVBQTBDO0FBQ3RDaEIsYUFBSzRELEtBQUwsR0FBYS9GLE9BQU95VixVQUFwQjtBQUNBdFQsYUFBSzZELE1BQUwsR0FBY2hHLE9BQU8wVixXQUFyQjtBQUNBdlQsYUFBSzdCLE9BQUwsR0FBZU4sTUFBZjtBQUNILEtBSkQsTUFNQSxJQUFJK08sUUFBUUEsS0FBS2tGLFFBQUwsS0FBa0JyVCxLQUFLdVQsWUFBbkMsRUFBaUQ7QUFDN0MsWUFBSXBGLEtBQUs0RyxxQkFBVCxFQUFnQztBQUM1QixnQkFBTUMsT0FBTzdHLEtBQUs0RyxxQkFBTCxFQUFiO0FBQ0EsZ0JBQUlFLFlBQVk3VixPQUFPOFYsV0FBUCxJQUFzQjNTLFNBQVMwUixlQUFULENBQXlCZ0IsU0FBL0MsSUFBNEQxUyxTQUFTNFMsSUFBVCxDQUFjRixTQUExRjtBQUFBLGdCQUNJRyxhQUFhaFcsT0FBT2lXLFdBQVAsSUFBc0I5UyxTQUFTMFIsZUFBVCxDQUF5Qm1CLFVBQS9DLElBQTZEN1MsU0FBUzRTLElBQVQsQ0FBY0MsVUFENUY7QUFBQSxnQkFFSUUsWUFBWS9TLFNBQVMwUixlQUFULENBQXlCcUIsU0FBekIsSUFBc0MvUyxTQUFTNFMsSUFBVCxDQUFjRyxTQUFwRCxJQUFpRSxDQUZqRjtBQUFBLGdCQUdJQyxhQUFhaFQsU0FBUzBSLGVBQVQsQ0FBeUJzQixVQUF6QixJQUF1Q2hULFNBQVM0UyxJQUFULENBQWNJLFVBQXJELElBQW1FLENBSHBGOztBQUtBaFUsaUJBQUtiLENBQUwsR0FBU21ULEtBQUsyQixLQUFMLENBQVdSLEtBQUtTLEdBQUwsR0FBV1IsU0FBWCxHQUF1QkssU0FBbEMsQ0FBVDtBQUNBL1QsaUJBQUtkLENBQUwsR0FBU29ULEtBQUsyQixLQUFMLENBQVdSLEtBQUtVLElBQUwsR0FBWU4sVUFBWixHQUF5QkcsVUFBcEMsQ0FBVDtBQUNBaFUsaUJBQUs0RCxLQUFMLEdBQWFnSixLQUFLd0gsV0FBbEI7QUFDQXBVLGlCQUFLNkQsTUFBTCxHQUFjK0ksS0FBS3lILFlBQW5COztBQUVBclUsaUJBQUtrVSxHQUFMLEdBQVdULEtBQUtTLEdBQUwsR0FBV1AsV0FBdEI7QUFDQTNULGlCQUFLbVUsSUFBTCxHQUFZVixLQUFLVSxJQUFMLEdBQVlMLFdBQXhCO0FBQ0E5VCxpQkFBS3NVLEtBQUwsR0FBYWIsS0FBS2EsS0FBTCxHQUFhUixXQUExQjtBQUNBOVQsaUJBQUt1VSxNQUFMLEdBQWNkLEtBQUtjLE1BQUwsR0FBY1QsV0FBNUI7QUFDSCxTQWhCRCxNQWlCSztBQUNELGdCQUFJSSxNQUFNLENBQVY7QUFBQSxnQkFBYUMsT0FBTyxDQUFwQjtBQUNBLG1CQUFPdkgsSUFBUCxFQUFhO0FBQ1RzSCx1QkFBT3pSLFNBQVNtSyxLQUFLNEgsU0FBZCxFQUF5QixFQUF6QixDQUFQO0FBQ0FMLHdCQUFRMVIsU0FBU21LLEtBQUs2SCxVQUFkLEVBQTBCLEVBQTFCLENBQVI7QUFDQTdILHVCQUFPQSxLQUFLOEgsWUFBWjtBQUNIO0FBQ0QxVSxpQkFBS2IsQ0FBTCxHQUFTK1UsR0FBVDtBQUNBbFUsaUJBQUtkLENBQUwsR0FBU2lWLElBQVQ7QUFDQW5VLGlCQUFLNEQsS0FBTCxHQUFhZ0osS0FBS3dILFdBQWxCO0FBQ0FwVSxpQkFBSzZELE1BQUwsR0FBYytJLEtBQUt5SCxZQUFuQjtBQUNIO0FBQ0RyVSxhQUFLN0IsT0FBTCxHQUFleU8sSUFBZjtBQUNIO0FBQ0QsV0FBTzVNLElBQVA7QUFDSCxDQWpERDs7a0JBbURlNUIsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEZixJQUFNeVMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVbFMsS0FBVixFQUFpQjtBQUNuQyxRQUFJLEVBQUVBLGlCQUFpQmdXLFVBQW5CLENBQUosRUFBb0M7QUFDaEMvTyxnQkFBUWdQLEtBQVIsQ0FBYyw2Q0FBZDtBQUNBO0FBQ0g7QUFDRCxRQUFNbkIsT0FBT3pTLFNBQVM0UyxJQUFULENBQWNKLHFCQUFkLEVBQWI7QUFDQSxXQUFPO0FBQ0h0VSxXQUFHUCxNQUFNa1csT0FBTixHQUFnQnBCLEtBQUtVLElBRHJCO0FBRUhoVixXQUFHUixNQUFNbVcsT0FBTixHQUFnQnJCLEtBQUtTO0FBRnJCLEtBQVA7QUFJSCxDQVZEOztrQkFZZXJELGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RmOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQSxJQUFNbkYsUUFBUSxTQUFSQSxLQUFRLENBQVVmLFFBQVYsRUFBb0I5QixJQUFwQixFQUEwQnhMLFFBQTFCLEVBQW9Db0ssWUFBcEMsRUFBa0Q7QUFDNUQsTUFBTW1ELFdBQVcsd0JBQVNELFFBQVQsRUFBbUI5QixJQUFuQixFQUF5QnhMLFFBQXpCLEVBQW1Db0ssWUFBbkMsQ0FBakI7QUFDQSxTQUFPbUQsWUFBWUEsU0FBUyxDQUFULENBQVosR0FBMEJBLFNBQVMsQ0FBVCxDQUExQixHQUF3QyxLQUEvQztBQUNILENBSEQ7O2tCQUtlYyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1VLE1BQU0sNEJBQVo7O0FBRUEsSUFBTWdFLFdBQVcsU0FBWEEsUUFBVyxDQUFVekYsUUFBVixFQUFvQjlCLElBQXBCLEVBQTBCeEwsUUFBMUIsRUFBb0NvSyxZQUFwQyxFQUFrRDtBQUMvRCxRQUFJbUQsV0FBVyxFQUFmO0FBQ0EvQixXQUFPQSxRQUFRdUQsR0FBZjs7QUFFQSxRQUFJLHNCQUFPekIsUUFBUCxDQUFKLEVBQ0ksT0FBTyxDQUFDQSxRQUFELENBQVA7O0FBRUosUUFBSSxzQkFBTzlCLElBQVAsRUFBYSxRQUFiLENBQUosRUFDSUEsT0FBT3VELElBQUlDLGFBQUosQ0FBa0J4RCxJQUFsQixDQUFQO0FBQ0osUUFBSUEsSUFBSixFQUNJK0IsV0FBVyxHQUFHckIsS0FBSCxDQUFTNUwsSUFBVCxDQUFja0wsS0FBS2tNLGdCQUFMLENBQXNCcEssUUFBdEIsQ0FBZCxDQUFYOztBQUVKLFFBQUl0TixRQUFKLEVBQ0l1TixTQUFTaEssT0FBVCxDQUFpQixVQUFDekMsT0FBRCxFQUFhO0FBQUNkLGlCQUFTTSxJQUFULENBQWM4SixnQkFBZ0IsRUFBOUIsRUFBa0N0SixPQUFsQztBQUEyQyxLQUExRTs7QUFFSixXQUFPeU0sUUFBUDtBQUNILENBaEJEOztrQkFrQmV3RixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmOztBQUdPLElBQU1VLDBCQUFTLFNBQVRBLE1BQVMsQ0FBVWtFLEdBQVYsRUFBZUMsR0FBZixFQUFvQjtBQUN0Q0QsVUFBTUEsT0FBTyxDQUFiO0FBQ0FDLFVBQU1BLE9BQU8sR0FBYjtBQUNBLFdBQU8zQyxLQUFLNEMsS0FBTCxDQUFXNUMsS0FBS3hCLE1BQUwsTUFBaUJtRSxNQUFNRCxHQUFOLEdBQVksQ0FBN0IsSUFBa0NBLEdBQTdDLENBQVA7QUFDSCxDQUpNOztBQU1QOzs7O0FBZkE7Ozs7OztBQW1CTyxJQUFNakUsb0NBQWMsU0FBZEEsV0FBYyxHQUFZO0FBQ25DLFFBQU1vRSxVQUFVLG1CQUFtQmpLLEtBQW5CLENBQXlCLEVBQXpCLENBQWhCO0FBQ0EsUUFBSW5GLFVBQUo7QUFBQSxRQUFPcVAsUUFBUSxHQUFmO0FBQ0EsU0FBS3JQLElBQUksQ0FBVCxFQUFZQSxJQUFJLENBQWhCLEVBQW1CQSxHQUFuQjtBQUNJcVAsaUJBQVNELFFBQVE3QyxLQUFLNEMsS0FBTCxDQUFXNUMsS0FBS3hCLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBUixDQUFUO0FBREosS0FFQSxPQUFPc0UsS0FBUDtBQUNILENBTk07O0FBUUEsSUFBTW5FLHNDQUFlLFNBQWZBLFlBQWUsR0FBb0I7QUFBQSxRQUFWb0UsSUFBVSx1RUFBSCxDQUFHOztBQUM1QyxRQUFJQSxPQUFPLEVBQVgsRUFBZTtBQUNYLFlBQUl0UCxJQUFJdU0sS0FBS2dELElBQUwsQ0FBVUQsT0FBSyxFQUFmLENBQVI7QUFDQSxZQUFJRSxNQUFNLEVBQVY7QUFDQSxhQUFLeFAsQ0FBTCxFQUFRQSxJQUFJLENBQVosRUFBZUEsR0FBZjtBQUNJd1AsbUJBQU9oVCxNQUFNLEVBQU4sRUFBVXNDLElBQVYsQ0FBZSxDQUFmLEVBQWtCOUYsR0FBbEIsQ0FBc0I7QUFBQSx1QkFBS3VULEtBQUs0QyxLQUFMLENBQVc1QyxLQUFLeEIsTUFBTCxLQUFnQixFQUEzQixDQUFMO0FBQUEsYUFBdEIsRUFBMkRzQyxJQUEzRCxDQUFnRSxFQUFoRSxDQUFQO0FBREosU0FFQSxPQUFPbUMsSUFBSWhNLEtBQUosQ0FBVSxDQUFWLEVBQWE4TCxJQUFiLENBQVA7QUFDSDtBQUNELFdBQU81UyxTQUFTRixNQUFNOFMsSUFBTixFQUFZeFEsSUFBWixDQUFpQixDQUFqQixFQUFvQjlGLEdBQXBCLENBQXdCO0FBQUEsZUFBS3VULEtBQUs0QyxLQUFMLENBQVc1QyxLQUFLeEIsTUFBTCxLQUFnQixFQUEzQixDQUFMO0FBQUEsS0FBeEIsRUFBNkRzQyxJQUE3RCxDQUFrRSxFQUFsRSxDQUFULENBQVA7QUFDSCxDQVRNOztBQVdBLElBQU1sQyxzQ0FBZSxTQUFmQSxZQUFlLEdBQXlDO0FBQUEsUUFBL0JtRSxJQUErQix1RUFBeEIsQ0FBd0I7QUFBQSxRQUFyQkcsV0FBcUIsdUVBQVAsS0FBTzs7QUFDakUsUUFBSXpQLFVBQUo7QUFBQSxRQUFPK0gsU0FBUyxFQUFoQjtBQUNBLFFBQU1vRixNQUFNc0MsY0FDTm5OLFdBQU1DLGFBQVE5RyxXQUFSLEdBQXNCMEosS0FBdEIsQ0FBNEIsR0FBNUIsQ0FEQSxHQUVON0MsU0FBSTdHLFdBQUosR0FBa0IwSixLQUFsQixDQUF3QixHQUF4QixDQUZOO0FBR0EsU0FBS25GLElBQUlzUCxJQUFULEVBQWV0UCxJQUFJLENBQW5CLEVBQXNCQSxHQUF0QixFQUEyQjtBQUN2QitILGtCQUFVb0YsSUFBSVosS0FBSzRDLEtBQUwsQ0FBVzVDLEtBQUt4QixNQUFMLEtBQWdCb0MsSUFBSXZTLE1BQS9CLENBQUosQ0FBVjtBQUNIO0FBQ0QsV0FBT21OLE1BQVA7QUFDSCxDQVRNOztBQVdBLElBQU1xRCxzREFBdUIsU0FBdkJBLG9CQUF1QixHQUFvQjtBQUFBLFFBQVZrRSxJQUFVLHVFQUFILENBQUc7O0FBQ3BELFFBQUl0UCxVQUFKO0FBQUEsUUFBTytILFNBQVMsRUFBaEI7QUFDQSxRQUFNMkgsWUFBYXROLHNCQUFpQjNHLFdBQWpCLEdBQStCMEosS0FBL0IsQ0FBcUMsR0FBckMsQ0FBbkI7QUFDQSxRQUFNd0ssUUFBU3ROLGtCQUFhNUcsV0FBYixHQUEyQjBKLEtBQTNCLENBQWlDLEdBQWpDLENBQWY7QUFDQSxRQUFNeUssYUFBY3JELEtBQUt4QixNQUFMLEtBQWdCLEVBQWpCLEdBQXVCLENBQTFDO0FBQ0EsU0FBSy9LLElBQUlzUCxPQUFPLENBQVAsR0FBVyxDQUFwQixFQUF1QnRQLElBQUksQ0FBM0IsRUFBOEJBLEdBQTlCLEVBQW9DO0FBQ2hDLFlBQUk2UCxLQUFLSCxVQUFVbkQsS0FBSzRDLEtBQUwsQ0FBVzVDLEtBQUt4QixNQUFMLEtBQWdCMkUsVUFBVTlVLE1BQXJDLENBQVYsQ0FBVDtBQUNBLFlBQUlrVixLQUFLSCxNQUFNcEQsS0FBSzRDLEtBQUwsQ0FBVzVDLEtBQUt4QixNQUFMLEtBQWdCNEUsTUFBTS9VLE1BQWpDLENBQU4sQ0FBVDtBQUNBbU4sa0JBQVU2SCxhQUFhQyxLQUFLQyxFQUFsQixHQUF1QkEsS0FBS0QsRUFBdEM7QUFDSDs7QUFFRCxXQUFPOUgsT0FBT3JNLFNBQVAsQ0FBaUIsQ0FBakIsRUFBb0I0VCxJQUFwQixDQUFQO0FBQ0gsQ0FaTTs7QUFjUDs7Ozs7QUFLTyxJQUFNckUsa0NBQWEsU0FBYkEsVUFBYSxDQUFVdEgsR0FBVixFQUFlO0FBQ3JDLFdBQU9uSCxNQUFNQyxPQUFOLENBQWNrSCxHQUFkLElBQXFCQSxJQUFJb0gsT0FBTyxDQUFQLEVBQVVwSCxJQUFJL0ksTUFBSixHQUFXLENBQXJCLENBQUosQ0FBckIsR0FBb0QsS0FBM0Q7QUFDSCxDQUZNOztrQkFJUW1RLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFZjs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNTSxXQUFXLFNBQVhBLFFBQVcsQ0FBVXJNLEVBQVYsRUFBYztBQUMzQixRQUFNK1EsTUFBTSw0QkFBWjtBQUNBLFFBQU0xSixNQUFNLDRCQUFaO0FBQ0EwSixRQUFJaEgsSUFBSixHQUFXL0osTUFBTXFILElBQUkwQyxJQUFyQjtBQUNILENBSkQ7O2tCQU1lc0MsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7QUFRQSxJQUFNZixTQUFTLFNBQVRBLE1BQVMsQ0FBVTFGLFFBQVYsRUFBb0JuQyxJQUFwQixFQUEwQkssSUFBMUIsRUFBZ0M7QUFDM0NBLFdBQU8sc0JBQU9BLElBQVAsSUFBZUEsSUFBZixHQUFzQixxQkFBTUEsSUFBTixDQUE3QjtBQUNBLFFBQUk5QyxJQUFJLENBQVI7QUFBQSxRQUNJL0csWUFESjtBQUFBLFFBRUk0TCxXQUFXLEVBRmY7QUFBQSxRQUdJbUwsZ0JBQWdCLHdCQUFTcEwsUUFBVCxFQUFtQjlCLFFBQVE3SCxTQUFTNFMsSUFBcEMsQ0FIcEI7O0FBS0EsUUFBSW1DLGFBQUosRUFBbUI7QUFDZixlQUFPaFEsSUFBSWdRLGNBQWNwVixNQUF6QixFQUFpQztBQUM3QixnQkFBSSxDQUFDNkgsSUFBTCxFQUNJb0MsU0FBUzdFLENBQVQsSUFBY2dRLGNBQWNoUSxDQUFkLENBQWQsQ0FESixLQUVLO0FBQ0Qsb0JBQUlnUSxjQUFjaFEsQ0FBZCxFQUFpQmlRLFlBQWpCLENBQThCeE4sSUFBOUIsQ0FBSixFQUF5QztBQUNyQ3hKLDBCQUFNK1csY0FBY2hRLENBQWQsRUFBaUI0QyxZQUFqQixDQUE4QkgsSUFBOUIsQ0FBTjtBQUNBb0MsNkJBQVM1TCxHQUFULElBQWdCK1csY0FBY2hRLENBQWQsQ0FBaEI7QUFDSDtBQUNKO0FBQ0RBO0FBQ0g7QUFDSjtBQUNELFdBQU82RSxRQUFQO0FBQ0gsQ0FyQkQ7O2tCQXVCZXlGLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDZixJQUFNSCxlQUFlLFNBQWZBLFlBQWUsQ0FBVXBDLE1BQVYsRUFBa0I7QUFDbkMsUUFBSTlNLFNBQVNpVixXQUFiLEVBQ0ksT0FBT2pWLFNBQVNpVixXQUFULEdBQXVCQyx3QkFBdkIsQ0FBZ0RwSSxNQUFoRCxDQUFQLENBREosS0FFSztBQUNELFlBQUkvSCxVQUFKO0FBQUEsWUFDSXlFLFdBQVd4SixTQUFTeUosc0JBQVQsRUFEZjtBQUFBLFlBRUl3SSxZQUFZalMsU0FBUzZJLGFBQVQsQ0FBdUIsS0FBdkIsQ0FGaEI7O0FBSUFvSixrQkFBVXRCLFNBQVYsR0FBc0I3RCxNQUF0QjtBQUNBLGVBQU8vSCxJQUFJa04sVUFBVWtELFVBQXJCO0FBQ0kzTCxxQkFBU2hNLFdBQVQsQ0FBcUJ1SCxDQUFyQjtBQURKLFNBR0EsT0FBT3lFLFFBQVA7QUFDSDtBQUNKLENBZEQ7O2tCQWdCZTBGLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjs7Ozs7O0FBRUEsSUFBTUQsV0FBVyxTQUFYQSxRQUFXLENBQVVuQyxNQUFWLEVBQWtCO0FBQy9CLFFBQUlsSixlQUFKO0FBQ0EsUUFBSTRGLFdBQVcsNEJBQWFzRCxNQUFiLENBQWY7O0FBRUEsWUFBUXRELFNBQVNxSCxpQkFBakI7QUFDSSxhQUFLLENBQUw7QUFBUTtBQUNSLGFBQUssQ0FBTDtBQUNJak4scUJBQVM0RixTQUFTNEwsaUJBQWxCO0FBQ0E7QUFDSjtBQUNJLGdCQUFJbkQsWUFBWWpTLFNBQVM2SSxhQUFULENBQXVCLE1BQXZCLENBQWhCO0FBQ0FvSixzQkFBVXpVLFdBQVYsQ0FBc0JnTSxRQUF0QjtBQUNBNUYscUJBQVNxTyxTQUFUO0FBUlI7QUFVQSxXQUFPck8sTUFBUDtBQUNILENBZkQ7O2tCQWlCZXFMLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmLElBQU11QixXQUFXLFNBQVhBLFFBQVcsQ0FBVWhPLEtBQVYsRUFBaUI7QUFDOUIsV0FBUSxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQWxCLEdBQ0Q2UyxLQUFLdEwsS0FBTCxDQUFXc0wsS0FBS0MsU0FBTCxDQUFlOVMsS0FBZixDQUFYLENBREMsR0FFRCxFQUZOO0FBR0gsQ0FKRDs7a0JBTWVnTyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1ILFNBQVMsU0FBVEEsTUFBUyxDQUFVN04sS0FBVixFQUFpQm5CLElBQWpCLEVBQXVCO0FBQ2xDLFFBQU1rVSxjQUFjLENBQUMsTUFBRCxFQUFTLFNBQVQsRUFBb0IsV0FBcEIsRUFBaUMsVUFBakMsRUFBNkMsUUFBN0MsRUFBdUQsUUFBdkQsRUFBaUUsTUFBakUsRUFBeUUsT0FBekUsRUFBa0YsUUFBbEYsQ0FBcEI7QUFDQSxRQUFJQyxJQUFJLDRCQUFhaFQsS0FBYixFQUFvQmhDLFdBQXBCLEVBQVI7QUFDQSxRQUFJK1UsWUFBWS9LLE9BQVosQ0FBb0JnTCxDQUFwQixNQUEyQixDQUFDLENBQTVCLElBQWlDLFFBQU9oVCxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQXRELEVBQ0lnVCxJQUFJLFFBQUo7O0FBRUosV0FBTyxPQUFPblUsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsS0FBS2IsV0FBTCxPQUF1QmdWLENBQWxELEdBQXNEQSxDQUE3RDtBQUNILENBUEQ7O2tCQVNlbkYsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWGYsSUFBTUMsZUFBZSxTQUFmQSxZQUFlLENBQVU5TixLQUFWLEVBQWlCbkIsSUFBakIsRUFBdUI7QUFDeEMsUUFBTW1VLElBQUkzWCxPQUFPd08sU0FBUCxDQUFpQmtGLFFBQWpCLENBQTBCNVUsSUFBMUIsQ0FBK0I2RixLQUEvQixFQUFzQytGLEtBQXRDLENBQTRDLENBQTVDLEVBQStDLENBQUMsQ0FBaEQsQ0FBVjtBQUNBLFdBQU8sT0FBT2xILElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLFNBQVNtVSxDQUFwQyxHQUF3Q0EsQ0FBL0M7QUFDSCxDQUhEOztrQkFLZWxGLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05mOzs7Ozs7QUFHQSxJQUFNQyxNQUFNLGFBQVVBLElBQVYsRUFBZTtBQUN2QixRQUFNdUUsTUFBTSw0QkFBWjtBQUNBdkUsV0FBTUEsUUFBT3VFLElBQUlXLFFBQWpCO0FBQ0FsRixXQUFNQSxLQUFJdkQsT0FBSixDQUFZLE9BQVosRUFBcUIsR0FBckIsQ0FBTjtBQUNBLFdBQU91RCxLQUFJNVEsTUFBSixHQUFhLENBQWIsSUFBa0I0USxLQUFJaEksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLE1BQW9CLEdBQXRDLEdBQTRDLE1BQU1nSSxJQUFsRCxHQUF3REEsSUFBL0Q7QUFDSCxDQUxEOztrQkFPZUEsRyIsImZpbGUiOiJhbmltYXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG5jb25zdCBBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyB0aGlzLmNvbnN0cnVjdG9yID0gZnVuY3Rpb24gQW5pbWF0aW9uKCkge307XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgcmVxdWVzdElkOiAwLFxuICAgICAgICBzdGFydHBhbHk6IDAsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIGNhbGxiYWNrOiAwLFxuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIHByb2dyZXNzOiAwLFxuICAgIH07XG5cbiAgICByb290LnN0ZXAgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmICghcm9vdC5zdGFydHBhbHkpIHJvb3Quc3RhcnRwYWx5ID0gdGltZXN0YW1wO1xuICAgICAgICByb290LnByb2dyZXNzID0gdGltZXN0YW1wIC0gcm9vdC5zdGFydHBhbHk7XG5cbiAgICAgICAgaWYgKHJvb3QuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2suY2FsbChyb290LCByb290LnByb2dyZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290LmR1cmF0aW9uICYmIHJvb3QuZHVyYXRpb24gPiByb290LnByb2dyZXNzKSB7XG4gICAgICAgICAgICByb290LmNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICBpZiAocm9vdC5wYXVzZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QucGF1c2VkID0gIXJvb3QucGF1c2VkO1xuICAgIH07XG5cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290LnJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICB9O1xuXG4gICAgcm9vdC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyb290LnJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25GcmFtZTtcbiIsImltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGlwQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBwb3NpdGlvbi5lbGVtZW50O1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG8ocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29weVRvKHBhcmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjb3B5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMubW92ZVRvKHBhcmVudCk7XG4gICAgfVxuXG4gICAgb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfVxuXG4gICAgY2xvbmUgKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvcGVydGllcygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wb3NpdGlvbikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5wb3NpdGlvbltrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBwb3NpdGlvbih0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggLSBwYXJlbnQueDtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAtIHBhcmVudC55O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgKHRoaXMuZWxlbWVudC5pZCB8fCAnY2xpcCcpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJucyB7IGJvdHRvbSwgZWxlbWVudCwgaGVpZ2h0LCBsZWZ0LCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeSB9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ2xpcCA9IGZ1bmN0aW9uIChlbGVtZW50KVxue1xuICAgIGNvbnN0IHJvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcblxuICAgIGlmIChyb290LmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJvb3QueCA9IHJvb3QueCAtIHBhcmVudC54O1xuICAgICAgICByb290LnkgPSByb290LnkgLSBwYXJlbnQueTtcbiAgICAgICAgcm9vdC5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgcm9vdC5lbGVtZW50LmlkIHx8ICdjbGlwJyk7XG4gICAgfVxuXG4gICAgcm9vdC5tb3ZlVG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jb3B5VG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICByb290LmVsZW1lbnQgPSBjb3B5KHJvb3QuZWxlbWVudCk7XG4gICAgICAgIHJvb3QubW92ZVRvKHBhcmVudEVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGlwO1xuIiwiaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHtyYW5kb21IdW1hbml6ZVN0cmluZywgcmFuZG9tU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuXG5cbmV4cG9ydCBjb25zdCBDb21wb25lbnRDbGFzc1Byb3BlcnRpZXMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgcHJvcHM6IHt9LFxuICAgIHRlbXBsYXRlOiBmYWxzZSxcbiAgICBlbGVtZW50OiBmYWxzZSxcbiAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgYmVmb3JlOiAoKSA9PiB7fSxcbiAgICBpbml0OiAoKSA9PiB7fSxcbiAgICBkYXRhOiAoKSA9PiB7fSxcbiAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgbWV0aG9kczoge30sXG4gICAgbm9kZToge30sXG4gICAgb246IHt9LFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBwYXJlbnQ6IHt9LFxufTtcblxuLyoqXG4gKiBAcHJvcGVydHkgaWRcbiAqIEBwcm9wZXJ0eSBwcm9wc1xuICogQHByb3BlcnR5IHRlbXBsYXRlXG4gKiBAcHJvcGVydHkgZWxlbWVudFxuICogQHByb3BlcnR5IG92ZXJyaWRlXG4gKiBAcHJvcGVydHkgYmVmb3JlIFtGdW5jdGlvbl1cbiAqIEBwcm9wZXJ0eSBpbml0IFtGdW5jdGlvbl1cbiAqIEBwcm9wZXJ0eSBkYXRhIFtGdW5jdGlvbl1cbiAqIEBwcm9wZXJ0eSBjb21wbGV0ZSBbRnVuY3Rpb25dXG4gKiBAcHJvcGVydHkgbWV0aG9kc1xuICogQHByb3BlcnR5IG5vZGVcbiAqIEBwcm9wZXJ0eSBvblxuICogQHByb3BlcnR5IGluaXRpYWxpemVkXG4gKiBAcHJvcGVydHkgY29tcGxldGVkXG4gKiBAcHJvcGVydHkgY29tcG9uZW50c1xuICogQHByb3BlcnR5IGNoaWxkcmVuXG4gKiBAcHJvcGVydHkgcGFyZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRDbGFzc1xue1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0ge30pXG4gICAge1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmJlZm9yZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgICAgICAgdGhpcy5iZWZvcmUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHN0cjJub2RlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubWV0aG9kcyAmJiBPYmplY3QudmFsdWVzKHRoaXMubWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLm1ldGhvZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5tZXRob2RzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRob2RzW2tleV0gPSB0aGlzLm1ldGhvZHNba2V5XS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5tZXRob2RzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbml0ID09PSAnZnVuY3Rpb24nICYmICF0aGlzLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kYXRhICYmIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5kYXRhW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhW2tleV0gPSB0aGlzLmRhdGFba2V5XS5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudHMgJiYgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmNvbXBvbmVudHNba2V5XSAmJiB0aGlzLmNvbXBvbmVudHNba2V5XS5oYXNPd25Qcm9wZXJ0eSgna2V5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2tleV0ucGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRoaXMuY29tcG9uZW50c1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZhbHNlICYmIGlzTm9kZSh0aGlzLmVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLm9uID0gc2VhcmNoKCdbZGF0YS1vbl0nLCAnZGF0YS1vbicsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUuY2FsbCh0aGlzLmNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUuY2FsbCh0aGlzLmNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudC5saXN0W3RoaXMuaWRdID0gdGhpcztcbiAgICB9XG4gICAgc2V0IHRlbXBsYXRlICh0ZW1wbGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gc3RyMm5vZGUodGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05vZGUodGVtcGxhdGUpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSB0ZW1wbGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgdGVtcGxhdGUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBjb21wb25lbnQobmFtZSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50Q2xhc3MubGlzdFtuYW1lXTtcbiAgICB9XG4gICAgY29tcG9uZW50Q2hpbGRyZW4obmFtZSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50Q2xhc3MubGlzdFtuYW1lXTtcbiAgICB9XG4gICAgY2xvbmUoaWQpIHtcbiAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgIGNsb25lZC50ZW1wbGF0ZSA9IGNsb25lZC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgICAgICBwcm9wZXJ0aWVzID0gbWVyZ2UoQ29tcG9uZW50Q2xhc3NQcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcGVydGllc1trZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9XG59XG5Db21wb25lbnRDbGFzcy5saXN0ID0ge307XG5cbi8qKlxuICpcbmNvbmZpZzpcbiAgICBpZDogJ2lkJyxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge30sXG4gICAgY29tcGxldGUgKCkge30sXG4gICAgbWV0aG9kczoge30sXG4gICAgbm9kZToge30sXG4gICAgY29tcG9uZW50czoge30sXG4gICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuXG5Db21wb25lbnQoe1xuICAgIGlkOiAnRXh0ZXJuYWxUZW1wbGF0ZUNvbXBvbmVudCcsXG4gICAgcHJvcHM6IFsndGl0bGUnXSxcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlJyxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXRlcmF0b3I6IDAsXG4gICAgfSxcbiAgICBjb21wbGV0ZSAoYXBwKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVbJ3RpdGxlJ10pXG4gICAgICAgIHRoaXMubm9kZVsndGl0bGUnXS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZCAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gKysgdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICAgICAgbWluIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSAtLSB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBnZXQgcHJvcGVydHkgYnkgaWQga2V5d29yZFxuICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbmZpZy5pZCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbU5hbWUgPSAgcmFuZG9tSHVtYW5pemVTdHJpbmcoNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJhbmRvbU5hbWUgPSByYW5kb21OYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcmFuZG9tTmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb25maWcuaWQgPSAnQ29tcG9uZW50JyArIHJhbmRvbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wID0gQ29tcG9uZW50LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jb21wb25lbnRzW2lkXSA/IGNvbXAuY29tcG9uZW50c1tpZF0gOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNoaWxkcmVuLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmlkID09PSBpZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jbG9uZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgICAgICBjbG9uZWQudGVtcGxhdGUgPSBjbG9uZWQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuYmVmb3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5tZXRob2RzICYmIE9iamVjdC52YWx1ZXMoY29tcC5tZXRob2RzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAubWV0aG9kcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLm1ldGhvZHNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wLm1ldGhvZHNba2V5XSA9IGNvbXAubWV0aG9kc1trZXldLmJpbmQoY29tcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmRhdGEgJiYgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmRhdGFba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmRhdGFba2V5XSA9IGNvbXAuZGF0YVtrZXldLmJpbmQoY29tcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY29tcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAuZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuY29tcG9uZW50cyAmJiBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGNvbXAuY29tcG9uZW50c1trZXldICYmIGNvbXAuY29tcG9uZW50c1trZXldLmhhc093blByb3BlcnR5KCdrZXknKSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBvbmVudHNba2V5XS5wYXJlbnQgPSBjb21wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wLmNoaWxkcmVuLnB1c2goY29tcC5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBjb21wLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgY29tcC5vbiA9IHNlYXJjaCgnW2RhdGEtb25dJywgJ2RhdGEtb24nLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgICAgICByZXR1cm4gY29tcDtcbiAgICB9XG59O1xuQ29tcG9uZW50Lmxpc3QgPSB7fTtcbkNvbXBvbmVudC5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIHRlbXBsYXRlOiBmYWxzZSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiB7fSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCIvKlxuY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZEV2ZW50TWFuYWdlcigpO1xua2V5Ym9hcmQuZWFjaChFVkVOVF9OQU1FLCBmdW5jdGlvbiAoZXZlbnQpIHt9KVxua2V5Ym9hcmQud2l0aENvbmRpdGlvbktleVxua2V5Ym9hcmQucHJlc3NcbmtleWJvYXJkLnVwXG5rZXlib2FyZC5kb3duXG4qL1xuY29uc3QgS2V5Ym9hcmRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB7fTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGFkZFN0b3JhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XSkgc3RvcmFnZVtldmVudF0gPSB7fTtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XVtrZXldKSBzdG9yYWdlW2V2ZW50XVtrZXldID0gW107XG4gICAgICAgIHN0b3JhZ2VbZXZlbnRdW2tleV0ucHVzaChjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGJhc2VDYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2UpLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZVt0eXBlXSkubWFwKChrZXlDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0gKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlW3R5cGVdW2tleUNvZGVdLm1hcCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSB0eXBlICYmIHBhcnNlSW50KGtleUNvZGUpID09PSBldmVudC5rZXlDb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZXZlbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlYWNoQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGVhY2hDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzICgpIHtcbiAgICAgICAgY29uc3QgYWRkID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJtID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJtKCk7XG4gICAgICAgIGFkZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVhY2goZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlYWNoQ2FsbGJhY2soZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb25kaXRpb25LZXkoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGFkZFN0b3JhZ2UoZXZlbnQsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc3Moa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlwcmVzcycsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICB1cChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXVwJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlkb3duJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRFdmVudE1hbmFnZXI7XG4iLCJpbXBvcnQgQ2xpcCBmcm9tIFwiLi9DbGlwXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuXG5leHBvcnQgY2xhc3MgTW92ZUNsaXBDbGFzcyB7XG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHByb3BlcnRpZXM7XG4gICAgICAgIGNvbnN0IGNsaXAgPSBDbGlwKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNsaXAuZWxlbWVudDtcbiAgICAgICAgdGhpcy5jbGlwID0gY2xpcDtcbiAgICAgICAgdGhpcy5pbml0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgeCgpIHsgcmV0dXJuIHRoaXMuY2xpcC54OyB9XG4gICAgZ2V0IHkoKSB7IHJldHVybiB0aGlzLmNsaXAueTsgfVxuICAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuY2xpcC53aWR0aDsgfVxuICAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLmNsaXAuaGVpZ2h0OyB9XG4gICAgc2V0IHgodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgIHRoaXMuY2xpcC54ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCB5KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB2YWx1ZSArICdweCc7XG4gICAgICAgIHRoaXMuY2xpcC55ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCB3aWR0aCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB2YWx1ZSArICdweCc7XG4gICAgICAgIHRoaXMuY2xpcC53aWR0aCA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgIHRoaXMuY2xpcC5oZWlnaHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgY2xvbmUgKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdG9PYmplY3QodGhpcyk7XG4gICAgICAgIHByb3BzLmVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBpZiAoYXBwZW5kICYmIHRoaXMuZWxlbWVudClcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHByb3BzLmVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBuZXcgTW92ZUNsaXBDbGFzcyhwcm9wcyk7XG4gICAgfVxuICAgIHNldFByb3BlcnRpZXMoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucHJvcGVydGllcykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5wcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCAodGhpcy5wcm9wZXJ0aWVzLmlkIHx8ICdtaXZlY2xpcCcpKTtcbiAgICB9XG59XG5cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gY29uZmlnO1xuICAgIGNvbnN0IGNsaXAgPSBDbGlwKCBlbGVtZW50ICk7XG5cbiAgICBpZighY2xpcC5lbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvcGVydHkgW2VsZW1lbnRdIG5vdCBmb25kIScpO1xuICAgIH1cbiAgICBjbGlwLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW1pdmVjbGlwJywgY29uZmlnLmlkIHx8ICdtaXZlY2xpcCcpO1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogY2xpcC5lbGVtZW50LFxuICAgICAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUud2lkdGggPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLndpZHRoID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgeCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC55XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLndpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC5oZWlnaHRcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByb290W2tleV0gPSBjb25maWdba2V5XVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiByb290LmluaXQgPT09ICdmdW5jdGlvbicgJiYgIXJvb3QuaW5pdGlhbGl6ZWQpe1xuICAgICAgICByb290LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgcm9vdC5pbml0KCk7XG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uIChhcHBlbmQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjbG9uZVByb3BlcnR5ID0gdG9PYmplY3Qocm9vdCk7XG4gICAgICAgIGNsb25lUHJvcGVydHkuZWxlbWVudCA9IHJvb3QuZWxlbWVudC5jbG9uZU5vZGUocm9vdCk7XG4gICAgICAgIGlmIChhcHBlbmQpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNsb25lUHJvcGVydHkuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1vdmVDbGlwKGNsb25lUHJvcGVydHkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVDbGlwO1xuIiwiLyoqXG4gKlxuXG5cbiBjb25zdCByeERhdGEgPSBSb3h5KHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBib2R5OiAnJyxcbiAgICB9KTtcblxuIGZ1bmN0aW9uIHNldFRvKGlkLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBxdWVyeSgnIycgKyBpZCk7XG4gICAgICAgIGluamVjdChlbGVtLCBjb250ZXh0KTtcbiAgICB9XG5cbiByeERhdGEuZXZlbnQoKGtleSwgdmFsdWVzKT0+e1xuICAgICAgICBzZXRUbyhrZXksIHZhbHVlcyk7XG4gICAgfSk7XG5cbiBUaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICAgICAgcnhEYXRhLmRpc3BhdGNoKCd0aXRsZScsICdIZWxsbyBmcmllbmQnKTtcbiAgICAgICAgcnhEYXRhLmRpc3BhdGNoKCdib2R5JywgJ0RvIHlvdSBoYXBweSBub3c/Jyk7XG4gICAgfSwgMjAwMCk7XG5cbiBUaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICAgICAgcnhEYXRhLmRpc3BhdGNoKCdib2R5JywgJ05vIHllcyBvZmNvdXJzZScpO1xuICAgIH0sIDQwMDApO1xuICpcbiAqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgc2V0KCo9LCAqPSk6ICosIGdldCgqKTogKiwgYWN0aW9uKCo9LCAqPSk6ICosIGZpbGwoKj0sICo9KTogKn18Um94eXx7fXxudWxsfGJvb2xlYW59XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFJveHkgPSBmdW5jdGlvbiAocGF5bG9hZClcbntcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MgPSB7XG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHBheWxvYWQsIHtcbiAgICAgICAgZ2V0KG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG9iaiwgcHJvcCwgdmFsdWUpIHtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gJiYgdHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXS5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9sZGVyIG5hbWU6IHNlZXxzZXQ/XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIHBheWxvYWRcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaChrZXksIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBrZXkuY2FsbCh7fSwgcHJveHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbChyZXN1bHQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3Rpb24oKVxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50KGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmUoa2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGNoYW5nZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZlKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPSBrZXk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3Nba2V5XSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID8gcHJveHlba2V5XSA6IGNvcHkocHJveHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGwocGF5bG9hZCwgdG8pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5W3RvXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm94eVt0b11ba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJveHk7XG4iLCJpbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5cbi8qKlxuICogY29uc3QgcnggPSBSb3h5TGlzdGVuZXIgKHtcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiB9KVxuICogcnguc2V0KCk7XG4gKiByeC5kaXNwYXRjaCgpO1xuICpcbiAqIHJ4LmFjdGlvbigpO1xuICpcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBkaXNwYXRjaCgqPSwgKj0pOiBSb3h5LCBnZXQoKik6ICosIGV2ZW50KCo9LCAqPSk6IHRoaXMsIGZpbGwoKj0sICo9KTogdGhpc319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUm94eUxpc3RlbmVyID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgICAgIF9fYWN0aW9uX18oKSB7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aW9uc05hbWVzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdID0gcGF5bG9hZFtldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nICYmIGV2ZW50TmFtZSAhPT0gYWN0aW9ucy5fX2FjdGlvbl9fLm5hbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbnNOYW1lc1tldmVudE5hbWVdID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ4ID0gUm94eShhY3Rpb25zTmFtZXMpO1xuICAgIC8vXG4gICAgcnguYWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnNOYW1lc1xuICAgIH07XG5cbiAgICByeC5ldmVudCgoZXZlbnRDdXJzb3IsIHZhbHVlcykgPT4ge1xuICAgICAgICBhY3Rpb25zLl9fYWN0aW9uX18uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50Q3Vyc29yID09PSBldmVudE5hbWUgJiYgdHlwZW9mIGFjdGlvbnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXS5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJ4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm94eUxpc3RlbmVyO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuZXhwb3J0IGNsYXNzIFNjZW5lQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGxheWVycyA9IHt9KSB7XG4gICAgICAgIHRoaXMuY3VycmVudCA9ICdkZWZhdWx0JztcbiAgICAgICAgdGhpcy5sYXllcnMgPSB7XG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbRGVmYXVsdCBTY2VuZV0nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBPYmplY3Qua2V5cyhsYXllcnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGQoa2V5LCBsYXllcnNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZChuYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmxheWVyc1tuYW1lXSA9IGNhbGxiYWNrO1xuICAgIH1cblxuICAgIGdldChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxheWVyc1tuYW1lXTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5sYXllcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSB0aGlzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXIobGVzdCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKGtleSA9ICdkZWZhdWx0Jykge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSBrZXk7XG4gICAgICAgIGNvbnN0IGNiID0gdGhpcy5sYXllcnNbdGhpcy5jdXJyZW50XTtcblxuICAgICAgICBpZiAodHlwZW9mIGNiID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNiLmNhbGwoY2IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvbmUobmFtZSkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfVxufVxuXG5jb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChsYXllcnMpIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBjdXJyZW50OiAnZGVmYXVsdCcsXG4gICAgICAgIGxheWVyczoge1xuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW0RlZmF1bHQgU2NlbmVdJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QubGF5ZXJzW25hbWVdID0gY2FsbGJhY2s7XG4gICAgfVxuXG4gICAgcm9vdC5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gcm9vdC5sYXllcnNbbmFtZV07XG4gICAgfVxuXG4gICAgcm9vdC5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm9vdC5sYXllcnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSByb290LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5zaG93KGxlc3QpO1xuICAgIH1cblxuICAgIHJvb3Quc2hvdyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcm9vdC5jdXJyZW50ID0ga2V5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgY29uc3QgY2IgPSByb290LmxheWVyc1tyb290LmN1cnJlbnRdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY2IuY2FsbChjYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIGlmIChsYXllcnMgJiYgbGF5ZXJzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGF5ZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QuYWRkKGtleSwgbGF5ZXJzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuLyoqXG4gKlxuICAgIGNvbnN0IHN0ZXBzQXR0YWNrSGVybyA9IFN0ZXBzU2NlbmUoe1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnc3RhcnRfYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGVyb19hdHRhY2tfYW5pbWF0aW9uJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdlbmRfYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZWFjaFN0ZXBzKGZ1bmN0aW9uIChjYk9iamVjdCwgaW5kZXgpIHt9KTtcbiAgICBzdGVwc0F0dGFja0hlcm8ubmV4dCgpO1xuXG4gICAgc3RlcHNBdHRhY2tIZXJvLmdvdG8oJ2hlcm9fYXR0YWNrX2FuaW1hdGlvbicpLm5leHQoKTtcbiAgICBzdGVwc0F0dGFja0hlcm8uc3RvcCgpO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHthbnl9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU3RlcHNTY2VuZSA9IGZ1bmN0aW9uIChjb25maWcgPSB7c3RlcHM6IFtdfSkge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGl0ZXJhdGlvbjogMCxcbiAgICAgICAgbG9vcDogY29uZmlnLmxvb3AgfHwgZmFsc2UsXG4gICAgICAgIHN0ZXBfaXRlcmF0aW9uOiAwLFxuICAgICAgICBzdGVwX3N0b3A6IGZhbHNlLFxuICAgICAgICBzdGVwX2NhbGxiYWNrX2VhY2g6IG51bGwsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tzOiBjb25maWcuc3RlcHMgfHwge30sXG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgcm9vdC5wbGF5KCk7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBzdG9wKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYXkoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXkobXMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2suY2FsbChyb290KTsgfSwgbXMpO1xuICAgICAgICB9LFxuICAgICAgICBnb3RvKG5hbWUpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja3MuZm9yRWFjaCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZWFjaFN0ZXBzKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX3N0b3ApIHJldHVybiByb290O1xuXG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX2l0ZXJhdGlvbiA+IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGlmICghcm9vdC5sb29wKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudENhbGxiYWNrT2JqZWN0ID0gcm9vdC5zdGVwX2NhbGxiYWNrc1tyb290LnN0ZXBfaXRlcmF0aW9uXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaC5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2tPYmplY3QuY2FsbGJhY2suY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgcm9vdC5pdGVyYXRpb24rK1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbisrXG5cbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwc1NjZW5lO1xuIiwiXG5jb25zdCBUaW1lciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKSB7XG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgdGhpcy5pdGVyYXRvciA9IDA7XG59O1xuXG5cblRpbWVyLnNldFRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnNldEludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhckludGVydmFsKGlkKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7IiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5cbmltcG9ydCBDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xpcC5qc1wiO1xuaW1wb3J0IENvbXBvbmVudCwge0NvbXBvbmVudENsYXNzfSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IEtleWJvYXJkRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanNcIjtcbmltcG9ydCBNb3ZlQ2xpcCwge01vdmVDbGlwQ2xhc3N9IGZyb20gXCIuL2NvbXBvbmVudHMvTW92ZUNsaXAuanNcIjtcbmltcG9ydCBTY2VuZSwge1NjZW5lQ2xhc3N9IGZyb20gXCIuL2NvbXBvbmVudHMvU2NlbmUuanNcIjtcbmltcG9ydCBTdGVwc1NjZW5lIGZyb20gXCIuL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qc1wiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL2NvbXBvbmVudHMvVGltZXIuanNcIjtcbmltcG9ydCBSb3h5TGlzdGVuZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanNcIjtcbmltcG9ydCBSb3h5IGZyb20gXCIuL2NvbXBvbmVudHMvUm94eS5qc1wiO1xuaW1wb3J0IFN0YXRpYyBmcm9tICcuL3N0YXRpYyc7XG5pbXBvcnQgQW5pbWF0aW9uRnJhbWUgZnJvbSBcIi4vY29tcG9uZW50cy9BbmltYXRpb25GcmFtZVwiO1xuXG5jb25zdCBBbmltYXRlID0ge1xuICAgIENsaXAsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbXBvbmVudENsYXNzLFxuICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgIE1vdmVDbGlwLFxuICAgIE1vdmVDbGlwQ2xhc3MsXG4gICAgU2NlbmUsXG4gICAgU2NlbmVDbGFzcyxcbiAgICBTdGVwc1NjZW5lLFxuICAgIFRpbWVyLFxuICAgIFJveHlMaXN0ZW5lcixcbiAgICBSb3h5LFxuICAgIEFuaW1hdGlvbkZyYW1lLFxufTtcblxuQW5pbWF0ZS5TdGF0aWMgPVxuICAgIEFuaW1hdGUuVXRpbCA9XG4gICAgICAgIFN0YXRpYztcblxuaWYgKGdldFdpbmRvdygpKSB7XG4gICAgZ2V0V2luZG93KCkuQW5pbWF0ZSA9IEFuaW1hdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIHRvXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gY2xvbmUoZnJvbSwgdG8pXG57XG4gICAgaWYgKGZyb20gPT09IG51bGwgfHwgdHlwZW9mIGZyb20gIT09IFwib2JqZWN0XCIpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yICE9PSBPYmplY3QgJiYgZnJvbS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yID09PSBEYXRlIHx8IGZyb20uY29uc3RydWN0b3IgPT09IFJlZ0V4cCB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBGdW5jdGlvbiB8fFxuICAgICAgICBmcm9tLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBmcm9tLmNvbnN0cnVjdG9yKGZyb20pO1xuICAgIH1cblxuICAgIHRvID0gdG8gfHwgbmV3IGZyb20uY29uc3RydWN0b3IoKTtcblxuICAgIGZvciAobmFtZSBpbiBmcm9tKVxuICAgIHtcbiAgICAgICAgdG9bbmFtZV0gPSB0eXBlb2YgdG9bbmFtZV0gPT0gXCJ1bmRlZmluZWRcIiA/IGNsb25lKGZyb21bbmFtZV0sIG51bGwpIDogdG9bbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi90eXBlT2ZTdHJpY3RcIjtcblxuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgaW5zdGFuY2UpXG57XG4gICAgaWYgKGlzTm9kZShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuc2xpY2UoKTtcblxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gc3JjLmJpbmQoaW5zdGFuY2UgfHwge30pO1xuXG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSkge1xuICAgICAgICAvLyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3JjKTtcbiAgICAgICAgY29uc29sZS5sb2coc3JjLCBpbnN0YW5jZSlcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gc3JjW2tleV07XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGNvcHkodmFsdWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gc3JjIDoge30pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weTtcbiIsIi8qXG5cbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1KTtcbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1LCB0cnVlKTtcbmNvbnN0IGFycjEgPSBjcmVhdGVBcnJheSg1LCAxKTtcbmNvbnN0IGFycjIgPSBjcmVhdGVBcnJheSg1LCAnaGVsbG8gd29ybGQnKTtcbmNvbnN0IGFycjMgPSBjcmVhdGVBcnJheSg1LCBbMTAwLDIwMCwzMDBdKTtcbmNvbnN0IGFycjQgPSBjcmVhdGVBcnJheSg1LCB7YTonQScsYjonQicsYzonQyd9KTtcblxuKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIG51bVxuICogQHBhcmFtIGZpbGxcbiAqIEByZXR1cm5zIHthbnlbXX1cbiAqL1xuY29uc3QgY3JlYXRlQXJyYXkgPSBmdW5jdGlvbiAobnVtLCBmaWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZmlsbCA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShudW0pLmZpbGwoZmlsbCk7XG4gICAgfVxuXG4gICAgYXJyID0gbmV3IEFycmF5KG51bSkuZmlsbCgwKTtcbiAgICBhcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCByID0gZmlsbC5jYWxsKGZpbGwsIGksIGkpO1xuICAgICAgICAgICAgYXJyW2ldID0gdHlwZW9mIHIgPT09ICdib29sZWFuJyB8fCByID8gciA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGwpKSBhcnJbaV0gPSBmaWxsW2ldID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBmaWxsW2ldIDtcbiAgICAgICAgZWxzZSBhcnJbaV0gPSBmaWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXJyYXk7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBhdHRycywgaW5uZXIpIHtcbiAgICBjb25zdFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICBpc19hdHRyID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihzcmMsICdvYmplY3QnKSAmJiAhaXNOb2RlKHNyYylcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2h0bWwgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2NoaWxkID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2h0bWwoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKVxuICAgICAgICAgICAgICAgIGluc2VydF9jaGlsZChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgaW5zZXJ0KHNyY1tpXSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNfYXR0cihhdHRycykpIHtcbiAgICAgICAgaW5uZXIgPSBhdHRycztcbiAgICAgICAgYXR0cnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpXG4gICAgICAgIGZvciAobGV0IGsgaW4gYXR0cnMpXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7XG5cbiAgICBpZiAoaW5uZXIpXG4gICAgICAgIGluc2VydChpbm5lcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5cbmNvbnN0IGNyZWF0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKGFwcGVuZCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgaWYgKGlzTm9kZShhcHBlbmQpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChhcHBlbmQpO1xuXG4gICAgaWYgKHR5cGVPZihhcHBlbmQsICdzdHJpbmcnKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3RyMm5vZGUoYXBwZW5kKSk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuXG5jb25zdCBjc3MgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFwcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHt9O1xuICAgICAgICBwcm9wW3Byb3BlcnRpZXNdID0gYXJndW1lbnRzWzJdO1xuICAgICAgICByZXR1cm4gY3NzKHNlbGVjdG9yLCBwcm9wKTtcbiAgICB9XG5cbiAgICBsZXQgaSwgaywgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICB0eXBlU2VsZWN0b3IgPSB0eXBlT2Yoc2VsZWN0b3IpLFxuICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGVPZihwcm9wZXJ0aWVzKSxcbiAgICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaSwgcDEgPSBzdHIuc3BsaXQoJzsnKSwgcDIsIHBuLCBpeCwgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcDIgPSBwMVtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHBuID0gcDJbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGl4ID0gcG4uaW5kZXhPZignLScpO1xuICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBuID0gcG4uc3Vic3RyaW5nKDAsIGl4KSArIHBuW2l4ICsgMV0udG9VcHBlckNhc2UoKSArIHBuLnN1YnN0cmluZyhpeCArIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwMi5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIG9bcG5dID0gcDJbMV0udHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuXG4gICAgc3dpdGNoICh0eXBlU2VsZWN0b3IpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcblxuICAgICAgICBpZiAodHlwZVByb3BlcnRpZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHBhcnNlKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGZvciAoaSBpbiBlbGVtZW50cylcbiAgICAgICAgICAgIGZvciAoayBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlW2tdID0gcHJvcGVydGllc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIlxuY29uc3QgZGVjb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBwYWlycyA9IChxdWVyeVswXSA9PT0gJz8nID8gcXVlcnkuc3Vic3RyKDEpIDogcXVlcnkpLnNwbGl0KCcmJyk7XG4gICAgcGFpcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0gfHwgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZDtcbiIsIlxuY29uc3QgZGVmaW5lZEluID0gZnVuY3Rpb24gKHN0YWNrLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdGFjayAmJiBzdGFja1t2YWx1ZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWRJbjtcbiIsImltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICBlbHNlXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpXG4gICAgICAgIH0sIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUxvYWRlZDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG4vKmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRtcCkge1xuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwobGlzdC5jaGlsZE5vZGVzKSwgY2FsbGJhY2ssIHRtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsqL1xuXG5jb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCBpbnN0YW5jZSA9IHt9KSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlT2YobGlzdCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoaSwgdiwgYSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgaSwgdiwgYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goW2xpc3RdLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChrZXkpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGtleSwgbGlzdFtrZXldLCBsaXN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGxpc3Quc3BsaXQoXCJcIiksIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IChuZXcgQXJyYXkobGlzdCkpLmZpbGwoMCk7XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChhcnIsIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiXG5jb25zdCBlbmNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0ICs9ICgocmVzdWx0Lmxlbmd0aCkgPyAnJicgOiAnPycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVHZXRRdWVyeTtcbiIsIlxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBzb3VyY2UpXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocGFyYW0pKVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcGFyYW1dID0gc291cmNlW3BhcmFtXTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZGVzdGluYXRpb247XG4gICAgfVxuXG4gICAgX18ucHJvdG90eXBlID0gc291cmNlLnByb3RvdHlwZTtcbiAgICBkZXN0aW5hdGlvbi5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGxldCBwcm9wZXJ0eTtcbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgICAgICAgZXh0ZW5kUmVjdXJzaXZlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAobGlzdCwgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IGksIHRtcCA9IFtdO1xuICAgIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSBcIm9iamVjdFwiKVxuICAgICAgICBsaXN0ID0gT2JqZWN0LnZhbHVlcyhsaXN0KTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICAgICAgdG1wLnB1c2gobGlzdFtpXSk7XG5cbiAgICByZXR1cm4gdG1wIDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kcyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXAgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb2N1bWVudDtcbiIsIlxuY29uc3QgZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvY2F0aW9uIG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJcbmNvbnN0IGdldFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aW5kb3cgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXaW5kb3c7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9nZXREb2N1bWVudFwiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vc3RhdGljL2dldFdpbmRvd1wiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9zdHIyZnJhZ21lbnRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBlbmNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2VuY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgZGVjb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9kZWNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9zdGF0aWMvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IGRlZmluZWRJbiBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRJblwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZXh0ZW5kLCB7ZXh0ZW5kUmVjdXJzaXZlfSAgZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi9zdGF0aWMvaXNFbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0XCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbG9hZEpTU3luYyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1N5bmNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgbnVtYmVyMnN0cmluZyBmcm9tIFwiLi4vc3RhdGljL251bWJlcjJzdHJpbmdcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmFuZG9tLCB7cmFuZG9tQ29sb3IsIHJhbmRvbUl0ZW0sIHJhbmRvbU51bWJlciwgcmFuZG9tU3RyaW5nLCByYW5kb21IdW1hbml6ZVN0cmluZ30gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCByZWRpcmVjdCBmcm9tIFwiLi4vc3RhdGljL3JlZGlyZWN0XCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgdXJpIGZyb20gXCIuLi9zdGF0aWMvdXJpXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IGNyZWF0ZUFycmF5IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlQXJyYXlcIjtcblxuY29uc3QgU3RhdGljID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGdldERvY3VtZW50LFxuICAgIGdldFdpbmRvdyxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCB0cnVlLCB0byk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ3N0cmluZycpKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3JjKVxuICAgICAgICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzcmMgPT09IFwiXCIgfHwgc3JjID09PSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHNyYyA9PT0gMCB8fCBzcmMgPT09IG51bGwgfHwgc3JjID09PSB1bmRlZmluZWQgfHwgc3JjID09PSBmYWxzZSB8fCBpc05hTihzcmMpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIiwiLy8gaW1wb3J0IERPTVBhcnNlciBmcm9tICdET01QYXJzZXInO1xuXG5jb25zdCBpc0hUTUxTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgLy8gY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgXCJ0ZXh0L3htbFwiKTtcbiAgICAvLyByZXR1cm4geG1sRG9jO1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICBcbiAgICBcbiAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzSFRNTFN0cmluZztcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBjb25zdCBkYXRhID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIExFVFRFUl9DT05TT05BTlQsIExFVFRFUl9WT1dFTCwgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNiwgd2l0aE51bWJlcnMgPSBmYWxzZSkge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSB3aXRoTnVtYmVyc1xuICAgICAgICA/IEFCQyArIE5VTUJFUlMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpXG4gICAgICAgIDogQUJDLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBmb3IgKGkgPSBzaXplOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHN0cmluZyArPSBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUh1bWFuaXplU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGNvbnNvbmFudCA9ICBMRVRURVJfQ09OU09OQU5ULnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbCA9ICBMRVRURVJfVk9XRUwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsRmlyc3QgPSAoTWF0aC5yYW5kb20oKSAqIDEwKSA+IDU7XG4gICAgZm9yIChpID0gc2l6ZSAvIDIgKyAxOyBpID4gMDsgaSAtLSkge1xuICAgICAgICBsZXQgczEgPSBjb25zb25hbnRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uc29uYW50Lmxlbmd0aCldO1xuICAgICAgICBsZXQgczIgPSB2b3dlbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2b3dlbC5sZW5ndGgpXTtcbiAgICAgICAgc3RyaW5nICs9IHZvd2VsRmlyc3QgPyBzMSArIHMyIDogczIgKyBzMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzaXplKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHJhbmRvbSBpdGVtIGZyb20gYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tSXRlbSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyW3JhbmRvbSgwLCBhcnIubGVuZ3RoLTEpXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tO1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uICh0bykge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBsb2MuaHJlZiA9IHRvIHx8IGRvYy5ocmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkaXJlY3Q7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuLyoqXG4gKiBzZWFyY2goICd1bCA+IGxpJywgICdkYXRhLWxpbmsnLCBOb2RlRWxlbWVudCk7XG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gYXR0clxuICogQHBhcmFtIGZyb21cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuY29uc3Qgc3RyMmZyYWdtZW50ID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVSYW5nZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cmluZyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBpLFxuICAgICAgICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpKTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMmZyYWdtZW50O1xuIiwiaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi9zdHIyZnJhZ21lbnRcIjtcblxuY29uc3Qgc3RyMm5vZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgZnJhZ21lbnQgPSBzdHIyZnJhZ21lbnQoc3RyaW5nKTtcblxuICAgIHN3aXRjaCAoZnJhZ21lbnQuY2hpbGRFbGVtZW50Q291bnQpIHtcbiAgICAgICAgY2FzZSAwOiBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmVzdWx0ID0gZnJhZ21lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICByZXN1bHQgPSBjb250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIybm9kZTtcbiIsIlxuY29uc3QgdG9PYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIDoge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvT2JqZWN0O1xuIiwiaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbmNvbnN0IHR5cGVPZiA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHNpbXBsZVR5cGVzID0gWydudWxsJywgJ2Jvb2xlYW4nLCAndW5kZWZpbmVkJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdudW1iZXInLCAnZGF0ZScsICdhcnJheScsICdvYmplY3QnXTtcbiAgICBsZXQgdCA9IHR5cGVPZlN0cmljdCh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2ltcGxlVHlwZXMuaW5kZXhPZih0KSA9PT0gLTEgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgdCA9ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2Y7XG4iLCJcbmNvbnN0IHR5cGVPZlN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2ZTdHJpY3Q7XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcblxuXG5jb25zdCB1cmkgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICB1cmkgPSB1cmkgfHwgbG9jLnBhdGhuYW1lO1xuICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXC8rL2lnLCAnLycpO1xuICAgIHJldHVybiB1cmkubGVuZ3RoID4gMSAmJiB1cmkuc2xpY2UoMCwgMSkgIT09ICcvJyA/ICcvJyArIHVyaSA6IHVyaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVyaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=