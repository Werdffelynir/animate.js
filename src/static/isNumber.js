
const isNumber = function (value) {
    return (typeof value === 'number' || value instanceof Number)
        && !isNaN(value)
}

export default isNumber;
