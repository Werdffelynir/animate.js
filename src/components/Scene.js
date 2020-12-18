import clone from "../static/clone";


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
const Scene = function (properties) {
    const root = {
        current: 'default',
        element: null,
        scenes: {
            default: {
                callback() {console.log('[Default Scene]')},
                attrs: [],
            }
        },
    };

    root.add = function (name, callback, attrs = []) {
        root.scenes[name] = {
            callback,
            attrs
        };
    }

    root.get = function (name) {
        return root.scenes[name];
    }

    root.getCurrentScene = function () {
        return root.scenes[root.current];
    }

    root.next = function () {
        let lest = false;
        const keys = Object.keys(root.scenes);
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
        root.run(lest);
    };

    root.run = function (key, attrs) {
        root.current = key || 'default';
        const scene = root.getCurrentScene();
        const callback = scene.callback;

        if (typeof callback === "function") {
            if (attrs) {
                attrs = Array.isArray(attrs) ? attrs : [attrs];
            }

            callback.apply(callback, attrs ? attrs : scene.attrs);
        }
    };

    /** @deprecated */
    root.show = function (key, attrs) { root.run(key, attrs) };
    /** @deprecated */
    root.start = function (key, attrs) { root.run(key, attrs) };

    root.clone = function () {
        return clone(this);
    };

    if (properties && properties.scenes && properties.scenes.constructor === Object) {
        Object.keys(properties.scenes).forEach((key) => {
            root.add(key, properties.scenes[key]);
        });
    }

    return root;
};

export default Scene;
