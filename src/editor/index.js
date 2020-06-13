import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProp } from './PropActions';

/**
 * Construct and return the object
 * @param name {string} - The name of the prop
 * @param value {boolean} - The value of the prop
 * @return {{defaultValue: boolean, name: string, type: string, value: boolean}}
 */
const boolean = (name, value) => {
    return { type: 'boolean', name, value, defaultValue: value};
};

/**
 * Construct and return the object
 * @param name {string} - The name of the prop
 * @param value {string} - The value of the prop
 * @return {{defaultValue: string, name: string, type: string, value: string}}
 */
const text = (name, value) => {
   return { type: 'text', name, value, defaultValue: value};
};

/**
 * A custom react hook, and only inside your block i.e. React `HOC` component
 * @param type {string} - The type for the prop
 * @param name {string} - The name of the prop
 * @param defaultValue {*} - The defaultValue of the prop
 * @return value {*} - Returns the associated value of the prop
 */
export const useProp = (type, name, defaultValue) => {
    // It will return the dispatch function from the hook
    const dispatch = useDispatch();
    // Mount only once and dispatch action to the store state
    useEffect(() => {
        if (type === 'text') {
            dispatch(setProp(text(name, defaultValue)));
        } else if (type === 'boolean') {
            dispatch(setProp(boolean(name, defaultValue)));
        }
    },[dispatch, type, name, defaultValue]);
    //  When an action is dispatched, useSelector() will do a reference comparison of the
    //  previous selector result value and the current result value
    const value = useSelector(state => {
        return state[name] ? state[name].value : '';
        });
    return value;
};
