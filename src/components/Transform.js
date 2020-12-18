import stylizer from "../static/stylizer";

const Transform = function (element, params)
{
    const root = {
        element: element,
        transform_obj: {},
        transform_arr: element.style.transform.split(')').filter((value) => value.length ),
        transform_string: '',

        update(){
            root.transform_string = '';

            Object.keys(root.transform_obj).forEach((key) => {
                root.transform_string += key + '(' + root.transform_obj[key].join(', ') + ') ';
            });

            root.element.style.transform =  root.transform_string;
            root.research();
        },

        method(method, properties, multiply = false) {
            if (typeof method === 'string') {
                properties = Array.isArray(properties) ? properties : [properties];

                if (multiply) {
                    if (root.transform_obj[method]) {
                        properties.forEach((value, i) => {
                            if(typeof value === 'string') {
                                const ext = value.match(/[a-z]+/g);
                                const num = parseInt(value) + parseInt(root.transform_obj[method][i]);
                                properties[i] = num + ext;
                            } else {
                                properties[i] = value + root.transform_obj[method][i];
                            }
                            root.transform_obj[method] = properties;
                        });
                    } else {
                        root.transform_obj[method] = properties;
                    }
                } else {
                    root.transform_obj[method] = properties;
                }

            } else {
                throw new Error('Sets parameters is not available')
            }
        },

        research(){
            root.transform_arr = element.style.transform.split(')')
                .filter((value) => value.length );

            root.transform_arr.forEach((value, i) => {
                const param = root.transform_arr[i] = root.transform_arr[i].trim()  + ')';
                const matched = param.match(/[\w\.\-]+/ig);
                root.transform_obj[matched[0]] = matched.slice(1);
            });
        },
    };

    root.research();

    if (params && typeof params === 'object') {
        Object.keys(params).forEach((key) => {
            root.method(key, params[key]);
        });
        root.update();
    }

    return root;
}

Transform.element = function (element, value){
    if (Array.isArray(value)) {
        const props = [];
        value.forEach((prop) => { props.push(prop) });
        stylizer(element, {transform: props.join(' ')});
    }
};

export default Transform;
