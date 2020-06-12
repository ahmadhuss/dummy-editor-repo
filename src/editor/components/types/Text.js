import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    /** object for the text input type. */
    prop: PropTypes.shape({
        /** It will be the name of the prop.  */
        name: PropTypes.string,
        /** It will be the value of the prop.  */
        value: PropTypes.string
    }),
    /** onChange handler for the input */
    onChange: PropTypes.func
};

const defaultProps = {
    prop: {},
    onChange: (value) => value,
};



const Text = (props) => {

    const { prop, onChange } = props;

   const handleChange = (event) => {
        const { value } = event.target;
        onChange(value);
    };


    return (
        <input
            id={prop.name}
            type="text"
            onChange={handleChange}
            value={prop.value}
        />
    );

};


Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
