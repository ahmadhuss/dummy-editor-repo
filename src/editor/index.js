import { store } from './PropStore';
import { setProp } from './PropActions';

/**
 * @param name {string} - The name of the prop
 * @param options {Object} - The prop with some additional properties
 * @return {*} - Returns the associated value of the prop
 */
const prop = (name, options)  => {
    const defaultValue = options.value;
    // Create an object and merge with additional properties like `defaultValue`
    const prop = {
        ...options,
        name,
        defaultValue,
    };
    store.dispatch(setProp(prop));
    return defaultValue;
};

/**
 * @param name {string} - The name of the prop
 * @param value {boolean} - The value of the prop
 * @return {boolean} - Returns the value of the prop
 */
export const boolean = (name, value) => {
    // Returns the value of the prop
    return prop(name, { type: 'boolean', value });
};

/**
 * @param name {string} - The name of the prop
 * @param value {string} - The value of the prop
 * @return {text} - Returns the value of the prop
 */
export const text = (name, value) => {
    // Returns the value of the prop
    return prop(name, { type: 'text', value });
};


