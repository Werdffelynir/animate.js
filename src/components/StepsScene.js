import clone from "../static/clone";

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
const StepsScene = function (config = {steps: []}) {
    const root = {
        iteration: 0,
        loop: config.loop || false,
        step_iteration: 0,
        step_stop: false,
        step_callback_each: null,
        step_callbacks: config.steps || {},
        start() {
            root.play();
            root.step_iteration = 0;
            return root;
        },
        stop() {
            root.step_stop = true;
            return root;
        },
        play() {
            root.step_stop = false;
            return root;
        },
        end() {
            root.step_iteration = root.step_callbacks.length - 1;
            return root;
        },
        delay(ms, callback) {
            setTimeout(() => { callback.call(root); }, ms);
        },
        goto(name) {
            root.step_callbacks.forEach((object, index) => {
                if (object.name === name) {
                    root.step_iteration = index;
                }
            });
            return root;
        },
        eachSteps(callback) {
            root.step_callback_each = callback;
            return root;
        },
        next() {
            if (root.step_stop) return root;

            if (root.step_iteration > root.step_callbacks.length - 1) {
                root.step_iteration = 0;
                if (!root.loop)
                    return root;
            }

            const currentCallbackObject = root.step_callbacks[root.step_iteration];

            if (typeof root.step_callback_each === 'function')
                root.step_callback_each.call(root, currentCallbackObject, root.step_iteration, root.iteration);

            currentCallbackObject.callback.call(root, currentCallbackObject, root.step_iteration, root.iteration);

            root.iteration++
            root.step_iteration++

            return root;
        },
    }

    root.clone = function () {
        return clone(this);
    };

    return root;
};

export default StepsScene;
