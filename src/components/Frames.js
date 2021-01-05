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
    const internal = {
        fps: false,
        paused: false,
        now: 0,
        elapsed: 0,
        then: 0,
        fpsInterval: 0,
        frameCount: 0,
        startpaly: 0,
        progress: 0,
    };

    const external = {

    };

    Object.keys(internal).forEach((key) => {
        internal[key] = typeof parameters[key] !== undefined
            ? parameters[key]
            : internal[key];
    });

    const animation = function (timestamp) {
        if (!internal.startpaly) internal.startpaly = timestamp;
        internal.progress = timestamp - internal.startpaly;

        requestAnimationFrame(animation);

        if (internal.fps && internal.fps > 0) {
            internal.now = Date.now();
            internal.elapsed = internal.now - internal.then;
            if (internal.elapsed > internal.fpsInterval) {
                internal.then = internal.now - (internal.elapsed % internal.fpsInterval);

                if (external.callback && !internal.paused) {
                    external.callback.call(external, internal.progress);
                }
            }

        } else {
            if (external.callback && !internal.paused) {
                external.callback.call(external, internal.progress);
            }
        }
    }

    external.pause = function () {
        internal.paused = !internal.paused;
    };

    external.start = function (callback) {
        if (callback) {
            external.callback = callback;
        }

        if (internal.fps > 0) {
            internal.fpsInterval = 1000 / internal.fps;
            internal.then = Date.now();
            internal.startTime = internal.then;
        }
        internal.requestId = window.requestAnimationFrame(animation);
    };

    external.cancel = function () {
        window.cancelAnimationFrame(internal.requestId);
    };

    return external;
};

export default Frames;

