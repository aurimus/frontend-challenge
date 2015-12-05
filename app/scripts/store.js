/** FLUX ***/
import { createStore } from 'redux';

// Handler / Reducer

export const initialState = {
    readmore_visible: false
}

export function App (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_READMORE':
            return state = {readmore_visible: !(state.readmore_visible)};
        default:
            return state;
    }

    return state;
}

export const store = createStore(App);