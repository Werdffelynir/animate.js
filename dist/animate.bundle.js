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

            if (strictType) {
                return isNumber(root.transform_obj[name][0]) ? parseInt(root.transform_obj[name]) : root.transform_obj[name];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb3ZlQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQmxvYmZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTT04uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZFRleHRmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3R5bGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b0hUTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvWE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdW5pcUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbkZyYW1lIiwicm9vdCIsInJlcXVlc3RJZCIsInN0YXJ0cGFseSIsInBhdXNlZCIsImNhbGxiYWNrIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwic3RlcCIsInRpbWVzdGFtcCIsImNhbGwiLCJjYW5jZWwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsInN0YXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJDbGlwQ2xhc3MiLCJlbGVtZW50IiwicG9zaXRpb24iLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50IiwiQ2xpcCIsImFwcGVuZENoaWxkIiwiTm9kZSIsIm1vdmVUbyIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJwYXJlbnROb2RlIiwieCIsInkiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsInBhcmVudEVsZW1lbnQiLCJjb3B5VG8iLCJvbiIsImNsb25lIiwic3R5bGUiLCJvYmplY3QiLCJpbmplY3QiLCJlbGVtIiwiYXBwZW5kIiwiQ29tcG9uZW50IiwiY29uZmlnIiwibGlzdCIsInJhbmRvbU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcCIsImNyZWF0ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJjb21wb25lbnRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZmluZCIsImNsb25lZCIsInRlbXBsYXRlIiwiY2xvbmVOb2RlIiwiYmVmb3JlIiwiaW5pdGlhbGl6ZWQiLCJtZXRob2RzIiwidmFsdWVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImJpbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJkYXRhIiwicGFyZW50Q29tcG9uZW50IiwicHVzaCIsIm5vZGUiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwicHJvcHMiLCJvdmVycmlkZSIsIktleWJvYXJkRXZlbnRNYW5hZ2VyIiwic3RvcmFnZSIsImJhc2VDYWxsYmFja3NMaXN0IiwiYWRkU3RvcmFnZSIsImJhc2VDYWxsYmFjayIsInR5cGUiLCJrZXlDb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsInNldHVwTGlzdGVuZXJzIiwiYWRkIiwicm0iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWFjaCIsIndpdGhDb25kaXRpb25LZXkiLCJwcmVzcyIsInVwIiwiZG93biIsIkxvYWRlciIsImpzb24iLCJqc29ucyIsImphdmFzY3JpcHQiLCJpbWFnZXMiLCJhdWRpb3MiLCJ2aWRlb3MiLCJ2aWRlbyIsInNyYyIsIm9uZXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJzcmNzIiwib2JqIiwiaXRlbSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwic2NyaXB0cyIsIml0ZXJhdG9yIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInN1YnN0ciIsIm9ubG9hZCIsImUiLCJoZWFkIiwiaW1ncyIsIm5hbWUiLCJpbWciLCJhdWRpbyIsInByZWxvYWQiLCJNYXRyaXgiLCJtMTEiLCJtMTIiLCJtMjEiLCJtMjIiLCJneCIsImd5IiwiTW92ZUNsaXAiLCJjbGlwIiwiRXJyb3IiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsImNsb25lUHJvcGVydHkiLCJQb2ludCIsIlJlY3RhbmdsZSIsIlJveHkiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwiZGVmYXVsdCIsInByb3h5IiwiUHJveHkiLCJnZXQiLCJwcm9wIiwic2V0IiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJmaWxsIiwib2JzZXJ2ZSIsInRvIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsImluZGV4IiwicngiLCJldmVudEN1cnNvciIsIlNjZW5lIiwicHJvcGVydGllcyIsImN1cnJlbnQiLCJzY2VuZXMiLCJjb25zb2xlIiwibG9nIiwiYXR0cnMiLCJnZXRDdXJyZW50U2NlbmUiLCJuZXh0IiwibGVzdCIsImkiLCJydW4iLCJzY2VuZSIsImFwcGx5Iiwic2hvdyIsImNvbnN0cnVjdG9yIiwiU3RlcHNTY2VuZSIsInN0ZXBzIiwiaXRlcmF0aW9uIiwibG9vcCIsInN0ZXBfaXRlcmF0aW9uIiwic3RlcF9zdG9wIiwic3RlcF9jYWxsYmFja19lYWNoIiwic3RlcF9jYWxsYmFja3MiLCJwbGF5Iiwic3RvcCIsImVuZCIsIm1zIiwic2V0VGltZW91dCIsImdvdG8iLCJlYWNoU3RlcHMiLCJjdXJyZW50Q2FsbGJhY2tPYmplY3QiLCJUaW1lciIsInJlcGVhdCIsInRoaXNJbnN0YW5jZSIsInRoaXNJbnN0IiwiaXNOYU4iLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJUcmFuc2Zvcm0iLCJwYXJhbXMiLCJ0cmFuc2Zvcm1fb2JqIiwidHJhbnNmb3JtX2FyciIsInRyYW5zZm9ybSIsInNwbGl0IiwiZmlsdGVyIiwidHJhbnNmb3JtX3N0cmluZyIsInVwZGF0ZSIsImpvaW4iLCJyZXNlYXJjaCIsIm1ldGhvZCIsIm11bHRpcGx5IiwiZXh0IiwibWF0Y2giLCJudW0iLCJwYXJhbSIsInRyaW0iLCJtYXRjaGVkIiwiZ2V0TWV0aG9kUGFyYW1ldGVyIiwic3RyaWN0VHlwZSIsImlzTnVtYmVyIiwiQW5pbWF0ZSIsIlJBRElBTiIsIkRFR1JFRV9BU19SQURJQU4iLCJERUdSRUVfMzYwX0FTX1JBRElBTiIsIlBJIiwiUkFEX1RPX0RFR1JFRVMiLCJTdGF0aWMiLCJVdGlsIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJhdHRyIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIkRhdGUiLCJSZWdFeHAiLCJGdW5jdGlvbiIsIlN0cmluZyIsIk51bWJlciIsIkJvb2xlYW4iLCJjb3B5IiwiaW5zdGFuY2UiLCJjcmVhdGVBcnJheSIsImFyciIsInIiLCJ1bmRlZmluZWQiLCJ0YWciLCJpbm5lciIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImluc2VydCIsImsiLCJjcmVhdGVGcmFnbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNzcyIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwiaW5kZXhPZiIsImRlY29kZUdldFF1ZXJ5IiwicXVlcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb21Mb2FkZWQiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidiIsImEiLCJOb2RlTGlzdCIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZW5jb2RlR2V0UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleGlzdHMiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsInJlZyIsInJlcGxhY2UiLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwibG9jYXRpb24iLCJnZXRXaW5kb3ciLCJodHRwUmVxdWVzdCIsInNlbmREYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcHRpb25zIiwiYWN0aW9uIiwidXJsIiwiaHJlZiIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJzdHIybm9kZSIsInN0cjJmcmFnbWVudCIsIm5vZGUyc3RyIiwicXVlcnlBbGwiLCJzZWFyY2giLCJpc0VtcHR5IiwiaXNOb2RlIiwibG9hZENTUyIsImxvYWRKUyIsImxvYWRKU1N5bmMiLCJtZXJnZSIsIm51bWJlcjJzdHJpbmciLCJwb3NpdGlvbk1vdXNlIiwicmFuZG9tQ29sb3IiLCJyYW5kb21JdGVtIiwicmFuZG9tTnVtYmVyIiwicmFuZG9tU3RyaW5nIiwicmFuZG9tSHVtYW5pemVTdHJpbmciLCJyZWRpcmVjdCIsInR5cGVPZiIsInR5cGVPZlN0cmljdCIsInVyaSIsInRvT2JqZWN0IiwiaXNIVE1MU3RyaW5nIiwiaXNTdHJpbmciLCJpc0RlZmluZWQiLCJsb2FkQmxvYmZpbGUiLCJsb2FkSlNPTiIsImxvYWRUZXh0ZmlsZSIsInRvSFRNTCIsInRvWE1MIiwic3R5bGl6ZXIiLCJ1bmlxQXJyYXkiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInRydWVzdCIsImRpdiIsImNoaWxkRWxlbWVudENvdW50Iiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsImJsb2IiLCJsaW5rIiwicmVsIiwiZG9jdW1lbnRFbGVtZW50IiwidGV4dCIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29udGFpbmVyIiwiYWJzIiwicG93IiwiYnViYmxlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJyb3VuZCIsInRvcCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIk1vdXNlRXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtaW4iLCJtYXgiLCJmbG9vciIsImxldHRlcnMiLCJjb2xvciIsInNpemUiLCJjZWlsIiwicmVzIiwid2l0aE51bWJlcnMiLCJjb25zb25hbnQiLCJ2b3dlbCIsInZvd2VsRmlyc3QiLCJzMSIsInMyIiwibG9jIiwicXVlcnlFbGVtZW50cyIsImhhc0F0dHJpYnV0ZSIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGVzIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwieG1sRG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRhZ05hbWUiLCJzaW1wbGVUeXBlcyIsInQiLCJzZWxmIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hmLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFVeE8sS0FBVixFQUFpQjdELElBQWpCLEVBQXVCO0FBQ3hDLFFBQU04WCxJQUFJeGIsT0FBT2tTLFNBQVAsQ0FBaUJwTSxRQUFqQixDQUEwQmhILElBQTFCLENBQStCeUksS0FBL0IsRUFBc0N4QixLQUF0QyxDQUE0QyxDQUE1QyxFQUErQyxDQUFDLENBQWhELENBQVY7QUFDQSxXQUFPLE9BQU9yQyxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxTQUFTOFgsQ0FBcEMsR0FBd0NBLENBQS9DO0FBQ0gsQ0FIRDs7a0JBS2V6RixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZixJQUFNWSxZQUFZLFNBQVpBLFNBQVksQ0FBVXBQLEtBQVYsRUFBaUI0QixLQUFqQixFQUF3QnNTLElBQXhCLEVBQThCO0FBQzVDLFdBQU9BLEtBQUsvSyxPQUFMLENBQWFuSixLQUFiLE1BQXdCNEIsS0FBL0I7QUFDSCxDQUZEOztrQkFJZXdOLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7QUFHQSxJQUFNWCxNQUFNLGFBQVVBLElBQVYsRUFBZTtBQUN2QixRQUFNd0UsTUFBTSw0QkFBWjtBQUNBeEUsV0FBTUEsUUFBT3dFLElBQUlrQixRQUFqQjtBQUNBMUYsV0FBTUEsS0FBSW5ELE9BQUosQ0FBWSxPQUFaLEVBQXFCLEdBQXJCLENBQU47QUFDQSxXQUFPbUQsS0FBSXpULE1BQUosR0FBYSxDQUFiLElBQWtCeVQsS0FBSWpRLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixNQUFvQixHQUF0QyxHQUE0QyxNQUFNaVEsSUFBbEQsR0FBd0RBLElBQS9EO0FBQ0gsQ0FMRDs7a0JBT2VBLEciLCJmaWxlIjoiYW5pbWF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuLypcbmNvbnN0IGFuaW1hdGlvbiA9IEFuaW1hdGlvbkZyYW1lKCk7XG5hbmltYXRpb24ucGF1c2UoKTtcbmFuaW1hdGlvbi5zdGFydChmdW5jdGlvbihwcm9ncmVzcyl7XG4gICAgaWYgKE1hdGgucm91bmQocHJvZ3Jlc3MpICUgMTAwMCA9PT0gMCkge1xuICAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICB9XG59KTtcbmFuaW1hdGlvbi5jYW5jZWwoKTtcbiovXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7e2R1cmF0aW9uOiBudW1iZXIsIHN0YXJ0cGFseTogbnVtYmVyLCBwYXVzZWQ6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIHJlcXVlc3RJZDogbnVtYmVyLCBjYWxsYmFjazogbnVtYmVyLCBwcm9ncmVzczogbnVtYmVyfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgcmVxdWVzdElkOiAwLFxuICAgICAgICBzdGFydHBhbHk6IDAsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIGNhbGxiYWNrOiAwLFxuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIHByb2dyZXNzOiAwLFxuICAgIH07XG5cbiAgICByb290LnN0ZXAgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmICghcm9vdC5zdGFydHBhbHkpIHJvb3Quc3RhcnRwYWx5ID0gdGltZXN0YW1wO1xuICAgICAgICByb290LnByb2dyZXNzID0gdGltZXN0YW1wIC0gcm9vdC5zdGFydHBhbHk7XG5cbiAgICAgICAgaWYgKHJvb3QuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2suY2FsbChyb290LCByb290LnByb2dyZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290LmR1cmF0aW9uICYmIHJvb3QuZHVyYXRpb24gPiByb290LnByb2dyZXNzKSB7XG4gICAgICAgICAgICByb290LmNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICBpZiAocm9vdC5wYXVzZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QucGF1c2VkID0gIXJvb3QucGF1c2VkO1xuICAgIH07XG5cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290LnJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICB9O1xuXG4gICAgcm9vdC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyb290LnJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uRnJhbWU7XG4iLCJpbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcblxuZXhwb3J0IGNsYXNzIENsaXBDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb24oZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHBvc2l0aW9uLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIG1vdmVUbyhwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb3B5VG8ocGFyZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvcHkodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5tb3ZlVG8ocGFyZW50KTtcbiAgICB9XG5cbiAgICBvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9XG5cbiAgICBjbG9uZSAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wZXJ0aWVzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvc2l0aW9uKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLnBvc2l0aW9uW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCAtIHBhcmVudC54O1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55IC0gcGFyZW50Lnk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCAodGhpcy5lbGVtZW50LmlkIHx8ICdjbGlwJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHsgYm90dG9tLCBlbGVtZW50LCBoZWlnaHQsIGxlZnQsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5IH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDbGlwID0gZnVuY3Rpb24gKGVsZW1lbnQpXG57XG4gICAgY29uc3Qgcm9vdCA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgaWYgKHJvb3QuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcG9zaXRpb24oZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgcm9vdC54ID0gcm9vdC54IC0gcGFyZW50Lng7XG4gICAgICAgIHJvb3QueSA9IHJvb3QueSAtIHBhcmVudC55O1xuICAgICAgICByb290LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCByb290LmVsZW1lbnQuaWQgfHwgJ2NsaXAnKTtcbiAgICB9XG5cbiAgICByb290Lm1vdmVUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByb290LnN0eWxlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9O1xuXG4gICAgcm9vdC5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByb290LmluamVjdChlbGVtLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGlwO1xuIiwiaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHtyYW5kb21IdW1hbml6ZVN0cmluZ30gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5cblxuLyoqXG4gKlxuY29uZmlnOlxuICAgIGlkOiAnaWQnLFxuICAgIHByb3BzOiB7fSxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7fSxcbiAgICBjb21wbGV0ZSAoKSB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBub2RlOiB7fSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG5cbkNvbXBvbmVudCh7XG4gICAgaWQ6ICdFeHRlcm5hbFRlbXBsYXRlQ29tcG9uZW50JyxcbiAgICBwcm9wczogWyd0aXRsZSddLFxuICAgIHRlbXBsYXRlOiAndGVtcGxhdGUnLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge1xuICAgICAgICBpdGVyYXRvcjogMCxcbiAgICB9LFxuICAgIGNvbXBsZXRlIChhcHApIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZVsndGl0bGUnXSlcbiAgICAgICAgdGhpcy5ub2RlWyd0aXRsZSddLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSArKyB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgICAgICBtaW4gKGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pdGVyYXRvci50ZXh0Q29udGVudCA9IC0tIHRoaXMuZGF0YS5pdGVyYXRvciA7XG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGdldCBwcm9wZXJ0eSBieSBpZCBrZXl3b3JkXG4gICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY29uZmlnLmlkKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tTmFtZSA9ICByYW5kb21IdW1hbml6ZVN0cmluZyg2KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmFuZG9tTmFtZSA9IHJhbmRvbU5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyByYW5kb21OYW1lLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbmZpZy5pZCA9ICdDb21wb25lbnQnICsgcmFuZG9tTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wb25lbnQubGlzdFtjb25maWcuaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXAgPSBDb21wb25lbnQuY3JlYXRlKGNvbmZpZyk7XG5cbiAgICAgICAgY29tcC5jb21wb25lbnQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNvbXBvbmVudHNbaWRdID8gY29tcC5jb21wb25lbnRzW2lkXSA6IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY2hpbGRyZW4uZmluZCgoY29tcG9uZW50KSA9PiBjb21wb25lbnQuaWQgPT09IGlkKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNsb25lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZSh0aGlzKTtcbiAgICAgICAgICAgIGNsb25lZC50ZW1wbGF0ZSA9IGNsb25lZC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5iZWZvcmUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5iZWZvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmKGlzSFRNTFN0cmluZyhjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHF1ZXJ5KGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAubWV0aG9kcyAmJiBPYmplY3QudmFsdWVzKGNvbXAubWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLm1ldGhvZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5tZXRob2RzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5tZXRob2RzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5kYXRhICYmIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5kYXRhW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5kYXRhW2tleV0gPSBjb21wLmRhdGFba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmNvbXBvbmVudHMgJiYgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXAuY29tcG9uZW50c1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcG9uZW50c1trZXldLnBhcmVudENvbXBvbmVudCA9IGNvbXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXAuY2hpbGRyZW4ucHVzaChjb21wLmNvbXBvbmVudHNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc05vZGUoY29tcC50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIGNvbXAubm9kZSA9IHNlYXJjaCgnW2RhdGEtbm9kZV0nLCAnZGF0YS1ub2RlJywgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICBjb21wLm9uID0gc2VhcmNoKCdbZGF0YS1vbl0nLCAnZGF0YS1vbicsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFjb21wLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlLmNhbGwoY29tcCwgY29tcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBDb21wb25lbnQubGlzdFtjb21wLmlkXSA9IGNvbXA7XG4gICAgICAgIHJldHVybiBjb21wO1xuICAgIH1cbn07XG5Db21wb25lbnQubGlzdCA9IHt9O1xuQ29tcG9uZW50LmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICByZXR1cm4gbWVyZ2UoIHtcbiAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgIHByb3BzOiB7fSxcbiAgICAgICAgdGVtcGxhdGU6IGZhbHNlLFxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgICAgIGluaXQ6ICgpID0+IHt9LFxuICAgICAgICBjb21wbGV0ZTogKCkgPT4ge30sXG4gICAgICAgIG1ldGhvZHM6IHt9LFxuICAgICAgICBub2RlOiB7fSxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgY2hpbGRyZW46IFtdLFxuICAgICAgICBwYXJlbnRDb21wb25lbnQ6IHt9LFxuICAgIH0sIGNvbmZpZylcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsIi8qXG5jb25zdCBrZXlib2FyZCA9IEtleWJvYXJkRXZlbnRNYW5hZ2VyKCk7XG5rZXlib2FyZC5lYWNoKEVWRU5UX05BTUUsIGZ1bmN0aW9uIChldmVudCkge30pXG5rZXlib2FyZC53aXRoQ29uZGl0aW9uS2V5XG5rZXlib2FyZC5wcmVzc1xua2V5Ym9hcmQudXBcbmtleWJvYXJkLmRvd25cbiovXG5jb25zdCBLZXlib2FyZEV2ZW50TWFuYWdlciA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc3Qgc3RvcmFnZSA9IHt9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgYWRkU3RvcmFnZSA9IGZ1bmN0aW9uIChldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdKSBzdG9yYWdlW2V2ZW50XSA9IHt9O1xuICAgICAgICBpZiAoIXN0b3JhZ2VbZXZlbnRdW2tleV0pIHN0b3JhZ2VbZXZlbnRdW2tleV0gPSBbXTtcbiAgICAgICAgc3RvcmFnZVtldmVudF1ba2V5XS5wdXNoKGNhbGxiYWNrKTtcblxuICAgICAgICBpZiAodHlwZW9mIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdID0gYmFzZUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZSkubWFwKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlW3R5cGVdKS5tYXAoKGtleUNvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSggc3RvcmFnZVt0eXBlXVtrZXlDb2RlXSApKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0ubWFwKChjYWxsYmFjaykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IHR5cGUgJiYgcGFyc2VJbnQoa2V5Q29kZSkgPT09IGV2ZW50LmtleUNvZGUgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbChldmVudCwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVhY2hDYWxsYmFja3NMaXN0ID0ge307XG4gICAgY29uc3QgZWFjaENhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gc2V0dXBMaXN0ZW5lcnMgKCkge1xuICAgICAgICBjb25zdCBhZGQgPSAoKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhiYXNlQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZWFjaENhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhiYXNlQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZWFjaENhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBlYWNoQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgcm0oKTtcbiAgICAgICAgYWRkKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgZWFjaChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGVhY2hDYWxsYmFjayhldmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2l0aENvbmRpdGlvbktleShldmVudCwga2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgYWRkU3RvcmFnZShldmVudCwga2V5LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICBwcmVzcyhrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXByZXNzJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5dXAnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgZG93bihrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleWRvd24nLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXlib2FyZEV2ZW50TWFuYWdlcjtcbiIsIlxuXG4vKipcbiAqIExvYWRlci5hdWRpb3M6IMaSIChzcmNzLCBjYWxsYmFjaylcbiAqIExvYWRlci5pbWFnZXM6IMaSIChpbWdzLCBjYWxsYmFjaylcbiAqIExvYWRlci5qYXZhc2NyaXB0OiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIExvYWRlci5qc29uOiDGkiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcilcbiAqIEBwcm9wZXJ0eVxuICogQG1ldGhvZCBqc29uXG4gKiBAbWV0aG9kIGpzb25zXG4gKiBAbWV0aG9kIGphdmFzY3JpcHRcbiAqIEBtZXRob2QgaW1hZ2VzXG4gKiBAbWV0aG9kIGF1ZGlvc1xuICogQHJldHVybnMge3t9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IExvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBqc29uOiBMb2FkZXIuanNvbixcbiAgICAgICAganNvbnM6IExvYWRlci5qc29ucyxcbiAgICAgICAgamF2YXNjcmlwdDogTG9hZGVyLmphdmFzY3JpcHQsXG4gICAgICAgIGltYWdlczogTG9hZGVyLmltYWdlcyxcbiAgICAgICAgYXVkaW9zOiBMb2FkZXIuYXVkaW9zLFxuICAgICAgICB2aWRlb3M6IExvYWRlci52aWRlbyxcbiAgICB9O1xufTtcblxuLyoqXG4gKiAuanNvbignL3VybC9kYXRhZmlsZS5qc29uJywgKGpzb24pID0+IHt9LCAoZXJyb3IpID0+IHt9KVxuICpcbiAqIEBwYXJhbSBzcmNcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIG9uZXJyb3JcbiAqL1xuTG9hZGVyLmpzb24gPSBmdW5jdGlvbiAoc3JjLCBjYWxsYmFjaywgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IGNhbGxiYWNrKGpzb24pKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gb25lcnJvclxuICovXG5Mb2FkZXIuanNvbnMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG57XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBMb2FkZXIuanNvbihzcmMsIChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1trZXldID0ganNvbjtcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBvbmVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgc2NyaXB0IGVsZW1lbnQgd2l0aCBqYXZhc2NyaXB0IHNvdXJjZVxuICpcbiAqIC5qYXZhc2NyaXB0ICgge1xuICogICAgICBteV9zY3JpcHQxOiAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gKiAgICAgIG15X3NjcmlwdDI6ICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogLmphdmFzY3JpcHQgKCBbXG4gKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215X3NjcmlwdDInLFxuICogICAgXSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIExvYWRlci5qYXZhc2NyaXB0XG4gKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAqIEBwYXJhbSBjYWxsYmFjayAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gYWxsIHNyY3MgaXMgbG9hZGVkXG4gKiBAcGFyYW0gb25lcnJvciAgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWQgaXMgZmFpbGVkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuTG9hZGVyLmphdmFzY3JpcHQgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpXG57XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjcykpIHtcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgICAgICAgICAgc3Jjcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBvYmpbTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIGxldCBzY3JpcHQ7XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSAoc3Jjc1trZXldLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyY3Nba2V5XSA6IHNyY3Nba2V5XSArICcuanMnO1xuICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG4gICAgICAgICAgICBzY3JpcHQuaWQgPSBrZXk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbi8qKlxuICogTG9hZCBhbiBpbWFnZXNcbiAqXG4gKiAuaW1hZ2VzICgge1xuICogICAgICBpbWcxOiAnL3BhdGgvdG8vaW1nMScsXG4gKiAgICAgIGltZzI6ICcvcGF0aC90by9pbWcyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci5pbWFnZXNcbiAqIEBwYXJhbSBpbWdzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLmltYWdlcyA9IGZ1bmN0aW9uIChpbWdzLCBjYWxsYmFjaykge1xuICAgIGlmIChpbWdzICYmIHR5cGVvZiBpbWdzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhpbWdzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGltYWdlcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIGltZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltZ3NbbmFtZV07XG4gICAgICAgICAgICBpbWcubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpbWFnZXNbdGhpcy5uYW1lXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpbWFnZXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogTG9hZCBhbiBhdWRpbyBmaWxlc1xuICpcbiAqIC5hdWRpb3MgKCB7XG4gKiAgICAgIGF1ZGlvMTogJy9wYXRoL3RvL2F1ZGlvMScsXG4gKiAgICAgIGF1ZGlvMjogJy9wYXRoL3RvL2F1ZGlvMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuYXVkaW9zXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci5hdWRpb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCBhdWRpb3MgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzcmNzKSB7XG4gICAgICAgICAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG4gICAgICAgICAgICBhdWRpby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgYXVkaW8ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICBhdWRpby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgYXVkaW9zW25hbWVdID0gYXVkaW87XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBhdWRpb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBMb2FkIGFuIHZpZGVvIGZpbGVzXG4gKlxuICogLnZpZGVvcyAoIHtcbiAqICAgICAgdmlkZW8xOiAnL3BhdGgvdG8vdmlkZW8xJyxcbiAqICAgICAgdmlkZW8yOiAnL3BhdGgvdG8vdmlkZW8yJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci52aWRlb3NcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLnZpZGVvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHZpZGVvcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndmlkZW8nKTtcbiAgICAgICAgICAgIHZpZGVvLnNyYyA9IHNyY3NbbmFtZV07XG4gICAgICAgICAgICB2aWRlby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIHZpZGVvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICB2aWRlb3NbbmFtZV0gPSB2aWRlbztcbiAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHZpZGVvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsIi8qKlxuXG5hIChtMTEpIEhvcml6b250YWwgc2NhbGluZy5cbmIgKG0xMikgSG9yaXpvbnRhbCBza2V3aW5nLlxuYyAobTIxKSBWZXJ0aWNhbCBza2V3aW5nLlxuZCAobTIyKSBWZXJ0aWNhbCBzY2FsaW5nLlxuZSAoZHgpIEhvcml6b250YWwgbW92aW5nLlxuZiAoZHkpIFZlcnRpY2FsIG1vdmluZy5cbiovXG5jb25zdCBNYXRyaXggPSBmdW5jdGlvbiAobTExLCBtMTIsIG0yMSwgbTIyLCBneCwgZ3kpIHtcbiAgICByZXR1cm4ge20xMSwgbTEyLCBtMjEsIG0yMiwgZ3gsIGd5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDtcbiIsImltcG9ydCBDbGlwIGZyb20gXCIuL0NsaXBcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5cbi8qXG5yZXR1cm4gTW92ZUNsaXAoe1xuICAgIGVsZW1lbnQ6IGA8ZGl2IGNsYXNzPVwic3ByaXRlIHJlY3RcIj48L2Rpdj5gLFxuICAgIHBhcmVudDogQXBwQ2xpcCxcbiAgICB4OiAxMDAsXG4gICAgeTogMTAwLFxuICAgIGluaXQoKXtcbiAgICAgICAgdGhpcy5wYXJlbnQuYXBwZW5kKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBbXG4gICAgICAgICAgICAncm90YXRlKCcgKyA0NSArJ2RlZyknLFxuICAgICAgICAgICAgJ3NjYWxlKDAuNSwgMC41KScsXG4gICAgICAgIF07XG4gICAgfSxcbn0pXG4qL1xuY29uc3QgTW92ZUNsaXAgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gY29uZmlnO1xuICAgIGNvbnN0IGNsaXAgPSBDbGlwKGVsZW1lbnQpO1xuXG4gICAgaWYoIWNsaXAuZWxlbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3BlcnR5IFtlbGVtZW50XSBub3QgZm9uZCEnKTtcbiAgICB9XG5cbiAgICBjbGlwLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW1pdmVjbGlwJywgY29uZmlnLmlkIHx8ICdtaXZlY2xpcCcpO1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgLy8gY2xpcDogY2xpcCxcbiAgICAgICAgZWxlbWVudDogY2xpcC5lbGVtZW50LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIHNldCB4KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueFxuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAud2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLmhlaWdodFxuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlKG9iamVjdCkge1xuICAgICAgICAgICAgc3R5bGl6ZXIocm9vdC5lbGVtZW50LCBvYmplY3QpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBkZWxldGUgY29uZmlnLmVsZW1lbnQ7XG4gICAgZGVsZXRlIGNvbmZpZy5pbml0aWFsaXplZDtcbiAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJvb3Rba2V5XSA9IGNvbmZpZ1trZXldXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICByb290LmluaXQuY2FsbChyb290KTtcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNsb25lUHJvcGVydHkgPSB0b09iamVjdChyb290KTtcbiAgICAgICAgY2xvbmVQcm9wZXJ0eS5lbGVtZW50ID0gcm9vdC5lbGVtZW50LmNsb25lTm9kZShyb290KTtcbiAgICAgICAgaWYgKGFwcGVuZCkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2xvbmVQcm9wZXJ0eS5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTW92ZUNsaXAoY2xvbmVQcm9wZXJ0eSk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9O1xuXG4gICAgcm9vdC5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByb290LmluamVjdChlbGVtLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgcm9vdC5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKVxuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmVDbGlwO1xuIiwiXG5jb25zdCBQb2ludCA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuIiwiXG5jb25zdCBSZWN0YW5nbGUgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIHJldHVybiB7eCwgeSwgd2lkdGgsIGhlaWdodH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWN0YW5nbGU7XG4iLCIvKlxuY29uc3QgUnhTdGF0ZSA9IFJveHkoe1xuICAgIHRpdGxlOiAnJyxcbiAgICBib2R5OiAnJyxcbn0pO1xuXG5SeFN0YXRlLmV2ZW50KChrZXksIHZhbHVlcyk9PntcbiAgICBpZiAoa2V5ID09PSAnJykge31cbiAgICBpbmplY3QoJyMnICsga2V5LCB2YWx1ZXMpO1xufSk7XG5cblJ4U3RhdGUucHJveHkudGl0bGUgPSAnRmlyc3QgdmFsdWUnO1xuUnhTdGF0ZS5wcm94eS5ib2R5ID0gJ1Rlc3QgYm9keSB0ZXh0JztcblxuVGltZXIudGltZW91dCgoKSA9PiB7XG4gICAgUnhTdGF0ZS5kaXNwYXRjaCgndGl0bGUnLCAnSGVsbG8gZnJpZW5kJyk7XG4gICAgUnhTdGF0ZS5kaXNwYXRjaCgnYm9keScsICdEbyB5b3UgaGFwcHkgbm93PycpO1xufSwgMjAwMCk7XG5cbiovXG5cbi8qKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIHNldCgqPSwgKj0pOiAqLCBnZXQoKik6ICosIGFjdGlvbigqPSwgKj0pOiAqLCBmaWxsKCo9LCAqPSk6ICp9fFJveHl8e318bnVsbHxib29sZWFufVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuXG5jb25zdCBSb3h5ID0gZnVuY3Rpb24gKHBheWxvYWQpXG57XG4gICAgY29uc3QgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzID0ge1xuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBwcm94eSA9IG5ldyBQcm94eShwYXlsb2FkLCB7XG4gICAgICAgIGdldChvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9wIGluIG9iaiA/IG9ialtwcm9wXSA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIHNldChvYmosIHByb3AsIHZhbHVlKSB7XG5cbiAgICAgICAgICAgIG9ialtwcm9wXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdICYmIHR5cGVvZiBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0uY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0LmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBvbGRlciBuYW1lOiBzZWV8c2V0P1xuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBwYXlsb2FkXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGF0Y2goa2V5LCBwYXlsb2FkKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFwYXlsb2FkKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0ga2V5LmNhbGwoe30sIHByb3h5KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGwocmVzdWx0KVxuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXlsb2FkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwYXlsb2FkLmNhbGwoe30sIHByb3h5W2tleV0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSByZXN1bHQ7XG5cbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWN0aW9uKClcbiAgICAgICAgICogQGRlcHJlY2F0ZWRcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBldmVudChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vYnNlcnZlKGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBFdmVudCBjaGFuZ2UgcHJvcGVydGllcyBvZiBzb3VyY2Ugb2JqZWN0XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2ZShrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PT0gXCJmdW5jdGlvblwiICYmICFjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID0ga2V5O1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW2tleV0gPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICA/IGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0KGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA/IHByb3h5W2tleV0gOiBjb3B5KHByb3h5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaWxsKHBheWxvYWQsIHRvKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodG8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcm94eVt0b10pXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm94eVt0b10gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dW2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBwcm94eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRQcm94eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm94eTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBSb3h5O1xuIiwiaW1wb3J0IFJveHkgZnJvbSBcIi4vUm94eVwiO1xuXG4vKipcbiAqIGNvbnN0IHJ4ID0gUm94eUxpc3RlbmVyICh7XG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogfSlcbiAqIHJ4LnNldCgpO1xuICogcnguZGlzcGF0Y2goKTtcbiAqXG4gKiByeC5hY3Rpb24oKTtcbiAqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgZGlzcGF0Y2goKj0sICo9KTogUm94eSwgZ2V0KCopOiAqLCBldmVudCgqPSwgKj0pOiB0aGlzLCBmaWxsKCo9LCAqPSk6IHRoaXN9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFJveHlMaXN0ZW5lciA9IGZ1bmN0aW9uIChwYXlsb2FkKSB7XG5cbiAgICBjb25zdCBhY3Rpb25zID0ge1xuICAgICAgICBfX2FjdGlvbl9fKCkge1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFjdGlvbnNOYW1lcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMocGF5bG9hZCkubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG4gICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXSA9IHBheWxvYWRbZXZlbnROYW1lXTtcblxuICAgICAgICBpZiAodHlwZW9mIHBheWxvYWRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJyAmJiBldmVudE5hbWUgIT09IGFjdGlvbnMuX19hY3Rpb25fXy5uYW1lKSB7XG4gICAgICAgICAgICBhY3Rpb25zTmFtZXNbZXZlbnROYW1lXSA9ICcnO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCByeCA9IFJveHkoYWN0aW9uc05hbWVzKTtcbiAgICAvL1xuICAgIHJ4LmFjdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhY3Rpb25zTmFtZXNcbiAgICB9O1xuXG4gICAgcnguZXZlbnQoKGV2ZW50Q3Vyc29yLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgYWN0aW9ucy5fX2FjdGlvbl9fLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMoYWN0aW9ucykubWFwKGZ1bmN0aW9uIChldmVudE5hbWUsIGluZGV4KSB7XG5cbiAgICAgICAgICAgIGlmIChldmVudEN1cnNvciA9PT0gZXZlbnROYW1lICYmIHR5cGVvZiBhY3Rpb25zW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHJldHVybiByeDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJveHlMaXN0ZW5lcjtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cblxuLypcbmNvbnN0IHNjZW5lID0gU2NlbmUoKTtcbnNjZW5lLmFkZCgnZWRpdG9yJywgZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBjb25zb2xlLmxvZyhhLCBiLCBjLCBkKTtcbn0pXG5zY2VuZS5hZGQoJ291dHB1dCcsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUucnVuKCdvdXRwdXQnLCBbJ2hlbGxvJywgMjAwLCB7fV0pO1xuKi9cbi8qKlxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7e2N1cnJlbnQ6IHN0cmluZywgc2NlbmVzOiB7ZGVmYXVsdDoge2NhbGxiYWNrKCk6IHZvaWQsIGF0dHJzOiBbXX19LCBlbGVtZW50OiBudWxsfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTY2VuZSA9IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgY3VycmVudDogJ2RlZmF1bHQnLFxuICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICBzY2VuZXM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpIHtjb25zb2xlLmxvZygnW0RlZmF1bHQgU2NlbmVdJyl9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5hZGQgPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGF0dHJzID0gW10pIHtcbiAgICAgICAgcm9vdC5zY2VuZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIGF0dHJzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcm9vdC5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gcm9vdC5zY2VuZXNbbmFtZV07XG4gICAgfVxuXG4gICAgcm9vdC5nZXRDdXJyZW50U2NlbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByb290LnNjZW5lc1tyb290LmN1cnJlbnRdO1xuICAgIH1cblxuICAgIHJvb3QubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGxlc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJvb3Quc2NlbmVzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoa2V5c1tpXSA9PT0gcm9vdC5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXlzW2kgKyAxXSAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbaSArIDFdO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBrZXlzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbGVzdCA9IGtleXNbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QucnVuKGxlc3QpO1xuICAgIH07XG5cbiAgICByb290LnJ1biA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7XG4gICAgICAgIHJvb3QuY3VycmVudCA9IGtleSB8fCAnZGVmYXVsdCc7XG4gICAgICAgIGNvbnN0IHNjZW5lID0gcm9vdC5nZXRDdXJyZW50U2NlbmUoKTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBzY2VuZS5jYWxsYmFjaztcblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGlmIChhdHRycykge1xuICAgICAgICAgICAgICAgIGF0dHJzID0gQXJyYXkuaXNBcnJheShhdHRycykgPyBhdHRycyA6IFthdHRyc107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBhdHRycyA/IGF0dHJzIDogc2NlbmUuYXR0cnMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc2hvdyA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7IHJvb3QucnVuKGtleSwgYXR0cnMpIH07XG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChrZXksIGF0dHJzKSB7IHJvb3QucnVuKGtleSwgYXR0cnMpIH07XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIGlmIChwcm9wZXJ0aWVzICYmIHByb3BlcnRpZXMuc2NlbmVzICYmIHByb3BlcnRpZXMuc2NlbmVzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcy5zY2VuZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5hZGQoa2V5LCBwcm9wZXJ0aWVzLnNjZW5lc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY2VuZTtcbiIsImltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5cbi8qKlxuICpcbiAgICBjb25zdCBzdGVwc0F0dGFja0hlcm8gPSBTdGVwc1NjZW5lKHtcbiAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgIHN0ZXBzOiBbXG4gICAgICAgICAgICB7bmFtZTogJ3N0YXJ0X2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGVyb19hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrX2FuaW1hdGlvbicsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnZW5kX2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgc3RlcHNBdHRhY2tIZXJvLmVhY2hTdGVwcyhmdW5jdGlvbiAoY2JPYmplY3QsIGluZGV4KSB7fSk7XG4gICAgc3RlcHNBdHRhY2tIZXJvLm5leHQoKTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5nb3RvKCdoZXJvX2F0dGFja19hbmltYXRpb24nKS5uZXh0KCk7XG4gICAgc3RlcHNBdHRhY2tIZXJvLnN0b3AoKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiBAcmV0dXJucyB7YW55fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFN0ZXBzU2NlbmUgPSBmdW5jdGlvbiAoY29uZmlnID0ge3N0ZXBzOiBbXX0pIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBpdGVyYXRpb246IDAsXG4gICAgICAgIGxvb3A6IGNvbmZpZy5sb29wIHx8IGZhbHNlLFxuICAgICAgICBzdGVwX2l0ZXJhdGlvbjogMCxcbiAgICAgICAgc3RlcF9zdG9wOiBmYWxzZSxcbiAgICAgICAgc3RlcF9jYWxsYmFja19lYWNoOiBudWxsLFxuICAgICAgICBzdGVwX2NhbGxiYWNrczogY29uZmlnLnN0ZXBzIHx8IHt9LFxuICAgICAgICBzdGFydCgpIHtcbiAgICAgICAgICAgIHJvb3QucGxheSgpO1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBwbGF5KCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5KG1zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGNhbGxiYWNrLmNhbGwocm9vdCk7IH0sIG1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ290byhuYW1lKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tzLmZvckVhY2goKG9iamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob2JqZWN0Lm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IGluZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVhY2hTdGVwcyhjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2ggPSBjYWxsYmFjaztcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKHJvb3Quc3RlcF9zdG9wKSByZXR1cm4gcm9vdDtcblxuICAgICAgICAgICAgaWYgKHJvb3Quc3RlcF9pdGVyYXRpb24gPiByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoIXJvb3QubG9vcClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDYWxsYmFja09iamVjdCA9IHJvb3Quc3RlcF9jYWxsYmFja3Nbcm9vdC5zdGVwX2l0ZXJhdGlvbl07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2ggPT09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrX2VhY2guY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgY3VycmVudENhbGxiYWNrT2JqZWN0LmNhbGxiYWNrLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIHJvb3QuaXRlcmF0aW9uKytcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24rK1xuXG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RlcHNTY2VuZTtcbiIsIlxuY29uc3QgVGltZXIgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIGRlbGF5LCByZXBlYXQsIHRoaXNJbnN0YW5jZSkge1xuICAgIHRoaXMucmVwZWF0ID0gcmVwZWF0O1xuICAgIHRoaXMuaXRlcmF0b3IgPSAwO1xufTtcblxuXG5UaW1lci5zZXRUaW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLmNsZWFyVGltZW91dCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFyVGltZW91dChpZClcbn07XG5UaW1lci5jbGVhckludGVydmFsID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpZClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyOyIsImltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG4vKlxuXG50aGlzLnRyYW5zZm9ybSA9IFRyYW5zZm9ybSh0aGlzLmVsZW1lbnQpO1xudGhpcy50cmFuc2Zvcm0ubWV0aG9kKCdyb3RhdGUnLCBbJzQ1ZGVnJ10pO1xudGhpcy50cmFuc2Zvcm0udXBkYXRlKCk7XG50aGlzLnRyYW5zZm9ybS5yZXNlYXJjaCgpO1xuXG4vLyAuLi5cblRyYW5zZm9ybS5lbGVtZW50KHRoaXMuZWxlbWVudCwgW1xuICAgICdyb3RhdGUoJyArIDEwICsnZGVnKScsXG4gICAgJ3NjYWxlKDAuNiwgMC42KScsXG4gICAgJ21hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKScsXG5dKTtcblRyYW5zZm9ybS5lbGVtZW50KHRoaXMuZWxlbWVudCwgWydyb3RhdGUoJyArIDEwICsnZGVnKSddKVxuY29uc3QgdHJzID0gVHJhbnNmb3JtKHRoaXMuZWxlbWVudCk7XG5cbi8vIHdpdGhvdXQgb2YgdGhlIFRyYW5zZm9ybVxudGhpcy5zdHlsZSh7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKCcgKyAxMCArJ2RlZykgc2NhbGUoMC42LCAwLjYpIG1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKSdcbn0pO1xuXG4qL1xuY29uc3QgVHJhbnNmb3JtID0gZnVuY3Rpb24gKGVsZW1lbnQsIHBhcmFtcylcbntcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICB0cmFuc2Zvcm1fb2JqOiB7fSxcbiAgICAgICAgdHJhbnNmb3JtX2FycjogZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKSxcbiAgICAgICAgdHJhbnNmb3JtX3N0cmluZzogJycsXG5cbiAgICAgICAgdXBkYXRlKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9zdHJpbmcgPSAnJztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocm9vdC50cmFuc2Zvcm1fb2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9zdHJpbmcgKz0ga2V5ICsgJygnICsgcm9vdC50cmFuc2Zvcm1fb2JqW2tleV0uam9pbignLCAnKSArICcpICc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICByb290LnRyYW5zZm9ybV9zdHJpbmc7XG4gICAgICAgICAgICByb290LnJlc2VhcmNoKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kKG1ldGhvZCwgcHJvcGVydGllcywgbXVsdGlwbHkgPSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllcykgPyBwcm9wZXJ0aWVzIDogW3Byb3BlcnRpZXNdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG11bHRpcGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ID0gdmFsdWUubWF0Y2goL1thLXpdKy9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodmFsdWUpICsgcGFyc2VJbnQocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF1baV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gbnVtICsgZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaV0gPSB2YWx1ZSArIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXRzIHBhcmFtZXRlcnMgaXMgbm90IGF2YWlsYWJsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZWFyY2goKXtcbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX2FyciA9IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcpJylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoICk7XG5cbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX2Fyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtID0gcm9vdC50cmFuc2Zvcm1fYXJyW2ldID0gcm9vdC50cmFuc2Zvcm1fYXJyW2ldLnRyaW0oKSAgKyAnKSc7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZCA9IHBhcmFtLm1hdGNoKC9bXFx3XFwuXFwtXSsvaWcpO1xuICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttYXRjaGVkWzBdXSA9IG1hdGNoZWQuc2xpY2UoMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRNZXRob2RQYXJhbWV0ZXIobmFtZSwgc3RyaWN0VHlwZSA9IGZhbHNlKXtcbiAgICAgICAgICAgIGlmIChzdHJpY3RUeXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzTnVtYmVyKHJvb3QudHJhbnNmb3JtX29ialtuYW1lXVswXSlcbiAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUludChyb290LnRyYW5zZm9ybV9vYmpbbmFtZV0pXG4gICAgICAgICAgICAgICAgICAgIDogcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvb3QudHJhbnNmb3JtX29ialtuYW1lXTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5yZXNlYXJjaCgpO1xuXG4gICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5tZXRob2Qoa2V5LCBwYXJhbXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByb290LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufVxuXG5UcmFuc2Zvcm0uZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZXMpe1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBbXTtcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKHByb3ApID0+IHsgcHJvcHMucHVzaChwcm9wKSB9KTtcbiAgICAgICAgc3R5bGl6ZXIoZWxlbWVudCwge3RyYW5zZm9ybTogcHJvcHMuam9pbignICcpfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5cbmltcG9ydCBDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xpcC5qc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IEtleWJvYXJkRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanNcIjtcbmltcG9ydCBNb3ZlQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL01vdmVDbGlwLmpzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgTWF0cml4IGZyb20gXCIuL2NvbXBvbmVudHMvTWF0cml4XCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9jb21wb25lbnRzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xuXG5jb25zdCBBbmltYXRlID0ge1xuICAgIENsaXAsXG4gICAgQ29tcG9uZW50LFxuICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgIE1vdmVDbGlwLFxuICAgIFNjZW5lLFxuICAgIFN0ZXBzU2NlbmUsXG4gICAgVGltZXIsXG4gICAgUm94eUxpc3RlbmVyLFxuICAgIFJveHksXG4gICAgQW5pbWF0aW9uRnJhbWUsXG4gICAgTG9hZGVyLFxuICAgIE1hdHJpeCxcbiAgICBQb2ludCxcbiAgICBSZWN0YW5nbGUsXG4gICAgVHJhbnNmb3JtLFxufTtcblxuY29uc3QgUkFESUFOID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7XG5jb25zdCBERUdSRUVfQVNfUkFESUFOID0gMC4wMTc0NTMyOTI1MTk5NDMyOTU7XG5jb25zdCBERUdSRUVfMzYwX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU4gKiAzNjA7XG5jb25zdCBQSSA9IDMuMTQxNTkyNjUzNTk7XG5jb25zdCBSQURfVE9fREVHUkVFUyA9IDMuMTQxNTkyNjUzNTk7XG5cbkFuaW1hdGUuUkFESUFOID0gUkFESUFOO1xuQW5pbWF0ZS5ERUdSRUVfQVNfUkFESUFOID0gREVHUkVFX0FTX1JBRElBTjtcbkFuaW1hdGUuREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfMzYwX0FTX1JBRElBTjtcbkFuaW1hdGUuUEkgPSBQSTtcbkFuaW1hdGUuUkFEX1RPX0RFR1JFRVMgPSBSQURfVE9fREVHUkVFUztcblxuQW5pbWF0ZS5TdGF0aWMgPVxuICAgIEFuaW1hdGUuVXRpbCA9XG4gICAgICAgIFN0YXRpYztcblxuLy8gaWYgKGdldFdpbmRvdygpKSBnZXRXaW5kb3coKS5BbmltYXRlID0gQW5pbWF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTtcbiIsIlxuZXhwb3J0IGNvbnN0IExFVFRFUl9DT05TT05BTlQgPSAnQixDLEQsRixHLEgsSixLLEwsTSxOLFAsUSxSLFMsVCxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IExFVFRFUl9WT1dFTCA9ICdBLEUsSSxPLFUsWSc7XG5leHBvcnQgY29uc3QgQUJDID0gJ0EsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSLFMsVCxVLFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTlVNQkVSUyA9ICcwLDEsMiwzLDQsNSw2LDcsOCw5JztcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkQgPSAnJic7XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsIi8qKlxuICpcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBjbG9uZShmcm9tLCB0bylcbntcbiAgICBpZiAoZnJvbSA9PT0gbnVsbCB8fCB0eXBlb2YgZnJvbSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgIT09IE9iamVjdCAmJiBmcm9tLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgPT09IERhdGUgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEZ1bmN0aW9uIHx8XG4gICAgICAgIGZyb20uY29uc3RydWN0b3IgPT09IFN0cmluZyB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBOdW1iZXIgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gbmV3IGZyb20uY29uc3RydWN0b3IoZnJvbSk7XG4gICAgfVxuXG4gICAgdG8gPSB0byB8fCBuZXcgZnJvbS5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yIChuYW1lIGluIGZyb20pXG4gICAge1xuICAgICAgICB0b1tuYW1lXSA9IHR5cGVvZiB0b1tuYW1lXSA9PSBcInVuZGVmaW5lZFwiID8gY2xvbmUoZnJvbVtuYW1lXSwgbnVsbCkgOiB0b1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoc3JjLCBpbnN0YW5jZSlcbntcbiAgICBpZiAoaXNOb2RlKHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5zbGljZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiBzcmMuYmluZChpbnN0YW5jZSB8fCB7fSk7XG5cbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpKSB7XG4gICAgICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzcmMpO1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiLypcblxuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUpO1xuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUsIHRydWUpO1xuY29uc3QgYXJyMSA9IGNyZWF0ZUFycmF5KDUsIDEpO1xuY29uc3QgYXJyMiA9IGNyZWF0ZUFycmF5KDUsICdoZWxsbyB3b3JsZCcpO1xuY29uc3QgYXJyMyA9IGNyZWF0ZUFycmF5KDUsIFsxMDAsMjAwLDMwMF0pO1xuY29uc3QgYXJyNCA9IGNyZWF0ZUFycmF5KDUsIHthOidBJyxiOidCJyxjOidDJ30pO1xuXG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbnVtXG4gKiBAcGFyYW0gZmlsbFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5jb25zdCBjcmVhdGVBcnJheSA9IGZ1bmN0aW9uIChudW0sIGZpbGwpIHtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaWxsID09PSAnc3RyaW5nJyApe1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KG51bSkuZmlsbChmaWxsKTtcbiAgICB9XG5cbiAgICBhcnIgPSBuZXcgQXJyYXkobnVtKS5maWxsKDApO1xuICAgIGFyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBmaWxsLmNhbGwoZmlsbCwgaSwgaSk7XG4gICAgICAgICAgICBhcnJbaV0gPSB0eXBlb2YgciA9PT0gJ2Jvb2xlYW4nIHx8IHIgPyByIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbCkpIGFycltpXSA9IGZpbGxbaV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGZpbGxbaV0gO1xuICAgICAgICBlbHNlIGFycltpXSA9IGZpbGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcnJheTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHBhaXJzID0gKHF1ZXJ5WzBdID09PSAnPycgPyBxdWVyeS5zdWJzdHIoMSkgOiBxdWVyeSkuc3BsaXQoJyYnKTtcbiAgICBwYWlycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbi8qY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59OyovXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIGluc3RhbmNlID0ge30pIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpLCB2LCBhKSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBpLCB2LCBhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChBcnJheS5mcm9tKGxpc3QpLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwga2V5LCBsaXN0W2tleV0sIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgbGlzdCA9IGVhY2gobGlzdC5zcGxpdChcIlwiKSwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY29uc3QgYXJyID0gKG5ldyBBcnJheShsaXN0KSkuZmlsbCgwKTtcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGFyciwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBleGlzdHMgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkICYmIHNyYyAhPT0gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4aXN0cztcbiIsIlxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBzb3VyY2UpXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocGFyYW0pKVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcGFyYW1dID0gc291cmNlW3BhcmFtXTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZGVzdGluYXRpb247XG4gICAgfVxuXG4gICAgX18ucHJvdG90eXBlID0gc291cmNlLnByb3RvdHlwZTtcbiAgICBkZXN0aW5hdGlvbi5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGxldCBwcm9wZXJ0eTtcbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgICAgICAgZXh0ZW5kUmVjdXJzaXZlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAobGlzdCwgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IGksIHRtcCA9IFtdO1xuICAgIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSBcIm9iamVjdFwiKVxuICAgICAgICBsaXN0ID0gT2JqZWN0LnZhbHVlcyhsaXN0KTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICAgICAgdG1wLnB1c2gobGlzdFtpXSk7XG5cbiAgICByZXR1cm4gdG1wIDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kcyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXAgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb2N1bWVudDtcbiIsIlxuY29uc3QgZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvY2F0aW9uIG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJcbmNvbnN0IGdldFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aW5kb3cgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXaW5kb3c7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9nZXREb2N1bWVudFwiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vc3RhdGljL2dldFdpbmRvd1wiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9zdHIyZnJhZ21lbnRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBlbmNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2VuY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgZGVjb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9kZWNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9zdGF0aWMvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IGRlZmluZWRJbiBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRJblwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZXh0ZW5kLCB7XG4gICAgZXh0ZW5kUmVjdXJzaXZlXG59ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmdcbn0gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCByZWRpcmVjdCBmcm9tIFwiLi4vc3RhdGljL3JlZGlyZWN0XCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgdXJpIGZyb20gXCIuLi9zdGF0aWMvdXJpXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IGNyZWF0ZUFycmF5IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlQXJyYXlcIjtcbmltcG9ydCBpc1N0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzU3RyaW5nXCI7XG5pbXBvcnQgZXhpc3RzIGZyb20gXCIuLi9zdGF0aWMvZXhpc3RzXCI7XG5pbXBvcnQgaXNEZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvaXNEZWZpbmVkXCI7XG5pbXBvcnQgbG9hZEJsb2JmaWxlIGZyb20gXCIuLi9zdGF0aWMvbG9hZEJsb2JmaWxlXCI7XG5pbXBvcnQgbG9hZEpTT04gZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNPTlwiO1xuaW1wb3J0IGxvYWRUZXh0ZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRUZXh0ZmlsZVwiO1xuaW1wb3J0IHRvSFRNTCBmcm9tIFwiLi4vc3RhdGljL3RvSFRNTFwiO1xuaW1wb3J0IHRvWE1MIGZyb20gXCIuLi9zdGF0aWMvdG9YTUxcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgdW5pcUFycmF5IGZyb20gXCIuLi9zdGF0aWMvdW5pcUFycmF5XCI7XG5cbmNvbnN0IFN0YXRpYyA9IHtcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBnZXREb2N1bWVudCxcbiAgICBnZXRXaW5kb3csXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIHN0cjJmcmFnbWVudCxcbiAgICBub2RlMnN0cixcbiAgICBxdWVyeSxcbiAgICBxdWVyeUFsbCxcbiAgICBzZWFyY2gsXG4gICAgZW5jb2RlR2V0UXVlcnksXG4gICAgZGVjb2RlR2V0UXVlcnksXG4gICAgaHR0cFJlcXVlc3QsXG4gICAgZGVmaW5lZCxcbiAgICBkZWZpbmVkSW4sXG4gICAgZXh0ZW5kLFxuICAgIGV4dGVuZFJlY3Vyc2l2ZSxcbiAgICBlYWNoLFxuICAgIGZpbmRPYmplY3QsXG4gICAgZmluZE9iamVjdHMsXG4gICAgZm9ybWF0LFxuICAgIGlzRW1wdHksXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIGxvYWRKU1N5bmMsXG4gICAgbWVyZ2UsXG4gICAgbnVtYmVyMnN0cmluZyxcbiAgICBvbixcbiAgICBwb3NpdGlvbixcbiAgICBwb3NpdGlvbk1vdXNlLFxuICAgIHJhbmRvbSxcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmcsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG4gICAgY29weSxcbiAgICBjbG9uZSxcbiAgICB0b09iamVjdCxcbiAgICBpc0hUTUxTdHJpbmcsXG4gICAgY3JlYXRlQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgZXhpc3RzLFxuICAgIGlzRGVmaW5lZCxcbiAgICBsb2FkQmxvYmZpbGUsXG4gICAgbG9hZEpTT04sXG4gICAgbG9hZFRleHRmaWxlLFxuICAgIHRvSFRNTCxcbiAgICB0b1hNTCxcbiAgICBzdHlsaXplcixcbiAgICB1bmlxQXJyYXksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWM7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGluamVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGF0YSwgYXBwZW5kLCB0bylcbntcbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnYXJyYXknKSkge1xuICAgICAgICBzZWxlY3Rvci5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpbmplY3QoZWxlbSwgZGF0YSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNEZWZpbmVkO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIi8vIGltcG9ydCBET01QYXJzZXIgZnJvbSAnRE9NUGFyc2VyJztcblxuY29uc3QgaXNIVE1MU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCB0cnVlc3QgPSBmYWxzZSkge1xuXG4gICAgaWYgKHRydWVzdCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gISFkaXYuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnRyaW0oKS5zdWJzdHJpbmcoMCwgMSkgPT09ICc8Jztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzSFRNTFN0cmluZztcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiXG5jb25zdCBpc1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XG4iLCJcbmNvbnN0IGxvYWRCbG9iZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxuICAgICAgICAudGhlbihibG9iID0+IG9ubG9hZChibG9iKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCbG9iZmlsZTsiLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRDU1MgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkQ1NTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgbGluay5ocmVmID0gKHNyYy5zdWJzdHIoLTQpID09PSAnLmNzcycpID8gc3JjIDogc3JjICsgJy5jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgbGluay5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgcmV0dXJuIGxpbmtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ1NTO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudCgpO1xuY29uc3QgbG9hZEpTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZEpTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50RWxlbWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgaWQgPSAncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIHNjcmlwdC5zcmMgPSAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2N1bWVudEVsZW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICByZXR1cm4gc2NyaXB0XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTOyIsIlxuY29uc3QgbG9hZEpTT04gPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBvbmxvYWQoanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNPTjsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IGxvYWRUZXh0ZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbih0ZXh0ID0+IG9ubG9hZCh0ZXh0KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUZXh0ZmlsZTsiLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBjb25zdCBkYXRhID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIExFVFRFUl9DT05TT05BTlQsIExFVFRFUl9WT1dFTCwgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNiwgd2l0aE51bWJlcnMgPSBmYWxzZSkge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSB3aXRoTnVtYmVyc1xuICAgICAgICA/IEFCQyArIE5VTUJFUlMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpXG4gICAgICAgIDogQUJDLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBmb3IgKGkgPSBzaXplOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHN0cmluZyArPSBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUh1bWFuaXplU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGNvbnNvbmFudCA9ICBMRVRURVJfQ09OU09OQU5ULnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbCA9ICBMRVRURVJfVk9XRUwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsRmlyc3QgPSAoTWF0aC5yYW5kb20oKSAqIDEwKSA+IDU7XG4gICAgZm9yIChpID0gc2l6ZSAvIDIgKyAxOyBpID4gMDsgaSAtLSkge1xuICAgICAgICBsZXQgczEgPSBjb25zb25hbnRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uc29uYW50Lmxlbmd0aCldO1xuICAgICAgICBsZXQgczIgPSB2b3dlbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2b3dlbC5sZW5ndGgpXTtcbiAgICAgICAgc3RyaW5nICs9IHZvd2VsRmlyc3QgPyBzMSArIHMyIDogczIgKyBzMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzaXplKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHJhbmRvbSBpdGVtIGZyb20gYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tSXRlbSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyW3JhbmRvbSgwLCBhcnIubGVuZ3RoLTEpXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tO1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uICh0bykge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBsb2MuaHJlZiA9IHRvIHx8IGRvYy5ocmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkaXJlY3Q7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuLyoqXG4gKiBzZWFyY2goICd1bCA+IGxpJywgICdkYXRhLWxpbmsnLCBOb2RlRWxlbWVudCk7XG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gYXR0clxuICogQHBhcmFtIGZyb21cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuY29uc3Qgc3RyMmZyYWdtZW50ID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVSYW5nZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cmluZyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBpLFxuICAgICAgICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpKTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMmZyYWdtZW50O1xuIiwiaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi9zdHIyZnJhZ21lbnRcIjtcblxuY29uc3Qgc3RyMm5vZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgZnJhZ21lbnQgPSBzdHIyZnJhZ21lbnQoc3RyaW5nKTtcblxuICAgIHN3aXRjaCAoZnJhZ21lbnQuY2hpbGRFbGVtZW50Q291bnQpIHtcbiAgICAgICAgY2FzZSAwOiBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmVzdWx0ID0gZnJhZ21lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICByZXN1bHQgPSBjb250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIybm9kZTtcbiIsIlxuY29uc3Qgc3R5bGl6ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGl6ZXI7XG4iLCIvKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmNvbnN0IHRvSFRNTCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0eXBlID0gJ3RleHQvaHRtbCc7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgdHlwZSk7XG5cbiAgICAgICAgaWYgKHhtbERvYy5kb2N1bWVudEVsZW1lbnQgJiYgeG1sRG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB4bWxEb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9IVE1MO1xuIiwiXG5jb25zdCB0b09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9PYmplY3Q7XG4iLCJcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuY29uc3QgdG9YTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L3htbCc7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgdHlwZSk7XG5cbiAgICAgICAgaWYgKHhtbERvYy5kb2N1bWVudEVsZW1lbnQgJiYgeG1sRG9jLmRvY3VtZW50RWxlbWVudC50YWdOYW1lICE9PSAnaHRtbCcpIHtcbiAgICAgICAgICAgIHJldHVybiB4bWxEb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1hNTDtcbiIsImltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiXG5jb25zdCB1bmlxQXJyYXkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pcUFycmF5O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iXSwic291cmNlUm9vdCI6IiJ9