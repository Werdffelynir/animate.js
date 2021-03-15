import clone from "../static/clone";


/*
## Examples:
import StageFactory from "StageFactory";

const stage = StageFactory({
    editor () {},
    output () {},
});

stage.scene(name, callback, attrs){}
stage.getScene(name) {}
stage.getCurrentScene() {}
stage.getCurrentSceneName() {}
stage.next() {}
stage.execute(name, attrs) {}
stage.clone() {}

## Examples:
import Scene from "Scene";

Scene.scene('editor', function (a, b, c, d) {
    console.log(a, b, c, d);
})
Scene.scene('output', function (a, b, c, d) {
    console.log(a, b, c, d);
})
Scene.execute('output', ['hello', 200, [1,2,3], {id: 123}]);

## Examples:
const sceneContext = {};
const stageFactory = StageFactory({
    editor () {},
    output () {},
}, sceneContext);
*/

export class StageFactory {
    constructor(properties, attrs) {
        this.current = 'default';
        this.element = null;
        this.scenes = {
            // default: {callback() {console.log('[Default Scene]')}, attrs: []}
        };
        if (properties && properties.constructor === Object) {
            Object.keys(properties).forEach((key) => {
                this.scene(key, properties[key], Array.isArray(attrs) ? attrs : [attrs]);
            });
        }

    }
    scene(name, callback, attrs){
        this.scenes[name] = {
            callback,
            attrs
        };}
    getScene(name) {
        return this.scenes[name];}
    getCurrentScene() {
        return this.scenes[this.current];}
    getCurrentSceneName() {
        return this.current;}
    next() {
        // if (name) {this.current = name;}
        let lest = false;
        const keys = Object.keys(this.scenes);
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
        this.execute(lest);
    }
    execute(name, attrs) {
        this.current = !name && this.current === 'default'
            ? Object.keys(this.scenes)[0]
            : name;
        const scene = this.getCurrentScene();
        const callback = scene.callback;

        if (typeof callback === "function") {
            if (attrs) {
                attrs = Array.isArray(attrs) ? attrs : [attrs];
            }
            // todo: changed apply to call
            callback.apply(this, attrs ? attrs : scene.attrs);
        }
    }
    clone() {
        return clone(this);
    }
}

/**
 * Stage.scene(name, callback, attrs)   // add new scene
 *
 * Stage.getScene(name)                 // returned scene by name
 *
 * Stage.getCurrentScene()              // returned current scene
 *
 * Stage.next()                         // to next scene
 *
 * Stage.execute(name, attrs)           // run scenes by name, set this key name to default
 *
 * Stage.clone()                        // cloned current scenes
 *
 */
const Stage = new StageFactory({},{});

export default Stage;
