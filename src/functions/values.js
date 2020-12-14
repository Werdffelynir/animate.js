
const values = function (obj) {
    const keys = Object.keys(obj);
    const length = keys.length;
    const values = new Array(length);

    for (let i = 0; i < length; i++) {
        values[i] = obj[keys[i]];
    }

    return values;
};

export default values;
