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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb3ZlQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQmxvYmZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTT04uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZFRleHRmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3R5bGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b0hUTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvWE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdW5pcUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbkZyYW1lIiwicm9vdCIsInJlcXVlc3RJZCIsInN0YXJ0cGFseSIsInBhdXNlZCIsImNhbGxiYWNrIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwic3RlcCIsInRpbWVzdGFtcCIsImNhbGwiLCJjYW5jZWwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsInN0YXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJDbGlwQ2xhc3MiLCJlbGVtZW50IiwicG9zaXRpb24iLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50IiwiQ2xpcCIsImFwcGVuZENoaWxkIiwiTm9kZSIsIm1vdmVUbyIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJwYXJlbnROb2RlIiwieCIsInkiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsInBhcmVudEVsZW1lbnQiLCJjb3B5VG8iLCJvbiIsImNsb25lIiwic3R5bGUiLCJvYmplY3QiLCJpbmplY3QiLCJlbGVtIiwiYXBwZW5kIiwiQ29tcG9uZW50IiwiY29uZmlnIiwibGlzdCIsInJhbmRvbU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcCIsImNyZWF0ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJjb21wb25lbnRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZmluZCIsImNsb25lZCIsInRlbXBsYXRlIiwiY2xvbmVOb2RlIiwiYmVmb3JlIiwiaW5pdGlhbGl6ZWQiLCJtZXRob2RzIiwidmFsdWVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImJpbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJkYXRhIiwicHVzaCIsIm5vZGUiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwicHJvcHMiLCJvdmVycmlkZSIsIktleWJvYXJkRXZlbnRNYW5hZ2VyIiwic3RvcmFnZSIsImJhc2VDYWxsYmFja3NMaXN0IiwiYWRkU3RvcmFnZSIsImJhc2VDYWxsYmFjayIsInR5cGUiLCJrZXlDb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsInNldHVwTGlzdGVuZXJzIiwiYWRkIiwicm0iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWFjaCIsIndpdGhDb25kaXRpb25LZXkiLCJwcmVzcyIsInVwIiwiZG93biIsIkxvYWRlciIsImpzb24iLCJqc29ucyIsImphdmFzY3JpcHQiLCJpbWFnZXMiLCJhdWRpb3MiLCJ2aWRlb3MiLCJ2aWRlbyIsInNyYyIsIm9uZXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJzcmNzIiwib2JqIiwiaXRlbSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwic2NyaXB0cyIsIml0ZXJhdG9yIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInN1YnN0ciIsIm9ubG9hZCIsImUiLCJoZWFkIiwiaW1ncyIsIm5hbWUiLCJpbWciLCJhdWRpbyIsInByZWxvYWQiLCJNYXRyaXgiLCJtMTEiLCJtMTIiLCJtMjEiLCJtMjIiLCJneCIsImd5IiwiTW92ZUNsaXAiLCJjbGlwIiwiRXJyb3IiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsImNsb25lUHJvcGVydHkiLCJQb2ludCIsIlJlY3RhbmdsZSIsIlJveHkiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwiZGVmYXVsdCIsInByb3h5IiwiUHJveHkiLCJnZXQiLCJwcm9wIiwic2V0IiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJmaWxsIiwib2JzZXJ2ZSIsInRvIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsImluZGV4IiwicngiLCJldmVudEN1cnNvciIsIlNjZW5lIiwicHJvcGVydGllcyIsImN1cnJlbnQiLCJzY2VuZXMiLCJjb25zb2xlIiwibG9nIiwiYXR0cnMiLCJnZXRDdXJyZW50U2NlbmUiLCJuZXh0IiwibGVzdCIsImkiLCJydW4iLCJzY2VuZSIsImFwcGx5Iiwic2hvdyIsImNvbnN0cnVjdG9yIiwiU3RlcHNTY2VuZSIsInN0ZXBzIiwiaXRlcmF0aW9uIiwibG9vcCIsInN0ZXBfaXRlcmF0aW9uIiwic3RlcF9zdG9wIiwic3RlcF9jYWxsYmFja19lYWNoIiwic3RlcF9jYWxsYmFja3MiLCJwbGF5Iiwic3RvcCIsImVuZCIsIm1zIiwic2V0VGltZW91dCIsImdvdG8iLCJlYWNoU3RlcHMiLCJjdXJyZW50Q2FsbGJhY2tPYmplY3QiLCJUaW1lciIsInJlcGVhdCIsInRoaXNJbnN0YW5jZSIsInRoaXNJbnN0IiwiaXNOYU4iLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJUcmFuc2Zvcm0iLCJwYXJhbXMiLCJ0cmFuc2Zvcm1fb2JqIiwidHJhbnNmb3JtX2FyciIsInRyYW5zZm9ybSIsInNwbGl0IiwiZmlsdGVyIiwidHJhbnNmb3JtX3N0cmluZyIsInVwZGF0ZSIsImpvaW4iLCJyZXNlYXJjaCIsIm1ldGhvZCIsIm11bHRpcGx5IiwiZXh0IiwibWF0Y2giLCJudW0iLCJwYXJhbSIsInRyaW0iLCJtYXRjaGVkIiwiQW5pbWF0ZSIsIlJBRElBTiIsIkRFR1JFRV9BU19SQURJQU4iLCJERUdSRUVfMzYwX0FTX1JBRElBTiIsIlBJIiwiUkFEX1RPX0RFR1JFRVMiLCJTdGF0aWMiLCJVdGlsIiwiTEVUVEVSX0NPTlNPTkFOVCIsIkxFVFRFUl9WT1dFTCIsIkFCQyIsIk5VTUJFUlMiLCJBTVBFUlNBTkQiLCJhdHRyIiwidHlwZV9lbGVtZW50IiwiYXJndW1lbnRzIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiZnJvbSIsIkRhdGUiLCJSZWdFeHAiLCJGdW5jdGlvbiIsIlN0cmluZyIsIk51bWJlciIsIkJvb2xlYW4iLCJjb3B5IiwiaW5zdGFuY2UiLCJjcmVhdGVBcnJheSIsImFyciIsInIiLCJ1bmRlZmluZWQiLCJ0YWciLCJpbm5lciIsImlzX2F0dHIiLCJpbnNlcnRfaHRtbCIsImluc2VydEFkamFjZW50SFRNTCIsImluc2VydF9jaGlsZCIsImluc2VydCIsImsiLCJjcmVhdGVGcmFnbWVudCIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNzcyIsInNlbGVjdG9yIiwiZWxlbWVudHMiLCJ0eXBlU2VsZWN0b3IiLCJ0eXBlUHJvcGVydGllcyIsInBhcnNlIiwic3RyIiwicDEiLCJwMiIsInBuIiwiaXgiLCJvIiwiaW5kZXhPZiIsImRlY29kZUdldFF1ZXJ5IiwicXVlcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkZWZpbmVkIiwiZGVmaW5lZEluIiwic3RhY2siLCJkb21Mb2FkZWQiLCJkb2MiLCJxdWVyeVNlbGVjdG9yIiwidiIsImEiLCJOb2RlTGlzdCIsImxvb3BzIiwiZ2V0UGFyZW50IiwiZW5jb2RlR2V0UXVlcnkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJleGlzdHMiLCJleHRlbmQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsIl9fIiwicHJvdG90eXBlIiwiZXh0ZW5kUmVjdXJzaXZlIiwicHJvcGVydHkiLCJmaW5kT2JqZWN0IiwiYXR0clZhbHVlIiwidG1wIiwiZmluZE9iamVjdHMiLCJmaW5kcyIsImZvcm1hdCIsInN0cmluZyIsInJlZyIsInJlcGxhY2UiLCJudW1iZXIiLCJnZXREb2N1bWVudCIsImdldExvY2F0aW9uIiwibG9jYXRpb24iLCJnZXRXaW5kb3ciLCJodHRwUmVxdWVzdCIsInNlbmREYXRhIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvcHRpb25zIiwiYWN0aW9uIiwidXJsIiwiaHJlZiIsImhlYWRlcnMiLCJ1c2VFbmNvZGUiLCJ1c2VGb3JtRGF0YSIsImFzeW5jIiwidXNlciIsInBhc3N3b3JkIiwiY29uY2F0ZVN0cmluZyIsIkZvcm1EYXRhIiwiSFRNTEZvcm1FbGVtZW50Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbmxvYWRlbmQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kT3B0aW9ucyIsInNlbmQiLCJzdHIybm9kZSIsInN0cjJmcmFnbWVudCIsIm5vZGUyc3RyIiwicXVlcnlBbGwiLCJzZWFyY2giLCJpc0VtcHR5IiwiaXNOb2RlIiwibG9hZENTUyIsImxvYWRKUyIsImxvYWRKU1N5bmMiLCJtZXJnZSIsIm51bWJlcjJzdHJpbmciLCJwb3NpdGlvbk1vdXNlIiwicmFuZG9tQ29sb3IiLCJyYW5kb21JdGVtIiwicmFuZG9tTnVtYmVyIiwicmFuZG9tU3RyaW5nIiwicmFuZG9tSHVtYW5pemVTdHJpbmciLCJyZWRpcmVjdCIsInR5cGVPZiIsInR5cGVPZlN0cmljdCIsInVyaSIsInRvT2JqZWN0IiwiaXNIVE1MU3RyaW5nIiwiaXNTdHJpbmciLCJpc0RlZmluZWQiLCJsb2FkQmxvYmZpbGUiLCJsb2FkSlNPTiIsImxvYWRUZXh0ZmlsZSIsInRvSFRNTCIsInRvWE1MIiwic3R5bGl6ZXIiLCJ1bmlxQXJyYXkiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsInRydWVzdCIsImRpdiIsImNoaWxkRWxlbWVudENvdW50Iiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsImJsb2IiLCJsaW5rIiwicmVsIiwiZG9jdW1lbnRFbGVtZW50IiwidGV4dCIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29udGFpbmVyIiwiYWJzIiwicG93IiwiYnViYmxlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJyb3VuZCIsInRvcCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIk1vdXNlRXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtaW4iLCJtYXgiLCJmbG9vciIsImxldHRlcnMiLCJjb2xvciIsInNpemUiLCJjZWlsIiwicmVzIiwid2l0aE51bWJlcnMiLCJjb25zb25hbnQiLCJ2b3dlbCIsInZvd2VsRmlyc3QiLCJzMSIsInMyIiwibG9jIiwicXVlcnlFbGVtZW50cyIsImhhc0F0dHJpYnV0ZSIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGVzIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwieG1sRG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRhZ05hbWUiLCJzaW1wbGVUeXBlcyIsInQiLCJzZWxmIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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ZXpGLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmLElBQU1ZLFlBQVksU0FBWkEsU0FBWSxDQUFValAsS0FBVixFQUFpQjRCLEtBQWpCLEVBQXdCbVMsSUFBeEIsRUFBOEI7QUFDNUMsV0FBT0EsS0FBSy9LLE9BQUwsQ0FBYWhKLEtBQWIsTUFBd0I0QixLQUEvQjtBQUNILENBRkQ7O2tCQUllcU4sUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7OztBQUdBLElBQU1YLE1BQU0sYUFBVUEsSUFBVixFQUFlO0FBQ3ZCLFFBQU13RSxNQUFNLDRCQUFaO0FBQ0F4RSxXQUFNQSxRQUFPd0UsSUFBSWtCLFFBQWpCO0FBQ0ExRixXQUFNQSxLQUFJbkQsT0FBSixDQUFZLE9BQVosRUFBcUIsR0FBckIsQ0FBTjtBQUNBLFdBQU9tRCxLQUFJclQsTUFBSixHQUFhLENBQWIsSUFBa0JxVCxLQUFJOVAsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLE1BQW9CLEdBQXRDLEdBQTRDLE1BQU04UCxJQUFsRCxHQUF3REEsSUFBL0Q7QUFDSCxDQUxEOztrQkFPZUEsRyIsImZpbGUiOiJhbmltYXRlLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXG4vKlxuY29uc3QgYW5pbWF0aW9uID0gQW5pbWF0aW9uRnJhbWUoKTtcbnBhdXNlKCk7XG5zdGFydChmdW5jdGlvbihwcm9ncmVzcyl7XG4gICAgaWYgKE1hdGgucm91bmQocHJvZ3Jlc3MpICUgMTAwMCA9PT0gMCkge1xuICAgICAgICAvLyBkbyBzb21ldGhpbmdcbiAgICB9XG59KTtcbmNhbmNlbCgpO1xuKi9cbi8qKlxuICpcbiAqIEByZXR1cm5zIHt7ZHVyYXRpb246IG51bWJlciwgc3RhcnRwYWx5OiBudW1iZXIsIHBhdXNlZDogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgcmVxdWVzdElkOiBudW1iZXIsIGNhbGxiYWNrOiBudW1iZXIsIHByb2dyZXNzOiBudW1iZXJ9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICByZXF1ZXN0SWQ6IDAsXG4gICAgICAgIHN0YXJ0cGFseTogMCxcbiAgICAgICAgcGF1c2VkOiBmYWxzZSxcbiAgICAgICAgY2FsbGJhY2s6IDAsXG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgcHJvZ3Jlc3M6IDAsXG4gICAgfTtcblxuICAgIHJvb3Quc3RlcCA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICAgICAgaWYgKCFyb290LnN0YXJ0cGFseSkgcm9vdC5zdGFydHBhbHkgPSB0aW1lc3RhbXA7XG4gICAgICAgIHJvb3QucHJvZ3Jlc3MgPSB0aW1lc3RhbXAgLSByb290LnN0YXJ0cGFseTtcblxuICAgICAgICBpZiAocm9vdC5jYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjay5jYWxsKHJvb3QsIHJvb3QucHJvZ3Jlc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvb3QuZHVyYXRpb24gJiYgcm9vdC5kdXJhdGlvbiA+IHJvb3QucHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJvb3QuY2FuY2VsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIGlmIChyb290LnBhdXNlZCkge1xuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcm9vdC5wYXVzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdC5wYXVzZWQgPSAhcm9vdC5wYXVzZWQ7XG4gICAgfTtcblxuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3QucmVxdWVzdElkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgIH07XG5cbiAgICByb290LmNhbmNlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJvb3QucmVxdWVzdElkKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25GcmFtZTtcbiIsImltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuXG5leHBvcnQgY2xhc3MgQ2xpcENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbihlbGVtZW50KTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gcG9zaXRpb24uZWxlbWVudDtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKCk7XG4gICAgfVxuXG4gICAgbW92ZVRvKHBhcmVudCkge1xuICAgICAgICBpZiAocGFyZW50IGluc3RhbmNlb2YgQ2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvcHlUbyhwYXJlbnQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gY29weSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLm1vdmVUbyhwYXJlbnQpO1xuICAgIH1cblxuICAgIG9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKVxuICAgIH1cblxuICAgIGNsb25lICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH1cblxuICAgIHNldFByb3BlcnRpZXMoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucG9zaXRpb24pLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNba2V5XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMucG9zaXRpb25ba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gcG9zaXRpb24odGhpcy5lbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy54IC0gcGFyZW50Lng7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLnkgLSBwYXJlbnQueTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpcCcsICh0aGlzLmVsZW1lbnQuaWQgfHwgJ2NsaXAnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqXG4gKiBAcGFyYW0gZWxlbWVudFxuICogQHJldHVybnMgeyBib3R0b20sIGVsZW1lbnQsIGhlaWdodCwgbGVmdCwgcmlnaHQsIHRvcCwgd2lkdGgsIHgsIHkgfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENsaXAgPSBmdW5jdGlvbiAoZWxlbWVudClcbntcbiAgICBjb25zdCByb290ID0gcG9zaXRpb24oZWxlbWVudCk7XG5cbiAgICBpZiAocm9vdC5lbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBwb3NpdGlvbihlbGVtZW50LnBhcmVudE5vZGUpO1xuICAgICAgICByb290LnggPSByb290LnggLSBwYXJlbnQueDtcbiAgICAgICAgcm9vdC55ID0gcm9vdC55IC0gcGFyZW50Lnk7XG4gICAgICAgIHJvb3QuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2xpcCcsIHJvb3QuZWxlbWVudC5pZCB8fCAnY2xpcCcpO1xuICAgIH1cblxuICAgIHJvb3QubW92ZVRvID0gZnVuY3Rpb24gKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBDbGlwKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5lbGVtZW50LmFwcGVuZENoaWxkKHJvb3QuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudEVsZW1lbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuY29weVRvID0gZnVuY3Rpb24gKHBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcm9vdC5lbGVtZW50ID0gY29weShyb290LmVsZW1lbnQpO1xuICAgICAgICByb290Lm1vdmVUbyhwYXJlbnRFbGVtZW50KTtcbiAgICB9O1xuXG4gICAgcm9vdC5vbiA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgcm9vdC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKVxuICAgIH07XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUodGhpcyk7XG4gICAgfTtcblxuICAgIHJvb3Quc3R5bGUgPSBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICB9O1xuXG4gICAgcm9vdC5pbmplY3QgPSBmdW5jdGlvbiAoZWxlbSwgYXBwZW5kID0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gcXVlcnkoZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH07XG5cbiAgICByb290LmFwcGVuZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJvb3QuaW5qZWN0KGVsZW0sIHRydWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaXA7XG4iLCJpbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQge3JhbmRvbUh1bWFuaXplU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcblxuXG4vKipcbiAqXG5jb25maWc6XG4gICAgaWQ6ICdpZCcsXG4gICAgcHJvcHM6IHt9LFxuICAgIHRlbXBsYXRlOiBgYCxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHt9LFxuICAgIGNvbXBsZXRlICgpIHt9LFxuICAgIG1ldGhvZHM6IHt9LFxuICAgIG5vZGU6IHt9LFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcblxuQ29tcG9uZW50KHtcbiAgICBpZDogJ0V4dGVybmFsVGVtcGxhdGVDb21wb25lbnQnLFxuICAgIHByb3BzOiBbJ3RpdGxlJ10sXG4gICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZScsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGl0ZXJhdG9yOiAwLFxuICAgIH0sXG4gICAgY29tcGxldGUgKGFwcCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlWyd0aXRsZSddKVxuICAgICAgICB0aGlzLm5vZGVbJ3RpdGxlJ10udGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhZGQgKGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pdGVyYXRvci50ZXh0Q29udGVudCA9ICsrIHRoaXMuZGF0YS5pdGVyYXRvciA7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gLS0gdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICB9XG59KTtcblxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZ2V0IHByb3BlcnR5IGJ5IGlkIGtleXdvcmRcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjb25maWcuaWQpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21OYW1lID0gIHJhbmRvbUh1bWFuaXplU3RyaW5nKDYpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByYW5kb21OYW1lID0gcmFuZG9tTmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHJhbmRvbU5hbWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29uZmlnLmlkID0gJ0NvbXBvbmVudCcgKyByYW5kb21OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWcuaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcCA9IENvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY29tcG9uZW50c1tpZF0gPyBjb21wLmNvbXBvbmVudHNbaWRdIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudENoaWxkcmVuID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jaGlsZHJlbi5maW5kKChjb21wb25lbnQpID0+IGNvbXBvbmVudC5pZCA9PT0gaWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY2xvbmUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZCA9IGNsb25lKHRoaXMpO1xuICAgICAgICAgICAgY2xvbmVkLnRlbXBsYXRlID0gY2xvbmVkLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmJlZm9yZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmJlZm9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLnRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYoaXNIVE1MU3RyaW5nKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHN0cjJub2RlKGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gcXVlcnkoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5tZXRob2RzICYmIE9iamVjdC52YWx1ZXMoY29tcC5tZXRob2RzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAubWV0aG9kcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLm1ldGhvZHNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wLm1ldGhvZHNba2V5XSA9IGNvbXAubWV0aG9kc1trZXldLmJpbmQoY29tcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmRhdGEgJiYgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmRhdGFba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmRhdGFba2V5XSA9IGNvbXAuZGF0YVtrZXldLmJpbmQoY29tcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY29tcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAuZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuY29tcG9uZW50cyAmJiBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIGNvbXAuY29tcG9uZW50c1trZXldICYmIGNvbXAuY29tcG9uZW50c1trZXldLmhhc093blByb3BlcnR5KCdrZXknKSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBvbmVudHNba2V5XS5wYXJlbnQgPSBjb21wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wLmNoaWxkcmVuLnB1c2goY29tcC5jb21wb25lbnRzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNOb2RlKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICBjb21wLm5vZGUgPSBzZWFyY2goJ1tkYXRhLW5vZGVdJywgJ2RhdGEtbm9kZScsIGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgY29tcC5vbiA9IHNlYXJjaCgnW2RhdGEtb25dJywgJ2RhdGEtb24nLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZS5jYWxsKGNvbXAsIGNvbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50Lmxpc3RbY29tcC5pZF0gPSBjb21wO1xuICAgICAgICByZXR1cm4gY29tcDtcbiAgICB9XG59O1xuQ29tcG9uZW50Lmxpc3QgPSB7fTtcbkNvbXBvbmVudC5jcmVhdGUgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgcmV0dXJuIG1lcmdlKCB7XG4gICAgICAgIGlkOiBudWxsLFxuICAgICAgICBwcm9wczoge30sXG4gICAgICAgIHRlbXBsYXRlOiBmYWxzZSxcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxuICAgICAgICBpbml0OiAoKSA9PiB7fSxcbiAgICAgICAgY29tcGxldGU6ICgpID0+IHt9LFxuICAgICAgICBtZXRob2RzOiB7fSxcbiAgICAgICAgbm9kZToge30sXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgcGFyZW50OiB7fSxcbiAgICB9LCBjb25maWcpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCIvKlxuY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZEV2ZW50TWFuYWdlcigpO1xua2V5Ym9hcmQuZWFjaChFVkVOVF9OQU1FLCBmdW5jdGlvbiAoZXZlbnQpIHt9KVxua2V5Ym9hcmQud2l0aENvbmRpdGlvbktleVxua2V5Ym9hcmQucHJlc3NcbmtleWJvYXJkLnVwXG5rZXlib2FyZC5kb3duXG4qL1xuY29uc3QgS2V5Ym9hcmRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB7fTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGFkZFN0b3JhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XSkgc3RvcmFnZVtldmVudF0gPSB7fTtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XVtrZXldKSBzdG9yYWdlW2V2ZW50XVtrZXldID0gW107XG4gICAgICAgIHN0b3JhZ2VbZXZlbnRdW2tleV0ucHVzaChjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGJhc2VDYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2UpLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZVt0eXBlXSkubWFwKChrZXlDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0gKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlW3R5cGVdW2tleUNvZGVdLm1hcCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSB0eXBlICYmIHBhcnNlSW50KGtleUNvZGUpID09PSBldmVudC5rZXlDb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZXZlbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlYWNoQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGVhY2hDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzICgpIHtcbiAgICAgICAgY29uc3QgYWRkID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJtID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJtKCk7XG4gICAgICAgIGFkZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVhY2goZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlYWNoQ2FsbGJhY2soZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb25kaXRpb25LZXkoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGFkZFN0b3JhZ2UoZXZlbnQsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc3Moa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlwcmVzcycsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICB1cChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXVwJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlkb3duJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRFdmVudE1hbmFnZXI7XG4iLCJcblxuLyoqXG4gKiBMb2FkZXIuYXVkaW9zOiDGkiAoc3JjcywgY2FsbGJhY2spXG4gKiBMb2FkZXIuaW1hZ2VzOiDGkiAoaW1ncywgY2FsbGJhY2spXG4gKiBMb2FkZXIuamF2YXNjcmlwdDogxpIgKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gKiBMb2FkZXIuanNvbjogxpIgKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gKiBAcHJvcGVydHlcbiAqIEBtZXRob2QganNvblxuICogQG1ldGhvZCBqc29uc1xuICogQG1ldGhvZCBqYXZhc2NyaXB0XG4gKiBAbWV0aG9kIGltYWdlc1xuICogQG1ldGhvZCBhdWRpb3NcbiAqIEByZXR1cm5zIHt7fX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAganNvbjogTG9hZGVyLmpzb24sXG4gICAgICAgIGpzb25zOiBMb2FkZXIuanNvbnMsXG4gICAgICAgIGphdmFzY3JpcHQ6IExvYWRlci5qYXZhc2NyaXB0LFxuICAgICAgICBpbWFnZXM6IExvYWRlci5pbWFnZXMsXG4gICAgICAgIGF1ZGlvczogTG9hZGVyLmF1ZGlvcyxcbiAgICAgICAgdmlkZW9zOiBMb2FkZXIudmlkZW8sXG4gICAgfTtcbn07XG5cbi8qKlxuICogLmpzb24oJy91cmwvZGF0YWZpbGUuanNvbicsIChqc29uKSA9PiB7fSwgKGVycm9yKSA9PiB7fSlcbiAqXG4gKiBAcGFyYW0gc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBvbmVycm9yXG4gKi9cbkxvYWRlci5qc29uID0gZnVuY3Rpb24gKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBjYWxsYmFjayhqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIG9uZXJyb3JcbiAqL1xuTG9hZGVyLmpzb25zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKVxue1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY3MpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgb2JqW01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgTG9hZGVyLmpzb24oc3JjLCAoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNba2V5XSA9IGpzb247XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb25lcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHNjcmlwdCBlbGVtZW50IHdpdGggamF2YXNjcmlwdCBzb3VyY2VcbiAqXG4gKiAuamF2YXNjcmlwdCAoIHtcbiAqICAgICAgbXlfc2NyaXB0MTogJy9wYXRoL3RvL215X3NjcmlwdDEnLFxuICogICAgICBteV9zY3JpcHQyOiAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5qYXZhc2NyaXB0ICggW1xuICogICAgICAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAqICAgIF0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBMb2FkZXIuamF2YXNjcmlwdFxuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbkxvYWRlci5qYXZhc2NyaXB0ID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKVxue1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY3MpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgb2JqW01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBsZXQgc2NyaXB0O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gKHNyY3Nba2V5XS5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmNzW2tleV0gOiBzcmNzW2tleV0gKyAnLmpzJztcbiAgICAgICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgc2NyaXB0LmlkID0ga2V5O1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIExvYWQgYW4gaW1hZ2VzXG4gKlxuICogLmltYWdlcyAoIHtcbiAqICAgICAgaW1nMTogJy9wYXRoL3RvL2ltZzEnLFxuICogICAgICBpbWcyOiAnL3BhdGgvdG8vaW1nMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuaW1hZ2VzXG4gKiBAcGFyYW0gaW1nc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci5pbWFnZXMgPSBmdW5jdGlvbiAoaW1ncywgY2FsbGJhY2spIHtcbiAgICBpZiAoaW1ncyAmJiB0eXBlb2YgaW1ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoaW1ncykubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBpbWdzKSB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWdzW25hbWVdO1xuICAgICAgICAgICAgaW1nLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzW3RoaXMubmFtZV0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIExvYWQgYW4gYXVkaW8gZmlsZXNcbiAqXG4gKiAuYXVkaW9zICgge1xuICogICAgICBhdWRpbzE6ICcvcGF0aC90by9hdWRpbzEnLFxuICogICAgICBhdWRpbzI6ICcvcGF0aC90by9hdWRpbzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmF1ZGlvc1xuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIuYXVkaW9zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYXVkaW9zID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICAgICAgICAgYXVkaW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgIGF1ZGlvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgYXVkaW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgIGF1ZGlvc1tuYW1lXSA9IGF1ZGlvO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgYXVkaW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogTG9hZCBhbiB2aWRlbyBmaWxlc1xuICpcbiAqIC52aWRlb3MgKCB7XG4gKiAgICAgIHZpZGVvMTogJy9wYXRoL3RvL3ZpZGVvMScsXG4gKiAgICAgIHZpZGVvMjogJy9wYXRoL3RvL3ZpZGVvMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIudmlkZW9zXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci52aWRlb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCB2aWRlb3MgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzcmNzKSB7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICB2aWRlby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgdmlkZW8ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB2aWRlby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmlkZW9zW25hbWVdID0gdmlkZW87XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCB2aWRlb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCIvKipcblxuYSAobTExKSBIb3Jpem9udGFsIHNjYWxpbmcuXG5iIChtMTIpIEhvcml6b250YWwgc2tld2luZy5cbmMgKG0yMSkgVmVydGljYWwgc2tld2luZy5cbmQgKG0yMikgVmVydGljYWwgc2NhbGluZy5cbmUgKGR4KSBIb3Jpem9udGFsIG1vdmluZy5cbmYgKGR5KSBWZXJ0aWNhbCBtb3ZpbmcuXG4qL1xuY29uc3QgTWF0cml4ID0gZnVuY3Rpb24gKG0xMSwgbTEyLCBtMjEsIG0yMiwgZ3gsIGd5KSB7XG4gICAgcmV0dXJuIHttMTEsIG0xMiwgbTIxLCBtMjIsIGd4LCBneX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXg7XG4iLCJpbXBvcnQgQ2xpcCBmcm9tIFwiLi9DbGlwXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuXG4vKlxucmV0dXJuIE1vdmVDbGlwKHtcbiAgICBlbGVtZW50OiBgPGRpdiBjbGFzcz1cInNwcml0ZSByZWN0XCI+PC9kaXY+YCxcbiAgICBwYXJlbnQ6IEFwcENsaXAsXG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gW1xuICAgICAgICAgICAgJ3JvdGF0ZSgnICsgNDUgKydkZWcpJyxcbiAgICAgICAgICAgICdzY2FsZSgwLjUsIDAuNSknLFxuICAgICAgICBdO1xuICAgIH0sXG59KVxuKi9cbmNvbnN0IE1vdmVDbGlwID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBjb25zdCB7IGVsZW1lbnQgfSA9IGNvbmZpZztcbiAgICBjb25zdCBjbGlwID0gQ2xpcChlbGVtZW50KTtcblxuICAgIGlmKCFjbGlwLmVsZW1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9wZXJ0eSBbZWxlbWVudF0gbm90IGZvbmQhJyk7XG4gICAgfVxuXG4gICAgY2xpcC5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1taXZlY2xpcCcsIGNvbmZpZy5pZCB8fCAnbWl2ZWNsaXAnKTtcblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIC8vIGNsaXA6IGNsaXAsXG4gICAgICAgIGVsZW1lbnQ6IGNsaXAuZWxlbWVudCxcbiAgICAgICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBzZXQgeCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHkodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5Ub3AgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLnkgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHdpZHRoKHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUud2lkdGggPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLndpZHRoID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB2YWx1ZSArICdweCc7XG4gICAgICAgICAgICBjbGlwLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgeCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC55XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB3aWR0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLndpZHRoXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoZWlnaHQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC5oZWlnaHRcbiAgICAgICAgfSxcblxuICAgICAgICBzdHlsZShvYmplY3QpIHtcbiAgICAgICAgICAgIHN0eWxpemVyKHJvb3QuZWxlbWVudCwgb2JqZWN0KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZGVsZXRlIGNvbmZpZy5lbGVtZW50O1xuICAgIGRlbGV0ZSBjb25maWcuaW5pdGlhbGl6ZWQ7XG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByb290W2tleV0gPSBjb25maWdba2V5XVxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiByb290LmluaXQgPT09ICdmdW5jdGlvbicgJiYgIXJvb3QuaW5pdGlhbGl6ZWQpe1xuICAgICAgICByb290LmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgcm9vdC5pbml0LmNhbGwocm9vdCk7XG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uIChhcHBlbmQgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjbG9uZVByb3BlcnR5ID0gdG9PYmplY3Qocm9vdCk7XG4gICAgICAgIGNsb25lUHJvcGVydHkuZWxlbWVudCA9IHJvb3QuZWxlbWVudC5jbG9uZU5vZGUocm9vdCk7XG4gICAgICAgIGlmIChhcHBlbmQpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGNsb25lUHJvcGVydHkuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1vdmVDbGlwKGNsb25lUHJvcGVydHkpO1xuICAgIH07XG5cbiAgICByb290LmluamVjdCA9IGZ1bmN0aW9uIChlbGVtLCBhcHBlbmQgPSB0cnVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmIChpc0hUTUxTdHJpbmcoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBxdWVyeShlbGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LmVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbSk7XG4gICAgfTtcblxuICAgIHJvb3QuYXBwZW5kID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcm9vdC5pbmplY3QoZWxlbSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZlQ2xpcDtcbiIsIlxuY29uc3QgUG9pbnQgPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgIHJldHVybiB7eCwgeX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcbiIsIlxuY29uc3QgUmVjdGFuZ2xlID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICByZXR1cm4ge3gsIHksIHdpZHRoLCBoZWlnaHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVjdGFuZ2xlO1xuIiwiLypcbmNvbnN0IFJ4U3RhdGUgPSBSb3h5KHtcbiAgICB0aXRsZTogJycsXG4gICAgYm9keTogJycsXG59KTtcblxuUnhTdGF0ZS5ldmVudCgoa2V5LCB2YWx1ZXMpPT57XG4gICAgaWYgKGtleSA9PT0gJycpIHt9XG4gICAgaW5qZWN0KCcjJyArIGtleSwgdmFsdWVzKTtcbn0pO1xuXG5SeFN0YXRlLnByb3h5LnRpdGxlID0gJ0ZpcnN0IHZhbHVlJztcblJ4U3RhdGUucHJveHkuYm9keSA9ICdUZXN0IGJvZHkgdGV4dCc7XG5cblRpbWVyLnRpbWVvdXQoKCkgPT4ge1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ3RpdGxlJywgJ0hlbGxvIGZyaWVuZCcpO1xuICAgIFJ4U3RhdGUuZGlzcGF0Y2goJ2JvZHknLCAnRG8geW91IGhhcHB5IG5vdz8nKTtcbn0sIDIwMDApO1xuXG4qL1xuXG4vKipcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBzZXQoKj0sICo9KTogKiwgZ2V0KCopOiAqLCBhY3Rpb24oKj0sICo9KTogKiwgZmlsbCgqPSwgKj0pOiAqfXxSb3h5fHt9fG51bGx8Ym9vbGVhbn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcblxuY29uc3QgUm94eSA9IGZ1bmN0aW9uIChwYXlsb2FkKVxue1xuICAgIGNvbnN0IHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyA9IHtcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkocGF5bG9hZCwge1xuICAgICAgICBnZXQob2JqLCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiBvYmogPyBvYmpbcHJvcF0gOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBzZXQob2JqLCBwcm9wLCB2YWx1ZSkge1xuXG4gICAgICAgICAgICBvYmpbcHJvcF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSAmJiB0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzW3Byb3BdLmNhbGwoe30sIHByb3AsIHZhbHVlLCBjb3B5KHByb3h5KSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdC5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogb2xkZXIgbmFtZTogc2VlfHNldD9cbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gcGF5bG9hZFxuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoKGtleSwgcGF5bG9hZCkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhcGF5bG9hZCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGtleS5jYWxsKHt9LCBwcm94eSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxsKHJlc3VsdClcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGF5bG9hZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcGF5bG9hZC5jYWxsKHt9LCBwcm94eVtrZXldKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcmVzdWx0O1xuXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm94eVtrZXldID0gcGF5bG9hZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjdGlvbigpXG4gICAgICAgICAqIEBkZXByZWNhdGVkXG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAgICAgKi9cbiAgICAgICAgZXZlbnQoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub2JzZXJ2ZShrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRXZlbnQgY2hhbmdlIHByb3BlcnRpZXMgb2Ygc291cmNlIG9iamVjdFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmUoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT09IFwiZnVuY3Rpb25cIiAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MuZGVmYXVsdCA9IGtleTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1trZXldID0gdHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgPyBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXkgPyBwcm94eVtrZXldIDogY29weShwcm94eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbChwYXlsb2FkLCB0bykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcHJveHlbdG9dKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHlbdG9dID0ge307XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXVtrZXldID0gcGF5bG9hZFtrZXldXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgcHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UHJveHkoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJveHk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUm94eTtcbiIsImltcG9ydCBSb3h5IGZyb20gXCIuL1JveHlcIjtcblxuLyoqXG4gKiBjb25zdCByeCA9IFJveHlMaXN0ZW5lciAoe1xuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiAgICAgZXZlbnROYW1lICgpIHsgLy8gaGFuZGxlciAuLi4gfSxcbiAqIH0pXG4gKiByeC5zZXQoKTtcbiAqIHJ4LmRpc3BhdGNoKCk7XG4gKlxuICogcnguYWN0aW9uKCk7XG4gKlxuICogQHBhcmFtIHBheWxvYWRcbiAqIEByZXR1cm5zIHt7cHJveHk6ICosIGRpc3BhdGNoKCo9LCAqPSk6IFJveHksIGdldCgqKTogKiwgZXZlbnQoKj0sICo9KTogdGhpcywgZmlsbCgqPSwgKj0pOiB0aGlzfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBSb3h5TGlzdGVuZXIgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuXG4gICAgY29uc3QgYWN0aW9ucyA9IHtcbiAgICAgICAgX19hY3Rpb25fXygpIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3Rpb25zTmFtZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuICAgICAgICBhY3Rpb25zW2V2ZW50TmFtZV0gPSBwYXlsb2FkW2V2ZW50TmFtZV07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkW2V2ZW50TmFtZV0gPT09ICdmdW5jdGlvbicgJiYgZXZlbnROYW1lICE9PSBhY3Rpb25zLl9fYWN0aW9uX18ubmFtZSkge1xuICAgICAgICAgICAgYWN0aW9uc05hbWVzW2V2ZW50TmFtZV0gPSAnJztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgcnggPSBSb3h5KGFjdGlvbnNOYW1lcyk7XG4gICAgLy9cbiAgICByeC5hY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uc05hbWVzXG4gICAgfTtcblxuICAgIHJ4LmV2ZW50KChldmVudEN1cnNvciwgdmFsdWVzKSA9PiB7XG4gICAgICAgIGFjdGlvbnMuX19hY3Rpb25fXy5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLm1hcChmdW5jdGlvbiAoZXZlbnROYW1lLCBpbmRleCkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnRDdXJzb3IgPT09IGV2ZW50TmFtZSAmJiB0eXBlb2YgYWN0aW9uc1tldmVudE5hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdLmNhbGwoYWN0aW9ucywgZXZlbnRDdXJzb3IsIHZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcng7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb3h5TGlzdGVuZXI7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG5cbi8qXG5jb25zdCBzY2VuZSA9IFNjZW5lKCk7XG5zY2VuZS5hZGQoJ2VkaXRvcicsIGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG4gICAgY29uc29sZS5sb2coYSwgYiwgYywgZCk7XG59KVxuc2NlbmUuYWRkKCdvdXRwdXQnLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLnJ1bignb3V0cHV0JywgWydoZWxsbycsIDIwMCwge31dKTtcbiovXG4vKipcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllc1xuICogQHJldHVybnMge3tjdXJyZW50OiBzdHJpbmcsIHNjZW5lczoge2RlZmF1bHQ6IHtjYWxsYmFjaygpOiB2b2lkLCBhdHRyczogW119fSwgZWxlbWVudDogbnVsbH19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU2NlbmUgPSBmdW5jdGlvbiAocHJvcGVydGllcykge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGN1cnJlbnQ6ICdkZWZhdWx0JyxcbiAgICAgICAgZWxlbWVudDogbnVsbCxcbiAgICAgICAgc2NlbmVzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKSB7Y29uc29sZS5sb2coJ1tEZWZhdWx0IFNjZW5lXScpfSxcbiAgICAgICAgICAgICAgICBhdHRyczogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJvb3QuYWRkID0gZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBhdHRycyA9IFtdKSB7XG4gICAgICAgIHJvb3Quc2NlbmVzW25hbWVdID0ge1xuICAgICAgICAgICAgY2FsbGJhY2ssXG4gICAgICAgICAgICBhdHRyc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJvb3QuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW25hbWVdO1xuICAgIH1cblxuICAgIHJvb3QuZ2V0Q3VycmVudFNjZW5lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zY2VuZXNbcm9vdC5jdXJyZW50XTtcbiAgICB9XG5cbiAgICByb290Lm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBsZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyb290LnNjZW5lcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGtleXNbaV0gPT09IHJvb3QuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5c1tpICsgMV0gIT09IFwidW5kZWZpbmVkXCIpXG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzW2kgKyAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0ga2V5cy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlc3QgPSBrZXlzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb290LnJ1bihsZXN0KTtcbiAgICB9O1xuXG4gICAgcm9vdC5ydW4gPSBmdW5jdGlvbiAoa2V5LCBhdHRycykge1xuICAgICAgICByb290LmN1cnJlbnQgPSBrZXkgfHwgJ2RlZmF1bHQnO1xuICAgICAgICBjb25zdCBzY2VuZSA9IHJvb3QuZ2V0Q3VycmVudFNjZW5lKCk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gc2NlbmUuY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICAgICAgICBhdHRycyA9IEFycmF5LmlzQXJyYXkoYXR0cnMpID8gYXR0cnMgOiBbYXR0cnNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseShjYWxsYmFjaywgYXR0cnMgPyBhdHRycyA6IHNjZW5lLmF0dHJzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnNob3cgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290LnJ1bihrZXksIGF0dHJzKSB9O1xuICAgIC8qKiBAZGVwcmVjYXRlZCAqL1xuICAgIHJvb3Quc3RhcnQgPSBmdW5jdGlvbiAoa2V5LCBhdHRycykgeyByb290LnJ1bihrZXksIGF0dHJzKSB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLnNjZW5lcyAmJiBwcm9wZXJ0aWVzLnNjZW5lcy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMuc2NlbmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJvb3QuYWRkKGtleSwgcHJvcGVydGllcy5zY2VuZXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge2FueX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGVwc1NjZW5lID0gZnVuY3Rpb24gKGNvbmZpZyA9IHtzdGVwczogW119KSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgICBsb29wOiBjb25maWcubG9vcCB8fCBmYWxzZSxcbiAgICAgICAgc3RlcF9pdGVyYXRpb246IDAsXG4gICAgICAgIHN0ZXBfc3RvcDogZmFsc2UsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tfZWFjaDogbnVsbCxcbiAgICAgICAgc3RlcF9jYWxsYmFja3M6IGNvbmZpZy5zdGVwcyB8fCB7fSxcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICByb290LnBsYXkoKTtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBkZWxheShtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjay5jYWxsKHJvb3QpOyB9LCBtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdG8obmFtZSkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrcy5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlYWNoU3RlcHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfc3RvcCkgcmV0dXJuIHJvb3Q7XG5cbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfaXRlcmF0aW9uID4gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290Lmxvb3ApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tPYmplY3QgPSByb290LnN0ZXBfY2FsbGJhY2tzW3Jvb3Quc3RlcF9pdGVyYXRpb25dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFja09iamVjdC5jYWxsYmFjay5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICByb290Lml0ZXJhdGlvbisrXG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uKytcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzU2NlbmU7XG4iLCJcbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbn07XG5cblxuVGltZXIuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJpbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuXG5jb25zdCBUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoZWxlbWVudCwgcGFyYW1zKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHRyYW5zZm9ybV9vYmo6IHt9LFxuICAgICAgICB0cmFuc2Zvcm1fYXJyOiBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApLFxuICAgICAgICB0cmFuc2Zvcm1fc3RyaW5nOiAnJyxcblxuICAgICAgICB1cGRhdGUoKXtcbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX3N0cmluZyA9ICcnO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb290LnRyYW5zZm9ybV9vYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX3N0cmluZyArPSBrZXkgKyAnKCcgKyByb290LnRyYW5zZm9ybV9vYmpba2V5XS5qb2luKCcsICcpICsgJykgJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gIHJvb3QudHJhbnNmb3JtX3N0cmluZztcbiAgICAgICAgICAgIHJvb3QucmVzZWFyY2goKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2QobWV0aG9kLCBwcm9wZXJ0aWVzLCBtdWx0aXBseSA9IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiBbcHJvcGVydGllc107XG5cbiAgICAgICAgICAgICAgICBpZiAobXVsdGlwbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHQgPSB2YWx1ZS5tYXRjaCgvW2Etel0rL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludCh2YWx1ZSkgKyBwYXJzZUludChyb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaV0gPSBudW0gKyBleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IHZhbHVlICsgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF1baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHMgcGFyYW1ldGVycyBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXNlYXJjaCgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyID0gZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKTtcblxuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0udHJpbSgpICArICcpJztcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkID0gcGFyYW0ubWF0Y2goL1tcXHdcXC5cXC1dKy9pZyk7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21hdGNoZWRbMF1dID0gbWF0Y2hlZC5zbGljZSgxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LnJlc2VhcmNoKCk7XG5cbiAgICBpZiAocGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByb290Lm1ldGhvZChrZXksIHBhcmFtc1trZXldKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJvb3QudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvb3Q7XG59XG5cblRyYW5zZm9ybS5lbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHZhbHVlKXtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBbXTtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgocHJvcCkgPT4geyBwcm9wcy5wdXNoKHByb3ApIH0pO1xuICAgICAgICBzdHlsaXplcihlbGVtZW50LCB7dHJhbnNmb3JtOiBwcm9wcy5qb2luKCcgJyl9KTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuL3N0YXRpYy9nZXRXaW5kb3dcIjtcblxuaW1wb3J0IENsaXAgZnJvbSBcIi4vY29tcG9uZW50cy9DbGlwLmpzXCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQ29tcG9uZW50LmpzXCI7XG5pbXBvcnQgS2V5Ym9hcmRFdmVudE1hbmFnZXIgZnJvbSBcIi4vY29tcG9uZW50cy9LZXlib2FyZEV2ZW50TWFuYWdlci5qc1wiO1xuaW1wb3J0IE1vdmVDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvTW92ZUNsaXAuanNcIjtcbmltcG9ydCBTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1NjZW5lLmpzXCI7XG5pbXBvcnQgU3RlcHNTY2VuZSBmcm9tIFwiLi9jb21wb25lbnRzL1N0ZXBzU2NlbmUuanNcIjtcbmltcG9ydCBUaW1lciBmcm9tIFwiLi9jb21wb25lbnRzL1RpbWVyLmpzXCI7XG5pbXBvcnQgUm94eUxpc3RlbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvUm94eUxpc3RlbmVyLmpzXCI7XG5pbXBvcnQgUm94eSBmcm9tIFwiLi9jb21wb25lbnRzL1JveHkuanNcIjtcbmltcG9ydCBTdGF0aWMgZnJvbSAnLi9zdGF0aWMnO1xuaW1wb3J0IEFuaW1hdGlvbkZyYW1lIGZyb20gXCIuL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWVcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Mb2FkZXJcIjtcbmltcG9ydCBNYXRyaXggZnJvbSBcIi4vY29tcG9uZW50cy9NYXRyaXhcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9jb21wb25lbnRzL1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XG5cbmNvbnN0IEFuaW1hdGUgPSB7XG4gICAgQ2xpcCxcbiAgICBDb21wb25lbnQsXG4gICAgS2V5Ym9hcmRFdmVudE1hbmFnZXIsXG4gICAgTW92ZUNsaXAsXG4gICAgU2NlbmUsXG4gICAgU3RlcHNTY2VuZSxcbiAgICBUaW1lcixcbiAgICBSb3h5TGlzdGVuZXIsXG4gICAgUm94eSxcbiAgICBBbmltYXRpb25GcmFtZSxcbiAgICBMb2FkZXIsXG4gICAgTWF0cml4LFxuICAgIFBvaW50LFxuICAgIFJlY3RhbmdsZSxcbiAgICBUcmFuc2Zvcm0sXG59O1xuXG5jb25zdCBSQURJQU4gPSAwLjAxNzQ1MzI5MjUxOTk0MzI5NTtcbmNvbnN0IERFR1JFRV9BU19SQURJQU4gPSAwLjAxNzQ1MzI5MjUxOTk0MzI5NTtcbmNvbnN0IERFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFX0FTX1JBRElBTiAqIDM2MDtcbmNvbnN0IFBJID0gMy4xNDE1OTI2NTM1OTtcbmNvbnN0IFJBRF9UT19ERUdSRUVTID0gMy4xNDE1OTI2NTM1OTtcblxuQW5pbWF0ZS5SQURJQU4gPSBSQURJQU47XG5BbmltYXRlLkRFR1JFRV9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOO1xuQW5pbWF0ZS5ERUdSRUVfMzYwX0FTX1JBRElBTiA9IERFR1JFRV8zNjBfQVNfUkFESUFOO1xuQW5pbWF0ZS5QSSA9IFBJO1xuQW5pbWF0ZS5SQURfVE9fREVHUkVFUyA9IFJBRF9UT19ERUdSRUVTO1xuXG5BbmltYXRlLlN0YXRpYyA9XG4gICAgQW5pbWF0ZS5VdGlsID1cbiAgICAgICAgU3RhdGljO1xuXG5pZiAoZ2V0V2luZG93KCkpIHtcbiAgICBnZXRXaW5kb3coKS5BbmltYXRlID0gQW5pbWF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZTtcbiIsIlxuZXhwb3J0IGNvbnN0IExFVFRFUl9DT05TT05BTlQgPSAnQixDLEQsRixHLEgsSixLLEwsTSxOLFAsUSxSLFMsVCxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IExFVFRFUl9WT1dFTCA9ICdBLEUsSSxPLFUsWSc7XG5leHBvcnQgY29uc3QgQUJDID0gJ0EsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSLFMsVCxVLFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTlVNQkVSUyA9ICcwLDEsMiwzLDQsNSw2LDcsOCw5JztcbmV4cG9ydCBjb25zdCBBTVBFUlNBTkQgPSAnJic7XG4iLCJpbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGF0dHIgPSBmdW5jdGlvbiAoZWxlbWVudCwgbmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCB0eXBlX2VsZW1lbnQgPSB0eXBlT2YoZWxlbWVudCk7XG4gICAgaWYgKHR5cGVfZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZWxlbWVudCA9IHF1ZXJ5KGVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBpZiAodHlwZU9mKG5hbWUsICdvYmplY3QnKSkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG5hbWUpXG4gICAgICAgICAgICAgICAgYXR0cihlbGVtZW50LCBrZXksIG5hbWVba2V5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc05vZGUoZWxlbWVudCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICAgICAgZWxzZSBlbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXR0cjtcbiIsIi8qKlxuICpcbiAqIEBwYXJhbSBmcm9tXG4gKiBAcGFyYW0gdG9cbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBjbG9uZShmcm9tLCB0bylcbntcbiAgICBpZiAoZnJvbSA9PT0gbnVsbCB8fCB0eXBlb2YgZnJvbSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgIT09IE9iamVjdCAmJiBmcm9tLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgcmV0dXJuIGZyb207XG4gICAgaWYgKGZyb20uY29uc3RydWN0b3IgPT09IERhdGUgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gUmVnRXhwIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEZ1bmN0aW9uIHx8XG4gICAgICAgIGZyb20uY29uc3RydWN0b3IgPT09IFN0cmluZyB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBOdW1iZXIgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gQm9vbGVhbikge1xuICAgICAgICByZXR1cm4gbmV3IGZyb20uY29uc3RydWN0b3IoZnJvbSk7XG4gICAgfVxuXG4gICAgdG8gPSB0byB8fCBuZXcgZnJvbS5jb25zdHJ1Y3RvcigpO1xuXG4gICAgZm9yIChuYW1lIGluIGZyb20pXG4gICAge1xuICAgICAgICB0b1tuYW1lXSA9IHR5cGVvZiB0b1tuYW1lXSA9PSBcInVuZGVmaW5lZFwiID8gY2xvbmUoZnJvbVtuYW1lXSwgbnVsbCkgOiB0b1tuYW1lXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG87XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsb25lO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbmNvbnN0IGNvcHkgPSBmdW5jdGlvbiAoc3JjLCBpbnN0YW5jZSlcbntcbiAgICBpZiAoaXNOb2RlKHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5zbGljZSgpO1xuXG4gICAgaWYgKHR5cGVvZiBzcmMgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHJldHVybiBzcmMuYmluZChpbnN0YW5jZSB8fCB7fSk7XG5cbiAgICBpZiAodHlwZU9mKHNyYywgJ29iamVjdCcpKSB7XG4gICAgICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzcmMpO1xuICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBzcmNba2V5XTtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gY29weSh2YWx1ZSwgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgPyBzcmMgOiB7fSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJldHVybiBzcmM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb3B5O1xuIiwiLypcblxuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUpO1xuY29uc3QgYXJyMCA9IGNyZWF0ZUFycmF5KDUsIHRydWUpO1xuY29uc3QgYXJyMSA9IGNyZWF0ZUFycmF5KDUsIDEpO1xuY29uc3QgYXJyMiA9IGNyZWF0ZUFycmF5KDUsICdoZWxsbyB3b3JsZCcpO1xuY29uc3QgYXJyMyA9IGNyZWF0ZUFycmF5KDUsIFsxMDAsMjAwLDMwMF0pO1xuY29uc3QgYXJyNCA9IGNyZWF0ZUFycmF5KDUsIHthOidBJyxiOidCJyxjOidDJ30pO1xuXG4qL1xuXG4vKipcbiAqXG4gKiBAcGFyYW0gbnVtXG4gKiBAcGFyYW0gZmlsbFxuICogQHJldHVybnMge2FueVtdfVxuICovXG5jb25zdCBjcmVhdGVBcnJheSA9IGZ1bmN0aW9uIChudW0sIGZpbGwpIHtcbiAgICBsZXQgYXJyID0gW107XG5cbiAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdudW1iZXInIHx8IHR5cGVvZiBmaWxsID09PSAnc3RyaW5nJyApe1xuICAgICAgICByZXR1cm4gbmV3IEFycmF5KG51bSkuZmlsbChmaWxsKTtcbiAgICB9XG5cbiAgICBhcnIgPSBuZXcgQXJyYXkobnVtKS5maWxsKDApO1xuICAgIGFyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGZpbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBmaWxsLmNhbGwoZmlsbCwgaSwgaSk7XG4gICAgICAgICAgICBhcnJbaV0gPSB0eXBlb2YgciA9PT0gJ2Jvb2xlYW4nIHx8IHIgPyByIDogdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlsbCkpIGFycltpXSA9IGZpbGxbaV0gPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IGZpbGxbaV0gO1xuICAgICAgICBlbHNlIGFycltpXSA9IGZpbGw7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBcnJheTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0YWcsIGF0dHJzLCBpbm5lcikge1xuICAgIGNvbnN0XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyksXG4gICAgICAgIGlzX2F0dHIgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZU9mKHNyYywgJ29iamVjdCcpICYmICFpc05vZGUoc3JjKVxuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfaHRtbCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnRfY2hpbGQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlT2Yoc3JjKTtcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICBpbnNlcnRfaHRtbChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcgJiYgaXNOb2RlKHNyYykpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2NoaWxkKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnYXJyYXknKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSBpbnNlcnQoc3JjW2ldKTtcbiAgICAgICAgfTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmICFpc19hdHRyKGF0dHJzKSkge1xuICAgICAgICBpbm5lciA9IGF0dHJzO1xuICAgICAgICBhdHRycyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChhdHRycylcbiAgICAgICAgZm9yIChsZXQgayBpbiBhdHRycylcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTtcblxuICAgIGlmIChpbm5lcilcbiAgICAgICAgaW5zZXJ0KGlubmVyKTtcblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWxlbWVudDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cblxuY29uc3QgY3JlYXRlRnJhZ21lbnQgPSBmdW5jdGlvbiAoYXBwZW5kKSB7XG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICBpZiAoaXNOb2RlKGFwcGVuZCkpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGFwcGVuZCk7XG5cbiAgICBpZiAodHlwZU9mKGFwcGVuZCwgJ3N0cmluZycpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHIybm9kZShhcHBlbmQpKTtcblxuICAgIHJldHVybiBmcmFnbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRnJhZ21lbnQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuXG5cbmNvbnN0IGNzcyA9IGZ1bmN0aW9uIChzZWxlY3RvciwgcHJvcGVydGllcykge1xuICAgIGlmICghc2VsZWN0b3IgfHwgIXByb3BlcnRpZXMpIHJldHVybjtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICBjb25zdCBwcm9wID0ge307XG4gICAgICAgIHByb3BbcHJvcGVydGllc10gPSBhcmd1bWVudHNbMl07XG4gICAgICAgIHJldHVybiBjc3Moc2VsZWN0b3IsIHByb3ApO1xuICAgIH1cblxuICAgIGxldCBpLCBrLCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgIHR5cGVTZWxlY3RvciA9IHR5cGVPZihzZWxlY3RvciksXG4gICAgICAgIHR5cGVQcm9wZXJ0aWVzID0gdHlwZU9mKHByb3BlcnRpZXMpLFxuICAgICAgICBwYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgICAgICAgIGxldCBpLCBwMSA9IHN0ci5zcGxpdCgnOycpLCBwMiwgcG4sIGl4LCBvID0ge307XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcDEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwMiA9IHAxW2ldLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgcG4gPSBwMlswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgaXggPSBwbi5pbmRleE9mKCctJyk7XG4gICAgICAgICAgICAgICAgaWYgKGl4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgcG4gPSBwbi5zdWJzdHJpbmcoMCwgaXgpICsgcG5baXggKyAxXS50b1VwcGVyQ2FzZSgpICsgcG4uc3Vic3RyaW5nKGl4ICsgMik7XG4gICAgICAgICAgICAgICAgaWYgKHAyLmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAgICAgb1twbl0gPSBwMlsxXS50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9O1xuXG5cbiAgICBzd2l0Y2ggKHR5cGVTZWxlY3Rvcikge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgICAgICAgICAgZWxlbWVudHMgPSBbc2VsZWN0b3JdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50cykge1xuXG4gICAgICAgIGlmICh0eXBlUHJvcGVydGllcyA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcGFyc2UocHJvcGVydGllcyk7XG5cbiAgICAgICAgZm9yIChpIGluIGVsZW1lbnRzKVxuICAgICAgICAgICAgZm9yIChrIGluIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uc3R5bGVba10gPSBwcm9wZXJ0aWVzW2tdO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50c1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3NzO1xuIiwiXG5jb25zdCBkZWNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChxdWVyeSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHt9O1xuICAgIGNvbnN0IHBhaXJzID0gKHF1ZXJ5WzBdID09PSAnPycgPyBxdWVyeS5zdWJzdHIoMSkgOiBxdWVyeSkuc3BsaXQoJyYnKTtcbiAgICBwYWlycy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGxldCBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgcmVzdWx0W2RlY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKV0gPSBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSB8fCAnJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBkZWZpbmVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkO1xuIiwiXG5jb25zdCBkZWZpbmVkSW4gPSBmdW5jdGlvbiAoc3RhY2ssIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN0YWNrICYmIHN0YWNrW3ZhbHVlXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZEluO1xuIiwiaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cblxuY29uc3QgZG9tTG9hZGVkID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBpZiAoZG9jLnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKSlcbiAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgIGVsc2VcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKClcbiAgICAgICAgfSwgZmFsc2UpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTG9hZGVkO1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbi8qY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgdG1wKSB7XG4gICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChsaXN0LmNoaWxkTm9kZXMpLCBjYWxsYmFjaywgdG1wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9XG59OyovXG5cbmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIGluc3RhbmNlID0ge30pIHtcbiAgICBsZXQgdHlwZSA9IHR5cGVPZihsaXN0KTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpLCB2LCBhKSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBpLCB2LCBhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdCBpbnN0YW5jZW9mIE5vZGVMaXN0KVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChBcnJheS5mcm9tKGxpc3QpLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gZWFjaChbbGlzdF0sIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGtleSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwga2V5LCBsaXN0W2tleV0sIGxpc3QpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgbGlzdCA9IGVhY2gobGlzdC5zcGxpdChcIlwiKSwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgY29uc3QgYXJyID0gKG5ldyBBcnJheShsaXN0KSkuZmlsbCgwKTtcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGFyciwgY2FsbGJhY2ssIGluc3RhbmNlKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xufTtcblxuZWFjaC5wYXJlbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG59O1xuXG5lYWNoLmZpbHRlciA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBjYWxsYmFjaywgbG9vcHMgPSAxMCkge1xuICAgIGNvbnN0IGdldFBhcmVudCA9IChlbGVtKSA9PiBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSA/IGVsZW0ucGFyZW50Tm9kZSA6IGZhbHNlO1xuICAgIGxldCBlbGVtZW50ID0gaXNOb2RlKHNlbGVjdG9yKSA/IHNlbGVjdG9yIDogcXVlcnkoc2VsZWN0b3IpO1xuICAgIHdoaWxlIChsb29wcyA+IDAgJiYgZWxlbWVudCkge1xuICAgICAgICBsb29wcy0tO1xuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlICYmIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKGZpbHRlcikpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVhY2g7XG4iLCJcbmNvbnN0IGVuY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICByZXN1bHQgKz0gKChyZXN1bHQubGVuZ3RoKSA/ICcmJyA6ICc/JykgKyBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuY29kZUdldFF1ZXJ5O1xuIiwiXG5jb25zdCBleGlzdHMgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkICYmIHNyYyAhPT0gbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4aXN0cztcbiIsIlxuXG5leHBvcnQgY29uc3QgZXh0ZW5kID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBmb3IgKGxldCBwYXJhbSBpbiBzb3VyY2UpXG4gICAgICAgIGlmIChzb3VyY2UuaGFzT3duUHJvcGVydHkocGFyYW0pKVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcGFyYW1dID0gc291cmNlW3BhcmFtXTtcblxuICAgIGZ1bmN0aW9uIF9fKCkge1xuICAgICAgICB0aGlzLmNvbnN0cnVjdG9yID0gZGVzdGluYXRpb247XG4gICAgfVxuXG4gICAgX18ucHJvdG90eXBlID0gc291cmNlLnByb3RvdHlwZTtcbiAgICBkZXN0aW5hdGlvbi5wcm90b3R5cGUgPSBuZXcgX18oKTtcbn07XG5cbmV4cG9ydCBjb25zdCBleHRlbmRSZWN1cnNpdmUgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGxldCBwcm9wZXJ0eTtcbiAgICBmb3IgKHByb3BlcnR5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlW3Byb3BlcnR5XSAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gZGVzdGluYXRpb25bcHJvcGVydHldIHx8IHt9O1xuICAgICAgICAgICAgZXh0ZW5kUmVjdXJzaXZlKGRlc3RpbmF0aW9uW3Byb3BlcnR5XSwgc291cmNlW3Byb3BlcnR5XSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydHldID0gc291cmNlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgcmV0dXJuIGRlc3RpbmF0aW9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXh0ZW5kO1xuIiwiaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gJy4vZmluZE9iamVjdHMnO1xuXG5cbmNvbnN0IGZpbmRPYmplY3QgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBjb25zdCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3Q7XG4iLCJcblxuY29uc3QgZmluZE9iamVjdHMgPSBmdW5jdGlvbiAobGlzdCwgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IGksIHRtcCA9IFtdO1xuICAgIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSBcIm9iamVjdFwiKVxuICAgICAgICBsaXN0ID0gT2JqZWN0LnZhbHVlcyhsaXN0KTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGlmIChsaXN0W2ldICYmIGxpc3RbaV1bYXR0cl0gIT09IHVuZGVmaW5lZCAmJiBsaXN0W2ldW2F0dHJdID09PSBhdHRyVmFsdWUpXG4gICAgICAgICAgICAgICAgdG1wLnB1c2gobGlzdFtpXSk7XG5cbiAgICByZXR1cm4gdG1wIDtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kcyA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXAgOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBmaW5kID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdHM7XG4iLCJcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi9kZWZpbmVkXCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4vbm9kZTJzdHJcIjtcblxuXG4vKipcbiAqIEZvcm1hdHRpbmcgb2Ygc3RyaW5nLCBvciBtYXliZSB0ZW1wbGF0ZSBidWlsZGVyXG4gKlxuICogRXhhbXBsZXM6XG4gKiAuZm9ybWF0KFwiSGVsbG8gezB9LCB5b3VyIGNvZGUgaXMgezF9IVwiLCBbJ0phZGUnLCAnUHJlZmVjdCddKTtcbiAqIC5mb3JtYXQoXCJIZWxsbyB7bmFtZX0sIHlvdXIgY29kZSBpcyB7bWVhbn0hXCIsIHtuYW1lOidKYWRlJywgbWVhbjogJ1ByZWZlY3QnfSk7XG4gKlxuICogQHBhcmFtIHN0cmluZyAgICBTdHJpbmdcbiAqIEBwYXJhbSBsaXN0ICBBcnJheXxPYmplY3RcbiAqIEByZXR1cm5zIHN0cmluZ1xuICovXG5jb25zdCBmb3JtYXQgPSBmdW5jdGlvbiAoc3RyaW5nLCBsaXN0KSB7XG4gICAgbGV0IHJlZztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXGQrKX0vZyk7XG4gICAgZWxzZSBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gJ29iamVjdCcpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFx3Kyl9L2cpO1xuXG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZywgZnVuY3Rpb24gKG1hdGNoLCBudW1iZXIpIHtcbiAgICAgICAgaWYgKGRlZmluZWQobGlzdFtudW1iZXJdKSAmJiBpc05vZGUobGlzdFtudW1iZXJdKSlcbiAgICAgICAgICAgIGxpc3RbbnVtYmVyXSA9IG5vZGUyc3RyKGxpc3RbbnVtYmVyXSk7XG5cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBsaXN0W251bWJlcl0gIT09IHVuZGVmaW5lZCA/IGxpc3RbbnVtYmVyXSA6IG1hdGNoO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0O1xuIiwiXG5jb25zdCBnZXREb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZG9jdW1lbnQgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREb2N1bWVudDtcbiIsIlxuY29uc3QgZ2V0TG9jYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyl7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xvY2F0aW9uIG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TG9jYXRpb247XG4iLCJcbmNvbnN0IGdldFdpbmRvdyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd3aW5kb3cgb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRXaW5kb3c7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG4vKipcbiAqIEJhc2UgSFRUUCBSZXF1ZXN0XG4gKlxuICogLmh0dHBSZXF1ZXN0KCB7bWV0aG9kOiAnR0VUJywgZGF0YToge30sIGhlYWRlcnM6IHt9LCBhY3Rpb246ICcvaW5kZXgnfSwgZnVuY3Rpb24oc3RhdHVzLCBkYXRhKXt9LCB0aGlzSW5zdGFuY2UgKTtcbiAqXG4gKiBAcGFyYW0gY29uZmlnXG4gKiAgICAgIGRhdGE6ICAgICAgICAgICBkYXRhIHRvIHNlbmQuIE9iamVjdCwgRm9ybURhdGEgKFBPU1Qgb25seSksIEhUTUxGb3JtRWxlbWVudCAoUE9TVCBvbmx5KVxuICogICAgICBhY3Rpb24sIHVybDogICAgdXJsIGFkZHJlc3MgdG9cbiAqICAgICAgbWV0aG9kOiAgICAgICAgIHJlcXVlc3QgbWV0aG9kIEdFVCBQT1NUIG9yIGN1c3RvbSBtZXRob2RzLCBkZWZhdWx0ICdHRVQnXG4gKiAgICAgIGhlYWRlcnM6ICAgICAgICBoZWFkZXJzIE9iamVjdCwga2V5ID0gdmFsdWVcbiAqICAgICAgdXNlRW5jb2RlOiAgICAgIHVzZWQgdXJsIGVuY29kaW5nLCBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlRm9ybURhdGE6ICAgIHVzZWQgRm9ybURhdGEsIGRlZmF1bHQgRkFMU0UuIEJvb2xlYW5cbiAqICAgICAgYXN5bmM6ICAgICAgICAgIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VyOlxuICogICAgICBwYXNzd29yZDpcbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqICAgICAgZXhlY3V0aW5nIGV2ZW50IC0gb25sb2FkZW5kLiBmdW5jdGlvbiAoc3RhdHVzLCByZXNwb25zZVRleHQpXG4gKlxuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogICAgICBvYmplY3QgJ3RoaXMnIGZvciBjYWxsYmFja1xuICpcbiAqIEByZXR1cm5zIHtYTUxIdHRwUmVxdWVzdH1cbiAqL1xuY29uc3QgaHR0cFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGtleTtcbiAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBkYXRhOiBjb25maWcuZGF0YSB8fCB7fSxcbiAgICAgICAgYWN0aW9uOiBjb25maWcuYWN0aW9uIHx8IGNvbmZpZy51cmwgfHwgZG9jdW1lbnQubG9jYXRpb24uaHJlZixcbiAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpIDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IGNvbmZpZy5oZWFkZXJzIHx8IHt9LFxuICAgICAgICB1c2VFbmNvZGU6IGNvbmZpZy51c2VFbmNvZGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy51c2VFbmNvZGUsXG4gICAgICAgIHVzZUZvcm1EYXRhOiBjb25maWcudXNlRm9ybURhdGEgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogISFjb25maWcudXNlRm9ybURhdGEsXG4gICAgICAgIGFzeW5jOiBjb25maWcuYXN5bmMgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIWNvbmZpZy5hc3luYyxcbiAgICAgICAgdXNlcjogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IGNvbmNhdGVTdHJpbmcgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgZm9yIChrZXkgaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJyYnICsga2V5ICsgJz0nICsgKG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSA6IHBhcmFtc1trZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG5cbiAgICB0aGlzSW5zdGFuY2UgPSAodHlwZU9mKHRoaXNJbnN0YW5jZSwgJ29iamVjdCcpKSA/IHRoaXNJbnN0YW5jZSA6IHt9O1xuXG4gICAgLy8gZGF0YSBwcmVwYXJlXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kID09PSAnR0VUJykge1xuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gb3B0aW9ucy5hY3Rpb24uaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcnO1xuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIHNlbmREYXRhID0ge307XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIHJlc2V0IHRvIHVzZUZvcm1EYXRhIGluIHRydWVcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgc2VuZERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgICAgIGlmICghKHNlbmREYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpKSBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbmREYXRhLmFwcGVuZChrZXksIG9wdGlvbnMudXNlRW5jb2RlID8gZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMuZGF0YVtrZXldKSA6IG9wdGlvbnMuZGF0YVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gYnVpbGQgcmVxdWVzdFxuICAgIHhoci5vcGVuKG9wdGlvbnMubWV0aG9kLCBvcHRpb25zLmFjdGlvbiwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICBpZiAob3B0aW9ucy5tZXRob2QgIT09ICdHRVQnICYmICFvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgfVxuXG4gICAgZm9yIChrZXkgaW4gb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgb3B0aW9ucy5oZWFkZXJzW2tleV0pO1xuICAgIH1cblxuICAgIHhoci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXNJbnN0YW5jZS5YTUxIdHRwUmVxdWVzdCA9IHhocjtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UsIHhoci5zdGF0dXMsIHhoci5yZXNwb25zZVRleHQsIHhocik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLnNlbmRPcHRpb25zID0gb3B0aW9ucztcbiAgICB4aHIuc2VuZChzZW5kRGF0YSk7XG4gICAgcmV0dXJuIHhocjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0O1xuIiwiaW1wb3J0IGF0dHIgZnJvbSBcIi4uL3N0YXRpYy9hdHRyXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVGcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUZyYWdtZW50XCI7XG5pbXBvcnQgY3NzIGZyb20gXCIuLi9zdGF0aWMvY3NzXCI7XG5pbXBvcnQgZG9tTG9hZGVkIGZyb20gXCIuLi9zdGF0aWMvZG9tTG9hZGVkXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9nZXREb2N1bWVudFwiO1xuaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi4vc3RhdGljL2dldFdpbmRvd1wiO1xuaW1wb3J0IGluamVjdCBmcm9tIFwiLi4vc3RhdGljL2luamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBzdHIyZnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9zdHIyZnJhZ21lbnRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi4vc3RhdGljL25vZGUyc3RyXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gXCIuLi9zdGF0aWMvcXVlcnlBbGxcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBlbmNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2VuY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgZGVjb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9kZWNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi9zdGF0aWMvaHR0cFJlcXVlc3RcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZFwiO1xuaW1wb3J0IGRlZmluZWRJbiBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRJblwiO1xuaW1wb3J0IGVhY2ggZnJvbSBcIi4uL3N0YXRpYy9lYWNoXCI7XG5pbXBvcnQgZXh0ZW5kLCB7XG4gICAgZXh0ZW5kUmVjdXJzaXZlXG59ICBmcm9tIFwiLi4vc3RhdGljL2V4dGVuZFwiO1xuaW1wb3J0IGlzRW1wdHkgZnJvbSBcIi4uL3N0YXRpYy9pc0VtcHR5XCI7XG5pbXBvcnQgZmluZE9iamVjdCBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RcIjtcbmltcG9ydCBmaW5kT2JqZWN0cyBmcm9tIFwiLi4vc3RhdGljL2ZpbmRPYmplY3RzXCI7XG5pbXBvcnQgZm9ybWF0IGZyb20gXCIuLi9zdGF0aWMvZm9ybWF0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuLi9zdGF0aWMvaXNOb2RlXCI7XG5pbXBvcnQgbG9hZENTUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRDU1NcIjtcbmltcG9ydCBsb2FkSlMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNcIjtcbmltcG9ydCBsb2FkSlNTeW5jIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTU3luY1wiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBudW1iZXIyc3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvbnVtYmVyMnN0cmluZ1wiO1xuaW1wb3J0IG9uIGZyb20gXCIuLi9zdGF0aWMvb25cIjtcbmltcG9ydCBwb3NpdGlvbiBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uXCI7XG5pbXBvcnQgcG9zaXRpb25Nb3VzZSBmcm9tIFwiLi4vc3RhdGljL3Bvc2l0aW9uTW91c2VcIjtcbmltcG9ydCByYW5kb20sIHtcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmdcbn0gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCByZWRpcmVjdCBmcm9tIFwiLi4vc3RhdGljL3JlZGlyZWN0XCI7XG5pbXBvcnQgdHlwZU9mIGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mXCI7XG5pbXBvcnQgdHlwZU9mU3RyaWN0IGZyb20gXCIuLi9zdGF0aWMvdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgdXJpIGZyb20gXCIuLi9zdGF0aWMvdXJpXCI7XG5pbXBvcnQgY29weSBmcm9tIFwiLi4vc3RhdGljL2NvcHlcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IGNyZWF0ZUFycmF5IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlQXJyYXlcIjtcbmltcG9ydCBpc1N0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzU3RyaW5nXCI7XG5pbXBvcnQgZXhpc3RzIGZyb20gXCIuLi9zdGF0aWMvZXhpc3RzXCI7XG5pbXBvcnQgaXNEZWZpbmVkIGZyb20gXCIuLi9zdGF0aWMvaXNEZWZpbmVkXCI7XG5pbXBvcnQgbG9hZEJsb2JmaWxlIGZyb20gXCIuLi9zdGF0aWMvbG9hZEJsb2JmaWxlXCI7XG5pbXBvcnQgbG9hZEpTT04gZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNPTlwiO1xuaW1wb3J0IGxvYWRUZXh0ZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRUZXh0ZmlsZVwiO1xuaW1wb3J0IHRvSFRNTCBmcm9tIFwiLi4vc3RhdGljL3RvSFRNTFwiO1xuaW1wb3J0IHRvWE1MIGZyb20gXCIuLi9zdGF0aWMvdG9YTUxcIjtcbmltcG9ydCBzdHlsaXplciBmcm9tIFwiLi4vc3RhdGljL3N0eWxpemVyXCI7XG5pbXBvcnQgdW5pcUFycmF5IGZyb20gXCIuLi9zdGF0aWMvdW5pcUFycmF5XCI7XG5cbmNvbnN0IFN0YXRpYyA9IHtcbiAgICBhdHRyLFxuICAgIGNyZWF0ZUVsZW1lbnQsXG4gICAgY3JlYXRlRnJhZ21lbnQsXG4gICAgY3NzLFxuICAgIGRvbUxvYWRlZCxcbiAgICBnZXREb2N1bWVudCxcbiAgICBnZXRXaW5kb3csXG4gICAgaW5qZWN0LFxuICAgIHN0cjJub2RlLFxuICAgIHN0cjJmcmFnbWVudCxcbiAgICBub2RlMnN0cixcbiAgICBxdWVyeSxcbiAgICBxdWVyeUFsbCxcbiAgICBzZWFyY2gsXG4gICAgZW5jb2RlR2V0UXVlcnksXG4gICAgZGVjb2RlR2V0UXVlcnksXG4gICAgaHR0cFJlcXVlc3QsXG4gICAgZGVmaW5lZCxcbiAgICBkZWZpbmVkSW4sXG4gICAgZXh0ZW5kLFxuICAgIGV4dGVuZFJlY3Vyc2l2ZSxcbiAgICBlYWNoLFxuICAgIGZpbmRPYmplY3QsXG4gICAgZmluZE9iamVjdHMsXG4gICAgZm9ybWF0LFxuICAgIGlzRW1wdHksXG4gICAgaXNOb2RlLFxuICAgIGxvYWRDU1MsXG4gICAgbG9hZEpTLFxuICAgIGxvYWRKU1N5bmMsXG4gICAgbWVyZ2UsXG4gICAgbnVtYmVyMnN0cmluZyxcbiAgICBvbixcbiAgICBwb3NpdGlvbixcbiAgICBwb3NpdGlvbk1vdXNlLFxuICAgIHJhbmRvbSxcbiAgICByYW5kb21Db2xvcixcbiAgICByYW5kb21JdGVtLFxuICAgIHJhbmRvbU51bWJlcixcbiAgICByYW5kb21TdHJpbmcsXG4gICAgcmFuZG9tSHVtYW5pemVTdHJpbmcsXG4gICAgcmVkaXJlY3QsXG4gICAgdHlwZU9mLFxuICAgIHR5cGVPZlN0cmljdCxcbiAgICB1cmksXG4gICAgY29weSxcbiAgICBjbG9uZSxcbiAgICB0b09iamVjdCxcbiAgICBpc0hUTUxTdHJpbmcsXG4gICAgY3JlYXRlQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgZXhpc3RzLFxuICAgIGlzRGVmaW5lZCxcbiAgICBsb2FkQmxvYmZpbGUsXG4gICAgbG9hZEpTT04sXG4gICAgbG9hZFRleHRmaWxlLFxuICAgIHRvSFRNTCxcbiAgICB0b1hNTCxcbiAgICBzdHlsaXplcixcbiAgICB1bmlxQXJyYXksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0aWM7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG5cbmNvbnN0IGluamVjdCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZGF0YSwgYXBwZW5kLCB0bylcbntcbiAgICBpZiAodHlwZU9mKHNlbGVjdG9yLCAnYXJyYXknKSkge1xuICAgICAgICBzZWxlY3Rvci5mb3JFYWNoKChlbGVtKSA9PiB7XG4gICAgICAgICAgICBpbmplY3QoZWxlbSwgZGF0YSwgdHJ1ZSwgdG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdzdHJpbmcnKSlcbiAgICAgICAgc2VsZWN0b3IgPSBxdWVyeShzZWxlY3RvciwgdG8pO1xuXG4gICAgaWYgKCFhcHBlbmQpXG4gICAgICAgIHNlbGVjdG9yLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSkge1xuICAgICAgICBpZiAoaXNOb2RlKGRhdGEpKSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5hcHBlbmRDaGlsZChkYXRhKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlT2YoZGF0YSwgJ2FycmF5JykpIHtcbiAgICAgICAgICAgIGxldCBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAgaW5qZWN0KHNlbGVjdG9yLCBkYXRhW2ldLCB0cnVlLCB0byk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3Rvci5pbm5lckhUTUwgPSAoIWFwcGVuZCkgPyBkYXRhIDogc2VsZWN0b3IuaW5uZXJIVE1MICsgZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgcmV0dXJuIHNyYyAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNEZWZpbmVkO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG5jb25zdCBpc0VtcHR5ID0gZnVuY3Rpb24gKHNyYykge1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykgfHwgdHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHNyYylcbiAgICAgICAgICAgIGlmIChzcmMuaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZU9mKHNyYywgJ3N0cmluZycpKSB7XG4gICAgICAgIHNyYyA9IHNyYy5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICByZXR1cm4gc3JjID09PSBcIlwiIHx8IHNyYyA9PT0gXCIwXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChzcmMgPT09IDAgfHwgc3JjID09PSBudWxsIHx8IHNyYyA9PT0gdW5kZWZpbmVkIHx8IHNyYyA9PT0gZmFsc2UgfHwgaXNOYU4oc3JjKSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNFbXB0eTtcbiIsIi8vIGltcG9ydCBET01QYXJzZXIgZnJvbSAnRE9NUGFyc2VyJztcblxuY29uc3QgaXNIVE1MU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCB0cnVlc3QgPSBmYWxzZSkge1xuXG4gICAgaWYgKHRydWVzdCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gISFkaXYuY2hpbGRFbGVtZW50Q291bnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnRyaW0oKS5zdWJzdHJpbmcoMCwgMSkgPT09ICc8Jztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGlzSFRNTFN0cmluZztcbiIsIlxuXG5jb25zdCBpc05vZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgKHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgfHxcbiAgICAgICAgdmFsdWUubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNOb2RlO1xuIiwiXG5jb25zdCBpc1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XG4iLCJcbmNvbnN0IGxvYWRCbG9iZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxuICAgICAgICAudGhlbihibG9iID0+IG9ubG9hZChibG9iKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCbG9iZmlsZTsiLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRDU1MgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkQ1NTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgbGluay5ocmVmID0gKHNyYy5zdWJzdHIoLTQpID09PSAnLmNzcycpID8gc3JjIDogc3JjICsgJy5jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgbGluay5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgcmV0dXJuIGxpbmtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ1NTO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudCgpO1xuY29uc3QgbG9hZEpTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZEpTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50RWxlbWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgaWQgPSAncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIHNjcmlwdC5zcmMgPSAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2N1bWVudEVsZW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICByZXR1cm4gc2NyaXB0XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTOyIsIlxuY29uc3QgbG9hZEpTT04gPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBvbmxvYWQoanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNPTjsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IGxvYWRUZXh0ZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbih0ZXh0ID0+IG9ubG9hZCh0ZXh0KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUZXh0ZmlsZTsiLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBjb25zdCBkYXRhID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIExFVFRFUl9DT05TT05BTlQsIExFVFRFUl9WT1dFTCwgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNiwgd2l0aE51bWJlcnMgPSBmYWxzZSkge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSB3aXRoTnVtYmVyc1xuICAgICAgICA/IEFCQyArIE5VTUJFUlMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpXG4gICAgICAgIDogQUJDLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBmb3IgKGkgPSBzaXplOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHN0cmluZyArPSBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUh1bWFuaXplU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGNvbnNvbmFudCA9ICBMRVRURVJfQ09OU09OQU5ULnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbCA9ICBMRVRURVJfVk9XRUwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsRmlyc3QgPSAoTWF0aC5yYW5kb20oKSAqIDEwKSA+IDU7XG4gICAgZm9yIChpID0gc2l6ZSAvIDIgKyAxOyBpID4gMDsgaSAtLSkge1xuICAgICAgICBsZXQgczEgPSBjb25zb25hbnRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uc29uYW50Lmxlbmd0aCldO1xuICAgICAgICBsZXQgczIgPSB2b3dlbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2b3dlbC5sZW5ndGgpXTtcbiAgICAgICAgc3RyaW5nICs9IHZvd2VsRmlyc3QgPyBzMSArIHMyIDogczIgKyBzMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzaXplKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHJhbmRvbSBpdGVtIGZyb20gYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tSXRlbSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyW3JhbmRvbSgwLCBhcnIubGVuZ3RoLTEpXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tO1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uICh0bykge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBsb2MuaHJlZiA9IHRvIHx8IGRvYy5ocmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkaXJlY3Q7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuLyoqXG4gKiBzZWFyY2goICd1bCA+IGxpJywgICdkYXRhLWxpbmsnLCBOb2RlRWxlbWVudCk7XG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gYXR0clxuICogQHBhcmFtIGZyb21cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuY29uc3Qgc3RyMmZyYWdtZW50ID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVSYW5nZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cmluZyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBpLFxuICAgICAgICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpKTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMmZyYWdtZW50O1xuIiwiaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi9zdHIyZnJhZ21lbnRcIjtcblxuY29uc3Qgc3RyMm5vZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgZnJhZ21lbnQgPSBzdHIyZnJhZ21lbnQoc3RyaW5nKTtcblxuICAgIHN3aXRjaCAoZnJhZ21lbnQuY2hpbGRFbGVtZW50Q291bnQpIHtcbiAgICAgICAgY2FzZSAwOiBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmVzdWx0ID0gZnJhZ21lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICByZXN1bHQgPSBjb250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIybm9kZTtcbiIsIlxuY29uc3Qgc3R5bGl6ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGl6ZXI7XG4iLCIvKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmNvbnN0IHRvSFRNTCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0eXBlID0gJ3RleHQvaHRtbCc7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgdHlwZSk7XG5cbiAgICAgICAgaWYgKHhtbERvYy5kb2N1bWVudEVsZW1lbnQgJiYgeG1sRG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB4bWxEb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9IVE1MO1xuIiwiXG5jb25zdCB0b09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9PYmplY3Q7XG4iLCJcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuY29uc3QgdG9YTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L3htbCc7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgdHlwZSk7XG5cbiAgICAgICAgaWYgKHhtbERvYy5kb2N1bWVudEVsZW1lbnQgJiYgeG1sRG9jLmRvY3VtZW50RWxlbWVudC50YWdOYW1lICE9PSAnaHRtbCcpIHtcbiAgICAgICAgICAgIHJldHVybiB4bWxEb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1hNTDtcbiIsImltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiXG5jb25zdCB1bmlxQXJyYXkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pcUFycmF5O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iXSwic291cmNlUm9vdCI6IiJ9