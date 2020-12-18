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
    ComponentClass: ComponentClass,
    KeyboardEventManager: _KeyboardEventManager2.default,
    MoveClip: _MoveClip2.default,
    MoveClipClass: MoveClipClass,
    Scene: _Scene2.default,
    SceneClass: SceneClass,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb3ZlQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3h5TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3RlcHNTY2VuZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYWJjLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nsb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY29weS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUZyYWdtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVjb2RlR2V0UXVlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9kZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZEluLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZG9tTG9hZGVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VuY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXhpc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZmluZE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZm9ybWF0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0RG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldFdpbmRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2h0dHBSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0RlZmluZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9pc0VtcHR5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNIVE1MU3RyaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNOb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQmxvYmZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTT04uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZFRleHRmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3R5bGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b0hUTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvWE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdW5pcUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbkZyYW1lIiwicm9vdCIsInJlcXVlc3RJZCIsInN0YXJ0cGFseSIsInBhdXNlZCIsImNhbGxiYWNrIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwic3RlcCIsInRpbWVzdGFtcCIsImNhbGwiLCJjYW5jZWwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsInN0YXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJDbGlwQ2xhc3MiLCJlbGVtZW50IiwicG9zaXRpb24iLCJzZXRQcm9wZXJ0aWVzIiwicGFyZW50IiwiQ2xpcCIsImFwcGVuZENoaWxkIiwiTm9kZSIsIm1vdmVUbyIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJwYXJlbnROb2RlIiwieCIsInkiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsInBhcmVudEVsZW1lbnQiLCJjb3B5VG8iLCJvbiIsImNsb25lIiwic3R5bGUiLCJvYmplY3QiLCJpbmplY3QiLCJlbGVtIiwiYXBwZW5kIiwiQ29tcG9uZW50IiwiY29uZmlnIiwibGlzdCIsInJhbmRvbU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInN1YnN0cmluZyIsInRvVXBwZXJDYXNlIiwiY29tcCIsImNyZWF0ZSIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJjb21wb25lbnRDaGlsZHJlbiIsImNoaWxkcmVuIiwiZmluZCIsImNsb25lZCIsInRlbXBsYXRlIiwiY2xvbmVOb2RlIiwiYmVmb3JlIiwiaW5pdGlhbGl6ZWQiLCJtZXRob2RzIiwidmFsdWVzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImJpbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJkYXRhIiwicHVzaCIsIm5vZGUiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwicHJvcHMiLCJvdmVycmlkZSIsIktleWJvYXJkRXZlbnRNYW5hZ2VyIiwic3RvcmFnZSIsImJhc2VDYWxsYmFja3NMaXN0IiwiYWRkU3RvcmFnZSIsImJhc2VDYWxsYmFjayIsInR5cGUiLCJrZXlDb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsInNldHVwTGlzdGVuZXJzIiwiYWRkIiwicm0iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWFjaCIsIndpdGhDb25kaXRpb25LZXkiLCJwcmVzcyIsInVwIiwiZG93biIsIkxvYWRlciIsImpzb24iLCJqc29ucyIsImphdmFzY3JpcHQiLCJpbWFnZXMiLCJhdWRpb3MiLCJ2aWRlb3MiLCJ2aWRlbyIsInNyYyIsIm9uZXJyb3IiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyb3IiLCJzcmNzIiwib2JqIiwiaXRlbSIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNsaWNlIiwic2NyaXB0cyIsIml0ZXJhdG9yIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInN1YnN0ciIsIm9ubG9hZCIsImUiLCJoZWFkIiwiaW1ncyIsIm5hbWUiLCJpbWciLCJhdWRpbyIsInByZWxvYWQiLCJNYXRyaXgiLCJtMTEiLCJtMTIiLCJtMjEiLCJtMjIiLCJneCIsImd5IiwiTW92ZUNsaXAiLCJjbGlwIiwiRXJyb3IiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJ3aWR0aCIsImhlaWdodCIsImNsb25lUHJvcGVydHkiLCJQb2ludCIsIlJlY3RhbmdsZSIsIlJveHkiLCJwYXlsb2FkIiwicHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzIiwiZGVmYXVsdCIsInByb3h5IiwiUHJveHkiLCJnZXQiLCJwcm9wIiwic2V0IiwiZGlzcGF0Y2giLCJyZXN1bHQiLCJmaWxsIiwib2JzZXJ2ZSIsInRvIiwiZ2V0UHJveHkiLCJSb3h5TGlzdGVuZXIiLCJhY3Rpb25zIiwiX19hY3Rpb25fXyIsImFjdGlvbnNOYW1lcyIsImV2ZW50TmFtZSIsImluZGV4IiwicngiLCJldmVudEN1cnNvciIsIlNjZW5lIiwicHJvcGVydGllcyIsImN1cnJlbnQiLCJzY2VuZXMiLCJjb25zb2xlIiwibG9nIiwiYXR0cnMiLCJnZXRDdXJyZW50U2NlbmUiLCJuZXh0IiwibGVzdCIsImkiLCJydW4iLCJzY2VuZSIsImFwcGx5Iiwic2hvdyIsImNvbnN0cnVjdG9yIiwiU3RlcHNTY2VuZSIsInN0ZXBzIiwiaXRlcmF0aW9uIiwibG9vcCIsInN0ZXBfaXRlcmF0aW9uIiwic3RlcF9zdG9wIiwic3RlcF9jYWxsYmFja19lYWNoIiwic3RlcF9jYWxsYmFja3MiLCJwbGF5Iiwic3RvcCIsImVuZCIsIm1zIiwic2V0VGltZW91dCIsImdvdG8iLCJlYWNoU3RlcHMiLCJjdXJyZW50Q2FsbGJhY2tPYmplY3QiLCJUaW1lciIsInJlcGVhdCIsInRoaXNJbnN0YW5jZSIsInRoaXNJbnN0IiwiaXNOYU4iLCJzZXRJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJUcmFuc2Zvcm0iLCJwYXJhbXMiLCJ0cmFuc2Zvcm1fb2JqIiwidHJhbnNmb3JtX2FyciIsInRyYW5zZm9ybSIsInNwbGl0IiwiZmlsdGVyIiwidHJhbnNmb3JtX3N0cmluZyIsInVwZGF0ZSIsImpvaW4iLCJyZXNlYXJjaCIsIm1ldGhvZCIsIm11bHRpcGx5IiwiZXh0IiwibWF0Y2giLCJudW0iLCJwYXJhbSIsInRyaW0iLCJtYXRjaGVkIiwiQW5pbWF0ZSIsIkNvbXBvbmVudENsYXNzIiwiTW92ZUNsaXBDbGFzcyIsIlNjZW5lQ2xhc3MiLCJSQURJQU4iLCJERUdSRUVfQVNfUkFESUFOIiwiREVHUkVFXzM2MF9BU19SQURJQU4iLCJQSSIsIlJBRF9UT19ERUdSRUVTIiwiU3RhdGljIiwiVXRpbCIsIkxFVFRFUl9DT05TT05BTlQiLCJMRVRURVJfVk9XRUwiLCJBQkMiLCJOVU1CRVJTIiwiQU1QRVJTQU5EIiwiYXR0ciIsInR5cGVfZWxlbWVudCIsImFyZ3VtZW50cyIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImZyb20iLCJEYXRlIiwiUmVnRXhwIiwiRnVuY3Rpb24iLCJTdHJpbmciLCJOdW1iZXIiLCJCb29sZWFuIiwiY29weSIsImluc3RhbmNlIiwiY3JlYXRlQXJyYXkiLCJhcnIiLCJyIiwidW5kZWZpbmVkIiwidGFnIiwiaW5uZXIiLCJpc19hdHRyIiwiaW5zZXJ0X2h0bWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJpbnNlcnRfY2hpbGQiLCJpbnNlcnQiLCJrIiwiY3JlYXRlRnJhZ21lbnQiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjc3MiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwidHlwZVNlbGVjdG9yIiwidHlwZVByb3BlcnRpZXMiLCJwYXJzZSIsInN0ciIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsImluZGV4T2YiLCJkZWNvZGVHZXRRdWVyeSIsInF1ZXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZGVmaW5lZCIsImRlZmluZWRJbiIsInN0YWNrIiwiZG9tTG9hZGVkIiwiZG9jIiwicXVlcnlTZWxlY3RvciIsInYiLCJhIiwiTm9kZUxpc3QiLCJsb29wcyIsImdldFBhcmVudCIsImVuY29kZUdldFF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXhpc3RzIiwiZXh0ZW5kIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJfXyIsInByb3RvdHlwZSIsImV4dGVuZFJlY3Vyc2l2ZSIsInByb3BlcnR5IiwiZmluZE9iamVjdCIsImF0dHJWYWx1ZSIsInRtcCIsImZpbmRPYmplY3RzIiwiZmluZHMiLCJmb3JtYXQiLCJzdHJpbmciLCJyZWciLCJyZXBsYWNlIiwibnVtYmVyIiwiZ2V0RG9jdW1lbnQiLCJnZXRMb2NhdGlvbiIsImxvY2F0aW9uIiwiZ2V0V2luZG93IiwiaHR0cFJlcXVlc3QiLCJzZW5kRGF0YSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3B0aW9ucyIsImFjdGlvbiIsInVybCIsImhyZWYiLCJoZWFkZXJzIiwidXNlRW5jb2RlIiwidXNlRm9ybURhdGEiLCJhc3luYyIsInVzZXIiLCJwYXNzd29yZCIsImNvbmNhdGVTdHJpbmciLCJGb3JtRGF0YSIsIkhUTUxGb3JtRWxlbWVudCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZE9wdGlvbnMiLCJzZW5kIiwic3RyMm5vZGUiLCJzdHIyZnJhZ21lbnQiLCJub2RlMnN0ciIsInF1ZXJ5QWxsIiwic2VhcmNoIiwiaXNFbXB0eSIsImlzTm9kZSIsImxvYWRDU1MiLCJsb2FkSlMiLCJsb2FkSlNTeW5jIiwibWVyZ2UiLCJudW1iZXIyc3RyaW5nIiwicG9zaXRpb25Nb3VzZSIsInJhbmRvbUNvbG9yIiwicmFuZG9tSXRlbSIsInJhbmRvbU51bWJlciIsInJhbmRvbVN0cmluZyIsInJhbmRvbUh1bWFuaXplU3RyaW5nIiwicmVkaXJlY3QiLCJ0eXBlT2YiLCJ0eXBlT2ZTdHJpY3QiLCJ1cmkiLCJ0b09iamVjdCIsImlzSFRNTFN0cmluZyIsImlzU3RyaW5nIiwiaXNEZWZpbmVkIiwibG9hZEJsb2JmaWxlIiwibG9hZEpTT04iLCJsb2FkVGV4dGZpbGUiLCJ0b0hUTUwiLCJ0b1hNTCIsInN0eWxpemVyIiwidW5pcUFycmF5IiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJ0cnVlc3QiLCJkaXYiLCJjaGlsZEVsZW1lbnRDb3VudCIsIm5vZGVUeXBlIiwiVEVYVF9OT0RFIiwiRUxFTUVOVF9OT0RFIiwiRE9DVU1FTlRfRlJBR01FTlRfTk9ERSIsIkRPQ1VNRU5UX05PREUiLCJibG9iIiwibGluayIsInJlbCIsImRvY3VtZW50RWxlbWVudCIsInRleHQiLCJvYmplY3QxIiwib2JqZWN0MiIsImNvbnRhaW5lciIsImFicyIsInBvdyIsImJ1YmJsZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJzY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImJvZHkiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0Iiwicm91bmQiLCJ0b3AiLCJsZWZ0Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsIm9mZnNldFRvcCIsIm9mZnNldExlZnQiLCJvZmZzZXRQYXJlbnQiLCJNb3VzZUV2ZW50IiwiY2xpZW50WCIsImNsaWVudFkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWluIiwibWF4IiwiZmxvb3IiLCJsZXR0ZXJzIiwiY29sb3IiLCJzaXplIiwiY2VpbCIsInJlcyIsIndpdGhOdW1iZXJzIiwiY29uc29uYW50Iiwidm93ZWwiLCJ2b3dlbEZpcnN0IiwiczEiLCJzMiIsImxvYyIsInF1ZXJ5RWxlbWVudHMiLCJoYXNBdHRyaWJ1dGUiLCJjcmVhdGVSYW5nZSIsImNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCIsImZpcnN0Q2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0eWxlcyIsInBhcnNlciIsIkRPTVBhcnNlciIsInhtbERvYyIsInBhcnNlRnJvbVN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0YWdOYW1lIiwic2ltcGxlVHlwZXMiLCJ0Iiwic2VsZiIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QWhELENBQVY7QUFDQSxXQUFPLE9BQU9yQyxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxTQUFTOFgsQ0FBcEMsR0FBd0NBLENBQS9DO0FBQ0gsQ0FIRDs7a0JBS2V6RixZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZixJQUFNWSxZQUFZLFNBQVpBLFNBQVksQ0FBVXBQLEtBQVYsRUFBaUI0QixLQUFqQixFQUF3QnNTLElBQXhCLEVBQThCO0FBQzVDLFdBQU9BLEtBQUsvSyxPQUFMLENBQWFuSixLQUFiLE1BQXdCNEIsS0FBL0I7QUFDSCxDQUZEOztrQkFJZXdOLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xmOzs7Ozs7QUFHQSxJQUFNWCxNQUFNLGFBQVVBLElBQVYsRUFBZTtBQUN2QixRQUFNd0UsTUFBTSw0QkFBWjtBQUNBeEUsV0FBTUEsUUFBT3dFLElBQUlrQixRQUFqQjtBQUNBMUYsV0FBTUEsS0FBSW5ELE9BQUosQ0FBWSxPQUFaLEVBQXFCLEdBQXJCLENBQU47QUFDQSxXQUFPbUQsS0FBSXhULE1BQUosR0FBYSxDQUFiLElBQWtCd1QsS0FBSWpRLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixNQUFvQixHQUF0QyxHQUE0QyxNQUFNaVEsSUFBbEQsR0FBd0RBLElBQS9EO0FBQ0gsQ0FMRDs7a0JBT2VBLEciLCJmaWxlIjoiYW5pbWF0ZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIlxuLypcbmNvbnN0IGFuaW1hdGlvbiA9IEFuaW1hdGlvbkZyYW1lKCk7XG5wYXVzZSgpO1xuc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5jYW5jZWwoKTtcbiovXG4vKipcbiAqXG4gKiBAcmV0dXJucyB7e2R1cmF0aW9uOiBudW1iZXIsIHN0YXJ0cGFseTogbnVtYmVyLCBwYXVzZWQ6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIHJlcXVlc3RJZDogbnVtYmVyLCBjYWxsYmFjazogbnVtYmVyLCBwcm9ncmVzczogbnVtYmVyfX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uICgpXG57XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgcmVxdWVzdElkOiAwLFxuICAgICAgICBzdGFydHBhbHk6IDAsXG4gICAgICAgIHBhdXNlZDogZmFsc2UsXG4gICAgICAgIGNhbGxiYWNrOiAwLFxuICAgICAgICBkZWxheTogMCxcbiAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgIHByb2dyZXNzOiAwLFxuICAgIH07XG5cbiAgICByb290LnN0ZXAgPSBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgICAgIGlmICghcm9vdC5zdGFydHBhbHkpIHJvb3Quc3RhcnRwYWx5ID0gdGltZXN0YW1wO1xuICAgICAgICByb290LnByb2dyZXNzID0gdGltZXN0YW1wIC0gcm9vdC5zdGFydHBhbHk7XG5cbiAgICAgICAgaWYgKHJvb3QuY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2suY2FsbChyb290LCByb290LnByb2dyZXNzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyb290LmR1cmF0aW9uICYmIHJvb3QuZHVyYXRpb24gPiByb290LnByb2dyZXNzKSB7XG4gICAgICAgICAgICByb290LmNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyb290LnN0ZXApO1xuICAgICAgICBpZiAocm9vdC5wYXVzZWQpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJvb3QucGF1c2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QucGF1c2VkID0gIXJvb3QucGF1c2VkO1xuICAgIH07XG5cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb290LnJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICB9O1xuXG4gICAgcm9vdC5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShyb290LnJlcXVlc3RJZCk7XG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uRnJhbWU7XG4iLCJpbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcblxuZXhwb3J0IGNsYXNzIENsaXBDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb24oZWxlbWVudCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHBvc2l0aW9uLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc2V0UHJvcGVydGllcygpO1xuICAgIH1cblxuICAgIG1vdmVUbyhwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCBpbnN0YW5jZW9mIENsaXApIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnQgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb3B5VG8ocGFyZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGNvcHkodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5tb3ZlVG8ocGFyZW50KTtcbiAgICB9XG5cbiAgICBvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9XG5cbiAgICBjbG9uZSAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9XG5cbiAgICBzZXRQcm9wZXJ0aWVzKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvc2l0aW9uKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLnBvc2l0aW9uW2tleV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHBvc2l0aW9uKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMueCAtIHBhcmVudC54O1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy55IC0gcGFyZW50Lnk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCAodGhpcy5lbGVtZW50LmlkIHx8ICdjbGlwJykpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHsgYm90dG9tLCBlbGVtZW50LCBoZWlnaHQsIGxlZnQsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5IH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDbGlwID0gZnVuY3Rpb24gKGVsZW1lbnQpXG57XG4gICAgY29uc3Qgcm9vdCA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgaWYgKHJvb3QuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcG9zaXRpb24oZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgcm9vdC54ID0gcm9vdC54IC0gcGFyZW50Lng7XG4gICAgICAgIHJvb3QueSA9IHJvb3QueSAtIHBhcmVudC55O1xuICAgICAgICByb290LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCByb290LmVsZW1lbnQuaWQgfHwgJ2NsaXAnKTtcbiAgICB9XG5cbiAgICByb290Lm1vdmVUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByb290LnN0eWxlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9O1xuXG4gICAgcm9vdC5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByb290LmluamVjdChlbGVtLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDbGlwO1xuIiwiaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHtyYW5kb21IdW1hbml6ZVN0cmluZ30gZnJvbSBcIi4uL3N0YXRpYy9yYW5kb21cIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5cblxuLyoqXG4gKlxuY29uZmlnOlxuICAgIGlkOiAnaWQnLFxuICAgIHByb3BzOiB7fSxcbiAgICB0ZW1wbGF0ZTogYGAsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7fSxcbiAgICBjb21wbGV0ZSAoKSB7fSxcbiAgICBtZXRob2RzOiB7fSxcbiAgICBub2RlOiB7fSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBvdmVycmlkZTogZmFsc2UsXG4gICAgaW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG5cbkNvbXBvbmVudCh7XG4gICAgaWQ6ICdFeHRlcm5hbFRlbXBsYXRlQ29tcG9uZW50JyxcbiAgICBwcm9wczogWyd0aXRsZSddLFxuICAgIHRlbXBsYXRlOiAndGVtcGxhdGUnLFxuICAgIGluaXQgKCkge30sXG4gICAgZGF0YToge1xuICAgICAgICBpdGVyYXRvcjogMCxcbiAgICB9LFxuICAgIGNvbXBsZXRlIChhcHApIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZVsndGl0bGUnXSlcbiAgICAgICAgdGhpcy5ub2RlWyd0aXRsZSddLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgYWRkIChlKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaXRlcmF0b3IudGV4dENvbnRlbnQgPSArKyB0aGlzLmRhdGEuaXRlcmF0b3IgO1xuICAgICAgICB9LFxuICAgICAgICBtaW4gKGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pdGVyYXRvci50ZXh0Q29udGVudCA9IC0tIHRoaXMuZGF0YS5pdGVyYXRvciA7XG4gICAgICAgIH0sXG4gICAgfVxufSk7XG5cbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IENvbXBvbmVudCA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGdldCBwcm9wZXJ0eSBieSBpZCBrZXl3b3JkXG4gICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWddO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY29uZmlnLmlkKSB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tTmFtZSA9ICByYW5kb21IdW1hbml6ZVN0cmluZyg2KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmFuZG9tTmFtZSA9IHJhbmRvbU5hbWUuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyByYW5kb21OYW1lLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGNvbmZpZy5pZCA9ICdDb21wb25lbnQnICsgcmFuZG9tTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChDb21wb25lbnQubGlzdFtjb25maWcuaWRdKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29tcG9uZW50Lmxpc3RbY29uZmlnLmlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbXAgPSBDb21wb25lbnQuY3JlYXRlKGNvbmZpZyk7XG5cbiAgICAgICAgY29tcC5jb21wb25lbnQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wLmNvbXBvbmVudHNbaWRdID8gY29tcC5jb21wb25lbnRzW2lkXSA6IG51bGw7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29tcC5jb21wb25lbnRDaGlsZHJlbiA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY2hpbGRyZW4uZmluZCgoY29tcG9uZW50KSA9PiBjb21wb25lbnQuaWQgPT09IGlkKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNsb25lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICBjb25zdCBjbG9uZWQgPSBjbG9uZSh0aGlzKTtcbiAgICAgICAgICAgIGNsb25lZC50ZW1wbGF0ZSA9IGNsb25lZC50ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm4gY2xvbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5iZWZvcmUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5iZWZvcmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC50ZW1wbGF0ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlmKGlzSFRNTFN0cmluZyhjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbXAudGVtcGxhdGUgPSBzdHIybm9kZShjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHF1ZXJ5KGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAubWV0aG9kcyAmJiBPYmplY3QudmFsdWVzKGNvbXAubWV0aG9kcykubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLm1ldGhvZHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5tZXRob2RzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5tZXRob2RzW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcFtrZXldID0gY29tcC5tZXRob2RzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgY29tcC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFjb21wLmluaXRpYWxpemVkKXtcbiAgICAgICAgICAgIGNvbXAuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5pbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5kYXRhICYmIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkubGVuZ3RoKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb21wLmRhdGEpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcC5kYXRhW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5kYXRhW2tleV0gPSBjb21wLmRhdGFba2V5XS5iaW5kKGNvbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmNvbXBvbmVudHMgJiYgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuY29tcG9uZW50cykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCBjb21wLmNvbXBvbmVudHNba2V5XSAmJiBjb21wLmNvbXBvbmVudHNba2V5XS5oYXNPd25Qcm9wZXJ0eSgna2V5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wb25lbnRzW2tleV0ucGFyZW50ID0gY29tcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcC5jaGlsZHJlbi5wdXNoKGNvbXAuY29tcG9uZW50c1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTm9kZShjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgY29tcC5ub2RlID0gc2VhcmNoKCdbZGF0YS1ub2RlXScsICdkYXRhLW5vZGUnLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIGNvbXAub24gPSBzZWFyY2goJ1tkYXRhLW9uXScsICdkYXRhLW9uJywgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBjb21wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBjb21wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudC5saXN0W2NvbXAuaWRdID0gY29tcDtcbiAgICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxufTtcbkNvbXBvbmVudC5saXN0ID0ge307XG5Db21wb25lbnQuY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgICAgIG5vZGU6IHt9LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudDoge30sXG4gICAgfSwgY29uZmlnKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiLypcbmNvbnN0IGtleWJvYXJkID0gS2V5Ym9hcmRFdmVudE1hbmFnZXIoKTtcbmtleWJvYXJkLmVhY2goRVZFTlRfTkFNRSwgZnVuY3Rpb24gKGV2ZW50KSB7fSlcbmtleWJvYXJkLndpdGhDb25kaXRpb25LZXlcbmtleWJvYXJkLnByZXNzXG5rZXlib2FyZC51cFxua2V5Ym9hcmQuZG93blxuKi9cbmNvbnN0IEtleWJvYXJkRXZlbnRNYW5hZ2VyID0gZnVuY3Rpb24gKClcbntcbiAgICBjb25zdCBzdG9yYWdlID0ge307XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBhZGRTdG9yYWdlID0gZnVuY3Rpb24gKGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF0pIHN0b3JhZ2VbZXZlbnRdID0ge307XG4gICAgICAgIGlmICghc3RvcmFnZVtldmVudF1ba2V5XSkgc3RvcmFnZVtldmVudF1ba2V5XSA9IFtdO1xuICAgICAgICBzdG9yYWdlW2V2ZW50XVtrZXldLnB1c2goY2FsbGJhY2spO1xuXG4gICAgICAgIGlmICh0eXBlb2YgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gPSBiYXNlQ2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGJhc2VDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdG9yYWdlKS5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2VbdHlwZV0pLm1hcCgoa2V5Q29kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCBzdG9yYWdlW3R5cGVdW2tleUNvZGVdICkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZVt0eXBlXVtrZXlDb2RlXS5tYXAoKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gdHlwZSAmJiBwYXJzZUludChrZXlDb2RlKSA9PT0gZXZlbnQua2V5Q29kZSApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKGV2ZW50LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWFjaENhbGxiYWNrc0xpc3QgPSB7fTtcbiAgICBjb25zdCBlYWNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGNhbGxiYWNrO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBzZXR1cExpc3RlbmVycyAoKSB7XG4gICAgICAgIGNvbnN0IGFkZCA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBybSA9ICgpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJhc2VDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgYmFzZUNhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhlYWNoQ2FsbGJhY2tzTGlzdCkubWFwKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGVhY2hDYWxsYmFja3NMaXN0W2V2ZW50XSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBybSgpO1xuICAgICAgICBhZGQoKTtcbiAgICB9XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlYWNoKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgZWFjaENhbGxiYWNrKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICBzZXR1cExpc3RlbmVycygpO1xuICAgICAgICB9LFxuICAgICAgICB3aXRoQ29uZGl0aW9uS2V5KGV2ZW50LCBrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBhZGRTdG9yYWdlKGV2ZW50LCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXNzKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5cHJlc3MnLCBrZXksIGNhbGxiYWNrKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXAoa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXl1cCcsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBkb3duKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Qud2l0aENvbmRpdGlvbktleSgna2V5ZG93bicsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkRXZlbnRNYW5hZ2VyO1xuIiwiXG5cbi8qKlxuICogTG9hZGVyLmF1ZGlvczogxpIgKHNyY3MsIGNhbGxiYWNrKVxuICogTG9hZGVyLmltYWdlczogxpIgKGltZ3MsIGNhbGxiYWNrKVxuICogTG9hZGVyLmphdmFzY3JpcHQ6IMaSIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKVxuICogTG9hZGVyLmpzb246IMaSIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKVxuICogQHByb3BlcnR5XG4gKiBAbWV0aG9kIGpzb25cbiAqIEBtZXRob2QganNvbnNcbiAqIEBtZXRob2QgamF2YXNjcmlwdFxuICogQG1ldGhvZCBpbWFnZXNcbiAqIEBtZXRob2QgYXVkaW9zXG4gKiBAcmV0dXJucyB7e319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGpzb246IExvYWRlci5qc29uLFxuICAgICAgICBqc29uczogTG9hZGVyLmpzb25zLFxuICAgICAgICBqYXZhc2NyaXB0OiBMb2FkZXIuamF2YXNjcmlwdCxcbiAgICAgICAgaW1hZ2VzOiBMb2FkZXIuaW1hZ2VzLFxuICAgICAgICBhdWRpb3M6IExvYWRlci5hdWRpb3MsXG4gICAgICAgIHZpZGVvczogTG9hZGVyLnZpZGVvLFxuICAgIH07XG59O1xuXG4vKipcbiAqIC5qc29uKCcvdXJsL2RhdGFmaWxlLmpzb24nLCAoanNvbikgPT4ge30sIChlcnJvcikgPT4ge30pXG4gKlxuICogQHBhcmFtIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gb25lcnJvclxuICovXG5Mb2FkZXIuanNvbiA9IGZ1bmN0aW9uIChzcmMsIGNhbGxiYWNrLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4gY2FsbGJhY2soanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBvbmVycm9yXG4gKi9cbkxvYWRlci5qc29ucyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcilcbntcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIG9ialtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JpcHRzID0ge307XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgIExvYWRlci5qc29uKHNyYywgKGpzb24pID0+IHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW2tleV0gPSBqc29uO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yICsrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG9uZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmphdmFzY3JpcHQgKCB7XG4gKiAgICAgIG15X3NjcmlwdDE6ICcvcGF0aC90by9teV9zY3JpcHQxJyxcbiAqICAgICAgbXlfc2NyaXB0MjogJy9wYXRoL3RvL215X3NjcmlwdDInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiAuamF2YXNjcmlwdCAoIFtcbiAqICAgICAgJy9wYXRoL3RvL215X3NjcmlwdDEnLFxuICogICAgICAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTG9hZGVyLmphdmFzY3JpcHRcbiAqIEBwYXJhbSBzcmNzICAgICAgIE9iamVjdCwgQXJyYXkuIGl0ZW1zOiBrZXkgaXMgSUQsIHZhbHVlIGlzIHNyY1xuICogQHBhcmFtIGNhbGxiYWNrICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBhbGwgc3JjcyBpcyBsb2FkZWRcbiAqIEBwYXJhbSBvbmVycm9yICAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gbG9hZCBpcyBmYWlsZWRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5Mb2FkZXIuamF2YXNjcmlwdCA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcilcbntcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzcmNzKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIG9ialtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgbGV0IHNjcmlwdDtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcblxuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IChzcmNzW2tleV0uc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3Jjc1trZXldIDogc3Jjc1trZXldICsgJy5qcyc7XG4gICAgICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgIHNjcmlwdC5pZCA9IGtleTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNbdGhpcy5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcblxuLyoqXG4gKiBMb2FkIGFuIGltYWdlc1xuICpcbiAqIC5pbWFnZXMgKCB7XG4gKiAgICAgIGltZzE6ICcvcGF0aC90by9pbWcxJyxcbiAqICAgICAgaW1nMjogJy9wYXRoL3RvL2ltZzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmltYWdlc1xuICogQHBhcmFtIGltZ3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIuaW1hZ2VzID0gZnVuY3Rpb24gKGltZ3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGltZ3MgJiYgdHlwZW9mIGltZ3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGltZ3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaW1hZ2VzID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gaW1ncykge1xuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuc3JjID0gaW1nc1tuYW1lXTtcbiAgICAgICAgICAgIGltZy5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGltYWdlc1t0aGlzLm5hbWVdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGltYWdlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBMb2FkIGFuIGF1ZGlvIGZpbGVzXG4gKlxuICogLmF1ZGlvcyAoIHtcbiAqICAgICAgYXVkaW8xOiAnL3BhdGgvdG8vYXVkaW8xJyxcbiAqICAgICAgYXVkaW8yOiAnL3BhdGgvdG8vYXVkaW8yJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBBbmltYXRlLkxvYWRlci5hdWRpb3NcbiAqIEBwYXJhbSBzcmNzXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqL1xuTG9hZGVyLmF1ZGlvcyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaykge1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBsZW5ndGggPSBPYmplY3Qua2V5cyhzcmNzKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGF1ZGlvcyA9IHt9O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuICAgICAgICBmb3IgKGxldCBuYW1lIGluIHNyY3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXVkaW8nKTtcbiAgICAgICAgICAgIGF1ZGlvLnNyYyA9IHNyY3NbbmFtZV07XG4gICAgICAgICAgICBhdWRpby5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgIGF1ZGlvLnByZWxvYWQgPSAnYXV0byc7XG4gICAgICAgICAgICBhdWRpb3NbbmFtZV0gPSBhdWRpbztcbiAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGF1ZGlvcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIExvYWQgYW4gdmlkZW8gZmlsZXNcbiAqXG4gKiAudmlkZW9zICgge1xuICogICAgICB2aWRlbzE6ICcvcGF0aC90by92aWRlbzEnLFxuICogICAgICB2aWRlbzI6ICcvcGF0aC90by92aWRlbzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLnZpZGVvc1xuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIudmlkZW9zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdmlkZW9zID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd2aWRlbycpO1xuICAgICAgICAgICAgdmlkZW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgIHZpZGVvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgdmlkZW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgIHZpZGVvc1tuYW1lXSA9IHZpZGVvO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgdmlkZW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyO1xuIiwiLyoqXG5cbmEgKG0xMSkgSG9yaXpvbnRhbCBzY2FsaW5nLlxuYiAobTEyKSBIb3Jpem9udGFsIHNrZXdpbmcuXG5jIChtMjEpIFZlcnRpY2FsIHNrZXdpbmcuXG5kIChtMjIpIFZlcnRpY2FsIHNjYWxpbmcuXG5lIChkeCkgSG9yaXpvbnRhbCBtb3ZpbmcuXG5mIChkeSkgVmVydGljYWwgbW92aW5nLlxuKi9cbmNvbnN0IE1hdHJpeCA9IGZ1bmN0aW9uIChtMTEsIG0xMiwgbTIxLCBtMjIsIGd4LCBneSkge1xuICAgIHJldHVybiB7bTExLCBtMTIsIG0yMSwgbTIyLCBneCwgZ3l9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWF0cml4O1xuIiwiaW1wb3J0IENsaXAgZnJvbSBcIi4vQ2xpcFwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgcXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeVwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcblxuLypcbnJldHVybiBNb3ZlQ2xpcCh7XG4gICAgZWxlbWVudDogYDxkaXYgY2xhc3M9XCJzcHJpdGUgcmVjdFwiPjwvZGl2PmAsXG4gICAgcGFyZW50OiBBcHBDbGlwLFxuICAgIHg6IDEwMCxcbiAgICB5OiAxMDAsXG4gICAgaW5pdCgpe1xuICAgICAgICB0aGlzLnBhcmVudC5hcHBlbmQodGhpcy5lbGVtZW50KTtcblxuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IFtcbiAgICAgICAgICAgICdyb3RhdGUoJyArIDQ1ICsnZGVnKScsXG4gICAgICAgICAgICAnc2NhbGUoMC41LCAwLjUpJyxcbiAgICAgICAgXTtcbiAgICB9LFxufSlcbiovXG5jb25zdCBNb3ZlQ2xpcCA9IGZ1bmN0aW9uIChjb25maWcpXG57XG4gICAgY29uc3QgeyBlbGVtZW50IH0gPSBjb25maWc7XG4gICAgY29uc3QgY2xpcCA9IENsaXAoZWxlbWVudCk7XG5cbiAgICBpZighY2xpcC5lbGVtZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUHJvcGVydHkgW2VsZW1lbnRdIG5vdCBmb25kIScpO1xuICAgIH1cblxuICAgIGNsaXAuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWl2ZWNsaXAnLCBjb25maWcuaWQgfHwgJ21pdmVjbGlwJyk7XG5cbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICAvLyBjbGlwOiBjbGlwLFxuICAgICAgICBlbGVtZW50OiBjbGlwLmVsZW1lbnQsXG4gICAgICAgIGluaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgc2V0IHgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC54ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB5KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC55ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCB3aWR0aCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLndpZHRoID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC53aWR0aCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgaGVpZ2h0KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdmFsdWUgKyAncHgnO1xuICAgICAgICAgICAgY2xpcC5oZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHgoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC54XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB5KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueVxuICAgICAgICB9LFxuICAgICAgICBnZXQgd2lkdGgoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xpcC53aWR0aFxuICAgICAgICB9LFxuICAgICAgICBnZXQgaGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAuaGVpZ2h0XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3R5bGUob2JqZWN0KSB7XG4gICAgICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGRlbGV0ZSBjb25maWcuZWxlbWVudDtcbiAgICBkZWxldGUgY29uZmlnLmluaXRpYWxpemVkO1xuICAgIE9iamVjdC5rZXlzKGNvbmZpZykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcm9vdFtrZXldID0gY29uZmlnW2tleV1cbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2Ygcm9vdC5pbml0ID09PSAnZnVuY3Rpb24nICYmICFyb290LmluaXRpYWxpemVkKXtcbiAgICAgICAgcm9vdC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIHJvb3QuaW5pdC5jYWxsKHJvb3QpO1xuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoYXBwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgY2xvbmVQcm9wZXJ0eSA9IHRvT2JqZWN0KHJvb3QpO1xuICAgICAgICBjbG9uZVByb3BlcnR5LmVsZW1lbnQgPSByb290LmVsZW1lbnQuY2xvbmVOb2RlKHJvb3QpO1xuICAgICAgICBpZiAoYXBwZW5kKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChjbG9uZVByb3BlcnR5LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNb3ZlQ2xpcChjbG9uZVByb3BlcnR5KTtcbiAgICB9O1xuXG4gICAgcm9vdC5pbmplY3QgPSBmdW5jdGlvbiAoZWxlbSwgYXBwZW5kID0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtID0gcXVlcnkoZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5lbGVtZW50LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIH07XG5cbiAgICByb290LmFwcGVuZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJvb3QuaW5qZWN0KGVsZW0sIHRydWUpO1xuICAgIH07XG5cbiAgICByb290Lm9uID0gZnVuY3Rpb24gKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICByb290LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2FsbGJhY2spXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92ZUNsaXA7XG4iLCJcbmNvbnN0IFBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4ge3gsIHl9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJcbmNvbnN0IFJlY3RhbmdsZSA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHt4LCB5LCB3aWR0aCwgaGVpZ2h0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIi8qXG5jb25zdCBSeFN0YXRlID0gUm94eSh7XG4gICAgdGl0bGU6ICcnLFxuICAgIGJvZHk6ICcnLFxufSk7XG5cblJ4U3RhdGUuZXZlbnQoKGtleSwgdmFsdWVzKT0+e1xuICAgIGlmIChrZXkgPT09ICcnKSB7fVxuICAgIGluamVjdCgnIycgKyBrZXksIHZhbHVlcyk7XG59KTtcblxuUnhTdGF0ZS5wcm94eS50aXRsZSA9ICdGaXJzdCB2YWx1ZSc7XG5SeFN0YXRlLnByb3h5LmJvZHkgPSAnVGVzdCBib2R5IHRleHQnO1xuXG5UaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICBSeFN0YXRlLmRpc3BhdGNoKCd0aXRsZScsICdIZWxsbyBmcmllbmQnKTtcbiAgICBSeFN0YXRlLmRpc3BhdGNoKCdib2R5JywgJ0RvIHlvdSBoYXBweSBub3c/Jyk7XG59LCAyMDAwKTtcblxuKi9cblxuLyoqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgc2V0KCo9LCAqPSk6ICosIGdldCgqKTogKiwgYWN0aW9uKCo9LCAqPSk6ICosIGZpbGwoKj0sICo9KTogKn18Um94eXx7fXxudWxsfGJvb2xlYW59XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFJveHkgPSBmdW5jdGlvbiAocGF5bG9hZClcbntcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MgPSB7XG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHBheWxvYWQsIHtcbiAgICAgICAgZ2V0KG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG9iaiwgcHJvcCwgdmFsdWUpIHtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gJiYgdHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXS5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9sZGVyIG5hbWU6IHNlZXxzZXQ/XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIHBheWxvYWRcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaChrZXksIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBrZXkuY2FsbCh7fSwgcHJveHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbChyZXN1bHQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3Rpb24oKVxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50KGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmUoa2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGNoYW5nZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZlKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPSBrZXk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3Nba2V5XSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID8gcHJveHlba2V5XSA6IGNvcHkocHJveHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGwocGF5bG9hZCwgdG8pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5W3RvXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm94eVt0b11ba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJveHk7XG4iLCJpbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5cbi8qKlxuICogY29uc3QgcnggPSBSb3h5TGlzdGVuZXIgKHtcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiB9KVxuICogcnguc2V0KCk7XG4gKiByeC5kaXNwYXRjaCgpO1xuICpcbiAqIHJ4LmFjdGlvbigpO1xuICpcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBkaXNwYXRjaCgqPSwgKj0pOiBSb3h5LCBnZXQoKik6ICosIGV2ZW50KCo9LCAqPSk6IHRoaXMsIGZpbGwoKj0sICo9KTogdGhpc319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUm94eUxpc3RlbmVyID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgICAgIF9fYWN0aW9uX18oKSB7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aW9uc05hbWVzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdID0gcGF5bG9hZFtldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nICYmIGV2ZW50TmFtZSAhPT0gYWN0aW9ucy5fX2FjdGlvbl9fLm5hbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbnNOYW1lc1tldmVudE5hbWVdID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ4ID0gUm94eShhY3Rpb25zTmFtZXMpO1xuICAgIC8vXG4gICAgcnguYWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnNOYW1lc1xuICAgIH07XG5cbiAgICByeC5ldmVudCgoZXZlbnRDdXJzb3IsIHZhbHVlcykgPT4ge1xuICAgICAgICBhY3Rpb25zLl9fYWN0aW9uX18uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50Q3Vyc29yID09PSBldmVudE5hbWUgJiYgdHlwZW9mIGFjdGlvbnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXS5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJ4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm94eUxpc3RlbmVyO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuXG4vKlxuY29uc3Qgc2NlbmUgPSBTY2VuZSgpO1xuc2NlbmUuYWRkKCdlZGl0b3InLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLmFkZCgnb3V0cHV0JywgZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBjb25zb2xlLmxvZyhhLCBiLCBjLCBkKTtcbn0pXG5zY2VuZS5ydW4oJ291dHB1dCcsIFsnaGVsbG8nLCAyMDAsIHt9XSk7XG4qL1xuLyoqXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHt7Y3VycmVudDogc3RyaW5nLCBzY2VuZXM6IHtkZWZhdWx0OiB7Y2FsbGJhY2soKTogdm9pZCwgYXR0cnM6IFtdfX0sIGVsZW1lbnQ6IG51bGx9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFNjZW5lID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBjdXJyZW50OiAnZGVmYXVsdCcsXG4gICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHNjZW5lczoge1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkge2NvbnNvbGUubG9nKCdbRGVmYXVsdCBTY2VuZV0nKX0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgYXR0cnMgPSBbXSkge1xuICAgICAgICByb290LnNjZW5lc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByb290LmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiByb290LnNjZW5lc1tuYW1lXTtcbiAgICB9XG5cbiAgICByb290LmdldEN1cnJlbnRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW3Jvb3QuY3VycmVudF07XG4gICAgfVxuXG4gICAgcm9vdC5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm9vdC5zY2VuZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSByb290LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5ydW4obGVzdCk7XG4gICAgfTtcblxuICAgIHJvb3QucnVuID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHtcbiAgICAgICAgcm9vdC5jdXJyZW50ID0ga2V5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByb290LmdldEN1cnJlbnRTY2VuZSgpO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHNjZW5lLmNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMgPSBBcnJheS5pc0FycmF5KGF0dHJzKSA/IGF0dHJzIDogW2F0dHJzXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoY2FsbGJhY2ssIGF0dHJzID8gYXR0cnMgOiBzY2VuZS5hdHRycyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgcm9vdC5zaG93ID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHsgcm9vdC5ydW4oa2V5LCBhdHRycykgfTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHsgcm9vdC5ydW4oa2V5LCBhdHRycykgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5zY2VuZXMgJiYgcHJvcGVydGllcy5zY2VuZXMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzLnNjZW5lcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICByb290LmFkZChrZXksIHByb3BlcnRpZXMuc2NlbmVzW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjZW5lO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuLyoqXG4gKlxuICAgIGNvbnN0IHN0ZXBzQXR0YWNrSGVybyA9IFN0ZXBzU2NlbmUoe1xuICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgc3RlcHM6IFtcbiAgICAgICAgICAgIHtuYW1lOiAnc3RhcnRfYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFjaycsIGNhbGxiYWNrOiBmdW5jfSxcbiAgICAgICAgICAgIHtuYW1lOiAnaGVyb19hdHRhY2tfYW5pbWF0aW9uJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdlbmRfYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZWFjaFN0ZXBzKGZ1bmN0aW9uIChjYk9iamVjdCwgaW5kZXgpIHt9KTtcbiAgICBzdGVwc0F0dGFja0hlcm8ubmV4dCgpO1xuXG4gICAgc3RlcHNBdHRhY2tIZXJvLmdvdG8oJ2hlcm9fYXR0YWNrX2FuaW1hdGlvbicpLm5leHQoKTtcbiAgICBzdGVwc0F0dGFja0hlcm8uc3RvcCgpO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqIEByZXR1cm5zIHthbnl9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgU3RlcHNTY2VuZSA9IGZ1bmN0aW9uIChjb25maWcgPSB7c3RlcHM6IFtdfSkge1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGl0ZXJhdGlvbjogMCxcbiAgICAgICAgbG9vcDogY29uZmlnLmxvb3AgfHwgZmFsc2UsXG4gICAgICAgIHN0ZXBfaXRlcmF0aW9uOiAwLFxuICAgICAgICBzdGVwX3N0b3A6IGZhbHNlLFxuICAgICAgICBzdGVwX2NhbGxiYWNrX2VhY2g6IG51bGwsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tzOiBjb25maWcuc3RlcHMgfHwge30sXG4gICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgcm9vdC5wbGF5KCk7XG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gMDtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBzdG9wKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX3N0b3AgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYXkoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSByb290LnN0ZXBfY2FsbGJhY2tzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVsYXkobXMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgY2FsbGJhY2suY2FsbChyb290KTsgfSwgbXMpO1xuICAgICAgICB9LFxuICAgICAgICBnb3RvKG5hbWUpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja3MuZm9yRWFjaCgob2JqZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZWFjaFN0ZXBzKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9IGNhbGxiYWNrO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQoKSB7XG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX3N0b3ApIHJldHVybiByb290O1xuXG4gICAgICAgICAgICBpZiAocm9vdC5zdGVwX2l0ZXJhdGlvbiA+IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGlmICghcm9vdC5sb29wKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY3VycmVudENhbGxiYWNrT2JqZWN0ID0gcm9vdC5zdGVwX2NhbGxiYWNrc1tyb290LnN0ZXBfaXRlcmF0aW9uXTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiByb290LnN0ZXBfY2FsbGJhY2tfZWFjaCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICByb290LnN0ZXBfY2FsbGJhY2tfZWFjaC5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICBjdXJyZW50Q2FsbGJhY2tPYmplY3QuY2FsbGJhY2suY2FsbChyb290LCBjdXJyZW50Q2FsbGJhY2tPYmplY3QsIHJvb3Quc3RlcF9pdGVyYXRpb24sIHJvb3QuaXRlcmF0aW9uKTtcblxuICAgICAgICAgICAgcm9vdC5pdGVyYXRpb24rK1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbisrXG5cbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgIH1cblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJvb3Q7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGVwc1NjZW5lO1xuIiwiXG5jb25zdCBUaW1lciA9IGZ1bmN0aW9uIChjYWxsYmFjaywgZGVsYXksIHJlcGVhdCwgdGhpc0luc3RhbmNlKSB7XG4gICAgdGhpcy5yZXBlYXQgPSByZXBlYXQ7XG4gICAgdGhpcy5pdGVyYXRvciA9IDA7XG59O1xuXG5cblRpbWVyLnNldFRpbWVvdXQgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzSW5zdClcbiAgICAgICAgfSwgbXMpXG4gICAgfVxufTtcblRpbWVyLnNldEludGVydmFsID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBtcywgdGhpc0luc3QpIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nICYmICFpc05hTihtcykgJiYgbXMgPiAwKSB7XG4gICAgICAgIHRoaXNJbnN0ID0gdHlwZW9mIHRoaXNJbnN0ID09PSAnb2JqZWN0JyA/IHRoaXNJbnN0IDoge307XG4gICAgICAgIHJldHVybiBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuY2xlYXJUaW1lb3V0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKVxufTtcblRpbWVyLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhckludGVydmFsKGlkKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGltZXI7IiwiaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcblxuY29uc3QgVHJhbnNmb3JtID0gZnVuY3Rpb24gKGVsZW1lbnQsIHBhcmFtcylcbntcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICB0cmFuc2Zvcm1fb2JqOiB7fSxcbiAgICAgICAgdHJhbnNmb3JtX2FycjogZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKS5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKSxcbiAgICAgICAgdHJhbnNmb3JtX3N0cmluZzogJycsXG5cbiAgICAgICAgdXBkYXRlKCl7XG4gICAgICAgICAgICByb290LnRyYW5zZm9ybV9zdHJpbmcgPSAnJztcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocm9vdC50cmFuc2Zvcm1fb2JqKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9zdHJpbmcgKz0ga2V5ICsgJygnICsgcm9vdC50cmFuc2Zvcm1fb2JqW2tleV0uam9pbignLCAnKSArICcpICc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICByb290LnRyYW5zZm9ybV9zdHJpbmc7XG4gICAgICAgICAgICByb290LnJlc2VhcmNoKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kKG1ldGhvZCwgcHJvcGVydGllcywgbXVsdGlwbHkgPSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IEFycmF5LmlzQXJyYXkocHJvcGVydGllcykgPyBwcm9wZXJ0aWVzIDogW3Byb3BlcnRpZXNdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG11bHRpcGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ID0gdmFsdWUubWF0Y2goL1thLXpdKy9nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtID0gcGFyc2VJbnQodmFsdWUpICsgcGFyc2VJbnQocm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF1baV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2ldID0gbnVtICsgZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaV0gPSB2YWx1ZSArIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXSA9IHByb3BlcnRpZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXRzIHBhcmFtZXRlcnMgaXMgbm90IGF2YWlsYWJsZScpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzZWFyY2goKXtcbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX2FyciA9IGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtLnNwbGl0KCcpJylcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUubGVuZ3RoICk7XG5cbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX2Fyci5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtID0gcm9vdC50cmFuc2Zvcm1fYXJyW2ldID0gcm9vdC50cmFuc2Zvcm1fYXJyW2ldLnRyaW0oKSAgKyAnKSc7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hlZCA9IHBhcmFtLm1hdGNoKC9bXFx3XFwuXFwtXSsvaWcpO1xuICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttYXRjaGVkWzBdXSA9IG1hdGNoZWQuc2xpY2UoMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5yZXNlYXJjaCgpO1xuXG4gICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5tZXRob2Qoa2V5LCBwYXJhbXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByb290LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufVxuXG5UcmFuc2Zvcm0uZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZSl7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gW107XG4gICAgICAgIHZhbHVlLmZvckVhY2goKHByb3ApID0+IHsgcHJvcHMucHVzaChwcm9wKSB9KTtcbiAgICAgICAgc3R5bGl6ZXIoZWxlbWVudCwge3RyYW5zZm9ybTogcHJvcHMuam9pbignICcpfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5cbmltcG9ydCBDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xpcC5qc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IEtleWJvYXJkRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanNcIjtcbmltcG9ydCBNb3ZlQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL01vdmVDbGlwLmpzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgTWF0cml4IGZyb20gXCIuL2NvbXBvbmVudHMvTWF0cml4XCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9jb21wb25lbnRzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xuXG5jb25zdCBBbmltYXRlID0ge1xuICAgIENsaXAsXG4gICAgQ29tcG9uZW50LFxuICAgIENvbXBvbmVudENsYXNzLFxuICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgIE1vdmVDbGlwLFxuICAgIE1vdmVDbGlwQ2xhc3MsXG4gICAgU2NlbmUsXG4gICAgU2NlbmVDbGFzcyxcbiAgICBTdGVwc1NjZW5lLFxuICAgIFRpbWVyLFxuICAgIFJveHlMaXN0ZW5lcixcbiAgICBSb3h5LFxuICAgIEFuaW1hdGlvbkZyYW1lLFxuICAgIExvYWRlcixcbiAgICBNYXRyaXgsXG4gICAgUG9pbnQsXG4gICAgUmVjdGFuZ2xlLFxuICAgIFRyYW5zZm9ybSxcbn07XG5cbmNvbnN0IFJBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFX0FTX1JBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOICogMzYwO1xuY29uc3QgUEkgPSAzLjE0MTU5MjY1MzU5O1xuY29uc3QgUkFEX1RPX0RFR1JFRVMgPSAzLjE0MTU5MjY1MzU5O1xuXG5BbmltYXRlLlJBRElBTiA9IFJBRElBTjtcbkFuaW1hdGUuREVHUkVFX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU47XG5BbmltYXRlLkRFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFXzM2MF9BU19SQURJQU47XG5BbmltYXRlLlBJID0gUEk7XG5BbmltYXRlLlJBRF9UT19ERUdSRUVTID0gUkFEX1RPX0RFR1JFRVM7XG5cbkFuaW1hdGUuU3RhdGljID1cbiAgICBBbmltYXRlLlV0aWwgPVxuICAgICAgICBTdGF0aWM7XG5cbmlmIChnZXRXaW5kb3coKSkge1xuICAgIGdldFdpbmRvdygpLkFuaW1hdGUgPSBBbmltYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlO1xuIiwiXG5leHBvcnQgY29uc3QgTEVUVEVSX0NPTlNPTkFOVCA9ICdCLEMsRCxGLEcsSCxKLEssTCxNLE4sUCxRLFIsUyxULFYsVyxYLFksWic7XG5leHBvcnQgY29uc3QgTEVUVEVSX1ZPV0VMID0gJ0EsRSxJLE8sVSxZJztcbmV4cG9ydCBjb25zdCBBQkMgPSAnQSxCLEMsRCxFLEYsRyxILEksSixLLEwsTSxOLE8sUCxRLFIsUyxULFUsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBOVU1CRVJTID0gJzAsMSwyLDMsNCw1LDYsNyw4LDknO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORCA9ICcmJztcbiIsImltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5cblxuY29uc3QgYXR0ciA9IGZ1bmN0aW9uIChlbGVtZW50LCBuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGVfZWxlbWVudCA9IHR5cGVPZihlbGVtZW50KTtcbiAgICBpZiAodHlwZV9lbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBlbGVtZW50ID0gcXVlcnkoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIGlmICh0eXBlT2YobmFtZSwgJ29iamVjdCcpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gbmFtZSlcbiAgICAgICAgICAgICAgICBhdHRyKGVsZW1lbnQsIGtleSwgbmFtZVtrZXldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzTm9kZShlbGVtZW50KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICBlbHNlIGVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhdHRyO1xuIiwiLyoqXG4gKlxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSB0b1xuICogQHJldHVybnMgeyp9XG4gKi9cbmZ1bmN0aW9uIGNsb25lKGZyb20sIHRvKVxue1xuICAgIGlmIChmcm9tID09PSBudWxsIHx8IHR5cGVvZiBmcm9tICE9PSBcIm9iamVjdFwiKSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciAhPT0gT2JqZWN0ICYmIGZyb20uY29uc3RydWN0b3IgIT09IEFycmF5KSByZXR1cm4gZnJvbTtcbiAgICBpZiAoZnJvbS5jb25zdHJ1Y3RvciA9PT0gRGF0ZSB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBSZWdFeHAgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gRnVuY3Rpb24gfHxcbiAgICAgICAgZnJvbS5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nIHx8IGZyb20uY29uc3RydWN0b3IgPT09IE51bWJlciB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBCb29sZWFuKSB7XG4gICAgICAgIHJldHVybiBuZXcgZnJvbS5jb25zdHJ1Y3Rvcihmcm9tKTtcbiAgICB9XG5cbiAgICB0byA9IHRvIHx8IG5ldyBmcm9tLmNvbnN0cnVjdG9yKCk7XG5cbiAgICBmb3IgKG5hbWUgaW4gZnJvbSlcbiAgICB7XG4gICAgICAgIHRvW25hbWVdID0gdHlwZW9mIHRvW25hbWVdID09IFwidW5kZWZpbmVkXCIgPyBjbG9uZShmcm9tW25hbWVdLCBudWxsKSA6IHRvW25hbWVdO1xuICAgIH1cblxuICAgIHJldHVybiB0bztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xvbmU7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuY29uc3QgY29weSA9IGZ1bmN0aW9uIChzcmMsIGluc3RhbmNlKVxue1xuICAgIGlmIChpc05vZGUoc3JjKSlcbiAgICAgICAgcmV0dXJuIHNyYy5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLnNsaWNlKCk7XG5cbiAgICBpZiAodHlwZW9mIHNyYyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgcmV0dXJuIHNyYy5iaW5kKGluc3RhbmNlIHx8IHt9KTtcblxuICAgIGlmICh0eXBlT2Yoc3JjLCAnb2JqZWN0JykpIHtcbiAgICAgICAgLy8gcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHNyYyk7XG4gICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNyY1trZXldO1xuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBjb3B5KHZhbHVlLCB0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIiA/IHNyYyA6IHt9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNyYztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvcHk7XG4iLCIvKlxuXG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSk7XG5jb25zdCBhcnIwID0gY3JlYXRlQXJyYXkoNSwgdHJ1ZSk7XG5jb25zdCBhcnIxID0gY3JlYXRlQXJyYXkoNSwgMSk7XG5jb25zdCBhcnIyID0gY3JlYXRlQXJyYXkoNSwgJ2hlbGxvIHdvcmxkJyk7XG5jb25zdCBhcnIzID0gY3JlYXRlQXJyYXkoNSwgWzEwMCwyMDAsMzAwXSk7XG5jb25zdCBhcnI0ID0gY3JlYXRlQXJyYXkoNSwge2E6J0EnLGI6J0InLGM6J0MnfSk7XG5cbiovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSBudW1cbiAqIEBwYXJhbSBmaWxsXG4gKiBAcmV0dXJucyB7YW55W119XG4gKi9cbmNvbnN0IGNyZWF0ZUFycmF5ID0gZnVuY3Rpb24gKG51bSwgZmlsbCkge1xuICAgIGxldCBhcnIgPSBbXTtcblxuICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGZpbGwgPT09ICdzdHJpbmcnICl7XG4gICAgICAgIHJldHVybiBuZXcgQXJyYXkobnVtKS5maWxsKGZpbGwpO1xuICAgIH1cblxuICAgIGFyciA9IG5ldyBBcnJheShudW0pLmZpbGwoMCk7XG4gICAgYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgZmlsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgciA9IGZpbGwuY2FsbChmaWxsLCBpLCBpKTtcbiAgICAgICAgICAgIGFycltpXSA9IHR5cGVvZiByID09PSAnYm9vbGVhbicgfHwgciA/IHIgOiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShmaWxsKSkgYXJyW2ldID0gZmlsbFtpXSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogZmlsbFtpXSA7XG4gICAgICAgIGVsc2UgYXJyW2ldID0gZmlsbDtcbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFycmF5O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gZnVuY3Rpb24gKHRhZywgYXR0cnMsIGlubmVyKSB7XG4gICAgY29uc3RcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKSxcbiAgICAgICAgaXNfYXR0ciA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlT2Yoc3JjLCAnb2JqZWN0JykgJiYgIWlzTm9kZShzcmMpXG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9odG1sID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHNyYyk7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydF9jaGlsZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0ID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVPZihzcmMpO1xuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIGluc2VydF9odG1sKHNyYyk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiBpc05vZGUoc3JjKSlcbiAgICAgICAgICAgICAgICBpbnNlcnRfY2hpbGQoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdhcnJheScpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIGluc2VydChzcmNbaV0pO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgIWlzX2F0dHIoYXR0cnMpKSB7XG4gICAgICAgIGlubmVyID0gYXR0cnM7XG4gICAgICAgIGF0dHJzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJzKVxuICAgICAgICBmb3IgKGxldCBrIGluIGF0dHJzKVxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pO1xuXG4gICAgaWYgKGlubmVyKVxuICAgICAgICBpbnNlcnQoaW5uZXIpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVFbGVtZW50O1xuIiwiaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuXG5jb25zdCBjcmVhdGVGcmFnbWVudCA9IGZ1bmN0aW9uIChhcHBlbmQpIHtcbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmIChpc05vZGUoYXBwZW5kKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYXBwZW5kKTtcblxuICAgIGlmICh0eXBlT2YoYXBwZW5kLCAnc3RyaW5nJykpXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHN0cjJub2RlKGFwcGVuZCkpO1xuXG4gICAgcmV0dXJuIGZyYWdtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGcmFnbWVudDtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGlzTm9kZSBmcm9tICcuL2lzTm9kZSc7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cblxuY29uc3QgY3NzID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKCFzZWxlY3RvciB8fCAhcHJvcGVydGllcykgcmV0dXJuO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGNvbnN0IHByb3AgPSB7fTtcbiAgICAgICAgcHJvcFtwcm9wZXJ0aWVzXSA9IGFyZ3VtZW50c1syXTtcbiAgICAgICAgcmV0dXJuIGNzcyhzZWxlY3RvciwgcHJvcCk7XG4gICAgfVxuXG4gICAgbGV0IGksIGssIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgdHlwZVNlbGVjdG9yID0gdHlwZU9mKHNlbGVjdG9yKSxcbiAgICAgICAgdHlwZVByb3BlcnRpZXMgPSB0eXBlT2YocHJvcGVydGllcyksXG4gICAgICAgIHBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuICAgICAgICAgICAgbGV0IGksIHAxID0gc3RyLnNwbGl0KCc7JyksIHAyLCBwbiwgaXgsIG8gPSB7fTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwMS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHAyID0gcDFbaV0uc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBwbiA9IHAyWzBdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpeCA9IHBuLmluZGV4T2YoJy0nKTtcbiAgICAgICAgICAgICAgICBpZiAoaXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBwbiA9IHBuLnN1YnN0cmluZygwLCBpeCkgKyBwbltpeCArIDFdLnRvVXBwZXJDYXNlKCkgKyBwbi5zdWJzdHJpbmcoaXggKyAyKTtcbiAgICAgICAgICAgICAgICBpZiAocDIubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgICAgICBvW3BuXSA9IHAyWzFdLnRyaW0oKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH07XG5cblxuICAgIHN3aXRjaCAodHlwZVNlbGVjdG9yKSB7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKGVsZW1lbnRzKSB7XG5cbiAgICAgICAgaWYgKHR5cGVQcm9wZXJ0aWVzID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwYXJzZShwcm9wZXJ0aWVzKTtcblxuICAgICAgICBmb3IgKGkgaW4gZWxlbWVudHMpXG4gICAgICAgICAgICBmb3IgKGsgaW4gcHJvcGVydGllcylcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5zdHlsZVtrXSA9IHByb3BlcnRpZXNba107XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnRzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjc3M7XG4iLCJcbmNvbnN0IGRlY29kZUdldFF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgY29uc3QgcGFpcnMgPSAocXVlcnlbMF0gPT09ICc/JyA/IHF1ZXJ5LnN1YnN0cigxKSA6IHF1ZXJ5KS5zcGxpdCgnJicpO1xuICAgIHBhaXJzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICByZXN1bHRbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdIHx8ICcnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVjb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGRlZmluZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWQ7XG4iLCJcbmNvbnN0IGRlZmluZWRJbiA9IGZ1bmN0aW9uIChzdGFjaywgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RhY2sgJiYgc3RhY2tbdmFsdWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVkSW47XG4iLCJpbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCBkb21Mb2FkZWQgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGlmIChkb2MucXVlcnlTZWxlY3RvcignYm9keScpKVxuICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgZWxzZVxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKVxuICAgICAgICB9LCBmYWxzZSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkb21Mb2FkZWQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cblxuLypjb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCB0bXApIHtcbiAgICBpZiAobGlzdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc05vZGUobGlzdCkpIHtcbiAgICAgICAgZWFjaChbXS5zbGljZS5jYWxsKGxpc3QuY2hpbGROb2RlcyksIGNhbGxiYWNrLCB0bXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIGl0ZW0sIGksIHRtcCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07Ki9cblxuY29uc3QgZWFjaCA9IGZ1bmN0aW9uIChsaXN0LCBjYWxsYmFjaywgaW5zdGFuY2UgPSB7fSkge1xuICAgIGxldCB0eXBlID0gdHlwZU9mKGxpc3QpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goKGksIHYsIGEpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGksIHYsIGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgICAgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0IGluc3RhbmNlb2YgTm9kZUxpc3QpXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBlYWNoKEFycmF5LmZyb20obGlzdCksIGNhbGxiYWNrLCBpbnN0YW5jZSlcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGxpc3QgPSBlYWNoKFtsaXN0XSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoa2V5KSA9PiBjYWxsYmFjay5jYWxsKGluc3RhbmNlLCBrZXksIGxpc3Rba2V5XSwgbGlzdCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChsaXN0LnNwbGl0KFwiXCIpLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICBjb25zdCBhcnIgPSAobmV3IEFycmF5KGxpc3QpKS5maWxsKDApO1xuICAgICAgICAgICAgbGlzdCA9IGVhY2goYXJyLCBjYWxsYmFjaywgaW5zdGFuY2UpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG59O1xuXG5lYWNoLnBhcmVudCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZmlsdGVyLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZ2V0UGFyZW50KGVsZW1lbnQpO1xuICAgIH1cbn07XG5cbmVhY2guZmlsdGVyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGNhbGxiYWNrLCBsb29wcyA9IDEwKSB7XG4gICAgY29uc3QgZ2V0UGFyZW50ID0gKGVsZW0pID0+IGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlID8gZWxlbS5wYXJlbnROb2RlIDogZmFsc2U7XG4gICAgbGV0IGVsZW1lbnQgPSBpc05vZGUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBxdWVyeShzZWxlY3Rvcik7XG4gICAgd2hpbGUgKGxvb3BzID4gMCAmJiBlbGVtZW50KSB7XG4gICAgICAgIGxvb3BzLS07XG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUgJiYgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoZmlsdGVyKSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWFjaDtcbiIsIlxuY29uc3QgZW5jb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIHJlc3VsdCArPSAoKHJlc3VsdC5sZW5ndGgpID8gJyYnIDogJz8nKSArIGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5jb2RlR2V0UXVlcnk7XG4iLCJcbmNvbnN0IGV4aXN0cyA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQgJiYgc3JjICE9PSBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhpc3RzO1xuIiwiXG5cbmV4cG9ydCBjb25zdCBleHRlbmQgPSBmdW5jdGlvbiAoZGVzdGluYXRpb24sIHNvdXJjZSkge1xuICAgIGZvciAobGV0IHBhcmFtIGluIHNvdXJjZSlcbiAgICAgICAgaWYgKHNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwYXJhbV0gPSBzb3VyY2VbcGFyYW1dO1xuXG4gICAgZnVuY3Rpb24gX18oKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBkZXN0aW5hdGlvbjtcbiAgICB9XG5cbiAgICBfXy5wcm90b3R5cGUgPSBzb3VyY2UucHJvdG90eXBlO1xuICAgIGRlc3RpbmF0aW9uLnByb3RvdHlwZSA9IG5ldyBfXygpO1xufTtcblxuZXhwb3J0IGNvbnN0IGV4dGVuZFJlY3Vyc2l2ZSA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgbGV0IHByb3BlcnR5O1xuICAgIGZvciAocHJvcGVydHkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChzb3VyY2VbcHJvcGVydHldICYmIHNvdXJjZVtwcm9wZXJ0eV0uY29uc3RydWN0b3IgJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gfHwge307XG4gICAgICAgICAgICBleHRlbmRSZWN1cnNpdmUoZGVzdGluYXRpb25bcHJvcGVydHldLCBzb3VyY2VbcHJvcGVydHldKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICBkZXN0aW5hdGlvbltwcm9wZXJ0eV0gPSBzb3VyY2VbcHJvcGVydHldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdGluYXRpb247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleHRlbmQ7XG4iLCJpbXBvcnQgZmluZE9iamVjdHMgZnJvbSAnLi9maW5kT2JqZWN0cyc7XG5cblxuY29uc3QgZmluZE9iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGNvbnN0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcFswXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZE9iamVjdDtcbiIsIlxuXG5jb25zdCBmaW5kT2JqZWN0cyA9IGZ1bmN0aW9uIChsaXN0LCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgaSwgdG1wID0gW107XG4gICAgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09IFwib2JqZWN0XCIpXG4gICAgICAgIGxpc3QgPSBPYmplY3QudmFsdWVzKGxpc3QpO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgaWYgKGxpc3RbaV0gJiYgbGlzdFtpXVthdHRyXSAhPT0gdW5kZWZpbmVkICYmIGxpc3RbaV1bYXR0cl0gPT09IGF0dHJWYWx1ZSlcbiAgICAgICAgICAgICAgICB0bXAucHVzaChsaXN0W2ldKTtcblxuICAgIHJldHVybiB0bXAgO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmRzID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgbGV0IHRtcCA9IGZpbmRPYmplY3RzKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKTtcbiAgICByZXR1cm4gdG1wLmxlbmd0aCA/IHRtcCA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbmQgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0cztcbiIsIlxuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcbmltcG9ydCBkZWZpbmVkIGZyb20gXCIuL2RlZmluZWRcIjtcbmltcG9ydCBub2RlMnN0ciBmcm9tIFwiLi9ub2RlMnN0clwiO1xuXG5cbi8qKlxuICogRm9ybWF0dGluZyBvZiBzdHJpbmcsIG9yIG1heWJlIHRlbXBsYXRlIGJ1aWxkZXJcbiAqXG4gKiBFeGFtcGxlczpcbiAqIC5mb3JtYXQoXCJIZWxsbyB7MH0sIHlvdXIgY29kZSBpcyB7MX0hXCIsIFsnSmFkZScsICdQcmVmZWN0J10pO1xuICogLmZvcm1hdChcIkhlbGxvIHtuYW1lfSwgeW91ciBjb2RlIGlzIHttZWFufSFcIiwge25hbWU6J0phZGUnLCBtZWFuOiAnUHJlZmVjdCd9KTtcbiAqXG4gKiBAcGFyYW0gc3RyaW5nICAgIFN0cmluZ1xuICogQHBhcmFtIGxpc3QgIEFycmF5fE9iamVjdFxuICogQHJldHVybnMgc3RyaW5nXG4gKi9cbmNvbnN0IGZvcm1hdCA9IGZ1bmN0aW9uIChzdHJpbmcsIGxpc3QpIHtcbiAgICBsZXQgcmVnO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3QpKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcZCspfS9nKTtcbiAgICBlbHNlIGlmIChsaXN0ICYmIHR5cGVvZiBsaXN0ID09PSAnb2JqZWN0JylcbiAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCgveyhcXHcrKX0vZyk7XG5cbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICBpZiAoZGVmaW5lZChsaXN0W251bWJlcl0pICYmIGlzTm9kZShsaXN0W251bWJlcl0pKVxuICAgICAgICAgICAgbGlzdFtudW1iZXJdID0gbm9kZTJzdHIobGlzdFtudW1iZXJdKTtcblxuICAgICAgICByZXR1cm4gdHlwZW9mIGxpc3RbbnVtYmVyXSAhPT0gdW5kZWZpbmVkID8gbGlzdFtudW1iZXJdIDogbWF0Y2g7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJcbmNvbnN0IGdldERvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldHVybiBnbG9iYWwgPyBnbG9iYWwgOiB7fTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkb2N1bWVudCBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERvY3VtZW50O1xuIiwiXG5jb25zdCBnZXRMb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbG9jYXRpb24gb2JqZWN0IG5vdCBleGlzdCEnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMb2NhdGlvbjtcbiIsIlxuY29uc3QgZ2V0V2luZG93ID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3dpbmRvdyBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdpbmRvdztcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5cbi8qKlxuICogQmFzZSBIVFRQIFJlcXVlc3RcbiAqXG4gKiAuaHR0cFJlcXVlc3QoIHttZXRob2Q6ICdHRVQnLCBkYXRhOiB7fSwgaGVhZGVyczoge30sIGFjdGlvbjogJy9pbmRleCd9LCBmdW5jdGlvbihzdGF0dXMsIGRhdGEpe30sIHRoaXNJbnN0YW5jZSApO1xuICpcbiAqIEBwYXJhbSBjb25maWdcbiAqICAgICAgZGF0YTogICAgICAgICAgIGRhdGEgdG8gc2VuZC4gT2JqZWN0LCBGb3JtRGF0YSAoUE9TVCBvbmx5KSwgSFRNTEZvcm1FbGVtZW50IChQT1NUIG9ubHkpXG4gKiAgICAgIGFjdGlvbiwgdXJsOiAgICB1cmwgYWRkcmVzcyB0b1xuICogICAgICBtZXRob2Q6ICAgICAgICAgcmVxdWVzdCBtZXRob2QgR0VUIFBPU1Qgb3IgY3VzdG9tIG1ldGhvZHMsIGRlZmF1bHQgJ0dFVCdcbiAqICAgICAgaGVhZGVyczogICAgICAgIGhlYWRlcnMgT2JqZWN0LCBrZXkgPSB2YWx1ZVxuICogICAgICB1c2VFbmNvZGU6ICAgICAgdXNlZCB1cmwgZW5jb2RpbmcsIGRlZmF1bHQgVFJVRS4gQm9vbGVhblxuICogICAgICB1c2VGb3JtRGF0YTogICAgdXNlZCBGb3JtRGF0YSwgZGVmYXVsdCBGQUxTRS4gQm9vbGVhblxuICogICAgICBhc3luYzogICAgICAgICAgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZXI6XG4gKiAgICAgIHBhc3N3b3JkOlxuICpcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogICAgICBleGVjdXRpbmcgZXZlbnQgLSBvbmxvYWRlbmQuIGZ1bmN0aW9uIChzdGF0dXMsIHJlc3BvbnNlVGV4dClcbiAqXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiAgICAgIG9iamVjdCAndGhpcycgZm9yIGNhbGxiYWNrXG4gKlxuICogQHJldHVybnMge1hNTEh0dHBSZXF1ZXN0fVxuICovXG5jb25zdCBodHRwUmVxdWVzdCA9IGZ1bmN0aW9uIChjb25maWcsIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBsZXQga2V5O1xuICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIGRhdGE6IGNvbmZpZy5kYXRhIHx8IHt9LFxuICAgICAgICBhY3Rpb246IGNvbmZpZy5hY3Rpb24gfHwgY29uZmlnLnVybCB8fCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmLFxuICAgICAgICBtZXRob2Q6IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCkgOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczogY29uZmlnLmhlYWRlcnMgfHwge30sXG4gICAgICAgIHVzZUVuY29kZTogY29uZmlnLnVzZUVuY29kZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLnVzZUVuY29kZSxcbiAgICAgICAgdXNlRm9ybURhdGE6IGNvbmZpZy51c2VGb3JtRGF0YSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAhIWNvbmZpZy51c2VGb3JtRGF0YSxcbiAgICAgICAgYXN5bmM6IGNvbmZpZy5hc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6ICEhY29uZmlnLmFzeW5jLFxuICAgICAgICB1c2VyOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgICAgICBwYXNzd29yZDogY29uZmlnLnVzZXIgfHwgbnVsbCxcbiAgICB9O1xuXG4gICAgY29uc3QgY29uY2F0ZVN0cmluZyA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBmb3IgKGtleSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAnJicgKyBrZXkgKyAnPScgKyAob3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pIDogcGFyYW1zW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHRoaXNJbnN0YW5jZSA9ICh0eXBlT2YodGhpc0luc3RhbmNlLCAnb2JqZWN0JykpID8gdGhpc0luc3RhbmNlIDoge307XG5cbiAgICAvLyBkYXRhIHByZXBhcmVcbiAgICBpZiAob3B0aW9ucy5tZXRob2QgPT09ICdHRVQnKSB7XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBvcHRpb25zLmFjdGlvbiArPSBvcHRpb25zLmFjdGlvbi5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyc7XG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IGNvbmNhdGVTdHJpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgc2VuZERhdGEgPSB7fTtcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy8gcmVzZXQgdG8gdXNlRm9ybURhdGEgaW4gdHJ1ZVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgRm9ybURhdGEpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuZGF0YSA9IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcm0gdG8gRm9ybURhdGFcbiAgICAgICAgaWYgKG9wdGlvbnMuZGF0YSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIG9wdGlvbnMudXNlRm9ybURhdGEgPSB0cnVlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICAgICAgaWYgKCEoc2VuZERhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkpIHNlbmREYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgc2VuZERhdGEuYXBwZW5kKGtleSwgb3B0aW9ucy51c2VFbmNvZGUgPyBlbmNvZGVVUklDb21wb25lbnQob3B0aW9ucy5kYXRhW2tleV0pIDogb3B0aW9ucy5kYXRhW2tleV0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmREYXRhID0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBidWlsZCByZXF1ZXN0XG4gICAgeGhyLm9wZW4ob3B0aW9ucy5tZXRob2QsIG9wdGlvbnMuYWN0aW9uLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXIsIG9wdGlvbnMucGFzc3dvcmQpO1xuXG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ1gtUmVxdWVzdGVkLVdpdGgnLCAnWE1MSHR0cFJlcXVlc3QnKTtcblxuICAgIGlmIChvcHRpb25zLm1ldGhvZCAhPT0gJ0dFVCcgJiYgIW9wdGlvbnMudXNlRm9ybURhdGEpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBvcHRpb25zLmhlYWRlcnMpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCBvcHRpb25zLmhlYWRlcnNba2V5XSk7XG4gICAgfVxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpc0luc3RhbmNlLlhNTEh0dHBSZXF1ZXN0ID0geGhyO1xuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0YW5jZSwgeGhyLnN0YXR1cywgeGhyLnJlc3BvbnNlVGV4dCwgeGhyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB4aHIuc2VuZE9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHhoci5zZW5kKHNlbmREYXRhKTtcbiAgICByZXR1cm4geGhyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaHR0cFJlcXVlc3Q7XG4iLCJpbXBvcnQgYXR0ciBmcm9tIFwiLi4vc3RhdGljL2F0dHJcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZUZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvY3JlYXRlRnJhZ21lbnRcIjtcbmltcG9ydCBjc3MgZnJvbSBcIi4uL3N0YXRpYy9jc3NcIjtcbmltcG9ydCBkb21Mb2FkZWQgZnJvbSBcIi4uL3N0YXRpYy9kb21Mb2FkZWRcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi4vc3RhdGljL2dldERvY3VtZW50XCI7XG5pbXBvcnQgZ2V0V2luZG93IGZyb20gXCIuLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5pbXBvcnQgaW5qZWN0IGZyb20gXCIuLi9zdGF0aWMvaW5qZWN0XCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi4vc3RhdGljL3N0cjJmcmFnbWVudFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuLi9zdGF0aWMvbm9kZTJzdHJcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgcXVlcnlBbGwgZnJvbSBcIi4uL3N0YXRpYy9xdWVyeUFsbFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vc3RhdGljL3NlYXJjaFwiO1xuaW1wb3J0IGVuY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZW5jb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBkZWNvZGVHZXRRdWVyeSBmcm9tIFwiLi4vc3RhdGljL2RlY29kZUdldFF1ZXJ5XCI7XG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uL3N0YXRpYy9odHRwUmVxdWVzdFwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkXCI7XG5pbXBvcnQgZGVmaW5lZEluIGZyb20gXCIuLi9zdGF0aWMvZGVmaW5lZEluXCI7XG5pbXBvcnQgZWFjaCBmcm9tIFwiLi4vc3RhdGljL2VhY2hcIjtcbmltcG9ydCBleHRlbmQsIHtcbiAgICBleHRlbmRSZWN1cnNpdmVcbn0gIGZyb20gXCIuLi9zdGF0aWMvZXh0ZW5kXCI7XG5pbXBvcnQgaXNFbXB0eSBmcm9tIFwiLi4vc3RhdGljL2lzRW1wdHlcIjtcbmltcG9ydCBmaW5kT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdFwiO1xuaW1wb3J0IGZpbmRPYmplY3RzIGZyb20gXCIuLi9zdGF0aWMvZmluZE9iamVjdHNcIjtcbmltcG9ydCBmb3JtYXQgZnJvbSBcIi4uL3N0YXRpYy9mb3JtYXRcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcbmltcG9ydCBsb2FkQ1NTIGZyb20gXCIuLi9zdGF0aWMvbG9hZENTU1wiO1xuaW1wb3J0IGxvYWRKUyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1wiO1xuaW1wb3J0IGxvYWRKU1N5bmMgZnJvbSBcIi4uL3N0YXRpYy9sb2FkSlNTeW5jXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcIi4uL3N0YXRpYy9tZXJnZVwiO1xuaW1wb3J0IG51bWJlcjJzdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9udW1iZXIyc3RyaW5nXCI7XG5pbXBvcnQgb24gZnJvbSBcIi4uL3N0YXRpYy9vblwiO1xuaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBwb3NpdGlvbk1vdXNlIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25Nb3VzZVwiO1xuaW1wb3J0IHJhbmRvbSwge1xuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZ1xufSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gXCIuLi9zdGF0aWMvcmVkaXJlY3RcIjtcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZcIjtcbmltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4uL3N0YXRpYy90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCB1cmkgZnJvbSBcIi4uL3N0YXRpYy91cmlcIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCB0b09iamVjdCBmcm9tIFwiLi4vc3RhdGljL3RvT2JqZWN0XCI7XG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgY3JlYXRlQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVBcnJheVwiO1xuaW1wb3J0IGlzU3RyaW5nIGZyb20gXCIuLi9zdGF0aWMvaXNTdHJpbmdcIjtcbmltcG9ydCBleGlzdHMgZnJvbSBcIi4uL3N0YXRpYy9leGlzdHNcIjtcbmltcG9ydCBpc0RlZmluZWQgZnJvbSBcIi4uL3N0YXRpYy9pc0RlZmluZWRcIjtcbmltcG9ydCBsb2FkQmxvYmZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQmxvYmZpbGVcIjtcbmltcG9ydCBsb2FkSlNPTiBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU09OXCI7XG5pbXBvcnQgbG9hZFRleHRmaWxlIGZyb20gXCIuLi9zdGF0aWMvbG9hZFRleHRmaWxlXCI7XG5pbXBvcnQgdG9IVE1MIGZyb20gXCIuLi9zdGF0aWMvdG9IVE1MXCI7XG5pbXBvcnQgdG9YTUwgZnJvbSBcIi4uL3N0YXRpYy90b1hNTFwiO1xuaW1wb3J0IHN0eWxpemVyIGZyb20gXCIuLi9zdGF0aWMvc3R5bGl6ZXJcIjtcbmltcG9ydCB1bmlxQXJyYXkgZnJvbSBcIi4uL3N0YXRpYy91bmlxQXJyYXlcIjtcblxuY29uc3QgU3RhdGljID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGdldERvY3VtZW50LFxuICAgIGdldFdpbmRvdyxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBleGlzdHMsXG4gICAgaXNEZWZpbmVkLFxuICAgIGxvYWRCbG9iZmlsZSxcbiAgICBsb2FkSlNPTixcbiAgICBsb2FkVGV4dGZpbGUsXG4gICAgdG9IVE1MLFxuICAgIHRvWE1MLFxuICAgIHN0eWxpemVyLFxuICAgIHVuaXFBcnJheSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCB0cnVlLCB0byk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ3N0cmluZycpKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0RlZmluZWQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3JjKVxuICAgICAgICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzcmMgPT09IFwiXCIgfHwgc3JjID09PSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHNyYyA9PT0gMCB8fCBzcmMgPT09IG51bGwgfHwgc3JjID09PSB1bmRlZmluZWQgfHwgc3JjID09PSBmYWxzZSB8fCBpc05hTihzcmMpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIiwiLy8gaW1wb3J0IERPTVBhcnNlciBmcm9tICdET01QYXJzZXInO1xuXG5jb25zdCBpc0hUTUxTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHRydWVzdCA9IGZhbHNlKSB7XG5cbiAgICBpZiAodHJ1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudHJpbSgpLnN1YnN0cmluZygwLCAxKSA9PT0gJzwnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNIVE1MU3RyaW5nO1xuIiwiXG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XG4iLCJcbmNvbnN0IGlzU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdmFsdWUgaW5zdGFuY2VvZiBTdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc1N0cmluZztcbiIsIlxuY29uc3QgbG9hZEJsb2JmaWxlID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCkpXG4gICAgICAgIC50aGVuKGJsb2IgPT4gb25sb2FkKGJsb2IpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEJsb2JmaWxlOyIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuY29uc3QgbG9hZENTUyA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghc3JjKSByZXR1cm4gbnVsbDtcbiAgICBpZiAodHlwZU9mKHNyYywgJ2FycmF5JykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxvYWRDU1Moc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvYy5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGNvbnN0IGlkID0gXCJzcmMtXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKTtcblxuICAgICAgICBsaW5rLmhyZWYgPSAoc3JjLnN1YnN0cigtNCkgPT09ICcuY3NzJykgPyBzcmMgOiBzcmMgKyAnLmNzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmlkID0gaWQ7XG4gICAgICAgIGxpbmsub25sb2FkID0gb25sb2FkO1xuICAgICAgICBsaW5rLm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvYy5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICByZXR1cm4gbGlua1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRDU1M7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGRvY3VtZW50RWxlbWVudCA9IGdldERvY3VtZW50KCk7XG5jb25zdCBsb2FkSlMgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkSlMoc3JjW2ldLCBvbmxvYWQsIG9uZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnRFbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBjb25zdCBpZCA9ICdyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgc2NyaXB0LnNyYyA9IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcyc7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuaWQgPSBpZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuXG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIHJldHVybiBzY3JpcHRcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlM7IiwiXG5jb25zdCBsb2FkSlNPTiA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAudGhlbihqc29uID0+IG9ubG9hZChqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU09OOyIsIlxuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcblxuLyoqXG4gKiBMb2FkcyBhIHNjcmlwdCBlbGVtZW50IHdpdGggamF2YXNjcmlwdCBzb3VyY2VcbiAqXG4gKiAubG9hZEpTU3luYyAoIHtcbiAqICAgICAgbXlzY3JpcHQxOiAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgbXlzY3JpcHQyOiAnL3BhdGgvdG8vbXlzY3JpcHQyJyxcbiAqICAgIH0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogLmxvYWRKU1N5bmMgKCBbXG4gKiAgICAgICcvcGF0aC90by9teXNjcmlwdDEnLFxuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQyJyxcbiAqICAgIF0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBOYW1lc3BhY2VBcHBsaWNhdGlvbi5sb2FkSlNTeW5jXG4gKiBAcGFyYW0gc3JjcyAgICAgICBPYmplY3QsIEFycmF5LiBpdGVtczoga2V5IGlzIElELCB2YWx1ZSBpcyBzcmNcbiAqIEBwYXJhbSBjYWxsYmFjayAgRnVuY3Rpb24gY2FsbGVkIHdoZW4gYWxsIHNyY3MgaXMgbG9hZGVkXG4gKiBAcGFyYW0gb25lcnJvciAgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGxvYWQgaXMgZmFpbGVkXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuY29uc3QgbG9hZEpTU3luYyA9IGZ1bmN0aW9uIChzcmNzLCBjYWxsYmFjaywgb25lcnJvcikge1xuICAgIGlmICh0eXBlT2Yoc3JjcywgJ29iamVjdCcpIHx8IHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICBpZiAodHlwZU9mKHNyY3MsICdhcnJheScpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MuZm9yRWFjaCggKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBvYmpbJ3Jlc291cmNlLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDMyKS5zbGljZSgyKV0gPSBpdGVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNyY3MgPSBvYmo7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmNzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IHNyY3Nba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IGNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcsIHtcbiAgICAgICAgICAgICAgICBzcmM6IChzcmMuc3Vic3RyKC0zKSA9PT0gJy5qcycpID8gc3JjIDogc3JjICsgJy5qcycsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNbdGhpcy5pZF0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yICsrO1xuICAgICAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoe30sIHNjcmlwdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTU3luYztcbiIsIlxuY29uc3QgbG9hZFRleHRmaWxlID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgZmV0Y2goc3JjKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgICAgIC50aGVuKHRleHQgPT4gb25sb2FkKHRleHQpKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdHlwZW9mIG9uZXJyb3IgPT09ICdmdW5jdGlvbicgPyBvbmVycm9yKGVycm9yKSA6IG51bGwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFRleHRmaWxlOyIsIlxuY29uc3QgbWVyZ2UgPSAob2JqZWN0MSwgb2JqZWN0MikgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBvYmplY3QyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIG9iamVjdDJba2V5XS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0ICkge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG1lcmdlKG9iamVjdDFba2V5XSwgb2JqZWN0MltrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0MVtrZXldID0gb2JqZWN0MltrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcblxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3QxO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2U7XG4iLCJcblxuY29uc3Qgbm9kZTJzdHIgPSAgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lci5pbm5lckhUTUw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBub2RlMnN0cjtcbiIsIlxuZXhwb3J0IGNvbnN0IG51bWJlcjJzdHJpbmcgPSBmdW5jdGlvbiAoeCkge1xuICAgIGxldCBlO1xuICAgIGlmIChNYXRoLmFicyh4KSA8IDEuMCkge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCdlLScpWzFdKTtcbiAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgIHggKj0gTWF0aC5wb3coMTAsZS0xKTtcbiAgICAgICAgICAgIHggPSAnMC4nICsgKG5ldyBBcnJheShlKSkuam9pbignMCcpICsgeC50b1N0cmluZygpLnN1YnN0cmluZygyKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPSBwYXJzZUludCh4LnRvU3RyaW5nKCkuc3BsaXQoJysnKVsxXSk7XG4gICAgICAgIGlmIChlID4gMjApIHtcbiAgICAgICAgICAgIGUgLT0gMjA7XG4gICAgICAgICAgICB4IC89IE1hdGgucG93KDEwLGUpO1xuICAgICAgICAgICAgeCArPSAobmV3IEFycmF5KGUrMSkpLmpvaW4oJzAnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG51bWJlcjJzdHJpbmc7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5pbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IG9uID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBldmVudE5hbWUsIGNhbGxiYWNrLCBidWJibGUpIHtcbiAgICBsZXQgaSwgZWxlbWVudHMgPSBbXTtcblxuICAgIHN3aXRjaCAodHlwZU9mKHNlbGVjdG9yKSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdhcnJheSc6XG4gICAgICAgICAgICBlbGVtZW50cyA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChlbGVtZW50c1tpXSAmJiBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKVxuICAgICAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCAhIWJ1YmJsZSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgb247XG4iLCIvLyBpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5cbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4vaXNIVE1MU3RyaW5nXCI7XG5pbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4vc3RyMm5vZGVcIjtcblxuY29uc3QgcG9zaXRpb24gPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIGNvbnN0IGRhdGEgPSB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH07XG4gICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoaXNIVE1MU3RyaW5nKGVsZW0pKSB7XG4gICAgICAgICAgICBlbGVtID0gc3RyMm5vZGUoZWxlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlbGVtID09PSB3aW5kb3cgfHwgZWxlbSA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgZGF0YS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBkYXRhLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgZGF0YS5lbGVtZW50ID0gd2luZG93O1xuICAgIH1cbiAgICBlbHNlXG4gICAgaWYgKGVsZW0gJiYgZWxlbS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgaWYgKGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGxldCBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCxcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICBjbGllbnRUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50VG9wIHx8IGRvY3VtZW50LmJvZHkuY2xpZW50VG9wIHx8IDAsXG4gICAgICAgICAgICAgICAgY2xpZW50TGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRMZWZ0IHx8IGRvY3VtZW50LmJvZHkuY2xpZW50TGVmdCB8fCAwO1xuXG4gICAgICAgICAgICBkYXRhLnkgPSBNYXRoLnJvdW5kKHJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGRhdGEueCA9IE1hdGgucm91bmQocmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQpO1xuICAgICAgICAgICAgZGF0YS53aWR0aCA9IGVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBkYXRhLmhlaWdodCA9IGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBkYXRhLnRvcCA9IHJlY3QudG9wICsgcGFnZVlPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmxlZnQgPSByZWN0LmxlZnQgKyBwYWdlWE9mZnNldDtcbiAgICAgICAgICAgIGRhdGEucmlnaHQgPSByZWN0LnJpZ2h0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IHJlY3QuYm90dG9tICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgdG9wID0gMCwgbGVmdCA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHRvcCArPSBwYXJzZUludChlbGVtLm9mZnNldFRvcCwgMTApO1xuICAgICAgICAgICAgICAgIGxlZnQgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRMZWZ0LCAxMCk7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0ub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGF0YS55ID0gdG9wO1xuICAgICAgICAgICAgZGF0YS54ID0gbGVmdDtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmVsZW1lbnQgPSBlbGVtO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uO1xuIiwiXG5cbmNvbnN0IHBvc2l0aW9uTW91c2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBhcmd1bWVudCBpcyBub3QgdHlwZSB0aGUgTW91c2VFdmVudCEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0LFxuICAgICAgICB5OiBldmVudC5jbGllbnRZIC0gcmVjdC50b3BcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zaXRpb25Nb3VzZTtcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiBAcGFyYW0gdGhpc0luc3RhbmNlXG4gKiBAcmV0dXJucyB7Tm9kZXxib29sZWFufVxuICovXG5jb25zdCBxdWVyeSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpO1xuICAgIHJldHVybiBlbGVtZW50cyAmJiBlbGVtZW50c1swXSA/IGVsZW1lbnRzWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeTtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSAnLi9nZXREb2N1bWVudCc7XG5cbmNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG5cbmNvbnN0IHF1ZXJ5QWxsID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgZnJvbSA9IGZyb20gfHwgZG9jO1xuXG4gICAgaWYgKGlzTm9kZShzZWxlY3RvcikpXG4gICAgICAgIHJldHVybiBbc2VsZWN0b3JdO1xuXG4gICAgaWYgKHR5cGVPZihmcm9tLCAnc3RyaW5nJykpXG4gICAgICAgIGZyb20gPSBkb2MucXVlcnlTZWxlY3Rvcihmcm9tKTtcbiAgICBpZiAoZnJvbSlcbiAgICAgICAgZWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKGZyb20ucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7Y2FsbGJhY2suY2FsbCh0aGlzSW5zdGFuY2UgfHwge30sIGVsZW1lbnQpfSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBxdWVyeUFsbDtcbiIsIi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gbnVtYmVyXG4gKiBAcGFyYW0gbWluXG4gKiBAcGFyYW0gbWF4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5pbXBvcnQge0FCQywgTEVUVEVSX0NPTlNPTkFOVCwgTEVUVEVSX1ZPV0VMLCBOVU1CRVJTfSBmcm9tIFwiLi9hYmNcIjtcblxuXG5leHBvcnQgY29uc3QgcmFuZG9tID0gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgbWluID0gbWluIHx8IDA7XG4gICAgbWF4ID0gbWF4IHx8IDEwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGUgYSByYW5kb20gaGV4IGNvbG9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tQ29sb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbGV0dGVycyA9ICcwMTIzNDU2Nzg5QUJDREVGJy5zcGxpdCgnJyk7XG4gICAgbGV0IGksIGNvbG9yID0gJyMnO1xuICAgIGZvciAoaSA9IDA7IGkgPCA2OyBpKyspXG4gICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICByZXR1cm4gY29sb3I7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tTnVtYmVyID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgaWYgKHNpemUgPiAxNikge1xuICAgICAgICBsZXQgaSA9IE1hdGguY2VpbChzaXplLzE2KTtcbiAgICAgICAgbGV0IHJlcyA9ICcnO1xuICAgICAgICBmb3IgKGk7IGkgPiAwOyBpLS0pXG4gICAgICAgICAgICByZXMgKz0gQXJyYXkoMTYpLmZpbGwoMCkubWFwKGkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKS5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHJlcy5zbGljZSgwLCBzaXplKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlSW50KEFycmF5KHNpemUpLmZpbGwoMCkubWFwKGkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApKS5qb2luKCcnKSk7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2LCB3aXRoTnVtYmVycyA9IGZhbHNlKSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGFicyA9IHdpdGhOdW1iZXJzXG4gICAgICAgID8gQUJDICsgTlVNQkVSUy50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJylcbiAgICAgICAgOiBBQkMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGZvciAoaSA9IHNpemU7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgc3RyaW5nICs9IGFic1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhYnMubGVuZ3RoKV07XG4gICAgfVxuICAgIHJldHVybiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY29uc3QgcmFuZG9tSHVtYW5pemVTdHJpbmcgPSBmdW5jdGlvbiAoc2l6ZSA9IDYpIHtcbiAgICBsZXQgaSwgc3RyaW5nID0gJyc7XG4gICAgY29uc3QgY29uc29uYW50ID0gIExFVFRFUl9DT05TT05BTlQudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsID0gIExFVFRFUl9WT1dFTC50b0xvd2VyQ2FzZSgpLnNwbGl0KCcsJyk7XG4gICAgY29uc3Qgdm93ZWxGaXJzdCA9IChNYXRoLnJhbmRvbSgpICogMTApID4gNTtcbiAgICBmb3IgKGkgPSBzaXplIC8gMiArIDE7IGkgPiAwOyBpIC0tKSB7XG4gICAgICAgIGxldCBzMSA9IGNvbnNvbmFudFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb25zb25hbnQubGVuZ3RoKV07XG4gICAgICAgIGxldCBzMiA9IHZvd2VsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZvd2VsLmxlbmd0aCldO1xuICAgICAgICBzdHJpbmcgKz0gdm93ZWxGaXJzdCA/IHMxICsgczIgOiBzMiArIHMxO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKDAsIHNpemUpO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gcmFuZG9tIGl0ZW0gZnJvbSBhcnJheVxuICogQHBhcmFtIGFyclxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCByYW5kb21JdGVtID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnJbcmFuZG9tKDAsIGFyci5sZW5ndGgtMSldIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByYW5kb207XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IHJlZGlyZWN0ID0gZnVuY3Rpb24gKHRvKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICBjb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuICAgIGxvYy5ocmVmID0gdG8gfHwgZG9jLmhyZWY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZWRpcmVjdDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuXG4vKipcbiAqIHNlYXJjaCggJ3VsID4gbGknLCAgJ2RhdGEtbGluaycsIE5vZGVFbGVtZW50KTtcbiAqXG4gKiBAcGFyYW0gc2VsZWN0b3JcbiAqIEBwYXJhbSBhdHRyXG4gKiBAcGFyYW0gZnJvbVxuICogQHJldHVybnMge3t9fVxuICovXG5jb25zdCBzZWFyY2ggPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGF0dHIsIGZyb20pIHtcbiAgICBmcm9tID0gaXNOb2RlKGZyb20pID8gZnJvbSA6IHF1ZXJ5KGZyb20pO1xuICAgIGxldCBpID0gMCxcbiAgICAgICAga2V5LFxuICAgICAgICBlbGVtZW50cyA9IHt9LFxuICAgICAgICBxdWVyeUVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IsIGZyb20gfHwgZG9jdW1lbnQuYm9keSk7XG5cbiAgICBpZiAocXVlcnlFbGVtZW50cykge1xuICAgICAgICB3aGlsZSAoaSA8IHF1ZXJ5RWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoIWF0dHIpXG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0gPSBxdWVyeUVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RWxlbWVudHNbaV0uaGFzQXR0cmlidXRlKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHF1ZXJ5RWxlbWVudHNbaV0uZ2V0QXR0cmlidXRlKGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1trZXldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoO1xuIiwiXG5jb25zdCBzdHIyZnJhZ21lbnQgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKGRvY3VtZW50LmNyZWF0ZVJhbmdlKVxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQoc3RyaW5nKTtcbiAgICBlbHNlIHtcbiAgICAgICAgbGV0IGksXG4gICAgICAgICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHN0cmluZztcbiAgICAgICAgd2hpbGUgKGkgPSBjb250YWluZXIuZmlyc3RDaGlsZClcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGkpO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIyZnJhZ21lbnQ7XG4iLCJpbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuL3N0cjJmcmFnbWVudFwiO1xuXG5jb25zdCBzdHIybm9kZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGxldCBmcmFnbWVudCA9IHN0cjJmcmFnbWVudChzdHJpbmcpO1xuXG4gICAgc3dpdGNoIChmcmFnbWVudC5jaGlsZEVsZW1lbnRDb3VudCkge1xuICAgICAgICBjYXNlIDA6IGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXN1bHQgPSBmcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0cjJub2RlO1xuIiwiXG5jb25zdCBzdHlsaXplciA9IGZ1bmN0aW9uIChlbGVtZW50LCBzdHlsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5zdHlsZVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVba2V5XSA9IHN0eWxlc1trZXldO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsaXplcjtcbiIsIi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuY29uc3QgdG9IVE1MID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSAndGV4dC9odG1sJztcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCB0eXBlKTtcblxuICAgICAgICBpZiAoeG1sRG9jLmRvY3VtZW50RWxlbWVudCAmJiB4bWxEb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgcmV0dXJuIHhtbERvYy5ib2R5LmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b0hUTUw7XG4iLCJcbmNvbnN0IHRvT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuICAgICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKVxuICAgICAgICA6IHt9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b09iamVjdDtcbiIsIlxuLyoqXG4gKiBAZGVwcmVjYXRlZFxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJucyB7Ym9vbGVhbnxFbGVtZW50fVxuICovXG5jb25zdCB0b1hNTCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0eXBlID0gJ3RleHQveG1sJztcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCB4bWxEb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHZhbHVlLCB0eXBlKTtcblxuICAgICAgICBpZiAoeG1sRG9jLmRvY3VtZW50RWxlbWVudCAmJiB4bWxEb2MuZG9jdW1lbnRFbGVtZW50LnRhZ05hbWUgIT09ICdodG1sJykge1xuICAgICAgICAgICAgcmV0dXJuIHhtbERvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvWE1MO1xuIiwiaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi90eXBlT2ZTdHJpY3RcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4vaXNOb2RlXCI7XG5cbmNvbnN0IHR5cGVPZiA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHNpbXBsZVR5cGVzID0gWydudWxsJywgJ2Jvb2xlYW4nLCAndW5kZWZpbmVkJywgJ2Z1bmN0aW9uJywgJ3N0cmluZycsICdudW1iZXInLCAnZGF0ZScsICdhcnJheScsICdvYmplY3QnXTtcbiAgICBsZXQgdCA9IHR5cGVPZlN0cmljdCh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoc2ltcGxlVHlwZXMuaW5kZXhPZih0KSA9PT0gLTEgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgdCA9ICdvYmplY3QnO1xuXG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2Y7XG4iLCJcbmNvbnN0IHR5cGVPZlN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgdHlwZSkge1xuICAgIGNvbnN0IHQgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA9PT0gdCA6IHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0eXBlT2ZTdHJpY3Q7XG4iLCJcbmNvbnN0IHVuaXFBcnJheSA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcbiAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1bmlxQXJyYXk7XG4iLCJpbXBvcnQgZ2V0TG9jYXRpb24gZnJvbSBcIi4vZ2V0TG9jYXRpb25cIjtcblxuXG5jb25zdCB1cmkgPSBmdW5jdGlvbiAodXJpKSB7XG4gICAgY29uc3QgbG9jID0gZ2V0TG9jYXRpb24oKTtcbiAgICB1cmkgPSB1cmkgfHwgbG9jLnBhdGhuYW1lO1xuICAgIHVyaSA9IHVyaS5yZXBsYWNlKC9cXC8rL2lnLCAnLycpO1xuICAgIHJldHVybiB1cmkubGVuZ3RoID4gMSAmJiB1cmkuc2xpY2UoMCwgMSkgIT09ICcvJyA/ICcvJyArIHVyaSA6IHVyaTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVyaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=