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

var _position = __webpack_require__(/*! ../static/position */ "./src/static/position.js");

var _position2 = _interopRequireDefault(_position);

var _copy = __webpack_require__(/*! ../static/copy */ "./src/static/copy.js");

var _copy2 = _interopRequireDefault(_copy);

var _clone = __webpack_require__(/*! ../static/clone */ "./src/static/clone.js");

var _clone2 = _interopRequireDefault(_clone);

var _isHTMLString = __webpack_require__(/*! ../static/isHTMLString */ "./src/static/isHTMLString.js");

var _isHTMLString2 = _interopRequireDefault(_isHTMLString);

var _query = __webpack_require__(/*! ../static/query */ "./src/static/query.js");

var _query2 = _interopRequireDefault(_query);

var _stylizer = __webpack_require__(/*! ../static/stylizer */ "./src/static/stylizer.js");

var _stylizer2 = _interopRequireDefault(_stylizer);

var _str2node = __webpack_require__(/*! ../static/str2node */ "./src/static/str2node.js");

var _str2node2 = _interopRequireDefault(_str2node);

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

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

    root.remove = function (elem) {
        if ((0, _isNode2.default)(elem)) {
            return root.element.removeChild(elem);
        } else {
            throw new TypeError('Failed argument type. Need NodeElement');
        }
    };

    root.clear = function () {
        root.element.textContent = '';
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

/***/ "./src/components/EventManager.js":
/*!****************************************!*\
  !*** ./src/components/EventManager.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var EventManager = {
    super: document.createDocumentFragment(),
    version: '0.0.2',
    eventsType: {},

    /**
     * Create new Event
     * @param name
     * @param details
     * @returns {CustomEvent}
     */
    addEvent: function addEvent(name, details) {
        var event = new CustomEvent(name, { detail: details });
        if ((typeof details === 'undefined' ? 'undefined' : _typeof(details)) === 'object') for (var key in details) {
            if (!event.hasOwnProperty(key)) event[key] = details[key];
        }EventManager.super[name] = event;
        return this;
    },

    /**
     * Remove Event
     * @param name
     */
    removeEvent: function removeEvent(name) {
        if (EventManager.super[name]) delete EventManager.super[name];
        return this;
    },

    /**
     * Register an event handler of a specific event type on the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     * @returns {{type: *, listener: *, useCapture: (*|boolean)}}
     */
    addEventListener: function addEventListener(type, listener, useCapture) {
        useCapture = useCapture || false;
        EventManager.super.addEventListener(type, listener, useCapture);
        return this;
    },

    /**
     * Removes an event listener from the EventTarget.
     * @param type
     * @param listener
     * @param useCapture
     */
    removeEventListener: function removeEventListener(type, listener, useCapture) {
        EventManager.super.removeEventListener(type, listener, useCapture || false);
        return this;
    },

    /**
     * Dispatch an event to this EventTarget.
     * @param type
     */
    dispatchEvent: function dispatchEvent(type) {
        if (EventManager.super[type] instanceof CustomEvent) EventManager.super.dispatchEvent(EventManager.super[type]);
        return this;
    }
};

exports.default = EventManager;

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

var _isNode = __webpack_require__(/*! ../static/isNode */ "./src/static/isNode.js");

var _isNode2 = _interopRequireDefault(_isNode);

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
/**
 * @method style
 * @param config
 * @returns {{readonly x: *, readonly width: *, initialized: boolean, readonly y: *, style(*=): void, completed: boolean, element: *, readonly height: *}|*}
 * @constructor
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
        completed: false,
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

    root.remove = function (elem) {
        if ((0, _isNode2.default)(elem)) {
            return root.element.removeChild(elem);
        } else {
            throw new TypeError('Failed argument type. Need NodeElement');
        }
    };

    root.on = function (event, callback) {
        root.element.addEventListener(event, callback);
    };

    if (typeof root.complete === 'function' && !root.completed) {
        root.completed = true;
        root.complete.call(root);
    }

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
add(name, callback, attrs)  // add new scene
get(name)                   // returned scene by name
getCurrentScene()           // returned current scene
next()                      // to next scene
run(name, attrs)            // run scenes by name, set this key name to default
clone()                     // cloned current scenes

const scene = Scene();
scene.add('editor', function (a, b, c, d) {
    console.log(a, b, c, d);
})
scene.add('output', function (a, b, c, d) {
    console.log(a, b, c, d);
})
scene.run('output', ['hello', 200, [1,2,3], {id: 123}]);
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
            callback.apply(root, attrs ? attrs : scene.attrs);
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

    if (properties && properties.constructor === Object) {
        Object.keys(properties).forEach(function (key) {
            var parameter = properties[key];

            if (key === 'scene' || key === 'scenes') {
                var pass = properties['pass'] || {};
                Object.keys(parameter).forEach(function (name) {
                    root.add(name, parameter[name], pass);
                });
            } else if (typeof root[key] === "undefined") {
                root[key] = parameter;
            }
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
this.transform.functionParameters('matrix')         // [1, 0, 0, 1, 0, 0]: array
this.transform.functionParameters('rotate')         // ["45deg"]: string
this.transform.functionParameters('rotate', true)   // 45: int

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
        functionParameters: function functionParameters(name) {
            var FIRST_ITEM_TO_INTEGER = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (FIRST_ITEM_TO_INTEGER && Array.isArray(root.transform_obj[name]) && root.transform_obj[name].length === 1) {
                var item = root.transform_obj[name][0];
                return (0, _isNumber2.default)(item) ? parseInt(item) : root.transform_obj[name];
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

var _EventManager = __webpack_require__(/*! ./components/EventManager */ "./src/components/EventManager.js");

