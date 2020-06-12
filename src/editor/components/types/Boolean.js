import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
    /** object for the boolean input type. */
    prop: PropTypes.shape({
        /** It will be the name of the prop.  */
        name: PropTypes.string,
        /** It will be the value of the prop.  */
        value: PropTypes.bool,
    }),
    /** onChange handler for the input */
    onChange: PropTypes.func
};

const defaultProps = {
    prop: {},
    onChange: (value) => value,
};



const Boolean = (props) => {

    const { prop, onChange } = props;

    return (
        <input
            id={prop.name}
            name={prop.name}
            type="checkbox"
            onChange={(event) => onChange(event.target.checked)}
            checked={prop.value}
        />
    );

};


Boolean.propTypes = propTypes;
Boolean.defaultProps = defaultProps;

export default Boolean;
