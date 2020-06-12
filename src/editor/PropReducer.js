import * as actionTypes from './actionTypes';


const INITIAL_STATE = {};
/**
 * Tip to remember:
 * In Reducer the state didn't merge like setState it just overwrites with new data like useState Hook.
 * So we have to keep in mind that we have to copy all the old state and merge with the new one.
 */
export const propReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            // Prop Actions
            case (actionTypes.SET_PROP):
                const { data } = action;
                return { ...state, [data.name]: {...data} };

            // Prop Value Actions
            case (actionTypes.SET_PROP_VALUE):
                return { ...state, [action.data.name]: { ...state[action.data.name], value: action.data.value  } };
            default:
                return state;
        }
};
