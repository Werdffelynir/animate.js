
const isArraysIdentic = function (arr1, arr2) {
    if (arr1 === arr2)
        return true;

    else if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length)
        return false;

    for (let i = 0; i < arr1.length; ++i)
        if (arr1[i] !== arr2[i])
            return false;

    return true;
};

export default isArraysIdentic;
