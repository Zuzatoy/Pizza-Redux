
import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
    ingredients: {
        bacon: false,
        cheese: false,
        mushroom: false,
        onion: false,
        tomato: false,
        secret: false    
    },
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export { store };
