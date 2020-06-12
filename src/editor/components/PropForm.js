import React from 'react';
import PropTypes from 'prop-types';
import TypeMap from './types';

const propTypes = {
    props: PropTypes.arrayOf(PropTypes.object).isRequired,
    onFieldChange: PropTypes.func.isRequired
};

// InvalidType component
const InvalidType = () => (<span>Invalid Type</span>);

export const PropForm = (properties) => {

    /**
     * @param name {string} - Name of the prop
     * @param type {string} - InputType of the prop
     * @return {Function} - Returns a function
     */
    const makeChangeHandler = (name, type) => {
        const { onFieldChange } = properties;
        return (value = '') => {
            // `change` will be an object and value will be from the onChange
            const change = {name, type, value};
            onFieldChange(change);
        };
    };
    // Take props from the component properties
    const { props } = properties;

    return (
        <form>
            {
                props.map(prop => {
                    const changeHandler = makeChangeHandler(prop.name, prop.type);
                    // Returns a component based on the `type`
                    // if the `type` is boolean then
                    // return Boolean() component
                    let InputType = TypeMap[prop.type] || InvalidType;
                    return (
                        <div style={{marginBottom: '16px'}} key={prop.name}>
                             <label htmlFor={prop.name}>{`${prop.name}`}</label>
                             <InputType prop={prop} onChange={changeHandler}/>
                        </div>
                      );
                })
            }
        </form>
    );
};

PropForm.propTypes = propTypes;
