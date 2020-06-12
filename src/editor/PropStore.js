import { createStore} from 'redux';
import { propReducer} from './PropReducer';



const REDUX_DEV_TOOL = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


export const store = createStore(propReducer, REDUX_DEV_TOOL);
