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
                if (comp.components[key]) {
                    comp.components[key].parentComponent = comp;
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
        parentComponent: {}
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
        return (0, _clone2.default)(this);
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

/*

this.transform = Transform(this.element);
this.transform.method('rotate', ['45deg']);
this.transform.update();
this.transform.research();

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
        getMethodParameter: function getMethodParameter(name) {
            var strictType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (strictType && Array.isArray(root.transform_obj[name]) && root.transform_obj[name].length === 1) {
                return isNumber(root.transform_obj[name][0][0]) ? parseInt(root.transform_obj[name][0]) : root.transform_obj[name];
            }
            return root.transform_obj[name];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb3ZlQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQmxvYmZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTT04uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZFRleHRmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3R5bGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b0hUTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvWE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdW5pcUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbkZyYW1lIiwicm9vdCIsInJlcXVlc3RJZCIsInN0YXJ0cGFseSIsInBhdXNlZCIsImNhbGxiYWNrIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwic3RlcCIsInRpbWVzdGFtcCIsImNhbGwiLCJjYW5jZWwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsInN0YXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJDbGlwQ2xhc3MiLCJlbGVtZW50IiwicG9zaXRpb24iLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50IiwiQ2xpcCIsImFwcGVuZENoaWxkIiwiTm9kZSIsIm1vdmVUbyIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJwYXJlbnROb2RlIiwieCIsInkiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsInBhcmVudEVsZW1lbnQiLCJjb3B5VG8iLCJvbiIsImNsb25lIiwic3R5bGUiLCJvYmplY3QiLCJpbmplY3QiLCJlbGVtIiwiYXBwZW5kIiwiQ29tcG9uZW50IiwiY29uZmlnIiwibGlzdCIsInJhbmRvbU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcCIsImNyZWF0ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJjb21wb25lbnRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZmluZCIsImNsb25lZCIsInRlbXBsYXRlIiwiY2xvbmVOb2RlIiwiYmVmb3JlIiwiaW5pdGlhbGl6ZWQiLCJtZXRob2RzIiwidmFsdWVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImJpbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJkYXRhIiwicGFyZW50Q29tcG9uZW50IiwicHVzaCIsIm5vZGUiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwicHJvcHMiLCJvdmVycmlkZSIsIktleWJvYXJkRXZlbnRNYW5hZ2VyIiwic3RvcmFnZSIsImJhc2VDYWxsYmFja3NMaXN0IiwiYWRkU3RvcmFnZSIsImJhc2VDYWxsYmFjayIsInR5cGUiLCJrZXlDb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsInNldHVwTGlzdGVuZXJzIiwiYWRkIiwicm0iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWFjaCIsIndpdGhDb25kaXRpb25LZXkiLCJwcmVzcyIsInVwIiwiZG93biIsIkxvYWRlciIsImpzb24iLCJqc29ucyIsImphdmFzY3JpcHQiLCJpbWFnZXMiLCJhdWRpb3MiLCJ2aWRlb3MiLCJ2aWRlbyIsInNyYyIsIm9uZXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJzcmNzIiwib2JqIiwiaXRlbSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwic2NyaXB0cyIsIml0ZXJhdG9yIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInN1YnN0ciIsIm9ubG9hZCIsImUiLCJoZWFkIiwiaW1ncyIsIm5hbWUiLCJpbWciLCJhdWRpbyIsInByZWxvYWQiLCJNYXRyaXgiLCJtMTEiLCJtMTIiLCJtMjEiLCJtMjIiLCJneCIsImd5IiwiTW92ZUNsaXAiLCJjbGlwIiwiRXJyb3IiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsImNsb25lUHJvcGVydHkiLCJQb2ludCIsIlJlY3RhbmdsZSIsIlJveHkiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwiZGVmYXVsdCIsInByb3h5IiwiUHJveHkiLCJnZXQiLCJwcm9wIiwic2V0IiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJmaWxsIiwib2JzZXJ2ZSIsInRvIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsImluZGV4IiwicngiLCJldmVudEN1cnNvciIsIlNjZW5lIiwicHJvcGVydGllcyIsImN1cnJlbnQiLCJzY2VuZXMiLCJjb25zb2xlIiwibG9nIiwiYXR0cnMiLCJnZXRDdXJyZW50U2NlbmUiLCJuZXh0IiwibGVzdCIsImkiLCJydW4iLCJzY2VuZSIsImFwcGx5Iiwic2hvdyIsImNvbnN0cnVjdG9yIiwiU3RlcHNTY2VuZSIsInN0ZXBzIiwiaXRlcmF0aW9uIiwibG9vcCIsInN0ZXBfaXRlcmF0aW9uIiwic3RlcF9zdG9wIiwic3RlcF9jYWxsYmFja19lYWNoIiwic3RlcF9jYWxsYmFja3MiLCJwbGF5Iiwic3RvcCIsImVuZCIsIm1zIiwic2V0VGltZW91dCIsImdvdG8iLCJlYWNoU3RlcHMiLCJjdXJyZW50Q2FsbGJhY2tPYmplY3QiLCJUaW1lciIsInJlcGVhdCIsInRoaXNJbnN0YW5jZSIsInRoaXNJbnN0IiwiaXNOYU4iLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJUcmFuc2Zvcm0iLCJwYXJhbXMiLCJ0cmFuc2Zvcm1fb2JqIiwidHJhbnNmb3JtX2FyciIsInRyYW5zZm9ybSIsInNwbGl0IiwiZmlsdGVyIiwidHJhbnNmb3JtX3N0cmluZyIsInVwZGF0ZSIsImpvaW4iLCJyZXNlYXJjaCIsIm1ldGhvZCIsIm11bHRpcGx5IiwiZXh0IiwibWF0Y2giLCJudW0iLCJwYXJhbSIsInRyaW0iLCJtYXRjaGVkIiwiZ2V0TWV0aG9kUGFyYW1ldGVyIiwic3RyaWN0VHlwZSIsImlzTnVtYmVyIiwiQW5pbWF0ZSIsIlJBRElBTiIsIkRFR1JFRV9BU19SQURJQU4iLCJERUdSRUVfMzYwX0FTX1JBRElBTiIsIlBJIiwiUkFEX1RPX0RFR1JFRVMiLCJTdGF0aWMiLCJVdGlsIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJhdHRyIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIkRhdGUiLCJSZWdFeHAiLCJGdW5jdGlvbiIsIlN0cmluZyIsIk51bWJlciIsIkJvb2xlYW4iLCJjb3B5IiwiaW5zdGFuY2UiLCJjcmVhdGVBcnJheSIsImFyciIsInIiLCJ1bmRlZmluZWQiLCJ0YWciLCJpbm5lciIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImluc2VydCIsImsiLCJjcmVhdGVGcmFnbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNzcyIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwiaW5kZXhPZiIsImRlY29kZUdldFF1ZXJ5IiwicXVlcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb21Mb2FkZWQiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidiIsImEiLCJOb2RlTGlzdCIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZW5jb2RlR2V0UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleGlzdHMiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsInJlZyIsInJlcGxhY2UiLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwibG9jYXRpb24iLCJnZXRXaW5kb3ciLCJodHRwUmVxdWVzdCIsInNlbmREYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcHRpb25zIiwiYWN0aW9uIiwidXJsIiwiaHJlZiIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJzdHIybm9kZSIsInN0cjJmcmFnbWVudCIsIm5vZGUyc3RyIiwicXVlcnlBbGwiLCJzZWFyY2giLCJpc0VtcHR5IiwiaXNOb2RlIiwibG9hZENTUyIsImxvYWRKUyIsImxvYWRKU1N5bmMiLCJtZXJnZSIsIm51bWJlcjJzdHJpbmciLCJwb3NpdGlvbk1vdXNlIiwicmFuZG9tQ29sb3IiLCJyYW5kb21JdGVtIiwicmFuZG9tTnVtYmVyIiwicmFuZG9tU3RyaW5nIiwicmFuZG9tSHVtYW5pemVTdHJpbmciLCJyZWRpcmVjdCIsInR5cGVPZiIsInR5cGVPZlN0cmljdCIsInVyaSIsInRvT2JqZWN0IiwiaXNIVE1MU3RyaW5nIiwiaXNTdHJpbmciLCJpc0RlZmluZWQiLCJsb2FkQmxvYmZpbGUiLCJsb2FkSlNPTiIsImxvYWRUZXh0ZmlsZSIsInRvSFRNTCIsInRvWE1MIiwic3R5bGl6ZXIiLCJ1bmlxQXJyYXkiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInRydWVzdCIsImRpdiIsImNoaWxkRWxlbWVudENvdW50Iiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsImJsb2IiLCJsaW5rIiwicmVsIiwiZG9jdW1lbnRFbGVtZW50IiwidGV4dCIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29udGFpbmVyIiwiYWJzIiwicG93IiwiYnViYmxlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJyb3VuZCIsInRvcCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIk1vdXNlRXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtaW4iLCJtYXgiLCJmbG9vciIsImxldHRlcnMiLCJjb2xvciIsInNpemUiLCJjZWlsIiwicmVzIiwid2l0aE51bWJlcnMiLCJjb25zb25hbnQiLCJ2b3dlbCIsInZvd2VsRmlyc3QiLCJzMSIsInMyIiwibG9jIiwicXVlcnlFbGVtZW50cyIsImhhc0F0dHJpYnV0ZSIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGVzIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwieG1sRG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRhZ05hbWUiLCJzaW1wbGVUeXBlcyIsInQiLCJzZWxmIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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ZSI6ImFuaW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbi8qXG5jb25zdCBhbmltYXRpb24gPSBBbmltYXRpb25GcmFtZSgpO1xuYW5pbWF0aW9uLnBhdXNlKCk7XG5hbmltYXRpb24uc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5hbmltYXRpb24uY2FuY2VsKCk7XG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3tkdXJhdGlvbjogbnVtYmVyLCBzdGFydHBhbHk6IG51bWJlciwgcGF1c2VkOiBib29sZWFuLCBkZWxheTogbnVtYmVyLCByZXF1ZXN0SWQ6IG51bWJlciwgY2FsbGJhY2s6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlcn19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIHJlcXVlc3RJZDogMCxcbiAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICBjYWxsYmFjazogMCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICB9O1xuXG4gICAgcm9vdC5zdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoIXJvb3Quc3RhcnRwYWx5KSByb290LnN0YXJ0cGFseSA9IHRpbWVzdGFtcDtcbiAgICAgICAgcm9vdC5wcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHJvb3Quc3RhcnRwYWx5O1xuXG4gICAgICAgIGlmIChyb290LmNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5wcm9ncmVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdC5kdXJhdGlvbiAmJiByb290LmR1cmF0aW9uID4gcm9vdC5wcm9ncmVzcykge1xuICAgICAgICAgICAgcm9vdC5jYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgaWYgKHJvb3QucGF1c2VkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LnBhdXNlZCA9ICFyb290LnBhdXNlZDtcbiAgICB9O1xuXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgfTtcblxuICAgIHJvb3QuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocm9vdC5yZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkZyYW1lO1xuIiwiaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGlwQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBwb3NpdGlvbi5lbGVtZW50O1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG8ocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29weVRvKHBhcmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjb3B5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMubW92ZVRvKHBhcmVudCk7XG4gICAgfVxuXG4gICAgb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfVxuXG4gICAgY2xvbmUgKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvcGVydGllcygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wb3NpdGlvbikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5wb3NpdGlvbltrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBwb3NpdGlvbih0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggLSBwYXJlbnQueDtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAtIHBhcmVudC55O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgKHRoaXMuZWxlbWVudC5pZCB8fCAnY2xpcCcpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJucyB7IGJvdHRvbSwgZWxlbWVudCwgaGVpZ2h0LCBsZWZ0LCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeSB9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ2xpcCA9IGZ1bmN0aW9uIChlbGVtZW50KVxue1xuICAgIGNvbnN0IHJvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcblxuICAgIGlmIChyb290LmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJvb3QueCA9IHJvb3QueCAtIHBhcmVudC54O1xuICAgICAgICByb290LnkgPSByb290LnkgLSBwYXJlbnQueTtcbiAgICAgICAgcm9vdC5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgcm9vdC5lbGVtZW50LmlkIHx8ICdjbGlwJyk7XG4gICAgfVxuXG4gICAgcm9vdC5tb3ZlVG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jb3B5VG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICByb290LmVsZW1lbnQgPSBjb3B5KHJvb3QuZWxlbWVudCk7XG4gICAgICAgIHJvb3QubW92ZVRvKHBhcmVudEVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcm9vdC5zdHlsZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgc3R5bGl6ZXIocm9vdC5lbGVtZW50LCBvYmplY3QpO1xuICAgIH07XG5cbiAgICByb290LmluamVjdCA9IGZ1bmN0aW9uIChlbGVtLCBhcHBlbmQgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBxdWVyeShlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpcDtcbiIsImltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB7cmFuZG9tSHVtYW5pemVTdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuXG5cbi8qKlxuICpcbmNvbmZpZzpcbiAgICBpZDogJ2lkJyxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge30sXG4gICAgY29tcGxldGUgKCkge30sXG4gICAgbWV0aG9kczoge30sXG4gICAgbm9kZToge30sXG4gICAgY29tcG9uZW50czoge30sXG4gICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuXG5Db21wb25lbnQoe1xuICAgIGlkOiAnRXh0ZXJuYWxUZW1wbGF0ZUNvbXBvbmVudCcsXG4gICAgcHJvcHM6IFsndGl0bGUnXSxcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlJyxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXRlcmF0b3I6IDAsXG4gICAgfSxcbiAgICBjb21wbGV0ZSAoYXBwKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVbJ3RpdGxlJ10pXG4gICAgICAgIHRoaXMubm9kZVsndGl0bGUnXS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZCAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gKysgdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICAgICAgbWluIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSAtLSB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBnZXQgcHJvcGVydHkgYnkgaWQga2V5d29yZFxuICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbmZpZy5pZCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbU5hbWUgPSAgcmFuZG9tSHVtYW5pemVTdHJpbmcoNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJhbmRvbU5hbWUgPSByYW5kb21OYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcmFuZG9tTmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb25maWcuaWQgPSAnQ29tcG9uZW50JyArIHJhbmRvbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wID0gQ29tcG9uZW50LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jb21wb25lbnRzW2lkXSA/IGNvbXAuY29tcG9uZW50c1tpZF0gOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNoaWxkcmVuLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmlkID09PSBpZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jbG9uZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgICAgICBjbG9uZWQudGVtcGxhdGUgPSBjbG9uZWQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuYmVmb3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZihpc0hUTUxTdHJpbmcoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBxdWVyeShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLm1ldGhvZHMgJiYgT2JqZWN0LnZhbHVlcyhjb21wLm1ldGhvZHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5tZXRob2RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAubWV0aG9kc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1trZXldID0gY29tcC5tZXRob2RzW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAubWV0aG9kc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuZGF0YSAmJiBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZGF0YVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuZGF0YVtrZXldID0gY29tcC5kYXRhW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzICYmIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wLmNvbXBvbmVudHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBvbmVudHNba2V5XS5wYXJlbnRDb21wb25lbnQgPSBjb21wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wLmNoaWxkcmVuLnB1c2goY29tcC5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBjb21wLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgY29tcC5vbiA9IHNlYXJjaCgnW2RhdGEtb25dJywgJ2RhdGEtb24nLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgICAgICByZXR1cm4gY29tcDtcbiAgICB9XG59O1xuQ29tcG9uZW50Lmxpc3QgPSB7fTtcbkNvbXBvbmVudC5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIHRlbXBsYXRlOiBmYWxzZSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50Q29tcG9uZW50OiB7fSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCIvKlxuY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZEV2ZW50TWFuYWdlcigpO1xua2V5Ym9hcmQuZWFjaChFVkVOVF9OQU1FLCBmdW5jdGlvbiAoZXZlbnQpIHt9KVxua2V5Ym9hcmQud2l0aENvbmRpdGlvbktleVxua2V5Ym9hcmQucHJlc3NcbmtleWJvYXJkLnVwXG5rZXlib2FyZC5kb3duXG4qL1xuY29uc3QgS2V5Ym9hcmRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB7fTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGFkZFN0b3JhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XSkgc3RvcmFnZVtldmVudF0gPSB7fTtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XVtrZXldKSBzdG9yYWdlW2V2ZW50XVtrZXldID0gW107XG4gICAgICAgIHN0b3JhZ2VbZXZlbnRdW2tleV0ucHVzaChjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGJhc2VDYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2UpLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZVt0eXBlXSkubWFwKChrZXlDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0gKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlW3R5cGVdW2tleUNvZGVdLm1hcCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSB0eXBlICYmIHBhcnNlSW50KGtleUNvZGUpID09PSBldmVudC5rZXlDb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZXZlbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlYWNoQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGVhY2hDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzICgpIHtcbiAgICAgICAgY29uc3QgYWRkID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJtID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJtKCk7XG4gICAgICAgIGFkZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVhY2goZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlYWNoQ2FsbGJhY2soZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb25kaXRpb25LZXkoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGFkZFN0b3JhZ2UoZXZlbnQsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc3Moa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlwcmVzcycsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICB1cChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXVwJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlkb3duJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRFdmVudE1hbmFnZXI7XG4iLCJcblxuLyoqXG4gKiBMb2FkZXIuYXVkaW9zOiDGkiAoc3JjcywgY2FsbGJhY2spXG4gKiBMb2FkZXIuaW1hZ2VzOiDGkiAoaW1ncywgY2FsbGJhY2spXG4gKiBMb2FkZXIuamF2YXNjcmlwdDogxpIgKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gKiBMb2FkZXIuanNvbjogxpIgKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gKiBAcHJvcGVydHlcbiAqIEBtZXRob2QganNvblxuICogQG1ldGhvZCBqc29uc1xuICogQG1ldGhvZCBqYXZhc2NyaXB0XG4gKiBAbWV0aG9kIGltYWdlc1xuICogQG1ldGhvZCBhdWRpb3NcbiAqIEByZXR1cm5zIHt7fX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAganNvbjogTG9hZGVyLmpzb24sXG4gICAgICAgIGpzb25zOiBMb2FkZXIuanNvbnMsXG4gICAgICAgIGphdmFzY3JpcHQ6IExvYWRlci5qYXZhc2NyaXB0LFxuICAgICAgICBpbWFnZXM6IExvYWRlci5pbWFnZXMsXG4gICAgICAgIGF1ZGlvczogTG9hZGVyLmF1ZGlvcyxcbiAgICAgICAgdmlkZW9zOiBMb2FkZXIudmlkZW8sXG4gICAgfTtcbn07XG5cbi8qKlxuICogLmpzb24oJy91cmwvZGF0YWZpbGUuanNvbicsIChqc29uKSA9PiB7fSwgKGVycm9yKSA9PiB7fSlcbiAqXG4gKiBAcGFyYW0gc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBvbmVycm9yXG4gKi9cbkxvYWRlci5qc29uID0gZnVuY3Rpb24gKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBjYWxsYmFjayhqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIG9uZXJyb3JcbiAqL1xuTG9hZGVyLmpzb25zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKVxue1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY3MpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgb2JqW01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgTG9hZGVyLmpzb24oc3JjLCAoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNba2V5XSA9IGpzb247XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb25lcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHNjcmlwdCBlbGVtZW50IHdpdGggamF2YXNjcmlwdCBzb3VyY2VcbiAqXG4gKiAuamF2YXNjcmlwdCAoIHtcbiAqICAgICAgbXlfc2NyaXB0MTogJy9wYXRoL3RvL215X3NjcmlwdDEnLFxuICogICAgICBteV9zY3JpcHQyOiAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5qYXZhc2NyaXB0ICggW1xuICogICAgICAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAqICAgIF0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBMb2FkZXIuamF2YXNjcmlwdFxuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbkxvYWRlci5qYXZhc2NyaXB0ID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKVxue1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY3MpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgb2JqW01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBsZXQgc2NyaXB0O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gKHNyY3Nba2V5XS5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmNzW2tleV0gOiBzcmNzW2tleV0gKyAnLmpzJztcbiAgICAgICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgc2NyaXB0LmlkID0ga2V5O1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIExvYWQgYW4gaW1hZ2VzXG4gKlxuICogLmltYWdlcyAoIHtcbiAqICAgICAgaW1nMTogJy9wYXRoL3RvL2ltZzEnLFxuICogICAgICBpbWcyOiAnL3BhdGgvdG8vaW1nMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuaW1hZ2VzXG4gKiBAcGFyYW0gaW1nc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci5pbWFnZXMgPSBmdW5jdGlvbiAoaW1ncywgY2FsbGJhY2spIHtcbiAgICBpZiAoaW1ncyAmJiB0eXBlb2YgaW1ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoaW1ncykubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBpbWdzKSB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWdzW25hbWVdO1xuICAgICAgICAgICAgaW1nLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzW3RoaXMubmFtZV0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIExvYWQgYW4gYXVkaW8gZmlsZXNcbiAqXG4gKiAuYXVkaW9zICgge1xuICogICAgICBhdWRpbzE6ICcvcGF0aC90by9hdWRpbzEnLFxuICogICAgICBhdWRpbzI6ICcvcGF0aC90by9hdWRpbzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmF1ZGlvc1xuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIuYXVkaW9zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYXVkaW9zID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICAgICAgICAgYXVkaW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgIGF1ZGlvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgYXVkaW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgIGF1ZGlvc1tuYW1lXSA9IGF1ZGlvO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgYXVkaW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogTG9hZCBhbiB2aWRlbyBmaWxlc1xuICpcbiAqIC52aWRlb3MgKCB7XG4gKiAgICAgIHZpZGVvMTogJy9wYXRoL3RvL3ZpZGVvMScsXG4gKiAgICAgIHZpZGVvMjogJy9wYXRoL3RvL3ZpZGVvMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIudmlkZW9zXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci52aWRlb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCB2aWRlb3MgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzcmNzKSB7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICB2aWRlby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgdmlkZW8ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB2aWRlby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmlkZW9zW25hbWVdID0gdmlkZW87XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCB2aWRlb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCIvKipcblxuYSAobTExKSBIb3Jpem9udGFsIHNjYWxpbmcuXG5iIChtMTIpIEhvcml6b250YWwgc2tld2luZy5cbmMgKG0yMSkgVmVydGljYWwgc2tld2luZy5cbmQgKG0yMikgVmVydGljYWwgc2NhbGluZy5cbmUgKGR4KSBIb3Jpem9udGFsIG1vdmluZy5cbmYgKGR5KSBWZXJ0aWNhbCBtb3ZpbmcuXG4qL1xuY29uc3QgTWF0cml4ID0gZnVuY3Rpb24gKG0xMSwgbTEyLCBtMjEsIG0yMiwgZ3gsIGd5KSB7XG4gICAgcmV0dXJuIHttMTEsIG0xMiwgbTIxLCBtMjIsIGd4LCBneX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXg7XG4iLCJpbXBvcnQgQ2xpcCBmcm9tIFwiLi9DbGlwXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuXG4vKlxucmV0dXJuIE1vdmVDbGlwKHtcbiAgICBlbGVtZW50OiBgPGRpdiBjbGFzcz1cInNwcml0ZSByZWN0XCI+PC9kaXY+YCxcbiAgICBwYXJlbnQ6IEFwcENsaXAsXG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gW1xuICAgICAgICAgICAgJ3JvdGF0ZSgnICsgNDUgKydkZWcpJyxcbiAgICAgICAgICAgICdzY2FsZSgwLjUsIDAuNSknLFxuICAgICAgICBdO1xuICAgIH0sXG59KVxuKi9cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcbiAgICBjb25zdCBjbGlwID0gQ2xpcChlbGVtZW50KTtcblxuICAgIGlmKCFjbGlwLmVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBbZWxlbWVudF0gbm90IGZvbmQhJyk7XG4gICAgfVxuXG4gICAgY2xpcC5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1taXZlY2xpcCcsIGNvbmZpZy5pZCB8fCAnbWl2ZWNsaXAnKTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIC8vIGNsaXA6IGNsaXAsXG4gICAgICAgIGVsZW1lbnQ6IGNsaXAuZWxlbWVudCxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUud2lkdGggPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLndpZHRoID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgeCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC55XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLndpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC5oZWlnaHRcbiAgICAgICAgfSxcblxuICAgICAgICBzdHlsZShvYmplY3QpIHtcbiAgICAgICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVsZXRlIGNvbmZpZy5lbGVtZW50O1xuICAgIGRlbGV0ZSBjb25maWcuaW5pdGlhbGl6ZWQ7XG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByb290W2tleV0gPSBjb25maWdba2V5XVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiByb290LmluaXQgPT09ICdmdW5jdGlvbicgJiYgIXJvb3QuaW5pdGlhbGl6ZWQpe1xuICAgICAgICByb290LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgcm9vdC5pbml0LmNhbGwocm9vdCk7XG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uIChhcHBlbmQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjbG9uZVByb3BlcnR5ID0gdG9PYmplY3Qocm9vdCk7XG4gICAgICAgIGNsb25lUHJvcGVydHkuZWxlbWVudCA9IHJvb3QuZWxlbWVudC5jbG9uZU5vZGUocm9vdCk7XG4gICAgICAgIGlmIChhcHBlbmQpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNsb25lUHJvcGVydHkuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1vdmVDbGlwKGNsb25lUHJvcGVydHkpO1xuICAgIH07XG5cbiAgICByb290LmluamVjdCA9IGZ1bmN0aW9uIChlbGVtLCBhcHBlbmQgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBxdWVyeShlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ2xpcDtcbiIsIlxuY29uc3QgUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiB7eCwgeX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsIlxuY29uc3QgUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4ge3gsIHksIHdpZHRoLCBoZWlnaHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuIiwiLypcbmNvbnN0IFJ4U3RhdGUgPSBSb3h5KHtcbiAgICB0aXRsZTogJycsXG4gICAgYm9keTogJycsXG59KTtcblxuUnhTdGF0ZS5ldmVudCgoa2V5LCB2YWx1ZXMpPT57XG4gICAgaWYgKGtleSA9PT0gJycpIHt9XG4gICAgaW5qZWN0KCcjJyArIGtleSwgdmFsdWVzKTtcbn0pO1xuXG5SeFN0YXRlLnByb3h5LnRpdGxlID0gJ0ZpcnN0IHZhbHVlJztcblJ4U3RhdGUucHJveHkuYm9keSA9ICdUZXN0IGJvZHkgdGV4dCc7XG5cblRpbWVyLnRpbWVvdXQoKCkgPT4ge1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ3RpdGxlJywgJ0hlbGxvIGZyaWVuZCcpO1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ2JvZHknLCAnRG8geW91IGhhcHB5IG5vdz8nKTtcbn0sIDIwMDApO1xuXG4qL1xuXG4vKipcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBzZXQoKj0sICo9KTogKiwgZ2V0KCopOiAqLCBhY3Rpb24oKj0sICo9KTogKiwgZmlsbCgqPSwgKj0pOiAqfXxSb3h5fHt9fG51bGx8Ym9vbGVhbn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyA9IHtcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSAmJiB0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdLmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdC5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb2xkZXIgbmFtZTogc2VlfHNldD9cbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZFxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF5bG9hZC5jYWxsKHt9LCBwcm94eVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcmVzdWx0O1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdGlvbigpXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnQoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgY2hhbmdlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmUoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9IGtleTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1trZXldID0gdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbChwYXlsb2FkLCB0bykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlbdG9dKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm94eTtcbiIsImltcG9ydCBSb3h5IGZyb20gXCIuL1JveHlcIjtcblxuLyoqXG4gKiBjb25zdCByeCA9IFJveHlMaXN0ZW5lciAoe1xuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqIH0pXG4gKiByeC5zZXQoKTtcbiAqIHJ4LmRpc3BhdGNoKCk7XG4gKlxuICogcnguYWN0aW9uKCk7XG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIGRpc3BhdGNoKCo9LCAqPSk6IFJveHksIGdldCgqKTogKiwgZXZlbnQoKj0sICo9KTogdGhpcywgZmlsbCgqPSwgKj0pOiB0aGlzfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBSb3h5TGlzdGVuZXIgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICAgICAgX19hY3Rpb25fXygpIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3Rpb25zTmFtZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0gPSBwYXlsb2FkW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicgJiYgZXZlbnROYW1lICE9PSBhY3Rpb25zLl9fYWN0aW9uX18ubmFtZSkge1xuICAgICAgICAgICAgYWN0aW9uc05hbWVzW2V2ZW50TmFtZV0gPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnggPSBSb3h5KGFjdGlvbnNOYW1lcyk7XG4gICAgLy9cbiAgICByeC5hY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uc05hbWVzXG4gICAgfTtcblxuICAgIHJ4LmV2ZW50KChldmVudEN1cnNvciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuX19hY3Rpb25fXy5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRDdXJzb3IgPT09IGV2ZW50TmFtZSAmJiB0eXBlb2YgYWN0aW9uc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcng7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3h5TGlzdGVuZXI7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG5cbi8qXG5jb25zdCBzY2VuZSA9IFNjZW5lKCk7XG5zY2VuZS5hZGQoJ2VkaXRvcicsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUuYWRkKCdvdXRwdXQnLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLnJ1bignb3V0cHV0JywgWydoZWxsbycsIDIwMCwge31dKTtcbiovXG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllc1xuICogQHJldHVybnMge3tjdXJyZW50OiBzdHJpbmcsIHNjZW5lczoge2RlZmF1bHQ6IHtjYWxsYmFjaygpOiB2b2lkLCBhdHRyczogW119fSwgZWxlbWVudDogbnVsbH19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGN1cnJlbnQ6ICdkZWZhdWx0JyxcbiAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgc2NlbmVzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKSB7Y29uc29sZS5sb2coJ1tEZWZhdWx0IFNjZW5lXScpfSxcbiAgICAgICAgICAgICAgICBhdHRyczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBhdHRycyA9IFtdKSB7XG4gICAgICAgIHJvb3Quc2NlbmVzW25hbWVdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICBhdHRyc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJvb3QuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW25hbWVdO1xuICAgIH1cblxuICAgIHJvb3QuZ2V0Q3VycmVudFNjZW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zY2VuZXNbcm9vdC5jdXJyZW50XTtcbiAgICB9XG5cbiAgICByb290Lm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb290LnNjZW5lcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHJvb3QuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LnJ1bihsZXN0KTtcbiAgICB9O1xuXG4gICAgcm9vdC5ydW4gPSBmdW5jdGlvbiAoa2V5LCBhdHRycykge1xuICAgICAgICByb290LmN1cnJlbnQgPSBrZXkgfHwgJ2RlZmF1bHQnO1xuICAgICAgICBjb25zdCBzY2VuZSA9IHJvb3QuZ2V0Q3VycmVudFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc2NlbmUuY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBhdHRycyA9IEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXR0cnMgPyBhdHRycyA6IHNjZW5lLmF0dHJzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnNob3cgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290LnJ1bihrZXksIGF0dHJzKSB9O1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290LnJ1bihrZXksIGF0dHJzKSB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLnNjZW5lcyAmJiBwcm9wZXJ0aWVzLnNjZW5lcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMuc2NlbmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QuYWRkKGtleSwgcHJvcGVydGllcy5zY2VuZXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge2FueX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGVwc1NjZW5lID0gZnVuY3Rpb24gKGNvbmZpZyA9IHtzdGVwczogW119KSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgICBsb29wOiBjb25maWcubG9vcCB8fCBmYWxzZSxcbiAgICAgICAgc3RlcF9pdGVyYXRpb246IDAsXG4gICAgICAgIHN0ZXBfc3RvcDogZmFsc2UsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tfZWFjaDogbnVsbCxcbiAgICAgICAgc3RlcF9jYWxsYmFja3M6IGNvbmZpZy5zdGVwcyB8fCB7fSxcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICByb290LnBsYXkoKTtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBkZWxheShtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjay5jYWxsKHJvb3QpOyB9LCBtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdG8obmFtZSkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrcy5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlYWNoU3RlcHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfc3RvcCkgcmV0dXJuIHJvb3Q7XG5cbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfaXRlcmF0aW9uID4gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290Lmxvb3ApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tPYmplY3QgPSByb290LnN0ZXBfY2FsbGJhY2tzW3Jvb3Quc3RlcF9pdGVyYXRpb25dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFja09iamVjdC5jYWxsYmFjay5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICByb290Lml0ZXJhdGlvbisrXG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uKytcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzU2NlbmU7XG4iLCJcbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbn07XG5cblxuVGltZXIuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJpbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuLypcblxudGhpcy50cmFuc2Zvcm0gPSBUcmFuc2Zvcm0odGhpcy5lbGVtZW50KTtcbnRoaXMudHJhbnNmb3JtLm1ldGhvZCgncm90YXRlJywgWyc0NWRlZyddKTtcbnRoaXMudHJhbnNmb3JtLnVwZGF0ZSgpO1xudGhpcy50cmFuc2Zvcm0ucmVzZWFyY2goKTtcblxuLy8gLi4uXG5UcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFtcbiAgICAncm90YXRlKCcgKyAxMCArJ2RlZyknLFxuICAgICdzY2FsZSgwLjYsIDAuNiknLFxuICAgICdtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknLFxuXSk7XG5UcmFuc2Zvcm0uZWxlbWVudCh0aGlzLmVsZW1lbnQsIFsncm90YXRlKCcgKyAxMCArJ2RlZyknXSlcbmNvbnN0IHRycyA9IFRyYW5zZm9ybSh0aGlzLmVsZW1lbnQpO1xuXG4vLyB3aXRob3V0IG9mIHRoZSBUcmFuc2Zvcm1cbnRoaXMuc3R5bGUoe1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgnICsgMTAgKydkZWcpIHNjYWxlKDAuNiwgMC42KSBtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMCknXG59KTtcblxuKi9cbmNvbnN0IFRyYW5zZm9ybSA9IGZ1bmN0aW9uIChlbGVtZW50LCBwYXJhbXMpXG57XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgdHJhbnNmb3JtX29iajoge30sXG4gICAgICAgIHRyYW5zZm9ybV9hcnI6IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcpJykuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoICksXG4gICAgICAgIHRyYW5zZm9ybV9zdHJpbmc6ICcnLFxuXG4gICAgICAgIHVwZGF0ZSgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nID0gJyc7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHJvb3QudHJhbnNmb3JtX29iaikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nICs9IGtleSArICcoJyArIHJvb3QudHJhbnNmb3JtX29ialtrZXldLmpvaW4oJywgJykgKyAnKSAnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAgcm9vdC50cmFuc2Zvcm1fc3RyaW5nO1xuICAgICAgICAgICAgcm9vdC5yZXNlYXJjaCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZChtZXRob2QsIHByb3BlcnRpZXMsIG11bHRpcGx5ID0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbWV0aG9kID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXTtcblxuICAgICAgICAgICAgICAgIGlmIChtdWx0aXBseSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dCA9IHZhbHVlLm1hdGNoKC9bYS16XSsvZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHZhbHVlKSArIHBhcnNlSW50KHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IG51bSArIGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gdmFsdWUgKyByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2V0cyBwYXJhbWV0ZXJzIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc2VhcmNoKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIgPSBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpXG4gICAgICAgICAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApO1xuXG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9hcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJhbSA9IHJvb3QudHJhbnNmb3JtX2FycltpXSA9IHJvb3QudHJhbnNmb3JtX2FycltpXS50cmltKCkgICsgJyknO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZWQgPSBwYXJhbS5tYXRjaCgvW1xcd1xcLlxcLV0rL2lnKTtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWF0Y2hlZFswXV0gPSBtYXRjaGVkLnNsaWNlKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0TWV0aG9kUGFyYW1ldGVyKG5hbWUsIHN0cmljdFR5cGUgPSBmYWxzZSl7XG4gICAgICAgICAgICBpZiAoc3RyaWN0VHlwZSAmJiBBcnJheS5pc0FycmF5KHJvb3QudHJhbnNmb3JtX29ialtuYW1lXSkgJiYgcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc051bWJlcihyb290LnRyYW5zZm9ybV9vYmpbbmFtZV1bMF1bMF0pXG4gICAgICAgICAgICAgICAgICAgID8gcGFyc2VJbnQocm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdWzBdKVxuICAgICAgICAgICAgICAgICAgICA6IHJvb3QudHJhbnNmb3JtX29ialtuYW1lXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV07XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QucmVzZWFyY2goKTtcblxuICAgIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QubWV0aG9kKGtleSwgcGFyYW1zW2tleV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcm9vdC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn1cblxuVHJhbnNmb3JtLmVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdmFsdWVzKXtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZXMpKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gW107XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKChwcm9wKSA9PiB7IHByb3BzLnB1c2gocHJvcCkgfSk7XG4gICAgICAgIHN0eWxpemVyKGVsZW1lbnQsIHt0cmFuc2Zvcm06IHByb3BzLmpvaW4oJyAnKX0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsImltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4vc3RhdGljL2dldFdpbmRvd1wiO1xuXG5pbXBvcnQgQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL0NsaXAuanNcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Db21wb25lbnQuanNcIjtcbmltcG9ydCBLZXlib2FyZEV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL0tleWJvYXJkRXZlbnRNYW5hZ2VyLmpzXCI7XG5pbXBvcnQgTW92ZUNsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9Nb3ZlQ2xpcC5qc1wiO1xuaW1wb3J0IFNjZW5lIGZyb20gXCIuL2NvbXBvbmVudHMvU2NlbmUuanNcIjtcbmltcG9ydCBTdGVwc1NjZW5lIGZyb20gXCIuL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qc1wiO1xuaW1wb3J0IFRpbWVyIGZyb20gXCIuL2NvbXBvbmVudHMvVGltZXIuanNcIjtcbmltcG9ydCBSb3h5TGlzdGVuZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanNcIjtcbmltcG9ydCBSb3h5IGZyb20gXCIuL2NvbXBvbmVudHMvUm94eS5qc1wiO1xuaW1wb3J0IFN0YXRpYyBmcm9tICcuL3N0YXRpYyc7XG5pbXBvcnQgQW5pbWF0aW9uRnJhbWUgZnJvbSBcIi4vY29tcG9uZW50cy9BbmltYXRpb25GcmFtZVwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0xvYWRlclwiO1xuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi9jb21wb25lbnRzL01hdHJpeFwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL2NvbXBvbmVudHMvUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vY29tcG9uZW50cy9SZWN0YW5nbGVcIjtcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcblxuY29uc3QgQW5pbWF0ZSA9IHtcbiAgICBDbGlwLFxuICAgIENvbXBvbmVudCxcbiAgICBLZXlib2FyZEV2ZW50TWFuYWdlcixcbiAgICBNb3ZlQ2xpcCxcbiAgICBTY2VuZSxcbiAgICBTdGVwc1NjZW5lLFxuICAgIFRpbWVyLFxuICAgIFJveHlMaXN0ZW5lcixcbiAgICBSb3h5LFxuICAgIEFuaW1hdGlvbkZyYW1lLFxuICAgIExvYWRlcixcbiAgICBNYXRyaXgsXG4gICAgUG9pbnQsXG4gICAgUmVjdGFuZ2xlLFxuICAgIFRyYW5zZm9ybSxcbn07XG5cbmNvbnN0IFJBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFX0FTX1JBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOICogMzYwO1xuY29uc3QgUEkgPSAzLjE0MTU5MjY1MzU5O1xuY29uc3QgUkFEX1RPX0RFR1JFRVMgPSAzLjE0MTU5MjY1MzU5O1xuXG5BbmltYXRlLlJBRElBTiA9IFJBRElBTjtcbkFuaW1hdGUuREVHUkVFX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU47XG5BbmltYXRlLkRFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFXzM2MF9BU19SQURJQU47XG5BbmltYXRlLlBJID0gUEk7XG5BbmltYXRlLlJBRF9UT19ERUdSRUVTID0gUkFEX1RPX0RFR1JFRVM7XG5cbkFuaW1hdGUuU3RhdGljID1cbiAgICBBbmltYXRlLlV0aWwgPVxuICAgICAgICBTdGF0aWM7XG5cbi8vIGlmIChnZXRXaW5kb3coKSkgZ2V0V2luZG93KCkuQW5pbWF0ZSA9IEFuaW1hdGU7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIHRvXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gY2xvbmUoZnJvbSwgdG8pXG57XG4gICAgaWYgKGZyb20gPT09IG51bGwgfHwgdHlwZW9mIGZyb20gIT09IFwib2JqZWN0XCIpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yICE9PSBPYmplY3QgJiYgZnJvbS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yID09PSBEYXRlIHx8IGZyb20uY29uc3RydWN0b3IgPT09IFJlZ0V4cCB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBGdW5jdGlvbiB8fFxuICAgICAgICBmcm9tLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBmcm9tLmNvbnN0cnVjdG9yKGZyb20pO1xuICAgIH1cblxuICAgIHRvID0gdG8gfHwgbmV3IGZyb20uY29uc3RydWN0b3IoKTtcblxuICAgIGZvciAobmFtZSBpbiBmcm9tKVxuICAgIHtcbiAgICAgICAgdG9bbmFtZV0gPSB0eXBlb2YgdG9bbmFtZV0gPT0gXCJ1bmRlZmluZWRcIiA/IGNsb25lKGZyb21bbmFtZV0sIG51bGwpIDogdG9bbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgaW5zdGFuY2UpXG57XG4gICAgaWYgKGlzTm9kZShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuc2xpY2UoKTtcblxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gc3JjLmJpbmQoaW5zdGFuY2UgfHwge30pO1xuXG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSkge1xuICAgICAgICAvLyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3JjKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gc3JjW2tleV07XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGNvcHkodmFsdWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gc3JjIDoge30pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weTtcbiIsIi8qXG5cbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1KTtcbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1LCB0cnVlKTtcbmNvbnN0IGFycjEgPSBjcmVhdGVBcnJheSg1LCAxKTtcbmNvbnN0IGFycjIgPSBjcmVhdGVBcnJheSg1LCAnaGVsbG8gd29ybGQnKTtcbmNvbnN0IGFycjMgPSBjcmVhdGVBcnJheSg1LCBbMTAwLDIwMCwzMDBdKTtcbmNvbnN0IGFycjQgPSBjcmVhdGVBcnJheSg1LCB7YTonQScsYjonQicsYzonQyd9KTtcblxuKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIG51bVxuICogQHBhcmFtIGZpbGxcbiAqIEByZXR1cm5zIHthbnlbXX1cbiAqL1xuY29uc3QgY3JlYXRlQXJyYXkgPSBmdW5jdGlvbiAobnVtLCBmaWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZmlsbCA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShudW0pLmZpbGwoZmlsbCk7XG4gICAgfVxuXG4gICAgYXJyID0gbmV3IEFycmF5KG51bSkuZmlsbCgwKTtcbiAgICBhcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCByID0gZmlsbC5jYWxsKGZpbGwsIGksIGkpO1xuICAgICAgICAgICAgYXJyW2ldID0gdHlwZW9mIHIgPT09ICdib29sZWFuJyB8fCByID8gciA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGwpKSBhcnJbaV0gPSBmaWxsW2ldID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBmaWxsW2ldIDtcbiAgICAgICAgZWxzZSBhcnJbaV0gPSBmaWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXJyYXk7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBhdHRycywgaW5uZXIpIHtcbiAgICBjb25zdFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICBpc19hdHRyID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihzcmMsICdvYmplY3QnKSAmJiAhaXNOb2RlKHNyYylcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2h0bWwgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2NoaWxkID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2h0bWwoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKVxuICAgICAgICAgICAgICAgIGluc2VydF9jaGlsZChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgaW5zZXJ0KHNyY1tpXSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNfYXR0cihhdHRycykpIHtcbiAgICAgICAgaW5uZXIgPSBhdHRycztcbiAgICAgICAgYXR0cnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpXG4gICAgICAgIGZvciAobGV0IGsgaW4gYXR0cnMpXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7XG5cbiAgICBpZiAoaW5uZXIpXG4gICAgICAgIGluc2VydChpbm5lcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5cbmNvbnN0IGNyZWF0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKGFwcGVuZCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgaWYgKGlzTm9kZShhcHBlbmQpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChhcHBlbmQpO1xuXG4gICAgaWYgKHR5cGVPZihhcHBlbmQsICdzdHJpbmcnKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3RyMm5vZGUoYXBwZW5kKSk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuXG5jb25zdCBjc3MgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFwcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHt9O1xuICAgICAgICBwcm9wW3Byb3BlcnRpZXNdID0gYXJndW1lbnRzWzJdO1xuICAgICAgICByZXR1cm4gY3NzKHNlbGVjdG9yLCBwcm9wKTtcbiAgICB9XG5cbiAgICBsZXQgaSwgaywgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICB0eXBlU2VsZWN0b3IgPSB0eXBlT2Yoc2VsZWN0b3IpLFxuICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGVPZihwcm9wZXJ0aWVzKSxcbiAgICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaSwgcDEgPSBzdHIuc3BsaXQoJzsnKSwgcDIsIHBuLCBpeCwgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcDIgPSBwMVtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHBuID0gcDJbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGl4ID0gcG4uaW5kZXhPZignLScpO1xuICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBuID0gcG4uc3Vic3RyaW5nKDAsIGl4KSArIHBuW2l4ICsgMV0udG9VcHBlckNhc2UoKSArIHBuLnN1YnN0cmluZyhpeCArIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwMi5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIG9bcG5dID0gcDJbMV0udHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuXG4gICAgc3dpdGNoICh0eXBlU2VsZWN0b3IpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcblxuICAgICAgICBpZiAodHlwZVByb3BlcnRpZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHBhcnNlKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGZvciAoaSBpbiBlbGVtZW50cylcbiAgICAgICAgICAgIGZvciAoayBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlW2tdID0gcHJvcGVydGllc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIlxuY29uc3QgZGVjb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBwYWlycyA9IChxdWVyeVswXSA9PT0gJz8nID8gcXVlcnkuc3Vic3RyKDEpIDogcXVlcnkpLnNwbGl0KCcmJyk7XG4gICAgcGFpcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0gfHwgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZDtcbiIsIlxuY29uc3QgZGVmaW5lZEluID0gZnVuY3Rpb24gKHN0YWNrLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdGFjayAmJiBzdGFja1t2YWx1ZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWRJbjtcbiIsImltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICBlbHNlXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpXG4gICAgICAgIH0sIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUxvYWRlZDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG4vKmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRtcCkge1xuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwobGlzdC5jaGlsZE5vZGVzKSwgY2FsbGJhY2ssIHRtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsqL1xuXG5jb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCBpbnN0YW5jZSA9IHt9KSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlT2YobGlzdCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoaSwgdiwgYSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgaSwgdiwgYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goW2xpc3RdLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChrZXkpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGtleSwgbGlzdFtrZXldLCBsaXN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGxpc3Quc3BsaXQoXCJcIiksIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IChuZXcgQXJyYXkobGlzdCkpLmZpbGwoMCk7XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChhcnIsIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiXG5jb25zdCBlbmNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0ICs9ICgocmVzdWx0Lmxlbmd0aCkgPyAnJicgOiAnPycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZXhpc3RzID0gZnVuY3Rpb24gKHNyYykge1xuICAgIHJldHVybiBzcmMgIT09IHVuZGVmaW5lZCAmJiBzcmMgIT09IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGlzdHM7XG4iLCJcblxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgZm9yIChsZXQgcGFyYW0gaW4gc291cmNlKVxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHBhcmFtKSlcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3BhcmFtXSA9IHNvdXJjZVtwYXJhbV07XG5cbiAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGRlc3RpbmF0aW9uO1xuICAgIH1cblxuICAgIF9fLnByb3RvdHlwZSA9IHNvdXJjZS5wcm90b3R5cGU7XG4gICAgZGVzdGluYXRpb24ucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0ZW5kUmVjdXJzaXZlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBsZXQgcHJvcGVydHk7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgICAgICAgIGV4dGVuZFJlY3Vyc2l2ZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZDtcbiIsImltcG9ydCBmaW5kT2JqZWN0cyBmcm9tICcuL2ZpbmRPYmplY3RzJztcblxuXG5jb25zdCBmaW5kT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgY29uc3QgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0O1xuIiwiXG5cbmNvbnN0IGZpbmRPYmplY3RzID0gZnVuY3Rpb24gKGxpc3QsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXTtcbiAgICBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgbGlzdCA9IE9iamVjdC52YWx1ZXMobGlzdCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAobGlzdFtpXSAmJiBsaXN0W2ldW2F0dHJdICE9PSB1bmRlZmluZWQgJiYgbGlzdFtpXVthdHRyXSA9PT0gYXR0clZhbHVlKVxuICAgICAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuXG4gICAgcmV0dXJuIHRtcCA7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZHMgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wIDogZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3RzO1xuIiwiXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vZGVmaW5lZFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuL25vZGUyc3RyXCI7XG5cblxuLyoqXG4gKiBGb3JtYXR0aW5nIG9mIHN0cmluZywgb3IgbWF5YmUgdGVtcGxhdGUgYnVpbGRlclxuICpcbiAqIEV4YW1wbGVzOlxuICogLmZvcm1hdChcIkhlbGxvIHswfSwgeW91ciBjb2RlIGlzIHsxfSFcIiwgWydKYWRlJywgJ1ByZWZlY3QnXSk7XG4gKiAuZm9ybWF0KFwiSGVsbG8ge25hbWV9LCB5b3VyIGNvZGUgaXMge21lYW59IVwiLCB7bmFtZTonSmFkZScsIG1lYW46ICdQcmVmZWN0J30pO1xuICpcbiAqIEBwYXJhbSBzdHJpbmcgICAgU3RyaW5nXG4gKiBAcGFyYW0gbGlzdCAgQXJyYXl8T2JqZWN0XG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuY29uc3QgZm9ybWF0ID0gZnVuY3Rpb24gKHN0cmluZywgbGlzdCkge1xuICAgIGxldCByZWc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFxkKyl9L2cpO1xuICAgIGVsc2UgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09ICdvYmplY3QnKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcdyspfS9nKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyKSB7XG4gICAgICAgIGlmIChkZWZpbmVkKGxpc3RbbnVtYmVyXSkgJiYgaXNOb2RlKGxpc3RbbnVtYmVyXSkpXG4gICAgICAgICAgICBsaXN0W251bWJlcl0gPSBub2RlMnN0cihsaXN0W251bWJlcl0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgbGlzdFtudW1iZXJdICE9PSB1bmRlZmluZWQgPyBsaXN0W251bWJlcl0gOiBtYXRjaDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsIlxuY29uc3QgZ2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RvY3VtZW50IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiXG5jb25zdCBnZXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignd2luZG93IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2luZG93O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuLi9zdGF0aWMvZ2V0RG9jdW1lbnRcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL3N0YXRpYy9nZXRXaW5kb3dcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvc3RyMmZyYWdtZW50XCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgZW5jb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9lbmNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGRlY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZGVjb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vc3RhdGljL2h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRcIjtcbmltcG9ydCBkZWZpbmVkSW4gZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkSW5cIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuLi9zdGF0aWMvZWFjaFwiO1xuaW1wb3J0IGV4dGVuZCwge1xuICAgIGV4dGVuZFJlY3Vyc2l2ZVxufSAgZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi9zdGF0aWMvaXNFbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0XCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbG9hZEpTU3luYyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1N5bmNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgbnVtYmVyMnN0cmluZyBmcm9tIFwiLi4vc3RhdGljL251bWJlcjJzdHJpbmdcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmFuZG9tLCB7XG4gICAgcmFuZG9tQ29sb3IsXG4gICAgcmFuZG9tSXRlbSxcbiAgICByYW5kb21OdW1iZXIsXG4gICAgcmFuZG9tU3RyaW5nLFxuICAgIHJhbmRvbUh1bWFuaXplU3RyaW5nXG59IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBjcmVhdGVBcnJheSBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUFycmF5XCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuaW1wb3J0IGV4aXN0cyBmcm9tIFwiLi4vc3RhdGljL2V4aXN0c1wiO1xuaW1wb3J0IGlzRGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2lzRGVmaW5lZFwiO1xuaW1wb3J0IGxvYWRCbG9iZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRCbG9iZmlsZVwiO1xuaW1wb3J0IGxvYWRKU09OIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTT05cIjtcbmltcG9ydCBsb2FkVGV4dGZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkVGV4dGZpbGVcIjtcbmltcG9ydCB0b0hUTUwgZnJvbSBcIi4uL3N0YXRpYy90b0hUTUxcIjtcbmltcG9ydCB0b1hNTCBmcm9tIFwiLi4vc3RhdGljL3RvWE1MXCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHVuaXFBcnJheSBmcm9tIFwiLi4vc3RhdGljL3VuaXFBcnJheVwiO1xuXG5jb25zdCBTdGF0aWMgPSB7XG4gICAgYXR0cixcbiAgICBjcmVhdGVFbGVtZW50LFxuICAgIGNyZWF0ZUZyYWdtZW50LFxuICAgIGNzcyxcbiAgICBkb21Mb2FkZWQsXG4gICAgZ2V0RG9jdW1lbnQsXG4gICAgZ2V0V2luZG93LFxuICAgIGluamVjdCxcbiAgICBzdHIybm9kZSxcbiAgICBzdHIyZnJhZ21lbnQsXG4gICAgbm9kZTJzdHIsXG4gICAgcXVlcnksXG4gICAgcXVlcnlBbGwsXG4gICAgc2VhcmNoLFxuICAgIGVuY29kZUdldFF1ZXJ5LFxuICAgIGRlY29kZUdldFF1ZXJ5LFxuICAgIGh0dHBSZXF1ZXN0LFxuICAgIGRlZmluZWQsXG4gICAgZGVmaW5lZEluLFxuICAgIGV4dGVuZCxcbiAgICBleHRlbmRSZWN1cnNpdmUsXG4gICAgZWFjaCxcbiAgICBmaW5kT2JqZWN0LFxuICAgIGZpbmRPYmplY3RzLFxuICAgIGZvcm1hdCxcbiAgICBpc0VtcHR5LFxuICAgIGlzTm9kZSxcbiAgICBsb2FkQ1NTLFxuICAgIGxvYWRKUyxcbiAgICBsb2FkSlNTeW5jLFxuICAgIG1lcmdlLFxuICAgIG51bWJlcjJzdHJpbmcsXG4gICAgb24sXG4gICAgcG9zaXRpb24sXG4gICAgcG9zaXRpb25Nb3VzZSxcbiAgICByYW5kb20sXG4gICAgcmFuZG9tQ29sb3IsXG4gICAgcmFuZG9tSXRlbSxcbiAgICByYW5kb21OdW1iZXIsXG4gICAgcmFuZG9tU3RyaW5nLFxuICAgIHJhbmRvbUh1bWFuaXplU3RyaW5nLFxuICAgIHJlZGlyZWN0LFxuICAgIHR5cGVPZixcbiAgICB0eXBlT2ZTdHJpY3QsXG4gICAgdXJpLFxuICAgIGNvcHksXG4gICAgY2xvbmUsXG4gICAgdG9PYmplY3QsXG4gICAgaXNIVE1MU3RyaW5nLFxuICAgIGNyZWF0ZUFycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGV4aXN0cyxcbiAgICBpc0RlZmluZWQsXG4gICAgbG9hZEJsb2JmaWxlLFxuICAgIGxvYWRKU09OLFxuICAgIGxvYWRUZXh0ZmlsZSxcbiAgICB0b0hUTUwsXG4gICAgdG9YTUwsXG4gICAgc3R5bGl6ZXIsXG4gICAgdW5pcUFycmF5LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGljO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuXG5jb25zdCBpbmplY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGRhdGEsIGFwcGVuZCwgdG8pXG57XG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ2FycmF5JykpIHtcbiAgICAgICAgc2VsZWN0b3IuZm9yRWFjaCgoZWxlbSkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0KGVsZW0sIGRhdGEsIHRydWUsIHRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnc3RyaW5nJykpXG4gICAgICAgIHNlbGVjdG9yID0gcXVlcnkoc2VsZWN0b3IsIHRvKTtcblxuICAgIGlmICghYXBwZW5kKVxuICAgICAgICBzZWxlY3Rvci50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpIHtcbiAgICAgICAgaWYgKGlzTm9kZShkYXRhKSkge1xuICAgICAgICAgICAgc2VsZWN0b3IuYXBwZW5kQ2hpbGQoZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZU9mKGRhdGEsICdhcnJheScpKSB7XG4gICAgICAgICAgICBsZXQgaTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGluamVjdChzZWxlY3RvciwgZGF0YVtpXSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gKCFhcHBlbmQpID8gZGF0YSA6IHNlbGVjdG9yLmlubmVySFRNTCArIGRhdGE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdDtcbiIsIlxuY29uc3QgaXNEZWZpbmVkID0gZnVuY3Rpb24gKHNyYykge1xuICAgIHJldHVybiBzcmMgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRGVmaW5lZDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBzcmMpXG4gICAgICAgICAgICBpZiAoc3JjLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVPZihzcmMsICdzdHJpbmcnKSkge1xuICAgICAgICBzcmMgPSBzcmMucmVwbGFjZSgvXFxzL2csICcnKTtcbiAgICAgICAgcmV0dXJuIHNyYyA9PT0gXCJcIiB8fCBzcmMgPT09IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoc3JjID09PSAwIHx8IHNyYyA9PT0gbnVsbCB8fCBzcmMgPT09IHVuZGVmaW5lZCB8fCBzcmMgPT09IGZhbHNlIHx8IGlzTmFOKHNyYykpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzRW1wdHk7XG4iLCIvLyBpbXBvcnQgRE9NUGFyc2VyIGZyb20gJ0RPTVBhcnNlcic7XG5cbmNvbnN0IGlzSFRNTFN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgdHJ1ZXN0ID0gZmFsc2UpIHtcblxuICAgIGlmICh0cnVlc3QpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuICEhZGl2LmNoaWxkRWxlbWVudENvdW50O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZS50cmltKCkuc3Vic3RyaW5nKDAsIDEpID09PSAnPCc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0hUTUxTdHJpbmc7XG4iLCJcblxuY29uc3QgaXNOb2RlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmICh2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfTk9ERSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzTm9kZTtcbiIsIlxuY29uc3QgaXNTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3RyaW5nO1xuIiwiXG5jb25zdCBsb2FkQmxvYmZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgICAgLnRoZW4oYmxvYiA9PiBvbmxvYWQoYmxvYikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmxvYmZpbGU7IiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmNvbnN0IGxvYWRKU09OID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gb25sb2FkKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTT047IiwiXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5sb2FkSlNTeW5jICgge1xuICogICAgICBteXNjcmlwdDE6ICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICBteXNjcmlwdDI6ICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAubG9hZEpTU3luYyAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmxvYWRKU1N5bmNcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBsb2FkSlNTeW5jID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgaWYgKHR5cGVPZihzcmNzLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialsncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIHNyYzogKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNTeW5jO1xuIiwiXG5jb25zdCBsb2FkVGV4dGZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4odGV4dCA9PiBvbmxvYWQodGV4dCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVGV4dGZpbGU7IiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiXG5leHBvcnQgY29uc3QgbnVtYmVyMnN0cmluZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgbGV0IGU7XG4gICAgaWYgKE1hdGguYWJzKHgpIDwgMS4wKSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJ2UtJylbMV0pO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgeCAqPSBNYXRoLnBvdygxMCxlLTEpO1xuICAgICAgICAgICAgeCA9ICcwLicgKyAobmV3IEFycmF5KGUpKS5qb2luKCcwJykgKyB4LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnKycpWzFdKTtcbiAgICAgICAgaWYgKGUgPiAyMCkge1xuICAgICAgICAgICAgZSAtPSAyMDtcbiAgICAgICAgICAgIHggLz0gTWF0aC5wb3coMTAsZSk7XG4gICAgICAgICAgICB4ICs9IChuZXcgQXJyYXkoZSsxKSkuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyMnN0cmluZztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIi8vIGltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cblxuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgICAgICBkYXRhLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBkYXRhLmVsZW1lbnQgPSB3aW5kb3c7XG4gICAgfVxuICAgIGVsc2VcbiAgICBpZiAoZWxlbSAmJiBlbGVtLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIGNsaWVudFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRUb3AgfHwgMCxcbiAgICAgICAgICAgICAgICBjbGllbnRMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICAgICAgICAgIGRhdGEueSA9IE1hdGgucm91bmQocmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3ApO1xuICAgICAgICAgICAgZGF0YS54ID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCk7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGRhdGEudG9wID0gcmVjdC50b3AgKyBwYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGRhdGEubGVmdCA9IHJlY3QubGVmdCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5yaWdodCA9IHJlY3QucmlnaHQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEuYm90dG9tID0gcmVjdC5ib3R0b20gKyBwYWdlWE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzICYmIGVsZW1lbnRzWzBdID8gZWxlbWVudHNbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tICcuL2dldERvY3VtZW50JztcblxuY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcblxuY29uc3QgcXVlcnlBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmcm9tID0gZnJvbSB8fCBkb2M7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZU9mKGZyb20sICdzdHJpbmcnKSlcbiAgICAgICAgZnJvbSA9IGRvYy5xdWVyeVNlbGVjdG9yKGZyb20pO1xuICAgIGlmIChmcm9tKVxuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZnJvbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB7fSwgZWxlbWVudCl9KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmltcG9ydCB7QUJDLCBMRVRURVJfQ09OU09OQU5ULCBMRVRURVJfVk9XRUwsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYsIHdpdGhOdW1iZXJzID0gZmFsc2UpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gd2l0aE51bWJlcnNcbiAgICAgICAgPyBBQkMgKyBOVU1CRVJTLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKVxuICAgICAgICA6IEFCQy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz0gYWJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFicy5sZW5ndGgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21IdW1hbml6ZVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBjb25zb25hbnQgPSAgTEVUVEVSX0NPTlNPTkFOVC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWwgPSAgTEVUVEVSX1ZPV0VMLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbEZpcnN0ID0gKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA1O1xuICAgIGZvciAoaSA9IHNpemUgLyAyICsgMTsgaSA+IDA7IGkgLS0pIHtcbiAgICAgICAgbGV0IHMxID0gY29uc29uYW50W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbnNvbmFudC5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHMyID0gdm93ZWxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdm93ZWwubGVuZ3RoKV07XG4gICAgICAgIHN0cmluZyArPSB2b3dlbEZpcnN0ID8gczEgKyBzMiA6IHMyICsgczE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc2l6ZSk7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cbi8qKlxuICogc2VhcmNoKCAndWwgPiBsaScsICAnZGF0YS1saW5rJywgTm9kZUVsZW1lbnQpO1xuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGF0dHJcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcbmNvbnN0IHN0cjJmcmFnbWVudCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJmcmFnbWVudDtcbiIsImltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4vc3RyMmZyYWdtZW50XCI7XG5cbmNvbnN0IHN0cjJub2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGZyYWdtZW50ID0gc3RyMmZyYWdtZW50KHN0cmluZyk7XG5cbiAgICBzd2l0Y2ggKGZyYWdtZW50LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZyYWdtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJcbmNvbnN0IHN0eWxpemVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpemVyO1xuIiwiLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5jb25zdCB0b0hUTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvSFRNTDtcbiIsIlxuY29uc3QgdG9PYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIDoge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvT2JqZWN0O1xuIiwiXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmNvbnN0IHRvWE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC94bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5kb2N1bWVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9YTUw7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsIlxuY29uc3QgdW5pcUFycmF5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgc2VsZikge1xuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXFBcnJheTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==