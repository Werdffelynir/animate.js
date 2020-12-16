/*
const RxState = Roxy({
    title: '',
    body: '',
});

RxState.event((key, values)=>{
    if (key === '') {}
    inject('#' + key, values);
});

RxState.proxy.title = 'First value';
RxState.proxy.body = 'Test body text';

Timer.timeout(() => {
    RxState.dispatch('title', 'Hello friend');
    RxState.dispatch('body', 'Do you happy now?');
}, 2000);

*/

/**
 * @param payload
 * @returns {{proxy: *, set(*=, *=): *, get(*): *, action(*=, *=): *, fill(*=, *=): *}|Roxy|{}|null|boolean}
 * @constructor
 */
import copy from "../static/copy";

const Roxy = function (payload)
{
    const propertiesChangeEventCallbacks = {
        default: null,
    };

    const proxy = new Proxy(payload, {
        get(obj, prop) {
            return prop in obj ? obj[prop] : null;
        },
        set(obj, prop, value) {

            obj[prop] = value;

            if (propertiesChangeEventCallbacks[prop] && typeof propertiesChangeEventCallbacks[prop] === "function")
                propertiesChangeEventCallbacks[prop].call({}, prop, value, copy(proxy));

            if (typeof propertiesChangeEventCallbacks.default === "function")
                propertiesChangeEventCallbacks.default.call({}, prop, value, copy(proxy));

            return true;
        }
    });

    return {

        /**
         * older name: see|set?
         * @param key
         * @param payload
         * @returns {*}
         */
        dispatch(key, payload) {
            let result;

            if (typeof key === "function" && !payload) {
                result = key.call({}, proxy);
                if (result)
                    this.fill(result)

            } else if (typeof payload === "function") {
                result = payload.call({}, proxy[key]);
                if (result)
                    proxy[key] = result;

            } else
                proxy[key] = payload;

            return this;
        },

        /**
         * action()
         * @deprecated
         * @param key
         * @param callback
         * @returns {*}
         */
        event(key, callback) {
            return this.observe(key, callback);
        },

        /**
         * Event change properties of source object
         * @param key
         * @param callback
         * @returns {*}
         */
        observe(key, callback) {
            if (typeof key === "function" && !callback) {
                propertiesChangeEventCallbacks.default = key;
            } else
                propertiesChangeEventCallbacks[key] = typeof callback === "function"
                    ? callback
                    : null;

            return this;
        },

        get(key) {
            return key ? proxy[key] : copy(proxy);
        },

        fill(payload, to) {
            Object.keys(payload).forEach((key) => {
                if (to) {
                    if (!proxy[to])
                        proxy[to] = {};
                    proxy[to][key] = payload[key]
                } else {
                    proxy[key] = payload[key]
                }
            });

            return this;
        },

        get proxy() {
            return proxy;
        },

        getProxy() {
            return proxy;
        },
    };
};


export default Roxy;
