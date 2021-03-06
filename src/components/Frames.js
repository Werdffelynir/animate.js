/*
const fr = Frames({
    fps: 24,
    paused: false,
    callback: (progress) => { if (Math.round(progress) % 1000 === 0) { // ... } },
});

### Methods
fr.start();
fr.pause();
fr.cancel();

### Getters
fr.fps;
fr.count;
fr.progress;
fr.paused;
*/

/**
 *
 * @deprecated
 * @param parameters
 * @returns {boolean|{cancel: function, computed: {elapsed: number, frameCount: number, paused: boolean, startpaly: number, fpsInterval: number, now: number, fps: boolean, callback: boolean, progress: number, then: number}, fps, readonly count: number, start: function, readonly progress: number, callback, pause: function}|number}
 * @constructor
 */
const Frames = function (parameters = {}) {
    const definedParameters = [
        'fps',
        'paused',
        'looper',
        'callback',
    ];

    const root = {
        computed: {
            fps: false,
            paused: false,
            callback: false,
            now: 0,
            elapsed: 0,
            then: 0,
            fpsInterval: 0,
            frameCount: 0,
            startpaly: 0,
            progress: 0,
        },
        get fps() {
            return root.computed.fps;
        },
        get count() {
            return root.computed.frameCount;
        },
        get progress() {
            return root.computed.progress;
        },
        get paused() {
            return root.computed.paused;
        },
        set fps(value) {
            root.computed.fps = value;
        },
        set callback(value) {
            root.computed.callback = value;
        },
        pause: function () {
            root.paused = !root.paused;
        },
        start: function (callback) {
            if (callback) {
                root.computed.callback = callback;
            }
            if (root.computed.fps > 0) {
                root.computed.fpsInterval = 1000 / root.computed.fps;
                root.computed.then = Date.now();
                root.computed.startTime = root.computed.then;
            }
            root.computed.requestId = window.requestAnimationFrame(animation);
        },
        cancel: function () {
            window.cancelAnimationFrame(root.computed.requestId);
        },
    }

    Object.keys(parameters).forEach((key) => {
        if (definedParameters.indexOf(key) === false) {
            if (Object.keys(root).indexOf(key) === false) {
                root[key] =  parameters[key];
            }
        } else {
            root.computed[key] =  parameters[key];
        }
    });
    // Object.values(defined).forEach((key) => {
    //     root.computed[key] = (typeof parameters[key] !== undefined) ? parameters[key] : root.computed[key];
    // });

    const animation = function (timestamp) {
        if (!root.computed.startpaly) root.computed.startpaly = timestamp;
        if (!root.computed.frameCount) root.computed.frameCount = 0;
        root.computed.progress = timestamp - root.computed.startpaly;
        if (root.computed.fps && root.computed.fps > 0) {
            root.computed.now = Date.now();
            root.computed.elapsed = root.computed.now - root.computed.then;
            if (root.computed.elapsed > root.computed.fpsInterval) {
                root.computed.then = root.computed.now - (root.computed.elapsed % root.computed.fpsInterval);

                if (root.computed.callback && !root.computed.paused) {
                    root.computed.frameCount++;
                    root.computed.callback.call(root, root.computed.progress, root.computed.frameCount);
                }
            }
        } else {
            if (root.computed.callback && !root.computed.paused) {
                root.computed.frameCount++;
                root.computed.callback.call(root, root.computed.progress, root.computed.frameCount);
            }
        }

        requestAnimationFrame(animation);
    }

    return root;
};

export default Frames;

