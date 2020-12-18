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

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

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
        root.element.appendChild(elem);
    };

    root.append = function (elem) {
        root.inject(elem, true);
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

var _node2str = __webpack_require__(/*! ../static/node2str */ "./src/static/node2str.js");

var _node2str2 = _interopRequireDefault(_node2str);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _isNumber = __webpack_require__(/*! ../functions/isNumber */ "./src/functions/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

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
        root.element.appendChild(elem);
    };

    root.append = function (elem) {
        root.inject(elem, true);
    };

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback);
    };

    // if (typeof root.complete === 'function'){
    //     root.complete.call(root);
    // }

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        }
    };

    root.research();

    if (params && (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object') {
        Object.keys(params).forEach(function (key) {
            root.method(key, params[key]);
        });
        root.update();
    }

    return root;
};

Transform.element = function (element, value) {
    if (Array.isArray(value)) {
        var props = [];
        value.forEach(function (prop) {
            props.push(prop);
        });
        (0, _stylizer2.default)(element, { transform: props.join(' ') });
    }
};

exports.default = Transform;

/***/ }),

/***/ "./src/functions/isNumber.js":
/*!***********************************!*\
  !*** ./src/functions/isNumber.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var isNumber = function isNumber(value) {
    return (typeof value === 'number' || value instanceof Number) && !isNaN(value);
};

exports.default = isNumber;

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
    Loader: _Loader2.default,
    Matrix: _Matrix2.default,
    Point: _Point2.default,
    Rectangle: _Rectangle2.default,
    Transform: _Transform2.default
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

var _toHTML = __webpack_require__(/*! ../static/toHTML */ "./src/static/toHTML.js");

var _toHTML2 = _interopRequireDefault(_toHTML);

var _toXML = __webpack_require__(/*! ../static/toXML */ "./src/static/toXML.js");

var _toXML2 = _interopRequireDefault(_toXML);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _uniqArray = __webpack_require__(/*! ../static/uniqArray */ "./src/static/uniqArray.js");

