/**
 *
 * @param callback: function
 * @param ms
 * @param thisInst
 * @return {number}
 */
const timeout = function (callback = () => {}, ms = 1000, thisInst = null) {
    thisInst = typeof thisInst === 'object' ? thisInst : {};

    return setTimeout(function () {
        callback.call(thisInst)
    }, ms);
};

const interval = function (callback = () => {}, ms = 1000, thisInst = null) {
    thisInst = typeof thisInst === 'object' ? thisInst : {};

    return setInterval(function () {
        callback.call(thisInst)
    }, ms)
};

const Timer = function (callback, delay, repeat = 1, thisInstance = null) {
    this.repeat = repeat;
    this.iterator = 0;
    this.timeout = timeout;
    this.interval = interval;
    this.timeoutInstance = null;
    this.intervalInstance = null;

    if (repeat > 1) {

    }

    return this;
};

Timer.timeout = timeout;
Timer.interval = interval;
Timer.clear = (id) => {
    clearTimeout(id);
    clearInterval(id);
};

export default Timer;