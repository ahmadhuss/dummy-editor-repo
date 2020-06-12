import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropForm } from './PropForm';
import { setPropValue } from '../PropActions';


const styles = {
    editor: {
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1030,
        backgroundColor: '#f8f9fa',
        padding: '32px 0'
    },
    container: {
        width: '100%',
        paddingLeft: '32px',
        paddingRight: '32px',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1440px'
    },
    noProps: {
       fontSize: '16px',
       color: 'rgba(0,0,0,0.85)',
       marginBottom: 0
    },
};


/**
 * react-redux now includes its own `useSelector` and `useDispatch` Hooks that can be used instead
 * of connect. `useSelector` is similar to connect’s mapStateToProps. You pass it a function that
 * takes the Redux store state and returns the pieces of state you’re interested in.
 * ---
 * `useDispatch` replaces connect’s mapDispatchToProps but is lighter weight. All it does is return
 * your store’s dispatch method so you can manually dispatch actions.
 */
export const PropEditor = () => {

    // Alternative to connect’s mapStateToProps
    const props = useSelector(state => {
        return state;
    });

    // Alternative to connect’s mapDispatchToProps
    // By default, the return value of `useDispatch` is the standard Dispatch type defined by the
    // Redux core types, so no declarations are needed.
    const dispatch = useDispatch();



    const handleChange = (dataFromChild) => {
        dispatch(setPropValue(dataFromChild));

    };

    // Convert objects into array of objects
    const propsArray = Object.keys(props).map(key => {
        return props[key];
    });


    return (
        <div>
            {/* Editor */}
            <div style={styles.editor}>
                <div style={styles.container}>
                    { propsArray.length === 0
                      ? <h1 style={styles.noProps}>No Props</h1>
                      : <PropForm props={propsArray} onFieldChange={handleChange} />
                    }
                </div>
            </div>
        </div>
    );
};
