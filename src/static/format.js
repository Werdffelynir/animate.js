
import isNode from "./isNode";
import defined from "./defined";
import node2str from "./node2str";


/**
 * Formatting of string, or maybe template builder
 *
 * Examples:
 * .format("Hello {0}, your code is {1}!", ['Jade', 'Prefect']);
 * .format("Hello {name}, your code is {mean}!", {name:'Jade', mean: 'Prefect'});
 *
 * @param string    String
 * @param list  Array|Object
 * @returns string
 */
const format = function (string, list) {
    const numberRegExp = /{(\d+)}/gi;
    const stringRegExp = /{(\w+)}/gi;

    let reg;
    if (Array.isArray(list))
        reg = new RegExp(numberRegExp);
    else if (list && typeof list === 'object')
        reg = new RegExp(stringRegExp);

    return string.replace(reg, function (match, number) {
        if (defined(list[number]) && isNode(list[number]))
            list[number] = node2str(list[number]);

        return typeof list[number] !== undefined ? list[number] : match;
    });
};

export default format;
