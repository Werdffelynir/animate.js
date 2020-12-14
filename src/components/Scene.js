import clone from "../static/clone";

export class SceneClass {
    constructor(layers = {}) {
        this.current = 'default';
        this.layers = {
            default() {
                console.log('[Default Scene]')
            },
        };

        Object.keys(layers).forEach((key) => {
            this.add(key, layers[key]);
        });
    }

    add(name, callback) {
        this.layers[name] = callback;
    }

    get(name) {
        return this.layers[name];
    }

    next() {
        let lest = false;
        const keys = Object.keys(this.layers);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === this.current) {
                if (typeof keys[i + 1] !== "undefined")
                    lest = keys[i + 1];
                if (i === keys.length - 1) {
                    lest = keys[0];
                }
                break;
            }
        }
        this.render(lest);
    }

    render(key = 'default') {
        this.current = key;
        const cb = this.layers[this.current];

        if (typeof cb === "function") {
            cb.call(cb);
        }
    }

    clone(name) {
        return clone(this);
    }
}

const Scene = function (layers) {
    const root = {
        current: 'default',
        layers: {
            default() {
                console.log('[Default Scene]')
            },
        },
    };

    root.add = function (name, callback) {
        root.layers[name] = callback;
    }

    root.get = function (name) {
        return root.layers[name];
    }

    root.next = function () {
        let lest = false;
        const keys = Object.keys(root.layers);
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === root.current) {
                if (typeof keys[i + 1] !== "undefined")
                    lest = keys[i + 1];
                if (i === keys.length - 1) {
                    lest = keys[0];
                }
                break;
            }
        }
        root.show(lest);
    }

    root.show = function (key) {
        root.current = key || 'default';
        const cb = root.layers[root.current];

        if (typeof cb === "function") {
            cb.call(cb);
        }
    }

    root.clone = function () {
        return clone(this);
    };

    if (layers && layers.constructor === Object) {
        Object.keys(layers).forEach((key) => {
            root.add(key, layers[key]);
        });
    }

    return root;
};

export default Scene;
