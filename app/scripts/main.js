import { createStore } from 'redux';

/** FLUX ***/

const SHOW_READMORE = 'SHOW_READMORE'
const HIDE_READMORE = 'HIDE_READMORE'

function showReadMore () {
    return {type: SHOW_READMORE}
}

function hideReadMore () {
    return {type: HIDE_READMORE}
}

const initialState = {
    readmore_visible: false
}

function App (state = initialState, action) {
    switch (action.type) {
        case SHOW_READMORE:
            return state = {readmore_visible: true};
        case HIDE_READMORE:
            return state = {readmore_visible: false};
        default:
            return state;
    }

    return state;
}

let store = createStore(App, {readmore_visible: false});

/*** View ***/

// Initialize if Javascript enabled
let $read_more_control = document.querySelector('.read_more_control');
$read_more_control.style.display = 'block';

// Respond

console.log(store.getState())

let $read_more_text = document.querySelector('.read_more_text');

store.subscribe(() => {
    if (store.getState().readmore_visible) {
        $read_more_text.style.display = 'block';
    } else {
        $read_more_text.style.display = 'none';
    }
})

store.dispatch(hideReadMore());

console.log('ready!');
