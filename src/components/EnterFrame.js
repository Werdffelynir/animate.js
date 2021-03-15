import createElement from "../static/createElement";
import merge from "../static/merge";


/*
## Example:
EnterFrame({fps: 60}).start((event) => {
    console.log('ENTER_FRAME');
});


## Example:
EnterFrame({fps: 60, global: true}).start();
document.addEventListener(EnterFrame.ENTER_FRAME, (event) => {
    console.log('ENTER_FRAME');
});


## Example:
const animator = EnterFrame({
    fps: 30,
    global: true, // for enable document.addEventListener
});
animator.start();

function animatorAddListener(event) {
    console.log('animator:', event.detail, event.target)
}

animator.addListener(animatorAddListener, {detail: {id: 101, name: 'name'}});
animator.removeListener(animatorAddListener);

document.addEventListener(EnterFrame.ENTER_FRAME, animatorAddListener);
document.removeEventListener(EnterFrame.ENTER_FRAME, animatorAddListener);

Example:

*/

/**
 *
 * @param parameters
 * @returns {boolean|{cancel: function, computed: {elapsed: number, frameCount: number, paused: boolean, startpaly: number, fpsInterval: number, now: number, fps: boolean, callback: boolean, progress: number, then: number}, fps, readonly count: number, start: function, readonly progress: number, callback, pause: function}|number}
 * @constructor
 */

const EnterFrame = function (parameters = {}) {
    const definedParameters = [
        'fps',
        'paused',
        'looper',
        'callback',
        'global',
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
            global: false,
            detail: false,
            // event: new Event(EnterFrame.ENTER_FRAME),
            event: new CustomEvent(EnterFrame.ENTER_FRAME, {'detail': {} }),
            eventTarget: new EventTarget(),
            // eventTarget: createElement('span', {class:EnterFrame.ENTER_FRAME}),
            //new EventTarget(),//createElement('span',{class:EnterFrame.ENTER_FRAME}),
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
            this.computed.callback = callback || function computedCallback () {};
            if (this.computed.fps > 0) {
                this.computed.fpsInterval = 1000 / this.computed.fps;
                this.computed.then = Date.now();
                this.computed.startTime = this.computed.then;
            }
            this.computed.requestId = window.requestAnimationFrame(animation);
        },
        cancel: function () {
            window.cancelAnimationFrame(root.computed.requestId);
        },
        dispatch: function () {
            if (root.computed.detail) {
                this.computed.event = new CustomEvent(EnterFrame.ENTER_FRAME, {'detail': root.computed.detail });
                root.computed.detail = false;
            }
            this.computed.eventTarget.dispatchEvent(this.computed.event);
            if (this.computed.global) {
                document.dispatchEvent(root.computed.event);
            }
        },
        removeListener: function (listener, options) {
            root.computed.eventTarget.removeEventListener(EnterFrame.ENTER_FRAME, listener, options);
        },
        addListener: function (listener, options) {
            if (options && options.detail) root.computed.detail = options.detail;
            root.computed.eventTarget.addEventListener(EnterFrame.ENTER_FRAME, listener, options);
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
                    root.dispatch();
                }
            }
        } else {
            if (root.computed.callback && !root.computed.paused) {
                root.computed.frameCount++;
                root.computed.callback.call(root, root.computed.progress, root.computed.frameCount);
                root.dispatch();
            }
        }

        requestAnimationFrame(animation);
    }

    return root;
};
EnterFrame.ENTER_FRAME = 'enter_frame';
EnterFrame.instance = function (parameters = {}) {
    return new EnterFrame(merge({
        fps: 60,
        // callback: callback,
    }, parameters));
};

export default EnterFrame;