var _EventManager2 = _interopRequireDefault(_EventManager);

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
    Transform: _Transform2.default,

    EventManager: _EventManager2.default
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
    try {
        value = parseInt(value);
        return (typeof value === 'number' || value instanceof Number) && !isNaN(value);
    } catch (err) {
        return false;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0aW9uRnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2xpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0tleWJvYXJkRXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NYXRyaXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW92ZUNsaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JveHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUm94eUxpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NjZW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1N0ZXBzU2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2FiYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2F0dHIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jbG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NvcHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9jcmVhdGVGcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlY29kZUdldFF1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RlZmluZWRJbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2RvbUxvYWRlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9lbmNvZGVHZXRRdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2V4aXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2V4dGVuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2ZpbmRPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9maW5kT2JqZWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2Zvcm1hdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2dldERvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvZ2V0TG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9nZXRXaW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9odHRwUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaW5qZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNEZWZpbmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzSFRNTFN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL2lzTnVtYmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQmxvYmZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkQ1NTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZEpTT04uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9sb2FkSlNTeW5jLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbG9hZFRleHRmaWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9ub2RlMnN0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL251bWJlcjJzdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3Bvc2l0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcG9zaXRpb25Nb3VzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3F1ZXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvcXVlcnlBbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy9yZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJmcmFnbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3N0cjJub2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvc3R5bGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b0hUTUwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRpYy90b09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGljL3RvWE1MLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdHlwZU9mU3RyaWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdW5pcUFycmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0aWMvdXJpLmpzIl0sIm5hbWVzIjpbIkFuaW1hdGlvbkZyYW1lIiwicm9vdCIsInJlcXVlc3RJZCIsInN0YXJ0cGFseSIsInBhdXNlZCIsImNhbGxiYWNrIiwiZGVsYXkiLCJkdXJhdGlvbiIsInByb2dyZXNzIiwic3RlcCIsInRpbWVzdGFtcCIsImNhbGwiLCJjYW5jZWwiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwYXVzZSIsInN0YXJ0IiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJDbGlwIiwiZWxlbWVudCIsIk5vZGUiLCJwYXJlbnQiLCJwYXJlbnROb2RlIiwieCIsInkiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsIm1vdmVUbyIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImNvcHlUbyIsIm9uIiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvbmUiLCJzdHlsZSIsIm9iamVjdCIsImluamVjdCIsImVsZW0iLCJhcHBlbmQiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZCIsIlR5cGVFcnJvciIsImNsZWFyIiwidGV4dENvbnRlbnQiLCJDb21wb25lbnQiLCJjb25maWciLCJsaXN0IiwicmFuZG9tTmFtZSIsInRvTG93ZXJDYXNlIiwic3Vic3RyaW5nIiwidG9VcHBlckNhc2UiLCJjb21wIiwiY3JlYXRlIiwiY29tcG9uZW50IiwiY29tcG9uZW50cyIsImNvbXBvbmVudENoaWxkcmVuIiwiY2hpbGRyZW4iLCJmaW5kIiwiY2xvbmVkIiwidGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJiZWZvcmUiLCJpbml0aWFsaXplZCIsIm1ldGhvZHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsImJpbmQiLCJoYXNPd25Qcm9wZXJ0eSIsImluaXQiLCJkYXRhIiwicGFyZW50Q29tcG9uZW50IiwicHVzaCIsIm5vZGUiLCJjb21wbGV0ZSIsImNvbXBsZXRlZCIsImRvY3VtZW50IiwicHJvcHMiLCJvdmVycmlkZSIsIkV2ZW50TWFuYWdlciIsInN1cGVyIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInZlcnNpb24iLCJldmVudHNUeXBlIiwiYWRkRXZlbnQiLCJuYW1lIiwiZGV0YWlscyIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwicmVtb3ZlRXZlbnQiLCJ0eXBlIiwibGlzdGVuZXIiLCJ1c2VDYXB0dXJlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoRXZlbnQiLCJLZXlib2FyZEV2ZW50TWFuYWdlciIsInN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2tzTGlzdCIsImFkZFN0b3JhZ2UiLCJiYXNlQ2FsbGJhY2siLCJtYXAiLCJrZXlDb2RlIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJlYWNoQ2FsbGJhY2tzTGlzdCIsImVhY2hDYWxsYmFjayIsInNldHVwTGlzdGVuZXJzIiwiYWRkIiwicm0iLCJlYWNoIiwid2l0aENvbmRpdGlvbktleSIsInByZXNzIiwidXAiLCJkb3duIiwiTG9hZGVyIiwianNvbiIsImpzb25zIiwiamF2YXNjcmlwdCIsImltYWdlcyIsImF1ZGlvcyIsInZpZGVvcyIsInZpZGVvIiwic3JjIiwib25lcnJvciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY2F0Y2giLCJlcnJvciIsInNyY3MiLCJvYmoiLCJpdGVtIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic2xpY2UiLCJzY3JpcHRzIiwiaXRlcmF0b3IiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50Iiwic3Vic3RyIiwib25sb2FkIiwiZSIsImhlYWQiLCJpbWdzIiwiaW1nIiwiYXVkaW8iLCJwcmVsb2FkIiwiTWF0cml4IiwibTExIiwibTEyIiwibTIxIiwibTIyIiwiZ3giLCJneSIsIk1vdmVDbGlwIiwiY2xpcCIsIkVycm9yIiwidmFsdWUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJjbG9uZVByb3BlcnR5IiwiUG9pbnQiLCJSZWN0YW5nbGUiLCJSb3h5IiwicGF5bG9hZCIsInByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcyIsImRlZmF1bHQiLCJwcm94eSIsIlByb3h5IiwiZ2V0IiwicHJvcCIsInNldCIsImRpc3BhdGNoIiwicmVzdWx0IiwiZmlsbCIsIm9ic2VydmUiLCJ0byIsImdldFByb3h5IiwiUm94eUxpc3RlbmVyIiwiYWN0aW9ucyIsIl9fYWN0aW9uX18iLCJhY3Rpb25zTmFtZXMiLCJldmVudE5hbWUiLCJpbmRleCIsInJ4IiwiZXZlbnRDdXJzb3IiLCJTY2VuZSIsInByb3BlcnRpZXMiLCJjdXJyZW50Iiwic2NlbmVzIiwiY29uc29sZSIsImxvZyIsImF0dHJzIiwiZ2V0Q3VycmVudFNjZW5lIiwibmV4dCIsImxlc3QiLCJpIiwicnVuIiwic2NlbmUiLCJhcHBseSIsInNob3ciLCJjb25zdHJ1Y3RvciIsInBhcmFtZXRlciIsInBhc3MiLCJTdGVwc1NjZW5lIiwic3RlcHMiLCJpdGVyYXRpb24iLCJsb29wIiwic3RlcF9pdGVyYXRpb24iLCJzdGVwX3N0b3AiLCJzdGVwX2NhbGxiYWNrX2VhY2giLCJzdGVwX2NhbGxiYWNrcyIsInBsYXkiLCJzdG9wIiwiZW5kIiwibXMiLCJzZXRUaW1lb3V0IiwiZ290byIsImVhY2hTdGVwcyIsImN1cnJlbnRDYWxsYmFja09iamVjdCIsIlRpbWVyIiwicmVwZWF0IiwidGhpc0luc3RhbmNlIiwidGhpc0luc3QiLCJpc05hTiIsInNldEludGVydmFsIiwiY2xlYXJUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsIlRyYW5zZm9ybSIsInBhcmFtcyIsInRyYW5zZm9ybV9vYmoiLCJ0cmFuc2Zvcm1fYXJyIiwidHJhbnNmb3JtIiwic3BsaXQiLCJmaWx0ZXIiLCJ0cmFuc2Zvcm1fc3RyaW5nIiwidXBkYXRlIiwiam9pbiIsInJlc2VhcmNoIiwibWV0aG9kIiwibXVsdGlwbHkiLCJleHQiLCJtYXRjaCIsIm51bSIsInBhcmFtIiwidHJpbSIsIm1hdGNoZWQiLCJmdW5jdGlvblBhcmFtZXRlcnMiLCJGSVJTVF9JVEVNX1RPX0lOVEVHRVIiLCJBbmltYXRlIiwiUkFESUFOIiwiREVHUkVFX0FTX1JBRElBTiIsIkRFR1JFRV8zNjBfQVNfUkFESUFOIiwiUEkiLCJSQURfVE9fREVHUkVFUyIsIlN0YXRpYyIsIlV0aWwiLCJMRVRURVJfQ09OU09OQU5UIiwiTEVUVEVSX1ZPV0VMIiwiQUJDIiwiTlVNQkVSUyIsIkFNUEVSU0FORCIsImF0dHIiLCJ0eXBlX2VsZW1lbnQiLCJhcmd1bWVudHMiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJmcm9tIiwiRGF0ZSIsIlJlZ0V4cCIsIkZ1bmN0aW9uIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9vbGVhbiIsImNvcHkiLCJpbnN0YW5jZSIsImNyZWF0ZUFycmF5IiwiYXJyIiwiciIsInVuZGVmaW5lZCIsInRhZyIsImlubmVyIiwiaXNfYXR0ciIsImluc2VydF9odG1sIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiaW5zZXJ0X2NoaWxkIiwiaW5zZXJ0IiwiayIsImNyZWF0ZUZyYWdtZW50IiwiZnJhZ21lbnQiLCJjc3MiLCJzZWxlY3RvciIsImVsZW1lbnRzIiwidHlwZVNlbGVjdG9yIiwidHlwZVByb3BlcnRpZXMiLCJwYXJzZSIsInN0ciIsInAxIiwicDIiLCJwbiIsIml4IiwibyIsImluZGV4T2YiLCJkZWNvZGVHZXRRdWVyeSIsInF1ZXJ5IiwicGFpcnMiLCJwYWlyIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZGVmaW5lZCIsImRlZmluZWRJbiIsInN0YWNrIiwiZG9tTG9hZGVkIiwiZG9jIiwicXVlcnlTZWxlY3RvciIsInYiLCJhIiwiTm9kZUxpc3QiLCJsb29wcyIsImdldFBhcmVudCIsImVuY29kZUdldFF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZXhpc3RzIiwiZXh0ZW5kIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJfXyIsInByb3RvdHlwZSIsImV4dGVuZFJlY3Vyc2l2ZSIsInByb3BlcnR5IiwiZmluZE9iamVjdCIsImF0dHJWYWx1ZSIsInRtcCIsImZpbmRPYmplY3RzIiwiZmluZHMiLCJmb3JtYXQiLCJzdHJpbmciLCJyZWciLCJyZXBsYWNlIiwibnVtYmVyIiwiZ2V0RG9jdW1lbnQiLCJnZXRMb2NhdGlvbiIsImxvY2F0aW9uIiwiZ2V0V2luZG93IiwiaHR0cFJlcXVlc3QiLCJzZW5kRGF0YSIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3B0aW9ucyIsImFjdGlvbiIsInVybCIsImhyZWYiLCJoZWFkZXJzIiwidXNlRW5jb2RlIiwidXNlRm9ybURhdGEiLCJhc3luYyIsInVzZXIiLCJwYXNzd29yZCIsImNvbmNhdGVTdHJpbmciLCJGb3JtRGF0YSIsIkhUTUxGb3JtRWxlbWVudCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwib25sb2FkZW5kIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZE9wdGlvbnMiLCJzZW5kIiwic3RyMm5vZGUiLCJzdHIyZnJhZ21lbnQiLCJub2RlMnN0ciIsInF1ZXJ5QWxsIiwic2VhcmNoIiwiaXNFbXB0eSIsImlzTm9kZSIsImxvYWRDU1MiLCJsb2FkSlMiLCJsb2FkSlNTeW5jIiwibWVyZ2UiLCJudW1iZXIyc3RyaW5nIiwicG9zaXRpb24iLCJwb3NpdGlvbk1vdXNlIiwicmFuZG9tQ29sb3IiLCJyYW5kb21JdGVtIiwicmFuZG9tTnVtYmVyIiwicmFuZG9tU3RyaW5nIiwicmFuZG9tSHVtYW5pemVTdHJpbmciLCJyZWRpcmVjdCIsInR5cGVPZiIsInR5cGVPZlN0cmljdCIsInVyaSIsInRvT2JqZWN0IiwiaXNIVE1MU3RyaW5nIiwiaXNTdHJpbmciLCJpc0RlZmluZWQiLCJsb2FkQmxvYmZpbGUiLCJsb2FkSlNPTiIsImxvYWRUZXh0ZmlsZSIsInRvSFRNTCIsInRvWE1MIiwic3R5bGl6ZXIiLCJ1bmlxQXJyYXkiLCJpc051bWJlciIsImlubmVySFRNTCIsInRydWVzdCIsImRpdiIsImNoaWxkRWxlbWVudENvdW50Iiwibm9kZVR5cGUiLCJURVhUX05PREUiLCJFTEVNRU5UX05PREUiLCJET0NVTUVOVF9GUkFHTUVOVF9OT0RFIiwiRE9DVU1FTlRfTk9ERSIsImVyciIsImJsb2IiLCJsaW5rIiwicmVsIiwiZG9jdW1lbnRFbGVtZW50IiwidGV4dCIsIm9iamVjdDEiLCJvYmplY3QyIiwiY29udGFpbmVyIiwiYWJzIiwicG93IiwiYnViYmxlIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsInNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0IiwiYm9keSIsInNjcm9sbExlZnQiLCJwYWdlWE9mZnNldCIsImNsaWVudFRvcCIsImNsaWVudExlZnQiLCJyb3VuZCIsInRvcCIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIm9mZnNldEhlaWdodCIsInJpZ2h0IiwiYm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0TGVmdCIsIm9mZnNldFBhcmVudCIsIk1vdXNlRXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtaW4iLCJtYXgiLCJmbG9vciIsImxldHRlcnMiLCJjb2xvciIsInNpemUiLCJjZWlsIiwicmVzIiwid2l0aE51bWJlcnMiLCJjb25zb25hbnQiLCJ2b3dlbCIsInZvd2VsRmlyc3QiLCJzMSIsInMyIiwibG9jIiwicXVlcnlFbGVtZW50cyIsImhhc0F0dHJpYnV0ZSIsImNyZWF0ZVJhbmdlIiwiY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50IiwiZmlyc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwic3R5bGVzIiwicGFyc2VyIiwiRE9NUGFyc2VyIiwieG1sRG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInRhZ05hbWUiLCJzaW1wbGVUeXBlcyIsInQiLCJzZWxmIiwicGF0aG5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7Ozs7Ozs7Ozs7QUFVQTs7Ozs7QUFLQSxJQUFNQSxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQ3ZCO0FBQ0ksUUFBTUMsT0FBTztBQUNUQyxtQkFBVyxDQURGO0FBRVRDLG1CQUFXLENBRkY7QUFHVEMsZ0JBQVEsS0FIQztBQUlUQyxrQkFBVSxDQUpEO0FBS1RDLGVBQU8sQ0FMRTtBQU1UQyxrQkFBVSxDQU5EO0FBT1RDLGtCQUFVO0FBUEQsS0FBYjs7QUFVQVAsU0FBS1EsSUFBTCxHQUFZLFVBQVVDLFNBQVYsRUFBcUI7QUFDN0IsWUFBSSxDQUFDVCxL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Ozs7Ozs7Ozs7QUNYZixJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBVXpPLEtBQVYsRUFBaUJyRSxJQUFqQixFQUF1QjtBQUN4QyxRQUFNd1ksSUFBSXJhLE9BQU82USxTQUFQLENBQWlCbk0sUUFBakIsQ0FBMEJoSSxJQUExQixDQUErQndKLEtBQS9CLEVBQXNDdkIsS0FBdEMsQ0FBNEMsQ0FBNUMsRUFBK0MsQ0FBQyxDQUFoRCxDQUFWO0FBQ0EsV0FBTyxPQUFPOUMsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsU0FBU3dZLENBQXBDLEdBQXdDQSxDQUEvQztBQUNILENBSEQ7O2tCQUtlMUYsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTGYsSUFBTVksWUFBWSxTQUFaQSxTQUFZLENBQVVyUCxLQUFWLEVBQWlCNEIsS0FBakIsRUFBd0J3UyxJQUF4QixFQUE4QjtBQUM1QyxXQUFPQSxLQUFLakwsT0FBTCxDQUFhbkosS0FBYixNQUF3QjRCLEtBQS9CO0FBQ0gsQ0FGRDs7a0JBSWV5TixTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMZjs7Ozs7O0FBR0EsSUFBTVgsTUFBTSxhQUFVQSxJQUFWLEVBQWU7QUFDdkIsUUFBTXlFLE1BQU0sNEJBQVo7QUFDQXpFLFdBQU1BLFFBQU95RSxJQUFJa0IsUUFBakI7QUFDQTNGLFdBQU1BLEtBQUlwRCxPQUFKLENBQVksT0FBWixFQUFxQixHQUFyQixDQUFOO0FBQ0EsV0FBT29ELEtBQUkxVSxNQUFKLEdBQWEsQ0FBYixJQUFrQjBVLEtBQUlqUSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsTUFBb0IsR0FBdEMsR0FBNEMsTUFBTWlRLElBQWxELEdBQXdEQSxJQUEvRDtBQUNILENBTEQ7O2tCQU9lQSxHIiwiZmlsZSI6ImFuaW1hdGUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcbi8qXG5jb25zdCBhbmltYXRpb24gPSBBbmltYXRpb25GcmFtZSgpO1xuYW5pbWF0aW9uLnBhdXNlKCk7XG5hbmltYXRpb24uc3RhcnQoZnVuY3Rpb24ocHJvZ3Jlc3Mpe1xuICAgIGlmIChNYXRoLnJvdW5kKHByb2dyZXNzKSAlIDEwMDAgPT09IDApIHtcbiAgICAgICAgLy8gZG8gc29tZXRoaW5nXG4gICAgfVxufSk7XG5hbmltYXRpb24uY2FuY2VsKCk7XG4qL1xuLyoqXG4gKlxuICogQHJldHVybnMge3tkdXJhdGlvbjogbnVtYmVyLCBzdGFydHBhbHk6IG51bWJlciwgcGF1c2VkOiBib29sZWFuLCBkZWxheTogbnVtYmVyLCByZXF1ZXN0SWQ6IG51bWJlciwgY2FsbGJhY2s6IG51bWJlciwgcHJvZ3Jlc3M6IG51bWJlcn19XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIHJlcXVlc3RJZDogMCxcbiAgICAgICAgc3RhcnRwYWx5OiAwLFxuICAgICAgICBwYXVzZWQ6IGZhbHNlLFxuICAgICAgICBjYWxsYmFjazogMCxcbiAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICBwcm9ncmVzczogMCxcbiAgICB9O1xuXG4gICAgcm9vdC5zdGVwID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoIXJvb3Quc3RhcnRwYWx5KSByb290LnN0YXJ0cGFseSA9IHRpbWVzdGFtcDtcbiAgICAgICAgcm9vdC5wcm9ncmVzcyA9IHRpbWVzdGFtcCAtIHJvb3Quc3RhcnRwYWx5O1xuXG4gICAgICAgIGlmIChyb290LmNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LmNhbGxiYWNrLmNhbGwocm9vdCwgcm9vdC5wcm9ncmVzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm9vdC5kdXJhdGlvbiAmJiByb290LmR1cmF0aW9uID4gcm9vdC5wcm9ncmVzcykge1xuICAgICAgICAgICAgcm9vdC5jYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocm9vdC5zdGVwKTtcbiAgICAgICAgaWYgKHJvb3QucGF1c2VkKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByb290LnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290LnBhdXNlZCA9ICFyb290LnBhdXNlZDtcbiAgICB9O1xuXG4gICAgcm9vdC5zdGFydCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3QuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm9vdC5yZXF1ZXN0SWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJvb3Quc3RlcCk7XG4gICAgfTtcblxuICAgIHJvb3QuY2FuY2VsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUocm9vdC5yZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkZyYW1lO1xuIiwiaW1wb3J0IHBvc2l0aW9uIGZyb20gXCIuLi9zdGF0aWMvcG9zaXRpb25cIjtcbmltcG9ydCBjb3B5IGZyb20gXCIuLi9zdGF0aWMvY29weVwiO1xuaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc05vZGUgZnJvbSBcIi4uL3N0YXRpYy9pc05vZGVcIjtcblxuLyoqXG4gKlxuICogQHBhcmFtIGVsZW1lbnRcbiAqIEByZXR1cm5zIHsgYm90dG9tLCBlbGVtZW50LCBoZWlnaHQsIGxlZnQsIHJpZ2h0LCB0b3AsIHdpZHRoLCB4LCB5IH1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBDbGlwID0gZnVuY3Rpb24gKGVsZW1lbnQpXG57XG4gICAgY29uc3Qgcm9vdCA9IHBvc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgaWYgKHJvb3QuZWxlbWVudCBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcG9zaXRpb24oZWxlbWVudC5wYXJlbnROb2RlKTtcbiAgICAgICAgcm9vdC54ID0gcm9vdC54IC0gcGFyZW50Lng7XG4gICAgICAgIHJvb3QueSA9IHJvb3QueSAtIHBhcmVudC55O1xuICAgICAgICByb290LmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWNsaXAnLCByb290LmVsZW1lbnQuaWQgfHwgJ2NsaXAnKTtcbiAgICB9XG5cbiAgICByb290Lm1vdmVUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgQ2xpcCkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuZWxlbWVudC5hcHBlbmRDaGlsZChyb290LmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXJlbnRFbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQocm9vdC5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByb290LmNvcHlUbyA9IGZ1bmN0aW9uIChwYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJvb3QuZWxlbWVudCA9IGNvcHkocm9vdC5lbGVtZW50KTtcbiAgICAgICAgcm9vdC5tb3ZlVG8ocGFyZW50RWxlbWVudCk7XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByb290LnN0eWxlID0gZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICBzdHlsaXplcihyb290LmVsZW1lbnQsIG9iamVjdCk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9O1xuXG4gICAgcm9vdC5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByb290LmluamVjdChlbGVtLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgcm9vdC5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBpZihpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgYXJndW1lbnQgdHlwZS4gTmVlZCBOb2RlRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3QuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsaXA7XG4iLCJpbXBvcnQgc3RyMm5vZGUgZnJvbSBcIi4uL3N0YXRpYy9zdHIybm9kZVwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IG1lcmdlIGZyb20gXCIuLi9zdGF0aWMvbWVyZ2VcIjtcbmltcG9ydCBzZWFyY2ggZnJvbSBcIi4uL3N0YXRpYy9zZWFyY2hcIjtcbmltcG9ydCBjbG9uZSBmcm9tIFwiLi4vc3RhdGljL2Nsb25lXCI7XG5pbXBvcnQge3JhbmRvbUh1bWFuaXplU3RyaW5nfSBmcm9tIFwiLi4vc3RhdGljL3JhbmRvbVwiO1xuaW1wb3J0IGlzSFRNTFN0cmluZyBmcm9tIFwiLi4vc3RhdGljL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcblxuXG4vKipcbiAqXG5jb25maWc6XG4gICAgaWQ6ICdpZCcsXG4gICAgcHJvcHM6IHt9LFxuICAgIHRlbXBsYXRlOiBgYCxcbiAgICBpbml0ICgpIHt9LFxuICAgIGRhdGE6IHt9LFxuICAgIGNvbXBsZXRlICgpIHt9LFxuICAgIG1ldGhvZHM6IHt9LFxuICAgIG5vZGU6IHt9LFxuICAgIGNvbXBvbmVudHM6IHt9LFxuICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcblxuQ29tcG9uZW50KHtcbiAgICBpZDogJ0V4dGVybmFsVGVtcGxhdGVDb21wb25lbnQnLFxuICAgIHByb3BzOiBbJ3RpdGxlJ10sXG4gICAgdGVtcGxhdGU6ICd0ZW1wbGF0ZScsXG4gICAgaW5pdCAoKSB7fSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGl0ZXJhdG9yOiAwLFxuICAgIH0sXG4gICAgY29tcGxldGUgKGFwcCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlWyd0aXRsZSddKVxuICAgICAgICB0aGlzLm5vZGVbJ3RpdGxlJ10udGV4dENvbnRlbnQgPSB0aGlzLnRpdGxlO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBhZGQgKGUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5pdGVyYXRvci50ZXh0Q29udGVudCA9ICsrIHRoaXMuZGF0YS5pdGVyYXRvciA7XG4gICAgICAgIH0sXG4gICAgICAgIG1pbiAoZSkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLml0ZXJhdG9yLnRleHRDb250ZW50ID0gLS0gdGhpcy5kYXRhLml0ZXJhdG9yIDtcbiAgICAgICAgfSxcbiAgICB9XG59KTtcblxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbmZpZylcbntcbiAgICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy8gZ2V0IHByb3BlcnR5IGJ5IGlkIGtleXdvcmRcbiAgICAgICAgcmV0dXJuIENvbXBvbmVudC5saXN0W2NvbmZpZ107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjb25maWcuaWQpIHtcbiAgICAgICAgICAgIGxldCByYW5kb21OYW1lID0gIHJhbmRvbUh1bWFuaXplU3RyaW5nKDYpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByYW5kb21OYW1lID0gcmFuZG9tTmFtZS5zdWJzdHJpbmcoMCwgMSkudG9VcHBlckNhc2UoKSArIHJhbmRvbU5hbWUuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgY29uZmlnLmlkID0gJ0NvbXBvbmVudCcgKyByYW5kb21OYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKENvbXBvbmVudC5saXN0W2NvbmZpZy5pZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBDb21wb25lbnQubGlzdFtjb25maWcuaWRdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcCA9IENvbXBvbmVudC5jcmVhdGUoY29uZmlnKTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXAuY29tcG9uZW50c1tpZF0gPyBjb21wLmNvbXBvbmVudHNbaWRdIDogbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wLmNvbXBvbmVudENoaWxkcmVuID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcC5jaGlsZHJlbi5maW5kKChjb21wb25lbnQpID0+IGNvbXBvbmVudC5pZCA9PT0gaWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbXAuY2xvbmUgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZCA9IGNsb25lKHRoaXMpO1xuICAgICAgICAgICAgY2xvbmVkLnRlbXBsYXRlID0gY2xvbmVkLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIHJldHVybiBjbG9uZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmJlZm9yZSA9PT0gJ2Z1bmN0aW9uJyAmJiAhY29tcC5pbml0aWFsaXplZCl7XG4gICAgICAgICAgICBjb21wLmJlZm9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLnRlbXBsYXRlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYoaXNIVE1MU3RyaW5nKGNvbXAudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICAgICAgY29tcC50ZW1wbGF0ZSA9IHN0cjJub2RlKGNvbXAudGVtcGxhdGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb21wLnRlbXBsYXRlID0gcXVlcnkoY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29tcC5tZXRob2RzICYmIE9iamVjdC52YWx1ZXMoY29tcC5tZXRob2RzKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAubWV0aG9kcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLm1ldGhvZHNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wLm1ldGhvZHNba2V5XSA9IGNvbXAubWV0aG9kc1trZXldLmJpbmQoY29tcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghY29tcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wW2tleV0gPSBjb21wLm1ldGhvZHNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wLmluaXQgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuaW5pdGlhbGl6ZWQpe1xuICAgICAgICAgICAgY29tcC5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBjb21wLmluaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb21wLmRhdGEgJiYgT2JqZWN0LmtleXMoY29tcC5kYXRhKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbXAuZGF0YSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb21wLmRhdGFba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmRhdGFba2V5XSA9IGNvbXAuZGF0YVtrZXldLmJpbmQoY29tcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghY29tcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBba2V5XSA9IGNvbXAuZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbXAuY29tcG9uZW50cyAmJiBPYmplY3Qua2V5cyhjb21wLmNvbXBvbmVudHMpLmxlbmd0aCkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29tcC5jb21wb25lbnRzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcC5jb21wb25lbnRzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcC5jb21wb25lbnRzW2tleV0ucGFyZW50Q29tcG9uZW50ID0gY29tcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcC5jaGlsZHJlbi5wdXNoKGNvbXAuY29tcG9uZW50c1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzTm9kZShjb21wLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgY29tcC5ub2RlID0gc2VhcmNoKCdbZGF0YS1ub2RlXScsICdkYXRhLW5vZGUnLCBjb21wLnRlbXBsYXRlKTtcbiAgICAgICAgICAgIGNvbXAub24gPSBzZWFyY2goJ1tkYXRhLW9uXScsICdkYXRhLW9uJywgY29tcC50ZW1wbGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGNvbXAuY29tcGxldGUgPT09ICdmdW5jdGlvbicgJiYgIWNvbXAuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb21wLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBjb21wKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcC5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbXAuY29tcGxldGUuY2FsbChjb21wLCBjb21wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudC5saXN0W2NvbXAuaWRdID0gY29tcDtcbiAgICAgICAgcmV0dXJuIGNvbXA7XG4gICAgfVxufTtcbkNvbXBvbmVudC5saXN0ID0ge307XG5Db21wb25lbnQuY3JlYXRlID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgIHJldHVybiBtZXJnZSgge1xuICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgcHJvcHM6IHt9LFxuICAgICAgICB0ZW1wbGF0ZTogZmFsc2UsXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcbiAgICAgICAgaW5pdDogKCkgPT4ge30sXG4gICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7fSxcbiAgICAgICAgbWV0aG9kczoge30sXG4gICAgICAgIG5vZGU6IHt9LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGNvbXBvbmVudHM6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW10sXG4gICAgICAgIHBhcmVudENvbXBvbmVudDoge30sXG4gICAgfSwgY29uZmlnKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiXG5jb25zdCBFdmVudE1hbmFnZXIgPSB7XG4gICAgc3VwZXI6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICB2ZXJzaW9uOiAnMC4wLjInLFxuICAgIGV2ZW50c1R5cGU6IHt9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIG5ldyBFdmVudFxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIGRldGFpbHNcbiAgICAgKiBAcmV0dXJucyB7Q3VzdG9tRXZlbnR9XG4gICAgICovXG4gICAgYWRkRXZlbnQ6IGZ1bmN0aW9uKG5hbWUsIGRldGFpbHMpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge2RldGFpbDogZGV0YWlsc30pO1xuICAgICAgICBpZiAodHlwZW9mIGRldGFpbHMgPT09ICdvYmplY3QnKVxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIGRldGFpbHMpXG4gICAgICAgICAgICAgICAgaWYgKCFldmVudC5oYXNPd25Qcm9wZXJ0eShrZXkpKSBldmVudFtrZXldID0gZGV0YWlsc1trZXldO1xuXG4gICAgICAgIEV2ZW50TWFuYWdlci5zdXBlcltuYW1lXSA9IGV2ZW50O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIEV2ZW50XG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKi9cbiAgICByZW1vdmVFdmVudDogZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIGlmIChFdmVudE1hbmFnZXIuc3VwZXJbbmFtZV0pXG4gICAgICAgICAgICBkZWxldGUgRXZlbnRNYW5hZ2VyLnN1cGVyW25hbWVdXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIG9mIGEgc3BlY2lmaWMgZXZlbnQgdHlwZSBvbiB0aGUgRXZlbnRUYXJnZXQuXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gdXNlQ2FwdHVyZVxuICAgICAqIEByZXR1cm5zIHt7dHlwZTogKiwgbGlzdGVuZXI6ICosIHVzZUNhcHR1cmU6ICgqfGJvb2xlYW4pfX1cbiAgICAgKi9cbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpe1xuICAgICAgICB1c2VDYXB0dXJlID0gdXNlQ2FwdHVyZSB8fCBmYWxzZTtcbiAgICAgICAgRXZlbnRNYW5hZ2VyLnN1cGVyLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIsIHVzZUNhcHR1cmUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIHRoZSBFdmVudFRhcmdldC5cbiAgICAgKiBAcGFyYW0gdHlwZVxuICAgICAqIEBwYXJhbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB1c2VDYXB0dXJlXG4gICAgICovXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gICAgICAgIEV2ZW50TWFuYWdlci5zdXBlci5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlfHxmYWxzZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byB0aGlzIEV2ZW50VGFyZ2V0LlxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICovXG4gICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24gKHR5cGUpe1xuICAgICAgICBpZiAoRXZlbnRNYW5hZ2VyLnN1cGVyW3R5cGVdIGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpXG4gICAgICAgICAgICBFdmVudE1hbmFnZXIuc3VwZXIuZGlzcGF0Y2hFdmVudChFdmVudE1hbmFnZXIuc3VwZXJbdHlwZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudE1hbmFnZXI7XG4iLCIvKlxuY29uc3Qga2V5Ym9hcmQgPSBLZXlib2FyZEV2ZW50TWFuYWdlcigpO1xua2V5Ym9hcmQuZWFjaChFVkVOVF9OQU1FLCBmdW5jdGlvbiAoZXZlbnQpIHt9KVxua2V5Ym9hcmQud2l0aENvbmRpdGlvbktleVxua2V5Ym9hcmQucHJlc3NcbmtleWJvYXJkLnVwXG5rZXlib2FyZC5kb3duXG4qL1xuY29uc3QgS2V5Ym9hcmRFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiAoKVxue1xuICAgIGNvbnN0IHN0b3JhZ2UgPSB7fTtcbiAgICBjb25zdCBiYXNlQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGFkZFN0b3JhZ2UgPSBmdW5jdGlvbiAoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XSkgc3RvcmFnZVtldmVudF0gPSB7fTtcbiAgICAgICAgaWYgKCFzdG9yYWdlW2V2ZW50XVtrZXldKSBzdG9yYWdlW2V2ZW50XVtrZXldID0gW107XG4gICAgICAgIHN0b3JhZ2VbZXZlbnRdW2tleV0ucHVzaChjYWxsYmFjayk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGJhc2VDYWxsYmFja3NMaXN0W2V2ZW50XSA9IGJhc2VDYWxsYmFjaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgYmFzZUNhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHN0b3JhZ2UpLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoc3RvcmFnZVt0eXBlXSkubWFwKChrZXlDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoIHN0b3JhZ2VbdHlwZV1ba2V5Q29kZV0gKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yYWdlW3R5cGVdW2tleUNvZGVdLm1hcCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSB0eXBlICYmIHBhcnNlSW50KGtleUNvZGUpID09PSBldmVudC5rZXlDb2RlICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoZXZlbnQsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlYWNoQ2FsbGJhY2tzTGlzdCA9IHt9O1xuICAgIGNvbnN0IGVhY2hDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdID0gY2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldHVwTGlzdGVuZXJzICgpIHtcbiAgICAgICAgY29uc3QgYWRkID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJtID0gKCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYmFzZUNhbGxiYWNrc0xpc3QpLm1hcChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBiYXNlQ2FsbGJhY2tzTGlzdFtldmVudF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGVhY2hDYWxsYmFja3NMaXN0KS5tYXAoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZWFjaENhbGxiYWNrc0xpc3RbZXZlbnRdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIHJtKCk7XG4gICAgICAgIGFkZCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVhY2goZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBlYWNoQ2FsbGJhY2soZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHNldHVwTGlzdGVuZXJzKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHdpdGhDb25kaXRpb25LZXkoZXZlbnQsIGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGFkZFN0b3JhZ2UoZXZlbnQsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgc2V0dXBMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlc3Moa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlwcmVzcycsIGtleSwgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICB1cChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByb290LndpdGhDb25kaXRpb25LZXkoJ2tleXVwJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGRvd24oa2V5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcm9vdC53aXRoQ29uZGl0aW9uS2V5KCdrZXlkb3duJywga2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5Ym9hcmRFdmVudE1hbmFnZXI7XG4iLCJcblxuLyoqXG4gKiBMb2FkZXIuYXVkaW9zOiDGkiAoc3JjcywgY2FsbGJhY2spXG4gKiBMb2FkZXIuaW1hZ2VzOiDGkiAoaW1ncywgY2FsbGJhY2spXG4gKiBMb2FkZXIuamF2YXNjcmlwdDogxpIgKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gKiBMb2FkZXIuanNvbjogxpIgKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpXG4gKiBAcHJvcGVydHlcbiAqIEBtZXRob2QganNvblxuICogQG1ldGhvZCBqc29uc1xuICogQG1ldGhvZCBqYXZhc2NyaXB0XG4gKiBAbWV0aG9kIGltYWdlc1xuICogQG1ldGhvZCBhdWRpb3NcbiAqIEByZXR1cm5zIHt7fX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBMb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAganNvbjogTG9hZGVyLmpzb24sXG4gICAgICAgIGpzb25zOiBMb2FkZXIuanNvbnMsXG4gICAgICAgIGphdmFzY3JpcHQ6IExvYWRlci5qYXZhc2NyaXB0LFxuICAgICAgICBpbWFnZXM6IExvYWRlci5pbWFnZXMsXG4gICAgICAgIGF1ZGlvczogTG9hZGVyLmF1ZGlvcyxcbiAgICAgICAgdmlkZW9zOiBMb2FkZXIudmlkZW8sXG4gICAgfTtcbn07XG5cbi8qKlxuICogLmpzb24oJy91cmwvZGF0YWZpbGUuanNvbicsIChqc29uKSA9PiB7fSwgKGVycm9yKSA9PiB7fSlcbiAqXG4gKiBAcGFyYW0gc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2tcbiAqIEBwYXJhbSBvbmVycm9yXG4gKi9cbkxvYWRlci5qc29uID0gZnVuY3Rpb24gKHNyYywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBjYWxsYmFjayhqc29uKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIG9uZXJyb3JcbiAqL1xuTG9hZGVyLmpzb25zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKVxue1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY3MpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgb2JqW01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3JjID0gc3Jjc1trZXldO1xuICAgICAgICAgICAgTG9hZGVyLmpzb24oc3JjLCAoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHNjcmlwdHNba2V5XSA9IGpzb247XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IgKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgc2NyaXB0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgb25lcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuLyoqXG4gKiBMb2FkcyBhIHNjcmlwdCBlbGVtZW50IHdpdGggamF2YXNjcmlwdCBzb3VyY2VcbiAqXG4gKiAuamF2YXNjcmlwdCAoIHtcbiAqICAgICAgbXlfc2NyaXB0MTogJy9wYXRoL3RvL215X3NjcmlwdDEnLFxuICogICAgICBteV9zY3JpcHQyOiAnL3BhdGgvdG8vbXlfc2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5qYXZhc2NyaXB0ICggW1xuICogICAgICAnL3BhdGgvdG8vbXlfc2NyaXB0MScsXG4gKiAgICAgICcvcGF0aC90by9teV9zY3JpcHQyJyxcbiAqICAgIF0sXG4gKiAgICBmdW5jdGlvbiAobGlzdCkge30pXG4gKlxuICogQG5hbWVzcGFjZSBMb2FkZXIuamF2YXNjcmlwdFxuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbkxvYWRlci5qYXZhc2NyaXB0ID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrLCBvbmVycm9yKVxue1xuICAgIGlmIChzcmNzICYmIHR5cGVvZiBzcmNzID09PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHNyY3MpKSB7XG4gICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcbiAgICAgICAgICAgIHNyY3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgb2JqW01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpXSA9IGl0ZW1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3JjcyA9IG9iajtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc2NyaXB0cyA9IHt9O1xuICAgICAgICBsZXQgc2NyaXB0O1xuICAgICAgICBsZXQgaXRlcmF0b3IgPSAwO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKHNyY3MpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gKHNyY3Nba2V5XS5zdWJzdHIoLTMpID09PSAnLmpzJykgPyBzcmNzW2tleV0gOiBzcmNzW2tleV0gKyAnLmpzJztcbiAgICAgICAgICAgIHNjcmlwdC50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xuICAgICAgICAgICAgc2NyaXB0LmlkID0ga2V5O1xuICAgICAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBvbmVycm9yO1xuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0c1t0aGlzLmlkXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuXG4vKipcbiAqIExvYWQgYW4gaW1hZ2VzXG4gKlxuICogLmltYWdlcyAoIHtcbiAqICAgICAgaW1nMTogJy9wYXRoL3RvL2ltZzEnLFxuICogICAgICBpbWcyOiAnL3BhdGgvdG8vaW1nMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIuaW1hZ2VzXG4gKiBAcGFyYW0gaW1nc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci5pbWFnZXMgPSBmdW5jdGlvbiAoaW1ncywgY2FsbGJhY2spIHtcbiAgICBpZiAoaW1ncyAmJiB0eXBlb2YgaW1ncyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoaW1ncykubGVuZ3RoO1xuICAgICAgICBjb25zdCBpbWFnZXMgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBpbWdzKSB7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWdzW25hbWVdO1xuICAgICAgICAgICAgaW1nLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VzW3RoaXMubmFtZV0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIGl0ZXJhdG9yKys7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaW1hZ2VzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIExvYWQgYW4gYXVkaW8gZmlsZXNcbiAqXG4gKiAuYXVkaW9zICgge1xuICogICAgICBhdWRpbzE6ICcvcGF0aC90by9hdWRpbzEnLFxuICogICAgICBhdWRpbzI6ICcvcGF0aC90by9hdWRpbzInLFxuICogICAgfSxcbiAqICAgIGZ1bmN0aW9uIChsaXN0KSB7fSlcbiAqXG4gKiBAbmFtZXNwYWNlIEFuaW1hdGUuTG9hZGVyLmF1ZGlvc1xuICogQHBhcmFtIHNyY3NcbiAqIEBwYXJhbSBjYWxsYmFja1xuICovXG5Mb2FkZXIuYXVkaW9zID0gZnVuY3Rpb24gKHNyY3MsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHNyY3MgJiYgdHlwZW9mIHNyY3MgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKHNyY3MpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgYXVkaW9zID0ge307XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gc3Jjcykge1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICAgICAgICAgYXVkaW8uc3JjID0gc3Jjc1tuYW1lXTtcbiAgICAgICAgICAgIGF1ZGlvLm5hbWUgPSBuYW1lO1xuICAgICAgICAgICAgYXVkaW8ucHJlbG9hZCA9ICdhdXRvJztcbiAgICAgICAgICAgIGF1ZGlvc1tuYW1lXSA9IGF1ZGlvO1xuICAgICAgICAgICAgaXRlcmF0b3IrKztcbiAgICAgICAgICAgIGlmIChpdGVyYXRvciA9PT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgYXVkaW9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogTG9hZCBhbiB2aWRlbyBmaWxlc1xuICpcbiAqIC52aWRlb3MgKCB7XG4gKiAgICAgIHZpZGVvMTogJy9wYXRoL3RvL3ZpZGVvMScsXG4gKiAgICAgIHZpZGVvMjogJy9wYXRoL3RvL3ZpZGVvMicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgQW5pbWF0ZS5Mb2FkZXIudmlkZW9zXG4gKiBAcGFyYW0gc3Jjc1xuICogQHBhcmFtIGNhbGxiYWNrXG4gKi9cbkxvYWRlci52aWRlb3MgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2spIHtcbiAgICBpZiAoc3JjcyAmJiB0eXBlb2Ygc3JjcyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gT2JqZWN0LmtleXMoc3JjcykubGVuZ3RoO1xuICAgICAgICBjb25zdCB2aWRlb3MgPSB7fTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gMDtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBzcmNzKSB7XG4gICAgICAgICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ZpZGVvJyk7XG4gICAgICAgICAgICB2aWRlby5zcmMgPSBzcmNzW25hbWVdO1xuICAgICAgICAgICAgdmlkZW8ubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICB2aWRlby5wcmVsb2FkID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmlkZW9zW25hbWVdID0gdmlkZW87XG4gICAgICAgICAgICBpdGVyYXRvcisrO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCB2aWRlb3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCIvKipcblxuYSAobTExKSBIb3Jpem9udGFsIHNjYWxpbmcuXG5iIChtMTIpIEhvcml6b250YWwgc2tld2luZy5cbmMgKG0yMSkgVmVydGljYWwgc2tld2luZy5cbmQgKG0yMikgVmVydGljYWwgc2NhbGluZy5cbmUgKGR4KSBIb3Jpem9udGFsIG1vdmluZy5cbmYgKGR5KSBWZXJ0aWNhbCBtb3ZpbmcuXG4qL1xuY29uc3QgTWF0cml4ID0gZnVuY3Rpb24gKG0xMSwgbTEyLCBtMjEsIG0yMiwgZ3gsIGd5KSB7XG4gICAgcmV0dXJuIHttMTEsIG0xMiwgbTIxLCBtMjIsIGd4LCBneX07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXg7XG4iLCJpbXBvcnQgQ2xpcCBmcm9tIFwiLi9DbGlwXCI7XG5pbXBvcnQgdG9PYmplY3QgZnJvbSBcIi4uL3N0YXRpYy90b09iamVjdFwiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuLi9zdGF0aWMvc3RyMm5vZGVcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBxdWVyeSBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5XCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuXG4vKlxucmV0dXJuIE1vdmVDbGlwKHtcbiAgICBlbGVtZW50OiBgPGRpdiBjbGFzcz1cInNwcml0ZSByZWN0XCI+PC9kaXY+YCxcbiAgICBwYXJlbnQ6IEFwcENsaXAsXG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICBpbml0KCl7XG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZCh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gW1xuICAgICAgICAgICAgJ3JvdGF0ZSgnICsgNDUgKydkZWcpJyxcbiAgICAgICAgICAgICdzY2FsZSgwLjUsIDAuNSknLFxuICAgICAgICBdO1xuICAgIH0sXG59KVxuKi9cbi8qKlxuICogQG1ldGhvZCBzdHlsZVxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge3tyZWFkb25seSB4OiAqLCByZWFkb25seSB3aWR0aDogKiwgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4sIHJlYWRvbmx5IHk6ICosIHN0eWxlKCo9KTogdm9pZCwgY29tcGxldGVkOiBib29sZWFuLCBlbGVtZW50OiAqLCByZWFkb25seSBoZWlnaHQ6ICp9fCp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgTW92ZUNsaXAgPSBmdW5jdGlvbiAoY29uZmlnKVxue1xuICAgIGNvbnN0IHsgZWxlbWVudCB9ID0gY29uZmlnO1xuICAgIGNvbnN0IGNsaXAgPSBDbGlwKGVsZW1lbnQpO1xuXG4gICAgaWYoIWNsaXAuZWxlbWVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb3BlcnR5IFtlbGVtZW50XSBub3QgZm9uZCEnKTtcbiAgICB9XG5cbiAgICBjbGlwLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW1pdmVjbGlwJywgY29uZmlnLmlkIHx8ICdtaXZlY2xpcCcpO1xuXG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgLy8gY2xpcDogY2xpcCxcbiAgICAgICAgZWxlbWVudDogY2xpcC5lbGVtZW50LFxuICAgICAgICBpbml0aWFsaXplZDogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIHNldCB4KHZhbHVlKSB7XG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgeSh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAueSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICAgICAgICAgIHJvb3QuZWxlbWVudC5zdHlsZS53aWR0aCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGhlaWdodCh2YWx1ZSkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnN0eWxlLmhlaWdodCA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgICAgIGNsaXAuaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCB4KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAueFxuICAgICAgICB9LFxuICAgICAgICBnZXQgeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLnlcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHdpZHRoKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNsaXAud2lkdGhcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGlwLmhlaWdodFxuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlKG9iamVjdCkge1xuICAgICAgICAgICAgc3R5bGl6ZXIocm9vdC5lbGVtZW50LCBvYmplY3QpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBkZWxldGUgY29uZmlnLmVsZW1lbnQ7XG4gICAgZGVsZXRlIGNvbmZpZy5pbml0aWFsaXplZDtcbiAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHJvb3Rba2V5XSA9IGNvbmZpZ1trZXldXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIHJvb3QuaW5pdCA9PT0gJ2Z1bmN0aW9uJyAmJiAhcm9vdC5pbml0aWFsaXplZCl7XG4gICAgICAgIHJvb3QuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICByb290LmluaXQuY2FsbChyb290KTtcbiAgICB9XG5cbiAgICByb290LmNsb25lID0gZnVuY3Rpb24gKGFwcGVuZCA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNsb25lUHJvcGVydHkgPSB0b09iamVjdChyb290KTtcbiAgICAgICAgY2xvbmVQcm9wZXJ0eS5lbGVtZW50ID0gcm9vdC5lbGVtZW50LmNsb25lTm9kZShyb290KTtcbiAgICAgICAgaWYgKGFwcGVuZCkge1xuICAgICAgICAgICAgcm9vdC5lbGVtZW50LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2xvbmVQcm9wZXJ0eS5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTW92ZUNsaXAoY2xvbmVQcm9wZXJ0eSk7XG4gICAgfTtcblxuICAgIHJvb3QuaW5qZWN0ID0gZnVuY3Rpb24gKGVsZW0sIGFwcGVuZCA9IHRydWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgICAgIGVsZW0gPSBzdHIybm9kZShlbGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IHF1ZXJ5KGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJvb3QuZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICB9O1xuXG4gICAgcm9vdC5hcHBlbmQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByb290LmluamVjdChlbGVtLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgcm9vdC5yZW1vdmUgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBpZihpc05vZGUoZWxlbSkpIHtcbiAgICAgICAgICAgIHJldHVybiByb290LmVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGYWlsZWQgYXJndW1lbnQgdHlwZS4gTmVlZCBOb2RlRWxlbWVudCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJvb3Qub24gPSBmdW5jdGlvbiAoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJvb3QuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaylcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiByb290LmNvbXBsZXRlID09PSAnZnVuY3Rpb24nICYmICFyb290LmNvbXBsZXRlZCl7XG4gICAgICAgIHJvb3QuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgcm9vdC5jb21wbGV0ZS5jYWxsKHJvb3QpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92ZUNsaXA7XG4iLCJcbmNvbnN0IFBvaW50ID0gZnVuY3Rpb24gKHgsIHkpIHtcbiAgICByZXR1cm4ge3gsIHl9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG4iLCJcbmNvbnN0IFJlY3RhbmdsZSA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHt4LCB5LCB3aWR0aCwgaGVpZ2h0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY3RhbmdsZTtcbiIsIi8qXG5jb25zdCBSeFN0YXRlID0gUm94eSh7XG4gICAgdGl0bGU6ICcnLFxuICAgIGJvZHk6ICcnLFxufSk7XG5cblJ4U3RhdGUuZXZlbnQoKGtleSwgdmFsdWVzKT0+e1xuICAgIGlmIChrZXkgPT09ICcnKSB7fVxuICAgIGluamVjdCgnIycgKyBrZXksIHZhbHVlcyk7XG59KTtcblxuUnhTdGF0ZS5wcm94eS50aXRsZSA9ICdGaXJzdCB2YWx1ZSc7XG5SeFN0YXRlLnByb3h5LmJvZHkgPSAnVGVzdCBib2R5IHRleHQnO1xuXG5UaW1lci50aW1lb3V0KCgpID0+IHtcbiAgICBSeFN0YXRlLmRpc3BhdGNoKCd0aXRsZScsICdIZWxsbyBmcmllbmQnKTtcbiAgICBSeFN0YXRlLmRpc3BhdGNoKCdib2R5JywgJ0RvIHlvdSBoYXBweSBub3c/Jyk7XG59LCAyMDAwKTtcblxuKi9cblxuLyoqXG4gKiBAcGFyYW0gcGF5bG9hZFxuICogQHJldHVybnMge3twcm94eTogKiwgc2V0KCo9LCAqPSk6ICosIGdldCgqKTogKiwgYWN0aW9uKCo9LCAqPSk6ICosIGZpbGwoKj0sICo9KTogKn18Um94eXx7fXxudWxsfGJvb2xlYW59XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5cbmNvbnN0IFJveHkgPSBmdW5jdGlvbiAocGF5bG9hZClcbntcbiAgICBjb25zdCBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3MgPSB7XG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgfTtcblxuICAgIGNvbnN0IHByb3h5ID0gbmV3IFByb3h5KHBheWxvYWQsIHtcbiAgICAgICAgZ2V0KG9iaiwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gb2JqID8gb2JqW3Byb3BdIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KG9iaiwgcHJvcCwgdmFsdWUpIHtcblxuICAgICAgICAgICAgb2JqW3Byb3BdID0gdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3NbcHJvcF0gJiYgdHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrc1twcm9wXS5jYWxsKHt9LCBwcm9wLCB2YWx1ZSwgY29weShwcm94eSkpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnRpZXNDaGFuZ2VFdmVudENhbGxiYWNrcy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQuY2FsbCh7fSwgcHJvcCwgdmFsdWUsIGNvcHkocHJveHkpKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIG9sZGVyIG5hbWU6IHNlZXxzZXQ/XG4gICAgICAgICAqIEBwYXJhbSBrZXlcbiAgICAgICAgICogQHBhcmFtIHBheWxvYWRcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaChrZXksIHBheWxvYWQpIHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIXBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBrZXkuY2FsbCh7fSwgcHJveHkpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsbChyZXN1bHQpXG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBheWxvYWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHBheWxvYWQuY2FsbCh7fSwgcHJveHlba2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHJlc3VsdDtcblxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcHJveHlba2V5XSA9IHBheWxvYWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3Rpb24oKVxuICAgICAgICAgKiBAZGVwcmVjYXRlZFxuICAgICAgICAgKiBAcGFyYW0ga2V5XG4gICAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgICAgICovXG4gICAgICAgIGV2ZW50KGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9ic2VydmUoa2V5LCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV2ZW50IGNoYW5nZSBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RcbiAgICAgICAgICogQHBhcmFtIGtleVxuICAgICAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgICAgICogQHJldHVybnMgeyp9XG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZlKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcImZ1bmN0aW9uXCIgJiYgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0NoYW5nZUV2ZW50Q2FsbGJhY2tzLmRlZmF1bHQgPSBrZXk7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzQ2hhbmdlRXZlbnRDYWxsYmFja3Nba2V5XSA9IHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAgICAgICAgID8gY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5ID8gcHJveHlba2V5XSA6IGNvcHkocHJveHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGwocGF5bG9hZCwgdG8pIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0bykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3h5W3RvXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5W3RvXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBwcm94eVt0b11ba2V5XSA9IHBheWxvYWRba2V5XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3h5W2tleV0gPSBwYXlsb2FkW2tleV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFByb3h5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgICAgICB9LFxuICAgIH07XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFJveHk7XG4iLCJpbXBvcnQgUm94eSBmcm9tIFwiLi9Sb3h5XCI7XG5cbi8qKlxuICogY29uc3QgcnggPSBSb3h5TGlzdGVuZXIgKHtcbiAqICAgICBldmVudE5hbWUgKCkgeyAvLyBoYW5kbGVyIC4uLiB9LFxuICogICAgIGV2ZW50TmFtZSAoKSB7IC8vIGhhbmRsZXIgLi4uIH0sXG4gKiB9KVxuICogcnguc2V0KCk7XG4gKiByeC5kaXNwYXRjaCgpO1xuICpcbiAqIHJ4LmFjdGlvbigpO1xuICpcbiAqIEBwYXJhbSBwYXlsb2FkXG4gKiBAcmV0dXJucyB7e3Byb3h5OiAqLCBkaXNwYXRjaCgqPSwgKj0pOiBSb3h5LCBnZXQoKik6ICosIGV2ZW50KCo9LCAqPSk6IHRoaXMsIGZpbGwoKj0sICo9KTogdGhpc319XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUm94eUxpc3RlbmVyID0gZnVuY3Rpb24gKHBheWxvYWQpIHtcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB7XG4gICAgICAgIF9fYWN0aW9uX18oKSB7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYWN0aW9uc05hbWVzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhwYXlsb2FkKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcbiAgICAgICAgYWN0aW9uc1tldmVudE5hbWVdID0gcGF5bG9hZFtldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGF5bG9hZFtldmVudE5hbWVdID09PSAnZnVuY3Rpb24nICYmIGV2ZW50TmFtZSAhPT0gYWN0aW9ucy5fX2FjdGlvbl9fLm5hbWUpIHtcbiAgICAgICAgICAgIGFjdGlvbnNOYW1lc1tldmVudE5hbWVdID0gJyc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHJ4ID0gUm94eShhY3Rpb25zTmFtZXMpO1xuICAgIC8vXG4gICAgcnguYWN0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbnNOYW1lc1xuICAgIH07XG5cbiAgICByeC5ldmVudCgoZXZlbnRDdXJzb3IsIHZhbHVlcykgPT4ge1xuICAgICAgICBhY3Rpb25zLl9fYWN0aW9uX18uY2FsbChhY3Rpb25zLCBldmVudEN1cnNvciwgdmFsdWVzKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhhY3Rpb25zKS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSwgaW5kZXgpIHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50Q3Vyc29yID09PSBldmVudE5hbWUgJiYgdHlwZW9mIGFjdGlvbnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNbZXZlbnROYW1lXS5jYWxsKGFjdGlvbnMsIGV2ZW50Q3Vyc29yLCB2YWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJ4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm94eUxpc3RlbmVyO1xuIiwiaW1wb3J0IGNsb25lIGZyb20gXCIuLi9zdGF0aWMvY2xvbmVcIjtcblxuXG4vKlxuYWRkKG5hbWUsIGNhbGxiYWNrLCBhdHRycykgIC8vIGFkZCBuZXcgc2NlbmVcbmdldChuYW1lKSAgICAgICAgICAgICAgICAgICAvLyByZXR1cm5lZCBzY2VuZSBieSBuYW1lXG5nZXRDdXJyZW50U2NlbmUoKSAgICAgICAgICAgLy8gcmV0dXJuZWQgY3VycmVudCBzY2VuZVxubmV4dCgpICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIG5leHQgc2NlbmVcbnJ1bihuYW1lLCBhdHRycykgICAgICAgICAgICAvLyBydW4gc2NlbmVzIGJ5IG5hbWUsIHNldCB0aGlzIGtleSBuYW1lIHRvIGRlZmF1bHRcbmNsb25lKCkgICAgICAgICAgICAgICAgICAgICAvLyBjbG9uZWQgY3VycmVudCBzY2VuZXNcblxuY29uc3Qgc2NlbmUgPSBTY2VuZSgpO1xuc2NlbmUuYWRkKCdlZGl0b3InLCBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgIGNvbnNvbGUubG9nKGEsIGIsIGMsIGQpO1xufSlcbnNjZW5lLmFkZCgnb3V0cHV0JywgZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHtcbiAgICBjb25zb2xlLmxvZyhhLCBiLCBjLCBkKTtcbn0pXG5zY2VuZS5ydW4oJ291dHB1dCcsIFsnaGVsbG8nLCAyMDAsIFsxLDIsM10sIHtpZDogMTIzfV0pO1xuKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXNcbiAqIEByZXR1cm5zIHt7Y3VycmVudDogc3RyaW5nLCBzY2VuZXM6IHtkZWZhdWx0OiB7Y2FsbGJhY2soKTogdm9pZCwgYXR0cnM6IFtdfX0sIGVsZW1lbnQ6IG51bGx9fVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IFNjZW5lID0gZnVuY3Rpb24gKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBjdXJyZW50OiAnZGVmYXVsdCcsXG4gICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgIHNjZW5lczoge1xuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCkge2NvbnNvbGUubG9nKCdbRGVmYXVsdCBTY2VuZV0nKX0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByb290LmFkZCA9IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgYXR0cnMgPSBbXSkge1xuICAgICAgICByb290LnNjZW5lc1tuYW1lXSA9IHtcbiAgICAgICAgICAgIGNhbGxiYWNrLFxuICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByb290LmdldCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiByb290LnNjZW5lc1tuYW1lXTtcbiAgICB9XG5cbiAgICByb290LmdldEN1cnJlbnRTY2VuZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc2NlbmVzW3Jvb3QuY3VycmVudF07XG4gICAgfVxuXG4gICAgcm9vdC5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbGVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocm9vdC5zY2VuZXMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChrZXlzW2ldID09PSByb290LmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGtleXNbaSArIDFdICE9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1tpICsgMV07XG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBsZXN0ID0ga2V5c1swXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9vdC5ydW4obGVzdCk7XG4gICAgfTtcblxuICAgIHJvb3QucnVuID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHtcbiAgICAgICAgcm9vdC5jdXJyZW50ID0ga2V5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgY29uc3Qgc2NlbmUgPSByb290LmdldEN1cnJlbnRTY2VuZSgpO1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHNjZW5lLmNhbGxiYWNrO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMgPSBBcnJheS5pc0FycmF5KGF0dHJzKSA/IGF0dHJzIDogW2F0dHJzXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHJvb3QsIGF0dHJzID8gYXR0cnMgOiBzY2VuZS5hdHRycyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqIEBkZXByZWNhdGVkICovXG4gICAgcm9vdC5zaG93ID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHsgcm9vdC5ydW4oa2V5LCBhdHRycykgfTtcbiAgICAvKiogQGRlcHJlY2F0ZWQgKi9cbiAgICByb290LnN0YXJ0ID0gZnVuY3Rpb24gKGtleSwgYXR0cnMpIHsgcm9vdC5ydW4oa2V5LCBhdHRycykgfTtcblxuICAgIHJvb3QuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZSh0aGlzKTtcbiAgICB9O1xuXG5cbiAgICBpZiAocHJvcGVydGllcyAmJiBwcm9wZXJ0aWVzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbWV0ZXIgPSBwcm9wZXJ0aWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdzY2VuZScgfHwga2V5ID09PSAnc2NlbmVzJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhc3MgPSBwcm9wZXJ0aWVzWydwYXNzJ10gfHwge307XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGFyYW1ldGVyKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3QuYWRkKG5hbWUsIHBhcmFtZXRlcltuYW1lXSwgcGFzcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByb290W2tleV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICByb290W2tleV0gPSBwYXJhbWV0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NlbmU7XG4iLCJpbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuXG4vKipcbiAqXG4gICAgY29uc3Qgc3RlcHNBdHRhY2tIZXJvID0gU3RlcHNTY2VuZSh7XG4gICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICBzdGVwczogW1xuICAgICAgICAgICAge25hbWU6ICdzdGFydF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2hlcm9fYXR0YWNrJywgY2FsbGJhY2s6IGZ1bmN9LFxuICAgICAgICAgICAge25hbWU6ICdoZXJvX2F0dGFja19hbmltYXRpb24nLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgICAgICB7bmFtZTogJ2VuZF9hdHRhY2snLCBjYWxsYmFjazogZnVuY30sXG4gICAgICAgIF1cbiAgICB9KTtcblxuICAgIHN0ZXBzQXR0YWNrSGVyby5lYWNoU3RlcHMoZnVuY3Rpb24gKGNiT2JqZWN0LCBpbmRleCkge30pO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5uZXh0KCk7XG5cbiAgICBzdGVwc0F0dGFja0hlcm8uZ290bygnaGVyb19hdHRhY2tfYW5pbWF0aW9uJykubmV4dCgpO1xuICAgIHN0ZXBzQXR0YWNrSGVyby5zdG9wKCk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogQHJldHVybnMge2FueX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTdGVwc1NjZW5lID0gZnVuY3Rpb24gKGNvbmZpZyA9IHtzdGVwczogW119KSB7XG4gICAgY29uc3Qgcm9vdCA9IHtcbiAgICAgICAgaXRlcmF0aW9uOiAwLFxuICAgICAgICBsb29wOiBjb25maWcubG9vcCB8fCBmYWxzZSxcbiAgICAgICAgc3RlcF9pdGVyYXRpb246IDAsXG4gICAgICAgIHN0ZXBfc3RvcDogZmFsc2UsXG4gICAgICAgIHN0ZXBfY2FsbGJhY2tfZWFjaDogbnVsbCxcbiAgICAgICAgc3RlcF9jYWxsYmFja3M6IGNvbmZpZy5zdGVwcyB8fCB7fSxcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICByb290LnBsYXkoKTtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSAwO1xuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3AoKSB7XG4gICAgICAgICAgICByb290LnN0ZXBfc3RvcCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgcGxheSgpIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9zdG9wID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IHJvb3Quc3RlcF9jYWxsYmFja3MubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBkZWxheShtcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyBjYWxsYmFjay5jYWxsKHJvb3QpOyB9LCBtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdvdG8obmFtZSkge1xuICAgICAgICAgICAgcm9vdC5zdGVwX2NhbGxiYWNrcy5mb3JFYWNoKChvYmplY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9pdGVyYXRpb24gPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9LFxuICAgICAgICBlYWNoU3RlcHMoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID0gY2FsbGJhY2s7XG4gICAgICAgICAgICByZXR1cm4gcm9vdDtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dCgpIHtcbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfc3RvcCkgcmV0dXJuIHJvb3Q7XG5cbiAgICAgICAgICAgIGlmIChyb290LnN0ZXBfaXRlcmF0aW9uID4gcm9vdC5zdGVwX2NhbGxiYWNrcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5zdGVwX2l0ZXJhdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKCFyb290Lmxvb3ApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q2FsbGJhY2tPYmplY3QgPSByb290LnN0ZXBfY2FsbGJhY2tzW3Jvb3Quc3RlcF9pdGVyYXRpb25dO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgIHJvb3Quc3RlcF9jYWxsYmFja19lYWNoLmNhbGwocm9vdCwgY3VycmVudENhbGxiYWNrT2JqZWN0LCByb290LnN0ZXBfaXRlcmF0aW9uLCByb290Lml0ZXJhdGlvbik7XG5cbiAgICAgICAgICAgIGN1cnJlbnRDYWxsYmFja09iamVjdC5jYWxsYmFjay5jYWxsKHJvb3QsIGN1cnJlbnRDYWxsYmFja09iamVjdCwgcm9vdC5zdGVwX2l0ZXJhdGlvbiwgcm9vdC5pdGVyYXRpb24pO1xuXG4gICAgICAgICAgICByb290Lml0ZXJhdGlvbisrXG4gICAgICAgICAgICByb290LnN0ZXBfaXRlcmF0aW9uKytcblxuICAgICAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgICAgIH0sXG4gICAgfVxuXG4gICAgcm9vdC5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKHRoaXMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gcm9vdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZXBzU2NlbmU7XG4iLCJcbmNvbnN0IFRpbWVyID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBkZWxheSwgcmVwZWF0LCB0aGlzSW5zdGFuY2UpIHtcbiAgICB0aGlzLnJlcGVhdCA9IHJlcGVhdDtcbiAgICB0aGlzLml0ZXJhdG9yID0gMDtcbn07XG5cblxuVGltZXIuc2V0VGltZW91dCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgbXMsIHRoaXNJbnN0KSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJyAmJiAhaXNOYU4obXMpICYmIG1zID4gMCkge1xuICAgICAgICB0aGlzSW5zdCA9IHR5cGVvZiB0aGlzSW5zdCA9PT0gJ29iamVjdCcgPyB0aGlzSW5zdCA6IHt9O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNJbnN0KVxuICAgICAgICB9LCBtcylcbiAgICB9XG59O1xuVGltZXIuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbiAoY2FsbGJhY2ssIG1zLCB0aGlzSW5zdCkge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicgJiYgIWlzTmFOKG1zKSAmJiBtcyA+IDApIHtcbiAgICAgICAgdGhpc0luc3QgPSB0eXBlb2YgdGhpc0luc3QgPT09ICdvYmplY3QnID8gdGhpc0luc3QgOiB7fTtcbiAgICAgICAgcmV0dXJuIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3QpXG4gICAgICAgIH0sIG1zKVxuICAgIH1cbn07XG5UaW1lci5jbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICBjbGVhclRpbWVvdXQoaWQpXG59O1xuVGltZXIuY2xlYXJJbnRlcnZhbCA9IGZ1bmN0aW9uIChpZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaWQpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lcjsiLCJpbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gXCIuLi9zdGF0aWMvaXNOdW1iZXJcIjtcbi8qXG5cbnRoaXMudHJhbnNmb3JtID0gVHJhbnNmb3JtKHRoaXMuZWxlbWVudCk7XG50aGlzLnRyYW5zZm9ybS5tZXRob2QoJ3JvdGF0ZScsIFsnNDVkZWcnXSk7XG50aGlzLnRyYW5zZm9ybS51cGRhdGUoKTtcbnRoaXMudHJhbnNmb3JtLnJlc2VhcmNoKCk7XG50aGlzLnRyYW5zZm9ybS5mdW5jdGlvblBhcmFtZXRlcnMoJ21hdHJpeCcpICAgICAgICAgLy8gWzEsIDAsIDAsIDEsIDAsIDBdOiBhcnJheVxudGhpcy50cmFuc2Zvcm0uZnVuY3Rpb25QYXJhbWV0ZXJzKCdyb3RhdGUnKSAgICAgICAgIC8vIFtcIjQ1ZGVnXCJdOiBzdHJpbmdcbnRoaXMudHJhbnNmb3JtLmZ1bmN0aW9uUGFyYW1ldGVycygncm90YXRlJywgdHJ1ZSkgICAvLyA0NTogaW50XG5cbi8vIC4uLlxuVHJhbnNmb3JtLmVsZW1lbnQodGhpcy5lbGVtZW50LCBbXG4gICAgJ3JvdGF0ZSgnICsgMTAgKydkZWcpJyxcbiAgICAnc2NhbGUoMC42LCAwLjYpJyxcbiAgICAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJyxcbl0pO1xuVHJhbnNmb3JtLmVsZW1lbnQodGhpcy5lbGVtZW50LCBbJ3JvdGF0ZSgnICsgMTAgKydkZWcpJ10pXG5jb25zdCB0cnMgPSBUcmFuc2Zvcm0odGhpcy5lbGVtZW50KTtcblxuLy8gd2l0aG91dCBvZiB0aGUgVHJhbnNmb3JtXG50aGlzLnN0eWxlKHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoJyArIDEwICsnZGVnKSBzY2FsZSgwLjYsIDAuNikgbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJ1xufSk7XG5cbiovXG5jb25zdCBUcmFuc2Zvcm0gPSBmdW5jdGlvbiAoZWxlbWVudCwgcGFyYW1zKVxue1xuICAgIGNvbnN0IHJvb3QgPSB7XG4gICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgIHRyYW5zZm9ybV9vYmo6IHt9LFxuICAgICAgICB0cmFuc2Zvcm1fYXJyOiBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybS5zcGxpdCgnKScpLmZpbHRlcigodmFsdWUpID0+IHZhbHVlLmxlbmd0aCApLFxuICAgICAgICB0cmFuc2Zvcm1fc3RyaW5nOiAnJyxcblxuICAgICAgICB1cGRhdGUoKXtcbiAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX3N0cmluZyA9ICcnO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhyb290LnRyYW5zZm9ybV9vYmopLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX3N0cmluZyArPSBrZXkgKyAnKCcgKyByb290LnRyYW5zZm9ybV9vYmpba2V5XS5qb2luKCcsICcpICsgJykgJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByb290LmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gIHJvb3QudHJhbnNmb3JtX3N0cmluZztcbiAgICAgICAgICAgIHJvb3QucmVzZWFyY2goKTtcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2QobWV0aG9kLCBwcm9wZXJ0aWVzLCBtdWx0aXBseSA9IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiBbcHJvcGVydGllc107XG5cbiAgICAgICAgICAgICAgICBpZiAobXVsdGlwbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHQgPSB2YWx1ZS5tYXRjaCgvW2Etel0rL2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSBwYXJzZUludCh2YWx1ZSkgKyBwYXJzZUludChyb290LnRyYW5zZm9ybV9vYmpbbWV0aG9kXVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaV0gPSBudW0gKyBleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllc1tpXSA9IHZhbHVlICsgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF1baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QudHJhbnNmb3JtX29ialttZXRob2RdID0gcHJvcGVydGllcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21ldGhvZF0gPSBwcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NldHMgcGFyYW1ldGVycyBpcyBub3QgYXZhaWxhYmxlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXNlYXJjaCgpe1xuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyID0gZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0uc3BsaXQoJyknKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5sZW5ndGggKTtcblxuICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fYXJyLmZvckVhY2goKHZhbHVlLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0gPSByb290LnRyYW5zZm9ybV9hcnJbaV0udHJpbSgpICArICcpJztcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkID0gcGFyYW0ubWF0Y2goL1tcXHdcXC5cXC1dKy9pZyk7XG4gICAgICAgICAgICAgICAgcm9vdC50cmFuc2Zvcm1fb2JqW21hdGNoZWRbMF1dID0gbWF0Y2hlZC5zbGljZSgxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZ1bmN0aW9uUGFyYW1ldGVycyhuYW1lLCBGSVJTVF9JVEVNX1RPX0lOVEVHRVIgPSBmYWxzZSl7XG4gICAgICAgICAgICBpZiAoRklSU1RfSVRFTV9UT19JTlRFR0VSXG4gICAgICAgICAgICAgICAgJiYgQXJyYXkuaXNBcnJheShyb290LnRyYW5zZm9ybV9vYmpbbmFtZV0pXG4gICAgICAgICAgICAgICAgJiYgcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdWzBdO1xuICAgICAgICAgICAgICAgIHJldHVybiBpc051bWJlcihpdGVtKVxuICAgICAgICAgICAgICAgICAgICA/IHBhcnNlSW50KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgIDogcm9vdC50cmFuc2Zvcm1fb2JqW25hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvb3QudHJhbnNmb3JtX29ialtuYW1lXTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcm9vdC5yZXNlYXJjaCgpO1xuXG4gICAgaWYgKHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgcm9vdC5tZXRob2Qoa2V5LCBwYXJhbXNba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByb290LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByb290O1xufVxuXG5UcmFuc2Zvcm0uZWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCB2YWx1ZXMpe1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlcykpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBbXTtcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKHByb3ApID0+IHsgcHJvcHMucHVzaChwcm9wKSB9KTtcbiAgICAgICAgc3R5bGl6ZXIoZWxlbWVudCwge3RyYW5zZm9ybTogcHJvcHMuam9pbignICcpfSk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNmb3JtO1xuIiwiaW1wb3J0IGdldFdpbmRvdyBmcm9tIFwiLi9zdGF0aWMvZ2V0V2luZG93XCI7XG5cbmltcG9ydCBDbGlwIGZyb20gXCIuL2NvbXBvbmVudHMvQ2xpcC5qc1wiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudC5qc1wiO1xuaW1wb3J0IEtleWJvYXJkRXZlbnRNYW5hZ2VyIGZyb20gXCIuL2NvbXBvbmVudHMvS2V5Ym9hcmRFdmVudE1hbmFnZXIuanNcIjtcbmltcG9ydCBNb3ZlQ2xpcCBmcm9tIFwiLi9jb21wb25lbnRzL01vdmVDbGlwLmpzXCI7XG5pbXBvcnQgU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TY2VuZS5qc1wiO1xuaW1wb3J0IFN0ZXBzU2NlbmUgZnJvbSBcIi4vY29tcG9uZW50cy9TdGVwc1NjZW5lLmpzXCI7XG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vY29tcG9uZW50cy9UaW1lci5qc1wiO1xuaW1wb3J0IFJveHlMaXN0ZW5lciBmcm9tIFwiLi9jb21wb25lbnRzL1JveHlMaXN0ZW5lci5qc1wiO1xuaW1wb3J0IFJveHkgZnJvbSBcIi4vY29tcG9uZW50cy9Sb3h5LmpzXCI7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vc3RhdGljJztcbmltcG9ydCBBbmltYXRpb25GcmFtZSBmcm9tIFwiLi9jb21wb25lbnRzL0FuaW1hdGlvbkZyYW1lXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvTG9hZGVyXCI7XG5pbXBvcnQgTWF0cml4IGZyb20gXCIuL2NvbXBvbmVudHMvTWF0cml4XCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vY29tcG9uZW50cy9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9jb21wb25lbnRzL1JlY3RhbmdsZVwiO1xuaW1wb3J0IFRyYW5zZm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi9jb21wb25lbnRzL0V2ZW50TWFuYWdlclwiO1xuXG5jb25zdCBBbmltYXRlID0ge1xuICAgIENsaXAsXG4gICAgQ29tcG9uZW50LFxuICAgIEtleWJvYXJkRXZlbnRNYW5hZ2VyLFxuICAgIE1vdmVDbGlwLFxuICAgIFNjZW5lLFxuICAgIFN0ZXBzU2NlbmUsXG4gICAgVGltZXIsXG4gICAgUm94eUxpc3RlbmVyLFxuICAgIFJveHksXG4gICAgQW5pbWF0aW9uRnJhbWUsXG4gICAgTG9hZGVyLFxuICAgIE1hdHJpeCxcbiAgICBQb2ludCxcbiAgICBSZWN0YW5nbGUsXG4gICAgVHJhbnNmb3JtLFxuICAgIFxuICAgIEV2ZW50TWFuYWdlcixcbn07XG5cbmNvbnN0IFJBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFX0FTX1JBRElBTiA9IDAuMDE3NDUzMjkyNTE5OTQzMjk1O1xuY29uc3QgREVHUkVFXzM2MF9BU19SQURJQU4gPSBERUdSRUVfQVNfUkFESUFOICogMzYwO1xuY29uc3QgUEkgPSAzLjE0MTU5MjY1MzU5O1xuY29uc3QgUkFEX1RPX0RFR1JFRVMgPSAzLjE0MTU5MjY1MzU5O1xuXG5BbmltYXRlLlJBRElBTiA9IFJBRElBTjtcbkFuaW1hdGUuREVHUkVFX0FTX1JBRElBTiA9IERFR1JFRV9BU19SQURJQU47XG5BbmltYXRlLkRFR1JFRV8zNjBfQVNfUkFESUFOID0gREVHUkVFXzM2MF9BU19SQURJQU47XG5BbmltYXRlLlBJID0gUEk7XG5BbmltYXRlLlJBRF9UT19ERUdSRUVTID0gUkFEX1RPX0RFR1JFRVM7XG5cbkFuaW1hdGUuU3RhdGljID1cbiAgICBBbmltYXRlLlV0aWwgPVxuICAgICAgICBTdGF0aWM7XG5cbi8vIGlmIChnZXRXaW5kb3coKSkgZ2V0V2luZG93KCkuQW5pbWF0ZSA9IEFuaW1hdGU7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGU7XG4iLCJcbmV4cG9ydCBjb25zdCBMRVRURVJfQ09OU09OQU5UID0gJ0IsQyxELEYsRyxILEosSyxMLE0sTixQLFEsUixTLFQsVixXLFgsWSxaJztcbmV4cG9ydCBjb25zdCBMRVRURVJfVk9XRUwgPSAnQSxFLEksTyxVLFknO1xuZXhwb3J0IGNvbnN0IEFCQyA9ICdBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWCxZLFonO1xuZXhwb3J0IGNvbnN0IE5VTUJFUlMgPSAnMCwxLDIsMyw0LDUsNiw3LDgsOSc7XG5leHBvcnQgY29uc3QgQU1QRVJTQU5EID0gJyYnO1xuIiwiaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBhdHRyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgdHlwZV9lbGVtZW50ID0gdHlwZU9mKGVsZW1lbnQpO1xuICAgIGlmICh0eXBlX2VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnQgPSBxdWVyeShlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgaWYgKHR5cGVPZihuYW1lLCAnb2JqZWN0JykpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBuYW1lKVxuICAgICAgICAgICAgICAgIGF0dHIoZWxlbWVudCwga2V5LCBuYW1lW2tleV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNOb2RlKGVsZW1lbnQpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSkgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gICAgICAgIGVsc2UgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGF0dHI7XG4iLCIvKipcbiAqXG4gKiBAcGFyYW0gZnJvbVxuICogQHBhcmFtIHRvXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gY2xvbmUoZnJvbSwgdG8pXG57XG4gICAgaWYgKGZyb20gPT09IG51bGwgfHwgdHlwZW9mIGZyb20gIT09IFwib2JqZWN0XCIpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yICE9PSBPYmplY3QgJiYgZnJvbS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHJldHVybiBmcm9tO1xuICAgIGlmIChmcm9tLmNvbnN0cnVjdG9yID09PSBEYXRlIHx8IGZyb20uY29uc3RydWN0b3IgPT09IFJlZ0V4cCB8fCBmcm9tLmNvbnN0cnVjdG9yID09PSBGdW5jdGlvbiB8fFxuICAgICAgICBmcm9tLmNvbnN0cnVjdG9yID09PSBTdHJpbmcgfHwgZnJvbS5jb25zdHJ1Y3RvciA9PT0gTnVtYmVyIHx8IGZyb20uY29uc3RydWN0b3IgPT09IEJvb2xlYW4pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBmcm9tLmNvbnN0cnVjdG9yKGZyb20pO1xuICAgIH1cblxuICAgIHRvID0gdG8gfHwgbmV3IGZyb20uY29uc3RydWN0b3IoKTtcblxuICAgIGZvciAobmFtZSBpbiBmcm9tKVxuICAgIHtcbiAgICAgICAgdG9bbmFtZV0gPSB0eXBlb2YgdG9bbmFtZV0gPT0gXCJ1bmRlZmluZWRcIiA/IGNsb25lKGZyb21bbmFtZV0sIG51bGwpIDogdG9bbmFtZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZTtcbiIsImltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCBjb3B5ID0gZnVuY3Rpb24gKHNyYywgaW5zdGFuY2UpXG57XG4gICAgaWYgKGlzTm9kZShzcmMpKVxuICAgICAgICByZXR1cm4gc3JjLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHNyYykpXG4gICAgICAgIHJldHVybiBzcmMuc2xpY2UoKTtcblxuICAgIGlmICh0eXBlb2Ygc3JjID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gc3JjLmJpbmQoaW5zdGFuY2UgfHwge30pO1xuXG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSkge1xuICAgICAgICAvLyByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3JjKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICBPYmplY3Qua2V5cyhzcmMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gc3JjW2tleV07XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGNvcHkodmFsdWUsIHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiID8gc3JjIDoge30pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3JjO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29weTtcbiIsIi8qXG5cbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1KTtcbmNvbnN0IGFycjAgPSBjcmVhdGVBcnJheSg1LCB0cnVlKTtcbmNvbnN0IGFycjEgPSBjcmVhdGVBcnJheSg1LCAxKTtcbmNvbnN0IGFycjIgPSBjcmVhdGVBcnJheSg1LCAnaGVsbG8gd29ybGQnKTtcbmNvbnN0IGFycjMgPSBjcmVhdGVBcnJheSg1LCBbMTAwLDIwMCwzMDBdKTtcbmNvbnN0IGFycjQgPSBjcmVhdGVBcnJheSg1LCB7YTonQScsYjonQicsYzonQyd9KTtcblxuKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIG51bVxuICogQHBhcmFtIGZpbGxcbiAqIEByZXR1cm5zIHthbnlbXX1cbiAqL1xuY29uc3QgY3JlYXRlQXJyYXkgPSBmdW5jdGlvbiAobnVtLCBmaWxsKSB7XG4gICAgbGV0IGFyciA9IFtdO1xuXG4gICAgaWYgKHR5cGVvZiBmaWxsID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZmlsbCA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgcmV0dXJuIG5ldyBBcnJheShudW0pLmZpbGwoZmlsbCk7XG4gICAgfVxuXG4gICAgYXJyID0gbmV3IEFycmF5KG51bSkuZmlsbCgwKTtcbiAgICBhcnIuZm9yRWFjaCgodmFsdWUsIGkpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zdCByID0gZmlsbC5jYWxsKGZpbGwsIGksIGkpO1xuICAgICAgICAgICAgYXJyW2ldID0gdHlwZW9mIHIgPT09ICdib29sZWFuJyB8fCByID8gciA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGZpbGwpKSBhcnJbaV0gPSBmaWxsW2ldID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBmaWxsW2ldIDtcbiAgICAgICAgZWxzZSBhcnJbaV0gPSBmaWxsO1xuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQXJyYXk7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gJy4vdHlwZU9mJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAodGFnLCBhdHRycywgaW5uZXIpIHtcbiAgICBjb25zdFxuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpLFxuICAgICAgICBpc19hdHRyID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVPZihzcmMsICdvYmplY3QnKSAmJiAhaXNOb2RlKHNyYylcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2h0bWwgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgc3JjKTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5zZXJ0X2NoaWxkID0gZnVuY3Rpb24gKHNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChzcmMpO1xuICAgICAgICB9LFxuICAgICAgICBpbnNlcnQgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZU9mKHNyYyk7XG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgaW5zZXJ0X2h0bWwoc3JjKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnICYmIGlzTm9kZShzcmMpKVxuICAgICAgICAgICAgICAgIGluc2VydF9jaGlsZChzcmMpO1xuICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PT0gJ2FycmF5JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykgaW5zZXJ0KHNyY1tpXSk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMiAmJiAhaXNfYXR0cihhdHRycykpIHtcbiAgICAgICAgaW5uZXIgPSBhdHRycztcbiAgICAgICAgYXR0cnMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYXR0cnMpXG4gICAgICAgIGZvciAobGV0IGsgaW4gYXR0cnMpXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7XG5cbiAgICBpZiAoaW5uZXIpXG4gICAgICAgIGluc2VydChpbm5lcik7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVsZW1lbnQ7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi9zdHIybm9kZVwiO1xuXG5cbmNvbnN0IGNyZWF0ZUZyYWdtZW50ID0gZnVuY3Rpb24gKGFwcGVuZCkge1xuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgaWYgKGlzTm9kZShhcHBlbmQpKVxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChhcHBlbmQpO1xuXG4gICAgaWYgKHR5cGVPZihhcHBlbmQsICdzdHJpbmcnKSlcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3RyMm5vZGUoYXBwZW5kKSk7XG5cbiAgICByZXR1cm4gZnJhZ21lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZyYWdtZW50O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcblxuXG5jb25zdCBjc3MgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICBpZiAoIXNlbGVjdG9yIHx8ICFwcm9wZXJ0aWVzKSByZXR1cm47XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IHt9O1xuICAgICAgICBwcm9wW3Byb3BlcnRpZXNdID0gYXJndW1lbnRzWzJdO1xuICAgICAgICByZXR1cm4gY3NzKHNlbGVjdG9yLCBwcm9wKTtcbiAgICB9XG5cbiAgICBsZXQgaSwgaywgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICB0eXBlU2VsZWN0b3IgPSB0eXBlT2Yoc2VsZWN0b3IpLFxuICAgICAgICB0eXBlUHJvcGVydGllcyA9IHR5cGVPZihwcm9wZXJ0aWVzKSxcbiAgICAgICAgcGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgICAgICAgICBsZXQgaSwgcDEgPSBzdHIuc3BsaXQoJzsnKSwgcDIsIHBuLCBpeCwgbyA9IHt9O1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHAxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcDIgPSBwMVtpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIHBuID0gcDJbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGl4ID0gcG4uaW5kZXhPZignLScpO1xuICAgICAgICAgICAgICAgIGlmIChpeCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgICAgIHBuID0gcG4uc3Vic3RyaW5nKDAsIGl4KSArIHBuW2l4ICsgMV0udG9VcHBlckNhc2UoKSArIHBuLnN1YnN0cmluZyhpeCArIDIpO1xuICAgICAgICAgICAgICAgIGlmIChwMi5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAgICAgICAgIG9bcG5dID0gcDJbMV0udHJpbSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfTtcblxuXG4gICAgc3dpdGNoICh0eXBlU2VsZWN0b3IpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzID0gW3NlbGVjdG9yXTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gc2VsZWN0b3I7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudHMpIHtcblxuICAgICAgICBpZiAodHlwZVByb3BlcnRpZXMgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgcHJvcGVydGllcyA9IHBhcnNlKHByb3BlcnRpZXMpO1xuXG4gICAgICAgIGZvciAoaSBpbiBlbGVtZW50cylcbiAgICAgICAgICAgIGZvciAoayBpbiBwcm9wZXJ0aWVzKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnN0eWxlW2tdID0gcHJvcGVydGllc1trXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNzcztcbiIsIlxuY29uc3QgZGVjb2RlR2V0UXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICBjb25zdCBwYWlycyA9IChxdWVyeVswXSA9PT0gJz8nID8gcXVlcnkuc3Vic3RyKDEpIDogcXVlcnkpLnNwbGl0KCcmJyk7XG4gICAgcGFpcnMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICBsZXQgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHJlc3VsdFtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0gfHwgJycpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZWNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZGVmaW5lZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lZDtcbiIsIlxuY29uc3QgZGVmaW5lZEluID0gZnVuY3Rpb24gKHN0YWNrLCB2YWx1ZSkge1xuICAgIHJldHVybiBzdGFjayAmJiBzdGFja1t2YWx1ZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZWRJbjtcbiIsImltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5cbmNvbnN0IGRvbUxvYWRlZCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgaWYgKGRvYy5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG4gICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICBlbHNlXG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpXG4gICAgICAgIH0sIGZhbHNlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUxvYWRlZDtcbiIsImltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHF1ZXJ5IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuXG4vKmNvbnN0IGVhY2ggPSBmdW5jdGlvbiAobGlzdCwgY2FsbGJhY2ssIHRtcCkge1xuICAgIGlmIChsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBpdGVtLCBpLCB0bXApO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGlzTm9kZShsaXN0KSkge1xuICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwobGlzdC5jaGlsZE5vZGVzKSwgY2FsbGJhY2ssIHRtcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh7fSwgaXRlbSwgaSwgdG1wKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsqL1xuXG5jb25zdCBlYWNoID0gZnVuY3Rpb24gKGxpc3QsIGNhbGxiYWNrLCBpbnN0YW5jZSA9IHt9KSB7XG4gICAgbGV0IHR5cGUgPSB0eXBlT2YobGlzdCk7XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoaSwgdiwgYSkgPT4gY2FsbGJhY2suY2FsbChpbnN0YW5jZSwgaSwgdiwgYSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKGxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QgaW5zdGFuY2VvZiBOb2RlTGlzdClcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goQXJyYXkuZnJvbShsaXN0KSwgY2FsbGJhY2ssIGluc3RhbmNlKVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9IGVhY2goW2xpc3RdLCBjYWxsYmFjaywgaW5zdGFuY2UpXG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKChrZXkpID0+IGNhbGxiYWNrLmNhbGwoaW5zdGFuY2UsIGtleSwgbGlzdFtrZXldLCBsaXN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGxpc3QgPSBlYWNoKGxpc3Quc3BsaXQoXCJcIiksIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IChuZXcgQXJyYXkobGlzdCkpLmZpbGwoMCk7XG4gICAgICAgICAgICBsaXN0ID0gZWFjaChhcnIsIGNhbGxiYWNrLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4gbGlzdDtcbn07XG5cbmVhY2gucGFyZW50ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmaWx0ZXIsIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSBnZXRQYXJlbnQoZWxlbWVudCk7XG4gICAgfVxufTtcblxuZWFjaC5maWx0ZXIgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZpbHRlciwgY2FsbGJhY2ssIGxvb3BzID0gMTApIHtcbiAgICBjb25zdCBnZXRQYXJlbnQgPSAoZWxlbSkgPT4gZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgPyBlbGVtLnBhcmVudE5vZGUgOiBmYWxzZTtcbiAgICBsZXQgZWxlbWVudCA9IGlzTm9kZShzZWxlY3RvcikgPyBzZWxlY3RvciA6IHF1ZXJ5KHNlbGVjdG9yKTtcbiAgICB3aGlsZSAobG9vcHMgPiAwICYmIGVsZW1lbnQpIHtcbiAgICAgICAgbG9vcHMtLTtcbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSAmJiBlbGVtZW50LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihmaWx0ZXIpKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudCA9IGdldFBhcmVudChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlYWNoO1xuIiwiXG5jb25zdCBlbmNvZGVHZXRRdWVyeSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgcmVzdWx0ICs9ICgocmVzdWx0Lmxlbmd0aCkgPyAnJicgOiAnPycpICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmNvZGVHZXRRdWVyeTtcbiIsIlxuY29uc3QgZXhpc3RzID0gZnVuY3Rpb24gKHNyYykge1xuICAgIHJldHVybiBzcmMgIT09IHVuZGVmaW5lZCAmJiBzcmMgIT09IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBleGlzdHM7XG4iLCJcblxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uIChkZXN0aW5hdGlvbiwgc291cmNlKSB7XG4gICAgZm9yIChsZXQgcGFyYW0gaW4gc291cmNlKVxuICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KHBhcmFtKSlcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3BhcmFtXSA9IHNvdXJjZVtwYXJhbV07XG5cbiAgICBmdW5jdGlvbiBfXygpIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciA9IGRlc3RpbmF0aW9uO1xuICAgIH1cblxuICAgIF9fLnByb3RvdHlwZSA9IHNvdXJjZS5wcm90b3R5cGU7XG4gICAgZGVzdGluYXRpb24ucHJvdG90eXBlID0gbmV3IF9fKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZXh0ZW5kUmVjdXJzaXZlID0gZnVuY3Rpb24gKGRlc3RpbmF0aW9uLCBzb3VyY2UpIHtcbiAgICBsZXQgcHJvcGVydHk7XG4gICAgZm9yIChwcm9wZXJ0eSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHNvdXJjZVtwcm9wZXJ0eV0gJiYgc291cmNlW3Byb3BlcnR5XS5jb25zdHJ1Y3RvciAmJiBzb3VyY2VbcHJvcGVydHldLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IGRlc3RpbmF0aW9uW3Byb3BlcnR5XSB8fCB7fTtcbiAgICAgICAgICAgIGV4dGVuZFJlY3Vyc2l2ZShkZXN0aW5hdGlvbltwcm9wZXJ0eV0sIHNvdXJjZVtwcm9wZXJ0eV0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW3Byb3BlcnR5XSA9IHNvdXJjZVtwcm9wZXJ0eV07XG4gICAgfVxuICAgIHJldHVybiBkZXN0aW5hdGlvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGV4dGVuZDtcbiIsImltcG9ydCBmaW5kT2JqZWN0cyBmcm9tICcuL2ZpbmRPYmplY3RzJztcblxuXG5jb25zdCBmaW5kT2JqZWN0ID0gZnVuY3Rpb24gKHZhbHVlcywgYXR0ciwgYXR0clZhbHVlKSB7XG4gICAgY29uc3QgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wWzBdIDogZmFsc2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kT2JqZWN0O1xuIiwiXG5cbmNvbnN0IGZpbmRPYmplY3RzID0gZnVuY3Rpb24gKGxpc3QsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCBpLCB0bXAgPSBbXTtcbiAgICBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdCA9PT0gXCJvYmplY3RcIilcbiAgICAgICAgbGlzdCA9IE9iamVjdC52YWx1ZXMobGlzdCk7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0KSlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBpZiAobGlzdFtpXSAmJiBsaXN0W2ldW2F0dHJdICE9PSB1bmRlZmluZWQgJiYgbGlzdFtpXVthdHRyXSA9PT0gYXR0clZhbHVlKVxuICAgICAgICAgICAgICAgIHRtcC5wdXNoKGxpc3RbaV0pO1xuXG4gICAgcmV0dXJuIHRtcCA7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZHMgPSBmdW5jdGlvbiAodmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpIHtcbiAgICBsZXQgdG1wID0gZmluZE9iamVjdHModmFsdWVzLCBhdHRyLCBhdHRyVmFsdWUpO1xuICAgIHJldHVybiB0bXAubGVuZ3RoID8gdG1wIDogZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZmluZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSkge1xuICAgIGxldCB0bXAgPSBmaW5kT2JqZWN0cyh2YWx1ZXMsIGF0dHIsIGF0dHJWYWx1ZSk7XG4gICAgcmV0dXJuIHRtcC5sZW5ndGggPyB0bXBbMF0gOiBmYWxzZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRPYmplY3RzO1xuIiwiXG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuaW1wb3J0IGRlZmluZWQgZnJvbSBcIi4vZGVmaW5lZFwiO1xuaW1wb3J0IG5vZGUyc3RyIGZyb20gXCIuL25vZGUyc3RyXCI7XG5cblxuLyoqXG4gKiBGb3JtYXR0aW5nIG9mIHN0cmluZywgb3IgbWF5YmUgdGVtcGxhdGUgYnVpbGRlclxuICpcbiAqIEV4YW1wbGVzOlxuICogLmZvcm1hdChcIkhlbGxvIHswfSwgeW91ciBjb2RlIGlzIHsxfSFcIiwgWydKYWRlJywgJ1ByZWZlY3QnXSk7XG4gKiAuZm9ybWF0KFwiSGVsbG8ge25hbWV9LCB5b3VyIGNvZGUgaXMge21lYW59IVwiLCB7bmFtZTonSmFkZScsIG1lYW46ICdQcmVmZWN0J30pO1xuICpcbiAqIEBwYXJhbSBzdHJpbmcgICAgU3RyaW5nXG4gKiBAcGFyYW0gbGlzdCAgQXJyYXl8T2JqZWN0XG4gKiBAcmV0dXJucyBzdHJpbmdcbiAqL1xuY29uc3QgZm9ybWF0ID0gZnVuY3Rpb24gKHN0cmluZywgbGlzdCkge1xuICAgIGxldCByZWc7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGlzdCkpXG4gICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoL3soXFxkKyl9L2cpO1xuICAgIGVsc2UgaWYgKGxpc3QgJiYgdHlwZW9mIGxpc3QgPT09ICdvYmplY3QnKVxuICAgICAgICByZWcgPSBuZXcgUmVnRXhwKC97KFxcdyspfS9nKTtcblxuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWcsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyKSB7XG4gICAgICAgIGlmIChkZWZpbmVkKGxpc3RbbnVtYmVyXSkgJiYgaXNOb2RlKGxpc3RbbnVtYmVyXSkpXG4gICAgICAgICAgICBsaXN0W251bWJlcl0gPSBub2RlMnN0cihsaXN0W251bWJlcl0pO1xuXG4gICAgICAgIHJldHVybiB0eXBlb2YgbGlzdFtudW1iZXJdICE9PSB1bmRlZmluZWQgPyBsaXN0W251bWJlcl0gOiBtYXRjaDtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdDtcbiIsIlxuY29uc3QgZ2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmV0dXJuIGdsb2JhbCA/IGdsb2JhbCA6IHt9O1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RvY3VtZW50IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0RG9jdW1lbnQ7XG4iLCJcbmNvbnN0IGdldExvY2F0aW9uID0gZnVuY3Rpb24gKCkge1xuXG4gICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdsb2NhdGlvbiBvYmplY3Qgbm90IGV4aXN0IScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldExvY2F0aW9uO1xuIiwiXG5jb25zdCBnZXRXaW5kb3cgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXR1cm4gZ2xvYmFsID8gZ2xvYmFsIDoge307XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignd2luZG93IG9iamVjdCBub3QgZXhpc3QhJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2luZG93O1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcblxuLyoqXG4gKiBCYXNlIEhUVFAgUmVxdWVzdFxuICpcbiAqIC5odHRwUmVxdWVzdCgge21ldGhvZDogJ0dFVCcsIGRhdGE6IHt9LCBoZWFkZXJzOiB7fSwgYWN0aW9uOiAnL2luZGV4J30sIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSl7fSwgdGhpc0luc3RhbmNlICk7XG4gKlxuICogQHBhcmFtIGNvbmZpZ1xuICogICAgICBkYXRhOiAgICAgICAgICAgZGF0YSB0byBzZW5kLiBPYmplY3QsIEZvcm1EYXRhIChQT1NUIG9ubHkpLCBIVE1MRm9ybUVsZW1lbnQgKFBPU1Qgb25seSlcbiAqICAgICAgYWN0aW9uLCB1cmw6ICAgIHVybCBhZGRyZXNzIHRvXG4gKiAgICAgIG1ldGhvZDogICAgICAgICByZXF1ZXN0IG1ldGhvZCBHRVQgUE9TVCBvciBjdXN0b20gbWV0aG9kcywgZGVmYXVsdCAnR0VUJ1xuICogICAgICBoZWFkZXJzOiAgICAgICAgaGVhZGVycyBPYmplY3QsIGtleSA9IHZhbHVlXG4gKiAgICAgIHVzZUVuY29kZTogICAgICB1c2VkIHVybCBlbmNvZGluZywgZGVmYXVsdCBUUlVFLiBCb29sZWFuXG4gKiAgICAgIHVzZUZvcm1EYXRhOiAgICB1c2VkIEZvcm1EYXRhLCBkZWZhdWx0IEZBTFNFLiBCb29sZWFuXG4gKiAgICAgIGFzeW5jOiAgICAgICAgICBkZWZhdWx0IFRSVUUuIEJvb2xlYW5cbiAqICAgICAgdXNlcjpcbiAqICAgICAgcGFzc3dvcmQ6XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrXG4gKiAgICAgIGV4ZWN1dGluZyBldmVudCAtIG9ubG9hZGVuZC4gZnVuY3Rpb24gKHN0YXR1cywgcmVzcG9uc2VUZXh0KVxuICpcbiAqIEBwYXJhbSB0aGlzSW5zdGFuY2VcbiAqICAgICAgb2JqZWN0ICd0aGlzJyBmb3IgY2FsbGJhY2tcbiAqXG4gKiBAcmV0dXJucyB7WE1MSHR0cFJlcXVlc3R9XG4gKi9cbmNvbnN0IGh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZywgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBrZXk7XG4gICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgZGF0YTogY29uZmlnLmRhdGEgfHwge30sXG4gICAgICAgIGFjdGlvbjogY29uZmlnLmFjdGlvbiB8fCBjb25maWcudXJsIHx8IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgIG1ldGhvZDogY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSA6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiBjb25maWcuaGVhZGVycyB8fCB7fSxcbiAgICAgICAgdXNlRW5jb2RlOiBjb25maWcudXNlRW5jb2RlID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcudXNlRW5jb2RlLFxuICAgICAgICB1c2VGb3JtRGF0YTogY29uZmlnLnVzZUZvcm1EYXRhID09PSB1bmRlZmluZWQgPyBmYWxzZSA6ICEhY29uZmlnLnVzZUZvcm1EYXRhLFxuICAgICAgICBhc3luYzogY29uZmlnLmFzeW5jID09PSB1bmRlZmluZWQgPyB0cnVlIDogISFjb25maWcuYXN5bmMsXG4gICAgICAgIHVzZXI6IGNvbmZpZy51c2VyIHx8IG51bGwsXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcudXNlciB8fCBudWxsLFxuICAgIH07XG5cbiAgICBjb25zdCBjb25jYXRlU3RyaW5nID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGZvciAoa2V5IGluIHBhcmFtcykge1xuICAgICAgICAgICAgcmVzdWx0ICs9ICcmJyArIGtleSArICc9JyArIChvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgOiBwYXJhbXNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgdGhpc0luc3RhbmNlID0gKHR5cGVPZih0aGlzSW5zdGFuY2UsICdvYmplY3QnKSkgPyB0aGlzSW5zdGFuY2UgOiB7fTtcblxuICAgIC8vIGRhdGEgcHJlcGFyZVxuICAgIGlmIChvcHRpb25zLm1ldGhvZCA9PT0gJ0dFVCcpIHtcblxuICAgICAgICAvLyBmb3JtIHRvIEZvcm1EYXRhXG4gICAgICAgIG9wdGlvbnMuYWN0aW9uICs9IG9wdGlvbnMuYWN0aW9uLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJztcbiAgICAgICAgb3B0aW9ucy5hY3Rpb24gKz0gY29uY2F0ZVN0cmluZyhvcHRpb25zLmRhdGEpO1xuICAgICAgICBzZW5kRGF0YSA9IHt9O1xuXG4gICAgfSBlbHNlIHtcblxuICAgICAgICAvLyByZXNldCB0byB1c2VGb3JtRGF0YSBpbiB0cnVlXG4gICAgICAgIGlmIChvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0ge307XG4gICAgICAgICAgICBvcHRpb25zLnVzZUZvcm1EYXRhID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbmREYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9ybSB0byBGb3JtRGF0YVxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgICAgICAgICBzZW5kRGF0YSA9IG5ldyBGb3JtRGF0YShvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgb3B0aW9ucy51c2VGb3JtRGF0YSA9IHRydWU7XG4gICAgICAgICAgICBvcHRpb25zLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnVzZUZvcm1EYXRhKSB7XG4gICAgICAgICAgICBpZiAoIShzZW5kRGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSkgc2VuZERhdGEgPSBuZXcgRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob3B0aW9ucy5kYXRhKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICBzZW5kRGF0YS5hcHBlbmQoa2V5LCBvcHRpb25zLnVzZUVuY29kZSA/IGVuY29kZVVSSUNvbXBvbmVudChvcHRpb25zLmRhdGFba2V5XSkgOiBvcHRpb25zLmRhdGFba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZERhdGEgPSBjb25jYXRlU3RyaW5nKG9wdGlvbnMuZGF0YSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGJ1aWxkIHJlcXVlc3RcbiAgICB4aHIub3BlbihvcHRpb25zLm1ldGhvZCwgb3B0aW9ucy5hY3Rpb24sIG9wdGlvbnMuYXN5bmMsIG9wdGlvbnMudXNlciwgb3B0aW9ucy5wYXNzd29yZCk7XG5cbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignWC1SZXF1ZXN0ZWQtV2l0aCcsICdYTUxIdHRwUmVxdWVzdCcpO1xuXG4gICAgaWYgKG9wdGlvbnMubWV0aG9kICE9PSAnR0VUJyAmJiAhb3B0aW9ucy51c2VGb3JtRGF0YSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgIH1cblxuICAgIGZvciAoa2V5IGluIG9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIG9wdGlvbnMuaGVhZGVyc1trZXldKTtcbiAgICB9XG5cbiAgICB4aHIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzSW5zdGFuY2UuWE1MSHR0cFJlcXVlc3QgPSB4aHI7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlLCB4aHIuc3RhdHVzLCB4aHIucmVzcG9uc2VUZXh0LCB4aHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHhoci5zZW5kT3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgeGhyLnNlbmQoc2VuZERhdGEpO1xuICAgIHJldHVybiB4aHI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBodHRwUmVxdWVzdDtcbiIsImltcG9ydCBhdHRyIGZyb20gXCIuLi9zdGF0aWMvYXR0clwiO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVFbGVtZW50XCI7XG5pbXBvcnQgY3JlYXRlRnJhZ21lbnQgZnJvbSBcIi4uL3N0YXRpYy9jcmVhdGVGcmFnbWVudFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiLi4vc3RhdGljL2Nzc1wiO1xuaW1wb3J0IGRvbUxvYWRlZCBmcm9tIFwiLi4vc3RhdGljL2RvbUxvYWRlZFwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuLi9zdGF0aWMvZ2V0RG9jdW1lbnRcIjtcbmltcG9ydCBnZXRXaW5kb3cgZnJvbSBcIi4uL3N0YXRpYy9nZXRXaW5kb3dcIjtcbmltcG9ydCBpbmplY3QgZnJvbSBcIi4uL3N0YXRpYy9pbmplY3RcIjtcbmltcG9ydCBzdHIybm9kZSBmcm9tIFwiLi4vc3RhdGljL3N0cjJub2RlXCI7XG5pbXBvcnQgc3RyMmZyYWdtZW50IGZyb20gXCIuLi9zdGF0aWMvc3RyMmZyYWdtZW50XCI7XG5pbXBvcnQgbm9kZTJzdHIgZnJvbSBcIi4uL3N0YXRpYy9ub2RlMnN0clwiO1xuaW1wb3J0IHF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvcXVlcnlcIjtcbmltcG9ydCBxdWVyeUFsbCBmcm9tIFwiLi4vc3RhdGljL3F1ZXJ5QWxsXCI7XG5pbXBvcnQgc2VhcmNoIGZyb20gXCIuLi9zdGF0aWMvc2VhcmNoXCI7XG5pbXBvcnQgZW5jb2RlR2V0UXVlcnkgZnJvbSBcIi4uL3N0YXRpYy9lbmNvZGVHZXRRdWVyeVwiO1xuaW1wb3J0IGRlY29kZUdldFF1ZXJ5IGZyb20gXCIuLi9zdGF0aWMvZGVjb2RlR2V0UXVlcnlcIjtcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vc3RhdGljL2h0dHBSZXF1ZXN0XCI7XG5pbXBvcnQgZGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2RlZmluZWRcIjtcbmltcG9ydCBkZWZpbmVkSW4gZnJvbSBcIi4uL3N0YXRpYy9kZWZpbmVkSW5cIjtcbmltcG9ydCBlYWNoIGZyb20gXCIuLi9zdGF0aWMvZWFjaFwiO1xuaW1wb3J0IGV4dGVuZCwge1xuICAgIGV4dGVuZFJlY3Vyc2l2ZVxufSAgZnJvbSBcIi4uL3N0YXRpYy9leHRlbmRcIjtcbmltcG9ydCBpc0VtcHR5IGZyb20gXCIuLi9zdGF0aWMvaXNFbXB0eVwiO1xuaW1wb3J0IGZpbmRPYmplY3QgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0XCI7XG5pbXBvcnQgZmluZE9iamVjdHMgZnJvbSBcIi4uL3N0YXRpYy9maW5kT2JqZWN0c1wiO1xuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi4vc3RhdGljL2Zvcm1hdFwiO1xuaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi4vc3RhdGljL2lzTm9kZVwiO1xuaW1wb3J0IGxvYWRDU1MgZnJvbSBcIi4uL3N0YXRpYy9sb2FkQ1NTXCI7XG5pbXBvcnQgbG9hZEpTIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTXCI7XG5pbXBvcnQgbG9hZEpTU3luYyBmcm9tIFwiLi4vc3RhdGljL2xvYWRKU1N5bmNcIjtcbmltcG9ydCBtZXJnZSBmcm9tIFwiLi4vc3RhdGljL21lcmdlXCI7XG5pbXBvcnQgbnVtYmVyMnN0cmluZyBmcm9tIFwiLi4vc3RhdGljL251bWJlcjJzdHJpbmdcIjtcbmltcG9ydCBvbiBmcm9tIFwiLi4vc3RhdGljL29uXCI7XG5pbXBvcnQgcG9zaXRpb24gZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvblwiO1xuaW1wb3J0IHBvc2l0aW9uTW91c2UgZnJvbSBcIi4uL3N0YXRpYy9wb3NpdGlvbk1vdXNlXCI7XG5pbXBvcnQgcmFuZG9tLCB7XG4gICAgcmFuZG9tQ29sb3IsXG4gICAgcmFuZG9tSXRlbSxcbiAgICByYW5kb21OdW1iZXIsXG4gICAgcmFuZG9tU3RyaW5nLFxuICAgIHJhbmRvbUh1bWFuaXplU3RyaW5nXG59IGZyb20gXCIuLi9zdGF0aWMvcmFuZG9tXCI7XG5pbXBvcnQgcmVkaXJlY3QgZnJvbSBcIi4uL3N0YXRpYy9yZWRpcmVjdFwiO1xuaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlwiO1xuaW1wb3J0IHR5cGVPZlN0cmljdCBmcm9tIFwiLi4vc3RhdGljL3R5cGVPZlN0cmljdFwiO1xuaW1wb3J0IHVyaSBmcm9tIFwiLi4vc3RhdGljL3VyaVwiO1xuaW1wb3J0IGNvcHkgZnJvbSBcIi4uL3N0YXRpYy9jb3B5XCI7XG5pbXBvcnQgY2xvbmUgZnJvbSBcIi4uL3N0YXRpYy9jbG9uZVwiO1xuaW1wb3J0IHRvT2JqZWN0IGZyb20gXCIuLi9zdGF0aWMvdG9PYmplY3RcIjtcbmltcG9ydCBpc0hUTUxTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc0hUTUxTdHJpbmdcIjtcbmltcG9ydCBjcmVhdGVBcnJheSBmcm9tIFwiLi4vc3RhdGljL2NyZWF0ZUFycmF5XCI7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSBcIi4uL3N0YXRpYy9pc1N0cmluZ1wiO1xuaW1wb3J0IGV4aXN0cyBmcm9tIFwiLi4vc3RhdGljL2V4aXN0c1wiO1xuaW1wb3J0IGlzRGVmaW5lZCBmcm9tIFwiLi4vc3RhdGljL2lzRGVmaW5lZFwiO1xuaW1wb3J0IGxvYWRCbG9iZmlsZSBmcm9tIFwiLi4vc3RhdGljL2xvYWRCbG9iZmlsZVwiO1xuaW1wb3J0IGxvYWRKU09OIGZyb20gXCIuLi9zdGF0aWMvbG9hZEpTT05cIjtcbmltcG9ydCBsb2FkVGV4dGZpbGUgZnJvbSBcIi4uL3N0YXRpYy9sb2FkVGV4dGZpbGVcIjtcbmltcG9ydCB0b0hUTUwgZnJvbSBcIi4uL3N0YXRpYy90b0hUTUxcIjtcbmltcG9ydCB0b1hNTCBmcm9tIFwiLi4vc3RhdGljL3RvWE1MXCI7XG5pbXBvcnQgc3R5bGl6ZXIgZnJvbSBcIi4uL3N0YXRpYy9zdHlsaXplclwiO1xuaW1wb3J0IHVuaXFBcnJheSBmcm9tIFwiLi4vc3RhdGljL3VuaXFBcnJheVwiO1xuaW1wb3J0IGlzTnVtYmVyIGZyb20gXCIuLi9zdGF0aWMvaXNOdW1iZXJcIjtcblxuY29uc3QgU3RhdGljID0ge1xuICAgIGF0dHIsXG4gICAgY3JlYXRlRWxlbWVudCxcbiAgICBjcmVhdGVGcmFnbWVudCxcbiAgICBjc3MsXG4gICAgZG9tTG9hZGVkLFxuICAgIGdldERvY3VtZW50LFxuICAgIGdldFdpbmRvdyxcbiAgICBpbmplY3QsXG4gICAgc3RyMm5vZGUsXG4gICAgc3RyMmZyYWdtZW50LFxuICAgIG5vZGUyc3RyLFxuICAgIHF1ZXJ5LFxuICAgIHF1ZXJ5QWxsLFxuICAgIHNlYXJjaCxcbiAgICBlbmNvZGVHZXRRdWVyeSxcbiAgICBkZWNvZGVHZXRRdWVyeSxcbiAgICBodHRwUmVxdWVzdCxcbiAgICBkZWZpbmVkLFxuICAgIGRlZmluZWRJbixcbiAgICBleHRlbmQsXG4gICAgZXh0ZW5kUmVjdXJzaXZlLFxuICAgIGVhY2gsXG4gICAgZmluZE9iamVjdCxcbiAgICBmaW5kT2JqZWN0cyxcbiAgICBmb3JtYXQsXG4gICAgaXNFbXB0eSxcbiAgICBpc05vZGUsXG4gICAgbG9hZENTUyxcbiAgICBsb2FkSlMsXG4gICAgbG9hZEpTU3luYyxcbiAgICBtZXJnZSxcbiAgICBudW1iZXIyc3RyaW5nLFxuICAgIG9uLFxuICAgIHBvc2l0aW9uLFxuICAgIHBvc2l0aW9uTW91c2UsXG4gICAgcmFuZG9tLFxuICAgIHJhbmRvbUNvbG9yLFxuICAgIHJhbmRvbUl0ZW0sXG4gICAgcmFuZG9tTnVtYmVyLFxuICAgIHJhbmRvbVN0cmluZyxcbiAgICByYW5kb21IdW1hbml6ZVN0cmluZyxcbiAgICByZWRpcmVjdCxcbiAgICB0eXBlT2YsXG4gICAgdHlwZU9mU3RyaWN0LFxuICAgIHVyaSxcbiAgICBjb3B5LFxuICAgIGNsb25lLFxuICAgIHRvT2JqZWN0LFxuICAgIGlzSFRNTFN0cmluZyxcbiAgICBjcmVhdGVBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBleGlzdHMsXG4gICAgaXNEZWZpbmVkLFxuICAgIGxvYWRCbG9iZmlsZSxcbiAgICBsb2FkSlNPTixcbiAgICBsb2FkVGV4dGZpbGUsXG4gICAgdG9IVE1MLFxuICAgIHRvWE1MLFxuICAgIHN0eWxpemVyLFxuICAgIHVuaXFBcnJheSxcbiAgICBpc051bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRpYztcbiIsImltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBpc05vZGUgZnJvbSAnLi9pc05vZGUnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgcXVlcnkgZnJvbSAnLi9xdWVyeSc7XG5cblxuY29uc3QgaW5qZWN0ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBkYXRhLCBhcHBlbmQsIHRvKVxue1xuICAgIGlmICh0eXBlT2Yoc2VsZWN0b3IsICdhcnJheScpKSB7XG4gICAgICAgIHNlbGVjdG9yLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIGluamVjdChlbGVtLCBkYXRhLCB0cnVlLCB0byk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVPZihzZWxlY3RvciwgJ3N0cmluZycpKVxuICAgICAgICBzZWxlY3RvciA9IHF1ZXJ5KHNlbGVjdG9yLCB0byk7XG5cbiAgICBpZiAoIWFwcGVuZClcbiAgICAgICAgc2VsZWN0b3IudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKSB7XG4gICAgICAgIGlmIChpc05vZGUoZGF0YSkpIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmFwcGVuZENoaWxkKGRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVPZihkYXRhLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgbGV0IGk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBpbmplY3Qoc2VsZWN0b3IsIGRhdGFbaV0sIHRydWUsIHRvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLmlubmVySFRNTCA9ICghYXBwZW5kKSA/IGRhdGEgOiBzZWxlY3Rvci5pbm5lckhUTUwgKyBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmplY3Q7XG4iLCJcbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICByZXR1cm4gc3JjICE9PSB1bmRlZmluZWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0RlZmluZWQ7XG4iLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuXG5cbmNvbnN0IGlzRW1wdHkgPSBmdW5jdGlvbiAoc3JjKSB7XG4gICAgaWYgKHR5cGVPZihzcmMsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc3JjKVxuICAgICAgICAgICAgaWYgKHNyYy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICh0eXBlT2Yoc3JjLCAnc3RyaW5nJykpIHtcbiAgICAgICAgc3JjID0gc3JjLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICAgIHJldHVybiBzcmMgPT09IFwiXCIgfHwgc3JjID09PSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKHNyYyA9PT0gMCB8fCBzcmMgPT09IG51bGwgfHwgc3JjID09PSB1bmRlZmluZWQgfHwgc3JjID09PSBmYWxzZSB8fCBpc05hTihzcmMpKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5O1xuIiwiLy8gaW1wb3J0IERPTVBhcnNlciBmcm9tICdET01QYXJzZXInO1xuXG5jb25zdCBpc0hUTUxTdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHRydWVzdCA9IGZhbHNlKSB7XG5cbiAgICBpZiAodHJ1ZXN0KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHJldHVybiAhIWRpdi5jaGlsZEVsZW1lbnRDb3VudDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudHJpbSgpLnN1YnN0cmluZygwLCAxKSA9PT0gJzwnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNIVE1MU3RyaW5nO1xuIiwiXG5cbmNvbnN0IGlzTm9kZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiAodmFsdWUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgICB2YWx1ZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFIHx8XG4gICAgICAgIHZhbHVlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG59O1xuXG5leHBvcnQgZGVmYXVsdCBpc05vZGU7XG4iLCJcbmNvbnN0IGlzTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCB2YWx1ZSBpbnN0YW5jZW9mIE51bWJlcikgJiYgIWlzTmFOKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGlzTnVtYmVyO1xuIiwiXG5jb25zdCBpc1N0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XG4iLCJcbmNvbnN0IGxvYWRCbG9iZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpKVxuICAgICAgICAudGhlbihibG9iID0+IG9ubG9hZChibG9iKSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRCbG9iZmlsZTsiLCJpbXBvcnQgdHlwZU9mIGZyb20gXCIuL3R5cGVPZlwiO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gXCIuL2dldERvY3VtZW50XCI7XG5cbmNvbnN0IGxvYWRDU1MgPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBpZiAoIXNyYykgcmV0dXJuIG51bGw7XG4gICAgaWYgKHR5cGVPZihzcmMsICdhcnJheScpKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3JjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2FkQ1NTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRvYyA9IGdldERvY3VtZW50KCk7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICBjb25zdCBpZCA9IFwic3JjLVwiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMik7XG5cbiAgICAgICAgbGluay5ocmVmID0gKHNyYy5zdWJzdHIoLTQpID09PSAnLmNzcycpID8gc3JjIDogc3JjICsgJy5jc3MnO1xuICAgICAgICBsaW5rLnJlbCA9ICdzdHlsZXNoZWV0JztcbiAgICAgICAgbGluay5pZCA9IGlkO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IG9ubG9hZDtcbiAgICAgICAgbGluay5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgcmV0dXJuIGxpbmtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkQ1NTO1xuIiwiaW1wb3J0IHR5cGVPZiBmcm9tIFwiLi90eXBlT2ZcIjtcbmltcG9ydCBnZXREb2N1bWVudCBmcm9tIFwiLi9nZXREb2N1bWVudFwiO1xuXG5jb25zdCBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudCgpO1xuY29uc3QgbG9hZEpTID0gZnVuY3Rpb24gKHNyYywgb25sb2FkLCBvbmVycm9yKSB7XG4gICAgaWYgKCFzcmMpIHJldHVybiBudWxsO1xuICAgIGlmICh0eXBlT2Yoc3JjLCAnYXJyYXknKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbG9hZEpTKHNyY1tpXSwgb25sb2FkLCBvbmVycm9yKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50RWxlbWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgY29uc3QgaWQgPSAncmVzb3VyY2UtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzIpLnNsaWNlKDIpO1xuXG4gICAgICAgIHNjcmlwdC5zcmMgPSAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmlkID0gaWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBvbmxvYWQ7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gb25lcnJvcjtcblxuICAgICAgICBkb2N1bWVudEVsZW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICByZXR1cm4gc2NyaXB0XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZEpTOyIsIlxuY29uc3QgbG9hZEpTT04gPSBmdW5jdGlvbiAoc3JjLCBvbmxvYWQsIG9uZXJyb3IpIHtcbiAgICBmZXRjaChzcmMpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oanNvbiA9PiBvbmxvYWQoanNvbikpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB0eXBlb2Ygb25lcnJvciA9PT0gJ2Z1bmN0aW9uJyA/IG9uZXJyb3IoZXJyb3IpIDogbnVsbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkSlNPTjsiLCJcbmltcG9ydCB0eXBlT2YgZnJvbSBcIi4vdHlwZU9mXCI7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XG5cbi8qKlxuICogTG9hZHMgYSBzY3JpcHQgZWxlbWVudCB3aXRoIGphdmFzY3JpcHQgc291cmNlXG4gKlxuICogLmxvYWRKU1N5bmMgKCB7XG4gKiAgICAgIG15c2NyaXB0MTogJy9wYXRoL3RvL215c2NyaXB0MScsXG4gKiAgICAgIG15c2NyaXB0MjogJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICB9LFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIC5sb2FkSlNTeW5jICggW1xuICogICAgICAnL3BhdGgvdG8vbXlzY3JpcHQxJyxcbiAqICAgICAgJy9wYXRoL3RvL215c2NyaXB0MicsXG4gKiAgICBdLFxuICogICAgZnVuY3Rpb24gKGxpc3QpIHt9KVxuICpcbiAqIEBuYW1lc3BhY2UgTmFtZXNwYWNlQXBwbGljYXRpb24ubG9hZEpTU3luY1xuICogQHBhcmFtIHNyY3MgICAgICAgT2JqZWN0LCBBcnJheS4gaXRlbXM6IGtleSBpcyBJRCwgdmFsdWUgaXMgc3JjXG4gKiBAcGFyYW0gY2FsbGJhY2sgIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIGFsbCBzcmNzIGlzIGxvYWRlZFxuICogQHBhcmFtIG9uZXJyb3IgICBGdW5jdGlvbiBjYWxsZWQgd2hlbiBsb2FkIGlzIGZhaWxlZFxuICogQHJldHVybnMgeyp9XG4gKi9cbmNvbnN0IGxvYWRKU1N5bmMgPSBmdW5jdGlvbiAoc3JjcywgY2FsbGJhY2ssIG9uZXJyb3IpIHtcbiAgICBpZiAodHlwZU9mKHNyY3MsICdvYmplY3QnKSB8fCB0eXBlT2Yoc3JjcywgJ2FycmF5JykpIHtcbiAgICAgICAgaWYgKHR5cGVPZihzcmNzLCAnYXJyYXknKSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XG4gICAgICAgICAgICBzcmNzLmZvckVhY2goIChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgb2JqWydyZXNvdXJjZS0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzMikuc2xpY2UoMildID0gaXRlbVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcmNzID0gb2JqO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpdGVyYXRvciA9IDA7XG4gICAgICAgIGNvbnN0IHNjcmlwdHMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoc3JjcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcmMgPSBzcmNzW2tleV07XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBjcmVhdGVFbGVtZW50KCdzY3JpcHQnLCB7XG4gICAgICAgICAgICAgICAgc3JjOiAoc3JjLnN1YnN0cigtMykgPT09ICcuanMnKSA/IHNyYyA6IHNyYyArICcuanMnLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICBpZDoga2V5LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG9uZXJyb3I7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHRzW3RoaXMuaWRdID0gdGhpcztcbiAgICAgICAgICAgICAgICBpdGVyYXRvciArKztcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmF0b3IgPT09IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHt9LCBzY3JpcHRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9KVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRKU1N5bmM7XG4iLCJcbmNvbnN0IGxvYWRUZXh0ZmlsZSA9IGZ1bmN0aW9uIChzcmMsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGZldGNoKHNyYylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAudGhlbih0ZXh0ID0+IG9ubG9hZCh0ZXh0KSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHR5cGVvZiBvbmVycm9yID09PSAnZnVuY3Rpb24nID8gb25lcnJvcihlcnJvcikgOiBudWxsKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRUZXh0ZmlsZTsiLCJcbmNvbnN0IG1lcmdlID0gKG9iamVjdDEsIG9iamVjdDIpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gb2JqZWN0Mikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCBvYmplY3QyW2tleV0uY29uc3RydWN0b3IgPT09IE9iamVjdCApIHtcbiAgICAgICAgICAgICAgICBvYmplY3QxW2tleV0gPSBtZXJnZShvYmplY3QxW2tleV0sIG9iamVjdDJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9iamVjdDFba2V5XSA9IG9iamVjdDJba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBvYmplY3QxW2tleV0gPSBvYmplY3QyW2tleV07XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0MTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlO1xuIiwiXG5cbmNvbnN0IG5vZGUyc3RyID0gIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIHJldHVybiBjb250YWluZXIuaW5uZXJIVE1MO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kZTJzdHI7XG4iLCJcbmV4cG9ydCBjb25zdCBudW1iZXIyc3RyaW5nID0gZnVuY3Rpb24gKHgpIHtcbiAgICBsZXQgZTtcbiAgICBpZiAoTWF0aC5hYnMoeCkgPCAxLjApIHtcbiAgICAgICAgZSA9IHBhcnNlSW50KHgudG9TdHJpbmcoKS5zcGxpdCgnZS0nKVsxXSk7XG4gICAgICAgIGlmIChlKSB7XG4gICAgICAgICAgICB4ICo9IE1hdGgucG93KDEwLGUtMSk7XG4gICAgICAgICAgICB4ID0gJzAuJyArIChuZXcgQXJyYXkoZSkpLmpvaW4oJzAnKSArIHgudG9TdHJpbmcoKS5zdWJzdHJpbmcoMik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBlID0gcGFyc2VJbnQoeC50b1N0cmluZygpLnNwbGl0KCcrJylbMV0pO1xuICAgICAgICBpZiAoZSA+IDIwKSB7XG4gICAgICAgICAgICBlIC09IDIwO1xuICAgICAgICAgICAgeCAvPSBNYXRoLnBvdygxMCxlKTtcbiAgICAgICAgICAgIHggKz0gKG5ldyBBcnJheShlKzEpKS5qb2luKCcwJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHg7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBudW1iZXIyc3RyaW5nO1xuIiwiaW1wb3J0IHF1ZXJ5QWxsIGZyb20gJy4vcXVlcnlBbGwnO1xuaW1wb3J0IHR5cGVPZiBmcm9tICcuL3R5cGVPZic7XG5pbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcblxuXG5jb25zdCBvbiA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZXZlbnROYW1lLCBjYWxsYmFjaywgYnViYmxlKSB7XG4gICAgbGV0IGksIGVsZW1lbnRzID0gW107XG5cbiAgICBzd2l0Y2ggKHR5cGVPZihzZWxlY3RvcikpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgICBpZiAoaXNOb2RlKHNlbGVjdG9yKSlcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IFtzZWxlY3Rvcl07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgICAgICAgZWxlbWVudHMgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZWxlbWVudHNbaV0gJiYgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcilcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaywgISFidWJibGUpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG9uO1xuIiwiLy8gaW1wb3J0IGlzTm9kZSBmcm9tIFwiLi9pc05vZGVcIjtcblxuXG5pbXBvcnQgaXNIVE1MU3RyaW5nIGZyb20gXCIuL2lzSFRNTFN0cmluZ1wiO1xuaW1wb3J0IHN0cjJub2RlIGZyb20gXCIuL3N0cjJub2RlXCI7XG5cbmNvbnN0IHBvc2l0aW9uID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICBjb25zdCBkYXRhID0ge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9O1xuICAgIGlmICh0eXBlb2YgZWxlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaWYgKGlzSFRNTFN0cmluZyhlbGVtKSkge1xuICAgICAgICAgICAgZWxlbSA9IHN0cjJub2RlKGVsZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZWxlbSA9PT0gd2luZG93IHx8IGVsZW0gPT09IGRvY3VtZW50KSB7XG4gICAgICAgIGRhdGEud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgZGF0YS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGRhdGEuZWxlbWVudCA9IHdpbmRvdztcbiAgICB9XG4gICAgZWxzZVxuICAgIGlmIChlbGVtICYmIGVsZW0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIGlmIChlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IHdpbmRvdy5wYWdlWE9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgY2xpZW50VG9wID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudFRvcCB8fCAwLFxuICAgICAgICAgICAgICAgIGNsaWVudExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50TGVmdCB8fCBkb2N1bWVudC5ib2R5LmNsaWVudExlZnQgfHwgMDtcblxuICAgICAgICAgICAgZGF0YS55ID0gTWF0aC5yb3VuZChyZWN0LnRvcCArIHNjcm9sbFRvcCAtIGNsaWVudFRvcCk7XG4gICAgICAgICAgICBkYXRhLnggPSBNYXRoLnJvdW5kKHJlY3QubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0KTtcbiAgICAgICAgICAgIGRhdGEud2lkdGggPSBlbGVtLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgZGF0YS5oZWlnaHQgPSBlbGVtLm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZGF0YS50b3AgPSByZWN0LnRvcCArIHBhZ2VZT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gcmVjdC5sZWZ0ICsgcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gcmVjdC5yaWdodCArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICAgICAgZGF0YS5ib3R0b20gPSByZWN0LmJvdHRvbSArIHBhZ2VYT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IHRvcCA9IDAsIGxlZnQgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICB0b3AgKz0gcGFyc2VJbnQoZWxlbS5vZmZzZXRUb3AsIDEwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IHBhcnNlSW50KGVsZW0ub2Zmc2V0TGVmdCwgMTApO1xuICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGEueSA9IHRvcDtcbiAgICAgICAgICAgIGRhdGEueCA9IGxlZnQ7XG4gICAgICAgICAgICBkYXRhLndpZHRoID0gZWxlbS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGRhdGEuaGVpZ2h0ID0gZWxlbS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5lbGVtZW50ID0gZWxlbTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwb3NpdGlvbjtcbiIsIlxuXG5jb25zdCBwb3NpdGlvbk1vdXNlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCEoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogYXJndW1lbnQgaXMgbm90IHR5cGUgdGhlIE1vdXNlRXZlbnQhJyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdCxcbiAgICAgICAgeTogZXZlbnQuY2xpZW50WSAtIHJlY3QudG9wXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uTW91c2U7XG4iLCJpbXBvcnQgcXVlcnlBbGwgZnJvbSAnLi9xdWVyeUFsbCc7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBzZWxlY3RvclxuICogQHBhcmFtIGZyb21cbiAqIEBwYXJhbSBjYWxsYmFja1xuICogQHBhcmFtIHRoaXNJbnN0YW5jZVxuICogQHJldHVybnMge05vZGV8Ym9vbGVhbn1cbiAqL1xuY29uc3QgcXVlcnkgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZyb20sIGNhbGxiYWNrLCB0aGlzSW5zdGFuY2UpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tLCBjYWxsYmFjaywgdGhpc0luc3RhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudHMgJiYgZWxlbWVudHNbMF0gPyBlbGVtZW50c1swXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnk7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCB0eXBlT2YgZnJvbSAnLi90eXBlT2YnO1xuaW1wb3J0IGdldERvY3VtZW50IGZyb20gJy4vZ2V0RG9jdW1lbnQnO1xuXG5jb25zdCBkb2MgPSBnZXREb2N1bWVudCgpO1xuXG5jb25zdCBxdWVyeUFsbCA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZnJvbSwgY2FsbGJhY2ssIHRoaXNJbnN0YW5jZSkge1xuICAgIGxldCBlbGVtZW50cyA9IFtdO1xuICAgIGZyb20gPSBmcm9tIHx8IGRvYztcblxuICAgIGlmIChpc05vZGUoc2VsZWN0b3IpKVxuICAgICAgICByZXR1cm4gW3NlbGVjdG9yXTtcblxuICAgIGlmICh0eXBlT2YoZnJvbSwgJ3N0cmluZycpKVxuICAgICAgICBmcm9tID0gZG9jLnF1ZXJ5U2VsZWN0b3IoZnJvbSk7XG4gICAgaWYgKGZyb20pXG4gICAgICAgIGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChmcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgIGlmIChjYWxsYmFjaylcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2NhbGxiYWNrLmNhbGwodGhpc0luc3RhbmNlIHx8IHt9LCBlbGVtZW50KX0pO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIG51bWJlclxuICogQHBhcmFtIG1pblxuICogQHBhcmFtIG1heFxuICogQHJldHVybnMge251bWJlcn1cbiAqL1xuaW1wb3J0IHtBQkMsIExFVFRFUl9DT05TT05BTlQsIExFVFRFUl9WT1dFTCwgTlVNQkVSU30gZnJvbSBcIi4vYWJjXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbik7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlIGEgcmFuZG9tIGhleCBjb2xvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbUNvbG9yID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRicuc3BsaXQoJycpO1xuICAgIGxldCBpLCBjb2xvciA9ICcjJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgNjsgaSsrKVxuICAgICAgICBjb2xvciArPSBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2KV07XG4gICAgcmV0dXJuIGNvbG9yO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbU51bWJlciA9IGZ1bmN0aW9uIChzaXplID0gNikge1xuICAgIGlmIChzaXplID4gMTYpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLmNlaWwoc2l6ZS8xNik7XG4gICAgICAgIGxldCByZXMgPSAnJztcbiAgICAgICAgZm9yIChpOyBpID4gMDsgaS0tKVxuICAgICAgICAgICAgcmVzICs9IEFycmF5KDE2KS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJyk7XG4gICAgICAgIHJldHVybiByZXMuc2xpY2UoMCwgc2l6ZSk7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZUludChBcnJheShzaXplKS5maWxsKDApLm1hcChpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSkuam9pbignJykpO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIChzaXplID0gNiwgd2l0aE51bWJlcnMgPSBmYWxzZSkge1xuICAgIGxldCBpLCBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhYnMgPSB3aXRoTnVtYmVyc1xuICAgICAgICA/IEFCQyArIE5VTUJFUlMudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpXG4gICAgICAgIDogQUJDLnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBmb3IgKGkgPSBzaXplOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHN0cmluZyArPSBhYnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWJzLmxlbmd0aCldO1xuICAgIH1cbiAgICByZXR1cm4gc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IHJhbmRvbUh1bWFuaXplU3RyaW5nID0gZnVuY3Rpb24gKHNpemUgPSA2KSB7XG4gICAgbGV0IGksIHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGNvbnNvbmFudCA9ICBMRVRURVJfQ09OU09OQU5ULnRvTG93ZXJDYXNlKCkuc3BsaXQoJywnKTtcbiAgICBjb25zdCB2b3dlbCA9ICBMRVRURVJfVk9XRUwudG9Mb3dlckNhc2UoKS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IHZvd2VsRmlyc3QgPSAoTWF0aC5yYW5kb20oKSAqIDEwKSA+IDU7XG4gICAgZm9yIChpID0gc2l6ZSAvIDIgKyAxOyBpID4gMDsgaSAtLSkge1xuICAgICAgICBsZXQgczEgPSBjb25zb25hbnRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uc29uYW50Lmxlbmd0aCldO1xuICAgICAgICBsZXQgczIgPSB2b3dlbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2b3dlbC5sZW5ndGgpXTtcbiAgICAgICAgc3RyaW5nICs9IHZvd2VsRmlyc3QgPyBzMSArIHMyIDogczIgKyBzMTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nLnN1YnN0cmluZygwLCBzaXplKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHJhbmRvbSBpdGVtIGZyb20gYXJyYXlcbiAqIEBwYXJhbSBhcnJcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgcmFuZG9tSXRlbSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpID8gYXJyW3JhbmRvbSgwLCBhcnIubGVuZ3RoLTEpXSA6IGZhbHNlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmFuZG9tO1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5pbXBvcnQgZ2V0RG9jdW1lbnQgZnJvbSBcIi4vZ2V0RG9jdW1lbnRcIjtcblxuXG5jb25zdCByZWRpcmVjdCA9IGZ1bmN0aW9uICh0bykge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgY29uc3QgZG9jID0gZ2V0RG9jdW1lbnQoKTtcbiAgICBsb2MuaHJlZiA9IHRvIHx8IGRvYy5ocmVmO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkaXJlY3Q7XG4iLCJpbXBvcnQgaXNOb2RlIGZyb20gJy4vaXNOb2RlJztcbmltcG9ydCBxdWVyeUFsbCBmcm9tICcuL3F1ZXJ5QWxsJztcbmltcG9ydCBxdWVyeSBmcm9tICcuL3F1ZXJ5JztcblxuLyoqXG4gKiBzZWFyY2goICd1bCA+IGxpJywgICdkYXRhLWxpbmsnLCBOb2RlRWxlbWVudCk7XG4gKlxuICogQHBhcmFtIHNlbGVjdG9yXG4gKiBAcGFyYW0gYXR0clxuICogQHBhcmFtIGZyb21cbiAqIEByZXR1cm5zIHt7fX1cbiAqL1xuY29uc3Qgc2VhcmNoID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBhdHRyLCBmcm9tKSB7XG4gICAgZnJvbSA9IGlzTm9kZShmcm9tKSA/IGZyb20gOiBxdWVyeShmcm9tKTtcbiAgICBsZXQgaSA9IDAsXG4gICAgICAgIGtleSxcbiAgICAgICAgZWxlbWVudHMgPSB7fSxcbiAgICAgICAgcXVlcnlFbGVtZW50cyA9IHF1ZXJ5QWxsKHNlbGVjdG9yLCBmcm9tIHx8IGRvY3VtZW50LmJvZHkpO1xuXG4gICAgaWYgKHF1ZXJ5RWxlbWVudHMpIHtcbiAgICAgICAgd2hpbGUgKGkgPCBxdWVyeUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKCFhdHRyKVxuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gcXVlcnlFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChxdWVyeUVsZW1lbnRzW2ldLmhhc0F0dHJpYnV0ZShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBxdWVyeUVsZW1lbnRzW2ldLmdldEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IHF1ZXJ5RWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50cztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaDtcbiIsIlxuY29uc3Qgc3RyMmZyYWdtZW50ID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIGlmIChkb2N1bWVudC5jcmVhdGVSYW5nZSlcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KHN0cmluZyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBpLFxuICAgICAgICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzdHJpbmc7XG4gICAgICAgIHdoaWxlIChpID0gY29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpKTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgc3RyMmZyYWdtZW50O1xuIiwiaW1wb3J0IHN0cjJmcmFnbWVudCBmcm9tIFwiLi9zdHIyZnJhZ21lbnRcIjtcblxuY29uc3Qgc3RyMm5vZGUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBsZXQgZnJhZ21lbnQgPSBzdHIyZnJhZ21lbnQoc3RyaW5nKTtcblxuICAgIHN3aXRjaCAoZnJhZ21lbnQuY2hpbGRFbGVtZW50Q291bnQpIHtcbiAgICAgICAgY2FzZSAwOiBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmVzdWx0ID0gZnJhZ21lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgICAgICByZXN1bHQgPSBjb250YWluZXI7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHIybm9kZTtcbiIsIlxuY29uc3Qgc3R5bGl6ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuc3R5bGVba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3R5bGl6ZXI7XG4iLCIvKipcbiAqIEBkZXByZWNhdGVkXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm5zIHtib29sZWFufEVsZW1lbnR9XG4gKi9cbmNvbnN0IHRvSFRNTCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBjb25zdCB0eXBlID0gJ3RleHQvaHRtbCc7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgdHlwZSk7XG5cbiAgICAgICAgaWYgKHhtbERvYy5kb2N1bWVudEVsZW1lbnQgJiYgeG1sRG9jLmJvZHkuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIHJldHVybiB4bWxEb2MuYm9keS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9IVE1MO1xuIiwiXG5jb25zdCB0b09iamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JylcbiAgICAgICAgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbHVlKSlcbiAgICAgICAgOiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdG9PYmplY3Q7XG4iLCJcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqIEBwYXJhbSB2YWx1ZVxuICogQHJldHVybnMge2Jvb2xlYW58RWxlbWVudH1cbiAqL1xuY29uc3QgdG9YTUwgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9ICd0ZXh0L3htbCc7XG4gICAgICAgIGNvbnN0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgY29uc3QgeG1sRG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyh2YWx1ZSwgdHlwZSk7XG5cbiAgICAgICAgaWYgKHhtbERvYy5kb2N1bWVudEVsZW1lbnQgJiYgeG1sRG9jLmRvY3VtZW50RWxlbWVudC50YWdOYW1lICE9PSAnaHRtbCcpIHtcbiAgICAgICAgICAgIHJldHVybiB4bWxEb2MuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1hNTDtcbiIsImltcG9ydCB0eXBlT2ZTdHJpY3QgZnJvbSBcIi4vdHlwZU9mU3RyaWN0XCI7XG5pbXBvcnQgaXNOb2RlIGZyb20gXCIuL2lzTm9kZVwiO1xuXG5jb25zdCB0eXBlT2YgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCBzaW1wbGVUeXBlcyA9IFsnbnVsbCcsICdib29sZWFuJywgJ3VuZGVmaW5lZCcsICdmdW5jdGlvbicsICdzdHJpbmcnLCAnbnVtYmVyJywgJ2RhdGUnLCAnYXJyYXknLCAnb2JqZWN0J107XG4gICAgbGV0IHQgPSB0eXBlT2ZTdHJpY3QodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHNpbXBsZVR5cGVzLmluZGV4T2YodCkgPT09IC0xICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpXG4gICAgICAgIHQgPSAnb2JqZWN0JztcblxuICAgIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgPyB0eXBlLnRvTG93ZXJDYXNlKCkgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mO1xuIiwiXG5jb25zdCB0eXBlT2ZTdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICBjb25zdCB0ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyA/IHR5cGUgPT09IHQgOiB0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZU9mU3RyaWN0O1xuIiwiXG5jb25zdCB1bmlxQXJyYXkgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4LCBzZWxmKSB7XG4gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pcUFycmF5O1xuIiwiaW1wb3J0IGdldExvY2F0aW9uIGZyb20gXCIuL2dldExvY2F0aW9uXCI7XG5cblxuY29uc3QgdXJpID0gZnVuY3Rpb24gKHVyaSkge1xuICAgIGNvbnN0IGxvYyA9IGdldExvY2F0aW9uKCk7XG4gICAgdXJpID0gdXJpIHx8IGxvYy5wYXRobmFtZTtcbiAgICB1cmkgPSB1cmkucmVwbGFjZSgvXFwvKy9pZywgJy8nKTtcbiAgICByZXR1cm4gdXJpLmxlbmd0aCA+IDEgJiYgdXJpLnNsaWNlKDAsIDEpICE9PSAnLycgPyAnLycgKyB1cmkgOiB1cmk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmk7XG4iXSwic291cmNlUm9vdCI6IiJ9