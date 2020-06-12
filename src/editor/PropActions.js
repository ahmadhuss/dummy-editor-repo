import * as actionTypes from './actionTypes';


// Prop related action creators
/**
 * @param prop {Object} - The prop object
 * @return {{type: {string}, data: {Object}}}
 */
export const setProp = (prop) => {
    return {
        type: actionTypes.SET_PROP,
        data: prop
    };
};


// Prop value related actions
/**
 * @param prop {Object} - The prop object
 * @return {{type: {string}, data: {Object}}}
 */
export const setPropValue = (prop) => {
    return {
        type: actionTypes.SET_PROP_VALUE,
        data: prop
    };
};
