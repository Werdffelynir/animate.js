/*
const animation = FrameAnimation();
animation.pause();
animation.start(function(progress){
    if (Math.round(progress) % 1000 === 0) {
        // do something
    }
});
animation.cancel();
*/
/**
 *
 * @returns {{duration: number, startpaly: number, paused: boolean, delay: number, requestId: number, callback: number, progress: number}}
 * @constructor
 */
const Frames = function (parameters = {}) {
    const default_parameters = {
        fps: false,
        paused: false,
    };

    const root = {
        now: 0,
        elapsed: 0,
        then: 0,
        fpsInterval: 0,
        frameCount: 0,
        fps: 30,
        startpaly: 0,
        progress: 0,
        paused: false,
    };

    Object.keys(default_parameters).forEach((key) => {
        root[key] = typeof parameters[key] !== undefined
            ? parameters[key]
            : default_parameters[key];
    });

    const animation = function (timestamp) {
        if (!root.startpaly) root.startpaly = timestamp;
        root.progress = timestamp - root.startpaly;

        requestAnimationFrame(animation);

        if (!root.fps && root.fps > 0) {
            root.now = Date.now();
            root.elapsed = root.now - root.then;
            if (root.elapsed > root.fpsInterval) {
                root.then = root.now - (root.elapsed % root.fpsInterval);

                if (root.callback && !root.paused) {
                    root.callback.call(root, root.progress);
                }
            }

        } else {
            if (root.callback && !root.paused) {
                root.callback.call(root, root.progress);
            }
        }
    }

    root.pause = function () {
        root.paused = !root.paused;
    };

    root.start = function (callback) {
        if (callback) {
            root.callback = callback;
        }

        if (root.fps > 0) {
            root.fpsInterval = 1000 / root.fps;
            root.then = Date.now();
            root.startTime = root.then;
        }
        root.requestId = window.requestAnimationFrame(animation);
    };

    root.cancel = function () {
        window.cancelAnimationFrame(root.requestId);
    };

    return root;
};

export default Frames;
