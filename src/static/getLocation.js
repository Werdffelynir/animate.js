
const getLocation = function () {

    if (typeof location !== 'undefined'){
        return location;
    } else {
        throw new Error('location object not exist!');
    }
};

export default getLocation;
