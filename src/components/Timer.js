
const Timer = function (callback, delay, repeat, thisInstance) {
    this.repeat = repeat;
    this.iterator = 0;
};


Timer.setTimeout = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = typeof thisInst === 'object' ? thisInst : {};
        return setTimeout(function () {
            callback.call(thisInst)
        }, ms)
    }
};
Timer.setInterval = function (callback, ms, thisInst) {
    if (typeof callback === 'function' && !isNaN(ms) && ms > 0) {
        thisInst = typeof thisInst === 'object' ? thisInst : {};
        return setInterval(function () {
            callback.call(thisInst)
        }, ms)
    }
};
Timer.clearTimeout = function (id) {
    clearTimeout(id)
};
Timer.clearInterval = function (id) {
    clearInterval(id)
};

export default Timer;