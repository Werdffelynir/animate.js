
// event.keyCode = 8
export const KeyboardKeyCode = {
    key(name){
        return KeyboardKeyCode[name]
    },
    names(){
        return Object.keys(KeyboardKeyCode);
    },
    get 'backspace' () { return 8 },
    get 'tab' () { return 9 },
    get 'enter' () { return 13 },
    get 'shift(left)' () { return 16 },
    get 'shift(right)' () { return 16 },
    get 'ctrl(left)' () { return 17 },
    get 'ctrl(right)' () { return 17 },
    get 'alt(left)' () { return 18 },
    get 'alt(right)' () { return 18 },
    get 'pause/break' () { return 19 },
    get 'caps lock' () { return 20 },
    get 'escape' () { return 27 },
    get 'space' () { return 32 },
    get 'page up' () { return 33 },
    get 'page down' () { return 34 },
    get 'end' () { return 35 },
    get 'home' () { return 36 },
    get 'left arrow' () { return 37 },
    get 'up arrow' () { return 38 },
    get 'right arrow' () { return 39 },
    get 'down arrow' () { return 40 },
    get 'print screen' () { return 44 },
    get 'insert' () { return 45 },
    get 'delete' () { return 46 },
    get '0' () { return 48 },
    get '1' () { return 49 },
    get '2' () { return 50 },
    get '3' () { return 51 },
    get '4' () { return 52 },
    get '5' () { return 53 },
    get '6' () { return 54 },
    get '7' () { return 55 },
    get '8' () { return 56 },
    get '9' () { return 57 },
    get 'a' () { return 65 },
    get 'b' () { return 66 },
    get 'c' () { return 67 },
    get 'd' () { return 68 },
    get 'e' () { return 69 },
    get 'f' () { return 70 },
    get 'g' () { return 71 },
    get 'h' () { return 72 },
    get 'i' () { return 73 },
    get 'j' () { return 74 },
    get 'k' () { return 75 },
    get 'l' () { return 76 },
    get 'm' () { return 77 },
    get 'n' () { return 78 },
    get 'o' () { return 79 },
    get 'p' () { return 80 },
    get 'q' () { return 81 },
    get 'r' () { return 82 },
    get 's' () { return 83 },
    get 't' () { return 84 },
    get 'u' () { return 85 },
    get 'v' () { return 86 },
    get 'w' () { return 87 },
    get 'x' () { return 88 },
    get 'y' () { return 89 },
    get 'z' () { return 90 },
    get 'numpad 0' () { return 96 },
    get 'numpad 1' () { return 97 },
    get 'numpad 2' () { return 98 },
    get 'numpad 3' () { return 99 },
    get 'numpad 4' () { return 100 },
    get 'numpad 5' () { return 101 },
    get 'numpad 6' () { return 102 },
    get 'numpad 7' () { return 103 },
    get 'numpad 8' () { return 104 },
    get 'numpad 9' () { return 105 },
    get 'multiply' () { return 106 },
    get 'add' () { return 107 },
    get 'subtract' () { return 109 },
    get 'divide' () { return 111 },
    get 'decimal point' () { return 110 },
    get 'f1' () { return 112 },
    get 'f2' () { return 113 },
    get 'f3' () { return 114 },
    get 'f4' () { return 115 },
    get 'f5' () { return 116 },
    get 'f6' () { return 117 },
    get 'f7' () { return 118 },
    get 'f8' () { return 119 },
    get 'f9' () { return 120 },
    get 'f10' () { return 121 },
    get 'f11' () { return 122 },
    get 'f12' () { return 123 },
    get 'num lock' () { return 144 },
    get 'scroll lock' () { return 145 },
};

export const KeyboardEventsNames = {
    get 'keyup' () { return 'keyup' },
    get 'keydown' () { return 'keydown' },
    get 'keypress' () { return 'keypress' },
};

/*

each(event, callback)
withConditionKey(event, key, callback)
press(key, callback)
up(key, callback)
down(key, callback)

const keyManager = EventKeyManager();
keyManager.each(KeyboardEventsNames.keypress, (event) => {

            //
            // charCode: 119
            // code: "KeyW"
            // key: "w"
            // keyCode: 119
            // repeat: false
            // shiftKey: false
            // type: "keypress"
            // which: 119
            // isComposing: false
            // isTrusted: true
            // detail: 0
            // composed: true
            // ctrlKey: false
            // altKey: false

    if (event.keyCode === KeyboardKeyCode.w) {

    }
});
*/
/**
 *
 * @return {{withConditionKey(*=, *=, *=): void, up(*=, *=): void, press(*=, *=): void, down(*=, *=): void, each(*=, *=): void}}
 * @constructor
 */
const EventKeyManager = function ()
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

    return {
        active: {
            up: false,
            down: false,
            left: false,
            right: false,
            moved: false,
        },
        each(event, callback) {
            eachCallback(event, callback);
            setupListeners();
        },
        withConditionKey(event, key, callback) {
            addStorage(event, key, callback);
            setupListeners();
        },
        press(key, callback) {
            this.withConditionKey('keypress', key, callback);
        },
        up(key, callback) {
            this.withConditionKey('keyup', key, callback);
        },
        down(key, callback) {
            this.withConditionKey('keydown', key, callback);
        },
    };
};

export default EventKeyManager;