var _uniqArray2 = _interopRequireDefault(_uniqArray);

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
    uniqArray: _uniqArray2.default
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb3ZlQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Z1bmN0aW9ucy9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hYmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY2xvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jb3B5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRnJhZ21lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkSW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kb21Mb2FkZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZW5jb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9leHRlbmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9mb3JtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXREb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldExvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0V2luZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaHR0cFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzRW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0hUTUxTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRCbG9iZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNPTi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkVGV4dGZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbnVtYmVyMnN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMmZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHlsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvSFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9YTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91bmlxQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uRnJhbWUiLCJyb290IiwicmVxdWVzdElkIiwic3RhcnRwYWx5IiwicGF1c2VkIiwiY2FsbGJhY2siLCJkZWxheSIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJzdGVwIiwidGltZXN0YW1wIiwiY2FsbCIsImNhbmNlbCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhdXNlIiwic3RhcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIkNsaXBDbGFzcyIsImVsZW1lbnQiLCJwb3NpdGlvbiIsInNldFByb3BlcnRpZXMiLCJwYXJlbnQiLCJDbGlwIiwiYXBwZW5kQ2hpbGQiLCJOb2RlIiwibW92ZVRvIiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInBhcmVudE5vZGUiLCJ4IiwieSIsInNldEF0dHJpYnV0ZSIsImlkIiwicGFyZW50RWxlbWVudCIsImNvcHlUbyIsIm9uIiwiY2xvbmUiLCJzdHlsZSIsIm9iamVjdCIsImluamVjdCIsImVsZW0iLCJhcHBlbmQiLCJDb21wb25lbnRDbGFzc1Byb3BlcnRpZXMiLCJwcm9wcyIsInRlbXBsYXRlIiwib3ZlcnJpZGUiLCJiZWZvcmUiLCJpbml0IiwiZGF0YSIsImNvbXBsZXRlIiwibWV0aG9kcyIsIm5vZGUiLCJpbml0aWFsaXplZCIsImNvbXBsZXRlZCIsImNvbXBvbmVudHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudENsYXNzIiwicHJvcGVydGllcyIsInZhbHVlcyIsImxlbmd0aCIsImZvckVhY2giLCJiaW5kIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwiZG9jdW1lbnQiLCJDb21wb25lbnQiLCJsaXN0IiwibmFtZSIsImNsb25lZCIsImNsb25lTm9kZSIsImNvbmZpZyIsInJhbmRvbU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcCIsImNyZWF0ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudENoaWxkcmVuIiwiZmluZCIsIktleWJvYXJkRXZlbnRNYW5hZ2VyIiwic3RvcmFnZSIsImJhc2VDYWxsYmFja3NMaXN0IiwiYWRkU3RvcmFnZSIsImJhc2VDYWxsYmFjayIsInR5cGUiLCJrZXlDb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsInNldHVwTGlzdGVuZXJzIiwiYWRkIiwicm0iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWFjaCIsIndpdGhDb25kaXRpb25LZXkiLCJwcmVzcyIsInVwIiwiZG93biIsIkxvYWRlciIsImpzb24iLCJqc29ucyIsImphdmFzY3JpcHQiLCJpbWFnZXMiLCJhdWRpb3MiLCJ2aWRlb3MiLCJ2aWRlbyIsInNyYyIsIm9uZXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJzcmNzIiwib2JqIiwiaXRlbSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwic2NyaXB0cyIsIml0ZXJhdG9yIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInN1YnN0ciIsIm9ubG9hZCIsImUiLCJoZWFkIiwiaW1ncyIsImltZyIsImF1ZGlvIiwicHJlbG9hZCIsIk1hdHJpeCIsIm0xMSIsIm0xMiIsIm0yMSIsIm0yMiIsImd4IiwiZ3kiLCJNb3ZlQ2xpcENsYXNzIiwiY2xpcCIsInVuZGVmaW5lZCIsInZhbHVlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiTW92ZUNsaXAiLCJFcnJvciIsImNsb25lUHJvcGVydHkiLCJQb2ludCIsIlJlY3RhbmdsZSIsIlJveHkiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwiZGVmYXVsdCIsInByb3h5IiwiUHJveHkiLCJnZXQiLCJwcm9wIiwic2V0IiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJmaWxsIiwib2JzZXJ2ZSIsInRvIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsImluZGV4IiwicngiLCJldmVudEN1cnNvciIsIlNjZW5lQ2xhc3MiLCJsYXllcnMiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImxlc3QiLCJpIiwicmVuZGVyIiwiY2IiLCJTY2VuZSIsInNjZW5lcyIsImF0dHJzIiwiZ2V0Q3VycmVudFNjZW5lIiwibmV4dCIsInJ1biIsInNjZW5lIiwiYXBwbHkiLCJzaG93IiwiY29uc3RydWN0b3IiLCJTdGVwc1NjZW5lIiwic3RlcHMiLCJpdGVyYXRpb24iLCJsb29wIiwic3RlcF9pdGVyYXRpb24iLCJzdGVwX3N0b3AiLCJzdGVwX2NhbGxiYWNrX2VhY2giLCJzdGVwX2NhbGxiYWNrcyIsInBsYXkiLCJzdG9wIiwiZW5kIiwibXMiLCJzZXRUaW1lb3V0IiwiZ290byIsImVhY2hTdGVwcyIsImN1cnJlbnRDYWxsYmFja09iamVjdCIsIlRpbWVyIiwicmVwZWF0IiwidGhpc0luc3RhbmNlIiwidGhpc0luc3QiLCJpc05hTiIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsIlRyYW5zZm9ybSIsInBhcmFtcyIsInRyYW5zZm9ybV9vYmoiLCJ0cmFuc2Zvcm1fYXJyIiwidHJhbnNmb3JtIiwic3BsaXQiLCJmaWx0ZXIiLCJ0cmFuc2Zvcm1fc3RyaW5nIiwidXBkYXRlIiwiam9pbiIsInJlc2VhcmNoIiwibWV0aG9kIiwibXVsdGlwbHkiLCJleHQiLCJtYXRjaCIsIm51bSIsInBhcmFtIiwidHJpbSIsIm1hdGNoZWQiLCJpc051bWJlciIsIk51bWJlciIsIkFuaW1hdGUiLCJSQURJQU4iLCJERUdSRUVfQVNfUkFESUFOIiwiREVHUkVFXzM2MF9BU19SQURJQU4iLCJQSSIsIlJBRF9UT19ERUdSRUVTIiwiU3RhdGljIiwiVXRpbCIsIkxFVFRFUl9DT05TT05BTlQiLCJMRVRURVJfVk9XRUwiLCJBQkMiLCJOVU1CRVJTIiwiQU1QRVJTQU5EIiwiYXR0ciIsInR5cGVfZWxlbWVudCIsImFyZ3VtZW50cyIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImZyb20iLCJEYXRlIiwiUmVnRXhwIiwiRnVuY3Rpb24iLCJTdHJpbmciLCJCb29sZWFuIiwiY29weSIsImluc3RhbmNlIiwiY3JlYXRlQXJyYXkiLCJhcnIiLCJyIiwidGFnIiwiaW5uZXIiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRfY2hpbGQiLCJpbnNlcnQiLCJrIiwiY3JlYXRlRnJhZ21lbnQiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjc3MiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwidHlwZVNlbGVjdG9yIiwidHlwZVByb3BlcnRpZXMiLCJwYXJzZSIsInN0ciIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsImluZGV4T2YiLCJkZWNvZGVHZXRRdWVyeSIsInF1ZXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZGVmaW5lZCIsImRlZmluZWRJbiIsInN0YWNrIiwiZG9tTG9hZGVkIiwiZG9jIiwicXVlcnlTZWxlY3RvciIsInYiLCJhIiwiTm9kZUxpc3QiLCJsb29wcyIsImdldFBhcmVudCIsImVuY29kZUdldFF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXhpc3RzIiwiZXh0ZW5kIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJfXyIsInByb3RvdHlwZSIsImV4dGVuZFJlY3Vyc2l2ZSIsInByb3BlcnR5IiwiZmluZE9iamVjdCIsImF0dHJWYWx1ZSIsInRtcCIsImZpbmRPYmplY3RzIiwiZmluZHMiLCJmb3JtYXQiLCJzdHJpbmciLCJyZWciLCJyZXBsYWNlIiwibnVtYmVyIiwiZ2V0RG9jdW1lbnQiLCJnZXRMb2NhdGlvbiIsImxvY2F0aW9uIiwiZ2V0V2luZG93IiwiaHR0cFJlcXVlc3QiLCJzZW5kRGF0YSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3B0aW9ucyIsImFjdGlvbiIsInVybCIsImhyZWYiLCJoZWFkZXJzIiwidXNlRW5jb2RlIiwidXNlRm9ybURhdGEiLCJhc3luYyIsInVzZXIiLCJwYXNzd29yZCIsImNvbmNhdGVTdHJpbmciLCJGb3JtRGF0YSIsIkhUTUxGb3JtRWxlbWVudCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZE9wdGlvbnMiLCJzZW5kIiwic3RyMm5vZGUiLCJzdHIyZnJhZ21lbnQiLCJub2RlMnN0ciIsInF1ZXJ5QWxsIiwic2VhcmNoIiwiaXNFbXB0eSIsImlzTm9kZSIsImxvYWRDU1MiLCJsb2FkSlMiLCJsb2FkSlNTeW5jIiwibWVyZ2UiLCJudW1iZXIyc3RyaW5nIiwicG9zaXRpb25Nb3VzZSIsInJhbmRvbUNvbG9yIiwicmFuZG9tSXRlbSIsInJhbmRvbU51bWJlciIsInJhbmRvbVN0cmluZyIsInJhbmRvbUh1bWFuaXplU3RyaW5nIiwicmVkaXJlY3QiLCJ0eXBlT2YiLCJ0eXBlT2ZTdHJpY3QiLCJ1cmkiLCJ0b09iamVjdCIsImlzSFRNTFN0cmluZyIsImlzU3RyaW5nIiwiaXNEZWZpbmVkIiwibG9hZEJsb2JmaWxlIiwibG9hZEpTT04iLCJsb2FkVGV4dGZpbGUiLCJ0b0hUTUwiLCJ0b1hNTCIsInN0eWxpemVyIiwidW5pcUFycmF5IiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJ0cnVlc3QiLCJkaXYiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJibG9iIiwibGluayIsInJlbCIsImRvY3VtZW50RWxlbWVudCIsInRleHQiLCJvYmplY3QxIiwib2JqZWN0MiIsImNvbnRhaW5lciIsImFicyIsInBvdyIsImJ1YmJsZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImJvZHkiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwicm91bmQiLCJ0b3AiLCJsZWZ0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJNb3VzZUV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWluIiwibWF4IiwiZmxvb3IiLCJsZXR0ZXJzIiwiY29sb3IiLCJzaXplIiwiY2VpbCIsInJlcyIsIndpdGhOdW1iZXJzIiwiY29uc29uYW50Iiwidm93ZWwiLCJ2b3dlbEZpcnN0IiwiczEiLCJzMiIsImxvYyIsInF1ZXJ5RWxlbWVudHMiLCJoYXNBdHRyaWJ1dGUiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImZpcnN0Q2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0eWxlcyIsInBhcnNlciIsIkRPTVBhcnNlciIsInhtbERvYyIsInBhcnNlRnJvbVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YWdOYW1lIiwic2ltcGxlVHlwZXMiLCJ0Iiwic2VsZiIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBOzs7Ozs7Ozs7O0FBVUE7Ozs7O0FBS0EsSUFBTUEsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUN2QjtBQUNJLFFBQU1DLE9BQU87QUFDVEMsbUJBQVcsQ0FERjtBQUVUQyxtQkFBVyxDQUZGO0FBR1RDLGdCQUFRLEtBSEM7QUFJVEMsa0JBQVUsQ0FKRDtBQUtUQyxlQUFPLENBTEU7QUFNVEMsa0JBQVUsQ0FORDtBQU9UQyxrQkFBVTtBQVBELEtBQWI7O0FBVUFQLFNBQUtRLElBQUwsR0FBWSxVQUFVQyxTQUFWLEVBQXFCO0FBQzdCLFlBQUksQ0FBQ1QsS0FBS0UsU0FBVixFQUFxQkYsS0FBS0UsU0FBTCxHQUFpQk8sU0FBakI7QUFDckJULGFBQUtPLFFBQUwsR0FBZ0JFLFlBQVlULEtBQUtFLFNBQWpDOztBQUVBLFlBQUlGLEtBQUtJLFFBQVQsRUFBbUI7QUFDZkosaUJBQUtJLFFBQUwsQ0FBY00sSUFBZCxDQUFtQlYsSUFBbkIsRUFBeUJBLEtBQUtPLFFBQTlCO0FBQ0g7O0FBRUQsWUFBSVAsS0FBS00sUUFBTCxJQUFpQk4sS0FBS00sUUFBTCxHQUFnQk4sS0FBS08sUUFBMUMsRUFBb0Q7QUFDaERQLGlCQUFLVyxNQUFMO0FBQ0g7O0FBRURDLGVBQU9DLHFCQUFQLENBQTZCYixLQUFLUSxJQUFsQztBQUNBLFlBQUlSLEtBQUtHLE1BQVQsRUFBaUI7QUFDYlMsbUJBQU9DLHFCQUFQLENBQTZCYixLQUFLUSxJQUFsQztBQUNIO0FBQ0osS0FoQkQ7O0FBa0JBUixTQUFLYyxLQUFMLEdBQWEsWUFBWTtBQUNyQmQsYUFBS0csTUFBTCxHQUFjLENBQUNILEtBQUtHLE1BQXBCO0FBQ0gsS0FGRDs7QUFJQUgsU0FBS2UsS0FBTCxHQUFhLFVBQVVYLFFBQVYsRUFBb0I7QUFDN0IsWUFBSUEsUUFBSixFQUFjO0FBQ1ZKLGlCQUFLSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNIO0FBQ0QsZUFBT0osS0FBS0MsU0FBTCxHQUFpQlcsT0FBT0MscUJBQVAsQ0FBNkJiLEtBQUtRLElBQWxDLENBQXhCO0FBQ0gsS0FMRDs7QUFPQVIsU0FBS1csTUFBTCxHQUFjLFlBQVk7QUFDdEJDLGVBQU9JLG9CQUFQLENBQTRCaEIsS0FBS0MsU0FBakM7QUFDSCxLQUZEOztBQUlBLFdBQU9ELElBQVA7QUFDSCxDQTlDRDs7a0JBZ0RlRCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRWY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFYWtCLFMsV0FBQUEsUztBQUNULHVCQUFZQyxPQUFaLEVBQXFCO0FBQUE7O0FBQ2pCLGFBQUtDLFFBQUwsR0FBZ0Isd0JBQVNELE9BQVQsQ0FBaEI7QUFDQSxhQUFLQSxPQUFMLEdBQWVDLG1CQUFTRCxPQUF4QjtBQUNBLGFBQUtFLGFBQUw7QUFDSDs7OzsrQkFFTUMsTSxFQUFRO0FBQ1gsZ0JBQUlBLGtCQUFrQkMsSUFBdEIsRUFBNEI7QUFDeEIsdUJBQU9ELE9BQU9ILE9BQVAsQ0FBZUssV0FBZixDQUEyQixLQUFLTCxPQUFoQyxDQUFQO0FBQ0g7QUFDRCxnQkFBSUcsa0JBQWtCRyxJQUF0QixFQUE0QjtBQUN4Qix1QkFBT0gsT0FBT0UsV0FBUCxDQUFtQixLQUFLTCxPQUF4QixDQUFQO0FBQ0g7QUFDSjs7OytCQUVNRyxNLEVBQVE7QUFDWCxpQkFBS0gsT0FBTCxHQUFlLG9CQUFLLEtBQUtBLE9BQVYsQ0FBZjtBQUNBLGlCQUFLTyxNQUFMLENBQVlKLE1BQVo7QUFDSDs7OzJCQUVHSyxLLEVBQU90QixRLEVBQVU7QUFDakIsaUJBQUtjLE9BQUwsQ0FBYVMsZ0JBQWIsQ0FBOEJELEtBQTlCLEVBQXFDdEIsUUFBckM7QUFDSDs7O2dDQUVRO0FBQ0wsbUJBQU8scUJBQU0sSUFBTixDQUFQO0FBQ0g7Ozt3Q0FFZTtBQUNad0IsbUJBQU9DLElBQVAsQ0FBWSxLQUFLVixRQUFqQixFQUEyQlcsR0FBM0IsQ0FBK0IsVUFBVUMsR0FBVixFQUFlO0FBQzFDLG9CQUFJLE9BQU8sS0FBS0EsR0FBTCxDQUFQLEtBQXFCLFdBQXpCLEVBQXNDO0FBQ2xDLHlCQUFLQSxHQUFMLElBQVksS0FBS1osUUFBTCxDQUFjWSxHQUFkLENBQVo7QUFDSDtBQUNKLGFBSkQ7O0FBTUEsZ0JBQUksS0FBS2IsT0FBTCxZQUF3Qk0sSUFBNUIsRUFBa0M7QUFDOUIsb0JBQU1ILFNBQVMsd0JBQVMsS0FBS0gsT0FBTCxDQUFhYyxVQUF0QixDQUFmO0FBQ0EscUJBQUtDLENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVNaLE9BQU9ZLENBQXpCO0FBQ0EscUJBQUtDLENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVNiLE9BQU9hLENBQXpCO0FBQ0EscUJBQUtoQixPQUFMLENBQWFpQixZQUFiLENBQTBCLFdBQTFCLEVBQXdDLEtBQUtqQixPQUFMLENBQWFrQixFQUFiLElBQW1CLE1BQTNEO0FBQ0g7QUFDSjs7Ozs7QUFFTDs7Ozs7Ozs7QUFNQSxJQUFNZCxPQUFPLFNBQVBBLElBQU8sQ0FBVUosT0FBVixFQUNiO0FBQ0ksUUFBTWxCLE9BQU8sd0JBQVNrQixPQUFULENBQWI7O0FBRUEsUUFBSWxCLEtBQUtrQixPQUFMLFlBQXdCTSxJQUE1QixFQUFrQztBQUM5QixZQUFNSCxTQUFTLHdCQUFTSCxRQUFRYyxVQUFqQixDQUFmO0FBQ0FoQyxhQUFLaUMsQ0FBTCxHQUFTakMsS0FBS2lDLENBQUwsR0FBU1osT0FBT1ksQ0FBekI7QUFDQWpDLGFBQUtrQyxDQUFMLEdBQVNsQyxLQUFLa0MsQ0FBTCxHQUFTYixPQUFPYSxDQUF6QjtBQUNBbEMsYUFBS2tCLE9BQUwsQ0FBYWlCLFlBQWIsQ0FBMEIsV0FBMUIsRUFBdUNuQyxLQUFLa0IsT0FBTCxDQUFha0IsRUFBYixJQUFtQixNQUExRDtBQUNIOztBQUVEcEMsU0FBS3lCLE1BQUwsR0FBYyxVQUFVWSxhQUFWLEVBQXlCO0FBQ25DLFlBQUlBLHlCQUF5QmYsSUFBN0IsRUFBbUM7QUFDL0IsbUJBQU9lLGNBQWNuQixPQUFkLENBQXNCSyxXQUF0QixDQUFrQ3ZCLEtBQUtrQixPQUF2QyxDQUFQO0FBQ0g7QUFDRCxZQUFJbUIseUJBQXlCYixJQUE3QixFQUFtQztBQUMvQixtQkFBT2EsY0FBY2QsV0FBZCxDQUEwQnZCLEtBQUtrQixPQUEvQixDQUFQO0FBQ0g7QUFDSixLQVBEOztBQVNBbEIsU0FBS3NDLE1BQUwsR0FBYyxVQUFVRCxhQUFWLEVBQXlCO0FBQ25DckMsYUFBS2tCLE9BQUwsR0FBZSxvQkFBS2xCLEtBQUtrQixPQUFWLENBQWY7QUFDQWxCLGFBQUt5QixNQUFMLENBQVlZLGFBQVo7QUFDSCxLQUhEOztBQUtBckMsU0FBS3VDLEVBQUwsR0FBVSxVQUFVYixLQUFWLEVBQWlCdEIsUUFBakIsRUFBMkI7QUFDakNKLGFBQUtrQixPQUFMLENBQWFTLGdCQUFiLENBQThCRCxLQUE5QixFQUFxQ3RCLFFBQXJDO0FBQ0gsS0FGRDs7QUFJQUosU0FBS3dDLEtBQUwsR0FBYSxZQUFZO0FBQ3JCLGVBQU8scUJBQU0sSUFBTixDQUFQO0FBQ0gsS0FGRDs7QUFJQXhDLFNBQUt5QyxLQUFMLEdBQWEsVUFBVUMsTUFBVixFQUFrQjtBQUMzQixnQ0FBUzFDLEtBQUtrQixPQUFkLEVBQXVCd0IsTUFBdkI7QUFDSCxLQUZEOztBQUlBMUMsU0FBSzJDLE1BQUwsR0FBYyxVQUFVQyxJQUFWLEVBQStCO0FBQUEsWUFBZkMsTUFBZSx1RUFBTixJQUFNOztBQUN6QyxZQUFJLE9BQU9ELElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsZ0JBQUksNEJBQWFBLElBQWIsQ0FBSixFQUF3QjtBQUNwQkEsdUJBQU8sd0JBQVNBLElBQVQsQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNIQSx1QkFBTyxxQkFBTUEsSUFBTixDQUFQO0FBQ0g7QUFDSjtBQUNENUMsYUFBS2tCLE9BQUwsQ0FBYUssV0FBYixDQUF5QnFCLElBQXpCO0FBQ0gsS0FURDs7QUFXQTVDLFNBQUs2QyxNQUFMLEdBQWMsVUFBVUQsSUFBVixFQUFnQjtBQUMxQjVDLGFBQUsyQyxNQUFMLENBQVlDLElBQVosRUFBa0IsSUFBbEI7QUFDSCxLQUZEOztBQUlBLFdBQU81QyxJQUFQO0FBQ0gsQ0FyREQ7O2tCQXVEZXNCLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xIZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUdPLElBQU13Qiw4REFBMkI7QUFDcENWLFFBQUksSUFEZ0M7QUFFcENXLFdBQU8sRUFGNkI7QUFHcENDLGNBQVUsS0FIMEI7QUFJcEM5QixhQUFTLEtBSjJCO0FBS3BDK0IsY0FBVSxLQUwwQjtBQU1wQ0MsWUFBUSxrQkFBTSxDQUFFLENBTm9CO0FBT3BDQyxVQUFNLGdCQUFNLENBQUUsQ0FQc0I7QUFRcENDLFVBQU0sZ0JBQU0sQ0FBRSxDQVJzQjtBQVNwQ0MsY0FBVSxvQkFBTSxDQUFFLENBVGtCO0FBVXBDQyxhQUFTLEVBVjJCO0FBV3BDQyxVQUFNLEVBWDhCO0FBWXBDaEIsUUFBSSxFQVpnQztBQWFwQ2lCLGlCQUFhLEtBYnVCO0FBY3BDQyxlQUFXLEtBZHlCO0FBZXBDQyxnQkFBWSxFQWZ3QjtBQWdCcENDLGNBQVUsRUFoQjBCO0FBaUJwQ3RDLFlBQVE7QUFqQjRCLENBQWpDOztBQW9CUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQmF1QyxjLFdBQUFBLGM7QUFFVDs7OztBQUlBLDhCQUNBO0FBQUE7O0FBQUEsWUFEWUMsVUFDWix1RUFEeUIsRUFDekI7O0FBQUE7O0FBQ0ksYUFBS3pDLGFBQUwsQ0FBbUJ5QyxVQUFuQjs7QUFFQSxZQUFJLE9BQU8sS0FBS1gsTUFBWixLQUF1QixVQUF2QixJQUFxQyxDQUFDLEtBQUtNLFdBQS9DLEVBQTREO0FBQ3hELGlCQUFLTixNQUFMO0FBQ0g7QUFDRCxZQUFJLE9BQU8sS0FBS2hDLE9BQVosS0FBd0IsUUFBNUIsRUFBc0M7QUFDbEMsZ0JBQUcsNEJBQWEsS0FBS0EsT0FBbEIsQ0FBSCxFQUErQjtBQUMzQixxQkFBS0EsT0FBTCxHQUFlLHdCQUFTLEtBQUtBLE9BQWQsQ0FBZjtBQUNILGFBRkQsTUFFTztBQUNILHFCQUFLQSxPQUFMLEdBQWUscUJBQU0sS0FBS0EsT0FBWCxDQUFmO0FBQ0g7QUFDSjs7QUFFRCxZQUFJLEtBQUtvQyxPQUFMLElBQWdCMUIsT0FBT2tDLE1BQVAsQ0FBYyxLQUFLUixPQUFuQixFQUE0QlMsTUFBaEQsRUFBd0Q7QUFDcERuQyxtQkFBT0MsSUFBUCxDQUFZLEtBQUt5QixPQUFqQixFQUEwQlUsT0FBMUIsQ0FBa0MsVUFBQ2pDLEdBQUQsRUFBUztBQUN2QyxvQkFBSSxPQUFPLE1BQUt1QixPQUFMLENBQWF2QixHQUFiLENBQVAsS0FBNkIsVUFBakMsRUFBNkM7QUFDekMsMEJBQUt1QixPQUFMLENBQWF2QixHQUFiLElBQW9CLE1BQUt1QixPQUFMLENBQWF2QixHQUFiLEVBQWtCa0MsSUFBbEIsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQSx3QkFBSSxDQUFDLE1BQUtDLGNBQUwsQ0FBb0JuQyxHQUFwQixDQUFMLEVBQStCO0FBQzNCLDhCQUFLQSxHQUFMLElBQVksTUFBS3VCLE9BQUwsQ0FBYXZCLEdBQWIsQ0FBWjtBQUNIO0FBQ0o7QUFDSixhQVBEO0FBUUg7O0FBRUQsWUFBSSxPQUFPLEtBQUtvQixJQUFaLEtBQXFCLFVBQXJCLElBQW1DLENBQUMsS0FBS0ssV0FBN0MsRUFBeUQ7QUFDckQsaUJBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxpQkFBS0wsSUFBTDtBQUNIOztBQUVELFlBQUksS0FBS0MsSUFBTCxJQUFheEIsT0FBT0MsSUFBUCxDQUFZLEtBQUt1QixJQUFqQixFQUF1QlcsTUFBeEMsRUFBZ0Q7QUFDNUNuQyxtQkFBT0MsSUFBUCxDQUFZLEtBQUt1QixJQUFqQixFQUF1QlksT0FBdkIsQ0FBK0IsVUFBQ2pDLEdBQUQsRUFBUztBQUNwQyxvQkFBSSxPQUFPLE1BQUtxQixJQUFMLENBQVVyQixHQUFWLENBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDdEMsMEJBQUtxQixJQUFMLENBQVVyQixHQUFWLElBQWlCLE1BQUtxQixJQUFMLENBQVVyQixHQUFWLEVBQWVrQyxJQUFmLENBQW9CLEtBQXBCLENBQWpCO0FBQ0g7QUFDRCxvQkFBSSxDQUFDLE1BQUtDLGNBQUwsQ0FBb0JuQyxHQUFwQixDQUFMLEVBQStCO0FBQzNCLDBCQUFLQSxHQUFMLElBQVksTUFBS3FCLElBQUwsQ0FBVXJCLEdBQVYsQ0FBWjtBQUNIO0FBQ0osYUFQRDtBQVFIOztBQUVELFlBQUksS0FBSzJCLFVBQUwsSUFBbUI5QixPQUFPQyxJQUFQLENBQVksS0FBSzZCLFVBQWpCLEVBQTZCSyxNQUFwRCxFQUE0RDtBQUN4RG5DLG1CQUFPQyxJQUFQLENBQVksS0FBSzZCLFVBQWpCLEVBQTZCTSxPQUE3QixDQUFxQyxVQUFDakMsR0FBRCxFQUFTO0FBQzFDLG9CQUFLLE1BQUsyQixVQUFMLENBQWdCM0IsR0FBaEIsS0FBd0IsTUFBSzJCLFVBQUwsQ0FBZ0IzQixHQUFoQixFQUFxQm1DLGNBQXJCLENBQW9DLEtBQXBDLENBQTdCLEVBQXlFO0FBQ3JFLDBCQUFLUixVQUFMLENBQWdCM0IsR0FBaEIsRUFBcUJWLE1BQXJCLEdBQThCLEtBQTlCO0FBQ0g7QUFDRCxzQkFBS3NDLFFBQUwsQ0FBY1EsSUFBZCxDQUFtQixNQUFLVCxVQUFMLENBQWdCM0IsR0FBaEIsQ0FBbkI7QUFDSCxhQUxEO0FBTUg7O0FBRUQsWUFBSSxLQUFKLEVBQW1DLEVBR2xDOztBQUVELFlBQUksT0FBTyxLQUFLc0IsUUFBWixLQUF5QixVQUF6QixJQUF1QyxDQUFDLEtBQUtJLFNBQWpELEVBQTREO0FBQ3hELGdCQUFJVyxRQUFKLEVBQWM7QUFDVkEseUJBQVN6QyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRCwwQkFBSzhCLFNBQUwsR0FBaUIsSUFBakI7QUFDQSwwQkFBS0osUUFBTCxDQUFjM0MsSUFBZCxDQUFtQixNQUFLMkMsUUFBeEIsRUFBa0MsS0FBbEM7QUFDSCxpQkFIRDtBQUlILGFBTEQsTUFLTztBQUNILHFCQUFLSSxTQUFMLEdBQWlCLElBQWpCO0FBQ0EscUJBQUtKLFFBQUwsQ0FBYzNDLElBQWQsQ0FBbUIsS0FBSzJDLFFBQXhCLEVBQWtDLElBQWxDO0FBQ0g7QUFDSjs7QUFFRGdCLGtCQUFVQyxJQUFWLENBQWUsS0FBS2xDLEVBQXBCLElBQTBCLElBQTFCO0FBQ0g7Ozs7a0NBWVNtQyxJLEVBQU07QUFDWixtQkFBT1gsZUFBZVUsSUFBZixDQUFvQkMsSUFBcEIsQ0FBUDtBQUNIOzs7MENBQ2lCQSxJLEVBQU07QUFDcEIsbUJBQU9YLGVBQWVVLElBQWYsQ0FBb0JDLElBQXBCLENBQVA7QUFDSDs7OzhCQUNLbkMsRSxFQUFJO0FBQ04sZ0JBQU1vQyxTQUFTLHFCQUFNLElBQU4sQ0FBZjtBQUNBQSxtQkFBT3hCLFFBQVAsR0FBa0J3QixPQUFPeEIsUUFBUCxDQUFnQnlCLFNBQWhCLENBQTBCLElBQTFCLENBQWxCO0FBQ0EsbUJBQU9ELE1BQVA7QUFDSDs7O3NDQUNhWCxVLEVBQVk7QUFDdEJBLHlCQUFhLHFCQUFNZix3QkFBTixFQUFnQ2UsVUFBaEMsQ0FBYjtBQUNBakMsbUJBQU9DLElBQVAsQ0FBWWdDLFVBQVosRUFBd0IvQixHQUF4QixDQUE0QixVQUFVQyxHQUFWLEVBQWU7QUFDdkMsb0JBQUksT0FBTyxLQUFLQSxHQUFMLENBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFDbEMseUJBQUtBLEdBQUwsSUFBWThCLFdBQVc5QixHQUFYLENBQVo7QUFDSDtBQUNKLGFBSkQ7QUFLQSxtQkFBTzhCLFVBQVA7QUFDSDs7OzBCQTlCYWIsUSxFQUFVO0FBQ3BCLGdCQUFJLE9BQU9BLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUIscUJBQUs5QixPQUFMLEdBQWUsd0JBQVM4QixRQUFULENBQWY7QUFDSDtBQUNELGdCQUFJLHNCQUFPQSxRQUFQLENBQUosRUFBc0I7QUFDbEIscUJBQUs5QixPQUFMLEdBQWU4QixRQUFmO0FBQ0g7QUFDSixTOzRCQUNlO0FBQ1osbUJBQU8sS0FBSzlCLE9BQVo7QUFDSDs7Ozs7O0FBc0JMMEMsZUFBZVUsSUFBZixHQUFzQixFQUF0Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBLElBQU1ELFlBQVksU0FBWkEsU0FBWSxDQUFVSyxNQUFWLEVBQ2xCO0FBQ0ksUUFBSSxPQUFPQSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCO0FBQ0EsZUFBT0wsVUFBVUMsSUFBVixDQUFlSSxNQUFmLENBQVA7QUFDSCxLQUhELE1BR087QUFDSCxZQUFJLENBQUNBLE9BQU90QyxFQUFaLEVBQWdCO0FBQ1osZ0JBQUl1QyxhQUFjLGtDQUFxQixDQUFyQixFQUF3QkMsV0FBeEIsRUFBbEI7QUFDQUQseUJBQWFBLFdBQVdFLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkJDLFdBQTNCLEtBQTJDSCxXQUFXRSxTQUFYLENBQXFCLENBQXJCLENBQXhEO0FBQ0FILG1CQUFPdEMsRUFBUCxHQUFZLGNBQWN1QyxVQUExQjtBQUNIOztBQUVELFlBQUlOLFVBQVVDLElBQVYsQ0FBZUksT0FBT3RDLEVBQXRCLENBQUosRUFBK0I7QUFDM0IsbUJBQU9pQyxVQUFVQyxJQUFWLENBQWVJLE9BQU90QyxFQUF0QixDQUFQO0FBQ0g7O0FBRUQsWUFBTTJDLE9BQU9WLFVBQVVXLE1BQVYsQ0FBaUJOLE1BQWpCLENBQWI7O0FBRUFLLGFBQUtFLFNBQUwsR0FBaUIsVUFBVTdDLEVBQVYsRUFBYztBQUMzQixtQkFBTzJDLEtBQUtyQixVQUFMLENBQWdCdEIsRUFBaEIsSUFBc0IyQyxLQUFLckIsVUFBTCxDQUFnQnRCLEVBQWhCLENBQXRCLEdBQTRDLElBQW5EO0FBQ0gsU0FGRDs7QUFJQTJDLGFBQUtHLGlCQUFMLEdBQXlCLFVBQVU5QyxFQUFWLEVBQWM7QUFDbkMsbUJBQU8yQyxLQUFLcEIsUUFBTCxDQUFjd0IsSUFBZCxDQUFtQixVQUFDRixTQUFEO0FBQUEsdUJBQWVBLFVBQVU3QyxFQUFWLEtBQWlCQSxFQUFoQztBQUFBLGFBQW5CLENBQVA7QUFDSCxTQUZEOztBQUlBMkMsYUFBS3ZDLEtBQUwsR0FBYSxVQUFVSixFQUFWLEVBQWM7QUFDdkIsZ0JBQU1vQyxTQUFTLHFCQUFNLElBQU4sQ0FBZjtBQUNBQSxtQkFBT3hCLFFBQVAsR0FBa0J3QixPQUFPeEIsUUFBUCxDQUFnQnlCLFNBQWhCLENBQTBCLElBQTFCLENBQWxCO0FBQ0EsbUJBQU9ELE1BQVA7QUFDSCxTQUpEOztBQU1BLFlBQUksT0FBT08sS0FBSzdCLE1BQVosS0FBdUIsVUFBdkIsSUFBcUMsQ0FBQzZCLEtBQUt2QixXQUEvQyxFQUEyRDtBQUN2RHVCLGlCQUFLN0IsTUFBTDtBQUNIOztBQUVELFlBQUksT0FBTzZCLEtBQUsvQixRQUFaLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ25DLGdCQUFHLDRCQUFhK0IsS0FBSy9CLFFBQWxCLENBQUgsRUFBZ0M7QUFDNUIrQixxQkFBSy9CLFFBQUwsR0FBZ0Isd0JBQVMrQixLQUFLL0IsUUFBZCxDQUFoQjtBQUNILGFBRkQsTUFFTztBQUNIK0IscUJBQUsvQixRQUFMLEdBQWdCLHFCQUFNK0IsS0FBSy9CLFFBQVgsQ0FBaEI7QUFDSDtBQUNKOztBQUVELFlBQUkrQixLQUFLekIsT0FBTCxJQUFnQjFCLE9BQU9rQyxNQUFQLENBQWNpQixLQUFLekIsT0FBbkIsRUFBNEJTLE1BQWhELEVBQXdEO0FBQ3BEbkMsbUJBQU9DLElBQVAsQ0FBWWtELEtBQUt6QixPQUFqQixFQUEwQlUsT0FBMUIsQ0FBa0MsVUFBQ2pDLEdBQUQsRUFBUztBQUN2QyxvQkFBSSxPQUFPZ0QsS0FBS3pCLE9BQUwsQ0FBYXZCLEdBQWIsQ0FBUCxLQUE2QixVQUFqQyxFQUE2QztBQUN6Q2dELHlCQUFLekIsT0FBTCxDQUFhdkIsR0FBYixJQUFvQmdELEtBQUt6QixPQUFMLENBQWF2QixHQUFiLEVBQWtCa0MsSUFBbEIsQ0FBdUJjLElBQXZCLENBQXBCO0FBQ0Esd0JBQUksQ0FBQ0EsS0FBS2IsY0FBTCxDQUFvQm5DLEdBQXBCLENBQUwsRUFBK0I7QUFDM0JnRCw2QkFBS2hELEdBQUwsSUFBWWdELEtBQUt6QixPQUFMLENBQWF2QixHQUFiLENBQVo7QUFDSDtBQUNKO0FBQ0osYUFQRDtBQVFIOztBQUVELFlBQUksT0FBT2dELEtBQUs1QixJQUFaLEtBQXFCLFVBQXJCLElBQW1DLENBQUM0QixLQUFLdkIsV0FBN0MsRUFBeUQ7QUFDckR1QixpQkFBS3ZCLFdBQUwsR0FBbUIsSUFBbkI7QUFDQXVCLGlCQUFLNUIsSUFBTDtBQUNIOztBQUVELFlBQUk0QixLQUFLM0IsSUFBTCxJQUFheEIsT0FBT0MsSUFBUCxDQUFZa0QsS0FBSzNCLElBQWpCLEVBQXVCVyxNQUF4QyxFQUFnRDtBQUM1Q25DLG1CQUFPQyxJQUFQLENBQVlrRCxLQUFLM0IsSUFBakIsRUFBdUJZLE9BQXZCLENBQStCLFVBQUNqQyxHQUFELEVBQVM7QUFDcEMsb0JBQUksT0FBT2dELEtBQUszQixJQUFMLENBQVVyQixHQUFWLENBQVAsS0FBMEIsVUFBOUIsRUFBMEM7QUFDdENnRCx5QkFBSzNCLElBQUwsQ0FBVXJCLEdBQVYsSUFBaUJnRCxLQUFLM0IsSUFBTCxDQUFVckIsR0FBVixFQUFla0MsSUFBZixDQUFvQmMsSUFBcEIsQ0FBakI7QUFDSDtBQUNELG9CQUFJLENBQUNBLEtBQUtiLGNBQUwsQ0FBb0JuQyxHQUFwQixDQUFMLEVBQStCO0FBQzNCZ0QseUJBQUtoRCxHQUFMLElBQVlnRCxLQUFLM0IsSUFBTCxDQUFVckIsR0FBVixDQUFaO0FBQ0g7QUFDSixhQVBEO0FBUUg7O0FBRUQsWUFBSWdELEtBQUtyQixVQUFMLElBQW1COUIsT0FBT0MsSUFBUCxDQUFZa0QsS0FBS3JCLFVBQWpCLEVBQTZCSyxNQUFwRCxFQUE0RDtBQUN4RG5DLG1CQUFPQyxJQUFQLENBQVlrRCxLQUFLckIsVUFBakIsRUFBNkJNLE9BQTdCLENBQXFDLFVBQUNqQyxHQUFELEVBQVM7QUFDMUMsb0JBQUtnRCxLQUFLckIsVUFBTCxDQUFnQjNCLEdBQWhCLEtBQXdCZ0QsS0FBS3JCLFVBQUwsQ0FBZ0IzQixHQUFoQixFQUFxQm1DLGNBQXJCLENBQW9DLEtBQXBDLENBQTdCLEVBQXlFO0FBQ3JFYSx5QkFBS3JCLFVBQUwsQ0FBZ0IzQixHQUFoQixFQUFxQlYsTUFBckIsR0FBOEIwRCxJQUE5QjtBQUNIO0FBQ0RBLHFCQUFLcEIsUUFBTCxDQUFjUSxJQUFkLENBQW1CWSxLQUFLckIsVUFBTCxDQUFnQjNCLEdBQWhCLENBQW5CO0FBQ0gsYUFMRDtBQU1IOztBQUVELFlBQUksc0JBQU9nRCxLQUFLL0IsUUFBWixDQUFKLEVBQTJCO0FBQ3ZCK0IsaUJBQUt4QixJQUFMLEdBQVksc0JBQU8sYUFBUCxFQUFzQixXQUF0QixFQUFtQ3dCLEtBQUsvQixRQUF4QyxDQUFaO0FBQ0ErQixpQkFBS3hDLEVBQUwsR0FBVSxzQkFBTyxXQUFQLEVBQW9CLFNBQXBCLEVBQStCd0MsS0FBSy9CLFFBQXBDLENBQVY7QUFDSDs7QUFFRCxZQUFJLE9BQU8rQixLQUFLMUIsUUFBWixLQUF5QixVQUF6QixJQUF1QyxDQUFDMEIsS0FBS3RCLFNBQWpELEVBQTREO0FBQ3hELGdCQUFJVyxRQUFKLEVBQWM7QUFDVkEseUJBQVN6QyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoRG9ELHlCQUFLdEIsU0FBTCxHQUFpQixJQUFqQjtBQUNBc0IseUJBQUsxQixRQUFMLENBQWMzQyxJQUFkLENBQW1CcUUsSUFBbkIsRUFBeUJBLElBQXpCO0FBQ0gsaUJBSEQ7QUFJSCxhQUxELE1BS087QUFDSEEscUJBQUt0QixTQUFMLEdBQWlCLElBQWpCO0FBQ0FzQixxQkFBSzFCLFFBQUwsQ0FBYzNDLElBQWQsQ0FBbUJxRSxJQUFuQixFQUF5QkEsSUFBekI7QUFDSDtBQUNKOztBQUVEVixrQkFBVUMsSUFBVixDQUFlUyxLQUFLM0MsRUFBcEIsSUFBMEIyQyxJQUExQjtBQUNBLGVBQU9BLElBQVA7QUFDSDtBQUNKLENBcEdEO0FBcUdBVixVQUFVQyxJQUFWLEdBQWlCLEVBQWpCO0FBQ0FELFVBQVVXLE1BQVYsR0FBbUIsVUFBVU4sTUFBVixFQUFrQjtBQUNqQyxXQUFPLHFCQUFPO0FBQ1Z0QyxZQUFJLElBRE07QUFFVlcsZUFBTyxFQUZHO0FBR1ZDLGtCQUFVLEtBSEE7QUFJVkMsa0JBQVUsS0FKQTtBQUtWRSxjQUFNLGdCQUFNLENBQUUsQ0FMSjtBQU1WRSxrQkFBVSxvQkFBTSxDQUFFLENBTlI7QUFPVkMsaUJBQVMsRUFQQztBQVFWQyxjQUFNLEVBUkk7QUFTVkMscUJBQWEsS0FUSDtBQVVWQyxtQkFBVyxLQVZEO0FBV1ZDLG9CQUFZLEVBWEY7QUFZVkMsa0JBQVUsRUFaQTtBQWFWdEMsZ0JBQVE7QUFiRSxLQUFQLEVBY0pxRCxNQWRJLENBQVA7QUFlSCxDQWhCRDs7a0JBa0JlTCxTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xVZjs7Ozs7Ozs7QUFRQSxJQUFNZSx1QkFBdUIsU0FBdkJBLG9CQUF1QixHQUM3QjtBQUNJLFFBQU1DLFVBQVUsRUFBaEI7QUFDQSxRQUFNQyxvQkFBb0IsRUFBMUI7QUFDQSxRQUFNQyxhQUFhLFNBQWJBLFVBQWEsQ0FBVTdELEtBQVYsRUFBaUJLLEdBQWpCLEVBQXNCM0IsUUFBdEIsRUFBZ0M7QUFDL0MsWUFBSSxDQUFDaUYsUUFBUTNELEtBQVIsQ0FBTCxFQUFxQjJELFFBQVEzRCxLQUFSLElBQWlCLEVBQWpCO0FBQ3JCLFlBQUksQ0FBQzJELFFBQVEzRCxLQUFSLEVBQWVLLEdBQWYsQ0FBTCxFQUEwQnNELFFBQVEzRCxLQUFSLEVBQWVLLEdBQWYsSUFBc0IsRUFBdEI7QUFDMUJzRCxnQkFBUTNELEtBQVIsRUFBZUssR0FBZixFQUFvQm9DLElBQXBCLENBQXlCL0QsUUFBekI7O0FBRUEsWUFBSSxPQUFPa0Ysa0JBQWtCNUQsS0FBbEIsQ0FBUCxLQUFvQyxVQUF4QyxFQUFvRDtBQUNoRDRELDhCQUFrQjVELEtBQWxCLElBQTJCOEQsWUFBM0I7QUFDSDtBQUNKLEtBUkQ7QUFTQSxRQUFNQSxlQUFlLFNBQWZBLFlBQWUsQ0FBVTlELEtBQVYsRUFBaUI7QUFDbENFLGVBQU9DLElBQVAsQ0FBWXdELE9BQVosRUFBcUJ2RCxHQUFyQixDQUF5QixVQUFDMkQsSUFBRCxFQUFVO0FBQy9CN0QsbUJBQU9DLElBQVAsQ0FBWXdELFFBQVFJLElBQVIsQ0FBWixFQUEyQjNELEdBQTNCLENBQStCLFVBQUM0RCxPQUFELEVBQWE7QUFDeEMsb0JBQUlDLE1BQU1DLE9BQU4sQ0FBZVAsUUFBUUksSUFBUixFQUFjQyxPQUFkLENBQWYsQ0FBSixFQUE2QztBQUN6Q0wsNEJBQVFJLElBQVIsRUFBY0MsT0FBZCxFQUF1QjVELEdBQXZCLENBQTJCLFVBQUMxQixRQUFELEVBQWM7QUFDckMsNEJBQUlzQixNQUFNK0QsSUFBTixLQUFlQSxJQUFmLElBQXVCSSxTQUFTSCxPQUFULE1BQXNCaEUsTUFBTWdFLE9BQXZELEVBQWlFO0FBQzdEdEYscUNBQVNNLElBQVQsQ0FBY2dCLEtBQWQsRUFBcUJBLEtBQXJCO0FBQ0g7QUFDSixxQkFKRDtBQUtIO0FBQ0osYUFSRDtBQVNILFNBVkQ7QUFXSCxLQVpEOztBQWNBLFFBQU1vRSxvQkFBb0IsRUFBMUI7QUFDQSxRQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBVXJFLEtBQVYsRUFBaUJ0QixRQUFqQixFQUEyQjtBQUM1QzBGLDBCQUFrQnBFLEtBQWxCLElBQTJCdEIsUUFBM0I7QUFDSCxLQUZEOztBQUlBLGFBQVM0RixjQUFULEdBQTJCO0FBQ3ZCLFlBQU1DLE1BQU0sU0FBTkEsR0FBTSxHQUFNO0FBQ2RyRSxtQkFBT0MsSUFBUCxDQUFZeUQsaUJBQVosRUFBK0J4RCxHQUEvQixDQUFtQyxVQUFVSixLQUFWLEVBQWlCO0FBQ2hEMEMseUJBQVN6QyxnQkFBVCxDQUEwQkQsS0FBMUIsRUFBaUM0RCxrQkFBa0I1RCxLQUFsQixDQUFqQztBQUNILGFBRkQ7QUFHQUUsbUJBQU9DLElBQVAsQ0FBWWlFLGlCQUFaLEVBQStCaEUsR0FBL0IsQ0FBbUMsVUFBVUosS0FBVixFQUFpQjtBQUNoRDBDLHlCQUFTekMsZ0JBQVQsQ0FBMEJELEtBQTFCLEVBQWlDb0Usa0JBQWtCcEUsS0FBbEIsQ0FBakM7QUFDSCxhQUZEO0FBR0gsU0FQRDtBQVFBLFlBQU13RSxLQUFLLFNBQUxBLEVBQUssR0FBTTtBQUNidEUsbUJBQU9DLElBQVAsQ0FBWXlELGlCQUFaLEVBQStCeEQsR0FBL0IsQ0FBbUMsVUFBVUosS0FBVixFQUFpQjtBQUNoRDBDLHlCQUFTK0IsbUJBQVQsQ0FBNkJ6RSxLQUE3QixFQUFvQzRELGtCQUFrQjVELEtBQWxCLENBQXBDO0FBQ0gsYUFGRDtBQUdBRSxtQkFBT0MsSUFBUCxDQUFZaUUsaUJBQVosRUFBK0JoRSxHQUEvQixDQUFtQyxVQUFVSixLQUFWLEVBQWlCO0FBQ2hEMEMseUJBQVMrQixtQkFBVCxDQUE2QnpFLEtBQTdCLEVBQW9Db0Usa0JBQWtCcEUsS0FBbEIsQ0FBcEM7QUFDSCxhQUZEO0FBR0gsU0FQRDtBQVFBd0U7QUFDQUQ7QUFDSDs7QUFFRCxRQUFNakcsT0FBTztBQUNUb0csWUFEUyxnQkFDSjFFLEtBREksRUFDR3RCLFFBREgsRUFDYTtBQUNsQjJGLHlCQUFhckUsS0FBYixFQUFvQnRCLFFBQXBCO0FBQ0E0RjtBQUNILFNBSlE7QUFLVEssd0JBTFMsNEJBS1EzRSxLQUxSLEVBS2VLLEdBTGYsRUFLb0IzQixRQUxwQixFQUs4QjtBQUNuQ21GLHVCQUFXN0QsS0FBWCxFQUFrQkssR0FBbEIsRUFBdUIzQixRQUF2QjtBQUNBNEY7QUFDSCxTQVJRO0FBU1RNLGFBVFMsaUJBU0h2RSxHQVRHLEVBU0UzQixRQVRGLEVBU1k7QUFDakJKLGlCQUFLcUcsZ0JBQUwsQ0FBc0IsVUFBdEIsRUFBa0N0RSxHQUFsQyxFQUF1QzNCLFFBQXZDO0FBQ0gsU0FYUTtBQVlUbUcsVUFaUyxjQVlOeEUsR0FaTSxFQVlEM0IsUUFaQyxFQVlTO0FBQ2RKLGlCQUFLcUcsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0J0RSxHQUEvQixFQUFvQzNCLFFBQXBDO0FBQ0gsU0FkUTtBQWVUb0csWUFmUyxnQkFlSnpFLEdBZkksRUFlQzNCLFFBZkQsRUFlVztBQUNoQkosaUJBQUtxRyxnQkFBTCxDQUFzQixTQUF0QixFQUFpQ3RFLEdBQWpDLEVBQXNDM0IsUUFBdEM7QUFDSDtBQWpCUSxLQUFiOztBQW9CQSxXQUFPSixJQUFQO0FBQ0gsQ0ExRUQ7O2tCQTRFZW9GLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGZjs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQUFNcUIsU0FBUyxTQUFUQSxNQUFTLEdBQVk7QUFDdkIsV0FBTztBQUNIQyxjQUFNRCxPQUFPQyxJQURWO0FBRUhDLGVBQU9GLE9BQU9FLEtBRlg7QUFHSEMsb0JBQVlILE9BQU9HLFVBSGhCO0FBSUhDLGdCQUFRSixPQUFPSSxNQUpaO0FBS0hDLGdCQUFRTCxPQUFPSyxNQUxaO0FBTUhDLGdCQUFRTixPQUFPTztBQU5aLEtBQVA7QUFRSCxDQVREOztBQVdBOzs7Ozs7O0FBT0FQLE9BQU9DLElBQVAsR0FBYyxVQUFVTyxHQUFWLEVBQWU3RyxRQUFmLEVBQXlCOEcsT0FBekIsRUFBa0M7QUFDNUNDLFVBQU1GLEdBQU4sRUFDS0csSUFETCxDQUNVO0FBQUEsZUFBWUMsU0FBU1gsSUFBVCxFQUFaO0FBQUEsS0FEVixFQUVLVSxJQUZMLENBRVU7QUFBQSxlQUFRaEgsU0FBU3NHLElBQVQsQ0FBUjtBQUFBLEtBRlYsRUFHS1ksS0FITCxDQUdXO0FBQUEsZUFBUyxPQUFPSixPQUFQLEtBQW1CLFVBQW5CLEdBQWdDQSxRQUFRSyxLQUFSLENBQWhDLEdBQWlELElBQTFEO0FBQUEsS0FIWDtBQUlILENBTEQ7O0FBT0E7Ozs7OztBQU1BZCxPQUFPRSxLQUFQLEdBQWUsVUFBVWEsSUFBVixFQUFnQnBILFFBQWhCLEVBQTBCOEcsT0FBMUIsRUFDZjtBQUNJLFFBQUlNLFFBQVEsUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUE1QixFQUFzQzs7QUFFbEMsWUFBSTdCLE1BQU1DLE9BQU4sQ0FBYzRCLElBQWQsQ0FBSixFQUF5QjtBQUNyQixnQkFBTUMsTUFBTSxFQUFaO0FBQ0FELGlCQUFLMUYsR0FBTCxDQUFTLFVBQVU0RixJQUFWLEVBQWdCO0FBQ3JCRCxvQkFBSUUsS0FBS0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxLQUEzQixDQUFpQyxDQUFqQyxDQUFKLElBQTJDSixJQUEzQztBQUNILGFBRkQ7QUFHQUYsbUJBQU9DLEdBQVA7QUFDSDs7QUFFRCxZQUFNTSxVQUFVLEVBQWhCO0FBQ0EsWUFBTWhFLFNBQVNuQyxPQUFPQyxJQUFQLENBQVkyRixJQUFaLEVBQWtCekQsTUFBakM7QUFDQSxZQUFJaUUsV0FBVyxDQUFmOztBQUVBcEcsZUFBT0MsSUFBUCxDQUFZMkYsSUFBWixFQUFrQnhELE9BQWxCLENBQTBCLFVBQUNqQyxHQUFELEVBQVM7QUFDL0IsZ0JBQU1rRixNQUFNTyxLQUFLekYsR0FBTCxDQUFaO0FBQ0EwRSxtQkFBT0MsSUFBUCxDQUFZTyxHQUFaLEVBQWlCLFVBQUNQLElBQUQsRUFBVTtBQUN2QnFCLHdCQUFRaEcsR0FBUixJQUFlMkUsSUFBZjtBQUNBc0I7QUFDQSxvQkFBSUEsYUFBYWpFLE1BQWpCLEVBQXlCO0FBQ3JCM0QsNkJBQVNNLElBQVQsQ0FBYyxFQUFkLEVBQWtCcUgsT0FBbEI7QUFDSDtBQUNKLGFBTkQsRUFNR2IsT0FOSDtBQU9ILFNBVEQ7QUFVSDtBQUNKLENBM0JEOztBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBVCxPQUFPRyxVQUFQLEdBQW9CLFVBQVVZLElBQVYsRUFBZ0JwSCxRQUFoQixFQUEwQjhHLE9BQTFCLEVBQ3BCO0FBQ0ksUUFBSU0sUUFBUSxRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQTVCLEVBQXNDOztBQUVsQyxZQUFJN0IsTUFBTUMsT0FBTixDQUFjNEIsSUFBZCxDQUFKLEVBQXlCO0FBQ3JCLGdCQUFNQyxNQUFNLEVBQVo7QUFDQUQsaUJBQUsxRixHQUFMLENBQVMsVUFBVTRGLElBQVYsRUFBZ0I7QUFDckJELG9CQUFJRSxLQUFLQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLEtBQTNCLENBQWlDLENBQWpDLENBQUosSUFBMkNKLElBQTNDO0FBQ0gsYUFGRDtBQUdBRixtQkFBT0MsR0FBUDtBQUNIOztBQUVELFlBQU0xRCxTQUFTbkMsT0FBT0MsSUFBUCxDQUFZMkYsSUFBWixFQUFrQnpELE1BQWpDO0FBQ0EsWUFBTWdFLFVBQVUsRUFBaEI7QUFDQSxZQUFJRSxlQUFKO0FBQ0EsWUFBSUQsV0FBVyxDQUFmOztBQUVBcEcsZUFBT0MsSUFBUCxDQUFZMkYsSUFBWixFQUFrQnhELE9BQWxCLENBQTBCLFVBQUNqQyxHQUFELEVBQVM7QUFDL0JrRyxxQkFBUzdELFNBQVM4RCxhQUFULENBQXVCLFFBQXZCLENBQVQ7QUFDQUQsbUJBQU9oQixHQUFQLEdBQWNPLEtBQUt6RixHQUFMLEVBQVVvRyxNQUFWLENBQWlCLENBQUMsQ0FBbEIsTUFBeUIsS0FBMUIsR0FBbUNYLEtBQUt6RixHQUFMLENBQW5DLEdBQStDeUYsS0FBS3pGLEdBQUwsSUFBWSxLQUF4RTtBQUNBa0csbUJBQU94QyxJQUFQLEdBQWMsd0JBQWQ7QUFDQXdDLG1CQUFPN0YsRUFBUCxHQUFZTCxHQUFaO0FBQ0FrRyxtQkFBT2YsT0FBUCxHQUFpQkEsT0FBakI7QUFDQWUsbUJBQU9HLE1BQVAsR0FBZ0IsVUFBVUMsQ0FBVixFQUFhO0FBQ3pCTix3QkFBUSxLQUFLM0YsRUFBYixJQUFtQixJQUFuQjtBQUNBNEY7QUFDQSxvQkFBSUEsYUFBYWpFLE1BQWpCLEVBQXlCO0FBQ3JCM0QsNkJBQVNNLElBQVQsQ0FBYyxFQUFkLEVBQWtCcUgsT0FBbEI7QUFDSDtBQUNKLGFBTkQ7QUFPQTNELHFCQUFTa0UsSUFBVCxDQUFjL0csV0FBZCxDQUEwQjBHLE1BQTFCO0FBQ0gsU0FkRDtBQWVIO0FBQ0osQ0FqQ0Q7O0FBbUNBOzs7Ozs7Ozs7Ozs7O0FBYUF4QixPQUFPSSxNQUFQLEdBQWdCLFVBQVUwQixJQUFWLEVBQWdCbkksUUFBaEIsRUFBMEI7QUFDdEMsUUFBSW1JLFFBQVEsUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUE1QixFQUFzQztBQUFBO0FBQ2xDLGdCQUFNeEUsU0FBU25DLE9BQU9DLElBQVAsQ0FBWTBHLElBQVosRUFBa0J4RSxNQUFqQztBQUNBLGdCQUFNOEMsU0FBUyxFQUFmO0FBQ0EsZ0JBQUltQixXQUFXLENBQWY7QUFDQSxpQkFBSyxJQUFJekQsSUFBVCxJQUFpQmdFLElBQWpCLEVBQXVCO0FBQ25CLG9CQUFNQyxNQUFNcEUsU0FBUzhELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBTSxvQkFBSXZCLEdBQUosR0FBVXNCLEtBQUtoRSxJQUFMLENBQVY7QUFDQWlFLG9CQUFJakUsSUFBSixHQUFXQSxJQUFYO0FBQ0FpRSxvQkFBSUosTUFBSixHQUFhLFVBQVVDLENBQVYsRUFBYTtBQUN0QnhCLDJCQUFPLEtBQUt0QyxJQUFaLElBQW9CLElBQXBCO0FBQ0F5RDtBQUNBLHdCQUFJQSxhQUFhakUsTUFBakIsRUFBeUI7QUFDckIzRCxpQ0FBU00sSUFBVCxDQUFjLEVBQWQsRUFBa0JtRyxNQUFsQjtBQUNIO0FBQ0osaUJBTkQ7QUFPSDtBQWZpQztBQWdCckM7QUFDSixDQWxCRDs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7QUFhQUosT0FBT0ssTUFBUCxHQUFnQixVQUFVVSxJQUFWLEVBQWdCcEgsUUFBaEIsRUFBMEI7QUFDdEMsUUFBSW9ILFFBQVEsUUFBT0EsSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUE1QixFQUFzQztBQUNsQyxZQUFNekQsU0FBU25DLE9BQU9DLElBQVAsQ0FBWTJGLElBQVosRUFBa0J6RCxNQUFqQztBQUNBLFlBQU0rQyxTQUFTLEVBQWY7QUFDQSxZQUFJa0IsV0FBVyxDQUFmO0FBQ0EsYUFBSyxJQUFJekQsSUFBVCxJQUFpQmlELElBQWpCLEVBQXVCO0FBQ25CLGdCQUFNaUIsUUFBUXJFLFNBQVM4RCxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQU8sa0JBQU14QixHQUFOLEdBQVlPLEtBQUtqRCxJQUFMLENBQVo7QUFDQWtFLGtCQUFNbEUsSUFBTixHQUFhQSxJQUFiO0FBQ0FrRSxrQkFBTUMsT0FBTixHQUFnQixNQUFoQjtBQUNBNUIsbUJBQU92QyxJQUFQLElBQWVrRSxLQUFmO0FBQ0FUO0FBQ0EsZ0JBQUlBLGFBQWFqRSxNQUFqQixFQUF5QjtBQUNyQjNELHlCQUFTTSxJQUFULENBQWMsRUFBZCxFQUFrQm9HLE1BQWxCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osQ0FqQkQ7O0FBbUJBOzs7Ozs7Ozs7Ozs7O0FBYUFMLE9BQU9NLE1BQVAsR0FBZ0IsVUFBVVMsSUFBVixFQUFnQnBILFFBQWhCLEVBQTBCO0FBQ3RDLFFBQUlvSCxRQUFRLFFBQU9BLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBNUIsRUFBc0M7QUFDbEMsWUFBTXpELFNBQVNuQyxPQUFPQyxJQUFQLENBQVkyRixJQUFaLEVBQWtCekQsTUFBakM7QUFDQSxZQUFNZ0QsU0FBUyxFQUFmO0FBQ0EsWUFBSWlCLFdBQVcsQ0FBZjtBQUNBLGFBQUssSUFBSXpELElBQVQsSUFBaUJpRCxJQUFqQixFQUF1QjtBQUNuQixnQkFBTVIsUUFBUTVDLFNBQVM4RCxhQUFULENBQXVCLE9BQXZCLENBQWQ7QUFDQWxCLGtCQUFNQyxHQUFOLEdBQVlPLEtBQUtqRCxJQUFMLENBQVo7QUFDQXlDLGtCQUFNekMsSUFBTixHQUFhQSxJQUFiO0FBQ0F5QyxrQkFBTTBCLE9BQU4sR0FBZ0IsTUFBaEI7QUFDQTNCLG1CQUFPeEMsSUFBUCxJQUFleUMsS0FBZjtBQUNBZ0I7QUFDQSxnQkFBSUEsYUFBYWpFLE1BQWpCLEVBQXlCO0FBQ3JCM0QseUJBQVNNLElBQVQsQ0FBYyxFQUFkLEVBQWtCcUcsTUFBbEI7QUFDSDtBQUNKO0FBQ0o7QUFDSixDQWpCRDs7a0JBbUJlTixNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JPZjs7Ozs7Ozs7O0FBU0EsSUFBTWtDLFNBQVMsU0FBVEEsTUFBUyxDQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0JDLEdBQXBCLEVBQXlCQyxHQUF6QixFQUE4QkMsRUFBOUIsRUFBa0NDLEVBQWxDLEVBQXNDO0FBQ2pELFdBQU8sRUFBQ0wsUUFBRCxFQUFNQyxRQUFOLEVBQVdDLFFBQVgsRUFBZ0JDLFFBQWhCLEVBQXFCQyxNQUFyQixFQUF5QkMsTUFBekIsRUFBUDtBQUNILENBRkQ7O2tCQUllTixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRWFPLGEsV0FBQUEsYTtBQUVULDJCQUFZckYsVUFBWixFQUNBO0FBQUE7O0FBQUEsWUFDWTNDLE9BRFosR0FDd0IyQyxVQUR4QixDQUNZM0MsT0FEWjs7QUFHSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBTWlJLE9BQU8sb0JBQUssS0FBS2pJLE9BQVYsQ0FBYjs7QUFFQSxhQUFLMkMsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxhQUFLM0MsT0FBTCxHQUFlaUksS0FBS2pJLE9BQXBCO0FBQ0EsYUFBS2lJLElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtoRyxJQUFMLEdBQVksS0FBWjtBQUNBLGFBQUtLLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxhQUFLcEMsYUFBTDs7QUFFQSxZQUFJLE9BQU8sS0FBSytCLElBQVosS0FBcUIsVUFBckIsSUFBbUMsQ0FBQyxLQUFLSyxXQUE3QyxFQUF5RDtBQUNyRCxpQkFBS0EsV0FBTCxHQUFtQixJQUFuQjtBQUNBLGlCQUFLTCxJQUFMO0FBQ0g7QUFDSjs7Ozs7O0FBc0JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2dDQUV1QjtBQUFBLGdCQUFoQk4sTUFBZ0IsdUVBQVAsS0FBTzs7QUFDbkIsZ0JBQU1FLFFBQVEsd0JBQVMsSUFBVCxDQUFkO0FBQ0FBLGtCQUFNN0IsT0FBTixHQUFnQixLQUFLQSxPQUFMLENBQWF1RCxTQUFiLENBQXVCLElBQXZCLENBQWhCO0FBQ0EsZ0JBQUk1QixVQUFVLEtBQUszQixPQUFuQixFQUNJLEtBQUtBLE9BQUwsQ0FBYWMsVUFBYixDQUF3QlQsV0FBeEIsQ0FBb0N3QixNQUFNN0IsT0FBMUM7O0FBRUosbUJBQU8sSUFBSWdJLGFBQUosQ0FBa0JuRyxLQUFsQixDQUFQO0FBQ0g7Ozt3Q0FDZTtBQUNabkIsbUJBQU9DLElBQVAsQ0FBWSxLQUFLZ0MsVUFBakIsRUFBNkIvQixHQUE3QixDQUFpQyxVQUFVQyxHQUFWLEVBQWU7QUFDNUMsb0JBQUksT0FBTyxLQUFLQSxHQUFMLENBQVAsS0FBcUIsV0FBekIsRUFBc0M7QUFDbEMseUJBQUtBLEdBQUwsSUFBWSxLQUFLOEIsVUFBTCxDQUFnQjlCLEdBQWhCLENBQVo7QUFDSDtBQUNKLGFBSkQ7QUFLQSxpQkFBS2IsT0FBTCxDQUFhaUIsWUFBYixDQUEwQixlQUExQixFQUE0QyxLQUFLMEIsVUFBTCxDQUFnQnpCLEVBQWhCLElBQXNCLFVBQWxFO0FBQ0g7Ozs4QkFFS00sTSxFQUFRO0FBQUE7O0FBQ1ZkLG1CQUFPQyxJQUFQLENBQVlhLE1BQVosRUFBb0JzQixPQUFwQixDQUE0QixVQUFDakMsR0FBRCxFQUFTO0FBQ2pDLG9CQUFJLE1BQUtiLE9BQUwsQ0FBYXVCLEtBQWIsQ0FBbUJWLEdBQW5CLE1BQTRCcUgsU0FBaEMsRUFBMkM7QUFDdkMsMEJBQUtsSSxPQUFMLENBQWF1QixLQUFiLENBQW1CVixHQUFuQixJQUEwQlcsT0FBT1gsR0FBUCxDQUExQjtBQUNIO0FBQ0osYUFKRDtBQUtIOzs7NEJBeERPO0FBQUUsbUJBQU8sS0FBS29ILElBQUwsQ0FBVWxILENBQWpCO0FBQXFCLFM7MEJBSXpCb0gsSyxFQUFPO0FBQ1QsaUJBQUtuSSxPQUFMLENBQWF1QixLQUFiLENBQW1CNkcsVUFBbkIsR0FBZ0NELFFBQVEsSUFBeEM7QUFDQSxpQkFBS0YsSUFBTCxDQUFVbEgsQ0FBVixHQUFjb0gsS0FBZDtBQUNIOzs7NEJBTk87QUFBRSxtQkFBTyxLQUFLRixJQUFMLENBQVVqSCxDQUFqQjtBQUFxQixTOzBCQU96Qm1ILEssRUFBTztBQUNULGlCQUFLbkksT0FBTCxDQUFhdUIsS0FBYixDQUFtQjhHLFNBQW5CLEdBQStCRixRQUFRLElBQXZDO0FBQ0EsaUJBQUtGLElBQUwsQ0FBVWpILENBQVYsR0FBY21ILEtBQWQ7QUFDSDs7OzRCQVRXO0FBQUUsbUJBQU8sS0FBS0YsSUFBTCxDQUFVSyxLQUFqQjtBQUF5QixTOzBCQVU3QkgsSyxFQUFPO0FBQ2IsaUJBQUtuSSxPQUFMLENBQWF1QixLQUFiLENBQW1CK0csS0FBbkIsR0FBMkJILFFBQVEsSUFBbkM7QUFDQSxpQkFBS0YsSUFBTCxDQUFVSyxLQUFWLEdBQWtCSCxLQUFsQjtBQUNIOzs7NEJBWlk7QUFBRSxtQkFBTyxLQUFLRixJQUFMLENBQVVNLE1BQWpCO0FBQTBCLFM7MEJBYTlCSixLLEVBQU87QUFDZCxpQkFBS25JLE9BQUwsQ0FBYXVCLEtBQWIsQ0FBbUJnSCxNQUFuQixHQUE0QkosUUFBUSxJQUFwQztBQUNBLGlCQUFLRixJQUFMLENBQVVNLE1BQVYsR0FBbUJKLEtBQW5CO0FBQ0g7Ozs7OztBQXdDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLElBQU1LLFdBQVcsU0FBWEEsUUFBVyxDQUFVaEYsTUFBVixFQUNqQjtBQUFBLFFBQ1l4RCxPQURaLEdBQ3dCd0QsTUFEeEIsQ0FDWXhELE9BRFo7O0FBRUksUUFBTWlJLE9BQU8sb0JBQUtqSSxPQUFMLENBQWI7O0FBRUEsUUFBRyxDQUFDaUksS0FBS2pJLE9BQVQsRUFBa0I7QUFDZCxjQUFNLElBQUl5SSxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNIOztBQUVEUixTQUFLakksT0FBTCxDQUFhaUIsWUFBYixDQUEwQixlQUExQixFQUEyQ3VDLE9BQU90QyxFQUFQLElBQWEsVUFBeEQ7O0FBRUEsUUFBTXBDLE9BQU87QUFDVDtBQUNBa0IsaUJBQVNpSSxLQUFLakksT0FGTDtBQUdUc0MscUJBQWEsS0FISjtBQUlULFlBQUl2QixDQUFKLENBQU1vSCxLQUFOLEVBQWE7QUFDVHJKLGlCQUFLa0IsT0FBTCxDQUFhdUIsS0FBYixDQUFtQjZHLFVBQW5CLEdBQWdDRCxRQUFRLElBQXhDO0FBQ0FGLGlCQUFLbEgsQ0FBTCxHQUFTb0gsS0FBVDtBQUNILFNBUFE7QUFRVCxZQUFJbkgsQ0FBSixDQUFNbUgsS0FBTixFQUFhO0FBQ1RySixpQkFBS2tCLE9BQUwsQ0FBYXVCLEtBQWIsQ0FBbUI4RyxTQUFuQixHQUErQkYsUUFBUSxJQUF2QztBQUNBRixpQkFBS2pILENBQUwsR0FBU21ILEtBQVQ7QUFDSCxTQVhRO0FBWVQsWUFBSUcsS0FBSixDQUFVSCxLQUFWLEVBQWlCO0FBQ2JySixpQkFBS2tCLE9BQUwsQ0FBYXVCLEtBQWIsQ0FBbUIrRyxLQUFuQixHQUEyQkgsUUFBUSxJQUFuQztBQUNBRixpQkFBS0ssS0FBTCxHQUFhSCxLQUFiO0FBQ0gsU0FmUTtBQWdCVCxZQUFJSSxNQUFKLENBQVdKLEtBQVgsRUFBa0I7QUFDZHJKLGlCQUFLa0IsT0FBTCxDQUFhdUIsS0FBYixDQUFtQmdILE1BQW5CLEdBQTRCSixRQUFRLElBQXBDO0FBQ0FGLGlCQUFLTSxNQUFMLEdBQWNKLEtBQWQ7QUFDSCxTQW5CUTtBQW9CVCxZQUFJcEgsQ0FBSixHQUFRO0FBQ0osbUJBQU9rSCxLQUFLbEgsQ0FBWjtBQUNILFNBdEJRO0FBdUJULFlBQUlDLENBQUosR0FBUTtBQUNKLG1CQUFPaUgsS0FBS2pILENBQVo7QUFDSCxTQXpCUTtBQTBCVCxZQUFJc0gsS0FBSixHQUFZO0FBQ1IsbUJBQU9MLEtBQUtLLEtBQVo7QUFDSCxTQTVCUTtBQTZCVCxZQUFJQyxNQUFKLEdBQWE7QUFDVCxtQkFBT04sS0FBS00sTUFBWjtBQUNILFNBL0JROztBQWlDVGhILGFBakNTLGlCQWlDSEMsTUFqQ0csRUFpQ0s7QUFDVixvQ0FBUzFDLEtBQUtrQixPQUFkLEVBQXVCd0IsTUFBdkI7QUFDSDtBQW5DUSxLQUFiOztBQXNDQSxXQUFPZ0MsT0FBT3hELE9BQWQ7QUFDQSxXQUFPd0QsT0FBT2xCLFdBQWQ7QUFDQTVCLFdBQU9DLElBQVAsQ0FBWTZDLE1BQVosRUFBb0I1QyxHQUFwQixDQUF3QixVQUFVQyxHQUFWLEVBQWU7QUFDbkMvQixhQUFLK0IsR0FBTCxJQUFZMkMsT0FBTzNDLEdBQVAsQ0FBWjtBQUNILEtBRkQ7O0FBSUEsUUFBSSxPQUFPL0IsS0FBS21ELElBQVosS0FBcUIsVUFBckIsSUFBbUMsQ0FBQ25ELEtBQUt3RCxXQUE3QyxFQUF5RDtBQUNyRHhELGFBQUt3RCxXQUFMLEdBQW1CLElBQW5CO0FBQ0F4RCxhQUFLbUQsSUFBTCxDQUFVekMsSUFBVixDQUFlVixJQUFmO0FBQ0g7O0FBRURBLFNBQUt3QyxLQUFMLEdBQWEsWUFBMEI7QUFBQSxZQUFoQkssTUFBZ0IsdUVBQVAsS0FBTzs7QUFDbkMsWUFBTStHLGdCQUFnQix3QkFBUzVKLElBQVQsQ0FBdEI7QUFDQTRKLHNCQUFjMUksT0FBZCxHQUF3QmxCLEtBQUtrQixPQUFMLENBQWF1RCxTQUFiLENBQXVCekUsSUFBdkIsQ0FBeEI7QUFDQSxZQUFJNkMsTUFBSixFQUFZO0FBQ1I3QyxpQkFBS2tCLE9BQUwsQ0FBYWMsVUFBYixDQUF3QlQsV0FBeEIsQ0FBb0NxSSxjQUFjMUksT0FBbEQ7QUFDSDtBQUNELGVBQU93SSxTQUFTRSxhQUFULENBQVA7QUFDSCxLQVBEOztBQVNBNUosU0FBSzJDLE1BQUwsR0FBYyxVQUFVQyxJQUFWLEVBQStCO0FBQUEsWUFBZkMsTUFBZSx1RUFBTixJQUFNOztBQUN6QyxZQUFJLE9BQU9ELElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsZ0JBQUksNEJBQWFBLElBQWIsQ0FBSixFQUF3QjtBQUNwQkEsdUJBQU8sd0JBQVNBLElBQVQsQ0FBUDtBQUNILGFBRkQsTUFFTztBQUNIQSx1QkFBTyxxQkFBTUEsSUFBTixDQUFQO0FBQ0g7QUFDSjtBQUNENUMsYUFBS2tCLE9BQUwsQ0FBYUssV0FBYixDQUF5QnFCLElBQXpCO0FBQ0gsS0FURDs7QUFXQTVDLFNBQUs2QyxNQUFMLEdBQWMsVUFBVUQsSUFBVixFQUFnQjtBQUMxQjVDLGFBQUsyQyxNQUFMLENBQVlDLElBQVosRUFBa0IsSUFBbEI7QUFDSCxLQUZEOztBQUlBNUMsU0FBS3VDLEVBQUwsR0FBVSxVQUFVYixLQUFWLEVBQWlCdEIsUUFBakIsRUFBMkI7QUFDakNKLGFBQUtrQixPQUFMLENBQWFTLGdCQUFiLENBQThCRCxLQUE5QixFQUFxQ3RCLFFBQXJDO0FBQ0gsS0FGRDs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsV0FBT0osSUFBUDtBQUNILENBN0ZEOztrQkErRmUwSixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TWYsSUFBTUcsUUFBUSxTQUFSQSxLQUFRLENBQVU1SCxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDMUIsV0FBTyxFQUFDRCxJQUFELEVBQUlDLElBQUosRUFBUDtBQUNILENBRkQ7O2tCQUllMkgsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmYsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQVU3SCxDQUFWLEVBQWFDLENBQWIsRUFBZ0JzSCxLQUFoQixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDN0MsV0FBTyxFQUFDeEgsSUFBRCxFQUFJQyxJQUFKLEVBQU9zSCxZQUFQLEVBQWNDLGNBQWQsRUFBUDtBQUNILENBRkQ7O2tCQUllSyxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQmY7Ozs7OztBQUVBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFVQyxPQUFWLEVBQ2I7QUFDSSxRQUFNQyxpQ0FBaUM7QUFDbkNDLGlCQUFTO0FBRDBCLEtBQXZDOztBQUlBLFFBQU1DLFFBQVEsSUFBSUMsS0FBSixDQUFVSixPQUFWLEVBQW1CO0FBQzdCSyxXQUQ2QixlQUN6QjVDLEdBRHlCLEVBQ3BCNkMsSUFEb0IsRUFDZDtBQUNYLG1CQUFPQSxRQUFRN0MsR0FBUixHQUFjQSxJQUFJNkMsSUFBSixDQUFkLEdBQTBCLElBQWpDO0FBQ0gsU0FINEI7QUFJN0JDLFdBSjZCLGVBSXpCOUMsR0FKeUIsRUFJcEI2QyxJQUpvQixFQUlkakIsS0FKYyxFQUlQOztBQUVsQjVCLGdCQUFJNkMsSUFBSixJQUFZakIsS0FBWjs7QUFFQSxnQkFBSVksK0JBQStCSyxJQUEvQixLQUF3QyxPQUFPTCwrQkFBK0JLLElBQS9CLENBQVAsS0FBZ0QsVUFBNUYsRUFDSUwsK0JBQStCSyxJQUEvQixFQUFxQzVKLElBQXJDLENBQTBDLEVBQTFDLEVBQThDNEosSUFBOUMsRUFBb0RqQixLQUFwRCxFQUEyRCxvQkFBS2MsS0FBTCxDQUEzRDs7QUFFSixnQkFBSSxPQUFPRiwrQkFBK0JDLE9BQXRDLEtBQWtELFVBQXRELEVBQ0lELCtCQUErQkMsT0FBL0IsQ0FBdUN4SixJQUF2QyxDQUE0QyxFQUE1QyxFQUFnRDRKLElBQWhELEVBQXNEakIsS0FBdEQsRUFBNkQsb0JBQUtjLEtBQUwsQ0FBN0Q7O0FBRUosbUJBQU8sSUFBUDtBQUNIO0FBZjRCLEtBQW5CLENBQWQ7O0FBa0JBLFdBQU87O0FBRUg7Ozs7OztBQU1BSyxnQkFSRyxvQkFRTXpJLEdBUk4sRUFRV2lJLE9BUlgsRUFRb0I7QUFDbkIsZ0JBQUlTLGVBQUo7O0FBRUEsZ0JBQUksT0FBTzFJLEdBQVAsS0FBZSxVQUFmLElBQTZCLENBQUNpSSxPQUFsQyxFQUEyQztBQUN2Q1MseUJBQVMxSSxJQUFJckIsSUFBSixDQUFTLEVBQVQsRUFBYXlKLEtBQWIsQ0FBVDtBQUNBLG9CQUFJTSxNQUFKLEVBQ0ksS0FBS0MsSUFBTCxDQUFVRCxNQUFWO0FBRVAsYUFMRCxNQUtPLElBQUksT0FBT1QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUN0Q1MseUJBQVNULFFBQVF0SixJQUFSLENBQWEsRUFBYixFQUFpQnlKLE1BQU1wSSxHQUFOLENBQWpCLENBQVQ7QUFDQSxvQkFBSTBJLE1BQUosRUFDSU4sTUFBTXBJLEdBQU4sSUFBYTBJLE1BQWI7QUFFUCxhQUxNLE1BTUhOLE1BQU1wSSxHQUFOLElBQWFpSSxPQUFiOztBQUVKLG1CQUFPLElBQVA7QUFDSCxTQXpCRTs7O0FBMkJIOzs7Ozs7O0FBT0F0SSxhQWxDRyxpQkFrQ0dLLEdBbENILEVBa0NRM0IsUUFsQ1IsRUFrQ2tCO0FBQ2pCLG1CQUFPLEtBQUt1SyxPQUFMLENBQWE1SSxHQUFiLEVBQWtCM0IsUUFBbEIsQ0FBUDtBQUNILFNBcENFOzs7QUFzQ0g7Ozs7OztBQU1BdUssZUE1Q0csbUJBNENLNUksR0E1Q0wsRUE0Q1UzQixRQTVDVixFQTRDb0I7QUFDbkIsZ0JBQUksT0FBTzJCLEdBQVAsS0FBZSxVQUFmLElBQTZCLENBQUMzQixRQUFsQyxFQUE0QztBQUN4QzZKLCtDQUErQkMsT0FBL0IsR0FBeUNuSSxHQUF6QztBQUNILGFBRkQsTUFHSWtJLCtCQUErQmxJLEdBQS9CLElBQXNDLE9BQU8zQixRQUFQLEtBQW9CLFVBQXBCLEdBQ2hDQSxRQURnQyxHQUVoQyxJQUZOOztBQUlKLG1CQUFPLElBQVA7QUFDSCxTQXJERTtBQXVESGlLLFdBdkRHLGVBdURDdEksR0F2REQsRUF1RE07QUFDTCxtQkFBT0EsTUFBTW9JLE1BQU1wSSxHQUFOLENBQU4sR0FBbUIsb0JBQUtvSSxLQUFMLENBQTFCO0FBQ0gsU0F6REU7QUEyREhPLFlBM0RHLGdCQTJERVYsT0EzREYsRUEyRFdZLEVBM0RYLEVBMkRlO0FBQ2RoSixtQkFBT0MsSUFBUCxDQUFZbUksT0FBWixFQUFxQmhHLE9BQXJCLENBQTZCLFVBQUNqQyxHQUFELEVBQVM7QUFDbEMsb0JBQUk2SSxFQUFKLEVBQVE7QUFDSix3QkFBSSxDQUFDVCxNQUFNUyxFQUFOLENBQUwsRUFDSVQsTUFBTVMsRUFBTixJQUFZLEVBQVo7QUFDSlQsMEJBQU1TLEVBQU4sRUFBVTdJLEdBQVYsSUFBaUJpSSxRQUFRakksR0FBUixDQUFqQjtBQUNILGlCQUpELE1BSU87QUFDSG9JLDBCQUFNcEksR0FBTixJQUFhaUksUUFBUWpJLEdBQVIsQ0FBYjtBQUNIO0FBQ0osYUFSRDs7QUFVQSxtQkFBTyxJQUFQO0FBQ0gsU0F2RUU7OztBQXlFSCxZQUFJb0ksS0FBSixHQUFZO0FBQ1IsbUJBQU9BLEtBQVA7QUFDSCxTQTNFRTs7QUE2RUhVLGdCQTdFRyxzQkE2RVE7QUFDUCxtQkFBT1YsS0FBUDtBQUNIO0FBL0VFLEtBQVA7QUFpRkgsQ0F6R0QsQyxDQTVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBOzs7OztrQkFtSGVKLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hJZjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsSUFBTWUsZUFBZSxTQUFmQSxZQUFlLENBQVVkLE9BQVYsRUFBbUI7O0FBRXBDLFFBQU1lLFVBQVU7QUFDWkMsa0JBRFksd0JBQ0MsQ0FDWjtBQUZXLEtBQWhCOztBQUtBLFFBQU1DLGVBQWUsRUFBckI7O0FBRUFySixXQUFPQyxJQUFQLENBQVltSSxPQUFaLEVBQXFCbEksR0FBckIsQ0FBeUIsVUFBVW9KLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCO0FBQ2pESixnQkFBUUcsU0FBUixJQUFxQmxCLFFBQVFrQixTQUFSLENBQXJCOztBQUVBLFlBQUksT0FBT2xCLFFBQVFrQixTQUFSLENBQVAsS0FBOEIsVUFBOUIsSUFBNENBLGNBQWNILFFBQVFDLFVBQVIsQ0FBbUJ6RyxJQUFqRixFQUF1RjtBQUNuRjBHLHlCQUFhQyxTQUFiLElBQTBCLEVBQTFCO0FBQ0g7QUFDSixLQU5EOztBQVFBLFFBQU1FLEtBQUssb0JBQUtILFlBQUwsQ0FBWDtBQUNBO0FBQ0FHLE9BQUdMLE9BQUgsR0FBYSxZQUFZO0FBQ3JCLGVBQU9FLFlBQVA7QUFDSCxLQUZEOztBQUlBRyxPQUFHMUosS0FBSCxDQUFTLFVBQUMySixXQUFELEVBQWN2SCxNQUFkLEVBQXlCO0FBQzlCaUgsZ0JBQVFDLFVBQVIsQ0FBbUJ0SyxJQUFuQixDQUF3QnFLLE9BQXhCLEVBQWlDTSxXQUFqQyxFQUE4Q3ZILE1BQTlDOztBQUVBbEMsZUFBT0MsSUFBUCxDQUFZa0osT0FBWixFQUFxQmpKLEdBQXJCLENBQXlCLFVBQVVvSixTQUFWLEVBQXFCQyxLQUFyQixFQUE0Qjs7QUFFakQsZ0JBQUlFLGdCQUFnQkgsU0FBaEIsSUFBNkIsT0FBT0gsUUFBUUcsU0FBUixDQUFQLEtBQThCLFVBQS9ELEVBQTJFO0FBQ3ZFSCx3QkFBUUcsU0FBUixFQUFtQnhLLElBQW5CLENBQXdCcUssT0FBeEIsRUFBaUNNLFdBQWpDLEVBQThDdkgsTUFBOUM7QUFDSDtBQUNKLFNBTEQ7QUFNSCxLQVREOztBQVdBLFdBQU9zSCxFQUFQO0FBQ0gsQ0FuQ0Q7O2tCQXFDZU4sWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0lBRWFRLFUsV0FBQUEsVTtBQUNULDBCQUF5QjtBQUFBOztBQUFBLFlBQWJDLE1BQWEsdUVBQUosRUFBSTs7QUFBQTs7QUFDckIsYUFBS0MsT0FBTCxHQUFlLFNBQWY7QUFDQSxhQUFLRCxNQUFMLEdBQWM7QUFDVnJCLG1CQURVLHNCQUNBO0FBQ051Qix3QkFBUUMsR0FBUixDQUFZLGlCQUFaO0FBQ0g7QUFIUyxTQUFkOztBQU1BOUosZUFBT0MsSUFBUCxDQUFZMEosTUFBWixFQUFvQnZILE9BQXBCLENBQTRCLFVBQUNqQyxHQUFELEVBQVM7QUFDakMsa0JBQUtrRSxHQUFMLENBQVNsRSxHQUFULEVBQWN3SixPQUFPeEosR0FBUCxDQUFkO0FBQ0gsU0FGRDtBQUdIOzs7OzRCQUVHd0MsSSxFQUFNbkUsUSxFQUFVO0FBQ2hCLGlCQUFLbUwsTUFBTCxDQUFZaEgsSUFBWixJQUFvQm5FLFFBQXBCO0FBQ0g7Ozs0QkFFR21FLEksRUFBTTtBQUNOLG1CQUFPLEtBQUtnSCxNQUFMLENBQVloSCxJQUFaLENBQVA7QUFDSDs7OytCQUVNO0FBQ0gsZ0JBQUlvSCxPQUFPLEtBQVg7QUFDQSxnQkFBTTlKLE9BQU9ELE9BQU9DLElBQVAsQ0FBWSxLQUFLMEosTUFBakIsQ0FBYjtBQUNBLGlCQUFLLElBQUlLLElBQUksQ0FBYixFQUFnQkEsSUFBSS9KLEtBQUtrQyxNQUF6QixFQUFpQzZILEdBQWpDLEVBQXNDO0FBQ2xDLG9CQUFJL0osS0FBSytKLENBQUwsTUFBWSxLQUFLSixPQUFyQixFQUE4QjtBQUMxQix3QkFBSSxPQUFPM0osS0FBSytKLElBQUksQ0FBVCxDQUFQLEtBQXVCLFdBQTNCLEVBQ0lELE9BQU85SixLQUFLK0osSUFBSSxDQUFULENBQVA7QUFDSix3QkFBSUEsTUFBTS9KLEtBQUtrQyxNQUFMLEdBQWMsQ0FBeEIsRUFBMkI7QUFDdkI0SCwrQkFBTzlKLEtBQUssQ0FBTCxDQUFQO0FBQ0g7QUFDRDtBQUNIO0FBQ0o7QUFDRCxpQkFBS2dLLE1BQUwsQ0FBWUYsSUFBWjtBQUNIOzs7aUNBRXVCO0FBQUEsZ0JBQWpCNUosR0FBaUIsdUVBQVgsU0FBVzs7QUFDcEIsaUJBQUt5SixPQUFMLEdBQWV6SixHQUFmO0FBQ0EsZ0JBQU0rSixLQUFLLEtBQUtQLE1BQUwsQ0FBWSxLQUFLQyxPQUFqQixDQUFYOztBQUVBLGdCQUFJLE9BQU9NLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUMxQkEsbUJBQUdwTCxJQUFILENBQVFvTCxFQUFSO0FBQ0g7QUFDSjs7OzhCQUVLdkgsSSxFQUFNO0FBQ1IsbUJBQU8scUJBQU0sSUFBTixDQUFQO0FBQ0g7Ozs7OztBQUdMOzs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7O0FBTUEsSUFBTXdILFFBQVEsU0FBUkEsS0FBUSxDQUFVbEksVUFBVixFQUFzQjtBQUNoQyxRQUFNN0QsT0FBTztBQUNUd0wsaUJBQVMsU0FEQTtBQUVUdEssaUJBQVMsSUFGQTtBQUdUOEssZ0JBQVE7QUFDSjlCLHFCQUFTO0FBQ0w5Six3QkFESyxzQkFDTTtBQUFDcUwsNEJBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUErQixpQkFEdEM7O0FBRUxPLHVCQUFPO0FBRkY7QUFETDtBQUhDLEtBQWI7O0FBV0FqTSxTQUFLaUcsR0FBTCxHQUFXLFVBQVUxQixJQUFWLEVBQWdCbkUsUUFBaEIsRUFBc0M7QUFBQSxZQUFaNkwsS0FBWSx1RUFBSixFQUFJOztBQUM3Q2pNLGFBQUtnTSxNQUFMLENBQVl6SCxJQUFaLElBQW9CO0FBQ2hCbkUsOEJBRGdCO0FBRWhCNkw7QUFGZ0IsU0FBcEI7QUFJSCxLQUxEOztBQU9Bak0sU0FBS3FLLEdBQUwsR0FBVyxVQUFVOUYsSUFBVixFQUFnQjtBQUN2QixlQUFPdkUsS0FBS2dNLE1BQUwsQ0FBWXpILElBQVosQ0FBUDtBQUNILEtBRkQ7O0FBSUF2RSxTQUFLa00sZUFBTCxHQUF1QixZQUFZO0FBQy9CLGVBQU9sTSxLQUFLZ00sTUFBTCxDQUFZaE0sS0FBS3dMLE9BQWpCLENBQVA7QUFDSCxLQUZEOztBQUlBeEwsU0FBS21NLElBQUwsR0FBWSxZQUFZO0FBQ3BCLFlBQUlSLE9BQU8sS0FBWDtBQUNBLFlBQU05SixPQUFPRCxPQUFPQyxJQUFQLENBQVk3QixLQUFLZ00sTUFBakIsQ0FBYjtBQUNBLGFBQUssSUFBSUosSUFBSSxDQUFiLEVBQWdCQSxJQUFJL0osS0FBS2tDLE1BQXpCLEVBQWlDNkgsR0FBakMsRUFBc0M7QUFDbEMsZ0JBQUkvSixLQUFLK0osQ0FBTCxNQUFZNUwsS0FBS3dMLE9BQXJCLEVBQThCO0FBQzFCLG9CQUFJLE9BQU8zSixLQUFLK0osSUFBSSxDQUFULENBQVAsS0FBdUIsV0FBM0IsRUFDSUQsT0FBTzlKLEtBQUsrSixJQUFJLENBQVQsQ0FBUDtBQUNKLG9CQUFJQSxNQUFNL0osS0FBS2tDLE1BQUwsR0FBYyxDQUF4QixFQUEyQjtBQUN2QjRILDJCQUFPOUosS0FBSyxDQUFMLENBQVA7QUFDSDtBQUNEO0FBQ0g7QUFDSjtBQUNEN0IsYUFBS29NLEdBQUwsQ0FBU1QsSUFBVDtBQUNILEtBZEQ7O0FBZ0JBM0wsU0FBS29NLEdBQUwsR0FBVyxVQUFVckssR0FBVixFQUFla0ssS0FBZixFQUFzQjtBQUM3QmpNLGFBQUt3TCxPQUFMLEdBQWV6SixPQUFPLFNBQXRCO0FBQ0EsWUFBTXNLLFFBQVFyTSxLQUFLa00sZUFBTCxFQUFkO0FBQ0EsWUFBTTlMLFdBQVdpTSxNQUFNak0sUUFBdkI7O0FBRUEsWUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2hDLGdCQUFJNkwsS0FBSixFQUFXO0FBQ1BBLHdCQUFRdEcsTUFBTUMsT0FBTixDQUFjcUcsS0FBZCxJQUF1QkEsS0FBdkIsR0FBK0IsQ0FBQ0EsS0FBRCxDQUF2QztBQUNIOztBQUVEN0wscUJBQVNrTSxLQUFULENBQWVsTSxRQUFmLEVBQXlCNkwsUUFBUUEsS0FBUixHQUFnQkksTUFBTUosS0FBL0M7QUFDSDtBQUNKLEtBWkQ7O0FBY0E7QUFDQWpNLFNBQUt1TSxJQUFMLEdBQVksVUFBVXhLLEdBQVYsRUFBZWtLLEtBQWYsRUFBc0I7QUFBRWpNLGFBQUtvTSxHQUFMLENBQVNySyxHQUFULEVBQWNrSyxLQUFkO0FBQXNCLEtBQTFEO0FBQ0E7QUFDQWpNLFNBQUtlLEtBQUwsR0FBYSxVQUFVZ0IsR0FBVixFQUFla0ssS0FBZixFQUFzQjtBQUFFak0sYUFBS29NLEdBQUwsQ0FBU3JLLEdBQVQsRUFBY2tLLEtBQWQ7QUFBc0IsS0FBM0Q7O0FBRUFqTSxTQUFLd0MsS0FBTCxHQUFhLFlBQVk7QUFDckIsZUFBTyxxQkFBTSxJQUFOLENBQVA7QUFDSCxLQUZEOztBQUlBLFFBQUlxQixjQUFjQSxXQUFXbUksTUFBekIsSUFBbUNuSSxXQUFXbUksTUFBWCxDQUFrQlEsV0FBbEIsS0FBa0M1SyxNQUF6RSxFQUFpRjtBQUM3RUEsZUFBT0MsSUFBUCxDQUFZZ0MsV0FBV21JLE1BQXZCLEVBQStCaEksT0FBL0IsQ0FBdUMsVUFBQ2pDLEdBQUQsRUFBUztBQUM1Qy9CLGlCQUFLaUcsR0FBTCxDQUFTbEUsR0FBVCxFQUFjOEIsV0FBV21JLE1BQVgsQ0FBa0JqSyxHQUFsQixDQUFkO0FBQ0gsU0FGRDtBQUdIOztBQUVELFdBQU8vQixJQUFQO0FBQ0gsQ0F6RUQ7O2tCQTJFZStMLEs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JKZjs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsSUFBTVUsYUFBYSxTQUFiQSxVQUFhLEdBQWdDO0FBQUEsUUFBdEIvSCxNQUFzQix1RUFBYixFQUFDZ0ksT0FBTyxFQUFSLEVBQWE7O0FBQy9DLFFBQU0xTSxPQUFPO0FBQ1QyTSxtQkFBVyxDQURGO0FBRVRDLGNBQU1sSSxPQUFPa0ksSUFBUCxJQUFlLEtBRlo7QUFHVEMsd0JBQWdCLENBSFA7QUFJVEMsbUJBQVcsS0FKRjtBQUtUQyw0QkFBb0IsSUFMWDtBQU1UQyx3QkFBZ0J0SSxPQUFPZ0ksS0FBUCxJQUFnQixFQU52QjtBQU9UM0wsYUFQUyxtQkFPRDtBQUNKZixpQkFBS2lOLElBQUw7QUFDQWpOLGlCQUFLNk0sY0FBTCxHQUFzQixDQUF0QjtBQUNBLG1CQUFPN00sSUFBUDtBQUNILFNBWFE7QUFZVGtOLFlBWlMsa0JBWUY7QUFDSGxOLGlCQUFLOE0sU0FBTCxHQUFpQixJQUFqQjtBQUNBLG1CQUFPOU0sSUFBUDtBQUNILFNBZlE7QUFnQlRpTixZQWhCUyxrQkFnQkY7QUFDSGpOLGlCQUFLOE0sU0FBTCxHQUFpQixLQUFqQjtBQUNBLG1CQUFPOU0sSUFBUDtBQUNILFNBbkJRO0FBb0JUbU4sV0FwQlMsaUJBb0JIO0FBQ0ZuTixpQkFBSzZNLGNBQUwsR0FBc0I3TSxLQUFLZ04sY0FBTCxDQUFvQmpKLE1BQXBCLEdBQTZCLENBQW5EO0FBQ0EsbUJBQU8vRCxJQUFQO0FBQ0gsU0F2QlE7QUF3QlRLLGFBeEJTLGlCQXdCSCtNLEVBeEJHLEVBd0JDaE4sUUF4QkQsRUF3Qlc7QUFDaEJpTix1QkFBVyxZQUFNO0FBQUVqTix5QkFBU00sSUFBVCxDQUFjVixJQUFkO0FBQXNCLGFBQXpDLEVBQTJDb04sRUFBM0M7QUFDSCxTQTFCUTtBQTJCVEUsWUEzQlMsZ0JBMkJKL0ksSUEzQkksRUEyQkU7QUFDUHZFLGlCQUFLZ04sY0FBTCxDQUFvQmhKLE9BQXBCLENBQTRCLFVBQUN0QixNQUFELEVBQVN5SSxLQUFULEVBQW1CO0FBQzNDLG9CQUFJekksT0FBTzZCLElBQVAsS0FBZ0JBLElBQXBCLEVBQTBCO0FBQ3RCdkUseUJBQUs2TSxjQUFMLEdBQXNCMUIsS0FBdEI7QUFDSDtBQUNKLGFBSkQ7QUFLQSxtQkFBT25MLElBQVA7QUFDSCxTQWxDUTtBQW1DVHVOLGlCQW5DUyxxQkFtQ0NuTixRQW5DRCxFQW1DVztBQUNoQkosaUJBQUsrTSxrQkFBTCxHQUEwQjNNLFFBQTFCO0FBQ0EsbUJBQU9KLElBQVA7QUFDSCxTQXRDUTtBQXVDVG1NLFlBdkNTLGtCQXVDRjtBQUNILGdCQUFJbk0sS0FBSzhNLFNBQVQsRUFBb0IsT0FBTzlNLElBQVA7O0FBRXBCLGdCQUFJQSxLQUFLNk0sY0FBTCxHQUFzQjdNLEtBQUtnTixjQUFMLENBQW9CakosTUFBcEIsR0FBNkIsQ0FBdkQsRUFBMEQ7QUFDdEQvRCxxQkFBSzZNLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxvQkFBSSxDQUFDN00sS0FBSzRNLElBQVYsRUFDSSxPQUFPNU0sSUFBUDtBQUNQOztBQUVELGdCQUFNd04sd0JBQXdCeE4sS0FBS2dOLGNBQUwsQ0FBb0JoTixLQUFLNk0sY0FBekIsQ0FBOUI7O0FBRUEsZ0JBQUksT0FBTzdNLEtBQUsrTSxrQkFBWixLQUFtQyxVQUF2QyxFQUNJL00sS0FBSytNLGtCQUFMLENBQXdCck0sSUFBeEIsQ0FBNkJWLElBQTdCLEVBQW1Dd04scUJBQW5DLEVBQTBEeE4sS0FBSzZNLGNBQS9ELEVBQStFN00sS0FBSzJNLFNBQXBGOztBQUVKYSxrQ0FBc0JwTixRQUF0QixDQUErQk0sSUFBL0IsQ0FBb0NWLElBQXBDLEVBQTBDd04scUJBQTFDLEVBQWlFeE4sS0FBSzZNLGNBQXRFLEVBQXNGN00sS0FBSzJNLFNBQTNGOztBQUVBM00saUJBQUsyTSxTQUFMO0FBQ0EzTSxpQkFBSzZNLGNBQUw7O0FBRUEsbUJBQU83TSxJQUFQO0FBQ0g7QUEzRFEsS0FBYjs7QUE4REFBLFNBQUt3QyxLQUFMLEdBQWEsWUFBWTtBQUNyQixlQUFPLHFCQUFNLElBQU4sQ0FBUDtBQUNILEtBRkQ7O0FBSUEsV0FBT3hDLElBQVA7QUFDSCxDQXBFRDs7a0JBc0VleU0sVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RmYsSUFBTWdCLFFBQVEsU0FBUkEsS0FBUSxDQUFVck4sUUFBVixFQUFvQkMsS0FBcEIsRUFBMkJxTixNQUEzQixFQUFtQ0MsWUFBbkMsRUFBaUQ7QUFDM0QsU0FBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBSzFGLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDSCxDQUhEOztBQU1BeUYsTUFBTUosVUFBTixHQUFtQixVQUFVak4sUUFBVixFQUFvQmdOLEVBQXBCLEVBQXdCUSxRQUF4QixFQUFrQztBQUNqRCxRQUFJLE9BQU94TixRQUFQLEtBQW9CLFVBQXBCLElBQWtDLENBQUN5TixNQUFNVCxFQUFOLENBQW5DLElBQWdEQSxLQUFLLENBQXpELEVBQTREO0FBQ3hEUSxtQkFBVyxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQXBCLEdBQStCQSxRQUEvQixHQUEwQyxFQUFyRDtBQUNBLGVBQU9QLFdBQVcsWUFBWTtBQUMxQmpOLHFCQUFTTSxJQUFULENBQWNrTixRQUFkO0FBQ0gsU0FGTSxFQUVKUixFQUZJLENBQVA7QUFHSDtBQUNKLENBUEQ7QUFRQUssTUFBTUssV0FBTixHQUFvQixVQUFVMU4sUUFBVixFQUFvQmdOLEVBQXBCLEVBQXdCUSxRQUF4QixFQUFrQztBQUNsRCxRQUFJLE9BQU94TixRQUFQLEtBQW9CLFVBQXBCLElBQWtDLENBQUN5TixNQUFNVCxFQUFOLENBQW5DLElBQWdEQSxLQUFLLENBQXpELEVBQTREO0FBQ3hEUSxtQkFBVyxRQUFPQSxRQUFQLHlDQUFPQSxRQUFQLE9BQW9CLFFBQXBCLEdBQStCQSxRQUEvQixHQUEwQyxFQUFyRDtBQUNBLGVBQU9FLFlBQVksWUFBWTtBQUMzQjFOLHFCQUFTTSxJQUFULENBQWNrTixRQUFkO0FBQ0gsU0FGTSxFQUVKUixFQUZJLENBQVA7QUFHSDtBQUNKLENBUEQ7QUFRQUssTUFBTU0sWUFBTixHQUFxQixVQUFVM0wsRUFBVixFQUFjO0FBQy9CMkwsaUJBQWEzTCxFQUFiO0FBQ0gsQ0FGRDtBQUdBcUwsTUFBTU8sYUFBTixHQUFzQixVQUFVNUwsRUFBVixFQUFjO0FBQ2hDNEwsa0JBQWM1TCxFQUFkO0FBQ0gsQ0FGRDs7a0JBSWVxTCxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCZjs7Ozs7O0FBRUEsSUFBTVEsWUFBWSxTQUFaQSxTQUFZLENBQVUvTSxPQUFWLEVBQW1CZ04sTUFBbkIsRUFDbEI7QUFDSSxRQUFNbE8sT0FBTztBQUNUa0IsaUJBQVNBLE9BREE7QUFFVGlOLHVCQUFlLEVBRk47QUFHVEMsdUJBQWVsTixRQUFRdUIsS0FBUixDQUFjNEwsU0FBZCxDQUF3QkMsS0FBeEIsQ0FBOEIsR0FBOUIsRUFBbUNDLE1BQW5DLENBQTBDLFVBQUNsRixLQUFEO0FBQUEsbUJBQVdBLE1BQU10RixNQUFqQjtBQUFBLFNBQTFDLENBSE47QUFJVHlLLDBCQUFrQixFQUpUOztBQU1UQyxjQU5TLG9CQU1EO0FBQ0p6TyxpQkFBS3dPLGdCQUFMLEdBQXdCLEVBQXhCOztBQUVBNU0sbUJBQU9DLElBQVAsQ0FBWTdCLEtBQUttTyxhQUFqQixFQUFnQ25LLE9BQWhDLENBQXdDLFVBQUNqQyxHQUFELEVBQVM7QUFDN0MvQixxQkFBS3dPLGdCQUFMLElBQXlCek0sTUFBTSxHQUFOLEdBQVkvQixLQUFLbU8sYUFBTCxDQUFtQnBNLEdBQW5CLEVBQXdCMk0sSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBWixHQUFpRCxJQUExRTtBQUNILGFBRkQ7O0FBSUExTyxpQkFBS2tCLE9BQUwsQ0FBYXVCLEtBQWIsQ0FBbUI0TCxTQUFuQixHQUFnQ3JPLEtBQUt3TyxnQkFBckM7QUFDQXhPLGlCQUFLMk8sUUFBTDtBQUNILFNBZlE7QUFpQlRDLGNBakJTLGtCQWlCRkEsT0FqQkUsRUFpQk0vSyxVQWpCTixFQWlCb0M7QUFBQSxnQkFBbEJnTCxRQUFrQix1RUFBUCxLQUFPOztBQUN6QyxnQkFBSSxPQUFPRCxPQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQzVCL0ssNkJBQWE4QixNQUFNQyxPQUFOLENBQWMvQixVQUFkLElBQTRCQSxVQUE1QixHQUF5QyxDQUFDQSxVQUFELENBQXREOztBQUVBLG9CQUFJZ0wsUUFBSixFQUFjO0FBQ1Ysd0JBQUk3TyxLQUFLbU8sYUFBTCxDQUFtQlMsT0FBbkIsQ0FBSixFQUFnQztBQUM1Qi9LLG1DQUFXRyxPQUFYLENBQW1CLFVBQUNxRixLQUFELEVBQVF1QyxDQUFSLEVBQWM7QUFDN0IsZ0NBQUcsT0FBT3ZDLEtBQVAsS0FBaUIsUUFBcEIsRUFBOEI7QUFDMUIsb0NBQU15RixNQUFNekYsTUFBTTBGLEtBQU4sQ0FBWSxTQUFaLENBQVo7QUFDQSxvQ0FBTUMsTUFBTW5KLFNBQVN3RCxLQUFULElBQWtCeEQsU0FBUzdGLEtBQUttTyxhQUFMLENBQW1CUyxPQUFuQixFQUEyQmhELENBQTNCLENBQVQsQ0FBOUI7QUFDQS9ILDJDQUFXK0gsQ0FBWCxJQUFnQm9ELE1BQU1GLEdBQXRCO0FBQ0gsNkJBSkQsTUFJTztBQUNIakwsMkNBQVcrSCxDQUFYLElBQWdCdkMsUUFBUXJKLEtBQUttTyxhQUFMLENBQW1CUyxPQUFuQixFQUEyQmhELENBQTNCLENBQXhCO0FBQ0g7QUFDRDVMLGlDQUFLbU8sYUFBTCxDQUFtQlMsT0FBbkIsSUFBNkIvSyxVQUE3QjtBQUNILHlCQVREO0FBVUgscUJBWEQsTUFXTztBQUNIN0QsNkJBQUttTyxhQUFMLENBQW1CUyxPQUFuQixJQUE2Qi9LLFVBQTdCO0FBQ0g7QUFDSixpQkFmRCxNQWVPO0FBQ0g3RCx5QkFBS21PLGFBQUwsQ0FBbUJTLE9BQW5CLElBQTZCL0ssVUFBN0I7QUFDSDtBQUVKLGFBdEJELE1Bc0JPO0FBQ0gsc0JBQU0sSUFBSThGLEtBQUosQ0FBVSxrQ0FBVixDQUFOO0FBQ0g7QUFDSixTQTNDUTtBQTZDVGdGLGdCQTdDUyxzQkE2Q0M7QUFDTjNPLGlCQUFLb08sYUFBTCxHQUFxQmxOLFFBQVF1QixLQUFSLENBQWM0TCxTQUFkLENBQXdCQyxLQUF4QixDQUE4QixHQUE5QixFQUNoQkMsTUFEZ0IsQ0FDVCxVQUFDbEYsS0FBRDtBQUFBLHVCQUFXQSxNQUFNdEYsTUFBakI7QUFBQSxhQURTLENBQXJCOztBQUdBL0QsaUJBQUtvTyxhQUFMLENBQW1CcEssT0FBbkIsQ0FBMkIsVUFBQ3FGLEtBQUQsRUFBUXVDLENBQVIsRUFBYztBQUNyQyxvQkFBTXFELFFBQVFqUCxLQUFLb08sYUFBTCxDQUFtQnhDLENBQW5CLElBQXdCNUwsS0FBS29PLGFBQUwsQ0FBbUJ4QyxDQUFuQixFQUFzQnNELElBQXRCLEtBQWdDLEdBQXRFO0FBQ0Esb0JBQU1DLFVBQVVGLE1BQU1GLEtBQU4sQ0FBWSxhQUFaLENBQWhCO0FBQ0EvTyxxQkFBS21PLGFBQUwsQ0FBbUJnQixRQUFRLENBQVIsQ0FBbkIsSUFBaUNBLFFBQVFySCxLQUFSLENBQWMsQ0FBZCxDQUFqQztBQUNILGFBSkQ7QUFLSDtBQXREUSxLQUFiOztBQXlEQTlILFNBQUsyTyxRQUFMOztBQUVBLFFBQUlULFVBQVUsUUFBT0EsTUFBUCx5Q0FBT0EsTUFBUCxPQUFrQixRQUFoQyxFQUEwQztBQUN0Q3RNLGVBQU9DLElBQVAsQ0FBWXFNLE1BQVosRUFBb0JsSyxPQUFwQixDQUE0QixVQUFDakMsR0FBRCxFQUFTO0FBQ2pDL0IsaUJBQUs0TyxNQUFMLENBQVk3TSxHQUFaLEVBQWlCbU0sT0FBT25NLEdBQVAsQ0FBakI7QUFDSCxTQUZEO0FBR0EvQixhQUFLeU8sTUFBTDtBQUNIOztBQUVELFdBQU96TyxJQUFQO0FBQ0gsQ0FyRUQ7O0FBdUVBaU8sVUFBVS9NLE9BQVYsR0FBb0IsVUFBVUEsT0FBVixFQUFtQm1JLEtBQW5CLEVBQXlCO0FBQ3pDLFFBQUkxRCxNQUFNQyxPQUFOLENBQWN5RCxLQUFkLENBQUosRUFBMEI7QUFDdEIsWUFBTXRHLFFBQVEsRUFBZDtBQUNBc0csY0FBTXJGLE9BQU4sQ0FBYyxVQUFDc0csSUFBRCxFQUFVO0FBQUV2SCxrQkFBTW9CLElBQU4sQ0FBV21HLElBQVg7QUFBa0IsU0FBNUM7QUFDQSxnQ0FBU3BKLE9BQVQsRUFBa0IsRUFBQ21OLFdBQVd0TCxNQUFNMkwsSUFBTixDQUFXLEdBQVgsQ0FBWixFQUFsQjtBQUNIO0FBQ0osQ0FORDs7a0JBUWVULFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGZixJQUFNbUIsV0FBVyxTQUFYQSxRQUFXLENBQVUvRixLQUFWLEVBQWlCO0FBQzlCLFdBQU8sQ0FBQyxPQUFPQSxLQUFQLEtBQWlCLFFBQWpCLElBQTZCQSxpQkFBaUJnRyxNQUEvQyxLQUNBLENBQUN4QixNQUFNeEUsS0FBTixDQURSO0FBRUgsQ0FIRDs7a0JBS2UrRixROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNRSxVQUFVO0FBQ1poTyx3QkFEWTtBQUVaK0Msa0NBRlk7QUFHWlQsNkNBSFk7QUFJWndCLHdEQUpZO0FBS1pzRSxnQ0FMWTtBQU1aUiwwQ0FOWTtBQU9aNkMsMEJBUFk7QUFRWlQsaUNBUlk7QUFTWm1CLG9DQVRZO0FBVVpnQiwwQkFWWTtBQVdaM0Msd0NBWFk7QUFZWmYsd0JBWlk7QUFhWmhLLDRDQWJZO0FBY1owRyw0QkFkWTtBQWVaa0MsNEJBZlk7QUFnQlprQiwwQkFoQlk7QUFpQlpDLGtDQWpCWTtBQWtCWm1FO0FBbEJZLENBQWhCOztBQXFCQSxJQUFNc0IsU0FBUyxvQkFBZjtBQUNBLElBQU1DLG1CQUFtQixvQkFBekI7QUFDQSxJQUFNQyx1QkFBdUJELG1CQUFtQixHQUFoRDtBQUNBLElBQU1FLEtBQUssYUFBWDtBQUNBLElBQU1DLGlCQUFpQixhQUF2Qjs7QUFFQUwsUUFBUUMsTUFBUixHQUFpQkEsTUFBakI7QUFDQUQsUUFBUUUsZ0JBQVIsR0FBMkJBLGdCQUEzQjtBQUNBRixRQUFRRyxvQkFBUixHQUErQkEsb0JBQS9CO0FBQ0FILFFBQVFJLEVBQVIsR0FBYUEsRUFBYjtBQUNBSixRQUFRSyxjQUFSLEdBQXlCQSxjQUF6Qjs7QUFFQUwsUUFBUU0sTUFBUixHQUNJTixRQUFRTyxJQUFSLEdBQ0lELGdCQUZSOztBQUlBLElBQUksMEJBQUosRUFBaUI7QUFDYiwrQkFBWU4sT0FBWixHQUFzQkEsT0FBdEI7QUFDSDs7a0JBRWNBLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RSLElBQU1RLDhDQUFtQiwyQ0FBekI7QUFDQSxJQUFNQyxzQ0FBZSxhQUFyQjtBQUNBLElBQU1DLG9CQUFNLHFEQUFaO0FBQ0EsSUFBTUMsNEJBQVUscUJBQWhCO0FBQ0EsSUFBTUMsZ0NBQVksR0FBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTFA7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBVWpQLE9BQVYsRUFBbUJxRCxJQUFuQixFQUF5QjhFLEtBQXpCLEVBQWdDO0FBQ3pDLFFBQU0rRyxlQUFlLHNCQUFPbFAsT0FBUCxDQUFyQjtBQUNBLFFBQUlrUCxpQkFBaUIsUUFBckIsRUFBK0I7QUFDM0JsUCxrQkFBVSxxQkFBTUEsT0FBTixDQUFWO0FBQ0g7O0FBRUQsUUFBSSxzQkFBT0EsT0FBUCxLQUFtQm1QLFVBQVV0TSxNQUFWLEtBQXFCLENBQTVDLEVBQStDO0FBQzNDLFlBQUksc0JBQU9RLElBQVAsRUFBYSxRQUFiLENBQUosRUFBNEI7QUFDeEIsaUJBQUssSUFBSXhDLEdBQVQsSUFBZ0J3QyxJQUFoQjtBQUNJNEwscUJBQUtqUCxPQUFMLEVBQWNhLEdBQWQsRUFBbUJ3QyxLQUFLeEMsR0FBTCxDQUFuQjtBQURKO0FBRUgsU0FIRCxNQUlJLE9BQU9iLFFBQVFvUCxZQUFSLENBQXFCL0wsSUFBckIsQ0FBUDtBQUNQLEtBTkQsTUFPSyxJQUFJLHNCQUFPckQsT0FBUCxLQUFtQm1QLFVBQVV0TSxNQUFWLEtBQXFCLENBQTVDLEVBQStDO0FBQ2hELFlBQUlzRixVQUFVLEtBQWQsRUFBcUJuSSxRQUFRcVAsZUFBUixDQUF3QmhNLElBQXhCLEVBQXJCLEtBQ0tyRCxRQUFRaUIsWUFBUixDQUFxQm9DLElBQXJCLEVBQTJCOEUsS0FBM0I7QUFDUjtBQUNKLENBakJEOztrQkFtQmU4RyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZjs7Ozs7O0FBTUEsU0FBUzNOLEtBQVQsQ0FBZWdPLElBQWYsRUFBcUI1RixFQUFyQixFQUNBO0FBQ0ksUUFBSTRGLFNBQVMsSUFBVCxJQUFpQixRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQXJDLEVBQStDLE9BQU9BLElBQVA7QUFDL0MsUUFBSUEsS0FBS2hFLFdBQUwsS0FBcUI1SyxNQUFyQixJQUErQjRPLEtBQUtoRSxXQUFMLEtBQXFCN0csS0FBeEQsRUFBK0QsT0FBTzZLLElBQVA7QUFDL0QsUUFBSUEsS0FBS2hFLFdBQUwsS0FBcUJpRSxJQUFyQixJQUE2QkQsS0FBS2hFLFdBQUwsS0FBcUJrRSxNQUFsRCxJQUE0REYsS0FBS2hFLFdBQUwsS0FBcUJtRSxRQUFqRixJQUNBSCxLQUFLaEUsV0FBTCxLQUFxQm9FLE1BRHJCLElBQytCSixLQUFLaEUsV0FBTCxLQUFxQjZDLE1BRHBELElBQzhEbUIsS0FBS2hFLFdBQUwsS0FBcUJxRSxPQUR2RixFQUNnRztBQUM1RixlQUFPLElBQUlMLEtBQUtoRSxXQUFULENBQXFCZ0UsSUFBckIsQ0FBUDtBQUNIOztBQUVENUYsU0FBS0EsTUFBTSxJQUFJNEYsS0FBS2hFLFdBQVQsRUFBWDs7QUFFQSxTQUFLakksSUFBTCxJQUFhaU0sSUFBYixFQUNBO0FBQ0k1RixXQUFHckcsSUFBSCxJQUFXLE9BQU9xRyxHQUFHckcsSUFBSCxDQUFQLElBQW1CLFdBQW5CLEdBQWlDL0IsTUFBTWdPLEtBQUtqTSxJQUFMLENBQU4sRUFBa0IsSUFBbEIsQ0FBakMsR0FBMkRxRyxHQUFHckcsSUFBSCxDQUF0RTtBQUNIOztBQUVELFdBQU9xRyxFQUFQO0FBQ0g7O2tCQUVjcEksSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1zTyxPQUFPLFNBQVBBLElBQU8sQ0FBVTdKLEdBQVYsRUFBZThKLFFBQWYsRUFDYjtBQUNJLFFBQUksc0JBQU85SixHQUFQLENBQUosRUFDSSxPQUFPQSxJQUFJeEMsU0FBSixDQUFjLElBQWQsQ0FBUDs7QUFFSixRQUFJa0IsTUFBTUMsT0FBTixDQUFjcUIsR0FBZCxDQUFKLEVBQ0ksT0FBT0EsSUFBSWEsS0FBSixFQUFQOztBQUVKLFFBQUksT0FBT2IsR0FBUCxLQUFlLFVBQW5CLEVBQ0ksT0FBT0EsSUFBSWhELElBQUosQ0FBUzhNLFlBQVksRUFBckIsQ0FBUDs7QUFFSixRQUFJLHNCQUFPOUosR0FBUCxFQUFZLFFBQVosQ0FBSixFQUEyQjtBQUN2QjtBQUNBLFlBQUl3RCxTQUFTLEVBQWI7QUFDQTdJLGVBQU9DLElBQVAsQ0FBWW9GLEdBQVosRUFBaUJqRCxPQUFqQixDQUF5QixVQUFDakMsR0FBRCxFQUFTO0FBQzlCLGdCQUFJc0gsUUFBUXBDLElBQUlsRixHQUFKLENBQVo7QUFDQTBJLG1CQUFPMUksR0FBUCxJQUFjK08sS0FBS3pILEtBQUwsRUFBWSxPQUFPQSxLQUFQLEtBQWlCLFVBQWpCLEdBQThCcEMsR0FBOUIsR0FBb0MsRUFBaEQsQ0FBZDtBQUNILFNBSEQ7QUFJQSxlQUFPd0QsTUFBUDtBQUNIOztBQUVELFdBQU94RCxHQUFQO0FBQ0gsQ0F0QkQ7O2tCQXdCZTZKLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JmOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7QUFNQSxJQUFNRSxjQUFjLFNBQWRBLFdBQWMsQ0FBVWhDLEdBQVYsRUFBZXRFLElBQWYsRUFBcUI7QUFDckMsUUFBSXVHLE1BQU0sRUFBVjs7QUFFQSxRQUFJLE9BQU92RyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEQsRUFBMEQ7QUFDdEQsZUFBTyxJQUFJL0UsS0FBSixDQUFVcUosR0FBVixFQUFldEUsSUFBZixDQUFvQkEsSUFBcEIsQ0FBUDtBQUNIOztBQUVEdUcsVUFBTSxJQUFJdEwsS0FBSixDQUFVcUosR0FBVixFQUFldEUsSUFBZixDQUFvQixDQUFwQixDQUFOO0FBQ0F1RyxRQUFJak4sT0FBSixDQUFZLFVBQUNxRixLQUFELEVBQVF1QyxDQUFSLEVBQWM7QUFDdEIsWUFBSSxPQUFPbEIsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM1QixnQkFBTXdHLElBQUl4RyxLQUFLaEssSUFBTCxDQUFVZ0ssSUFBVixFQUFnQmtCLENBQWhCLEVBQW1CQSxDQUFuQixDQUFWO0FBQ0FxRixnQkFBSXJGLENBQUosSUFBUyxPQUFPc0YsQ0FBUCxLQUFhLFNBQWIsSUFBMEJBLENBQTFCLEdBQThCQSxDQUE5QixHQUFrQzdILEtBQTNDO0FBQ0g7QUFDRCxZQUFJMUQsTUFBTUMsT0FBTixDQUFjOEUsSUFBZCxDQUFKLEVBQXlCdUcsSUFBSXJGLENBQUosSUFBU2xCLEtBQUtrQixDQUFMLE1BQVl4QyxTQUFaLEdBQXdCQSxTQUF4QixHQUFvQ3NCLEtBQUtrQixDQUFMLENBQTdDLENBQXpCLEtBQ0txRixJQUFJckYsQ0FBSixJQUFTbEIsSUFBVDtBQUNSLEtBUEQ7QUFRQSxXQUFPdUcsR0FBUDtBQUNILENBakJEOztrQkFvQmVELFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZjs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNOUksZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVaUosR0FBVixFQUFlbEYsS0FBZixFQUFzQm1GLEtBQXRCLEVBQTZCO0FBQy9DLFFBQ0lsUSxVQUFVa0QsU0FBUzhELGFBQVQsQ0FBdUJpSixHQUF2QixDQURkO0FBQUEsUUFFSUUsVUFBVSxTQUFWQSxPQUFVLENBQVVwSyxHQUFWLEVBQWU7QUFDckIsZUFBTyxzQkFBT0EsR0FBUCxFQUFZLFFBQVosS0FBeUIsQ0FBQyxzQkFBT0EsR0FBUCxDQUFqQztBQUNILEtBSkw7QUFBQSxRQUtJcUssY0FBYyxTQUFkQSxXQUFjLENBQVVySyxHQUFWLEVBQWU7QUFDekIvRixnQkFBUXFRLGtCQUFSLENBQTJCLFdBQTNCLEVBQXdDdEssR0FBeEM7QUFDSCxLQVBMO0FBQUEsUUFRSXVLLGVBQWUsU0FBZkEsWUFBZSxDQUFVdkssR0FBVixFQUFlO0FBQzFCL0YsZ0JBQVFLLFdBQVIsQ0FBb0IwRixHQUFwQjtBQUNILEtBVkw7QUFBQSxRQVdJd0ssU0FBUyxTQUFUQSxNQUFTLENBQVV4SyxHQUFWLEVBQWU7QUFDcEIsWUFBTXhCLE9BQU8sc0JBQU93QixHQUFQLENBQWI7QUFDQSxZQUFJeEIsU0FBUyxRQUFiLEVBQ0k2TCxZQUFZckssR0FBWixFQURKLEtBRUssSUFBSXhCLFNBQVMsUUFBVCxJQUFxQixzQkFBT3dCLEdBQVAsQ0FBekIsRUFDRHVLLGFBQWF2SyxHQUFiLEVBREMsS0FFQSxJQUFJeEIsU0FBUyxPQUFiLEVBQ0QsS0FBSyxJQUFJbUcsSUFBSSxDQUFiLEVBQWdCQSxJQUFJM0UsSUFBSWxELE1BQXhCLEVBQWdDNkgsR0FBaEM7QUFBcUM2RixtQkFBT3hLLElBQUkyRSxDQUFKLENBQVA7QUFBckM7QUFDUCxLQW5CTDs7QUFxQkEsUUFBSXlFLFVBQVV0TSxNQUFWLEtBQXFCLENBQXJCLElBQTBCLENBQUNzTixRQUFRcEYsS0FBUixDQUEvQixFQUErQztBQUMzQ21GLGdCQUFRbkYsS0FBUjtBQUNBQSxnQkFBUSxLQUFSO0FBQ0g7O0FBRUQsUUFBSUEsS0FBSixFQUNJLEtBQUssSUFBSXlGLENBQVQsSUFBY3pGLEtBQWQ7QUFDSS9LLGdCQUFRaUIsWUFBUixDQUFxQnVQLENBQXJCLEVBQXdCekYsTUFBTXlGLENBQU4sQ0FBeEI7QUFESixLQUdKLElBQUlOLEtBQUosRUFDSUssT0FBT0wsS0FBUDs7QUFFSixXQUFPbFEsT0FBUDtBQUNILENBbkNEOztrQkFxQ2VnSCxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2Y7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNeUosaUJBQWlCLFNBQWpCQSxjQUFpQixDQUFVOU8sTUFBVixFQUFrQjtBQUNyQyxRQUFNK08sV0FBV3hOLFNBQVN5TixzQkFBVCxFQUFqQjs7QUFFQSxRQUFJLHNCQUFPaFAsTUFBUCxDQUFKLEVBQ0krTyxTQUFTclEsV0FBVCxDQUFxQnNCLE1BQXJCOztBQUVKLFFBQUksc0JBQU9BLE1BQVAsRUFBZSxRQUFmLENBQUosRUFDSStPLFNBQVNyUSxXQUFULENBQXFCLHdCQUFTc0IsTUFBVCxDQUFyQjs7QUFFSixXQUFPK08sUUFBUDtBQUNILENBVkQ7O2tCQVllRCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSxJQUFNRyxNQUFNLFNBQU5BLEdBQU0sQ0FBVUMsUUFBVixFQUFvQmxPLFVBQXBCLEVBQWdDO0FBQ3hDLFFBQUksQ0FBQ2tPLFFBQUQsSUFBYSxDQUFDbE8sVUFBbEIsRUFBOEI7QUFDOUIsUUFBSXdNLFVBQVV0TSxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLFlBQU11RyxPQUFPLEVBQWI7QUFDQUEsYUFBS3pHLFVBQUwsSUFBbUJ3TSxVQUFVLENBQVYsQ0FBbkI7QUFDQSxlQUFPeUIsSUFBSUMsUUFBSixFQUFjekgsSUFBZCxDQUFQO0FBQ0g7O0FBRUQsUUFBSXNCLFVBQUo7QUFBQSxRQUFPOEYsVUFBUDtBQUFBLFFBQVVNLFdBQVcsSUFBckI7QUFBQSxRQUNJQyxlQUFlLHNCQUFPRixRQUFQLENBRG5CO0FBQUEsUUFFSUcsaUJBQWlCLHNCQUFPck8sVUFBUCxDQUZyQjtBQUFBLFFBR0lzTyxRQUFRLFNBQVJBLEtBQVEsQ0FBVUMsR0FBVixFQUFlO0FBQ25CLFlBQUl4RyxVQUFKO0FBQUEsWUFBT3lHLEtBQUtELElBQUk5RCxLQUFKLENBQVUsR0FBVixDQUFaO0FBQUEsWUFBNEJnRSxXQUE1QjtBQUFBLFlBQWdDQyxXQUFoQztBQUFBLFlBQW9DQyxXQUFwQztBQUFBLFlBQXdDQyxJQUFJLEVBQTVDO0FBQ0EsYUFBSzdHLElBQUksQ0FBVCxFQUFZQSxJQUFJeUcsR0FBR3RPLE1BQW5CLEVBQTJCNkgsR0FBM0IsRUFBZ0M7QUFDNUIwRyxpQkFBS0QsR0FBR3pHLENBQUgsRUFBTTBDLEtBQU4sQ0FBWSxHQUFaLENBQUw7QUFDQWlFLGlCQUFLRCxHQUFHLENBQUgsRUFBTXBELElBQU4sRUFBTDtBQUNBc0QsaUJBQUtELEdBQUdHLE9BQUgsQ0FBVyxHQUFYLENBQUw7QUFDQSxnQkFBSUYsT0FBTyxDQUFDLENBQVosRUFDSUQsS0FBS0EsR0FBRzFOLFNBQUgsQ0FBYSxDQUFiLEVBQWdCMk4sRUFBaEIsSUFBc0JELEdBQUdDLEtBQUssQ0FBUixFQUFXMU4sV0FBWCxFQUF0QixHQUFpRHlOLEdBQUcxTixTQUFILENBQWEyTixLQUFLLENBQWxCLENBQXREO0FBQ0osZ0JBQUlGLEdBQUd2TyxNQUFILEtBQWMsQ0FBbEIsRUFDSTBPLEVBQUVGLEVBQUYsSUFBUUQsR0FBRyxDQUFILEVBQU1wRCxJQUFOLEVBQVI7QUFDUDtBQUNELGVBQU91RCxDQUFQO0FBQ0gsS0FmTDs7QUFrQkEsWUFBUVIsWUFBUjtBQUNJLGFBQUssUUFBTDtBQUNJRCx1QkFBVyx3QkFBU0QsUUFBVCxDQUFYO0FBQ0E7O0FBRUosYUFBSyxRQUFMO0FBQ0ksZ0JBQUksc0JBQU9BLFFBQVAsQ0FBSixFQUNJQyxXQUFXLENBQUNELFFBQUQsQ0FBWDtBQUNKOztBQUVKLGFBQUssT0FBTDtBQUNJQyx1QkFBV0QsUUFBWDtBQUNBO0FBWlI7O0FBZUEsUUFBSUMsUUFBSixFQUFjOztBQUVWLFlBQUlFLG1CQUFtQixRQUF2QixFQUNJck8sYUFBYXNPLE1BQU10TyxVQUFOLENBQWI7O0FBRUosYUFBSytILENBQUwsSUFBVW9HLFFBQVY7QUFDSSxpQkFBS04sQ0FBTCxJQUFVN04sVUFBVjtBQUNJbU8seUJBQVNwRyxDQUFULEVBQVluSixLQUFaLENBQWtCaVAsQ0FBbEIsSUFBdUI3TixXQUFXNk4sQ0FBWCxDQUF2QjtBQURKO0FBREo7QUFHSDs7QUFFRCxXQUFPTSxRQUFQO0FBQ0gsQ0FwREQ7O2tCQXNEZUYsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMURmLElBQU1hLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBVUMsS0FBVixFQUFpQjtBQUNwQyxRQUFNbkksU0FBUyxFQUFmO0FBQ0EsUUFBTW9JLFFBQVEsQ0FBQ0QsTUFBTSxDQUFOLE1BQWEsR0FBYixHQUFtQkEsTUFBTXpLLE1BQU4sQ0FBYSxDQUFiLENBQW5CLEdBQXFDeUssS0FBdEMsRUFBNkN0RSxLQUE3QyxDQUFtRCxHQUFuRCxDQUFkO0FBQ0F1RSxVQUFNN08sT0FBTixDQUFjLFVBQUMwRCxJQUFELEVBQU9rRSxDQUFQLEVBQWE7QUFDdkIsWUFBSWtILE9BQU9ELE1BQU1qSCxDQUFOLEVBQVMwQyxLQUFULENBQWUsR0FBZixDQUFYO0FBQ0E3RCxlQUFPc0ksbUJBQW1CRCxLQUFLLENBQUwsQ0FBbkIsQ0FBUCxJQUFzQ0MsbUJBQW1CRCxLQUFLLENBQUwsS0FBVyxFQUE5QixDQUF0QztBQUNILEtBSEQ7QUFJQSxXQUFPckksTUFBUDtBQUNILENBUkQ7O2tCQVVla0ksYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmYsSUFBTUssVUFBVSxTQUFWQSxPQUFVLENBQVUzSixLQUFWLEVBQWlCO0FBQzdCLFdBQU9BLFVBQVVELFNBQWpCO0FBQ0gsQ0FGRDs7a0JBSWU0SixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKZixJQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBVUMsS0FBVixFQUFpQjdKLEtBQWpCLEVBQXdCO0FBQ3RDLFdBQU82SixTQUFTQSxNQUFNN0osS0FBTixNQUFpQkQsU0FBakM7QUFDSCxDQUZEOztrQkFJZTZKLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7QUFHQSxJQUFNRSxZQUFZLFNBQVpBLFNBQVksQ0FBVS9TLFFBQVYsRUFBb0I7QUFDbEMsUUFBTWdULE1BQU0sNEJBQVo7QUFDQSxRQUFJQSxJQUFJQyxhQUFKLENBQWtCLE1BQWxCLENBQUosRUFDSWpULFNBQVNNLElBQVQsR0FESixLQUdJMFMsSUFBSXpSLGdCQUFKLENBQXFCLGtCQUFyQixFQUF5QyxZQUFZO0FBQ2pEdkIsaUJBQVNNLElBQVQ7QUFDSCxLQUZELEVBRUcsS0FGSDtBQUdQLENBUkQ7O2tCQVVleVMsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQUFNL00sT0FBTyxTQUFQQSxJQUFPLENBQVU5QixJQUFWLEVBQWdCbEUsUUFBaEIsRUFBeUM7QUFBQSxRQUFmMlEsUUFBZSx1RUFBSixFQUFJOztBQUNsRCxRQUFJdEwsT0FBTyxzQkFBT25CLElBQVAsQ0FBWDs7QUFFQSxZQUFRbUIsSUFBUjtBQUNJLGFBQUssT0FBTDtBQUNJLGdCQUFJLE9BQU9yRixRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2hDa0UscUJBQUtOLE9BQUwsQ0FBYSxVQUFDNEgsQ0FBRCxFQUFJMEgsQ0FBSixFQUFPQyxDQUFQO0FBQUEsMkJBQWFuVCxTQUFTTSxJQUFULENBQWNxUSxRQUFkLEVBQXdCbkYsQ0FBeEIsRUFBMkIwSCxDQUEzQixFQUE4QkMsQ0FBOUIsQ0FBYjtBQUFBLGlCQUFiO0FBQ0g7QUFDRDtBQUNKLGFBQUssUUFBTDtBQUNJLGdCQUFJLHNCQUFPalAsSUFBUCxDQUFKLEVBQWtCO0FBQ2Qsb0JBQUlBLGdCQUFnQmtQLFFBQXBCLEVBQ0lsUCxPQUFPOEIsS0FBS1QsTUFBTTZLLElBQU4sQ0FBV2xNLElBQVgsQ0FBTCxFQUF1QmxFLFFBQXZCLEVBQWlDMlEsUUFBakMsQ0FBUCxDQURKLEtBR0l6TSxPQUFPOEIsS0FBSyxDQUFDOUIsSUFBRCxDQUFMLEVBQWFsRSxRQUFiLEVBQXVCMlEsUUFBdkIsQ0FBUDtBQUNQLGFBTEQsTUFNSW5QLE9BQU9DLElBQVAsQ0FBWXlDLElBQVosRUFBa0JOLE9BQWxCLENBQTBCLFVBQUNqQyxHQUFEO0FBQUEsdUJBQVMzQixTQUFTTSxJQUFULENBQWNxUSxRQUFkLEVBQXdCaFAsR0FBeEIsRUFBNkJ1QyxLQUFLdkMsR0FBTCxDQUE3QixFQUF3Q3VDLElBQXhDLENBQVQ7QUFBQSxhQUExQjtBQUNKO0FBQ0osYUFBSyxRQUFMO0FBQ0lBLG1CQUFPOEIsS0FBSzlCLEtBQUtnSyxLQUFMLENBQVcsRUFBWCxDQUFMLEVBQXFCbE8sUUFBckIsRUFBK0IyUSxRQUEvQixDQUFQO0FBQ0E7QUFDSixhQUFLLFFBQUw7QUFDSSxnQkFBTUUsTUFBTyxJQUFJdEwsS0FBSixDQUFVckIsSUFBVixDQUFELENBQWtCb0csSUFBbEIsQ0FBdUIsQ0FBdkIsQ0FBWjtBQUNBcEcsbUJBQU84QixLQUFLNkssR0FBTCxFQUFVN1EsUUFBVixFQUFvQjJRLFFBQXBCLENBQVA7QUFDQTtBQXJCUjs7QUF3QkEsV0FBT3pNLElBQVA7QUFDSCxDQTVCRDs7QUE4QkE4QixLQUFLL0UsTUFBTCxHQUFjLFVBQVUwUSxRQUFWLEVBQW9CeEQsTUFBcEIsRUFBd0M7QUFBQSxRQUFaa0YsS0FBWSx1RUFBSixFQUFJOztBQUNsRCxRQUFNQyxZQUFZLFNBQVpBLFNBQVksQ0FBQzlRLElBQUQ7QUFBQSxlQUFVQSxRQUFRQSxLQUFLWixVQUFiLEdBQTBCWSxLQUFLWixVQUEvQixHQUE0QyxLQUF0RDtBQUFBLEtBQWxCO0FBQ0EsUUFBSWQsVUFBVSxzQkFBTzZRLFFBQVAsSUFBbUJBLFFBQW5CLEdBQThCLHFCQUFNQSxRQUFOLENBQTVDO0FBQ0EsV0FBTzBCLFFBQVEsQ0FBUixJQUFhdlMsT0FBcEIsRUFBNkI7QUFDekJ1UztBQUNBLFlBQUl2UyxRQUFRYyxVQUFSLElBQXNCZCxRQUFRYyxVQUFSLENBQW1CcVIsYUFBbkIsQ0FBaUM5RSxNQUFqQyxDQUExQixFQUFvRTtBQUNoRSxtQkFBT3JOLE9BQVA7QUFDSDtBQUNEQSxrQkFBVXdTLFVBQVV4UyxPQUFWLENBQVY7QUFDSDtBQUNKLENBVkQ7O0FBWUFrRixLQUFLbUksTUFBTCxHQUFjLFVBQVV3RCxRQUFWLEVBQW9CeEQsTUFBcEIsRUFBNEJuTyxRQUE1QixFQUFrRDtBQUFBLFFBQVpxVCxLQUFZLHVFQUFKLEVBQUk7O0FBQzVELFFBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDOVEsSUFBRDtBQUFBLGVBQVVBLFFBQVFBLEtBQUtaLFVBQWIsR0FBMEJZLEtBQUtaLFVBQS9CLEdBQTRDLEtBQXREO0FBQUEsS0FBbEI7QUFDQSxRQUFJZCxVQUFVLHNCQUFPNlEsUUFBUCxJQUFtQkEsUUFBbkIsR0FBOEIscUJBQU1BLFFBQU4sQ0FBNUM7QUFDQSxXQUFPMEIsUUFBUSxDQUFSLElBQWF2UyxPQUFwQixFQUE2QjtBQUN6QnVTO0FBQ0EsWUFBSXZTLFFBQVFjLFVBQVIsSUFBc0JkLFFBQVFjLFVBQVIsQ0FBbUJxUixhQUFuQixDQUFpQzlFLE1BQWpDLENBQTFCLEVBQW9FO0FBQ2hFbk8scUJBQVNjLE9BQVQ7QUFDQSxtQkFBT0EsT0FBUDtBQUNIO0FBQ0RBLGtCQUFVd1MsVUFBVXhTLE9BQVYsQ0FBVjtBQUNIO0FBQ0QsV0FBT0EsT0FBUDtBQUNILENBWkQ7O2tCQWNla0YsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVmLElBQU11TixpQkFBaUIsU0FBakJBLGNBQWlCLENBQVV6RixNQUFWLEVBQWtCO0FBQ3JDLFFBQUl6RCxTQUFTLEVBQWI7QUFDQTdJLFdBQU9DLElBQVAsQ0FBWXFNLE1BQVosRUFBb0JsSyxPQUFwQixDQUE0QixVQUFDakMsR0FBRCxFQUFTO0FBQ2pDMEksa0JBQVUsQ0FBRUEsT0FBTzFHLE1BQVIsR0FBa0IsR0FBbEIsR0FBd0IsR0FBekIsSUFBZ0NoQyxHQUFoQyxHQUFzQyxHQUF0QyxHQUE0QzZSLG1CQUFtQjFGLE9BQU9uTSxHQUFQLENBQW5CLENBQXREO0FBQ0gsS0FGRDs7QUFJQSxXQUFPMEksTUFBUDtBQUNILENBUEQ7O2tCQVNla0osYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGYsSUFBTUUsU0FBUyxTQUFUQSxNQUFTLENBQVU1TSxHQUFWLEVBQWU7QUFDMUIsV0FBT0EsUUFBUW1DLFNBQVIsSUFBcUJuQyxRQUFRLElBQXBDO0FBQ0gsQ0FGRDs7a0JBSWU0TSxNOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hSLElBQU1DLDBCQUFTLFNBQVRBLE1BQVMsQ0FBVUMsV0FBVixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDakQsU0FBSyxJQUFJL0UsS0FBVCxJQUFrQitFLE1BQWxCO0FBQ0ksWUFBSUEsT0FBTzlQLGNBQVAsQ0FBc0IrSyxLQUF0QixDQUFKLEVBQ0k4RSxZQUFZOUUsS0FBWixJQUFxQitFLE9BQU8vRSxLQUFQLENBQXJCO0FBRlIsS0FJQSxTQUFTZ0YsRUFBVCxHQUFjO0FBQ1YsYUFBS3pILFdBQUwsR0FBbUJ1SCxXQUFuQjtBQUNIOztBQUVERSxPQUFHQyxTQUFILEdBQWVGLE9BQU9FLFNBQXRCO0FBQ0FILGdCQUFZRyxTQUFaLEdBQXdCLElBQUlELEVBQUosRUFBeEI7QUFDSCxDQVhNOztBQWFBLElBQU1FLDRDQUFrQixTQUFsQkEsZUFBa0IsQ0FBVUosV0FBVixFQUF1QkMsTUFBdkIsRUFBK0I7QUFDMUQsUUFBSUksaUJBQUo7QUFDQSxTQUFLQSxRQUFMLElBQWlCSixNQUFqQixFQUF5QjtBQUNyQixZQUFJQSxPQUFPSSxRQUFQLEtBQW9CSixPQUFPSSxRQUFQLEVBQWlCNUgsV0FBckMsSUFBb0R3SCxPQUFPSSxRQUFQLEVBQWlCNUgsV0FBakIsS0FBaUM1SyxNQUF6RixFQUFpRztBQUM3Rm1TLHdCQUFZSyxRQUFaLElBQXdCTCxZQUFZSyxRQUFaLEtBQXlCLEVBQWpEO0FBQ0FELDRCQUFnQkosWUFBWUssUUFBWixDQUFoQixFQUF1Q0osT0FBT0ksUUFBUCxDQUF2QztBQUNILFNBSEQsTUFJSUwsWUFBWUssUUFBWixJQUF3QkosT0FBT0ksUUFBUCxDQUF4QjtBQUNQO0FBQ0QsV0FBT0wsV0FBUDtBQUNILENBVk07O2tCQVlRRCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQmY7Ozs7OztBQUdBLElBQU1PLGFBQWEsU0FBYkEsVUFBYSxDQUFVdlEsTUFBVixFQUFrQnFNLElBQWxCLEVBQXdCbUUsU0FBeEIsRUFBbUM7QUFDbEQsUUFBTUMsTUFBTSwyQkFBWXpRLE1BQVosRUFBb0JxTSxJQUFwQixFQUEwQm1FLFNBQTFCLENBQVo7QUFDQSxXQUFPQyxJQUFJeFEsTUFBSixHQUFhd1EsSUFBSSxDQUFKLENBQWIsR0FBc0IsS0FBN0I7QUFDSCxDQUhEOztrQkFLZUYsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZixJQUFNRyxjQUFjLFNBQWRBLFdBQWMsQ0FBVWxRLElBQVYsRUFBZ0I2TCxJQUFoQixFQUFzQm1FLFNBQXRCLEVBQWlDO0FBQ2pELFFBQUkxSSxVQUFKO0FBQUEsUUFBTzJJLE1BQU0sRUFBYjtBQUNBLFFBQUlqUSxRQUFRLFFBQU9BLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBNUIsRUFDSUEsT0FBTzFDLE9BQU9rQyxNQUFQLENBQWNRLElBQWQsQ0FBUDs7QUFFSixRQUFJcUIsTUFBTUMsT0FBTixDQUFjdEIsSUFBZCxDQUFKLEVBQ0ksS0FBS3NILElBQUksQ0FBVCxFQUFZQSxJQUFJdEgsS0FBS1AsTUFBckIsRUFBNkI2SCxHQUE3QjtBQUNJLFlBQUl0SCxLQUFLc0gsQ0FBTCxLQUFXdEgsS0FBS3NILENBQUwsRUFBUXVFLElBQVIsTUFBa0IvRyxTQUE3QixJQUEwQzlFLEtBQUtzSCxDQUFMLEVBQVF1RSxJQUFSLE1BQWtCbUUsU0FBaEUsRUFDSUMsSUFBSXBRLElBQUosQ0FBU0csS0FBS3NILENBQUwsQ0FBVDtBQUZSLEtBSUosT0FBTzJJLEdBQVA7QUFDSCxDQVhEOztBQWFPLElBQU1FLHdCQUFRLFNBQVJBLEtBQVEsQ0FBVTNRLE1BQVYsRUFBa0JxTSxJQUFsQixFQUF3Qm1FLFNBQXhCLEVBQW1DO0FBQ3BELFFBQUlDLE1BQU1DLFlBQVkxUSxNQUFaLEVBQW9CcU0sSUFBcEIsRUFBMEJtRSxTQUExQixDQUFWO0FBQ0EsV0FBT0MsSUFBSXhRLE1BQUosR0FBYXdRLEdBQWIsR0FBbUIsS0FBMUI7QUFDSCxDQUhNOztBQUtBLElBQU1wUCxzQkFBTyxTQUFQQSxJQUFPLENBQVVyQixNQUFWLEVBQWtCcU0sSUFBbEIsRUFBd0JtRSxTQUF4QixFQUFtQztBQUNuRCxRQUFJQyxNQUFNQyxZQUFZMVEsTUFBWixFQUFvQnFNLElBQXBCLEVBQTBCbUUsU0FBMUIsQ0FBVjtBQUNBLFdBQU9DLElBQUl4USxNQUFKLEdBQWF3USxJQUFJLENBQUosQ0FBYixHQUFzQixLQUE3QjtBQUNILENBSE07O2tCQUtRQyxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBOzs7Ozs7Ozs7OztBQVdBLElBQU1FLFNBQVMsU0FBVEEsTUFBUyxDQUFVQyxNQUFWLEVBQWtCclEsSUFBbEIsRUFBd0I7QUFDbkMsUUFBSXNRLFlBQUo7QUFDQSxRQUFJalAsTUFBTUMsT0FBTixDQUFjdEIsSUFBZCxDQUFKLEVBQ0lzUSxNQUFNLElBQUlsRSxNQUFKLENBQVcsVUFBWCxDQUFOLENBREosS0FFSyxJQUFJcE0sUUFBUSxRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQTVCLEVBQ0RzUSxNQUFNLElBQUlsRSxNQUFKLENBQVcsVUFBWCxDQUFOOztBQUVKLFdBQU9pRSxPQUFPRSxPQUFQLENBQWVELEdBQWYsRUFBb0IsVUFBVTdGLEtBQVYsRUFBaUIrRixNQUFqQixFQUF5QjtBQUNoRCxZQUFJLHVCQUFReFEsS0FBS3dRLE1BQUwsQ0FBUixLQUF5QixzQkFBT3hRLEtBQUt3USxNQUFMLENBQVAsQ0FBN0IsRUFDSXhRLEtBQUt3USxNQUFMLElBQWUsd0JBQVN4USxLQUFLd1EsTUFBTCxDQUFULENBQWY7O0FBRUosZUFBTyxRQUFPeFEsS0FBS3dRLE1BQUwsQ0FBUCxNQUF3QjFMLFNBQXhCLEdBQW9DOUUsS0FBS3dRLE1BQUwsQ0FBcEMsR0FBbUQvRixLQUExRDtBQUNILEtBTE0sQ0FBUDtBQU1ILENBYkQ7O2tCQWVlMkYsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JmLElBQU1LLGNBQWMsU0FBZEEsV0FBYyxHQUFZOztBQUU1QixRQUFJLE9BQU8zUSxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ2pDLGVBQU9BLFFBQVA7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNBLGNBQU0sSUFBSXVGLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7QUFDSixDQVJEOztrQkFVZW9MLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZmLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxHQUFZOztBQUU1QixRQUFJLE9BQU9DLFFBQVAsS0FBb0IsV0FBeEIsRUFBb0M7QUFDaEMsZUFBT0EsUUFBUDtBQUNILEtBRkQsTUFFTztBQUNILGNBQU0sSUFBSXRMLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7QUFDSixDQVBEOztrQkFTZXFMLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RmLElBQU1FLFlBQVksU0FBWkEsU0FBWSxHQUFZOztBQUUxQixRQUFJLE9BQU90VSxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQy9CLGVBQU9BLE1BQVA7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNBLGNBQU0sSUFBSStJLEtBQUosQ0FBVSwwQkFBVixDQUFOO0FBQ0g7QUFDSixDQVJEOztrQkFVZXVMLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hmOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFVelEsTUFBVixFQUFrQnRFLFFBQWxCLEVBQTRCdU4sWUFBNUIsRUFBMEM7QUFDMUQsUUFBSTVMLFlBQUo7QUFDQSxRQUFJcVQsV0FBVyxFQUFmO0FBQ0EsUUFBTUMsTUFBTSxJQUFJQyxjQUFKLEVBQVo7QUFDQSxRQUFNQyxVQUFVO0FBQ1puUyxjQUFNc0IsT0FBT3RCLElBQVAsSUFBZSxFQURUO0FBRVpvUyxnQkFBUTlRLE9BQU84USxNQUFQLElBQWlCOVEsT0FBTytRLEdBQXhCLElBQStCclIsU0FBUzZRLFFBQVQsQ0FBa0JTLElBRjdDO0FBR1o5RyxnQkFBUWxLLE9BQU9rSyxNQUFQLEdBQWdCbEssT0FBT2tLLE1BQVAsQ0FBYzlKLFdBQWQsRUFBaEIsR0FBOEMsS0FIMUM7QUFJWjZRLGlCQUFTalIsT0FBT2lSLE9BQVAsSUFBa0IsRUFKZjtBQUtaQyxtQkFBV2xSLE9BQU9rUixTQUFQLEtBQXFCeE0sU0FBckIsR0FBaUMsSUFBakMsR0FBd0MsQ0FBQyxDQUFDMUUsT0FBT2tSLFNBTGhEO0FBTVpDLHFCQUFhblIsT0FBT21SLFdBQVAsS0FBdUJ6TSxTQUF2QixHQUFtQyxLQUFuQyxHQUEyQyxDQUFDLENBQUMxRSxPQUFPbVIsV0FOckQ7QUFPWkMsZUFBT3BSLE9BQU9vUixLQUFQLEtBQWlCMU0sU0FBakIsR0FBNkIsSUFBN0IsR0FBb0MsQ0FBQyxDQUFDMUUsT0FBT29SLEtBUHhDO0FBUVpDLGNBQU1yUixPQUFPcVIsSUFBUCxJQUFlLElBUlQ7QUFTWkMsa0JBQVV0UixPQUFPcVIsSUFBUCxJQUFlO0FBVGIsS0FBaEI7O0FBWUEsUUFBTUUsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVL0gsTUFBVixFQUFrQjtBQUNwQyxZQUFJekQsU0FBUyxFQUFiO0FBQ0EsYUFBSzFJLEdBQUwsSUFBWW1NLE1BQVosRUFBb0I7QUFDaEJ6RCxzQkFBVSxNQUFNMUksR0FBTixHQUFZLEdBQVosSUFBbUJ3VCxRQUFRSyxTQUFSLEdBQW9CaEMsbUJBQW1CMUYsT0FBT25NLEdBQVAsQ0FBbkIsQ0FBcEIsR0FBc0RtTSxPQUFPbk0sR0FBUCxDQUF6RSxDQUFWO0FBQ0g7QUFDRCxlQUFPMEksTUFBUDtBQUNILEtBTkQ7O0FBUUFrRCxtQkFBZ0Isc0JBQU9BLFlBQVAsRUFBcUIsUUFBckIsQ0FBRCxHQUFtQ0EsWUFBbkMsR0FBa0QsRUFBakU7O0FBRUE7QUFDQSxRQUFJNEgsUUFBUTNHLE1BQVIsS0FBbUIsS0FBdkIsRUFBOEI7O0FBRTFCO0FBQ0EyRyxnQkFBUUMsTUFBUixJQUFrQkQsUUFBUUMsTUFBUixDQUFlOUMsT0FBZixDQUF1QixHQUF2QixNQUFnQyxDQUFDLENBQWpDLEdBQXFDLEdBQXJDLEdBQTJDLEVBQTdEO0FBQ0E2QyxnQkFBUUMsTUFBUixJQUFrQlMsY0FBY1YsUUFBUW5TLElBQXRCLENBQWxCO0FBQ0FnUyxtQkFBVyxFQUFYO0FBRUgsS0FQRCxNQU9POztBQUVIO0FBQ0EsWUFBSUcsUUFBUW5TLElBQVIsWUFBd0I4UyxRQUE1QixFQUFzQztBQUNsQ1gsb0JBQVFuUyxJQUFSLEdBQWUsRUFBZjtBQUNBbVMsb0JBQVFNLFdBQVIsR0FBc0IsSUFBdEI7QUFDQVQsdUJBQVdHLFFBQVFuUyxJQUFuQjtBQUNIOztBQUVEO0FBQ0EsWUFBSW1TLFFBQVFuUyxJQUFSLFlBQXdCK1MsZUFBNUIsRUFBNkM7QUFDekNmLHVCQUFXLElBQUljLFFBQUosQ0FBYVgsUUFBUW5TLElBQXJCLENBQVg7QUFDQW1TLG9CQUFRTSxXQUFSLEdBQXNCLElBQXRCO0FBQ0FOLG9CQUFRblMsSUFBUixHQUFlLEVBQWY7QUFDSDs7QUFFRCxZQUFJbVMsUUFBUU0sV0FBWixFQUF5QjtBQUNyQixnQkFBSSxFQUFFVCxvQkFBb0JjLFFBQXRCLENBQUosRUFBcUNkLFdBQVcsSUFBSWMsUUFBSixFQUFYOztBQUVyQ3RVLG1CQUFPQyxJQUFQLENBQVkwVCxRQUFRblMsSUFBcEIsRUFBMEJZLE9BQTFCLENBQWtDLFVBQUNqQyxHQUFELEVBQVM7QUFDdkNxVCx5QkFBU3ZTLE1BQVQsQ0FBZ0JkLEdBQWhCLEVBQXFCd1QsUUFBUUssU0FBUixHQUFvQmhDLG1CQUFtQjJCLFFBQVFuUyxJQUFSLENBQWFyQixHQUFiLENBQW5CLENBQXBCLEdBQTREd1QsUUFBUW5TLElBQVIsQ0FBYXJCLEdBQWIsQ0FBakY7QUFDSCxhQUZEO0FBSUgsU0FQRCxNQU9PO0FBQ0hxVCx1QkFBV2EsY0FBY1YsUUFBUW5TLElBQXRCLENBQVg7QUFDSDtBQUVKOztBQUVEO0FBQ0FpUyxRQUFJZSxJQUFKLENBQVNiLFFBQVEzRyxNQUFqQixFQUF5QjJHLFFBQVFDLE1BQWpDLEVBQXlDRCxRQUFRTyxLQUFqRCxFQUF3RFAsUUFBUVEsSUFBaEUsRUFBc0VSLFFBQVFTLFFBQTlFOztBQUVBWCxRQUFJZ0IsZ0JBQUosQ0FBcUIsa0JBQXJCLEVBQXlDLGdCQUF6Qzs7QUFFQSxRQUFJZCxRQUFRM0csTUFBUixLQUFtQixLQUFuQixJQUE0QixDQUFDMkcsUUFBUU0sV0FBekMsRUFBc0Q7QUFDbERSLFlBQUlnQixnQkFBSixDQUFxQixjQUFyQixFQUFxQyxtQ0FBckM7QUFDSDs7QUFFRCxTQUFLdFUsR0FBTCxJQUFZd1QsUUFBUUksT0FBcEIsRUFBNkI7QUFDekJOLFlBQUlnQixnQkFBSixDQUFxQnRVLEdBQXJCLEVBQTBCd1QsUUFBUUksT0FBUixDQUFnQjVULEdBQWhCLENBQTFCO0FBQ0g7O0FBRURzVCxRQUFJaUIsU0FBSixHQUFnQixZQUFZO0FBQ3hCM0kscUJBQWEySCxjQUFiLEdBQThCRCxHQUE5QjtBQUNBLFlBQUksT0FBT2pWLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDaENBLHFCQUFTTSxJQUFULENBQWNpTixZQUFkLEVBQTRCMEgsSUFBSWtCLE1BQWhDLEVBQXdDbEIsSUFBSW1CLFlBQTVDLEVBQTBEbkIsR0FBMUQ7QUFDSDtBQUNKLEtBTEQ7O0FBT0FBLFFBQUlvQixXQUFKLEdBQWtCbEIsT0FBbEI7QUFDQUYsUUFBSXFCLElBQUosQ0FBU3RCLFFBQVQ7QUFDQSxXQUFPQyxHQUFQO0FBQ0gsQ0F0RkQ7O2tCQXdGZUYsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFPQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTXZGLFNBQVM7QUFDWE8sd0JBRFc7QUFFWGpJLDBDQUZXO0FBR1h5Siw0Q0FIVztBQUlYRyxzQkFKVztBQUtYcUIsa0NBTFc7QUFNWDRCLHNDQU5XO0FBT1hHLGtDQVBXO0FBUVh2Uyw0QkFSVztBQVNYZ1UsZ0NBVFc7QUFVWEMsd0NBVlc7QUFXWEMsZ0NBWFc7QUFZWGpFLDBCQVpXO0FBYVhrRSxnQ0FiVztBQWNYQyw0QkFkVztBQWVYcEQsNENBZlc7QUFnQlhoQiw0Q0FoQlc7QUFpQlh3QyxzQ0FqQlc7QUFrQlhuQyw4QkFsQlc7QUFtQlhDLGtDQW5CVztBQW9CWGEsNEJBcEJXO0FBcUJYSyw0Q0FyQlc7QUFzQlgvTix3QkF0Qlc7QUF1QlhpTyxvQ0F2Qlc7QUF3QlhHLHNDQXhCVztBQXlCWEUsNEJBekJXO0FBMEJYc0MsOEJBMUJXO0FBMkJYQyw0QkEzQlc7QUE0QlhDLDhCQTVCVztBQTZCWEMsNEJBN0JXO0FBOEJYQyxvQ0E5Qlc7QUErQlhDLDBCQS9CVztBQWdDWEMsMENBaENXO0FBaUNYL1Usb0JBakNXO0FBa0NYcEIsZ0NBbENXO0FBbUNYb1csMENBbkNXO0FBb0NYM1AsNEJBcENXO0FBcUNYNFAsb0NBckNXO0FBc0NYQyxrQ0F0Q1c7QUF1Q1hDLHNDQXZDVztBQXdDWEMsc0NBeENXO0FBeUNYQyxzREF6Q1c7QUEwQ1hDLGdDQTFDVztBQTJDWEMsNEJBM0NXO0FBNENYQyx3Q0E1Q1c7QUE2Q1hDLHNCQTdDVztBQThDWGxILHdCQTlDVztBQStDWHRPLDBCQS9DVztBQWdEWHlWLGdDQWhEVztBQWlEWEMsd0NBakRXO0FBa0RYbEgsc0NBbERXO0FBbURYbUgsZ0NBbkRXO0FBb0RYdEUsNEJBcERXO0FBcURYdUUsa0NBckRXO0FBc0RYQyx3Q0F0RFc7QUF1RFhDLGdDQXZEVztBQXdEWEMsd0NBeERXO0FBeURYQyw0QkF6RFc7QUEwRFhDLDBCQTFEVztBQTJEWEMsZ0NBM0RXO0FBNERYQztBQTVEVyxDQUFmOztrQkErRGUvSSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU1qTixTQUFTLFNBQVRBLE1BQVMsQ0FBVW9QLFFBQVYsRUFBb0IzTyxJQUFwQixFQUEwQlAsTUFBMUIsRUFBa0MrSCxFQUFsQyxFQUNmO0FBQ0ksUUFBSSxzQkFBT21ILFFBQVAsRUFBaUIsT0FBakIsQ0FBSixFQUErQjtBQUMzQkEsaUJBQVMvTixPQUFULENBQWlCLFVBQUNwQixJQUFELEVBQVU7QUFDdkJELG1CQUFPQyxJQUFQLEVBQWFRLElBQWIsRUFBbUIsSUFBbkIsRUFBeUJ3SCxFQUF6QjtBQUNILFNBRkQ7QUFHQTtBQUNIOztBQUVELFFBQUksc0JBQU9tSCxRQUFQLEVBQWlCLFFBQWpCLENBQUosRUFDSUEsV0FBVyxxQkFBTUEsUUFBTixFQUFnQm5ILEVBQWhCLENBQVg7O0FBRUosUUFBSSxDQUFDL0gsTUFBTCxFQUNJa1AsU0FBUzZHLFdBQVQsR0FBdUIsRUFBdkI7O0FBRUosUUFBSSxzQkFBTzdHLFFBQVAsQ0FBSixFQUFzQjtBQUNsQixZQUFJLHNCQUFPM08sSUFBUCxDQUFKLEVBQWtCO0FBQ2QyTyxxQkFBU3hRLFdBQVQsQ0FBcUI2QixJQUFyQjtBQUNILFNBRkQsTUFFTyxJQUFJLHNCQUFPQSxJQUFQLEVBQWEsT0FBYixDQUFKLEVBQTJCO0FBQzlCLGdCQUFJd0ksVUFBSjtBQUNBLGlCQUFLQSxJQUFJLENBQVQsRUFBWUEsSUFBSXhJLEtBQUtXLE1BQXJCLEVBQTZCNkgsR0FBN0I7QUFDSWpKLHVCQUFPb1AsUUFBUCxFQUFpQjNPLEtBQUt3SSxDQUFMLENBQWpCLEVBQTBCLElBQTFCLEVBQWdDaEIsRUFBaEM7QUFESjtBQUVILFNBSk0sTUFJQTtBQUNIbUgscUJBQVM4RyxTQUFULEdBQXNCLENBQUNoVyxNQUFGLEdBQVlPLElBQVosR0FBbUIyTyxTQUFTOEcsU0FBVCxHQUFxQnpWLElBQTdEO0FBQ0g7QUFDRCxlQUFPMk8sUUFBUDtBQUNIO0FBQ0QsV0FBTyxJQUFQO0FBQ0gsQ0E1QkQ7O2tCQThCZXBQLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DZixJQUFNeVYsWUFBWSxTQUFaQSxTQUFZLENBQVVuUixHQUFWLEVBQWU7QUFDN0IsV0FBT0EsUUFBUW1DLFNBQWY7QUFDSCxDQUZEOztrQkFJZWdQLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7QUFHQSxJQUFNcEIsVUFBVSxTQUFWQSxPQUFVLENBQVUvUCxHQUFWLEVBQWU7QUFDM0IsUUFBSSxzQkFBT0EsR0FBUCxFQUFZLFFBQVosS0FBeUIsc0JBQU9BLEdBQVAsRUFBWSxPQUFaLENBQTdCLEVBQW1EO0FBQy9DLGFBQUssSUFBSWxGLEdBQVQsSUFBZ0JrRixHQUFoQjtBQUNJLGdCQUFJQSxJQUFJL0MsY0FBSixDQUFtQm5DLEdBQW5CLENBQUosRUFDSSxPQUFPLEtBQVA7QUFGUixTQUdBLE9BQU8sSUFBUDtBQUNILEtBTEQsTUFLTyxJQUFJLHNCQUFPa0YsR0FBUCxFQUFZLFFBQVosQ0FBSixFQUEyQjtBQUM5QkEsY0FBTUEsSUFBSTROLE9BQUosQ0FBWSxLQUFaLEVBQW1CLEVBQW5CLENBQU47QUFDQSxlQUFPNU4sUUFBUSxFQUFSLElBQWNBLFFBQVEsR0FBN0I7QUFDSCxLQUhNLE1BR0E7QUFDSCxlQUFRQSxRQUFRLENBQVIsSUFBYUEsUUFBUSxJQUFyQixJQUE2QkEsUUFBUW1DLFNBQXJDLElBQWtEbkMsUUFBUSxLQUExRCxJQUFtRTRHLE1BQU01RyxHQUFOLENBQTNFO0FBQ0g7QUFDSixDQVpEOztrQkFjZStQLE87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJmOztBQUVBLElBQU1rQixlQUFlLFNBQWZBLFlBQWUsQ0FBVTdPLEtBQVYsRUFBaUM7QUFBQSxRQUFoQnlQLE1BQWdCLHVFQUFQLEtBQU87OztBQUVsRCxRQUFJQSxNQUFKLEVBQVk7QUFDUixZQUFNQyxNQUFNM1UsU0FBUzhELGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBNlEsWUFBSUYsU0FBSixHQUFnQnhQLEtBQWhCO0FBQ0EsZUFBTyxDQUFDLENBQUMwUCxJQUFJQyxpQkFBYjtBQUNIOztBQUVELFdBQU8zUCxNQUFNNkYsSUFBTixHQUFhckssU0FBYixDQUF1QixDQUF2QixFQUEwQixDQUExQixNQUFpQyxHQUF4QztBQUNILENBVEQ7O2tCQVdlcVQsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hmLElBQU1qQixTQUFTLFNBQVRBLE1BQVMsQ0FBVTVOLEtBQVYsRUFBaUI7QUFDNUIsV0FBT0EsVUFBVUEsTUFBTTRQLFFBQU4sS0FBbUJ6WCxLQUFLMFgsU0FBeEIsSUFDYjdQLE1BQU00UCxRQUFOLEtBQW1CelgsS0FBSzJYLFlBRFgsSUFFYjlQLE1BQU00UCxRQUFOLEtBQW1CelgsS0FBSzRYLHNCQUZYLElBR2IvUCxNQUFNNFAsUUFBTixLQUFtQnpYLEtBQUs2WCxhQUhyQixDQUFQO0FBSUgsQ0FMRDs7a0JBT2VwQyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSZixJQUFNa0IsV0FBVyxTQUFYQSxRQUFXLENBQVU5TyxLQUFWLEVBQWlCO0FBQzlCLFdBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUE2QkEsaUJBQWlCdUgsTUFBckQ7QUFDSCxDQUZEOztrQkFJZXVILFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pmLElBQU1FLGVBQWUsU0FBZkEsWUFBZSxDQUFVcFIsR0FBVixFQUFlbUIsTUFBZixFQUF1QmxCLE9BQXZCLEVBQWdDO0FBQ2pEQyxVQUFNRixHQUFOLEVBQ0tHLElBREwsQ0FDVTtBQUFBLGVBQVlDLFNBQVNpUyxJQUFULEVBQVo7QUFBQSxLQURWLEVBRUtsUyxJQUZMLENBRVU7QUFBQSxlQUFRZ0IsT0FBT2tSLElBQVAsQ0FBUjtBQUFBLEtBRlYsRUFHS2hTLEtBSEwsQ0FHVztBQUFBLGVBQVMsT0FBT0osT0FBUCxLQUFtQixVQUFuQixHQUFnQ0EsUUFBUUssS0FBUixDQUFoQyxHQUFpRCxJQUExRDtBQUFBLEtBSFg7QUFJSCxDQUxEOztrQkFPZThRLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1uQixVQUFVLFNBQVZBLE9BQVUsQ0FBVWpRLEdBQVYsRUFBZW1CLE1BQWYsRUFBdUJsQixPQUF2QixFQUFnQztBQUM1QyxRQUFJLENBQUNELEdBQUwsRUFBVSxPQUFPLElBQVA7QUFDVixRQUFJLHNCQUFPQSxHQUFQLEVBQVksT0FBWixDQUFKLEVBQTBCO0FBQ3RCLGFBQUssSUFBSTJFLElBQUksQ0FBYixFQUFnQkEsSUFBSTNFLElBQUlsRCxNQUF4QixFQUFnQzZILEdBQWhDLEVBQXFDO0FBQ2pDc0wsb0JBQVFqUSxJQUFJMkUsQ0FBSixDQUFSLEVBQWdCeEQsTUFBaEIsRUFBd0JsQixPQUF4QjtBQUNIO0FBQ0osS0FKRCxNQUlPO0FBQ0gsWUFBTWtNLE1BQU0sNEJBQVo7QUFDQSxZQUFNbUcsT0FBT25HLElBQUlsTCxhQUFKLENBQWtCLE1BQWxCLENBQWI7QUFDQSxZQUFNOUYsS0FBSyxTQUFTdUYsS0FBS0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxLQUEzQixDQUFpQyxDQUFqQyxDQUFwQjs7QUFFQXlSLGFBQUs3RCxJQUFMLEdBQWF6TyxJQUFJa0IsTUFBSixDQUFXLENBQUMsQ0FBWixNQUFtQixNQUFwQixHQUE4QmxCLEdBQTlCLEdBQW9DQSxNQUFNLE1BQXREO0FBQ0FzUyxhQUFLQyxHQUFMLEdBQVcsWUFBWDtBQUNBRCxhQUFLblgsRUFBTCxHQUFVQSxFQUFWO0FBQ0FtWCxhQUFLblIsTUFBTCxHQUFjQSxNQUFkO0FBQ0FtUixhQUFLclMsT0FBTCxHQUFlQSxPQUFmOztBQUVBa00sWUFBSTlLLElBQUosQ0FBUy9HLFdBQVQsQ0FBcUJnWSxJQUFyQjtBQUNBLGVBQU9BLElBQVA7QUFDSDtBQUNKLENBcEJEOztrQkFzQmVyQyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmY7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTXVDLGtCQUFrQiw0QkFBeEI7QUFDQSxJQUFNdEMsU0FBUyxTQUFUQSxNQUFTLENBQVVsUSxHQUFWLEVBQWVtQixNQUFmLEVBQXVCbEIsT0FBdkIsRUFBZ0M7QUFDM0MsUUFBSSxDQUFDRCxHQUFMLEVBQVUsT0FBTyxJQUFQO0FBQ1YsUUFBSSxzQkFBT0EsR0FBUCxFQUFZLE9BQVosQ0FBSixFQUEwQjtBQUN0QixhQUFLLElBQUkyRSxJQUFJLENBQWIsRUFBZ0JBLElBQUkzRSxJQUFJbEQsTUFBeEIsRUFBZ0M2SCxHQUFoQyxFQUFxQztBQUNqQ3VMLG1CQUFPbFEsSUFBSTJFLENBQUosQ0FBUCxFQUFleEQsTUFBZixFQUF1QmxCLE9BQXZCO0FBQ0g7QUFDSixLQUpELE1BSU87QUFDSCxZQUFNZSxTQUFTd1IsZ0JBQWdCdlIsYUFBaEIsQ0FBOEIsUUFBOUIsQ0FBZjtBQUNBLFlBQU05RixLQUFLLGNBQWN1RixLQUFLQyxNQUFMLEdBQWNDLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkJDLEtBQTNCLENBQWlDLENBQWpDLENBQXpCOztBQUVBRyxlQUFPaEIsR0FBUCxHQUFjQSxJQUFJa0IsTUFBSixDQUFXLENBQUMsQ0FBWixNQUFtQixLQUFwQixHQUE2QmxCLEdBQTdCLEdBQW1DQSxNQUFNLEtBQXREO0FBQ0FnQixlQUFPeEMsSUFBUCxHQUFjLHdCQUFkO0FBQ0F3QyxlQUFPN0YsRUFBUCxHQUFZQSxFQUFaO0FBQ0E2RixlQUFPRyxNQUFQLEdBQWdCQSxNQUFoQjtBQUNBSCxlQUFPZixPQUFQLEdBQWlCQSxPQUFqQjs7QUFFQXVTLHdCQUFnQm5SLElBQWhCLENBQXFCL0csV0FBckIsQ0FBaUMwRyxNQUFqQztBQUNBLGVBQU9BLE1BQVA7QUFDSDtBQUNKLENBbkJEOztrQkFxQmVrUCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmYsSUFBTW1CLFdBQVcsU0FBWEEsUUFBVyxDQUFVclIsR0FBVixFQUFlbUIsTUFBZixFQUF1QmxCLE9BQXZCLEVBQWdDO0FBQzdDQyxVQUFNRixHQUFOLEVBQ0tHLElBREwsQ0FDVTtBQUFBLGVBQVlDLFNBQVNYLElBQVQsRUFBWjtBQUFBLEtBRFYsRUFFS1UsSUFGTCxDQUVVO0FBQUEsZUFBUWdCLE9BQU8xQixJQUFQLENBQVI7QUFBQSxLQUZWLEVBR0tZLEtBSEwsQ0FHVztBQUFBLGVBQVMsT0FBT0osT0FBUCxLQUFtQixVQUFuQixHQUFnQ0EsUUFBUUssS0FBUixDQUFoQyxHQUFpRCxJQUExRDtBQUFBLEtBSFg7QUFJSCxDQUxEOztrQkFPZStRLFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BmOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkEsSUFBTWxCLGFBQWEsU0FBYkEsVUFBYSxDQUFVNVAsSUFBVixFQUFnQnBILFFBQWhCLEVBQTBCOEcsT0FBMUIsRUFBbUM7QUFDbEQsUUFBSSxzQkFBT00sSUFBUCxFQUFhLFFBQWIsS0FBMEIsc0JBQU9BLElBQVAsRUFBYSxPQUFiLENBQTlCLEVBQXFEO0FBQ2pELFlBQUksc0JBQU9BLElBQVAsRUFBYSxPQUFiLENBQUosRUFBMkI7QUFDdkIsZ0JBQU1DLE1BQU0sRUFBWjtBQUNBRCxpQkFBS3hELE9BQUwsQ0FBYyxVQUFDMEQsSUFBRCxFQUFPa0UsQ0FBUCxFQUFhO0FBQ3ZCbkUsb0JBQUksY0FBY0UsS0FBS0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxLQUEzQixDQUFpQyxDQUFqQyxDQUFsQixJQUF5REosSUFBekQ7QUFDSCxhQUZEO0FBR0FGLG1CQUFPQyxHQUFQO0FBQ0g7QUFDRCxZQUFJTyxXQUFXLENBQWY7QUFDQSxZQUFNRCxVQUFVLEVBQWhCO0FBQ0FuRyxlQUFPQyxJQUFQLENBQVkyRixJQUFaLEVBQWtCeEQsT0FBbEIsQ0FBMEIsVUFBQ2pDLEdBQUQsRUFBUztBQUMvQixnQkFBTWtGLE1BQU1PLEtBQUt6RixHQUFMLENBQVo7QUFDQSxnQkFBTWtHLFNBQVMsNkJBQWMsUUFBZCxFQUF3QjtBQUNuQ2hCLHFCQUFNQSxJQUFJa0IsTUFBSixDQUFXLENBQUMsQ0FBWixNQUFtQixLQUFwQixHQUE2QmxCLEdBQTdCLEdBQW1DQSxNQUFNLEtBRFg7QUFFbkN4QixzQkFBTSx3QkFGNkI7QUFHbkNyRCxvQkFBSUw7QUFIK0IsYUFBeEIsQ0FBZjtBQUtBa0csbUJBQU9mLE9BQVAsR0FBaUJBLE9BQWpCO0FBQ0FlLG1CQUFPRyxNQUFQLEdBQWdCLFVBQVVDLENBQVYsRUFBYTtBQUN6Qk4sd0JBQVEsS0FBSzNGLEVBQWIsSUFBbUIsSUFBbkI7QUFDQTRGO0FBQ0Esb0JBQUlBLGFBQWFqRSxNQUFqQixFQUF5QjtBQUNyQjNELDZCQUFTTSxJQUFULENBQWMsRUFBZCxFQUFrQnFILE9BQWxCO0FBQ0g7QUFDSixhQU5EO0FBT0EzRCxxQkFBU2tFLElBQVQsQ0FBYy9HLFdBQWQsQ0FBMEIwRyxNQUExQjtBQUNILFNBaEJEO0FBaUJIO0FBQ0osQ0E3QkQ7O2tCQStCZW1QLFU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEZixJQUFNbUIsZUFBZSxTQUFmQSxZQUFlLENBQVV0UixHQUFWLEVBQWVtQixNQUFmLEVBQXVCbEIsT0FBdkIsRUFBZ0M7QUFDakRDLFVBQU1GLEdBQU4sRUFDS0csSUFETCxDQUNVO0FBQUEsZUFBWUMsU0FBU3FTLElBQVQsRUFBWjtBQUFBLEtBRFYsRUFFS3RTLElBRkwsQ0FFVTtBQUFBLGVBQVFnQixPQUFPc1IsSUFBUCxDQUFSO0FBQUEsS0FGVixFQUdLcFMsS0FITCxDQUdXO0FBQUEsZUFBUyxPQUFPSixPQUFQLEtBQW1CLFVBQW5CLEdBQWdDQSxRQUFRSyxLQUFSLENBQWhDLEdBQWlELElBQTFEO0FBQUEsS0FIWDtBQUlILENBTEQ7O2tCQU9lZ1IsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGYsSUFBTWxCLFFBQVEsU0FBUkEsS0FBUSxDQUFDc0MsT0FBRCxFQUFVQyxPQUFWLEVBQXNCO0FBQ2hDLFNBQUssSUFBSTdYLEdBQVQsSUFBZ0I2WCxPQUFoQixFQUF5QjtBQUNyQixZQUFJO0FBQ0EsZ0JBQUtBLFFBQVE3WCxHQUFSLEVBQWF5SyxXQUFiLEtBQTZCNUssTUFBbEMsRUFBMkM7QUFDdkMrWCx3QkFBUTVYLEdBQVIsSUFBZXNWLE1BQU1zQyxRQUFRNVgsR0FBUixDQUFOLEVBQW9CNlgsUUFBUTdYLEdBQVIsQ0FBcEIsQ0FBZjtBQUNILGFBRkQsTUFFTztBQUNINFgsd0JBQVE1WCxHQUFSLElBQWU2WCxRQUFRN1gsR0FBUixDQUFmO0FBQ0g7QUFDSixTQU5ELENBTUUsT0FBTXNHLENBQU4sRUFBUztBQUNQc1Isb0JBQVE1WCxHQUFSLElBQWU2WCxRQUFRN1gsR0FBUixDQUFmO0FBRUg7QUFDSjtBQUNELFdBQU80WCxPQUFQO0FBQ0gsQ0FkRDs7a0JBZ0JldEMsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmLElBQU1SLFdBQVksU0FBWkEsUUFBWSxDQUFVM1YsT0FBVixFQUFtQjtBQUNqQyxRQUFNMlksWUFBWXpWLFNBQVM4RCxhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0EyUixjQUFVdFksV0FBVixDQUFzQkwsUUFBUXVELFNBQVIsQ0FBa0IsSUFBbEIsQ0FBdEI7QUFDQSxXQUFPb1YsVUFBVWhCLFNBQWpCO0FBQ0gsQ0FKRDs7a0JBTWVoQyxROzs7Ozs7Ozs7Ozs7Ozs7OztBQ1BSLElBQU1TLHdDQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVXJWLENBQVYsRUFBYTtBQUN0QyxRQUFJb0csVUFBSjtBQUNBLFFBQUlWLEtBQUttUyxHQUFMLENBQVM3WCxDQUFULElBQWMsR0FBbEIsRUFBdUI7QUFDbkJvRyxZQUFJeEMsU0FBUzVELEVBQUU0RixRQUFGLEdBQWF5RyxLQUFiLENBQW1CLElBQW5CLEVBQXlCLENBQXpCLENBQVQsQ0FBSjtBQUNBLFlBQUlqRyxDQUFKLEVBQU87QUFDSHBHLGlCQUFLMEYsS0FBS29TLEdBQUwsQ0FBUyxFQUFULEVBQVkxUixJQUFFLENBQWQsQ0FBTDtBQUNBcEcsZ0JBQUksT0FBUSxJQUFJMEQsS0FBSixDQUFVMEMsQ0FBVixDQUFELENBQWVxRyxJQUFmLENBQW9CLEdBQXBCLENBQVAsR0FBa0N6TSxFQUFFNEYsUUFBRixHQUFhaEQsU0FBYixDQUF1QixDQUF2QixDQUF0QztBQUNIO0FBQ0osS0FORCxNQU1PO0FBQ0h3RCxZQUFJeEMsU0FBUzVELEVBQUU0RixRQUFGLEdBQWF5RyxLQUFiLENBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQVQsQ0FBSjtBQUNBLFlBQUlqRyxJQUFJLEVBQVIsRUFBWTtBQUNSQSxpQkFBSyxFQUFMO0FBQ0FwRyxpQkFBSzBGLEtBQUtvUyxHQUFMLENBQVMsRUFBVCxFQUFZMVIsQ0FBWixDQUFMO0FBQ0FwRyxpQkFBTSxJQUFJMEQsS0FBSixDQUFVMEMsSUFBRSxDQUFaLENBQUQsQ0FBaUJxRyxJQUFqQixDQUFzQixHQUF0QixDQUFMO0FBQ0g7QUFDSjtBQUNELFdBQU96TSxDQUFQO0FBQ0gsQ0FqQk07O2tCQW1CUXFWLGE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUdBLElBQU0vVSxLQUFLLFNBQUxBLEVBQUssQ0FBVXdQLFFBQVYsRUFBb0I3RyxTQUFwQixFQUErQjlLLFFBQS9CLEVBQXlDNFosTUFBekMsRUFBaUQ7QUFDeEQsUUFBSXBPLFVBQUo7QUFBQSxRQUFPb0csV0FBVyxFQUFsQjs7QUFFQSxZQUFRLHNCQUFPRCxRQUFQLENBQVI7QUFDSSxhQUFLLFFBQUw7QUFDSUMsdUJBQVcsd0JBQVNELFFBQVQsQ0FBWDtBQUNBO0FBQ0osYUFBSyxRQUFMO0FBQ0ksZ0JBQUksc0JBQU9BLFFBQVAsQ0FBSixFQUNJQyxXQUFXLENBQUNELFFBQUQsQ0FBWDtBQUNKO0FBQ0osYUFBSyxPQUFMO0FBQ0lDLHVCQUFXRCxRQUFYO0FBQ0E7QUFWUjs7QUFhQSxTQUFLbkcsSUFBSSxDQUFULEVBQVlBLElBQUlvRyxTQUFTak8sTUFBekIsRUFBaUM2SCxHQUFqQyxFQUFzQztBQUNsQyxZQUFJb0csU0FBU3BHLENBQVQsS0FBZW9HLFNBQVNwRyxDQUFULEVBQVlqSyxnQkFBL0IsRUFDSXFRLFNBQVNwRyxDQUFULEVBQVlqSyxnQkFBWixDQUE2QnVKLFNBQTdCLEVBQXdDOUssUUFBeEMsRUFBa0QsQ0FBQyxDQUFDNFosTUFBcEQ7QUFDUDtBQUNKLENBcEJEOztrQkFzQmV6WCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmY7Ozs7QUFDQTs7Ozs7O0FBSkE7OztBQU1BLElBQU1wQixXQUFXLFNBQVhBLFFBQVcsQ0FBVXlCLElBQVYsRUFBZ0I7QUFDN0IsUUFBTVEsT0FBTyxFQUFDbkIsR0FBRyxDQUFKLEVBQU9DLEdBQUcsQ0FBVixFQUFhc0gsT0FBTyxDQUFwQixFQUF1QkMsUUFBUSxDQUEvQixFQUFiO0FBQ0EsUUFBSSxPQUFPN0csSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUMxQixZQUFJLDRCQUFhQSxJQUFiLENBQUosRUFBd0I7QUFDcEJBLG1CQUFPLHdCQUFTQSxJQUFULENBQVA7QUFDSCxTQUZELE1BRU87QUFDSEEsbUJBQU93QixTQUFTaVAsYUFBVCxDQUF1QnpRLElBQXZCLENBQVA7QUFDSDtBQUNKOztBQUVELFFBQUlBLFNBQVNoQyxNQUFULElBQW1CZ0MsU0FBU3dCLFFBQWhDLEVBQTBDO0FBQ3RDaEIsYUFBS29HLEtBQUwsR0FBYTVJLE9BQU9xWixVQUFwQjtBQUNBN1csYUFBS3FHLE1BQUwsR0FBYzdJLE9BQU9zWixXQUFyQjtBQUNBOVcsYUFBS2xDLE9BQUwsR0FBZU4sTUFBZjtBQUNILEtBSkQsTUFNQSxJQUFJZ0MsUUFBUUEsS0FBS3FXLFFBQUwsS0FBa0J6WCxLQUFLMlgsWUFBbkMsRUFBaUQ7QUFDN0MsWUFBSXZXLEtBQUt1WCxxQkFBVCxFQUFnQztBQUM1QixnQkFBTUMsT0FBT3hYLEtBQUt1WCxxQkFBTCxFQUFiO0FBQ0EsZ0JBQUlFLFlBQVl6WixPQUFPMFosV0FBUCxJQUFzQmxXLFNBQVNxVixlQUFULENBQXlCWSxTQUEvQyxJQUE0RGpXLFNBQVNtVyxJQUFULENBQWNGLFNBQTFGO0FBQUEsZ0JBQ0lHLGFBQWE1WixPQUFPNlosV0FBUCxJQUFzQnJXLFNBQVNxVixlQUFULENBQXlCZSxVQUEvQyxJQUE2RHBXLFNBQVNtVyxJQUFULENBQWNDLFVBRDVGO0FBQUEsZ0JBRUlFLFlBQVl0VyxTQUFTcVYsZUFBVCxDQUF5QmlCLFNBQXpCLElBQXNDdFcsU0FBU21XLElBQVQsQ0FBY0csU0FBcEQsSUFBaUUsQ0FGakY7QUFBQSxnQkFHSUMsYUFBYXZXLFNBQVNxVixlQUFULENBQXlCa0IsVUFBekIsSUFBdUN2VyxTQUFTbVcsSUFBVCxDQUFjSSxVQUFyRCxJQUFtRSxDQUhwRjs7QUFLQXZYLGlCQUFLbEIsQ0FBTCxHQUFTeUYsS0FBS2lULEtBQUwsQ0FBV1IsS0FBS1MsR0FBTCxHQUFXUixTQUFYLEdBQXVCSyxTQUFsQyxDQUFUO0FBQ0F0WCxpQkFBS25CLENBQUwsR0FBUzBGLEtBQUtpVCxLQUFMLENBQVdSLEtBQUtVLElBQUwsR0FBWU4sVUFBWixHQUF5QkcsVUFBcEMsQ0FBVDtBQUNBdlgsaUJBQUtvRyxLQUFMLEdBQWE1RyxLQUFLbVksV0FBbEI7QUFDQTNYLGlCQUFLcUcsTUFBTCxHQUFjN0csS0FBS29ZLFlBQW5COztBQUVBNVgsaUJBQUt5WCxHQUFMLEdBQVdULEtBQUtTLEdBQUwsR0FBV1AsV0FBdEI7QUFDQWxYLGlCQUFLMFgsSUFBTCxHQUFZVixLQUFLVSxJQUFMLEdBQVlMLFdBQXhCO0FBQ0FyWCxpQkFBSzZYLEtBQUwsR0FBYWIsS0FBS2EsS0FBTCxHQUFhUixXQUExQjtBQUNBclgsaUJBQUs4WCxNQUFMLEdBQWNkLEtBQUtjLE1BQUwsR0FBY1QsV0FBNUI7QUFDSCxTQWhCRCxNQWlCSztBQUNELGdCQUFJSSxNQUFNLENBQVY7QUFBQSxnQkFBYUMsT0FBTyxDQUFwQjtBQUNBLG1CQUFPbFksSUFBUCxFQUFhO0FBQ1RpWSx1QkFBT2hWLFNBQVNqRCxLQUFLdVksU0FBZCxFQUF5QixFQUF6QixDQUFQO0FBQ0FMLHdCQUFRalYsU0FBU2pELEtBQUt3WSxVQUFkLEVBQTBCLEVBQTFCLENBQVI7QUFDQXhZLHVCQUFPQSxLQUFLeVksWUFBWjtBQUNIO0FBQ0RqWSxpQkFBS2xCLENBQUwsR0FBUzJZLEdBQVQ7QUFDQXpYLGlCQUFLbkIsQ0FBTCxHQUFTNlksSUFBVDtBQUNBMVgsaUJBQUtvRyxLQUFMLEdBQWE1RyxLQUFLbVksV0FBbEI7QUFDQTNYLGlCQUFLcUcsTUFBTCxHQUFjN0csS0FBS29ZLFlBQW5CO0FBQ0g7QUFDRDVYLGFBQUtsQyxPQUFMLEdBQWUwQixJQUFmO0FBQ0g7QUFDRCxXQUFPUSxJQUFQO0FBQ0gsQ0FqREQ7O2tCQW1EZWpDLFE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RGYsSUFBTW9XLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVTdWLEtBQVYsRUFBaUI7QUFDbkMsUUFBSSxFQUFFQSxpQkFBaUI0WixVQUFuQixDQUFKLEVBQW9DO0FBQ2hDN1AsZ0JBQVFsRSxLQUFSLENBQWMsNkNBQWQ7QUFDQTtBQUNIO0FBQ0QsUUFBTTZTLE9BQU9oVyxTQUFTbVcsSUFBVCxDQUFjSixxQkFBZCxFQUFiO0FBQ0EsV0FBTztBQUNIbFksV0FBR1AsTUFBTTZaLE9BQU4sR0FBZ0JuQixLQUFLVSxJQURyQjtBQUVINVksV0FBR1IsTUFBTThaLE9BQU4sR0FBZ0JwQixLQUFLUztBQUZyQixLQUFQO0FBSUgsQ0FWRDs7a0JBWWV0RCxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkZjs7Ozs7O0FBRUE7Ozs7Ozs7O0FBUUEsSUFBTTNFLFFBQVEsU0FBUkEsS0FBUSxDQUFVYixRQUFWLEVBQW9CdkIsSUFBcEIsRUFBMEJwUSxRQUExQixFQUFvQ3VOLFlBQXBDLEVBQWtEO0FBQzVELE1BQU1xRSxXQUFXLHdCQUFTRCxRQUFULEVBQW1CdkIsSUFBbkIsRUFBeUJwUSxRQUF6QixFQUFtQ3VOLFlBQW5DLENBQWpCO0FBQ0EsU0FBT3FFLFlBQVlBLFNBQVMsQ0FBVCxDQUFaLEdBQTBCQSxTQUFTLENBQVQsQ0FBMUIsR0FBd0MsS0FBL0M7QUFDSCxDQUhEOztrQkFLZVksSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmY7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNUSxNQUFNLDRCQUFaOztBQUVBLElBQU0wRCxXQUFXLFNBQVhBLFFBQVcsQ0FBVS9FLFFBQVYsRUFBb0J2QixJQUFwQixFQUEwQnBRLFFBQTFCLEVBQW9DdU4sWUFBcEMsRUFBa0Q7QUFDL0QsUUFBSXFFLFdBQVcsRUFBZjtBQUNBeEIsV0FBT0EsUUFBUTRDLEdBQWY7O0FBRUEsUUFBSSxzQkFBT3JCLFFBQVAsQ0FBSixFQUNJLE9BQU8sQ0FBQ0EsUUFBRCxDQUFQOztBQUVKLFFBQUksc0JBQU92QixJQUFQLEVBQWEsUUFBYixDQUFKLEVBQ0lBLE9BQU80QyxJQUFJQyxhQUFKLENBQWtCN0MsSUFBbEIsQ0FBUDtBQUNKLFFBQUlBLElBQUosRUFDSXdCLFdBQVcsR0FBR2xLLEtBQUgsQ0FBU3BILElBQVQsQ0FBYzhQLEtBQUtpTCxnQkFBTCxDQUFzQjFKLFFBQXRCLENBQWQsQ0FBWDs7QUFFSixRQUFJM1IsUUFBSixFQUNJNFIsU0FBU2hPLE9BQVQsQ0FBaUIsVUFBQzlDLE9BQUQsRUFBYTtBQUFDZCxpQkFBU00sSUFBVCxDQUFjaU4sZ0JBQWdCLEVBQTlCLEVBQWtDek0sT0FBbEM7QUFBMkMsS0FBMUU7O0FBRUosV0FBTzhRLFFBQVA7QUFDSCxDQWhCRDs7a0JBa0JlOEUsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZjs7QUFHTyxJQUFNbFAsMEJBQVMsU0FBVEEsTUFBUyxDQUFVOFQsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQ3RDRCxVQUFNQSxPQUFPLENBQWI7QUFDQUMsVUFBTUEsT0FBTyxHQUFiO0FBQ0EsV0FBT2hVLEtBQUtpVSxLQUFMLENBQVdqVSxLQUFLQyxNQUFMLE1BQWlCK1QsTUFBTUQsR0FBTixHQUFZLENBQTdCLElBQWtDQSxHQUE3QyxDQUFQO0FBQ0gsQ0FKTTs7QUFNUDs7OztBQWZBOzs7Ozs7QUFtQk8sSUFBTWxFLG9DQUFjLFNBQWRBLFdBQWMsR0FBWTtBQUNuQyxRQUFNcUUsVUFBVSxtQkFBbUJ2TixLQUFuQixDQUF5QixFQUF6QixDQUFoQjtBQUNBLFFBQUkxQyxVQUFKO0FBQUEsUUFBT2tRLFFBQVEsR0FBZjtBQUNBLFNBQUtsUSxJQUFJLENBQVQsRUFBWUEsSUFBSSxDQUFoQixFQUFtQkEsR0FBbkI7QUFDSWtRLGlCQUFTRCxRQUFRbFUsS0FBS2lVLEtBQUwsQ0FBV2pVLEtBQUtDLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBUixDQUFUO0FBREosS0FFQSxPQUFPa1UsS0FBUDtBQUNILENBTk07O0FBUUEsSUFBTXBFLHNDQUFlLFNBQWZBLFlBQWUsR0FBb0I7QUFBQSxRQUFWcUUsSUFBVSx1RUFBSCxDQUFHOztBQUM1QyxRQUFJQSxPQUFPLEVBQVgsRUFBZTtBQUNYLFlBQUluUSxJQUFJakUsS0FBS3FVLElBQUwsQ0FBVUQsT0FBSyxFQUFmLENBQVI7QUFDQSxZQUFJRSxNQUFNLEVBQVY7QUFDQSxhQUFLclEsQ0FBTCxFQUFRQSxJQUFJLENBQVosRUFBZUEsR0FBZjtBQUNJcVEsbUJBQU90VyxNQUFNLEVBQU4sRUFBVStFLElBQVYsQ0FBZSxDQUFmLEVBQWtCNUksR0FBbEIsQ0FBc0I7QUFBQSx1QkFBSzZGLEtBQUtpVSxLQUFMLENBQVdqVSxLQUFLQyxNQUFMLEtBQWdCLEVBQTNCLENBQUw7QUFBQSxhQUF0QixFQUEyRDhHLElBQTNELENBQWdFLEVBQWhFLENBQVA7QUFESixTQUVBLE9BQU91TixJQUFJblUsS0FBSixDQUFVLENBQVYsRUFBYWlVLElBQWIsQ0FBUDtBQUNIO0FBQ0QsV0FBT2xXLFNBQVNGLE1BQU1vVyxJQUFOLEVBQVlyUixJQUFaLENBQWlCLENBQWpCLEVBQW9CNUksR0FBcEIsQ0FBd0I7QUFBQSxlQUFLNkYsS0FBS2lVLEtBQUwsQ0FBV2pVLEtBQUtDLE1BQUwsS0FBZ0IsRUFBM0IsQ0FBTDtBQUFBLEtBQXhCLEVBQTZEOEcsSUFBN0QsQ0FBa0UsRUFBbEUsQ0FBVCxDQUFQO0FBQ0gsQ0FUTTs7QUFXQSxJQUFNaUosc0NBQWUsU0FBZkEsWUFBZSxHQUF5QztBQUFBLFFBQS9Cb0UsSUFBK0IsdUVBQXhCLENBQXdCO0FBQUEsUUFBckJHLFdBQXFCLHVFQUFQLEtBQU87O0FBQ2pFLFFBQUl0USxVQUFKO0FBQUEsUUFBTytJLFNBQVMsRUFBaEI7QUFDQSxRQUFNbUYsTUFBTW9DLGNBQ05sTSxXQUFNQyxhQUFRckwsV0FBUixHQUFzQjBKLEtBQXRCLENBQTRCLEdBQTVCLENBREEsR0FFTjBCLFNBQUlwTCxXQUFKLEdBQWtCMEosS0FBbEIsQ0FBd0IsR0FBeEIsQ0FGTjtBQUdBLFNBQUsxQyxJQUFJbVEsSUFBVCxFQUFlblEsSUFBSSxDQUFuQixFQUFzQkEsR0FBdEIsRUFBMkI7QUFDdkIrSSxrQkFBVW1GLElBQUluUyxLQUFLaVUsS0FBTCxDQUFXalUsS0FBS0MsTUFBTCxLQUFnQmtTLElBQUkvVixNQUEvQixDQUFKLENBQVY7QUFDSDtBQUNELFdBQU80USxNQUFQO0FBQ0gsQ0FUTTs7QUFXQSxJQUFNaUQsc0RBQXVCLFNBQXZCQSxvQkFBdUIsR0FBb0I7QUFBQSxRQUFWbUUsSUFBVSx1RUFBSCxDQUFHOztBQUNwRCxRQUFJblEsVUFBSjtBQUFBLFFBQU8rSSxTQUFTLEVBQWhCO0FBQ0EsUUFBTXdILFlBQWFyTSxzQkFBaUJsTCxXQUFqQixHQUErQjBKLEtBQS9CLENBQXFDLEdBQXJDLENBQW5CO0FBQ0EsUUFBTThOLFFBQVNyTSxrQkFBYW5MLFdBQWIsR0FBMkIwSixLQUEzQixDQUFpQyxHQUFqQyxDQUFmO0FBQ0EsUUFBTStOLGFBQWMxVSxLQUFLQyxNQUFMLEtBQWdCLEVBQWpCLEdBQXVCLENBQTFDO0FBQ0EsU0FBS2dFLElBQUltUSxPQUFPLENBQVAsR0FBVyxDQUFwQixFQUF1Qm5RLElBQUksQ0FBM0IsRUFBOEJBLEdBQTlCLEVBQW9DO0FBQ2hDLFlBQUkwUSxLQUFLSCxVQUFVeFUsS0FBS2lVLEtBQUwsQ0FBV2pVLEtBQUtDLE1BQUwsS0FBZ0J1VSxVQUFVcFksTUFBckMsQ0FBVixDQUFUO0FBQ0EsWUFBSXdZLEtBQUtILE1BQU16VSxLQUFLaVUsS0FBTCxDQUFXalUsS0FBS0MsTUFBTCxLQUFnQndVLE1BQU1yWSxNQUFqQyxDQUFOLENBQVQ7QUFDQTRRLGtCQUFVMEgsYUFBYUMsS0FBS0MsRUFBbEIsR0FBdUJBLEtBQUtELEVBQXRDO0FBQ0g7O0FBRUQsV0FBTzNILE9BQU85UCxTQUFQLENBQWlCLENBQWpCLEVBQW9Ca1gsSUFBcEIsQ0FBUDtBQUNILENBWk07O0FBY1A7Ozs7O0FBS08sSUFBTXRFLGtDQUFhLFNBQWJBLFVBQWEsQ0FBVXhHLEdBQVYsRUFBZTtBQUNyQyxXQUFPdEwsTUFBTUMsT0FBTixDQUFjcUwsR0FBZCxJQUFxQkEsSUFBSXJKLE9BQU8sQ0FBUCxFQUFVcUosSUFBSWxOLE1BQUosR0FBVyxDQUFyQixDQUFKLENBQXJCLEdBQW9ELEtBQTNEO0FBQ0gsQ0FGTTs7a0JBSVE2RCxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RWY7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTWlRLFdBQVcsU0FBWEEsUUFBVyxDQUFVak4sRUFBVixFQUFjO0FBQzNCLFFBQU00UixNQUFNLDRCQUFaO0FBQ0EsUUFBTXBKLE1BQU0sNEJBQVo7QUFDQW9KLFFBQUk5RyxJQUFKLEdBQVc5SyxNQUFNd0ksSUFBSXNDLElBQXJCO0FBQ0gsQ0FKRDs7a0JBTWVtQyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOzs7Ozs7OztBQVFBLElBQU1kLFNBQVMsU0FBVEEsTUFBUyxDQUFVaEYsUUFBVixFQUFvQjVCLElBQXBCLEVBQTBCSyxJQUExQixFQUFnQztBQUMzQ0EsV0FBTyxzQkFBT0EsSUFBUCxJQUFlQSxJQUFmLEdBQXNCLHFCQUFNQSxJQUFOLENBQTdCO0FBQ0EsUUFBSTVFLElBQUksQ0FBUjtBQUFBLFFBQ0k3SixZQURKO0FBQUEsUUFFSWlRLFdBQVcsRUFGZjtBQUFBLFFBR0l5SyxnQkFBZ0Isd0JBQVMxSyxRQUFULEVBQW1CdkIsUUFBUXBNLFNBQVNtVyxJQUFwQyxDQUhwQjs7QUFLQSxRQUFJa0MsYUFBSixFQUFtQjtBQUNmLGVBQU83USxJQUFJNlEsY0FBYzFZLE1BQXpCLEVBQWlDO0FBQzdCLGdCQUFJLENBQUNvTSxJQUFMLEVBQ0k2QixTQUFTcEcsQ0FBVCxJQUFjNlEsY0FBYzdRLENBQWQsQ0FBZCxDQURKLEtBRUs7QUFDRCxvQkFBSTZRLGNBQWM3USxDQUFkLEVBQWlCOFEsWUFBakIsQ0FBOEJ2TSxJQUE5QixDQUFKLEVBQXlDO0FBQ3JDcE8sMEJBQU0wYSxjQUFjN1EsQ0FBZCxFQUFpQjBFLFlBQWpCLENBQThCSCxJQUE5QixDQUFOO0FBQ0E2Qiw2QkFBU2pRLEdBQVQsSUFBZ0IwYSxjQUFjN1EsQ0FBZCxDQUFoQjtBQUNIO0FBQ0o7QUFDREE7QUFDSDtBQUNKO0FBQ0QsV0FBT29HLFFBQVA7QUFDSCxDQXJCRDs7a0JBdUJlK0UsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENmLElBQU1ILGVBQWUsU0FBZkEsWUFBZSxDQUFVakMsTUFBVixFQUFrQjtBQUNuQyxRQUFJdlEsU0FBU3VZLFdBQWIsRUFDSSxPQUFPdlksU0FBU3VZLFdBQVQsR0FBdUJDLHdCQUF2QixDQUFnRGpJLE1BQWhELENBQVAsQ0FESixLQUVLO0FBQ0QsWUFBSS9JLFVBQUo7QUFBQSxZQUNJZ0csV0FBV3hOLFNBQVN5TixzQkFBVCxFQURmO0FBQUEsWUFFSWdJLFlBQVl6VixTQUFTOEQsYUFBVCxDQUF1QixLQUF2QixDQUZoQjs7QUFJQTJSLGtCQUFVaEIsU0FBVixHQUFzQmxFLE1BQXRCO0FBQ0EsZUFBTy9JLElBQUlpTyxVQUFVZ0QsVUFBckI7QUFDSWpMLHFCQUFTclEsV0FBVCxDQUFxQnFLLENBQXJCO0FBREosU0FHQSxPQUFPZ0csUUFBUDtBQUNIO0FBQ0osQ0FkRDs7a0JBZ0JlZ0YsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJmOzs7Ozs7QUFFQSxJQUFNRCxXQUFXLFNBQVhBLFFBQVcsQ0FBVWhDLE1BQVYsRUFBa0I7QUFDL0IsUUFBSWxLLGVBQUo7QUFDQSxRQUFJbUgsV0FBVyw0QkFBYStDLE1BQWIsQ0FBZjs7QUFFQSxZQUFRL0MsU0FBU29ILGlCQUFqQjtBQUNJLGFBQUssQ0FBTDtBQUFRO0FBQ1IsYUFBSyxDQUFMO0FBQ0l2TyxxQkFBU21ILFNBQVNrTCxpQkFBbEI7QUFDQTtBQUNKO0FBQ0ksZ0JBQUlqRCxZQUFZelYsU0FBUzhELGFBQVQsQ0FBdUIsTUFBdkIsQ0FBaEI7QUFDQTJSLHNCQUFVdFksV0FBVixDQUFzQnFRLFFBQXRCO0FBQ0FuSCxxQkFBU29QLFNBQVQ7QUFSUjtBQVVBLFdBQU9wUCxNQUFQO0FBQ0gsQ0FmRDs7a0JBaUJla00sUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJmLElBQU0rQixXQUFXLFNBQVhBLFFBQVcsQ0FBVXhYLE9BQVYsRUFBbUI2YixNQUFuQixFQUEyQjtBQUN4Q25iLFdBQU9DLElBQVAsQ0FBWWtiLE1BQVosRUFBb0IvWSxPQUFwQixDQUE0QixVQUFDakMsR0FBRCxFQUFTO0FBQ2pDLFlBQUliLFFBQVF1QixLQUFSLENBQWNWLEdBQWQsTUFBdUJxSCxTQUEzQixFQUFzQztBQUNsQ2xJLG9CQUFRdUIsS0FBUixDQUFjVixHQUFkLElBQXFCZ2IsT0FBT2hiLEdBQVAsQ0FBckI7QUFDSDtBQUNKLEtBSkQ7QUFLSCxDQU5EOztrQkFRZTJXLFE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVGY7Ozs7O0FBS0EsSUFBTUYsU0FBUyxTQUFUQSxNQUFTLENBQVVuUCxLQUFWLEVBQWlCO0FBQzVCLFFBQUlBLEtBQUosRUFBVztBQUNQLFlBQU01RCxPQUFPLFdBQWI7QUFDQSxZQUFNdVgsU0FBUyxJQUFJQyxTQUFKLEVBQWY7QUFDQSxZQUFNQyxTQUFTRixPQUFPRyxlQUFQLENBQXVCOVQsS0FBdkIsRUFBOEI1RCxJQUE5QixDQUFmOztBQUVBLFlBQUl5WCxPQUFPekQsZUFBUCxJQUEwQnlELE9BQU8zQyxJQUFQLENBQVl1QyxpQkFBMUMsRUFBNkQ7QUFDekQsbUJBQU9JLE9BQU8zQyxJQUFQLENBQVl1QyxpQkFBbkI7QUFDSDtBQUNELGVBQU8sS0FBUDtBQUNIO0FBQ0QsV0FBTyxLQUFQO0FBQ0gsQ0FaRDs7a0JBY2V0RSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZixJQUFNUCxXQUFXLFNBQVhBLFFBQVcsQ0FBVTVPLEtBQVYsRUFBaUI7QUFDOUIsV0FBUSxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE9BQWlCLFFBQWxCLEdBQ0QrVCxLQUFLakwsS0FBTCxDQUFXaUwsS0FBS0MsU0FBTCxDQUFlaFUsS0FBZixDQUFYLENBREMsR0FFRCxFQUZOO0FBR0gsQ0FKRDs7a0JBTWU0TyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOZjs7Ozs7QUFLQSxJQUFNUSxRQUFRLFNBQVJBLEtBQVEsQ0FBVXBQLEtBQVYsRUFBaUI7QUFDM0IsUUFBSUEsS0FBSixFQUFXO0FBQ1AsWUFBTTVELE9BQU8sVUFBYjtBQUNBLFlBQU11WCxTQUFTLElBQUlDLFNBQUosRUFBZjtBQUNBLFlBQU1DLFNBQVNGLE9BQU9HLGVBQVAsQ0FBdUI5VCxLQUF2QixFQUE4QjVELElBQTlCLENBQWY7O0FBRUEsWUFBSXlYLE9BQU96RCxlQUFQLElBQTBCeUQsT0FBT3pELGVBQVAsQ0FBdUI2RCxPQUF2QixLQUFtQyxNQUFqRSxFQUF5RTtBQUNyRSxtQkFBT0osT0FBT3pELGVBQWQ7QUFDSDtBQUNELGVBQU8sS0FBUDtBQUNIO0FBQ0QsV0FBTyxLQUFQO0FBQ0gsQ0FaRDs7a0JBY2VoQixLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCZjs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNWCxTQUFTLFNBQVRBLE1BQVMsQ0FBVXpPLEtBQVYsRUFBaUI1RCxJQUFqQixFQUF1QjtBQUNsQyxRQUFNOFgsY0FBYyxDQUFDLE1BQUQsRUFBUyxTQUFULEVBQW9CLFdBQXBCLEVBQWlDLFVBQWpDLEVBQTZDLFFBQTdDLEVBQXVELFFBQXZELEVBQWlFLE1BQWpFLEVBQXlFLE9BQXpFLEVBQWtGLFFBQWxGLENBQXBCO0FBQ0EsUUFBSUMsSUFBSSw0QkFBYW5VLEtBQWIsRUFBb0J6RSxXQUFwQixFQUFSO0FBQ0EsUUFBSTJZLFlBQVk3SyxPQUFaLENBQW9COEssQ0FBcEIsTUFBMkIsQ0FBQyxDQUE1QixJQUFpQyxRQUFPblUsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUF0RCxFQUNJbVUsSUFBSSxRQUFKOztBQUVKLFdBQU8sT0FBTy9YLElBQVAsS0FBZ0IsUUFBaEIsR0FBMkJBLEtBQUtiLFdBQUwsT0FBdUI0WSxDQUFsRCxHQUFzREEsQ0FBN0Q7QUFDSCxDQVBEOztrQkFTZTFGLE07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hmLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFVMU8sS0FBVixFQUFpQjVELElBQWpCLEVBQXVCO0FBQ3hDLFFBQU0rWCxJQUFJNWIsT0FBT3NTLFNBQVAsQ0FBaUJyTSxRQUFqQixDQUEwQm5ILElBQTFCLENBQStCMkksS0FBL0IsRUFBc0N2QixLQUF0QyxDQUE0QyxDQUE1QyxFQUErQyxDQUFDLENBQWhELENBQVY7QUFDQSxXQUFPLE9BQU9yQyxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxTQUFTK1gsQ0FBcEMsR0FBd0NBLENBQS9DO0FBQ0gsQ0FIRDs7a0JBS2V6RixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZixJQUFNWSxZQUFZLFNBQVpBLFNBQVksQ0FBVXRQLEtBQVYsRUFBaUI4QixLQUFqQixFQUF3QnNTLElBQXhCLEVBQThCO0FBQzVDLFdBQU9BLEtBQUsvSyxPQUFMLENBQWFySixLQUFiLE1BQXdCOEIsS0FBL0I7QUFDSCxDQUZEOztrQkFJZXdOLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7QUFHQSxJQUFNWCxNQUFNLGFBQVVBLElBQVYsRUFBZTtBQUN2QixRQUFNd0UsTUFBTSw0QkFBWjtBQUNBeEUsV0FBTUEsUUFBT3dFLElBQUlrQixRQUFqQjtBQUNBMUYsV0FBTUEsS0FBSW5ELE9BQUosQ0FBWSxPQUFaLEVBQXFCLEdBQXJCLENBQU47QUFDQSxXQUFPbUQsS0FBSWpVLE1BQUosR0FBYSxDQUFiLElBQWtCaVUsS0FBSWxRLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixNQUFvQixHQUF0QyxHQUE0QyxNQUFNa1EsSUFBbEQsR0FBd0RBLElBQS9EO0FBQ0gsQ0FMRDs7a0JBT2VBLEciLCJmaWxlIjoiYW5pbWF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuLypcbmNvbnN0IGFuaW1hdGlvbiA9IEFuaW1hdGlvbkZyYW1lKCk7XG5wYXVzZSgpO1xuc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5jYW5jZWwoKTtcbiovXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7e2R1cmF0aW9uOiBudW1iZXIsIHN0YXJ0cGFseTogbnVtYmVyLCBwYXVzZWQ6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIHJlcXVlc3RJZDogbnVtYmVyLCBjYWxsYmFjazogbnVtYmVyLCBwcm9ncmVzczogbnVtYmVyfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgcmVxdWVzdElkOiAwLFxuICAgICAgICBzdGFydHBhbHk6IDAsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIGNhbGxiYWNrOiAwLFxuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIHByb2dyZXNzOiAwLFxuICAgIH07XG5cbiAgICByb290LnN0ZXAgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmICghcm9vdC5zdGFydHBhbHkpIHJvb3Quc3RhcnRwYWx5ID0gdGltZXN0YW1wO1xuICAgICAgICByb290LnByb2dyZXNzID0gdGltZXN0YW1wIC0gcm9vdC5zdGFydHBhbHk7XG5cbiAgICAgICAgaWYgKHJvb3QuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2suY2FsbChyb290LCByb290LnByb2dyZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290LmR1cmF0aW9uICYmIHJvb3QuZHVyYXRpb24gPiByb290LnByb2dyZXNzKSB7XG4gICAgICAgICAgICByb290LmNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICBpZiAocm9vdC5wYXVzZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QucGF1c2VkID0gIXJvb3QucGF1c2VkO1xuICAgIH07XG5cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290LnJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICB9O1xuXG4gICAgcm9vdC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyb290LnJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uRnJhbWU7XG4iLCJpbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcblxuZXhwb3J0IGNsYXNzIENsaXBDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb24oZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHBvc2l0aW9uLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIG1vdmVUbyhwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb3B5VG8ocGFyZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvcHkodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5tb3ZlVG8ocGFyZW50KTtcbiAgICB9XG5cbiAgICBvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9XG5cbiAgICBjbG9uZSAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wZXJ0aWVzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvc2l0aW9uKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLnBvc2l0aW9uW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCAtIHBhcmVudC54O1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55IC0gcGFyZW50Lnk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCAodGhpcy5lbGVtZW50LmlkIHx8ICdjbGlwJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHsgYm90dG9tLCBlbGVtZW50LCBoZWlnaHQsIGxlZnQsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5IH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDbGlwID0gZnVuY3Rpb24gKGVsZW1lbnQpXG57XG4gICAgY29uc3Qgcm9vdCA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgaWYgKHJvb3QuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcG9zaXRpb24oZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgcm9vdC54ID0gcm9vdC54IC0gcGFyZW50Lng7XG4gICAgICAgIHJvb3QueSA9IHJvb3QueSAtIHBhcmVudC55O1xuICAgICAgICByb290LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCByb290LmVsZW1lbnQuaWQgfHwgJ2NsaXAnKTtcbiAgICB9XG5cbiAgICByb290Lm1vdmVUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByb290LnN0eWxlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9O1xuXG4gICAgcm9vdC5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByb290LmluamVjdChlbGVtLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGlwO1xuIiwiaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHtyYW5kb21IdW1hbml6ZVN0cmluZywgcmFuZG9tU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcblxuXG5leHBvcnQgY29uc3QgQ29tcG9uZW50Q2xhc3NQcm9wZXJ0aWVzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIHByb3BzOiB7fSxcbiAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgZWxlbWVudDogZmFsc2UsXG4gICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgIGJlZm9yZTogKCkgPT4ge30sXG4gICAgaW5pdDogKCkgPT4ge30sXG4gICAgZGF0YTogKCkgPT4ge30sXG4gICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgIG1ldGhvZHM6IHt9LFxuICAgIG5vZGU6IHt9LFxuICAgIG9uOiB7fSxcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBjaGlsZHJlbjogW10sXG4gICAgcGFyZW50OiB7fSxcbn07XG5cbi8qKlxuICogQHByb3BlcnR5IGlkXG4gKiBAcHJvcGVydHkgcHJvcHNcbiAqIEBwcm9wZXJ0eSB0ZW1wbGF0ZVxuICogQHByb3BlcnR5IGVsZW1lbnRcbiAqIEBwcm9wZXJ0eSBvdmVycmlkZVxuICogQHByb3BlcnR5IGJlZm9yZSBbRnVuY3Rpb25dXG4gKiBAcHJvcGVydHkgaW5pdCBbRnVuY3Rpb25dXG4gKiBAcHJvcGVydHkgZGF0YSBbRnVuY3Rpb25dXG4gKiBAcHJvcGVydHkgY29tcGxldGUgW0Z1bmN0aW9uXVxuICogQHByb3BlcnR5IG1ldGhvZHNcbiAqIEBwcm9wZXJ0eSBub2RlXG4gKiBAcHJvcGVydHkgb25cbiAqIEBwcm9wZXJ0eSBpbml0aWFsaXplZFxuICogQHByb3BlcnR5IGNvbXBsZXRlZFxuICogQHByb3BlcnR5IGNvbXBvbmVudHNcbiAqIEBwcm9wZXJ0eSBjaGlsZHJlblxuICogQHByb3BlcnR5IHBhcmVudFxuICovXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50Q2xhc3NcbntcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcyA9IHt9KVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5iZWZvcmUgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmVmb3JlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZihpc0hUTUxTdHJpbmcodGhpcy5lbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHN0cjJub2RlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHF1ZXJ5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tZXRob2RzICYmIE9iamVjdC52YWx1ZXModGhpcy5tZXRob2RzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubWV0aG9kcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm1ldGhvZHNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGhvZHNba2V5XSA9IHRoaXMubWV0aG9kc1trZXldLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLm1ldGhvZHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRhdGEgJiYgT2JqZWN0LmtleXModGhpcy5kYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRhdGFba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFba2V5XSA9IHRoaXMuZGF0YVtrZXldLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMuZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50cyAmJiBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5jb21wb25lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuY29tcG9uZW50c1trZXldICYmIHRoaXMuY29tcG9uZW50c1trZXldLmhhc093blByb3BlcnR5KCdrZXknKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNba2V5XS5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGhpcy5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmFsc2UgJiYgaXNOb2RlKHRoaXMuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZSA9IHNlYXJjaCgnW2RhdGEtbm9kZV0nLCAnZGF0YS1ub2RlJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMub24gPSBzZWFyY2goJ1tkYXRhLW9uXScsICdkYXRhLW9uJywgdGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZS5jYWxsKHRoaXMuY29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZS5jYWxsKHRoaXMuY29tcGxldGUsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbdGhpcy5pZF0gPSB0aGlzO1xuICAgIH1cbiAgICBzZXQgdGVtcGxhdGUgKHRlbXBsYXRlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBzdHIybm9kZSh0ZW1wbGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTm9kZSh0ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IHRlbXBsYXRlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB0ZW1wbGF0ZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbXBvbmVudChuYW1lKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRDbGFzcy5saXN0W25hbWVdO1xuICAgIH1cbiAgICBjb21wb25lbnRDaGlsZHJlbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRDbGFzcy5saXN0W25hbWVdO1xuICAgIH1cbiAgICBjbG9uZShpZCkge1xuICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZSh0aGlzKTtcbiAgICAgICAgY2xvbmVkLnRlbXBsYXRlID0gY2xvbmVkLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBtZXJnZShDb21wb25lbnRDbGFzc1Byb3BlcnRpZXMsIHByb3BlcnRpZXMpO1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wZXJ0aWVzW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICAgIH1cbn1cbkNvbXBvbmVudENsYXNzLmxpc3QgPSB7fTtcblxuLyoqXG4gKlxuY29uZmlnOlxuICAgIGlkOiAnaWQnLFxuICAgIHByb3BzOiB7fSxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7fSxcbiAgICBjb21wbGV0ZSAoKSB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBub2RlOiB7fSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG5cbkNvbXBvbmVudCh7XG4gICAgaWQ6ICdFeHRlcm5hbFRlbXBsYXRlQ29tcG9uZW50JyxcbiAgICBwcm9wczogWyd0aXRsZSddLFxuICAgIHRlbXBsYXRlOiAndGVtcGxhdGUnLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge1xuICAgICAgICBpdGVyYXRvcjogMCxcbiAgICB9LFxuICAgIGNvbXBsZXRlIChhcHApIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZVsndGl0bGUnXSlcbiAgICAgICAgdGhpcy5ub2RlWyd0aXRsZSddLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSArKyB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgICAgICBtaW4gKGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pdGVyYXRvci50ZXh0Q29udGVudCA9IC0tIHRoaXMuZGF0YS5pdGVyYXRvciA7XG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGdldCBwcm9wZXJ0eSBieSBpZCBrZXl3b3JkXG4gICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY29uZmlnLmlkKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tTmFtZSA9ICByYW5kb21IdW1hbml6ZVN0cmluZyg2KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmFuZG9tTmFtZSA9IHJhbmRvbU5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyByYW5kb21OYW1lLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbmZpZy5pZCA9ICdDb21wb25lbnQnICsgcmFuZG9tTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wb25lbnQubGlzdFtjb25maWcuaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXAgPSBDb21wb25lbnQuY3JlYXRlKGNvbmZpZyk7XG5cbiAgICAgICAgY29tcC5jb21wb25lbnQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNvbXBvbmVudHNbaWRdID8gY29tcC5jb21wb25lbnRzW2lkXSA6IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY2hpbGRyZW4uZmluZCgoY29tcG9uZW50KSA9PiBjb21wb25lbnQuaWQgPT09IGlkKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNsb25lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZSh0aGlzKTtcbiAgICAgICAgICAgIGNsb25lZC50ZW1wbGF0ZSA9IGNsb25lZC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5iZWZvcmUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5iZWZvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmKGlzSFRNTFN0cmluZyhjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHF1ZXJ5KGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAubWV0aG9kcyAmJiBPYmplY3QudmFsdWVzKGNvbXAubWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLm1ldGhvZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5tZXRob2RzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5tZXRob2RzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5kYXRhICYmIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5kYXRhW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5kYXRhW2tleV0gPSBjb21wLmRhdGFba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmNvbXBvbmVudHMgJiYgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBjb21wLmNvbXBvbmVudHNba2V5XSAmJiBjb21wLmNvbXBvbmVudHNba2V5XS5oYXNPd25Qcm9wZXJ0eSgna2V5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wb25lbnRzW2tleV0ucGFyZW50ID0gY29tcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcC5jaGlsZHJlbi5wdXNoKGNvbXAuY29tcG9uZW50c1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTm9kZShjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgY29tcC5ub2RlID0gc2VhcmNoKCdbZGF0YS1ub2RlXScsICdkYXRhLW5vZGUnLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIGNvbXAub24gPSBzZWFyY2goJ1tkYXRhLW9uXScsICdkYXRhLW9uJywgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBjb21wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBjb21wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudC5saXN0W2NvbXAuaWRdID0gY29tcDtcbiAgICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxufTtcbkNvbXBvbmVudC5saXN0ID0ge307XG5Db21wb25lbnQuY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgICAgIG5vZGU6IHt9LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudDoge30sXG4gICAgfSwgY29uZmlnKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiLypcbmNvbnN0IGtleWJvYXJkID0gS2V5Ym9hcmRFdmVudE1hbmFnZXIoKTtcbmtleWJvYXJkLmVhY2goRVZFTlRfTkFNRSwgZnVuY3Rpb24gKGV2ZW50KSB7fSlcbmtleWJvYXJkLndpdGhDb25kaXRpb25LZXlcbmtleWJvYXJkLnByZXNzXG5rZXlib2FyZC51cFxua2V5Ym9hcmQuZG93blxuKi9cbmNvbnN0IEtleWJvYXJkRXZlbnRNYW5hZ2VyID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zdCBzdG9yYWdlID0ge307XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBhZGRTdG9yYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF0pIHN0b3JhZ2VbZXZlbnRdID0ge307XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF1ba2V5XSkgc3RvcmFnZVtldmVudF1ba2V5XSA9IFtdO1xuICAgICAgICBzdG9yYWdlW2V2ZW50XVtrZXldLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBiYXNlQ2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlKS5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2VbdHlwZV0pLm1hcCgoa2V5Q29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCBzdG9yYWdlW3R5cGVdW2tleUNvZGVdICkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVt0eXBlXVtrZXlDb2RlXS5tYXAoKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gdHlwZSAmJiBwYXJzZUludChrZXlDb2RlKSA9PT0gZXZlbnQua2V5Q29kZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGV2ZW50LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWFjaENhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBlYWNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGNhbGxiYWNrO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXR1cExpc3RlbmVycyAoKSB7XG4gICAgICAgIGNvbnN0IGFkZCA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBybSA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBybSgpO1xuICAgICAgICBhZGQoKTtcbiAgICB9XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlYWNoKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgZWFjaENhbGxiYWNrKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICB3aXRoQ29uZGl0aW9uS2V5KGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBhZGRTdG9yYWdlKGV2ZW50LCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXNzKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5cHJlc3MnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXAoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXl1cCcsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBkb3duKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5ZG93bicsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkRXZlbnRNYW5hZ2VyO1xuIiwiXG5cbi8qKlxuICogTG9hZGVyLmF1ZGlvczogxpIgKHNyY3MsIGNhbGxiYWNrKVxuICogTG9hZGVyLmltYWdlczogxpIgKGltZ3MsIGNhbGxiYWNrKVxuICogTG9hZGVyLmphdmFzY3JpcHQ6IMaSIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKVxuICogTG9hZGVyLmpzb246IMaSIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKVxuICogQHByb3BlcnR5XG4gKiBAbWV0aG9kIGpzb25cbiAqIEBtZXRob2QganNvbnNcbiAqIEBtZXRob2QgamF2YXNjcmlwdFxuICogQG1ldGhvZCBpbWFnZXNcbiAqIEBtZXRob2QgYXVkaW9zXG4gKiBAcmV0dXJucyB7e319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGpzb246IExvYWRlci5qc29uLFxuICAgICAgICBqc29uczogTG9hZGVyLmpzb25zLFxuICAgICAgICBqYXZhc2NyaXB0OiBMb2FkZXIuamF2YXNjcmlwdCxcbiAgICAgICAgaW1hZ2VzOiBMb2FkZXIuaW1hZ2VzLFxuICAgICAgICBhdWRpb3M6IExvYWRlci5hdWRpb3MsXG4gICAgICAgIHZpZGVvczogTG9hZGVyLnZpZGVvLFxuICAgIH07XG59O1xuXG4vKipcbiAqIC5qc29uKCcvdXJsL2RhdGFmaWxlLmpzb24nLCAoanNvbikgPT4ge30sIChlcnJvcikgPT4ge30pXG4gKlxuICogQHBhcmFtIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gb25lcnJvclxuICovXG5Mb2FkZXIuanNvbiA9IGZ1bmN0aW9uIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gY2FsbGJhY2soanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBvbmVycm9yXG4gKi9cbkxvYWRlci5qc29ucyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcilcbntcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIG9ialtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgIExvYWRlci5qc29uKHNyYywgKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW2tleV0gPSBqc29uO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yICsrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG9uZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmphdmFzY3JpcHQgKCB7XG4gKiAgICAgIG15X3NjcmlwdDE6ICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAqICAgICAgbXlfc2NyaXB0MjogJy9wYXRoL3RvL215X3NjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAuamF2YXNjcmlwdCAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215X3NjcmlwdDEnLFxuICogICAgICAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTG9hZGVyLmphdmFzY3JpcHRcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Mb2FkZXIuamF2YXNjcmlwdCA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcilcbntcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIG9ialtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgbGV0IHNjcmlwdDtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IChzcmNzW2tleV0uc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3Jjc1trZXldIDogc3Jjc1trZXldICsgJy5qcyc7XG4gICAgICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IGtleTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNbdGhpcy5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBMb2FkIGFuIGltYWdlc1xuICpcbiAqIC5pbWFnZXMgKCB7XG4gKiAgICAgIGltZzE6ICcvcGF0aC90by9pbWcxJyxcbiAqICAgICAgaW1nMjogJy9wYXRoL3RvL2ltZzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmltYWdlc1xuICogQHBhcmFtIGltZ3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIuaW1hZ2VzID0gZnVuY3Rpb24gKGltZ3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGltZ3MgJiYgdHlwZW9mIGltZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGltZ3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gaW1ncykge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1nc1tuYW1lXTtcbiAgICAgICAgICAgIGltZy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGltYWdlc1t0aGlzLm5hbWVdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBMb2FkIGFuIGF1ZGlvIGZpbGVzXG4gKlxuICogLmF1ZGlvcyAoIHtcbiAqICAgICAgYXVkaW8xOiAnL3BhdGgvdG8vYXVkaW8xJyxcbiAqICAgICAgYXVkaW8yOiAnL3BhdGgvdG8vYXVkaW8yJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci5hdWRpb3NcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLmF1ZGlvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGF1ZGlvcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IHNyY3NbbmFtZV07XG4gICAgICAgICAgICBhdWRpby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGF1ZGlvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICBhdWRpb3NbbmFtZV0gPSBhdWRpbztcbiAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGF1ZGlvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIExvYWQgYW4gdmlkZW8gZmlsZXNcbiAqXG4gKiAudmlkZW9zICgge1xuICogICAgICB2aWRlbzE6ICcvcGF0aC90by92aWRlbzEnLFxuICogICAgICB2aWRlbzI6ICcvcGF0aC90by92aWRlbzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLnZpZGVvc1xuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIudmlkZW9zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdmlkZW9zID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgdmlkZW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgIHZpZGVvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdmlkZW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgIHZpZGVvc1tuYW1lXSA9IHZpZGVvO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgdmlkZW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiLyoqXG5cbmEgKG0xMSkgSG9yaXpvbnRhbCBzY2FsaW5nLlxuYiAobTEyKSBIb3Jpem9udGFsIHNrZXdpbmcuXG5jIChtMjEpIFZlcnRpY2FsIHNrZXdpbmcuXG5kIChtMjIpIFZlcnRpY2FsIHNjYWxpbmcuXG5lIChkeCkgSG9yaXpvbnRhbCBtb3ZpbmcuXG5mIChkeSkgVmVydGljYWwgbW92aW5nLlxuKi9cbmNvbnN0IE1hdHJpeCA9IGZ1bmN0aW9uIChtMTEsIG0xMiwgbTIxLCBtMjIsIGd4LCBneSkge1xuICAgIHJldHVybiB7bTExLCBtMTIsIG0yMSwgbTIyLCBneCwgZ3l9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4O1xuIiwiaW1wb3J0IENsaXAgZnJvbSBcIi4vQ2xpcFwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgaXNOdW1iZXIgZnJvbSBcIi4uL2Z1bmN0aW9ucy9pc051bWJlclwiO1xuXG5leHBvcnQgY2xhc3MgTW92ZUNsaXBDbGFzc1xue1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpXG4gICAge1xuICAgICAgICBjb25zdCB7IGVsZW1lbnQgfSA9IHByb3BlcnRpZXM7XG5cbiAgICAgICAgLy8gaWYgKHByb3BlcnRpZXMudGVtcGxhdGUpIHtcbiAgICAgICAgLy8gICAgIHRoaXMudGVtcGxhdGUgPSBwcm9wZXJ0aWVzLnRlbXBsYXRlO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChwcm9wZXJ0aWVzLmVsZW1lbnQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZWxlbWVudCA9IHByb3BlcnRpZXMuZWxlbWVudDtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGNvbnN0IGNsaXAgPSBDbGlwKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY2xpcC5lbGVtZW50O1xuICAgICAgICB0aGlzLmNsaXAgPSBjbGlwO1xuICAgICAgICB0aGlzLmluaXQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCB4KCkgeyByZXR1cm4gdGhpcy5jbGlwLng7IH1cbiAgICBnZXQgeSgpIHsgcmV0dXJuIHRoaXMuY2xpcC55OyB9XG4gICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5jbGlwLndpZHRoOyB9XG4gICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuY2xpcC5oZWlnaHQ7IH1cbiAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLnggPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLnkgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLndpZHRoID0gdmFsdWU7XG4gICAgfVxuICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgdGhpcy5jbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8vIHNldCB0ZW1wbGF0ZSAodGVtcGxhdGUpIHtcbiAgICAvLyAgICAgaWYgKHR5cGVvZiB0ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuZWxlbWVudCA9IHN0cjJub2RlKHRlbXBsYXRlKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBpZiAoaXNOb2RlKHRlbXBsYXRlKSkge1xuICAgIC8vICAgICAgICAgdGhpcy5lbGVtZW50ID0gdGVtcGxhdGU7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gZ2V0IHRlbXBsYXRlICgpIHtcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICAvLyB9XG5cbiAgICBjbG9uZSAoYXBwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0b09iamVjdCh0aGlzKTtcbiAgICAgICAgcHJvcHMuZWxlbWVudCA9IHRoaXMuZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGlmIChhcHBlbmQgJiYgdGhpcy5lbGVtZW50KVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQocHJvcHMuZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBNb3ZlQ2xpcENsYXNzKHByb3BzKTtcbiAgICB9XG4gICAgc2V0UHJvcGVydGllcygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0aWVzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLnByb3BlcnRpZXNba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1taXZlY2xpcCcsICh0aGlzLnByb3BlcnRpZXMuaWQgfHwgJ21pdmVjbGlwJykpO1xuICAgIH1cblxuICAgIHN0eWxlKG9iamVjdCkge1xuICAgICAgICBPYmplY3Qua2V5cyhvYmplY3QpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGVba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qXG4gICAgICAgIHJldHVybiBNb3ZlQ2xpcCh7XG4gICAgICAgICAgICBlbGVtZW50OiBgPGRpdiBjbGFzcz1cInNwcml0ZSByZWN0XCI+PC9kaXY+YCxcbiAgICAgICAgICAgIHBhcmVudDogQXBwQ2xpcCxcbiAgICAgICAgICAgIHg6IDEwMCxcbiAgICAgICAgICAgIHk6IDEwMCxcbiAgICAgICAgICAgIGluaXQoKXtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gW1xuICAgICAgICAgICAgICAgICAgICAncm90YXRlKCcgKyA0NSArJ2RlZyknLFxuICAgICAgICAgICAgICAgICAgICAnc2NhbGUoMC41LCAwLjUpJyxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiovXG5jb25zdCBNb3ZlQ2xpcCA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBjb25maWc7XG4gICAgY29uc3QgY2xpcCA9IENsaXAoZWxlbWVudCk7XG5cbiAgICBpZighY2xpcC5lbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvcGVydHkgW2VsZW1lbnRdIG5vdCBmb25kIScpO1xuICAgIH1cblxuICAgIGNsaXAuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyk7XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICAvLyBjbGlwOiBjbGlwLFxuICAgICAgICBlbGVtZW50OiBjbGlwLmVsZW1lbnQsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgc2V0IHgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC54ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB5KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC55ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB3aWR0aCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLndpZHRoID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC53aWR0aCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC5oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHgoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC54XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB5KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueVxuICAgICAgICB9LFxuICAgICAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC53aWR0aFxuICAgICAgICB9LFxuICAgICAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAuaGVpZ2h0XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3R5bGUob2JqZWN0KSB7XG4gICAgICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGRlbGV0ZSBjb25maWcuZWxlbWVudDtcbiAgICBkZWxldGUgY29uZmlnLmluaXRpYWxpemVkO1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcm9vdFtrZXldID0gY29uZmlnW2tleV1cbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2Ygcm9vdC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFyb290LmluaXRpYWxpemVkKXtcbiAgICAgICAgcm9vdC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHJvb3QuaW5pdC5jYWxsKHJvb3QpO1xuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoYXBwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2xvbmVQcm9wZXJ0eSA9IHRvT2JqZWN0KHJvb3QpO1xuICAgICAgICBjbG9uZVByb3BlcnR5LmVsZW1lbnQgPSByb290LmVsZW1lbnQuY2xvbmVOb2RlKHJvb3QpO1xuICAgICAgICBpZiAoYXBwZW5kKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjbG9uZVByb3BlcnR5LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNb3ZlQ2xpcChjbG9uZVByb3BlcnR5KTtcbiAgICB9O1xuXG4gICAgcm9vdC5pbmplY3QgPSBmdW5jdGlvbiAoZWxlbSwgYXBwZW5kID0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gcXVlcnkoZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH07XG5cbiAgICByb290LmFwcGVuZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJvb3QuaW5qZWN0KGVsZW0sIHRydWUpO1xuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIC8vIGlmICh0eXBlb2Ygcm9vdC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyl7XG4gICAgLy8gICAgIHJvb3QuY29tcGxldGUuY2FsbChyb290KTtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVDbGlwO1xuIiwiXG5jb25zdCBQb2ludCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiXG5jb25zdCBSZWN0YW5nbGUgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB7eCwgeSwgd2lkdGgsIGhlaWdodH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCIvKlxuY29uc3QgUnhTdGF0ZSA9IFJveHkoe1xuICAgIHRpdGxlOiAnJyxcbiAgICBib2R5OiAnJyxcbn0pO1xuXG5SeFN0YXRlLmV2ZW50KChrZXksIHZhbHVlcyk9PntcbiAgICBpZiAoa2V5ID09PSAnJykge31cbiAgICBpbmplY3QoJyMnICsga2V5LCB2YWx1ZXMpO1xufSk7XG5cblJ4U3RhdGUucHJveHkudGl0bGUgPSAnRmlyc3QgdmFsdWUnO1xuUnhTdGF0ZS5wcm94eS5ib2R5ID0gJ1Rlc3QgYm9keSB0ZXh0JztcblxuVGltZXIudGltZW91dCgoKSA9PiB7XG4gICAgUnhTdGF0ZS5kaXNwYXRjaCgndGl0bGUnLCAnSGVsbG8gZnJpZW5kJyk7XG4gICAgUnhTdGF0ZS5kaXNwYXRjaCgnYm9keScsICdEbyB5b3UgaGFwcHkgbm93PycpO1xufSwgMjAwMCk7XG5cbiovXG5cbi8qKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIHNldCgqPSwgKj0pOiAqLCBnZXQoKik6ICosIGFjdGlvbigqPSwgKj0pOiAqLCBmaWxsKCo9LCAqPSk6ICp9fFJveHl8e318bnVsbHxib29sZWFufVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuXG5jb25zdCBSb3h5ID0gZnVuY3Rpb24gKHBheWxvYWQpXG57XG4gICAgY29uc3QgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzID0ge1xuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldChvYmosIHByb3AsIHZhbHVlKSB7XG5cbiAgICAgICAgICAgIG9ialtwcm9wXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdICYmIHR5cGVvZiBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0uY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0LmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvbGRlciBuYW1lOiBzZWV8c2V0P1xuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBwYXlsb2FkXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGF0Y2goa2V5LCBwYXlsb2FkKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0ga2V5LmNhbGwoe30sIHByb3h5KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGwocmVzdWx0KVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXlsb2FkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXlsb2FkLmNhbGwoe30sIHByb3h5W2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWN0aW9uKClcbiAgICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBldmVudChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBjaGFuZ2UgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2ZShrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID0ga2V5O1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW2tleV0gPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA/IHByb3h5W2tleV0gOiBjb3B5KHByb3h5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaWxsKHBheWxvYWQsIHRvKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm94eVt0b10pXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eVt0b10gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dW2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBwcm94eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQcm94eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBSb3h5O1xuIiwiaW1wb3J0IFJveHkgZnJvbSBcIi4vUm94eVwiO1xuXG4vKipcbiAqIGNvbnN0IHJ4ID0gUm94eUxpc3RlbmVyICh7XG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogfSlcbiAqIHJ4LnNldCgpO1xuICogcnguZGlzcGF0Y2goKTtcbiAqXG4gKiByeC5hY3Rpb24oKTtcbiAqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgZGlzcGF0Y2goKj0sICo9KTogUm94eSwgZ2V0KCopOiAqLCBldmVudCgqPSwgKj0pOiB0aGlzLCBmaWxsKCo9LCAqPSk6IHRoaXN9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFJveHlMaXN0ZW5lciA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG5cbiAgICBjb25zdCBhY3Rpb25zID0ge1xuICAgICAgICBfX2FjdGlvbl9fKCkge1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbnNOYW1lcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMocGF5bG9hZCkubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG4gICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXSA9IHBheWxvYWRbZXZlbnROYW1lXTtcblxuICAgICAgICBpZiAodHlwZW9mIHBheWxvYWRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBldmVudE5hbWUgIT09IGFjdGlvbnMuX19hY3Rpb25fXy5uYW1lKSB7XG4gICAgICAgICAgICBhY3Rpb25zTmFtZXNbZXZlbnROYW1lXSA9ICcnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByeCA9IFJveHkoYWN0aW9uc05hbWVzKTtcbiAgICAvL1xuICAgIHJ4LmFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zTmFtZXNcbiAgICB9O1xuXG4gICAgcnguZXZlbnQoKGV2ZW50Q3Vyc29yLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgYWN0aW9ucy5fX2FjdGlvbl9fLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucykubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudEN1cnNvciA9PT0gZXZlbnROYW1lICYmIHR5cGVvZiBhY3Rpb25zW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiByeDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJveHlMaXN0ZW5lcjtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBTY2VuZUNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihsYXllcnMgPSB7fSkge1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAnZGVmYXVsdCc7XG4gICAgICAgIHRoaXMubGF5ZXJzID0ge1xuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnW0RlZmF1bHQgU2NlbmVdJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgT2JqZWN0LmtleXMobGF5ZXJzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGtleSwgbGF5ZXJzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGQobmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5sYXllcnNbbmFtZV0gPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICBnZXQobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXllcnNbbmFtZV07XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgbGV0IGxlc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMubGF5ZXJzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoa2V5c1tpXSA9PT0gdGhpcy5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXlzW2kgKyAxXSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyKGxlc3QpO1xuICAgIH1cblxuICAgIHJlbmRlcihrZXkgPSAnZGVmYXVsdCcpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50ID0ga2V5O1xuICAgICAgICBjb25zdCBjYiA9IHRoaXMubGF5ZXJzW3RoaXMuY3VycmVudF07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjYi5jYWxsKGNiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb25lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH1cbn1cblxuLypcbmNvbnN0IHNjZW5lID0gU2NlbmUoKTtcbnNjZW5lLmFkZCgnZWRpdG9yJywgZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBjb25zb2xlLmxvZyhhLCBiLCBjLCBkKTtcbn0pXG5zY2VuZS5hZGQoJ291dHB1dCcsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUucnVuKCdvdXRwdXQnLCBbJ2hlbGxvJywgMjAwLCB7fV0pO1xuKi9cbi8qKlxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7e2N1cnJlbnQ6IHN0cmluZywgc2NlbmVzOiB7ZGVmYXVsdDoge2NhbGxiYWNrKCk6IHZvaWQsIGF0dHJzOiBbXX19LCBlbGVtZW50OiBudWxsfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgY3VycmVudDogJ2RlZmF1bHQnLFxuICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICBzY2VuZXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpIHtjb25zb2xlLmxvZygnW0RlZmF1bHQgU2NlbmVdJyl9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5hZGQgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGF0dHJzID0gW10pIHtcbiAgICAgICAgcm9vdC5zY2VuZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIGF0dHJzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcm9vdC5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gcm9vdC5zY2VuZXNbbmFtZV07XG4gICAgfVxuXG4gICAgcm9vdC5nZXRDdXJyZW50U2NlbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByb290LnNjZW5lc1tyb290LmN1cnJlbnRdO1xuICAgIH1cblxuICAgIHJvb3QubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGxlc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJvb3Quc2NlbmVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoa2V5c1tpXSA9PT0gcm9vdC5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXlzW2kgKyAxXSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QucnVuKGxlc3QpO1xuICAgIH07XG5cbiAgICByb290LnJ1biA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7XG4gICAgICAgIHJvb3QuY3VycmVudCA9IGtleSB8fCAnZGVmYXVsdCc7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcm9vdC5nZXRDdXJyZW50U2NlbmUoKTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzY2VuZS5jYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChhdHRycykge1xuICAgICAgICAgICAgICAgIGF0dHJzID0gQXJyYXkuaXNBcnJheShhdHRycykgPyBhdHRycyA6IFthdHRyc107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBhdHRycyA/IGF0dHJzIDogc2NlbmUuYXR0cnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc2hvdyA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7IHJvb3QucnVuKGtleSwgYXR0cnMpIH07XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7IHJvb3QucnVuKGtleSwgYXR0cnMpIH07XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuc2NlbmVzICYmIHByb3BlcnRpZXMuc2NlbmVzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcy5zY2VuZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5hZGQoa2V5LCBwcm9wZXJ0aWVzLnNjZW5lc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cbi8qKlxuICpcbiAgICBjb25zdCBzdGVwc0F0dGFja0hlcm8gPSBTdGVwc1NjZW5lKHtcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIHN0ZXBzOiBbXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXJ0X2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGVyb19hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrX2FuaW1hdGlvbicsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW5kX2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgc3RlcHNBdHRhY2tIZXJvLmVhY2hTdGVwcyhmdW5jdGlvbiAoY2JPYmplY3QsIGluZGV4KSB7fSk7XG4gICAgc3RlcHNBdHRhY2tIZXJvLm5leHQoKTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5nb3RvKCdoZXJvX2F0dGFja19hbmltYXRpb24nKS5uZXh0KCk7XG4gICAgc3RlcHNBdHRhY2tIZXJvLnN0b3AoKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7YW55fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0ZXBzU2NlbmUgPSBmdW5jdGlvbiAoY29uZmlnID0ge3N0ZXBzOiBbXX0pIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBpdGVyYXRpb246IDAsXG4gICAgICAgIGxvb3A6IGNvbmZpZy5sb29wIHx8IGZhbHNlLFxuICAgICAgICBzdGVwX2l0ZXJhdGlvbjogMCxcbiAgICAgICAgc3RlcF9zdG9wOiBmYWxzZSxcbiAgICAgICAgc3RlcF9jYWxsYmFja19lYWNoOiBudWxsLFxuICAgICAgICBzdGVwX2NhbGxiYWNrczogY29uZmlnLnN0ZXBzIHx8IHt9LFxuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIHJvb3QucGxheSgpO1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBwbGF5KCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5KG1zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrLmNhbGwocm9vdCk7IH0sIG1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ290byhuYW1lKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tzLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVhY2hTdGVwcyhjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2ggPSBjYWxsYmFjaztcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKHJvb3Quc3RlcF9zdG9wKSByZXR1cm4gcm9vdDtcblxuICAgICAgICAgICAgaWYgKHJvb3Quc3RlcF9pdGVyYXRpb24gPiByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoIXJvb3QubG9vcClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja09iamVjdCA9IHJvb3Quc3RlcF9jYWxsYmFja3Nbcm9vdC5zdGVwX2l0ZXJhdGlvbl07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2ggPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2guY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgY3VycmVudENhbGxiYWNrT2JqZWN0LmNhbGxiYWNrLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIHJvb3QuaXRlcmF0aW9uKytcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24rK1xuXG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcHNTY2VuZTtcbiIsIlxuY29uc3QgVGltZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSkge1xuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMuaXRlcmF0b3IgPSAwO1xufTtcblxuXG5UaW1lci5zZXRUaW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFyVGltZW91dChpZClcbn07XG5UaW1lci5jbGVhckludGVydmFsID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpZClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5cbmNvbnN0IFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChlbGVtZW50LCBwYXJhbXMpXG57XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhbnNmb3JtX29iajoge30sXG4gICAgICAgIHRyYW5zZm9ybV9hcnI6IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcpJykuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoICksXG4gICAgICAgIHRyYW5zZm9ybV9zdHJpbmc6ICcnLFxuXG4gICAgICAgIHVwZGF0ZSgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nID0gJyc7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvb3QudHJhbnNmb3JtX29iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nICs9IGtleSArICcoJyArIHJvb3QudHJhbnNmb3JtX29ialtrZXldLmpvaW4oJywgJykgKyAnKSAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nO1xuICAgICAgICAgICAgcm9vdC5yZXNlYXJjaCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZChtZXRob2QsIHByb3BlcnRpZXMsIG11bHRpcGx5ID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXTtcblxuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBseSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dCA9IHZhbHVlLm1hdGNoKC9bYS16XSsvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlKSArIHBhcnNlSW50KHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IG51bSArIGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gdmFsdWUgKyByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2V0cyBwYXJhbWV0ZXJzIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2VhcmNoKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIgPSBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApO1xuXG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbSA9IHJvb3QudHJhbnNmb3JtX2FycltpXSA9IHJvb3QudHJhbnNmb3JtX2FycltpXS50cmltKCkgICsgJyknO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWQgPSBwYXJhbS5tYXRjaCgvW1xcd1xcLlxcLV0rL2lnKTtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWF0Y2hlZFswXV0gPSBtYXRjaGVkLnNsaWNlKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QucmVzZWFyY2goKTtcblxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QubWV0aG9kKGtleSwgcGFyYW1zW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vdC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn1cblxuVHJhbnNmb3JtLmVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWUpe1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IFtdO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKChwcm9wKSA9PiB7IHByb3BzLnB1c2gocHJvcCkgfSk7XG4gICAgICAgIHN0eWxpemVyKGVsZW1lbnQsIHt0cmFuc2Zvcm06IHByb3BzLmpvaW4oJyAnKX0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsIlxuY29uc3QgaXNOdW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgdmFsdWUgaW5zdGFuY2VvZiBOdW1iZXIpXG4gICAgICAgICYmICFpc05hTih2YWx1ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNOdW1iZXI7XG4iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL3N0YXRpYy9nZXRXaW5kb3dcIjtcblxuaW1wb3J0IENsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9DbGlwLmpzXCI7XG5pbXBvcnQgQ29tcG9uZW50LCB7Q29tcG9uZW50Q2xhc3N9IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IE1vdmVDbGlwLCB7TW92ZUNsaXBDbGFzc30gZnJvbSBcIi4vY29tcG9uZW50cy9Nb3ZlQ2xpcC5qc1wiO1xuaW1wb3J0IFNjZW5lLCB7U2NlbmVDbGFzc30gZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgTWF0cml4IGZyb20gXCIuL2NvbXBvbmVudHMvTWF0cml4XCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9jb21wb25lbnRzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xuXG5jb25zdCBBbmltYXRlID0ge1xuICAgIENsaXAsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbXBvbmVudENsYXNzLFxuICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgIE1vdmVDbGlwLFxuICAgIE1vdmVDbGlwQ2xhc3MsXG4gICAgU2NlbmUsXG4gICAgU2NlbmVDbGFzcyxcbiAgICBTdGVwc1NjZW5lLFxuICAgIFRpbWVyLFxuICAgIFJveHlMaXN0ZW5lcixcbiAgICBSb3h5LFxuICAgIEFuaW1hdGlvbkZyYW1lLFxuICAgIExvYWRlcixcbiAgICBNYXRyaXgsXG4gICAgUG9pbnQsXG4gICAgUmVjdGFuZ2xlLFxuICAgIFRyYW5zZm9ybSxcbn07XG5cbmNvbnN0IFJBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFX0FTX1JBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOICogMzYwO1xuY29uc3QgUEkgPSAzLjE0MTU5MjY1MzU5O1xuY29uc3QgUkFEX1RPX0RFR1JFRVMgPSAzLjE0MTU5MjY1MzU5O1xuXG5BbmltYXRlLlJBRElBTiA9IFJBRElBTjtcbkFuaW1hdGUuREVHUkVFX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU47XG5BbmltYXRlLkRFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFXzM2MF9BU19SQURJQU47XG5BbmltYXRlLlBJID0gUEk7XG5BbmltYXRlLlJBRF9UT19ERUdSRUVTID0gUkFEX1RPX0RFR1JFRVM7XG5cbkFuaW1hdGUuU3RhdGljID1cbiAgICBBbmltYXRlLlV0aWwgPVxuICAgICAgICBTdGF0aWM7XG5cbmlmIChnZXRXaW5kb3coKSkge1xuICAgIGdldFdpbmRvdygpLkFuaW1hdGUgPSBBbmltYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlO1xuIiwiXG5leHBvcnQgY29uc3QgTEVUVEVSX0NPTlNPTkFOVCA9ICdCLEMsRCxGLEcsSCxKLEssTCxNLE4sUCxRLFIsUyxULFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTEVUVEVSX1ZPV0VMID0gJ0EsRSxJLE8sVSxZJztcbmV4cG9ydCBjb25zdCBBQkMgPSAnQSxCLEMsRCxFLEYsRyxILEksSixLLEwsTSxOLE8sUCxRLFIsUyxULFUsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBOVU1CRVJTID0gJzAsMSwyLDMsNCw1LDYsNyw4LDknO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORCA9ICcmJztcbiIsImltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgYXR0ciA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGVfZWxlbWVudCA9IHR5cGVPZihlbGVtZW50KTtcbiAgICBpZiAodHlwZV9lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50ID0gcXVlcnkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlT2YobmFtZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmFtZSlcbiAgICAgICAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyO1xuIiwiLyoqXG4gKlxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGZyb20sIHRvKVxue1xuICAgIGlmIChmcm9tID09PSBudWxsIHx8IHR5cGVvZiBmcm9tICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0ICYmIGZyb20uY29uc3RydWN0b3IgIT09IEFycmF5KSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciA9PT0gRGF0ZSB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBSZWdFeHAgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gRnVuY3Rpb24gfHxcbiAgICAgICAgZnJvbS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nIHx8IGZyb20uY29uc3RydWN0b3IgPT09IE51bWJlciB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiBuZXcgZnJvbS5jb25zdHJ1Y3Rvcihmcm9tKTtcbiAgICB9XG5cbiAgICB0byA9IHRvIHx8IG5ldyBmcm9tLmNvbnN0cnVjdG9yKCk7XG5cbiAgICBmb3IgKG5hbWUgaW4gZnJvbSlcbiAgICB7XG4gICAgICAgIHRvW25hbWVdID0gdHlwZW9mIHRvW25hbWVdID09IFwidW5kZWZpbmVkXCIgPyBjbG9uZShmcm9tW25hbWVdLCBudWxsKSA6IHRvW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmU7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChzcmMsIGluc3RhbmNlKVxue1xuICAgIGlmIChpc05vZGUoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLnNsaWNlKCk7XG5cbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHNyYy5iaW5kKGluc3RhbmNlIHx8IHt9KTtcblxuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNyYyk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNyY1trZXldO1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBjb3B5KHZhbHVlLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHNyYyA6IHt9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNyYztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHk7XG4iLCIvKlxuXG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSk7XG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSwgdHJ1ZSk7XG5jb25zdCBhcnIxID0gY3JlYXRlQXJyYXkoNSwgMSk7XG5jb25zdCBhcnIyID0gY3JlYXRlQXJyYXkoNSwgJ2hlbGxvIHdvcmxkJyk7XG5jb25zdCBhcnIzID0gY3JlYXRlQXJyYXkoNSwgWzEwMCwyMDAsMzAwXSk7XG5jb25zdCBhcnI0ID0gY3JlYXRlQXJyYXkoNSwge2E6J0EnLGI6J0InLGM6J0MnfSk7XG5cbiovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBudW1cbiAqIEBwYXJhbSBmaWxsXG4gKiBAcmV0dXJucyB7YW55W119XG4gKi9cbmNvbnN0IGNyZWF0ZUFycmF5ID0gZnVuY3Rpb24gKG51bSwgZmlsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGZpbGwgPT09ICdzdHJpbmcnICl7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkobnVtKS5maWxsKGZpbGwpO1xuICAgIH1cblxuICAgIGFyciA9IG5ldyBBcnJheShudW0pLmZpbGwoMCk7XG4gICAgYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgciA9IGZpbGwuY2FsbChmaWxsLCBpLCBpKTtcbiAgICAgICAgICAgIGFycltpXSA9IHR5cGVvZiByID09PSAnYm9vbGVhbicgfHwgciA/IHIgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsKSkgYXJyW2ldID0gZmlsbFtpXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZmlsbFtpXSA7XG4gICAgICAgIGVsc2UgYXJyW2ldID0gZmlsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFycmF5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cnMsIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgICAgaXNfYXR0ciA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlT2Yoc3JjLCAnb2JqZWN0JykgJiYgIWlzTm9kZShzcmMpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9odG1sID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9jaGlsZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGluc2VydF9odG1sKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSlcbiAgICAgICAgICAgICAgICBpbnNlcnRfY2hpbGQoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIGluc2VydChzcmNbaV0pO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzX2F0dHIoYXR0cnMpKSB7XG4gICAgICAgIGlubmVyID0gYXR0cnM7XG4gICAgICAgIGF0dHJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzKVxuICAgICAgICBmb3IgKGxldCBrIGluIGF0dHJzKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXG4gICAgaWYgKGlubmVyKVxuICAgICAgICBpbnNlcnQoaW5uZXIpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChhcHBlbmQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmIChpc05vZGUoYXBwZW5kKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXBwZW5kKTtcblxuICAgIGlmICh0eXBlT2YoYXBwZW5kLCAnc3RyaW5nJykpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0cjJub2RlKGFwcGVuZCkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJcbmNvbnN0IGRlY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgcGFpcnMgPSAocXVlcnlbMF0gPT09ICc/JyA/IHF1ZXJ5LnN1YnN0cigxKSA6IHF1ZXJ5KS5zcGxpdCgnJicpO1xuICAgIHBhaXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICByZXN1bHRbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdIHx8ICcnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmluZWRJbiA9IGZ1bmN0aW9uIChzdGFjaywgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RhY2sgJiYgc3RhY2tbdmFsdWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkSW47XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuLypjb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGxpc3QuY2hpbGROb2RlcyksIGNhbGxiYWNrLCB0bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07Ki9cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgaW5zdGFuY2UgPSB7fSkge1xuICAgIGxldCB0eXBlID0gdHlwZU9mKGxpc3QpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goKGksIHYsIGEpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGksIHYsIGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTm9kZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBlYWNoKEFycmF5LmZyb20obGlzdCksIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBlYWNoKFtsaXN0XSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoa2V5KSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBrZXksIGxpc3Rba2V5XSwgbGlzdCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChsaXN0LnNwbGl0KFwiXCIpLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICBjb25zdCBhcnIgPSAobmV3IEFycmF5KGxpc3QpKS5maWxsKDApO1xuICAgICAgICAgICAgbGlzdCA9IGVhY2goYXJyLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG59O1xuXG5lYWNoLnBhcmVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbn07XG5cbmVhY2guZmlsdGVyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGNhbGxiYWNrLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWFjaDtcbiIsIlxuY29uc3QgZW5jb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdCArPSAoKHJlc3VsdC5sZW5ndGgpID8gJyYnIDogJz8nKSArIGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5jb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGV4aXN0cyA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQgJiYgc3JjICE9PSBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhpc3RzO1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhdGlvbjtcbiIsIlxuY29uc3QgZ2V0V2luZG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpbmRvdyBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdpbmRvdztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cbi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5jb25zdCBodHRwUmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQga2V5O1xuICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGE6IGNvbmZpZy5kYXRhIHx8IHt9LFxuICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMgfHwge30sXG4gICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgdXNlRm9ybURhdGE6IGNvbmZpZy51c2VGb3JtRGF0YSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhIWNvbmZpZy51c2VGb3JtRGF0YSxcbiAgICAgICAgYXN5bmM6IGNvbmZpZy5hc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLmFzeW5jLFxuICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICBwYXNzd29yZDogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29uY2F0ZVN0cmluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJicgKyBrZXkgKyAnPScgKyAob3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pIDogcGFyYW1zW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRoaXNJbnN0YW5jZSA9ICh0eXBlT2YodGhpc0luc3RhbmNlLCAnb2JqZWN0JykpID8gdGhpc0luc3RhbmNlIDoge307XG5cbiAgICAvLyBkYXRhIHByZXBhcmVcbiAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBvcHRpb25zLmFjdGlvbi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyc7XG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gcmVzZXQgdG8gdXNlRm9ybURhdGEgaW4gdHJ1ZVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEoc2VuZERhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEuYXBwZW5kKGtleSwgb3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5kYXRhW2tleV0pIDogb3B0aW9ucy5kYXRhW2tleV0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBidWlsZCByZXF1ZXN0XG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMuYWN0aW9uLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcgJiYgIW9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpc0luc3RhbmNlLlhNTEh0dHBSZXF1ZXN0ID0geGhyO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSwgeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIuc2VuZE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHhoci5zZW5kKHNlbmREYXRhKTtcbiAgICByZXR1cm4geGhyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFJlcXVlc3Q7XG4iLCJpbXBvcnQgYXR0ciBmcm9tIFwiLi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4uL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi4vc3RhdGljL2dldERvY3VtZW50XCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL3N0cjJmcmFnbWVudFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGVuY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZW5jb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBkZWNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2RlY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtcbiAgICBleHRlbmRSZWN1cnNpdmVcbn0gIGZyb20gXCIuLi9zdGF0aWMvZXh0ZW5kXCI7XG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vc3RhdGljL2lzRW1wdHlcIjtcbmltcG9ydCBmaW5kT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdFwiO1xuaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdHNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcIi4uL3N0YXRpYy9mb3JtYXRcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IGxvYWRKUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1wiO1xuaW1wb3J0IGxvYWRKU1N5bmMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNTeW5jXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IG51bWJlcjJzdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9udW1iZXIyc3RyaW5nXCI7XG5pbXBvcnQgb24gZnJvbSBcIi4uL3N0YXRpYy9vblwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBwb3NpdGlvbk1vdXNlIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25Nb3VzZVwiO1xuaW1wb3J0IHJhbmRvbSwge1xuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZ1xufSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4uL3N0YXRpYy91cmlcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgY3JlYXRlQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVBcnJheVwiO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNTdHJpbmdcIjtcbmltcG9ydCBleGlzdHMgZnJvbSBcIi4uL3N0YXRpYy9leGlzdHNcIjtcbmltcG9ydCBpc0RlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9pc0RlZmluZWRcIjtcbmltcG9ydCBsb2FkQmxvYmZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQmxvYmZpbGVcIjtcbmltcG9ydCBsb2FkSlNPTiBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU09OXCI7XG5pbXBvcnQgbG9hZFRleHRmaWxlIGZyb20gXCIuLi9zdGF0aWMvbG9hZFRleHRmaWxlXCI7XG5pbXBvcnQgdG9IVE1MIGZyb20gXCIuLi9zdGF0aWMvdG9IVE1MXCI7XG5pbXBvcnQgdG9YTUwgZnJvbSBcIi4uL3N0YXRpYy90b1hNTFwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCB1bmlxQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy91bmlxQXJyYXlcIjtcblxuY29uc3QgU3RhdGljID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGdldERvY3VtZW50LFxuICAgIGdldFdpbmRvdyxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBleGlzdHMsXG4gICAgaXNEZWZpbmVkLFxuICAgIGxvYWRCbG9iZmlsZSxcbiAgICBsb2FkSlNPTixcbiAgICBsb2FkVGV4dGZpbGUsXG4gICAgdG9IVE1MLFxuICAgIHRvWE1MLFxuICAgIHN0eWxpemVyLFxuICAgIHVuaXFBcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCB0cnVlLCB0byk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ3N0cmluZycpKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0RlZmluZWQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3JjKVxuICAgICAgICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzcmMgPT09IFwiXCIgfHwgc3JjID09PSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHNyYyA9PT0gMCB8fCBzcmMgPT09IG51bGwgfHwgc3JjID09PSB1bmRlZmluZWQgfHwgc3JjID09PSBmYWxzZSB8fCBpc05hTihzcmMpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIiwiLy8gaW1wb3J0IERPTVBhcnNlciBmcm9tICdET01QYXJzZXInO1xuXG5jb25zdCBpc0hUTUxTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHRydWVzdCA9IGZhbHNlKSB7XG5cbiAgICBpZiAodHJ1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudHJpbSgpLnN1YnN0cmluZygwLCAxKSA9PT0gJzwnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNIVE1MU3RyaW5nO1xuIiwiXG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XG4iLCJcbmNvbnN0IGlzU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc1N0cmluZztcbiIsIlxuY29uc3QgbG9hZEJsb2JmaWxlID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAgIC50aGVuKGJsb2IgPT4gb25sb2FkKGJsb2IpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEJsb2JmaWxlOyIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50KCk7XG5jb25zdCBsb2FkSlMgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkSlMoc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnRFbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBpZCA9ICdyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcyc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBzY3JpcHRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlM7IiwiXG5jb25zdCBsb2FkSlNPTiA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IG9ubG9hZChqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU09OOyIsIlxuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcblxuLyoqXG4gKiBMb2FkcyBhIHNjcmlwdCBlbGVtZW50IHdpdGggamF2YXNjcmlwdCBzb3VyY2VcbiAqXG4gKiAubG9hZEpTU3luYyAoIHtcbiAqICAgICAgbXlzY3JpcHQxOiAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgbXlzY3JpcHQyOiAnL3BhdGgvdG8vbXlzY3JpcHQyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogLmxvYWRKU1N5bmMgKCBbXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQyJyxcbiAqICAgIF0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5sb2FkSlNTeW5jXG4gKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAqIEBwYXJhbSBjYWxsYmFjayAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gYWxsIHNyY3MgaXMgbG9hZGVkXG4gKiBAcGFyYW0gb25lcnJvciAgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWQgaXMgZmFpbGVkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgbG9hZEpTU3luYyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcikge1xuICAgIGlmICh0eXBlT2Yoc3JjcywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICBpZiAodHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MuZm9yRWFjaCggKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBvYmpbJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICBzcmM6IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNbdGhpcy5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yICsrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTU3luYztcbiIsIlxuY29uc3QgbG9hZFRleHRmaWxlID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgIC50aGVuKHRleHQgPT4gb25sb2FkKHRleHQpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFRleHRmaWxlOyIsIlxuY29uc3QgbWVyZ2UgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIG9iamVjdDJba2V5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG1lcmdlKG9iamVjdDFba2V5XSwgb2JqZWN0MltrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3QxO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2U7XG4iLCJcblxuY29uc3Qgbm9kZTJzdHIgPSAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pbm5lckhUTUw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlMnN0cjtcbiIsIlxuZXhwb3J0IGNvbnN0IG51bWJlcjJzdHJpbmcgPSBmdW5jdGlvbiAoeCkge1xuICAgIGxldCBlO1xuICAgIGlmIChNYXRoLmFicyh4KSA8IDEuMCkge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCdlLScpWzFdKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHggKj0gTWF0aC5wb3coMTAsZS0xKTtcbiAgICAgICAgICAgIHggPSAnMC4nICsgKG5ldyBBcnJheShlKSkuam9pbignMCcpICsgeC50b1N0cmluZygpLnN1YnN0cmluZygyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJysnKVsxXSk7XG4gICAgICAgIGlmIChlID4gMjApIHtcbiAgICAgICAgICAgIGUgLT0gMjA7XG4gICAgICAgICAgICB4IC89IE1hdGgucG93KDEwLGUpO1xuICAgICAgICAgICAgeCArPSAobmV3IEFycmF5KGUrMSkpLmpvaW4oJzAnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlcjJzdHJpbmc7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IG9uID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpIHtcbiAgICBsZXQgaSwgZWxlbWVudHMgPSBbXTtcblxuICAgIHN3aXRjaCAodHlwZU9mKHNlbGVjdG9yKSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlbGVtZW50c1tpXSAmJiBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCAhIWJ1YmJsZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb247XG4iLCIvLyBpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5cbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4vaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuY29uc3QgcG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGNvbnN0IGRhdGEgPSB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH07XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlXG4gICAgaWYgKGVsZW0gJiYgZWxlbS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgY2xpZW50TGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQpO1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBkYXRhLnRvcCA9IHJlY3QudG9wICsgcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmxlZnQgPSByZWN0LmxlZnQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEucmlnaHQgPSByZWN0LnJpZ2h0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IHJlY3QuYm90dG9tICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gMCwgbGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHRvcCArPSBwYXJzZUludChlbGVtLm9mZnNldFRvcCwgMTApO1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRMZWZ0LCAxMCk7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS55ID0gdG9wO1xuICAgICAgICAgICAgZGF0YS54ID0gbGVmdDtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsZW1lbnQgPSBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uTW91c2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBhcmd1bWVudCBpcyBub3QgdHlwZSB0aGUgTW91c2VFdmVudCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Nb3VzZTtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiBAcmV0dXJucyB7Tm9kZXxib29sZWFufVxuICovXG5jb25zdCBxdWVyeSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgIHJldHVybiBlbGVtZW50cyAmJiBlbGVtZW50c1swXSA/IGVsZW1lbnRzWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeTtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudCc7XG5cbmNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG5cbmNvbnN0IHF1ZXJ5QWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgZnJvbSA9IGZyb20gfHwgZG9jO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuXG4gICAgaWYgKHR5cGVPZihmcm9tLCAnc3RyaW5nJykpXG4gICAgICAgIGZyb20gPSBkb2MucXVlcnlTZWxlY3Rvcihmcm9tKTtcbiAgICBpZiAoZnJvbSlcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGZyb20ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnQpfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsIi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQge0FCQywgTEVUVEVSX0NPTlNPTkFOVCwgTEVUVEVSX1ZPV0VMLCBOVU1CRVJTfSBmcm9tIFwiLi9hYmNcIjtcblxuXG5leHBvcnQgY29uc3QgcmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgbWluID0gbWluIHx8IDA7XG4gICAgbWF4ID0gbWF4IHx8IDEwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gaGV4IGNvbG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJy5zcGxpdCgnJyk7XG4gICAgbGV0IGksIGNvbG9yID0gJyMnO1xuICAgIGZvciAoaSA9IDA7IGkgPCA2OyBpKyspXG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICByZXR1cm4gY29sb3I7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgaWYgKHNpemUgPiAxNikge1xuICAgICAgICBsZXQgaSA9IE1hdGguY2VpbChzaXplLzE2KTtcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xuICAgICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pXG4gICAgICAgICAgICByZXMgKz0gQXJyYXkoMTYpLmZpbGwoMCkubWFwKGkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKS5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zbGljZSgwLCBzaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KEFycmF5KHNpemUpLmZpbGwoMCkubWFwKGkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKS5qb2luKCcnKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2LCB3aXRoTnVtYmVycyA9IGZhbHNlKSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGFicyA9IHdpdGhOdW1iZXJzXG4gICAgICAgID8gQUJDICsgTlVNQkVSUy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJylcbiAgICAgICAgOiBBQkMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGZvciAoaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgc3RyaW5nICs9IGFic1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhYnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tSHVtYW5pemVTdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgY29uc29uYW50ID0gIExFVFRFUl9DT05TT05BTlQudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsID0gIExFVFRFUl9WT1dFTC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWxGaXJzdCA9IChNYXRoLnJhbmRvbSgpICogMTApID4gNTtcbiAgICBmb3IgKGkgPSBzaXplIC8gMiArIDE7IGkgPiAwOyBpIC0tKSB7XG4gICAgICAgIGxldCBzMSA9IGNvbnNvbmFudFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb25zb25hbnQubGVuZ3RoKV07XG4gICAgICAgIGxldCBzMiA9IHZvd2VsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZvd2VsLmxlbmd0aCldO1xuICAgICAgICBzdHJpbmcgKz0gdm93ZWxGaXJzdCA/IHMxICsgczIgOiBzMiArIHMxO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDAsIHNpemUpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gcmFuZG9tIGl0ZW0gZnJvbSBhcnJheVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21JdGVtID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnJbcmFuZG9tKDAsIGFyci5sZW5ndGgtMSldIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGxvYy5ocmVmID0gdG8gfHwgZG9jLmhyZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG4vKipcbiAqIHNlYXJjaCggJ3VsID4gbGknLCAgJ2RhdGEtbGluaycsIE5vZGVFbGVtZW50KTtcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBhdHRyXG4gKiBAcGFyYW0gZnJvbVxuICogQHJldHVybnMge3t9fVxuICovXG5jb25zdCBzZWFyY2ggPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGF0dHIsIGZyb20pIHtcbiAgICBmcm9tID0gaXNOb2RlKGZyb20pID8gZnJvbSA6IHF1ZXJ5KGZyb20pO1xuICAgIGxldCBpID0gMCxcbiAgICAgICAga2V5LFxuICAgICAgICBlbGVtZW50cyA9IHt9LFxuICAgICAgICBxdWVyeUVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20gfHwgZG9jdW1lbnQuYm9keSk7XG5cbiAgICBpZiAocXVlcnlFbGVtZW50cykge1xuICAgICAgICB3aGlsZSAoaSA8IHF1ZXJ5RWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWF0dHIpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RWxlbWVudHNbaV0uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHF1ZXJ5RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1trZXldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiXG5jb25zdCBzdHIyZnJhZ21lbnQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKTtcbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGksXG4gICAgICAgICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcbiAgICAgICAgd2hpbGUgKGkgPSBjb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIyZnJhZ21lbnQ7XG4iLCJpbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuL3N0cjJmcmFnbWVudFwiO1xuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBmcmFnbWVudCA9IHN0cjJmcmFnbWVudChzdHJpbmcpO1xuXG4gICAgc3dpdGNoIChmcmFnbWVudC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICBjYXNlIDA6IGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXN1bHQgPSBmcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiXG5jb25zdCBzdHlsaXplciA9IGZ1bmN0aW9uIChlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXplcjtcbiIsIi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuY29uc3QgdG9IVE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC9odG1sJztcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCB0eXBlKTtcblxuICAgICAgICBpZiAoeG1sRG9jLmRvY3VtZW50RWxlbWVudCAmJiB4bWxEb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0hUTUw7XG4iLCJcbmNvbnN0IHRvT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuICAgICAgICA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b09iamVjdDtcbiIsIlxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5jb25zdCB0b1hNTCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0eXBlID0gJ3RleHQveG1sJztcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCB0eXBlKTtcblxuICAgICAgICBpZiAoeG1sRG9jLmRvY3VtZW50RWxlbWVudCAmJiB4bWxEb2MuZG9jdW1lbnRFbGVtZW50LnRhZ05hbWUgIT09ICdodG1sJykge1xuICAgICAgICAgICAgcmV0dXJuIHhtbERvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvWE1MO1xuIiwiaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbmNvbnN0IHR5cGVPZiA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHNpbXBsZVR5cGVzID0gWydudWxsJywgJ2Jvb2xlYW4nLCAndW5kZWZpbmVkJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdudW1iZXInLCAnZGF0ZScsICdhcnJheScsICdvYmplY3QnXTtcbiAgICBsZXQgdCA9IHR5cGVPZlN0cmljdCh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2ltcGxlVHlwZXMuaW5kZXhPZih0KSA9PT0gLTEgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgdCA9ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2Y7XG4iLCJcbmNvbnN0IHR5cGVPZlN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2ZTdHJpY3Q7XG4iLCJcbmNvbnN0IHVuaXFBcnJheSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bmlxQXJyYXk7XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcblxuXG5jb25zdCB1cmkgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICB1cmkgPSB1cmkgfHwgbG9jLnBhdGhuYW1lO1xuICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXC8rL2lnLCAnLycpO1xuICAgIHJldHVybiB1cmkubGVuZ3RoID4gMSAmJiB1cmkuc2xpY2UoMCwgMSkgIT09ICcvJyA/ICcvJyArIHVyaSA6IHVyaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVyaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=