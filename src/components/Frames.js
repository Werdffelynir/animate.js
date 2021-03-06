/*
const animation = Frames({
    fps: 24,
    paused: false,
});
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
 * @returns {{duration: number, startpaly: number, paused: boolean, delay: number, requestId: number, callback: number, progress: number, start(callback): function, pause: function, cancel: function}}
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
        if (!internal.frameCount) internal.frameCount = 0;
        internal.progress = timestamp - internal.startpaly;

        if (internal.fps && internal.fps > 0) {
            internal.now = Date.now();
            internal.elapsed = internal.now - internal.then;
            if (internal.elapsed > internal.fpsInterval) {
                internal.then = internal.now - (internal.elapsed % internal.fpsInterval);

                if (external.callback && !internal.paused) {
                    internal.frameCount ++;
                    external.callback.call(external, internal.progress, internal.frameCount);
                }
            }

        } else {
            if (external.callback && !internal.paused) {
                internal.frameCount ++;
                external.callback.call(external, internal.progress, internal.frameCount);
            }
        }

        requestAnimationFrame(animation);
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

