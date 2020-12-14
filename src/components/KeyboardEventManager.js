
const KeyboardEventManager = function ()
{
    const storage = {};
    const baseCallbacksList = {};
    const addStorage = function (event, key, callback) {
        if (!storage[event]) storage[event] = {};
        if (!storage[event][key]) storage[event][key] = [];
        storage[event][key].push(callback);

        if (typeof baseCallbacksList[event] !== 'function') {
            baseCallbacksList[event] = baseCallback;
        }
    };
    const baseCallback = function (event) {
        Object.keys(storage).map((type) => {
            Object.keys(storage[type]).map((keyCode) => {
                if (Array.isArray( storage[type][keyCode] )) {
                    storage[type][keyCode].map((callback) => {
                        if (event.type === type && parseInt(keyCode) === event.keyCode ) {
                            callback.call(event, event);
                        }
                    });
                }
            });
        });
    };

    const eachCallbacksList = {};
    const eachCallback = function (event, callback) {
        eachCallbacksList[event] = callback;
    };

    function setupListeners () {
        const add = () => {
            Object.keys(baseCallbacksList).map(function (event) {
                document.addEventListener(event, baseCallbacksList[event]);
            })
            Object.keys(eachCallbacksList).map(function (event) {
                document.addEventListener(event, eachCallbacksList[event]);
            })
        };
        const rm = () => {
            Object.keys(baseCallbacksList).map(function (event) {
                document.removeEventListener(event, baseCallbacksList[event]);
            })
            Object.keys(eachCallbacksList).map(function (event) {
                document.removeEventListener(event, eachCallbacksList[event]);
            })
        };
        rm();
        add();
    }

    const root = {
        each(event, callback) {
            eachCallback(event, callback);
            setupListeners();
        },
        withConditionKey(event, key, callback) {
            addStorage(event, key, callback);
            setupListeners();
        },
        press(key, callback) {
            root.withConditionKey('keypress', key, callback);
        },
        up(key, callback) {
            root.withConditionKey('keyup', key, callback);
        },
        down(key, callback) {
            root.withConditionKey('keydown', key, callback);
        },
    };

    return root;
};

export default KeyboardEventManager;
