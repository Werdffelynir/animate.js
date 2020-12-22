import clone from "../static/clone";


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
            callback.apply(root, attrs ? attrs : scene.attrs);
        }
    };

    /** @deprecated */
    root.show = function (key, attrs) { root.run(key, attrs) };
    /** @deprecated */
    root.start = function (key, attrs) { root.run(key, attrs) };

    root.clone = function () {
        return clone(this);
    };


    if (properties && properties.constructor === Object) {
        Object.keys(properties).forEach((key) => {
            const parameter = properties[key];

            if (key === 'scene' || key === 'scenes') {
                const pass = properties['pass'] || {};
                Object.keys(parameter).forEach((name) => {
                    root.add(name, parameter[name], pass);
                });
            } else if (typeof root[key] === "undefined") {
                root[key] = parameter;
            }
        });
    }

    return root;
};

export default Scene;
