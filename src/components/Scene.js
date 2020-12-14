import clone from "../static/clone";

const Scene = function (layers) {
    const root = {
        current: 'default',
        layers: {
            default () { console.log('[Default Scene]') },
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
