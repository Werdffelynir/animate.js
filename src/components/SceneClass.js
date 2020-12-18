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