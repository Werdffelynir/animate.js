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

var _isNumber = __webpack_require__(/*! ../static/isNumber */ "./src/static/isNumber.js");

var _isNumber2 = _interopRequireDefault(_isNumber);

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
                return (0, _isNumber2.default)(root.transform_obj[name][0][0]) ? parseInt(root.transform_obj[name][0]) : root.transform_obj[name];
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
    return (typeof value === 'number' || value instanceof Number) && !isNaN(value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb3ZlQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRCbG9iZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRDU1MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNPTi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2xvYWRKU1N5bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkVGV4dGZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9tZXJnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL25vZGUyc3RyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbnVtYmVyMnN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL29uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9wb3NpdGlvbk1vdXNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9xdWVyeUFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3JlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMmZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3RyMm5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9zdHlsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvSFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdG9YTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90eXBlT2ZTdHJpY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91bmlxQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy91cmkuanMiXSwibmFtZXMiOlsiQW5pbWF0aW9uRnJhbWUiLCJyb290IiwicmVxdWVzdElkIiwic3RhcnRwYWx5IiwicGF1c2VkIiwiY2FsbGJhY2siLCJkZWxheSIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJzdGVwIiwidGltZXN0YW1wIiwiY2FsbCIsImNhbmNlbCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInBhdXNlIiwic3RhcnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIkNsaXBDbGFzcyIsImVsZW1lbnQiLCJwb3NpdGlvbiIsInNldFByb3BlcnRpZXMiLCJwYXJlbnQiLCJDbGlwIiwiYXBwZW5kQ2hpbGQiLCJOb2RlIiwibW92ZVRvIiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsInBhcmVudE5vZGUiLCJ4IiwieSIsInNldEF0dHJpYnV0ZSIsImlkIiwicGFyZW50RWxlbWVudCIsImNvcHlUbyIsIm9uIiwiY2xvbmUiLCJzdHlsZSIsIm9iamVjdCIsImluamVjdCIsImVsZW0iLCJhcHBlbmQiLCJDb21wb25lbnQiLCJjb25maWciLCJsaXN0IiwicmFuZG9tTmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJjb21wIiwiY3JlYXRlIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbXBvbmVudENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2xvbmVkIiwidGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJiZWZvcmUiLCJpbml0aWFsaXplZCIsIm1ldGhvZHMiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJmb3JFYWNoIiwiYmluZCIsImhhc093blByb3BlcnR5IiwiaW5pdCIsImRhdGEiLCJwYXJlbnRDb21wb25lbnQiLCJwdXNoIiwibm9kZSIsImNvbXBsZXRlIiwiY29tcGxldGVkIiwiZG9jdW1lbnQiLCJwcm9wcyIsIm92ZXJyaWRlIiwiS2V5Ym9hcmRFdmVudE1hbmFnZXIiLCJzdG9yYWdlIiwiYmFzZUNhbGxiYWNrc0xpc3QiLCJhZGRTdG9yYWdlIiwiYmFzZUNhbGxiYWNrIiwidHlwZSIsImtleUNvZGUiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUludCIsImVhY2hDYWxsYmFja3NMaXN0IiwiZWFjaENhbGxiYWNrIiwic2V0dXBMaXN0ZW5lcnMiLCJhZGQiLCJybSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlYWNoIiwid2l0aENvbmRpdGlvbktleSIsInByZXNzIiwidXAiLCJkb3duIiwiTG9hZGVyIiwianNvbiIsImpzb25zIiwiamF2YXNjcmlwdCIsImltYWdlcyIsImF1ZGlvcyIsInZpZGVvcyIsInZpZGVvIiwic3JjIiwib25lcnJvciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsInNyY3MiLCJvYmoiLCJpdGVtIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJzY3JpcHRzIiwiaXRlcmF0b3IiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3Vic3RyIiwib25sb2FkIiwiZSIsImhlYWQiLCJpbWdzIiwibmFtZSIsImltZyIsImF1ZGlvIiwicHJlbG9hZCIsIk1hdHJpeCIsIm0xMSIsIm0xMiIsIm0yMSIsIm0yMiIsImd4IiwiZ3kiLCJNb3ZlQ2xpcCIsImNsaXAiLCJFcnJvciIsInZhbHVlIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xvbmVQcm9wZXJ0eSIsIlBvaW50IiwiUmVjdGFuZ2xlIiwiUm94eSIsInBheWxvYWQiLCJwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MiLCJkZWZhdWx0IiwicHJveHkiLCJQcm94eSIsImdldCIsInByb3AiLCJzZXQiLCJkaXNwYXRjaCIsInJlc3VsdCIsImZpbGwiLCJvYnNlcnZlIiwidG8iLCJnZXRQcm94eSIsIlJveHlMaXN0ZW5lciIsImFjdGlvbnMiLCJfX2FjdGlvbl9fIiwiYWN0aW9uc05hbWVzIiwiZXZlbnROYW1lIiwiaW5kZXgiLCJyeCIsImV2ZW50Q3Vyc29yIiwiU2NlbmUiLCJwcm9wZXJ0aWVzIiwiY3VycmVudCIsInNjZW5lcyIsImNvbnNvbGUiLCJsb2ciLCJhdHRycyIsImdldEN1cnJlbnRTY2VuZSIsIm5leHQiLCJsZXN0IiwiaSIsInJ1biIsInNjZW5lIiwiYXBwbHkiLCJzaG93IiwiY29uc3RydWN0b3IiLCJTdGVwc1NjZW5lIiwic3RlcHMiLCJpdGVyYXRpb24iLCJsb29wIiwic3RlcF9pdGVyYXRpb24iLCJzdGVwX3N0b3AiLCJzdGVwX2NhbGxiYWNrX2VhY2giLCJzdGVwX2NhbGxiYWNrcyIsInBsYXkiLCJzdG9wIiwiZW5kIiwibXMiLCJzZXRUaW1lb3V0IiwiZ290byIsImVhY2hTdGVwcyIsImN1cnJlbnRDYWxsYmFja09iamVjdCIsIlRpbWVyIiwicmVwZWF0IiwidGhpc0luc3RhbmNlIiwidGhpc0luc3QiLCJpc05hTiIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsIlRyYW5zZm9ybSIsInBhcmFtcyIsInRyYW5zZm9ybV9vYmoiLCJ0cmFuc2Zvcm1fYXJyIiwidHJhbnNmb3JtIiwic3BsaXQiLCJmaWx0ZXIiLCJ0cmFuc2Zvcm1fc3RyaW5nIiwidXBkYXRlIiwiam9pbiIsInJlc2VhcmNoIiwibWV0aG9kIiwibXVsdGlwbHkiLCJleHQiLCJtYXRjaCIsIm51bSIsInBhcmFtIiwidHJpbSIsIm1hdGNoZWQiLCJnZXRNZXRob2RQYXJhbWV0ZXIiLCJzdHJpY3RUeXBlIiwiQW5pbWF0ZSIsIlJBRElBTiIsIkRFR1JFRV9BU19SQURJQU4iLCJERUdSRUVfMzYwX0FTX1JBRElBTiIsIlBJIiwiUkFEX1RPX0RFR1JFRVMiLCJTdGF0aWMiLCJVdGlsIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJhdHRyIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIkRhdGUiLCJSZWdFeHAiLCJGdW5jdGlvbiIsIlN0cmluZyIsIk51bWJlciIsIkJvb2xlYW4iLCJjb3B5IiwiaW5zdGFuY2UiLCJjcmVhdGVBcnJheSIsImFyciIsInIiLCJ1bmRlZmluZWQiLCJ0YWciLCJpbm5lciIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImluc2VydCIsImsiLCJjcmVhdGVGcmFnbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNzcyIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwiaW5kZXhPZiIsImRlY29kZUdldFF1ZXJ5IiwicXVlcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb21Mb2FkZWQiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidiIsImEiLCJOb2RlTGlzdCIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZW5jb2RlR2V0UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleGlzdHMiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsInJlZyIsInJlcGxhY2UiLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwibG9jYXRpb24iLCJnZXRXaW5kb3ciLCJodHRwUmVxdWVzdCIsInNlbmREYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcHRpb25zIiwiYWN0aW9uIiwidXJsIiwiaHJlZiIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJzdHIybm9kZSIsInN0cjJmcmFnbWVudCIsIm5vZGUyc3RyIiwicXVlcnlBbGwiLCJzZWFyY2giLCJpc0VtcHR5IiwiaXNOb2RlIiwibG9hZENTUyIsImxvYWRKUyIsImxvYWRKU1N5bmMiLCJtZXJnZSIsIm51bWJlcjJzdHJpbmciLCJwb3NpdGlvbk1vdXNlIiwicmFuZG9tQ29sb3IiLCJyYW5kb21JdGVtIiwicmFuZG9tTnVtYmVyIiwicmFuZG9tU3RyaW5nIiwicmFuZG9tSHVtYW5pemVTdHJpbmciLCJyZWRpcmVjdCIsInR5cGVPZiIsInR5cGVPZlN0cmljdCIsInVyaSIsInRvT2JqZWN0IiwiaXNIVE1MU3RyaW5nIiwiaXNTdHJpbmciLCJpc0RlZmluZWQiLCJsb2FkQmxvYmZpbGUiLCJsb2FkSlNPTiIsImxvYWRUZXh0ZmlsZSIsInRvSFRNTCIsInRvWE1MIiwic3R5bGl6ZXIiLCJ1bmlxQXJyYXkiLCJpc051bWJlciIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwidHJ1ZXN0IiwiZGl2IiwiY2hpbGRFbGVtZW50Q291bnQiLCJub2RlVHlwZSIsIlRFWFRfTk9ERSIsIkVMRU1FTlRfTk9ERSIsIkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUiLCJET0NVTUVOVF9OT0RFIiwiYmxvYiIsImxpbmsiLCJyZWwiLCJkb2N1bWVudEVsZW1lbnQiLCJ0ZXh0Iiwib2JqZWN0MSIsIm9iamVjdDIiLCJjb250YWluZXIiLCJhYnMiLCJwb3ciLCJidWJibGUiLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0Iiwic2Nyb2xsVG9wIiwicGFnZVlPZmZzZXQiLCJib2R5Iiwic2Nyb2xsTGVmdCIsInBhZ2VYT2Zmc2V0IiwiY2xpZW50VG9wIiwiY2xpZW50TGVmdCIsInJvdW5kIiwidG9wIiwibGVmdCIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmlnaHQiLCJib3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0UGFyZW50IiwiTW91c2VFdmVudCIsImNsaWVudFgiLCJjbGllbnRZIiwicXVlcnlTZWxlY3RvckFsbCIsIm1pbiIsIm1heCIsImZsb29yIiwibGV0dGVycyIsImNvbG9yIiwic2l6ZSIsImNlaWwiLCJyZXMiLCJ3aXRoTnVtYmVycyIsImNvbnNvbmFudCIsInZvd2VsIiwidm93ZWxGaXJzdCIsInMxIiwiczIiLCJsb2MiLCJxdWVyeUVsZW1lbnRzIiwiaGFzQXR0cmlidXRlIiwiY3JlYXRlUmFuZ2UiLCJjcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQiLCJmaXJzdENoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzdHlsZXMiLCJwYXJzZXIiLCJET01QYXJzZXIiLCJ4bWxEb2MiLCJwYXJzZUZyb21TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwidGFnTmFtZSIsInNpbXBsZVR5cGVzIiwidCIsInNlbGYiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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LE1BQU0sNEJBQVo7QUFDQXpFLFdBQU1BLFFBQU95RSxJQUFJa0IsUUFBakI7QUFDQTNGLFdBQU1BLEtBQUluRCxPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBT21ELEtBQUl4VCxNQUFKLEdBQWEsQ0FBYixJQUFrQndULEtBQUloUSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsR0FBdEMsR0FBNEMsTUFBTWdRLElBQWxELEdBQXdEQSxJQUEvRDtBQUNILENBTEQ7O2tCQU9lQSxHIiwiZmlsZSI6ImFuaW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbi8qXG5jb25zdCBhbmltYXRpb24gPSBBbmltYXRpb25GcmFtZSgpO1xuYW5pbWF0aW9uLnBhdXNlKCk7XG5hbmltYXRpb24uc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5hbmltYXRpb24uY2FuY2VsKCk7XG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3tkdXJhdGlvbjogbnVtYmVyLCBzdGFydHBhbHk6IG51bWJlciwgcGF1c2VkOiBib29sZWFuLCBkZWxheTogbnVtYmVyLCByZXF1ZXN0SWQ6IG51bWJlciwgY2FsbGJhY2s6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlcn19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIHJlcXVlc3RJZDogMCxcbiAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICBjYWxsYmFjazogMCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICB9O1xuXG4gICAgcm9vdC5zdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoIXJvb3Quc3RhcnRwYWx5KSByb290LnN0YXJ0cGFseSA9IHRpbWVzdGFtcDtcbiAgICAgICAgcm9vdC5wcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHJvb3Quc3RhcnRwYWx5O1xuXG4gICAgICAgIGlmIChyb290LmNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5wcm9ncmVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdC5kdXJhdGlvbiAmJiByb290LmR1cmF0aW9uID4gcm9vdC5wcm9ncmVzcykge1xuICAgICAgICAgICAgcm9vdC5jYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgaWYgKHJvb3QucGF1c2VkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LnBhdXNlZCA9ICFyb290LnBhdXNlZDtcbiAgICB9O1xuXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgfTtcblxuICAgIHJvb3QuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocm9vdC5yZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkZyYW1lO1xuIiwiaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5cbmV4cG9ydCBjbGFzcyBDbGlwQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBwb3NpdGlvbi5lbGVtZW50O1xuICAgICAgICB0aGlzLnNldFByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICBtb3ZlVG8ocGFyZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29weVRvKHBhcmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBjb3B5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIHRoaXMubW92ZVRvKHBhcmVudCk7XG4gICAgfVxuXG4gICAgb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfVxuXG4gICAgY2xvbmUgKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfVxuXG4gICAgc2V0UHJvcGVydGllcygpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5wb3NpdGlvbikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1trZXldID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gdGhpcy5wb3NpdGlvbltrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBwb3NpdGlvbih0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLnggLSBwYXJlbnQueDtcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMueSAtIHBhcmVudC55O1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgKHRoaXMuZWxlbWVudC5pZCB8fCAnY2xpcCcpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBlbGVtZW50XG4gKiBAcmV0dXJucyB7IGJvdHRvbSwgZWxlbWVudCwgaGVpZ2h0LCBsZWZ0LCByaWdodCwgdG9wLCB3aWR0aCwgeCwgeSB9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ2xpcCA9IGZ1bmN0aW9uIChlbGVtZW50KVxue1xuICAgIGNvbnN0IHJvb3QgPSBwb3NpdGlvbihlbGVtZW50KTtcblxuICAgIGlmIChyb290LmVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKGVsZW1lbnQucGFyZW50Tm9kZSk7XG4gICAgICAgIHJvb3QueCA9IHJvb3QueCAtIHBhcmVudC54O1xuICAgICAgICByb290LnkgPSByb290LnkgLSBwYXJlbnQueTtcbiAgICAgICAgcm9vdC5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1jbGlwJywgcm9vdC5lbGVtZW50LmlkIHx8ICdjbGlwJyk7XG4gICAgfVxuXG4gICAgcm9vdC5tb3ZlVG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFyZW50RWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcm9vdC5jb3B5VG8gPSBmdW5jdGlvbiAocGFyZW50RWxlbWVudCkge1xuICAgICAgICByb290LmVsZW1lbnQgPSBjb3B5KHJvb3QuZWxlbWVudCk7XG4gICAgICAgIHJvb3QubW92ZVRvKHBhcmVudEVsZW1lbnQpO1xuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcm9vdC5zdHlsZSA9IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgc3R5bGl6ZXIocm9vdC5lbGVtZW50LCBvYmplY3QpO1xuICAgIH07XG5cbiAgICByb290LmluamVjdCA9IGZ1bmN0aW9uIChlbGVtLCBhcHBlbmQgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBxdWVyeShlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xpcDtcbiIsImltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB7cmFuZG9tSHVtYW5pemVTdHJpbmd9IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuXG5cbi8qKlxuICpcbmNvbmZpZzpcbiAgICBpZDogJ2lkJyxcbiAgICBwcm9wczoge30sXG4gICAgdGVtcGxhdGU6IGBgLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge30sXG4gICAgY29tcGxldGUgKCkge30sXG4gICAgbWV0aG9kczoge30sXG4gICAgbm9kZToge30sXG4gICAgY29tcG9uZW50czoge30sXG4gICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuXG5Db21wb25lbnQoe1xuICAgIGlkOiAnRXh0ZXJuYWxUZW1wbGF0ZUNvbXBvbmVudCcsXG4gICAgcHJvcHM6IFsndGl0bGUnXSxcbiAgICB0ZW1wbGF0ZTogJ3RlbXBsYXRlJyxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXRlcmF0b3I6IDAsXG4gICAgfSxcbiAgICBjb21wbGV0ZSAoYXBwKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGVbJ3RpdGxlJ10pXG4gICAgICAgIHRoaXMubm9kZVsndGl0bGUnXS50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZCAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gKysgdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICAgICAgbWluIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSAtLSB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDb21wb25lbnQgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBnZXQgcHJvcGVydHkgYnkgaWQga2V5d29yZFxuICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbmZpZy5pZCkge1xuICAgICAgICAgICAgbGV0IHJhbmRvbU5hbWUgPSAgcmFuZG9tSHVtYW5pemVTdHJpbmcoNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJhbmRvbU5hbWUgPSByYW5kb21OYW1lLnN1YnN0cmluZygwLCAxKS50b1VwcGVyQ2FzZSgpICsgcmFuZG9tTmFtZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICBjb25maWcuaWQgPSAnQ29tcG9uZW50JyArIHJhbmRvbU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb21wID0gQ29tcG9uZW50LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jb21wb25lbnRzW2lkXSA/IGNvbXAuY29tcG9uZW50c1tpZF0gOiBudWxsO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY29tcG9uZW50Q2hpbGRyZW4gPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNoaWxkcmVuLmZpbmQoKGNvbXBvbmVudCkgPT4gY29tcG9uZW50LmlkID09PSBpZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jbG9uZSA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgY29uc3QgY2xvbmVkID0gY2xvbmUodGhpcyk7XG4gICAgICAgICAgICBjbG9uZWQudGVtcGxhdGUgPSBjbG9uZWQudGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuIGNsb25lZDtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuYmVmb3JlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuYmVmb3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAudGVtcGxhdGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZihpc0hUTUxTdHJpbmcoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gc3RyMm5vZGUoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBxdWVyeShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLm1ldGhvZHMgJiYgT2JqZWN0LnZhbHVlcyhjb21wLm1ldGhvZHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5tZXRob2RzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAubWV0aG9kc1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAubWV0aG9kc1trZXldID0gY29tcC5tZXRob2RzW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAubWV0aG9kc1trZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbXAuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuZGF0YSAmJiBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXAuZGF0YVtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuZGF0YVtrZXldID0gY29tcC5kYXRhW2tleV0uYmluZChjb21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb21wLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5kYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzICYmIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wLmNvbXBvbmVudHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBvbmVudHNba2V5XS5wYXJlbnRDb21wb25lbnQgPSBjb21wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wLmNoaWxkcmVuLnB1c2goY29tcC5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBjb21wLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgY29tcC5vbiA9IHNlYXJjaCgnW2RhdGEtb25dJywgJ2RhdGEtb24nLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgICAgICByZXR1cm4gY29tcDtcbiAgICB9XG59O1xuQ29tcG9uZW50Lmxpc3QgPSB7fTtcbkNvbXBvbmVudC5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIHRlbXBsYXRlOiBmYWxzZSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50Q29tcG9uZW50OiB7fSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCIvKlxuY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZEV2ZW50TWFuYWdlcigpO1xua2V5Ym9hcmQuZWFjaChFVkVOVF9OQU1FLCBmdW5jdGlvbiAoZXZlbnQpIHt9KVxua2V5Ym9hcmQud2l0aENvbmRpdGlvbktleVxua2V5Ym9hcmQucHJlc3NcbmtleWJvYXJkLnVwXG5rZXlib2FyZC5kb3duXG4qL1xuY29uc3QgS2V5Ym9hcmRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB7fTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGFkZFN0b3JhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XSkgc3RvcmFnZVtldmVudF0gPSB7fTtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XVtrZXldKSBzdG9yYWdlW2V2ZW50XVtrZXldID0gW107XG4gICAgICAgIHN0b3JhZ2VbZXZlbnRdW2tleV0ucHVzaChjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGJhc2VDYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2UpLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZVt0eXBlXSkubWFwKChrZXlDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0gKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlW3R5cGVdW2tleUNvZGVdLm1hcCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSB0eXBlICYmIHBhcnNlSW50KGtleUNvZGUpID09PSBldmVudC5rZXlDb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZXZlbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlYWNoQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGVhY2hDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzICgpIHtcbiAgICAgICAgY29uc3QgYWRkID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJtID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJtKCk7XG4gICAgICAgIGFkZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVhY2goZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlYWNoQ2FsbGJhY2soZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb25kaXRpb25LZXkoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGFkZFN0b3JhZ2UoZXZlbnQsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc3Moa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlwcmVzcycsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICB1cChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXVwJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlkb3duJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRFdmVudE1hbmFnZXI7XG4iLCJcblxuLyoqXG4gKiBMb2FkZXIuYXVkaW9zOiDGkiAoc3JjcywgY2FsbGJhY2spXG4gKiBMb2FkZXIuaW1hZ2VzOiDGkiAoaW1ncywgY2FsbGJhY2spXG4gKiBMb2FkZXIuamF2YXNjcmlwdDogxpIgKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gKiBMb2FkZXIuanNvbjogxpIgKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gKiBAcHJvcGVydHlcbiAqIEBtZXRob2QganNvblxuICogQG1ldGhvZCBqc29uc1xuICogQG1ldGhvZCBqYXZhc2NyaXB0XG4gKiBAbWV0aG9kIGltYWdlc1xuICogQG1ldGhvZCBhdWRpb3NcbiAqIEByZXR1cm5zIHt7fX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAganNvbjogTG9hZGVyLmpzb24sXG4gICAgICAgIGpzb25zOiBMb2FkZXIuanNvbnMsXG4gICAgICAgIGphdmFzY3JpcHQ6IExvYWRlci5qYXZhc2NyaXB0LFxuICAgICAgICBpbWFnZXM6IExvYWRlci5pbWFnZXMsXG4gICAgICAgIGF1ZGlvczogTG9hZGVyLmF1ZGlvcyxcbiAgICAgICAgdmlkZW9zOiBMb2FkZXIudmlkZW8sXG4gICAgfTtcbn07XG5cbi8qKlxuICogLmpzb24oJy91cmwvZGF0YWZpbGUuanNvbicsIChqc29uKSA9PiB7fSwgKGVycm9yKSA9PiB7fSlcbiAqXG4gKiBAcGFyYW0gc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBvbmVycm9yXG4gKi9cbkxvYWRlci5qc29uID0gZnVuY3Rpb24gKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBjYWxsYmFjayhqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIG9uZXJyb3JcbiAqL1xuTG9hZGVyLmpzb25zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKVxue1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY3MpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgb2JqW01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgTG9hZGVyLmpzb24oc3JjLCAoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNba2V5XSA9IGpzb247XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb25lcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHNjcmlwdCBlbGVtZW50IHdpdGggamF2YXNjcmlwdCBzb3VyY2VcbiAqXG4gKiAuamF2YXNjcmlwdCAoIHtcbiAqICAgICAgbXlfc2NyaXB0MTogJy9wYXRoL3RvL215X3NjcmlwdDEnLFxuICogICAgICBteV9zY3JpcHQyOiAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5qYXZhc2NyaXB0ICggW1xuICogICAgICAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAqICAgIF0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBMb2FkZXIuamF2YXNjcmlwdFxuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbkxvYWRlci5qYXZhc2NyaXB0ID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKVxue1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY3MpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgb2JqW01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBsZXQgc2NyaXB0O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gKHNyY3Nba2V5XS5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmNzW2tleV0gOiBzcmNzW2tleV0gKyAnLmpzJztcbiAgICAgICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgc2NyaXB0LmlkID0ga2V5O1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIExvYWQgYW4gaW1hZ2VzXG4gKlxuICogLmltYWdlcyAoIHtcbiAqICAgICAgaW1nMTogJy9wYXRoL3RvL2ltZzEnLFxuICogICAgICBpbWcyOiAnL3BhdGgvdG8vaW1nMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuaW1hZ2VzXG4gKiBAcGFyYW0gaW1nc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci5pbWFnZXMgPSBmdW5jdGlvbiAoaW1ncywgY2FsbGJhY2spIHtcbiAgICBpZiAoaW1ncyAmJiB0eXBlb2YgaW1ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoaW1ncykubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBpbWdzKSB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWdzW25hbWVdO1xuICAgICAgICAgICAgaW1nLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzW3RoaXMubmFtZV0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIExvYWQgYW4gYXVkaW8gZmlsZXNcbiAqXG4gKiAuYXVkaW9zICgge1xuICogICAgICBhdWRpbzE6ICcvcGF0aC90by9hdWRpbzEnLFxuICogICAgICBhdWRpbzI6ICcvcGF0aC90by9hdWRpbzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmF1ZGlvc1xuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIuYXVkaW9zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYXVkaW9zID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICAgICAgICAgYXVkaW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgIGF1ZGlvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgYXVkaW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgIGF1ZGlvc1tuYW1lXSA9IGF1ZGlvO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgYXVkaW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogTG9hZCBhbiB2aWRlbyBmaWxlc1xuICpcbiAqIC52aWRlb3MgKCB7XG4gKiAgICAgIHZpZGVvMTogJy9wYXRoL3RvL3ZpZGVvMScsXG4gKiAgICAgIHZpZGVvMjogJy9wYXRoL3RvL3ZpZGVvMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIudmlkZW9zXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci52aWRlb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCB2aWRlb3MgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzcmNzKSB7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICB2aWRlby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgdmlkZW8ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB2aWRlby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmlkZW9zW25hbWVdID0gdmlkZW87XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCB2aWRlb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCIvKipcblxuYSAobTExKSBIb3Jpem9udGFsIHNjYWxpbmcuXG5iIChtMTIpIEhvcml6b250YWwgc2tld2luZy5cbmMgKG0yMSkgVmVydGljYWwgc2tld2luZy5cbmQgKG0yMikgVmVydGljYWwgc2NhbGluZy5cbmUgKGR4KSBIb3Jpem9udGFsIG1vdmluZy5cbmYgKGR5KSBWZXJ0aWNhbCBtb3ZpbmcuXG4qL1xuY29uc3QgTWF0cml4ID0gZnVuY3Rpb24gKG0xMSwgbTEyLCBtMjEsIG0yMiwgZ3gsIGd5KSB7XG4gICAgcmV0dXJuIHttMTEsIG0xMiwgbTIxLCBtMjIsIGd4LCBneX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXg7XG4iLCJpbXBvcnQgQ2xpcCBmcm9tIFwiLi9DbGlwXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuXG4vKlxucmV0dXJuIE1vdmVDbGlwKHtcbiAgICBlbGVtZW50OiBgPGRpdiBjbGFzcz1cInNwcml0ZSByZWN0XCI+PC9kaXY+YCxcbiAgICBwYXJlbnQ6IEFwcENsaXAsXG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gW1xuICAgICAgICAgICAgJ3JvdGF0ZSgnICsgNDUgKydkZWcpJyxcbiAgICAgICAgICAgICdzY2FsZSgwLjUsIDAuNSknLFxuICAgICAgICBdO1xuICAgIH0sXG59KVxuKi9cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcbiAgICBjb25zdCBjbGlwID0gQ2xpcChlbGVtZW50KTtcblxuICAgIGlmKCFjbGlwLmVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBbZWxlbWVudF0gbm90IGZvbmQhJyk7XG4gICAgfVxuXG4gICAgY2xpcC5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1taXZlY2xpcCcsIGNvbmZpZy5pZCB8fCAnbWl2ZWNsaXAnKTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIC8vIGNsaXA6IGNsaXAsXG4gICAgICAgIGVsZW1lbnQ6IGNsaXAuZWxlbWVudCxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUud2lkdGggPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLndpZHRoID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgeCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC55XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLndpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC5oZWlnaHRcbiAgICAgICAgfSxcblxuICAgICAgICBzdHlsZShvYmplY3QpIHtcbiAgICAgICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVsZXRlIGNvbmZpZy5lbGVtZW50O1xuICAgIGRlbGV0ZSBjb25maWcuaW5pdGlhbGl6ZWQ7XG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByb290W2tleV0gPSBjb25maWdba2V5XVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiByb290LmluaXQgPT09ICdmdW5jdGlvbicgJiYgIXJvb3QuaW5pdGlhbGl6ZWQpe1xuICAgICAgICByb290LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgcm9vdC5pbml0LmNhbGwocm9vdCk7XG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uIChhcHBlbmQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjbG9uZVByb3BlcnR5ID0gdG9PYmplY3Qocm9vdCk7XG4gICAgICAgIGNsb25lUHJvcGVydHkuZWxlbWVudCA9IHJvb3QuZWxlbWVudC5jbG9uZU5vZGUocm9vdCk7XG4gICAgICAgIGlmIChhcHBlbmQpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNsb25lUHJvcGVydHkuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1vdmVDbGlwKGNsb25lUHJvcGVydHkpO1xuICAgIH07XG5cbiAgICByb290LmluamVjdCA9IGZ1bmN0aW9uIChlbGVtLCBhcHBlbmQgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBxdWVyeShlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ2xpcDtcbiIsIlxuY29uc3QgUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiB7eCwgeX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsIlxuY29uc3QgUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4ge3gsIHksIHdpZHRoLCBoZWlnaHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuIiwiLypcbmNvbnN0IFJ4U3RhdGUgPSBSb3h5KHtcbiAgICB0aXRsZTogJycsXG4gICAgYm9keTogJycsXG59KTtcblxuUnhTdGF0ZS5ldmVudCgoa2V5LCB2YWx1ZXMpPT57XG4gICAgaWYgKGtleSA9PT0gJycpIHt9XG4gICAgaW5qZWN0KCcjJyArIGtleSwgdmFsdWVzKTtcbn0pO1xuXG5SeFN0YXRlLnByb3h5LnRpdGxlID0gJ0ZpcnN0IHZhbHVlJztcblJ4U3RhdGUucHJveHkuYm9keSA9ICdUZXN0IGJvZHkgdGV4dCc7XG5cblRpbWVyLnRpbWVvdXQoKCkgPT4ge1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ3RpdGxlJywgJ0hlbGxvIGZyaWVuZCcpO1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ2JvZHknLCAnRG8geW91IGhhcHB5IG5vdz8nKTtcbn0sIDIwMDApO1xuXG4qL1xuXG4vKipcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBzZXQoKj0sICo9KTogKiwgZ2V0KCopOiAqLCBhY3Rpb24oKj0sICo9KTogKiwgZmlsbCgqPSwgKj0pOiAqfXxSb3h5fHt9fG51bGx8Ym9vbGVhbn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyA9IHtcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSAmJiB0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdLmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdC5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb2xkZXIgbmFtZTogc2VlfHNldD9cbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZFxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF5bG9hZC5jYWxsKHt9LCBwcm94eVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcmVzdWx0O1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdGlvbigpXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnQoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgY2hhbmdlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmUoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9IGtleTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1trZXldID0gdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbChwYXlsb2FkLCB0bykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlbdG9dKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm94eTtcbiIsImltcG9ydCBSb3h5IGZyb20gXCIuL1JveHlcIjtcblxuLyoqXG4gKiBjb25zdCByeCA9IFJveHlMaXN0ZW5lciAoe1xuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqIH0pXG4gKiByeC5zZXQoKTtcbiAqIHJ4LmRpc3BhdGNoKCk7XG4gKlxuICogcnguYWN0aW9uKCk7XG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIGRpc3BhdGNoKCo9LCAqPSk6IFJveHksIGdldCgqKTogKiwgZXZlbnQoKj0sICo9KTogdGhpcywgZmlsbCgqPSwgKj0pOiB0aGlzfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBSb3h5TGlzdGVuZXIgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICAgICAgX19hY3Rpb25fXygpIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3Rpb25zTmFtZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0gPSBwYXlsb2FkW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicgJiYgZXZlbnROYW1lICE9PSBhY3Rpb25zLl9fYWN0aW9uX18ubmFtZSkge1xuICAgICAgICAgICAgYWN0aW9uc05hbWVzW2V2ZW50TmFtZV0gPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnggPSBSb3h5KGFjdGlvbnNOYW1lcyk7XG4gICAgLy9cbiAgICByeC5hY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uc05hbWVzXG4gICAgfTtcblxuICAgIHJ4LmV2ZW50KChldmVudEN1cnNvciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuX19hY3Rpb25fXy5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRDdXJzb3IgPT09IGV2ZW50TmFtZSAmJiB0eXBlb2YgYWN0aW9uc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcng7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3h5TGlzdGVuZXI7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG5cbi8qXG5jb25zdCBzY2VuZSA9IFNjZW5lKCk7XG5zY2VuZS5hZGQoJ2VkaXRvcicsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUuYWRkKCdvdXRwdXQnLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLnJ1bignb3V0cHV0JywgWydoZWxsbycsIDIwMCwge31dKTtcbiovXG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllc1xuICogQHJldHVybnMge3tjdXJyZW50OiBzdHJpbmcsIHNjZW5lczoge2RlZmF1bHQ6IHtjYWxsYmFjaygpOiB2b2lkLCBhdHRyczogW119fSwgZWxlbWVudDogbnVsbH19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGN1cnJlbnQ6ICdkZWZhdWx0JyxcbiAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgc2NlbmVzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKSB7Y29uc29sZS5sb2coJ1tEZWZhdWx0IFNjZW5lXScpfSxcbiAgICAgICAgICAgICAgICBhdHRyczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBhdHRycyA9IFtdKSB7XG4gICAgICAgIHJvb3Quc2NlbmVzW25hbWVdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICBhdHRyc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJvb3QuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW25hbWVdO1xuICAgIH1cblxuICAgIHJvb3QuZ2V0Q3VycmVudFNjZW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zY2VuZXNbcm9vdC5jdXJyZW50XTtcbiAgICB9XG5cbiAgICByb290Lm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb290LnNjZW5lcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHJvb3QuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LnJ1bihsZXN0KTtcbiAgICB9O1xuXG4gICAgcm9vdC5ydW4gPSBmdW5jdGlvbiAoa2V5LCBhdHRycykge1xuICAgICAgICByb290LmN1cnJlbnQgPSBrZXkgfHwgJ2RlZmF1bHQnO1xuICAgICAgICBjb25zdCBzY2VuZSA9IHJvb3QuZ2V0Q3VycmVudFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc2NlbmUuY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBhdHRycyA9IEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXR0cnMgPyBhdHRycyA6IHNjZW5lLmF0dHJzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnNob3cgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290LnJ1bihrZXksIGF0dHJzKSB9O1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290LnJ1bihrZXksIGF0dHJzKSB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLnNjZW5lcyAmJiBwcm9wZXJ0aWVzLnNjZW5lcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMuc2NlbmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QuYWRkKGtleSwgcHJvcGVydGllcy5zY2VuZXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge2FueX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGVwc1NjZW5lID0gZnVuY3Rpb24gKGNvbmZpZyA9IHtzdGVwczogW119KSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgICBsb29wOiBjb25maWcubG9vcCB8fCBmYWxzZSxcbiAgICAgICAgc3RlcF9pdGVyYXRpb246IDAsXG4gICAgICAgIHN0ZXBfc3RvcDogZmFsc2UsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tfZWFjaDogbnVsbCxcbiAgICAgICAgc3RlcF9jYWxsYmFja3M6IGNvbmZpZy5zdGVwcyB8fCB7fSxcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICByb290LnBsYXkoKTtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBkZWxheShtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjay5jYWxsKHJvb3QpOyB9LCBtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdG8obmFtZSkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrcy5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlYWNoU3RlcHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfc3RvcCkgcmV0dXJuIHJvb3Q7XG5cbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfaXRlcmF0aW9uID4gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290Lmxvb3ApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tPYmplY3QgPSByb290LnN0ZXBfY2FsbGJhY2tzW3Jvb3Quc3RlcF9pdGVyYXRpb25dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFja09iamVjdC5jYWxsYmFjay5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICByb290Lml0ZXJhdGlvbisrXG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uKytcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzU2NlbmU7XG4iLCJcbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbn07XG5cblxuVGltZXIuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJpbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gXCIuLi9zdGF0aWMvaXNOdW1iZXJcIjtcbi8qXG5cbnRoaXMudHJhbnNmb3JtID0gVHJhbnNmb3JtKHRoaXMuZWxlbWVudCk7XG50aGlzLnRyYW5zZm9ybS5tZXRob2QoJ3JvdGF0ZScsIFsnNDVkZWcnXSk7XG50aGlzLnRyYW5zZm9ybS51cGRhdGUoKTtcbnRoaXMudHJhbnNmb3JtLnJlc2VhcmNoKCk7XG5cbi8vIC4uLlxuVHJhbnNmb3JtLmVsZW1lbnQodGhpcy5lbGVtZW50LCBbXG4gICAgJ3JvdGF0ZSgnICsgMTAgKydkZWcpJyxcbiAgICAnc2NhbGUoMC42LCAwLjYpJyxcbiAgICAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJyxcbl0pO1xuVHJhbnNmb3JtLmVsZW1lbnQodGhpcy5lbGVtZW50LCBbJ3JvdGF0ZSgnICsgMTAgKydkZWcpJ10pXG5jb25zdCB0cnMgPSBUcmFuc2Zvcm0odGhpcy5lbGVtZW50KTtcblxuLy8gd2l0aG91dCBvZiB0aGUgVHJhbnNmb3JtXG50aGlzLnN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIDEwICsnZGVnKSBzY2FsZSgwLjYsIDAuNikgbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xufSk7XG5cbiovXG5jb25zdCBUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoZWxlbWVudCwgcGFyYW1zKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHRyYW5zZm9ybV9vYmo6IHt9LFxuICAgICAgICB0cmFuc2Zvcm1fYXJyOiBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApLFxuICAgICAgICB0cmFuc2Zvcm1fc3RyaW5nOiAnJyxcblxuICAgICAgICB1cGRhdGUoKXtcbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX3N0cmluZyA9ICcnO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb290LnRyYW5zZm9ybV9vYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX3N0cmluZyArPSBrZXkgKyAnKCcgKyByb290LnRyYW5zZm9ybV9vYmpba2V5XS5qb2luKCcsICcpICsgJykgJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gIHJvb3QudHJhbnNmb3JtX3N0cmluZztcbiAgICAgICAgICAgIHJvb3QucmVzZWFyY2goKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2QobWV0aG9kLCBwcm9wZXJ0aWVzLCBtdWx0aXBseSA9IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiBbcHJvcGVydGllc107XG5cbiAgICAgICAgICAgICAgICBpZiAobXVsdGlwbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHQgPSB2YWx1ZS5tYXRjaCgvW2Etel0rL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludCh2YWx1ZSkgKyBwYXJzZUludChyb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaV0gPSBudW0gKyBleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IHZhbHVlICsgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF1baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHMgcGFyYW1ldGVycyBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXNlYXJjaCgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyID0gZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKTtcblxuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0udHJpbSgpICArICcpJztcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkID0gcGFyYW0ubWF0Y2goL1tcXHdcXC5cXC1dKy9pZyk7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21hdGNoZWRbMF1dID0gbWF0Y2hlZC5zbGljZSgxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldE1ldGhvZFBhcmFtZXRlcihuYW1lLCBzdHJpY3RUeXBlID0gZmFsc2Upe1xuICAgICAgICAgICAgaWYgKHN0cmljdFR5cGUgJiYgQXJyYXkuaXNBcnJheShyb290LnRyYW5zZm9ybV9vYmpbbmFtZV0pICYmIHJvb3QudHJhbnNmb3JtX29ialtuYW1lXS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNOdW1iZXIocm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdWzBdWzBdKVxuICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KHJvb3QudHJhbnNmb3JtX29ialtuYW1lXVswXSlcbiAgICAgICAgICAgICAgICAgICAgOiByb290LnRyYW5zZm9ybV9vYmpbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LnJlc2VhcmNoKCk7XG5cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByb290Lm1ldGhvZChrZXksIHBhcmFtc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvb3QudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cblRyYW5zZm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlcyl7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVzKSkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IFtdO1xuICAgICAgICB2YWx1ZXMuZm9yRWFjaCgocHJvcCkgPT4geyBwcm9wcy5wdXNoKHByb3ApIH0pO1xuICAgICAgICBzdHlsaXplcihlbGVtZW50LCB7dHJhbnNmb3JtOiBwcm9wcy5qb2luKCcgJyl9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL3N0YXRpYy9nZXRXaW5kb3dcIjtcblxuaW1wb3J0IENsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9DbGlwLmpzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IE1vdmVDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvTW92ZUNsaXAuanNcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1NjZW5lLmpzXCI7XG5pbXBvcnQgU3RlcHNTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1N0ZXBzU2NlbmUuanNcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi9jb21wb25lbnRzL1RpbWVyLmpzXCI7XG5pbXBvcnQgUm94eUxpc3RlbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvUm94eUxpc3RlbmVyLmpzXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9jb21wb25lbnRzL1JveHkuanNcIjtcbmltcG9ydCBTdGF0aWMgZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IEFuaW1hdGlvbkZyYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBNYXRyaXggZnJvbSBcIi4vY29tcG9uZW50cy9NYXRyaXhcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9jb21wb25lbnRzL1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XG5cbmNvbnN0IEFuaW1hdGUgPSB7XG4gICAgQ2xpcCxcbiAgICBDb21wb25lbnQsXG4gICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgTW92ZUNsaXAsXG4gICAgU2NlbmUsXG4gICAgU3RlcHNTY2VuZSxcbiAgICBUaW1lcixcbiAgICBSb3h5TGlzdGVuZXIsXG4gICAgUm94eSxcbiAgICBBbmltYXRpb25GcmFtZSxcbiAgICBMb2FkZXIsXG4gICAgTWF0cml4LFxuICAgIFBvaW50LFxuICAgIFJlY3RhbmdsZSxcbiAgICBUcmFuc2Zvcm0sXG59O1xuXG5jb25zdCBSQURJQU4gPSAwLjAxNzQ1MzI5MjUxOTk0MzI5NTtcbmNvbnN0IERFR1JFRV9BU19SQURJQU4gPSAwLjAxNzQ1MzI5MjUxOTk0MzI5NTtcbmNvbnN0IERFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFX0FTX1JBRElBTiAqIDM2MDtcbmNvbnN0IFBJID0gMy4xNDE1OTI2NTM1OTtcbmNvbnN0IFJBRF9UT19ERUdSRUVTID0gMy4xNDE1OTI2NTM1OTtcblxuQW5pbWF0ZS5SQURJQU4gPSBSQURJQU47XG5BbmltYXRlLkRFR1JFRV9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOO1xuQW5pbWF0ZS5ERUdSRUVfMzYwX0FTX1JBRElBTiA9IERFR1JFRV8zNjBfQVNfUkFESUFOO1xuQW5pbWF0ZS5QSSA9IFBJO1xuQW5pbWF0ZS5SQURfVE9fREVHUkVFUyA9IFJBRF9UT19ERUdSRUVTO1xuXG5BbmltYXRlLlN0YXRpYyA9XG4gICAgQW5pbWF0ZS5VdGlsID1cbiAgICAgICAgU3RhdGljO1xuXG4vLyBpZiAoZ2V0V2luZG93KCkpIGdldFdpbmRvdygpLkFuaW1hdGUgPSBBbmltYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlO1xuIiwiXG5leHBvcnQgY29uc3QgTEVUVEVSX0NPTlNPTkFOVCA9ICdCLEMsRCxGLEcsSCxKLEssTCxNLE4sUCxRLFIsUyxULFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTEVUVEVSX1ZPV0VMID0gJ0EsRSxJLE8sVSxZJztcbmV4cG9ydCBjb25zdCBBQkMgPSAnQSxCLEMsRCxFLEYsRyxILEksSixLLEwsTSxOLE8sUCxRLFIsUyxULFUsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBOVU1CRVJTID0gJzAsMSwyLDMsNCw1LDYsNyw4LDknO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORCA9ICcmJztcbiIsImltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgYXR0ciA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGVfZWxlbWVudCA9IHR5cGVPZihlbGVtZW50KTtcbiAgICBpZiAodHlwZV9lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50ID0gcXVlcnkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlT2YobmFtZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmFtZSlcbiAgICAgICAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyO1xuIiwiLyoqXG4gKlxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGZyb20sIHRvKVxue1xuICAgIGlmIChmcm9tID09PSBudWxsIHx8IHR5cGVvZiBmcm9tICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0ICYmIGZyb20uY29uc3RydWN0b3IgIT09IEFycmF5KSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciA9PT0gRGF0ZSB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBSZWdFeHAgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gRnVuY3Rpb24gfHxcbiAgICAgICAgZnJvbS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nIHx8IGZyb20uY29uc3RydWN0b3IgPT09IE51bWJlciB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiBuZXcgZnJvbS5jb25zdHJ1Y3Rvcihmcm9tKTtcbiAgICB9XG5cbiAgICB0byA9IHRvIHx8IG5ldyBmcm9tLmNvbnN0cnVjdG9yKCk7XG5cbiAgICBmb3IgKG5hbWUgaW4gZnJvbSlcbiAgICB7XG4gICAgICAgIHRvW25hbWVdID0gdHlwZW9mIHRvW25hbWVdID09IFwidW5kZWZpbmVkXCIgPyBjbG9uZShmcm9tW25hbWVdLCBudWxsKSA6IHRvW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmU7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChzcmMsIGluc3RhbmNlKVxue1xuICAgIGlmIChpc05vZGUoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLnNsaWNlKCk7XG5cbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHNyYy5iaW5kKGluc3RhbmNlIHx8IHt9KTtcblxuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNyYyk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNyY1trZXldO1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBjb3B5KHZhbHVlLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHNyYyA6IHt9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNyYztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHk7XG4iLCIvKlxuXG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSk7XG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSwgdHJ1ZSk7XG5jb25zdCBhcnIxID0gY3JlYXRlQXJyYXkoNSwgMSk7XG5jb25zdCBhcnIyID0gY3JlYXRlQXJyYXkoNSwgJ2hlbGxvIHdvcmxkJyk7XG5jb25zdCBhcnIzID0gY3JlYXRlQXJyYXkoNSwgWzEwMCwyMDAsMzAwXSk7XG5jb25zdCBhcnI0ID0gY3JlYXRlQXJyYXkoNSwge2E6J0EnLGI6J0InLGM6J0MnfSk7XG5cbiovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBudW1cbiAqIEBwYXJhbSBmaWxsXG4gKiBAcmV0dXJucyB7YW55W119XG4gKi9cbmNvbnN0IGNyZWF0ZUFycmF5ID0gZnVuY3Rpb24gKG51bSwgZmlsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGZpbGwgPT09ICdzdHJpbmcnICl7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkobnVtKS5maWxsKGZpbGwpO1xuICAgIH1cblxuICAgIGFyciA9IG5ldyBBcnJheShudW0pLmZpbGwoMCk7XG4gICAgYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgciA9IGZpbGwuY2FsbChmaWxsLCBpLCBpKTtcbiAgICAgICAgICAgIGFycltpXSA9IHR5cGVvZiByID09PSAnYm9vbGVhbicgfHwgciA/IHIgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsKSkgYXJyW2ldID0gZmlsbFtpXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZmlsbFtpXSA7XG4gICAgICAgIGVsc2UgYXJyW2ldID0gZmlsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFycmF5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cnMsIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgICAgaXNfYXR0ciA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlT2Yoc3JjLCAnb2JqZWN0JykgJiYgIWlzTm9kZShzcmMpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9odG1sID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9jaGlsZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGluc2VydF9odG1sKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSlcbiAgICAgICAgICAgICAgICBpbnNlcnRfY2hpbGQoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIGluc2VydChzcmNbaV0pO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzX2F0dHIoYXR0cnMpKSB7XG4gICAgICAgIGlubmVyID0gYXR0cnM7XG4gICAgICAgIGF0dHJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzKVxuICAgICAgICBmb3IgKGxldCBrIGluIGF0dHJzKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXG4gICAgaWYgKGlubmVyKVxuICAgICAgICBpbnNlcnQoaW5uZXIpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChhcHBlbmQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmIChpc05vZGUoYXBwZW5kKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXBwZW5kKTtcblxuICAgIGlmICh0eXBlT2YoYXBwZW5kLCAnc3RyaW5nJykpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0cjJub2RlKGFwcGVuZCkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJcbmNvbnN0IGRlY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgcGFpcnMgPSAocXVlcnlbMF0gPT09ICc/JyA/IHF1ZXJ5LnN1YnN0cigxKSA6IHF1ZXJ5KS5zcGxpdCgnJicpO1xuICAgIHBhaXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICByZXN1bHRbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdIHx8ICcnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmluZWRJbiA9IGZ1bmN0aW9uIChzdGFjaywgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RhY2sgJiYgc3RhY2tbdmFsdWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkSW47XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuLypjb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGxpc3QuY2hpbGROb2RlcyksIGNhbGxiYWNrLCB0bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07Ki9cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgaW5zdGFuY2UgPSB7fSkge1xuICAgIGxldCB0eXBlID0gdHlwZU9mKGxpc3QpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goKGksIHYsIGEpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGksIHYsIGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTm9kZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBlYWNoKEFycmF5LmZyb20obGlzdCksIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBlYWNoKFtsaXN0XSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoa2V5KSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBrZXksIGxpc3Rba2V5XSwgbGlzdCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChsaXN0LnNwbGl0KFwiXCIpLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICBjb25zdCBhcnIgPSAobmV3IEFycmF5KGxpc3QpKS5maWxsKDApO1xuICAgICAgICAgICAgbGlzdCA9IGVhY2goYXJyLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG59O1xuXG5lYWNoLnBhcmVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbn07XG5cbmVhY2guZmlsdGVyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGNhbGxiYWNrLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWFjaDtcbiIsIlxuY29uc3QgZW5jb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdCArPSAoKHJlc3VsdC5sZW5ndGgpID8gJyYnIDogJz8nKSArIGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5jb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGV4aXN0cyA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQgJiYgc3JjICE9PSBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhpc3RzO1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhdGlvbjtcbiIsIlxuY29uc3QgZ2V0V2luZG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpbmRvdyBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdpbmRvdztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cbi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5jb25zdCBodHRwUmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQga2V5O1xuICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGE6IGNvbmZpZy5kYXRhIHx8IHt9LFxuICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMgfHwge30sXG4gICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgdXNlRm9ybURhdGE6IGNvbmZpZy51c2VGb3JtRGF0YSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhIWNvbmZpZy51c2VGb3JtRGF0YSxcbiAgICAgICAgYXN5bmM6IGNvbmZpZy5hc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLmFzeW5jLFxuICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICBwYXNzd29yZDogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29uY2F0ZVN0cmluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJicgKyBrZXkgKyAnPScgKyAob3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pIDogcGFyYW1zW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRoaXNJbnN0YW5jZSA9ICh0eXBlT2YodGhpc0luc3RhbmNlLCAnb2JqZWN0JykpID8gdGhpc0luc3RhbmNlIDoge307XG5cbiAgICAvLyBkYXRhIHByZXBhcmVcbiAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBvcHRpb25zLmFjdGlvbi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyc7XG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gcmVzZXQgdG8gdXNlRm9ybURhdGEgaW4gdHJ1ZVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEoc2VuZERhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEuYXBwZW5kKGtleSwgb3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5kYXRhW2tleV0pIDogb3B0aW9ucy5kYXRhW2tleV0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBidWlsZCByZXF1ZXN0XG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMuYWN0aW9uLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcgJiYgIW9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpc0luc3RhbmNlLlhNTEh0dHBSZXF1ZXN0ID0geGhyO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSwgeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIuc2VuZE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHhoci5zZW5kKHNlbmREYXRhKTtcbiAgICByZXR1cm4geGhyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFJlcXVlc3Q7XG4iLCJpbXBvcnQgYXR0ciBmcm9tIFwiLi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4uL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi4vc3RhdGljL2dldERvY3VtZW50XCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL3N0cjJmcmFnbWVudFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGVuY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZW5jb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBkZWNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2RlY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtcbiAgICBleHRlbmRSZWN1cnNpdmVcbn0gIGZyb20gXCIuLi9zdGF0aWMvZXh0ZW5kXCI7XG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vc3RhdGljL2lzRW1wdHlcIjtcbmltcG9ydCBmaW5kT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdFwiO1xuaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdHNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcIi4uL3N0YXRpYy9mb3JtYXRcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IGxvYWRKUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1wiO1xuaW1wb3J0IGxvYWRKU1N5bmMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNTeW5jXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IG51bWJlcjJzdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9udW1iZXIyc3RyaW5nXCI7XG5pbXBvcnQgb24gZnJvbSBcIi4uL3N0YXRpYy9vblwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBwb3NpdGlvbk1vdXNlIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25Nb3VzZVwiO1xuaW1wb3J0IHJhbmRvbSwge1xuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZ1xufSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4uL3N0YXRpYy91cmlcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgY3JlYXRlQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVBcnJheVwiO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNTdHJpbmdcIjtcbmltcG9ydCBleGlzdHMgZnJvbSBcIi4uL3N0YXRpYy9leGlzdHNcIjtcbmltcG9ydCBpc0RlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9pc0RlZmluZWRcIjtcbmltcG9ydCBsb2FkQmxvYmZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQmxvYmZpbGVcIjtcbmltcG9ydCBsb2FkSlNPTiBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU09OXCI7XG5pbXBvcnQgbG9hZFRleHRmaWxlIGZyb20gXCIuLi9zdGF0aWMvbG9hZFRleHRmaWxlXCI7XG5pbXBvcnQgdG9IVE1MIGZyb20gXCIuLi9zdGF0aWMvdG9IVE1MXCI7XG5pbXBvcnQgdG9YTUwgZnJvbSBcIi4uL3N0YXRpYy90b1hNTFwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCB1bmlxQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy91bmlxQXJyYXlcIjtcbmltcG9ydCBpc051bWJlciBmcm9tIFwiLi4vc3RhdGljL2lzTnVtYmVyXCI7XG5cbmNvbnN0IFN0YXRpYyA9IHtcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBnZXREb2N1bWVudCxcbiAgICBnZXRXaW5kb3csXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIHN0cjJmcmFnbWVudCxcbiAgICBub2RlMnN0cixcbiAgICBxdWVyeSxcbiAgICBxdWVyeUFsbCxcbiAgICBzZWFyY2gsXG4gICAgZW5jb2RlR2V0UXVlcnksXG4gICAgZGVjb2RlR2V0UXVlcnksXG4gICAgaHR0cFJlcXVlc3QsXG4gICAgZGVmaW5lZCxcbiAgICBkZWZpbmVkSW4sXG4gICAgZXh0ZW5kLFxuICAgIGV4dGVuZFJlY3Vyc2l2ZSxcbiAgICBlYWNoLFxuICAgIGZpbmRPYmplY3QsXG4gICAgZmluZE9iamVjdHMsXG4gICAgZm9ybWF0LFxuICAgIGlzRW1wdHksXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIGxvYWRKU1N5bmMsXG4gICAgbWVyZ2UsXG4gICAgbnVtYmVyMnN0cmluZyxcbiAgICBvbixcbiAgICBwb3NpdGlvbixcbiAgICBwb3NpdGlvbk1vdXNlLFxuICAgIHJhbmRvbSxcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmcsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG4gICAgY29weSxcbiAgICBjbG9uZSxcbiAgICB0b09iamVjdCxcbiAgICBpc0hUTUxTdHJpbmcsXG4gICAgY3JlYXRlQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgZXhpc3RzLFxuICAgIGlzRGVmaW5lZCxcbiAgICBsb2FkQmxvYmZpbGUsXG4gICAgbG9hZEpTT04sXG4gICAgbG9hZFRleHRmaWxlLFxuICAgIHRvSFRNTCxcbiAgICB0b1hNTCxcbiAgICBzdHlsaXplcixcbiAgICB1bmlxQXJyYXksXG4gICAgaXNOdW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWM7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGluamVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGF0YSwgYXBwZW5kLCB0bylcbntcbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnYXJyYXknKSkge1xuICAgICAgICBzZWxlY3Rvci5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpbmplY3QoZWxlbSwgZGF0YSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNEZWZpbmVkO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIi8vIGltcG9ydCBET01QYXJzZXIgZnJvbSAnRE9NUGFyc2VyJztcblxuY29uc3QgaXNIVE1MU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCB0cnVlc3QgPSBmYWxzZSkge1xuXG4gICAgaWYgKHRydWVzdCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gISFkaXYuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnRyaW0oKS5zdWJzdHJpbmcoMCwgMSkgPT09ICc8Jztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzSFRNTFN0cmluZztcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiXG5jb25zdCBpc051bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIE51bWJlcilcbiAgICAgICAgJiYgIWlzTmFOKHZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc051bWJlcjtcbiIsIlxuY29uc3QgaXNTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzU3RyaW5nO1xuIiwiXG5jb25zdCBsb2FkQmxvYmZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSlcbiAgICAgICAgLnRoZW4oYmxvYiA9PiBvbmxvYWQoYmxvYikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQmxvYmZpbGU7IiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBsb2FkQ1NTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZENTUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgY29uc3QgaWQgPSBcInNyYy1cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IChzcmMuc3Vic3RyKC00KSA9PT0gJy5jc3MnKSA/IHNyYyA6IHNyYyArICcuY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaWQgPSBpZDtcbiAgICAgICAgbGluay5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIGxpbmsub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jLmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgIHJldHVybiBsaW5rXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZENTUztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgZG9jdW1lbnRFbGVtZW50ID0gZ2V0RG9jdW1lbnQoKTtcbmNvbnN0IGxvYWRKUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRKUyhzcmNbaV0sIG9ubG9hZCwgb25lcnJvcik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudEVsZW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIGNvbnN0IGlkID0gJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBzY3JpcHQuc3JjID0gKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJztcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5pZCA9IGlkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gb25sb2FkO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG5cbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgcmV0dXJuIHNjcmlwdFxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKUzsiLCJcbmNvbnN0IGxvYWRKU09OID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gb25sb2FkKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTT047IiwiXG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5sb2FkSlNTeW5jICgge1xuICogICAgICBteXNjcmlwdDE6ICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICBteXNjcmlwdDI6ICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAubG9hZEpTU3luYyAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIE5hbWVzcGFjZUFwcGxpY2F0aW9uLmxvYWRKU1N5bmNcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5jb25zdCBsb2FkSlNTeW5jID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgaWYgKHR5cGVPZihzcmNzLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgIGlmICh0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5mb3JFYWNoKCAoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIG9ialsncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gY3JlYXRlRWxlbWVudCgnc2NyaXB0Jywge1xuICAgICAgICAgICAgICAgIHNyYzogKHNyYy5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmMgOiBzcmMgKyAnLmpzJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSlcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNTeW5jO1xuIiwiXG5jb25zdCBsb2FkVGV4dGZpbGUgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgLnRoZW4odGV4dCA9PiBvbmxvYWQodGV4dCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkVGV4dGZpbGU7IiwiXG5jb25zdCBtZXJnZSA9IChvYmplY3QxLCBvYmplY3QyKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIG9iamVjdDIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICggb2JqZWN0MltrZXldLmNvbnN0cnVjdG9yID09PSBPYmplY3QgKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gbWVyZ2Uob2JqZWN0MVtrZXldLCBvYmplY3QyW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtZXJnZTtcbiIsIlxuXG5jb25zdCBub2RlMnN0ciA9ICBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICByZXR1cm4gY29udGFpbmVyLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGUyc3RyO1xuIiwiXG5leHBvcnQgY29uc3QgbnVtYmVyMnN0cmluZyA9IGZ1bmN0aW9uICh4KSB7XG4gICAgbGV0IGU7XG4gICAgaWYgKE1hdGguYWJzKHgpIDwgMS4wKSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJ2UtJylbMV0pO1xuICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgeCAqPSBNYXRoLnBvdygxMCxlLTEpO1xuICAgICAgICAgICAgeCA9ICcwLicgKyAobmV3IEFycmF5KGUpKS5qb2luKCcwJykgKyB4LnRvU3RyaW5nKCkuc3Vic3RyaW5nKDIpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnKycpWzFdKTtcbiAgICAgICAgaWYgKGUgPiAyMCkge1xuICAgICAgICAgICAgZSAtPSAyMDtcbiAgICAgICAgICAgIHggLz0gTWF0aC5wb3coMTAsZSk7XG4gICAgICAgICAgICB4ICs9IChuZXcgQXJyYXkoZSsxKSkuam9pbignMCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbnVtYmVyMnN0cmluZztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3Qgb24gPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIGJ1YmJsZSkge1xuICAgIGxldCBpLCBlbGVtZW50cyA9IFtdO1xuXG4gICAgc3dpdGNoICh0eXBlT2Yoc2VsZWN0b3IpKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldICYmIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIpXG4gICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssICEhYnViYmxlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBvbjtcbiIsIi8vIGltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cblxuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5jb25zdCBwb3NpdGlvbiA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgY29uc3QgZGF0YSA9IHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfTtcbiAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVsZW0gPT09IHdpbmRvdyB8fCBlbGVtID09PSBkb2N1bWVudCkge1xuICAgICAgICBkYXRhLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGRhdGEuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICBkYXRhLmVsZW1lbnQgPSB3aW5kb3c7XG4gICAgfVxuICAgIGVsc2VcbiAgICBpZiAoZWxlbSAmJiBlbGVtLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICBpZiAoZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgbGV0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgICAgIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIGNsaWVudFRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRUb3AgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRUb3AgfHwgMCxcbiAgICAgICAgICAgICAgICBjbGllbnRMZWZ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudExlZnQgfHwgZG9jdW1lbnQuYm9keS5jbGllbnRMZWZ0IHx8IDA7XG5cbiAgICAgICAgICAgIGRhdGEueSA9IE1hdGgucm91bmQocmVjdC50b3AgKyBzY3JvbGxUb3AgLSBjbGllbnRUb3ApO1xuICAgICAgICAgICAgZGF0YS54ID0gTWF0aC5yb3VuZChyZWN0LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdCk7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGRhdGEudG9wID0gcmVjdC50b3AgKyBwYWdlWU9mZnNldDtcbiAgICAgICAgICAgIGRhdGEubGVmdCA9IHJlY3QubGVmdCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5yaWdodCA9IHJlY3QucmlnaHQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEuYm90dG9tID0gcmVjdC5ib3R0b20gKyBwYWdlWE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0b3AgPSAwLCBsZWZ0ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdG9wICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0VG9wLCAxMCk7XG4gICAgICAgICAgICAgICAgbGVmdCArPSBwYXJzZUludChlbGVtLm9mZnNldExlZnQsIDEwKTtcbiAgICAgICAgICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYXRhLnkgPSB0b3A7XG4gICAgICAgICAgICBkYXRhLnggPSBsZWZ0O1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IGVsZW07XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb247XG4iLCJcblxuY29uc3QgcG9zaXRpb25Nb3VzZSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6IGFyZ3VtZW50IGlzIG5vdCB0eXBlIHRoZSBNb3VzZUV2ZW50IScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSByZWN0LmxlZnQsXG4gICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbk1vdXNlO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqIEByZXR1cm5zIHtOb2RlfGJvb2xlYW59XG4gKi9cbmNvbnN0IHF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSk7XG4gICAgcmV0dXJuIGVsZW1lbnRzICYmIGVsZW1lbnRzWzBdID8gZWxlbWVudHNbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tICcuL2dldERvY3VtZW50JztcblxuY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcblxuY29uc3QgcXVlcnlBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmcm9tID0gZnJvbSB8fCBkb2M7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG5cbiAgICBpZiAodHlwZU9mKGZyb20sICdzdHJpbmcnKSlcbiAgICAgICAgZnJvbSA9IGRvYy5xdWVyeVNlbGVjdG9yKGZyb20pO1xuICAgIGlmIChmcm9tKVxuICAgICAgICBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoZnJvbS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICBpZiAoY2FsbGJhY2spXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSB8fCB7fSwgZWxlbWVudCl9KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXJ5QWxsO1xuIiwiLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBudW1iZXJcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqIEByZXR1cm5zIHtudW1iZXJ9XG4gKi9cbmltcG9ydCB7QUJDLCBMRVRURVJfQ09OU09OQU5ULCBMRVRURVJfVk9XRUwsIE5VTUJFUlN9IGZyb20gXCIuL2FiY1wiO1xuXG5cbmV4cG9ydCBjb25zdCByYW5kb20gPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICBtYXggPSBtYXggfHwgMTAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIHJhbmRvbSBoZXggY29sb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21Db2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBsZXR0ZXJzID0gJzAxMjM0NTY3ODlBQkNERUYnLnNwbGl0KCcnKTtcbiAgICBsZXQgaSwgY29sb3IgPSAnIyc7XG4gICAgZm9yIChpID0gMDsgaSA8IDY7IGkrKylcbiAgICAgICAgY29sb3IgKz0gbGV0dGVyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNildO1xuICAgIHJldHVybiBjb2xvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21OdW1iZXIgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBpZiAoc2l6ZSA+IDE2KSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5jZWlsKHNpemUvMTYpO1xuICAgICAgICBsZXQgcmVzID0gJyc7XG4gICAgICAgIGZvciAoaTsgaSA+IDA7IGktLSlcbiAgICAgICAgICAgIHJlcyArPSBBcnJheSgxNikuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gcmVzLnNsaWNlKDAsIHNpemUpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2VJbnQoQXJyYXkoc2l6ZSkuZmlsbCgwKS5tYXAoaSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkpLmpvaW4oJycpKTtcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21TdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYsIHdpdGhOdW1iZXJzID0gZmFsc2UpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWJzID0gd2l0aE51bWJlcnNcbiAgICAgICAgPyBBQkMgKyBOVU1CRVJTLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKVxuICAgICAgICA6IEFCQy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgZm9yIChpID0gc2l6ZTsgaSA+IDA7IGktLSkge1xuICAgICAgICBzdHJpbmcgKz0gYWJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFicy5sZW5ndGgpXTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCByYW5kb21IdW1hbml6ZVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBjb25zb25hbnQgPSAgTEVUVEVSX0NPTlNPTkFOVC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWwgPSAgTEVUVEVSX1ZPV0VMLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbEZpcnN0ID0gKE1hdGgucmFuZG9tKCkgKiAxMCkgPiA1O1xuICAgIGZvciAoaSA9IHNpemUgLyAyICsgMTsgaSA+IDA7IGkgLS0pIHtcbiAgICAgICAgbGV0IHMxID0gY29uc29uYW50W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbnNvbmFudC5sZW5ndGgpXTtcbiAgICAgICAgbGV0IHMyID0gdm93ZWxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdm93ZWwubGVuZ3RoKV07XG4gICAgICAgIHN0cmluZyArPSB2b3dlbEZpcnN0ID8gczEgKyBzMiA6IHMyICsgczE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcoMCwgc2l6ZSk7XG59O1xuXG4vKipcbiAqIFJldHVybiByYW5kb20gaXRlbSBmcm9tIGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUl0ZW0gPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKSA/IGFycltyYW5kb20oMCwgYXJyLmxlbmd0aC0xKV0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJhbmRvbTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgcmVkaXJlY3QgPSBmdW5jdGlvbiAodG8pIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgbG9jLmhyZWYgPSB0byB8fCBkb2MuaHJlZjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZGlyZWN0O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cbi8qKlxuICogc2VhcmNoKCAndWwgPiBsaScsICAnZGF0YS1saW5rJywgTm9kZUVsZW1lbnQpO1xuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGF0dHJcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcmV0dXJucyB7e319XG4gKi9cbmNvbnN0IHNlYXJjaCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgYXR0ciwgZnJvbSkge1xuICAgIGZyb20gPSBpc05vZGUoZnJvbSkgPyBmcm9tIDogcXVlcnkoZnJvbSk7XG4gICAgbGV0IGkgPSAwLFxuICAgICAgICBrZXksXG4gICAgICAgIGVsZW1lbnRzID0ge30sXG4gICAgICAgIHF1ZXJ5RWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3RvciwgZnJvbSB8fCBkb2N1bWVudC5ib2R5KTtcblxuICAgIGlmIChxdWVyeUVsZW1lbnRzKSB7XG4gICAgICAgIHdoaWxlIChpIDwgcXVlcnlFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghYXR0cilcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocXVlcnlFbGVtZW50c1tpXS5oYXNBdHRyaWJ1dGUoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gcXVlcnlFbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzW2tleV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJcbmNvbnN0IHN0cjJmcmFnbWVudCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBpZiAoZG9jdW1lbnQuY3JlYXRlUmFuZ2UpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudChzdHJpbmcpO1xuICAgIGVsc2Uge1xuICAgICAgICBsZXQgaSxcbiAgICAgICAgICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gc3RyaW5nO1xuICAgICAgICB3aGlsZSAoaSA9IGNvbnRhaW5lci5maXJzdENoaWxkKVxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJmcmFnbWVudDtcbiIsImltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4vc3RyMmZyYWdtZW50XCI7XG5cbmNvbnN0IHN0cjJub2RlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGxldCByZXN1bHQ7XG4gICAgbGV0IGZyYWdtZW50ID0gc3RyMmZyYWdtZW50KHN0cmluZyk7XG5cbiAgICBzd2l0Y2ggKGZyYWdtZW50LmNoaWxkRWxlbWVudENvdW50KSB7XG4gICAgICAgIGNhc2UgMDogYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJlc3VsdCA9IGZyYWdtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICAgICAgcmVzdWx0ID0gY29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMm5vZGU7XG4iLCJcbmNvbnN0IHN0eWxpemVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHN0eWxlcykge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LnN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxpemVyO1xuIiwiLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5jb25zdCB0b0hUTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L2h0bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvSFRNTDtcbiIsIlxuY29uc3QgdG9PYmplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWx1ZSkpXG4gICAgICAgIDoge307XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvT2JqZWN0O1xuIiwiXG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmNvbnN0IHRvWE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC94bWwnO1xuICAgICAgICBjb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIGNvbnN0IHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcodmFsdWUsIHR5cGUpO1xuXG4gICAgICAgIGlmICh4bWxEb2MuZG9jdW1lbnRFbGVtZW50ICYmIHhtbERvYy5kb2N1bWVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICByZXR1cm4geG1sRG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9YTUw7XG4iLCJpbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgdHlwZU9mID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3Qgc2ltcGxlVHlwZXMgPSBbJ251bGwnLCAnYm9vbGVhbicsICd1bmRlZmluZWQnLCAnZnVuY3Rpb24nLCAnc3RyaW5nJywgJ251bWJlcicsICdkYXRlJywgJ2FycmF5JywgJ29iamVjdCddO1xuICAgIGxldCB0ID0gdHlwZU9mU3RyaWN0KHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChzaW1wbGVUeXBlcy5pbmRleE9mKHQpID09PSAtMSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICB0ID0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZS50b0xvd2VyQ2FzZSgpID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZjtcbiIsIlxuY29uc3QgdHlwZU9mU3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCB0eXBlKSB7XG4gICAgY29uc3QgdCA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlID09PSB0IDogdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVPZlN0cmljdDtcbiIsIlxuY29uc3QgdW5pcUFycmF5ID0gZnVuY3Rpb24gKHZhbHVlLCBpbmRleCwgc2VsZikge1xuICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXFBcnJheTtcbiIsImltcG9ydCBnZXRMb2NhdGlvbiBmcm9tIFwiLi9nZXRMb2NhdGlvblwiO1xuXG5cbmNvbnN0IHVyaSA9IGZ1bmN0aW9uICh1cmkpIHtcbiAgICBjb25zdCBsb2MgPSBnZXRMb2NhdGlvbigpO1xuICAgIHVyaSA9IHVyaSB8fCBsb2MucGF0aG5hbWU7XG4gICAgdXJpID0gdXJpLnJlcGxhY2UoL1xcLysvaWcsICcvJyk7XG4gICAgcmV0dXJuIHVyaS5sZW5ndGggPiAxICYmIHVyaS5zbGljZSgwLCAxKSAhPT0gJy8nID8gJy8nICsgdXJpIDogdXJpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==